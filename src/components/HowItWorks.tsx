'use client';

import { motion } from 'framer-motion';
import type { Dictionary } from '@/dictionaries/en';

export default function HowItWorks({ dict }: { dict: Dictionary['howItWorks'] }) {
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-400',
    },
  ];

  return (
    <section id="how-it-works" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[72px] left-[16%] right-[16%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/30 via-emerald-500/30 to-purple-500/30" />
          </div>

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative p-8 rounded-2xl glass-card">
                  {/* Step number badge */}
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold tracking-wider shadow-lg`}>
                    Step {item.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
