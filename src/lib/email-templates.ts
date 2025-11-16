// Email templates for order notifications

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

export function generateOrderConfirmationHTML(order: OrderDetails): string {
  const itemsHTML = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
            <strong>${item.product}</strong><br>
            <span style="color: #6b7280; font-size: 14px;">${item.type}</span>
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">
            ${item.quantity}
          </td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
            $${item.price.toFixed(2)}
          </td>
        </tr>
      `
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - Don Rogelio</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Thank You for Your Order!
              </h1>
              <p style="margin: 10px 0 0 0; color: #fef3c7; font-size: 16px;">
                Don Rogelio Premium Cigars
              </p>
            </td>
          </tr>

          <!-- Order Info -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #111827;">
                Hi ${order.customerName},
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; line-height: 1.6;">
                We've received your order and it's being processed. You'll receive another email when your order ships.
              </p>

              <!-- Order Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
                <tr style="background-color: #f9fafb;">
                  <td colspan="3" style="padding: 15px; border-bottom: 2px solid #e5e7eb;">
                    <strong style="font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">
                      Order #${order.orderId}
                    </strong>
                    <br>
                    <span style="font-size: 14px; color: #9ca3af;">
                      ${order.orderDate}
                    </span>
                  </td>
                </tr>
                <tr style="background-color: #f9fafb; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">
                  <th style="padding: 12px; text-align: left; font-weight: 600;">Product</th>
                  <th style="padding: 12px; text-align: center; font-weight: 600;">Qty</th>
                  <th style="padding: 12px; text-align: right; font-weight: 600;">Price</th>
                </tr>
                ${itemsHTML}
                <tr>
                  <td colspan="2" style="padding: 20px 12px 12px 12px; text-align: right; font-weight: 600; font-size: 16px; color: #111827;">
                    Total:
                  </td>
                  <td style="padding: 20px 12px 12px 12px; text-align: right; font-weight: 700; font-size: 18px; color: #d97706;">
                    $${order.totalAmount.toFixed(2)} USD
                  </td>
                </tr>
              </table>

              <!-- What's Next -->
              <div style="background-color: #fef3c7; border-left: 4px solid #d97706; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #92400e;">
                  📦 What's Next?
                </h3>
                <p style="margin: 0; font-size: 14px; color: #78350f; line-height: 1.6;">
                  We're carefully preparing your premium cigars for shipment. You'll receive a shipping confirmation email with tracking information once your order is on its way.
                </p>
              </div>

              <!-- Contact Info -->
              <p style="margin: 30px 0 0 0; font-size: 14px; color: #6b7280; line-height: 1.6;">
                Questions about your order? Reply to this email or contact us on WhatsApp.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #111827;">
                Don Rogelio Cigars
              </p>
              <p style="margin: 0 0 15px 0; font-size: 14px; color: #6b7280;">
                Premium Handcrafted Cigars from the Dominican Republic
              </p>
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                © ${new Date().getFullYear()} Don Rogelio. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export function generateOrderConfirmationText(order: OrderDetails): string {
  const itemsText = order.items
    .map(
      (item) =>
        `  - ${item.product} (${item.type}) x${item.quantity} - $${item.price.toFixed(2)}`
    )
    .join('\n')

  return `
Thank You for Your Order!

Hi ${order.customerName},

We've received your order and it's being processed. You'll receive another email when your order ships.

Order Details:
--------------
Order #: ${order.orderId}
Date: ${order.orderDate}

Items:
${itemsText}

Total: $${order.totalAmount.toFixed(2)} USD

What's Next?
------------
We're carefully preparing your premium cigars for shipment. You'll receive a shipping confirmation email with tracking information once your order is on its way.

Questions about your order? Reply to this email or contact us on WhatsApp.

Best regards,
Don Rogelio Cigars
Premium Handcrafted Cigars from the Dominican Republic

© ${new Date().getFullYear()} Don Rogelio. All rights reserved.
  `
}

// Admin notification email
export function generateAdminNotificationHTML(order: OrderDetails): string {
  const itemsHTML = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${item.product}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${item.type}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: right;">$${item.price.toFixed(2)}</td>
        </tr>
      `
    )
    .join('')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          
          <tr>
            <td style="background-color: #1f2937; padding: 20px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px;">🔔 New Order Received</h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #111827;">Order #${order.orderId}</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Customer:</td>
                  <td style="padding: 8px 0; color: #111827; font-weight: 600;">${order.customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;">${order.customerEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Date:</td>
                  <td style="padding: 8px 0; color: #111827;">${order.orderDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Total:</td>
                  <td style="padding: 8px 0; color: #d97706; font-weight: 700; font-size: 18px;">$${order.totalAmount.toFixed(2)} USD</td>
                </tr>
              </table>

              <h3 style="margin: 30px 0 15px 0; font-size: 16px; color: #111827;">Order Items:</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
                <tr style="background-color: #f9fafb; font-size: 12px; color: #6b7280; text-transform: uppercase;">
                  <th style="padding: 10px 8px; text-align: left;">Product</th>
                  <th style="padding: 10px 8px; text-align: left;">Type</th>
                  <th style="padding: 10px 8px; text-align: center;">Qty</th>
                  <th style="padding: 10px 8px; text-align: right;">Price</th>
                </tr>
                ${itemsHTML}
              </table>

              <div style="background-color: #fef3c7; border-left: 4px solid #d97706; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #78350f;">
                  <strong>Action Required:</strong> Process this order and prepare for shipment.
                </p>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

