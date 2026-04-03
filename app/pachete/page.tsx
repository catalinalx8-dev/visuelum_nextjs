import type { Metadata } from 'next'
import Image from 'next/image'
import { PricingCards } from '@/components/sections/PricingCards'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Pachete & Prețuri — Website Gratuit, Abonament Lunar',
  description: 'Pachete de marketing digital de la 349 RON/lună. Website creat gratuit, inclus în abonament. SEO, social media, fotografie profesională — totul în Constanța.',
  alternates: { canonical: `${siteConfig.url}/pachete` },
}

const pricingFaqs = [
  {
    q: 'De ce am nevoie de minim 6 luni?',
    a: 'Website-ul este creat gratuit de noi. Ne trebuie 6 luni ca să recuperăm costul de producție (design + dezvoltare + hosting). După 6 luni, abonamentul continuă lună de lună, fără angajament suplimentar.',
  },
  {
    q: 'Prețurile includ TVA?',
    a: 'Prețurile afișate sunt fără TVA. Visuelum este în regim de microîntreprindere, factura finală va include TVA conform legislației în vigoare.',
  },
  {
    q: 'Pot schimba pachetul după start?',
    a: 'Da, poți upgrada pachetul oricând. Downgrade-ul este posibil de la luna a 7-a.',
  },
  {
    q: 'Cum se plătesc serviciile?',
    a: 'Lunar, prin transfer bancar sau card, în avans. Prima lună include configurarea și lansarea website-ului.',
  },
  {
    q: 'Ce se întâmplă cu domeniul dacă plec?',
    a: 'Domeniul (.ro sau .com) rămâne întotdeauna în proprietatea ta. Îl cumperi tu sau îl cumpărăm noi pe numele tău. Website-ul de pe serverele noastre se închide, domeniu rămâne activ al tău.',
  },
]

export default function PachetePage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Pachete & Prețuri', url: `${siteConfig.url}/pachete` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(pricingFaqs.map((f) => ({ question: f.q, answer: f.a })))),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Pachete & Prețuri</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-6">
            Pachete clare. Prețuri corecte.
            <br />
            <span className="text-gold">Zero risc.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl mx-auto">
            Website-ul este creat gratuit și găzduit de noi 6 luni. Tu plătești lunar abonamentul de administrare.
            Domeniul tău rămâne al tău întotdeauna.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <PricingCards />

      {/* De ce 6 luni? */}
      <section className="bg-parchment py-16">
        <div className="container-site max-w-3xl mx-auto">
          <div className="bg-gold/10 border-l-4 border-gold p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">De ce 6 luni?</p>
            <p className="font-body text-ink leading-relaxed">
              Website-ul tău este creat 100% gratuit de echipa noastră. Design profesional, mobil-optimizat, SEO din fundație — fără niciun cost inițial.
              <br /><br />
              Singura noastră condiție: un angajament minim de 6 luni, timp în care recuperăm costul de producție prin abonamentul lunar.
              Este o investiție corectă pentru ambele părți.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Comparație completă</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[640px] px-4 sm:px-0">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-navy">
                <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-widest text-muted">Serviciu</th>
                <th className="text-center py-4 px-4 font-head font-bold text-navy">PREZENȚA<br /><span className="text-gold font-mono text-sm">349 RON</span></th>
                <th className="text-center py-4 px-4 font-head font-bold text-navy bg-gold/5 border-x border-gold/30">CREȘTERE<br /><span className="text-gold font-mono text-sm">649 RON</span></th>
                <th className="text-center py-4 px-4 font-head font-bold text-navy">DOMINARE<br /><span className="text-gold font-mono text-sm">1.199 RON</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone">
              {[
                ['Website gratuit', '5 pagini', '8 pagini', 'Nelimitat'],
                ['Hosting + SSL', '✓', '✓', '✓ Dedicat'],
                ['Email profesional', '—', '✓', '✓ × 5'],
                ['Administrare web', 'Bază', 'Completă', 'Avansată'],
                ['Google Business', '✓', '✓ Activ', '✓ Activ'],
                ['Social media postare', 'Calendar, tu postezi', '4 post/săpt', '6 post/săpt × 3'],
                ['Fotografie la locație', '—', '1 ședință/lună (2h)', '2 ședințe/lună (3h)'],
                ['Video Reels/TikTok', '—', '—', '2 video/lună'],
                ['SEO avansat', '—', '✓', '✓ + Conținut lunar'],
                ['Google/Meta Ads', '—', '—', '✓ (buget separat)'],
                ['Raport lunar', 'Simplu', 'Detaliat', 'Avansat săptămânal'],
                ['Suport', 'Email', 'WhatsApp', 'WhatsApp prioritar <4h'],
              ].map(([feature, ...values]) => (
                <tr key={feature} className="hover:bg-parchment/50">
                  <td className="py-3 px-4 font-body text-sm text-ink">{feature}</td>
                  {values.map((v, i) => (
                    <td key={i} className={`py-3 px-4 text-center font-mono text-xs ${i === 1 ? 'bg-gold/5' : ''} ${v === '—' ? 'text-muted-l' : 'text-navy'}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
          <p className="text-center font-mono text-xs text-muted-l mt-4 sm:hidden">← Derulează pentru a vedea toate pachetele →</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-parchment py-12">
        <div className="container-site max-w-3xl mx-auto">
          <div className="bg-navy border-l-4 border-gold p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Garanție 30 zile</p>
            <p className="font-body text-cream/80 leading-relaxed">
              Dacă în primele 30 zile nu ești mulțumit de ce am livrat, oprim colaborarea fără penalități.
              <strong className="text-cream"> Zero risc.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <FaqAccordion faqs={pricingFaqs} title="Întrebări despre prețuri" />

      <CtaSection />
    </>
  )
}
