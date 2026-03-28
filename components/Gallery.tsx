'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  url: string;
  caption: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <section id="story" style={{ backgroundColor: 'white', padding: 'clamp(5rem, 15vw, 15rem) 0', position: 'relative', overflow: 'hidden' }} className="texture-canvas">
      <div className="container" style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>
             A Modern Fairytale
          </span>
          <h2 className="font-cinzel" style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)', fontWeight: 900, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>
            Our Story
          </h2>
          <div style={{ height: '1px', width: '100px', backgroundColor: 'var(--color-gold)', margin: '0 auto', opacity: 0.4 }} />
        </motion.div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Story Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center', marginBottom: '10rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ position: 'relative', width: '100%' }}
          >
             <div className="oval-frame" style={{ width: '100%', aspectRatio: '1/1.3' }}>
                <Image 
                  src={items[0]?.url || "/images/couple.png"}
                  alt="Main Story"
                  fill
                  style={{ objectFit: 'cover' }}
                />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
            className="md-text-left"
          >
            <p className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--color-deep-blue)', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '4rem', fontWeight: 500 }}>
              "From the first glance to our final 'Yes', every moment has been a piece of the puzzle that completed us."
            </p>
            <p className="font-serif" style={{ fontSize: '1.2rem', color: '#888', fontStyle: 'italic', lineHeight: 2, maxWidth: '500px' }}>
              Our love blossomed in the quiet spaces between heartbeats—a journey that began with friendship and turned into a lifetime of shared dreams.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {items.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
            >
              <div className="card-premium" style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', padding: 0, borderRadius: '2rem' }}>
                 <Image 
                   src={item.url} 
                   alt={item.caption} 
                   width={500}
                   height={600}
                   style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'transform 0.5s ease' }}
                   className="hover-scale"
                 />
              </div>
              <p className="font-cinzel" style={{ fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.3em', fontWeight: 900, textTransform: 'uppercase' }}>
                 {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
