import NextImage from 'next/image'
import type { Metadata } from 'next'
import { Search, MapPin, Star, TrendingUp, Code, BarChart } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'SEO Local Constanța — Apari Primul pe Google Maps & Search',
  description: 'Servicii SEO local Constanța. Google Business optimizat, cuvinte cheie locale, tehnic SEO, AIO optimization. Clienții te găsesc când te caută.',
  alternates: { canonical: `${siteConfig.url}/servicii/seo` },
}

const faqs = [
  { question: 'Cât durează să apară rezultate SEO?', answer: 'Google Business și Maps — rezultate vizibile în 2–6 săptămâni. SEO organic (poziții în Google Search) — rezultate solide în 3–6 luni. Este un proces continuu, nu o acțiune unică.' },
  { question: 'Ce este AIO optimization?', answer: 'AI Overview optimization înseamnă optimizarea conținutului pentru a apărea în rezultatele Google AI Overviews — rezumatele generate de AI afișate deasupra rezultatelor tradiționale. Este viitorul SEO.' },
  { question: 'Includeți Google Business?', answer: 'Da, în toate pachetele. Optimizăm profilul, adăugăm fotografii, publicăm postări săptămânale, răspundem la recenzii și monitorizăm pozițiile pe Maps.' },
  { question: 'Ce cuvinte cheie țintim?', answer: 'Cuvinte cheie locale cu intenție de cumpărare — "restaurant Constanța", "salon unghii Mamaia", "medic dermatolog Constanța". Oameni gata să cheltuiasă, nu să navigheze.' },
  { question: 'Raportați progresul?', answer: 'Lunar primești raport cu: poziții cuvinte cheie, trafic organic, apeluri din Google Business, impresii pe Maps. Cifre reale, nu "am făcut optimizări".' },
]

export default function SeoPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
    { name: 'SEO Local', url: `${siteConfig.url}/servicii/seo` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <NextImage
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">SEO Local Constanța</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Apari primul
            <br />
            <span className="text-gold">când te caută.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl">
            Google Business activ, cuvinte cheie locale, tehnic SEO, AIO optimization — afacerea ta în topul Google Maps și Search.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce includem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Google Business optimizat', desc: 'Profil complet, fotografii, categorii, atribute, răspuns recenzii, postări săptămânale.' },
              { icon: Search, title: 'Cuvinte cheie locale', desc: 'Research și targetare cuvinte cheie cu intenție locală de cumpărare.' },
              { icon: Code, title: 'SEO tehnic', desc: 'Viteza site-ului, structura URL, Schema.org, indexare corectă, Core Web Vitals.' },
              { icon: Star, title: 'Managementul recenziilor', desc: 'Răspuns profesional la toate recenziile, pozitive și negative.' },
              { icon: TrendingUp, title: 'AIO Optimization', desc: 'Optimizare pentru Google AI Overviews — viitorul căutărilor online.' },
              { icon: BarChart, title: 'Raport lunar detaliat', desc: 'Poziții, trafic, apeluri, direcții Google Maps — toate măsurate.' },
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

      <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} title="Întrebări despre SEO" />
      <CtaSection />
    </>
  )
}
