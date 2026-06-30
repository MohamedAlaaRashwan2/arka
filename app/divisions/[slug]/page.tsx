'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Wheat, Ship, Sprout } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { DIVISIONS, PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat, Ship, Sprout,
};

export default function DivisionDetailPage({ params }: { params: { slug: string } }) {
  const { t, locale } = useI18n();
  const division = DIVISIONS.find((d) => d.slug === params.slug);

  if (!division) return notFound();

  const Icon = iconMap[division.icon] || Wheat;
  const divisionProducts = PRODUCTS.filter((p) => p.division === division.slug);

  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        eyebrowAr="أقسامنا"
        title={division.name}
        titleAr={division.nameAr}
        description={division.tagline}
        descriptionAr={division.taglineAr}
        image={division.image}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white mb-6 shadow-arka">
                <Icon className="h-10 w-10" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-display">
                {t('About ' + division.name, 'عن ' + division.nameAr)}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {t(division.description, division.descriptionAr)}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {division.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-3 glass rounded-xl p-4 shadow-arka">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-[#1976D2]">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">{t(feature, division.featuresAr[fi])}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={division.image}
                alt={t(division.name, division.nameAr)}
                className="rounded-3xl shadow-arka-lg w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products in this division */}
      {divisionProducts.length > 0 && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading
              eyebrow="Our Products"
              eyebrowAr="منتجاتنا"
              title={`Products from ${division.name}`}
              titleAr={`منتجات ${division.nameAr}`}
              description="Explore our range of quality products in this division."
              descriptionAr="استكشف مجموعتنا من المنتجات عالية الجودة في هذا القسم."
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {divisionProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl overflow-hidden shadow-arka hover:shadow-arka-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={t(product.name, product.nameAr)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1976D2]">
                      {t(product.category, product.categoryAr)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1 line-clamp-1">{t(product.name, product.nameAr)}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {t(product.description, product.descriptionAr)}
                    </p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#1976D2] hover:gap-2 transition-all"
                    >
                      {t('View Details', 'عرض التفاصيل')}
                      {locale === 'ar' ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D47A1] via-[#1976D2] to-[#64B5F6] p-12 lg:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-display">
                {t(`Interested in ${division.name}?`, `مهتم بـ ${division.nameAr}؟`)}
              </h2>
              <p className="text-white/80 text-lg mb-10">
                {t('Contact us today to learn more about our products and services.', 'اتصل بنا اليوم لمعرفة المزيد عن منتجاتنا وخدماتنا.')}
              </p>
              <Button asChild size="lg" className="bg-white text-[#0D47A1] hover:bg-white/90 text-base px-8 h-14 shadow-lg">
                <Link href="/contact">{t('Get a Quote', 'احصل على عرض سعر')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
