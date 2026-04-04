'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

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
    <section
      className="section-py relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #07071a 0%, #0f0f23 40%, #1a0a2e 100%)' }}
    >
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />

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
              className="glass rounded-2xl p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} stele`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                className="h-7 w-7"
                style={{ color: 'rgba(124,58,237,0.5)' }}
                aria-hidden="true"
              />

              {/* Text */}
              <p className="font-body text-sm text-white/70 leading-relaxed flex-1 italic">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {/* Gradient ring avatar */}
                <div
                  className="relative flex-shrink-0 p-0.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  <div className="relative w-11 h-11 rounded-full overflow-hidden">
                    <Image
                      src={t.avatar}
                      alt={`Fotografie ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
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
    </section>
  )
}
