import { NextRequest, NextResponse } from 'next/server';
import { sendTestEmail } from '@/lib/email-service';

// Test endpoint to verify email configuration
// Visit: /api/test-email?to=your@email.com

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const toEmail = searchParams.get('to');

  if (!toEmail) {
    return NextResponse.json(
      { 
        error: 'Missing email parameter',
        usage: 'Visit /api/test-email?to=your@email.com'
      },
      { status: 400 }
    );
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(toEmail)) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    );
  }

  try {
    const result = await sendTestEmail(toEmail);

    if (result.success) {
      const response: Record<string, unknown> = {
        success: true,
        message: `Test email sent to ${toEmail}`,
      };
      if ('messageId' in result) response.messageId = result.messageId;
      if ('note' in result) response.note = result.note;
      return NextResponse.json(response);
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'error' in result ? result.error : 'Unknown error',
          message: 'Failed to send test email. Check server logs for details.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in test-email endpoint:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: String(error),
      },
      { status: 500 }
    );
  }
}

