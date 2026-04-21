'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/config'

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Vibrant gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #06b6d4 100%)' }}
        aria-hidden="true"
      />
      {/* Animated orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-head font-extrabold text-h1 text-white mb-4">
            Clientii tai te cauta deja pe Google.
            <br />
            <span className="opacity-80">Te gasesc pe tine sau concurenta?</span>
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Primesti audit gratuit, simplu si clar. Incepi fara cost initial si ai rezultate masurabile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-head font-bold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-navy/30 active:translate-y-0"
            >
              Vreau Audit Gratuit <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-head font-bold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-head font-bold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
            >
              Suna acum
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
