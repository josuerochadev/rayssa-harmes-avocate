'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

/**
 * Page d'erreur globale
 *
 * Gère les erreurs au niveau du root layout.
 * Nécessaire pour capturer les erreurs dans le layout principal.
 * Doit redéfinir les balises <html> et <body> car le layout.tsx ne sera pas rendu.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global application error:', error)
  }, [error])

  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="bg-red-100 p-6 rounded-full">
                <AlertTriangle className="h-24 w-24 text-red-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Erreur critique
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              Une erreur critique s&apos;est produite. Veuillez réessayer ou contacter le support.
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
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Réessayer
              </button>

              <a
                href="/"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Retour à l&apos;accueil
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Support technique :
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="tel:+33745048395"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  +33 7 45 04 83 95
                </a>
                <a
                  href="mailto:harmes.avocat@gmail.com"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  harmes.avocat@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
