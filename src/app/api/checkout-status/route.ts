import { NextRequest, NextResponse } from 'next/server';
import { stripe, isStripeConfigured } from '@/lib/stripe';

export async function GET(req: NextRequest) {
  try {
    if (!isStripeConfigured()) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      );
    }

    const searchParams = req.nextUrl.searchParams;
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.status,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email,
    });
  } catch (error) {
    console.error('Error retrieving session:', error);
    return NextResponse.json(
      { error: 'Error retrieving session' },
      { status: 500 }
    );
  }
}

