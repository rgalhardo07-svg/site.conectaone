import { useState } from 'react';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import SEO from '@/components/SEO';
import VisualEffects from '@/components/VisualEffects';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Posts do blog (serão gerados por IA)
  const allPosts = [
    {
      title: "Inteligência Artificial na Automação de Processos",
      description: "Como a IA está transformando a maneira como as empresas automatizam seus processos e aumentam sua eficiência operacional.",
      category: "Automação",
      slug: "ia-automacao-processos"
    },
    {
      title: "Integração de Sistemas com IA",
      description: "Descubra como a integração inteligente de sistemas pode revolucionar a comunicação entre diferentes ferramentas e departamentos.",
      category: "Integração",
      slug: "integracao-sistemas-ia"
    },
    {
      title: "O Futuro da IA nos Negócios",
      description: "As principais tendências e inovações em IA que estão moldando o futuro dos negócios e da transformação digital.",
      category: "Tendências",
      slug: "futuro-ia-negocios"
    },
    {
      title: "Machine Learning para Empresas",
      description: "Aplicações práticas de machine learning que estão ajudando empresas a tomar decisões mais inteligentes e precisas.",
      category: "Machine Learning",
      slug: "machine-learning-empresas"
    },
    {
      title: "Segurança e IA",
      description: "Como implementar soluções de IA de forma segura e ética, protegendo dados sensíveis e garantindo conformidade.",
      category: "Segurança",
      slug: "seguranca-ia"
    },
    {
      title: "Escolhendo Soluções de IA",
      description: "Um guia prático para selecionar as melhores soluções de IA que se adequam às necessidades do seu negócio.",
      category: "Consultoria",
      slug: "escolhendo-solucoes-ia"
    }
  ];

  // Filtra os posts com base no termo de busca
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lista única de categorias
  const categories = [...new Set(allPosts.map(post => post.category))];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <SEO 
        title="Insights ConectaOne | IA e Automação"
        description="Insights e novidades sobre Inteligência Artificial, automação e transformação digital para empresas."
      />
      <Header />
      
      <main className="flex-grow py-16 md:py-24 relative overflow-hidden">
        <VisualEffects variant="primary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Insights <span className="text-conecta-400">&amp; Inovação</span>
            </h1>
            <p className="text-lg text-gray-300">
              Conteúdo atualizado sobre IA, automação e transformação digital
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-conecta-400 focus:border-conecta-400 outline-none text-white placeholder-gray-400"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSearchTerm(category)}
                    className="px-4 py-1 text-sm rounded-full border border-conecta-700/50 text-conecta-400 hover:bg-conecta-900/30 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid de Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          {/* Mensagem quando não há resultados */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300">
                Nenhum insight encontrado para "{searchTerm}".
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog; 