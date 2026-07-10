'use client';

import Reveal from './Reveal';
import type { Dictionary } from '@/dictionaries/en';

const iconMap: Record<string, React.ReactNode> = {
  widgets: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  watch: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="6" y="2" width="12" height="20" rx="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="6" x2="12.01" y2="6" strokeLinecap="round" /><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
    </svg>
  ),
  sound: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
  ),
  goal: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  tip: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  export: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
};

export default function SupportingFeatures({ dict }: { dict: Dictionary['supporting'] }) {
  return (
    <Reveal>
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-semibold leading-[1.05] text-text-primary mb-3">
              {dict.title}
            </h2>
            <p className="text-base text-text-secondary max-w-xl mx-auto">
              {dict.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border">
            {dict.items.map((item: { icon: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className="flex items-start gap-4 py-5 hover:bg-brand-softer/50 transition-colors rounded-lg px-3 -mx-3"
              >
                <div className="text-brand mt-0.5 flex-shrink-0">
                  {iconMap[item.icon] || iconMap.goal}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-0.5">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
