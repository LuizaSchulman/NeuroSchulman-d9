import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#inicio', label: 'Início' },
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
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

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
      // Trigger animation after mount
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(true);
        });
      });
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimatingIn(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const textColor = isScrolled ? 'text-[#1E0C01]' : 'text-[#F8F8F7]';
  const bgColor = isScrolled ? 'bg-[#F8F8F7]' : 'bg-transparent';

  const handleClose = () => {
    setIsAnimatingIn(false);
    // Wait for exit animation before unmounting
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 350);
  };

  const handleLinkClick = () => {
    handleClose();
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
              src={isScrolled ? "/Logo_dark.svg" : "/Logo_light.svg"}
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
                className={`px-3 py-4 flex items-center justify-center text-[14px] font-normal tracking-[0.01em] rounded-md transition-all duration-300 ${textColor} hover:bg-[#1E0C01]/12`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5541984599063&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.&type=phone_number"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#0F5789] text-[#F8F8F7] text-[14px] font-medium tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors duration-300"
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
        <div
          className="fixed inset-0 z-50 lg:hidden"
          style={{ pointerEvents: isAnimatingIn ? 'auto' : 'none' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 transition-opacity duration-350 ease-out"
            style={{ opacity: isAnimatingIn ? 1 : 0 }}
            onClick={handleClose}
          />

          {/* Panel */}
          <div
            className="absolute inset-0 bg-white flex flex-col gap-10 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isAnimatingIn ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            {/* Mobile Menu Header */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div
                  className="h-8 transition-all duration-300 ease-out"
                  style={{
                    opacity: isAnimatingIn ? 1 : 0,
                    transform: isAnimatingIn ? 'translateX(0)' : 'translateX(-12px)',
                    transitionDelay: '150ms',
                  }}
                >
                  <img
                    src="/Logo_dark.svg"
                    alt="Luiza Schulman"
                    className="h-full w-auto"
                  />
                </div>
                <button
                  onClick={handleClose}
                  className="text-[#1E0C01] transition-all duration-200 ease-out hover:rotate-90"
                  style={{
                    opacity: isAnimatingIn ? 1 : 0,
                    transitionDelay: '200ms',
                  }}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col flex-1 gap-1 items-start justify-center w-full text-[#1E0C01] text-[18px] font-normal tracking-tight text-center px-6 pt-10 pb-16 -mt-10">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-full px-3 py-4 rounded-md hover:bg-[#1E0C01]/8 transition-colors duration-200"
                  onClick={handleLinkClick}
                  style={{
                    opacity: isAnimatingIn ? 1 : 0,
                    transform: isAnimatingIn ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 350ms ease-out, transform 350ms ease-out, background-color 200ms ease`,
                    transitionDelay: isAnimatingIn ? `${200 + index * 50}ms` : '0ms',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5541984599063&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+para+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.&type=phone_number"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 mt-4 bg-[#0F5789] text-[#F8F8F7] text-[18px] font-medium tracking-tight rounded-full hover:bg-[#1D7ABB] transition-colors duration-300 inline-flex items-center justify-center"
                onClick={handleLinkClick}
                style={{
                  opacity: isAnimatingIn ? 1 : 0,
                  transform: isAnimatingIn ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 400ms ease-out, transform 400ms ease-out, background-color 300ms ease`,
                  transitionDelay: isAnimatingIn ? `${200 + navLinks.length * 50}ms` : '0ms',
                }}
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
