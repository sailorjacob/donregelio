"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Instagram, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Footer from "@/components/Footer"

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
    // Here you would typically send the form data to your backend
    setSubmitted(true)
    // Reset form
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
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-blue-700 bg-blue-900/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-light">{t("backToHome")}</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              {t("contact")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto">
              {t("contactSubtitle")}
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-blue-100 mb-6">{t("getInTouch")}</h2>
                <p className="text-blue-200 leading-relaxed mb-8">
                  {t("contactDescription")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t("footerEmail")}</h3>
                    <p className="text-blue-200">info@donrogelio.com</p>
                    <p className="text-sm text-blue-300">{t("responseTime")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t("footerPhone")}</h3>
                    <p className="text-blue-200">
                      +1.718.675.2636<br />
                      +1.809.299.9188
                    </p>
                    <p className="text-sm text-blue-300">{t("businessHoursShort")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t("visitUs")}</h3>
                    <p className="text-blue-200">
                      Calle Arzobispo Meriño 217<br />
                      Zona Colonial<br />
                      Santo Domingo, República Dominicana<br />
                      10210
                    </p>
                    <p className="text-sm text-blue-300">{t("byAppointment")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t("businessHours")}</h3>
                    <div className="text-blue-200 text-sm space-y-1">
                      <p>{t("mondayFriday")}: 9:00 AM - 6:00 PM</p>
                      <p>{t("saturday")}: 10:00 AM - 4:00 PM</p>
                      <p>{t("sunday")}: {t("closed")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form or Thank You Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-light text-white mb-6">{t("sendMessage")}</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-blue-200 mb-2">
                          {t("firstName")}
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-blue-200 mb-2">
                          {t("lastName")}
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                        {t("emailAddress")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-2">
                        {t("subject")}
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <option value="" className="text-gray-900">{t("selectSubject")}</option>
                        <option value="orders" className="text-gray-900">{t("orderInquiry")}</option>
                        <option value="products" className="text-gray-900">{t("productInformation")}</option>
                        <option value="shipping" className="text-gray-900">{t("shippingDelivery")}</option>
                        <option value="wholesale" className="text-gray-900">{t("wholesale")}</option>
                        <option value="other" className="text-gray-900">{t("other")}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                        {t("message")}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder={t("messagePlaceholder")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-blue-900 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                      {t("sendMessageButton")}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-green-500/20 p-4 rounded-full">
                      <CheckCircle className="w-16 h-16 text-green-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-light text-white mb-4">{t("thankYou")}</h2>
                  <p className="text-blue-200 mb-8 text-lg">
                    {t("thankYouMessage")}
                  </p>
                  
                  <div className="mb-8">
                    <p className="text-white mb-4 text-lg">{t("followUsInstagram")}</p>
                    <a
                      href="https://www.instagram.com/donregeliocigars"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>@donregeliocigars</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-300 hover:text-white transition-colors underline"
                  >
                    {t("sendAnotherMessage")}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 mb-16">
            <h2 className="text-3xl font-light text-white mb-6 text-center">{t("faq")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-blue-100 mb-2">{t("faqShipQuestion")}</h3>
                <p className="text-blue-200">{t("faqShipAnswer")}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-100 mb-2">{t("faqReturnQuestion")}</h3>
                <p className="text-blue-200">{t("faqReturnAnswer")}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-100 mb-2">{t("faqWholesaleQuestion")}</h3>
                <p className="text-blue-200">{t("faqWholesaleAnswer")}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-100 mb-2">{t("faqStorageQuestion")}</h3>
                <p className="text-blue-200">{t("faqStorageAnswer")}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              <span>{t("browseCollection")}</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
