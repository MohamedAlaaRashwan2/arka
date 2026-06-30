import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — ARKA',
  description: 'Get in touch with ARKA. Contact us for import/export inquiries, partnerships, and quotes. We respond within 24 hours.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
