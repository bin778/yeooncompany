import type { MetadataRoute } from 'next';
import { siteConfig } from '@/app/lib/site';

export const dynamic = 'force-static';

const paths = ['/', '/company/', '/solutions/', '/trust/', '/news/', '/partnership/', '/contact/'];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(path => ({ url: new URL(path, siteConfig.url).toString(), lastModified: new Date(), changeFrequency: path === '/' ? 'weekly' : 'monthly', priority: path === '/' ? 1 : 0.7 }));
}
