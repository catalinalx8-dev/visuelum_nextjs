import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { siteConfig, seoConfig } from '@/lib/config'
import { faqSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.taglineShort}`,
  description: siteConfig.description,
  keywords: [...seoConfig.keywords],
  alternates: { canonical: siteConfig.url },
}

const faqs = [
  {
    q: 'Cât costă un website profesional în Constanța?',
    a: 'Cu Visuelum, website-ul este creat 100% gratuit — zero cost inițial. Plătești doar abonamentul lunar de la 349 RON, care include și administrarea, hosting-ul și SSL-ul pe toată durata colaborării.',
  },
  {
    q: 'Cât durează să apară afacerea mea pe Google în Constanța?',
    a: 'Google Business Profile îl activăm din prima săptămână — apari pe Google Maps imediat. Google Ads aduce trafic plătit în câteva zile. SEO organic local — rezultate solide în 2–4 luni, cu creștere continuă.',
  },
  {
    q: 'Ce se întâmplă cu website-ul dacă nu continuăm colaborarea?',
    a: 'Depinde de momentul rezilierii. Dacă înainte de 6 luni: website-ul este suspendat, dar domeniu rămâne 100% al tău — poți colabora cu altcineva sau îl administrezi cum dorești, fără codul sursă. Dacă după 6 luni: primești integral codul sursă al website-ului și îl poți găzdui și administra unde dorești. Detalii complete în Termeni și Condiții.',
  },
  {
    q: 'Trebuie să am cunoștințe tehnice sau să mă implic?',
    a: 'Zero implicare tehnică din partea ta. Tu te ocupi de afacere, noi de tot ce înseamnă online: website, postări, Google, reclame, fotografii. O dată pe lună primești un raport clar cu ce am făcut.',
  },
  {
    q: 'Bugetul de reclame Google / Meta este inclus în abonament?',
    a: 'Nu. Bugetul media (Google Ads / Meta Ads) se plătește direct de tine în platforme, transparent. Administrarea campaniilor de publicitate este inclusă în pachetul DOMINARE sau disponibilă ca serviciu separat.',
  },
  {
    q: 'Fotografiați și în afara Constanței?',
    a: 'Da, în toată Dobrogea: Mamaia, Năvodari, Mangalia, Eforie, Tulcea, Techirghiol. Pentru deplasări mai lungi, costul de transport se stabilește transparent înainte.',
  },
  {
    q: 'Există garanție că voi fi mulțumit?',
    a: 'Da. Garanție 30 de zile: dacă nu ești mulțumit de ce am livrat în prima lună, oprim colaborarea fără nicio penalitate. Nu avem niciun interes să păstrăm clienți nemulțumiți.',
  },
  {
    q: 'Pot comanda servicii o singură dată, fără abonament?',
    a: 'Da. Fotografia profesională, videoclipuri Reels/TikTok, branding și Google/Meta Ads pot fi comandate o singură dată, fără abonament. Contactează-ne pentru o ofertă personalizată.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))) }}
      />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <ProcessSteps />
      <TestimonialsSection />
      <FaqAccordion faqs={faqs} />
      <CtaSection />
    </>
  )
}
