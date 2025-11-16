"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, ShoppingCart, Plus } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import WhatsAppButton from "@/components/WhatsAppButton"
import { useCart } from "@/contexts/CartContext"
import Cart from "@/components/Cart"
import { useLanguage } from "@/contexts/LanguageContext"

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
  const [selectedQuantity, setSelectedQuantity] = useState<"single" | "3pack" | "10pack" | "box">("single")
  const { addItem, getTotalItems, openCart } = useCart()
  const { currency } = useLanguage()

  // Pricing structure per cigar type - FLAT RATES
  const cigarPricesUSD: { [key: string]: number } = {
    robusto: 10,
    doubletoro: 15,
    lancero: 12,
    perfecto: 10,
    salamon: 12.50,
    toro: 11,
    torpedo: 11,
    taco: 9
  }

  const cigarPricesDOP: { [key: string]: number } = {
    robusto: 600,
    doubletoro: 950,
    lancero: 750,
    perfecto: 600,
    salamon: 800,
    toro: 700,
    torpedo: 700,
    taco: 575
  }

  // Get base price for selected product based on currency
  const getBasePrice = () => {
    if (!selectedProduct) return 0
    const prices = currency === "DOP" ? cigarPricesDOP : cigarPricesUSD
    return prices[selectedProduct] || (currency === "DOP" ? 600 : 10)
  }

  // Get price based on quantity with volume discounts
  const getPrice = () => {
    const basePrice = getBasePrice()
    switch (selectedQuantity) {
      case "single":
        return basePrice  // No discount
      case "3pack":
        return Math.round(basePrice * 3 * 0.9 * 100) / 100  // 10% discount
      case "10pack":
        return Math.round(basePrice * 10 * 0.8 * 100) / 100  // 20% discount
      case "box":
        return Math.round(basePrice * 20 * 0.7 * 100) / 100  // 30% discount for 20 cigars
      default:
        return basePrice
    }
  }

  // Format price with currency symbol
  const formatPrice = (price: number) => {
    if (currency === "DOP") {
      return `RD$${price.toLocaleString()}`
    }
    return `$${price.toFixed(2)}`
  }

  // Get the alternate currency price for display
  const getAlternateCurrencyDisplay = (priceUSD: number, priceDOP: number) => {
    if (currency === "USD") {
      return `RD$${priceDOP.toLocaleString()}`
    }
    return `$${priceUSD.toFixed(2)}`
  }

  // Get both currency prices for a product
  const getBothPrices = (productId: string, quantity: "single" | "3pack" | "10pack" | "box") => {
    const basePriceUSD = cigarPricesUSD[productId] || 10
    const basePriceDOP = cigarPricesDOP[productId] || 600

    let multiplier = 1
    let discount = 1

    switch (quantity) {
      case "single":
        multiplier = 1
        discount = 1
        break
      case "3pack":
        multiplier = 3
        discount = 0.9  // 10% off
        break
      case "10pack":
        multiplier = 10
        discount = 0.8  // 20% off
        break
      case "box":
        multiplier = 20
        discount = 0.7  // 30% off
        break
    }

    const priceUSD = Math.round(basePriceUSD * multiplier * discount * 100) / 100
    const priceDOP = Math.round(basePriceDOP * multiplier * discount)

    return { priceUSD, priceDOP }
  }

  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedProduct) return

    const product = products.find(p => p.id === selectedProduct)
    if (!product) return

    addItem({
      productId: product.id,
      productName: product.name,
      quantityType: selectedQuantity,
      price: getPrice(),
      image: product.hoverImage || product.image,
      currency: currency
    })
  }

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

  // Get current image for product based on selected quantity
  const getCurrentImage = (product: Product) => {
    if (selectedQuantity === "box") {
      // Show closed box image for full box
      return product.image
    } else if (selectedQuantity === "single") {
      // Show single cigar for single selection
      return product.hoverImage || product.image
    }
    // For packs, this won't be used (pack images are shown instead)
    return product.hoverImage || product.image
  }


  // Get pack image URL for main display
  const getPackImage = () => {
    switch (selectedQuantity) {
      case "3pack":
        return "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/3pack.png"
      case "10pack":
        return "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/10pack.png"
      default:
        return null
    }
  }

  // Get preview image based on selected quantity (for right side preview)
  const getPreviewImage = (product: Product): string => {
    if (selectedQuantity === "box") {
      return product.openBoxImage || product.image // Show open box for full box
    } else if (selectedQuantity === "3pack" || selectedQuantity === "10pack") {
      return product.hoverImage || product.image // Show single cigar for packs
    } else {
      // For single, show the single.png image
      return "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/single.png"
    }
  }

  // 🎨 CUSTOMIZE YOUR PRODUCTS HERE
  const products: Product[] = [
    {
      id: "robusto",
      name: "Robusto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robustoreal.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "ROBUSTO SIZE: 52 X 5 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "doubletoro",
      name: "Double Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "DOUBLE TORO SIZE: 60 X 6 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "lancero",
      name: "Lancero",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero%20clear2.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "LANCERO SIZE: 40 X 7/2 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "perfecto",
      name: "Perfecto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "SOLOMON SIZE: 57 x 7/4 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "salamon",
      name: "Salamon",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "SOLOMON SIZE: 57 x 7/4 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    },
    {
      id: "toro",
      name: "Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "Premium handcrafted Toro cigar from the Dominican Republic. Features Corojo capote, piloto mejorado and criollo 98 corojo tripa, available in Habano, Maduro, and Connecticut wrapper layers. Perfect balance of size and smoking time."
    },
    {
      id: "torpedo",
      name: "Torpedo",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "Premium handcrafted Torpedo cigar from the Dominican Republic. Features Corojo capote, piloto mejorado and criollo 98 corojo tripa, available in Habano, Maduro, and Connecticut wrapper layers. Sophisticated tapered head for enhanced flavor concentration."
    },
    {
      id: "taco",
      name: "Taco",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png",
      openBoxImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto open.png",
      description: "TACO SIZE: 54 X 4/2 • Premium Dominican tobacco aged for nearly a year in special English spiced rum barrels. Features exquisite aroma with natural tobacco flavor. Available in Habano, Maduro, and Connecticut wrappers. Capote: Corojo • Tripa: pilotomejorado, criollo98corojo • Capas: habano, maduro, Connecticut."
    }
  ]

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 relative ${playfair.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200 bg-white/90">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-8">
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

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/history" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  History
                </Link>
                <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  Cigars
                </Link>
                <Link href="/accessories" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  Accessories
                </Link>
                <Link href="/gallery" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  Gallery
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Cart Icon with Badge */}
              <button
                onClick={openCart}
                className="relative p-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-amber-600 transition-colors duration-300" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
          </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-gray-200 bg-white">
            <div className="container mx-auto px-6 py-4 space-y-3">
              <Link href="/" className="block text-sm text-gray-700 hover:text-amber-600 active:text-amber-600 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/history" className="block text-sm text-gray-700 hover:text-amber-600 active:text-amber-600 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                History
              </Link>
              <Link href="/shop" className="block text-sm text-gray-700 hover:text-amber-600 active:text-amber-600 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Cigars
              </Link>
              <Link href="/accessories" className="block text-sm text-gray-700 hover:text-amber-600 active:text-amber-600 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Accessories
              </Link>
              <Link href="/gallery" className="block text-sm text-gray-700 hover:text-amber-600 active:text-amber-600 transition-colors tracking-wider uppercase py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Gallery
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
                  <span className={`text-sm font-medium whitespace-nowrap ${
                    selectedProduct === product.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {product.name}
                  </span>
                  {/* Animated golden line */}
                  <motion.div
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-amber-600"
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
                      className="relative block w-full text-left py-1.5 transition-colors duration-300 group"
                    >
                      <span className={`block font-medium text-sm ${
                        selectedProduct === product.id ? 'text-gray-900' : 'text-gray-700'
                      } group-hover:text-amber-600 transition-colors duration-300 whitespace-nowrap`}>
                        {product.name}
                      </span>
                      {/* Animated golden line */}
                      <motion.div
                        className="absolute left-0 bottom-0 h-0.5 bg-amber-600 origin-left"
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
                              className="relative h-64 sm:h-80 md:h-96 mb-6 md:mb-8 rounded-lg border border-gray-200 p-2 bg-white shadow-sm"
                            >
                              {getPackImage() ? (
                                // Render pack image for 3pack, 5pack, or 10pack
                                <Image
                                  src={getPackImage()!}
                                  alt={`${product.name} ${selectedQuantity}`}
                                  fill
                                  className="object-contain p-6 sm:p-8 md:p-10 transition-all duration-700 ease-in-out"
                                />
                              ) : (
                                // Render single image for single or box
                                <Image
                                  src={getCurrentImage(product)}
                                  alt={product.name}
                                  fill
                                  className="object-contain p-6 sm:p-8 md:p-10 transition-all duration-700 ease-in-out"
                                />
                              )}
                            </div>

                            {/* Product Info */}
                            <div className="space-y-3">
                              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide">
                                {product.name}
                              </h1>

                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl font-normal">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          {/* Right side - Purchase Options (always shown when product selected) */}
                          {product.openBoxImage && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                              className="w-full lg:w-72 flex-shrink-0"
                            >
                              {/* Preview Image */}
                              <div className="relative h-48 mb-4 rounded-lg border border-gray-200 p-2 bg-white shadow-sm">
                                <Image
                                  src={getPreviewImage(product)}
                                  alt={`${product.name} ${selectedQuantity}`}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>

                              {/* Purchase Options */}
                              <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Order Options</h3>
                                <div className="space-y-1">
                                  <button
                                    onClick={() => setSelectedQuantity("single")}
                                    className={`w-full text-left px-4 py-3 transition-colors duration-200 rounded ${
                                      selectedQuantity === "single"
                                        ? "bg-gray-300 text-gray-900"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-sm">Single Cigar</span>
                                      <div className="text-right">
                                        <span className="text-sm font-semibold block">{formatPrice(getBasePrice())}</span>
                                        {selectedProduct && (
                                          <span className="text-xs text-gray-500">
                                            {getAlternateCurrencyDisplay(
                                              getBothPrices(selectedProduct, "single").priceUSD,
                                              getBothPrices(selectedProduct, "single").priceDOP
                                            )}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </button>

                                  <button
                                    onClick={() => setSelectedQuantity("3pack")}
                                    className={`w-full text-left px-4 py-3 transition-colors duration-200 rounded ${
                                      selectedQuantity === "3pack"
                                        ? "bg-gray-300 text-gray-900"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-sm">3 Pack (10% off)</span>
                                      <div className="text-right">
                                        <span className="text-sm font-semibold block">{formatPrice(Math.round(getBasePrice() * 3 * 0.9 * 100) / 100)}</span>
                                        {selectedProduct && (
                                          <span className="text-xs text-gray-500">
                                            {getAlternateCurrencyDisplay(
                                              getBothPrices(selectedProduct, "3pack").priceUSD,
                                              getBothPrices(selectedProduct, "3pack").priceDOP
                                            )}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </button>

                                  <button
                                    onClick={() => setSelectedQuantity("10pack")}
                                    className={`w-full text-left px-4 py-3 transition-colors duration-200 rounded ${
                                      selectedQuantity === "10pack"
                                        ? "bg-gray-300 text-gray-900"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-sm">10 Pack (20% off)</span>
                                      <div className="text-right">
                                        <span className="text-sm font-semibold block">{formatPrice(Math.round(getBasePrice() * 10 * 0.8 * 100) / 100)}</span>
                                        {selectedProduct && (
                                          <span className="text-xs text-gray-500">
                                            {getAlternateCurrencyDisplay(
                                              getBothPrices(selectedProduct, "10pack").priceUSD,
                                              getBothPrices(selectedProduct, "10pack").priceDOP
                                            )}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </button>

                                  <button
                                    onClick={() => setSelectedQuantity("box")}
                                    className={`w-full text-left px-4 py-3 transition-colors duration-200 rounded ${
                                      selectedQuantity === "box"
                                        ? "bg-gray-300 text-gray-900"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-sm">Full Box - 20 cigars (30% off)</span>
                                      <div className="text-right">
                                        <span className="text-sm font-semibold block">{formatPrice(Math.round(getBasePrice() * 20 * 0.7 * 100) / 100)}</span>
                                        {selectedProduct && (
                                          <span className="text-xs text-gray-500">
                                            {getAlternateCurrencyDisplay(
                                              getBothPrices(selectedProduct, "box").priceUSD,
                                              getBothPrices(selectedProduct, "box").priceDOP
                                            )}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </button>
                                </div>

                                {/* Price and Add to Cart Button */}
                                <div className="pt-4 border-t border-gray-200">
                                  <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-gray-600">Price</span>
                                    <div className="text-right">
                                      <span className="text-2xl font-bold text-gray-900 block">{formatPrice(getPrice())}</span>
                                      {selectedProduct && (
                                        <span className="text-xs text-gray-500 block mt-1">
                                          {getAlternateCurrencyDisplay(
                                            getBothPrices(selectedProduct, selectedQuantity).priceUSD,
                                            getBothPrices(selectedProduct, selectedQuantity).priceDOP
                                          )}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  <button
                                    onClick={handleAddToCart}
                                    className="w-full px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2 group"
                                  >
                                    <Plus className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-700" />
                                    Add to Cart
                                  </button>

                                  <button
                                    onClick={openCart}
                                    className="w-full mt-2 px-6 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 text-sm"
                                  >
                                    View Cart ({getTotalItems()})
                                  </button>

                                  <p className="text-xs text-gray-500 text-center mt-3">
                                    Secure checkout powered by Stripe
                                  </p>
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
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 border-2 border-gray-300 flex items-center justify-center rounded-full">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 border border-gray-300 rounded-full"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-2">Select a Cigar</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-normal">Choose from the tabs above</p>
                  </div>
                </div>
              )}
                </div>
                    </div>
                  </div>
      </section>

      <WhatsAppButton />
      <Cart />
    </main>
  )
}