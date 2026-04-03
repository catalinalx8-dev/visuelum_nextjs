import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { WhatsAppButton } from '@/components/contact/WhatsAppButton'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { siteConfig } from '@/lib/config'
import { localBusinessSchema, websiteSchema } from '@/lib/structured-data'
import './globals.css'

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const fontLibre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
  display: 'swap',
})

const fontJetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.taglineShort}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'marketing digital Constanța',
    'agenție marketing digital',
    'website profesional Constanța',
    'website gratuit Constanța',
    'social media Constanța',
    'SEO local Constanța',
    'Google Ads Constanța',
    'fotografie profesionala Constanta',
    'branding Constanța',
    'agenție publicitate Constanța',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.taglineShort}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Agenție Marketing Digital Constanța`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.taglineShort}`,
    description: siteConfig.description,
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    'geo.region': 'RO-CT',
    'geo.placename': 'Constanța',
    'geo.position': `${siteConfig.geo.lat};${siteConfig.geo.lng}`,
    'ICBM': `${siteConfig.geo.lat}, ${siteConfig.geo.lng}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ro"
      className={`${fontInter.variable} ${fontLibre.variable} ${fontJetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="min-h-screen bg-cream antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
