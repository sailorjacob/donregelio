# 📧 Email Setup Guide - Don Rogelio

Your webhook is now configured to automatically send emails when orders are placed! Follow this guide to set up your email service.

---

## 🎯 What Emails Are Sent

### 1. **Customer Confirmation Email**
- Professional order confirmation
- Order details with items and pricing
- Matches your branding (amber colors, elegant design)
- Sent immediately after successful payment

### 2. **Admin Notification Email**
- Alerts you of new orders
- Quick overview of order details
- Customer contact information
- Total amount and items ordered

---

## 🚀 Choose Your Email Provider

### Option 1: **Resend** (⭐ Recommended - Easiest)

**Why Resend?**
- ✅ Made for developers
- ✅ Generous free tier (3,000 emails/month)
- ✅ Simple API
- ✅ Great for transactional emails

**Setup:**

1. **Create Account**
   - Go to: https://resend.com
   - Sign up (free)

2. **Get API Key**
   - Dashboard → API Keys → Create API Key
   - Copy your API key

3. **Verify Domain** (Optional but recommended)
   - Dashboard → Domains → Add Domain
   - Follow DNS verification steps
   - Or use their test domain: `onboarding@resend.dev`

4. **Add to Vercel**
   - Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add these variables:
   ```
   EMAIL_PROVIDER=resend
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   EMAIL_FROM=orders@yourdomain.com
   ADMIN_EMAIL=youremail@example.com
   ```

5. **Redeploy**
   - Vercel will auto-redeploy with new env vars

---

### Option 2: **SendGrid** (Reliable, Popular)

**Why SendGrid?**
- ✅ Industry standard
- ✅ Free tier: 100 emails/day
- ✅ Good deliverability
- ✅ Advanced analytics

**Setup:**

1. **Create Account**
   - Go to: https://sendgrid.com
   - Sign up (free tier available)

2. **Get API Key**
   - Settings → API Keys → Create API Key
   - Full Access or Restricted Access (Mail Send only)
   - Copy your API key

3. **Verify Sender**
   - Settings → Sender Authentication
   - Verify your email address OR
   - Authenticate your domain (better for production)

4. **Add to Vercel**
   ```
   EMAIL_PROVIDER=sendgrid
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
   EMAIL_FROM=orders@yourdomain.com
   ADMIN_EMAIL=youremail@example.com
   ```

5. **Redeploy**

---

### Option 3: **Gmail SMTP** (Using Your Gmail)

**Why Gmail?**
- ✅ Already have an account
- ✅ No extra service needed
- ✅ Free for low volume
- ⚠️ Limited to ~500 emails/day

**Setup:**

1. **Enable 2-Step Verification**
   - Google Account → Security → 2-Step Verification

2. **Create App Password**
   - Google Account → Security → App Passwords
   - Select "Mail" and "Other"
   - Copy the 16-character password

3. **Install Nodemailer**
   ```bash
   npm install nodemailer
   ```

4. **Uncomment Nodemailer Code**
   - Open: `src/lib/email-service.ts`
   - Uncomment the `sendEmailWithNodemailer` function
   - Uncomment the nodemailer import

5. **Add to Vercel**
   ```
   EMAIL_PROVIDER=nodemailer
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=youremail@gmail.com
   SMTP_PASSWORD=your-app-password
   EMAIL_FROM=youremail@gmail.com
   ADMIN_EMAIL=youremail@gmail.com
   ```

---

## 🧪 Testing Your Email Setup

### Method 1: Test Endpoint

Visit this URL in your browser (replace with your email):
```
https://yoursite.vercel.app/api/test-email?to=youremail@example.com
```

You should receive a test order confirmation email!

### Method 2: Make a Test Purchase

1. Add items to cart
2. Go through checkout
3. Use Stripe test card: `4242 4242 4242 4242`
4. Complete the payment
5. Check your email inbox

---

## 📝 Environment Variables Reference

Here's the complete list of environment variables you need:

