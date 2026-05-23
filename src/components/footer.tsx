import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E0C01] border-t border-[#5C3E2A] px-6 py-10 md:px-20 md:py-16">
      <div className="max-w-[1760px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="h-8">
              <Link href="/" aria-label="Ir para a pagina inicial">
                <Image
                  src="/logo-light.svg"
                  alt="Schulman Neuropsicologia"
                  width={121}
                  height={32}
                  className="h-full w-auto"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-[#E2E2E2] font-normal text-[16px] tracking-tight opacity-70">
              <p>Clínica de Neuropsicologia</p>
              <p>CRP: 08/37426</p>
            </div>
            <div className="mt-2">
              <a
                href="https://instagram.com/luiza.schulman"
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
            <h3 className="text-[#F8F8F7] text-[18px] font-medium tracking-tight">
              Páginas
            </h3>
            <nav className="flex flex-col gap-2 text-[16px] font-normal tracking-tight">
              <Link href="/#inicio" className="text-[#E2E2E2] opacity-70 hover:text-[#F8F8F7] hover:opacity-100 transition-all duration-300">
                Início
              </Link>
              <Link
                href="/#para-quem"
                className="text-[#E2E2E2] opacity-70 hover:text-[#F8F8F7] hover:opacity-100 transition-all duration-300"
              >
                Para quem é indicado
              </Link>
              <Link href="/#sobre" className="text-[#E2E2E2] opacity-70 hover:text-[#F8F8F7] hover:opacity-100 transition-all duration-300">
                Sobre a avaliação
              </Link>
              <Link
                href="/#profissional"
                className="text-[#E2E2E2] opacity-70 hover:text-[#F8F8F7] hover:opacity-100 transition-all duration-300"
              >
                Quem vai te atender
              </Link>
              <Link href="/#faq" className="text-[#E2E2E2] opacity-70 hover:text-[#F8F8F7] hover:opacity-100 transition-all duration-300">
                Dúvidas frequentes
              </Link>
              <Link href="/#contato" className="text-[#E2E2E2] opacity-70 hover:text-[#F8F8F7] hover:opacity-100 transition-all duration-300">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
