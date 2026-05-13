import '../styles/index.css';
import type { Metadata } from 'next';
import Script from 'next/script';

const SITE_URL = 'https://neuroschulman.com.br';

export const metadata: Metadata = {
  title: {
    default: 'Schulman Neuropsicologia | Avaliação Neuropsicológica em Curitiba',
    template: '%s | Schulman Neuropsicologia',
  },
  description:
    'Avaliação neuropsicológica especializada em Curitiba. Investigação de funções cognitivas, emocionais e comportamentais em adolescentes, adultos e idosos. Psicóloga Luiza Schulman — CRP 08/37426.',
  keywords: [
    'avaliação neuropsicológica',
    'neuropsicologia Curitiba',
    'avaliação neuropsicológica Curitiba',
    'neuropsicóloga Curitiba',
    'teste TDAH Curitiba',
    'avaliação TEA adulto',
    'avaliação cognitiva',
    'laudo neuropsicológico',
    'Luiza Schulman',
    'psicóloga neuropsicóloga',
    'avaliação de memória',
    'avaliação de atenção',
    'teste autismo adulto',
    'rastreio autismo',
    'TDAH adulto',
    'altas habilidades',
    'reabilitação neuropsicológica',
  ],
  authors: [{ name: 'Psicóloga Luiza Schulman', url: SITE_URL }],
  creator: 'Schulman Neuropsicologia',
  publisher: 'Schulman Neuropsicologia',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Schulman Neuropsicologia',
    title: 'Schulman Neuropsicologia | Avaliação Neuropsicológica em Curitiba',
    description:
      'Investigação especializada das funções cognitivas, emocionais e comportamentais. Atendimento com escuta cuidadosa, base científica e laudo completo. Agende sua consulta.',
    images: [
      {
        url: '/Logo_dark.svg',
        width: 121,
        height: 32,
        alt: 'Schulman Neuropsicologia',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Schulman Neuropsicologia | Avaliação Neuropsicológica em Curitiba',
    description:
      'Avaliação neuropsicológica especializada em Curitiba. Psicóloga Luiza Schulman — CRP 08/37426.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
  category: 'health',
};

// JSON-LD Structured Data for LocalBusiness
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthBusiness',
  name: 'Schulman Neuropsicologia',
  description:
    'Avaliação neuropsicológica especializada em adolescentes, adultos e idosos em Curitiba. Psicóloga Luiza Schulman — CRP 08/37426.',
  url: SITE_URL,
  telephone: '+5541984599063',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
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
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: ['https://www.instagram.com/neuroschulman'],
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

// JSON-LD Structured Data for FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é uma avaliação neuropsicológica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É um processo clínico que utiliza testes, entrevistas e observações para investigar o funcionamento do cérebro. Avaliamos funções cognitivas como atenção, memória, linguagem, raciocínio, funções executivas, habilidades motoras, percepção, entre outras.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quem a avaliação é indicada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A avaliação neuropsicológica é indicada para pessoas de todas as idades que apresentam dificuldades cognitivas, comportamentais ou emocionais que impactam seu funcionamento no dia a dia. Ela é especialmente recomendada em casos de suspeita de TDAH, transtornos de aprendizagem, autismo, alterações de memória, sequelas neurológicas e quadros psiquiátricos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais profissionais solicitam esse tipo de avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A avaliação pode ser solicitada por neurologistas, psiquiatras, psicólogos, fonoaudiólogos, geriatras, entre outros. Mas você também pode procurar diretamente, caso perceba alguma mudança ou dificuldade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como é o processo de avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O processo começa com uma conversa inicial, em que o neuropsicólogo escuta a história do paciente e entende suas queixas e necessidades. Em seguida, são aplicados testes e atividades. Ao final, os resultados são organizados em um relatório e discutidos com o paciente, trazendo orientações claras e personalizadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas sessões são necessárias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Isso varia conforme a demanda e o ritmo de cada pessoa. Em geral, o processo envolve uma entrevista inicial e de 3 a 5 sessões de avaliação. Se identificarmos a necessidade de sessões adicionais para garantir a qualidade do resultado, elas serão incluídas sem custo extra.',
      },
    },
    {
      '@type': 'Question',
      name: 'A avaliação inclui diagnóstico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O laudo pode contribuir com hipóteses diagnósticas, mas o diagnóstico definitivo deve ser feito por um médico. A avaliação neuropsicológica oferece informações valiosas para o entendimento clínico e a adaptação de condutas médicas e terapêuticas.',
      },
    },
    {
      '@type': 'Question',
      name: 'A avaliação serve para fins jurídicos ou periciais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Este consultório realiza apenas avaliações clínicas, com foco terapêutico e de acompanhamento. Não oferecemos avaliações com finalidade pericial ou judicial.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como recebo os resultados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os resultados são entregues em um relatório escrito e apresentados pessoalmente em uma sessão de devolutiva. Nessa conversa, são explicadas cada parte do laudo com clareza, respondendo dúvidas e oferecendo orientações personalizadas.',
      },
    },
    {
      '@type': 'Question',
      name: 'A avaliação é coberta por plano de saúde?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atualmente, o atendimento é particular. Se necessário, fornecemos recibo para reembolso via plano, conforme as regras de cada convênio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso de encaminhamento médico para fazer a avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Você pode procurar diretamente, mesmo sem encaminhamento. Se perceber alguma dificuldade de atenção, memória, comportamento, ou se tiver dúvidas sobre seu próprio funcionamento ou de alguém próximo, estamos aqui para escutar e ajudar a investigar.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que preciso levar para a minha primeira consulta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se houver encaminhamento médico, relatórios anteriores, exames ou anotações escolares (no caso de adolescentes), traga esses documentos. Eles ajudam a compor um panorama mais completo. Também é útil trazer anotações com dúvidas ou observações sobre o que você está vivenciando.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MJMQDRS7');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZS218B2VRE"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-ZS218B2VRE');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>
      <body className="h-full m-0 antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJMQDRS7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="https://use.typekit.net/nhk6bpv.css" />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
