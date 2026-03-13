import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import VisualEffects from './VisualEffects';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A implementação do assistente virtual da ConectaOne aumentou em 30% nossa taxa de conversão de leads. Pacientes que antes desistiam por falta de resposta imediata agora são atendidos 24/7, resultando em um ROI de 320% no primeiro trimestre.",
      author: "Dra. Ana Silva",
      role: "Diretora Clínica",
      company: "Centro Odontológico Sorrisos"
    },
    {
      quote: "As soluções de automação implementadas pela ConectaOne liberaram nossa equipe comercial de 20 horas semanais em tarefas administrativas. Esse tempo foi redirecionado para atividades estratégicas, gerando um aumento de 32% no faturamento trimestral.",
      author: "Roberto Mendes",
      role: "Diretor Comercial",
      company: "Distribuidora Centro-Oeste"
    },
    {
      quote: "A integração entre nossos sistemas financeiros e ERP reduziu nosso ciclo de recebimento em 7 dias e eliminou erros de conciliação que nos custavam cerca de R$15.000 mensais. A ConectaOne entregou uma solução que se pagou em menos de 60 dias.",
      author: "Carla Rodrigues",
      role: "Diretora Financeira",
      company: "Indústria Nacional Ltda."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <VisualEffects variant="primary" />
      <div className="section-container">
        <AnimatedElement>
          <h2 className="section-title">
            Resultados <span className="text-conecta-400">Comprovados</span>
          </h2>
        </AnimatedElement>
        
        <AnimatedElement delay={200}>
          <p className="section-subtitle">
            Nossos clientes transformaram seus negócios com soluções inteligentes que geraram 
            impacto financeiro mensurável. Conheça algumas histórias de sucesso.
          </p>
        </AnimatedElement>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="relative bg-gray-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-700">
            <div className="absolute -top-5 -left-5 bg-conecta-500 rounded-full p-3">
              <Quote className="h-6 w-6 text-white" />
            </div>
            
            <AnimatedElement key={currentIndex} animation="fade-in">
              <div className="text-xl md:text-2xl text-gray-300 italic mb-10">
                "{testimonials[currentIndex].quote}"
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-conecta-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-conecta-700 font-semibold">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-conecta-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
