/**
 * Call To Action Component
 * High-impact section designed to convert users using immersive ripples and neon typography.
 */

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="py-40 bg-cyber-void relative overflow-hidden">
      
      {/* 1. Immersive Animated Pulsing Rings (Background Decoration) */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 2.2, opacity: [0, 0.4, 0] }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              delay: i * 2.5,
              ease: "linear" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyber-cyan/40 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-32 rounded-[4rem] border-white/5 relative overflow-hidden text-center group">
          
          {/* Holographic Gradient Shift on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/5 via-transparent to-cyber-fuchsia/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" aria-hidden="true"></div>
          
          <div className="relative z-10">
            {/* Top Badge Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-cyber-cyan font-black tracking-[0.6em] text-[10px] uppercase mb-10 flex items-center justify-center gap-4"
            >
              <span className="w-12 h-px bg-cyber-cyan" aria-hidden="true"></span>
              Secure Your Uplink
              <span className="w-12 h-px bg-cyber-cyan" aria-hidden="true"></span>
            </motion.div>

            {/* Main CTA Heading */}
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85] uppercase"
            >
              TRANSCEND THE <br />
              <span className="neon-text-cyan italic">BIOLOGICAL</span>
            </motion.h2>
            
            {/* Persuasive Copy */}
            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-20 font-medium leading-relaxed uppercase tracking-wider">
              The neural threshold is open. Join the thousands who have already 
              achieved cognitive liberation through our advanced neural mesh.
            </p>

            {/* Action Buttons with high-glow effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <motion.button 
                aria-label="Initiate the neural uplink process"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 50px rgba(0, 255, 255, 0.5)",
                  borderColor: "rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-16 py-7 rounded-full bg-cyber-cyan text-cyber-void font-black tracking-[0.3em] text-xs transition-all border-2 border-transparent uppercase"
              >
                Initiate Uplink
              </motion.button>
              
              <motion.button 
                aria-label="Access the project white paper"
                whileHover={{ 
                  backgroundColor: "rgba(255, 0, 79, 0.15)",
                  borderColor: "rgba(255, 0, 79, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-16 py-7 rounded-full glass border-white/10 text-white font-black tracking-[0.3em] text-xs transition-all border-2 border-transparent uppercase"
              >
                Access Protocol
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 2. Massive Background Decorative Stamp Layer */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[30rem] font-black text-white/[0.01] pointer-events-none select-none tracking-tighter uppercase whitespace-nowrap z-0" aria-hidden="true">
        Transcend
      </div>
    </section>
  );
};

export default CTA;