'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/90 via-[#1976D2]/80 to-[#0D47A1]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/60 via-transparent to-transparent" />
        <div className="hidden md:flex absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/world.svg"
            alt="World Map"
            height={100}
            width={100}
            className="w-[100%] max-w-dvw opacity-10"
          />
        </div>
      </div>

      {/* Floating decorative elements */}
      {/* <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#A7D8F5]/20 blur-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-[#64B5F6]/20 blur-3xl hidden lg:block"
      /> */}


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          {t('International Import & Export', 'الاستيراد والتصدير الدولي')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6 leading-tight"
        >
          <span className="text-gradient-light">{t('Connecting Egypt', 'نربط مصر')}</span>
          <br />
          <span className="text-gradient-light">{t('to the World', 'بالعالم')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t(
            'ARKA is a premium international Import & Export company with three specialized divisions — Foods, Trade, and Farmer — delivering quality agricultural products to global markets.',
            'أركا شركة عالمية ممتازة للاستيراد والتصدير بثلاثة أقسام متخصصة — الأغذية والتجارة والمزارع — تقدم منتجات زراعية عالية الجودة للأسواق العالمية.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-[#0D47A1] hover:bg-white/90 text-base px-8 h-14 shadow-arka-lg"
          >
            <Link href="/products" className="flex items-center gap-2">
              {t('Explore Products', 'استكشف المنتجات')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 h-14 backdrop-blur-sm"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              {t('Contact Us', 'اتصل بنا')}
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
