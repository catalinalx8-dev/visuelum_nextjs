import { siteConfig } from './config'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: siteConfig.name,
    legalName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-default.jpg`,
    logo: `${siteConfig.url}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Constanța',
      addressLocality: 'Constanța',
      addressRegion: 'CT',
      postalCode: '900000',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: Object.values(siteConfig.social),
    priceRange: '€€',
    currenciesAccepted: 'RON',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii Marketing Digital',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Profesional Gratuit',
            description: 'Website profesional creat gratuit, mobil-optimizat, SEO din fundație, livrat în 14 zile.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: 349,
            priceCurrency: 'RON',
            unitText: 'lună',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management Constanța',
            description: 'Gestionare completă Instagram, Facebook, TikTok — postări zilnice, stories, copywriting.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Local Constanța',
            description: 'Optimizare SEO locală: Google Business Profile, audit tehnic, conținut optimizat pentru Constanța.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fotografie Profesională Constanța',
            description: 'Fotografie profesională la locație cu Sony A7 II. Livrare în 48h, editare Lightroom inclusă.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads & Meta Ads',
            description: 'Campanii PPC Google și Meta gestionate profesional. Optimizare zilnică, raportare lunară.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branding & Identitate Vizuală',
            description: 'Logo profesional, manual de brand, materiale grafice pentru print și digital.',
          },
        },
      ],
    },
    knowsAbout: [
      'Marketing Digital',
      'SEO Local',
      'Social Media Management',
      'Google Ads',
      'Website Design',
      'Branding',
      'Fotografie Profesională',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function articleSchema({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  modifiedAt?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${siteConfig.url}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: modifiedAt ?? publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
