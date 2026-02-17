'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import type { Dictionary } from '@/dictionaries/en';

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function StatItem({ item, value, isVisible, index }: { item: { label: string; suffix: string }; value: number; isVisible: boolean; index: number }) {
  const count = useCountUp(value, 2500, isVisible);

  const formatNumber = (n: number) => {
    // Basic formatting - adjust logic if needed for different locales
    if (value >= 1000000) return (n / 1000000).toFixed(1) + 'M'; // Simplified for international
    if (value >= 1000) return Math.floor(n).toLocaleString();
    if (value % 1 === 0) return Math.floor(n).toString(); // Integer
    return n.toFixed(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center px-4 md:px-8"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
        <span className="text-gradient-hero">
          {formatNumber(count)}
        </span>
        <span className="text-2xl md:text-3xl text-white/40 ml-0.5">{item.suffix}</span>
      </div>
      <div className="text-white/40 text-sm font-medium">{item.label}</div>
    </motion.div>
  );
}

export default function StatsCounter({ dict }: { dict: Dictionary['stats'] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const statsData = [
    { value: 1, item: dict.items.users },
    { value: 1, item: dict.items.sessions },
    { value: 1, item: dict.items.hours },
    { value: 5.0, item: dict.items.rating },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-indigo-500/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="text-gradient-section">{dict.title}</span>
          </h2>
          <p className="text-white/45 text-lg">{dict.subtitle}</p>
        </motion.div>

        {/* Stats row */}
        <div className="glass-card rounded-2xl py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/[0.06]">
            {statsData.map((stat, index) => (
              <StatItem key={index} item={stat.item} value={stat.value} isVisible={isVisible} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
