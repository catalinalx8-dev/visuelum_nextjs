import NextImage from 'next/image'
import type { Metadata } from 'next'
import { Check, Globe, Shield, Zap, Smartphone, Search, Clock } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Website Profesional Gratuit — Live în 14 Zile | Visuelum',
  description: 'Website profesional creat gratuit cu abonamentul Visuelum. 0 RON investiție inițială, live în 14 zile, mobil-optimizat, SEO din fundație. Domeniul rămâne al tău.',
  alternates: { canonical: `${siteConfig.url}/servicii/website` },
}

const faqs = [
  { question: 'Cât durează să fie gata website-ul?', answer: 'Maximum 14 zile lucrătoare de la semnarea contractului și furnizarea materialelor (logo, texte, fotografii). De obicei finalizăm în 7–10 zile.' },
  { question: 'Ce se întâmplă cu site-ul dacă plec după 6 luni?', answer: 'Website-ul este găzduit pe serverele noastre. Dacă nu continui abonamentul, site-ul se închide. Domeniu rămâne al tău permanent. Poți oricând migra site-ul la alt provider contra unui cost de 300–500 RON.' },
  { question: 'Pe ce platformă este construit website-ul?', answer: 'Folosim WordPress sau Next.js, în funcție de nevoile afacerii. Restaurantele cu meniu digital, pensiunile cu rezervări sau magazinele online primesc soluții adaptate.' },
  { question: 'Pot adăuga pagini suplimentare?', answer: 'Da. Pachetul PREZENȚA include 5 pagini, CREȘTERE — 8 pagini, DOMINARE — nelimitat. Dacă ai nevoie de pagini extra în pachetele de bază, adăugăm contra unui cost mic.' },
  { question: 'Eu dețin domeniul?', answer: 'Da, absolut. Domeniul (.ro sau .com) este cumpărat pe numele tău sau transferat în contul tău. Este proprietatea ta permanentă, indiferent ce se întâmplă cu abonamentul.' },
]

export default function WebsitePage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
    { name: 'Website Profesional', url: `${siteConfig.url}/servicii/website` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* Hero */}
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <NextImage
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Website Profesional</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Website creat gratuit.
            <br />
            <span className="text-gold">Live în 14 zile.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl">
            0 RON investiție inițială. Design profesional, mobil-optimizat, SEO din fundație. Domeniu rămâne al tău întotdeauna.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce primești</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Design Profesional', desc: 'Layout modern, curat, adaptat industriei tale. Nu teme generice.' },
              { icon: Smartphone, title: 'Mobil-Optimizat', desc: '70% din trafic vine de pe telefon. Site-ul arată perfect pe orice dispozitiv.' },
              { icon: Search, title: 'SEO din fundație', desc: 'Structura tehnică, meta tags, viteza — totul configurat corect de la start.' },
              { icon: Shield, title: 'Hosting + SSL', desc: 'Server rapid, certificat SSL, backup automat — inclus în abonament.' },
              { icon: Zap, title: 'Viteza maximă', desc: 'Google PageSpeed 90+. Site-urile lente pierd clienți.' },
              { icon: Clock, title: 'Live în 14 zile', desc: 'Nu luni de așteptare. Afacerea ta apare online în maximum 2 săptămâni.' },
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

      {/* Process */}
      <section className="bg-parchment py-16">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Cum lucrăm</h2>
          <div className="space-y-8">
            {[
              { nr: '01', title: 'Briefing & Contract', desc: 'Discutăm nevoile, structura site-ului, stilul vizual. Semnăm contractul de abonament.' },
              { nr: '02', title: 'Design & Conținut', desc: 'Creăm designul, scriem textele SEO, organizăm fotografiile furnizate de tine.' },
              { nr: '03', title: 'Revizii & Aprobare', desc: 'Îți trimitem preview-ul. Facem 2 runde de revizii incluse.' },
              { nr: '04', title: 'Lansare & Indexare', desc: 'Site-ul merge live. Îl trimitem la Google pentru indexare rapidă.' },
            ].map((step) => (
              <div key={step.nr} className="flex gap-6">
                <span className="font-head font-extrabold text-4xl text-gold/30 flex-shrink-0 w-12">{step.nr}</span>
                <div>
                  <h3 className="font-head font-bold text-navy mb-1">{step.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-cream py-12">
        <div className="container-site max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 border border-gold/30 bg-gold/5">
            <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="font-body text-ink text-sm leading-relaxed">
              <strong>Garanție 30 zile:</strong> Dacă nu ești mulțumit de design sau funcționalitate în primele 30 zile,
              refacem sau oprim colaborarea fără penalități.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} title="Întrebări despre website" />
      <CtaSection />
    </>
  )
}
