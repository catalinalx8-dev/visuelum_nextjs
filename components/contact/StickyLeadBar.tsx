'use client'

import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/config'

export function StickyLeadBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-navy/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 p-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-3 py-3 text-xs font-bold uppercase tracking-wide text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Suna
        </a>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-3 text-xs font-bold uppercase tracking-wide text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-3 text-xs font-bold uppercase tracking-wide text-navy"
        >
          Audit Gratuit
        </Link>
      </div>
    </div>
  )
}

