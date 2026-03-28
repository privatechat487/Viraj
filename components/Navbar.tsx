'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Invitation', href: '#invitation' },
    { title: 'Events', href: '#events' },
    { title: 'Venue', href: '#venue' },
    { title: 'RSVP', href: '#rsvp' },
  ];

  return (
    <>
      <nav 
        className={`nav-fixed ${isScrolled ? 'nav-scrolled' : ''}`}
        style={{ height: isScrolled ? '70px' : '100px', display: 'flex', alignItems: 'center' }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {/* Logo - Centered */}
          <div className="font-cinzel" style={{ fontSize: '1.8rem', fontWeight: 900, color: isScrolled ? 'var(--color-deep-blue)' : 'white' }}>
             V <span style={{ color: 'var(--color-gold)' }}>&</span> R
          </div>

          {/* Mobile Toggle - Shifted to the right */}
          <button 
             className="md-hidden"
             onClick={() => setIsMenuOpen(true)}
             style={{ 
                position: 'absolute',
                right: '0',
                background: isScrolled ? 'rgba(27, 58, 87, 0.05)' : 'rgba(255, 255, 255, 0.1)', 
                border: 'none', 
                padding: '0.8rem', 
                borderRadius: '50%', 
                color: isScrolled ? 'var(--color-gold)' : 'white',
                cursor: 'pointer'
             }}
          >
             <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              zIndex: 2000, 
              background: 'var(--color-deep-blue)', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '3rem'
            }}
          >
             {/* Close Button */}
             <button 
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  position: 'absolute', 
                  top: '2rem', 
                  right: '2rem', 
                  background: 'none', 
                  border: 'none', 
                  color: 'white', 
                  cursor: 'pointer' 
                }}
             >
                <X size={32} />
             </button>

             {navLinks.map((link, i) => (
                <motion.a
                   key={link.title}
                   href={link.href}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   onClick={() => setIsMenuOpen(false)}
                   style={{ 
                     color: 'white', 
                     textDecoration: 'none', 
                     fontSize: '2rem', 
                     fontFamily: 'Cinzel, serif', 
                     textTransform: 'uppercase', 
                     letterSpacing: '0.2em' 
                   }}
                >
                   {link.title}
                </motion.a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
