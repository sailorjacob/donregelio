"use client"

import { useCart } from '@/contexts/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, Building2, Banknote } from 'lucide-react'
import Image from 'next/image'

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, isCartOpen, closeCart, clearCart } = useCart()

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return
    
    // Get currency from first item
    const currency = items.length > 0 ? items[0].currency : 'USD'
    
    // Build order message
    let message = '🛒 *New Order from Don Rogelio Website*\n\n'
    message += '*ORDER DETAILS:*\n'
    message += '━━━━━━━━━━━━━━━━\n'
    
    items.forEach((item, index) => {
      message += `\n${index + 1}. *${item.productName}*\n`
      message += `   Type: ${getQuantityLabel(item.quantityType)}\n`
      message += `   Quantity: ${item.quantity}\n`
      message += `   Price: ${formatPrice(item.price, item.currency)} each\n`
      message += `   Subtotal: ${formatPrice(item.price * item.quantity, item.currency)}\n`
    })
    
    message += '\n━━━━━━━━━━━━━━━━\n'
    message += `*TOTAL: ${formatPrice(getTotalPrice(), currency)}*\n`
    message += '━━━━━━━━━━━━━━━━\n\n'
    message += '📍 Please confirm this order and provide:\n'
    message += '• Delivery address\n'
    message += '• Preferred payment method\n'
    message += '• Any special requests\n\n'
    message += 'Thank you! 🚀'
    
    const whatsappNumber = '18092999188'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleBankTransferInfo = () => {
    window.location.href = '/payment-instructions'
  }

  const getQuantityLabel = (quantityType: string) => {
    switch (quantityType) {
      case 'single': return 'Single'
      case '3pack': return '3 Pack'
      case '10pack': return '10 Pack'
      case 'box': return 'Full Box'
      default: return quantityType
    }
  }

  // Format price with currency
  const formatPrice = (price: number, currency: 'USD' | 'DOP') => {
    if (currency === 'DOP') {
      return `RD$${price.toLocaleString()}`
    }
    return `$${price.toFixed(2)}`
  }

  // Get currency from cart items (they should all be the same)
  const cartCurrency = items.length > 0 ? items[0].currency : 'USD'

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Shopping Cart ({items.length})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-600 font-medium mb-2">Your cart is empty</p>
                  <p className="text-sm text-gray-500">Add some premium cigars to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex gap-3">
                        {/* Product Image */}
                        <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded border border-gray-200">
                          <Image
                            src={item.image}
                            alt={item.productName}
                            fill
                            className="object-contain p-1"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {item.productName}
                          </h3>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {getQuantityLabel(item.quantityType)}
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">
                            {formatPrice(item.price, item.currency)}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-50 rounded transition-colors h-fit"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                        <span className="text-xs text-gray-600">Quantity:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4 text-gray-700" />
                          </button>
                          <span className="w-8 text-center font-semibold text-sm text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full text-sm text-red-600 hover:text-red-700 font-medium py-2"
                    >
                      Clear Cart
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer / Payment Options */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(getTotalPrice(), cartCurrency)}
                  </span>
                </div>

                <div className="space-y-2">
                  {/* WhatsApp Order Button */}
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </button>

                  {/* Bank Transfer Button */}
                  <button
                    onClick={handleBankTransferInfo}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Building2 className="w-5 h-5" />
                    Bank Transfer Info
                  </button>

                  {/* Cash Option (Info) */}
                  <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-2">
                      <Banknote className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-amber-900">
                        <p className="font-semibold mb-1">Cash Payment Available</p>
                        <p className="text-amber-700">For local DR customers: Cash on delivery or in-person pickup available. Contact us via WhatsApp to arrange.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center mt-3">
                  💳 Multiple secure payment options • 🚚 Fast delivery
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

