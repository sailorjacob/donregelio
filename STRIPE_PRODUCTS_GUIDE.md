# Stripe Products Setup (Optional Advanced Feature)

## Overview

There are two ways to handle products with Stripe:

### Current Implementation: Dynamic Pricing ✅
- **Status**: Already implemented
- **How it works**: Prices are defined in your code, Stripe creates one-time checkout sessions
- **Best for**: Getting started quickly, testing, simple stores
- **Pros**: Easy setup, prices in your codebase, no Stripe Dashboard management
- **Cons**: Not ideal for complex inventory or subscriptions

### Alternative: Stripe Products (Advanced)
- **How it works**: Create products in Stripe Dashboard, reference them by Price ID
- **Best for**: Complex inventory, subscriptions, multiple variants
- **Pros**: Better reporting, product analytics, advanced features
- **Cons**: More setup, requires Stripe Dashboard management

## When to Switch to Stripe Products

Consider switching when you need:
- Multiple product variants (wrapper types: Habano, Maduro, Connecticut)
- Inventory tracking
- Subscription boxes
- Detailed sales analytics per product
- Product catalogs across multiple platforms

## How to Set Up Stripe Products

### Step 1: Create Products in Stripe Dashboard

1. Go to **Products** in your Stripe Dashboard
2. Click **Add Product**
3. For each cigar type and quantity combination:

**Example for Robusto Single:**
- Name: `Robusto - Single Cigar`
- Description: `Premium handcrafted Robusto cigar`
- Price: `$15.00`
- Currency: `USD`
- One-time payment
- Click **Save product**

4. After saving, copy the **Price ID** (looks like `price_1234567890abcdef`)

### Step 2: Store Price IDs

Create a file: `/src/lib/stripe-products.ts`

```typescript
export const stripeProducts = {
  robusto: {
    single: 'price_1234...', // Your actual price ID
    '3pack': 'price_5678...',
    '10pack': 'price_9012...',
    box: 'price_3456...',
  },
  doubletoro: {
    single: 'price_7890...',
    '3pack': 'price_1234...',
    // ... etc
  },
  // Add all your products
}

export function getPriceId(productId: string, quantityType: string): string {
  return stripeProducts[productId]?.[quantityType] || ''
}
```

### Step 3: Update Checkout API

Modify `/src/app/api/checkout/route.ts`:

```typescript
import { getPriceId } from '@/lib/stripe-products'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { productId, quantityType } = body

    const priceId = getPriceId(productId, quantityType)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, // Use Stripe price ID instead
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/shop`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}
```

### Step 4: Update Shop Page

Modify the checkout handler to send product IDs:

```typescript
const handleCheckout = async () => {
  // ... existing code ...

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId: selectedProduct,
      quantityType: selectedQuantity,
    }),
  })

  // ... rest of the code
}
```

## Product Variants Example

If you want to offer wrapper types (Habano, Maduro, Connecticut):

### Add to Product Interface

```typescript
interface Product {
  id: string
  name: string
  // ... existing fields
  wrappers: {
    habano: { priceId: string, name: string }
    maduro: { priceId: string, name: string }
    connecticut: { priceId: string, name: string }
  }
}
```

### Create in Stripe

For each wrapper type, create a separate product:
- "Robusto Single - Habano Wrapper"
- "Robusto Single - Maduro Wrapper"
- "Robusto Single - Connecticut Wrapper"

### Update UI

Add wrapper selection buttons in your shop page between quantity selection and checkout.

## Benefits of This Approach

1. **Better Analytics**: See which specific products sell best
2. **Easier Price Changes**: Update prices in Stripe Dashboard
3. **Inventory Management**: Track stock levels
4. **Multiple Currencies**: Different prices for different regions
5. **Promotions**: Create coupons and discounts easily
6. **Tax Calculation**: Automatic tax calculation with Stripe Tax

## When NOT to Use This

- You're just starting and want to test quickly ✅ (current setup is better)
- You have < 10 product variants
- You update prices frequently in code
- You don't need detailed product analytics

## Migration Path

1. Start with current implementation (dynamic pricing) ✅
2. Test and launch your store
3. When you need more features, create products in Stripe
4. Gradually migrate by updating the API route
5. Both methods can work simultaneously

## Resources

- [Stripe Products Guide](https://stripe.com/docs/products-prices/overview)
- [Creating Products](https://stripe.com/docs/api/products/create)
- [Managing Prices](https://stripe.com/docs/api/prices)

---

**Current Status**: Your store uses dynamic pricing (simpler approach). This is perfect for getting started! Consider Stripe Products later when you need advanced features.

