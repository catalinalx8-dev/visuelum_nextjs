'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/config'

export function CtaSection() {
  return (
    <section className="relative bg-gold py-20 lg:py-28 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 dot-pattern opacity-10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gold-l/20 via-transparent to-navy/10" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-head font-extrabold text-h1 text-navy mb-4">
            Afacerea dvs. apare mâine pe Google.
          </h2>
          <p className="font-body italic text-navy/70 text-lg mb-10">
            Audit digital gratuit. Fără angajament. Fără risc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-secondary gap-2"
            >
              Solicită Acum <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-ghost text-navy border-navy hover:bg-navy hover:text-cream"
            >
              Sună acum
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
