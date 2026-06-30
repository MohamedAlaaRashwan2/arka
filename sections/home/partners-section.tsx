'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { PARTNERS } from '@/constants';

export function PartnersSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Partners"
          eyebrowAr="شركاؤنا"
          title="Trusted by Global Leaders"
          titleAr="موثوق من قبل قادة عالميين"
          description="We partner with the world's leading shipping and logistics companies to ensure reliable delivery to every market we serve."
          descriptionAr="نتعاون مع شركات الشحن واللوجستيات الرائدة في العالم لضمان التسليم الموثوق لكل سوق نخدمه."
        />

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-8 lg:gap-12"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-20 w-48 rounded-2xl glass flex items-center justify-center shadow-arka"
              >
                <span className="text-xl font-bold text-muted-foreground hover:text-[#1976D2] transition-colors cursor-default">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
