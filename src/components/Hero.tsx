import { ArrowRight, Zap, Bot, BarChart3 } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511974178200&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+as+solu%C3%A7%C3%B5es+personalizadas+da+ConectaOne.&type=phone_number&app_absent=0";

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden aurora-bg">

      {/* ── Grid pattern overlay ── */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />

      {/* ── Aurora orbs ── */}
      <div className="orb orb-animate w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2"
           style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />
      <div className="orb orb-animate-alt w-[400px] h-[400px] top-1/3 -right-20"
           style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }} />
      <div className="orb orb-animate w-[350px] h-[350px] bottom-0 -left-20"
           style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />

      {/* ── Particles ── */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 37 + 5) % 95}%`,
            top:  `${(i * 53 + 10) % 90}%`,
            width: i % 3 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '3px' : '2px',
            background: i % 2 === 0 ? '#6366f1' : '#2563EB',
            '--dur':   `${6 + (i % 5)}s`,
            '--delay': `${(i * 0.7) % 4}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── SVG neural lines ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#2563EB" stopOpacity="0" />
              <stop offset="50%"  stopColor="#6366F1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,180 Q400,120 800,180 T1600,180" stroke="url(#lg1)" strokeWidth="1.5" fill="none" className="neural-line" />
          <path d="M0,350 Q350,280 700,350 T1400,350" stroke="url(#lg1)" strokeWidth="1"   fill="none" className="neural-line" style={{ animationDelay: '2s' }} />
          <path d="M0,520 Q450,460 900,520 T1800,520" stroke="url(#lg1)" strokeWidth="1"   fill="none" className="neural-line" style={{ animationDelay: '4s' }} />
        </svg>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <AnimatedElement animation="fade-down" delay={50}>
              <div className="inline-flex justify-center lg:justify-start mb-6">
                <span className="badge-pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse-slow" />
                  Soluções Premium em Inteligência Artificial
                </span>
              </div>
            </AnimatedElement>

            {/* H1 */}
            <AnimatedElement animation="fade-up" delay={150}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-white">
                Transforme seu<br />
                Negócio com{' '}
                <span className="text-gradient">
                  Inteligência<br />Artificial
                </span>
              </h1>
            </AnimatedElement>

            {/* Subtitle */}
            <AnimatedElement animation="fade-up" delay={250}>
              <p className="text-lg md:text-xl text-brand-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Desenvolvemos soluções de IA sob medida: automação inteligente,
                decisões estratégicas e resultados mensuráveis desde os primeiros 90 dias.
              </p>
            </AnimatedElement>

            {/* CTAs */}
            <AnimatedElement animation="fade-up" delay={350}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                   className="btn-primary text-base px-8 py-4">
                  Fale com Especialistas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="btn-secondary text-base px-8 py-4">
                  Conhecer Soluções
                </a>
              </div>
            </AnimatedElement>

            {/* Metrics */}
            <AnimatedElement animation="fade-up" delay={450}>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <p className="stat-number">70%</p>
                  <p className="text-sm text-brand-muted mt-1">Redução em Custos</p>
                </div>
                <div className="divider-v self-center" />
                <div className="text-center lg:text-left">
                  <p className="stat-number">30%</p>
                  <p className="text-sm text-brand-muted mt-1">Mais Eficiência</p>
                </div>
                <div className="divider-v self-center" />
                <div className="text-center lg:text-left">
                  <p className="stat-number">90d</p>
                  <p className="text-sm text-brand-muted mt-1">ROI Garantido</p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* ── RIGHT: Dashboard mockup ── */}
          <AnimatedElement animation="fade-left" delay={200} className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative animate-float">
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                   style={{ background: 'linear-gradient(135deg, #2563EB, #6366F1, #7C3AED)' }} />

              {/* Main dashboard card */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-indigo/25"
                   style={{ background: 'rgba(17,24,39,0.85)', backdropFilter: 'blur(20px)' }}>

                {/* Card header bar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-brand-muted tracking-wider">ConectaOne · AI Dashboard</span>
                </div>

                <div className="p-6">
                  {/* Top stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Processos Automatizados', value: '247', color: '#60a5fa', icon: <Zap className="w-4 h-4" /> },
                      { label: 'Taxa de Sucesso',          value: '98%', color: '#a78bfa', icon: <Bot className="w-4 h-4" /> },
                      { label: 'Economia Gerada',          value: 'R$1.2M',color: '#6ee7b7', icon: <BarChart3 className="w-4 h-4" /> },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl p-3 text-center"
                           style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <div className="flex justify-center mb-2" style={{ color: stat.color }}>{stat.icon}</div>
                        <p className="font-black text-lg text-white" style={{ fontFamily: 'Exo 2, sans-serif' }}>{stat.value}</p>
                        <p className="text-[10px] text-brand-muted leading-tight mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart bars */}
                  <div className="rounded-xl p-4 mb-4"
                       style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="text-xs text-brand-muted mb-3">Automações Executadas — últimos 7 dias</p>
                    <div className="flex items-end gap-2 h-16">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm transition-all"
                             style={{
                               height: `${h}%`,
                               background: `linear-gradient(180deg, ${i === 5 ? '#6366F1' : 'rgba(99,102,241,0.4)'}, ${i === 5 ? '#2563EB' : 'rgba(37,99,235,0.2)'})`,
                             }} />
                      ))}
                    </div>
                  </div>

                  {/* Integration tags */}
                  <div className="flex flex-wrap gap-2">
                    {['OpenAI', 'n8n', 'Make', 'SAP B1', 'WhatsApp', 'CRM'].map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                            style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-4 animate-float"
                   style={{ animationDelay: '1s' }}>
                <div className="rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-glow-indigo"
                     style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', fontFamily: 'Exo 2, sans-serif' }}>
                  ⚡ +247 processos/dia
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float"
                   style={{ animationDelay: '2.5s' }}>
                <div className="rounded-2xl px-4 py-3 text-sm font-semibold shadow-glow-indigo"
                     style={{ background: 'rgba(17,24,39,0.95)', border: '1px solid rgba(99,102,241,0.4)', fontFamily: 'Exo 2, sans-serif', color: '#a5b4fc' }}>
                  ✓ ROI em 90 dias
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
