# 💳 Stripe Checkout Flow

## Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         YOUR SHOP PAGE                           │
│                     (http://localhost:3000/shop)                 │
│                                                                   │
│  1. Customer selects:                                            │
│     • Product: Robusto                                           │
│     • Quantity: 3 Pack ($40)                                     │
│                                                                   │
│  2. Clicks "Checkout" button                                     │
│     [🛒 Checkout] ← Button with loading state                   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      YOUR API ENDPOINT                           │
│                    /api/checkout/route.ts                        │
│                                                                   │
│  3. Creates Stripe Checkout Session:                            │
│     POST /api/checkout                                           │
│     {                                                            │
│       productName: "Robusto",                                    │
│       quantityType: "3 Pack",                                    │
│       price: 40                                                  │
│     }                                                            │
│                                                                   │
│  4. Stripe returns checkout URL                                  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    STRIPE CHECKOUT PAGE                          │
│              (checkout.stripe.com/c/pay/...)                     │
│                                                                   │
│  5. Customer enters payment info on Stripe's secure page:       │
│     • Card Number: 4242 4242 4242 4242                          │
│     • Expiry: 12/26                                             │
│     • CVC: 123                                                  │
│     • Email: customer@example.com                               │
│                                                                   │
│  6. Stripe processes payment                                     │
│     ✅ Payment succeeds                                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ├──────────────────┐
                             ▼                  ▼
      ┌──────────────────────────┐  ┌──────────────────────────┐
      │   YOUR WEBHOOK ENDPOINT  │  │   YOUR SUCCESS PAGE      │
      │  /api/webhooks/stripe    │  │  /checkout/success       │
      │                          │  │                          │
      │ 7. Stripe sends webhook: │  │ 8. Customer sees:        │
      │    • Order completed     │  │    • ✅ Order Confirmed │
      │    • Payment succeeded   │  │    • Order reference    │
      │                          │  │    • Next steps         │
      │ 9. You can:              │  │    • Track order        │
      │    • Send email          │  │                          │
      │    • Update database     │  │ 10. Stripe emails:       │
      │    • Start fulfillment   │  │     • Receipt           │
      │    • Update inventory    │  │     • Order details     │
      └──────────────────────────┘  └──────────────────────────┘
```

## Step-by-Step Explanation

### Step 1-2: Shop Page (Your Frontend)
**Location:** `src/app/shop/page.tsx`

Customer browses your beautiful cigar shop:
- Sees product images
- Reads descriptions  
- Selects quantity (Single, 3 Pack, 10 Pack, Box)
- Sees price update dynamically
- Clicks "Checkout" button

**What happens in code:**
```typescript
const handleCheckout = async () => {
  setIsCheckingOut(true) // Show loading spinner
  
  const response = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify({
      productName: 'Robusto',
      quantityType: '3 Pack',
      price: 40
    })
  })
  
  const data = await response.json()
  window.location.assign(data.url) // Redirect to Stripe
}
```

### Step 3-4: Checkout API (Your Backend)
**Location:** `src/app/api/checkout/route.ts`

Your server creates a Stripe Checkout Session:

**What happens:**
1. Receives product details from frontend
2. Validates the data
3. Calls Stripe API to create checkout session
4. Stripe returns a unique checkout URL
5. Your API sends URL back to frontend

**What happens in code:**
```typescript
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Robusto - 3 Pack',
      },
      unit_amount: 4000, // $40.00 in cents
    },
    quantity: 1,
  }],
  mode: 'payment',
  success_url: 'http://localhost:3000/checkout/success',
  cancel_url: 'http://localhost:3000/shop',
})

return { url: session.url }
```

### Step 5-6: Stripe Checkout (Stripe's Hosted Page)
**Stripe handles everything:**
- ✅ PCI compliant payment form
- ✅ Card validation
- ✅ Fraud detection
- ✅ 3D Secure authentication
- ✅ Payment processing
- ✅ Multiple payment methods
- ✅ Mobile optimized
- ✅ Multiple languages

**You don't need to:**
- ❌ Handle sensitive card data
- ❌ Worry about PCI compliance
- ❌ Build payment forms
- ❌ Implement fraud detection

### Step 7: Webhook (Your Backend)
**Location:** `src/app/api/webhooks/stripe/route.ts`

After payment succeeds, Stripe sends a webhook to notify you:

**What you can do here:**
```typescript
case 'checkout.session.completed':
  const session = event.data.object
  
  // Your custom logic:
  // - Send confirmation email
  // - Save order to database
  // - Update inventory
  // - Trigger fulfillment
  // - Notify warehouse
  // - Send to shipping provider
  break
```

**Why webhooks?**
- Customer might close browser before redirect
- Network issues might interrupt redirect
- Webhooks are reliable and retried by Stripe
- You get notified of all payment events

### Step 8-10: Success Page (Your Frontend)
**Location:** `src/app/checkout/success/page.tsx`

Beautiful confirmation page shows:
- ✅ Success animation
- Order reference number
- What happens next
- Customer support info

Stripe automatically:
- Sends receipt email to customer
- Stores payment in your dashboard
- Provides downloadable receipts

## Security & Reliability

### What's Secure:
- ✅ Card data never touches your server
- ✅ HTTPS required for Stripe checkout
- ✅ Stripe's fraud detection
- ✅ Environment variables for API keys
- ✅ Server-side session creation

### What's Reliable:
- ✅ Webhooks are retried on failure
- ✅ Idempotency keys prevent duplicates
- ✅ Session IDs are unique and secure
- ✅ Built-in error handling
- ✅ Loading states prevent double-clicks

## Testing the Flow

### Test Cards:

**Successful Payment:**
```
Card: 4242 4242 4242 4242
Exp:  12/26
CVC:  123
ZIP:  12345
```

**Declined Payment:**
```
Card: 4000 0000 0000 0002
```

**Requires Authentication (3D Secure):**
```
Card: 4000 0025 0000 3155
```

More: https://stripe.com/docs/testing

## Monitoring

### Check Payment Status:

1. **Stripe Dashboard:**
   - Payments → All payments
   - See real-time payment status
   - View customer details
   - Issue refunds

2. **Your Logs:**
   - Server console shows checkout requests
   - Webhook events logged
   - Error messages displayed

3. **Browser Console:**
   - Network tab shows API calls
   - See redirect to Stripe
   - Debug any frontend issues

## Common Issues & Solutions

### Issue: "Stripe is not configured"
**Cause:** Missing or incorrect API keys  
**Solution:** Check `.env.local` has correct keys

### Issue: Checkout button does nothing
**Cause:** JavaScript error or API error  
**Solution:** Check browser console (F12)

### Issue: Payment succeeds but no webhook
**Cause:** Webhooks not set up yet  
**Solution:** Normal for testing! Webhooks needed for production

### Issue: Wrong price charged
**Cause:** Price in wrong format  
**Solution:** Prices must be in cents (multiply by 100)

## Next Steps

1. ✅ Test with test cards
2. ✅ Customize success page
3. ✅ Add email notifications (webhook)
4. ✅ Add order tracking
5. ✅ Test error scenarios
6. ✅ Set up production webhooks
7. ✅ Go live with real keys!

## Resources

- [Stripe Checkout Docs](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Test Cards](https://stripe.com/docs/testing)
- [Dashboard](https://dashboard.stripe.com)

---

**Questions?** Check the other guides:
- `SETUP_INSTRUCTIONS.md` - Quick start
- `STRIPE_INTEGRATION_COMPLETE.md` - Detailed setup
- `STRIPE_PRODUCTS_GUIDE.md` - Advanced features

