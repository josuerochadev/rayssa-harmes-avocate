'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimation() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Petit délai pour s'assurer que le DOM est prêt
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [pathname]) // Re-exécuter quand la route change

  return null
}
