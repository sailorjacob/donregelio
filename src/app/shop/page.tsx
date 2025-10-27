"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

interface Product {
  id: string
  name: string
  image: string
  hoverImage?: string
  description: string
}

export default function ShopPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [hoveredProductImage, setHoveredProductImage] = useState<Record<string, boolean>>({})
  const { theme, setTheme } = useTheme()

  // Prevent body scroll when product is selected
  useEffect(() => {
    if (selectedProduct) {
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
    // Check for hover state
    if (hoveredProductImage[product.id] && product.hoverImage) {
      return product.hoverImage
    }
    // Default to main image
    return product.image
  }

  // 🎨 CUSTOMIZE YOUR PRODUCTS HERE
  const products: Product[] = [
    {
      id: "robusto",
      name: "Robusto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%2520open.png",
      description: "ROBUSTO SIZE: 52 X 5 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "doubletoro",
      name: "Double Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png",
      description: "DOUBLE TORO SIZE: 60 X 6 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "lancero",
      name: "Lancero",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png",
      description: "LANCERO SIZE: 40 X 7/2 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "perfecto",
      name: "Perfecto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
      description: "SOLOMON SIZE: 57 x 7/4 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "salamon",
      name: "Salamon",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
      description: "SOLOMON SIZE: 57 x 7/4 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "toro",
      name: "Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
      description: "Premium handcrafted Toro cigar from the Dominican Republic. Features Corojo capote, piloto mejorado and criollo 98 corojo tripa, available in Habano, Maduro, and Connecticut wrapper layers. Perfect balance of size and smoking time."
    },
    {
      id: "torpedo",
      name: "Torpedo",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo%2520closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
      description: "Premium handcrafted Torpedo cigar from the Dominican Republic. Features Corojo capote, piloto mejorado and criollo 98 corojo tripa, available in Habano, Maduro, and Connecticut wrapper layers. Sophisticated tapered head for enhanced flavor concentration."
    },
    {
      id: "taco",
      name: "Taco",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco%2520closed.png",
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
                <div className="w-8 h-8 overflow-hidden border border-white/30">
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
                  heritage
                  </Link>
                <Link href="/shop" className="text-sm font-light text-blue-300 hover:text-white transition-colors duration-300">
                  cigars
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden p-2 hover:bg-blue-800 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-blue-200" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-200" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-blue-200" /> : <Menu className="w-5 h-5 text-blue-200" />}
              </button>
            </div>
          </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-blue-700 bg-blue-900">
            <div className="container mx-auto px-6 py-4 space-y-3">
              <Link href="/" className="block text-sm text-blue-200 hover:text-white transition-colors tracking-wider uppercase" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </div>
          </div>
        )}
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-20 px-6 pb-12 min-h-screen">
        <div className="container max-w-7xl mx-auto">
          {/* Product Navigation and Display */}
          <div className="flex gap-8 min-h-[calc(100vh-8rem)]">
            {/* Left Navigation Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-xl font-light text-white mb-6 tracking-wide">Our Collection</h2>
                <div className="space-y-2">
                  {products.map((product, index) => (
                    <motion.button
                      key={`nav-${product.id}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                  onClick={() => selectProduct(product.id)}
                  onMouseEnter={() => handleProductHover(product.id, true)}
                  onMouseLeave={() => handleProductHover(product.id, false)}
                      className={`w-full text-left px-4 py-3 transition-all duration-300 border ${
                        selectedProduct === product.id
                          ? 'border-white/30 bg-white/10 text-white'
                          : 'border-white/10 bg-white/5 text-blue-200 hover:border-white/20 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                        <span className="font-light tracking-wide">{product.name}</span>
                    </motion.button>
                        ))}
                      </div>
                    </div>
                    </div>

            {/* Center Product Display */}
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
                      <div className="max-w-2xl w-full">
                      {/* Product Image */}
                        <div className="relative h-96 mb-8 overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                        <Image
                          src={getCurrentImage(product)}
                          alt={product.name}
                          fill
                            className="object-contain p-8 transition-all duration-700 ease-in-out"
                            key={`${product.id}-${hoveredProductImage[product.id] ? 'hover' : 'normal'}`}
                        />

                          {/* Image Toggle */}
                        {product.hoverImage && (
                            <div className="absolute top-4 right-4 flex space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleProductHover(product.id, false)
                              }}
                                className={`px-3 py-1 text-xs transition-all duration-200 ${
                                !hoveredProductImage[product.id]
                                    ? 'bg-white/20 text-white border border-white/30'
                                    : 'bg-white/10 text-blue-200 hover:bg-white/15 border border-white/20'
                              }`}
                            >
                              Full
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleProductHover(product.id, true)
                              }}
                                className={`px-3 py-1 text-xs transition-all duration-200 ${
                                hoveredProductImage[product.id]
                                    ? 'bg-white/20 text-white border border-white/30'
                                    : 'bg-white/10 text-blue-200 hover:bg-white/15 border border-white/20'
                              }`}
                            >
                                Detail
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                        <div className="text-center space-y-6">
                          <div>
                            <h1 className="text-4xl font-light text-white mb-6 tracking-wide">
                            {product.name}
                            </h1>
                        </div>

                          <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto font-light">
                            {product.description}
                          </p>
                      </div>
                    </div>
                  </motion.div>
                )
                })()
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 border-2 border-white/20 flex items-center justify-center">
                      <div className="w-12 h-12 border border-white/30"></div>
                    </div>
                    <h3 className="text-2xl font-light text-blue-200 mb-2">Select a Cigar</h3>
                    <p className="text-blue-300 font-light">Choose from our collection on the left</p>
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