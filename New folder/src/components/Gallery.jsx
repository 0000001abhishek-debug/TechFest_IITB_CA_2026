/**
 * Visual Archive Component (Gallery)
 * Showcases high-fidelity neural logs using interactive cards with hoverZoom and glitch effects.
 */

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Aerial view of neon city by Leyre on Unsplash',
    title: 'NEO-TOKYO SECTOR 7',
    category: 'ENVIRONMENT',
    attribution: 'Leyre on Unsplash',
  },
  {
    src: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Robotic manufacturing by Simon Kadula on Unsplash',
    title: 'AUTOMATED SYNTHESIS',
    category: 'PRODUCTION',
    attribution: 'Simon Kadula on Unsplash',
  },
  {
    src: 'https://images.unsplash.com/photo-1535391879778-3bae11d29a24?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Futuristic high-rise by Irina Iriser on Unsplash',
    title: 'CORE ARCHITECTURE',
    category: 'INFRASTRUCTURE',
    attribution: 'Irina Iriser on Unsplash',
  },
  {
    src: 'https://images.unsplash.com/photo-1653142267767-a66c7cf17bc1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'City night neon by Cash Macanaya on Unsplash',
    title: 'CYBER GRID NIGHTS',
    category: 'NETWORK',
    attribution: 'Cash Macanaya on Unsplash',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-40 bg-cyber-void relative overflow-hidden">
      {/* 1. Background Visual Decoration */}
      <div className="absolute top-0 right-0 text-[12rem] font-black text-white/[0.01] pointer-events-none select-none tracking-tighter -mr-20 uppercase" aria-hidden="true">
        Gallery
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 2. Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-10 mb-24">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyber-fuchsia font-black tracking-[0.4em] text-[10px] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-12 h-px bg-cyber-fuchsia" aria-hidden="true"></span>
              Neural Archive
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              VISUAL <span className="neon-text-cyan italic">LOGS</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/30 text-sm font-medium leading-relaxed max-w-xs"
          >
            Direct neural captures from the field. Encrypted visual data stream 
            processed for multi-spectrum analysis.
          </motion.p>
        </div>

        {/* 3. Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -15 }}
              className="group relative rounded-[2.5rem] aspect-[4/5] overflow-hidden bg-cyber-steel/20 border border-white/5"
            >
              {/* Image with Parallax-like Zoom Effect */}
              <div className="w-full h-full relative overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy" // Implementation of lazy loading requirement
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Holographic Data Overlay Mask */}
              <div className="absolute inset-0 bg-cyber-void/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" aria-hidden="true"></div>
              
              {/* Corner Analysis HUD Icons */}
              <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                <div className="w-8 h-[2px] bg-cyber-cyan"></div>
                <div className="w-4 h-[2px] bg-cyber-cyan"></div>
              </div>

              {/* Metadata Info Text */}
              <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-cyber-cyan text-[9px] font-black tracking-[0.4em] mb-3 uppercase"
                >
                  [{img.category}]
                </motion.div>
                <h3 className="text-xl md:text-2xl font-black leading-tight tracking-tight uppercase group-hover:neon-text-cyan transition-colors">
                  {img.title}
                </h3>
                
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[9px] font-black text-white/40 tracking-widest uppercase">SCAN_COMPLETE</div>
                  <div className="flex-1 h-px bg-white/10"></div>
                </div>
              </div>

              {/* Visual Scanning Markers */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20 group-hover:border-cyber-cyan transition-colors duration-500 rounded-tl-xl pointer-events-none" aria-hidden="true"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/20 group-hover:border-cyber-fuchsia transition-colors duration-500 rounded-br-xl pointer-events-none" aria-hidden="true"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;