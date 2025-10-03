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
 * Génère les métadonnées pour une page de domaine juridique
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
