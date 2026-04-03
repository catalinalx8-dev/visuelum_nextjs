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
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-gold fill-current flex-shrink-0" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gold text-3xl leading-none font-head">"</span>
                <p className="font-body italic text-cream/80 text-sm leading-relaxed mt-1">
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
