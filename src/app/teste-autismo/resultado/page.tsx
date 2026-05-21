import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ResultPageView } from '@/views/result-page';

export const metadata: Metadata = {
  title: 'Resultado do teste de rastreio',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AutismScreeningResultPage() {
  return (
    <Suspense fallback={null}>
      <ResultPageView />
    </Suspense>
  );
}