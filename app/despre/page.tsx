import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { DespreValuesSection, DespreDifferentiatorsSection, DespreTrustSection } from '@/components/sections/DespreSections'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Despre Visuelum — Agenție de Marketing Digital din Constanța | Misiune, Echipă & Valori',
  description: 'Visuelum este agenția de marketing digital din Constanța care transformă afaceri locale invizibile în lideri online. Website gratuit, social media, SEO, Google Ads, fotografie — totul într-un singur abonament accesibil.',
  alternates: { canonical: `${siteConfig.url}/despre` },
  keywords: 'agentie marketing digital Constanta, about Visuelum, prezentare agentie, echipa Visuelum',
}

const stats = [
  { value: '10+', label: 'Industrii acoperite' },
  { value: '8', label: 'Orașe Dobrogea' },
  { value: '30 zile', label: 'Garanție rezultate' },
  { value: '100%', label: 'Transparență prețuri' },
]

const process = [
  {
    step: '01',
    title: 'Audit gratuit',
    desc: 'Analizăm prezența ta online actuală — website, Google Business, social media, competiție. Îți prezentăm un raport onest cu ce lipsește și ce se poate îmbunătăți.',
    duration: '48 ore',
  },
  {
    step: '02',
    title: 'Strategie personalizată',
    desc: 'Pe baza auditului, construim o strategie adaptată industriei tale, publicului tău și bugetului tău. Fără soluții copiate dintr-un șablon.',
    duration: '3-5 zile',
  },
  {
    step: '03',
    title: 'Implementare rapidă',
    desc: 'Construim website-ul, configurăm toate canalele digitale și producem primele materiale vizuale. Ești online în mai puțin de 2 săptămâni.',
    duration: '7-14 zile',
  },
  {
    step: '04',
    title: 'Administrare lunară',
    desc: 'Ne ocupăm de tot: postăm zilnic, răspundem la comentarii, optimizăm campaniile, actualizăm website-ul și îți trimitem raportul lunar.',
    duration: 'Lunar, continuu',
  },
]

const faqs = [
  {
    q: 'De ce este website-ul gratuit?',
    a: 'Website-ul este investiția noastră în colaborarea noastră pe termen lung. Îl creăm gratuit pentru că știm că, dacă obținem rezultate, rămâi cu noi. Este o declarație de încredere reciprocă.',
  },
  {
    q: 'Ce se întâmplă dacă vreau să opresc colaborarea?',
    a: 'Poți opri oricând, fără penalități după primele 30 de zile. Website-ul se închide de pe serverele noastre, dar domeniul (.ro sau .com) rămâne întotdeauna al tău.',
  },
  {
    q: 'Lucrați cu afaceri din afara Constanței?',
    a: 'Lucrăm în primul rând cu afaceri din Dobrogea — Constanța, Mamaia, Năvodari, Mangalia, Tulcea, Eforie. Pentru servicii digitale (fără fotografie), putem lucra la distanță și cu afaceri din restul țării.',
  },
  {
    q: 'Cât de rapid văd rezultate?',
    a: 'Google Ads aduce lead-uri în câteva zile de la lansare. Social media — engagement vizibil în 2-4 săptămâni. SEO local — rezultate solide în 2-4 luni. Depinde de serviciu.',
  },
  {
    q: 'Trebuie să am cunoștințe tehnice?',
    a: 'Zero. Tu te ocupi de afacere, noi de tot ce înseamnă online. Îți explicăm ce facem și de ce, dar nu trebuie să știi cum să modifici CSS sau să configurezi Google Analytics.',
  },
]

export default function DesprePage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Despre', url: `${siteConfig.url}/despre` },
  ]

  return (
    <>
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Despre Visuelum</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-6">
            Vizibilitate totală pentru
            <br />
            <span className="text-gold">afaceri invizibile.</span>
          </h1>
          <p className="font-body italic text-muted text-xl max-w-2xl mx-auto mb-12">
            Există mii de afaceri bune în România care nu există online. Noi le facem vizibile — simplu, rapid, accesibil.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-head font-extrabold text-3xl text-gold mb-1">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20">
        <div className="container-site max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Povestea noastră</p>
              <h2 className="font-head font-extrabold text-h2 text-navy mb-8">
                De ce am creat Visuelum?
              </h2>
              <div className="space-y-6 font-body text-ink leading-relaxed">
                <p>
                  Am văzut prea multe restaurante bune, saloane talentate și clinici profesioniste care pierdeau clienți
                  față de competitori mai puțin buni dar mai vizibili online. Nu din cauza calității serviciilor —
                  ci din cauza <strong>absenței digitale</strong>.
                </p>
                <p>
                  Problema nu era că antreprenorii nu voiau prezență online. Era că nu aveau timp, nu știau cum, sau
                  serviciile erau prea scumpe pentru bugetul unui IMM local. O agenție de web design lua 2.000–5.000 RON
                  pentru un website. O agenție de social media lua 1.000–2.000 RON/lună. Un fotograf — 500–1.000 RON/ședință.
                </p>
                <p>
                  Și chiar dacă plăteai toți acești bani, nu aveai nicio garanție că investiția aducea clienți noi.
                  Primeai un website frumos, niște postări colorate și poate un raport cu "reach" și "impressions" pe care
                  nu știai cum să le interpretezi.
                </p>
                <p className="text-lg font-semibold text-navy">
                  Am creat un model diferit: website gratuit, totul administrat, un abonament lunar accesibil,
                  și rapoarte cu cifre care contează — nu cu vanity metrics.
                </p>
                <p>
                  <strong>Nu vindem servicii. Vindem clienți noi pentru afacerea ta.</strong> Asta este
                  singura metrică cu adevărat importantă.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85"
                alt="Echipă Visuelum discutând strategii de marketing digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="bg-navy py-16">
        <div className="container-site max-w-3xl mx-auto">
          <div className="border-l-4 border-gold pl-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Misiunea noastră</p>
            <blockquote className="font-body italic text-cream text-2xl leading-relaxed">
              &quot;Nu vindem servicii. Vindem clienți noi pentru afacerea ta.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <DespreValuesSection />

      <DespreDifferentiatorsSection />

      {/* Process */}
      <section className="bg-navy py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Cum lucrăm</p>
            <h2 className="font-head font-extrabold text-h2 text-cream mb-4">
              De la primul contact la rezultate
            </h2>
            <p className="font-body italic text-muted-l max-w-xl mx-auto">
              Procesul nostru este simplu, transparent și rapid. Ești online în mai puțin de 2 săptămâni.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((p) => (
              <div key={p.step} className="flex gap-5">
                <div className="font-mono text-5xl font-bold text-gold/20 leading-none flex-shrink-0 select-none">
                  {p.step}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-head font-bold text-cream text-lg">{p.title}</h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 px-2 py-0.5">
                      {p.duration}
                    </span>
                  </div>
                  <p className="font-body text-muted-l text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
              Solicită Audit Gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <DespreTrustSection />

      {/* FAQ */}
      <section className="bg-cream py-20">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Întrebări frecvente</p>
            <h2 className="font-head font-extrabold text-h2 text-navy">
              Răspunsuri clare la întrebări reale
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-stone p-6">
                <h3 className="font-head font-bold text-navy mb-3">{f.q}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="font-body text-muted text-sm mb-4">
              Ai alte întrebări? Suntem la un click distanță.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-3 inline-flex items-center gap-2 text-sm">
              Vorbește cu noi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
