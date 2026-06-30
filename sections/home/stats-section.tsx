'use client';

import { motion } from 'framer-motion';
import { Statistics } from '@/components/ui/statistics';
export function StatsSection() {
  return (
    <section className="relative -mt-20 z-20 mb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}          
          transition={{ delay: 0, duration: 0.6 }}
          className="glass rounded-3xl shadow-arka-lg p-8 lg:p-12"
        >
          <Statistics />
        </motion.div>
      </div>
    </section>
  );
}
