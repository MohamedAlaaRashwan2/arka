import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production — ARKA',
  description: 'Discover ARKA\'s comprehensive production process — from farming and harvesting to processing, quality control, packaging, cold storage, and export. Quality you can trust.',
};

export default function ProductionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
