# 💱 Multi-Currency Support - USD & Dominican Pesos

## ✅ What's New

Your site now automatically shows prices in the customer's preferred currency based on language selection!

- **English** → Prices in **USD** ($)
- **Español** → Prices in **Dominican Pesos** (RD$)

---

## 🎯 How It Works

### Language Selection = Currency Selection

When users switch languages in the top-right corner:
- 🇺🇸 **English** → All prices display in USD, Stripe checkout in USD
- 🇩🇴 **Español** → All prices display in DOP, Stripe checkout in DOP

### Price Display

**English Mode:**
```
Robusto (Single): $10.00
Robusto (3 Pack): $30.00
```

**Spanish Mode:**
```
Robusto (Individual): RD$600
Robusto (Paquete de 3): RD$1,800
```

---

## 💰 Pricing Structure (Flat Rates)

| Cigar Type   | USD (Single) | DOP (Single) | USD (Box/20) | DOP (Box/20) |
|--------------|--------------|--------------|--------------|--------------|
| Robusto      | $10.00       | RD$600       | $200.00      | RD$12,000    |
| Doubletoro   | $15.00       | RD$950       | $300.00      | RD$19,000    |
| Lancero      | $12.00       | RD$750       | $240.00      | RD$15,000    |
| Perfecto     | $10.00       | RD$600       | $200.00      | RD$12,000    |
| Salamon      | $12.50       | RD$800       | $250.00      | RD$16,000    |
| Toro         | $11.00       | RD$700       | $220.00      | RD$14,000    |
| Torpedo      | $11.00       | RD$700       | $220.00      | RD$14,000    |
| Taco         | $9.00        | RD$575       | $180.00      | RD$11,500    |

**Note:** No volume discounts - flat rate pricing (price × quantity)

---

## 🛒 Shopping Cart

The cart displays prices in the currency of the items added:

- Items added in English mode → Cart shows USD
- Items added in Spanish mode → Cart shows DOP
- Cart remembers currency with items
- Total displayed with correct currency symbol

**Example Cart (English):**
```
Robusto (Single) × 1     $10.00
Toro (3 Pack) × 1        $33.00
-----------------------------
Total:                   $43.00
```

**Example Cart (Español):**
```
Robusto (Individual) × 1     RD$600
Toro (Paquete de 3) × 1      RD$2,100
-----------------------------
Total:                       RD$2,700
```

---

## 💳 Stripe Checkout

Stripe automatically processes payments in the correct currency:

- **USD cart** → Stripe charges in USD
- **DOP cart** → Stripe charges in Dominican Pesos

The embedded checkout form will show:
- Card payment in selected currency
- Currency conversion (if customer's card is different currency)
- Final amount in the currency you selected

---

## 🔧 Technical Implementation

### Files Modified:

1. **`/contexts/LanguageContext.tsx`**
   - Added `Currency` type (`"USD" | "DOP"`)
   - Added `currency` and `getCurrency()` to context
   - Automatically maps: `en` → `USD`, `es` → `DOP`

2. **`/contexts/CartContext.tsx`**
   - Added `currency` field to `CartItem` interface
   - Cart items now store their currency

3. **`/app/shop/page.tsx`**
   - Dual pricing structures: `cigarPricesUSD` and `cigarPricesDOP`
   - `formatPrice()` function formats based on currency
   - Prices update when language changes
   - Currency passed to cart when adding items

4. **`/components/Cart.tsx`**
   - Displays prices with correct currency format
   - `formatPrice()` helper for USD/DOP formatting

5. **`/app/api/checkout-session/route.ts`**
   - Reads currency from cart items
   - Creates Stripe session with correct currency
   - Supports both `usd` and `dop`

6. **`/app/accessories/page.tsx`**
   - Also includes currency when adding to cart

---

## 🌍 Currency Formatting

### USD Format:
- Symbol: `$`
- Decimals: 2 places
- Example: `$12.50`

### DOP Format:
- Symbol: `RD$`
- No decimals (whole numbers)
- Thousands separator
- Example: `RD$1,800`

---

## 🧪 Testing

###  Test USD Checkout:

1. Click language selector → Select **English** (🇺🇸)
2. Go to shop page
3. Notice prices in USD (e.g., "$10.00")
4. Add item to cart
5. View cart → Prices in USD
6. Checkout → Stripe shows USD

### Test DOP Checkout:

1. Click language selector → Select **Español** (🇩🇴)
2. Go to shop page
3. Notice prices in DOP (e.g., "RD$600")
4. Add item to cart
5. View cart → Prices in DOP
6. Checkout → Stripe shows DOP

### Test Card:
```
Card: 4242 4242 4242 4242
Exp: 12/34
CVC: 123
ZIP: 12345
```

---

## 📊 Stripe Dashboard

In your Stripe Dashboard, you'll see:
- Payments in USD with `$` symbol
- Payments in DOP with `DOP` or `RD$` label
- Separate transaction entries for each currency

---

## ⚡ Exchange Rate

The prices are **fixed** - NOT automatically converted:
- USD prices set by you
- DOP prices set by you
- No automatic exchange rate calculation

**Current Rate Used:**
- Approximately 1 USD = 60 DOP (as per your pricing)
- Example: $10 USD = RD$600 DOP

If exchange rates change significantly, you can update prices in:
```typescript
// /app/shop/page.tsx

const cigarPricesUSD = {
  robusto: 10,      // Update USD price
  // ... other cigars
}

const cigarPricesDOP = {
  robusto: 600,     // Update DOP price
  // ... other cigars
}
```

---

## 🎨 User Experience

### Language Switcher
Located in the top-right corner of every page.

**Clicking it:**
1. Switches language immediately
2. Updates all prices on the page
3. Saves preference to localStorage
4. Affects future cart additions

### Consistent Experience
- Once a language is selected, it persists across pages
- Cart maintains currency of items
- Checkout matches cart currency
- Email confirmations show correct currency

---

## 🔮 Future Enhancements

### Possible additions:
- Display both currencies side-by-side
- Currency switcher independent of language
- Automatic exchange rate updates (via API)
- Show converted amount in checkout
- Multi-currency cart support
- PayPal in local currency

---

## ❓ FAQ

**Q: Can I mix USD and DOP items in one cart?**  
A: Currently, all items in a cart use the same currency (the currency when added). Clear cart to switch currencies.

**Q: What if customer's card is in a different currency?**  
A: Stripe handles the conversion automatically. Customer pays in their card's currency, you receive in the selected currency.

**Q: Can I change the exchange rate?**  
A: Yes! Update the prices in `cigarPricesUSD` and `cigarPricesDOP` in `/app/shop/page.tsx`.

**Q: Does Stripe charge extra for DOP?**  
A: Stripe's fees are the same, but check their pricing for international cards and currency conversion fees.

**Q: What happens to old cart items after currency change?**  
A: They keep their original currency. Clear cart to start fresh with new currency.

---

## ✅ Benefits

✅ Better UX for Dominican customers  
✅ No manual currency calculation needed  
✅ Stripe handles all conversions  
✅ Transparent pricing in local currency  
✅ Automatic based on language preference  
✅ Professional multi-market setup  

---

🎉 **Your site is now ready for both US and Dominican Republic markets!**

