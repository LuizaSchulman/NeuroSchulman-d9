import { useLocation, useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ResultState {
  score: number;
  testType: 'AQ-10' | 'AQ-50';
  totalQuestions: number;
}

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultState | null;
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  useEffect(() => {
    // Redirect if no state
    if (!state) {
      navigate('/teste-autismo');
    }
  }, [state, navigate]);

  if (!state) {
    return null;
  }

  const { score, testType, totalQuestions } = state;

  // Determine interpretation based on test type
  const getInterpretation = () => {
    if (testType === 'AQ-10') {
      if (score <= 5) {
        return {
          title: 'Resultado abaixo do ponto de corte',
          description:
            'Sua pontuação está abaixo do ponto de corte clínico (6 pontos). Isso sugere que você apresenta poucos traços associados ao espectro autista neste instrumento de triagem.',
          recommendation:
            'Este resultado não indica a necessidade de avaliação clínica adicional no momento. Caso tenha dúvidas ou preocupações específicas, consulte um profissional qualificado.',
          color: '#09456F'
        };
      } else {
        return {
          title: 'Resultado acima do ponto de corte',
          description:
            'Sua pontuação está acima do ponto de corte clínico (6 pontos ou mais). Isso sugere a presença de traços que podem estar associados ao espectro autista.',
          recommendation:
            'Recomenda-se buscar uma avaliação clínica mais aprofundada com um neuropsicólogo ou psiquiatra especializado em autismo. Este teste é apenas uma triagem inicial e não constitui diagnóstico.',
          color: '#0F5789'
        };
      }
    } else {
      // AQ-50
      if (score < 26) {
        return {
          title: 'Resultado abaixo do ponto de corte',
          description:
            'Sua pontuação está abaixo do ponto de corte clínico (26 pontos). Isso sugere que você apresenta poucos traços associados ao espectro autista neste instrumento de triagem.',
          recommendation:
            'Este resultado não indica a necessidade de avaliação clínica adicional no momento. Caso tenha dúvidas ou preocupações específicas, consulte um profissional qualificado.',
          color: '#09456F'
        };
      } else if (score >= 26 && score < 32) {
        return {
          title: 'Resultado no intervalo intermediário',
          description:
            'Sua pontuação está na faixa intermediária (26-31 pontos). Isso sugere a presença de alguns traços que podem estar associados ao espectro autista.',
          recommendation:
            'Considere buscar uma avaliação clínica com um neuropsicólogo ou psiquiatra especializado em autismo para uma análise mais detalhada. Este teste é apenas uma triagem inicial e não constitui diagnóstico.',
          color: '#0F5789'
        };
      } else {
        return {
          title: 'Resultado acima do ponto de corte elevado',
          description:
            'Sua pontuação é de 32 pontos ou mais, o que está fortemente associado a traços do espectro autista em pesquisas científicas.',
          recommendation:
            'É altamente recomendado buscar uma avaliação clínica completa com um neuropsicólogo ou psiquiatra especializado em autismo. Este teste é apenas uma triagem inicial e não constitui diagnóstico definitivo.',
          color: '#1E0C01'
        };
      }
    }
  };

  const interpretation = getInterpretation();

  return (
    <div className="min-h-screen bg-white font-['Google_Sans_Flex',sans-serif] antialiased">
      <Navbar />
      <main className="bg-[#F8F8F7] pt-20">
        <div className="max-w-[1140px] mx-auto px-6 pt-10 pb-16 md:px-20 md:pt-20 md:pb-40">
          <div className="flex flex-col gap-10 md:gap-16 items-center">
            {/* Header */}
            <div className="flex flex-col items-start md:items-center gap-6 max-w-[736px] w-full">
              <h1
                className="text-[#1E0C01] font-normal leading-[1.15] tracking-[-0.03em] text-left md:text-center w-full"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Resultado do {testType}
              </h1>
            </div>

            {/* Result and Warning Group */}
            <div className="flex flex-col gap-10 w-full">
              {/* Result Card */}
              <div className="bg-[#F8F8F7] border border-[#39261B] rounded-md p-6 flex flex-col gap-10 w-full">
                {/* Score Display */}
                <div className="flex flex-col items-start gap-4">
                  <div
                    className="rounded-full flex items-center justify-center px-4 py-[10px]"
                    style={{ backgroundColor: interpretation.color }}
                  >
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-white">
                        {score}
                      </p>
                      <p className="text-white">
                        de {totalQuestions}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <h2 className="text-[#1E0C01] text-2xl md:text-3xl font-extrabold leading-[1.15] tracking-tight text-left">
                      {interpretation.title}
                    </h2>
                  </div>
                </div>

                {/* Interpretation */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#1E0C01] text-xl font-extrabold leading-[1.15] tracking-tight">
                      O que isso significa?
                    </h3>
                    <p className="text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight">
                      {interpretation.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#1E0C01] text-xl font-extrabold leading-[1.15] tracking-tight">
                      Recomendação
                    </h3>
                    <p className="text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight">
                      {interpretation.recommendation}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row gap-3">
                  <a
                    href="/teste-autismo"
                    className="flex-1 px-6 py-4 border border-[#1E0C01] text-[#1E0C01] text-base font-bold tracking-tight rounded-full hover:bg-[#1E0C01]/12 transition-colors inline-flex items-center justify-center"
                  >
                    Fazer outro teste
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=5541984599063&text=${encodeURIComponent(
                      `Olá! Gostaria de agendar uma consulta para avaliação neuropsicológica. Realizei o teste ${testType} e obtive pontuação de ${score} de ${totalQuestions}.`
                    )}&type=phone_number`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 bg-[#0F5789] text-[#F8F8F7] text-base font-extrabold tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors inline-flex items-center justify-center"
                  >
                    Agendar consulta
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="border-b border-[#39261B] py-4">
                <button
                  onClick={() => setIsFAQOpen(!isFAQOpen)}
                  className="faq-trigger w-full flex items-center justify-between gap-2 text-left"
                  data-faq="O que são os testes AQ-10 e AQ-50?"
                >
                  <h3 className="flex-1 text-[#1E0C01] text-base font-extrabold leading-[1.6] tracking-tight">
                    O que são os testes AQ-10 e AQ-50?
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#39261B] transition-transform duration-300 flex-shrink-0 ${isFAQOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isFAQOpen && (
                  <div className="mt-3 text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight space-y-4">
                    <p>
                      O AQ-10 e o AQ-50 são instrumentos de triagem desenvolvidos
                      por pesquisadores da Universidade de Cambridge para avaliar
                      a presença de traços do espectro autista em adultos sem
                      deficit intelectual. O AQ-50 é a versão original, composta
                      por 50 afirmações sobre preferências, comportamentos e
                      formas de pensar, desenvolvida por Baron-Cohen et al.
                      (2001).
                    </p>
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/11439754/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block underline hover:no-underline"
                    >
                      Estudo original: Journal of Autism and Developmental
                      Disorders
                    </a>
                    <p>
                      O AQ-10 é uma versão reduzida, validada para uso como
                      triagem rápida em contextos clínicos e de pesquisa.
                    </p>
                    <a
                      href="https://docs.autismresearchcentre.com/papers/2012_Allisonetal_JAACAP_RedFlags.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block underline hover:no-underline"
                    >
                      Referência: Toward Brief "Red Flags" for Autism Screening:
                      The Short Autism Spectrum Quotient and the Short
                      Quantitative Checklist in 1,000 Cases and 3,000 Controls
                    </a>
                  </div>
                )}
              </div>

              {/* Warning */}
              <div className="flex flex-col gap-4">
                <div className="bg-[#39261B] px-4 py-2 rounded-full w-fit">
                  <p className="text-white text-base font-extrabold tracking-tight">
                    Aviso importante
                  </p>
                </div>
                <div className="text-[#39261B] text-base leading-[1.6] tracking-tight space-y-2">
                  <p className="font-semibold">
                    Este teste tem caráter exclusivamente informativo e não
                    substitui uma avaliação clínica completa. Um escore elevado
                    pode indicar a necessidade de investigação mais aprofundada,
                    mas não configura, por si só, um diagnóstico de autismo.
                  </p>
                  <p className="font-extrabold">
                    Para uma avaliação precisa, é fundamental consultar um
                    profissional qualificado, como um neuropsicólogo ou
                    psiquiatra, que poderá integrar os resultados desses
                    instrumentos com dados clínicos, observações comportamentais
                    e outras escalas padronizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
