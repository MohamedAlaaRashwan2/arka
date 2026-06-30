'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/constants';

export function CtaSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D47A1] via-[#1976D2] to-[#64B5F6] p-12 lg:p-20 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A7D8F5]/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-display">
              {t('Ready to Start Trading with ARKA?', 'هل أنت مستعد للبدء بالتجارة مع أركا؟')}
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              {t(
                'Whether you are looking to import premium Egyptian products or explore export opportunities, our team is ready to help you every step of the way.',
                'سواء كنت تبحث عن استيراد منتجات مصرية ممتازة أو استكشاف فرص التصدير، فريقنا جاهز لمساعدتك في كل خطوة.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0D47A1] hover:bg-white/90 text-base px-8 h-14 shadow-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  {t('Get a Quote', 'احصل على عرض سعر')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-white hover:text-[#A7D8F5] transition-colors text-base font-medium"
              >
                <Phone className="h-5 w-5" />
                <span dir="ltr">{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
