'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: '活跃用户', icon: '👥' },
  { value: 500000, suffix: '+', label: '专注会话', icon: '⏱️' },
  { value: 1000000, suffix: 'h', label: '专注时长', icon: '📈' },
  { value: 4.8, suffix: '⭐', label: 'App 评分', icon: '⭐' },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="stats" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              数字证明
            </span>
          </h2>
          <p className="text-white/60 text-lg">
            来自用户的真实数据
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2500, isVisible);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value >= 1000 ? count.toLocaleString() : count.toFixed(1)}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