```bash
# Stripe (you already have these)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=https://yoursite.vercel.app

# Email Configuration (NEW)
EMAIL_PROVIDER=resend              # or sendgrid, nodemailer
EMAIL_FROM=orders@donregelio.com   # Sender email address
ADMIN_EMAIL=your@email.com         # Where you want order notifications

# For Resend
RESEND_API_KEY=re_...

# For SendGrid
SENDGRID_API_KEY=SG....

# For Nodemailer/Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=youremail@gmail.com
SMTP_PASSWORD=your-app-password
```

---

## 🎨 Customizing Email Templates

Email templates are in: `src/lib/email-templates.ts`

### What You Can Customize:
- Colors (already set to amber/Don Rogelio theme)
- Logo (add your logo image URL)
- Footer text
- Social media links
- Additional information

### Example: Add Your Logo
```typescript
// In email-templates.ts, add to the header section:
<img src="https://yoursite.com/logo.png" alt="Don Rogelio" style="height: 60px; margin-bottom: 20px;">
```

---

## 🔍 Troubleshooting

### Emails Not Sending?

1. **Check Environment Variables**
   ```bash
   # Make sure they're set in Vercel, not just .env.local
   ```

2. **Check Logs**
   - Vercel Dashboard → Your Project → Deployments → View Function Logs
   - Look for email-related errors

3. **Check Spam Folder**
   - Test emails often go to spam initially
   - Mark as "Not Spam" to train filters

4. **Verify Webhook**
   - Stripe Dashboard → Developers → Webhooks
   - Check if webhook is receiving events
   - Look for errors in webhook logs

### Common Issues:

**"Email service not configured"**
- Add `EMAIL_PROVIDER` environment variable
- Redeploy your site

**"RESEND_API_KEY not configured"**
- Add API key to Vercel environment variables
- Make sure there are no extra spaces
- Redeploy

**"Invalid from address"**
- Verify your domain in Resend/SendGrid
- Or use their test domain temporarily

---

## 🎉 Email Preview

Here's what your customers will see:

### Customer Email:
- ✅ Professional header with amber gradient
- ✅ "Thank You for Your Order" message
- ✅ Order number and date
- ✅ Complete item breakdown with prices
- ✅ Total amount
- ✅ "What's Next" section explaining fulfillment
- ✅ Contact information
- ✅ Don Rogelio branding footer

### Admin Email:
- ✅ "New Order Received" notification
- ✅ Customer details (name, email)
- ✅ Order items and quantities
- ✅ Total amount prominently displayed
- ✅ Action required reminder

---

## 🚀 Going Live

Once you've tested and everything works:

1. ✅ Switch to your production email address for `EMAIL_FROM`
2. ✅ Verify your domain (improves deliverability)
3. ✅ Set up `ADMIN_EMAIL` to your business email
4. ✅ Monitor first few orders to ensure emails arrive
5. ✅ Consider setting up email forwarding rules
6. ✅ Add emails to address book to prevent spam filtering

---

## 💡 Tips for Better Email Deliverability

1. **Use a custom domain** (`orders@donregelio.com` vs `orders@gmail.com`)
2. **Verify your domain** with SPF, DKIM, and DMARC records
3. **Start with low volume** to build sender reputation
4. **Monitor bounce rates** in your email provider dashboard
5. **Keep content professional** (avoid spam trigger words)
6. **Include unsubscribe link** (required by law for marketing emails, not transactional)

---

## 📊 What's Next?

After emails are working, you could add:
- Shipping confirmation emails
- Tracking number updates
- Review request emails (after delivery)
- Welcome series for new customers
- Abandoned cart reminders

---

## 🆘 Need Help?

- **Resend Docs**: https://resend.com/docs
- **SendGrid Docs**: https://docs.sendgrid.com
- **Stripe Webhooks**: https://stripe.com/docs/webhooks
- **Test your emails**: Use https://www.mail-tester.com

---

## ✅ Quick Start Checklist

- [ ] Choose email provider (Resend recommended)
- [ ] Create account and get API key
- [ ] Add environment variables to Vercel
- [ ] Redeploy your site
- [ ] Test with `/api/test-email?to=your@email.com`
- [ ] Make a test purchase
- [ ] Verify customer and admin emails received
- [ ] Customize templates if desired
- [ ] Set up domain verification (optional but recommended)
- [ ] Monitor first few real orders

---

🎉 **You're all set!** Customers will now receive beautiful, branded order confirmations automatically!

