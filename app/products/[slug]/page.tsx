'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Package, Globe, Calendar, MapPin, Truck } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/button';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { t, locale } = useI18n();
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-slate-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-[#1976D2]">{t('Home', 'الرئيسية')}</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#1976D2]">{t('Products', 'المنتجات')}</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{t(product.name, product.nameAr)}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-arka-lg mb-4">
                    <img
                      src={product.image}
                      alt={t(product.name, product.nameAr)}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-[#1976D2]">
                      {t(product.category, product.categoryAr)}
                    </div>
              </div>
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.slice(0, 3).map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-arka cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={img} alt={`${t(product.name, product.nameAr)} ${i + 1}`} className="w-full h-24 object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold mb-3 font-display">
                {t(product.name, product.nameAr)}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t(product.description, product.descriptionAr)}
              </p>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass rounded-xl p-4 shadow-arka">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4" />
                    {t('Origin', 'المنشأ')}
                  </div>
                  <div className="font-bold">{t(product.origin, product.originAr)}</div>
                </div>
                <div className="glass rounded-xl p-4 shadow-arka">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    {t('Availability', 'التوفر')}
                  </div>
                  <div className="font-bold text-sm">{t(product.availability, product.availabilityAr)}</div>
                </div>
                <div className="glass rounded-xl p-4 shadow-arka">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Package className="h-4 w-4" />
                    {t('Packaging', 'التعبئة')}
                  </div>
                  <div className="font-bold text-sm">{t(product.packaging, product.packagingAr)}</div>
                </div>
                <div className="glass rounded-xl p-4 shadow-arka">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Globe className="h-4 w-4" />
                    {t('Category', 'الفئة')}
                  </div>
                  <div className="font-bold text-sm">{t(product.category, product.categoryAr)}</div>
                </div>
              </div>

              {/* Specifications */}
              <div className="glass rounded-2xl p-6 shadow-arka mb-8">
                <h3 className="text-lg font-bold mb-4">{t('Specifications', 'المواصفات')}</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0">
                      <span className="text-muted-foreground text-sm">{spec.label}</span>
                      <span className="font-medium text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export markets */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-[#1976D2]" />
                  {t('Export Markets', 'أسواق التصدير')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.exportMarkets.map((market, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-primary/10 text-[#1976D2] text-sm font-medium">
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white border-0 shadow-arka w-full sm:w-auto"
              >
                <Link href="/contact">{t('Request a Quote', 'طلب عرض سعر')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-display text-center">
              {t('Related Products', 'منتجات ذات صلة')}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl overflow-hidden shadow-arka hover:shadow-arka-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={t(p.name, p.nameAr)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1 line-clamp-1">{t(p.name, p.nameAr)}</h3>
                    <Link
                      href={`/products/${p.slug}`}
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
    </>
  );
}
