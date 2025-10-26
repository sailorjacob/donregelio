"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Home() {
  const [heritageOpen, setHeritageOpen] = useState(false)
  return (
    <>
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
                <button
                  onClick={() => setHeritageOpen(true)}
                  className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300"
                >
                  heritage
                </button>
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
            {/* Row 1 */}
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/robusto%20closed.png"
                alt="Robusto Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Robusto</p>
            </div>
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/doubletoro.png"
                alt="Double Toro Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Double Toro</p>
            </div>
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/lancero.png"
                alt="Lancero Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Lancero</p>
            </div>
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/perfecto.png"
                alt="Perfecto Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Perfecto</p>
            </div>

            {/* Row 2 */}
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/salamon.png"
                alt="Salamon Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Salamon</p>
            </div>
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/toro.png"
                alt="Toro Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Toro</p>
            </div>
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/torpedo.png"
                alt="Torpedo Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Torpedo</p>
            </div>
            <div className="relative group">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/taco.png"
                alt="Taco Cigar"
                width={150}
                height={90}
                className="object-contain drop-shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xs text-blue-200 text-center mt-2 font-light">Taco</p>
            </div>
          </div>
        </div>
      </main>

      {/* Heritage Modal */}
      <AnimatePresence>
        {heritageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setHeritageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] p-6 mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setHeritageOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Heritage Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-h-[80vh] overflow-y-auto">
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-white">
                    Our Heritage
                  </h1>
                  <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6 font-light">
                    Our cigars are aged for nearly a year in Special English spiced rum filled barrels which give them an exquisite aroma, as they burn, without taking away their natural tobacco flavor.
                  </p>

                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6 font-light">
                    They are packaged in 10 and 20 unit boxes, uniquely designed by our Brand Manager and pioneer, Thomas Martinez. Their impeccable preparation, along with their enticing savor, make Don Rogelio cigars the perfect element to any occasion.
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <blockquote className="text-2xl font-light italic text-amber-200">
                      &ldquo;Crafted with tradition, enjoyed with distinction.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
