'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-dark/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-xl font-bold">Focus</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm text-gray-300 hover:text-white transition">
              功能
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-gray-300 hover:text-white transition">
              使用方法
            </button>
            <button onClick={() => scrollToSection('download')} className="text-sm text-gray-300 hover:text-white transition">
              下载
            </button>
          </div>

          <button
            id="theme-toggle"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            🌓
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
