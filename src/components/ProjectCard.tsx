"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Simple deterministic "hash" for the ID
  const displayId = project.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 1000;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#050505] rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
    >
      {/* Tech Accents */}
      <div className="absolute top-4 right-4 z-20 font-mono text-[8px] text-white/20 tracking-tighter hidden group-hover:block transition-all">
        REF_ID: {project.category.substring(0, 3)}_{mounted ? displayId : '---'}
      </div>

      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="p-8 relative">
        {/* Background Digital Stream */}
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none font-mono text-[10px] text-white leading-none overflow-hidden h-24 select-none">
          {Array(5).fill("101011001").join("\n")}
        </div>

        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold border-l-2 border-white/20 pl-3">
            {project.category}
          </span>
          {project.featured && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-white">Featured</span>
            </div>
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
          {project.name}
        </h3>
        
        <p className="text-brand-grey-500 text-sm mb-8 line-clamp-2 font-light leading-relaxed">
          {project.description}
        </p>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all group/btn"
        >
          Access Project
          <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
