import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { WhatsAppButton } from '@/components/contact/WhatsAppButton'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { OfferPopup } from '@/components/ui/OfferPopup'
import { siteConfig, siteFeatures, seoConfig } from '@/lib/config'
import { localBusinessSchema, websiteSchema } from '@/lib/structured-data'
import './globals.css'

const fontJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const fontDmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
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
  themeColor: '#0B0D1A', // navy — matches dark header/hero for mobile browser chrome
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.taglineShort}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...seoConfig.keywords],
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
        url: seoConfig.ogImage,
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
    images: [seoConfig.ogImage],
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
  const maintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === '1' || process.env.MAINTENANCE_MODE === '1'

  return (
    <html
      lang="ro"
      className={`${fontJakarta.variable} ${fontDmSans.variable} ${fontJetbrains.variable}`}
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
        {maintenanceMode ? (
          <main>{children}</main>
        ) : (
          <>
            {siteFeatures.scrollProgress && <ScrollProgress />}
            <Header />
            <main>{children}</main>
            <Footer />
            {siteFeatures.cookieBanner && <CookieBanner />}
            {siteFeatures.whatsappButton && <WhatsAppButton />}
            {siteFeatures.backToTop && <BackToTop />}
            {siteFeatures.offerPopup && <OfferPopup />}
          </>
        )}
        {!maintenanceMode && siteFeatures.analytics && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
