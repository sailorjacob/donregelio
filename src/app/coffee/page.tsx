"use client"

import Link from "next/link"
import Image from "next/image"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 flex items-center justify-center">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
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
            <div className="flex items-center space-x-2">
              <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                Cigars
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/coffee" className="text-sm font-medium text-amber-600 transition-colors duration-300">
                Coffee
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/cacao" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                Chocolate
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/rum" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                Rum
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Coming Soon Content */}
      <div className="text-center">
        <h1 className="text-sm font-medium text-gray-700">
          Coming Soon
        </h1>
      </div>

      <WhatsAppButton />
    </main>
  )
}

