"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import ProcessDropdown from "@/components/ProcessDropdown"

interface Product {
  id: string
  name: string
  image: string
  hoverImage?: string
  packImages?: {
    single: string
    pack5: string
    box20: string
  }
  description: string
  price: string
  paymentLink: string
}

export default function ShopPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set())
  const [processOpen, setProcessOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productSizes, setProductSizes] = useState<Record<string, string>>({})
  const [showNotification, setShowNotification] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [hoveredProductImage, setHoveredProductImage] = useState<Record<string, boolean>>({})
  const [imageUpdateTrigger, setImageUpdateTrigger] = useState(0)
  const { theme, setTheme } = useTheme()

  // Handle checkout navigation
  const handleCheckoutNavigation = (url: string) => {
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = url
  }

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

  // Get seeded random color for navigation
  const getSeededRandomColor = (seed: string) => {
    const hash = seed.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)
    const colors = ['text-green-500', 'text-red-500', 'text-yellow-500']
    return colors[Math.abs(hash) % colors.length]
  }

  const navColors = {
    studio: getSeededRandomColor('studio'),
    work: getSeededRandomColor('work'),
    gallery: getSeededRandomColor('gallery'),
    contact: getSeededRandomColor('contact')
  }

  // Add to cart function
  const addToCart = (product: Product) => {
    const selectedSize = productSizes[product.id] || 'Single' // Default to Single if no size selected
    const cartItemId = `${product.id}-${selectedSize}`

    setCartItems(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId)
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, cartItemId, size: selectedSize, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  // Remove from cart function
  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId))
  }

  // Update cart item quantity
  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    )
  }

  // Toggle heart/like functionality
  const toggleLike = async (productId: string) => {
    const newLikedProducts = new Set(likedProducts)
    if (newLikedProducts.has(productId)) {
      newLikedProducts.delete(productId)
    } else {
      newLikedProducts.add(productId)
      // Copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        // Show notification
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 2000)
      } catch (err) {
        console.error('Failed to copy link:', err)
      }
    }
    setLikedProducts(newLikedProducts)
  }

  // Size selection function
  const selectSize = (productId: string, size: string) => {
    setProductSizes(prev => ({
      ...prev,
      [productId]: size
    }))
    // Force image update
    setImageUpdateTrigger(prev => prev + 1)
  }

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Product selection function - desktop only
  const selectProduct = (productId: string) => {
    if (isMobile) return // Disable on mobile
    setSelectedProduct(productId === selectedProduct ? null : productId)
  }

  // Image hover functions
  const handleProductHover = (productId: string, isHovering: boolean) => {
    setHoveredProductImage(prev => ({
      ...prev,
      [productId]: isHovering
    }))
    // Force image update
    setImageUpdateTrigger(prev => prev + 1)
  }

  // Get current image for product (hover state and pack size)
  const getCurrentImage = (product: Product) => {
    // First check for hover state
    if (hoveredProductImage[product.id] && product.hoverImage) {
      return product.hoverImage
    }

    // Then check for pack size specific images
    const selectedSize = productSizes[product.id] || 'Single'
    if (product.packImages) {
      switch (selectedSize) {
        case 'Pack of 5':
          return product.packImages.pack5
        case 'Box of 20':
          return product.packImages.box20
        default:
          return product.packImages.single
      }
    }

    // Default to main image
    return product.image
  }

  // Calculate total cart price
  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''))
    return total + (price * item.quantity)
  }, 0)

  // Handle checkout - redirect to payment links or implement your own checkout
  const handleCheckout = () => {
    if (cartItems.length === 1) {
      // Single item - redirect to its specific payment link
      const item = cartItems[0]
      const product = products.find(p => p.id === item.id)
      if (product?.paymentLink) {
        handleCheckoutNavigation(product.paymentLink)
      }
    } else if (cartItems.length > 1) {
      // Multiple items - implement your own multi-item checkout logic
      console.log('Checkout with multiple items:', cartItems)
      // You can integrate with Stripe, PayPal, or any other payment processor
    }
  }

  // 🎨 CUSTOMIZE YOUR PRODUCTS HERE
  const products: Product[] = [
    {
      id: "robusto",
      name: "Robusto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png"
      },
      description: "Our signature robusto cigar. Perfect balance of size and flavor, ideal for everyday enjoyment.",
      price: "$12.50",
      paymentLink: "https://your-payment-link.com/robusto"
    },
    {
      id: "doubletoro",
      name: "Double Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png"
      },
      description: "Premium doubletoro cigar with rich, complex flavors. Perfect for extended smoking sessions.",
      price: "$14.00",
      paymentLink: "https://your-payment-link.com/doubletoro"
    },
    {
      id: "lancero",
      name: "Lancero",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png"
      },
      description: "Elegant lancero cigar offering a refined smoking experience with exceptional draw.",
      price: "$15.00",
      paymentLink: "https://your-payment-link.com/lancero"
    },
    {
      id: "perfecto",
      name: "Perfecto",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png"
      },
      description: "Classic perfecto shape delivering concentrated flavors and perfect construction.",
      price: "$13.50",
      paymentLink: "https://your-payment-link.com/perfecto"
    },
    {
      id: "salamon",
      name: "Salamon",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png"
      },
      description: "Artisan salamon cigar with a unique shape that enhances flavor development.",
      price: "$16.50",
      paymentLink: "https://your-payment-link.com/salamon"
    },
    {
      id: "toro",
      name: "Toro",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png"
      },
      description: "Classic toro cigar with perfect balance of size and smoking time.",
      price: "$11.00",
      paymentLink: "https://your-payment-link.com/toro"
    },
    {
      id: "torpedo",
      name: "Torpedo",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png"
      },
      description: "Sophisticated torpedo cigar with a tapered head for enhanced flavor concentration.",
      price: "$13.00",
      paymentLink: "https://your-payment-link.com/torpedo"
    },
    {
      id: "taco",
      name: "Taco",
      image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png",
      hoverImage: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20open.png",
      packImages: {
        single: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png",
        pack5: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png",
        box20: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png"
      },
      description: "Distinctive taco-shaped cigar offering a bold and memorable smoking experience.",
      price: "$14.50",
      paymentLink: "https://your-payment-link.com/taco"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <header onMouseLeave={()=>setProcessOpen(false)} className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b relative transition-all duration-300 delay-100 ${
        processOpen
          ? 'bg-blue-900/95 border-blue-700'
          : 'bg-blue-900/80 border-blue-700'
      }`}>
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-600">
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
                {/* Process with dropdown trigger */}
                <div className="relative flex items-center" onMouseEnter={()=>setProcessOpen(true)}>
                  <Link href="/about" className={`text-sm font-light transition-colors duration-300 delay-100 group ${
                    processOpen
                      ? 'text-blue-200 hover:text-white'
                      : 'text-blue-200 hover:text-white'
                  }`}>
                    <span className="group-hover:hidden">heritage</span>
                    <span className={`hidden group-hover:inline ${navColors.studio}`}>heritage</span>
                  </Link>
                  {/* Dropdown indicator */}
                  <motion.span
                    className="ml-1"
                    animate={{ rotate: processOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-300 delay-100 ${
                      processOpen ? 'text-zinc-400' : 'text-zinc-500'
                    }`} />
                  </motion.span>
                </div>

                {/* Shop link */}
                <Link
                  href="/shop"
                  className={`text-sm font-light transition-colors duration-300 delay-100 ${
                    processOpen
                      ? 'text-blue-300 hover:text-white'
                      : 'text-blue-300 hover:text-white'
                  }`}
                >
                  cigars
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Stories link */}
              <Link
                href="/stories"
                className={`hidden md:inline text-sm font-light transition-colors duration-300 delay-100 ${
                  processOpen
                    ? 'text-blue-300 hover:text-white'
                    : 'text-blue-300 hover:text-white'
                }`}
              >
                stories
              </Link>
              {/* Contact button */}
              <Link
                href="/contact"
                className={`hidden md:inline-flex items-center border font-medium py-2 px-6 rounded-full transition-all duration-300 delay-100 text-sm ${
                  processOpen
                    ? 'border-blue-400 hover:bg-blue-800 text-white'
                    : 'border-blue-400 hover:bg-blue-800 text-white'
                }`}
              >
                contact
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden p-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                    processOpen ? 'text-blue-200' : 'text-blue-200'
                  }`} />
                ) : (
                  <Moon className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                    processOpen ? 'text-blue-200' : 'text-blue-200'
                  }`} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                  processOpen ? 'text-blue-200' : 'text-blue-200'
                }`} /> : <Menu className={`w-5 h-5 transition-colors duration-300 delay-100 ${
                  processOpen ? 'text-blue-200' : 'text-blue-200'
                }`} />}
              </button>
            </div>
          </nav>

          {/* Process dropdown full width */}
          <AnimatePresence>
            {processOpen && (
              <ProcessDropdown onClose={() => setProcessOpen(false)} />
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-b transition-colors duration-300 bg-blue-900 border-blue-700"
            >
              <div className="container mx-auto px-6 py-4 space-y-3">
                <Link href="/stories" className="block text-sm text-blue-200 hover:text-white transition-colors tracking-wider uppercase" onClick={() => setMobileMenuOpen(false)}>
                  Stories
                </Link>
                <Link href="/" className="block text-sm text-blue-200 hover:text-white transition-colors tracking-wider uppercase" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border ${
                        selectedProduct === product.id
                          ? 'border-amber-400 bg-amber-400/10 text-amber-200'
                          : 'border-white/10 bg-white/5 text-blue-200 hover:border-white/20 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-light tracking-wide">{product.name}</span>
                        <span className="text-sm opacity-60">{product.price}</span>
                      </div>
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
                        <div className="relative h-96 mb-8 rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                          <Image
                            src={getCurrentImage(product)}
                            alt={product.name}
                            fill
                            className="object-contain p-8 transition-all duration-700 ease-in-out"
                            key={`${product.id}-${productSizes[product.id] || 'Single'}-${hoveredProductImage[product.id] ? 'hover' : 'normal'}-${imageUpdateTrigger}`}
                          />

                          {/* Image Toggle */}
                          {product.hoverImage && (
                            <div className="absolute top-4 right-4 flex space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleProductHover(product.id, false)
                                }}
                                className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
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
                                className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
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
                            <h1 className="text-4xl font-light text-white mb-2 tracking-wide">
                              {product.name}
                            </h1>
                            <p className="text-2xl font-medium text-amber-400">
                              {product.price}
                            </p>
                          </div>

                          <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto font-light">
                            {product.description}
                          </p>

                          {/* Pack Size Selector */}
                          <div className="flex justify-center space-x-3">
                            {['Single', 'Pack of 5', 'Box of 20'].map((size) => (
                              <button
                                key={size}
                                onClick={() => selectSize(product.id, size)}
                                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                                  productSizes[product.id] === size
                                    ? 'border-amber-400 bg-amber-400/10 text-amber-200'
                                    : 'border-white/20 bg-white/5 text-blue-200 hover:border-white/40 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex justify-center space-x-4 pt-4">
                            <button
                              onClick={() => addToCart(product)}
                              className="flex items-center gap-2 bg-amber-400 text-blue-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-amber-300 transition-all duration-300"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </button>

                            <button
                              onClick={() => toggleLike(product.id)}
                              className={`p-3 rounded-full border transition-all duration-300 ${
                                likedProducts.has(product.id)
                                  ? 'border-green-400 text-green-400 bg-green-400/10'
                                  : 'border-white/20 text-blue-200 hover:border-white/40 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <Heart
                                className={`w-5 h-5 transition-all duration-300 ${
                                  likedProducts.has(product.id) ? 'fill-current scale-110' : ''
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })()
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-amber-400/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-amber-400/50"></div>
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

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className={`px-6 py-3 rounded-full border-2 shadow-lg transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-zinc-900 border-green-400 text-green-400 shadow-green-400/20'
                : 'bg-white border-green-500 text-green-500 shadow-green-500/20'
            }`}>
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </motion.div>
                <span className="text-sm font-medium">Link copied to share!</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Cart */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-blue-900 border-l border-blue-700"
            >
              <div className="flex flex-col h-full">
                {/* Cart Header */}
                <div className="flex items-center justify-between p-6 border-b border-blue-700">
                  <h2 className="text-xl font-light text-white">Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-blue-800 rounded-full transition-colors text-blue-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
                      <p className="text-zinc-500">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.cartItemId} className="flex items-center space-x-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-zinc-500">{item.price}</p>
                            <p className="text-xs text-zinc-400">Pack: {item.size}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-600 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cart Footer */}
                {cartItems.length > 0 && (
                  <div className="p-6 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-medium">Total:</span>
                      <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3 px-6 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
