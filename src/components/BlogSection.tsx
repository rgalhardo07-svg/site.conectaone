import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import AnimatedElement from './AnimatedElement';
import VisualEffects from './VisualEffects';

const BlogSection = () => {
  // Posts em destaque (serão gerados por IA)
  const featuredPosts = [
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
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <VisualEffects variant="secondary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Insights <span className="text-conecta-400">& Novidades</span>
            </h2>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center text-conecta-400 hover:text-conecta-300 font-medium transition-colors"
            >
              Ver mais insights
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <AnimatedElement key={post.slug} delay={200 + index * 100}>
              <BlogCard {...post} />
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={500}>
          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center text-conecta-400 hover:text-conecta-300 font-medium transition-colors"
            >
              Ver mais insights
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BlogSection; 