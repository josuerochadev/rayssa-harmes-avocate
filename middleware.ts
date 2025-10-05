import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Génère un nonce aléatoire pour la CSP
 *
 * @returns Nonce base64 de 128 bits
 */
function generateNonce(): string {
  const buffer = new Uint8Array(16)
  crypto.getRandomValues(buffer)
  return Buffer.from(buffer).toString('base64')
}

/**
 * Middleware Next.js pour ajouter les headers de sécurité
 *
 * Applique une politique CSP stricte avec nonce pour les scripts et styles inline.
 * Autorise Google Fonts et Calendly de manière contrôlée.
 */
export function middleware(request: NextRequest) {
  const nonce = generateNonce()

  // Content Security Policy - plus permissive en développement pour éviter les blocages
  const isDev = process.env.NODE_ENV === 'development'

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://assets.calendly.com https://va.vercel-scripts.com ${isDev ? "'unsafe-eval'" : ''};
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self' https://formspree.io https://*.formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com;
    frame-src https://calendly.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://formspree.io;
    frame-ancestors 'none';
    ${isDev ? '' : 'upgrade-insecure-requests;'}
  `.replace(/\s{2,}/g, ' ').trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', cspHeader)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Headers de sécurité
  response.headers.set('Content-Security-Policy', cspHeader)
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  return response
}

/**
 * Configuration du matcher
 *
 * Le middleware s'applique à toutes les routes sauf :
 * - Les fichiers statiques (_next/static)
 * - Les images (_next/image)
 * - Le favicon
 * - Les routes API (gérées séparément)
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
