"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface ScrollSequenceProps {
  progress?: MotionValue<number>;
}

const ScrollSequence = ({ progress }: ScrollSequenceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);
  
  const frameCount = 46;
  
  // Create an array of image paths
  useEffect(() => {
    const paths = Array.from({ length: frameCount }, (_, i) => {
      const frameNumber = i.toString().padStart(2, '0');
      return `/frames/frame_${frameNumber}_delay-0.08s.gif`;
    });
    setImages(paths);
    
    // Pre-load images
    paths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  // Internal scroll if no progress prop is passed (fallback)
  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const activeProgress = progress || internalProgress;

  // Smooth out the scroll progress
  const smoothProgress = useSpring(activeProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to frame index
  const currentIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);
  
  // State to hold the integer frame index
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    return currentIndex.onChange((v) => {
      setFrame(Math.round(v));
    });
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="relative h-full w-full flex justify-end items-center">
      <div className="relative w-[140%] h-full overflow-hidden translate-x-[35%]">
        {images.length > 0 && (
          <motion.img
            src={images[frame]}
            alt="Scroll Sequence"
            style={{ scaleX: -1, scale: 0.85 }}
            className="w-full h-full object-contain grayscale opacity-90 transition-opacity duration-300"
          />
        )}
        
        {/* Galaxy Feathering Mask */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_50%,#000_100%)]" />
        
        {/* Tech Accents for the sequence */}
        <div className="absolute top-12 right-12 font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] z-30">
          SYSTEM_SYNC // FRAME_{frame.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default ScrollSequence;
