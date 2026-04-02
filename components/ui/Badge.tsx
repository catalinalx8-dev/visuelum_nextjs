import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'green' | 'muted'
  className?: string
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variantClasses = {
    gold: 'bg-gold/10 text-gold border border-gold/20',
    navy: 'bg-navy text-cream',
    green: 'bg-green/10 text-green border border-green/20',
    muted: 'bg-stone text-muted',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full font-mono text-xs uppercase tracking-widest',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
