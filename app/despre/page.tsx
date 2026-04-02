import type { Metadata } from 'next'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Despre Visuelum — Agenție de Marketing Digital din Constanța',
  description: 'Visuelum este agenția care face afacerile locale din Constanța vizibile online. Website gratuit, social media, SEO, fotografie — totul într-un singur abonament.',
  alternates: { canonical: `${siteConfig.url}/despre` },
}

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

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Despre Visuelum</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-6">
            Vizibilitate totală pentru
            <br />
            <span className="text-gold">afaceri invizibile.</span>
          </h1>
          <p className="font-body italic text-muted-l text-xl max-w-2xl">
            Există mii de afaceri bune în România care nu există online. Noi le facem vizibile.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site max-w-3xl mx-auto">
          <p className="eyebrow mb-4 text-center">Povestea noastră</p>
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-10">
            De ce am creat Visuelum?
          </h2>
          <div className="space-y-6 font-body text-ink leading-relaxed">
            <p>
              Am văzut prea multe restaurante bune, saloane talentate și clinici profesioniste care pierdeau clienți
              față de competitori mai puțin buni dar mai vizibili online. Nu din cauza calității serviciilor —
              ci din cauza absenței digitale.
            </p>
            <p>
              Problema nu era că antreprenorii nu voiau prezență online. Era că nu aveau timp, nu știau cum, sau
              serviciile erau prea scumpe pentru bugetul unui IMM local. O agenție de web design lua 2.000–5.000 RON
              pentru un website. O agenție de social media lua 1.000–2.000 RON/lună. Un fotograf — 500–1.000 RON/ședință.
            </p>
            <p>
              <strong>Am creat un model diferit:</strong> website gratuit, totul administrat, un abonament lunar accesibil.
              Nu vindem produse. Vindem clienți noi pentru afacerea ta.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <div className="border-l-4 border-gold pl-8 text-left">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Misiunea noastră</p>
            <blockquote className="font-body italic text-cream text-2xl leading-relaxed">
              &quot;Nu vindem servicii. Vindem clienți noi pentru afacerea ta.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-parchment py-20">
        <div className="container-site">
          <h2 className="font-head font-extrabold text-h2 text-navy text-center mb-12">Valorile noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Transparență', desc: 'Prețuri clare, contracte clare, rapoarte clare. Fără costuri ascunse, fără surprize.' },
              { title: 'Rezultate reale', desc: 'Măsurăm tot: trafic, apeluri, lead-uri. Dacă nu livrăm, nu ne ascundem după "am postat".' },
              { title: 'Brandul tău, nu al nostru', desc: 'Suntem invizibili. Tot succesul online al afacerii tale aparține afacerii tale, nu nouă.' },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-stone p-8">
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="font-head font-bold text-navy text-xl mb-3">{v.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
