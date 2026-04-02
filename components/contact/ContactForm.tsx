'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormData } from '@/lib/schemas'
import { sendContactEmail } from '@/lib/send-email'
import { cn } from '@/lib/utils'

const businessTypes = [
  { value: 'restaurant', label: 'Restaurant / Cafenea' },
  { value: 'salon', label: 'Salon / Barber' },
  { value: 'clinica', label: 'Clinică / Cabinet' },
  { value: 'pensiune', label: 'Pensiune / Hotel' },
  { value: 'servicii', label: 'Servicii B2C' },
  { value: 'retail', label: 'Retail / Magazin' },
  { value: 'imobiliare', label: 'Imobiliare' },
  { value: 'altele', label: 'Altele' },
]

const packageOptions = [
  { value: 'prezenta', label: 'PREZENȚA — 349 RON/lună' },
  { value: 'crestere', label: 'CREȘTERE — 649 RON/lună' },
  { value: 'dominare', label: 'DOMINARE — 1.199 RON/lună' },
  { value: 'nu-stiu', label: 'Nu știu încă' },
]

interface FieldProps {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 font-mono text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputClass = 'w-full border border-stone bg-white px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-gold transition-colors placeholder:text-muted-l/60'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    const result = await sendContactEmail(data)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Eroare necunoscută')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-stone p-10 text-center">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <Check className="h-7 w-7 text-gold" />
        </div>
        <h3 className="font-head font-bold text-navy text-xl mb-3">Mesaj trimis cu succes!</h3>
        <p className="font-body text-muted text-sm leading-relaxed">
          Îți mulțumim pentru mesaj. Te vom contacta în maxim 24 ore lucrătoare.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-stone p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Numele tău" required error={errors.name?.message}>
          <input {...register('name')} className={inputClass} placeholder="Ion Popescu" />
        </Field>
        <Field label="Numele afacerii" required error={errors.businessName?.message}>
          <input {...register('businessName')} className={inputClass} placeholder="Restaurant La Ion" />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Email" required error={errors.email?.message}>
          <input {...register('email')} type="email" className={inputClass} placeholder="email@afacerea.ro" />
        </Field>
        <Field label="Telefon" error={errors.phone?.message}>
          <input {...register('phone')} type="tel" className={inputClass} placeholder="07XX XXX XXX" />
        </Field>
      </div>

      <Field label="Tipul afacerii" required error={errors.businessType?.message}>
        <select {...register('businessType')} className={inputClass}>
          <option value="">Selectează...</option>
          {businessTypes.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </Field>

      <Field label="Pachet de interes" required error={errors.packageInterest?.message}>
        <select {...register('packageInterest')} className={inputClass}>
          <option value="">Selectează...</option>
          {packageOptions.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </Field>

      <Field label="Mesaj" required error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={4}
          className={cn(inputClass, 'resize-none')}
          placeholder="Spune-ne mai multe despre afacerea ta și ce îți dorești..."
        />
      </Field>

      <Field label="" error={errors.gdpr?.message}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('gdpr')}
            type="checkbox"
            className="mt-1 h-4 w-4 border-stone text-gold focus:ring-gold"
          />
          <span className="font-body text-xs text-muted leading-relaxed">
            Am citit și sunt de acord cu{' '}
            <a href="/politica-de-confidentialitate" className="text-gold underline hover:text-gold-l" target="_blank" rel="noopener noreferrer">
              Politica de Confidențialitate
            </a>
            . Consimțământul meu pentru prelucrarea datelor cu caracter personal. <span className="text-gold">*</span>
          </span>
        </label>
      </Field>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 px-4 py-3">
          <p className="font-mono text-xs text-red-600">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Se trimite...
          </>
        ) : (
          'Trimite mesajul'
        )}
      </button>
    </form>
  )
}
