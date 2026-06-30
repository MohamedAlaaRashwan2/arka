import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Divisions — ARKA',
  description: 'Explore ARKA\'s three specialized divisions: ARKA Foods, ARKA Trade, and ARKA Farmer — each dedicated to excellence in food export, international trade, and agricultural production.',
};

export default function DivisionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
