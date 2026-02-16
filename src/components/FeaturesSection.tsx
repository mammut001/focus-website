'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '⏱️',
    title: '双模计时',
    description: '正计时和倒计时，自由选择你的节奏',
    color: 'study',
  },
  {
    icon: '📊',
    title: '智能统计',
    description: '周视图仪表盘，柱状图一目了然',
    color: 'work',
  },
  {
    icon: '💰',
    title: '收入追踪',
    description: '设置时薪，自动计算你的专注价值',
    color: 'custom',
  },
  {
    icon: '⌚',
    title: 'Apple Watch',
    description: '手腕上的专注力，Digital Crown 精确调节',
    color: 'study',
  },
  {
    icon: '🎯',
    title: '每日目标',
    description: '设定专注目标，养成高效习惯',
    color: 'work',
  },
  {
    icon: '🌍',
    title: '中英双语',
    description: '无缝切换中英文界面',
    color: 'custom',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            功能亮点
          </h2>
          <p className="text-gray-400 text-lg">
            专为高效人士打造的专注工具
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-${feature.color}/30 transition-colors group`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 text-${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
