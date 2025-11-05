"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <Globe className="w-4 h-4 text-blue-200" />
        <span className="text-blue-200 text-sm font-light uppercase">
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
            className="absolute top-full right-0 mt-2 w-32 bg-blue-900/95 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl z-50"
          >
            <button
              onClick={() => {
                setLanguage("en")
                setShowLanguageMenu(false)
              }}
              className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                language === "en"
                  ? "bg-white/20 text-white"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
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
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              Español
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

