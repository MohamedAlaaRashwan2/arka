'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { COMPANY_INFO } from '@/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t('Message sent successfully! We will get back to you soon.', 'تم إرسال الرسالة بنجاح! سنعود إليك قريباً.'));
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        eyebrowAr="اتصل بنا"
        title="Let's Connect"
        titleAr="لنتواصل"
        description="Have a question or interested in doing business with ARKA? We are here to help. Reach out and our team will respond within 24 hours."
        descriptionAr="هل لديك سؤال أو مهتم بالعمل مع أركا؟ نحن هنا للمساعدة. تواصل معنا وسيرد فريقنا خلال 24 ساعة."
        image="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80"
      />

      {/* Contact info cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, label: t('Phone', 'الهاتف'), value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
              { icon: Mail, label: t('Email', 'البريد'), value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
              { icon: MessageCircle, label: t('WhatsApp', 'واتساب'), value: COMPANY_INFO.whatsapp, href: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s/g, '')}` },
              { icon: Clock, label: t('Working Hours', 'ساعات العمل'), value: t(COMPANY_INFO.workingHours, COMPANY_INFO.workingHoursAr), href: null },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href || undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl p-6 shadow-arka hover:shadow-arka-lg transition-all text-center block"
              >
                <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-to-br from-[#1976D2] to-[#0D47A1] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground" dir="ltr">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Form and map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="Send a Message"
                eyebrowAr="أرسل رسالة"
                title="Get in Touch"
                titleAr="تواصل معنا"
                description="Fill out the form below and we will get back to you as soon as possible."
                descriptionAr="املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن."
                center={false}
              />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t('Full Name', 'الاسم الكامل')}</label>
                    <Input required placeholder={t('Your name', 'اسمك')} className="h-12 rounded-xl glass border-0 shadow-arka" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t('Email', 'البريد الإلكتروني')}</label>
                    <Input required type="email" placeholder={t('Your email', 'بريدك الإلكتروني')} className="h-12 rounded-xl glass border-0 shadow-arka" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t('Phone', 'الهاتف')}</label>
                    <Input type="tel" placeholder={t('Your phone', 'هاتفك')} className="h-12 rounded-xl glass border-0 shadow-arka" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t('Company', 'الشركة')}</label>
                    <Input placeholder={t('Company name', 'اسم الشركة')} className="h-12 rounded-xl glass border-0 shadow-arka" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t('Subject', 'الموضوع')}</label>
                  <Input required placeholder={t('Subject', 'الموضوع')} className="h-12 rounded-xl glass border-0 shadow-arka" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t('Message', 'الرسالة')}</label>
                  <Textarea required placeholder={t('Your message...', 'رسالتك...')} rows={5} className="rounded-xl glass border-0 shadow-arka resize-none" />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white border-0 shadow-arka text-base"
                >
                  {loading ? t('Sending...', 'جاري الإرسال...') : t('Send Message', 'إرسال الرسالة')}
                  {!loading && <Send className="h-4 w-4 mr-2" />}
                </Button>
              </form>
            </motion.div>

            {/* Map and info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass rounded-3xl overflow-hidden shadow-arka-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.776930446481!2d30.667502900000002!3d30.892900700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f6397cbd55f58f%3A0xa5fc7e6a04ca7b5c!2z2KvZhNin2KzYqSDYp9mE2KjYsdmD2KfYqiDZhNmE2KrYqNix2YrYryDZiCDYp9mE2KrYrNmF2YrYryDZiCDYp9mE2KfYs9iq2YrYsdin2K8g2Ygg2KfZhNiq2LXYr9mK2LE!5e0!3m2!1sen!2seg!4v1782995791583!5m2!1sen!2seg"
                  className="w-full h-[400px] border-0"
                  loading="lazy"
                  title="ARKA Location"
                />
              </div>

              <div className="glass rounded-2xl p-6 shadow-arka">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#1976D2]" />
                  {t('Our Address', 'عنواننا')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {t(COMPANY_INFO.address, COMPANY_INFO.addressAr)}
                </p>

                <h3 className="font-bold text-lg mb-4">{t('Follow Us', 'تابعنا')}</h3>
                <div className="flex gap-3">
                  <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-[#1976D2] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-[#1976D2] transition-colors" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-[#1976D2] transition-colors" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-[#1976D2] transition-colors" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
