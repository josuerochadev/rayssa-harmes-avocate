'use client'

import Link from 'next/link'
import { FileQuestion, Home, ArrowLeft } from 'lucide-react'

/**
 * Page 404 personnalisée
 *
 * Affichée automatiquement par Next.js lorsqu'une route n'existe pas.
 * Design cohérent avec le thème du site (sienna/green) et adapté pour un cabinet d'avocat.
 *
 * Doit être un Client Component pour gérer le bouton "Page précédente" avec onClick.
 */
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-secondary">
      <div className="container-custom py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <FileQuestion className="h-24 w-24 text-primary" />
            </div>
          </div>

          {/* Error code */}
          <h1 className="font-slab text-6xl md:text-8xl font-bold text-primary mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="font-slab text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Page introuvable
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
            Vérifiez l&apos;URL ou retournez à l&apos;accueil pour naviguer sur le site.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Home className="h-5 w-5" />
              Retour à l&apos;accueil
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Page précédente
            </button>
          </div>

          {/* Help text */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Besoin d&apos;aide pour trouver une information ?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <Link
                href="/domaines"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Domaines d&apos;intervention
              </Link>
              <span className="hidden sm:inline text-gray-300">•</span>
              <Link
                href="/a-propos"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                À propos
              </Link>
              <span className="hidden sm:inline text-gray-300">•</span>
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
