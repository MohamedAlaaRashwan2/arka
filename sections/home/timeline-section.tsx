'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { TIMELINE } from '@/constants';

export function TimelineSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          eyebrowAr="رحلتنا"
          title="A Legacy of Growth"
          titleAr="إرث من النمو"
          description="From our foundation to global expansion, every milestone reflects our commitment to excellence."
          descriptionAr="من تأسيسنا إلى التوسع العالمي، كل محطة تعكس التزامنا بالتميز."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1976D2] to-[#64B5F6] md:-translate-x-1/2" />

          {TIMELINE.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1976D2] ring-4 ring-white dark:ring-slate-900 md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="glass rounded-2xl p-6 shadow-arka hover:shadow-arka-lg transition-shadow">
                  <div className="text-2xl font-bold text-gradient mb-2 font-display">{event.year}</div>
                  <h3 className="text-lg font-bold mb-2">{t(event.title, event.titleAr)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(event.description, event.descriptionAr)}
                  </p>
                </div>
              </div>
              {/* Spacer for other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
