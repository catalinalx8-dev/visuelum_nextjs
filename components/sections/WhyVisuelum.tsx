'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
    <Section className="bg-navy overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85"
                alt="Echipă Visuelum — profesioniști în marketing digital lucrând pentru clienți din Constanța"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold rounded-2xl px-6 py-4 shadow-2xl" aria-hidden="true">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">Garanție</p>
              <p className="font-head font-extrabold text-2xl text-white">30 zile</p>
            </div>
          </motion.div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Eyebrow color="gold" className="mb-4">De ce Visuelum</Eyebrow>
              <h2 className="font-head font-extrabold text-h2 text-cream">
                Nu suntem doar<br />o altă agenție.
              </h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ staggerChildren: 0.08 }}
              className="flex flex-col gap-6"
            >
              {reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-0.5 h-12 bg-gold/40 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-head font-bold text-cream mb-1.5">{reason.title}</h3>
                    <p className="font-body text-sm text-cream/60 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
