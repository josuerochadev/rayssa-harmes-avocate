import { NextRequest, NextResponse } from 'next/server'
import { isValidEmail, isNotEmpty, hasMinLength } from '@/lib/utils/validation'
import { ERROR_MESSAGES, VALIDATION, API } from '@/lib/constants'
import type { ContactFormData } from '@/lib/hooks/useContactForm'

/**
 * Rate limiting: stockage simple en mémoire (pour production, utiliser Redis)
 * Map<IP, { count: number, resetAt: number }>
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

/**
 * Configuration du rate limiting
 */
const RATE_LIMIT = {
  MAX_REQUESTS: 3, // 3 requêtes max
  WINDOW_MS: 60 * 60 * 1000, // par heure (1h)
}

/**
 * Validation des données du formulaire côté serveur
 *
 * @param data - Données du formulaire à valider
 * @returns Objet d'erreurs ou null si valide
 */
function validateFormData(data: ContactFormData) {
  const errors: Record<string, string> = {}

  // Validation du nom
  if (!isNotEmpty(data.name)) {
    errors.name = ERROR_MESSAGES.NAME_REQUIRED
  }

  // Validation de l'email
  if (!isNotEmpty(data.email)) {
    errors.email = ERROR_MESSAGES.EMAIL_REQUIRED
  } else if (!isValidEmail(data.email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL
  }

  // Validation du domaine
  if (!data.subject) {
    errors.subject = ERROR_MESSAGES.SUBJECT_REQUIRED
  }

  // Validation du message
  if (!isNotEmpty(data.message)) {
    errors.message = ERROR_MESSAGES.MESSAGE_REQUIRED
  } else if (!hasMinLength(data.message, VALIDATION.MIN_MESSAGE_LENGTH)) {
    errors.message = ERROR_MESSAGES.MESSAGE_MIN_LENGTH
  }

  // Validation du consentement RGPD
  if (!data.consent) {
    errors.consent = ERROR_MESSAGES.CONSENT_REQUIRED
  }

  return Object.keys(errors).length > 0 ? errors : null
}

/**
 * Obtient l'IP du client avec support pour les proxies
 *
 * @param request - Requête Next.js
 * @returns Adresse IP du client
 */
function getClientIp(request: NextRequest): string {
  // Essayer les headers de proxy communs
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }

  // Fallback (ne devrait pas arriver en production avec un proxy)
  return 'unknown'
}

/**
 * Vérifie et applique le rate limiting
 *
 * @param ip - Adresse IP du client
 * @returns true si la limite est dépassée, false sinon
 */
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetAt) {
    // Nouveau record ou window expirée
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    })
    return false
  }

  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return true
  }

  // Incrémenter le compteur
  record.count++
  return false
}

/**
 * Nettoie les entrées expirées du rate limit (appelé périodiquement)
 */
function cleanupRateLimitMap() {
  const now = Date.now()
  const entries = Array.from(rateLimitMap.entries())

  for (const [ip, record] of entries) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip)
    }
  }
}

// Nettoyer toutes les heures
setInterval(cleanupRateLimitMap, 60 * 60 * 1000)

/**
 * API Route POST /api/contact
 *
 * Valide les données du formulaire côté serveur, applique le rate limiting
 * et transmet à Formspree si tout est valide.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Vérifier le rate limiting
    const clientIp = getClientIp(request)

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error: 'Trop de requêtes. Veuillez réessayer dans une heure.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      )
    }

    // 2. Parser et valider les données
    const data = await request.json() as ContactFormData

    const validationErrors = validateFormData(data)
    if (validationErrors) {
      return NextResponse.json(
        { errors: validationErrors },
        { status: 400 }
      )
    }

    // 3. Transmettre à Formspree (si endpoint configuré)
    const formspreeEndpoint = API.FORMSPREE || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

    if (!formspreeEndpoint || formspreeEndpoint === '[FORMSPREE_ENDPOINT]') {
      // Mode développement : simuler le succès
      console.warn('Formspree endpoint non configuré, simulation du succès')
      return NextResponse.json({ success: true })
    }

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Échec de la soumission à Formspree')
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur API /api/contact:', error)

    return NextResponse.json(
      {
        error: ERROR_MESSAGES.GENERIC_ERROR,
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    )
  }
}
