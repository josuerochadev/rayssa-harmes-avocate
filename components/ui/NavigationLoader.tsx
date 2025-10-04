'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

/**
 * Composant de chargement global pour la navigation
 *
 * Affiche une barre de progression en haut de l'écran lors de la navigation entre pages.
 * Utilise nprogress pour un feedback visuel lors des transitions Next.js.
 *
 * Respecte la préférence prefers-reduced-motion :
 * - Désactive les animations si l'utilisateur préfère réduire le mouvement
 *
 * Configuration nprogress :
 * - showSpinner: false (pas de spinner tournant)
 * - minimum: 0.3 (progression minimale affichée)
 * - easing: 'ease' (animation fluide)
 * - speed: 200 (vitesse de l'animation en ms)
 *
 * @returns null - Composant sans rendu visuel
 *
 * @example
 * ```tsx
 * // Dans layout.tsx
 * import NavigationLoader from '@/components/ui/NavigationLoader'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <NavigationLoader />
 *         {children}
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export default function NavigationLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Configuration de nprogress (uniquement côté client)
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      NProgress.configure({
        showSpinner: false,
        minimum: 0.3,
        easing: 'ease',
        speed: prefersReducedMotion ? 0 : 200, // Pas d'animation si prefers-reduced-motion
      })
    }
  }, [])

  useEffect(() => {
    // Terminer la barre de progression quand la route change
    NProgress.done()
  }, [pathname, searchParams])

  useEffect(() => {
    // Uniquement côté client
    if (typeof window === 'undefined') return

    // Petit délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(() => {
      // Intercepter les clics sur les liens pour démarrer le loader
      const handleAnchorClick = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLAnchorElement

        // Vérifier que c'est un lien interne
        if (target.href && target.href.startsWith(window.location.origin)) {
          const targetPath = new URL(target.href).pathname

          // Ne pas démarrer le loader si on est déjà sur cette page
          if (targetPath !== pathname) {
            NProgress.start()
          }
        }
      }

      // Intercepter les retours arrière/avant du navigateur
      const handlePopState = () => {
        NProgress.start()
      }

      // Ajouter les listeners sur tous les liens
      const links = document.querySelectorAll('a[href]')
      links.forEach((link) => {
        link.addEventListener('click', handleAnchorClick as EventListener)
      })

      window.addEventListener('popstate', handlePopState)
    }, 100)

    return () => {
      clearTimeout(timer)
      if (typeof window !== 'undefined') {
        NProgress.done()
      }
    }
  }, [pathname])

  return null
}
