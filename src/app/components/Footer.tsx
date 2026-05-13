import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E0C01] border-t border-[#5C3E2A] px-6 py-10 md:px-20 md:py-16">
      <div className="max-w-[1760px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="h-8">
              <img
                src="/Logo_light.svg"
                alt="Luiza Schulman"
                className="h-full w-auto"
              />
            </div>
            <div className="flex flex-col gap-2 text-[#E2E2E2] text-sm tracking-tight opacity-70">
              <p>Clínica de Neuropsicologia</p>
              <p>CRP: 08/37426</p>
            </div>
            <div className="mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-[#F8F8F7] border border-[#E5E7EB] rounded p-1 hover:bg-[#E2E2E2] transition-colors"
              >
                <Instagram size={20} className="text-[#1E0C01]" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#F8F8F7] text-base font-extrabold tracking-tight">
              Páginas
            </h3>
            <nav className="flex flex-col gap-2 text-[#E2E2E2] text-sm tracking-tight opacity-70">
              <a href="#inicio" className="hover:opacity-100 transition-opacity">
                Início
              </a>
              <a
                href="#para-quem"
                className="hover:opacity-100 transition-opacity"
              >
                Para quem é indicado
              </a>
              <a href="#sobre" className="hover:opacity-100 transition-opacity">
                Sobre a avaliação
              </a>
              <a
                href="#profissional"
                className="hover:opacity-100 transition-opacity"
              >
                Quem vai te atender
              </a>
              <a href="#teste" className="hover:opacity-100 transition-opacity">
                Teste gratuito
              </a>
              <a href="#faq" className="hover:opacity-100 transition-opacity">
                Dúvidas frequentes
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
