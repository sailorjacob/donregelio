import { NextRequest, NextResponse } from 'next/server';
import { stripe, isStripeConfigured } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!isStripeConfigured()) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add your API keys to .env.local' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty or invalid' },
        { status: 400 }
      );
    }

    // Validate items
    for (const item of items) {
      if (!item.productName || !item.price || !item.quantity || !item.quantityType) {
        return NextResponse.json(
          { error: 'Invalid item data' },
          { status: 400 }
        );
      }
    }

    // Create line items for Stripe
    const lineItems = items.map((item: { 
      productName: string; 
      quantityType: string; 
      price: number; 
      quantity: number 
    }) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.productName} - ${item.quantityType}`,
          description: `Premium handcrafted cigar from Don Rogelio`,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/shop`,
      metadata: {
        orderItems: JSON.stringify(items.map((item: { productName: string; quantityType: string; quantity: number }) => ({
          product: item.productName,
          type: item.quantityType,
          quantity: item.quantity
        }))),
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}

