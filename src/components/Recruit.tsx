'use client';

import { motion } from 'framer-motion';
import { recruitData } from '@/lib/data';
import { Users, Calendar, Send } from 'lucide-react';

export default function Recruit() {
  return (
    <section id="recruit" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Recruit</h2>
          <p className="text-gray-200 text-lg">신입 기수 모집 안내</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <Calendar className="text-yellow-400 mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">지원 마감일</h3>
            <p className="text-gray-200 text-xl">{recruitData.deadline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <Users className="text-yellow-400 mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">1학년 모집</h3>
            <p className="text-gray-200 text-xl">{recruitData.freshman}명</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <Users className="text-yellow-400 mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">2학년 모집</h3>
            <p className="text-gray-200 text-xl">{recruitData.sophomore}명</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-200 mb-6">질문은 오픈채팅방으로 남겨주시면 됩니다.</p>
          <a
            href={recruitData.kakaotalk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            <Send size={20} />
            오픈채팅방 참가하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
