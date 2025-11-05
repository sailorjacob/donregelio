"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"

export default function AgeVerification({ onVerified }: { onVerified: () => void }) {
  const { language, setLanguage, t } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const handleYes = () => {
    // Store verification in localStorage (expires in 24 hours)
    const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000)
    localStorage.setItem("ageVerified", expiryTime.toString())
    onVerified()
  }

  const handleNo = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/cigarrss.png"
          alt="Premium Cigars"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-10">
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <Globe className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-light uppercase">
              {language}
            </span>
          </button>

          {/* Language Dropdown */}
          <AnimatePresence>
            {showLanguageMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-32 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl"
              >
                <button
                  onClick={() => {
                    setLanguage("en")
                    setShowLanguageMenu(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                    language === "en"
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("es")
                    setShowLanguageMenu(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                    language === "es"
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Español
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-400 mb-6 shadow-2xl">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
              alt="Don Rogelio Logo"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-64 mx-auto" />
        </motion.div>

        {/* Age Question */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-widest mb-12">
            {t("ageGateTitle")}
          </h2>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="px-16 py-4 text-xl font-light tracking-widest border-2 border-amber-400 bg-transparent text-white hover:bg-amber-400 hover:text-black transition-all duration-300 rounded-sm"
            >
              {t("ageGateYes")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
              className="px-16 py-4 text-xl font-light tracking-widest border-2 border-white/40 bg-transparent text-white/70 hover:border-white hover:text-white transition-all duration-300 rounded-sm"
            >
              {t("ageGateNo")}
            </motion.button>
          </div>

          {/* Warning Box */}
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg">
            <p className="text-xs font-semibold text-white/90 leading-relaxed">
              {t("ageGateWarning")}
            </p>
          </div>

          {/* Terms and Privacy */}
          <div className="text-sm text-white/70 font-light">
            <p>
              {t("ageGateTerms")}{" "}
              <Link
                href="/terms"
                className="text-amber-400 hover:text-amber-300 underline transition-colors"
              >
                {t("termsOfUse")}
              </Link>{" "}
              {t("ageGateAnd")}{" "}
              <Link
                href="/privacy"
                className="text-amber-400 hover:text-amber-300 underline transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

