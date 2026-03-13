import { MessageSquare, FileSearch, Rocket, CheckCircle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const steps = [
  {
    num: '01',
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Consultoria Inicial',
    description: 'Entendemos suas necessidades, mapeamos processos e identificamos as maiores oportunidades de impacto com IA no seu negócio.',
    features: ['Análise detalhada do seu negócio', 'Identificação de oportunidades de IA', 'Avaliação de processos atuais'],
    color: '#60a5fa',
  },
  {
    num: '02',
    icon: <FileSearch className="h-6 w-6" />,
    title: 'Planejamento Estratégico',
    description: 'Desenvolvemos um plano detalhado com soluções personalizadas, cronograma realista e métricas claras de sucesso.',
    features: ['Definição de escopo e tecnologias', 'Cronograma de implementação ágil', 'KPIs e metas de resultado'],
    color: '#a78bfa',
  },
  {
    num: '03',
    icon: <Rocket className="h-6 w-6" />,
    title: 'Implementação & Resultados',
    description: 'Executamos com agilidade, treinamos sua equipe e acompanhamos os resultados continuamente para garantir o ROI.',
    features: ['Implementação ágil e iterativa', 'Treinamento completo da equipe', 'Monitoramento contínuo de resultados'],
    color: '#6ee7b7',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden"
             style={{ background: '#0a0e1a' }}>



      <div className="section-container relative z-10">

        <AnimatedElement>
          <p className="section-tag text-center">Processo</p>
          <h2 className="section-title">
            Como <span className="text-gradient">Funciona</span>
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={150}>
          <p className="section-subtitle mb-16">
            Um processo claro e eficiente para transformar seu negócio com IA.
            Simples para você, poderoso nos bastidores.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimatedElement key={i} delay={150 + i * 120}>
              <div className="relative flex flex-col h-full rounded-2xl p-7 transition-all duration-300 group"
                   style={{
                     background: 'rgba(255,255,255,0.03)',
                     border: '1px solid rgba(255,255,255,0.07)',
                   }}
                   onMouseEnter={e => {
                     const el = e.currentTarget as HTMLDivElement;
                     el.style.border = `1px solid ${step.color}40`;
                     el.style.boxShadow = `0 12px 40px ${step.color}15`;
                     el.style.transform = 'translateY(-6px)';
                   }}
                   onMouseLeave={e => {
                     const el = e.currentTarget as HTMLDivElement;
                     el.style.border = '1px solid rgba(255,255,255,0.07)';
                     el.style.boxShadow = 'none';
                     el.style.transform = 'translateY(0)';
                   }}>

                {/* Step number (large, background) */}
                <div className="absolute top-4 right-5 font-black text-6xl leading-none select-none pointer-events-none"
                     style={{ fontFamily: 'Exo 2, sans-serif', color: `${step.color}12` }}>
                  {step.num}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                     style={{ background: `${step.color}18`, color: step.color, border: `1px solid ${step.color}30` }}>
                  {step.icon}
                </div>

                {/* Step label */}
                <span className="text-xs font-bold tracking-widest uppercase mb-3 block"
                      style={{ color: step.color }}>
                  Etapa {step.num}
                </span>

                <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {step.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: step.color }} />
                      <span className="text-brand-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedElement delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm text-brand-muted"
                 style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              Do diagnóstico à primeira entrega em até 2 semanas
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HowItWorks;
