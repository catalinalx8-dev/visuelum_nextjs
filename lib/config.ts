export const siteConfig = {
  name: 'Visuelum',
  tagline: 'Clienți noi pentru afacerea ta — website gratuit, social media activ, Google pe primul loc.',
  taglineShort: 'Agenție Marketing Digital Constanța — Website Gratuit, de la 349 RON/lună.',
  description:
    'Agenție de marketing digital din Constanța. Website profesional creat gratuit, SEO local, social media management, Google Ads și fotografie — totul într-un singur abonament lunar. Apari primul pe Google în Constanța.',
  url: 'https://visuelum.ro',
  email: 'contact@visuelum.ro',
  phone: '+40 743 371 899',
  phoneDisplay: '0743 371 899',
  whatsapp: 'https://wa.me/40743371899',
  address: 'Constanța, România',
  geo: { lat: 44.1598, lng: 28.6348 },
  areaServed: ['Constanța', 'Mamaia', 'Năvodari', 'Mangalia', 'Tulcea', 'Eforie', 'Techirghiol', 'Ovidiu', 'Dobrogea'],
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
    cc: 'alexandru.ctl@gmail.com',
  },
} as const

/**
 * Maintenance mode — set MAINTENANCE_MODE=1 in your environment variables to
 * redirect every public route to /mentenanta.  Set to "0" (or leave unset) to
 * disable and serve the site normally.
 *
 * Checked at the edge in middleware.ts so no rebuild is required on hosts
 * that support runtime environment variables (Vercel, Railway, etc.).
 */
export const maintenanceConfig = {
  /** "1" = maintenance active, "0" (or anything else) = site live */
  enabled: process.env.MAINTENANCE_MODE === '1',
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
  /** Promotional offer popup */
  offerPopup: true,
} as const

/**
 * Offer Popup configuration — manage the promotional popup from here.
 * Toggle `enabled` to show/hide the popup across the site.
 * Set `pages` to restrict display to specific routes, or leave empty to show on all pages.
 */
export const offerPopupConfig = {
  /** Whether the popup is currently active */
  enabled: true,
  /** Title displayed in the popup */
  title: '🎉 Ofertă Specială!',
  /** Main message / description */
  message: 'Website gratuit + abonament de la 349 RON/lună. Profită acum de oferta noastră limitată!',
  /** Label for the CTA button */
  buttonText: 'Află mai mult',
  /** Link the CTA button navigates to */
  buttonHref: '/pachete',
  /** Optional secondary (dismiss) button label */
  dismissText: 'Poate mai târziu',
  /** Delay in milliseconds before the popup appears (0 = immediate) */
  delayMs: 3000,
  /** Pages where the popup should appear (empty array = all pages) */
  pages: [] as string[],
} as const

/**
 * SEO configuration — keywords and meta used across pages.
 * Add or remove keywords here to update search targeting globally.
 */
export const seoConfig = {
  keywords: [
    // Primary — high intent, local
    'marketing digital Constanța',
    'agenție marketing digital Constanța',
    'website profesional Constanța',
    'website gratuit Constanța',
    'creare website Constanța',
    'SEO Constanța',
    'SEO local Constanța',
    'optimizare Google Constanța',
    'Google Ads Constanța',
    'social media Constanța',
    'administrare social media Constanța',
    'fotografie profesionala Constanta',
    'fotograf profesionist Constanta',
    'branding Constanța',
    'agenție publicitate Constanța',
    // Secondary — broader local
    'marketing online Dobrogea',
    'agenție marketing Mamaia',
    'website Mamaia',
    'creare website Mamaia',
    'SEO Mangalia',
    'marketing digital Năvodari',
    // Service keywords
    'administrare site web',
    'optimizare Google Business Profile',
    'campanii Google Ads Romania',
    'Meta Ads Facebook Instagram Romania',
    'identitate vizuala logo Constanta',
    'meniu digital restaurant Constanta',
    'fotografie restaurant Constanta',
    'fotografie AirBnb Constanta',
    // Long-tail — AIO & voice search
    'cum sa apari pe Google Constanta',
    'abonament marketing digital lunar',
    'website gratuit pentru afaceri mici Romania',
    'agentie seo constanta',
  ],
  /** Open-Graph / Twitter card default image (1200×630) */
  ogImage: '/og-default.jpg',
} as const
