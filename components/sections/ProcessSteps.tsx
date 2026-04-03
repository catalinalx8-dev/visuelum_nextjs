'use client'

import { motion } from 'framer-motion'
import { FileSignature, Globe, Megaphone, BarChart2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const steps = [
  {
    nr: '01',
    icon: FileSignature,
    title: 'Contract semnat',
    desc: 'Abonament minim 6 luni. Prețul lunar include totul. Fără costuri ascunse.',
  },
  {
    nr: '02',
    icon: Globe,
    title: 'Website livrat în 14 zile',
    desc: 'Gratuit. Design profesional, mobil-optimizat, SEO din fundație.',
  },
  {
    nr: '03',
    icon: Megaphone,
    title: 'Servicii active lunar',
    desc: 'Social media, Google, fotografie la locație. Noi facem totul.',
  },
  {
    nr: '04',
    icon: BarChart2,
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
          {steps.map((step, index) => (
            <motion.div
              key={step.nr}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl p-8 border border-stone hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-gold/30 z-10"
                  aria-hidden="true"
                />
              )}
              {/* Step number — large watermark */}
              <span className="absolute top-5 right-6 font-head font-extrabold text-5xl text-gold/8 select-none leading-none" aria-hidden="true">
                {step.nr}
              </span>
              {/* Icon */}
              <div className="inline-flex p-3 bg-gold/10 text-gold rounded-xl mb-5">
                <step.icon className="h-5 w-5" aria-hidden="true" />
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
