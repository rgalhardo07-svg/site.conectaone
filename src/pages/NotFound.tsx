
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-conecta-600 mb-6">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Página não encontrada</p>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
