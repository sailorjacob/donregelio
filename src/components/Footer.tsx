"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-200 shadow-lg">
      {/* Subtle animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 opacity-60" />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                DON ROGELIO
              </h3>
            </div>
            <p className="text-sm text-gray-600 font-normal leading-relaxed">
              {t("footerAboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              {t("footerQuickLinks")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/history"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group/link"
                >
                  {t("history")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group/link"
                >
                  {t("shop")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group/link"
                >
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group/link"
                >
                  {t("contact")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              {t("footerLegal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group/link"
                >
                  {t("privacyPolicy")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 relative group/link"
                >
                  {t("termsOfUse")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              {t("footerContactUs")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group/item">
                <Mail className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@donrogelio.com"
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors duration-300 break-all"
                >
                  info@donrogelio.com
                </a>
              </li>
              <li className="flex items-start gap-3 group/item">
                <Phone className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700 space-y-1">
                  <a
                    href="tel:+18096999188"
                    className="block hover:text-amber-600 transition-colors duration-300"
                  >
                    +1.809.299.9188
                  </a>
                  <a
                    href="tel:+17186752636"
                    className="block hover:text-amber-600 transition-colors duration-300"
                  >
                    +1.718.675.2636
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group/item">
                <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Dominican Republic
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-gray-200" />

      {/* Bottom Bar */}
      <div className="relative bg-gray-100 py-4 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-xs text-gray-600 text-center font-medium">
            © {currentYear} Don Rogelio. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

