import { ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511974178200&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+as+solu%C3%A7%C3%B5es+personalizadas+da+ConectaOne.&type=phone_number&app_absent=0";

  const solutions = [
    'IA para Resultados Empresariais',
    'Automação de Processos',
    'Integração de Sistemas',
    'Análise Preditiva',
    'Atendimento Inteligente',
    'SAP Business One',
  ];

  return (
    <>
      {/* ── CTA Final Section ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(99,102,241,0.12) 50%, rgba(124,58,237,0.15) 100%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
             style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)' }} />

        <div className="section-container relative z-10 text-center">
          <span className="badge-pill mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            Pronto para começar?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Automatize seu negócio{' '}
            <span className="text-gradient">hoje mesmo</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Mais de 50 empresas já transformaram suas operações com a ConectaOne.
            Sua vez de escalar com Inteligência Artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
               className="btn-primary px-10 py-4 text-base">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="btn-secondary px-10 py-4 text-base">
              Ver Soluções
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/8" style={{ background: '#090c18' }}>
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src="/logo-gradient-dark.svg"
                alt="ConectaOne"
                className="h-9 w-auto mb-5"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                  (e.currentTarget as HTMLImageElement).className = 'h-9 w-auto mb-5 brightness-0 invert';
                }}
              />
              <p className="text-brand-muted text-sm leading-relaxed max-w-xs mb-6">
                Transformamos empresas com Inteligência Artificial e automação inteligente.
                Resultados mensuráveis desde os primeiros 90 dias.
              </p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/conectaone" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-lg flex items-center justify-center text-brand-muted hover:text-white transition-all duration-200 hover:bg-brand-indigo/20"
                   style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 rounded-lg flex items-center justify-center text-brand-muted hover:text-white transition-all duration-200 hover:bg-green-500/20"
                   style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Soluções */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm tracking-wide" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Soluções
              </h4>
              <ul className="space-y-3">
                {solutions.map((s, i) => (
                  <li key={i}>
                    <a href="#services"
                       className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm tracking-wide" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Contato
              </h4>
              <div className="space-y-4">
                <a href="mailto:contato@conectaone.com"
                   className="flex items-center gap-3 text-sm text-brand-muted hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-indigo/20 transition-colors"
                       style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  contato@conectaone.com
                </a>
                <a href="tel:+5511974178200"
                   className="flex items-center gap-3 text-sm text-brand-muted hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-indigo/20 transition-colors"
                       style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  +55 (11) 97417-8200
                </a>
              </div>
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
                <p className="text-xs text-brand-muted leading-relaxed">
                  <strong className="text-white">Horário de atendimento:</strong><br />
                  Seg–Sex: 9h às 18h<br />
                  Sáb: 9h às 12h
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted">
              © {currentYear} ConectaOne. Todos os direitos reservados.
            </p>
            <p className="text-xs text-brand-muted">
              Feito com IA &amp; ❤️ no Brasil
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
