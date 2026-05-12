"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full z-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left max-w-3xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] border border-white/20 rounded-full mb-8 inline-block text-white bg-white/5 backdrop-blur-sm"
          >
            We don’t just learn tech. We build it.
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gradient leading-[1.05]">
            Bangalore <br />
            <span className="text-white">Vibecoders</span> <br />
            <span className="text-white">Association</span>
          </h1>
          
          <p className="text-brand-grey-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-xl">
            BVA is a builder-driven ecosystem where student innovators turn ambitious ideas into real-world products through collaboration and execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <Link href="#projects">
              <button className="group px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                Explore Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#join">
              <button className="px-10 py-5 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all backdrop-blur-sm">
                Join Community
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
