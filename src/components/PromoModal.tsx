"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Package, ShoppingBag, Award, Heart } from "lucide-react"
import Image from "next/image"

interface PromoModalProps {
  onClose: () => void
}

const promos = [
  {
    type: "deal",
    icon: Package,
    title: "Volume Savings",
    subtitle: "Premium Quality, Better Value",
    description: "Save up to 30% when you buy in bulk",
    features: [
      { package: "3-Pack", discount: "10% OFF", price: "$27", originalPrice: "$30" },
      { package: "10-Pack", discount: "20% OFF", price: "$80", originalPrice: "$100" },
      { package: "Full Box (20)", discount: "30% OFF", price: "$140", originalPrice: "$200" }
    ],
    cta: "Shop Now",
    color: "amber"
  },
  {
    type: "brand",
    icon: Award,
    title: "Handcrafted Excellence",
    subtitle: "Dominican Tradition Since 1952",
    description: "Every cigar is a masterpiece, aged in premium English spiced rum barrels for nearly a year",
    features: [
      { label: "🌿", text: "100% Dominican tobacco" },
      { label: "🥃", text: "Aged in rum barrels" },
      { label: "✋", text: "Hand-rolled by masters" },
      { label: "🏆", text: "Award-winning quality" }
    ],
    cta: "Discover Our Story",
    color: "gray"
  },
  {
    type: "quality",
    icon: Heart,
    title: "Uncompromising Quality",
    subtitle: "The Don Rogelio Promise",
    description: "Three premium wrapper options: Habano, Maduro, and Connecticut",
    features: [
      { label: "Capote", text: "Corojo" },
      { label: "Tripa", text: "Piloto Mejorado & Criollo 98" },
      { label: "Process", text: "Traditional fermentation" },
      { label: "Aging", text: "11+ months in rum barrels" }
    ],
    cta: "View Collection",
    color: "slate"
  }
]

export default function PromoModal({ onClose }: PromoModalProps) {
  const [currentPromo, setCurrentPromo] = useState(0)

  useEffect(() => {
    // Randomly select a promo to show
    const randomIndex = Math.floor(Math.random() * promos.length)
    setCurrentPromo(randomIndex)
  }, [])

  const promo = promos[currentPromo]
  const Icon = promo.icon

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header with Icon */}
          <div className={`relative bg-gradient-to-br ${
            promo.color === "amber" 
              ? "from-amber-500 to-amber-600" 
              : promo.color === "slate"
              ? "from-slate-700 to-slate-800"
              : "from-gray-700 to-gray-800"
          } text-white px-6 pt-8 pb-6`}>
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute top-4 left-4"
            >
              <Icon className="w-8 h-8 text-white/80" />
            </motion.div>

            <div className="absolute top-4 right-16">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </motion.div>
            </div>

            <h2 className="text-2xl font-bold mb-1 mt-6">{promo.title}</h2>
            <p className="text-white/90 text-sm font-medium">{promo.subtitle}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              {promo.description}
            </p>

            {promo.type === "deal" ? (
              <div className="space-y-3 mb-6">
                {promo.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-amber-600" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{feature.package}</div>
                        <div className="text-xs text-amber-600 font-medium">{feature.discount}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{feature.price}</div>
                      <div className="text-xs text-gray-500 line-through">{feature.originalPrice}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {promo.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center"
                  >
                    <div className="text-2xl mb-1">{feature.label}</div>
                    <div className="text-xs text-gray-700 font-medium">{feature.text}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className={`w-full py-3 rounded-lg font-semibold text-white shadow-lg transition-all ${
                promo.color === "amber"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                  : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
              } flex items-center justify-center gap-2`}
            >
              <ShoppingBag className="w-5 h-5" />
              {promo.cta}
            </motion.button>

            <p className="text-center text-xs text-gray-500 mt-3">
              Free shipping on orders over $100
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

