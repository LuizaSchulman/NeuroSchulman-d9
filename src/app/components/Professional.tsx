import professionalImage from '../../imports/LuizaSchulman_Headshot.png';

export function Professional() {
  return (
    <section id="profissional" className="bg-[#F8F8F7] relative md:scroll-mt-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Content with padding */}
        <div className="px-6 py-10 md:px-20 md:pt-20 md:pb-28">
          <div className="flex flex-col gap-10 md:gap-16 max-w-[652px]">
            {/* Header */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-[#1E0C01] font-normal leading-[1.15] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Quem vai te atender
              </h2>
              <p className="hidden md:block text-[#39261B] text-xl font-semibold leading-[1.5] tracking-[-0.03em] max-w-[518px]">
                Conheça quem vai estar com você no processo
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              {/* Professional Card */}
              <div className="p-4 bg-[#F8F8F7] border border-[#39261B] shadow-[1px_3px_0_#39261B] rounded">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#1E0C01] text-xl font-extrabold leading-[1.3] tracking-tight">
                    Psicóloga Luiza Schulman
                  </h3>
                  <p className="text-[#1E0C01] text-base font-medium tracking-tight">
                    CRP: 08/37426
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-4 text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight">
                <p>
                  Psicóloga formada pela PUC-PR, Luiza tem especialização em
                  Neuropsicologia pela Sapiens. Atua com avaliação
                  neuropsicológica de adolescentes, adultos e idosos,
                  contribuindo para que você entenda como o cérebro funciona em
                  diferentes aspectos do dia a dia, desde atenção e memória até
                  as emoções, comportamento e raciocínio.
                </p>
                <p>
                  Pratica uma escuta atenta e cuidadosa, e acredita que as
                  avaliações devem respeitar o ritmo de cada pessoa, buscando
                  traduzir e explicar, com embasamento científico, aquilo que é
                  sentido.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image covering full column */}
        <div className="hidden lg:block relative min-h-[600px]">
          <img
            src={professionalImage.src}
            alt="Psicóloga Luiza Schulman"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
