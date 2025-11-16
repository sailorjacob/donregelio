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

    // Get currency from first item (all items should have same currency)
    const itemCurrency = items[0]?.currency;
    const currency = itemCurrency ? itemCurrency.toLowerCase() : 'usd';
    
    console.log('🔍 Checkout Debug:', {
      itemCurrency,
      currency,
      firstItemPrice: items[0]?.price,
      firstItem: items[0]
    });

    // Create line items for Stripe
    const lineItems = items.map((item: { 
      productName: string; 
      quantityType: string; 
      price: number; 
      quantity: number;
      currency?: string
    }) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: `${item.productName} - ${item.quantityType}`,
          description: `Premium handcrafted cigar from Don Rogelio`,
        },
        // Stripe needs amounts in smallest currency unit (cents for USD, centavos for DOP)
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Create checkout session for embedded checkout
    // IMPORTANT: Only ONE currency is sent to Stripe (set in line_items)
    // This prevents Stripe from showing dual currency options
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        orderItems: JSON.stringify(items.map((item: { productName: string; quantityType: string; quantity: number }) => ({
          product: item.productName,
          type: item.quantityType,
          quantity: item.quantity
        }))),
        checkout_currency: currency.toUpperCase(), // Store which currency was used
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}

