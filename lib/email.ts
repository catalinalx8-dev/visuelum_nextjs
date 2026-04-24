import { Resend } from 'resend'
import type { CreateEmailOptions } from 'resend'

const DEFAULT_CC_EMAIL = 'alexandru.ctl@gmail.com'

function normalizeCc(cc: CreateEmailOptions['cc']): string[] {
  if (!cc) return []
  if (Array.isArray(cc)) return cc
  return [cc]
}

function withDefaultCc(options: CreateEmailOptions): CreateEmailOptions {
  const existingCc = normalizeCc(options.cc)
  const hasDefaultCc = existingCc.some(
    (email) => email.toLowerCase() === DEFAULT_CC_EMAIL.toLowerCase()
  )

  if (hasDefaultCc) return options

  return {
    ...options,
    cc: [...existingCc, DEFAULT_CC_EMAIL],
  }
}

export async function sendEmailWithDefaultCc(
  options: CreateEmailOptions
): ReturnType<Resend['emails']['send']> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY')
  }

  const resend = new Resend(apiKey)
  return resend.emails.send(withDefaultCc(options))
}
