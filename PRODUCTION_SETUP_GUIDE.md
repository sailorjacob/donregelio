# 🚀 Production Setup Guide - Don Rogelio Shop

## ⚠️ IMPORTANT: You Have LIVE Stripe Keys!

Your keys start with `pk_live_` and `sk_live_` which means they will process **REAL payments**. Follow this guide carefully to set up production properly.

---

## Step 1: Create .env.local File

Create a file named `.env.local` in your project root:

```bash
cd /Users/jacob/Downloads/donregelio/shop-project
touch .env.local
```

Then open `.env.local` and add your keys:

```env
# Stripe LIVE Keys (processes real payments!)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key_here
STRIPE_SECRET_KEY=sk_live_your_live_key_here

# Your production domain (update this when you deploy!)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**⚠️ Security Notes:**
- Never commit this file to git (it's already in .gitignore)
- Never share these keys publicly
- Keep this file secure

---

## Step 2: Test Locally with LIVE Keys

Before deploying, test that everything works:

```bash
npm run dev
```

### Test with a Real Card (Small Amount!)

1. Go to http://localhost:3000/shop
2. Add items to cart
3. Checkout
4. **Use a REAL card** (this will charge your actual card!)
5. Use a card with only $1-5 available to test safely

**Better Option: Use Stripe Test Mode First**

If you want to test without real charges, switch to test keys temporarily:

1. In Stripe Dashboard, toggle to "Test mode" (top right)
2. Get test keys (pk_test_... and sk_test_...)
3. Replace keys in .env.local
4. Test with card: 4242 4242 4242 4242
5. Switch back to live keys when ready

---

## Step 3: Complete Stripe Account Activation

Before accepting real payments, you MUST complete these in Stripe Dashboard:

### Required Setup:

1. **Business Details**
   - Go to Settings → Business Settings
   - Add your business information
   - Verify your business

2. **Bank Account**
   - Go to Settings → Bank Accounts and Scheduling
   - Add your bank account for payouts
   - Verify your bank account

3. **Identity Verification**
   - Stripe may require ID verification
   - Complete any requested verification

4. **Tax Settings**
   - Go to Settings → Tax Settings
   - Configure tax collection if needed

**⚠️ Until activation is complete, Stripe may limit your transactions!**

---

## Step 4: Configure Production Webhooks

Webhooks notify your app when payments succeed. This is CRITICAL for production.

### Local Testing (Development):

Use Stripe CLI to test webhooks locally:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login

# Forward webhooks to your local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will give you a webhook secret starting with `whsec_`. Add it to `.env.local`:

```env
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### Production Webhooks (After Deployment):

1. Deploy your site (see Step 6)
2. Go to Stripe Dashboard → Developers → Webhooks
3. Click "Add endpoint"
4. Endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
5. Select these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
6. Click "Add endpoint"
7. Copy the webhook signing secret (starts with `whsec_`)
8. Add it to your hosting provider's environment variables

---

## Step 5: Update Production URL

When you deploy, update the URL in `.env.local`:

```env
# Replace localhost with your actual domain
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

This URL is used for:
- Success page redirects after checkout
- Cancel page redirects
- Webhook endpoints (if configured)

---

## Step 6: Deploy to Production

### Option A: Deploy to Vercel (Recommended for Next.js)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build and test locally:**
   ```bash
   npm run build
   npm run start
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Add Environment Variables in Vercel:**
   - Go to your project in Vercel Dashboard
   - Settings → Environment Variables
   - Add each variable from your .env.local:
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
     - `NEXT_PUBLIC_APP_URL` (use your Vercel URL)
     - `STRIPE_WEBHOOK_SECRET` (after setting up webhooks)

5. **Redeploy after adding env vars:**
   ```bash
   vercel --prod
   ```

### Option B: Deploy to Other Platforms

**Netlify:**
```bash
npm run build
netlify deploy --prod
```
Add environment variables in Netlify Dashboard → Site Settings → Environment Variables

**Custom Server:**
- Build: `npm run build`
- Start: `npm run start`
- Use process manager like PM2
- Configure environment variables on server

---

## Step 7: Production Checklist

Before going live, verify:

### Stripe Account:
- [ ] Business details added
- [ ] Bank account connected and verified
- [ ] Identity verification complete
- [ ] Tax settings configured (if applicable)
- [ ] Account fully activated (no restrictions)

### App Configuration:
- [ ] Live Stripe keys added to environment
- [ ] Production URL configured
- [ ] Build passes: `npm run build`
- [ ] No console errors
- [ ] All features tested

### Webhooks:
- [ ] Webhook endpoint added in Stripe
- [ ] Webhook secret added to environment
- [ ] Webhook events selected
- [ ] Webhooks tested and receiving events

### Security:
- [ ] `.env.local` NOT committed to git
- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secure in hosting
- [ ] No API keys exposed in client code

### Testing:
- [ ] Cart adds items correctly
- [ ] Checkout redirects to Stripe
- [ ] Payment processes successfully
- [ ] Success page shows after payment
- [ ] Cart clears after purchase
- [ ] Webhook receives payment confirmation
- [ ] Tested on mobile devices
- [ ] Tested on different browsers

