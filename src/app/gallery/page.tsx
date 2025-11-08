'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BASE_URL = 'https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/donregelio/socialsite/';

const mediaFiles = [
  { name: '1234e.jpg', type: 'image' },
  { name: 'efsfsgfrg.jpg', type: 'image' },
  { name: 'f4jskf4sf.jpg', type: 'image' },
  { name: 'fevfbgn (1).jpg', type: 'image' },
  { name: 'fevfbgn.jpg', type: 'image' },
  { name: 'fjeklsfe.mp4', type: 'video' },
  { name: 'g4rgrhyh5.mp4', type: 'video' },
  { name: 'get (1).jpeg', type: 'image' },
  { name: 'get.jpeg', type: 'image' },
  { name: 'grdrgrgr.jpg', type: 'image' },
  { name: 'grrdfgrfgrd.jpg', type: 'image' },
  { name: 'grs4wgrs.mp4', type: 'video' },
  { name: 'mghfnbvxc.mp4', type: 'video' },
  { name: 'mhgnvcbfxv.jpg', type: 'image' },
  { name: 'nfgbfvscdvx.jpg', type: 'image' },
  { name: 'ngcbfrfxbf.jpg', type: 'image' },
  { name: 'ngcbfxvc.jpg', type: 'image' },
  { name: 'ngcnbfxvdc.jpg', type: 'image' },
  { name: 'ngcnbvbfx.jpg', type: 'image' },
  { name: 'ngnvfb.jpg', type: 'image' },
  { name: 'ngvvngv.jpg', type: 'image' },
  { name: 'vesrgtght.jpg', type: 'image' },
  { name: 'vxfvreev.jpg', type: 'image' },
  { name: 'wdecvf.jpg', type: 'image' },
  { name: 'wdefv.jpg', type: 'image' },
  { name: 'wdesfvfbg.jpg', type: 'image' },
  { name: 'wdfv.jpg', type: 'image' },
];

interface MediaItemProps {
  file: { name: string; type: string };
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
      className={`min-h-screen flex items-center ${
        isLeft ? 'justify-start' : 'justify-end'
      } px-4 md:px-8 lg:px-16`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className={`w-full md:w-1/2 lg:w-5/12 relative overflow-hidden rounded-2xl shadow-2xl`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[4/5] bg-gradient-to-br from-amber-900/20 to-black/40">
          {file.type === 'image' ? (
            <motion.img
              src={url}
              alt={`Gallery item ${index + 1}`}
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
                Don Regelio
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
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

      {/* Footer Section */}
      <motion.section
        className="h-screen flex items-center justify-center bg-gradient-to-t from-amber-950/50 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center px-4">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Crafted with Passion
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-amber-200 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the essence of Don Regelio
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}

