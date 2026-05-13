import { MapPin, Clock, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="bg-[#F8F8F7] px-6 py-10 md:px-20 md:pt-20 md:pb-28 md:scroll-mt-[64px]">
      <div className="max-w-[1760px] mx-auto">
        <div className="flex flex-col items-start md:items-center gap-10 md:gap-16">
          {/* Header */}
          <div className="flex flex-col items-start md:items-center gap-6 max-w-[736px]">
            <h2
              className="text-[#1E0C01] font-light leading-[1.15] tracking-[-0.03em] text-left md:text-center"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              Contato
            </h2>
            <p className="text-[#39261B] text-xl font-medium leading-[1.5] tracking-[-0.03em] text-left md:text-center">
              Entre em contato para tirar suas dúvidas ou agendar sua avaliação
            </p>
          </div>

          {/* Contact Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="p-6 border border-[#39261B] rounded-md flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="w-8 h-8 bg-[#39261B] rounded-full flex items-center justify-center">
                  <MapPin size={22} className="text-[#F8F8F7]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#1E0C01] text-base font-bold tracking-tight">
                    Endereço
                  </h3>
                  <div className="text-[#1E0C01] text-base font-normal leading-[1.6] tracking-tight">
                    <p>Urban Office</p>
                    <p>
                      Av. João Gualberto, 1342, sala 1903 - Alto da Glória -
                      Curitiba, PR
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Av.+Jo%C3%A3o+Gualberto,+1342+-+Alto+da+Gl%C3%B3ria,+Curitiba+-+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 border border-[#1E0C01] text-[#1E0C01] text-base font-medium tracking-tight rounded-full hover:bg-[#1E0C01]/12 transition-colors inline-flex items-center justify-center"
              >
                Ver no Google Maps
              </a>
            </div>

            {/* Hours Card */}
            <div className="p-6 border border-[#39261B] rounded-md flex flex-col gap-3">
              <div className="w-8 h-8 bg-[#39261B] rounded-full flex items-center justify-center">
                <Clock size={22} className="text-[#F8F8F7]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#1E0C01] text-base font-bold tracking-tight">
                  Horário de atendimento
                </h3>
                <div className="text-[#1E0C01] text-base font-normal leading-[1.6] tracking-tight">
                  <p>
                    <span className="underline">Atendimento presencial </span>
                    <span className="font-bold underline">
                      apenas com horário agendado.
                    </span>
                  </p>
                  <br />
                  <p className="font-bold">Horário comercial</p>
                  <p>Seg a sex das 9h às 17h</p>
                  <p>Sáb das 9h às 14h</p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="p-6 border border-[#39261B] rounded-md flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="w-8 h-8 bg-[#39261B] rounded-full flex items-center justify-center">
                  <Phone size={22} className="text-[#F8F8F7]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#1E0C01] text-base font-bold tracking-tight">
                    Contato
                  </h3>
                  <div className="text-[#1E0C01] text-base font-normal leading-[1.6] tracking-tight">
                    <p>WhatsApp: (41) 98459-9063</p>
                    <p>E-mail: schulman.neuro@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=5541984599063&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.&type=phone_number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-[#1E0C01] text-[#F8F8F7] text-base font-medium tracking-tight rounded-full hover:bg-[#5C3E2A] transition-colors duration-300 inline-flex items-center justify-center text-center"
                >
                  Enviar mensagem no WhatsApp
                </a>
                <a
                  href="mailto:schulman.neuro@gmail.com"
                  className="w-full px-6 py-4 border border-[#1E0C01] text-[#1E0C01] text-base font-medium tracking-tight rounded-full hover:bg-[#1E0C01]/12 transition-colors inline-flex items-center justify-center"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
