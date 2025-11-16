"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Playfair_Display } from "next/font/google"
import { useCart } from "@/contexts/CartContext"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

function ReturnContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { clearCart } = useCart()
  const [status, setStatus] = useState<string | null>(null)
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!sessionId) {
      router.push('/shop')
      return
    }

    // Retrieve the checkout session
    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/checkout-status?session_id=${sessionId}`)
        const data = await response.json()

        if (data.status === 'complete') {
          // Clear the cart on successful payment
          clearCart()
          // Redirect to success page
          router.push('/checkout/success?session_id=' + sessionId)
        } else if (data.status === 'open') {
          setStatus('open')
        } else {
          setStatus('error')
        }
      } catch (error) {
        console.error('Error fetching session:', error)
        setStatus('error')
      }
    }

    fetchSession()
  }, [sessionId, router, clearCart])

  if (!sessionId) {
    return null
  }

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center ${playfair.className}`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Processing your order...</p>
        {status === 'error' && (
          <p className="text-red-600 mt-4">There was an error processing your payment</p>
        )}
      </div>
    </main>
  )
}

export default function ReturnPage() {
  return (
    <Suspense fallback={
      <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center ${playfair.className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    }>
      <ReturnContent />
    </Suspense>
  )
}

