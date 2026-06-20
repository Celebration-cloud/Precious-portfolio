import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'PEC Media Production | Creative Media & Digital Solutions Agency',
    template: '%s | PEC Media Production',
  },
  description: 'PEC Media Production is a creative media agency specializing in video production, video editing, AI-powered video editing, photography, graphic design, cinematography, and professional CV services.',
  keywords: [
    'video production',
    'video editing',
    'AI video editing',
    'photography',
    'graphic design',
    'cinematography',
    'CV creation',
    'media agency',
    'Nigeria',
  ],
  authors: [{ name: 'PEC Media Production' }],
  creator: 'PEC Media Production',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pecmediaproduction.com',
    title: 'PEC Media Production | Creative Media & Digital Solutions Agency',
    description: 'Professional video production, editing, photography, and graphic design services. Bringing your vision to life through creative media.',
    siteName: 'PEC Media Production',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEC Media Production | Creative Media Agency',
    description: 'Professional video production, editing, photography, and graphic design services.',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎬</text></svg>',
  },
};

export const viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
