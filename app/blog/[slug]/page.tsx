'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Calendar, User, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { BLOG_POSTS } from '@/constants';
import { Button } from '@/components/ui/button';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { t, locale } = useI18n();
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-slate-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-[#1976D2]">{t('Home', 'الرئيسية')}</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1976D2]">{t('Blog', 'المدونة')}</Link>
            <span>/</span>
            <span className="text-foreground font-medium line-clamp-1">{t(post.title, post.titleAr)}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-[#1976D2] font-medium">
                {t(post.category, post.categoryAr)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} {t('min read', 'دقيقة قراءة')}
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 font-display leading-tight">
              {t(post.title, post.titleAr)}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white text-sm font-bold">
                  {t(post.author, post.authorAr).charAt(0)}
                </div>
                <span className="font-medium text-foreground">{t(post.author, post.authorAr)}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-arka-lg"
          >
            <img
              src={post.image}
              alt={t(post.title, post.titleAr)}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t(post.excerpt, post.excerptAr)}
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  'The global trade landscape is constantly evolving, and staying ahead requires both strategic thinking and operational excellence. In this article, we explore the key factors that contribute to success in international agricultural trade.',
                  'يتطور مشهد التجارة العالمية باستمرار، والبقاء في المقدمة يتطلب تفكيراً استراتيجياً وتميزاً تشغيلياً. في هذه المقالة، نستكشف العوامل الرئيسية التي تساهم في النجاح في التجارة الزراعية الدولية.'
                )}
              </p>
              <p>
                {t(
                  'Quality control remains the cornerstone of any successful export operation. From the moment products are harvested to the time they reach their destination, every step must be carefully monitored and documented. This not only ensures compliance with international standards but also builds trust with clients and partners.',
                  'تبقى مراقبة الجودة الركيزة الأساسية لأي عملية تصدير ناجحة. من لحظة حصاد المنتجات إلى وقت وصولها إلى وجهتها، يجب مراقبة كل خطوة وتوثيقها بعناية. هذا لا يضمن الامتثال للمعايير الدولية فحسب، بل يبني الثقة مع العملاء والشركاء.'
                )}
              </p>
              <p>
                {t(
                  'Understanding market dynamics is equally important. Different regions have different preferences, regulations, and seasonal demands. Successful exporters invest time in researching their target markets and adapting their strategies accordingly.',
                  'فهم ديناميكيات السوق مهم بنفس القدر. للمناطق المختلفة تفضيلات ولوائح ومواسم طلب مختلفة. يستثمر المصدرون الناجحون الوقت في البحث عن أسواقهم المستهدفة وتكييف استراتيجياتهم وفقاً لذلك.'
                )}
              </p>
              <p>
                {t(
                  'At ARKA, we combine deep market knowledge with rigorous quality standards to deliver products that meet the exacting requirements of international buyers. Our three divisions work in harmony to ensure that every product leaving our facilities represents the best of Egyptian agriculture.',
                  'في أركا، نجمع بين المعرفة العميقة بالسوق ومعايير الجودة الصارمة لتقديم منتجات تلبي المتطلبات الدقيقة للمشترين الدوليين. تعمل أقسامنا الثلاثة بانسجام لضمان أن كل منتج يغادر مرافقنا يمثل أفضل ما في الزراعة المصرية.'
                )}
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/5 text-[#1976D2] text-sm font-medium">
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-display text-center">
              {t('Related Articles', 'مقالات ذات صلة')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/blog/${p.slug}`}>
                    <div className="group glass rounded-2xl overflow-hidden shadow-arka hover:shadow-arka-lg transition-all h-full flex flex-col">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={p.image}
                          alt={t(p.title, p.titleAr)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <span className="text-xs text-[#1976D2] font-medium mb-2">{t(p.category, p.categoryAr)}</span>
                        <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-[#1976D2] transition-colors">
                          {t(p.title, p.titleAr)}
                        </h3>
                        <span className="text-xs text-muted-foreground mt-auto pt-3">
                          {p.date} · {p.readingTime} {t('min', 'دقيقة')}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
