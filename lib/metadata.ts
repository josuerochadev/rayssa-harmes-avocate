import type { Metadata } from 'next'

interface DomainMetadataParams {
  title: string
  description: string
  keywords: string
  domain: string
}

interface JsonLdParams {
  name: string
  description: string
  url: string
  areaServed?: string
  serviceType?: string
}

/**
 * Génère les métadonnées SEO complètes pour une page de domaine juridique
 *
 * Crée les métadonnées Next.js incluant Open Graph, Twitter Cards et canonical URL
 * pour optimiser le référencement et le partage sur les réseaux sociaux.
 *
 * @param params - Paramètres de métadonnées
 * @param params.title - Titre complet de la page (ex: "Avocat en Droit des Contrats à Strasbourg")
 * @param params.description - Description SEO de 150-160 caractères
 * @param params.keywords - Mots-clés SEO séparés par des virgules
 * @param params.domain - Slug du domaine pour l'URL (ex: "contrats", "famille")
 * @returns Objet Metadata pour Next.js
 *
 * @example
 * ```typescript
 * export const metadata = generateDomainMetadata({
 *   title: 'Avocat en Droit de la Famille à Strasbourg',
 *   description: 'Avocat spécialisé en droit de la famille...',
 *   keywords: 'avocat famille Strasbourg, divorce, garde enfants',
 *   domain: 'famille'
 * })
 * ```
 */
export function generateDomainMetadata({
  title,
  description,
  keywords,
  domain,
}: DomainMetadataParams): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rayssa-harmes-avocate.fr'
  const url = `${siteUrl}/domaines/${domain}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Rayssa Harmes - Avocat à Strasbourg',
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}

/**
 * Génère le JSON-LD (structured data) pour une page de domaine juridique
 *
 * Crée un objet JSON-LD conforme à Schema.org pour améliorer l'affichage
 * dans les rich snippets Google et optimiser le SEO local.
 *
 * @param params - Paramètres du JSON-LD
 * @param params.name - Nom du service juridique (ex: "Droit de la Famille")
 * @param params.description - Description du service
 * @param params.url - URL complète de la page
 * @param params.areaServed - Zone géographique servie (défaut: "Strasbourg, France")
 * @param params.serviceType - Type de service (défaut: "Legal")
 * @returns Objet JSON-LD à insérer dans un script tag
 *
 * @example
 * ```typescript
 * const jsonLd = generateDomainJsonLd({
 *   name: 'Droit de la Famille',
 *   description: 'Services juridiques en droit familial',
 *   url: 'https://example.com/domaines/famille',
 *   areaServed: 'Strasbourg et région',
 *   serviceType: 'LegalService'
 * })
 *
 * // Dans le composant :
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 * />
 * ```
 */
export function generateDomainJsonLd({
  name,
  description,
  url,
  areaServed = 'Strasbourg, France',
  serviceType = 'Legal',
}: JsonLdParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Attorney',
      name: process.env.NEXT_PUBLIC_LAWYER_NAME || 'Rayssa Harmes',
      address: {
        '@type': 'PostalAddress',
        streetAddress: process.env.NEXT_PUBLIC_ADDRESS || '[PLACEHOLDER: Adresse]',
        addressLocality: 'Strasbourg',
        postalCode: '67000',
        addressCountry: 'FR',
      },
      telephone: process.env.NEXT_PUBLIC_PHONE || '[PLACEHOLDER: Téléphone]',
      email: process.env.NEXT_PUBLIC_EMAIL || '[PLACEHOLDER: Email]',
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    serviceType,
    url,
  }
}
