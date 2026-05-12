"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-grey-400 text-lg font-light max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
