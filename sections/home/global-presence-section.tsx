'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';

const REGIONS = [
  { name: 'Europe', nameAr: 'أوروبا', countries: ['Germany', 'France', 'Italy', 'Netherlands', 'UK'] },
  { name: 'Middle East', nameAr: 'الشرق الأوسط', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Jordan'] },
  { name: 'Africa', nameAr: 'أفريقيا', countries: ['Morocco', 'Nigeria', 'Kenya', 'South Africa'] },
  { name: 'Asia', nameAr: 'آسيا', countries: ['China', 'Japan', 'South Korea', 'Singapore'] },
  { name: 'North America', nameAr: 'أمريكا الشمالية', countries: ['USA', 'Canada', 'Mexico'] },
];

export function GlobalPresenceSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1976D2] to-[#64B5F6]" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-434af2c75f5a?w=1920&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Global Reach"
          eyebrowAr="انتشار عالمي"
          title="Our Global Presence"
          titleAr="حضورنا العالمي"
          description="ARKA serves clients across five continents, connecting Egyptian quality with global demand."
          descriptionAr="تخدم أركا العملاء عبر خمس قارات، تربط الجودة المصرية بالطلب العالمي."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {REGIONS.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-dark rounded-2xl p-6 text-white text-center"
            >
              <div className="h-12 w-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">{t(region.name, region.nameAr)}</h3>
              <ul className="space-y-1">
                {region.countries.map((country, ci) => (
                  <li key={ci} className="text-sm text-white/70">{country}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
