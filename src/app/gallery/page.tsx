'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      title: 'Double Toro Excellence',
      subtitle: '60 X 6',
      description: 'For those who appreciate a longer smoke, our Double Toro delivers a complex flavor profile with the same premium Dominican tobacco blend, aged to perfection in rum barrels.',
      link: {
        text: 'View Collection',
        href: '/shop'
      }
    }
  },
  { 
    name: 'fevfbgn.jpg', 
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
    name: 'get (1).jpeg', 
    type: 'image',
    content: {
      title: 'Lancero Elegance',
      subtitle: '40 X 7½',
      description: 'The sophisticated Lancero offers a refined smoking experience. Its slender profile concentrates the flavors of our carefully aged tobacco for the true connoisseur.',
      link: {
        text: 'Shop Lancero',
        href: '/shop'
      }
    }
  },
  { 
    name: 'get.jpeg', 
    type: 'image',
    content: {
      title: 'Dominican Terroir',
      subtitle: 'From Our Land',
      description: 'The Dominican Republic holds an important position in the global tobacco market. Our tobacco is cultivated in the rich soils that have made our country famous for premium cigars.',
    }
  },
  { 
    name: 'grdrgrgr.jpg', 
    type: 'image',
    content: {
      title: 'Perfecto Craftsmanship',
      subtitle: 'Solomon Size: 57 x 7¼',
      description: 'The distinctive Perfecto shape showcases our rollers\' expertise. Each cigar is a work of art, delivering a unique smoking experience from first light to final puff.',
      link: {
        text: 'Discover Perfecto',
        href: '/shop'
      }
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
    name: 'mhgnvcbfxv.jpg', 
    type: 'image',
    content: {
      title: 'Salamon Supreme',
      subtitle: 'Solomon Size: 57 x 7¼',
      description: 'The majestic Salamon represents the pinnacle of our collection. A cigar for special occasions, offering an extended smoking experience with complex flavor development.',
      link: {
        text: 'Shop Salamon',
        href: '/shop'
      }
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
    name: 'ngcbfrfxbf.jpg', 
    type: 'image',
    content: {
      title: 'Toro Classic',
      subtitle: 'Balanced Perfection',
      description: 'The Toro strikes the perfect balance between size and smoking time. A versatile choice that delivers the full Don Rogelio experience in a timeless format.',
      link: {
        text: 'View Toro',
        href: '/shop'
      }
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
    name: 'ngcnbfxvdc.jpg', 
    type: 'image',
    content: {
      title: 'Torpedo Precision',
      subtitle: 'Tapered Excellence',
      description: 'The sophisticated tapered head of our Torpedo concentrates flavors for enhanced intensity. A favorite among experienced cigar enthusiasts who appreciate refined construction.',
      link: {
        text: 'Explore Torpedo',
        href: '/shop'
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
    name: 'ngnvfb.jpg', 
    type: 'image',
    content: {
      title: 'Taco Delight',
      subtitle: '54 X 4½',
      description: 'The Taco size offers a shorter smoke time without sacrificing flavor. Perfect for those moments when you want the Don Rogelio experience in a more compact format.',
      link: {
        text: 'Shop Taco',
        href: '/shop'
      }
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
    name: 'wdecvf.jpg', 
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
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
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
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.p
                  className="text-white text-lg font-light tracking-wide"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Don Rogelio
                </motion.p>
              </div>
            </div>
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
                  className="text-amber-400 text-sm md:text-base font-light tracking-widest uppercase"
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
                className="w-20 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <motion.p
              className="text-blue-100 text-base md:text-lg leading-relaxed font-light"
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
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300 group"
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

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <main ref={containerRef} className="relative bg-black">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center sticky top-0"
        style={{ opacity, scale }}
      >
        <div className="text-center z-10 px-4">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Don Regelio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-amber-200 font-light tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            OUR STORY IN MOTION
          </motion.p>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
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
      <div className="relative z-10 bg-black pt-20">
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
            Explore Our Collection
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-blue-200 font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the essence of Don Rogelio
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
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

