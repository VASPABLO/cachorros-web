import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/img/hero.png',
  ogUrl = 'https://cachorros-futbol.com'
}) => {
  const fullTitle = `${title} | Proyecto Cachorros - Escuela de Fútbol`;
  
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Datos Estructurados */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Proyecto Cachorros",
          "description": description,
          "url": ogUrl,
          "logo": ogImage,
          "sport": "Soccer",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CR"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
