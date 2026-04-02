import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gold'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-stone',
    dark: 'bg-navy-mid border border-navy-mid/50',
    gold: 'bg-white border-2 border-gold',
  }

  return (
    <div className={cn('p-6', variantClasses[variant], className)}>
      {children}
    </div>
  )
}
