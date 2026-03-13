import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Controla a visibilidade do botão e o progresso do scroll
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / winHeight) * 100;
    
    setScrollProgress(scrolled);
    setIsVisible(scrolled > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-24 z-50">
      <div className="relative">
        {/* Círculo de progresso */}
        <svg
          className="w-12 h-12 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="text-conecta-600 transition-all duration-300"
            strokeWidth="8"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (scrollProgress / 100) * 251.2}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
        
        {/* Botão */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5 text-conecta-600 group-hover:text-conecta-700 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop; 