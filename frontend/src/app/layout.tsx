import type { Metadata, Viewport } from 'next';

import { SiteFooter } from '@/app/components/site-footer';
import { SiteHeader } from '@/app/components/site-header';
import { siteConfig } from '@/app/lib/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: '여온앤컴퍼니', template: '%s | 여온앤컴퍼니' },
  description: siteConfig.description,
  openGraph: {
    title: '여온앤컴퍼니',
    description: siteConfig.description,
    siteName: '여온앤컴퍼니',
    locale: 'ko_KR',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#F2B13E' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
