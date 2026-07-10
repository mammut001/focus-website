'use client';

import { useEffect, useState, useRef } from 'react';
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
  const panelsRefs = useRef<(HTMLElement | null)[]>([]);

  const steps = dict.steps as unknown as StoryStep[];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepStr = entry.target.getAttribute('data-story-step');
          if (stepStr !== null) {
            setActiveIndex(parseInt(stepStr, 10));
          }
        }
      });
    }, observerOptions);

    panelsRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    return () => {
      observer.disconnect();
    };
  }, [steps.length]);

  return (
    <section id="product-story" className="relative bg-bg-warm">
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
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 py-28 items-start relative">
          {/* Left: text panels */}
          <div className="space-y-[10vh]">
            {steps.map((step, i) => (
              <article
                key={i}
                data-story-step={i}
                ref={(el) => {
                  panelsRefs.current[i] = el;
                }}
                className="min-h-[65vh] flex flex-col justify-center transition-opacity duration-300"
                style={{
                  opacity: activeIndex === i ? 1 : 0.4
                }}
              >
                <span className="text-sm font-semibold text-brand mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-[32px] lg:text-[40px] font-semibold leading-[1.05] text-text-primary mb-4">
                  {step.title}
                </h2>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          {/* Right: sticky screenshot container */}
          <div className="sticky top-24 h-[75vh] flex items-center justify-center">
            <div className="relative w-full max-w-[450px] aspect-[4/5] flex items-center justify-center">
              {steps.map((step, stepIdx) => {
                const isActive = activeIndex === stepIdx;
                const hasSecond = step.screenshots.length > 1;
                return (
                  <div
                    key={stepIdx}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
                      pointerEvents: isActive ? 'auto' : 'none',
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full">
                      {/* First screenshot */}
                      <div 
                        className="w-[310px] z-10 transition-transform duration-500"
                        style={{
                          transform: hasSecond && isActive ? 'translateX(-30px)' : 'translateX(0px)',
                        }}
                      >
                        <PhoneScreenshot src={step.screenshots[0]} alt={step.title} priority={stepIdx === 0} />
                      </div>

                      {/* Second screenshot */}
                      {hasSecond && (
                        <div 
                          className="absolute w-[230px] z-0 transition-transform duration-500"
                          style={{
                            transform: 'translateX(45px) translateY(40px)',
                            opacity: 0.95,
                          }}
                        >
                          <PhoneScreenshot src={step.screenshots[1]} alt="" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
