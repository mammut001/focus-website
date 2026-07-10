'use client';

import Reveal from './Reveal';

const items = [
  { label: 'iPhone', icon: 'phone' },
  { label: 'Apple Watch', icon: 'watch' },
  { label: 'Widgets', icon: 'grid' },
  { label: 'Live Activities', icon: 'live' },
  { label: 'English · Français · 中文', icon: 'globe' },
];

export default function ProductCredibility() {
  return (
    <Reveal>
      <section className="border-y border-border bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto py-5 scrollbar-none justify-center">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-text-secondary flex-shrink-0">
                {item.icon === 'phone' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === 'watch' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="6" y="2" width="12" height="20" rx="4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="6" x2="12.01" y2="6" strokeLinecap="round" />
                    <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === 'grid' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                )}
                {item.icon === 'live' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="currentColor" />
                  </svg>
                )}
                {item.icon === 'globe' && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M3.6 9h16.8M3.6 15h16.8" />
                    <path strokeLinecap="round" d="M12 3a15 15 0 010 18 15 15 0 010-18z" />
                  </svg>
                )}
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
