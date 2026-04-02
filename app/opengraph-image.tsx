import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/config'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f1e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ color: '#c9922a', fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>
          Agenție Digitală · Constanța, România
        </div>
        <div style={{ color: '#faf9f5', fontSize: 72, fontWeight: 800, lineHeight: 0.9, marginBottom: 32 }}>
          {siteConfig.name}
          <span style={{ color: '#c9922a' }}>.</span>
        </div>
        <div style={{ color: '#7a756b', fontSize: 24, fontStyle: 'italic', maxWidth: 700 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size
  )
}
