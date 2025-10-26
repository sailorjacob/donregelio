"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"

export default function Home() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 overflow-hidden border-2 border-amber-600">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                alt="Don Rogelio Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              Don Rogelio
            </h1>
          </div>

          {/* Product Showcase */}
          <div className="mt-12 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png"
                alt="Robusto Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Robusto</p>
            </div>
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png"
                alt="Toro Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Toro</p>
            </div>
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png"
                alt="Lancero Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Lancero</p>
            </div>
            <div className="relative">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png"
                alt="Perfecto Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto"
              />
              <p className="text-xs text-blue-200 text-center mt-2">Perfecto</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm font-light tracking-wide">Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scattered Document Papers */}
      <div className="fixed bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Bottom Left Document - Peeking from left edge */}
        <motion.div
          className="absolute -bottom-6 -left-4 transform -rotate-20 opacity-85 hover:opacity-100 transition-all duration-500 hover:-rotate-15 cursor-pointer pointer-events-auto"
          onClick={() => setSelectedDocument('document1')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/infopack1.png"
              alt="Product Information Document"
              width={200}
              height={280}
              className="object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/5" />
            {/* Paper edge effect */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/30 rounded-sm" />
          </div>
        </motion.div>

        {/* Bottom Right Document - Peeking from right edge */}
        <motion.div
          className="absolute -bottom-8 -right-6 transform rotate-12 opacity-85 hover:opacity-100 transition-all duration-500 hover:rotate-8 cursor-pointer pointer-events-auto"
          onClick={() => setSelectedDocument('document2')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/infobackbackside.png"
              alt="Product Details Document"
              width={180}
              height={240}
              className="object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-white/15 via-transparent to-black/5" />
            {/* Paper edge effect */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/30 rounded-sm" />
          </div>
        </motion.div>
      </div>

      {/* Document Modal */}
      <AnimatePresence>
        {selectedDocument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedDocument(null)
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: selectedDocument === 'document1' ? -20 : 12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: selectedDocument === 'document1' ? -20 : 12 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDocument(null)}
                className="absolute top-2 right-2 z-10 p-2 text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Document Image */}
              <div className="relative shadow-2xl overflow-hidden">
                <Image
                  src={selectedDocument === 'document1' 
                    ? "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/infopack1.png"
                    : "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/infobackbackside.png"
                  }
                  alt={selectedDocument === 'document1' ? "Product Information Document" : "Product Details Document"}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain max-h-[85vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
