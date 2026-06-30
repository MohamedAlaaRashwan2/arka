import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products — ARKA',
  description: 'Explore ARKA\'s 20+ premium agricultural and food products including rice, sugar, frozen vegetables, fresh produce, olive oil, dates, herbs, and spices — all available for international export.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
