"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled 
          ? 'glass border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          BVA<span className="text-brand-grey-500">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
          <Link href="#home" className="hover:text-brand-grey-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-brand-grey-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-brand-grey-400 transition-colors">Projects</Link>
          <Link href="#events" className="hover:text-brand-grey-400 transition-colors">Events</Link>
          <Link 
            href="#join" 
            className="px-5 py-2 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-all font-bold"
          >
            Join BVA
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
