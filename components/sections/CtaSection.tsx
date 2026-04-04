'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/config'

export function CtaSection() {
  return (
    <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=70"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          loading="lazy"
        />
      </div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-50" aria-hidden="true" />
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,146,42,0.12) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-head font-extrabold text-h1 text-white mb-4">
            Afacerea dvs. apare mâine pe Google.
          </h2>
          <p className="font-body text-white/60 text-lg mb-10">
            Audit digital gratuit. Fără angajament. Fără risc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary gap-2"
            >
              Solicită Acum <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-ghost text-white border-white/30 hover:bg-white hover:text-navy"
            >
              Sună acum
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
