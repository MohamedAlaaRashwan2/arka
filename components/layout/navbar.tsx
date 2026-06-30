'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NAV_ITEMS } from '@/constants';
import { useI18n } from '@/hooks/use-i18n';
import { useScrolled } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(50);
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const { theme, setTheme } = useTheme();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass shadow-lg py-2'
            : 'bg-transparent py-4'
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="ARKA Logo"
                width={100}
                height={100}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                  scrolled
                    ? isActive(item.href)
                      ? 'text-[#1976D2]'
                      : 'text-foreground hover:text-[#1976D2]'
                    : isActive(item.href)
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                )}
              >
                {t(item.label, item.labelAr)}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1976D2] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language switch */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className={cn(
                'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground hover:bg-accent'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              {locale === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'p-2 rounded-lg transition-colors',
                scrolled
                  ? 'text-foreground hover:bg-accent'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 block dark:hidden" />
            </button>

            {/* CTA Button */}
            <Button
              asChild
              size="sm"
              className="hidden lg:flex bg-gradient-to-r from-[#1976D2] to-[#0D47A1] hover:from-[#0D47A1] hover:to-[#1976D2] text-white border-0 shadow-arka"
            >
              <Link href="/contact">{t('Get a Quote', 'احصل على عرض سعر')}</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled
                  ? 'text-foreground hover:bg-accent'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-2xl font-bold text-gradient font-display">ARKA</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        isActive(item.href)
                          ? 'bg-primary/10 text-[#1976D2]'
                          : 'text-foreground hover:bg-accent'
                      )}
                    >
                      {t(item.label, item.labelAr)}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white border-0"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    {t('Get a Quote', 'احصل على عرض سعر')}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
