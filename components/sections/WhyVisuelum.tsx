'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const reasons = [
  {
    title: 'Brandul tău strălucește',
    desc: 'Suntem invizibili. Tot conținutul creat este al afacerii tale. Tu primești lauda, noi facem munca.',
  },
  {
    title: 'Fotografie reală',
    desc: 'Sony A7 II, lumină naturală, editare Lightroom, 48h livrare. Nu stock photo.',
  },
  {
    title: 'Un singur interlocutor',
    desc: 'Nu 3 agenții diferite pentru site, social și foto. O persoană, o factură, zero confuzie.',
  },
  {
    title: 'Raport lunar real',
    desc: 'Cifre concrete, nu "am postat 15 stories". Trafic, apeluri, lead-uri verificabile.',
  },
]

export function WhyVisuelum() {
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
          <Eyebrow color="gold" className="mb-4">De ce Visuelum</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-cream">
            Nu suntem doar o altă agenție.
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-navy-mid border border-navy-mid/50 rounded-2xl p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h3 className="font-head font-bold text-h3 text-cream mb-3">{reason.title}</h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
