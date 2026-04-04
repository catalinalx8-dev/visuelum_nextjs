'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  title?: string
  eyebrow?: string
  className?: string
  bgLight?: boolean
}

export function FaqAccordion({
  faqs,
  title = 'Întrebări frecvente',
  eyebrow = 'FAQ',
  className,
  bgLight = true,
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section className={cn(bgLight ? 'bg-parchment' : 'bg-navy', className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow color={bgLight ? 'gold' : 'cream'} className="mb-4">{eyebrow}</Eyebrow>
          <h2 className={cn('font-head font-extrabold text-h2', bgLight ? 'text-navy' : 'text-cream')}>
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.06 }}
          className="max-w-3xl mx-auto space-y-2"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className={cn(
                'rounded-xl border transition-all duration-300 overflow-hidden',
                bgLight
                  ? open === i
                    ? 'border-gold/40 bg-white shadow-md shadow-gold/10'
                    : 'border-stone bg-white hover:border-gold/30 hover:shadow-sm'
                  : open === i
                    ? 'border-gold/40 bg-navy-mid'
                    : 'border-navy-mid bg-navy-mid/50 hover:border-gold/20'
              )}
            >
              {/* Border-left accent on open */}
              <div
                className={cn(
                  'flex',
                  open === i ? 'border-l-2' : 'border-l-2 border-transparent'
                )}
                style={open === i ? { borderLeftColor: '#7c3aed' } : undefined}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex-1 flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={cn('font-head font-bold text-base', bgLight ? 'text-navy' : 'text-cream')}>
                    {faq.q}
                  </span>
                  {open === i ? (
                    <Minus className="h-4 w-4 text-gold flex-shrink-0" />
                  ) : (
                    <Plus className="h-4 w-4 text-gold flex-shrink-0" />
                  )}
                </button>
              </div>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className={cn(
                      'font-body text-sm leading-relaxed px-6 pb-5 pt-1',
                      bgLight ? 'text-muted' : 'text-cream/60'
                    )}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
