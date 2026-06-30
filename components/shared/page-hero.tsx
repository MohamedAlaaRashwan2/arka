'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/hooks/use-i18n';

interface PageHeroProps {
  eyebrow?: string;
  eyebrowAr?: string;
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
  image: string;
}

export function PageHero({ eyebrow, eyebrowAr, title, titleAr, description, descriptionAr, image }: PageHeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={t(title, titleAr)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/90 via-[#1976D2]/85 to-[#0D47A1]/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white text-sm font-medium mb-4"
          >
            {t(eyebrow, eyebrowAr || eyebrow)}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-4"
        >
          {t(title, titleAr)}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            {t(description, descriptionAr || description)}
          </motion.p>
        )}
      </div>
    </section>
  );
}
