"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, ShoppingCart, Plus } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import WhatsAppButton from "@/components/WhatsAppButton"
import { useCart } from "@/contexts/CartContext"
import Cart from "@/components/Cart"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

interface Accessory {
  id: string
  name: string
  image: string
  description: string
  price: number
  category: "cutter" | "lighter" | "other"
}

export default function AccessoriesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { addItem, getTotalItems, openCart } = useCart()

  // Accessories catalog
  const accessories: Accessory[] = [
    {
      id: "v-cutter",
      name: "V-Cut Cigar Cutter",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop",
      description: "Premium stainless steel V-cut cutter for perfect cuts every time. Creates a wedge-shaped notch for optimal draw.",
      price: 25,
      category: "cutter"
    },
    {
      id: "guillotine-cutter",
      name: "Guillotine Cigar Cutter",
      image: "https://images.unsplash.com/photo-1611329532992-4e6d46c3c28e?w=400&h=400&fit=crop",
      description: "Double-blade guillotine cutter with surgical-grade stainless steel blades. Clean, precise cuts.",
      price: 30,
      category: "cutter"
    },
    {
      id: "torch-lighter",
      name: "Triple Flame Torch Lighter",
      image: "https://images.unsplash.com/photo-1606161290889-77950cfb67d3?w=400&h=400&fit=crop",
      description: "Triple flame butane torch lighter. Wind-resistant flames for perfect lighting in any condition.",
      price: 35,
      category: "lighter"
    },
    {
      id: "soft-flame-lighter",
      name: "Soft Flame Lighter",
      image: "https://images.unsplash.com/photo-1606303069091-35b918e21efe?w=400&h=400&fit=crop",
      description: "Classic soft flame lighter. Elegant design with reliable ignition. Refillable butane.",
      price: 28,
      category: "lighter"
    },
    {
      id: "punch-cutter",
      name: "Punch Cigar Cutter",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=400&h=400&fit=crop",
      description: "Circular punch cutter creates a small hole for concentrated flavor. Compact and portable.",
      price: 18,
      category: "cutter"
    },
    {
      id: "table-lighter",
      name: "Table Top Lighter",
      image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=400&fit=crop",
      description: "Elegant desktop lighter with single flame. Perfect for home or office. Heavy-duty construction.",
      price: 45,
      category: "lighter"
    }
  ]

  const handleAddToCart = (accessory: Accessory) => {
    addItem({
      productId: accessory.id,
      productName: accessory.name,
      quantityType: 'single',
      price: accessory.price,
      image: accessory.image
    })
  }

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
                <Link href="/accessories" className="text-sm font-medium text-amber-600 transition-colors duration-300">
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
              <Link href="/" className="block text-sm text-gray-700 hover:text-amber-600 transition-colors py-3 px-4" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/history" className="block text-sm text-gray-700 hover:text-amber-600 transition-colors py-3 px-4" onClick={() => setMobileMenuOpen(false)}>
                History
              </Link>
              <Link href="/shop" className="block text-sm text-gray-700 hover:text-amber-600 transition-colors py-3 px-4" onClick={() => setMobileMenuOpen(false)}>
                Cigars
              </Link>
              <Link href="/accessories" className="block text-sm text-amber-600 transition-colors py-3 px-4" onClick={() => setMobileMenuOpen(false)}>
                Accessories
              </Link>
              <Link href="/gallery" className="block text-sm text-gray-700 hover:text-amber-600 transition-colors py-3 px-4" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
            </div>
          </div>
        )}
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 px-4 sm:px-6 pb-12">
        <div className="container max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Accessories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium cutters and lighters to enhance your cigar experience
            </p>
          </div>

          {/* Accessories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((accessory, index) => (
              <motion.div
                key={accessory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {accessory.category === 'cutter' ? 'Cutter' : 'Lighter'}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {accessory.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {accessory.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${accessory.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(accessory)}
                      className="px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Cart />
    </main>
  )
}

