'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, User, Users, Check, Send } from 'lucide-react';
import Image from 'next/image';

interface RSVPProps {
  whatsappNumber: string;
  deadline: string;
}

export default function RSVP({ whatsappNumber, deadline }: RSVPProps) {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I'm ${formData.name}. I will be attending the wedding with ${formData.guests} person(s).`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-24 sm:py-32 md:py-48 overflow-hidden texture-watercolor" id="rsvp" style={{ background: 'var(--color-blush)' }}>
      {/* Decorative Birds/Florals */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{ 
          position: 'absolute', 
          top: '5%', 
          right: '5%', 
          width: 'clamp(10rem, 30vw, 40rem)', 
          height: 'clamp(10rem, 30vw, 40rem)', 
          opacity: 0.3, 
          zIndex: 1, 
          pointerEvents: 'none' 
        }}
      >
         <Image src="/images/birds.png" alt="Birds" fill className="object-contain" />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '5rem' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, amount: 0.8 }}
           transition={{ duration: 1.2 }}
           className="flex-col flex-center"
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.6em', fontWeight: 900, marginBottom: '2rem', display: 'block' }}>
             Be Our Guest
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)', fontWeight: 900, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>
             R.S.V.P
          </h2>
          <p style={{ color: 'var(--color-deep-blue)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', border: '1px solid rgba(27, 58, 87, 0.2)', padding: '1rem 3rem', borderRadius: '5rem', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.4)', display: 'inline-block' }}>
             Respond by {new Date(deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.98, y: 100 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="card-premium"
           style={{ width: '100%', borderRadius: '4rem', padding: 'clamp(2rem, 5vw, 6rem)', background: 'rgba(27, 58, 87, 0.15)' }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                 <label style={{ fontSize: '0.7rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Your Full Name</label>
                 <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <User size={24} style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.3)' }} />
                    <input 
                       type="text" 
                       required
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                       placeholder="Enter Guest Name"
                       className="input-premium"
                    />
                 </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                 <label style={{ fontSize: '0.7rem', fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Number of Companions</label>
                 <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Users size={24} style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.3)' }} />
                    <select 
                       value={formData.guests}
                       onChange={(e) => setFormData({...formData, guests: e.target.value})}
                       className="input-premium"
                       style={{ textTransform: 'uppercase' }}
                    >
                       <option value="1">1 Person</option>
                       <option value="2">2 People</option>
                       <option value="3">3 People</option>
                       <option value="4+">4+ Guests</option>
                    </select>
                 </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem', width: '100%' }}>
                 <button 
                    type="submit"
                    className="btn-premium"
                    style={{ background: 'white', color: 'var(--color-deep-blue)', padding: '2rem', justifyContent: 'center' }}
                 >
                    <Send size={24} /> Register Attendance
                 </button>
                 <button 
                    type="button"
                    onClick={handleWhatsApp}
                    className="btn-premium btn-whatsapp"
                    style={{ padding: '2rem', justifyContent: 'center' }}
                 >
                    <MessageCircle size={24} /> WhatsApp RSVP
                 </button>
              </div>
            </form>
          ) : (
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               style={{ textAlign: 'center', padding: '5rem 0' }}
            >
               <div className="flex-center" style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: 'var(--color-gold)', margin: '0 auto 3rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Check size={64} />
               </div>
               <h3 className="font-cinzel" style={{ fontSize: '2.5rem', color: 'white', fontWeight: 900, marginBottom: '1.5rem' }}>Success!</h3>
               <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.4em', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>We've received your RSVP.</p>
               <button 
                  onClick={() => setIsSubmitted(false)}
                  style={{ background: 'none', border: 'none', borderBottom: '1px solid var(--color-gold)', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.7rem', fontWeight: 900, marginTop: '4rem', cursor: 'pointer', paddingBottom: '0.5rem' }}
               >
                  Update Info
               </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Floral */}
      <motion.div 
        animate={{ rotate: [-2, 2, -2], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 15 }}
        style={{ 
          position: 'absolute', 
          bottom: '-10%', 
          left: '-5%', 
          width: 'clamp(20rem, 40vw, 50rem)', 
          height: 'clamp(20rem, 40vw, 50rem)', 
          opacity: 0.3, 
          zIndex: 1, 
          pointerEvents: 'none' 
        }}
      >
         <Image src="/images/florals.png" alt="Flora" fill className="object-contain" />
      </motion.div>
    </section>
  );
}
