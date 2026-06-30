'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/button';

export function FeaturedProductsSection() {
  const { t } = useI18n();
  const featured = PRODUCTS.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          eyebrowAr="منتجاتنا"
          title="Premium Products for Global Markets"
          titleAr="منتجات ممتازة للأسواق العالمية"
          description="Explore our diverse range of 20+ agricultural and food products, carefully sourced and processed for international export."
          descriptionAr="استكشف مجموععتنا المتنوعة من أكثر من 20 منتجاً زراعياً وغذائياً، مصدرها ومعالج بعناية للتصدير الدولي."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
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
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white border-0 shadow-arka"
          >
            <Link href="/products" className="flex items-center gap-2">
              {t('View All Products', 'عرض كل المنتجات')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
