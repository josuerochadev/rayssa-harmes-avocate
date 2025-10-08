'use client'

import { useEffect } from 'react'
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

  useEffect(() => {
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
            // Désobserver l'élément après l'animation pour économiser les ressources
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Fonction pour initialiser l'observer
    const initObserver = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => {
        // Rendre immédiatement visibles les éléments déjà dans le viewport
        const rect = el.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

        if (isInViewport) {
          el.classList.add('visible')
        } else {
          observer.observe(el)
        }
      })
    }

    // Initialiser immédiatement au montage du composant
    // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
    const rafId = requestAnimationFrame(() => {
      initObserver()
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [pathname]) // Re-exécuter quand la route change

  return null
}
