'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      style={{
        backgroundColor: backgroundOpacity,
        backdropFilter: `blur(${blurAmount}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl">
              🎯
            </div>
            <span className="text-xl font-bold text-white">Focus</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-white/70 hover:text-white transition-colors"
            >
              功能
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-white/70 hover:text-white transition-colors"
            >
              使用方法
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all border border-white/10 hover:border-white/20"
            >
              下载
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-left text-white/70 hover:text-white py-2"
            >
              功能
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-left text-white/70 hover:text-white py-2"
            >
              使用方法
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="text-left text-white py-2"
            >
              下载
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
