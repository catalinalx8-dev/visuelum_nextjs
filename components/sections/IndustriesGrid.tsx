'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const industries = [
  {
    title: 'Restaurante & Cafenele',
    href: '/industrii/restaurante-cafenele',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80',
    imageAlt: 'Restaurant modern cu atmosferă — marketing digital pentru restaurante Constanța',
  },
  {
    title: 'Saloane & Barber',
    href: '/industrii/saloane-barber',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
    imageAlt: 'Salon de înfrumusețare profesional — promovare online pentru saloane',
  },
  {
    title: 'Clinici & Cabinete',
    href: '/industrii/clinici-cabinete',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&q=80',
    imageAlt: 'Cabinet medical profesional — website și SEO pentru clinici',
  },
  {
    title: 'Pensiuni & Cazare',
    href: '/industrii/pensiuni-cazare',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
    imageAlt: 'Pensiune turistică din Dobrogea — promovare online pentru cazare',
  },
  {
    title: 'Fitness & Sporturi',
    href: '/industrii/fitness-sporturi',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
    imageAlt: 'Sală de fitness modernă — social media și marketing pentru sporturi',
  },
  {
    title: 'Agenții Imobiliare',
    href: '/industrii/agentii-imobiliare',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
    imageAlt: 'Proprietăți imobiliare — fotografie și Google Ads pentru agenții imobiliare',
  },
]

export function IndustriesGrid() {
  return (
    <Section className="bg-parchment">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow className="mb-4">Clienți țintă</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Lucrăm cu orice afacere locală
            <br />
            din Constanța
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.href}
              variants={{
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={industry.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex items-end block"
                aria-label={industry.title}
              >
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                {/* Content */}
                <div className="relative z-10 p-5 w-full flex items-center justify-between">
                  <h3 className="font-head font-bold text-cream text-lg leading-tight">
                    {industry.title}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5 text-gold group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/industrii"
            className="font-mono text-sm uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
          >
            Vezi toate industriile →
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
