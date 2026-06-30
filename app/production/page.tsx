'use client';

import { motion } from 'framer-motion';
import { Sprout, Wheat, Factory, ShieldCheck, Package, Snowflake, Ship, Globe, Award } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { PRODUCTION_STEPS, CERTIFICATES } from '@/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout, Wheat, Factory, ShieldCheck, Package, Snowflake, Ship, Globe,
};

export default function ProductionPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow="Production"
        eyebrowAr="الإنتاج"
        title="From Farm to Port"
        titleAr="من المزرعة إلى الميناء"
        description="Our comprehensive production process ensures every product meets the highest international quality standards, from cultivation to export."
        descriptionAr="عملية الإنتاج الشاملة لدينا تضمن أن كل منتج يلبي أعلى معايير الجودة الدولية، من الزراعة إلى التصدير."
        image="https://images.unsplash.com/photo-1500382017468-9049fed74794?w=1920&q=80"
      />

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            eyebrowAr="عمليتنا"
            title="The ARKA Production Process"
            titleAr="عملية الإنتاج في أركا"
            description="Eight carefully designed steps ensure quality at every stage, from seed to shipment."
            descriptionAr="ثماني خطوات مصممة بعناية تضمن الجودة في كل مرحلة، من البذرة إلى الشحنة."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTION_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || Factory;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-arka hover:shadow-arka-lg transition-all h-full">
                    <div className="absolute inset-0">
                      <img
                        src={step.image}
                        alt={t(step.title, step.titleAr)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1] via-[#0D47A1]/80 to-[#0D47A1]/30" />
                    </div>
                    <div className="relative z-10 p-6 h-[320px] flex flex-col justify-end text-white">
                      <div className="absolute top-6 right-6 h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <span className="text-xl font-bold font-display">{i + 1}</span>
                      </div>
                      <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-display">{t(step.title, step.titleAr)}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {t(step.description, step.descriptionAr)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Step by Step"
            eyebrowAr="خطوة بخطوة"
            title="Our Quality Journey"
            titleAr="رحلة الجودة لدينا"
            description="Every step in our process is designed to maintain quality and freshness from harvest to delivery."
            descriptionAr="كل خطوة في عمليتنا مصممة للحفاظ على الجودة والطزاجة من الحصاد إلى التسليم."
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1976D2] to-[#64B5F6] md:-translate-x-1/2" />
            {PRODUCTION_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || Factory;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1976D2] ring-4 ring-white dark:ring-slate-900 md:-translate-x-1/2 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 shadow-arka hover:shadow-arka-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-bold text-[#1976D2]">{t('Step', 'خطوة')} {i + 1}</div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{t(step.title, step.titleAr)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(step.description, step.descriptionAr)}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=1000&q=80"
                alt="Quality Assurance"
                className="rounded-3xl shadow-arka-lg w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="Quality Assurance"
                eyebrowAr="ضمان الجودة"
                title="Uncompromising Quality Standards"
                titleAr="معايير جودة لا تساوم"
                center={false}
              />
              <div className="space-y-4">
                {[
                  { title: 'Laboratory Testing', titleAr: 'اختبار المختبر', desc: 'Every batch undergoes rigorous testing in our certified laboratories for quality, safety, and compliance.', descAr: 'تخضع كل دفعة لاختبارات صارمة في مختبراتنا المعتمدة للجودة والسلامة والامتثال.' },
                  { title: 'Traceability', titleAr: 'التتبع', desc: 'Full traceability from farm to port, ensuring every product can be tracked through every stage.', descAr: 'تتبع كامل من المزرعة إلى الميناء، يضمن تتبع كل منتج عبر كل مرحلة.' },
                  { title: 'International Standards', titleAr: 'المعايير الدولية', desc: 'Compliance with ISO 22000, HACCP, Global G.A.P., and other international food safety standards.', descAr: 'الامتثال لـ ISO 22000 وHACCP وGlobal G.A.P. ومعايير سلامة الأغذية الدولية الأخرى.' },
                  { title: 'Continuous Monitoring', titleAr: 'مراقبة مستمرة', desc: '24/7 monitoring of temperature, humidity, and storage conditions to maintain product integrity.', descAr: 'مراقبة على مدار الساعة لدرجة الحرارة والرطوبة وظروف التخزين للحفاظ على سلامة المنتج.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t(item.title, item.titleAr)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t(item.desc, item.descAr)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Certifications"
            eyebrowAr="الشهادات"
            title="International Certifications"
            titleAr="شهادات دولية"
            description="Our production facilities and processes are certified by internationally recognized bodies."
            descriptionAr="مرافق وعمليات الإنتاج لدينا معتمدة من هيئات معترف بها دولياً."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group glass rounded-2xl p-6 text-center shadow-arka hover:shadow-arka-lg transition-all"
              >
                <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white mb-4 group-hover:rotate-6 transition-transform">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-sm mb-1">{t(cert.name, cert.nameAr)}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(cert.description, cert.descriptionAr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
