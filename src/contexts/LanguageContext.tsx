"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface Translations {
  [key: string]: {
    en: string
    es: string
  }
}

export const translations: Translations = {
  // Age Verification
  ageGateTitle: {
    en: "ARE YOU 21+?",
    es: "¿TIENES 21 AÑOS O MÁS?"
  },
  ageGateYes: {
    en: "YES",
    es: "SÍ"
  },
  ageGateNo: {
    en: "NO",
    es: "NO"
  },
  ageGateWarning: {
    en: "SURGEON GENERAL WARNING: Cigar Smoking Can Cause Cancers Of The Mouth And Throat, Even If You Do Not Inhale.",
    es: "ADVERTENCIA DEL CIRUJANO GENERAL: Fumar cigarros puede causar cáncer de boca y garganta, incluso si no inhalas."
  },
  ageGateTerms: {
    en: "By clicking enter, I accept the",
    es: "Al hacer clic en entrar, acepto los"
  },
  ageGateAnd: {
    en: "and",
    es: "y"
  },
  termsOfUse: {
    en: "Terms of Use",
    es: "Términos de Uso"
  },
  privacyPolicy: {
    en: "Privacy Policy",
    es: "Política de Privacidad"
  },

  // Navigation
  history: {
    en: "History",
    es: "Historia"
  },
  shop: {
    en: "Shop",
    es: "Tienda"
  },
  contact: {
    en: "Contact",
    es: "Contacto"
  },
  stories: {
    en: "Stories",
    es: "Historias"
  },
  about: {
    en: "About",
    es: "Acerca de"
  },
  exploreCollection: {
    en: "Explore Collection",
    es: "Explorar Colección"
  },

  // Footer
  footerAbout: {
    en: "About Don Rogelio",
    es: "Acerca de Don Rogelio"
  },
  footerAboutText: {
    en: "Premium handcrafted cigars from the Dominican Republic. Each cigar is aged to perfection in special English spiced rum barrels.",
    es: "Cigarros premium hechos a mano de la República Dominicana. Cada cigarro envejece a la perfección en barricas especiales de ron especiado inglés."
  },
  footerQuickLinks: {
    en: "Quick Links",
    es: "Enlaces Rápidos"
  },
  footerLegal: {
    en: "Legal",
    es: "Legal"
  },
  footerContactUs: {
    en: "Contact Us",
    es: "Contáctanos"
  },
  footerEmail: {
    en: "Email",
    es: "Correo"
  },
  footerPhone: {
    en: "Phone",
    es: "Teléfono"
  },
  footerAddress: {
    en: "Address",
    es: "Dirección"
  },
  footerRights: {
    en: "All rights reserved.",
    es: "Todos los derechos reservados."
  },
  footerWarningShort: {
    en: "WARNING: Cigar smoking can cause cancers of the mouth and throat.",
    es: "ADVERTENCIA: Fumar cigarros puede causar cáncer de boca y garganta."
  },

  // Privacy Policy
  privacyPolicyTitle: {
    en: "Privacy Policy",
    es: "Política de Privacidad"
  },
  privacyLastUpdated: {
    en: "Last Updated",
    es: "Última actualización"
  },

  // Terms of Use
  termsTitle: {
    en: "Terms of Use",
    es: "Términos de Uso"
  },
  termsLastUpdated: {
    en: "Last Updated",
    es: "Última actualización"
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize language from localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
        return savedLanguage
      }
    }
    return "en"
  })

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

