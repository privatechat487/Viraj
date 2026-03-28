'use client';

import { motion } from 'framer-motion';

interface FooterProps {
  groom: string;
  bride: string;
}

export default function Footer({ groom, bride }: FooterProps) {
  return (
    <footer style={{ backgroundColor: 'var(--color-cream)', padding: 'clamp(5rem, 10vw, 15rem) 0', position: 'relative', overflow: 'hidden', textAlign: 'center', zIndex: 200 }} className="texture-watercolor">
      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '3rem', color: 'var(--color-gold)' }}>🕊️</div>
          <h2 className="font-cinzel" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', fontWeight: 900, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>
             {groom} & {bride}
          </h2>
          <div style={{ height: '1px', width: '200px', backgroundColor: 'var(--color-gold)', margin: '4rem auto', opacity: 0.3 }} />
          <p className="font-serif" style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic', maxWidth: '600px', lineHeight: 2 }}>
             Thank you for being a part of our life's most beautiful journey. Your love and blessings are the greatest gifts we could ever receive.
          </p>
          
          <div style={{ marginTop: '6rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
             <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900 }}>Crafted with Love</span>
             <div className="font-cinzel" style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-deep-blue)' }}>
                V <span style={{ color: 'var(--color-gold)' }}>&</span> R
             </div>
             <p style={{ color: 'rgba(0,0,0,0.2)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>© 2026. ALL RIGHTS RESERVED.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
