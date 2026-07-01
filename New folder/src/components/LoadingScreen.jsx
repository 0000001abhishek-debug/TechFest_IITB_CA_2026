import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-[#090B10] flex flex-col items-center justify-center"
        >
          {/* Scanning Line Effect */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-cyber-cyan/20 blur-sm z-0"
          />

          <div className="relative z-10 text-center">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-12 relative"
            >
              <div className="w-24 h-24 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-cyber-cyan border-t-transparent animate-spin"
                  style={{ animationDuration: '1s' }}
                ></div>
                <span className="text-2xl font-black neon-text-cyan">C</span>
              </div>
            </motion.div>

            <div className="flex flex-col items-center gap-4">
              <div className="text-cyber-cyan font-black tracking-[0.5em] text-xs uppercase mb-2">
                Neural Link Initialization
              </div>
              
              <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-fuchsia shadow-[0_0_10px_#00FFFF]"
                />
              </div>
              
              <div className="text-white/40 font-mono text-[10px] tracking-widest mt-2 flex gap-4">
                <span>PROGRESS: {progress}%</span>
                <span>STATUS: {progress < 100 ? 'CONNECTING...' : 'ONLINE'}</span>
              </div>
            </div>
          </div>

          {/* Glitchy Text Decoration */}
          <div className="absolute bottom-10 left-10 text-[8px] font-mono text-white/10 leading-relaxed uppercase">
            [ SYSTEM_BOOT_SEQUENCE_ALPHA_4.2.0 ]<br />
            [ KERNEL_LOADED: MEMORY_SYNC_ACTIVE ]<br />
            [ PROTOCOL: CYBER_ERA_INITIALIZED ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;