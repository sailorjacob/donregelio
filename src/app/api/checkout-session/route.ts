import { NextRequest, NextResponse } from 'next/server';
import { stripe, isStripeConfigured } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!isStripeConfigured()) {
      console.error('❌ Stripe not configured');
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add your API keys to .env.local' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { items } = body;

    console.log('📦 Received checkout request:', { itemCount: items?.length });

    if (!items || !Array.isArray(items) || items.length === 0) {
      console.error('❌ Cart is empty or invalid');
      return NextResponse.json(
        { error: 'Cart is empty or invalid' },
        { status: 400 }
      );
    }

    // Validate items
    for (const item of items) {
      if (!item.productName || !item.price || !item.quantity || !item.quantityType) {
        console.error('❌ Invalid item data:', item);
        return NextResponse.json(
          { error: 'Invalid item data', details: 'Missing required fields' },
          { status: 400 }
        );
      }
    }

    // Get currency from first item (all items should have same currency)
    const itemCurrency = items[0]?.currency;
    let currency = itemCurrency ? itemCurrency.toLowerCase() : 'usd';
    
    // IMPORTANT: DOP must be enabled in Stripe Dashboard
    // If DOP is not enabled, fallback to USD
    const supportedCurrencies = ['usd', 'dop'];
    if (!supportedCurrencies.includes(currency)) {
      console.warn(`⚠️  Unsupported currency: ${currency}, falling back to USD`);
      currency = 'usd';
    }
    
    console.log('🔍 Checkout Debug:', {
      itemCurrency,
      currency,
      firstItemPrice: items[0]?.price,
      firstItem: items[0],
      allItems: items
    });

    // Create line items for Stripe
    const lineItems = items.map((item: { 
      productName: string; 
      quantityType: string; 
      price: number; 
      quantity: number;
      currency?: string
    }) => {
      const unitAmount = Math.round(item.price * 100);
      
      // Validate amount
      if (unitAmount <= 0 || isNaN(unitAmount)) {
        console.error(`❌ Invalid unit amount for ${item.productName}: ${unitAmount}`);
        throw new Error(`Invalid price for ${item.productName}: ${item.price}`);
      }
      
      console.log(`💰 Line item: ${item.productName} - ${currency.toUpperCase()} ${item.price} (${unitAmount} cents/centavos)`);
      
      return {
        price_data: {
          currency: currency,
          product_data: {
            name: `${item.productName} - ${item.quantityType}`,
            description: `Premium handcrafted cigar from Don Rogelio`,
          },
          // Stripe needs amounts in smallest currency unit (cents for USD, centavos for DOP)
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });

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

    console.log('✅ Checkout session created:', session.id);
    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    const err = error as Error & { type?: string; code?: string; statusCode?: number };
    console.error('❌ Stripe checkout error:', error);
    console.error('Error details:', {
      message: err?.message,
      type: err?.type,
      code: err?.code,
      statusCode: err?.statusCode
    });
    
    return NextResponse.json(
      { 
        error: 'Error creating checkout session',
        details: err?.message || 'Unknown error',
        type: err?.type
      },
      { status: 500 }
    );
  }
}

