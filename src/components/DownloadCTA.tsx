'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';

export default function DownloadCTA({ dict }: { dict: Dictionary['download'] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="download" className="py-28 md:py-36 px-6 relative overflow-hidden" style={{ background: '#0f3324' }}>
      {/* Subtle ring decoration */}
      <div className="absolute right-[-8%] bottom-[-10%] w-[400px] h-[400px] opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="130" stroke="white" strokeWidth="0.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className={`max-w-3xl mx-auto relative z-10 text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.05] tracking-tight text-white mb-4">
          {dict.title}
        </h2>

        <p className="text-base sm:text-lg text-white/60 mb-10 max-w-md mx-auto">
          {dict.subtitle}
        </p>

        <a
          href={dict.appStoreUrl === '#' ? undefined : dict.appStoreUrl}
          className="btn-primary inline-flex"
          style={{ background: '#32b978' }}
          {...(dict.appStoreUrl === '#' ? { onClick: (e: React.MouseEvent) => e.preventDefault() } : {})}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          {dict.appStore}
        </a>

        <p className="text-white/30 text-xs mt-6">
          {dict.footnote}
        </p>
      </div>
    </section>
  );
}
