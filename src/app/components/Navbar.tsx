import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoDark from '../../imports/Logo_dark.svg';
import logoLight from '../../imports/Logo_light.svg';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/#para-quem', label: 'Para quem é indicado' },
  { href: '/#sobre', label: 'Sobre a avaliação' },
  { href: '/#profissional', label: 'Quem vai te atender' },
  { href: '/#faq', label: 'Dúvidas frequentes' },
  { href: '/#contato', label: 'Contato' }
];

export function Navbar() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkHomePage = window.location.pathname === '/';
    setIsHomePage(checkHomePage);

    if (!checkHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const textColor = isScrolled ? 'text-[#1E0C01]' : 'text-[#F8F8F7]';
  const bgColor = isScrolled ? 'bg-[#F8F8F7]' : 'bg-transparent';

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${bgColor}`}
    >
      <div className="px-6 py-4 md:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-8">
            <img
              src={isScrolled ? logoDark.src : logoLight.src}
              alt="Luiza Schulman"
              className="h-full w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-4 flex items-center justify-center text-sm font-semibold tracking-tight rounded-md transition-all duration-300 ${textColor} hover:bg-[#1E0C01]/12`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5541984599063&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.&type=phone_number"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#0F5789] text-[#F8F8F7] text-sm font-extrabold tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors duration-300"
            >
              Agendar consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col gap-10 lg:hidden">
          {/* Mobile Menu Header */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="h-8">
                <img
                  src={logoDark.src}
                  alt="Luiza Schulman"
                  className="h-full w-auto"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1E0C01]"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col flex-1 gap-4 items-start justify-center w-full text-[#1E0C01] text-base font-semibold tracking-tight text-center px-6 pt-10 pb-16 -mt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-full px-3 py-4 rounded-md hover:bg-[#1E0C01]/12 transition-all"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5541984599063&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.&type=phone_number"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 bg-[#0F5789] text-[#F8F8F7] text-base font-extrabold tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors duration-300 inline-flex items-center justify-center"
              onClick={handleLinkClick}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
