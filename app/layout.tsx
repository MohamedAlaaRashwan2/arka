import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProvider } from '@/hooks/use-i18n';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { LoadingScreen } from '@/components/layout/loading-screen';
import { CustomCursor } from '@/components/layout/custom-cursor';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://arka-export.com'),
  title: {
    default: 'ARKA | Import & Export — Connecting Egypt to the World',
    template: '%s | ARKA',
  },
  description:
    'ARKA is a premium international Import & Export company with three divisions: ARKA Foods, ARKA Trade, and ARKA Farmer. Connecting Egypt to the world through quality agricultural products.',
  keywords: ['ARKA', 'import export', 'Egypt export', 'food export', 'agriculture', 'frozen foods', 'fresh produce', 'international trade'],
  authors: [{ name: 'ARKA' }],
  openGraph: {
    title: 'ARKA | Connecting Egypt to the World',
    description: 'Premium international Import & Export company with three divisions: Foods, Trade, and Farmer.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ARKA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARKA | Connecting Egypt to the World',
    description: 'Premium international Import & Export company.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ARKA Import & Export',
      description: 'Premium international Import & Export company connecting Egypt to the world.',
      url: 'https://arka-export.com',
      logo: 'https://arka-export.com/logo.png',
      sameAs: [
        'https://linkedin.com/company/arka-export',
        'https://facebook.com/arkaexport',
        'https://instagram.com/arkaexport',
        'https://twitter.com/arkaexport',
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider>
            <LoadingScreen />
            <CustomCursor />
            <ScrollProgress />
            <div className="relative min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
            <Toaster position="top-center" />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
