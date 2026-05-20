import { MapPin } from 'lucide-react';
import heroImage from '../../imports/Hero_Image.png';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen md:h-[92.5vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#160E09] opacity-65" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full md:w-[960px] mx-auto flex flex-col items-start md:items-center gap-6 md:gap-12 text-left md:text-center px-6 md:px-0">
        {/* Location + Main Content Wrapper */}
        <div className="flex flex-col items-start md:items-center gap-4 md:gap-2 w-full">

          {/* Main Content */}
          <div className="flex flex-col items-start md:items-center gap-4 md:gap-6 w-full">
            <h1
              className="text-[#F8F8F7] leading-[1.15] tracking-[-0.03em] w-full"
              style={{
                fontSize: 'clamp(42px, 8vw, 74px)',
                fontFamily: 'Google Sans Flex, sans-serif',
                fontWeight: 300,
                textWrap: 'balance',
              }}
            >
              Avaliação e reabilitação neuropsicológica em Curitiba
            </h1>

            <p
              className="text-[#E2E2E2] text-[20px] font-normal leading-[1.5] tracking-[0.01em] w-full"
              style={{ textWrap: 'balance' }}
            >
              Investigação especializada das funções cognitivas, emocionais e
              comportamentais em adolescentes, adultos e idosos.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=5541984599063&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.&type=phone_number"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-6 py-4 bg-[#0F5789] text-[#F8F8F7] text-[16px] font-normal tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors duration-300 text-center"
        >
          Agendar consulta
        </a>
      </div>

      {/* Bottom Details */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#E9E9E9]/20">
        <div className="hidden md:block max-w-[1760px] mx-auto px-6 py-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col gap-2 max-w-[258px] mx-auto w-full">
              <h3 className="text-[#F8F8F7] text-[16px] font-bold tracking-tight">
                Escuta cuidadosa
              </h3>
              <p className="text-[#F8F8F7] text-[16px] font-normal leading-[1.6] tracking-tight">
                Atendimento adaptado, acolhedor e inclusivo
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-[258px] mx-auto w-full">
              <h3 className="text-[#F8F8F7] text-[16px] font-bold tracking-tight">
                Base científica
              </h3>
              <p className="text-[#F8F8F7] text-[16px] font-normal leading-[1.6] tracking-tight">
                Instrumentos padronizados e validados
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-[258px] mx-auto w-full">
              <h3 className="text-[#F8F8F7] text-[16px] font-bold tracking-tight">
                Laudo completo
              </h3>
              <p className="text-[#F8F8F7] text-[16px] font-normal leading-[1.6] tracking-tight">
                Relatório detalhado e acessível ao final da avaliação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
