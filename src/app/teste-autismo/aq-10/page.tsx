import type { Metadata } from 'next';
import { AQ10PageView } from '@/views/aq10-page';

export const metadata: Metadata = {
  title: 'AQ-10',
  description: 'Questionario AQ-10 para rastreio de tracos do espectro autista em adultos.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AutismScreeningAQ10Page() {
  return <AQ10PageView />;
}