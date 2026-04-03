import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, TrendingUp, Shield, Heart, Zap, Users, Star, Award, Clock } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
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

const values = [
  {
    icon: Shield,
    title: 'Transparență totală',
    desc: 'Prețuri clare afișate public, contracte simple, rapoarte lunare cu cifre reale. Fără costuri ascunse, fără surprize neplăcute la factură.',
  },
  {
    icon: TrendingUp,
    title: 'Rezultate măsurabile',
    desc: 'Fiecare leu investit trebuie să aducă rezultate. Măsurăm trafic, apeluri, lead-uri, programări. Dacă nu livrăm, nu ne ascundem după "am postat".',
  },
  {
    icon: Heart,
    title: 'Brandul tău, nu al nostru',
    desc: 'Suntem invizibili în spatele muncii noastre. Tot succesul online al afacerii tale aparține afacerii tale — nu nouă. Noi suntem motorul, tu ești fața.',
  },
  {
    icon: Zap,
    title: 'Viteză și proactivitate',
    desc: 'Nu așteptăm să ne spui ce trebuie făcut. Venim cu idei, soluții și inițiative. Răspundem în maximum 24 ore — de cele mai multe ori în câteva ore.',
  },
  {
    icon: Users,
    title: 'Parteneriat real',
    desc: 'Nu ești un număr de cont. Cunoaștem afacerea ta, echipa ta, valorile tale. Succesul tău este succesul nostru — asta ne motivează cu adevărat.',
  },
  {
    icon: Award,
    title: 'Expertiză locală',
    desc: 'Suntem din Constanța și cunoaștem piața locală în profunzime. Știm ce funcționează în Dobrogea, nu aplicăm rețete generice din altă parte.',
  },
]

const differentiators = [
  {
    title: 'Website gratuit',
    desc: 'Nu plătești nimic pentru crearea site-ului. Îl construim, îl găzduim și îl administrăm noi. Tu plătești un singur abonament lunar accesibil.',
    vs: 'Alte agenții: 2.000–5.000 RON pentru un website',
  },
  {
    title: 'Totul într-un singur abonament',
    desc: 'Website, social media, SEO, Google Ads, fotografii — toate într-un singur pachet lunar. Nu jonglezi cu 4 furnizori diferiți.',
    vs: 'Alte agenții: plătești separat fiecare serviciu',
  },
  {
    title: 'Rapoarte lunare cu cifre reale',
    desc: 'Primești lunar un raport cu trafic, apeluri generate, leads din Google Ads, urmăritori câștigați. Știi exact pe ce îți cheltuiești banii.',
    vs: 'Alte agenții: "am postat" — fără cifre clare',
  },
  {
    title: 'Garanție de 30 de zile',
    desc: 'Dacă în primele 30 de zile nu ești mulțumit de ce am livrat, oprim colaborarea fără penalități. Simplu și onest.',
    vs: 'Alte agenții: contracte pe 12 luni fără ieșire',
  },
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
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Despre Visuelum</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-6">
            Vizibilitate totală pentru
            <br />
            <span className="text-gold">afaceri invizibile.</span>
          </h1>
          <p className="font-body italic text-muted-l text-xl max-w-2xl mb-12">
            Există mii de afaceri bune în România care nu există online. Noi le facem vizibile — simplu, rapid, accesibil.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-head font-extrabold text-3xl text-gold mb-1">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
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

      {/* Values */}
      <section className="bg-parchment py-20">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Valorile noastre</p>
            <h2 className="font-head font-extrabold text-h2 text-navy mb-4">
              Ce ne ghidează în fiecare zi
            </h2>
            <p className="font-body text-muted max-w-xl mx-auto">
              Valorile nu sunt afișate pe perete — sunt reflectate în fiecare decizie pe care o luăm.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-stone p-8 hover:border-gold/30 transition-colors">
                <v.icon className="h-7 w-7 text-gold mb-5" />
                <h3 className="font-head font-bold text-navy text-xl mb-3">{v.title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="bg-cream py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">De ce suntem diferiți</p>
            <h2 className="font-head font-extrabold text-h2 text-navy mb-4">
              Modelul Visuelum vs. piața
            </h2>
            <p className="font-body text-muted max-w-xl mx-auto">
              Nu suntem o agenție tradițională. Am regândit tot modelul de la zero.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white border border-stone p-7">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <h3 className="font-head font-bold text-navy">{d.title}</h3>
                </div>
                <p className="font-body text-muted text-sm leading-relaxed mb-4">{d.desc}</p>
                <div className="bg-parchment border border-stone px-3 py-2 rounded">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted/70">
                    {d.vs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Trust signals */}
      <section className="bg-parchment py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">De ce să ai încredere</p>
            <h2 className="font-head font-extrabold text-h2 text-navy">
              Angajamentele noastre față de tine
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Star, title: 'Audit 100% gratuit', desc: 'Analizăm prezența ta online fără niciun cost și fără obligații. Primești raportul indiferent dacă colaborăm sau nu.' },
              { icon: Clock, title: 'Răspuns în 24 ore', desc: 'Orice mesaj, email sau apel primește răspuns în maximum 24 ore. De obicei, mult mai rapid.' },
              { icon: Shield, title: 'Garanție 30 de zile', desc: 'Dacă nu ești mulțumit în primele 30 de zile, oprim colaborarea fără penalități. Simplu.' },
              { icon: TrendingUp, title: 'Rapoarte lunare clare', desc: 'Primești lunar un raport cu cifre reale: trafic, lead-uri, apeluri, engagament. Nu interpretăm vanity metrics.' },
              { icon: Award, title: 'Fără contracte lungi', desc: 'Nu te legăm în contracte pe 12 luni. Colaborăm lună de lună — rămâi pentru că obții rezultate, nu pentru că ești obligat.' },
              { icon: CheckCircle, title: 'Prețuri publice', desc: 'Prețurile noastre sunt afișate public pe site. Nu există surprize sau oferte diferite pentru clienți diferiți.' },
            ].map((t) => (
              <div key={t.title} className="bg-white border border-stone p-6">
                <t.icon className="h-6 w-6 text-gold mb-3" aria-hidden="true" />
                <h3 className="font-head font-bold text-navy mb-2">{t.title}</h3>
                <p className="font-body text-muted text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
