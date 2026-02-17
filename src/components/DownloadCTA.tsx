'use client';

import { motion } from 'framer-motion';
import type { Dictionary } from '@/dictionaries/en';

export default function DownloadCTA({ dict }: { dict: Dictionary['download'] }) {
  return (
    <section id="download" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/[0.12] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/[0.12] rounded-full blur-[100px]"
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">{dict.title}</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>

          {/* App Store Badge */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-4 px-10 py-5 rounded-2xl text-white font-semibold text-lg"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[11px] opacity-70 font-normal tracking-wide uppercase">Download on the</div>
              <div className="text-xl font-bold -mt-0.5">{dict.appStore}</div>
            </div>
          </motion.a>

          <p className="mt-8 text-white/25 text-sm">
            {dict.comingSoon}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
