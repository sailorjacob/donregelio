import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { sendOrderConfirmation, sendAdminNotification } from '@/lib/email-service';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('✅ Payment successful:', session.id);
      
      try {
        // Extract order details from session metadata
        const orderItems = session.metadata?.orderItems 
          ? JSON.parse(session.metadata.orderItems)
          : [];

        const orderDetails = {
          orderId: session.id.replace('cs_', 'ORDER-'),
          customerEmail: session.customer_details?.email || session.customer_email || 'customer@example.com',
          customerName: session.customer_details?.name || 'Valued Customer',
        items: orderItems.map((item: { product: string; type: string; quantity: number }) => ({
          product: item.product,
          type: item.type,
          quantity: item.quantity,
          price: 0, // We'll calculate this from line items if needed
        })),
          totalAmount: (session.amount_total || 0) / 100, // Convert from cents
          orderDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        };

        // If we have line items, get accurate pricing
        if (session.line_items?.data) {
          orderDetails.items = session.line_items.data.map((lineItem, index) => ({
            product: orderItems[index]?.product || lineItem.description || 'Product',
            type: orderItems[index]?.type || '',
            quantity: lineItem.quantity || 1,
            price: (lineItem.amount_total || 0) / 100,
          }));
        }

        console.log('📦 Order details extracted:', {
          orderId: orderDetails.orderId,
          customer: orderDetails.customerEmail,
          total: orderDetails.totalAmount,
          itemCount: orderDetails.items.length,
        });

        // Send confirmation email to customer
        const customerEmailResult = await sendOrderConfirmation(orderDetails);
        if (customerEmailResult.success) {
          console.log('✉️  Confirmation email sent to customer');
        } else {
          console.error('❌ Failed to send customer email:', 'error' in customerEmailResult ? customerEmailResult.error : 'Unknown error');
        }

        // Send notification to admin
        const adminEmailResult = await sendAdminNotification(orderDetails);
        if (adminEmailResult.success) {
          console.log('✉️  Notification email sent to admin');
        } else {
          console.warn('⚠️  Admin notification not sent:', 'error' in adminEmailResult ? adminEmailResult.error : 'Unknown error');
        }

        // TODO: Additional fulfillment tasks
        // - Update inventory in your database
        // - Create shipping label
        // - Add to CRM/order management system
        // - Trigger automated workflows

        console.log('🎉 Order fulfillment completed for:', orderDetails.orderId);

      } catch (error) {
        console.error('❌ Error processing order fulfillment:', error);
        // Don't return error to Stripe - we still received the payment
        // Log this for manual follow-up
      }
      
      break;

    case 'checkout.session.async_payment_succeeded':
      const asyncSession = event.data.object as Stripe.Checkout.Session;
      console.log('✅ Async payment succeeded:', asyncSession.id);
      // Handle async payment methods (bank transfers, etc.)
      break;

    case 'checkout.session.async_payment_failed':
      const failedAsyncSession = event.data.object as Stripe.Checkout.Session;
      console.log('❌ Async payment failed:', failedAsyncSession.id);
      // Handle failed async payments
      break;

    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('✅ PaymentIntent succeeded:', paymentIntent.id);
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object as Stripe.PaymentIntent;
      console.log('❌ Payment failed:', failedPayment.id);
      // You could send a "payment failed" email here
      break;

    default:
      console.log(`ℹ️  Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

