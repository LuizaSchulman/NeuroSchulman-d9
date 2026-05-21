import { MetadataRoute } from 'next';
import { siteConfig, sitemapRoutes } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.url}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
