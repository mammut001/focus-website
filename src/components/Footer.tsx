'use client';

import type { Dictionary } from '@/dictionaries/en';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer({ dict }: { dict: Dictionary['footer'] }) {
  const params = useParams();
  const lang = (params.lang as string) || 'en';

  return (
    <footer style={{ background: '#0f3324' }}>
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-brand flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-white">FocusMint</span>
            </div>
            <p className="text-sm text-white/50 max-w-xs">{dict.description}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">{dict.product}</h4>
            <ul className="space-y-2">
              <li><a href="#pillars" className="text-sm text-white/60 hover:text-white transition-colors">{dict.features}</a></li>
              <li><a href="#interactive-demo" className="text-sm text-white/60 hover:text-white transition-colors">{dict.tryDemo}</a></li>
              <li><Link href={`/${lang}/changelog`} className="text-sm text-white/60 hover:text-white transition-colors">{dict.changelog}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">{dict.support}</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/mammut001/focus-website" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-white/10">
          <div className="text-xs text-white/30">{dict.copyright}</div>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
