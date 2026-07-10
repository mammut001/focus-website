'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-bg pt-20">
      {/* Subtle background ring decoration */}
      <div className="absolute right-[-10%] top-[-5%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
          <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-content mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className={`pt-8 lg:pt-0 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-sm font-medium text-brand-dark">{dict.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] font-semibold leading-[0.98] tracking-tight text-text-primary mb-5">
              {dict.title.split('\n')[0]}<br />
              {dict.title.split('\n')[1]}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mb-8">
              {dict.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a
                href={dict.appStoreUrl === '#' ? undefined : dict.appStoreUrl}
                className="btn-primary"
                {...(dict.appStoreUrl === '#' ? { onClick: (e: React.MouseEvent) => e.preventDefault() } : {})}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {dict.appStore}
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('product-statement');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                {dict.learnMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Device Mockups */}
          <div className={`relative flex items-center justify-center lg:justify-end transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative flex items-end gap-4 lg:gap-6">
              {/* iPhone */}
              <div className="w-[220px] sm:w-[260px] lg:w-[290px]">
                <div className="aspect-[9/19] bg-surface rounded-[28px] lg:rounded-[32px] border border-border shadow-medium overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-bg-warm to-bg flex items-center justify-center p-6 lg:p-8">
                    <div className="text-center">
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-4 lg:mb-5">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(23,32,25,0.08)" strokeWidth="6" />
                          <circle
                            cx="60" cy="60" r="52" fill="none" stroke="#32b978" strokeWidth="6" strokeLinecap="round"
                            strokeDasharray="327" strokeDashoffset="82"
                            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tabular-nums">{dict.mockup.timer}</span>
                        </div>
                      </div>
                      <div className="text-brand font-medium text-sm">{dict.mockup.status}</div>
                      <div className="text-text-tertiary text-xs mt-1">{dict.mockup.mode}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Watch */}
              <div className="mb-4 lg:mb-8" style={{ animation: 'subtleFloat 8s ease-in-out infinite' }}>
                <div className="w-[90px] h-[110px] sm:w-[100px] sm:h-[124px] lg:w-[110px] lg:h-[136px] bg-[#e8eae6] rounded-[1.6rem] lg:rounded-[1.8rem] border border-border shadow-soft overflow-hidden">
                  <div className="h-full bg-[#f0f2ee] flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="relative w-12 h-12 sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] mx-auto mb-1.5">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                          <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(23,32,25,0.08)" strokeWidth="4" />
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#32b978" strokeWidth="4" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="40" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] sm:text-[11px] lg:text-xs font-semibold text-text-primary tabular-nums">{dict.mockup.watchTime}</span>
                        </div>
                      </div>
                      <div className="text-brand text-[8px] sm:text-[9px] lg:text-[10px] font-medium">{dict.mockup.watchMode}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
