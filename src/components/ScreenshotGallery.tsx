'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const screenshots = [
  {
    title: 'iPhone 主界面',
    description: '简洁的计时器界面',
    icon: '📱',
  },
  {
    title: 'Apple Watch',
    description: '手腕上的专注力',
    icon: '⌚',
  },
  {
    title: '数据仪表盘',
    description: '周视图和统计',
    icon: '📊',
  },
  {
    title: '收入追踪',
    description: '时薪自动计算',
    icon: '💰',
  },
];

export default function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            截图展示
          </h2>
          <p className="text-gray-400 text-lg">
            精美的界面设计
          </p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-48 md:w-64 p-4 rounded-2xl bg-bg-card border-2 cursor-pointer transition-all ${
                activeIndex === index ? 'border-study' : 'border-white/5'
              }`}
            >
              <div className="aspect-square bg-bg-dark rounded-xl flex items-center justify-center mb-4">
                <span className="text-6xl">{screenshot.icon}</span>
              </div>
              <h3 className="font-semibold mb-1">{screenshot.title}</h3>
              <p className="text-gray-400 text-sm">{screenshot.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
