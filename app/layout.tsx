import { baseUrl, createMetadata } from '@/lib/metadata';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = createMetadata({
  title: {
    template: '%s | Turbostrix',
    default: 'Turbostrix',
  },
  description: 'The Next.js framework for building documentation sites',
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
      <ThemeProvider attribute="class">
        <RootProvider>{children}</RootProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
