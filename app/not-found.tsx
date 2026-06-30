'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1976D2] to-[#64B5F6]" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#A7D8F5]/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl lg:text-9xl font-bold mb-4 font-display">404</h1>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-display">
            {t('Page Not Found', 'الصفحة غير موجودة')}
          </h2>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
            {t(
              'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
              'الصفحة التي تبحث عنها قد تكون قد أُزيلت أو تغير اسمها أو غير متاحة مؤقتاً.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#0D47A1] hover:bg-white/90 text-base px-8 h-14 shadow-lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                {t('Back to Home', 'العودة للرئيسية')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 h-14 backdrop-blur-sm">
              <Link href="/contact" className="flex items-center gap-2">
                {t('Contact Us', 'اتصل بنا')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
