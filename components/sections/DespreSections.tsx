'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Shield, Heart, Zap, Users, Star, Award, Clock } from 'lucide-react'

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

const trustItems = [
  { icon: Star, title: 'Audit 100% gratuit', desc: 'Analizăm prezența ta online fără niciun cost și fără obligații. Primești raportul indiferent dacă colaborăm sau nu.' },
  { icon: Clock, title: 'Răspuns în 24 ore', desc: 'Orice mesaj, email sau apel primește răspuns în maximum 24 ore. De obicei, mult mai rapid.' },
  { icon: Shield, title: 'Garanție 30 de zile', desc: 'Dacă nu ești mulțumit în primele 30 de zile, oprim colaborarea fără penalități. Simplu.' },
  { icon: TrendingUp, title: 'Rapoarte lunare clare', desc: 'Primești lunar un raport cu cifre reale: trafic, lead-uri, apeluri, engagament. Nu interpretăm vanity metrics.' },
  { icon: Award, title: 'Fără contracte lungi', desc: 'Nu te legăm în contracte pe 12 luni. Colaborăm lună de lună — rămâi pentru că obții rezultate, nu pentru că ești obligat.' },
  { icon: CheckCircle, title: 'Prețuri publice', desc: 'Prețurile noastre sunt afișate public pe site. Nu există surprize sau oferte diferite pentru clienți diferiți.' },
]

export function DespreValuesSection() {
  return (
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
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-stone p-8 rounded-xl hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <v.icon className="h-7 w-7 text-gold mb-5" />
              <h3 className="font-head font-bold text-navy text-xl mb-3">{v.title}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DespreDifferentiatorsSection() {
  return (
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
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-stone p-7 rounded-xl hover:border-gold/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DespreTrustSection() {
  return (
    <section className="bg-parchment py-20">
      <div className="container-site max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">De ce să ai încredere</p>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Angajamentele noastre față de tine
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustItems.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white border border-stone p-6 rounded-xl hover:border-gold/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <t.icon className="h-6 w-6 text-gold mb-3" aria-hidden="true" />
              <h3 className="font-head font-bold text-navy mb-2">{t.title}</h3>
              <p className="font-body text-muted text-xs leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
