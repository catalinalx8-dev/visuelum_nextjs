'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-100" aria-hidden="true" />
      {/* Radial glow */}
      <div className="absolute inset-0 gold-glow" aria-hidden="true" />

      {/* Hero image — right side, desktop only */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none" aria-hidden="true">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85"
            alt="Echipă de marketing digital lucrând la strategii online pentru afaceri locale"
            fill
            className="object-cover object-center opacity-20"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
        </div>
      </div>

      {/* Floating metric cards — visual decoration */}
      <div className="absolute right-[5%] top-[22%] hidden xl:block pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="bg-white border border-stone rounded-2xl px-5 py-3.5 shadow-lg shadow-navy/5"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">Website live în</p>
          <p className="font-head font-extrabold text-2xl text-gold">14 zile</p>
        </motion.div>
      </div>
      <div className="absolute right-[12%] top-[42%] hidden xl:block pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="bg-white border border-stone rounded-2xl px-5 py-3.5 shadow-lg shadow-navy/5"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">Investiție inițială</p>
          <p className="font-head font-extrabold text-2xl text-gold">0 RON</p>
        </motion.div>
      </div>
      <div className="absolute right-[6%] top-[60%] hidden xl:block pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="bg-white border border-stone rounded-2xl px-5 py-3.5 shadow-lg shadow-navy/5"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">Garanție</p>
          <p className="font-head font-extrabold text-2xl text-gold">30 zile</p>
        </motion.div>
      </div>

      <Container className="relative z-10 py-32 lg:py-40">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl text-center sm:text-left lg:max-w-2xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <Eyebrow color="gold" className="mb-8">
              — Agenție Digitală · Constanța, România
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-head font-extrabold text-display text-navy leading-none mb-6"
          >
            Vizibilitate
            <br />
            <span>Totală</span>
            <span className="text-gold">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-body text-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 mx-auto sm:mx-0"
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
                <Check className="h-4 w-4 text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted">{item}</span>
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
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5 text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
