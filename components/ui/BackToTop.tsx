'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Înapoi sus"
      className={cn(
        'fixed bottom-24 right-6 z-50 p-3 text-white shadow-lg rounded-xl transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-xl',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 4px 20px -4px rgba(124,58,237,0.5)' }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
