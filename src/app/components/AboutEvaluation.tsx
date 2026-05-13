import { ProcessCard } from './ProcessCard';

export function AboutEvaluation() {
  const steps = [
    {
      title: 'Entrevista inicial',
      description:
        'Uma conversa para te conhecer melhor, entender suas queixas e reunir informações importantes sobre sua saúde, rotina e história de vida.',
    },
    {
      title: 'Aplicação de testes',
      description:
        'São utilizados instrumentos padronizados para avaliar funções como memória, atenção, linguagem, percepção, entre outras.',
    },
    {
      title: 'Devolutiva',
      description:
        'São apresentados os resultados e o perfil cognitivo e emocional. A partir disso são discutidas hipóteses diagnósticas e encaminhamentos.',
    },
    {
      title: 'Entrega do laudo',
      description:
        'Você recebe um documento completo e acessível, com os resultados, interpretações e recomendações referentes à sua avaliação.',
    },
  ];

  return (
    <section id="sobre" className="bg-[#1E0C01] px-6 py-10 md:px-20 md:pt-20 md:pb-28 md:scroll-mt-[64px]">
      <div className="max-w-[1760px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            {/* Left Column - Title */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-[#F8F8F7] font-light leading-[1.15] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Sobre a avaliação neuropsicológica
              </h2>
              <p className="hidden md:block text-[#E2E2E2] text-xl font-normal leading-[1.5] tracking-[-0.03em] max-w-[518px]">
                Entenda como funciona o processo e como ele auxilia no seu dia a
                dia
              </p>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col gap-4 text-[#DCD7D1] text-base font-normal leading-[1.8] tracking-tight justify-center">
              <p>
                O processo costuma acontecer entre 5 e 10 sessões, de acordo com a complexidade e as necessidades de cada caso. Ao final da avaliação, é entregue um laudo neuropsicológico que contribui para a investigação clínica, mas não corresponde isoladamente a um diagnóstico.
              </p>

            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <ProcessCard
                key={index}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
