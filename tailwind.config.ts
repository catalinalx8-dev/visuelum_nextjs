import type { Config } from 'tailwindcss'
import { theme } from './lib/theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: theme.colors.navy,
        gold: theme.colors.gold,
        cream: theme.colors.cream,
        parchment: theme.colors.parchment,
        stone: theme.colors.stone,
        ink: theme.colors.ink,
        muted: theme.colors.muted,
        green: theme.colors.green,
      },
      fontFamily: {
        head: [`var(--font-jakarta)`, theme.fonts.head, 'sans-serif'],
        body: [`var(--font-dm-sans)`, theme.fonts.body, 'sans-serif'],
        mono: [`var(--font-jetbrains)`, theme.fonts.mono, 'monospace'],
      },
      fontSize: {
        display: ['clamp(3rem,8vw,6rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        hero: ['clamp(2.25rem,5vw,4rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        h1: ['clamp(1.875rem,4vw,3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.125rem,2vw,1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        goldPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(99,102,241,0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
