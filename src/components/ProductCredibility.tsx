'use client';

import Reveal from './Reveal';

const items = [
  { label: 'Today’s 3', icon: 'earn', color: '#1f803c' },
  { label: 'Records', icon: 'spend', color: '#8c57ad' },
  { label: 'Watch', icon: 'train', color: '#1f6ea8' },
  { label: 'iPhone · iPad · Watch', icon: 'phone', color: undefined },
  { label: 'English · Français · 中文', icon: 'globe', color: undefined },
];

export default function ProductCredibility() {
  return (
    <Reveal>
      <section className="border-y border-border bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto py-5 scrollbar-none justify-center">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-text-secondary flex-shrink-0">
                {item.icon === 'version' && (
                  <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {item.icon === 'earn' && (
                  <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l7.5-15 7.5 15M8 14h8" />
                  </svg>
                )}
                {item.icon === 'spend' && (
                  <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="4" y="4" width="7" height="7" rx="1.5" />
                    <rect x="13" y="4" width="7" height="7" rx="1.5" />
                    <rect x="4" y="13" width="7" height="7" rx="1.5" />
                    <rect x="13" y="13" width="7" height="7" rx="1.5" />
                  </svg>
                )}
                {item.icon === 'train' && (
                  <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12M8 10v8m8-8v8M7 18h10M12 6v4" />
                  </svg>
                )}
                {item.icon === 'phone' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === 'globe' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M3.6 9h16.8M3.6 15h16.8" />
                    <path strokeLinecap="round" d="M12 3a15 15 0 010 18 15 15 0 010-18z" />
                  </svg>
                )}
                <span
                  className="text-sm font-medium whitespace-nowrap"
                  style={item.color ? { color: item.color } : undefined}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
