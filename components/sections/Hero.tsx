'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-navy-deep overflow-hidden"
      aria-label="Hero"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60" />
      {/* Radial glow */}
      <div className="absolute inset-0 gold-glow" />

      <Container className="relative z-10 py-32 lg:py-40">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl text-center sm:text-left"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Eyebrow color="gold" className="mb-8">
              — Agenție Digitală · Constanța, România
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-head font-extrabold text-display text-cream leading-none mb-6"
          >
            Vizibilitate
            <br />
            <span>Totală</span>
            <span className="text-gold">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-body italic text-muted-l text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 mx-auto sm:mx-0"
          >
            Există mii de afaceri bune în România care nu există online. Noi le facem vizibile —
            cu website gratuit, social media activ și Google optimizat, contra unui singur abonament lunar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-12"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
              Solicită Audit Gratuit
            </Link>
            <Link href="/pachete" className="btn-cream-ghost w-full sm:w-auto justify-center">
              Vezi Pachete & Prețuri
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-8"
          >
            {[
              'Website gratuit inclus',
              'Domeniul rămâne al tău',
              'Răspuns în 24h',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-l">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
