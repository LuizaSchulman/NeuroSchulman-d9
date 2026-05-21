import type { Metadata } from 'next';
import { TestePageView } from '@/views/teste-page';

export const metadata: Metadata = {
  title: 'Teste de triagem para autismo em adultos',
  description:
    'Escolha entre AQ-10 e AQ-50 para realizar um teste gratuito de rastreio para autismo em adultos.',
  alternates: {
    canonical: '/teste-autismo',
  },
};

export default function AutismScreeningLandingPage() {
  return <TestePageView />;
}