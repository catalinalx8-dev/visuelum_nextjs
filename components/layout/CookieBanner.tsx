'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const COOKIE_KEY = 'visuelum_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consimțământ cookie-uri"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-stone shadow-lg"
    >
      <div className="container-site py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-body text-sm text-ink/80 leading-relaxed">
            Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru analiză statistică anonimă.{' '}
            <Link href="/politica-de-confidentialitate" className="text-gold underline hover:text-gold-l">
              Află mai multe
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-navy transition-colors px-4 py-2"
          >
            Refuz
          </button>
          <button
            onClick={accept}
            className="btn-primary text-xs px-5 py-2.5"
          >
            Accept
          </button>
          <button
            onClick={decline}
            aria-label="Închide"
            className="p-1.5 text-muted hover:text-navy transition-colors ml-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
