import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold-ghost' | 'cream-ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant
  size?: Size
  children: ReactNode
  asChild?: boolean
}

interface LinkButtonProps {
  variant?: Variant
  size?: Size
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  'gold-ghost': 'btn-gold-ghost',
  'cream-ghost': 'btn-cream-ghost',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: '',
  lg: 'px-9 py-4 text-base',
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({ variant = 'primary', size = 'md', href, children, className, external }: LinkButtonProps) {
  const classes = cn(variantClasses[variant], sizeClasses[size], className)

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
