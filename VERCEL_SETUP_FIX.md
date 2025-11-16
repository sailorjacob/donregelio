# 🔧 Fix Vercel Redirect Issue

## Problem: Stripe redirects to localhost instead of your domain

### Solution: Update Environment Variable in Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Click on your project (donregelio)
3. Go to **Settings** → **Environment Variables**
4. Find `NEXT_PUBLIC_APP_URL`
5. Update its value to your actual Vercel domain:
   ```
   https://your-project-name.vercel.app
   ```
   OR if you have a custom domain:
   ```
   https://donregelio.com
   ```

6. Click **Save**
7. Go to **Deployments** tab
8. Click the ⋯ menu on the latest deployment
9. Click **Redeploy**

### What This Does:
This environment variable tells Stripe where to redirect customers after payment succeeds or is cancelled. Currently it's set to `http://localhost:3000` which only works on your local machine.

---

**After updating, test again and Stripe will redirect to your actual domain!**

