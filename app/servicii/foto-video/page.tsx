import type { Metadata } from 'next'
import { Camera, Clock, Image, Film, MapPin, Star } from 'lucide-react'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Fotografie & Video Profesional Constanța — Sony A7 II, 48h Livrare',
  description: 'Fotografie și video profesional pentru afaceri din Constanța. Sony A7 II, lumină naturală, editare Lightroom. Ședințe la locația ta, livrare în 48 ore.',
  alternates: { canonical: `${siteConfig.url}/servicii/foto-video` },
}

const faqs = [
  { question: 'Ce echipament folosiți?', answer: 'Sony A7 II full-frame cu obiective profesionale. Lumini de studio portabile pentru ședințe în interior. Editare Lightroom și Adobe Premiere pentru video.' },
  { question: 'Cât durează o ședință foto?', answer: 'O ședință standard este de 2 ore (pachetul CREȘTERE) sau 3 ore (DOMINARE). Include deplasarea la locație, fotografierea și briefingul inițial.' },
  { question: 'Cât durează livrarea?', answer: 'Fotografiile editate sunt livrate în 48 ore de la ședință, prin link de descărcare. Video-urile (Reels/TikTok) — în 5–7 zile lucrătoare.' },
  { question: 'Fotografiați și în afara Constanței?', answer: 'Da, în toată Dobrogea și împrejurimi. Pentru deplasări la mai mult de 50km, există un cost suplimentar stabilit transparent înainte de ședință.' },
  { question: 'Dețin drepturile fotografiilor?', answer: 'Da, absolut. Fotografiile și video-urile create sunt proprietatea afacerii tale. Le poți folosi pe orice platformă, fără restricții sau atribuire către Visuelum.' },
]

export default function FotoVideoPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
    { name: 'Foto & Video', url: `${siteConfig.url}/servicii/foto-video` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Fotografie & Video Profesional</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            La locația ta.
            <br />
            <span className="text-gold">Livrat în 48 ore.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl">
            Sony A7 II, lumină naturală, editare Lightroom profesională. Nu stock photo — conținut real al afacerii tale.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Ce includem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: 'Sony A7 II Full-Frame', desc: 'Calitate profesională, detalii clare, culori naturale. Nu telefon, nu aparat compact.' },
              { icon: Star, title: 'Editare Lightroom', desc: 'Post-procesare profesională — tonuri, contrast, claritate. Fiecare fotografie editată individual.' },
              { icon: Clock, title: '48h Livrare', desc: 'Fotografiile editate sunt gata în maximum 48 ore de la ședință. Video-uri în 5–7 zile.' },
              { icon: Film, title: 'Reels & TikTok', desc: 'Video-uri verticals optimizate pentru social media. Editare cu muzică și text overlay.' },
              { icon: MapPin, title: 'La locația ta', desc: 'Venim noi la restaurant, salon, clinică sau magazin. Fără deplasare din partea ta.' },
              { icon: Image, title: 'Drepturi de autor', desc: 'Toate materialele sunt proprietatea afacerii tale, fără restricții de utilizare.' },
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

      <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} title="Întrebări despre Foto & Video" />
      <CtaSection />
    </>
  )
}
