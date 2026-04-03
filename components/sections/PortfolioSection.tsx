'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Search, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

type ResultMetric = {
  icon: React.ElementType
  value: string
  label: string
}

type CaseStudy = {
  category: string
  name: string
  city: string
  challenge: string
  results: ResultMetric[]
  period: string
  package: string
}

const caseStudies: CaseStudy[] = [
  {
    category: 'Restaurant',
    name: 'Trattoria Bella',
    city: 'Constanța',
    challenge: 'Zero prezență digitală. Clienți exclusiv din recomandări word-of-mouth.',
    results: [
      { icon: TrendingUp, value: '+340%', label: 'trafic organic' },
      { icon: Users, value: '+60', label: 'clienți noi/lună' },
      { icon: Star, value: '4.9 ★', label: 'rating Google' },
    ],
    period: '4 luni',
    package: 'CREȘTERE',
  },
  {
    category: 'Salon Frumusețe',
    name: 'Studio Glow',
    city: 'Mamaia',
    challenge: 'Instagram abandonat, fără rezervări online, vizibilitate zero în sezon.',
    results: [
      { icon: Users, value: '+1.2K', label: 'urmăritori Instagram' },
      { icon: TrendingUp, value: '×3', label: 'rezervări lunare' },
      { icon: Search, value: 'Top 3', label: 'Google local' },
    ],
    period: '3 luni',
    package: 'CREȘTERE',
  },
  {
    category: 'Clinică Estetică',
    name: 'AesthetixMed',
    city: 'Constanța',
    challenge: 'Concurență mare, invizibili în căutările Google față de competitori.',
    results: [
      { icon: Search, value: '+180%', label: 'vizite website' },
      { icon: Users, value: '+45', label: 'lead-uri/lună' },
      { icon: TrendingUp, value: '×2.5', label: 'conversii' },
    ],
    period: '6 luni',
    package: 'DOMINARE',
  },
]

export function PortfolioSection() {
  return (
    <Section className="bg-parchment">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow className="mb-4">Rezultate reale</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Afaceri transformate.
            <br />
            Cifre verificabile.
          </h2>
          <p className="font-body italic text-muted mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Nu promitem. Demonstrăm. Iată ce am obținut pentru clienții noștri din Constanța.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.name}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-stone p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-t-4 hover:border-t-gold transition-all duration-200"
            >
              {/* Card header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold bg-gold/10 px-2 py-1">
                    {cs.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted border border-stone px-2 py-1">
                    {cs.package}
                  </span>
                </div>
                <h3 className="font-head font-bold text-h3 text-navy">{cs.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-l mt-0.5">
                  {cs.city}
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-6 pb-6 border-b border-stone flex-1">
                <p className="font-body italic text-sm text-muted leading-relaxed">
                  &ldquo;{cs.challenge}&rdquo;
                </p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {cs.results.map((r) => {
                  const Icon = r.icon
                  return (
                    <div key={r.label} className="text-center">
                      <Icon className="h-4 w-4 text-gold mx-auto mb-1.5" aria-hidden="true" />
                      <div className="font-head font-extrabold text-xl text-navy leading-none mb-1">
                        {r.value}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-muted-l leading-tight">
                        {r.label}
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-l text-center mt-1">
                Rezultate obținute în {cs.period}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
