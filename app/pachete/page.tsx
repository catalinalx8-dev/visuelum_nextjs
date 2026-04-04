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
    q: 'Ce înseamnă demo-ul gratuit?',
    a: 'Înainte de orice angajament, creăm un website demo personalizat sau furnizăm fotografii cu watermark — 100% gratuit. Dacă îți place ce facem, continuăm și personalizăm totul după dorința ta. Dacă nu, nu există niciun cost și nicio obligație.',
  },
  {
    q: 'De ce am nevoie de minim 6 luni?',
    a: 'Website-ul este creat gratuit de noi. Ne trebuie 6 luni ca să recuperăm costul de producție (design + dezvoltare + hosting). Dacă nu plătești abonamentul în această perioadă, website-ul se închide. Domeniu rămâne al tău permanent.',
  },
  {
    q: 'Ce se întâmplă după 6 luni?',
    a: 'Ai două opțiuni: continui abonamentul lună de lună fără angajament suplimentar (hosting rămâne inclus), sau primești codul sursă și te ocupi tu de hosting + administrare. Domeniu rămâne întotdeauna proprietatea ta, indiferent de decizie.',
  },
  {
    q: 'Pot cumpăra servicii o singură dată, fără abonament?',
    a: 'Da! Toate serviciile în afara creării de website (fotografie, video, branding, meniu digital, Google Ads) pot fi achiziționate o singură dată, fără abonament. Poți alege și un pachet personalizat cu exact serviciile de care ai nevoie.',
  },
  {
    q: 'Ce este pachetul personalizat?',
    a: 'Creăm o ofertă adaptată exact nevoilor tale: alegi serviciile dorite (website, foto, video, social media, SEO etc.) și stabilim împreună prețul. Pot exista discounturi în funcție de combinația aleasă. Contactează-ne pentru o ofertă personalizată.',
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
    a: 'Domeniul (.ro sau .com) rămâne întotdeauna în proprietatea ta. Îl cumperi tu separat sau îl cumpărăm noi pe numele tău. Website-ul de pe serverele noastre se închide, domeniu rămâne activ al tău.',
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
      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Pachete & Prețuri</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-6">
            Pachete clare. Prețuri corecte.
            <br />
            <span className="text-gold">Zero risc.</span>
          </h1>
          <p className="font-body italic text-muted text-lg max-w-2xl mx-auto">
            Website-ul este creat gratuit și găzduit de noi 6 luni. Tu plătești lunar abonamentul de administrare.
            Domeniul tău rămâne al tău întotdeauna.
          </p>
        </div>
      </section>

      {/* Demo Gratuit */}
      <section className="bg-navy py-14">
        <div className="container-site max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Primul pas — Zero risc</p>
          <h2 className="font-head font-extrabold text-h2 text-white mb-5">
            Demo 100% Gratuit
          </h2>
          <p className="font-body text-cream/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Înainte de orice decizie, îți arătăm concret ce poți obține: un website demo personalizat sau fotografii cu watermark — 100% gratuit, fără angajament.
            Dacă îți place ce facem, continuăm și personalizăm totul după dorința ta. Dacă nu, pleci fără niciun cost.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 p-5">
              <p className="font-head font-bold text-white mb-2">Website demo</p>
              <p className="font-body text-sm text-cream/70 leading-relaxed">Creăm un website demonstrativ personalizat afacerii tale, 100% gratuit. Îl vezi înainte să semnezi orice.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5">
              <p className="font-head font-bold text-white mb-2">Fotografii cu watermark</p>
              <p className="font-body text-sm text-cream/70 leading-relaxed">Realizăm fotografii profesionale la locația ta. Le livrăm cu watermark. Dacă colaborarea continuă, ștergem watermark-ul.</p>
            </div>
          </div>
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
              Dacă nu plătești abonamentul în această perioadă, website-ul se va închide.
              Este o investiție corectă pentru ambele părți.
              <br /><br />
              <strong>Ce se întâmplă după 6 luni?</strong> Ai două opțiuni: continui abonamentul lună de lună (fără angajament suplimentar),
              sau primești codul sursă și te ocupi tu de hosting + administrare. Domeniu rămâne al tău permanent în orice situație.
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

      {/* One-time services */}
      <section className="bg-parchment py-16">
        <div className="container-site max-w-4xl mx-auto">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-4">Servicii disponibile o singură dată</h2>
          <p className="font-body text-muted text-center max-w-2xl mx-auto mb-10">
            Nu orice serviciu necesită abonament. Le poți cumpăra o singură dată, independent, fără nicio altă obligație.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Fotografie profesională', desc: 'Ședință foto la locația ta. Livrare în 48h, drepturi incluse.' },
              { title: 'Video Reels / TikTok', desc: 'Conținut video faceless (fără influencer), adaptat platformei.' },
              { title: 'Branding & Identitate', desc: 'Logo, culori, fonturi, carte de vizită — tot ce definește brandul tău.' },
              { title: 'Meniu digital restaurant', desc: 'Meniu QR interactiv, actualizabil oricând. Găzduit 6 luni gratuit cu administrare lunară.' },
              { title: 'Fotografii AirBnb', desc: 'Poze profesionale la locație pentru listingul tău AirBnb. Fără servicii de administrare.' },
              { title: 'Google / Meta Ads', desc: 'Configurare și lansare campanie publicitară. Bugetul de reclamă este al tău, separat.' },
            ].map((item) => (
              <div key={item.title} className="service-card">
                <h3 className="font-head font-bold text-navy mb-2">{item.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom package */}
      <section className="bg-navy py-14">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Ofertă personalizată</p>
          <h2 className="font-head font-extrabold text-h2 text-white mb-5">Pachet personalizat</h2>
          <p className="font-body text-cream/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Alegi exact serviciile de care ai nevoie — website, fotografie, video, social media, SEO sau orice combinație.
            Stabilim împreună prețul și pot exista discounturi în funcție de pachetul ales.
            Totul transparent, fără costuri ascunse.
          </p>
          <a
            href="/contact"
            className="inline-block font-mono text-xs uppercase tracking-widest py-3.5 px-8 text-white hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)', boxShadow: '0 4px 20px -4px rgba(124,58,237,0.4)' }}
          >
            Solicită ofertă personalizată
          </a>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-parchment py-12">
        <div className="container-site max-w-3xl mx-auto">
          <div className="bg-navy border-l-4 border-gold p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Garanție 30 zile</p>
            <p className="font-body text-cream/80 leading-relaxed">
              Dacă în primele 30 zile nu ești mulțumit de ce am livrat, oprim colaborarea fără penalități.
              <strong className="text-cream"> Zero risc.</strong> Dorim colaborări pe termen lung, cu clienți puțini pe care să îi fidelizăm.
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
