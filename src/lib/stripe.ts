import Stripe from 'stripe';

// Initialize Stripe with a placeholder or actual key
// This allows the build to pass even without keys configured
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-10-29.clover',
  typescript: true,
});

// Helper to check if Stripe is properly configured
export const isStripeConfigured = () => {
  return !!process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY.includes('placeholder');
};

