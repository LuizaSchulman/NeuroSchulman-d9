import { InfoCard } from './info-card';

export function WhoIsItFor() {
  return (
    <section id="para-quem" className="bg-[#F8F8F7] px-6 py-10 md:px-20 md:pt-20 md:pb-28 md:scroll-mt-[64px]">
      <div className="max-w-[1760px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Header */}
          <div className="max-w-[832px]">
            <div className="flex flex-col gap-6">
              <h2
                className="text-[#1E0C01] font-light leading-[1.15] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Para quem a avaliação neuropsicológica é indicada?
              </h2>
              <p className="hidden md:block text-[#39261B] text-xl font-medium leading-[1.5] tracking-[-0.03em]">
                Entenda como a avaliação pode auxiliar diferentes fases da vida
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              title="Crianças e Adolescentes"
              description="A avaliação ajuda a compreender dificuldades de atenção, aprendizagem, comportamento, organização e relações sociais. Também auxilia na investigação de questões como TDAH, TEA, ansiedade, altas habilidades e dificuldades escolares."
              variant="highlight"
            />
            <InfoCard
              title="Adultos"
              description="Indicada para compreender dificuldades cognitivas e emocionais que impactam rotina, trabalho, estudos e relações. A avaliação auxilia na investigação de atenção, memória, exaustão mental, ansiedade, TDAH, TEA e altas habilidades."
              variant="highlight"
            />
            <InfoCard
              title="Idosos"
              description="A avaliação auxilia na investigação de alterações cognitivas relacionadas ao envelhecimento, memória, atenção e possíveis quadros neurodegenerativos, contribuindo para acompanhamento clínico e qualidade de vida."
              variant="highlight"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
