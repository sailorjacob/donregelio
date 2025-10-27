"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {

  // Product data with closed box (default) and individual cigar (hover) images
  const products = [
    {
      id: "robusto",
      name: "Robusto",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "doubletoro",
      name: "Double Toro",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "lancero",
      name: "Lancero",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "perfecto",
      name: "Perfecto",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "salamon",
      name: "Salamon",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "toro",
      name: "Toro",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "torpedo",
      name: "Torpedo",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    },
    {
      id: "taco",
      name: "Taco",
      closedImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png"
    }
  ]

  // Get current image based on hover state
  const getCurrentImage = (productId: string) => {
    const product = products.find(p => p.id === productId)
    if (!product) return ""

    return product.closedImage
  }

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-blue-700 bg-blue-900/80">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                  <Image
                    src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                    alt="Don Rogelio"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  href="/history"
                  className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300"
                >
                  heritage
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 overflow-hidden border-2 border-amber-400">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                alt="Don Rogelio Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

            {/* Product Showcase - All Cigar Collection */}
            <div className="mt-12 mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 opacity-90">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src={getCurrentImage(product.id)}
                      alt={`${product.name} Cigar`}
                      width={150}
                      height={90}
                      className="object-contain drop-shadow-lg mx-auto transition-all duration-300"
                    />
                  </motion.div>
                  <p className="text-xs text-blue-200 text-center mt-2 font-light transition-colors duration-300 group-hover:text-white">
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}
