/**
 * Main Application Component
 * Handles global layout, animations, and system-wide UI features like custom cursors and loading states.
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // State for custom cursor tracking
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  // Scroll progress for the top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initialize Scroll Animations (AOS)
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic', // Supported AOS easing keyword
    });

    // Mouse movement listener for custom cursor
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-cyber-void text-white selection:bg-cyber-cyan/30 md:cursor-none">
      {/* 1. Initial System Boot Loading Screen */}
      <LoadingScreen />

      {/* 2. Custom Cybernetic Cursor (Only visible on larger screens) */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-cyan z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        animate={{ x: cursorPos.x - 16, y: cursorPos.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-fuchsia rounded-full z-[9999] pointer-events-none hidden md:block"
        animate={{ x: cursorPos.x - 4, y: cursorPos.y - 4 }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.2 }}
      />

      {/* 3. Global Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-cyan z-[9999] origin-left shadow-[0_0_15px_#00FFFF]"
        style={{ scaleX }}
      />

      {/* 4. Page Sections */}
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <Timeline />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      {/* 5. Back to Top Navigation Utility */}
      <button 
        aria-label="Scroll back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-12 h-12 glass rounded-xl flex items-center justify-center border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 transition-all z-40 group"
      >
        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
      </button>
    </div>
  );
}

export default App;