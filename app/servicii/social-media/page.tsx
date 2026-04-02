import type { Metadata } from 'next'
import { Smartphone, PenTool, Eye, TrendingUp, Calendar, Users } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Social Media Complet Constanța — Noi Postăm, Brandul Tău Strălucește',
  description: 'Servicii complete de social media pentru afaceri din Constanța. Postări, stories, copywriting, publicare zilnică — faceless, brandul tău rămâne în prim plan.',
  alternates: { canonical: `${siteConfig.url}/servicii/social-media` },
}

const faqs = [
  { question: 'Pe ce platforme publicați?', answer: 'Instagram, Facebook și TikTok, în funcție de pachet. Pachetul DOMINARE include toate 3 platforme simultan.' },
  { question: 'Cine creează conținutul?', answer: 'Echipa noastră scrie textele, creează grafica sau editează fotografiile furnizate. Tu aprobezi înainte de publicare dacă dorești, sau publicăm automat conform calendarului.' },
  { question: 'Brandul meu va fi vizibil sau Visuelum?', answer: 'Absolut brandul tău. Noi suntem invizibili — tot conținutul, toată lauda, tot engagementul sunt pentru afacerea ta. Nu menționăm nicăieri că lucrăm cu tine.' },
  { question: 'Ce se întâmplă cu conturile dacă plec?', answer: 'Conturile sunt ale tale, create pe emailul tău, cu parola ta. Noi nu deținem niciun cont. Dacă pleci, cont rămâne al tău cu tot conținutul publicat.' },
  { question: 'Cât de des publicați?', answer: 'PREZENȚA: calendar lunar (tu postezi). CREȘTERE: 4 postări/săptămână + stories. DOMINARE: 6 postări/săptămână pe 3 platforme + stories zilnice.' },
]

export default function SocialMediaPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
    { name: 'Social Media', url: `${siteConfig.url}/servicii/social-media` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Social Media Complet</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Noi postăm.
            <br />
            <span className="text-gold">Brandul tău strălucește.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl">
            Faceless marketing — tot conținutul creat este al afacerii tale. Tu primești clienții, noi facem munca.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce includem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: PenTool, title: 'Copywriting profesional', desc: 'Texte care vorbesc limbajul clienților tăi. Nu clișee, ci mesaje care convertesc.' },
              { icon: Calendar, title: 'Calendar editorial lunar', desc: 'Planificare strategică. Fiecare postare are scop: awareness, engagement sau vânzări.' },
              { icon: Smartphone, title: 'Instagram, Facebook, TikTok', desc: 'Prezență pe platformele unde sunt clienții tăi, nu pe toate deodată inutil.' },
              { icon: Eye, title: 'Stories zilnice', desc: 'Prezență activă în feed-ul urmăritorilor. Stories de 3× mai mult engagement.' },
              { icon: TrendingUp, title: 'Răspuns la comentarii', desc: 'Gestionăm comentariile și mesajele în numele tău, în vocea brandului.' },
              { icon: Users, title: 'Hashtag research', desc: 'Hashtag-uri relevante, cu audiențe reale. Nu #food de 500 de milioane.' },
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

      <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} title="Întrebări despre Social Media" />
      <CtaSection />
    </>
  )
}
