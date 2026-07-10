'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';

export default function HowItWorks({ dict }: { dict: Dictionary['howItWorks'] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const steps = [
    {
      num: '01',
      title: dict.steps.step1.title,
      desc: dict.steps.step1.desc,
    },
    {
      num: '02',
      title: dict.steps.step2.title,
      desc: dict.steps.step2.desc,
    },
    {
      num: '03',
      title: dict.steps.step3.title,
      desc: dict.steps.step3.desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-bg-warm">
      <div className="max-w-content mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.05] tracking-tight text-text-primary mb-3">
            {dict.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 relative">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%+1.5rem)] w-[calc(100%-3rem)] h-px bg-border" />
              )}
              <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-4 md:text-center">
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold text-brand">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
