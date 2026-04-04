'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { value: 500, prefix: '~', suffix: 'K', label: 'IMM-uri în România', decimals: 0 },
  { value: 30, prefix: '<', suffix: '%', label: 'Au prezență digitală activă', decimals: 0 },
  { value: 0, prefix: '', suffix: ' RON', label: 'Investiție inițială client', decimals: 0 },
  { value: 14, prefix: '', suffix: ' zile', label: 'Website livrat', decimals: 0 },
]

export function StatsBar() {
  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a0a2e 50%, #07101a 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      {/* Glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`text-center px-6 ${i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div
                className="font-head font-extrabold text-4xl lg:text-5xl mb-2 gradient-text"
              >
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
