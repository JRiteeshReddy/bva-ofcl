"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Media Column (Left - Larger) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle,transparent_40%,black_100%)]" />
              <img 
                src="/video1_optimized.webp" 
                alt="BVA Innovation" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            
            {/* Decorative Tech Coordinates */}
            <div className="absolute -bottom-8 -left-8 font-mono text-[10px] text-brand-grey-500 tracking-[0.3em] uppercase vertical-text opacity-50">
              Lat: 12.9716° N <br /> Long: 77.5946° E
            </div>
          </div>

          {/* Text Column (Right - Smaller/Overlapping) */}
          <div className="lg:col-span-5 lg:-ml-24 z-20 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeading 
                  title="Building the Future of Tech." 
                  subtitle="BVA is more than just a club. It's a lab where students experiment, fail, and eventually build products that matter."
                />
              </motion.div>
            </div>

            <div className="space-y-10 text-brand-grey-400 font-light text-lg">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pl-8 border-l border-white/10 max-w-md"
              >
                We&apos;re not just another student club. We are a high-frequency node for developers who want to push boundaries. Bangalore is our playground, and innovation is our currency.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pl-16 max-w-md italic"
              >
                &quot;From building AI-driven apps to hosting intense 48-hour hackathons, we focus on execution and measurable impact.&quot;
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
