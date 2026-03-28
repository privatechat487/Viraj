'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="journey" className="texture-canvas" style={{ backgroundColor: '#fff', padding: 'clamp(3rem, 10vw, 8rem) 0', overflow: 'hidden', position: 'relative' }}>
        {/* Background Mandala */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', opacity: 0.03, pointerEvents: 'none' }}>
           <img src="https://www.transparenttextures.com/patterns/mandala.png" style={{ width: '100%', height: '100%', filter: 'invert(1)' }} alt="" />
        </div>
        
        <div className="container" style={{ textAlign: 'center', marginBottom: isMobile ? '4rem' : '8rem', position: 'relative', zIndex: 10 }}>
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
            >
                <span className="font-cinzel" style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>
                    A Journey Since 2017
                </span>
                <h2 className="font-cinzel text-gradient-gold" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, marginBottom: '2rem' }}>
                    Our Love Story
                </h2>
                <div style={{ height: '1px', width: '100px', backgroundColor: 'var(--color-gold)', margin: '0 auto', opacity: 0.4 }} />
            </motion.div>
        </div>

        <div className="container" style={{ position: 'relative', maxWidth: '1200px', padding: '0 2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '5rem' : '8rem' }}>
                {items.map((item, index) => (
                    <div key={item.year} style={{ 
                        display: 'flex', 
                        flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'), 
                        alignItems: isMobile ? 'flex-start' : 'center', 
                        position: 'relative',
                        gap: isMobile ? '2rem' : '0'
                    }}>
                        {/* Circle Indicator (Hidden on mobile or repositioned) */}
                        {!isMobile && (
                           <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', backgroundColor: 'var(--color-gold)', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 20px rgba(184,134,11,0.5)' }} />
                        )}

                        <motion.div
                           initial={{ opacity: 0, x: isMobile ? -30 : (index % 2 === 0 ? -50 : 50) }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.2 }}
                           style={{ 
                             width: isMobile ? '100%' : '45%', 
                             textAlign: isMobile ? 'left' : (index % 2 === 0 ? 'right' : 'left'),
                             backgroundColor: isMobile ? 'rgba(212,175,55,0.03)' : 'transparent',
                             padding: isMobile ? '2rem' : '0',
                             borderRadius: isMobile ? '2rem' : '0'
                           }}
                        >
                            <span className="font-cinzel" style={{ 
                                fontSize: isMobile ? '3rem' : 'clamp(3rem, 6vw, 5rem)', 
                                fontWeight: 900, 
                                color: 'var(--color-gold)', 
                                opacity: isMobile ? 0.3 : 0.2, 
                                marginBottom: '-0.5rem', 
                                display: 'block' 
                            }}>
                                {item.year}
                            </span>
                            <h3 className="font-cinzel" style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', color: 'var(--color-deep-blue)', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {item.title}
                            </h3>
                            <p className="font-serif" style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#666', fontStyle: 'italic', lineHeight: 1.8 }}>
                                {item.description}
                            </p>
                        </motion.div>
                        
                        {!isMobile && <div style={{ width: '10%' }} />}
                        {!isMobile && <div style={{ width: '45%' }} />}
                    </div>
                ))}
            </div>
            {/* The Vertical Line - Only on Desktop */}
            {!isMobile && (
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--color-gold)', opacity: 0.3, transform: 'translateX(-50%)' }} />
            )}
        </div>
    </section>
  );
}
