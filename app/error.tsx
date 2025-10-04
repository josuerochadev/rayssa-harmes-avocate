'use client'

import { useEffect } from 'react'
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

/**
 * Page d'erreur personnalisée
 *
 * Affichée automatiquement par Next.js lorsqu'une erreur runtime se produit.
 * Doit être un Client Component pour utiliser les hooks React.
 *
 * @param error - L'erreur capturée
 * @param reset - Fonction pour réessayer le rendu du segment
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log l'erreur pour le monitoring (Sentry, etc.)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-secondary">
      <div className="container-custom py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-accent/10 p-6 rounded-full">
              <AlertTriangle className="h-24 w-24 text-accent" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-slab text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Une erreur est survenue
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Nous sommes désolés, une erreur technique s&apos;est produite.
            Nos équipes ont été notifiées et travaillent à résoudre le problème.
          </p>

          {/* Error details (development only) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm font-mono text-red-800 break-words">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <RefreshCcw className="h-5 w-5" />
              Réessayer
            </button>

            <Link
              href="/"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
          </div>

          {/* Help section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Si le problème persiste, n&apos;hésitez pas à me contacter directement :
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a
                href="tel:+33745048395"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                📞 +33 7 45 04 83 95
              </a>
              <span className="hidden sm:inline text-gray-300">•</span>
              <a
                href="mailto:harmes.avocat@gmail.com"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                ✉️ harmes.avocat@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
