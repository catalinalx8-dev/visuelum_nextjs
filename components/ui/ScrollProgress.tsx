'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-0.5 transition-none"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #7c3aed, #a855f7 50%, #06b6d4)',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
