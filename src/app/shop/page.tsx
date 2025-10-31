"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

interface Product {
  id: string
  name: string
  image: string
  hoverImage?: string
  openBoxImage?: string
  description: string
}

export default function ShopPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>("robusto")
  const [hoveredProductImage, setHoveredProductImage] = useState<Record<string, boolean>>({})
  const [isProductHovered, setIsProductHovered] = useState(false)
  const [selectedQuantity, setSelectedQuantity] = useState<"single" | "5pack" | "box">("single")

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
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
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
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero%20clear2.png",
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
    <main className={`min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-stone-950 text-white relative ${playfair.className}`}>
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/5 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Crown Molding Corners */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-500/40 pointer-events-none z-50 shadow-[0_0_20px_rgba(217,119,6,0.3)]"></div>
      <div className="fixed top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-amber-500/40 pointer-events-none z-50 shadow-[0_0_20px_rgba(217,119,6,0.3)]"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-amber-500/40 pointer-events-none z-50 shadow-[0_0_20px_rgba(217,119,6,0.3)]"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-500/40 pointer-events-none z-50 shadow-[0_0_20px_rgba(217,119,6,0.3)]"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b-2 border-amber-600/30 bg-zinc-950/80 shadow-[0_0_30px_rgba(217,119,6,0.15)]">
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
                <Link href="/history" className="text-sm font-medium tracking-wider text-amber-200 hover:text-amber-400 transition-colors duration-300 uppercase">
                  History
                </Link>
                <Link href="/shop" className="text-sm font-medium tracking-wider text-amber-100 hover:text-amber-400 transition-colors duration-300 uppercase">
                  Cigars
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-amber-900/30 transition-colors duration-200 rounded-lg border border-amber-600/30"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-200" /> : <Menu className="w-5 h-5 text-amber-200" />}
              </button>
            </div>
          </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b-2 border-amber-700/50 bg-zinc-950/95">
            <div className="container mx-auto px-6 py-4 space-y-3">
              <Link href="/" className="block text-sm text-amber-200 hover:text-amber-400 active:text-amber-400 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-amber-900/20 active:bg-amber-900/30 border border-amber-600/20" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/history" className="block text-sm text-amber-200 hover:text-amber-400 active:text-amber-400 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-amber-900/20 active:bg-amber-900/30 border border-amber-600/20" onClick={() => setMobileMenuOpen(false)}>
                History
              </Link>
              <Link href="/shop" className="block text-sm text-amber-200 hover:text-amber-400 active:text-amber-400 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-amber-900/20 active:bg-amber-900/30 border border-amber-600/20" onClick={() => setMobileMenuOpen(false)}>
                Cigars
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
                  className="flex-shrink-0 relative py-2 px-3 transition-colors duration-300"
                >
                  <span className={`text-sm font-medium whitespace-nowrap tracking-wide ${
                    selectedProduct === product.id ? 'text-amber-100' : 'text-amber-300/70'
                  }`}>
                    {product.name}
                  </span>
                  {/* Animated golden line with glow */}
                  <motion.div
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
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
              <div className="sticky top-24 border-2 border-amber-600/30 rounded-lg p-4 bg-gradient-to-b from-zinc-900/50 to-neutral-900/50 shadow-[0_0_30px_rgba(217,119,6,0.15)]">
                <div className="space-y-1">
                  {products.map((product, index) => (
                    <motion.button
                      key={`nav-${product.id}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => selectProduct(product.id)}
                      className="relative block w-full text-left py-2 px-3 transition-all duration-300 group rounded-md"
                    >
                      <span className={`block font-medium text-sm tracking-wide ${
                        selectedProduct === product.id ? 'text-amber-100' : 'text-amber-300/70'
                      } group-hover:text-amber-100 transition-colors duration-300 whitespace-nowrap`}>
                        {product.name}
                      </span>
                      {/* Animated golden line with glow */}
                      <motion.div
                        className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 origin-left shadow-[0_0_8px_rgba(251,191,36,0.6)]"
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
                      <div className="max-w-4xl w-full mx-auto">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                          {/* Left side - Product Image */}
                          <div className="flex-1 w-full">
                            <div 
                              className="relative h-64 sm:h-80 md:h-96 mb-6 md:mb-8 rounded-lg border-4 border-amber-500/50 shadow-[0_0_40px_rgba(217,119,6,0.4),inset_0_0_40px_rgba(217,119,6,0.1)] bg-gradient-to-br from-zinc-900/30 to-neutral-950/30 p-2"
                              style={{
                                boxShadow: '0 0 40px rgba(217,119,6,0.4), inset 0 0 40px rgba(217,119,6,0.1), 0 0 0 1px rgba(217,119,6,0.2) inset, 0 0 0 8px rgba(0,0,0,0.3) inset'
                              }}
                              onMouseEnter={() => setIsProductHovered(true)}
                              onMouseLeave={() => setIsProductHovered(false)}
                            >
                              {/* Inner frame for embossing effect */}
                              <div className="absolute inset-2 border border-amber-400/20 rounded pointer-events-none"></div>
                              <Image
                                src={getCurrentImage(product)}
                                alt={product.name}
                                fill
                                className="object-contain p-6 sm:p-8 md:p-10 transition-all duration-700 ease-in-out"
                              />
                            </div>

                            {/* Product Info */}
                            <div className="space-y-4 border-l-2 border-amber-500/30 pl-6">
                              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-100 tracking-wider uppercase italic drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                                {product.name}
                              </h1>

                              <p className="text-sm sm:text-base text-amber-200/90 leading-relaxed max-w-xl font-light">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          {/* Right side - Purchase Options (shown on hover) */}
                          {isProductHovered && product.openBoxImage && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                              className="hidden lg:block w-72 flex-shrink-0"
                            >
                              {/* Open Box Image */}
                              <div className="relative h-48 mb-4 rounded-lg border-4 border-amber-500/50 shadow-[0_0_40px_rgba(217,119,6,0.4),inset_0_0_40px_rgba(217,119,6,0.1)] bg-gradient-to-br from-zinc-900/30 to-neutral-950/30 p-2"
                                style={{
                                  boxShadow: '0 0 40px rgba(217,119,6,0.4), inset 0 0 40px rgba(217,119,6,0.1), 0 0 0 1px rgba(217,119,6,0.2) inset, 0 0 0 8px rgba(0,0,0,0.3) inset'
                                }}
                              >
                                <div className="absolute inset-2 border border-amber-400/20 rounded pointer-events-none"></div>
                                <Image
                                  src={product.openBoxImage}
                                  alt={`${product.name} Open Box`}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>

                              {/* Purchase Options */}
                              <div className="bg-gradient-to-br from-zinc-900/60 to-neutral-950/60 backdrop-blur-sm border-2 border-amber-600/40 rounded-lg p-4 shadow-[0_0_30px_rgba(217,119,6,0.2)]">
                                <h3 className="text-xl font-semibold text-amber-100 mb-4 tracking-wide uppercase">Order Options</h3>
                                <div className="space-y-2">
                                  <button
                                    onClick={() => setSelectedQuantity("single")}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                      selectedQuantity === "single"
                                        ? "bg-amber-500/30 border-2 border-amber-400 text-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                                        : "bg-zinc-900/30 border-2 border-amber-600/30 text-amber-200/70 hover:bg-amber-900/20 hover:border-amber-500/50"
                                    }`}
                                  >
                                    <div className="font-medium tracking-wide">Single Cigar</div>
                                    <div className="text-xs text-amber-300/70 mt-1">Individual purchase</div>
                                  </button>

                                  <button
                                    onClick={() => setSelectedQuantity("5pack")}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                      selectedQuantity === "5pack"
                                        ? "bg-amber-500/30 border-2 border-amber-400 text-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                                        : "bg-zinc-900/30 border-2 border-amber-600/30 text-amber-200/70 hover:bg-amber-900/20 hover:border-amber-500/50"
                                    }`}
                                  >
                                    <div className="font-medium tracking-wide">5 Pack</div>
                                    <div className="text-xs text-amber-300/70 mt-1">Five cigars</div>
                                  </button>

                                  <button
                                    onClick={() => setSelectedQuantity("box")}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                      selectedQuantity === "box"
                                        ? "bg-amber-500/30 border-2 border-amber-400 text-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                                        : "bg-zinc-900/30 border-2 border-amber-600/30 text-amber-200/70 hover:bg-amber-900/20 hover:border-amber-500/50"
                                    }`}
                                  >
                                    <div className="font-medium tracking-wide">Full Box</div>
                                    <div className="text-xs text-amber-300/70 mt-1">Complete collection</div>
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                    </div>
                  </motion.div>
                )
                })()
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 border-2 border-amber-500/40 flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(217,119,6,0.3)]">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 border border-amber-400/50 rounded-full"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-amber-200 mb-2 tracking-wide uppercase">Select a Cigar</h3>
                    <p className="text-sm sm:text-base text-amber-300/70 font-light">Choose from the collection</p>
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