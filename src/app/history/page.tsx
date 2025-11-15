"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function HistoryPage() {
  const { t } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="w-full px-6 py-4">
          <nav className="flex items-center justify-between max-w-4xl mx-auto">
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
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  {t("shop")}
                </Link>
                <span className="text-gray-300">•</span>
                <Link href="/gallery" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  {t("gallery")}
                </Link>
                <span className="text-gray-300">•</span>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300">
                  {t("contact")}
                </Link>
              </div>
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>

      {/* Letter Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-block text-gray-700 hover:text-amber-600 mb-6 text-sm font-medium transition-colors duration-300"
        >
          ← {t("backToHome")}
        </Link>

        {/* Letter Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">
            {t("historyTitle")}
          </h1>
          <div className="w-16 h-px bg-amber-600 mb-2"></div>
          <p className="text-lg text-gray-700 font-light leading-tight">
            {t("historySubtitle")}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-5">
          {/* The Beginning */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-2">{t("theBeginning")}</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="text-base">
                {t("historyBeginningP1")}
              </p>
              <p className="text-base">
                {t("historyBeginningP2")}
              </p>
            </div>
          </div>

          {/* Rogelio Martinez */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-2">{t("rogelioMartinezTitle")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <div className="lg:col-span-2 space-y-2 text-gray-700 leading-relaxed">
                <p className="text-base">
                  {t("rogelioMartinezP1")}
                </p>
                <p className="text-base">
                  {t("rogelioMartinezP2")}
                </p>
                <p className="text-base">
                  {t("rogelioMartinezP3")}
                </p>
              </div>
              <div className="flex items-start justify-center">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/HistoryDonRogelio.jpg"
                  alt="Rogelio Martínez"
                  width={250}
                  height={350}
                  className="rounded-lg shadow-xl object-cover border border-gray-200"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </div>
          </div>

          {/* Quality and Global Presence */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-2">{t("qualityPrestige")}</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t("qualityPrestigeText")}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-2">{t("globalPresence")}</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-3">
                  {t("globalPresenceText")}
                </p>
                <p className="text-base text-gray-900 font-medium">
                  Founded in 2014, serving global markets
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-2">{t("contactUs")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">{t("address")}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  C. Arzobispo Meriño 217, piso 2<br />
                  Santo Domingo 10210<br />
                  República Dominicana
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">{t("phone")}</h3>
                <p className="text-gray-700 text-sm">
                  +1.718.675.2636<br />
                  +1.809.299.9188
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">{t("email")}</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  info@donrogelio.com
                </p>
                <button 
                  onClick={() => setVideoOpen(true)}
                  className="bg-gray-300 text-gray-900 px-3 py-2 text-xs font-medium hover:bg-gray-400 transition-colors rounded cursor-pointer"
                >
                  {t("watchOurStory")}
                </button>
              </div>
            </div>
          </div>

          {/* Closing Quote */}
          <div className="pt-4 border-t border-gray-300 mt-6">
            <blockquote className="text-base font-light italic text-gray-700 text-center">
              &ldquo;{t("historyQuote")}&rdquo;
            </blockquote>
            <p className="text-gray-600 mt-2 text-center text-xs">— {t("historyQuoteAuthor")}</p>
          </div>
        </div>
      </div>

      <Footer />

      <WhatsAppButton />

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
              <div className="bg-black rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <video
                  autoPlay
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
              </div>

              {/* Video Info Text */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 font-normal">{t("clickToClose")}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
