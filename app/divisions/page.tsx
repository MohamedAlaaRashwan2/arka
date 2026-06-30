'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wheat, Ship, Sprout } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { useI18n } from '@/hooks/use-i18n';
import { DIVISIONS } from '@/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat, Ship, Sprout,
};

export default function DivisionsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        eyebrowAr="أقسامنا"
        title="Three Divisions, One Vision"
        titleAr="ثلاثة أقسام، رؤية واحدة"
        description="ARKA operates through three specialized divisions, each dedicated to excellence in its field."
        descriptionAr="تعمل أركا من خلال ثلاثة أقسام متخصصة، كل منها مكرس للتميز في مجاله."
        image="https://images.unsplash.com/photo-1500382017468-9049fed74794?w=1920&q=80"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {DIVISIONS.map((division, i) => {
              const Icon = iconMap[division.icon] || Wheat;
              return (
                <motion.div
                  key={division.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-arka-lg">
                      <img
                        src={division.image}
                        alt={t(division.name, division.nameAr)}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/40 to-transparent" />
                    </div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white shadow-arka-lg"
                    >
                      <Icon className="h-12 w-12" />
                    </motion.div>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[#1976D2] text-sm font-medium mb-4">
                      {t(`Division ${i + 1}`, `القسم ${i + 1}`)}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3 font-display">
                      {t(division.name, division.nameAr)}
                    </h2>
                    <p className="text-lg text-[#1976D2] font-medium mb-4">
                      {t(division.tagline, division.taglineAr)}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t(division.description, division.descriptionAr)}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {division.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm">
                          <span className="h-2 w-2 rounded-full bg-[#1976D2]" />
                          {t(feature, division.featuresAr[fi])}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/divisions/${division.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white font-medium shadow-arka hover:shadow-arka-lg transition-shadow"
                    >
                      {t('Explore Division', 'استكشف القسم')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
