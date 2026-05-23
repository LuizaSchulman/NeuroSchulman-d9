import React from 'react';
import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { FAQStructuredData } from '@/components/faq-structured-data';
import { Footer } from '@/components/footer';
import { LocalBusinessStructuredData } from '@/components/local-business-structured-data';
import { Navbar } from '@/components/navbar';
import { websiteConfig } from '@/config/website.config';
import '@/styles/global.css';

const SITE_URL = websiteConfig.url;

export const metadata: Metadata = {
  title: {
    default: 'Schulman Neuropsicologia | Avaliacao e Reabilitacao Neuropsicologica em Curitiba',
    template: '%s | Schulman Neuropsicologia',
  },
  description: `${websiteConfig.description} Psicologa Luiza Schulman - CRP 08/37426.`,
  keywords: [...websiteConfig.keywords],
  authors: [{ name: 'Psicóloga Luiza Schulman', url: SITE_URL }],
  creator: 'Schulman Neuropsicologia',
  publisher: 'Schulman Neuropsicologia',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: websiteConfig.locale,
    url: SITE_URL,
    siteName: 'Schulman Neuropsicologia',
    title: websiteConfig.title,
    description: websiteConfig.shortDescription,
    images: [
      {
        url: '/logo-dark.svg',
        alt: websiteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schulman Neuropsicologia | Avaliacao Neuropsicologica em Curitiba',
    description: `${websiteConfig.description} Psicologa Luiza Schulman - CRP 08/37426.`,
    images: ['/logo-dark.svg'],
  },
  category: 'health',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }: LayoutProps<'/'>): React.JSX.Element {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <GoogleAnalytics gaId="G-ZS218B2VRE" />
      <GoogleTagManager gtmId="GTM-MJMQDRS7" />
      <body>
        <LocalBusinessStructuredData />
        <FAQStructuredData />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
