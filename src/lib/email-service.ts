// Email service integration
// This is a flexible email service that can work with different providers

import { generateOrderConfirmationHTML, generateOrderConfirmationText, generateAdminNotificationHTML } from './email-templates'

interface OrderItem {
  product: string
  type: string
  quantity: number
  price: number
}

interface OrderDetails {
  orderId: string
  customerEmail: string
  customerName: string
  items: OrderItem[]
  totalAmount: number
  orderDate: string
}

interface EmailOptions {
  to: string
  subject: string
  html: string
  text: string
}

// ============================================
// EMAIL PROVIDER: RESEND (Recommended)
// ============================================
async function sendEmailWithResend(options: EmailOptions) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'orders@donregelio.com',
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      console.log('Email sent successfully via Resend:', data.id)
      return { success: true, messageId: data.id }
    } else {
      console.error('Resend API error:', data)
      return { success: false, error: data.message }
    }
  } catch (error) {
    console.error('Error sending email with Resend:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

// ============================================
// EMAIL PROVIDER: SENDGRID
// ============================================
async function sendEmailWithSendGrid(options: EmailOptions) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  
  if (!SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: options.to }] }],
        from: { email: process.env.EMAIL_FROM || 'orders@donregelio.com' },
        subject: options.subject,
        content: [
          { type: 'text/plain', value: options.text },
          { type: 'text/html', value: options.html },
        ],
      }),
    })

    if (response.ok) {
      console.log('Email sent successfully via SendGrid')
      return { success: true }
    } else {
      const data = await response.json()
      console.error('SendGrid API error:', data)
      return { success: false, error: data.errors?.[0]?.message || 'Failed to send email' }
    }
  } catch (error) {
    console.error('Error sending email with SendGrid:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

// ============================================
// EMAIL PROVIDER: NODEMAILER (For Gmail/SMTP)
// ============================================
// Note: This requires installing nodemailer
// npm install nodemailer
// Uncomment below to use

/*
import nodemailer from 'nodemailer'

async function sendEmailWithNodemailer(options: EmailOptions) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'orders@donregelio.com',
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    })

    console.log('Email sent successfully via Nodemailer:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email with Nodemailer:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
*/

// ============================================
// MAIN SEND FUNCTION
// ============================================
// Choose your email provider here
async function sendEmail(options: EmailOptions) {
  const provider = process.env.EMAIL_PROVIDER || 'resend'

  switch (provider) {
    case 'resend':
      return sendEmailWithResend(options)
    case 'sendgrid':
      return sendEmailWithSendGrid(options)
    // case 'nodemailer':
    //   return sendEmailWithNodemailer(options)
    default:
      console.log('📧 Email would be sent:', {
        to: options.to,
        subject: options.subject,
      })
      console.log('⚠️  Configure EMAIL_PROVIDER in .env.local to send real emails')
      return { success: true, note: 'Email provider not configured - check console' }
  }
}

// ============================================
// PUBLIC FUNCTIONS
// ============================================

export async function sendOrderConfirmation(order: OrderDetails) {
  const html = generateOrderConfirmationHTML(order)
  const text = generateOrderConfirmationText(order)

  return sendEmail({
    to: order.customerEmail,
    subject: `Order Confirmation #${order.orderId} - Don Rogelio Cigars`,
    html,
    text,
  })
}

export async function sendAdminNotification(order: OrderDetails) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_FROM
  
  if (!adminEmail) {
    console.warn('No ADMIN_EMAIL configured - skipping admin notification')
    return { success: false, error: 'No admin email configured' }
  }

  const html = generateAdminNotificationHTML(order)
  const text = `New order received: #${order.orderId} from ${order.customerName} (${order.customerEmail}) - Total: $${order.totalAmount.toFixed(2)}`

  return sendEmail({
    to: adminEmail,
    subject: `🔔 New Order #${order.orderId} - $${order.totalAmount.toFixed(2)}`,
    html,
    text,
  })
}

// For testing purposes
export async function sendTestEmail(toEmail: string) {
  const testOrder: OrderDetails = {
    orderId: 'TEST-' + Date.now(),
    customerEmail: toEmail,
    customerName: 'Test Customer',
    items: [
      { product: 'Robusto', type: 'Single Cigar', quantity: 1, price: 10 },
      { product: 'Toro', type: '3 Pack', quantity: 1, price: 33 },
    ],
    totalAmount: 43,
    orderDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  }

  return sendOrderConfirmation(testOrder)
}

