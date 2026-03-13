import { CheckCircle, Users, Clock, Shield, Award, TrendingUp, ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const advantages = [
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: 'Resultados Mensuráveis',
    description: 'Soluções com métricas claras e KPIs definidos. Você acompanha o ROI desde a primeira semana.',
    color: '#6ee7b7',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Equipe Especializada',
    description: 'Combinamos expertise técnica em IA com profundo entendimento de negócios para entregar soluções reais.',
    color: '#60a5fa',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Implementação Ágil',
    description: 'Metodologia que garante entregas rápidas e adaptáveis. Valor tangível desde as primeiras semanas.',
    color: '#fcd34d',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Segurança Avançada',
    description: 'Seguimos os mais altos padrões de segurança da informação, protegendo seus dados e garantindo compliance.',
    color: '#f9a8d4',
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: 'Soluções Sob Medida',
    description: 'Nada de template genérico. Desenvolvemos tecnologia 100% customizada para sua realidade e objetivos.',
    color: '#a78bfa',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Escalabilidade Garantida',
    description: 'Arquitetura projetada para crescer com você. Sem reinvestimentos pesados conforme o negócio escala.',
    color: '#34d399',
  },
];

const metrics = [
  { value: '+50',    label: 'Projetos Entregues' },
  { value: '98%',   label: 'Satisfação dos Clientes' },
  { value: '90d',   label: 'Prazo Médio de ROI' },
  { value: '24/7',  label: 'Suporte Garantido' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 relative overflow-hidden aurora-bg">

      <div className="orb orb-animate-alt w-[500px] h-[500px] -top-20 -right-40 opacity-40"
           style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />

      <div className="section-container relative z-10">

        {/* ── Metrics banner ── */}
        <AnimatedElement>
          <div className="rounded-2xl p-8 md:p-10 mb-20"
               style={{
                 background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(99,102,241,0.10), rgba(124,58,237,0.12))',
                 border: '1px solid rgba(99,102,241,0.25)',
               }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <p className="stat-number mb-1">{m.value}</p>
                  <p className="text-sm text-brand-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <AnimatedElement animation="fade-right">
              <p className="section-tag">Por que a ConectaOne?</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight text-left">
                Expertise que Transforma{' '}
                <span className="text-gradient">Desafios em Oportunidades</span>
              </h2>
              <p className="text-brand-muted mb-10 leading-relaxed">
                Nossa abordagem integra tecnologia avançada com profundo entendimento de negócios.
                Criamos soluções que não apenas automatizam processos — impulsionam crescimento
                sustentável e vantagem competitiva real.
              </p>
            </AnimatedElement>

            <div className="space-y-5">
              {advantages.slice(0, 3).map((a, i) => (
                <AnimatedElement key={i} animation="fade-right" delay={100 + i * 80}>
                  <div className="flex gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all group-hover:scale-110"
                         style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}30` }}>
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>{a.title}</h3>
                      <p className="text-sm text-brand-muted leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement delay={400}>
              <div className="mt-8">
                <a href="#contact" className="btn-primary px-8 py-4">
                  Solicitar Consultoria Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </AnimatedElement>
          </div>

          {/* Right */}
          <AnimatedElement animation="fade-left" delay={100}>
            <div className="rounded-2xl p-8"
                 style={{
                   background: 'rgba(17,24,39,0.7)',
                   border: '1px solid rgba(99,102,241,0.20)',
                   backdropFilter: 'blur(12px)',
                 }}>
              <h3 className="text-xl font-black mb-8 text-white" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Diferenciais Estratégicos
              </h3>

              <div className="space-y-5">
                {advantages.slice(3).map((a, i) => (
                  <AnimatedElement key={i} animation="fade-left" delay={150 + i * 80}>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                           style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}30` }}>
                        {a.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>{a.title}</h4>
                        <p className="text-sm text-brand-muted leading-relaxed">{a.description}</p>
                      </div>
                    </div>
                    {i < 2 && <div className="mt-5 border-t border-white/6" />}
                  </AnimatedElement>
                ))}
              </div>

              {/* Trust badge */}
              <div className="mt-8 pt-6 border-t border-white/6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                     style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}>
                  <Shield className="w-5 h-5 text-brand-indigo" />
                </div>
                <p className="text-xs text-brand-muted leading-snug">
                  <strong className="text-white">Garantia de resultados.</strong><br />
                  Se não atingirmos as metas combinadas em 90 dias, continuamos sem custo adicional.
                </p>
              </div>
            </div>
          </AnimatedElement>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
