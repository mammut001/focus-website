'use client';

import { motion } from 'framer-motion';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              立即下载
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            开启你的专注之旅，让每一分钟都有价值
          </p>

          {/* App Store Badge */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-900 rounded-2xl font-semibold text-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-white/40 text-sm">
            即将上线 App Store · 敬请期待
          </p>
        </motion.div>
      </div>
    </section>
  );
}
