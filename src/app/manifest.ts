import type { MetadataRoute } from 'next';
import { websiteConfig } from '@/config/website.config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: websiteConfig.name,
    short_name: 'Schulman Neuro',
    description: websiteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F8F7',
    theme_color: '#F8F8F7',
    icons: [
      {
        src: '/manifest-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/manifest-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}