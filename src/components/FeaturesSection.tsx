'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '⏱️',
    title: '双模计时',
    description: '正计时和倒计时两种模式，灵活切换，适配不同专注场景',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📊',
    title: '智能统计',
    description: '周视图仪表盘，柱状图直观展示专注趋势，数据一目了然',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: '💰',
    title: '收入追踪',
    description: '设置时薪，自动计算专注价值，让时间更有价值',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: '⌚',
    title: 'Apple Watch',
    description: '手腕上的专注力，Digital Crown 精确调节，抬腕即操作',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🎯',
    title: '每日目标',
    description: '设定每日专注目标，养成高效习惯，让进步可视化',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: '🌍',
    title: '中英双语',
    description: '无缝切换中英文界面，跨国使用无障碍',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              功能亮点
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            专为高效人士打造的专注工具，让每一次专注都有价值
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
