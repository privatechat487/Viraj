'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';
import Image from 'next/image';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

interface EventsProps {
  events: Event[];
}

export default function Events({ events }: EventsProps) {
  return (
    <section className="bg-cream-white texture-canvas py-24 sm:py-32 md:py-48" id="events" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, amount: 0.8 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="flex-col flex-center"
        >
          <span style={{ color: 'var(--color-gold)', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 800, marginBottom: '2rem', display: 'block' }}>
             The Itinerary
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)', fontWeight: 900, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem', lineHeight: '1.2' }}>
             Celebrations
          </h2>
          <div className="h-[1px] w-48 sm:w-80 bg-gold/40" style={{ height: '1px', width: '200px', backgroundColor: 'var(--color-gold)', opacity: 0.3 }} />
        </motion.div>
      </div>

      <div className="container">
        <div className="flex-col" style={{ gap: 'clamp(10rem, 20vw, 30rem)', display: 'flex', flexDirection: 'column' }}>
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`flex-col md-row ${index % 2 !== 0 ? 'md-row-reverse' : ''}`}
              style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}
            >
              {/* Image Frame */}
              <div style={{ flex: 1, position: 'relative', width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'center' }}>
                 <div className="oval-frame" style={{ width: '100%', aspectRatio: '1/1.2' }}>
                    <Image 
                      src={index % 2 === 0 ? "/images/couple.png" : "/images/hero_bg.png"} 
                      alt={event.title} 
                      fill 
                      className="object-cover" 
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }} />
                 </div>
                 
                 {/* Decorative Florals - Moved to background layer to avoid obscuring content */}
                 <div style={{ 
                    position: 'absolute', 
                    zIndex: -1, 
                    width: 'clamp(18rem, 30vw, 30rem)', 
                    height: 'clamp(18rem, 30vw, 30rem)', 
                    pointerEvents: 'none',
                    opacity: 0.4,
                    ... (index % 2 === 0 ? { top: '-25%', left: '-25%' } : { bottom: '-25%', right: '-25%' })
                 }}>
                    <Image src="/images/florals.png" alt="Floral Decoration" fill className="object-contain" />
                 </div>
              </div>

              {/* Event Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(27, 58, 87, 0.05)', color: 'var(--color-gold)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                       <Calendar size={28} />
                    </div>
                    <h3 className="font-cinzel" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-deep-blue)', fontWeight: 900 }}>
                       {event.title}
                    </h3>
                    <div style={{ height: '1px', width: '80px', backgroundColor: 'var(--color-gold)', opacity: 0.4 }} />
                 </div>

                 <p className="font-serif" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#666', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '400px' }}>
                    "{event.description}"
                 </p>

                 <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
                    <div className="flex-row" style={{ gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                       <Clock size={20} color="var(--color-gold)" />
                       <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-deep-blue)', letterSpacing: '0.1em' }}>{event.time}</span>
                    </div>
                    <div className="flex-row" style={{ gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                       <MapPin size={20} color="var(--color-gold)" />
                       <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-deep-blue)', letterSpacing: '0.1em' }}>{event.venue}</span>
                    </div>
                 </div>

                 <a 
                    href={event.id === 'wedding' ? 'https://maps.app.goo.gl/uXpXpXpXpXpXpXpXp' : '#'}
                    target="_blank"
                    className="btn-premium"
                    style={{ textDecoration: 'none' }}
                 >
                    Get Directions <Navigation size={16} />
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
