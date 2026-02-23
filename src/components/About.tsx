'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/lib/data';
import { FastForward, ArrowBigUpDash, Code, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  FastForward,
  ArrowBigUpDash,
  Code,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About SEMICOLON</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/40 transition-all duration-300"
              >
                <div className="bg-yellow-400/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {Icon && <Icon size={32} className="text-yellow-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
