'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const testimonials = [
  {
    name: 'Andrei Ionescu',
    role: 'Proprietar restaurant',
    location: 'Constanța',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    text: 'În 3 luni de la lansarea website-ului, numărul rezervărilor online a crescut cu 40%. Echipa Visuelum s-a ocupat de tot — website, social media, Google. Recomand cu toată inima.',
    stars: 5,
  },
  {
    name: 'Maria Constantin',
    role: 'Proprietar salon de înfrumusețare',
    location: 'Mamaia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
    text: 'Înainte de Visuelum, pagina noastră de Facebook era moartă. Acum avem postări zilnice, stories, și clienți noi care spun că ne-au găsit pe Instagram. Website-ul a ieșit exact cum mi-am imaginat.',
    stars: 5,
  },
  {
    name: 'Dr. Radu Popa',
    role: 'Medic stomatolog',
    location: 'Constanța',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&q=80',
    text: 'Am evitat mult timp să investesc în online pentru că nu știam cu cine să lucrez. Visuelum mi-a demonstrat că se poate face profesional, rapid și la un preț corect. Sunt primul pe Google local.',
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <Section className="bg-navy relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=70"
          alt=""
          fill
          className="object-cover opacity-5"
          sizes="100vw"
          loading="lazy"
        />
      </div>
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,146,42,0.08) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow color="gold" className="mb-4">Ce spun clienții</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-white">
            Rezultate reale.
            <br />
            Clienți mulțumiți.
          </h2>
          <p className="font-body text-white/50 mt-4 max-w-xl mx-auto">
            Poveștile din spatele cifrelor — afaceri locale care au câștigat vizibilitate online cu Visuelum.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
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
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:bg-white/8 hover:border-gold/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} stele`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="h-6 w-6 text-gold/30" aria-hidden="true" />

              {/* Text */}
              <p className="font-body text-sm text-white/70 leading-relaxed flex-1 italic">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gold/30">
                  <Image
                    src={t.avatar}
                    alt={`Fotografie ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-head font-bold text-white text-sm">{t.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold/70">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
