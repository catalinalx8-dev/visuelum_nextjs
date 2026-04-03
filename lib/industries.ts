export interface Industry {
  slug: string
  emoji: string
  title: string
  shortDesc: string
  services: string[]
  highlight: string
}

export const industries: Industry[] = [
  {
    slug: 'restaurante-cafenele',
    emoji: '🍽️',
    title: 'Restaurante & Cafenele',
    shortDesc: 'Meniu digital, fotografii apetisante, rezervări online, Instagram activ.',
    services: ['Fotografie meniu', 'Social media zilnic', 'Google Business', 'Website cu rezervări'],
    highlight: 'Creștem rezervările cu 40%+',
  },
  {
    slug: 'saloane-barber',
    emoji: '✂️',
    title: 'Saloane & Barber',
    shortDesc: 'Înainte și după, stories cu clienți mulțumiți, programări online.',
    services: ['Instagram + TikTok', 'Fotografii rezultate', 'Website cu programări', 'Google Maps top'],
    highlight: 'Programări noi în fiecare zi',
  },
  {
    slug: 'clinici-cabinete',
    emoji: '🏥',
    title: 'Clinici & Cabinete',
    shortDesc: 'Credibilitate online, recenzii gestionate, conținut educativ.',
    services: ['Website profesional', 'SEO medical', 'Gestiune recenzii', 'Google Ads'],
    highlight: 'Mai mulți pacienți din Google',
  },
  {
    slug: 'pensiuni-cazare',
    emoji: '🏨',
    title: 'Pensiuni & Cazare',
    shortDesc: 'Fotografii de top ale camerelor, optimizare platforme, sezon extins.',
    services: ['Fotografii profesionale', 'Social media sezonier', 'Website rezervări', 'Google Business'],
    highlight: 'Rezervări directe, fără comision',
  },
  {
    slug: 'fitness-sporturi',
    emoji: '💪',
    title: 'Fitness & Sporturi',
    shortDesc: 'Video Reels motivaționale, înainte/după, promoții sezoniere.',
    services: ['Reels & TikTok', 'Social media activ', 'Website + programări', 'Meta Ads'],
    highlight: 'Abonamente noi lunar',
  },
  {
    slug: 'retail-magazine',
    emoji: '🛍️',
    title: 'Retail & Magazine',
    shortDesc: 'Fotografii produse, promoții online, Google Shopping.',
    services: ['Fotografii produse', 'Catalog digital', 'Google Shopping', 'Meta Ads'],
    highlight: 'Vânzări online în creștere',
  },
  {
    slug: 'agentii-imobiliare',
    emoji: '🏠',
    title: 'Agenții Imobiliare',
    shortDesc: 'Fotografii proprietăți, lead-uri calificate din Google Ads.',
    services: ['Foto proprietăți', 'Website listare', 'Google Ads', 'Social media'],
    highlight: 'Lead-uri calificate zilnic',
  },
  {
    slug: 'cabinete-juridice',
    emoji: '⚖️',
    title: 'Cabinete Juridice',
    shortDesc: 'Credibilitate online, conținut educativ, clienți care te caută pe Google.',
    services: ['Website profesional', 'SEO local', 'Blog juridic', 'Google Business'],
    highlight: 'Primii în Google Local',
  },
  {
    slug: 'educatie-cursuri',
    emoji: '📚',
    title: 'Educație & Cursuri',
    shortDesc: 'Landing page-uri de conversie, campanii Google Ads, comunitate Facebook.',
    services: ['Landing pages', 'Google Ads', 'Meta Ads', 'Social media'],
    highlight: 'Cursanți noi în fiecare lună',
  },
  {
    slug: 'constructii-servicii',
    emoji: '🔧',
    title: 'Construcții & Servicii',
    shortDesc: 'Portofoliu lucrări, testimoniale, Google Local.',
    services: ['Website portofoliu', 'Google Business', 'Fotografii lucrări', 'SEO local'],
    highlight: 'Mai multe oferte solicitate',
  },
]
