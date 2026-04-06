'use client'

import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-gold transition-colors print:hidden"
      aria-label="Printează raportul"
    >
      <Printer className="h-3.5 w-3.5" />
      Printează
    </button>
  )
}
