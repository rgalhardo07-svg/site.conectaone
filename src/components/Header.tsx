import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'Soluções',   href: '/#services' },
  { label: 'Diferenciais', href: '/#why-choose-us' },
  { label: 'Como Funciona', href: '/#how-it-works' },
  { label: 'Clientes',   href: '/#testimonials' },
];

const Header = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled
          ? 'py-3 border-b border-white/8'
          : 'py-5',
      )}
      style={{
        background: isScrolled
          ? 'rgba(12,15,30,0.88)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/logo-gradient-dark.svg"
              alt="ConectaOne — Soluções em IA e Automação"
              className="h-9 md:h-10 w-auto transition-opacity duration-200 group-hover:opacity-85"
              onError={e => {
                // Fallback to original logo
                (e.currentTarget as HTMLImageElement).src = '/logo.png';
                (e.currentTarget as HTMLImageElement).className = 'h-9 md:h-10 w-auto brightness-0 invert transition-opacity duration-200 group-hover:opacity-85';
              }}
              loading="eager"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Contato
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-muted hover:text-white transition-colors p-1"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t border-white/8"
             style={{ background: 'rgba(12,15,30,0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-3 text-base font-medium text-brand-muted hover:text-white hover:bg-white/4 rounded-xl transition-all duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/8 mt-2">
              <a
                href="/#contact"
                className="btn-primary w-full justify-center py-3 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
