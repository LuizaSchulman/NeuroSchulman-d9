import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavLink = {
  href?: string;
  label: string;
  dropdown?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  { href: '/#inicio', label: 'Início' },
  {
    label: 'Sobre a avaliação',
    dropdown: [
      { href: '/#o-que-investiga', label: 'O que investiga' },
      { href: '/#para-quem', label: 'Para quem é indicado' },
      { href: '/#sobre', label: 'Sobre a avaliação' }
    ]
  },
  { href: '/#profissional', label: 'Quem vai te atender' },
  { href: '/#faq', label: 'Dúvidas frequentes' },
  { href: '/#contato', label: 'Contato' }
];

export function Navbar() {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`px-3 py-4 flex items-center justify-center gap-1 text-[14px] font-normal tracking-[0.01em] rounded-md transition-all duration-300 ${textColor} hover:bg-[#1E0C01]/12`}
                    >
                      {link.label}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-[#F8F8F7] rounded-xl shadow-lg overflow-hidden flex flex-col p-2">
                        {link.dropdown.map((sublink) => (
                          <a
                            key={sublink.href}
                            href={sublink.href}
                            className="px-4 py-3 text-[#1E0C01] text-[14px] hover:bg-[#1E0C01]/8 rounded-md transition-colors text-center"
                          >
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href!}
                  className={`px-3 py-4 flex items-center justify-center text-[14px] font-normal tracking-[0.01em] rounded-md transition-all duration-300 ${textColor} hover:bg-[#1E0C01]/12`}
                >
                  {link.label}
                </a>
              );
            })}
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
              {navLinks.map((link, index) => {
                if (link.dropdown) {
                  const isOpen = openDropdown === link.label;
                  return (
                    <div key={link.label} className="w-full flex flex-col items-center">
                      <button
                        className="w-full px-3 py-4 rounded-md hover:bg-[#1E0C01]/8 transition-colors duration-200 flex items-center justify-center gap-2 text-[18px] font-normal tracking-tight"
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                        style={{
                          opacity: isAnimatingIn ? 1 : 0,
                          transform: isAnimatingIn ? 'translateY(0)' : 'translateY(16px)',
                          transition: `opacity 350ms ease-out, transform 350ms ease-out, background-color 200ms ease`,
                          transitionDelay: isAnimatingIn ? `${200 + index * 50}ms` : '0ms',
                        }}
                      >
                        {link.label}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col items-center ${isOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                      >
                        <div className="bg-[#F8F8F7] rounded-xl py-2 w-full flex flex-col">
                          {link.dropdown.map((sublink) => (
                            <a
                              key={sublink.href}
                              href={sublink.href}
                              className="w-full px-3 py-3 text-[16px] text-[#1E0C01] hover:bg-[#1E0C01]/5 transition-colors duration-200 text-center"
                              onClick={handleLinkClick}
                            >
                              {sublink.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href!}
                    className="w-full px-3 py-4 rounded-md hover:bg-[#1E0C01]/8 transition-colors duration-200 block"
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
                );
              })}
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
