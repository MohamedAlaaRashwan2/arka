'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { useI18n } from '@/hooks/use-i18n';
import { FAQS } from '@/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          eyebrowAr="الأسئلة الشائعة"
          title="Frequently Asked Questions"
          titleAr="الأسئلة الشائعة"
          description="Find answers to common questions about ARKA's products, services, and partnerships."
          descriptionAr="اعثر على إجابات للأسئلة الشائعة حول منتجات وخدمات وشراكات أركا."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 shadow-arka border-0"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {t(faq.question, faq.questionAr)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(faq.answer, faq.answerAr)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
