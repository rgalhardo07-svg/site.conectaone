import { useState } from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const WhatsAppButton = () => {
  const url = "https://api.whatsapp.com/send/?phone=5511974178200&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+as+solu%C3%A7%C3%B5es+personalizadas+da+ConectaOne.&type=phone_number&app_absent=0";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
       style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', boxShadow: '0 4px 24px rgba(22,163,74,0.45)' }}
       aria-label="Contato via WhatsApp">
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.9 1 1-3.8-.2-.4C2.5 15.5 2 13.8 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.3.2-.6.1-1.7-.9-2.8-1.6-4-3.6-.3-.5.3-.5.9-1.7.1-.2 0-.4-.1-.6s-.7-1.8-1-2.4c-.3-.7-.6-.6-.8-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/>
      </svg>
    </a>
  );
};

const inputClass = `
  w-full px-4 py-3 rounded-xl text-sm text-white placeholder-brand-muted/50
  focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all duration-200
`;
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
};
const inputFocusStyle = {
  border: '1px solid rgba(99,102,241,0.5)',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511974178200&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+as+solu%C3%A7%C3%B5es+personalizadas+da+ConectaOne.&type=phone_number&app_absent=0";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('https://n8n.galhardo.online/webhook/40b563ec-3012-4ed1-bea5-ec46dadd0130', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden aurora-bg">
      <WhatsAppButton />

      <div className="orb w-[500px] h-[500px] -bottom-20 -left-20 opacity-25"
           style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.20) 0%, transparent 70%)' }} />

      <div className="section-container relative z-10">
        <AnimatedElement>
          <p className="section-tag text-center">Entre em Contato</p>
          <h2 className="section-title">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
        </AnimatedElement>
        <AnimatedElement delay={150}>
          <p className="section-subtitle mb-14">
            Nossa equipe está pronta para entender as necessidades da sua empresa
            e mostrar como a IA pode transformar seus resultados.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <AnimatedElement animation="fade-right" className="lg:col-span-2">
            <div className="rounded-2xl p-7 md:p-10"
                 style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(99,102,241,0.18)', backdropFilter: 'blur(16px)' }}>
              <h3 className="text-xl font-black text-white mb-7" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Fale com um Especialista
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: 'name',    label: 'Nome completo',   type: 'text',  placeholder: 'Seu nome' },
                    { id: 'email',   label: 'Email',           type: 'email', placeholder: 'seu@email.com' },
                    { id: 'phone',   label: 'Telefone',        type: 'tel',   placeholder: '(11) 90000-0000' },
                    { id: 'company', label: 'Empresa',         type: 'text',  placeholder: 'Nome da empresa' },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-xs font-semibold text-brand-muted mb-2 tracking-wide uppercase">
                        {f.label}
                      </label>
                      <input
                        type={f.type} id={f.id} name={f.id}
                        value={formData[f.id as keyof typeof formData]}
                        onChange={handleChange}
                        className={inputClass}
                        style={inputStyle}
                        placeholder={f.placeholder}
                        required={f.id === 'name' || f.id === 'email'}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, inputStyle)}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-muted mb-2 tracking-wide uppercase">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Descreva brevemente sua necessidade ou desafio..."
                    required
                    onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button type="submit" disabled={status === 'submitting'}
                          className="btn-primary flex-1 py-4 text-base">
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Enviando…
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Solicitação
                      </>
                    )}
                  </button>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                     className="btn-whatsapp flex-1 py-4 text-base justify-center flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>

                {status === 'success' && (
                  <div className="rounded-xl p-4 text-center text-sm font-medium"
                       style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#6ee7b7' }}>
                    ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-xl p-4 text-center text-sm font-medium"
                       style={{ background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}>
                    Ocorreu um erro. Por favor tente novamente ou use o WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </AnimatedElement>

          {/* Info card */}
          <AnimatedElement animation="fade-left" delay={100}>
            <div className="rounded-2xl p-7 h-full flex flex-col"
                 style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
              <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Informações de Contato
              </h3>

              <div className="space-y-5 mb-8">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'contato@conectaone.com', href: 'mailto:contato@conectaone.com' },
                  { icon: <Phone className="w-4 h-4" />, label: 'Telefone', value: '+55 (11) 97417-8200', href: 'tel:+5511974178200' },
                ].map((c, i) => (
                  <a key={i} href={c.href}
                     className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-indigo"
                         style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-muted uppercase tracking-wide">{c.label}</p>
                      <p className="text-sm font-semibold text-white">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-5 border-t border-white/6 mb-6">
                <p className="text-xs font-semibold text-white mb-2">Horário de Atendimento</p>
                <p className="text-xs text-brand-muted">Segunda a Sexta: 9h às 18h</p>
                <p className="text-xs text-brand-muted">Sábado: 9h às 12h</p>
              </div>

              <div className="pt-5 border-t border-white/6 flex-1">
                <p className="text-xs font-semibold text-white mb-3">Nossas Soluções</p>
                <div className="flex flex-wrap gap-2">
                  {['SAP Business One', 'Automação IA', 'Integração', 'Análise Preditiva', 'Chatbot', 'Micro SaaS'].map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(99,102,241,0.10)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.20)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-6 pt-5 border-t border-white/6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                  <p className="text-xs text-brand-muted">Resposta em até <strong className="text-white">2 horas</strong> em dias úteis</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

        </div>
      </div>
    </section>
  );
};

export default Contact;
