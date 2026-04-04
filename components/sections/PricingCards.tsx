'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardData {
  id: string
  badge: string
  name: string
  price: number
  subtitle: string
  target: string
  features: PricingFeature[]
  footerTip: string
  featured?: boolean
  bgHeader?: string
  textHeader?: string
}

const plans: PricingCardData[] = [
  {
    id: 'prezenta',
    badge: 'DEBUT',
    name: 'PREZENȚA',
    price: 349,
    subtitle: 'Există online. Arăți serios. Clienții te găsesc.',
    target: 'Afaceri la început sau fără prezență digitală, care vor să apară credibil online fără investiție inițială.',
    features: [
      { text: 'Website până la 5 pagini — gratuit, live în 14 zile', included: true },
      { text: 'Hosting + SSL pe serverele noastre, inclus 6 luni', included: true },
      { text: 'Administrare web lunară: mentenanță, backup, uptime', included: true },
      { text: 'Google Business Profile optimizat — apari pe Maps', included: true },
      { text: 'Calendar lunar social media + texte și hashtag-uri', included: true },
      { text: 'Raport lunar simplu: vizite, poziții locale', included: true },
      { text: 'Ședință foto la locație', included: false },
      { text: 'Social media publicare (tu postezi)', included: false },
      { text: 'Google Ads / Meta Ads', included: false },
    ],
    footerTip: 'Ideal pentru: salon, atelier, cabinet, magazin mic',
    bgHeader: 'bg-navy',
    textHeader: 'text-white',
  },
  {
    id: 'crestere',
    badge: 'RECOMANDAT ★ CEL MAI ALES',
    name: 'CREȘTERE',
    price: 649,
    subtitle: 'Clienți noi lunar, fără să ridici un deget.',
    target: 'Restaurante, saloane, clinici, pensiuni — afaceri vizuale care vor clienți constant.',
    features: [
      { text: 'Website până la 8 pagini — gratuit, live în 14 zile', included: true },
      { text: 'Hosting premium + SSL + email profesional incluse', included: true },
      { text: 'Administrare web completă: mentenanță, backup auto, securitate', included: true },
      { text: 'Social Media full service: 4 postări/săptămână + stories', included: true },
      { text: 'Google Business activ: postări săptămânale, răspuns recenzii', included: true },
      { text: 'SEO local avansat: audit tehnic + optimizare conținut', included: true },
      { text: '1 ședință foto / lună (2h) — Sony A7 II, editare inclusă', included: true },
      { text: 'Raport lunar detaliat: trafic, reach, apeluri, lead-uri', included: true },
      { text: 'Video Reels / TikTok filmat de Visuelum', included: false },
      { text: 'Google Ads / Meta Ads management', included: false },
    ],
    footerTip: 'Ideal pentru: restaurante, cafenele, saloane, clinici, pensiuni',
    featured: true,
    bgHeader: 'bg-gold',
    textHeader: 'text-white',
  },
  {
    id: 'dominare',
    badge: 'COMPLET',
    name: 'DOMINARE',
    price: 1199,
    subtitle: 'Ești prima alegere în piața ta. Nu "încă un jucător".',
    target: 'Agenții imobiliare, hoteluri, restaurante premium, clinici estetice.',
    features: [
      { text: 'Website premium nelimitat pagini — WooCommerce, rezervări, meniu', included: true },
      { text: 'Hosting dedicat + SSL + 5 emailuri + backup zilnic', included: true },
      { text: 'Social Media zilnic: 6 postări/săpt pe 3 platforme + stories', included: true },
      { text: '2 ședințe foto / lună (3h fiecare)', included: true },
      { text: '2 video-uri Reels / TikTok filmate + editate / lună', included: true },
      { text: 'SEO avansat: keyword research + conținut optimizat lunar', included: true },
      { text: 'Google Ads + Meta Ads management (buget client separat)', included: true },
      { text: 'Design grafic lunar: bannere, postere, materiale print', included: true },
      { text: 'Raport avansat săptămânal + call analiză 45 min/lună', included: true },
      { text: 'Suport WhatsApp prioritar <4h zile lucrătoare', included: true },
    ],
    footerTip: 'Ideal pentru: agenții imobiliare, hoteluri, restaurante premium',
    bgHeader: 'bg-navy',
    textHeader: 'text-white',
  },
]

