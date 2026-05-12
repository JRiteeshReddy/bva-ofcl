"use client";

import { motion } from 'framer-motion';
import { Calendar, Trophy } from 'lucide-react';
import type { Event } from '@/lib/data';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col md:flex-row gap-0 bg-[#050505] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
    >
      {/* Date Marker (Vertical) */}
      <div className="hidden md:flex items-center justify-center w-16 border-r border-white/5 bg-white/[0.02] relative">
        <div className="rotate-180 [writing-mode:vertical-lr] text-[10px] font-mono text-brand-grey-500 uppercase tracking-[0.4em] py-4">
          LOG_DATE // {event.date}
        </div>
      </div>

      <div className="w-full md:w-80 h-64 md:h-auto overflow-hidden relative">
        <img 
          src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"} 
          alt={event.name}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent hidden md:block" />
        
        {/* Sector ID Overlay */}
        <div className="absolute top-4 left-4 z-20 px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[8px] font-mono text-white/40 tracking-widest uppercase">
          Sector_{event.name.substring(0, 3).toUpperCase()}
        </div>
      </div>
      
      <div className="flex-1 p-8 md:p-12 relative">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="md:hidden flex items-center gap-2 mb-4 text-[10px] font-mono text-brand-grey-500 tracking-widest uppercase">
            <Calendar size={12} />
            {event.date}
          </div>
          
          <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
            {event.name}
          </h3>
          
          <p className="text-brand-grey-500 text-base mb-8 leading-relaxed max-w-2xl font-light">
            {event.description}
          </p>
          
          {event.winners && (
            <div className="mt-auto inline-flex items-center gap-4 py-3 px-5 bg-white/[0.03] rounded-lg border border-white/5 w-fit hover:bg-white/[0.05] transition-colors">
              <Trophy size={18} className="text-white opacity-50" />
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-brand-grey-500 font-bold mb-0.5">Champions Reached</p>
                <p className="text-sm font-medium text-white">{event.winners}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
