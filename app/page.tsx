import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { PricingCards } from '@/components/sections/PricingCards'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { WhyVisuelum } from '@/components/sections/WhyVisuelum'
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm'
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
    q: 'Cât costă colaborarea?',
    a: 'De la 349 RON/lună, cu website creat gratuit și găzduit de noi 6 luni.',
  },
  {
    q: 'Ce se întâmplă cu website-ul dacă nu continuăm?',
    a: 'Website-ul se închide de pe serverele noastre. Domeniul (.ro sau .com) rămâne întotdeauna al tău.',
  },
  {
    q: 'Cât durează să văd rezultate?',
    a: 'Google Ads aduce lead-uri în câteva zile. SEO local — rezultate solide în 2–4 luni.',
  },
  {
    q: 'Trebuie să am cunoștințe tehnice?',
    a: 'Zero. Tu te ocupi de afacere, noi de tot ce înseamnă online.',
  },
  {
    q: 'Bugetul de reclame este inclus?',
    a: 'Nu. Bugetul media (Google/Meta Ads) se plătește direct în platforme. Noi administrăm campaniile.',
  },
  {
    q: 'Fotografiați și în afara Constanței?',
    a: 'Da, în toată Dobrogea. Pentru deplasări mai lungi, costul se stabilește transparent înainte.',
  },
  {
    q: 'Există garanție?',
    a: 'Da. În primele 30 zile, dacă nu ești mulțumit de ce am livrat, oprim colaborarea fără penalități.',
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
      <PortfolioSection />
      <ProcessSteps />
      <PricingCards compact />
      <IndustriesGrid />
      <WhyVisuelum />
      <TestimonialsSection />
      <QuickQuoteForm />
      <FaqAccordion faqs={faqs} />
      <CtaSection />
    </>
  )
}
