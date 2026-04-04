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
        cyan: theme.colors.cyan,
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
        display: ['clamp(3.5rem,9vw,7rem)', { lineHeight: '0.90', letterSpacing: '-0.04em' }],
        hero: ['clamp(2.5rem,6vw,5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        h1: ['clamp(2rem,4.5vw,3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        h2: ['clamp(1.625rem,3.5vw,2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.125rem,2vw,1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
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
          '0%,100%': { boxShadow: '0 0 0 0 rgba(124,58,237,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(124,58,237,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
