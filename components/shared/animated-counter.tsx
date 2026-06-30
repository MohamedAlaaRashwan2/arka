'use client';

import { useCountUp } from '@/hooks/use-count-up';
import { useI18n } from '@/hooks/use-i18n';
import type { Stat } from '@/types';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  stat: Stat;
  index: number;
}

export function AnimatedCounter({ stat, index }: AnimatedCounterProps) {
  const { t } = useI18n();
  const count = useCountUp(stat.value, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl lg:text-6xl font-bold text-gradient font-display mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm lg:text-base text-muted-foreground font-medium">
        {t(stat.label, stat.labelAr)}
      </div>
    </motion.div>
  );
}
