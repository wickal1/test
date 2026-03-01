'use client';

import { motion } from 'framer-motion';
import { partData } from '@/lib/data';
import Image from 'next/image';

export default function Part() {
  return (
    <section id="part" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical part</h2>
          <p className="text-gray-200 text-lg">다양한 project를 경험할 수 있습니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partData.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col h-auto bg-black/20 backdrop-blur-sm rounded-2xl hover:bg-black/30 transition-all duration-300 cursor-pointer"
            >
              <div className="relative flex-1 p-3 min-h-[300px]">
                <Image
                  src={part.image}
                  alt={part.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{part.title}</h3>
                <p className="text-gray-200">{part.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}