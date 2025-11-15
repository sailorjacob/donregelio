"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Instagram, Check } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200 bg-white/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{t("backToHome")}</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 pt-28">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-light mb-2 text-gray-900">{t("contact")}</h1>
            <div className="w-16 h-px bg-amber-600 mb-4"></div>
            <p className="text-gray-700 font-light">
              {t("contactSubtitle")}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">{t("footerEmail")}</h3>
                </div>
                <p className="text-gray-700 text-sm">info@donrogelio.com</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">{t("footerPhone")}</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  +1.718.675.2636<br />
                  +1.809.299.9188
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">{t("footerAddress")}</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Calle Arzobispo Meriño 217<br />
                  Zona Colonial<br />
                  Santo Domingo 10210<br />
                  República Dominicana
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t("firstName")}
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t("lastName")}
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("emailAddress")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  />

                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors text-sm"
                  >
                    <option value="" className="text-gray-900">{t("selectSubject")}</option>
                    <option value="orders" className="text-gray-900">{t("orderInquiry")}</option>
                    <option value="products" className="text-gray-900">{t("productInformation")}</option>
                    <option value="shipping" className="text-gray-900">{t("shippingDelivery")}</option>
                    <option value="wholesale" className="text-gray-900">{t("wholesale")}</option>
                    <option value="other" className="text-gray-900">{t("other")}</option>
                  </select>

                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("message")}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 transition-colors text-sm resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gray-300 text-gray-900 py-3 px-6 font-medium hover:bg-gray-400 transition-colors text-sm uppercase tracking-wider"
                  >
                    {t("sendMessageButton")}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 mb-6">
                    <Check className="w-6 h-6 text-gray-700" />
                  </div>
                  <h2 className="text-2xl font-light text-gray-900 mb-3">{t("thankYou")}</h2>
                  <p className="text-gray-700 mb-8 text-sm">
                    {t("thankYouMessage")}
                  </p>
                  
                  <div className="mb-8">
                    <p className="text-gray-900 mb-4 text-sm font-medium">{t("followUsInstagram")}</p>
                    <a
                      href="https://www.instagram.com/donregeliocigars"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm font-light hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>@donregeliocigars</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gray-700 hover:text-amber-600 transition-colors text-sm font-medium"
                  >
                    {t("sendAnotherMessage")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <WhatsAppButton />
    </main>
  )
}
