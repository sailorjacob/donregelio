"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Package } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { useCart } from "@/contexts/CartContext"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isLoading, setIsLoading] = useState(true)
  const { clearCart } = useCart()

  useEffect(() => {
    // Clear the cart after successful purchase
    clearCart()

    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [clearCart])

  if (isLoading) {
    return (
      <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center ${playfair.className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Processing your order...</p>
        </div>
      </main>
    )
  }

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white ${playfair.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200 bg-white/90">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between max-w-4xl mx-auto">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Success Content */}
      <section className="pt-32 px-4 sm:px-6 pb-12">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase from Don Rogelio
            </p>

            {/* Order Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Package className="w-12 h-12 text-amber-600" />
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What&apos;s Next?
              </h2>

              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                    <p className="text-sm text-gray-600">You&apos;ll receive an email confirmation shortly with your order details.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Processing</h3>
                    <p className="text-sm text-gray-600">We&apos;ll carefully prepare your premium cigars for shipment.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Shipping</h3>
                    <p className="text-sm text-gray-600">You&apos;ll receive tracking information once your order ships.</p>
                  </div>
                </div>
              </div>

              {sessionId && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Order Reference: {sessionId.slice(-12)}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Continue Shopping
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-600">
                Questions about your order?{" "}
                <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Contact us
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

