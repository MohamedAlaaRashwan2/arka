import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — ARKA',
  description: 'Learn about ARKA — a premium international Import & Export company connecting Egypt to the world through quality agricultural products since 2015.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
