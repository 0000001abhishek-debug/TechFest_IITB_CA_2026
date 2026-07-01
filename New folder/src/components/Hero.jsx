/**
 * Hero Section Component
 * Features a giant futuristic headline with typewriter effect, animated background elements, 
 * and a main cyborg illustration with HUD overlays.
 */

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const headline = "THE FUTURE IS CYBERNETIC";
  const words = headline.split(" ");

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  // Typewriter effect variants
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Grid & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_70%)]"></div>
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
        />
        
        {/* Horizontal Scanning Line Animation */}
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* 1. Left Content: Heading & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-cyber-cyan/20 text-cyber-cyan text-[10px] font-black tracking-[0.3em] mb-8 uppercase"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
            </span>
            Neural Link: Established
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter uppercase"
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word === "CYBERNETIC" ? (
                  <span className="neon-text-cyan italic">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={letterVariants}
                        transition={{ delay: 1.5 + (charIndex * 0.05) }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ) : (
                  word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={letterVariants}
                      transition={{ delay: 0.8 + (wordIndex * 0.2) + (charIndex * 0.05) }}
                    >
                      {char}
                    </motion.span>
                  ))
                )}
                {wordIndex === words.length - 2 && <br className="hidden md:block" />}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium"
          >
            Beyond humanity. Beyond machinery. We are building the next stage of 
            evolution through seamless neural integration and quantum intelligence.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <motion.button 
              aria-label="Access the core technology"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 rounded-full bg-cyber-cyan text-cyber-void font-black tracking-[0.2em] text-xs transition-all uppercase"
            >
              Access Core
            </motion.button>
            <motion.button 
              aria-label="Join the neural revolution"
              whileHover={{ backgroundColor: "rgba(255, 0, 79, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 rounded-full glass border-cyber-fuchsia text-cyber-fuchsia font-black tracking-[0.2em] text-xs transition-all uppercase"
            >
              Join Uprising
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 2. Right Content: Floating Cyborg Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/30 via-transparent to-cyber-fuchsia/30 blur-[120px] rounded-full group-hover:opacity-100 opacity-60 transition-opacity duration-1000" aria-hidden="true"></div>
          
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85" 
              alt="3D cybernetic neural face by A Chosen Soul on Unsplash" 
              loading="eager" 
              className="w-full h-auto max-w-[620px] mx-auto drop-shadow-[0_0_60px_rgba(0,255,255,0.25)] grayscale-[0.2] contrast-[1.2] brightness-[1.1]"
            />
            
            {/* Holographic HUD Overlay Elements */}
            <div className="absolute top-1/4 -right-4 lg:-right-12 hidden md:block">
              <div className="glass p-5 rounded-xl border-cyber-cyan/30 backdrop-blur-3xl animate-pulse">
                <div className="text-[9px] text-cyber-cyan font-bold tracking-[0.3em] mb-2 uppercase">Neural Load</div>
                <div className="text-2xl font-black text-white">42.8%</div>
                <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="w-[42%] h-full bg-cyber-cyan"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -left-4 lg:-left-12 hidden md:block">
              <div className="glass p-5 rounded-xl border-cyber-fuchsia/30 backdrop-blur-3xl">
                <div className="text-[9px] text-cyber-fuchsia font-bold tracking-[0.3em] mb-2 uppercase">Sync Rate</div>
                <div className="text-2xl font-black text-white">OPTIMAL</div>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-cyber-fuchsia rounded-full"></div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Floating Digital Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 1000 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [1000, -100],
              x: (Math.random() - 0.5) * 200
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute left-1/2 w-1 h-1 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00FFFF]"
            style={{ marginLeft: `${(Math.random() - 0.5) * 100}%` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;