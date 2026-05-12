"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ScrollSequence from './ScrollSequence';

interface ProjectsSectionProps {
  featuredProjects: any[];
}

const ProjectsSection = ({ featuredProjects }: ProjectsSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const projectsToDisplay = featuredProjects.slice(0, 3);

  return (
    <section id="projects" ref={containerRef} className="relative h-[500vh] bg-black">
      {/* Layer 1: The Pinned Background (Sticky) */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden pointer-events-none">
        <div className="w-full grid lg:grid-cols-12 h-full">
          <div className="lg:col-span-8 lg:col-start-5 h-full relative">
            <ScrollSequence progress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* Layer 2: The Scrolling Content (Foreground) */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="lg:col-span-5 pt-[30vh] pb-[50vh] space-y-[60vh]">
              {/* Introduction Header */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-white/30 font-mono text-[10px] uppercase tracking-[0.5em]">
                  <div className="w-12 h-[1px] bg-white/20" />
                  Sector_01 // Discovery
                </div>
                <h2 className="text-7xl font-bold tracking-tighter text-white leading-[0.9]">
                  Featured <br /> <span className="text-white/40">Projects</span>
                </h2>
                <p className="text-brand-grey-500 max-w-sm text-lg font-light leading-relaxed">
                  Navigating the frontier of community-led innovation. These are the beacons of our network.
                </p>
              </motion.div>

              {/* Individual Projects Staggered */}
              {projectsToDisplay.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ margin: "-100px" }}
                  className="relative group"
                >
                  {/* Digital Marker */}
                  <div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent hidden md:block" />
                  
                  <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                        DATA_LOG // 0{index + 1}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white group-hover:scale-125 transition-all" />
                    </div>

                    <h4 className="text-4xl font-bold mb-4 tracking-tight text-white group-hover:translate-x-2 transition-transform">
                      {project.name}
                    </h4>
                    
                    <p className="text-brand-grey-500 font-light leading-relaxed text-lg mb-10 max-w-md">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] border border-white/10 px-3 py-1.5 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex-1 h-[1px] bg-white/5" />
                      <a 
                        href={project.link}
                        className="text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:text-brand-grey-300 transition-colors"
                      >
                        Execute //
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* End of Section Marker */}
              <div className="pt-20 opacity-20">
                <div className="font-mono text-[9px] uppercase tracking-[0.8em] text-center lg:text-left">
                  End of Broadcast // System Stable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
