import type { Metadata } from 'next'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Industrii — Marketing Digital pentru Afaceri Locale Constanța',
  description: 'Visuelum lucrează cu restaurante, saloane, clinici, pensiuni, retail și multe alte tipuri de afaceri locale din Constanța, Mamaia, Năvodari, Mangalia.',
  alternates: { canonical: `${siteConfig.url}/industrii` },
}

const industries = [
  { emoji: '🍽️', title: 'Restaurante & Cafenele', desc: 'Meniu digital, fotografii apetisante, rezervări online, Instagram activ.', services: ['Fotografie meniu', 'Social media zilnic', 'Google Business', 'Website cu rezervări'] },
  { emoji: '✂️', title: 'Saloane & Barber', desc: 'Înainte și după, stories cu clienți mulțumiți, programări online.', services: ['Instagram + TikTok', 'Fotografii rezultate', 'Website cu programări', 'Google Maps top'] },
  { emoji: '🏥', title: 'Clinici & Cabinete', desc: 'Credibilitate online, recenzii gestionate, conținut educativ.', services: ['Website profesional', 'SEO medical', 'Gestiune recenzii', 'Google Ads'] },
  { emoji: '🏨', title: 'Pensiuni & Cazare', desc: 'Fotografii de top ale camerelor, optimizare platforme, sezon extins.', services: ['Fotografii profesionale', 'Social media sezonier', 'Website rezervări', 'Google Business'] },
  { emoji: '💪', title: 'Fitness & Sporturi', desc: 'Video Reels motivaționale, înainte/după, promoții sezoniere.', services: ['Reels & TikTok', 'Social media activ', 'Website + programări', 'Meta Ads'] },
  { emoji: '🛍️', title: 'Retail & Magazine', desc: 'Fotografii produse, promoții online, Google Shopping.', services: ['Fotografii produse', 'Catalog digital', 'Google Shopping', 'Meta Ads'] },
  { emoji: '🏠', title: 'Agenții Imobiliare', desc: 'Fotografii proprietăți, lead-uri calificate din Google Ads.', services: ['Foto proprietăți', 'Website listare', 'Google Ads', 'Social media'] },
  { emoji: '⚖️', title: 'Cabinete Juridice', desc: 'Credibilitate online, conținut educativ, clienți care te caută pe Google.', services: ['Website profesional', 'SEO local', 'Blog juridic', 'Google Business'] },
  { emoji: '📚', title: 'Educație & Cursuri', desc: 'Landing page-uri de conversie, campanii Google Ads, comunitate Facebook.', services: ['Landing pages', 'Google Ads', 'Meta Ads', 'Social media'] },
  { emoji: '🔧', title: 'Construcții & Servicii', desc: 'Portofoliu lucrări, testimoniale, Google Local.', services: ['Website portofoliu', 'Google Business', 'Fotografii lucrări', 'SEO local'] },
]

const cities = [
  { name: 'Constanța', desc: 'Reședința județului, 300.000+ locuitori. Cel mai mare potențial din regiune.' },
  { name: 'Mamaia', desc: 'Stațiunea premium a litoralului. Sezon competitiv, vizibilitate critică.' },
  { name: 'Năvodari', desc: 'Stațiune în creștere, afaceri care câștigă teren față de Mamaia.' },
  { name: 'Mangalia', desc: 'Sudul litoralului, turism activ, oportunități pentru afaceri locale.' },
  { name: 'Tulcea', desc: 'Poarta Deltei, turism eco, oportunități pentru cazare și restaurante.' },
  { name: 'Eforie', desc: 'Stațiune balneară cu potențial de turism anual, nu doar sezonier.' },
  { name: 'Ovidiu', desc: 'Oraș rezidențial lângă Constanța. Servicii și comerț local în creștere.' },
  { name: 'Cernavodă', desc: 'Comunitate industrială și rezidențială, servicii B2C activate.' },
]

export default function IndustriiPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Industrii', url: `${siteConfig.url}/industrii` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">Industrii</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-6">
            Cunoaștem afacerile locale
            <br />
            <span className="text-gold">din Constanța.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl mx-auto">
            Experiență în 10+ industrii locale. Strategii adaptate, nu soluții generice.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="bg-white border border-stone p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{industry.emoji}</span>
                  <div>
                    <h2 className="font-head font-bold text-navy text-xl mb-2">{industry.title}</h2>
                    <p className="font-body text-muted text-sm leading-relaxed">{industry.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-stone">
                  {industry.services.map((service) => (
                    <span key={service} className="font-mono text-xs uppercase tracking-wider text-gold bg-gold/5 border border-gold/20 px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-16">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Servim întreaga Dobrogea</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div key={city.name} className="bg-white border border-stone p-5">
                <h3 className="font-head font-bold text-navy mb-2">{city.name}</h3>
                <p className="font-body text-muted text-xs leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
