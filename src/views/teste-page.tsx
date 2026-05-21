"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import { Clock, ChevronDown } from 'lucide-react';

export default function TestePage() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main className="bg-[#F8F8F7] pt-20">
        <div className="max-w-[1140px] mx-auto px-6 pt-10 pb-16 md:px-20 md:pt-20 md:pb-40">
          <div className="flex flex-col gap-10 md:gap-20">
            {/* Header */}
            <div className="flex flex-col items-start md:items-center gap-6 max-w-[736px] mx-auto">
              <h1
                className="text-[#1E0C01] font-normal leading-[1.15] tracking-[-0.03em] text-left md:text-center w-full"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Teste de triagem para autismo em adultos
              </h1>
              <p className="text-[#39261B] text-xl font-semibold leading-[1.5] tracking-[-0.03em] text-left md:text-center">
                Identifique possíveis traços do espectro autista com um teste
                rápido, online e gratuito. Selecione o questionário que deseja
                responder.
              </p>
            </div>

            {/* Test Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AQ-10 Card */}
              <div className="bg-[#F8F8F7] border border-[#39261B] rounded-md p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3 items-start">
                    <div className="bg-[#09456F] px-4 py-2 rounded-full">
                      <p className="text-white text-base font-extrabold tracking-tight whitespace-nowrap">
                        Versão curta
                      </p>
                    </div>
                    <div className="flex gap-2 items-center px-4 py-2 border border-[#39261B] rounded-full">
                      <Clock size={24} className="text-[#39261B]" />
                      <p className="text-[#1E0C01] text-base font-medium tracking-tight whitespace-nowrap">
                        Duração de 2 minutos
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#1E0C01] text-2xl font-extrabold leading-[1.15] tracking-tight">
                      AQ-10
                    </h3>
                    <p className="text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight">
                      Versão reduzida, validada para uso como triagem rápida em
                      contextos clínicos e de pesquisa.
                    </p>
                  </div>
                </div>

                <Link href="/teste-autismo/aq-10" className="w-full px-6 py-4 bg-[#1E0C01] text-white text-base font-extrabold tracking-tight rounded-full hover:bg-[#5C3E2A] transition-colors duration-300 inline-flex items-center justify-center">
                  Iniciar teste
                </Link>
              </div>

              {/* AQ-50 Card */}
              <div className="bg-[#F8F8F7] border border-[#39261B] rounded-md p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3 items-start">
                    <div className="bg-[#09456F] px-4 py-2 rounded-full">
                      <p className="text-white text-base font-extrabold tracking-tight whitespace-nowrap">
                        Versão completa
                      </p>
                    </div>
                    <div className="flex gap-2 items-center px-4 py-2 border border-[#39261B] rounded-full">
                      <Clock size={24} className="text-[#39261B]" />
                      <p className="text-[#1E0C01] text-base font-medium tracking-tight whitespace-nowrap">
                        Duração de 10 minutos
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#1E0C01] text-2xl font-extrabold leading-[1.15] tracking-tight">
                      AQ-50
                    </h3>
                    <p className="text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight">
                      Versão original, composta por 50 afirmações sobre
                      preferências, comportamentos e formas de pensar.
                    </p>
                  </div>
                </div>

                <Link href="/teste-autismo/aq-50" className="w-full px-6 py-4 bg-[#1E0C01] text-white text-base font-extrabold tracking-tight rounded-full hover:bg-[#5C3E2A] transition-colors duration-300 inline-flex items-center justify-center">
                  Iniciar teste
                </Link>
              </div>
            </div>

            {/* FAQ and Warning Group */}
            <div className="flex flex-col gap-6 md:gap-10">
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
                    Estes testes têm caráter exclusivamente informativo e não
                    substituem uma avaliação clínica completa. Um escore elevado
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
