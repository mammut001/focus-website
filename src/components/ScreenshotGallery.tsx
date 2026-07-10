'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import type { Dictionary } from '@/dictionaries/en';

export default function ScreenshotGallery({ dict }: { dict: Dictionary['gallery'] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const screenshots = [
    {
      id: 'main',
      title: dict.items.main.title,
      description: dict.items.main.desc,
      gradient: 'from-slate-800 to-slate-900',
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="hsla(225,20%,25%,0.3)" strokeWidth="5" />
                <motion.circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="#34d399" strokeWidth="5" strokeLinecap="round"
                  strokeDasharray="327" strokeDashoffset="60"
                  animate={{ strokeDashoffset: [60, 100, 60] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white tabular-nums">{dict.items.main.ui.time}</span>
                <span className="text-emerald-400 text-xs mt-1">{dict.items.main.ui.status}</span>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs">{dict.items.main.ui.pause}</div>
              <div className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-xs">{dict.items.main.ui.stop}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'watch',
      title: dict.items.watch.title,
      description: dict.items.watch.desc,
      gradient: 'from-indigo-900 to-purple-900',
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="w-28 h-32 bg-[hsl(225,20%,10%)] rounded-[1.5rem] border border-white/10 flex items-center justify-center p-4 shadow-2xl">
            <div className="text-center">
              <div className="relative w-14 h-14 mx-auto mb-2">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="hsla(225,20%,25%,0.3)" strokeWidth="3.5" />
                  <motion.circle
                    cx="30" cy="30" r="24" fill="none"
                    stroke="#818cf8" strokeWidth="3.5" strokeLinecap="round"
                    strokeDasharray="151" strokeDashoffset="38"
                    animate={{ strokeDashoffset: [38, 70, 38] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{dict.items.watch.ui.time}</span>
                </div>
              </div>
              <div className="text-indigo-300 text-[9px] font-medium">{dict.items.watch.ui.mode}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'stats',
      title: dict.items.stats.title,
      description: dict.items.stats.desc,
      gradient: 'from-emerald-900/80 to-teal-900/80',
      content: (
        <div className="flex items-center justify-center h-full px-4">
          <div className="w-full max-w-[200px]">
            <div className="text-white/40 text-xs mb-3 text-center">{dict.items.stats.ui.period}</div>
            <div className="flex items-end gap-1.5 justify-center h-20 mb-3">
              {[40, 65, 45, 80, 55, 70, 30].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <div
                    className={`w-full rounded-sm ${i === 3 ? 'bg-emerald-400' : 'bg-emerald-500/30'}`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[8px] text-white/30">{'一二三四五六日'[i]}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{dict.items.stats.ui.total}</div>
              <div className="text-emerald-400/60 text-[10px]">{dict.items.stats.ui.trend}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'income',
      title: dict.items.income.title,
      description: dict.items.income.desc,
      gradient: 'from-amber-900/80 to-orange-900/80',
      content: (
        <div className="flex items-center justify-center h-full px-4">
          <div className="w-full max-w-[200px] text-center">
            <div className="text-white/40 text-xs mb-4">{dict.items.income.ui.period}</div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-white mb-1"
            >
              ¥3,280
            </motion.div>
            <div className="text-amber-400/60 text-xs mb-5">{dict.items.income.ui.rate}</div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/40">{dict.items.income.ui.work}</span>
                <span className="text-white/70">35h · ¥2,800</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"
                />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/40">{dict.items.income.ui.study}</span>
                <span className="text-white/70">6h · ¥480</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '15%' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'goals',
      title: dict.items.goals.title,
      description: dict.items.goals.desc,
      gradient: 'from-rose-900/80 to-red-900/80',
      content: (
        <div className="flex items-center justify-center h-full px-4">
          <div className="w-full max-w-[200px]">
            <div className="space-y-3">
              {[
                { label: dict.items.goals.ui.active, detail: dict.items.goals.ui.deadline, color: 'emerald', icon: 'check' },
                { label: dict.items.goals.ui.completed, detail: '2 goals', color: 'indigo', icon: 'check' },
                { label: dict.items.goals.ui.missed, detail: '1 goal', color: 'rose', icon: 'x' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.4 }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}
                >
                  <div className={`w-8 h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center`}>
                    {item.icon === 'check' ? (
                      <svg className={`w-4 h-4 text-${item.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg className={`w-4 h-4 text-${item.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-[10px] text-white/40">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tips',
      title: dict.items.tips.title,
      description: dict.items.tips.desc,
      gradient: 'from-violet-900/80 to-fuchsia-900/80',
      content: (
        <div className="flex items-center justify-center h-full px-4">
          <div className="w-full max-w-[200px]">
            <div className="text-white/40 text-xs mb-3 text-center">{dict.items.tips.ui.period}</div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-4"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl font-bold text-white"
              >
                ¥320
              </motion.div>
              <div className="text-fuchsia-400/60 text-[10px]">+ ¥85 {dict.items.tips.ui.today}</div>
            </motion.div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/40">{dict.items.tips.ui.today}</span>
                <span className="text-white/70">¥85</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/40">{dict.items.tips.ui.thisWeek}</span>
                <span className="text-white/70">¥235</span>
              </div>
              <div className="text-[10px] text-white/30 text-center mt-3">{dict.items.tips.ui.allocation}</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="py-28 md:py-36 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/[0.03] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-gradient-section">{dict.title}</span>
          </h2>
          <p className="text-white/45 text-lg">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Main Preview */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-sm mx-auto mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={`rounded-3xl bg-gradient-to-br ${screenshots[activeIndex].gradient} border border-white/[0.08] shadow-2xl shadow-black/30 overflow-hidden`}>
                <div className="aspect-[9/16] max-h-[420px]">
                  {screenshots[activeIndex].content}
                </div>
                <div className="text-center py-5 px-6 border-t border-white/[0.06]">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {screenshots[activeIndex].title}
                  </h3>
                  <p className="text-white/40 text-sm">
                    {screenshots[activeIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 justify-center flex-wrap">
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-3 rounded-xl transition-all duration-300 ${activeIndex === index
                  ? 'bg-white/[0.12] border border-white/20 shadow-lg'
                  : 'bg-white/[0.04] border border-transparent hover:bg-white/[0.08]'
                }`}
            >
              <div className="text-sm font-medium text-white/80">{screenshot.title}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
