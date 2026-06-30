'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { CERTIFICATES } from '@/constants';

export function CertificatesSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          eyebrowAr="الشهادات"
          title="Internationally Certified Quality"
          titleAr="جودة معتمدة دولياً"
          description="Our commitment to quality is backed by internationally recognized certifications across food safety, agricultural practices, and trade compliance."
          descriptionAr="التزامنا بالجودة مدعوم بشهادات معترف بها دولياً في سلامة الأغذية والممارسات الزراعية والامتثال التجاري."
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
  );
}
