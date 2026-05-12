"use client";

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface ScrollSequenceProps {
  progress?: MotionValue<number>;
}

const ScrollSequence = ({ progress }: ScrollSequenceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  
  const frameCount = 46;
  
  // Pre-load images into refs
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(2, '0');
      img.src = `/frames_optimized/frame_${frameNumber}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const activeProgress = progress || internalProgress;

  const smoothProgress = useSpring(activeProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const currentIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    const drawImage = (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const img = imagesRef.current[index];

      if (ctx && img && canvas) {
        // Clear and draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        // Scale and mirror as in original
        ctx.scale(-1, 1);
        
        const scale = 0.85;
        const width = canvas.width * scale;
        const height = canvas.height * scale;
        const x = -canvas.width + (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;

        // Apply grayscale and opacity
        ctx.filter = 'grayscale(100%) opacity(90%)';
        ctx.drawImage(img, x, y, width, height);
        ctx.restore();

        // Update text ref directly without re-render
        if (textRef.current) {
          textRef.current.innerText = `SYSTEM_SYNC // FRAME_${index.toString().padStart(2, '0')}`;
        }
      }
    };

    const unsubscribe = currentIndex.on("change", (v) => {
      drawImage(Math.round(v));
    });
    
    if (loaded) {
      drawImage(Math.round(currentIndex.get()));
    }

    return () => unsubscribe();
  }, [currentIndex, loaded]);

  return (
    <div ref={containerRef} className="relative h-full w-full flex justify-end items-center">
      <div className="relative w-[140%] h-full overflow-hidden translate-x-[35%]">
        <canvas
          ref={canvasRef}
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
          style={{ willChange: 'transform' }}
        />
        
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_50%,#000_100%)]" />
        
        <div 
          ref={textRef}
          className="absolute top-12 right-12 font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] z-30"
        >
          SYSTEM_SYNC // FRAME_00
        </div>
      </div>
    </div>
  );
};

export default ScrollSequence;
