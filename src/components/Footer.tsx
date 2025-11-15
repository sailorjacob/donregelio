"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black border-t border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/20 to-transparent dark:from-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 dark:to-black/40 pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-5 group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-slate-300 dark:border-slate-600 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-wider">
                DON ROGELIO
              </h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed italic">
              {t("footerAboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-widest letter-spacing">
              {t("footerQuickLinks")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/history"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium relative group/link"
                >
                  {t("history")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium relative group/link"
                >
                  {t("shop")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium relative group/link"
                >
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium relative group/link"
                >
                  {t("contact")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-widest">
              {t("footerLegal")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium relative group/link"
                >
                  {t("privacyPolicy")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium relative group/link"
                >
                  {t("termsOfUse")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover/link:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-widest">
              {t("footerContactUs")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group/item">
                <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:info@donrogelio.com"
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 break-all font-medium"
                >
                  info@donrogelio.com
                </a>
              </li>
              <li className="flex items-start gap-3 group/item">
                <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  <a
                    href="tel:+18096999188"
                    className="block hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium"
                  >
                    +1.809.299.9188
                  </a>
                  <a
                    href="tel:+17186752636"
                    className="block hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium"
                  >
                    +1.718.675.2636
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group/item">
                <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Dominican Republic
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="relative px-6 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-950/50 py-6 border-t border-slate-200/30 dark:border-slate-800/30">
        <div className="container mx-auto px-6">
          <p className="text-xs text-slate-600 dark:text-slate-400 text-center font-semibold tracking-wide">
            © {currentYear} Don Rogelio. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

