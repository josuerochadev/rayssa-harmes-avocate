import Script from 'next/script'

/**
 * Script Plausible Analytics pour le tracking sans cookies
 *
 * Charge le script Plausible de manière optimisée avec :
 * - Strategy: afterInteractive pour ne pas bloquer l'hydratation
 * - Support des événements personnalisés (Web Vitals, etc.)
 * - Respect RGPD (pas de cookies, données anonymes)
 *
 * @returns Script Plausible ou null si non configuré
 *
 * @example
 * ```tsx
 * // Dans app/layout.tsx
 * import PlausibleScript from '@/components/analytics/PlausibleScript'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <head>
 *         <PlausibleScript />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   )
 * }
 * ```
 */
export default function PlausibleScript() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  if (!plausibleDomain) {
    return null
  }

  return (
    <Script
      defer
      data-domain={plausibleDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  )
}
