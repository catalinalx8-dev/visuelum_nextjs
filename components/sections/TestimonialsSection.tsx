'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const testimonials = [
  {
    quote: 'De când am colaborat cu Visuelum, numărul de rezervări a crescut cu 40%. Website-ul arată profesional și clienții ne găsesc acum pe Google.',
    name: 'Maria C.',
    business: 'Restaurant, Constanța',
    initials: 'MC',
  },
  {
    quote: 'Nu credeam că social media poate face diferența pentru un salon mic. Greșeam. Acum primesc 15-20 clienți noi pe lună direct din Instagram.',
    name: 'Andrei M.',
    business: 'Barber Shop, Mamaia',
    initials: 'AM',
  },
  {
    quote: 'Fotografia profesională a schimbat total cum ne percep clienții. Materialele arată exact cum ne-am dorit — elegant, profesional, real.',
    name: 'Elena P.',
    business: 'Clinică Estetică, Constanța',
    initials: 'EP',
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
          <Eyebrow color="gold" className="mb-4">Testimoniale</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-cream">
            Afaceri care au ales vizibilitatea.
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-navy-mid border border-navy-mid/50 p-8 flex flex-col gap-6"
            >
              <div className="flex-1">
                <span className="text-gold text-4xl leading-none font-head">"</span>
                <p className="font-body italic text-cream/80 text-sm leading-relaxed mt-2">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs text-gold font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-head font-bold text-cream text-sm">{t.name}</p>
                  <p className="font-mono text-xs text-muted-l uppercase tracking-wider">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
