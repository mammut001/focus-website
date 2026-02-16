'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 right-1/3 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80">iPhone + Apple Watch</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Focus
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/90 font-light mb-4"
          >
            专注力，从此不同
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
          >
            为 iPhone 和 Apple Watch 精心打造的极简专注计时器，助你高效工作学习
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </span>
            </a>
            
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white transition"
            >
              了解更多
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 relative"
          >
            <div className="inline-flex items-end gap-8">
              {/* iPhone */}
              <div className="relative">
                <div className="w-48 h-96 md:w-56 md:h-[500px] bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-800 rounded-b-2xl" />
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                        <span className="text-5xl font-mono font-bold text-white">25</span>
                      </div>
                      <div className="text-emerald-400 font-medium">专注中</div>
                      <div className="text-white/50 text-sm mt-2">工作模式</div>
                    </div>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
              </div>

              {/* Apple Watch */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-800 rounded-[2rem] border-4 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full border-3 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      </div>
                      <div className="text-white/60 text-xs mt-2">15:00</div>
                    </div>
                  </div>
                </div>
                {/* Watch band hint */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-700 rounded-t-lg" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-8 bg-slate-700 rounded-b-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
