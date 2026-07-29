'use client';

import Reveal from './Reveal';
import type { Dictionary } from '@/dictionaries/en';

const iconMap: Record<string, React.ReactNode> = {
  records: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  ),
  review: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  widgets: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  shift: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  forecast: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 5-6 5 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18" />
    </svg>
  ),
  pro: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5l2.1 4.26 4.7.68-3.4 3.31.8 4.67-4.2-2.21-4.2 2.21.8-4.67-3.4-3.31 4.7-.68 2.1-4.26z" />
    </svg>
  ),
};

export default function SupportingFeatures({ dict }: { dict: Dictionary['supporting'] }) {
  return (
    <Reveal>
      <section id="features" className="py-20 md:py-28 px-6 bg-white scroll-mt-20">
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
                  {iconMap[item.icon] || iconMap.records}
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
