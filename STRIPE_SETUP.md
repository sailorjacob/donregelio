# Stripe Integration Setup Guide

## Step 1: Create .env.local file

Create a file named `.env.local` in the root of your project with these keys:

```env
# Stripe Keys
# Get these from https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Stripe Webhook Secret (for production webhooks)
# Get this from https://dashboard.stripe.com/webhooks
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 2: Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Complete your account setup
3. Go to **Developers** → **API Keys**
4. Copy your **Publishable key** (starts with `pk_test_`)
5. Copy your **Secret key** (starts with `sk_test_`)
6. Replace the placeholder values in `.env.local`

## Step 3: Configure Products in Stripe (Optional but Recommended)

You can either:

### Option A: Use Stripe Products (Recommended for production)
1. Go to **Products** in Stripe Dashboard
2. Create products for each cigar type and quantity
3. Copy the Price IDs and add them to the product configuration

### Option B: Use dynamic pricing (Current setup)
- Prices are defined in the code
- Stripe creates one-time payment sessions
- Easier for development/testing

## Step 4: Test the Integration

1. Restart your dev server: `npm run dev`
2. Go to the shop page
3. Select a product and quantity
4. Click "Checkout"
5. Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC
   - Any ZIP code

## Step 5: Webhook Setup (For production)

1. Go to **Developers** → **Webhooks** in Stripe Dashboard
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`
4. Copy the webhook secret and add to `.env.local`

## Pricing Structure

Current prices are set in the code:
- Single Cigar: $15
- 3 Pack: $40
- 10 Pack: $120
- Full Box: $200

You can modify these in `src/app/shop/page.tsx` or move to environment variables.

## Need Help?

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Test Cards](https://stripe.com/docs/testing)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

