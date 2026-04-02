import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  color?: 'gold' | 'muted' | 'cream'
}

export function Eyebrow({ children, className, color = 'gold' }: EyebrowProps) {
  const colorClasses = {
    gold: 'text-gold',
    muted: 'text-muted',
    cream: 'text-cream/70',
  }

  return (
    <p className={cn('eyebrow', colorClasses[color], className)}>
      {children}
    </p>
  )
}
