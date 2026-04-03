import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'
import { industries } from '@/lib/industries'

export const metadata: Metadata = {
  title: 'Industrii — Marketing Digital Specializat pe Industrii | Visuelum Constanța',
  description: 'Visuelum oferă strategii de marketing digital adaptate pentru restaurante, saloane, clinici, pensiuni, retail, agenții imobiliare și alte industrii locale din Constanța și Dobrogea.',
  alternates: { canonical: `${siteConfig.url}/industrii` },
  keywords: 'marketing digital restaurante, marketing digital saloane, SEO clinici, social media pensiuni, marketing digital Constanța',
}

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

const stats = [
  { value: '10+', label: 'Industrii acoperite' },
  { value: '8', label: 'Orașe din Dobrogea' },
  { value: '100%', label: 'Strategii personalizate' },
  { value: '30 zile', label: 'Garanție rezultate' },
]

export default function IndustriiPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Industrii', url: `${siteConfig.url}/industrii` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">Industrii</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-6">
            Strategie digitală adaptată
            <br />
            <span className="text-gold">industriei tale.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl mx-auto mb-10">
            Fiecare industrie are provocări unice. Soluțiile noastre sunt create specific pentru afacerea ta — nu șabloane generice.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-head font-extrabold text-3xl text-gold mb-1">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-cream py-20">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Specializare completă</p>
            <h2 className="font-head font-extrabold text-h2 text-navy mb-4">
              Cunoaștem afacerea ta
            </h2>
            <p className="font-body text-muted max-w-xl mx-auto">
              Selectează industria ta pentru a vedea cum te putem ajuta specific.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industrii/${industry.slug}`}
                className="group bg-white border border-stone p-8 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 block"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-4xl leading-none flex-shrink-0">{industry.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h2 className="font-head font-bold text-navy text-xl group-hover:text-gold transition-colors">
                        {industry.title}
                      </h2>
                      <ArrowRight className="h-4 w-4 text-muted-l group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    <p className="font-body text-muted text-sm leading-relaxed">{industry.shortDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-stone mb-4">
                  <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-gold font-semibold">
                    {industry.highlight}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.services.map((service) => (
                    <span key={service} className="font-mono text-xs uppercase tracking-wider text-muted bg-parchment border border-stone px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage section */}
      <section className="bg-navy py-20">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Acoperire geografică</p>
            <h2 className="font-head font-extrabold text-h2 text-cream mb-4">
              Servim întreaga <span className="text-gold">Dobrogea</span>
            </h2>
            <p className="font-body italic text-muted-l max-w-xl mx-auto">
              Suntem din Constanța și cunoaștem fiecare piață locală în profunzime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div key={city.name} className="bg-navy-mid/50 border border-navy-mid p-5 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                  <h3 className="font-head font-bold text-cream">{city.name}</h3>
                </div>
                <p className="font-body text-muted-l text-xs leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why specialized */}
      <section className="bg-parchment py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">De ce contează specializarea</p>
            <h2 className="font-head font-extrabold text-h2 text-navy mb-4">
              Generic nu funcționează
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Limbaj specific industriei',
                desc: 'Știm că un restaurant are nevoie de fotografii de meniu, nu de stock photos. Știm că un salon vrea before/after, nu infografice.',
              },
              {
                title: 'Sezonalitate înțeleasă',
                desc: 'Pensiunile din Mamaia au nevoie de campanii diferite vara față de iarnă. Calendarul tău de marketing reflectă realitatea afacerii tale.',
              },
              {
                title: 'Competiție locală studiată',
                desc: 'Știm cine sunt competitorii tăi din Constanța și ce fac. Strategia ta se construiește pe ceea ce ei nu fac bine.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-stone p-7">
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="font-head font-bold text-navy text-lg mb-3">{item.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
