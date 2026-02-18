'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import type { Dictionary } from '@/dictionaries/en';

export default function Navbar({ dict }: { dict: Dictionary['navbar'] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[hsla(225,35%,6%,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">{dict.focus}</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { label: dict.features, id: 'features' },
              { label: dict.howItWorks, id: 'how-it-works' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {item.label}
              </button>
            ))}

            <div className="mx-2">
              <LanguageSwitcher onLanguageChange={() => {}} />
            </div>

            <button
              onClick={() => scrollToSection('download')}
              className="btn-primary px-5 py-2 text-sm font-medium text-white rounded-full ml-2"
            >
              {dict.download}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-visible"
          style={{ display: mobileOpen ? 'block' : 'none' }}
        >
          <div className="pb-4 pt-2 flex flex-col gap-1">
            {[
              { label: dict.features, id: 'features' },
              { label: dict.howItWorks, id: 'how-it-works' },
              { label: dict.download, id: 'download' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-white/70 hover:text-white hover:bg-white/[0.06] px-4 py-3 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <LanguageSwitcher onLanguageChange={() => setMobileOpen(false)} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
