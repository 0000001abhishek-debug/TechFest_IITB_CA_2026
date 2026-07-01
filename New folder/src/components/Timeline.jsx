/**
 * Evolution Roadmap Component (Timeline)
 * Visualizes the history and future of cybernetic advancement using a scroll-triggered S-curve layout.
 */

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineData = [
  {
    year: '2025',
    title: 'AI Core Genesis',
    description: 'Initial deployment of the first autonomous quantum core architecture.',
    side: 'left',
  },
  {
    year: '2027',
    title: 'Neural Web',
    description: 'Global synchronization of human consciousness with the decentralized neural mesh.',
    side: 'right',
  },
  {
    year: '2030',
    title: 'Machine Learning V5',
    description: 'AI systems achieving self-improving cognitive loops with zero human intervention.',
    side: 'left',
  },
  {
    year: '2032',
    title: 'Robotics Integration',
    description: 'Mass adoption of synthetic biological tissues for physical augmentation.',
    side: 'right',
  },
  {
    year: '2035',
    title: 'Human 2.0',
    description: 'The final merger: Full biological and digital convergence achieved.',
    side: 'left',
  },
];

/** Individual Milestone in the Timeline */
const TimelineItem = ({ item, index }) => {
  const isLeft = item.side === 'left';
  
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full mb-32 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* 1. Milestone Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`w-full md:w-5/12 ${isLeft ? 'text-left md:text-right' : 'text-left'}`}
      >
        <div className="relative group">
          {/* Milestone Background & Border */}
          <div className="glass p-10 rounded-[2rem] border-white/5 relative z-10 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden">
            <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-cyber-cyan to-transparent opacity-50`} aria-hidden="true"></div>
            
            <span className="inline-block px-4 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-xs font-black tracking-widest mb-6 border border-cyber-cyan/20 uppercase">
              Phase {index + 1}
            </span>
            
            <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:neon-text-cyan transition-colors uppercase">{item.title}</h3>
            <p className="text-white/40 text-base leading-relaxed font-medium group-hover:text-white/60 transition-colors">{item.description}</p>
            
            {/* Background Year Stamp */}
            <div className={`mt-8 text-5xl font-black italic text-white/5 transition-colors group-hover:text-cyber-cyan/10`} aria-hidden="true">
              {item.year}
            </div>
          </div>

          {/* Holographic Connector Node (Center Point) */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 z-20 ${isLeft ? '-right-[3.1rem]' : '-left-[3.1rem]'}`} aria-hidden="true">
            <div className="w-full h-full rounded-full bg-cyber-cyan shadow-[0_0_20px_#00FFFF] border-4 border-cyber-void"></div>
            <div className="absolute inset-0 rounded-full bg-cyber-cyan animate-ping opacity-30"></div>
          </div>
        </div>
      </motion.div>

      {/* 2. Middle Gutter for Central Line */}
      <div className="hidden md:block w-2/12" aria-hidden="true"></div>

      {/* 3. Empty Slot for Alternating Alignment */}
      <div className="hidden md:block w-5/12" aria-hidden="true"></div>
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress for the central dynamic line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="technology" ref={containerRef} className="py-40 relative bg-cyber-void overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyber-cyan/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-fuchsia/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-40 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyber-fuchsia font-black tracking-[0.5em] text-[10px] uppercase mb-8"
          >
            Evolutionary Archive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase"
          >
            THE <span className="neon-text-cyan">EVOLUTION</span> <br />
            ROADMAP
          </motion.h2>
        </div>

        <div className="relative">
          {/* 1. Interactive Center Progress Path */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" aria-hidden="true">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyber-cyan via-cyber-fuchsia to-cyber-cyan origin-top shadow-[0_0_15px_#00FFFF]"
            />
          </div>
          
          {/* 2. Timeline Nodes */}
          <div className="flex flex-col items-center">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Stylized Side Label */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.01] rotate-90 pointer-events-none select-none uppercase tracking-tighter" aria-hidden="true">
        Roadmap
      </div>
    </section>
  );
};

export default Timeline;