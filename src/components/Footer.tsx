"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue-900/50 to-black border-t border-blue-700/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">DON ROGELIO</h3>
            </div>
            <p className="text-sm text-blue-300 font-light leading-relaxed">
              {t("footerAboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footerQuickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/history"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("history")}
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("shop")}
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("stories")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footerLegal")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  {t("termsOfUse")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("footerContactUs")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@donrogelio.com"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300 break-all"
                >
                  info@donrogelio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+18095551234"
                  className="text-sm text-blue-300 hover:text-white transition-colors duration-300"
                >
                  +1 (809) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-blue-300">
                  Dominican Republic
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-black/50 border-t border-blue-700/30 py-3">
        <div className="container mx-auto px-6">
          <p className="text-xs text-blue-300/80 text-center">
            {t("footerWarningShort")}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-3">
        <div className="container mx-auto px-6">
          <p className="text-xs text-blue-400/60 text-center">
            © {currentYear} Don Rogelio. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

