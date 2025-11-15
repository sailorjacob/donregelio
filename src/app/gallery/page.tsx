'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
    name: '21234e.jpg', 
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
  { 
    name: 'f4jskf4sf.jpg', 
    type: 'image',
    content: {
      title: 'Rogelio Martínez',
      subtitle: '1924 - 2013',
      description: 'Born in Puerto Plata, Dominican Republic, Rogelio was known for his courtesy, his horses, his love of music, and his exquisite rolled cigarettes. A life full of adventure, love, and joy that inspired our brand.',
      link: {
        text: 'Read His Story',
        href: '/history'
      }
    }
  },
  { 
    name: 'fevfbgn (1).jpg', 
    type: 'image',
    content: {
      title: 'Handcrafted Excellence',
      subtitle: 'Quality & Prestige',
      description: 'Every cigar is carefully selected by hand with a long-term cultivation process. Our commitment to quality has established Don Rogelio as a mark of prestige in the premium cigar market.',
      link: {
        text: 'Our Process',
        href: '/history'
      }
    }
  },
  { 
    name: 'fjeklsfe.mp4', 
    type: 'video',
    content: {
      title: 'Global Presence',
      subtitle: 'Worldwide Distribution',
      description: 'From our roots in the Dominican Republic, we now serve discerning enthusiasts in the United States, Italy, and Hong Kong. Our capacity continues to grow while maintaining our artisanal standards.',
    }
  },
  { 
    name: 'g4rgrhyh5.mp4', 
    type: 'video',
    content: {
      title: 'The Art of Rolling',
      subtitle: 'Tradition Meets Passion',
      description: 'Watch our master craftsmen continue the tradition of hand-rolling premium cigars, a skill passed down through generations and perfected in every Don Rogelio cigar.',
    }
  },
  { 
    name: 'wdecvf.jpg', 
    type: 'image',
    content: {
      title: 'Dominican Terroir',
      subtitle: 'From Our Land',
      description: 'The Dominican Republic holds an important position in the global tobacco market. Our tobacco is cultivated in the rich soils that have made our country famous for premium cigars.',
    }
  },
  { 
    name: 'grrdfgrfgrd.jpg', 
    type: 'image',
    content: {
      title: 'Aged in Rum Barrels',
      subtitle: 'Nearly One Year',
      description: 'Our tobacco is aged for nearly a year in special English spiced rum barrels, imparting subtle notes that complement the natural tobacco flavors without overwhelming them.',
    }
  },
  { 
    name: 'grs4wgrs.mp4', 
    type: 'video',
    content: {
      title: 'Behind the Scenes',
      subtitle: 'Crafting Quality',
      description: 'Experience the meticulous process behind every Don Rogelio cigar, from leaf selection to the final quality inspection that ensures excellence in every box.',
    }
  },
  { 
    name: 'mghfnbvxc.mp4', 
    type: 'video',
    content: {
      title: 'Family Tradition',
      subtitle: 'Keeping Memories Alive',
      description: 'Don Rogelio Cigars serves as a faithful reminder to all family members, especially the grandchildren, of a man who lived life with passion and style.',
    }
  },
  { 
    name: 'nfgbfvscdvx.jpg', 
    type: 'image',
    content: {
      title: 'Three Premium Wrappers',
      subtitle: 'Habano • Maduro • Connecticut',
      description: 'Choose from three distinctive wrapper options, each offering its own character while showcasing our core blend of piloto mejorado and criollo 98 corojo tripa with Corojo capote.',
    }
  },
  { 
    name: 'ngcbfxvc.jpg', 
    type: 'image',
    content: {
      title: 'From Rio Grande',
      subtitle: 'Puerto Plata, DR',
      description: 'Our story begins in Rio Grande, a small town of 1,500 inhabitants where Rogelio Martínez was born in 1924. His legacy lives on in every cigar we craft.',
      link: {
        text: 'Learn More',
        href: '/history'
      }
    }
  },
  { 
    name: 'ngcnbvbfx.jpg', 
    type: 'image',
    content: {
      title: 'Quality Control',
      subtitle: 'Every Single Cigar',
      description: 'Each Don Rogelio cigar undergoes rigorous quality inspection. We never compromise on the standards that have built our reputation for excellence.',
    }
  },
  { 
    name: 'ngvvngv.jpg', 
    type: 'image',
    content: {
      title: 'Sustainable Practices',
      subtitle: 'Respecting Our Land',
      description: 'We honor our Dominican heritage by implementing sustainable farming practices that protect our land for future generations while maintaining the quality our name represents.',
    }
  },
  { 
    name: 'vesrgtght.jpg', 
    type: 'image',
    content: {
      title: 'Master Blenders',
      subtitle: 'Expertise in Every Leaf',
      description: 'Our master blenders bring decades of experience to create the distinctive Don Rogelio profile. Their knowledge ensures consistency and excellence in every batch.',
    }
  },
  { 
    name: 'vxfvreev.jpg', 
    type: 'image',
    content: {
      title: 'A Tribute Continues',
      subtitle: 'Honoring Legacy',
      description: 'What started as a tribute to one man has become a celebration of Dominican cigar culture, craftsmanship, and the timeless pleasure of a premium smoke.',
      link: {
        text: 'Our Story',
        href: '/history'
      }
    }
  },
  { 
    name: 'ngcnbfxvdc.jpg', 
    type: 'image',
    content: {
      title: 'Box Selection',
      subtitle: 'Gift-Ready Presentation',
      description: 'Our elegant boxes protect your cigars while making them perfect for gifting. Each box represents the care and attention we put into every aspect of the Don Rogelio experience.',
    }
  },
  { 
    name: 'wdefv.jpg', 
    type: 'image',
    content: {
      title: 'Aging Process',
      subtitle: 'Patience Rewarded',
      description: 'Time is the secret ingredient in our cigars. The extended aging process allows flavors to marry and mellow, creating the smooth, complex profile Don Rogelio is known for.',
    }
  },
  { 
    name: 'wdesfvfbg.jpg', 
    type: 'image',
    content: {
      title: 'International Recognition',
      subtitle: 'Praised Worldwide',
      description: 'From New York to Hong Kong, discerning smokers have discovered what makes Don Rogelio special. Join the global community of enthusiasts who appreciate true quality.',
    }
  },
  { 
    name: 'wdfv.jpg', 
    type: 'image',
    content: {
      title: 'Complete Collection',
      subtitle: 'Eight Distinctive Sizes',
      description: 'From the compact Taco to the majestic Salamon, our range offers something for every preference and occasion. Discover your perfect Don Rogelio cigar.',
      link: {
        text: 'View All Cigars',
        href: '/shop'
      }
    }
  },
  // Individual Cigar Products
  { 
    name: 'fevfbgn.jpg', 
    type: 'image',
    content: {
      title: 'Double Toro',
      subtitle: '60 X 6',
      description: 'For those who appreciate a longer smoke, our Double Toro delivers a complex flavor profile with the same premium Dominican tobacco blend, aged to perfection in rum barrels.',
      link: {
        text: 'View Collection',
        href: '/shop'
      }
    }
  },
  { 
    name: 'get (1).jpeg', 
    type: 'image',
    content: {
      title: 'Lancero',
      subtitle: '40 X 7½',
      description: 'The sophisticated Lancero offers a refined smoking experience. Its slender profile concentrates the flavors of our carefully aged tobacco for the true connoisseur.',
      link: {
        text: 'Shop Lancero',
        href: '/shop'
      }
    }
  },
  { 
    name: 'grdrgrgr.jpg', 
    type: 'image',
    content: {
      title: 'Perfecto',
      subtitle: 'Solomon Size: 57 x 7¼',
      description: 'The distinctive Perfecto shape showcases our rollers\' expertise. Each cigar is a work of art, delivering a unique smoking experience from first light to final puff.',
      link: {
        text: 'Discover Perfecto',
        href: '/shop'
      }
    }
  },
  { 
    name: 'mhgnvcbfxv.jpg', 
    type: 'image',
    content: {
      title: 'Salamon',
      subtitle: 'Solomon Size: 57 x 7¼',
      description: 'The majestic Salamon represents the pinnacle of our collection. A cigar for special occasions, offering an extended smoking experience with complex flavor development.',
      link: {
        text: 'Shop Salamon',
        href: '/shop'
      }
    }
  },
  { 
    name: 'ngcbfrfxbf.jpg', 
    type: 'image',
    content: {
      title: 'Toro',
      subtitle: 'Balanced Perfection',
      description: 'The Toro strikes the perfect balance between size and smoking time. A versatile choice that delivers the full Don Rogelio experience in a timeless format.',
      link: {
        text: 'View Toro',
        href: '/shop'
      }
    }
  },
  { 
    name: 'get.jpeg', 
    type: 'image',
    content: {
      title: 'Torpedo',
      subtitle: 'Tapered Excellence',
      description: 'The sophisticated tapered head of our Torpedo concentrates flavors for enhanced intensity. A favorite among experienced cigar enthusiasts who appreciate refined construction.',
      link: {
        text: 'Explore Torpedo',
        href: '/shop'
      }
    }
  },
  { 
    name: 'ngnvfb.jpg', 
    type: 'image',
    content: {
      title: 'Taco',
      subtitle: '54 X 4½',
      description: 'The Taco size offers a shorter smoke time without sacrificing flavor. Perfect for those moments when you want the Don Rogelio experience in a more compact format.',
      link: {
        text: 'Shop Taco',
        href: '/shop'
      }
    }
  },
];

