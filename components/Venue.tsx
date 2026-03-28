'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

interface VenueProps {
  name: string;
  address: string;
  location: string;
  mapsUrl: string;
}

export default function Venue({ name, address, location, mapsUrl }: VenueProps) {
  return (
    <section id="venue" style={{ backgroundColor: 'white', padding: 'clamp(5rem, 15vw, 15rem) 0', overflow: 'hidden' }} className="texture-watercolor">
      <div className="container" style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>
             The Grand Venue
          </span>
          <h2 className="font-cinzel" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'var(--color-deep-blue)', fontWeight: 900, marginBottom: '3rem' }}>
             Where We Unite
          </h2>
          <div style={{ height: '1px', width: '100px', backgroundColor: 'var(--color-gold)', margin: '0 auto', opacity: 0.4 }} />
        </motion.div>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '8rem', alignItems: 'center' }}>
        
        {/* Address Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           style={{ display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'center' }}
           className="md-text-left"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }} className="md-items-start">
             <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(27, 58, 87, 0.05)', color: 'var(--color-gold)', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '1rem' }}>
                <MapPin size={28} />
             </div>
             <h3 className="font-cinzel" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-deep-blue)' }}>{name}</h3>
             <p className="font-serif" style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic', maxWidth: '400px', lineHeight: 2 }}>
                {address}<br />
                {location}
             </p>
          </div>

          <a 
            href={mapsUrl}
            target="_blank"
            className="btn-premium"
            style={{ textDecoration: 'none', alignSelf: 'center' }}
          >
             Open in Google Maps <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Maps Embed */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           style={{ width: '100%', height: '500px', borderRadius: '4rem', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)', border: '10px solid white' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3897.9773717756784!2d80.02762497506546!3d12.317309887941184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDE5JzAyLjMiTiA4MMKwMDEnNDguNyJF!5e0!3m2!1sen!2sin!4v1774674927572!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
          />
        </motion.div>
      </div>
    </section>
  );
}
