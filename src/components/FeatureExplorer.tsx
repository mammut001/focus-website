'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Reveal from './Reveal';
import { PhoneFrame } from './DeviceFrame';
import { screenshots } from '@/lib/assets';
import type { Dictionary } from '@/dictionaries/en';

interface TabInfo {
  id: string;
  label: string;
  screenshot: keyof typeof screenshots.iphone;
}

const TABS: TabInfo[] = [
  { id: 'home', label: 'Home', screenshot: 'home' },
  { id: 'goals', label: 'Goals', screenshot: 'goals' },
  { id: 'sessions', label: 'Sessions', screenshot: 'sessions' },
  { id: 'earnings', label: 'Earnings', screenshot: 'earnings' },
  { id: 'insights', label: 'Insights', screenshot: 'heatmap' },
  { id: 'watch', label: 'Watch', screenshot: 'home' }, // will use watch image
];

export default function FeatureExplorer({ dict }: { dict: Dictionary['explorer'] }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    let newIdx = activeTab;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIdx = (activeTab + 1) % TABS.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIdx = (activeTab - 1 + TABS.length) % TABS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIdx = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIdx = TABS.length - 1;
    }
    if (newIdx !== activeTab) {
      setActiveTab(newIdx);
      const btn = tabListRef.current?.querySelectorAll('[role="tab"]')[newIdx] as HTMLButtonElement;
      btn?.focus();
    }
  }, [activeTab]);

  const current = TABS[activeTab];

  return (
    <Reveal>
      <section className="py-20 md:py-28 px-6 bg-bg-warm">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.05] text-text-primary mb-3">
              {dict.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
              {dict.subtitle}
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: screenshot */}
            <div className="max-w-[320px] mx-auto lg:mx-0 mb-8 lg:mb-0">
              <PhoneFrame>
                <img
                  key={current.id}
                  src={current.id === 'watch' ? screenshots.watch.home : screenshots.iphone[current.screenshot]}
                  alt={current.label}
                  className="w-full h-full object-cover"
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  }}
                  loading="lazy"
                />
              </PhoneFrame>
            </div>

            {/* Right: tabs */}
            <div>
              <div
                ref={tabListRef}
                role="tablist"
                aria-label="Feature screenshots"
                onKeyDown={handleKeyDown}
                className="flex gap-1 overflow-x-auto pb-2 mb-6 scrollbar-none"
              >
                {TABS.map((tab, i) => (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`explorer-tab-${tab.id}`}
                    aria-selected={activeTab === i}
                    aria-controls={`explorer-panel-${tab.id}`}
                    tabIndex={activeTab === i ? 0 : -1}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                      activeTab === i
                        ? 'bg-brand text-white'
                        : 'text-text-secondary hover:text-text-primary hover:bg-black/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {TABS.map((tab, i) => (
                <div
                  key={tab.id}
                  id={`explorer-panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`explorer-tab-${tab.id}`}
                  hidden={activeTab !== i}
                  className="max-w-sm"
                >
                  {activeTab === i && dict.panels[i] && (
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {dict.panels[i].title}
                      </h3>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {dict.panels[i].desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
