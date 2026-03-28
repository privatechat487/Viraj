'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Transform the Y position to create a 'video-like' scroll transition
  // The image moves from top to bottom as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div 
      ref={ref}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100vh', 
        zIndex: 1, 
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ 
          y, 
          scale,
          width: '100%', 
          height: '150%', // Make it taller to allow for scrolling room
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        <Image 
          src="/images/parallax_bg.png" 
          alt="3D Parallax Video Background" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.3 }}
          priority
        />
      </motion.div>
      
      {/* Darker overlay gradients to ensure 100% text legibility on top of the base image */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5, 10, 20, 0.6) 0%, transparent 40%, transparent 60%, rgba(5, 10, 20, 0.6) 100%)' }} />
    </div>
  );
}
