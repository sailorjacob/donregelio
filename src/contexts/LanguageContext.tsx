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
    es: "Cigarros premium hechos a mano en la República Dominicana. Cada cigarro envejece a la perfección en barricas especiales de ron especiado inglés."
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
  },
  gallery: {
    en: "Gallery",
    es: "Galería"
  },
  
  // History Page Content
  theBeginning: {
    en: "The Beginning",
    es: "El Comienzo"
  },
  historyBeginningP1: {
    en: "Don Rogelio Cigars emerged in 2014, a year after the death of the father of Founder Thomas Martinez, as a tribute and a faithful reminder of his memory to all his family and especially their grandchildren.",
    es: "Don Rogelio Cigars surgió en 2014, un año después de la muerte del padre del fundador Thomas Martínez, como un homenaje y un fiel recordatorio de su memoria para toda su familia y especialmente para sus nietos."
  },
  historyBeginningP2: {
    en: "What began as a tribute, has turned into an ambitious project, presented cigars with an exquisite smoke and of excellent quality. It is no secret for no one that currently, the Dominican Republic has a position important in the tobacco market at the level world.",
    es: "Lo que comenzó como un homenaje, se ha convertido en un proyecto ambicioso, presentando cigarros con un humo exquisito y de excelente calidad. No es secreto para nadie que actualmente, la República Dominicana tiene una posición importante en el mercado del tabaco a nivel mundial."
  },
  rogelioMartinezTitle: {
    en: "Rogelio Martínez",
    es: "Rogelio Martínez"
  },
  rogelioMartinezP1: {
    en: "Rogelio Martinez was born in 1924 in Puerto Plata, Dominican Republic, in a small town of approximately 1,500 inhabitants called Rio Grande. In his villages and neighboring villages, he was a young man well known for his courtesy, the horses he owned, his love of music and, of course, his exquisite rolled cigarettes.",
    es: "Rogelio Martínez nació en 1924 en Puerto Plata, República Dominicana, en un pequeño pueblo de aproximadamente 1,500 habitantes llamado Río Grande. En su pueblo y pueblos vecinos, era un joven muy conocido por su cortesía, los caballos que poseía, su amor por la música y, por supuesto, sus exquisitos cigarrillos enrollados."
  },
  rogelioMartinezP2: {
    en: "Dressed in fine suits and a skillful horseman, it's no rumor that he's also a charmer. In search of a better life, Rogelio left Rio Grande to the great city of Santo Domingo and never returned. In 1940 he had joined the army and in the 1960s he remarried for the fourth and last time to Thelma Fernández, with whom he had 2 children; his youngest of five children.",
    es: "Vestido con trajes finos y jinete hábil, no es rumor que también era un encantador. En busca de una vida mejor, Rogelio dejó Río Grande hacia la gran ciudad de Santo Domingo y nunca regresó. En 1940 se había unido al ejército y en la década de 1960 se casó por cuarta y última vez con Thelma Fernández, con quien tuvo 2 hijos; los menores de sus cinco hijos."
  },
  rogelioMartinezP3: {
    en: "When the 80s hit, they went to New York, where he retired. He and Thelma later moved with their children, who were married by then, to South Florida. After a life full of adventure, love and joy, he passed away in 2013, he was 89 years old at the moment.",
    es: "Cuando llegaron los años 80, se fueron a Nueva York, donde se jubiló. Él y Thelma luego se mudaron con sus hijos, que ya estaban casados, a South Florida. Después de una vida llena de aventura, amor y alegría, falleció en 2013, tenía 89 años en ese momento."
  },
  qualityPrestige: {
    en: "Quality & Prestige",
    es: "Calidad y Prestigio"
  },
  qualityPrestigeText: {
    en: "Our products are selected carefully by hand with a long-term cultivation process.",
    es: "Nuestros productos son seleccionados cuidadosamente a mano con un proceso de cultivo a largo plazo."
  },
  globalPresence: {
    en: "Global Presence",
    es: "Presencia Global"
  },
  globalPresenceText: {
    en: "We started with the United States, Italy and Hong Kong. Right now, we have a cigar export capacity of 50,000 handcrafted units monthly.",
    es: "Comenzamos con Estados Unidos, Italia y Hong Kong. Ahora mismo, tenemos una capacidad de exportación de cigarros de 50,000 unidades artesanales mensuales."
  },
  founded: {
    en: "Founded",
    es: "Fundado"
  },
  markets: {
    en: "Markets",
    es: "Mercados"
  },
  contactUs: {
    en: "Contact Us",
    es: "Contáctanos"
  },
  address: {
    en: "Address",
    es: "Dirección"
  },
  phone: {
    en: "Phone",
    es: "Teléfono"
  },
  email: {
    en: "Email",
    es: "Correo"
  },
  watchOurStory: {
    en: "Watch Our Story",
    es: "Ver Nuestra Historia"
  },
  clickToClose: {
    en: "Click to close or wait for video to end",
    es: "Haz clic para cerrar o espera a que termine el video"
  },
  
  // Gallery Page
  exploreOurCollection: {
    en: "Explore Our Collection",
    es: "Explorar Nuestra Colección"
  },
  experienceEssence: {
    en: "Experience the essence of Don Rogelio",
    es: "Experimenta la esencia de Don Rogelio"
  },
  shopNow: {
    en: "SHOP NOW",
    es: "COMPRAR AHORA"
  },
  
  // Age Verification - Underage Message
  sorryUnderage: {
    en: "We're Sorry",
    es: "Lo Sentimos"
  },
  underageMessage: {
    en: "You must be 21 years or older to access this site. Our products are intended for adults only.",
    es: "Debes tener 21 años o más para acceder a este sitio. Nuestros productos están destinados solo para adultos."
  },
  underageThankYou: {
    en: "Thank you for your understanding.",
    es: "Gracias por tu comprensión."
  }
}

export type Currency = "USD" | "DOP"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  currency: Currency
  getCurrency: () => Currency
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

  // Get currency based on language
  const getCurrency = (): Currency => {
    return language === "es" ? "DOP" : "USD"
  }

  const currency = getCurrency()

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currency, getCurrency }}>
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

