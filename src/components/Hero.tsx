import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.heroBackground}
          alt="Pakistani Bride"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-primary/20 to-white" />
      </motion.div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2], 
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute text-accent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles size={Math.random() * 12 + 8} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Est. 2018 • Rawalpindi
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-4 drop-shadow-2xl leading-tight">
            Glam & Beauty <br />
            <span className="text-accent italic">Salon</span>
          </h1>
          <p className="text-xl md:text-3xl font-serif text-blush/90 mb-8 italic drop-shadow-lg">
            "A House of Brides"
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Rawalpindi's most loved bridal and beauty destination. Where every bride becomes a glam queen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 105, 180, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-2xl pink-gradient flex items-center justify-center gap-2"
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            >
              Book Your Glow-Up
            </motion.button>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg transition-all"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
