"use client"

import Link from "next/link"
import Image from "next/image"

export default function CacaoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-700 bg-blue-900/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-300">
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
              <Link href="/shop" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                Cigars
              </Link>
              <span className="text-blue-200/50">•</span>
              <Link href="/rum" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                Rum
              </Link>
              <span className="text-blue-200/50">•</span>
              <Link href="/cacao" className="text-sm font-light text-blue-300 hover:text-white transition-colors duration-300">
                Cacao
              </Link>
              <span className="text-blue-200/50">•</span>
              <Link href="/coffee" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                Coffee
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Coming Soon Content */}
      <div className="text-center">
        <h1 className="text-sm font-light text-blue-300">
          Coming Soon
        </h1>
      </div>
    </main>
  )
}

