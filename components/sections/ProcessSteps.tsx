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
    title: 'Audit gratuit în 48h',
    desc: 'Analizăm prezența ta online și îți prezentăm clar ce poți câștiga. Zero cost, zero obligații.',
  },
  {
    nr: '02',
    icon: Globe,
    title: 'Website live în 14 zile',
    desc: 'Design profesional, mobil-optimizat, SEO din fundație — livrat fără niciun cost inițial.',
  },
  {
    nr: '03',
    icon: Megaphone,
    title: 'Servicii active de luna 1',
    desc: 'Social media, Google, fotografie la locație. Noi facem totul, tu primești clienți.',
  },
  {
    nr: '04',
    icon: BarChart2,
    title: 'Raport lunar cu rezultate reale',
    desc: 'Trafic, apeluri, lead-uri, poziții Google. Transparență totală, cifre verificabile.',
  },
]

export function ProcessSteps() {
  return (
    <Section className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden="true" />
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
            De la zero la clienți noi în 14 zile
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
              className="relative bg-white rounded-2xl p-8 border border-stone hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 group"
            >
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 -right-4 w-8 h-px z-10"
                  style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.4), rgba(6,182,212,0.4))' }}
                  aria-hidden="true"
                />
              )}

              {/* Step number — large watermark */}
              <span
                className="absolute top-4 right-5 font-head font-extrabold text-5xl select-none leading-none"
                style={{ color: 'rgba(124,58,237,0.07)' }}
                aria-hidden="true"
              >
                {step.nr}
              </span>

              {/* Gradient circular step number */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-head font-extrabold text-sm mb-5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                {step.nr}
              </div>

              {/* Icon */}
              <div
                className="inline-flex p-3 rounded-xl mb-4 transition-colors duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))' }}
              >
                <step.icon
                  className="h-5 w-5 text-gold"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-head font-bold text-h3 text-navy mb-3 group-hover:text-gold transition-colors duration-200">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
