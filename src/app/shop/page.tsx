"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface Product {
  id: string
  name: string
  image: string
  hoverImage?: string
  description: string
}

export default function ShopPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>("robusto")
  const [hoveredProductImage, setHoveredProductImage] = useState<Record<string, boolean>>({})

  // Prevent body scroll when product is selected (desktop only)
  useEffect(() => {
    // Only lock scroll on desktop to avoid mobile browser issues
    if (selectedProduct && window.innerWidth >= 768) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProduct])

  // Product selection function
  const selectProduct = (productId: string) => {
    setSelectedProduct(productId === selectedProduct ? null : productId)
  };

  // Image hover functions
  const handleProductHover = (productId: string, isHovering: boolean) => {
    setHoveredProductImage(prev => ({
      ...prev,
      [productId]: isHovering
    }))
  };

  // Get current image for product (hover state)
  const getCurrentImage = (product: Product) => {
    // Default to hover image (individual cigar) when selected
    if (product.hoverImage) {
      return product.hoverImage
    }
    // Fallback to main image
    return product.image
  }

  // 🎨 CUSTOMIZE YOUR PRODUCTS HERE
  const products: Product[] = [
    {
      id: "robusto",
      name: "Robusto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "ROBUSTO SIZE: 52 X 5 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "doubletoro",
      name: "Double Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png",
      description: "DOUBLE TORO SIZE: 60 X 6 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "lancero",
      name: "Lancero",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png",
      description: "LANCERO SIZE: 40 X 7/2 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "perfecto",
      name: "Perfecto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
      description: "SOLOMON SIZE: 57 x 7/4 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "salamon",
      name: "Salamon",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
      description: "SOLOMON SIZE: 57 x 7/4 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "toro",
      name: "Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
      description: "Premium handcrafted Toro cigar from the Dominican Republic. Features Corojo capote, piloto mejorado and criollo 98 corojo tripa, available in Habano, Maduro, and Connecticut wrapper layers. Perfect balance of size and smoking time."
    },
    {
      id: "torpedo",
      name: "Torpedo",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
      description: "Premium handcrafted Torpedo cigar from the Dominican Republic. Features Corojo capote, piloto mejorado and criollo 98 corojo tripa, available in Habano, Maduro, and Connecticut wrapper layers. Sophisticated tapered head for enhanced flavor concentration."
    },
    {
      id: "taco",
      name: "Taco",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png",
      description: "TACO SIZE: 54 X 4/2 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-blue-700 bg-blue-900/80">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden">
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
                <Link href="/history" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  History
                </Link>
                <Link href="/shop" className="text-sm font-light text-blue-300 hover:text-white transition-colors duration-300">
                  Cigars
                </Link>
                <Link href="/rum" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  Rum
                </Link>
                <Link href="/cacao" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  Cacao
                </Link>
                <Link href="/coffee" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  Coffee
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-blue-800 transition-colors duration-200 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-blue-200" /> : <Menu className="w-5 h-5 text-blue-200" />}
              </button>
            </div>
          </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-blue-700 bg-blue-900">
            <div className="container mx-auto px-6 py-4 space-y-3">
              <Link href="/" className="block text-sm text-blue-200 hover:text-white active:text-white transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-blue-800 active:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/history" className="block text-sm text-blue-200 hover:text-white active:text-white transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-blue-800 active:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                History
              </Link>
              <Link href="/shop" className="block text-sm text-blue-200 hover:text-white active:text-white transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-blue-800 active:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Cigars
              </Link>
              <Link href="/rum" className="block text-sm text-blue-200 hover:text-white active:text-white transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-blue-800 active:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Rum
              </Link>
              <Link href="/cacao" className="block text-sm text-blue-200 hover:text-white active:text-white transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-blue-800 active:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Cacao
              </Link>
              <Link href="/coffee" className="block text-sm text-blue-200 hover:text-white active:text-white transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-blue-800 active:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Coffee
              </Link>
            </div>
          </div>
        )}
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-16 sm:pt-20 px-4 sm:px-6 pb-12 min-h-screen">
        <div className="container max-w-7xl mx-auto">
          {/* Mobile Navigation Tabs */}
          <div className="md:hidden mb-6 -mx-4 px-4">
            <div className="flex overflow-x-auto gap-6 pb-3 scrollbar-hide">
              {products.map((product, index) => (
                <motion.button
                  key={`mobile-nav-${product.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => selectProduct(product.id)}
                  className="flex-shrink-0 relative py-2 transition-colors duration-300"
                >
                  <span className={`text-sm font-light tracking-wide ${
                    selectedProduct === product.id ? 'text-white' : 'text-blue-200'
                  }`}>
                    {product.name}
                  </span>
                  {/* Animated golden line */}
                  <motion.div
                    className="absolute left-0 right-0 bottom-0 h-px bg-amber-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: selectedProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop and Mobile Layout */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 min-h-[calc(100vh-10rem)]">
            {/* Desktop Navigation Sidebar */}
            <div className="hidden md:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <div className="space-y-1">
                  {products.map((product, index) => (
                    <motion.button
                      key={`nav-${product.id}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => selectProduct(product.id)}
                      className="relative text-left py-2 transition-colors duration-300 group"
                    >
                      <span className={`font-light tracking-wide ${
                        selectedProduct === product.id ? 'text-white' : 'text-blue-200'
                      } group-hover:text-white transition-colors duration-300`}>
                        {product.name}
                      </span>
                      {/* Animated golden line */}
                      <motion.div
                        className="absolute left-0 bottom-0 h-px bg-amber-400 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        animate={{ scaleX: selectedProduct === product.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Display */}
            <div className="flex-1 min-w-0">
              {selectedProduct ? (
                (() => {
                const product = products.find(p => p.id === selectedProduct)
                if (!product) return null

                return (
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full flex items-center justify-center"
                    >
                      <div className="max-w-2xl w-full mx-auto">
                      {/* Product Image */}
                        <div className="relative h-64 sm:h-80 md:h-96 mb-6 md:mb-8">
                        <Image
                          src={getCurrentImage(product)}
                          alt={product.name}
                          fill
                          className="object-contain p-4 sm:p-6 md:p-8 transition-all duration-700 ease-in-out"
                        />
                      </div>

                      {/* Product Info */}
                        <div className="space-y-3">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide">
                            {product.name}
                          </h1>

                          <p className="text-xs sm:text-sm text-blue-300 leading-relaxed max-w-xl font-extralight">
                            {product.description}
                          </p>
                        </div>
                    </div>
                  </motion.div>
                )
                })()
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 border-2 border-white/20 flex items-center justify-center rounded-full">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 border border-white/30 rounded-full"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-blue-200 mb-2">Select a Cigar</h3>
                    <p className="text-sm sm:text-base text-blue-300 font-light">Choose from the tabs above</p>
                  </div>
                </div>
              )}
                </div>
                    </div>
                  </div>
      </section>
    </main>
  )
}