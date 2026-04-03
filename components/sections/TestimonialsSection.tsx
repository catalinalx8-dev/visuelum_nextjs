'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, BarChart2, Handshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const commitments = [
  {
    icon: ShieldCheck,
    title: 'Transparență totală',
    desc: 'Niciun cost ascuns. Prețurile afișate sunt finale. Bugetul de publicitate se plătește direct în Google/Meta — nu trece prin noi.',
  },
  {
    icon: Clock,
    title: 'Website live în 14 zile',
    desc: 'De la semnarea contractului la website-ul publicat — 14 zile calendaristice. Fără scuze, fără întârzieri.',
  },
  {
    icon: BarChart2,
    title: 'Rapoarte cu cifre reale',
    desc: 'Nu „am postat 15 stories". Primești lunar: trafic, apeluri generate, poziții Google, reach și lead-uri verificabile.',
  },
  {
    icon: Handshake,
    title: 'Garanție 30 de zile',
    desc: 'Dacă în primele 30 de zile nu ești mulțumit de ce am livrat, oprim colaborarea fără penalități. Zero risc.',
  },
]

export function TestimonialsSection() {
  return (
    <Section className="bg-navy">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow color="gold" className="mb-4">Angajamentul nostru</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-cream">
            Ce îți promitem de la prima zi.
          </h2>
          <p className="font-body italic text-muted-l mt-4 max-w-xl mx-auto">
            Construim o relație pe termen lung, bazată pe rezultate măsurabile și comunicare onestă.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {commitments.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-navy-mid border border-navy-mid/50 p-8 flex flex-col gap-5 hover:border-gold/30 transition-colors duration-200"
            >
              <div className="inline-flex p-3 bg-gold/10 text-gold w-fit">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-head font-bold text-h3 text-cream mb-3">{item.title}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
