'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';
import PhoneScreenshot, { WatchScreenshot } from './DeviceFrame';

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-bg-warm pt-24 lg:pt-0">
      <div className="max-w-content mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-sm font-medium text-brand-dark">{dict.badge}</span>
            </div>

            <h1 className="text-[38px] sm:text-[52px] lg:text-[68px] font-semibold leading-[0.98] tracking-tight text-text-primary mb-5">
              {dict.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < dict.title.split('\n').length - 1 ? <br /> : ''}</span>
              ))}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mb-8">
              {dict.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
              {dict.appStoreUrl === '#' ? (
                <span className="btn-primary cursor-default opacity-80">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {dict.appStore}
                </span>
              ) : (
                <a href={dict.appStoreUrl} className="btn-primary">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {dict.appStore}
                </a>
              )}
              <button
                onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                {dict.learnMore}
              </button>
              <button
                onClick={() => document.getElementById('product-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors underline underline-offset-4 flex items-center gap-1 py-2"
              >
                {dict.seeCapabilities}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Product capability tags */}
            <div className="flex flex-wrap gap-2">
              {dict.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1.5 text-sm text-text-secondary bg-white rounded-lg border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - device screenshots */}
          <div
            className="relative flex items-center justify-center lg:justify-end py-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.98)',
              transition: 'opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s',
            }}
          >
            <div className="relative flex items-end gap-4 lg:gap-6">
              <PhoneScreenshot src="home" alt="FocusMint timer home screen" priority />
              <WatchScreenshot
                src="home"
                alt="FocusMint Apple Watch home screen"
                className="mb-4 lg:mb-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
