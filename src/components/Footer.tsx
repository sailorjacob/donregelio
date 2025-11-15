"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 dark:to-slate-900/30 pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 dark:border-slate-700 shadow-sm">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                DON ROGELIO
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {t("footerAboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              {t("footerQuickLinks")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/history"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t("history")}
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t("shop")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              {t("footerLegal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {t("termsOfUse")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              {t("footerContactUs")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@donrogelio.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 break-all"
                >
                  info@donrogelio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <a
                    href="tel:+18096999188"
                    className="block hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    +1.809.299.9188
                  </a>
                  <a
                    href="tel:+17186752636"
                    className="block hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    +1.718.675.2636
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Dominican Republic
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-gray-200 dark:border-slate-800" />

      {/* Bottom Bar */}
      <div className="relative bg-gray-50 dark:bg-slate-900/50 py-4">
        <div className="container mx-auto px-6">
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center font-medium">
            © {currentYear} Don Rogelio. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

