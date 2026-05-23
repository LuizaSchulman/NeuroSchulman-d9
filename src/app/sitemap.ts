import { MetadataRoute } from 'next';
import { sitemapRoutes, websiteConfig } from '@/config/website.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: `${websiteConfig.url}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
