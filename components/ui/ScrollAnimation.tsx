'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Composant d'animation au scroll avec IntersectionObserver
 *
 * Détecte les éléments avec classe `.animate-on-scroll` lors du défilement
 * et leur ajoute la classe `visible` pour déclencher les animations CSS.
 *
 * Respecte la préférence utilisateur prefers-reduced-motion :
 * - Si activée, tous les éléments sont immédiatement visibles sans animation
 * - Si désactivée, utilise IntersectionObserver pour animer au scroll
 *
 * Configuration de l'observer :
 * - threshold: 0.1 (élément visible à 10%)
 * - rootMargin: -50px en bas pour déclencher avant d'être complètement visible
 *
 * Se ré-initialise automatiquement lors du changement de route Next.js.
 *
 * @returns null - Composant sans rendu visuel
 *
 * @example
 * ```tsx
 * // Dans layout.tsx
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <ScrollAnimation />
 *         {children}
 *       </body>
 *     </html>
 *   )
 * }
 *
 * // Dans un composant
 * <div className="animate-on-scroll">
 *   Ce contenu s'animera au scroll
 * </div>
 * ```
 */
export default function ScrollAnimation() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // S'assurer que le composant est monté côté client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Ne rien faire tant que le composant n'est pas monté côté client
    if (!isMounted) return

    // Vérifier la préférence prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Si l'utilisateur préfère réduire les animations, rendre tous les éléments immédiatement visibles
    if (prefersReducedMotion) {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => el.classList.add('visible'))
      return
    }

    // Sinon, utiliser l'IntersectionObserver pour les animations au scroll
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

    // Utiliser requestAnimationFrame pour garantir que le DOM est prêt
    const rafId = requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [pathname, isMounted]) // Re-exécuter quand la route change ou après le montage

  return null
}
