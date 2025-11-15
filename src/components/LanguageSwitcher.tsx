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
        className="flex items-center gap-2 px-3 py-2 text-gray-900 dark:text-blue-200 hover:text-amber-600 dark:hover:text-white bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300 rounded font-semibold"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm uppercase">
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
            className="absolute top-full right-0 mt-1 w-32 bg-white dark:bg-blue-900/95 border border-gray-200 dark:border-blue-700 shadow-xl z-50 rounded"
          >
            <button
              onClick={() => {
                setLanguage("en")
                setShowLanguageMenu(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors rounded-t ${
                language === "en"
                  ? "bg-amber-600 dark:bg-blue-500 text-white dark:text-white font-semibold"
                  : "text-gray-900 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => {
                setLanguage("es")
                setShowLanguageMenu(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors rounded-b ${
                language === "es"
                  ? "bg-amber-600 dark:bg-blue-500 text-white dark:text-white font-semibold"
                  : "text-gray-900 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-white"
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

