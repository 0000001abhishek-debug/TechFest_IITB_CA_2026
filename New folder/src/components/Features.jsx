/**
 * Features Section Component
 * Displays system capabilities using interactive grid cards with custom hover and scanning effects.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Shield, Zap, Activity, Globe } from 'lucide-react';

const features = [
  {
    title: 'Neural Interface',
    description: 'Direct thought-to-machine communication with zero latency via biological neural links.',
    icon: <Cpu className="w-8 h-8" aria-hidden="true" />,
    color: 'cyber-cyan',
  },
  {
    title: 'Smart Vision',
    description: 'Advanced AR overlays and infrared scanning integrated directly into the optic nerve.',
    icon: <Eye className="w-8 h-8" aria-hidden="true" />,
    color: 'cyber-fuchsia',
  },
  {
    title: 'Cyber Security',
    description: 'Military-grade encryption for your biological data and neural memory logs.',
    icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    color: 'cyber-cyan',
  },
  {
    title: 'Quantum Intelligence',
    description: 'Off-world quantum processing units providing real-time cognitive enhancement.',
    icon: <Zap className="w-8 h-8" aria-hidden="true" />,
    color: 'cyber-fuchsia',
  },
  {
    title: 'Human Enhancement',
    description: 'Surgical-grade robotic limb replacement with haptic feedback superior to organic tissue.',
    icon: <Activity className="w-8 h-8" aria-hidden="true" />,
    color: 'cyber-cyan',
  },
  {
    title: 'Global Mesh',
    description: 'Stay connected to the global neural network from any point on the planet.',
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    color: 'cyber-fuchsia',
  },
];

/** Individual Feature Card with custom hover animations */
const FeatureCard = ({ feature, index }) => {
  const isCyan = feature.color === 'cyber-cyan';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group relative h-full"
    >
      {/* 1. Background Pulse Glow */}
      <div className={`absolute inset-0 bg-${feature.color}/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} aria-hidden="true"></div>
      
      {/* 2. Main Card Body */}
      <div className={`h-full glass p-10 rounded-[2.5rem] border-white/5 group-hover:border-${isCyan ? 'cyber-cyan' : 'cyber-fuchsia'}/50 transition-all duration-500 relative z-10 flex flex-col items-start overflow-hidden`}>
        
        {/* Animated Scanning Light Effect on Hover */}
        <motion.div 
          initial={{ top: '-100%' }}
          whileHover={{ top: '200%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className={`absolute left-0 right-0 h-1 bg-${isCyan ? 'cyber-cyan' : 'cyber-fuchsia'}/20 blur-sm pointer-events-none`}
          aria-hidden="true"
        />

        {/* Dynamic Icon Container */}
        <div className={`w-20 h-20 rounded-3xl bg-cyber-void/50 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 text-${feature.color}`}>
          {feature.icon}
        </div>

        {/* Feature Descriptions */}
        <h3 className="text-2xl font-black mb-5 tracking-tight group-hover:text-white transition-colors uppercase">
          {feature.title}
        </h3>
        <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
          {feature.description}
        </p>
        
        {/* Custom Progress/ID Decoration */}
        <div className="mt-auto pt-8 flex items-center gap-4 w-full" aria-hidden="true">
          <div className={`flex-1 h-px bg-gradient-to-r from-${feature.color}/40 to-transparent`}></div>
          <span className={`text-[10px] font-black tracking-[0.4em] text-${feature.color}/40 uppercase`}>
            Module_0{index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-cyber-void">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyber-cyan font-black tracking-[0.4em] text-[10px] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-12 h-px bg-cyber-cyan" aria-hidden="true"></span>
              Core System Specs
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase"
            >
              ENHANCED <br />
              <span className="neon-text-fuchsia italic">CAPABILITIES</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-sm text-sm font-medium leading-relaxed mb-4 uppercase tracking-wider"
          >
            Deploying advanced cybernetic modules optimized for peak neural synchronization.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Aesthetic Background Text Layer */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-black text-white/[0.01] pointer-events-none select-none tracking-tighter uppercase" aria-hidden="true">
        Modules
      </div>
    </section>
  );
};

export default Features;