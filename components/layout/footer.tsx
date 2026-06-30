'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { NAV_ITEMS, DIVISIONS, COMPANY_INFO } from '@/constants';
import { useI18n } from '@/hooks/use-i18n';

export function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer className="relative bg-gradient-to-br from-[#0D47A1] via-[#0D47A1] to-[#1976D2] text-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#64B5F6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A7D8F5]/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company description */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold tracking-widest font-display mb-4">ARKA</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t(
                'A premium international Import & Export company connecting Egypt to the world through quality agricultural products, trade, and logistics.',
                'شركة عالمية ممتازة للاستيراد والتصدير تربط مصر بالعالم من خلال منتجات زراعية عالية الجودة والتجارة واللوجستيات.'
              )}
            </p>
            <div className="flex gap-3">
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">{t('Quick Links', 'روابط سريعة')}</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {t(item.label, item.labelAr)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-lg font-semibold mb-5">{t('Our Divisions', 'أقسامنا')}</h4>
            <ul className="space-y-3">
              {DIVISIONS.map((div) => (
                <li key={div.slug}>
                  <Link href={`/divisions/${div.slug}`} className="text-white/70 hover:text-white text-sm transition-colors">
                    {t(div.name, div.nameAr)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t('All Products', 'كل المنتجات')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5">{t('Contact', 'اتصل بنا')}</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{t(COMPANY_INFO.address, COMPANY_INFO.addressAr)}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span dir="ltr">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{t(COMPANY_INFO.workingHours, COMPANY_INFO.workingHoursAr)}</span>
              </li>
            </ul>
            <div>
              <p className="text-sm text-white/70 mb-2">{t('Newsletter', 'النشرة الإخبارية')}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('Your email', 'بريدك الإلكتروني')}
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="px-3 py-2 rounded-lg bg-white text-[#0D47A1] hover:bg-white/90 transition-colors" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/about" className="hover:text-white transition-colors">{t('Privacy Policy', 'سياسة الخصوصية')}</Link>
            <Link href="/about" className="hover:text-white transition-colors">{t('Terms of Service', 'شروط الخدمة')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
