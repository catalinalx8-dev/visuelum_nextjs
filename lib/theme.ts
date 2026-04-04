/**
 * Central design tokens — single source of truth for colors and typography.
 * Edit here to update the visual identity of the entire website.
 * These values are consumed by tailwind.config.ts and app/globals.css.
 */
export const theme = {
  colors: {
    navy: {
      DEFAULT: '#1a1a2e',
      deep: '#0f0f1e',
      mid: '#2d2d4e',
    },
    gold: {
      DEFAULT: '#c9922a',
      l: '#e0a83a',
      pale: '#f5e4bc',
    },
    cream: '#faf9f5',
    parchment: '#f0ede4',
    stone: '#e8e4db',
    ink: '#0f0f0d',
    muted: {
      DEFAULT: '#7a756b',
      l: '#b0aa9f',
    },
    white: '#ffffff',
    green: '#2a6b47',
  },

  /** Google Font family names loaded in app/layout.tsx */
  fonts: {
    head: 'Inter',
    body: 'Libre Baskerville',
    mono: 'JetBrains Mono',
  },
} as const

export type Theme = typeof theme
