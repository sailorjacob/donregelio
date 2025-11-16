"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { loadStripe } from "@stripe/stripe-js"
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js"
import { useCart } from "@/contexts/CartContext"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Custom appearance to match Don Rogelio branding
const appearance = {
  theme: 'stripe' as const,
  variables: {
    colorPrimary: '#d97706',      // Amber-600
    colorBackground: '#ffffff',
    colorText: '#111827',          // Gray-900
    colorDanger: '#dc2626',        // Red-600
    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    spacingUnit: '4px',
    borderRadius: '8px',
  },
  rules: {
    '.Label': {
      color: '#374151',            // Gray-700
      fontWeight: '500',
    },
    '.Input': {
      border: '1px solid #d1d5db', // Gray-300
      boxShadow: 'none',
    },
    '.Input:focus': {
      border: '1px solid #d97706', // Amber-600
      boxShadow: '0 0 0 3px rgba(217, 119, 6, 0.1)',
    },
    '.Tab': {
      border: '1px solid #e5e7eb',
      boxShadow: 'none',
    },
    '.Tab:hover': {
      color: '#d97706',
    },
    '.Tab--selected': {
      borderColor: '#d97706',
      boxShadow: '0 0 0 1px #d97706',
    },
    '.TabLabel': {
      fontWeight: '500',
    },
  },
}

export default function CheckoutPage() {
  const { items } = useCart()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getQuantityLabel = (quantityType: string) => {
    switch (quantityType) {
      case "single": return "Single Cigar"
      case "3pack": return "3 Pack"
      case "10pack": return "10 Pack"
      case "box": return "Full Box"
      default: return quantityType
    }
  }

  useEffect(() => {
    // Create checkout session on mount
    const createCheckoutSession = async () => {
      try {
        const response = await fetch('/api/checkout-session', {
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

        if (data.clientSecret) {
          setClientSecret(data.clientSecret)
        } else {
          setError('Failed to create checkout session')
        }
      } catch (err) {
        console.error('Checkout error:', err)
        setError('Error loading checkout. Please try again.')
      }
    }

    if (items.length > 0) {
      createCheckoutSession()
    }
  }, [items])

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white ${playfair.className}`}>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-gray-900">Don Rogelio</span>
            </Link>

            <Link 
              href="/shop"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Shop
            </Link>
          </div>
        </div>
      </header>

      {/* Checkout Content */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container max-w-2xl mx-auto">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6">
                Add some items to your cart before checking out
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                Error
              </h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Shop
              </Link>
            </div>
          ) : !clientSecret ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading checkout...</p>
            </div>
          ) : (
            <div id="checkout">
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ 
                  clientSecret,
                  appearance
                }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

