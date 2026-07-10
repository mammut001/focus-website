'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';

function FeatureBlock({
  direction,
  dict,
}: {
  direction: 'left' | 'right';
  dict: Dictionary['features']['main'][0];
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isReversed = direction === 'right';

  return (
    <section className={`py-20 md:py-28 px-6 ${dict.bg === 'brand' ? 'bg-brand-soft/40' : 'bg-bg'}`}>
      <div className="max-w-content mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? '' : ''}`}>
          {/* Image */}
          <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="max-w-[400px] mx-auto">
              <div className={`aspect-[9/19] bg-surface rounded-[28px] lg:rounded-[32px] border border-border shadow-medium overflow-hidden`}>
                <div className="h-full bg-gradient-to-b from-bg-warm to-bg flex items-center justify-center p-8">
                  <div className="text-center">
                    {dict.mockupIcon === 'timer' && (
                      <>
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(23,32,25,0.08)" strokeWidth="6" />
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#32b978" strokeWidth="6" strokeLinecap="round" strokeDasharray="327" strokeDashoffset="60" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-semibold text-text-primary tabular-nums">25:00</span>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <span className="px-3 py-1 rounded-lg bg-black/5 text-text-secondary text-xs">Countdown</span>
                          <span className="px-3 py-1 rounded-lg bg-brand-soft text-brand-dark text-xs">Count Up</span>
                        </div>
                      </>
                    )}
                    {dict.mockupIcon === 'watch' && (
                      <div className="py-8">
                        <div className="w-[100px] h-[124px] mx-auto bg-[#e8eae6] rounded-[1.6rem] border border-border shadow-soft flex items-center justify-center p-4">
                          <div className="text-center">
                            <div className="relative w-[52px] h-[52px] mx-auto mb-1.5">
                              <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                                <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(23,32,25,0.08)" strokeWidth="4" />
                                <circle cx="30" cy="30" r="25" fill="none" stroke="#32b978" strokeWidth="4" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="40" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-semibold text-text-primary tabular-nums">25:00</span>
                              </div>
                            </div>
                            <div className="text-brand text-[10px] font-medium">Focus</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {dict.mockupIcon === 'stats' && (
                      <div className="w-full py-4">
                        <div className="flex items-end gap-2 justify-center h-24 mb-3">
                          {[40, 65, 45, 80, 55, 70, 30].map((h, i) => (
                            <div key={i} className="flex-1 max-w-[24px]">
                              <div
                                className={`w-full rounded-sm ${i === 3 ? 'bg-brand' : 'bg-black/10'}`}
                                style={{ height: `${h}%` }}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-semibold text-text-primary">12.5h</div>
                          <div className="text-text-tertiary text-xs">This week</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.05] tracking-tight text-text-primary mb-4">
              {dict.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
              {dict.description}
            </p>
            <ul className="space-y-2.5">
              {dict.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductFeature({ dict }: { dict: Dictionary['features'] }) {
  return (
    <>
      {dict.main.map((item, i) => (
        <FeatureBlock key={i} direction={i % 2 === 0 ? 'left' : 'right'} dict={item} />
      ))}
    </>
  );
}
