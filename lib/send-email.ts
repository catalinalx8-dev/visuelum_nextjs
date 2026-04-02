'use server'

import { z } from 'zod'
import { contactSchema } from './schemas'
import { siteConfig } from './config'

type ContactFormData = z.infer<typeof contactSchema>

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return { success: false, error: 'Configurare email lipsă. Contactați-ne direct.' }
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const businessTypeMap: Record<string, string> = {
      restaurant: 'Restaurant/Cafenea',
      salon: 'Salon/Barber',
      clinica: 'Clinică',
      pensiune: 'Pensiune/Cazare',
      servicii: 'Servicii',
      retail: 'Retail/Magazin',
      imobiliare: 'Imobiliare',
      altele: 'Altele',
    }

    const packageMap: Record<string, string> = {
      prezenta: 'PREZENȚA — 349 RON/lună',
      crestere: 'CREȘTERE — 649 RON/lună',
      dominare: 'DOMINARE — 1.199 RON/lună',
      'nu-stiu': 'Nu știu încă',
    }

    await resend.emails.send({
      from: siteConfig.resend.from,
      to: siteConfig.resend.to,
      subject: `Cerere nouă: ${data.businessName} — ${packageMap[data.packageInterest]}`,
      html: `
        <h2>Cerere nouă de la ${data.name}</h2>
        <table>
          <tr><td><strong>Nume:</strong></td><td>${data.name}</td></tr>
          <tr><td><strong>Afacere:</strong></td><td>${data.businessName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Telefon:</strong></td><td>${data.phone ?? '—'}</td></tr>
          <tr><td><strong>Tip afacere:</strong></td><td>${businessTypeMap[data.businessType]}</td></tr>
          <tr><td><strong>Pachet dorit:</strong></td><td>${packageMap[data.packageInterest]}</td></tr>
          <tr><td><strong>Mesaj:</strong></td><td>${data.message}</td></tr>
        </table>
      `,
    })

    return { success: true }
  } catch {
    return { success: false, error: 'Eroare la trimiterea mesajului. Încearcă din nou.' }
  }
}
