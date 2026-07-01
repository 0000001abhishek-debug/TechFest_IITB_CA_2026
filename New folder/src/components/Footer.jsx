/**
 * Site Footer Component
 * Contains site navigation, social presence, and an encrypted newsletter uplink.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="py-24 bg-cyber-void border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand/About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer" aria-label="Cyborg Era Home">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyber-cyan to-cyber-fuchsia p-0.5 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                <div className="w-full h-full bg-cyber-void rounded-full flex items-center justify-center">
                  <span className="text-sm font-black neon-text-cyan">C</span>
                </div>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                CYBORG<span className="text-cyber-cyan">ERA</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium uppercase tracking-wider">
              Pioneering the next stage of human evolution through advanced 
              cybernetic integration and quantum intelligence.
            </p>
            {/* Social Signal Icons */}
            <div className="flex gap-5">
              {[
                { icon: FaTwitter, label: 'Twitter/X' },
                { icon: FaGithub, label: 'GitHub' },
                { icon: FaDiscord, label: 'Discord' }
              ].map((Social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={`Join our ${Social.label} channel`}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/50 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all duration-300"
                >
                  <Social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-white font-black tracking-[0.4em] text-[10px] uppercase mb-10 flex items-center gap-3">
              <span className="w-4 h-px bg-cyber-cyan"></span> Main_Links
            </h4>
            <ul className="flex flex-col gap-5 text-[10px] font-black text-white/30 tracking-[0.2em] uppercase">
              {['Home', 'Features', 'Technology', 'Visual Archive', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyber-cyan hover:translate-x-1 transition-all inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Protocol Links Column */}
          <div>
            <h4 className="text-white font-black tracking-[0.4em] text-[10px] uppercase mb-10 flex items-center gap-3">
               <span className="w-4 h-px bg-cyber-fuchsia"></span> Protocols
            </h4>
            <ul className="flex flex-col gap-5 text-[10px] font-black text-white/30 tracking-[0.2em] uppercase">
              {['Privacy_Policy', 'Terms_of_Service', 'Uplink_Agreement', 'Neural_Rights', 'Memory_Storage', 'Data_Encryption'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyber-fuchsia hover:translate-x-1 transition-all inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Uplink Form */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black tracking-[0.4em] text-[10px] uppercase mb-10 flex items-center gap-3">
               <span className="w-4 h-px bg-white/40"></span> Uplink_Bulletin
            </h4>
            <p className="text-white/40 text-[10px] font-black tracking-widest mb-8 uppercase">Receive encrypted status reports directly to your neural ID.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                aria-label="Newsletter email uplink"
                placeholder="USER_ID@NEURAL.NET"
                className="w-full glass py-5 pl-8 pr-16 rounded-3xl border-white/5 focus:border-cyber-cyan/40 focus:outline-none transition-all placeholder:text-white/10 text-xs font-black uppercase tracking-[0.2em] focus:bg-white/[0.08]"
              />
              <button 
                type="submit"
                aria-label="Subscribe to bulletin"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-cyber-cyan text-cyber-void flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,255,255,0.4)]"
              >
                <HiOutlineMail size={22} />
              </button>
            </form>
          </div>
        </div>

        {/* 2. Bottom Meta-Data Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.4em] text-white/15 uppercase">
          <div className="text-center sm:text-left">© 2026 CYBORG ERA SYSTEMS. ALL RIGHTS RESERVED_V4.2.0</div>
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></div>
              <span>NETWORK_OPTIMAL</span>
            </div>
            <a href="#" className="hover:text-cyber-cyan transition-colors">SECURITY_CLEARED</a>
          </div>
        </div>
      </div>
      
      {/* 3. Aesthetic Background Atmospheric Glitch Decoration */}
      <div className="absolute bottom-0 right-0 w-[1000px] h-[400px] bg-cyber-cyan/[0.03] blur-[150px] rounded-full pointer-events-none -mr-40 -mb-20" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyber-fuchsia/[0.02] blur-[120px] rounded-full pointer-events-none -ml-40 -mt-20" aria-hidden="true"></div>
    </footer>
  );
};

export default Footer;