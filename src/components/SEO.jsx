import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "אלי מזיגית - נגרות מקצועית בהתאמה אישית | מטבחים, חדרי שינה, ספריות",
  description = "אלי מזיגית - נגרות מקצועית עם מעל 30 שנות ניסיון. מטבחים מותאמים אישית, חדרי שינה, ספריות וארונות. חומרי גלם איכותיים, עיצוב מוקפד ומחירים תחרותיים. שירות בכל הארץ - 052-5119685",
  image = "/images/logo.png",
  url = "https://elimazigit.com",
  type = "website",
  keywords = "נגרות, מטבחים, חדרי שינה, ספריות, ארונות, רהיטים, התאמה אישית, אלי מזיגית, נגר, מטבח מותאם, חדר שינה מותאם, ספריה מותאמת, נגרות מקצועית, אבו סנאן, גליל, צפון"
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "אלי מזיגית - נגרות מקצועית",
    "image": `${url}${image}`,
    "telephone": "+972-52-5119685",
    "email": "elimzghanna123@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "אבו סנאן 166",
      "addressLocality": "אבו סנאן",
      "addressRegion": "גליל",
      "addressCountry": "IL"
    },
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
    "url": url,
    "description": description,
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.0853,
        "longitude": 34.7818
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "שירותי נגרות",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "מטבחים מותאמים אישית",
            "description": "מטבחים מותאמים אישית עם חומרי גלם איכותיים ועיצוב מוקפד"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "חדרי שינה מותאמים אישית",
            "description": "חדרי שינה מותאמים אישית עם פתרונות אחסון חכמים"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ספריות וארונות מותאמים אישית",
            "description": "ספריות וארונות מותאמים אישית לכל חלל"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="אלי מזיגית - נגרות מקצועית" />
      <meta property="og:locale" content="he_IL" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
