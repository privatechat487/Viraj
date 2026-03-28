'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownProps {
  date: string;
}

export default function Countdown({ date }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(date) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference / (1000 * 60 * 60)) % 24),
          m: Math.floor((difference / 1000 / 60) % 60),
          s: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [date]);

  const units = [
    { label: 'Days', value: timeLeft?.d },
    { label: 'Hours', value: timeLeft?.h },
    { label: 'Minutes', value: timeLeft?.m },
    { label: 'Seconds', value: timeLeft?.s },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-deep-blue)', color: 'white', padding: 'clamp(5rem, 10vw, 15rem) 0', overflow: 'hidden' }} className="texture-canvas">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>
             Counting Down to the Big Day
          </span>
          <h2 className="font-cinzel" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8rem' }}>
             The Grand union
          </h2>
          
          <div style={{ display: 'flex', gap: 'clamp(1rem, 5vw, 6rem)', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
             {units.map((unit, i) => (
                <div key={unit.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', animation: 'fadeInUp 1s ease-out forwards' }}>
                   <div className="flex-center" style={{ width: 'clamp(8rem, 15vw, 15rem)', height: 'clamp(8rem, 15vw, 15rem)', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', boxShadow: '0 40px 80px rgba(0,0,0,0.2)' }}>
                      <span className="font-cinzel" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 900, color: 'var(--color-gold)' }}>
                         {unit.value ?? 0}
                      </span>
                   </div>
                   <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', fontWeight: 900 }}>{unit.label}</span>
                </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
