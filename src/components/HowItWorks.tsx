'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: '选择模式',
    description: '学习 / 工作 / 自定义',
    icon: '📱',
  },
  {
    step: '02',
    title: '开始专注',
    description: '正计时或倒计时',
    icon: '▶️',
  },
  {
    step: '03',
    title: '查看成果',
    description: '仪表盘查看统计和收入',
    icon: '📈',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            使用方法
          </h2>
          <p className="text-gray-400 text-lg">
            三步开始你的专注之旅
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-study via-work to-custom -translate-y-1/2 opacity-30" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-bg-card border-2 border-study/30 flex items-center justify-center text-4xl shadow-lg"
                >
                  {item.icon}
                </motion.div>
                <div className="text-study text-sm font-mono mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
