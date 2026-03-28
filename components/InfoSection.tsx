'use client';

import { motion } from 'framer-motion';

interface InfoProps {
  dressCode: string;
  parking: string;
  accommodation: string;
  hashtag: string;
}

export default function InfoSection({ dressCode, parking, accommodation, hashtag }: InfoProps) {
  const infoCards = [
    { title: 'Dress Code', content: dressCode, icon: '👗' },
    { title: 'Parking', content: parking, icon: '🚗' },
    { title: 'Accommodation', content: accommodation, icon: '🏠' },
    { title: 'Wedding Hashtag', content: hashtag, icon: '✨' },
  ];

  return (
    <section id="info" style={{ backgroundColor: 'var(--color-cream)', padding: 'clamp(5rem, 15vw, 15rem) 0', position: 'relative', overflow: 'hidden' }} className="texture-canvas">
      <div className="container" style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>
             Important Details
          </span>
          <h2 className="font-cinzel text-gradient-gold" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, marginBottom: '3rem' }}>
             Everything You Need
          </h2>
          <div style={{ height: '1px', width: '100px', backgroundColor: 'var(--color-gold)', margin: '0 auto', opacity: 0.4 }} />
        </motion.div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
           {infoCards.map((card, i) => (
              <motion.div
                 key={card.title}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 whileHover={{ y: -15, transition: { duration: 0.3 } }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: i * 0.15 }}
                 style={{ 
                    background: 'white', 
                    padding: '4rem 2rem', 
                    borderRadius: '4rem', 
                    boxShadow: '0 40px 80px rgba(0,0,0,0.05)', 
                    border: '1px solid rgba(212, 175, 55, 0.15)', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    position: 'relative'
                 }}
              >
                 <div className="flex-center" style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    background: 'rgba(212, 175, 55, 0.05)', 
                    fontSize: '2.5rem', 
                    marginBottom: '3rem',
                    border: '2px solid rgba(212, 175, 55, 0.1)'
                 }}>
                    {card.icon}
                 </div>
                 <h3 className="font-cinzel" style={{ 
                    fontSize: 'clamp(1rem, 4vw, 1.3rem)', // Responsive font size
                    color: 'var(--color-gold)', 
                    fontWeight: 900, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.2em', // Reduced letter spacing to prevent overflow
                    marginBottom: '2rem',
                    textAlign: 'center',
                    width: '100%',
                    padding: '0 0.5rem'
                 }}>
                    {card.title}
                 </h3>
                 <p className="font-serif" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', color: '#666', fontStyle: 'italic', lineHeight: 1.8, fontWeight: 400, maxWidth: '300px' }}>
                    {card.content}
                 </p>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
