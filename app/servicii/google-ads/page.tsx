import NextImage from 'next/image'
import type { Metadata } from 'next'
import { Target, TrendingUp, BarChart, Settings, DollarSign, Zap } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Google Ads & Meta Ads Constanța — Clienți Imediat, Nu în 6 Luni',
  description: 'Management Google Ads și Meta Ads pentru afaceri din Constanța. Buget client separat, noi gestionăm campaniile. ROI măsurabil din prima zi.',
  alternates: { canonical: `${siteConfig.url}/servicii/google-ads` },
}

const faqs = [
  { question: 'Bugetul de reclame este inclus în abonament?', answer: 'Nu. Bugetul media (suma cheltuită pe Google sau Facebook/Instagram) se plătește direct în platformele Google și Meta. Noi administrăm campaniile și optimizăm cheltuiala ta.' },
  { question: 'Cât buget minim recomandați?', answer: 'Pentru Google Ads local Constanța, minimum 300 RON/lună pentru rezultate vizibile. Meta Ads — minimum 200 RON/lună. Recomandăm 500–1000 RON/lună pentru rezultate optime.' },
  { question: 'Cât durează să văd rezultate?', answer: 'Google Ads aduce lead-uri în primele 24–72 ore de la lansare. Meta Ads au o perioadă de optimizare de 1–2 săptămâni. Mult mai rapid decât SEO organic.' },
  { question: 'Ce tipuri de campanii creați?', answer: 'Google Search (când te caută), Google Display, Google Maps Ads, Facebook/Instagram conversii, retargeting. Adaptăm tipul campaniei la obiectivul afacerii tale.' },
  { question: 'Cum măsurați ROI-ul?', answer: 'Prin conversii (apeluri, formulare, vizite în magazin), cost per lead și Return on Ad Spend. Raport săptămânal sau lunar cu toate cifrele, transparent.' },
]

export default function GoogleAdsPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
    { name: 'Google Ads & Meta Ads', url: `${siteConfig.url}/servicii/google-ads` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <NextImage
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Google Ads & Meta Ads</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-4">
            Clienți de mâine.
            <br />
            <span className="text-gold">Nu în 6 luni.</span>
          </h1>
          <p className="font-body italic text-muted text-lg max-w-2xl">
            Campanii PPC cu ROI măsurabil. Bugetul tău se cheltuiește pe reclame, noi gestionăm strategia și optimizarea.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce administrăm</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Google Search Ads', desc: 'Apari când cineva caută exact serviciul tău. Cel mai mare ROI din publicitate.' },
              { icon: Zap, title: 'Google Maps Ads', desc: 'Afacerea ta promovată în primele poziții pe Google Maps local.' },
              { icon: TrendingUp, title: 'Meta Ads (FB + IG)', desc: 'Targetare demografică și comportamentală pe Facebook și Instagram.' },
              { icon: Settings, title: 'Retargeting', desc: 'Re-targetăm vizitatorii site-ului care nu au convertit. CPL cu 50% mai mic.' },
              { icon: DollarSign, title: 'Optimizare buget', desc: 'Eliminăm cheltuielile inutile, concentrăm bugetul pe ce aduce clienți.' },
              { icon: BarChart, title: 'Raportare transparentă', desc: 'Acces dashboard live + raport săptămânal cu toate cifrele campaniei.' },
            ].map((item) => (
              <div key={item.title} className="service-card">
                <div className="inline-flex p-3 bg-gold/10 text-gold mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-head font-bold text-h3 text-navy mb-2">{item.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} title="Întrebări despre Ads" />
      <CtaSection />
    </>
  )
}
