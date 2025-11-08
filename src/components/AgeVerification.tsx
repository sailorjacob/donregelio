"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

// Import gallery data
const BASE_URL = 'https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/socialsite/';

interface MediaFile {
  name: string;
  type: string;
  content?: {
    title: string;
    subtitle?: string;
    description: string;
    link?: {
      text: string;
      href: string;
    };
  };
}

const mediaFiles: MediaFile[] = [
  { 
    name: '1234e.jpg', 
    type: 'image',
    content: {
      title: 'A Legacy Born in 2014',
      subtitle: 'In Memory of Rogelio Martínez',
      description: 'Don Rogelio Cigars emerged in 2014, a year after the passing of founder Thomas Martinez\'s father. What began as a heartfelt tribute has evolved into an ambitious project, presenting cigars with exquisite smoke and excellent quality from the Dominican Republic.',
      link: {
        text: 'Discover Our History',
        href: '/history'
      }
    }
  },
  { 
    name: 'efsfsgfrg.jpg', 
    type: 'image',
    content: {
      title: 'Premium Products',
      subtitle: 'Crafted with Excellence',
      description: 'From our signature handcrafted cigars to premium coffee, artisanal rum, and rich cacao products. Each offering reflects our commitment to quality and the heritage of the Dominican Republic. Discover the complete Don Rogelio experience.',
      link: {
        text: 'Explore Collection',
        href: '/shop'
      }
    }
  },
];

interface MediaItemProps {
  file: MediaFile;
  index: number;
  onVerified: () => void;
}

function MediaItem({ file, index, onVerified }: MediaItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        if (file.type === 'video' && videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [file.type]);

  const url = `${BASE_URL}${encodeURIComponent(file.name)}`;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-12 w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center overflow-x-hidden`}>
        {/* Media Side */}
        <motion.div
          className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative aspect-[4/5] bg-gradient-to-br from-amber-900/20 to-black/40">
            {file.type === 'image' ? (
              <motion.img
                src={url}
                alt={file.content?.title || `Gallery item ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            ) : (
              <video
                ref={videoRef}
                src={url}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
              />
            )}
          </div>
        </motion.div>

        {/* Content Side */}
        {file.content && (
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 100 : -100 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="space-y-3">
              {file.content.subtitle && (
                <motion.p
                  className="text-blue-400 text-sm md:text-base font-light tracking-widest uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  {file.content.subtitle}
                </motion.p>
              )}
              
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                {file.content.title}
              </motion.h2>
              
              <motion.div
                className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-amber-400"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <motion.p
              className="text-blue-200 text-base md:text-lg leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              {file.content.description}
            </motion.p>

            {file.content.link && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  href={file.content.link.href}
                  onClick={onVerified}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                >
                  <span className="text-sm md:text-base font-light tracking-wide">
                    {file.content.link.text}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function AgeVerification({ onVerified }: { onVerified: () => void }) {
  const { language, setLanguage, t } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const currentYear = new Date().getFullYear();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleYes = () => {
    // Store verification in localStorage (expires in 24 hours)
    const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000)
    localStorage.setItem("ageVerified", expiryTime.toString())
    onVerified()
  }

  const handleNo = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto overflow-x-hidden"
    >
      {/* Age Verification Hero Section */}
      <motion.section 
        className="h-screen flex items-center justify-center sticky top-0"
        style={{ opacity }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/cigarrss.png"
            alt="Premium Cigars"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Language Switcher */}
        <div className="absolute top-6 right-6 z-10">
          <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <Globe className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-light uppercase">
              {language}
            </span>
          </button>

          {/* Language Dropdown */}
          <AnimatePresence>
            {showLanguageMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-32 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-xl"
              >
                <button
                  onClick={() => {
                    setLanguage("en")
                    setShowLanguageMenu(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                    language === "en"
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("es")
                    setShowLanguageMenu(false)
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                    language === "es"
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Español
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 mb-6 shadow-2xl">
            <Image
              src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
              alt="Don Rogelio Logo"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-64 mx-auto" />
        </motion.div>

        {/* Age Question */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-widest mb-12">
            {t("ageGateTitle")}
          </h2>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="px-16 py-4 text-xl font-light tracking-widest border-2 border-blue-400 bg-blue-400/10 text-white hover:bg-blue-400 hover:text-black transition-all duration-300 rounded-sm"
            >
              {t("ageGateYes")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
              className="px-16 py-4 text-xl font-light tracking-widest border-2 border-white/40 bg-transparent text-white/70 hover:border-white hover:text-white transition-all duration-300 rounded-sm"
            >
              {t("ageGateNo")}
            </motion.button>
          </div>

          {/* Terms and Privacy */}
          <div className="text-sm text-white/70 font-light">
            <p>
              {t("ageGateTerms")}{" "}
              <Link
                href="/terms"
                className="text-blue-300 hover:text-white underline transition-colors"
              >
                {t("termsOfUse")}
              </Link>{" "}
              {t("ageGateAnd")}{" "}
              <Link
                href="/privacy"
                className="text-blue-300 hover:text-white underline transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
            </p>
          </div>
        </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <div className="relative z-10 bg-black py-20 w-full overflow-x-hidden">
        {mediaFiles.map((file, index) => (
          <MediaItem key={`${file.name}-${index}`} file={file} index={index} onVerified={onVerified} />
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-black to-blue-950/30 border-t border-amber-900/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/50">
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
                    onClick={onVerified}
                    className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                  >
                    {t("history")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    onClick={onVerified}
                    className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                  >
                    {t("shop")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={onVerified}
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
                    onClick={onVerified}
                    className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    onClick={onVerified}
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

        {/* Bottom Bar */}
        <div className="bg-black/50 py-3 border-t border-amber-900/20">
          <div className="container mx-auto px-6">
            <p className="text-xs text-blue-300/60 text-center">
              © {currentYear} Don Rogelio. {t("footerRights")}
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

