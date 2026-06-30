'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ArrowLeft, SlidersHorizontal, X } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { useI18n } from '@/hooks/use-i18n';
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_CATEGORIES_AR } from '@/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ProductsPage() {
  const { t, locale } = useI18n();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = locale === 'ar' ? PRODUCT_CATEGORIES_AR : PRODUCT_CATEGORIES;

  const filtered = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const name = locale === 'ar' ? product.nameAr : product.name;
      const desc = locale === 'ar' ? product.descriptionAr : product.description;
      const cat = locale === 'ar' ? product.categoryAr : product.category;
      const matchesSearch =
        name.toLowerCase().includes(search.toLowerCase()) ||
        desc.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category || product.categoryAr === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, locale]);

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        eyebrowAr="منتجاتنا"
        title="Premium Products for Global Markets"
        titleAr="منتجات ممتازة للأسواق العالمية"
        description="Explore our diverse range of 20+ agricultural and food products, carefully sourced and processed for international export."
        descriptionAr="استكشف مجموععتنا المتنوعة من أكثر من 20 منتجاً زراعياً وغذائياً، مصدرها ومعالج بعناية للتصدير الدولي."
        image="https://images.unsplash.com/photo-1542838132-25c8eb9396f4?w=1920&q=80"
      />

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Search and filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('Search products...', 'ابحث عن المنتجات...')}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 h-12 rounded-xl glass border-0 shadow-arka"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = category === cat ||
                  (category === 'All' && cat === 'All') ||
                  (locale === 'ar' ? PRODUCT_CATEGORIES_AR[PRODUCT_CATEGORIES.indexOf(category)] === cat : PRODUCT_CATEGORIES[PRODUCT_CATEGORIES_AR.indexOf(category)] === cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all',
                      isActive
                        ? 'bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white shadow-arka'
                        : 'glass text-foreground hover:shadow-arka'
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 text-sm text-muted-foreground">
            {t(`${filtered.length} products found`, `تم العثور على ${filtered.length} منتج`)}
          </div>

          {/* Products grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
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
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {t(product.description, product.descriptionAr)}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 rounded-md bg-primary/5">{t('Origin:', 'المنشأ:')} {t(product.origin, product.originAr)}</span>
                    </div>
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
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">{t('No products found. Try adjusting your search or filters.', 'لم يتم العثور على منتجات. حاول تعديل البحث أو المرشحات.')}</p>
              <Button
                onClick={() => { setSearch(''); setCategory('All'); }}
                className="mt-4 bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white border-0"
              >
                {t('Clear Filters', 'مسح المرشحات')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
