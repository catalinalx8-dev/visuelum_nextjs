'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    imageAlt: 'Creare website profesional gratuit pentru afaceri din Constanța — design modern mobil-optimizat',
  },
  {
    icon: Camera,
    step: '02',
    title: 'Conținut vizual de calitate',
    desc: 'Fotografii și video realizate cu Sony A7 II la locația ta. Imagini care atrag clienți — nu stock photo. Editate și livrate în 48 de ore.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
    imageAlt: 'Fotografie profesională la locație cu Sony A7 II — conținut vizual autentic pentru afaceri',
  },
  {
    icon: BarChart2,
    step: '03',
    title: 'Creștere organică și plătită',
    desc: 'Social media activ, SEO local, Google Business optimizat și campanii Google/Meta Ads administrate de noi. Brandul tău devine primul rezultat din piața locală.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    imageAlt: 'Strategii de creștere online — SEO local și campanii publicitare pentru afaceri din Dobrogea',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'Rapoarte și optimizare continuă',
    desc: 'Lunar primești un raport detaliat cu trafic, apeluri, poziții Google și lead-uri. Optimizăm constant strategia în funcție de rezultate reale.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    imageAlt: 'Rapoarte lunare detaliate cu date reale — trafic, lead-uri și performanță digitală',
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
              className="group bg-white rounded-2xl overflow-hidden border border-stone/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Step image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className="flex-shrink-0 p-2.5 bg-gold text-white rounded-xl">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-head font-extrabold text-4xl text-white/30 leading-none select-none">
                    {step.step}
                  </span>
                </div>
              </div>
              {/* Step content */}
              <div className="p-7">
                <h3 className="font-head font-bold text-h3 text-navy mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
