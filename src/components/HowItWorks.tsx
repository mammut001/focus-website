'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Dictionary } from '@/dictionaries/en';

export default function HowItWorks({ dict }: { dict: Dictionary['howItWorks'] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.6], ['0%', '100%']);

  const steps = [
    {
      step: '01',
      title: dict.steps.step1.title,
      description: dict.steps.step1.desc,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-400',
    },
    {
      step: '02',
      title: dict.steps.step2.title,
      description: dict.steps.step2.desc,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-emerald-500 to-green-400',
    },
    {
      step: '03',
      title: dict.steps.step3.title,
      description: dict.steps.step3.desc,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-rose-500 to-red-400',
    },
    {
      step: '04',
      title: dict.steps.step4.title,
      description: dict.steps.step4.desc,
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-400',
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-gradient-section">{dict.title}</span>
          </h2>
          <p className="text-white/45 text-lg">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[72px] left-[6%] right-[6%] h-px bg-white/[0.06] overflow-hidden">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-blue-500/50 via-emerald-500/50 via-rose-500/50 to-purple-500/50"
            />
          </div>

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative p-8 rounded-2xl glass-card"
                >
                  {/* Step number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.2, type: 'spring', stiffness: 200, damping: 12 }}
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold tracking-wider shadow-lg`}
                  >
                    Step {item.step}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/45 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
