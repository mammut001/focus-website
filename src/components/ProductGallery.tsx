'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import PhoneScreenshot from './DeviceFrame';
import { screenshots } from '@/lib/assets';
import type { Dictionary } from '@/dictionaries/en';

export default function ProductGallery({ dict }: { dict: Dictionary['productGallery'] }) {
  const [activeTab, setActiveTab] = useState(0);

  const THEMES = [
    {
      id: 'focus',
      label: dict.tabs.focus.label,
      title: dict.tabs.focus.title,
      description: dict.tabs.focus.description,
      main: 'home' as const,
      secondary: 'modes' as const,
    },
    {
      id: 'history',
      label: dict.tabs.history.label,
      title: dict.tabs.history.title,
      description: dict.tabs.history.description,
      main: 'sessions' as const,
      secondary: 'weekly-chart' as const,
    },
    {
      id: 'goals',
      label: dict.tabs.goals.label,
      title: dict.tabs.goals.title,
      description: dict.tabs.goals.description,
      main: 'goals' as const,
      secondary: 'income-goal' as const,
    },
    {
      id: 'insights',
      label: dict.tabs.insights.label,
      title: dict.tabs.insights.title,
      description: dict.tabs.insights.description,
      main: 'earnings' as const,
      secondary: 'heatmap' as const,
    },
  ];

  const activeTheme = THEMES[activeTab];

  return (
    <section className="py-20 md:py-28 px-6 bg-bg-warm overflow-hidden">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.05] text-text-primary mb-3">
              {dict.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
              {dict.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Desktop Theme Tabs */}
        <Reveal delay={100}>
          <div className="hidden lg:flex justify-center gap-2 mb-12">
            {THEMES.map((theme, idx) => (
              <button
                key={theme.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  activeTab === idx
                    ? 'bg-brand text-white shadow-soft'
                    : 'bg-black/5 text-text-secondary hover:text-text-primary hover:bg-black/10'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 items-center">
          {/* Left: Main phone Frame */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[380px] feature-screenshot-enter" key={activeTab + '-main'}>
              <PhoneScreenshot src={activeTheme.main} alt={activeTheme.label} />
            </div>
          </div>

          {/* Right: Secondary panel and details */}
          <div className="flex flex-col gap-8 justify-center items-start">
            <div className="w-full max-w-[240px] rounded-[24px] overflow-hidden border border-border shadow-medium bg-white p-2 feature-screenshot-enter animate-duration-300" key={activeTab + '-sec'}>
              <img
                src={screenshots.iphone[activeTheme.secondary]}
                alt=""
                className="w-full h-auto object-cover rounded-[16px]"
              />
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-border p-6 max-w-sm shadow-soft">
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                {activeTheme.title}
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {activeTheme.description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile horizontal scroll-snap layout */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none">
          {THEMES.map((theme) => (
            <div
              key={theme.id}
              className="snap-center shrink-0 w-[85vw] max-w-[320px] bg-white rounded-3xl border border-border shadow-soft p-6 flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-xs font-semibold text-brand tracking-wider uppercase mb-1.5 block">
                  {theme.label}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="relative flex justify-center items-end h-[340px] bg-bg-warm rounded-2xl p-4 overflow-hidden">
                {/* Main Screenshot */}
                <div className="w-[160px] z-10 translate-x-[-20px]">
                  <PhoneScreenshot src={theme.main} alt="" className="scale-95" />
                </div>
                {/* Secondary Screenshot */}
                <div className="absolute w-[120px] right-4 bottom-4 z-0 rounded-[16px] overflow-hidden border border-border shadow-soft bg-white p-1">
                  <img src={screenshots.iphone[theme.secondary]} alt="" className="w-full h-auto rounded-[12px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