---

## Step 8: Monitor Your First Orders

### Stripe Dashboard:

1. **View Payments:**
   - Go to Payments → All Payments
   - See real-time payment status
   - View customer details

2. **Monitor Webhooks:**
   - Go to Developers → Webhooks
   - Click on your endpoint
   - View webhook delivery logs
   - Check for any failures

3. **View Customers:**
   - Go to Customers
   - See customer payment history

4. **Issue Refunds (if needed):**
   - Go to specific payment
   - Click "Refund"
   - Enter refund amount

### Your App:

1. **Check Server Logs:**
   - Monitor for any errors
   - Watch webhook events
   - Track checkout sessions

2. **Test Email Receipts:**
   - Make a test purchase
   - Verify customer receives receipt
   - Check receipt content

---

## Step 9: Production Best Practices

### 1. Enable Stripe Radar (Fraud Protection)

Stripe Radar is automatically enabled and helps prevent fraud:
- Machine learning fraud detection
- Automatic blocking of suspicious payments
- Customizable rules

Configure in: Stripe Dashboard → Radar → Rules

### 2. Set Up Email Notifications

Get notified of important events:
- Go to Settings → Notifications
- Enable email alerts for:
  - Successful payments
  - Failed payments
  - Disputes/chargebacks
  - Payouts

### 3. Configure Receipt Emails

Stripe automatically sends receipts, but you can customize:
- Go to Settings → Emails
- Customize receipt design
- Add your logo
- Update email content

### 4. Monitor Performance

Track key metrics:
- Total sales volume
- Successful vs failed payments
- Average order value
- Conversion rate

Use: Stripe Dashboard → Analytics

### 5. Handle Disputes

If a customer disputes a charge:
1. You'll get email notification
2. Go to Payments → Disputes
3. Respond with evidence
4. Stripe handles the process

### 6. Regular Payouts

Stripe automatically pays out to your bank:
- Default: Every 2 business days
- Configure in: Settings → Bank Accounts
- View payout schedule

---

## Step 10: Scaling & Growth

### As Your Business Grows:

1. **Add More Payment Methods:**
   - Apple Pay / Google Pay
   - ACH transfers
   - SEPA Direct Debit
   - Configure in: Settings → Payment Methods

2. **International Sales:**
   - Enable multi-currency support
   - Configure local payment methods
   - Set up tax collection for different regions

3. **Subscription Products (Future):**
   - Create recurring billing
   - Manage subscriptions
   - Automatic invoicing

4. **Advanced Features:**
   - Set up tax automation (Stripe Tax)
   - Use Stripe Connect for marketplaces
   - Implement saved payment methods

---

## Common Production Issues

### Issue: Webhook Failing

**Symptoms:** Payments work but webhook shows errors

**Fix:**
1. Check webhook URL is correct
2. Verify webhook secret in environment
3. Check server logs for errors
4. Test webhook in Stripe Dashboard

### Issue: "Account not activated" Error

**Symptoms:** Payments rejected, can't process

**Fix:**
1. Complete all activation steps in Stripe
2. Add business details
3. Connect bank account
4. Complete identity verification

### Issue: Customers Can't Complete Payment

**Symptoms:** Checkout loads but payment fails

**Fix:**
1. Check Stripe Dashboard for error logs
2. Verify live keys are correct
3. Check if account has restrictions
4. Test with different payment methods

### Issue: Success Page Shows but Cart Doesn't Clear

**Symptoms:** Cart still has items after purchase

**Fix:**
1. Check webhook is receiving events
2. Verify webhook handler clears cart
3. Check browser console for errors

---

## Emergency Contacts

### Stripe Support:
- Dashboard: support.stripe.com
- Email: support@stripe.com
- Chat: Available in Stripe Dashboard
- Phone: Available for accounts with sales

### Response Times:
- Critical payment issues: < 1 hour
- General questions: < 24 hours
- Technical support: < 12 hours

---

## Backup & Recovery

### If You Need to Rollback:

1. **Switch Back to Test Mode:**
   - Get test keys from Stripe
   - Update environment variables
   - Redeploy

2. **Disable Payments Temporarily:**
   - In Stripe Dashboard
   - Settings → Payment Methods
   - Disable payment methods
   - Re-enable when ready

3. **Pause New Orders:**
   - Add maintenance mode to your site
   - Or temporarily disable checkout button

---

## Next Steps After Going Live

1. **Week 1:** Monitor closely
   - Check every order
   - Watch for issues
   - Respond to customers quickly

2. **Week 2-4:** Optimize
   - Track conversion rates
   - Test checkout flow
   - Gather customer feedback

3. **Month 2+:** Scale
   - Add new payment methods
   - Expand to new markets
   - Implement advanced features

---

## 🎉 You're Ready for Production!

Your Don Rogelio shop is now configured with **LIVE Stripe keys** and ready to accept real payments!

**Remember:**
- Start with small test purchases
- Monitor your first orders closely
- Keep your keys secure
- Complete Stripe activation
- Set up webhooks after deploying

**Good luck with your launch!** 🚬✨

---

**Questions?** 
- Check other documentation files
- Contact Stripe Support
- Review Stripe Dashboard logs

