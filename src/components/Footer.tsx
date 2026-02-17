'use client';

import type { Dictionary } from '@/dictionaries/en';

export default function Footer({ dict }: { dict: Dictionary['footer'] }) {
  return (
    <footer className="py-12 px-6 relative">
      {/* Top border */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/15">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-base font-bold text-white/80 tracking-tight">Focus</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/35 hover:text-white/70 transition-colors duration-200">
              {dict.privacy}
            </a>
            <a href="#" className="text-white/35 hover:text-white/70 transition-colors duration-200">
              {dict.terms}
            </a>
            <a
              href="https://github.com/mammut001/focus-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-white/70 transition-colors duration-200 flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/20 text-xs">
            {dict.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
