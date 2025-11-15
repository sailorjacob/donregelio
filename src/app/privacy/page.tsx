"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "November 5, 2025",
      sections: [
        {
          title: "1. Information We Collect",
          content: `We collect information that you provide directly to us, including:
          
• Personal identification information (name, email address, phone number, mailing address)
• Age verification information
• Payment information when making purchases
• Communication preferences and language settings
• Information about your interaction with our website

We also automatically collect certain information about your device when you use our website, including IP address, browser type, operating system, and browsing behavior.`
        },
        {
          title: "2. How We Use Your Information",
          content: `We use the information we collect to:

• Verify that you meet the legal age requirements to purchase tobacco products
• Process and fulfill your orders
• Communicate with you about products, services, and promotions
• Improve our website and customer experience
• Comply with legal obligations and prevent fraud
• Analyze website usage and trends`
        },
        {
          title: "3. Information Sharing and Disclosure",
          content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Service providers who assist us in operating our website and conducting our business
• Payment processors to handle transactions securely
• Shipping companies to deliver your orders
• Legal authorities when required by law or to protect our rights

All third-party service providers are required to maintain the confidentiality of your information.`
        },
        {
          title: "4. Cookies and Tracking Technologies",
          content: `We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie preferences through your browser settings.

Types of cookies we use:
• Essential cookies (required for age verification and site functionality)
• Analytics cookies (to understand how visitors use our site)
• Preference cookies (to remember your language and settings)`
        },
        {
          title: "5. Data Security",
          content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
        },
        {
          title: "6. Your Rights",
          content: `You have the right to:

• Access, correct, or delete your personal information
• Opt-out of marketing communications
• Object to processing of your personal data
• Request data portability
• Withdraw consent at any time

To exercise these rights, please contact us at info@donrogelio.com.`
        },
        {
          title: "7. Age Restrictions",
          content: `Our website and products are intended only for adults of legal smoking age. We do not knowingly collect information from individuals under 21 years of age. If we discover that we have collected information from someone under the legal age, we will delete it immediately.`
        },
        {
          title: "8. International Data Transfers",
          content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.`
        },
        {
          title: "9. Changes to This Privacy Policy",
          content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our website after such changes constitutes your acceptance of the new Privacy Policy.`
        },
        {
          title: "10. Contact Us",
          content: `If you have any questions about this Privacy Policy, please contact us:

Email: info@donrogelio.com
Phone: +1 (809) 555-1234
Address: Dominican Republic

We will respond to your inquiry within a reasonable timeframe.`
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "5 de noviembre de 2025",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content: `Recopilamos información que usted nos proporciona directamente, incluyendo:

• Información de identificación personal (nombre, dirección de correo electrónico, número de teléfono, dirección postal)
• Información de verificación de edad
• Información de pago al realizar compras
• Preferencias de comunicación y configuración de idioma
• Información sobre su interacción con nuestro sitio web

También recopilamos automáticamente cierta información sobre su dispositivo cuando usa nuestro sitio web, incluida la dirección IP, tipo de navegador, sistema operativo y comportamiento de navegación.`
        },
        {
          title: "2. Cómo Usamos Su Información",
          content: `Utilizamos la información que recopilamos para:

• Verificar que cumple con los requisitos legales de edad para comprar productos de tabaco
• Procesar y cumplir con sus pedidos
• Comunicarnos con usted sobre productos, servicios y promociones
• Mejorar nuestro sitio web y la experiencia del cliente
• Cumplir con obligaciones legales y prevenir fraudes
• Analizar el uso y las tendencias del sitio web`
        },
        {
          title: "3. Compartir y Divulgación de Información",
          content: `No vendemos, intercambiamos ni alquilamos su información personal a terceros. Podemos compartir su información con:

• Proveedores de servicios que nos ayudan a operar nuestro sitio web y realizar nuestro negocio
• Procesadores de pagos para manejar transacciones de forma segura
• Empresas de envío para entregar sus pedidos
• Autoridades legales cuando lo requiera la ley o para proteger nuestros derechos

Todos los proveedores de servicios de terceros deben mantener la confidencialidad de su información.`
        },
        {
          title: "4. Cookies y Tecnologías de Seguimiento",
          content: `Utilizamos cookies y tecnologías de seguimiento similares para mejorar su experiencia de navegación, recordar sus preferencias y analizar el tráfico del sitio web. Puede controlar las preferencias de cookies a través de la configuración de su navegador.

Tipos de cookies que usamos:
• Cookies esenciales (necesarias para la verificación de edad y funcionalidad del sitio)
• Cookies analíticas (para entender cómo los visitantes usan nuestro sitio)
• Cookies de preferencias (para recordar su idioma y configuración)`
        },
        {
          title: "5. Seguridad de Datos",
          content: `Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por internet es 100% seguro y no podemos garantizar la seguridad absoluta.`
        },
        {
          title: "6. Sus Derechos",
          content: `Usted tiene derecho a:

• Acceder, corregir o eliminar su información personal
• Optar por no recibir comunicaciones de marketing
• Oponerse al procesamiento de sus datos personales
• Solicitar la portabilidad de datos
• Retirar el consentimiento en cualquier momento

Para ejercer estos derechos, contáctenos en info@donrogelio.com.`
        },
        {
          title: "7. Restricciones de Edad",
          content: `Nuestro sitio web y productos están destinados solo para adultos en edad legal para fumar. No recopilamos información de personas menores de 21 años de edad de manera consciente. Si descubrimos que hemos recopilado información de alguien menor de edad legal, la eliminaremos de inmediato.`
        },
        {
          title: "8. Transferencias Internacionales de Datos",
          content: `Su información puede ser transferida y procesada en países distintos al de su residencia. Nos aseguramos de que se implementen las salvaguardias apropiadas para proteger su información de acuerdo con esta Política de Privacidad.`
        },
        {
          title: "9. Cambios a Esta Política de Privacidad",
          content: `Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio material publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización". Su uso continuo de nuestro sitio web después de dichos cambios constituye su aceptación de la nueva Política de Privacidad.`
        },
        {
          title: "10. Contáctenos",
          content: `Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos:

Correo electrónico: info@donrogelio.com
Teléfono: +1 (809) 555-1234
Dirección: República Dominicana

Responderemos a su consulta dentro de un plazo razonable.`
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-blue-700 bg-blue-900/80">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentContent.title}</h1>
            <p className="text-blue-200 text-sm">
              {t("privacyLastUpdated")}: {currentContent.lastUpdated}
            </p>
          </div>

          <div className="space-y-6">
            {currentContent.sections.map((section, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-400 pl-6"
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  {section.title}
                </h2>
                <div className="text-blue-200 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

