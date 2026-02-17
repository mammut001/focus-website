'use client';

import { motion } from 'framer-motion';
import type { Dictionary } from '@/dictionaries/en';

export default function HeroSection({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* ── Layered Background ──────────────────────────── */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-indigo-500/[0.12] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] bg-purple-500/[0.12] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-500/[0.08] rounded-full blur-[80px]"
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-white/70 font-medium">{dict.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient-hero">{dict.title}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/85 font-light tracking-wide mb-4"
          >
            {dict.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-white/50 mb-12 max-w-lg mx-auto leading-relaxed whitespace-pre-line"
          >
            {dict.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-base"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {dict.appStore}
            </a>

            <a
              href="#features"
              className="group inline-flex items-center gap-2 px-6 py-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              {dict.learnMore}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* ── Device Mockups ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mt-20 relative"
          >
            <div className="inline-flex items-end gap-6 md:gap-10">
              {/* iPhone Mockup */}
              <div className="relative">
                <div className="w-52 h-[420px] md:w-64 md:h-[520px] bg-[hsl(225,25%,8%)] rounded-[3rem] border-[3px] border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[hsl(225,25%,8%)] rounded-b-2xl z-10" />

                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-[hsl(225,30%,6%)] to-[hsl(225,25%,10%)] flex items-center justify-center p-8">
                    <div className="text-center">
                      {/* Timer Ring */}
                      <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-6">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="52" fill="none" stroke="hsla(225,20%,25%,0.4)" strokeWidth="6" />
                          <circle
                            cx="60" cy="60" r="52" fill="none"
                            stroke="url(#timerGradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="327"
                            strokeDashoffset="82"
                          />
                          <defs>
                            <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#34d399" />
                              <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">{dict.mockup.timer}</span>
                        </div>
                      </div>
                      <div className="text-emerald-400 font-medium text-sm tracking-wide">{dict.mockup.status}</div>
                      <div className="text-white/30 text-xs mt-1.5">{dict.mockup.mode}</div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Phone glow */}
                <div className="absolute -inset-4 bg-indigo-500/[0.06] rounded-[4rem] blur-2xl -z-10" />
              </div>

              {/* Apple Watch Mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-4 md:mb-8"
              >
                {/* Band top */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[52px] h-8 bg-[hsl(225,15%,18%)] rounded-t-xl" />
                {/* Watch body */}
                <div className="w-[100px] h-[120px] md:w-[120px] md:h-[144px] bg-[hsl(225,20%,10%)] rounded-[1.8rem] border-[2px] border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Crown */}
                  <div className="absolute top-1/3 -right-1 w-1.5 h-6 bg-white/10 rounded-full" />
                  {/* Screen */}
                  <div className="w-full h-full bg-[hsl(225,30%,5%)] flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="relative w-14 h-14 md:w-16 md:h-16 mx-auto">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                          <circle cx="30" cy="30" r="25" fill="none" stroke="hsla(225,20%,25%,0.3)" strokeWidth="4" />
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="40" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs md:text-sm font-bold text-white tabular-nums">{dict.mockup.watchTime}</span>
                        </div>
                      </div>
                      <div className="text-indigo-300 text-[10px] mt-1.5 font-medium">{dict.mockup.watchMode}</div>
                    </div>
                  </div>
                </div>
                {/* Band bottom */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[52px] h-8 bg-[hsl(225,15%,18%)] rounded-b-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
