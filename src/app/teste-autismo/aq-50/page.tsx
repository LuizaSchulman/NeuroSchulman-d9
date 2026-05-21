import type { Metadata } from 'next';
import { AQ50PageView } from '@/views/aq50-page';

export const metadata: Metadata = {
  title: 'AQ-50',
  description: 'Questionario AQ-50 para rastreio de tracos do espectro autista em adultos.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AutismScreeningAQ50Page() {
  return <AQ50PageView />;
}