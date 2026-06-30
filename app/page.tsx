import { HeroSection } from '@/sections/home/hero-section';
import { StatsSection } from '@/sections/home/stats-section';
import { AboutSection } from '@/sections/home/about-section';
import { DivisionsSection } from '@/sections/home/divisions-section';
import { FeaturedProductsSection } from '@/sections/home/featured-products-section';
import { TimelineSection } from '@/sections/home/timeline-section';
import { CertificatesSection } from '@/sections/home/certificates-section';
import { GlobalPresenceSection } from '@/sections/home/global-presence-section';
import { PartnersSection } from '@/sections/home/partners-section';
import { FaqSection } from '@/sections/home/faq-section';
import { CtaSection } from '@/sections/home/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DivisionsSection />
      <FeaturedProductsSection />
      <TimelineSection />
      <CertificatesSection />
      <GlobalPresenceSection />
      <PartnersSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
