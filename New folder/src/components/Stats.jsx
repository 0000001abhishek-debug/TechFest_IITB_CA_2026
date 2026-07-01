/**
 * Performance Statistics Component
 * Features animated count-up numbers and holographic progress bars to showcase system metrics.
 */

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Neural Uplinks', value: 100, suffix: 'K+', color: 'cyber-cyan', detail: 'ACTIVE_SESSIONS' },
  { label: 'Synthetic Cores', value: 500, suffix: '+', color: 'cyber-fuchsia', detail: 'COMPUTE_UNITS' },
  { label: 'Sync Fidelity', value: 98, suffix: '%', color: 'cyber-cyan', detail: 'SIGNAL_PURITY' },
  { label: 'Cognitive Loop', value: 24, suffix: '/7', color: 'cyber-fuchsia', detail: 'ALWAYS_ONLINE' },
];

const Stats = () => {
  return (
    <section className="py-32 bg-cyber-void relative overflow-hidden border-y border-white/5">
      {/* 1. Structural Grid Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Internal ID Label */}
              <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                <div className={`w-1.5 h-1.5 rounded-full bg-${stat.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-fuchsia'} animate-pulse shadow-[0_0_5px_currentColor]`}></div>
                <span className="text-[8px] font-black text-white/30 tracking-[0.4em] uppercase">{stat.detail}</span>
              </div>

              {/* Main Counter Display */}
              <div 
                className={`text-6xl md:text-8xl font-black mb-4 tracking-tighter transition-all duration-500 group-hover:scale-105 neon-text-${stat.color === 'cyber-cyan' ? 'cyan' : 'fuchsia'}`}
                aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}
              >
                <CountUp end={stat.value} duration={4} enableScrollSpy scrollSpyOnce />
                <span className="text-3xl md:text-4xl opacity-50 ml-1 italic">{stat.suffix}</span>
              </div>

              {/* Human-Readable Label */}
              <div className="text-white/60 font-black tracking-[0.2em] text-xs uppercase group-hover:text-white transition-colors">
                {stat.label}
              </div>

              {/* Holographic Progress Bar UI Decoration */}
              <div className="w-full h-1 bg-white/5 mt-8 rounded-full overflow-hidden" aria-hidden="true">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                  className={`h-full bg-gradient-to-r from-${stat.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-fuchsia'} to-transparent opacity-30`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;