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
    <section className="bg-navy py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-head font-extrabold text-4xl lg:text-5xl text-gold-l mb-2">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-l leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
