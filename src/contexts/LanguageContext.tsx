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
  },

  // History Page
  backToHome: {
    en: "Back to Home",
    es: "Volver al Inicio"
  },
  historyTitle: {
    en: "Our History",
    es: "Nuestra Historia"
  },
  historySubtitle: {
    en: "A legacy of craftsmanship, tradition, and excellence",
    es: "Un legado de artesanía, tradición y excelencia"
  },
  historyQuote: {
    en: "Every cigar tells a story of dedication, tradition, and the pursuit of perfection.",
    es: "Cada cigarro cuenta una historia de dedicación, tradición y la búsqueda de la perfección."
  },
  historyQuoteAuthor: {
    en: "The Don Rogelio Legacy",
    es: "El Legado de Don Rogelio"
  },

  // Contact Page
  contactSubtitle: {
    en: "We're here to help you discover the perfect cigar for your collection",
    es: "Estamos aquí para ayudarte a descubrir el cigarro perfecto para tu colección"
  },
  getInTouch: {
    en: "Get in Touch",
    es: "Ponte en Contacto"
  },
  contactDescription: {
    en: "Whether you have questions about our products, need assistance with an order, or want to learn more about our heritage, our team is ready to help.",
    es: "Ya sea que tengas preguntas sobre nuestros productos, necesites ayuda con un pedido o quieras aprender más sobre nuestra herencia, nuestro equipo está listo para ayudarte."
  },
  responseTime: {
    en: "We respond within 24 hours",
    es: "Respondemos en 24 horas"
  },
  businessHoursShort: {
    en: "Mon-Fri 9AM-6PM EST",
    es: "Lun-Vie 9AM-6PM EST"
  },
  visitUs: {
    en: "Visit Us",
    es: "Visítanos"
  },
  byAppointment: {
    en: "By appointment only",
    es: "Solo con cita previa"
  },
  businessHours: {
    en: "Business Hours",
    es: "Horario de Atención"
  },
  mondayFriday: {
    en: "Monday - Friday",
    es: "Lunes - Viernes"
  },
  saturday: {
    en: "Saturday",
    es: "Sábado"
  },
  sunday: {
    en: "Sunday",
    es: "Domingo"
  },
  closed: {
    en: "Closed",
    es: "Cerrado"
  },
  sendMessage: {
    en: "Send us a Message",
    es: "Envíanos un Mensaje"
  },
  firstName: {
    en: "First Name",
    es: "Nombre"
  },
  lastName: {
    en: "Last Name",
    es: "Apellido"
  },
  emailAddress: {
    en: "Email Address",
    es: "Correo Electrónico"
  },
  subject: {
    en: "Subject",
    es: "Asunto"
  },
  selectSubject: {
    en: "Select a subject",
    es: "Selecciona un asunto"
  },
  orderInquiry: {
    en: "Order Inquiry",
    es: "Consulta de Pedido"
  },
  productInformation: {
    en: "Product Information",
    es: "Información de Producto"
  },
  shippingDelivery: {
    en: "Shipping & Delivery",
    es: "Envío y Entrega"
  },
  wholesale: {
    en: "Wholesale",
    es: "Mayoreo"
  },
  other: {
    en: "Other",
    es: "Otro"
  },
  message: {
    en: "Message",
    es: "Mensaje"
  },
  messagePlaceholder: {
    en: "Tell us how we can help you...",
    es: "Cuéntanos cómo podemos ayudarte..."
  },
  sendMessageButton: {
    en: "Send Message",
    es: "Enviar Mensaje"
  },
  thankYou: {
    en: "Thank You!",
    es: "¡Gracias!"
  },
  thankYouMessage: {
    en: "Your message has been received. We'll get back to you shortly!",
    es: "Tu mensaje ha sido recibido. ¡Te responderemos pronto!"
  },
  followUsInstagram: {
    en: "Follow us on Instagram",
    es: "Síguenos en Instagram"
  },
  sendAnotherMessage: {
    en: "Send another message",
    es: "Enviar otro mensaje"
  },
  faq: {
    en: "Frequently Asked Questions",
    es: "Preguntas Frecuentes"
  },
  faqShipQuestion: {
    en: "Do you ship internationally?",
    es: "¿Envían internacionalmente?"
  },
  faqShipAnswer: {
    en: "Yes, we ship worldwide with reliable carriers and full tracking.",
    es: "Sí, enviamos a todo el mundo con transportistas confiables y seguimiento completo."
  },
  faqReturnQuestion: {
    en: "What's your return policy?",
    es: "¿Cuál es su política de devoluciones?"
  },
  faqReturnAnswer: {
    en: "We offer a 30-day return policy on unopened products in original condition.",
    es: "Ofrecemos una política de devolución de 30 días en productos sin abrir en su condición original."
  },
  faqWholesaleQuestion: {
    en: "Do you offer wholesale pricing?",
    es: "¿Ofrecen precios al mayoreo?"
  },
  faqWholesaleAnswer: {
    en: "Yes, contact us for wholesale inquiries and special pricing.",
    es: "Sí, contáctenos para consultas de mayoreo y precios especiales."
  },
  faqStorageQuestion: {
    en: "How should I store my cigars?",
    es: "¿Cómo debo almacenar mis cigarros?"
  },
  faqStorageAnswer: {
    en: "Store in a humidor at 65-70% humidity and 68-72°F temperature.",
    es: "Almacenar en un humidor al 65-70% de humedad y temperatura de 68-72°F."
  },
  browseCollection: {
    en: "Browse Our Collection",
    es: "Explorar Nuestra Colección"
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

