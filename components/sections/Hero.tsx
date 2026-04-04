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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #07071a 0%, #0f0f23 40%, #1a0a2e 70%, #07101a 100%)' }}
      aria-label="Hero"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />

      {/* Animated gradient orb 1 — large violet */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Animated gradient orb 2 — cyan */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Floating orb 3 — mid */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Floating metric cards — glassmorphism */}
      <div className="absolute right-[5%] top-[22%] hidden xl:block pointer-events-none z-10" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="glass rounded-2xl px-5 py-3.5 shadow-xl shadow-gold/10"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Website live în</p>
          <p className="font-head font-extrabold text-2xl gradient-text">14 zile</p>
        </motion.div>
      </div>
      <div className="absolute right-[12%] top-[42%] hidden xl:block pointer-events-none z-10" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="glass rounded-2xl px-5 py-3.5 shadow-xl shadow-cyan/10"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Investiție inițială</p>
          <p className="font-head font-extrabold text-2xl gradient-text">0 RON</p>
        </motion.div>
      </div>
      <div className="absolute right-[6%] top-[60%] hidden xl:block pointer-events-none z-10" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="glass rounded-2xl px-5 py-3.5 shadow-xl shadow-gold/10"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Garanție</p>
          <p className="font-head font-extrabold text-2xl gradient-text">30 zile</p>
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
            <Eyebrow color="gold" className="mb-8 text-gold-l">
              — Agenție Marketing Digital · Constanța, România
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-head font-extrabold text-display text-white leading-none mb-6"
          >
            Clienți Noi.
            <br />
            <span className="gradient-text">Zilnic.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-body text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10 mx-auto sm:mx-0"
          >
            Afacerea ta merită să fie văzută. Website profesional creat <strong className="text-white/80">gratuit</strong>,
            social media activ în fiecare zi și apari primul pe Google în Constanța —
            contra unui singur abonament accesibil de la <strong className="text-white/80">349 RON/lună</strong>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-12"
          >
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
              Audit Gratuit — Fără Angajament
            </Link>
            <Link href="/pachete" className="btn-cream-ghost w-full sm:w-auto justify-center">
              Pachete de la 349 RON/lună
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-8"
          >
            {[
              'Website gratuit inclus',
              'Garanție 30 zile',
              'Răspuns în 24h',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}
                >
                  <Check className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">{item}</span>
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
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
