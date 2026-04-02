'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Smartphone, Search, Camera, Target, Palette, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const services = [
  {
    icon: Globe,
    title: 'Website Profesional',
    desc: 'Creat gratuit, live în 14 zile, mobil-optimizat',
    href: '/servicii/website',
  },
  {
    icon: Smartphone,
    title: 'Social Media Complet',
    desc: 'Postări, stories, copywriting, publicare zilnică',
    href: '/servicii/social-media',
  },
  {
    icon: Search,
    title: 'Google & SEO Local',
    desc: 'Google Business activ, SEO tehnic, poziții Maps',
    href: '/servicii/seo',
  },
  {
    icon: Camera,
    title: 'Fotografie Profesională',
    desc: 'Sony A7 II, lumină naturală, editare Lightroom',
    href: '/servicii/foto-video',
  },
  {
    icon: Target,
    title: 'Google Ads & Meta Ads',
    desc: 'Campanii cu buget client, gestionare completă',
    href: '/servicii/google-ads',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identitate vizuală, materiale grafice, consecvență',
    href: '/servicii/branding',
  },
]

export function ServicesGrid() {
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
          <Eyebrow className="mb-4">Servicii complete</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Tot ce ai nevoie.
            <br />
            Un singur abonament.
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.href}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link href={service.href} className="group service-card flex flex-col h-full">
                <div className="mb-5">
                  <div className="inline-flex p-3 bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-200">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-head font-bold text-h3 text-navy mb-2">{service.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold group-hover:gap-3 transition-all duration-200">
                  Află mai mult <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
