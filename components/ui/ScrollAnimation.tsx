'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Composant d'animation au scroll avec IntersectionObserver
 *
 * Détecte les éléments avec classe `.animate-on-scroll` lors du défilement
 * et leur ajoute la classe `visible` pour déclencher les animations CSS.
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
