import { websiteConfig } from '@/config/website.config';

const siteUrl = websiteConfig.url;

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthBusiness',
  name: 'Schulman Neuropsicologia',
  description:
    'Avaliacao neuropsicologica especializada em adolescentes, adultos e idosos em Curitiba. Psicologa Luiza Schulman - CRP 08/37426.',
  url: siteUrl,
  telephone: websiteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: websiteConfig.city,
    addressRegion: websiteConfig.region,
    addressCountry: websiteConfig.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.4284,
    longitude: -49.2733,
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: [websiteConfig.instagram],
  founder: {
    '@type': 'Person',
    name: 'Luiza Schulman',
    jobTitle: 'Psicóloga — Neuropsicóloga',
    description:
      'Psicóloga formada pela PUC-PR, com especialização em Neuropsicologia pela Sapiens. CRP 08/37426.',
  },
  medicalSpecialty: 'Neuropsychology',
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Avaliação Neuropsicológica',
      description:
        'Investigação do funcionamento cognitivo, emocional e comportamental por meio de entrevistas, testes padronizados, devolutiva e laudo completo.',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Teste de Rastreio para Autismo em Adultos',
      description:
        'Teste gratuito e online para identificar possíveis traços do espectro autista.',
    },
  ],
};

export function LocalBusinessStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}