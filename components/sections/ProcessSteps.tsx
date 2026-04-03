'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const steps = [
  {
    nr: '01',
    title: 'Contract semnat',
    desc: 'Abonament minim 6 luni. Prețul lunar include totul. Fără costuri ascunse.',
  },
  {
    nr: '02',
    title: 'Website livrat în 14 zile',
    desc: 'Gratuit. Design profesional, mobil-optimizat, SEO din fundație.',
  },
  {
    nr: '03',
    title: 'Servicii active lunar',
    desc: 'Social media, Google, fotografie la locație. Noi facem totul.',
  },
  {
    nr: '04',
    title: 'Raport lunar cu cifre reale',
    desc: 'Trafic, reach, apeluri, lead-uri. Transparent și verificabil.',
  },
]

export function ProcessSteps() {
  return (
    <Section className="bg-parchment relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow color="gold" className="mb-4">Cum funcționează</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            4 pași spre vizibilitate totală
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.nr}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl p-8 border border-stone hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                <span className="font-head font-extrabold text-5xl text-gold/15 select-none">
                  {step.nr}
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
