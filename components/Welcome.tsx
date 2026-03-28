'use client';

import { motion } from 'framer-motion';

interface WelcomeProps {
  message: string;
}

export default function Welcome({ message }: WelcomeProps) {
  return (
    <section 
        className="section-full texture-watercolor" 
        id="invitation" 
        style={{ 
            background: 'linear-gradient(to bottom, #e1f5fe 0%, #b3e5fc 50%, #ffffff 100%)', 
            padding: '10rem 0 20rem' 
        }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', padding: 'clamp(3rem, 10vw, 10rem)', borderRadius: '5rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', boxShadow: '0 50px 100px rgba(0,0,0,0.2)' }}>
          {/* Textures */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '250px', height: '250px', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '250px', height: '250px', background: 'rgba(128, 0, 0, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }} />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span style={{ color: 'var(--color-gold)', fontSize: '1.2rem', fontWeight: 900, marginBottom: '2rem', display: 'block', letterSpacing: '0.1em' }} className="font-cinzel">
               || Sri Pachai VazhiAmman Thunai ||
            </span>
            <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '3rem', display: 'block' }}>
               With Divine Blessings
            </span>
            <h2 className="font-cinzel text-gradient-gold" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', fontWeight: 900, marginBottom: '4rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
               Invitation
            </h2>
            
            <p className="font-serif" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)', color: 'var(--color-deep-blue)', fontStyle: 'italic', lineHeight: 2, maxWidth: '850px', fontWeight: 500, marginBottom: '3rem' }}>
               "{message}"
            </p>

            <p className="font-cinzel" style={{ fontSize: '0.9rem', color: 'var(--color-gold)', letterSpacing: '0.2em', opacity: 0.8 }}>
               Starting our journey of eternity since 2017
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '6rem', width: '100%' }}>
              <div style={{ height: '1px', width: '150px', background: 'var(--color-gold)', opacity: 0.3, marginBottom: '2rem' }} />
              <div className="flex-center" style={{ color: 'var(--color-gold)', opacity: 0.5 }}>
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.41 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.59 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
                 </svg>
              </div>
              <div style={{ height: '1px', width: '150px', background: 'var(--color-gold)', opacity: 0.3, marginTop: '2rem' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
