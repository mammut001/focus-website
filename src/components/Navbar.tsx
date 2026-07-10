'use client';

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import type { Dictionary } from '@/dictionaries/en';
import { useParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar({ dict }: { dict: Dictionary['navbar'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const lang = (params.lang as string) || 'en';
  const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 40);
    }, { passive: true });
  }

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-text-primary">FocusMint</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection('features')}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-black/5 transition-all duration-200"
            >
              {dict.features}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-black/5 transition-all duration-200"
            >
              {dict.howItWorks}
            </button>
            <Link
              href={`/${lang}/changelog`}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-black/5 transition-all duration-200"
            >
              {dict.changelog}
            </Link>
            <div className="mx-1">
              <LanguageSwitcher onLanguageChange={() => {}} />
            </div>
            <button
              onClick={() => scrollToSection('download')}
              className="btn-primary px-5 py-2 text-sm rounded-lg ml-2"
            >
              {dict.download}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
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
        {mobileOpen && (
          <div className="md:hidden pb-5 pt-1 flex flex-col gap-1 border-t border-border mt-1">
            {[
              { label: dict.features, id: 'features' },
              { label: dict.howItWorks, id: 'how-it-works' },
              { label: dict.download, id: 'download' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-text-secondary hover:text-text-primary hover:bg-black/5 px-4 py-3 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
            <Link
              href={`/${lang}/changelog`}
              onClick={() => setMobileOpen(false)}
              className="text-left text-text-secondary hover:text-text-primary hover:bg-black/5 px-4 py-3 rounded-xl transition-all"
            >
              {dict.changelog}
            </Link>
            <div className="px-4 pt-1">
              <LanguageSwitcher onLanguageChange={() => setMobileOpen(false)} isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
