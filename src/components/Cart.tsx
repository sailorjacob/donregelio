"use client"

import { useCart } from '@/contexts/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, isCartOpen, closeCart, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = async () => {
    if (items.length === 0) return

    setIsCheckingOut(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            productName: item.productName,
            quantityType: getQuantityLabel(item.quantityType),
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.assign(data.url)
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('There was an error processing your checkout. Please try again.')
      setIsCheckingOut(false)
    }
  }

  const getQuantityLabel = (quantityType: string) => {
    switch (quantityType) {
      case 'single': return 'Single Cigar'
      case '3pack': return '3 Pack'
      case '10pack': return '10 Pack'
      case 'box': return 'Full Box'
      default: return quantityType
    }
  }

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
                            ${item.price}
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

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Proceed to Checkout
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Secure payment powered by Stripe
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

