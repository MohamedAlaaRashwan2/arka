'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/hooks/use-i18n';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowAr?: string;
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  eyebrowAr,
  title,
  titleAr,
  description,
  descriptionAr,
  center = true,
  light = false,
}: SectionHeadingProps) {
  const { t } = useI18n();

  return (
    <div className={cn('mb-12 lg:mb-16', center && 'text-center mx-auto max-w-3xl')}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4',
            light ? 'bg-white/10 text-white' : 'bg-primary/10 text-[#1976D2]'
          )}
        >
          {t(eyebrow, eyebrowAr || eyebrow)}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          'text-3xl lg:text-5xl font-bold font-display mb-4',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {t(title, titleAr)}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            'text-base lg:text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {t(description, descriptionAr || description)}
        </motion.p>
      )}
    </div>
  );
}
