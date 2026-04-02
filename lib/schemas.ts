import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Minim 2 caractere'),
  businessName: z.string().min(2, 'Minim 2 caractere'),
  email: z.string().email('Email invalid'),
  phone: z.string().optional(),
  businessType: z.enum(
    ['restaurant', 'salon', 'clinica', 'pensiune', 'servicii', 'retail', 'imobiliare', 'altele'],
    { errorMap: () => ({ message: 'Selectează tipul afacerii' }) }
  ),
  packageInterest: z.enum(['prezenta', 'crestere', 'dominare', 'nu-stiu'], {
    errorMap: () => ({ message: 'Selectează un pachet' }),
  }),
  message: z.string().min(10, 'Minim 10 caractere'),
  gdpr: z.literal(true, {
    errorMap: () => ({ message: 'Consimțământul este obligatoriu' }),
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const quickQuoteSchema = z.object({
  businessType: z.string().min(1, 'Selectează tipul afacerii'),
  goals: z.array(z.string()).min(1, 'Selectează cel puțin un obiectiv'),
  budget: z.enum(['sub-400', '400-700', 'peste-700'], {
    errorMap: () => ({ message: 'Selectează bugetul' }),
  }),
})

export type QuickQuoteFormData = z.infer<typeof quickQuoteSchema>
