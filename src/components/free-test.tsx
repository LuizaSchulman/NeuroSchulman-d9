import Link from 'next/link';

export function FreeTest() {
  return (
    <section id="teste" className="bg-[#1E0C01] px-6 py-10 md:px-20 md:py-20 md:scroll-mt-[64px]">
      <div className="max-w-[832px] mx-auto">
        <div className="flex flex-col items-start md:items-center gap-12">
          {/* Content */}
          <div className="flex flex-col items-start md:items-center gap-10 w-full md:w-auto">
            <div className="flex flex-col items-start md:items-center gap-6 max-w-[736px]">
              <h2
                className="text-[#F8F8F7] font-normal leading-[1.15] tracking-[-0.03em] text-left md:text-center"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
              >
                Teste gratuito de rastreio para autismo em adultos
              </h2>
              <p className="text-[#E2E2E2] text-xl font-semibold leading-[1.5] tracking-[-0.03em] text-left md:text-center max-w-[518px]">
                Identifique possíveis traços do espectro autista com um teste
                rápido, online e gratuito
              </p>
            </div>

            <Link
              href="/teste-autismo"
              className="w-full md:w-auto px-6 py-4 bg-[#0F5789] text-[#F8F8F7] text-base font-extrabold tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors duration-300 inline-flex items-center justify-center"
            >
              Fazer o teste
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="w-full p-3 border border-[#DEDCDC] rounded flex items-start md:items-center justify-start md:justify-center">
            <p className="text-[#E2E2E2] text-base font-semibold italic leading-[1.5] tracking-tight text-left md:text-center max-w-[362px]">
              *Este é um teste de triagem e não substitui uma avaliação clínica
              profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
