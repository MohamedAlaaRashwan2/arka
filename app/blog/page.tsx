'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, ArrowLeft, X, Calendar, User } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { useI18n } from '@/hooks/use-i18n';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_CATEGORIES_AR } from '@/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function BlogPage() {
  const { t, locale } = useI18n();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = locale === 'ar' ? BLOG_CATEGORIES_AR : BLOG_CATEGORIES;

  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const title = locale === 'ar' ? post.titleAr : post.title;
      const excerpt = locale === 'ar' ? post.excerptAr : post.excerpt;
      const matchesSearch =
        title.toLowerCase().includes(search.toLowerCase()) ||
        excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || post.category === category || post.categoryAr === category;
      return matchesSearch && matchesCategory && !post.featured;
    });
  }, [search, category, locale]);

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        eyebrowAr="المدونة والرؤى"
        title="Insights from the World of Trade"
        titleAr="رؤى من عالم التجارة"
        description="Stay informed with the latest trends, tips, and insights in agriculture, food industry, and international trade."
        descriptionAr="ابقَ على اطلاع بأحدث الاتجاهات والنصائح والرؤى في الزراعة وصناعة الأغذية والتجارة الدولية."
        image="https://images.unsplash.com/photo-1450101499163-884d2fca9d9d?w=1920&q=80"
      />

      {/* Featured Article */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/blog/${featured.slug}`}>
              <div className="group grid lg:grid-cols-2 gap-8 glass rounded-3xl overflow-hidden shadow-arka-lg hover:shadow-arka transition-shadow">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={t(featured.title, featured.titleAr)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white text-sm font-medium">
                    {t('Featured', 'مميز')}
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-[#1976D2] font-medium">
                      {t(featured.category, featured.categoryAr)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featured.readingTime} {t('min read', 'دقيقة قراءة')}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-display group-hover:text-[#1976D2] transition-colors">
                    {t(featured.title, featured.titleAr)}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(featured.excerpt, featured.excerptAr)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white text-sm font-bold">
                        {t(featured.author, featured.authorAr).charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{t(featured.author, featured.authorAr)}</div>
                        <div className="text-xs text-muted-foreground">{featured.date}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1976D2] group-hover:gap-2 transition-all">
                      {t('Read More', 'اقرأ المزيد')}
                      {locale === 'ar' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('Search articles...', 'ابحث عن المقالات...')}
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
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = category === cat ||
                (category === 'All' && cat === 'All') ||
                (locale === 'ar' ? BLOG_CATEGORIES_AR[BLOG_CATEGORIES.indexOf(category)] === cat : BLOG_CATEGORIES[BLOG_CATEGORIES_AR.indexOf(category)] === cat);
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
      </section>

      {/* Articles grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-6 text-sm text-muted-foreground">
            {t(`${filtered.length} articles found`, `تم العثور على ${filtered.length} مقال`)}
          </div>
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group glass rounded-2xl overflow-hidden shadow-arka hover:shadow-arka-lg transition-all h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={t(post.title, post.titleAr)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#1976D2]">
                          {t(post.category, post.categoryAr)}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#1976D2] transition-colors">
                          {t(post.title, post.titleAr)}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {t(post.excerpt, post.excerptAr)}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {t(post.author, post.authorAr)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} {t('min', 'دقيقة')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">{t('No articles found.', 'لم يتم العثور على مقالات.')}</p>
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
