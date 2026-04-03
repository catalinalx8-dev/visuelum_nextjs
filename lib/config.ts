export const siteConfig = {
  name: 'Visuelum',
  tagline: 'Vizibilitate totală pentru afaceri invizibile.',
  taglineShort: 'Website gratuit. Social media. Google. Un abonament.',
  description:
    'Agenție de marketing digital din Constanța. Construim gratuit website-ul afacerii tale și îl administrăm lunar. Social media, SEO, Google Ads și fotografie profesională — totul într-un singur abonament lunar.',
  url: 'https://visuelum.ro',
  email: 'contact@visuelum.ro',
  phone: '+40 743 371 899',
  phoneDisplay: '0743 371 899',
  whatsapp: 'https://wa.me/40743371899',
  address: 'Constanța, România',
  geo: { lat: 44.1598, lng: 28.6348 },
  areaServed: ['Constanța', 'Mamaia', 'Năvodari', 'Mangalia', 'Tulcea', 'Dobrogea'],
  social: {
    instagram: 'https://instagram.com/visuelum',
    facebook: 'https://facebook.com/visuelum',
    tiktok: 'https://tiktok.com/@visuelum',
  },
  packages: {
    prezenta: { price: 349, anchor: null },
    crestere: { price: 649, anchor: null },
    dominare: { price: 1199, anchor: null },
  },
  resend: {
    from: 'Visuelum <noreply@visuelum.ro>',
    to: 'contact@visuelum.ro',
  },
} as const

/**
 * Feature flags — toggle site-wide functionality from one place.
 * Set to `false` to disable without touching component code.
 */
export const siteFeatures = {
  /** Floating WhatsApp contact button */
  whatsappButton: true,
  /** GDPR cookie consent banner */
  cookieBanner: true,
  /** Newsletter sign-up form in the footer */
  newsletter: true,
  /** Reading-progress bar at the top of the page */
  scrollProgress: true,
  /** Back-to-top button that appears after scrolling */
  backToTop: true,
  /** Vercel Analytics + Speed Insights */
  analytics: true,
} as const

/**
 * SEO configuration — keywords and meta used across pages.
 * Add or remove keywords here to update search targeting globally.
 */
export const seoConfig = {
  keywords: [
    'marketing digital Constanța',
    'agenție marketing digital',
    'website profesional Constanța',
    'website gratuit Constanța',
    'social media Constanța',
    'SEO local Constanța',
    'Google Ads Constanța',
    'fotografie profesionala Constanta',
    'branding Constanța',
    'agenție publicitate Constanța',
    'marketing online Dobrogea',
    'creare website Constanța',
    'administrare social media',
    'optimizare Google Business',
  ],
  /** Open-Graph / Twitter card default image (1200×630) */
  ogImage: '/og-default.jpg',
} as const
