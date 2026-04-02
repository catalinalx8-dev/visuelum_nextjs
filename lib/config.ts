export const siteConfig = {
  name: 'Visuelum',
  tagline: 'Vizibilitate totală pentru afaceri invizibile.',
  taglineShort: 'Website gratuit. Social media. Google. Un abonament.',
  description:
    'Agenție de marketing digital din Constanța. Construim gratuit website-ul afacerii tale și îl administrăm lunar. Social media, SEO, Google Ads și fotografie profesională — totul într-un singur abonament lunar.',
  url: 'https://visuelum.ro',
  email: 'contact@visuelum.ro',
  phone: '+40 XXX XXX XXX',
  phoneDisplay: '0XXX XXX XXX',
  whatsapp: 'https://wa.me/40XXXXXXXXX',
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
