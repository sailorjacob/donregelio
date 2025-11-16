"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Copy, CheckCircle, Building2, Banknote, MessageCircle, CreditCard } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { useLanguage } from "@/contexts/LanguageContext"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

export default function PaymentInstructionsPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { language } = useLanguage()

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const isSpanish = language === 'es'

  return (
    <main className={`min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 ${playfair.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200 bg-white/90">
        <div className="w-full px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between max-w-4xl mx-auto">
            <Link href="/shop" className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">{isSpanish ? 'Volver a la tienda' : 'Back to Shop'}</span>
            </Link>
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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 px-4 sm:px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {isSpanish ? 'Instrucciones de Pago' : 'Payment Instructions'}
            </h1>
            <p className="text-gray-600 mb-8">
              {isSpanish 
                ? 'Elija su método de pago preferido a continuación' 
                : 'Choose your preferred payment method below'}
            </p>

            <div className="space-y-4">
              {/* WhatsApp Order (Recommended) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-900 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-xl font-semibold text-gray-900">
                        WhatsApp
                      </h2>
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {isSpanish ? 'Recomendado' : 'Recommended'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {isSpanish 
                        ? 'La forma más rápida y fácil de realizar tu pedido. Envíanos tu carrito y coordinaremos el pago y la entrega.'
                        : 'The fastest and easiest way to place your order. Send us your cart and we\'ll coordinate payment and delivery.'}
                    </p>
                    <a
                      href="https://wa.me/18092999188"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {isSpanish ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
                    </a>
                    <p className="text-xs text-gray-500 mt-3">
                      +1 (809) 299-9188
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bank Transfer - US */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {isSpanish ? 'Transferencia Bancaria (USD)' : 'Bank Transfer (USD)'}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {isSpanish 
                        ? 'Para clientes internacionales y pagos en dólares estadounidenses.'
                        : 'For international customers and USD payments.'}
                    </p>
                    
                    <div className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                          {isSpanish ? 'Nombre del Banco' : 'Bank Name'}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900">Chase Bank</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                          {isSpanish ? 'Nombre de la Cuenta' : 'Account Name'}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900">Don Rogelio Cigars LLC</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                          {isSpanish ? 'Número de Cuenta' : 'Account Number'}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">Contact for details</p>
                          <button
                            onClick={() => window.open('https://wa.me/18092999188?text=Hi!%20I%20need%20bank%20transfer%20details%20for%20USD%20payment', '_blank')}
                            className="text-xs text-gray-900 hover:text-amber-600 font-medium transition-colors"
                          >
                            {isSpanish ? 'Solicitar' : 'Request'}
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                          {isSpanish ? 'Código SWIFT' : 'SWIFT Code'}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">Contact for details</p>
                          <button
                            onClick={() => window.open('https://wa.me/18092999188?text=Hi!%20I%20need%20SWIFT%20code%20for%20international%20transfer', '_blank')}
                            className="text-xs text-gray-900 hover:text-amber-600 font-medium transition-colors"
                          >
                            {isSpanish ? 'Solicitar' : 'Request'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                      {isSpanish 
                        ? 'Después de transferir, envíanos el comprobante por WhatsApp con tu número de pedido.'
                        : 'After transferring, send us the receipt via WhatsApp with your order number.'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bank Transfer - Dominican Republic */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {isSpanish ? 'Transferencia Bancaria (DOP)' : 'Bank Transfer (DOP)'}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {isSpanish 
                        ? 'Para clientes en República Dominicana pagando en pesos.'
                        : 'For Dominican Republic customers paying in pesos.'}
                    </p>
                    
                    <div className="space-y-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">Banco</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900">Banco Popular Dominicano</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                          {isSpanish ? 'Nombre de la Cuenta' : 'Account Name'}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900">Don Rogelio</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
                          {isSpanish ? 'Número de Cuenta' : 'Account Number'}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">Contact for details</p>
                          <button
                            onClick={() => window.open('https://wa.me/18092999188?text=Hola!%20Necesito%20los%20detalles%20de%20transferencia%20bancaria%20en%20DOP', '_blank')}
                            className="text-xs text-gray-900 hover:text-amber-600 font-medium transition-colors"
                          >
                            {isSpanish ? 'Solicitar' : 'Request'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                      {isSpanish 
                        ? 'Después de transferir, envíanos el comprobante por WhatsApp con tu número de pedido.'
                        : 'After transferring, send us the receipt via WhatsApp with your order number.'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Cash Payment (DR Only) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Banknote className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {isSpanish ? 'Pago en Efectivo' : 'Cash Payment'}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {isSpanish 
                        ? 'Pago contra entrega o recogida en persona en República Dominicana.'
                        : 'Cash on delivery or in-person pickup in Dominican Republic.'}
                    </p>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-900 font-medium mb-2">
                        {isSpanish ? 'Opciones disponibles:' : 'Available options:'}
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{isSpanish ? 'Pago contra entrega a domicilio' : 'Cash on delivery to your address'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{isSpanish ? 'Pago en recogida en nuestra ubicación' : 'Cash on pickup at our location'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{isSpanish ? 'USD y DOP aceptados' : 'USD and DOP accepted'}</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="https://wa.me/18092999188?text=Hola!%20Me%20interesa%20pagar%20en%20efectivo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 text-sm"
                    >
                      {isSpanish ? 'Coordinar pago en efectivo' : 'Arrange cash payment'}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Zelle / Other Methods */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <CreditCard className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {isSpanish ? 'Otros Métodos de Pago' : 'Other Payment Methods'}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {isSpanish 
                        ? 'También aceptamos Zelle, Cash App, Venmo y otros métodos.'
                        : 'We also accept Zelle, Cash App, Venmo, and other methods.'}
                    </p>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-900 font-medium mb-2">
                        {isSpanish ? 'Métodos disponibles:' : 'Available methods:'}
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>Zelle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>Cash App</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>Venmo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>Bitcoin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>Crypto / USDC</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="https://wa.me/18092999188?text=Hi!%20I%27d%20like%20to%20use%20an%20alternative%20payment%20method"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 text-sm"
                    >
                      {isSpanish ? 'Consultar disponibilidad' : 'Check availability'}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-3">
                {isSpanish ? 'Notas Importantes' : 'Important Notes'}
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>
                    {isSpanish 
                      ? 'Después de realizar el pago, envíanos el comprobante por WhatsApp.'
                      : 'After making payment, send us the receipt via WhatsApp.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>
                    {isSpanish 
                      ? 'Incluye tu nombre completo y dirección de entrega en el mensaje.'
                      : 'Include your full name and delivery address in the message.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>
                    {isSpanish 
                      ? 'Procesaremos tu pedido dentro de 24-48 horas después de confirmar el pago.'
                      : 'We\'ll process your order within 24-48 hours after confirming payment.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>
                    {isSpanish 
                      ? 'Para cualquier pregunta, contáctanos por WhatsApp.'
                      : 'For any questions, contact us via WhatsApp.'}
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Back to Shop Button */}
            <div className="mt-8 text-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                {isSpanish ? 'Volver a la tienda' : 'Back to shop'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

