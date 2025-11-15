# 💰 Pricing Reference - Don Rogelio Shop

## Cigar Prices (USD & Dominican Pesos)

| Cigar Type | Single (USD) | Peso Equivalent | Volume Discounts |
|------------|--------------|-----------------|------------------|
| **Robusto** | $10.00 | 600 DOP | 3-pack: $27 (10% off) |
| **Double Toro** | $15.00 | 950 DOP | 10-pack: $120 (20% off) |
| **Lancero** | $12.00 | 750 DOP | Box (20): $180 (25% off) |
| **Perfecto** | $10.00 | 600 DOP | Same discounts apply |
| **Salamon** | $12.50 | 800 DOP | Same discounts apply |
| **Toro** | $11.00 | 700 DOP | Same discounts apply |
| **Torpedo** | $11.00 | 700 DOP | Same discounts apply |
| **Taco** | $9.00 | 575 DOP | Same discounts apply |

## Volume Discount Structure

### 3-Pack (10% discount)
- Formula: `Single Price × 3 × 0.90`
- Example (Robusto): $10 × 3 × 0.90 = **$27**

### 10-Pack (20% discount)
- Formula: `Single Price × 10 × 0.80`
- Example (Robusto): $10 × 10 × 0.80 = **$80**

### Full Box - 20 cigars (25% discount)
- Formula: `Single Price × 20 × 0.75`
- Example (Robusto): $10 × 20 × 0.75 = **$150**

## Accessories Prices

| Item | Price (USD) | Category |
|------|-------------|----------|
| V-Cut Cigar Cutter | $25 | Cutter |
| Guillotine Cutter | $30 | Cutter |
| Punch Cutter | $18 | Cutter |
| Triple Flame Torch Lighter | $35 | Lighter |
| Soft Flame Lighter | $28 | Lighter |
| Table Top Lighter | $45 | Lighter |

## Example Pricing Calculations

### Example 1: Robusto
- Single: **$10.00**
- 3-Pack: $10 × 3 × 0.9 = **$27.00** (save $3)
- 10-Pack: $10 × 10 × 0.8 = **$80.00** (save $20)
- Box (20): $10 × 20 × 0.75 = **$150.00** (save $50)

### Example 2: Double Toro
- Single: **$15.00**
- 3-Pack: $15 × 3 × 0.9 = **$40.50** (save $4.50)
- 10-Pack: $15 × 10 × 0.8 = **$120.00** (save $30)
- Box (20): $15 × 20 × 0.75 = **$225.00** (save $75)

### Example 3: Taco (Most Affordable)
- Single: **$9.00**
- 3-Pack: $9 × 3 × 0.9 = **$24.30** (save $2.70)
- 10-Pack: $9 × 10 × 0.8 = **$72.00** (save $18)
- Box (20): $9 × 20 × 0.75 = **$135.00** (save $45)

## Mixed Cart Example

Customer orders:
- 1 × Robusto Single: $10.00
- 1 × Double Toro 3-Pack: $40.50
- 1 × V-Cut Cutter: $25.00
- 1 × Torch Lighter: $35.00

**Total: $110.50**

## Currency Notes

- **Primary Currency:** USD (United States Dollar)
- **Stripe Processing:** All payments in USD
- **Peso Conversion:** For reference only (approximate)
- **Exchange Rate:** Based on ~60 DOP = 1 USD

## To Update Prices

Edit: `src/app/shop/page.tsx` (line 35)

```typescript
const cigarPrices: { [key: string]: number } = {
  robusto: 10,      // Change this
  doubletoro: 15,   // Change this
  // etc...
}
```

Discounts are automatically calculated based on single price.

## Customer Display

Prices are displayed as:
- Shop page: `$10` (USD symbol)
- Cart: `$10.00` (with cents)
- Stripe checkout: `$10.00 USD`

---

**Last Updated:** November 15, 2025  
**Currency:** USD  
**All prices include volume discounts where applicable**

