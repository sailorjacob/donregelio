# 📤 Git Push Guide - Don Rogelio Shop

## ✅ What's Been Updated

### Pricing - Accurate per Cigar Type:
- Robusto: $10 (600 DOP)
- Double Toro: $15 (950 DOP)
- Lancero: $12 (750 DOP)
- Perfecto: $10 (600 DOP)
- Salamon: $12.50 (800 DOP)
- Toro: $11 (700 DOP)
- Torpedo: $11 (700 DOP)
- Taco: $9 (575 DOP)

### Features:
- ✅ Each cigar has its own accurate price
- ✅ Volume discounts: 10% (3-pack), 20% (10-pack), 25% (box)
- ✅ Add to cart works for all products
- ✅ Stripe checkout ready
- ✅ New Accessories page with cutters & lighters

---

## 🚀 Push to GitHub - Step by Step

### Option 1: First Time Push (New Repository)

If you haven't pushed to GitHub yet:

```bash
# Navigate to project
cd /Users/jacob/Downloads/donregelio/shop-project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create commit
git commit -m "Complete ecommerce system with Stripe, cart, and accurate pricing"

# Create repository on GitHub first, then:
# Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub details
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option 2: Update Existing Repository

If you already have a GitHub repo:

```bash
# Navigate to project
cd /Users/jacob/Downloads/donregelio/shop-project

# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Update: Accurate cigar pricing, accessories page, Stripe integration"

# Push to GitHub
git push origin main
```

---

## ⚠️ IMPORTANT: Protect Your Stripe Keys

Before pushing, make sure `.env.local` is NOT committed:

```bash
# Check if .env.local is ignored
git status

# If .env.local shows up, make sure .gitignore includes it
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m "Update gitignore"
```

**Your `.env.local` file contains LIVE Stripe keys and should NEVER be pushed to GitHub!**

---

## 📋 What Will Be Pushed

### New Files:
- `src/app/accessories/page.tsx` - Accessories shop page
- `src/contexts/CartContext.tsx` - Shopping cart state
- `src/components/Cart.tsx` - Cart UI component
- `src/lib/stripe.ts` - Stripe server config
- `src/lib/get-stripe.ts` - Stripe client config
- `src/app/api/checkout/route.ts` - Checkout API
- `src/app/api/webhooks/stripe/route.ts` - Webhook handler
- `src/app/checkout/success/page.tsx` - Success page
- Multiple documentation files (*.md)

### Modified Files:
- `src/app/shop/page.tsx` - Updated with accurate pricing
- `src/app/layout.tsx` - Added CartProvider
- `package.json` - Added Stripe packages

### Protected Files (NOT pushed):
- `.env.local` - Contains your Stripe keys (ignored by git)

---

## 🌐 Deploy to Production

After pushing to GitHub, deploy to Vercel:

### Deploy with Vercel:

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

### Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these variables:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_your_live_key_here

STRIPE_SECRET_KEY = sk_live_your_live_key_here

NEXT_PUBLIC_APP_URL = https://your-vercel-domain.vercel.app
```

4. Redeploy after adding variables

---

## 🧪 Test After Deployment

### 1. Test Cigars Page:
- Visit: `https://your-domain.com/shop`
- Select different cigars
- Verify prices are correct:
  - Robusto: $10
  - Double Toro: $15
  - Lancero: $12
  - etc.
- Add to cart
- Checkout

### 2. Test Accessories Page:
- Visit: `https://your-domain.com/accessories`
- View cutters and lighters
- Add to cart
- Checkout

### 3. Test Checkout:
- Add multiple items
- Go to cart
- Click "Proceed to Checkout"
- Complete payment
- Verify success page

---

## 📊 Current System Status

```
✅ Stripe Integration: Complete
✅ Shopping Cart: Complete
✅ Accurate Pricing: Complete
✅ Accessories Page: Complete
✅ Mobile Responsive: Complete
✅ Production Ready: Yes
✅ Build Status: Passing
```

---

## 🔍 Verify Before Pushing

Run these commands to make sure everything is ready:

```bash
# Check build passes
npm run build

# Check for uncommitted files
git status

# Preview what will be committed
git diff

# Check .env.local is ignored
git check-ignore .env.local
# Should output: .env.local
```

---

## 📝 Recommended Commit Messages

For your commits, use clear messages:

```bash
# Initial push
git commit -m "feat: Complete ecommerce system with Stripe payments and cart"

# Updates
git commit -m "update: Add accurate per-cigar pricing and accessories page"

# Bug fixes
git commit -m "fix: Update pricing calculation for volume discounts"

# Features
git commit -m "feat: Add accessories shop for cutters and lighters"
```

---

## 🆘 Common Issues

### Issue: "remote: Permission denied"
**Solution:** Make sure you're logged into GitHub and have repository access

```bash
# Check your git config
git config user.name
git config user.email

# Update if needed
git config user.name "Your Name"
git config user.email "your@email.com"
```

### Issue: ".env.local being tracked"
**Solution:** Remove it from git and add to gitignore

```bash
# Remove from git (keeps local file)
git rm --cached .env.local

# Make sure .gitignore has it
echo ".env.local" >> .gitignore

# Commit the change
git add .gitignore
git commit -m "Remove .env.local from tracking"
```

### Issue: "Push rejected"
**Solution:** Pull latest changes first

```bash
# Pull from remote
git pull origin main

# Resolve any conflicts
# Then push
git push origin main
```

---

## ✅ Quick Push Checklist

Before pushing, verify:

- [ ] Build passes: `npm run build`
- [ ] No errors in console
- [ ] `.env.local` not in git: `git status`
- [ ] Committed all changes: `git status`
- [ ] Meaningful commit message
- [ ] Tested locally
- [ ] Ready for production

---

## 🎉 You're Ready!

Your shop is complete with:
- ✅ Accurate pricing for all 8 cigars
- ✅ Volume discounts (3-pack, 10-pack, box)
- ✅ Shopping cart with persistence
- ✅ Stripe checkout (live keys configured)
- ✅ Accessories page (cutters & lighters)
- ✅ Mobile responsive
- ✅ Production ready

**Just push to GitHub and deploy!**

---

**Questions?** Check the other documentation files:
- `START_HERE.md` - Quick start
- `PRODUCTION_SETUP_GUIDE.md` - Production setup
- `SHOPPING_CART_GUIDE.md` - Cart details
- `DEVELOPER_QUICK_REFERENCE.md` - Code reference

