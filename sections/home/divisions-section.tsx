'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wheat, Ship, Sprout } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { DIVISIONS } from '@/constants';
import Image from 'next/image';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat, Ship, Sprout,
};

export function DivisionsSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Divisions"
          eyebrowAr="أقسامنا"
          title="Three Divisions, One Vision"
          titleAr="ثلاثة أقسام، رؤية واحدة"
          description="ARKA operates through three specialized divisions, each dedicated to excellence in its field, working together to deliver quality from farm to port."
          descriptionAr="تعمل أركا من خلال ثلاثة أقسام متخصصة، كل منها مكرس للتميز في مجاله، تعمل معاً لتقديم الجودة من المزرعة إلى الميناء."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {DIVISIONS.map((division, i) => {
            const Icon = iconMap[division.icon] || Wheat;
            return (
              <motion.div
                key={division.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden shadow-arka hover:shadow-arka-lg transition-all duration-300"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={division.image}
                    alt={t(division.name, division.nameAr)}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1] via-[#0D47A1]/80 to-[#0D47A1]/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-[480px] flex flex-col justify-end text-white">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-display">{t(division.name, division.nameAr)}</h3>
                  <p className="text-white/70 text-sm mb-4">{t(division.tagline, division.taglineAr)}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3">
                    {t(division.description, division.descriptionAr)}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {division.features.slice(0, 4).map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A7D8F5]" />
                        {t(feature, division.featuresAr[fi])}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/divisions/${division.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#A7D8F5] transition-colors"
                  >
                    {t('Learn More', 'اعرف المزيد')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
