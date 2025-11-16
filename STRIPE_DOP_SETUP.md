# 🇩🇴 Enable Dominican Peso (DOP) in Stripe

## ⚠️ Important: DOP Must Be Enabled in Stripe

If you're getting a 500 error when checking out with Dominican Pesos, you need to enable DOP in your Stripe account.

---

## 📝 How to Enable DOP in Stripe

### Step 1: Log into Stripe Dashboard

Go to: https://dashboard.stripe.com

### Step 2: Enable Multi-Currency

1. Click **Settings** (⚙️ icon in top right)
2. Go to **Payment methods**
3. Scroll down to **Customer payment currencies**
4. Click **Add currencies**

### Step 3: Add Dominican Peso (DOP)

1. Search for "Dominican Peso" or "DOP"
2. Check the box next to **DOP - Dominican Peso**
3. Click **Add currencies** button

### Step 4: Verify DOP is Enabled

1. Go back to **Settings** → **Payment methods**
2. Under **Customer payment currencies**, you should see:
   - USD (United States Dollar) ✓
   - DOP (Dominican Peso) ✓

---

## 🧪 Testing

After enabling DOP:

1. **Clear your cart**:
   - Open browser console (F12)
   - Type: `localStorage.removeItem('donregelio_cart')`
   - Press Enter

2. **Add items in Spanish**:
   - Click **ES 🇩🇴** in the language switcher
   - Add items to cart
   - Prices should show as **RD$600**, etc.

3. **Try checkout**:
   - Should now work without 500 error
   - Stripe will charge in DOP

---

## 💡 Why This Is Needed

Stripe doesn't enable all currencies by default. You must explicitly enable each currency you want to accept payments in.

**Without DOP enabled:**
- ❌ Checkout fails with 500 error
- ❌ Can't create payment sessions in DOP

**With DOP enabled:**
- ✅ Checkout works perfectly
- ✅ Dominican customers charged in DOP
- ✅ US customers charged in USD

---

## 🔍 Stripe Account Requirements

### For Test Mode (Development):
- DOP is available in test mode
- No additional requirements

### For Live Mode (Production):
- DOP must be enabled separately in live mode
- Repeat the steps above while in **Live mode**
- Toggle between Test/Live mode in top-left of Stripe Dashboard

---

## 🌍 Supported Currencies

Your site currently supports:
- **USD** - US Dollar (default)
- **DOP** - Dominican Peso (must be enabled)

To add more currencies:
1. Enable them in Stripe Dashboard
2. Add pricing to `cigarPricesXXX` objects in `/src/app/shop/page.tsx`
3. Update currency logic in `LanguageContext`

---

## 📊 Currency Conversion Rates

**Note:** Your prices are **flat rates**, NOT automatically converted:
- You set: Robusto = $10 USD
- You set: Robusto = RD$600 DOP
- No automatic conversion happens

Stripe will charge exactly what you specify in each currency.

---

## 🆘 Still Having Issues?

### Check Stripe Logs:
1. Stripe Dashboard → **Developers** → **Logs**
2. Look for recent errors
3. Check the error message

### Common Errors:

**"Currency not supported"**
→ DOP not enabled (follow steps above)

**"Amount must be at least..."**
→ Price too low (DOP minimum is usually 50 centavos)

**"Invalid currency"**
→ Typo in currency code (should be lowercase 'dop')

---

## ✅ Verification Checklist

Before going live with DOP:
- [ ] DOP enabled in **Test mode**
- [ ] DOP enabled in **Live mode**
- [ ] Test purchase in DOP completed successfully
- [ ] Prices display correctly (RD$ prefix)
- [ ] Checkout shows only DOP (not dual currency)
- [ ] Receipt emails show correct currency

---

## 🎉 You're All Set!

Once DOP is enabled in Stripe, your Dominican customers can pay in their local currency with no conversion headaches!

