import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "ConectaOne | Soluções em IA e Automação Inteligente para Empresas",
  description = "Transforme seu negócio com soluções personalizadas em Inteligência Artificial. Automação de processos, integração de sistemas, análise preditiva e consultoria especializada em IA para aumentar produtividade e reduzir custos operacionais.",
  canonical = "https://conectaone.com"
}: SEOProps) => {
  const keywords = [
    "inteligência artificial empresas",
    "automação inteligente",
    "consultoria IA São Paulo",
    "integração de sistemas",
    "transformação digital",
    "ConectaOne",
    "SAP Business One",
    "automação de processos",
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como a IA pode beneficiar minha empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa IA pode otimizar processos, reduzir custos operacionais e aumentar a eficiência do seu negócio através de automação inteligente, análise preditiva e integração de sistemas. Clientes relatam redução de até 70% em custos operacionais e aumento significativo em produtividade."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para implementar as soluções?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tempo de implementação varia de acordo com a complexidade do projeto. Tipicamente, soluções básicas podem ser implementadas em 2-3 semanas, enquanto projetos mais complexos podem levar de 1-2 meses."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso ter conhecimento técnico para usar as soluções?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Nossas soluções são desenvolvidas com foco na usabilidade, com interfaces intuitivas e treinamento completo para sua equipe. Além disso, oferecemos suporte contínuo."
        }
      },
      {
        "@type": "Question",
        "name": "Como é feito o suporte após a implementação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferecemos suporte técnico dedicado, monitoramento contínuo e manutenção preventiva. Nossa equipe está sempre disponível para ajustes, melhorias e resolução de dúvidas."
        }
      },
      {
        "@type": "Question",
        "name": "As soluções podem ser personalizadas para meu negócio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Todas as nossas soluções são customizadas para atender às necessidades específicas do seu negócio. Realizamos uma análise detalhada dos seus processos e objetivos para desenvolver uma solução sob medida."
        }
      }
    ]
  };

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

      {/* FAQ Schema - Rich Results no Google */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
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