'use client'

import { useReportWebVitals } from 'next/web-vitals'

/**
 * Types de métriques Web Vitals
 */
type MetricName = 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'

/**
 * Composant Web Vitals pour le monitoring des performances
 *
 * Capture les Core Web Vitals et les envoie à Plausible Analytics si configuré.
 * Metrics surveillées :
 * - LCP (Largest Contentful Paint) : temps de chargement du plus grand élément
 * - FID (First Input Delay) : délai de la première interaction
 * - CLS (Cumulative Layout Shift) : stabilité visuelle
 * - FCP (First Contentful Paint) : temps du premier rendu
 * - TTFB (Time to First Byte) : temps de réponse du serveur
 * - INP (Interaction to Next Paint) : réactivité globale
 *
 * Les métriques sont envoyées comme événements personnalisés à Plausible
 * avec le nom "Web Vitals" et les propriétés de la métrique.
 *
 * @returns null - Composant sans rendu visuel
 *
 * @example
 * ```tsx
 * // Dans app/layout.tsx
 * import WebVitals from '@/components/analytics/WebVitals'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <WebVitals />
 *         {children}
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Vérifier si Plausible est configuré
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

    if (!plausibleDomain) {
      // En développement, logger dans la console
      if (process.env.NODE_ENV === 'development') {
        console.log('[Web Vitals]', {
          name: metric.name,
          value: Math.round(metric.value),
          rating: metric.rating,
          delta: Math.round(metric.delta),
          id: metric.id,
        })
      }
      return
    }

    // Envoyer à Plausible via l'API Events
    // https://plausible.io/docs/custom-event-goals
    if (typeof window !== 'undefined' && (window as any).plausible) {
      const { name, value, rating, id } = metric

      // Arrondir les valeurs pour réduire la cardinalité
      const roundedValue = Math.round(value)

      ;(window as any).plausible('Web Vitals', {
        props: {
          metric: name as MetricName,
          value: roundedValue,
          rating: rating,
          metricId: id,
        },
      })
    }
  })

  return null
}
