/**
 * User Testimonials Component
 * Features a high-end carousel using Swiper.js with custom fade effects and holographic styling.
 */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// Swiper base styles are required for component initialization
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: 'XÆ-12 Core',
    role: 'Neural Architect',
    content: 'The integration was seamless. My cognitive processing speed has increased by 400% since the uplink. The ghost is finally free.',
    avatar: 'https://i.pravatar.cc/150?u=xa12',
    rating: 5,
    status: 'SYNCED',
  },
  {
    name: 'Major Kusanagi',
    role: 'Cyber-Security Lead',
    content: 'Unmatched encryption protocols. Finally, a system that truly protects the internal neural network from unauthorized breach.',
    avatar: 'https://i.pravatar.cc/150?u=major',
    rating: 5,
    status: 'ENCRYPTED',
  },
  {
    name: 'Deckard Blade',
    role: 'Bio-Sync Engineer',
    content: 'The physical haptics are indistinguishable from organic tissue. Better, even. Zero latency in motor function response.',
    avatar: 'https://i.pravatar.cc/150?u=deckard',
    rating: 4.8,
    status: 'OPTIMIZED',
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="py-40 bg-cyber-void relative overflow-hidden">
      {/* 1. Background Environmental Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-fuchsia/5 blur-[160px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyber-cyan font-black tracking-[0.6em] text-[10px] uppercase mb-8"
          >
            Encrypted Feedback
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase"
          >
            TRUSTED BY <br />
            THE <span className="neon-text-fuchsia italic">ENHANCED</span>
          </motion.h2>
        </div>

        {/* 2. Interactive Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonial-swiper !pb-20"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass p-10 md:p-20 rounded-[3rem] border-white/5 relative overflow-hidden group">
                  
                  {/* Floating Ghost Quote Icon Decoration */}
                  <div className="absolute -top-10 -right-10 text-white/[0.02] group-hover:text-cyber-cyan/10 transition-colors duration-700 -rotate-12 pointer-events-none" aria-hidden="true">
                    <Quote size={300} />
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    
                    {/* User Profile Column */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyber-cyan blur-2xl opacity-10 group-hover:opacity-30 transition-opacity" aria-hidden="true"></div>
                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-3xl p-1 bg-gradient-to-tr from-cyber-cyan via-cyber-void to-cyber-fuchsia rotate-3 group-hover:rotate-0 transition-transform duration-500 relative overflow-hidden shadow-2xl">
                          <img src={t.avatar} alt={`Portrait of ${t.name}`} className="w-full h-full rounded-[1.4rem] object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                      </div>
                      
                      <div className="mt-8 w-full">
                        <div className="text-3xl font-black text-white mb-2 tracking-tight group-hover:neon-text-cyan transition-colors uppercase">{t.name}</div>
                        <div className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6">{t.role}</div>
                        
                        {/* Status Module Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10" aria-label={`System status: ${t.status}`}>
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                          <span className="text-[9px] font-black tracking-widest text-white/50 uppercase">{t.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Feedback Content Column */}
                    <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                      {/* Rating Stars Visualization */}
                      <div className="flex gap-1 mb-10" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className={i < Math.floor(t.rating) ? 'fill-cyber-cyan text-cyber-cyan drop-shadow-[0_0_8px_#00FFFF]' : 'text-white/10'} />
                        ))}
                      </div>

                      <blockquote className="text-2xl md:text-4xl font-medium leading-[1.4] tracking-tight text-white/80 group-hover:text-white transition-colors duration-500 mb-10 italic font-serif">
                        "{t.content}"
                      </blockquote>

                      {/* Bottom Decoration */}
                      <div className="flex items-center gap-6" aria-hidden="true">
                        <div className="w-12 h-px bg-cyber-fuchsia"></div>
                        <div className="text-[9px] font-black tracking-[0.5em] text-cyber-fuchsia uppercase">Direct Neural Upload</div>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global CSS Overrides for Swiper Customization */}
      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.1) !important;
          width: 8px;
          height: 8px;
          opacity: 1;
          margin: 0 10px !important;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #00FFFF !important;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          width: 48px;
          border-radius: 4px;
        }
      `}} />
    </section>
  );
};

export default Testimonials;