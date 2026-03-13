import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import VisualEffects from './VisualEffects';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como a IA pode beneficiar minha empresa?",
      answer: "Nossa IA pode otimizar processos, reduzir custos operacionais e aumentar a eficiência do seu negócio através de automação inteligente, análise preditiva e integração de sistemas. Clientes relatam redução de até 70% em custos operacionais e aumento significativo em produtividade."
    },
    {
      question: "Quanto tempo leva para implementar as soluções?",
      answer: "O tempo de implementação varia de acordo com a complexidade do projeto. Tipicamente, soluções básicas podem ser implementadas em 2-3 semanas, enquanto projetos mais complexos podem levar de 1-2 meses. Desenvolvemos um cronograma detalhado baseado nas suas necessidades específicas."
    },
    {
      question: "Preciso ter conhecimento técnico para usar as soluções?",
      answer: "Não. Nossas soluções são desenvolvidas com foco na usabilidade, com interfaces intuitivas e treinamento completo para sua equipe. Além disso, oferecemos suporte contínuo para garantir que você aproveite ao máximo nossas ferramentas."
    },
    {
      question: "Como é feito o suporte após a implementação?",
      answer: "Oferecemos suporte técnico dedicado, monitoramento contínuo e manutenção preventiva. Nossa equipe está sempre disponível para ajustes, melhorias e resolução de dúvidas, garantindo que sua solução continue funcionando com máxima eficiência."
    },
    {
      question: "As soluções podem ser personalizadas para meu negócio?",
      answer: "Sim. Todas as nossas soluções são customizadas para atender às necessidades específicas do seu negócio. Realizamos uma análise detalhada dos seus processos e objetivos para desenvolver uma solução sob medida que maximize os resultados."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <VisualEffects variant="tertiary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <h2 className="section-title">
            Perguntas <span className="text-conecta-400">Frequentes</span>
          </h2>
        </AnimatedElement>
        
        <AnimatedElement delay={200}>
          <p className="section-subtitle mb-12">
            Tire suas dúvidas sobre nossas soluções em Inteligência Artificial e como podemos ajudar seu negócio
          </p>
        </AnimatedElement>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} delay={300 + index * 100}>
              <div className="mb-4">
                <button
                  className="w-full flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-700"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-left font-medium text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-conecta-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-conecta-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-800 border-t border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 