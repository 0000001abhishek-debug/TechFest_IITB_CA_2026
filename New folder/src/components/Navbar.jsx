/**
 * Navigation Bar Component
 * Sticky floating navigation with glassmorphism and mobile responsiveness.
 * Includes safe-area coverage for mobile devices.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility for Tailwind class merging */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Technology', href: '#technology' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 pt-[env(safe-area-inset-top)]',
        isScrolled ? 'pt-2' : 'pt-6'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between transition-all duration-500',
          isScrolled ? 'neon-border-cyan bg-cyber-void/80' : 'bg-cyber-void/40 border-white/5'
        )}
      >
        {/* 1. Logo Section with spinning animation */}
        <div className="flex items-center gap-3 group cursor-pointer" aria-label="Cyborg Era Home">
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyber-cyan via-cyber-fuchsia to-cyber-cyan p-0.5"
            >
              <div className="w-full h-full bg-cyber-void rounded-full flex items-center justify-center">
                <span className="text-xl font-black text-white group-hover:neon-text-cyan transition-colors">C</span>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-cyber-cyan/20 blur-xl rounded-full group-hover:bg-cyber-cyan/40 transition-all duration-300" aria-hidden="true"></div>
          </div>
          <span className="text-xl font-black tracking-[0.2em] hidden sm:block uppercase text-white">
            CYBORG<span className="text-cyber-cyan group-hover:neon-text-cyan transition-colors">ERA</span>
          </span>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-cyber-cyan transition-all relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-cyan shadow-[0_0_8px_#00FFFF]"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute -top-1 -right-2 w-1 h-1 bg-cyber-fuchsia rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_5px_#FF004F]" aria-hidden="true"></span>
            </a>
          ))}
        </div>

        {/* 3. Action Call (Desktop) */}
        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2.5 rounded-full bg-cyber-cyan text-cyber-void font-black text-xs tracking-widest transition-all border-2 border-transparent hover:border-white uppercase"
          >
            Initiate
          </motion.button>
        </div>

        {/* 4. Mobile Navigation Toggle */}
        <button
          className="md:hidden text-cyber-cyan text-3xl focus:outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* 5. Mobile Menu Overlay (Animated Presence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-40 bg-cyber-void/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] px-6"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 text-4xl text-cyber-fuchsia p-2 mt-[env(safe-area-inset-top)]"
              aria-label="Close menu"
            >
              <HiX />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                className="text-3xl font-black tracking-widest uppercase hover:neon-text-cyan transition-colors text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 px-12 py-4 rounded-full bg-cyber-cyan text-cyber-void font-bold tracking-[0.2em] uppercase w-full max-w-xs shadow-[0_0_20px_#00FFFF]"
            >
              Join Revolution
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;