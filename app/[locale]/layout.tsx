// app/[locale]/layout.tsx
import '../globals.css';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Navbar from '../../components/Navbar';
import LanguageToggle from '../../components/LanguageToggle';
 import ThemeToggle from '../../components/ThemeToggle';  // sigue usándose
import { TranslationsProvider } from '../i18n/TranslationsContext';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Mi Portfolio',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico'
  }
};

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: 'es' | 'en' };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.className,
          'h-screen overflow-hidden',
          'bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'
        )}
      >
        <TranslationsProvider locale={locale}>
          <Navbar>
            <LanguageToggle />
            <ThemeToggle />   {/* tu toggle manual */}
          </Navbar>
          <main className="h-full overflow-y-auto snap-y snap-mandatory">
            {children}
          </main>
        </TranslationsProvider>
      </body>
    </html>
  );
}





