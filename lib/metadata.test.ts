import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { generateDomainMetadata, generateDomainJsonLd } from './metadata'

describe('metadata', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('generateDomainMetadata', () => {
    it('should generate complete metadata for a domain', () => {
      const metadata = generateDomainMetadata({
        title: 'Avocat Droit de la Famille - Strasbourg',
        description: 'Expert en droit de la famille à Strasbourg',
        keywords: 'avocat, famille, divorce, Strasbourg',
        domain: 'famille',
      })

      expect(metadata).toEqual({
        title: 'Avocat Droit de la Famille - Strasbourg',
        description: 'Expert en droit de la famille à Strasbourg',
        keywords: 'avocat, famille, divorce, Strasbourg',
        openGraph: {
          title: 'Avocat Droit de la Famille - Strasbourg',
          description: 'Expert en droit de la famille à Strasbourg',
          url: 'https://rayssa-harmes-avocate.fr/domaines/famille',
          siteName: 'Rayssa Harmes - Avocat à Strasbourg',
          locale: 'fr_FR',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Avocat Droit de la Famille - Strasbourg',
          description: 'Expert en droit de la famille à Strasbourg',
        },
        alternates: {
          canonical: 'https://rayssa-harmes-avocate.fr/domaines/famille',
        },
      })
    })

    it('should use custom site URL from environment', () => {
      process.env.NEXT_PUBLIC_SITE_URL = 'https://custom-domain.com'

      const metadata = generateDomainMetadata({
        title: 'Test Title',
        description: 'Test Description',
        keywords: 'test',
        domain: 'contrats',
      })

      expect(metadata.openGraph?.url).toBe('https://custom-domain.com/domaines/contrats')
      expect(metadata.alternates?.canonical).toBe('https://custom-domain.com/domaines/contrats')
    })

    it('should handle different domain types', () => {
      const domains = ['famille', 'contrats', 'travail', 'immobilier', 'etrangers']

      domains.forEach((domain) => {
        const metadata = generateDomainMetadata({
          title: `Avocat ${domain}`,
          description: `Description ${domain}`,
          keywords: domain,
          domain,
        })

        expect(metadata.openGraph?.url).toBe(`https://rayssa-harmes-avocate.fr/domaines/${domain}`)
      })
    })

    it('should maintain consistent structure across all fields', () => {
      const metadata = generateDomainMetadata({
        title: 'Test Title',
        description: 'Test Description',
        keywords: 'keyword1, keyword2',
        domain: 'test',
      })

      expect(metadata).toHaveProperty('title')
      expect(metadata).toHaveProperty('description')
      expect(metadata).toHaveProperty('keywords')
      expect(metadata).toHaveProperty('openGraph')
      expect(metadata).toHaveProperty('twitter')
      expect(metadata).toHaveProperty('alternates')
      expect(metadata.openGraph).toHaveProperty('locale', 'fr_FR')
      expect(metadata.openGraph).toHaveProperty('type', 'website')
    })
  })

  describe('generateDomainJsonLd', () => {
    it('should generate complete JSON-LD structure', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Droit de la Famille',
        description: 'Services juridiques en droit de la famille',
        url: 'https://rayssa-harmes-avocate.fr/domaines/famille',
      })

      expect(jsonLd).toHaveProperty('@context', 'https://schema.org')
      expect(jsonLd).toHaveProperty('@type', 'Service')
      expect(jsonLd).toHaveProperty('name', 'Droit de la Famille')
      expect(jsonLd).toHaveProperty('description', 'Services juridiques en droit de la famille')
      expect(jsonLd).toHaveProperty('url', 'https://rayssa-harmes-avocate.fr/domaines/famille')
      expect(jsonLd).toHaveProperty('provider')
      expect(jsonLd).toHaveProperty('areaServed')
      expect(jsonLd).toHaveProperty('serviceType', 'Legal')
    })

    it('should use default areaServed when not provided', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
      })

      expect(jsonLd.areaServed).toEqual({
        '@type': 'City',
        name: 'Strasbourg, France',
      })
    })

    it('should use custom areaServed when provided', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
        areaServed: 'Paris, France',
      })

      expect(jsonLd.areaServed).toEqual({
        '@type': 'City',
        name: 'Paris, France',
      })
    })

    it('should use default serviceType when not provided', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
      })

      expect(jsonLd.serviceType).toBe('Legal')
    })

    it('should use custom serviceType when provided', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
        serviceType: 'CustomType',
      })

      expect(jsonLd.serviceType).toBe('CustomType')
    })

    it('should generate correct provider structure', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
      })

      expect(jsonLd.provider).toEqual({
        '@type': 'Attorney',
        name: 'Rayssa Harmes',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '[PLACEHOLDER: Adresse]',
          addressLocality: 'Strasbourg',
          postalCode: '67000',
          addressCountry: 'FR',
        },
        telephone: '[PLACEHOLDER: Téléphone]',
        email: '[PLACEHOLDER: Email]',
      })
    })

    it('should use environment variables for provider info', () => {
      process.env.NEXT_PUBLIC_LAWYER_NAME = 'Jane Doe'
      process.env.NEXT_PUBLIC_ADDRESS = '123 Main St'
      process.env.NEXT_PUBLIC_PHONE = '+33 1 23 45 67 89'
      process.env.NEXT_PUBLIC_EMAIL = 'jane@example.com'

      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
      })

      expect(jsonLd.provider).toEqual({
        '@type': 'Attorney',
        name: 'Jane Doe',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Main St',
          addressLocality: 'Strasbourg',
          postalCode: '67000',
          addressCountry: 'FR',
        },
        telephone: '+33 1 23 45 67 89',
        email: 'jane@example.com',
      })
    })

    it('should maintain Schema.org compliance', () => {
      const jsonLd = generateDomainJsonLd({
        name: 'Test Service',
        description: 'Test Description',
        url: 'https://example.com',
      })

      // Check Schema.org required fields
      expect(jsonLd['@context']).toBe('https://schema.org')
      expect(jsonLd['@type']).toBe('Service')
      expect(jsonLd.provider['@type']).toBe('Attorney')
      expect(jsonLd.provider.address['@type']).toBe('PostalAddress')
      expect(jsonLd.areaServed['@type']).toBe('City')
    })
  })
})
