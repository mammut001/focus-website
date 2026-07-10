'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import PhoneScreenshot from './DeviceFrame';
import { screenshots } from '@/lib/assets';
import type { Dictionary } from '@/dictionaries/en';

interface StoryStep {
  screenshots: (keyof typeof screenshots.iphone)[];
  title: string;
  description: string;
}

export default function ProductStory({ dict }: { dict: Dictionary['story'] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  const steps = dict.steps as unknown as StoryStep[];

  const handleScroll = useCallback(() => {
    const el = panelsRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const panelHeight = rect.height / steps.length;
    const scrollInSection = Math.max(0, Math.min(rect.bottom - window.innerHeight, rect.height - window.innerHeight));
    const ratio = scrollInSection / (rect.height - window.innerHeight);
    const idx = Math.min(steps.length - 1, Math.floor(ratio * steps.length));
    setActiveIndex(idx);
  }, [steps.length]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const current = steps[activeIndex];

  return (
    <section ref={sectionRef} className="relative bg-bg-warm">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Mobile: static card layout */}
        <div className="lg:hidden py-16 md:py-20 space-y-20">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="max-w-[280px] mx-auto mb-8">
                <PhoneScreenshot src={step.screenshots[0]} alt={step.title} />
              </div>
              <div className="text-center max-w-md mx-auto">
                <span className="text-sm font-semibold text-brand mb-2 block">0{i + 1}</span>
                <h2 className="text-[24px] sm:text-[28px] font-semibold leading-[1.1] text-text-primary mb-3">{step.title}</h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: sticky scroll */}
        <div ref={panelsRef} className="hidden lg:grid lg:grid-cols-2 gap-16 py-28 min-h-[120vh] sticky top-0 items-center">
          {/* Left: text panels */}
          <div className="relative">
            {/* Step indicators */}
            <div className="flex gap-2 mb-10">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand' : 'w-6 bg-border'}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <div
              style={{
                opacity: 1,
                transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
              }}
            >
              <span className="text-sm font-semibold text-brand mb-3 block">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.05] text-text-primary mb-4">
                {current.title}
              </h2>
              <p className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-sm">
                {current.description}
              </p>
            </div>
          </div>

          {/* Right: sticky screenshot */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[320px]">
              {current.screenshots.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-500 ${i === 0 ? 'relative' : ''}`}
                  style={{
                    opacity: i === 0 ? 1 : 0,
                    transform: i === 0 ? 'translateX(0)' : 'translateX(8px)',
                    zIndex: steps.length - i,
                  }}
                >
                  {i === 0 && (
                    <PhoneScreenshot src={src} alt={current.title} />
                  )}
                </div>
              ))}
              {current.screenshots.length > 1 && (
                <div className="absolute -bottom-3 -right-3 w-[140px] opacity-60">
                  <PhoneScreenshot src={current.screenshots[1]} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
