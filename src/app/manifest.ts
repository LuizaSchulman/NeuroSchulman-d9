import type { MetadataRoute } from 'next';
import { siteConfig } from '../lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Schulman Neuro',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F8F7',
    theme_color: '#F8F8F7',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}