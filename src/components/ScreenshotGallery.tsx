'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const screenshots = [
  {
    title: '主界面',
    description: '简洁优雅的计时器',
    gradient: 'from-slate-800 to-slate-900',
    icon: '⏱️',
  },
  {
    title: 'Apple Watch',
    description: '手腕上的专注力',
    gradient: 'from-blue-900 to-purple-900',
    icon: '⌚',
  },
  {
    title: '数据仪表盘',
    description: '周视图和统计',
    gradient: 'from-emerald-900 to-teal-900',
    icon: '📊',
  },
  {
    title: '收入追踪',
    description: '时薪自动计算',
    gradient: 'from-amber-900 to-orange-900',
    icon: '💰',
  },
];

export default function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              截图展示
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            精美的界面设计
          </p>
        </motion.div>

        {/* Main Preview */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className={`p-8 rounded-3xl bg-gradient-to-br ${screenshots[activeIndex].gradient} border border-white/10 shadow-2xl`}>
            <div className="aspect-square rounded-2xl bg-black/30 flex items-center justify-center">
              <div className="text-8xl">{screenshots[activeIndex].icon}</div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-white/60">
                {screenshots[activeIndex].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex gap-4 justify-center flex-wrap">
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white/20 border-2 border-white/30' 
                  : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
              }`}
            >
              <div className="text-3xl mb-2">{screenshot.icon}</div>
              <div className="text-sm text-white/80">{screenshot.title}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
