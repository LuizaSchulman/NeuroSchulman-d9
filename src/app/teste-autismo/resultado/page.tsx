import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ResultPage from '../../../views/result-page';

export const metadata: Metadata = {
  title: 'Resultado do teste de rastreio',
  robots: {
    index: false,
    follow: false,
  },
};

type SearchParamValue = string | string[] | undefined;
type SearchParams = Promise<Record<string, SearchParamValue>>;

function getSingleValue(value: SearchParamValue) {
  return Array.isArray(value) ? value[0] : value;
}

function parseResult(searchParams: Record<string, SearchParamValue>) {
  const typeValue = getSingleValue(searchParams.tipo);
  const score = Number(getSingleValue(searchParams.pontuacao));
  const totalQuestions = Number(getSingleValue(searchParams.total));

  if (!Number.isFinite(score) || !Number.isFinite(totalQuestions)) {
    return null;
  }

  if (typeValue === 'aq-10' && totalQuestions === 10 && score >= 0 && score <= 10) {
    return {
      score,
      totalQuestions,
      testType: 'AQ-10' as const,
    };
  }

  if (typeValue === 'aq-50' && totalQuestions === 50 && score >= 0 && score <= 50) {
    return {
      score,
      totalQuestions,
      testType: 'AQ-50' as const,
    };
  }

  return null;
}

export default async function AutismScreeningResultPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const result = parseResult(resolvedSearchParams);

  if (!result) {
    redirect('/teste-autismo');
  }

  return <ResultPage result={result} />;
}