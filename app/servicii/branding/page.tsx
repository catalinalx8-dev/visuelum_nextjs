import NextImage from 'next/image'
import type { Metadata } from 'next'
import { Type, Layout, Printer, Layers, CheckSquare, Calendar } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Branding & Design Grafic Constanța — Materiale Profesionale pentru Afacerea Ta',
  description: 'Servicii de design grafic și branding pentru afaceri din Constanța. Flyere, postere, calendare personalizate, bannere și materiale print. Design profesional, consecvent și adaptat afacerii tale.',
  alternates: { canonical: `${siteConfig.url}/servicii/branding` },
}

const faqs = [
  { question: 'Ce materiale grafice includeți?', answer: 'Bannere social media, postere promoționale, flyere, calendare personalizate pentru afacerea ta, materiale pentru print (meniu, carduri vizită) și templates pentru stories. Totul adaptat identității afacerii tale.' },
  { question: 'Creați și logo sau catalog de brand?', answer: 'Nu creăm logo sau catalog de brand. Ne concentrăm pe materiale grafice practice care aduc vizibilitate și promovează afacerea ta: flyere, postere, calendare personalizate, bannere și alte materiale promoționale.' },
  { question: 'Pot folosi materialele după ce plec?', answer: 'Absolut. Toate materialele grafice create sunt proprietatea ta. Le poți folosi, modifica și distribui fără restricții sau taxe suplimentare.' },
  { question: 'Ce tipuri de afaceri beneficiază de serviciile de design?', answer: 'Orice afacere care are nevoie de materiale promoționale: restaurante (meniuri, flyere), saloane (calendare, postere), clinici, magazine și multe altele. Materialele sunt personalizate după specificul afacerii tale.' },
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

      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <NextImage
            src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Branding & Design Grafic</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-4">
            Arăți cum meriți.
            <br />
            <span className="text-gold">Nu cum poți.</span>
          </h1>
          <p className="font-body italic text-muted text-lg max-w-2xl">
            Design grafic profesional — flyere, postere, calendare personalizate și materiale promoționale adaptate afacerii tale.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce includem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Type, title: 'Tipografie & Culori', desc: 'Sistem de fonturi și paletă de culori care comunică valorile brandului tău pe toate materialele.' },
              { icon: Layout, title: 'Templates Social Media', desc: 'Formate standard Canva/Figma pentru postări și stories. Refolosești singur oricând.' },
              { icon: Printer, title: 'Materiale Print', desc: 'Flyere, postere, meniu, bannere, cărți vizită — design profesional gata de tipar.' },
              { icon: Calendar, title: 'Calendare personalizate', desc: 'Calendare personalizate pentru afacerea ta — utile, vizibile și promovate zilnic.' },
              { icon: Layers, title: 'Materiale promoționale', desc: 'Orice material grafic de care are nevoie afacerea ta: roll-up, afișe, decor interior, standuri.' },
              { icon: CheckSquare, title: 'Design lunar', desc: 'Lunar primești materiale grafice noi adaptate nevoilor curente ale afacerii tale.' },
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
