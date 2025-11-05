"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-black border-t border-amber-400/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">DON ROGELIO</h3>
            </div>
            <p className="text-sm text-blue-200 font-light leading-relaxed">
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
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  {t("history")}
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  {t("shop")}
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  {t("stories")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
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
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
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
                <Mail className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@donrogelio.com"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300 break-all"
                >
                  info@donrogelio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+18095551234"
                  className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  +1 (809) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-blue-200">
                  Dominican Republic
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-black/50 border-t border-amber-400/20 py-4">
        <div className="container mx-auto px-6">
          <p className="text-xs text-white/70 text-center font-semibold">
            {t("footerWarningShort")}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-6">
          <p className="text-xs text-white/50 text-center">
            © {currentYear} Don Rogelio. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

