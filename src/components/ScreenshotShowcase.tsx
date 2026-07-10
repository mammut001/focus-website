'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';

const tabs = [
  'timer',
  'watch',
  'stats',
  'goals',
  'earnings',
] as const;

const tabContent: Record<string, { render: (ui: any) => React.ReactNode }> = {
  timer: {
    render: (ui) => (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(23,32,25,0.08)" strokeWidth="5" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="#32b978" strokeWidth="5" strokeLinecap="round" strokeDasharray="327" strokeDashoffset="60" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-semibold text-text-primary tabular-nums">{ui.time}</span>
              <span className="text-brand text-xs mt-0.5">{ui.status}</span>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <span className="px-3 py-1 rounded-lg bg-black/5 text-text-secondary text-xs">{ui.pause}</span>
            <span className="px-3 py-1 rounded-lg bg-red-50 text-red-500 text-xs">{ui.stop}</span>
          </div>
        </div>
      </div>
    ),
  },
  watch: {
    render: (ui) => (
      <div className="flex items-center justify-center h-full">
        <div className="w-[110px] h-[136px] bg-[#e8eae6] rounded-[1.8rem] border border-border shadow-soft flex items-center justify-center p-4">
          <div className="text-center">
            <div className="relative w-[56px] h-[56px] mx-auto mb-1.5">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(23,32,25,0.08)" strokeWidth="3.5" />
                <circle cx="30" cy="30" r="25" fill="none" stroke="#32b978" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="40" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold text-text-primary tabular-nums">{ui.time}</span>
              </div>
            </div>
            <div className="text-brand text-[10px] font-medium">{ui.mode}</div>
          </div>
        </div>
      </div>
    ),
  },
  stats: {
    render: (ui) => (
      <div className="flex items-center justify-center h-full px-6">
        <div className="w-full max-w-[200px]">
          <div className="text-text-tertiary text-xs mb-3 text-center">{ui.period}</div>
          <div className="flex items-end gap-1.5 justify-center h-20 mb-3">
            {[40, 65, 45, 80, 55, 70, 30].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className={`w-full rounded-sm ${i === 3 ? 'bg-brand' : 'bg-black/10'}`} style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-text-primary">{ui.total}</div>
            <div className="text-brand/60 text-[10px]">{ui.trend}</div>
          </div>
        </div>
      </div>
    ),
  },
  goals: {
    render: () => (
      <div className="flex items-center justify-center h-full px-6">
        <div className="w-full max-w-[200px] space-y-2.5">
          {[
            { label: 'Active', sub: 'Due in 3 days', color: 'bg-brand-soft text-brand' },
            { label: 'Completed', sub: '2 goals', color: 'bg-blue-50 text-blue-500' },
            { label: 'Missed', sub: '1 goal', color: 'bg-red-50 text-red-500' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl border border-border">
              <div className={`w-2 h-2 rounded-full ${item.color.split(' ')[0]}`} />
              <div className="flex-1">
                <div className="text-sm font-medium text-text-primary">{item.label}</div>
                <div className="text-xs text-text-tertiary">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  earnings: {
    render: (ui) => (
      <div className="flex items-center justify-center h-full px-6">
        <div className="w-full max-w-[200px] text-center">
          <div className="text-text-tertiary text-xs mb-3">{ui.period}</div>
          <div className="text-3xl font-semibold text-text-primary mb-0.5">¥3,280</div>
          <div className="text-text-tertiary text-xs mb-4">{ui.rate}</div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-text-tertiary">{ui.work}</span>
              <span className="text-text-secondary">35h · ¥2,800</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-brand rounded-full" />
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-text-tertiary">{ui.study}</span>
              <span className="text-text-secondary">6h · ¥480</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div className="h-full w-[15%] bg-brand/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

export default function ScreenshotShowcase({ dict }: { dict: Dictionary['gallery'] }) {
  const [active, setActive] = useState<typeof tabs[number]>('timer');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentItem = dict.items[active];

  return (
    <section className="py-20 md:py-28 px-6 bg-bg-warm">
      <div className="max-w-content mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.05] tracking-tight text-text-primary mb-3">
            {dict.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 justify-center mb-10 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                active === tab
                  ? 'bg-brand text-white'
                  : 'text-text-secondary hover:text-text-primary hover:bg-black/5'
              }`}
              aria-pressed={active === tab}
            >
              {dict.tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Preview */}
        <div className="max-w-sm mx-auto">
          <div
            key={active}
            className={`rounded-[28px] lg:rounded-[32px] bg-surface border border-border shadow-soft overflow-hidden transition-all duration-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'}`}
          >
            <div className="aspect-[9/16] max-h-[420px]">
              {tabContent[active].render(currentItem.ui)}
            </div>
            <div className="text-center py-5 px-6 border-t border-border">
              <h3 className="text-base font-semibold text-text-primary mb-0.5">
                {currentItem.title}
              </h3>
              <p className="text-sm text-text-tertiary">
                {currentItem.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
