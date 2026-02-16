'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: '选择模式',
    description: '从学习、工作、自定义三种模式中选择',
    icon: '📱',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: '开始专注',
    description: '使用正计时或倒计时，专注每一分钟',
    icon: '▶️',
    color: 'from-emerald-500 to-green-500',
  },
  {
    step: '03',
    title: '查看成果',
    description: '在仪表盘查看统计和收入分析',
    icon: '📈',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated circles */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              简单三步
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            立即开始你的专注之旅
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2 opacity-30" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                {/* Card */}
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  {/* Step number */}
                  <div className={`absolute -top-4 left-1-x-1/2 px/2 -translate-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold`}>
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60">
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
