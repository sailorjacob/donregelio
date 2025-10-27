"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"

export default function HistoryPage() {
  const [videoOpen, setVideoOpen] = useState(false)

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
                <Link href="/shop" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  cigars
                </Link>
                <Link href="/stories" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  stories
                </Link>
                <Link href="/contact" className="text-sm font-light text-blue-200 hover:text-white transition-colors duration-300">
                  contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                  Our History
                </h1>
                <div className="w-32 h-1 bg-amber-400 mx-auto rounded-full mb-8"></div>
                <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto">
                  A legacy of craftsmanship, tradition, and excellence
                </p>
              </motion.div>
            </div>

            {/* History Content */}
            <div className="space-y-16">
              {/* Company History */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
              >
                <h2 className="text-3xl font-light text-white mb-6">The Beginning</h2>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p className="text-lg">
                    Don Rogelio Cigars emerged in 2014, a year after the death of the father of Founder Thomas Martinez,
                    as a tribute and a faithful reminder of his memory to all his family and especially their grandchildren.
                  </p>
                  <p className="text-lg">
                    What began as a tribute, has turned into an ambitious project, presented cigars with an exquisite smoke
                    and of excellent quality. It is no secret for no one that currently, the Dominican Republic has a
                    position important in the tobacco market at the level world.
                  </p>
                </div>
              </motion.div>

              {/* Rogelio Martinez Story */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
              >
                <h2 className="text-3xl font-light text-white mb-6">Rogelio Martínez</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-lg text-blue-100 leading-relaxed">
                      Rogelio Martínez was born in 1924 in Puerto Plata, Dominican Republic, in a small town of about
                      1,500 inhabitants called Rio Grande. He was a young man well known for his courtesy, the horses
                      he owned, his love for music and of course, their exquisite rolled cigars.
                    </p>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      Dressed in elegant suits and a skillful equestrian, it is not a rumor that it was also quite charming.
                      After a life full of adventures, love and joy, he passed away in 2013, at the age of 89.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-4 border-amber-400/30 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-2 border-amber-400/50"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quality and Prestige */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
              >
                <h2 className="text-3xl font-light text-white mb-6">Quality and Prestige</h2>
                <div className="space-y-4">
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Our products are selected carefully by hand with a long-term cultivation process.
                  </p>
                  <div className="bg-amber-400/10 rounded-lg p-6 border border-amber-400/20">
                    <h3 className="text-2xl font-light text-amber-200 mb-4 text-center">WWW.DONROGELIO.COM</h3>
                    <p className="text-center text-blue-100">
                      Visit our official website for the complete experience
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Global Presence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
              >
                <h2 className="text-3xl font-light text-white mb-6">Global Presence</h2>
                <div className="space-y-4 text-blue-100">
                  <p className="text-lg leading-relaxed">
                    The main objective is to insert our cigar in international markets. We started with the United States,
                    Italy and Hong Kong. Right now, we have a Cigar export capacity handcrafted from 50,000 units monthly.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-2xl font-light text-amber-400">50,000</p>
                      <p className="text-sm text-blue-200">Units Monthly</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-2xl font-light text-amber-400">2014</p>
                      <p className="text-sm text-blue-200">Founded</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-2xl font-light text-amber-400">Global</p>
                      <p className="text-sm text-blue-200">Markets</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
              >
                <h2 className="text-3xl font-light text-white mb-6">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-light text-amber-400 mb-2">Address</h3>
                      <p className="text-blue-100">
                        C. Arzobispo Meriño 217, piso 2<br />
                        Santo Domingo 10210<br />
                        República Dominicana
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-amber-400 mb-2">Phone</h3>
                      <p className="text-blue-100">
                        +1 718 675-2636<br />
                        +1 829 648-6430
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-amber-400 mb-2">Email</h3>
                    <p className="text-blue-100">
                      Cigarsdonrogelio@gmail.com
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => setVideoOpen(true)}
                        className="bg-amber-400 text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-amber-300 transition-colors duration-300"
                      >
                        Watch Our Story
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Legacy Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center"
              >
                <blockquote className="text-3xl md:text-4xl font-light italic text-amber-200 border-l-4 border-amber-400 pl-8">
                  &ldquo;Every cigar tells a story of dedication, tradition, and the pursuit of perfection.&rdquo;
                </blockquote>
                <p className="text-blue-300 mt-4 font-light">— The Don Rogelio Legacy</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative bg-black rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <video
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onEnded={() => setVideoOpen(false)}
                >
                  <source
                    src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/enlishsubcorrected.MP4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-light text-white mb-1">Don Rogelio Story</h3>
                    <p className="text-sm text-blue-200 font-light">Click to close or wait for video to end</p>
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
