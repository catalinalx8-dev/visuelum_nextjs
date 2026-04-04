import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
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

const industryImages: Record<string, { image: string; imageAlt: string }> = {
  'restaurante-cafenele': { image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', imageAlt: 'Restaurant modern' },
  'saloane-barber': { image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80', imageAlt: 'Salon de înfrumusețare' },
  'clinici-cabinete': { image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', imageAlt: 'Cabinet medical' },
  'pensiuni-cazare': { image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', imageAlt: 'Pensiune turistică' },
  'fitness-sporturi': { image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', imageAlt: 'Sală de fitness' },
  'retail-magazine': { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', imageAlt: 'Magazin retail' },
  'agentii-imobiliare': { image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', imageAlt: 'Agenție imobiliară' },
  'cabinete-juridice': { image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', imageAlt: 'Cabinet juridic' },
  'educatie-cursuri': { image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', imageAlt: 'Educație și cursuri' },
  'constructii-renovari': { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', imageAlt: 'Construcții și renovări' },
}

export default function IndustriiPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Industrii', url: `${siteConfig.url}/industrii` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      {/* Hero */}
      <section className="bg-white relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-5 sm:mb-6">Industrii</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-5 sm:mb-6">
            Strategie digitală adaptată
            <br />
            <span className="text-gold">industriei tale.</span>
          </h1>
          <p className="font-body italic text-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
            Fiecare industrie are provocări unice. Soluțiile noastre sunt create specific pentru afacerea ta — nu șabloane generice.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-head font-extrabold text-3xl text-gold mb-1">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{s.label}</div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const imgData = industryImages[industry.slug] ?? { image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80', imageAlt: industry.title }
              return (
                <Link
                  key={industry.slug}
                  href={`/industrii/${industry.slug}`}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex items-end block hover:shadow-xl hover:shadow-navy/15 transition-all duration-300"
                  aria-label={`${industry.title} — ${industry.highlight}`}
                >
                  <Image src={imgData.image} alt={imgData.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                  <div className="relative z-10 p-5 w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-head font-bold text-cream text-lg leading-tight">{industry.title}</h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                        <ArrowRight className="h-3.5 w-3.5 text-gold group-hover:text-white transition-colors" aria-hidden="true" />
                      </div>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gold/80">{industry.highlight}</p>
                  </div>
                </Link>
              )
            })}
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
