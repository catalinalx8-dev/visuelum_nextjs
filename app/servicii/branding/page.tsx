import type { Metadata } from 'next'
import { Palette, Type, Layout, Printer, Layers, CheckSquare } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Branding & Identitate Vizuală Constanța — Arăți Cum Meriți',
  description: 'Servicii complete de branding pentru afaceri din Constanța. Logo, culori, fonturi, materiale grafice, print. Identitate vizuală profesională, consecventă.',
  alternates: { canonical: `${siteConfig.url}/servicii/branding` },
}

const faqs = [
  { question: 'Includeți și logo în abonament?', answer: 'Logo-ul este inclus în pachetul DOMINARE și poate fi adăugat la celelalte pachete contra unui cost separat (300–600 RON). Dacă ai deja logo, îl integrăm în toate materialele.' },
  { question: 'Câte variante de logo primesc?', answer: '3 concepte inițiale diferite, urmând 2 runde de revizii pe varianta aleasă. Livrăm în toate formatele (SVG, PNG, PDF) pentru print și digital.' },
  { question: 'Ce materiale grafice includeți lunar?', answer: 'În pachetul DOMINARE: bannere social media, postere promoționale, materiale pentru print (meniu, flyere, carduri vizită), templates pentru stories. Totul adaptat identității brandului tău.' },
  { question: 'Primesc ghid de brand?', answer: 'Da, la final de proces creăm un Brand Book complet: logo usage, culori, fonturi, tone of voice. Documentul te ghidează în toate deciziile vizuale viitoare.' },
  { question: 'Pot folosi materialele după ce plec?', answer: 'Absolut. Toate materialele grafice create sunt proprietatea ta. Le poți folosi, modifica și distribui fără restricții sau taxe suplimentare.' },
]

export default function BrandingPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
    { name: 'Branding & Design', url: `${siteConfig.url}/servicii/branding` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Branding & Identitate Vizuală</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Arăți cum meriți.
            <br />
            <span className="text-gold">Nu cum poți.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl">
            Identitate vizuală completă care comunică profesionalism și construiește încredere înainte ca clientul să spună ceva.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce includem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Logo & Identitate', desc: '3 concepte, 2 runde revizii. Logo în toate formatele pentru print și digital.' },
              { icon: Type, title: 'Tipografie & Culori', desc: 'Sistem de fonturi și paletă de culori care comunică valorile brandului tău.' },
              { icon: Layout, title: 'Templates Social Media', desc: 'Formate standard Canva/Figma pentru postări și stories. Refolosești singur oricând.' },
              { icon: Printer, title: 'Materiale Print', desc: 'Cărți vizită, flyere, meniu, bannere — design profesional gata de tipar.' },
              { icon: Layers, title: 'Brand Book', desc: 'Ghid complet de utilizare a brandului. Consecvență pe toate platformele.' },
              { icon: CheckSquare, title: 'Design lunar', desc: 'În pachetul DOMINARE, lunar primești materiale grafice noi adaptate nevoilor curente.' },
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

      <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} title="Întrebări despre Branding" />
      <CtaSection />
    </>
  )
}
