'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck, Lightbulb, Leaf, Handshake, Award } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { CORE_VALUES } from '@/constants';
import Image from 'next/image';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, Eye, Heart, ShieldCheck, Lightbulb, Leaf, Handshake, Award,
};

export function AboutSection() {
  const { t } = useI18n();
  const directions = [
  { x: -60, y: 0 },  // من اليسار
  { x: 0, y: -60 },  // من الأعلى
  { x: 60, y: 0 },   // من اليمين
  { x: -60, y: 0 },  // من اليسار
  { x: 0, y: 60 },   // من الأسفل
  { x: 60, y: 0 },   // من اليمين
];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/50 dark:from-background dark:to-slate-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="About ARKA"
          eyebrowAr="عن أركا"
          title="A Trusted Name in International Trade"
          titleAr="اسم موثوق في التجارة الدولية"
          description="Founded in Egypt, ARKA has grown from a local exporter to an international trade company serving 10+ countries with premium agricultural products."
          descriptionAr="تأسست في مصر، نمت أركا من مصدر محلي إلى شركة تجارة دولية تخدم أكثر من 10 دول بمنتجات زراعية ممتازة."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-arka-lg">
              <Image
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1000&q=80"
                alt="ARKA International Trade"
                width={100}
                height={100}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-arka-lg max-w-[200px] hidden md:block"
            >
              <div className="text-3xl font-bold text-gradient mb-1">10+</div>
              <div className="text-sm text-muted-foreground">{t('Countries Served', 'دول')}</div>
            </motion.div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 shadow-arka">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{t('Our Mission', 'مهمتنا')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'To deliver premium Egyptian agricultural products to global markets while maintaining the highest standards of quality, sustainability, and customer satisfaction.',
                  'تقديم منتجات زراعية مصرية ممتازة للأسواق العالمية مع الحفاظ على أعلى معايير الجودة والاستدامة ورضا العملاء.'
                )}
              </p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-arka">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#64B5F6] to-[#1976D2] flex items-center justify-center text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{t('Our Vision', 'رؤيتنا')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'To be the leading bridge between Egyptian agriculture and the world, recognized globally for excellence, innovation, and sustainable trade practices.',
                  'أن نكون الجسر الرائد بين الزراعة المصرية والعالم، معترف بنا عالمياً بالتميز والابتكار وممارسات التجارة المستدامة.'
                )}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <SectionHeading
          eyebrow="Our Values"
          eyebrowAr="قيمنا"
          title="Core Values That Drive Us"
          titleAr="القيم الأساسية التي تحفزنا"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{CORE_VALUES.map((value, i) => {
  const Icon = iconMap[value.icon] || Award;
  const direction = directions[i % directions.length];

  return (
    <motion.div
      key={i}
      initial={{
        opacity: 0,
        x: direction.x,
        y: direction.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: i * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="group glass rounded-2xl p-6 shadow-arka hover:shadow-arka-lg transition-shadow"
    >
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-lg font-bold mb-2">
        {t(value.title, value.titleAr)}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {t(value.description, value.descriptionAr)}
      </p>
    </motion.div>
  );
})}
        </div>
      </div>
    </section>
  );
}
