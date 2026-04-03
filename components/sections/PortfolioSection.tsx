'use client'

import { motion } from 'framer-motion'
import { Globe, Camera, BarChart2, RefreshCw } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const steps = [
  {
    icon: Globe,
    step: '01',
    title: 'Website profesional — gratuit',
    desc: 'Construim website-ul afacerii tale fără niciun cost inițial. Design personalizat, mobil-optimizat, SEO din fundație. Live în 14 zile calendaristice de la semnarea contractului.',
  },
  {
    icon: Camera,
    step: '02',
    title: 'Conținut vizual de calitate',
    desc: 'Fotografii și video realizate cu Sony A7 II la locația ta. Imagini care atrag clienți — nu stock photo. Editate și livrate în 48 de ore.',
  },
  {
    icon: BarChart2,
    step: '03',
    title: 'Creștere organică și plătită',
    desc: 'Social media activ, SEO local, Google Business optimizat și campanii Google/Meta Ads administrate de noi. Brandul tău devine primul rezultat din piața locală.',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'Rapoarte și optimizare continuă',
    desc: 'Lunar primești un raport detaliat cu trafic, apeluri, poziții Google și lead-uri. Optimizăm constant strategia în funcție de rezultate reale.',
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
          <Eyebrow className="mb-4">Cum lucrăm</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            De la zero la vizibilitate.
            <br />
            În pași clari.
          </h2>
          <p className="font-body italic text-muted mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Un proces transparent, fără surprize. Știi exact ce facem și când.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-stone/60 rounded-2xl p-8 flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="flex-shrink-0 p-3 bg-gold/10 text-gold rounded-xl">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="font-head font-extrabold text-5xl text-stone leading-none select-none">
                  {step.step}
                </span>
              </div>
              <h3 className="font-head font-bold text-h3 text-navy mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