function PricingCard({ plan, compact = false }: { plan: PricingCardData; compact?: boolean }) {
  const [hostingOpen, setHostingOpen] = useState(false)

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className={cn(
        'flex flex-col rounded-2xl transition-all duration-300 h-full',
        plan.featured
          ? 'gradient-border shadow-2xl shadow-gold/25 scale-[1.02]'
          : 'border-2 border-stone hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10'
      )}
    >
      {/* Header */}
      <div
        className={cn('px-8 py-6 rounded-t-2xl', plan.featured ? 'rounded-t-[calc(1rem-2px)]' : '')}
        style={plan.featured
          ? { background: 'linear-gradient(135deg, #7c3aed, #a855f7 50%, #06b6d4)' }
          : plan.bgHeader === 'bg-navy'
            ? { background: '#0f0f23' }
            : undefined
        }
      >
        <span className={cn('font-mono text-xs uppercase tracking-widest block mb-3', plan.featured ? 'text-white/70' : 'text-gold')}>
          {plan.badge}
        </span>
        <h3 className={cn('font-head font-extrabold text-2xl mb-1', plan.textHeader ?? 'text-white')}>
          {plan.name}
        </h3>
        <div className={cn('flex items-baseline gap-1', plan.textHeader ?? 'text-white')}>
          <span className="font-head font-extrabold text-4xl">
            {plan.price.toLocaleString('ro-RO')}
          </span>
          <span className="font-mono text-sm uppercase">RON/lună</span>
        </div>
        <p className={cn('font-body text-sm mt-3 leading-relaxed', plan.featured ? 'text-white/80' : 'text-white/70')}>
          {plan.subtitle}
        </p>
      </div>

      {/* Features */}
      <div className="flex-1 bg-white px-8 py-6">
        {!compact && (
          <p className="font-body text-xs text-muted leading-relaxed mb-5 pb-5 border-b border-stone">
            {plan.target}
          </p>
        )}
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-3">
              {feature.included ? (
                <span
                  className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}
                >
                  <Check className="h-2.5 w-2.5 text-white" />
                </span>
              ) : (
                <X className="h-4 w-4 text-muted-l mt-0.5 flex-shrink-0" />
              )}
              <span className={cn('font-body text-sm leading-relaxed', feature.included ? 'text-ink' : 'text-muted-l')}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Hosting info collapsible */}
        <div className="mt-6 border-t border-stone pt-4">
          <button
            onClick={() => setHostingOpen(!hostingOpen)}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
          >
            Website gratuit — cum funcționează?
            <ChevronDown className={cn('h-3 w-3 transition-transform duration-300', hostingOpen && 'rotate-180')} />
          </button>
          {hostingOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 space-y-2"
            >
              {[
                'Website creat și găzduit de noi pe durata celor 6 luni',
                'Domeniul (.ro sau .com) rămâne întotdeauna în proprietatea ta',
                'Dacă nu continui după 6 luni → website se închide, domeniu rămâne al tău',
                'Dacă continui → hosting rămâne activ fără costuri suplimentare',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold text-xs mt-0.5">›</span>
                  <span className="font-body text-xs text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-stone px-8 py-5 flex flex-col gap-3 rounded-b-2xl">
        <Link
          href="/contact"
          className={cn(
            'w-full text-center font-mono text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all duration-300',
            plan.featured
              ? 'text-white font-bold hover:-translate-y-0.5'
              : 'border-2 border-navy text-navy hover:bg-navy hover:text-cream'
          )}
          style={plan.featured
            ? { background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 4px 20px -4px rgba(124,58,237,0.4)' }
            : undefined
          }
        >
          Alege pachetul
        </Link>
        <p className="font-mono text-xs text-muted text-center">{plan.footerTip}</p>
      </div>
    </motion.div>
  )
}

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <Section className="bg-parchment">
      <Container>
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Eyebrow className="mb-4">Pachete & Prețuri</Eyebrow>
            <h2 className="font-head font-extrabold text-h2 text-navy mb-4">
              Pachete clare. Prețuri corecte.
              <br />
              Zero risc.
            </h2>
            <p className="font-body italic text-muted max-w-2xl mx-auto">
              Website-ul este creat gratuit și găzduit de noi 6 luni. Tu plătești lunar abonamentul de administrare.
              Domeniul tău rămâne al tău întotdeauna.
            </p>
          </motion.div>
        )}

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} compact={compact} />
          ))}
        </motion.div>

        {compact && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              href="/pachete"
              className="font-mono text-sm uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
            >
              Vezi toate detaliile →
            </Link>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
