'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const reasons = [
  {
    title: 'Primul pe Google în Constanța',
    desc: 'SEO local optimizat din prima zi: Google Business activ, audit tehnic, conținut targetat — apari acolo unde caută clienții tăi.',
  },
  {
    title: 'Conținut autentic, nu stock photo',
    desc: 'Sony A7 II, lumină naturală, editare Lightroom, 48h livrare. Fotografii reale care construiesc credibilitate — nu imagini generice de internet.',
  },
  {
    title: 'Un singur interlocutor, zero bătaie de cap',
    desc: 'Site, social media, foto, Google Ads — totul la o singură agenție, o singură factură. Tu te concentrezi pe afacere, noi pe online.',
  },
  {
    title: 'Raport lunar cu cifre care contează',
    desc: 'Trafic, apeluri, rezervări, lead-uri verificabile — nu "reach" și "impressions" inutile. Știi exact ce obții pentru fiecare leu investit.',
  },
]

export function WhyVisuelum() {
  return (
    <Section className="bg-white overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge with gradient */}
            <div
              className="absolute -bottom-4 -right-4 rounded-2xl px-6 py-4 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              aria-hidden="true"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-1">Garanție</p>
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
              <h2 className="font-head font-extrabold text-h2 text-navy">
                Agenția care livrează
                <br />rezultate măsurabile.
              </h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ staggerChildren: 0.08 }}
              className="flex flex-col gap-6"
            >
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-5 items-start group cursor-default"
                >
                  {/* Gradient left bar */}
                  <div
                    className="flex-shrink-0 w-0.5 h-14 mt-1 rounded-full transition-all duration-300 group-hover:w-1"
                    style={{
                      background: i % 2 === 0
                        ? 'linear-gradient(180deg, #7c3aed, #a855f7)'
                        : 'linear-gradient(180deg, #a855f7, #06b6d4)',
                    }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-head font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">
                      {reason.title}
                    </h3>
                    <p className="font-body text-sm text-muted leading-relaxed">{reason.desc}</p>
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
