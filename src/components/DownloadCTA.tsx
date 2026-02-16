'use client';

import { motion } from 'framer-motion';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            立即下载
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            开启你的专注之旅，让每一分钟都有价值
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              <span></span>
              <span>iPhone & Apple Watch</span>
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            即将上线 App Store
          </p>
        </motion.div>
      </div>
    </section>
  );
}
