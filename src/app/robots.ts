import type { MetadataRoute } from 'next';
import { websiteConfig } from '@/config/website.config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: websiteConfig.url,
    sitemap: `${websiteConfig.url}/sitemap.xml`,
  };
}