interface MediaItemProps {
  file: MediaFile;
  index: number;
}

function MediaItem({ file, index }: MediaItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Auto-play video when in view
        if (file.type === 'video' && videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Autoplay was prevented
            });
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

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <main ref={containerRef} className="relative bg-black overflow-x-hidden">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-xl bg-transparent">
        <div className="w-full px-4 sm:px-6 py-3">
          <nav className="flex items-center justify-between max-w-4xl mx-auto">
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/50 group-hover:border-amber-400 transition-colors">
                <Image
                  src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                  alt="Don Rogelio"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/history"
                className="text-sm font-light text-blue-200 hover:text-amber-400 transition-colors duration-300"
              >
                {t("history")}
              </Link>
              <Link
                href="/shop"
                className="text-sm font-light text-blue-200 hover:text-amber-400 transition-colors duration-300"
              >
                {t("shop")}
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-light text-amber-400 transition-colors duration-300"
              >
                {t("gallery")}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-light text-blue-200 hover:text-amber-400 transition-colors duration-300"
              >
                {t("contact")}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden w-full"
        style={{ opacity, scale }}
      >
        <div className="text-center z-10 px-4 w-full max-w-7xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-400/50 shadow-2xl">
              <Image
                src="https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/losdgo.png"
                alt="Don Rogelio Logo"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <svg
              className="w-8 h-8 mx-auto text-amber-200"
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
        </div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-black to-amber-950/30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </motion.section>

      {/* Gallery Section */}
      <div className="relative z-10 bg-black pt-20 w-full overflow-x-hidden">
        {mediaFiles.map((file, index) => (
          <MediaItem key={`${file.name}-${index}`} file={file} index={index} />
        ))}
      </div>

      {/* Footer Section with Shop CTA */}
      <motion.section
        className="min-h-screen flex items-center justify-center bg-black py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center px-4 max-w-3xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("exploreOurCollection")}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-200 font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("experienceEssence")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/shop"
              className="inline-block border border-white text-white px-10 py-4 text-base font-light tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              {t("shopNow")}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-blue-950/30 border-t border-amber-900/20">
        {/* Main Footer Content */}
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
                    href="/gallery"
                    className="text-sm text-blue-200 hover:text-amber-400 transition-colors duration-300"
                  >
                    {t("gallery")}
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

        {/* Bottom Bar */}
        <div className="bg-black/50 py-3 border-t border-amber-900/20">
          <div className="container mx-auto px-6">
            <p className="text-xs text-blue-300/60 text-center">
              © {currentYear} Don Rogelio. {t("footerRights")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

