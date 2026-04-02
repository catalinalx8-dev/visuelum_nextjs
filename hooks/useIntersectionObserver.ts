'use client'

import { useEffect, useRef, useState } from 'react'

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(options: Options = {}) {
  const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = true } = options
  const ref = useRef<HTMLElement | null>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  const frozen = entry?.isIntersecting && freezeOnceVisible

  useEffect(() => {
    const node = ref.current
    if (!node || frozen) return

    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      { threshold, root, rootMargin }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, frozen])

  return { ref, entry, isVisible: !!entry?.isIntersecting }
}
