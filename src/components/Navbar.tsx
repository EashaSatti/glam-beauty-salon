import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crown } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Deals', href: '#deals' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    x: '100%',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[999] transition-all duration-500 px-6 py-4',
          isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-md py-3' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Crown className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl md:text-2xl font-serif font-bold leading-tight tracking-tight transition-colors duration-500",
                isScrolled ? "text-ink" : "text-white"
              )}>
                Glam & Beauty
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                A House of Brides
              </span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-500 group",
                  isScrolled ? "text-ink/80 hover:text-primary" : "text-white/90 hover:text-accent"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-accent"
                )} />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all pink-gradient"
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            >
              Book Appointment
            </motion.button>

            {/* Mobile Toggle */}
            <button
              className={cn(
                "md:hidden p-2 transition-colors duration-500",
                isScrolled ? "text-ink" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav tag to avoid stacking issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-white z-[9999] md:hidden flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-primary" />
                <span className="text-xl font-serif font-bold text-ink">Glam & Beauty</span>
              </div>
              <button
                className="p-2 text-ink"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <motion.a
                  variants={itemVariants}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif font-medium text-ink border-b border-blush pb-4 hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.button
              variants={itemVariants}
              className="mt-12 w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-xl pink-gradient flex items-center justify-center gap-3"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-booking'));
              }}
            >
              Book Appointment
            </motion.button>

            <div className="mt-auto pt-12 text-center">
              <p className="text-ink/40 text-sm font-medium">
                Misrial Road, Rawalpindi<br />
                0336 5082953
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}