'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  url: string;
}

export default function MusicPlayer({ url }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.4;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Autoplay blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60] flex items-center group">
       <audio ref={audioRef} src={url} loop />
       
       <AnimatePresence>
          {isPlaying && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, x: 20 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               exit={{ opacity: 0, scale: 0.8, x: 20 }}
               className="bg-[#1b3a57]/80 backdrop-blur-3xl text-white py-3 px-8 rounded-full border border-white/10 shadow-3xl mr-6 flex items-center gap-4 select-none"
            >
               <Music size={14} className="text-[#d4af37] animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Rhythms of Unity</span>
               <div className="flex gap-1 items-end h-3">
                  <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-[#d4af37]" />
                  <motion.div animate={{ height: [12, 4, 12] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-[#d4af37]" />
                  <motion.div animate={{ height: [8, 12, 8] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-[#d4af37]" />
               </div>
            </motion.div>
          )}
       </AnimatePresence>

       <motion.button
         whileHover={{ scale: 1.1, rotate: 15 }}
         whileTap={{ scale: 0.9 }}
         onClick={togglePlay}
         className={`w-16 h-16 rounded-full shadow-3xl flex items-center justify-center transition-all duration-700 relative overflow-hidden group/btn ${
           isPlaying 
           ? 'bg-[#800000] text-white' 
           : 'bg-white text-[#800000] border border-[#d4af37]/40 ring-4 ring-[#d4af37]/10'
         }`}
       >
          <div className="relative z-10 transition-transform duration-700 group-hover/btn:scale-110">
             {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </div>
          
          <AnimatePresence>
             {!isPlaying && (
                <motion.div 
                   animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.4, 0.1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute inset-0 rounded-full bg-[#d4af37]/20 pointer-events-none"
                />
             )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 pointer-events-none" />
       </motion.button>
    </div>
  );
}
