import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1a1a2e', deep: '#0f0f1e', mid: '#2d2d4e' },
        gold: { DEFAULT: '#c9922a', l: '#e8b84b', pale: '#f5e4bc' },
        cream: '#faf9f5',
        parchment: '#f0ede4',
        stone: '#e8e4db',
        ink: '#0f0f0d',
        muted: { DEFAULT: '#7a756b', l: '#b0aa9f' },
      },
      fontFamily: {
        head: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-libre)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        display: ['clamp(3rem,8vw,6rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        hero: ['clamp(2.25rem,5vw,4rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        h1: ['clamp(1.875rem,4vw,3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.125rem,2vw,1.5rem)', { lineHeight: '1.3' }],
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
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,146,42,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(201,146,42,0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
