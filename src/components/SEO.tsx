import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "ConectaOne | Soluções em IA e Automação Inteligente para Empresas",
  description = "Transforme seu negócio com soluções personalizadas em Inteligência Artificial. Automação de processos, integração de sistemas, análise preditiva e consultoria especializada em IA para aumentar produtividade e reduzir custos operacionais.",
  canonical = "https://conectaone.com.br"
}: SEOProps) => {
  const keywords = [
    "inteligência artificial",
    "IA para empresas",
    "automação inteligente",
    "integração de sistemas",
    "análise preditiva",
    "consultoria em IA",
    "transformação digital",
    "automação de processos",
    "soluções empresariais",
    "tecnologia empresarial",
    "IA corporativa",
    "machine learning",
    "otimização de processos",
    "eficiência operacional",
    "inovação tecnológica",
    "chatbots inteligentes",
    "RPA automação robótica",
    "business intelligence",
    "data science",
    "algoritmos de IA",
    "processamento de linguagem natural",
    "visão computacional",
    "deep learning",
    "neural networks",
    "AI consulting",
    "digital transformation",
    "workflow automation",
    "predictive analytics",
    "smart solutions",
    "enterprise AI",
    "ConectaOne",
    "soluções personalizadas IA",
    "consultoria tecnológica",
    "implementação IA empresas",
    "desenvolvimento de plataformas",
    "micro SaaS personalizado",
    "software sob medida",
    "plataformas digitais",
    "desenvolvimento web",
    "APIs robustas",
    "arquitetura moderna",
    "soluções escaláveis",
    "monetização digital",
    "plataforma como serviço"
  ];

  return (
    <Helmet>
      {/* Títulos e Descrições Básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Links Canônicos e Alternativas */}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={`${canonical}`} hrefLang="pt-BR" />

      {/* Open Graph - Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="ConectaOne" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={`${canonical}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${canonical}/og-image.png`} />

      {/* Metadados Estruturados - Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ConectaOne",
          "url": canonical,
          "logo": `${canonical}/logo.png`,
          "description": description,
          "sameAs": [
            "https://www.linkedin.com/company/conectaone",
            "https://www.instagram.com/conectaone"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": "2-10",
          "industry": "Information Technology",
          "serviceArea": {
            "@type": "Country",
            "name": "Brazil"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Soluções em IA e Automação",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Inteligência Artificial Empresarial",
                  "description": "Soluções de IA para otimização de processos empresariais"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desenvolvimento de Plataformas",
                  "description": "Criação de plataformas digitais e micro SaaS personalizados"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Automação de Processos",
                  "description": "Automação inteligente para eliminar tarefas repetitivas"
                }
              }
            ]
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-97417-8200",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          }
        })}
      </script>

      {/* Tags Adicionais */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="ConectaOne" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Meta tags adicionais para SEO */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />
      <meta name="geo.position" content="-23.5505;-46.6333" />
      <meta name="ICBM" content="-23.5505, -46.6333" />
      <meta name="language" content="pt-BR" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default SEO; 