'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck, Lightbulb, Leaf, Handshake, Award, Quote } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { useI18n } from '@/hooks/use-i18n';
import { STATS, CORE_VALUES, TIMELINE, CERTIFICATES } from '@/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, Eye, Heart, ShieldCheck, Lightbulb, Leaf, Handshake, Award,
};

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow="About Us"
        eyebrowAr="من نحن"
        title="The Story of ARKA"
        titleAr="قصة أركا"
        description="From a local Egyptian exporter to an international trade company serving 10+ countries across five continents."
        descriptionAr="من مصدر مصري محلي إلى شركة تجارة دولية تخدم أكثر من 10 دول عبر خمس قارات."
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1920&q=80"
      />

      {/* Company History */}
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
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1000&q=80"
                alt="ARKA History"
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
                eyebrow="Our History"
                eyebrowAr="تاريخنا"
                title="Building a Legacy Since 2015"
                titleAr="بناء إرث منذ 2015"
                center={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    'ARKA was founded in 2015 in Cairo, Egypt, with a simple yet powerful vision: to connect the rich agricultural heritage of Egypt with markets around the world. What began as a small export operation has grown into a multi-division international trade company.',
                    'تأسست أركا عام 2015 في القاهرة، مصر، برؤية بسيطة لكن قوية: ربط التراث الزراعي الغني لمصر بالأسواق حول العالم. ما بدأ كعملية تصدير صغيرة نمت إلى شركة تجارة دولية متعددة الأقسام.'
                  )}
                </p>
                <p>
                  {t(
                    'Over the years, we have expanded our operations to include three specialized divisions — ARKA Foods, ARKA Trade, and ARKA Farmer — each serving a unique segment of the agricultural and trade ecosystem. Today, we serve clients in over 10 countries with 100+ business partners.',
                    'على مر السنين، توسعنا عملياتنا لتشمل ثلاثة أقسام متخصصة — أركا للأغذية وأركا للتجارة وأركا للمزارع — كل منها يخدم قطاعاً فريداً من النظام البيئي الزراعي والتجاري. اليوم، نخدم عملاء في أكثر من 10 دول مع أكثر من 100 شريك تجاري.'
                  )}
                </p>
                <p>
                  {t(
                    'Our success is built on a foundation of quality, integrity, and innovation. We work directly with Egyptian farmers, invest in modern processing facilities, and maintain rigorous quality control standards to ensure every product that leaves our facilities meets the highest international specifications.',
                    'يستند نجاحنا إلى أساس من الجودة والنزاهة والابتكار. نعمل مباشرة مع المزارعين المصريين، ونستثمر في مرافق المعالجة الحديثة، ونحافظ على معايير صارمة لمراقبة الجودة لضمان أن كل منتج يغادر مرافقنا يلبي أعلى المواصفات الدولية.'
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass rounded-3xl p-8 lg:p-12 shadow-arka-lg relative"
          >
            <Quote className="absolute top-8 right-8 h-16 w-16 text-[#A7D8F5]/40" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white text-3xl font-bold font-display">
                  AH
                </div>
                <div className="mt-4 text-center">
                  <div className="font-bold">{t('Ahmed Hassan', 'أحمد حسن')}</div>
                  <div className="text-sm text-muted-foreground">{t('CEO & Founder', 'الرئيس التنفيذي والمؤسس')}</div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  {t(
                    '"At ARKA, we believe that quality is not just a standard — it is a promise. A promise to our farmers, our partners, and our clients worldwide. Every product we export carries with it the rich heritage of Egyptian agriculture and our unwavering commitment to excellence."',
                    '"في أركا، نؤمن أن الجودة ليست مجرد معيار — بل وعد. وعد لمزارعينا وشركائنا وعملائنا حول العالم. كل منتج نصدره يحمل معه التراث الغني للزراعة المصرية والتزامنا الراسخ بالتميز."'
                  )}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t(
                    '"Our journey from a local exporter to an international trade company has been driven by one principle: building trust through quality. We invite you to join us in connecting Egypt to the world."',
                    '"رحلتنا من مصدر محلي إلى شركة تجارة دولية كانت مدفوعة بمبدأ واحد: بناء الثقة من خلال الجودة. ندعوك للانضمام إلينا في ربط مصر بالعالم."'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Achievements"
            eyebrowAr="إنجازاتنا"
            title="Numbers That Speak"
            titleAr="أرقام تتحدث"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <AnimatedCounter key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 lg:p-10 shadow-arka"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{t('Our Mission', 'مهمتنا')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t(
                  'To deliver premium Egyptian agricultural products to global markets while maintaining the highest standards of quality, sustainability, and customer satisfaction. We strive to build lasting partnerships that benefit farmers, clients, and communities alike.',
                  'تقديم منتجات زراعية مصرية ممتازة للأسواق العالمية مع الحفاظ على أعلى معايير الجودة والاستدامة ورضا العملاء. نسعى لبناء شراكات دائمة تفيد المزارعين والعملاء والمجتمعات على حد سواء.'
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-3xl p-8 lg:p-10 shadow-arka"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#64B5F6] to-[#1976D2] flex items-center justify-center text-white mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{t('Our Vision', 'رؤيتنا')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t(
                  'To be the leading bridge between Egyptian agriculture and the world, recognized globally for excellence, innovation, and sustainable trade practices. We envision a future where Egyptian products are synonymous with quality in every market we serve.',
                  'أن نكون الجسر الرائد بين الزراعة المصرية والعالم، معترف بنا عالمياً بالتميز والابتكار وممارسات التجارة المستدامة. نتخيل مستقبلاً تكون فيه المنتجات المصرية مرادفاً للجودة في كل سوق نخدمه.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            eyebrowAr="قيمنا"
            title="What We Stand For"
            titleAr="ما نؤمن به"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value, i) => {
              const Icon = iconMap[value.icon] || Award;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl p-6 shadow-arka hover:shadow-arka-lg transition-shadow"
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t(value.title, value.titleAr)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(value.description, value.descriptionAr)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            eyebrowAr="رحلتنا"
            title="Milestones in Our Growth"
            titleAr="محطات في نمونا"
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1976D2] to-[#64B5F6] md:-translate-x-1/2" />
            {TIMELINE.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1976D2] ring-4 ring-white dark:ring-slate-900 md:-translate-x-1/2 z-10" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 shadow-arka hover:shadow-arka-lg transition-shadow">
                    <div className="text-2xl font-bold text-gradient mb-2 font-display">{event.year}</div>
                    <h3 className="text-lg font-bold mb-2">{t(event.title, event.titleAr)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(event.description, event.descriptionAr)}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Certifications"
            eyebrowAr="الشهادات"
            title="Our International Certifications"
            titleAr="شهاداتنا الدولية"
            description="Quality you can trust, backed by globally recognized certifications."
            descriptionAr="جودة يمكنك الوثوق بها، مدعومة بشهادات معترف بها عالمياً."
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
