import {
  BrainCircuit,
  Cpu,
  GitMerge,
  BarChart3,
  Bot,
  Layers,
  Laptop,
  Building2,
  ArrowRight,
} from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const services = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: 'IA para Resultados Empresariais',
    description:
      'Transforme dados em decisões estratégicas. Automatizamos processos e identificamos oportunidades para aumentar receita e reduzir custos operacionais com IA de última geração.',
    highlight: true,
    color: '#60a5fa',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Automação de Processos',
    description:
      'Elimine tarefas repetitivas e erros operacionais. Automatizamos seus fluxos de trabalho para liberar o potencial da sua equipe e garantir consistência nos resultados.',
    color: '#a78bfa',
  },
  {
    icon: <GitMerge className="h-6 w-6" />,
    title: 'Integração de Sistemas',
    description:
      'Conecte todos os seus sistemas em uma plataforma inteligente, eliminando retrabalho, silos de dados e aumentando a produtividade de ponta a ponta.',
    color: '#6ee7b7',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Análise Preditiva',
    description:
      'Transforme dados em insights estratégicos. Tome decisões mais precisas com análises avançadas que antecipam tendências e comportamentos de mercado.',
    color: '#fcd34d',
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Atendimento Inteligente',
    description:
      'Melhore a experiência dos seus clientes com atendimento personalizado 24/7 e qualificação de leads por IA conversacional integrada ao WhatsApp e CRM.',
    color: '#f9a8d4',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Plataformas & Micro SaaS',
    description:
      'Desenvolvemos plataformas digitais completas e micro SaaS personalizados. Arquitetura moderna, APIs robustas e interfaces intuitivas para monetizar seu conhecimento.',
    color: '#60a5fa',
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: 'Desenvolvimento Customizado',
    description:
      'Criamos soluções tecnológicas sob medida com foco em usabilidade, performance e resultados mensuráveis — do MVP ao produto escalável.',
    color: '#a78bfa',
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'SAP Business One',
    description:
      'Implementação, desenvolvimento de add-ons e integrações completas em SAP Business One. Maximize a eficiência operacional com o ERP integrado às mais modernas tecnologias de IA.',
    color: '#6ee7b7',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden"
             style={{ background: '#0e1220' }}>

      {/* Subtle orb */}
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

      <div className="section-container relative z-10">

        {/* Header */}
        <AnimatedElement>
          <p className="section-tag text-center">O que entregamos</p>
          <h2 className="section-title">
            Soluções <span className="text-gradient">Sob Medida</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={150}>
          <p className="section-subtitle mb-16">
            Cada projeto é único. Desenvolvemos e implementamos tecnologia personalizada
            para cada necessidade — com foco em impacto real e ROI mensurável.
          </p>
        </AnimatedElement>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimatedElement key={i} delay={100 + i * 60}>
              <div
                className={`group relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300 cursor-default ${
                  s.highlight ? 'ring-1 ring-brand-indigo/50' : ''
                }`}
                style={{
                  background: s.highlight
                    ? 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(99,102,241,0.08))'
                    : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${s.highlight ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.07)'}`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${s.color}55`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${s.color}20, 0 0 0 1px ${s.color}30`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${s.highlight ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.07)'}`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                     style={{ background: `${s.color}18`, border: `1px solid ${s.color}30`, color: s.color }}>
                  {s.icon}
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-white mb-3 leading-snug" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed flex-1">
                  {s.description}
                </p>

                {s.highlight && (
                  <div className="mt-4 pt-4 border-t border-brand-indigo/20">
                    <span className="text-xs font-semibold text-brand-indigo/80 flex items-center gap-1">
                      Mais solicitado <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedElement delay={500}>
          <div className="mt-16 text-center">
            <a href="#contact" className="btn-primary px-10 py-4 text-base">
              Solicitar Proposta Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;
