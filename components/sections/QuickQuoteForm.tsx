'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { quickQuoteSchema, type QuickQuoteFormData } from '@/lib/schemas'
import { cn } from '@/lib/utils'

const businessTypes = [
  { value: 'restaurant', label: 'Restaurant / Cafenea' },
  { value: 'salon', label: 'Salon / Barber' },
  { value: 'clinica', label: 'Clinică / Cabinet' },
  { value: 'pensiune', label: 'Pensiune / Hotel' },
  { value: 'servicii', label: 'Servicii B2C' },
  { value: 'altele', label: 'Altele' },
]

const goals = [
  { value: 'clienti', label: 'Mai mulți clienți' },
  { value: 'google', label: 'Apariție pe Google' },
  { value: 'social', label: 'Social media activ' },
  { value: 'website', label: 'Website nou' },
]

const budgets = [
  { value: 'sub-400', label: 'Sub 400 RON/lună', desc: 'Pachetul PREZENȚA' },
  { value: '400-700', label: '400–700 RON/lună', desc: 'Pachetul CREȘTERE' },
  { value: 'peste-700', label: 'Peste 700 RON/lună', desc: 'Pachetul DOMINARE' },
]

const packageReco: Record<string, { name: string; price: string; href: string }> = {
  'sub-400': { name: 'PREZENȚA', price: '349 RON/lună', href: '/pachete#prezenta' },
  '400-700': { name: 'CREȘTERE', price: '649 RON/lună', href: '/pachete#crestere' },
  'peste-700': { name: 'DOMINARE', price: '1.199 RON/lună', href: '/pachete#dominare' },
}

export function QuickQuoteForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<QuickQuoteFormData>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: { goals: [] },
  })

  const budget = watch('budget')
  const businessType = watch('businessType')

  const toggleGoal = (value: string) => {
    const next = selectedGoals.includes(value)
      ? selectedGoals.filter((g) => g !== value)
      : [...selectedGoals, value]
    setSelectedGoals(next)
    setValue('goals', next)
  }

  const onSubmit = () => setSubmitted(true)

  if (submitted && budget) {
    const reco = packageReco[budget]
    return (
      <Section className="bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-head font-extrabold text-h3 text-navy mb-3">Recomandarea noastră</h3>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-1">{reco.name}</p>
            <p className="font-head font-extrabold text-3xl text-navy mb-4">{reco.price}</p>
            <p className="font-body text-muted text-sm mb-8">
              Bazat pe nevoile tale, acesta este pachetul potrivit pentru afacerea ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Solicită ofertă personalizată
              </Link>
              <Link href={reco.href} className="btn-gold-ghost">
                Vezi detalii pachet
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className="bg-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Eyebrow className="mb-4">Ofertă rapidă</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy mb-3">
            3 întrebări. Recomandare personalizată.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={cn(
                    'w-8 h-8 flex items-center justify-center font-mono text-xs font-bold transition-colors',
                    step >= s ? 'bg-gold text-white' : 'bg-stone text-muted'
                  )}
                >
                  {step > s ? <Check className="h-3 w-3" /> : s}
                </div>
                {s < 3 && <div className={cn('flex-1 h-px transition-colors', step > s ? 'bg-gold' : 'bg-stone')} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <p className="font-head font-bold text-navy mb-6">Tipul afacerii tale:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {businessTypes.map((type) => (
                    <label
                      key={type.value}
                      className={cn(
                        'flex items-center justify-center p-4 border-2 cursor-pointer font-mono text-xs uppercase tracking-wider transition-all',
                        businessType === type.value
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-stone text-muted hover:border-gold/50'
                      )}
                    >
                      <input {...register('businessType')} type="radio" value={type.value} className="sr-only" />
                      {type.label}
                    </label>
                  ))}
                </div>
                {errors.businessType && (
                  <p className="text-red-500 text-xs mt-2">{errors.businessType.message}</p>
                )}
                <button
                  type="button"
                  onClick={() => businessType && setStep(2)}
                  className="btn-primary mt-6 gap-2"
                >
                  Continuă <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <p className="font-head font-bold text-navy mb-6">Ce vrei să obții?</p>
                <div className="grid grid-cols-2 gap-3">
                  {goals.map((goal) => (
                    <button
                      type="button"
                      key={goal.value}
                      onClick={() => toggleGoal(goal.value)}
                      className={cn(
                        'flex items-center gap-3 p-4 border-2 cursor-pointer font-mono text-xs uppercase tracking-wider transition-all text-left',
                        selectedGoals.includes(goal.value)
                          ? 'border-gold bg-gold/5 text-gold'
                          : 'border-stone text-muted hover:border-gold/50'
                      )}
                    >
                      <div className={cn(
                        'w-4 h-4 flex-shrink-0 border transition-colors',
                        selectedGoals.includes(goal.value) ? 'bg-gold border-gold' : 'border-stone'
                      )}>
                        {selectedGoals.includes(goal.value) && <Check className="h-3 w-3 text-white" />}
                      </div>
                      {goal.label}
                    </button>
                  ))}
                </div>
                {errors.goals && (
                  <p className="text-red-500 text-xs mt-2">{errors.goals.message}</p>
                )}
                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setStep(1)} className="btn-ghost text-muted border-muted text-xs px-5 py-2.5">
                    Înapoi
                  </button>
                  <button
                    type="button"
                    onClick={() => selectedGoals.length > 0 && setStep(3)}
                    className="btn-primary gap-2"
                  >
                    Continuă <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <p className="font-head font-bold text-navy mb-6">Buget aproximativ lunar:</p>
                <div className="flex flex-col gap-3">
                  {budgets.map((b) => (
                    <label
                      key={b.value}
                      className={cn(
                        'flex items-center gap-4 p-5 border-2 cursor-pointer transition-all',
                        budget === b.value
                          ? 'border-gold bg-gold/5'
                          : 'border-stone hover:border-gold/50'
                      )}
                    >
                      <input {...register('budget')} type="radio" value={b.value} className="sr-only" />
                      <div className={cn(
                        'w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors',
                        budget === b.value ? 'border-gold bg-gold' : 'border-stone'
                      )} />
                      <div>
                        <p className={cn('font-mono text-xs uppercase tracking-widest', budget === b.value ? 'text-gold' : 'text-navy')}>
                          {b.label}
                        </p>
                        <p className="font-body text-xs text-muted">{b.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.budget && (
                  <p className="text-red-500 text-xs mt-2">{errors.budget.message}</p>
                )}
                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={() => setStep(2)} className="btn-ghost text-muted border-muted text-xs px-5 py-2.5">
                    Înapoi
                  </button>
                  <button type="submit" className="btn-primary gap-2">
                    Primește recomandarea <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </Container>
    </Section>
  )
}
