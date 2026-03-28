'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface HeroProps {
  groom: string;
  bride: string;
  date: string;
  time: string;
}

export default function Hero({ groom, bride, date, time }: HeroProps) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  // 🏛️ REVEAL TRANSFORM:
  // Starts with just the top 1/4th visible, reveals the rest (couple) on scroll
  const templeY = useTransform(
    smoothProgress, 
    [0, 1], 
    isMobile ? ['10vh', '-120vh'] : ['15vh', '-180vh']
  );
  
  const templeOpacity = 1.0;

  // 💍 PERSISTENT NAMES:
  const namesY = useTransform(smoothProgress, [0, 0.8, 1], ['0px', '-50px', '-100px']);
  const namesOpacity = 1.0;


  const formattedDate = new Date(date).toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <section 
        ref={containerRef}
        className="section-full" 
        style={{ 
            height: '220vh', 
            position: 'relative', 
            overflow: 'visible',
            background: '#e1f5fe' 
        }}
    >
      {/* 1. LAYERED SKY GRADIENT */}
      <div 
        style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100vh', 
            zIndex: 1, 
            background: 'linear-gradient(to bottom, #b3e5fc 0%, #e1f5fe 100%)'
        }}
      />

      {/* 2. THE COMBINED TEMPLE & PHOTO - PROGRESSIVE REVEAL (Z-INDEX 50) */}
      <div 
        style={{ 
            position: 'fixed', 
            top: isMobile ? '350px' : '400px', 
            left: 0, 
            width: '100%', 
            height: '100vh', 
            zIndex: 50, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'flex-start', 
            pointerEvents: 'none',
            overflow: 'hidden'
        }}
      >
        <motion.div 
          style={{ 
              y: templeY, 
              opacity: templeOpacity,
              position: 'relative', 
              width: isMobile ? '100%' : '80%', 
              maxWidth: isMobile ? 'none' : '1000px', 
              height: '400%', 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'flex-start' 
          }}
        >
          <Image 
             src="/images/vimal_couple_temple_full.png" 
             alt="Vimal Couple Temple Full" 
             fill
             style={{ 
                objectFit: 'contain', 
                objectPosition: 'center top'
             }}
             priority
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ 
            y: namesY, 
            opacity: 1.0, 
            position: 'fixed', 
            top: isMobile ? '40px' : '60px', 
            left: 0, 
            width: '100%', 
            zIndex: 100, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 1rem',
            background: 'transparent', 
            pointerEvents: 'none'
        }}
      >
          <span style={{ color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 900, marginBottom: '0.8rem', letterSpacing: '0.1em' }} className="font-cinzel">
             || Sri Pachai VazhiAmman Thunai ||
          </span>
          <span style={{ color: '#01579b', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.8em', fontWeight: 900, marginBottom: '0.5rem' }}>
             Announcing the Marriage of
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-script text-gradient-gold animate-float" 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              filter: 'drop-shadow(0 5px 15px rgba(212, 175, 55, 0.3))',
              width: '100%',
              padding: '0 0.5rem'
             }}
          >
            {groom} <span style={{ fontFamily: 'Cinzel, serif', color: 'var(--color-gold)', fontWeight: 900, fontSize: '0.4em', verticalAlign: 'middle', WebkitTextFillColor: 'var(--color-gold)' }}>&</span> {bride}
          </motion.h1>
          <div className="font-cinzel" style={{ color: '#8B6E32', fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>
             {formattedDate}
          </div>
      </motion.div>

      {/* Cloud Textures */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 5, opacity: 0.1, pointerEvents: 'none', background: 'url("https://www.transparenttextures.com/patterns/white-clouds.png")' }} />

      {/* Transition to the Day invitation below */}
      <motion.div 
        style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            height: '25vh', 
            background: 'linear-gradient(to bottom, transparent, var(--color-sky-blue))',
            zIndex: 60
        }}
      />
    </section>
  );
}
