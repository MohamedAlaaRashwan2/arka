import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights — ARKA',
  description: 'Stay informed with the latest trends, tips, and insights in agriculture, food industry, and international trade from ARKA\'s experts.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
