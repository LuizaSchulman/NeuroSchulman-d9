export function WhatWeInvestigate() {
  return (
    <section id="o-que-investiga" className="bg-[#1E0C01] px-6 py-10 md:px-20 md:py-40">
      <div className="max-w-[1760px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Left Column - Title */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-[#F8F8F7] font-light leading-[1.15] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              O que a avaliação neuropsicológica investiga?
            </h2>
            <p className="hidden md:block text-[#E2E2E2] text-xl font-normal leading-[1.5] tracking-[-0.03em] max-w-[518px]">
              Compreenda quais aspectos cognitivos, emocionais e comportamentais
              podem ser avaliados no processo
            </p>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col gap-4 text-[#DCD7D1] text-base font-normal leading-[1.8] tracking-tight">
            <p>
              A avaliação neuropsicológica investiga o funcionamento cognitivo,
              emocional e comportamental do indivíduo, ajudando no mapeamento e
              na compreensão de dificuldades, potencialidades e padrões que
              impactam a rotina, aprendizagem, trabalho e qualidade de vida.
            </p>
            <p>
              Durante o processo, funções como atenção, concentração, memória,
              linguagem, raciocínio lógico, aprendizagem, planejamento e
              organização são analisadas de forma integrada. A interpretação
              desses dados possibilita uma compreensão mais ampla do perfil
              cognitivo e das necessidades individuais de cada pessoa.
            </p>
            <p>
              Os resultados obtidos contribuem para compreensão diagnóstica,
              direcionamentos terapêuticos, estratégias de reabilitação
              neuropsicológica e tomada de decisões clínicas, acadêmicas e
              profissionais de forma mais segura e individualizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
