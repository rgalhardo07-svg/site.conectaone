import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
}

const BlogCard = ({ title, description, category, slug }: BlogCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium text-conecta-300 bg-conecta-900/30 rounded-full border border-conecta-700/50">
          {category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>
      
      <Link
        to={`/blog/${slug}`}
        className="inline-flex items-center text-conecta-400 hover:text-conecta-300 font-medium transition-colors"
      >
        Ler mais
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default BlogCard; 