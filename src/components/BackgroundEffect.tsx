"use client";

import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.01] rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/[0.01] rounded-full blur-[120px]"
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default BackgroundEffect;
