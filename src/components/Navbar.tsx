'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import type { Dictionary } from '@/dictionaries/en';
import { useParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar({ dict }: { dict: Dictionary['navbar'] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollRef = useRef(0);
  const { scrollY } = useScroll();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const lang = (params.lang as string) || 'en';
  const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    if (latest > 200 && latest > lastScrollRef.current) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollRef.current = latest;

    if (isHomePage) {
      const sections = ['features', 'how-it-works', 'download'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    }
  });

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${lang}/#${id}`);
    }
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push(`/${lang}`);
    }
  };

  const navLinks = [
    { label: dict.features, id: 'features' },
    { label: dict.howItWorks, id: 'how-it-works' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden && isScrolled ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[hsla(225,35%,6%,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <motion.div
              animate={{ rotate: isScrolled ? 0 : [0, -10, 10, -5, 0] }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <span className="text-lg font-bold tracking-tight text-white">{dict.focus}</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm rounded-lg transition-all duration-200 group"
              >
                <span className={`relative z-10 transition-colors duration-200 ${activeSection === item.id ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/[0.08] rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <Link
                href={`/${lang}/changelog`}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
            >
                {dict.changelog}
            </Link>

            <div className="mx-2">
              <LanguageSwitcher onLanguageChange={() => {}} />
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('download')}
              className="btn-primary px-5 py-2 text-sm font-medium text-white rounded-full ml-2"
            >
              {dict.download}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
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
          animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 pt-2 flex flex-col gap-1">
            {[
              { label: dict.features, id: 'features' },
              { label: dict.howItWorks, id: 'how-it-works' },
              { label: dict.download, id: 'download' },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={false}
                animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: mobileOpen ? i * 0.06 : 0, duration: 0.2 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left text-white/70 hover:text-white hover:bg-white/[0.06] px-4 py-3 rounded-xl transition-all"
                >
                  {item.label}
                </button>
              </motion.div>
            ))}
            <motion.div
              initial={false}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: mobileOpen ? 0.18 : 0, duration: 0.2 }}
            >
              <Link
                  href={`/${lang}/changelog`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-left text-white/70 hover:text-white hover:bg-white/[0.06] px-4 py-3 rounded-xl transition-all"
              >
                  {dict.changelog}
              </Link>
            </motion.div>
            <motion.div
              initial={false}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: mobileOpen ? 0.24 : 0, duration: 0.2 }}
            >
              <div className="px-4 py-2">
                <LanguageSwitcher onLanguageChange={() => setMobileOpen(false)} isMobile={true} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
