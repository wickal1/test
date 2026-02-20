'use client';

import { motion } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">SEMICOLON</h3>
            <p className="text-gray-300 text-sm">북일고등학교 AI, IT 동아리</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-8 border-t border-black/20 text-center"
        >
          <p className="text-gray-400 text-sm">© 2026 SEMICOLON. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
