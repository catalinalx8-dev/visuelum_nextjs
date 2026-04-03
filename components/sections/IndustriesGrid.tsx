'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const industries = [
  'Restaurante & Cafenele',
  'Saloane & Barber',
  'Clinici Medicale',
  'Pensiuni & Cazare',
  'Fitness & Sporturi',
  'Retail & Magazine',
  'Agenții Imobiliare',
  'Servicii B2C',
  'Construcții',
  'Cabinete Juridice',
  'Educație & Cursuri',
  'Alte servicii',
]

export function IndustriesGrid() {
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
          <Eyebrow className="mb-4">Clienți țintă</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Lucrăm cu orice afacere locală
            <br />
            din Constanța
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.06 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="px-5 py-2.5 border border-stone/70 bg-white rounded-full font-mono text-xs uppercase tracking-widest text-muted cursor-default hover:bg-gold hover:text-white hover:border-gold transition-all duration-200"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
