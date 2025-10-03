import { describe, it, expect } from 'vitest'
import {
  formatFrenchPhone,
  formatDate,
  formatPrice,
  truncate,
  capitalize,
  titleCase,
  formatSiret,
  formatPostalCode,
  formatFileSize,
  formatNumber,
} from './format'

describe('format utils', () => {
  describe('formatFrenchPhone', () => {
    it('should format French phone numbers', () => {
      expect(formatFrenchPhone('0612345678')).toBe('06 12 34 56 78')
      expect(formatFrenchPhone('01 23 45 67 89')).toBe('01 23 45 67 89')
    })

    it('should format international numbers', () => {
      expect(formatFrenchPhone('+33612345678')).toBe('+33 6 12 34 56 78')
    })

    it('should return original if cannot format', () => {
      expect(formatFrenchPhone('123')).toBe('123')
      expect(formatFrenchPhone('invalid')).toBe('invalid')
    })
  })

  describe('formatDate', () => {
    it('should format dates in French locale', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date)
      expect(formatted).toContain('janvier')
      expect(formatted).toContain('2024')
    })

    it('should handle string dates', () => {
      const formatted = formatDate('2024-12-25')
      expect(formatted).toContain('décembre')
    })
  })

  describe('formatPrice', () => {
    it('should format prices in euros', () => {
      expect(formatPrice(1234.56)).toContain('1')
      expect(formatPrice(1234.56)).toContain('€')
    })

    it('should respect decimal options', () => {
      const withoutDecimals = formatPrice(1234.56, { showDecimals: false })
      expect(withoutDecimals).not.toContain(',')
    })

    it('should respect currency display option', () => {
      const withoutCurrency = formatPrice(1234.56, { showCurrency: false })
      expect(withoutCurrency).not.toContain('€')
    })
  })

  describe('truncate', () => {
    it('should truncate long text', () => {
      const text = 'This is a very long text that needs truncation'
      expect(truncate(text, 20)).toBe('This is a very lo...')
    })

    it('should not truncate short text', () => {
      const text = 'Short text'
      expect(truncate(text, 20)).toBe(text)
    })

    it('should use custom ellipsis', () => {
      const text = 'This is a long text'
      expect(truncate(text, 10, '---')).toBe('This is---')
    })
  })

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('WORLD')).toBe('World')
    })

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('')
    })
  })

  describe('titleCase', () => {
    it('should capitalize each word', () => {
      expect(titleCase('hello world')).toBe('Hello World')
      expect(titleCase('THIS IS A TEST')).toBe('This Is A Test')
    })
  })

  describe('formatSiret', () => {
    it('should format SIRET with spaces', () => {
      expect(formatSiret('12345678901234')).toBe('123 456 789 01234')
    })

    it('should handle already formatted SIRET', () => {
      expect(formatSiret('123 456 789 01234')).toBe('123 456 789 01234')
    })

    it('should return original if invalid length', () => {
      expect(formatSiret('123')).toBe('123')
    })
  })

  describe('formatPostalCode', () => {
    it('should format postal codes with leading zeros', () => {
      expect(formatPostalCode('1234')).toBe('01234')
      expect(formatPostalCode('123')).toBe('00123')
    })

    it('should keep valid postal codes', () => {
      expect(formatPostalCode('67000')).toBe('67000')
    })
  })

  describe('formatFileSize', () => {
    it('should format bytes', () => {
      expect(formatFileSize(500)).toContain('octets')
    })

    it('should format kilobytes', () => {
      expect(formatFileSize(2048)).toContain('Ko')
    })

    it('should format megabytes', () => {
      expect(formatFileSize(5242880)).toContain('Mo')
    })

    it('should format gigabytes', () => {
      expect(formatFileSize(5368709120)).toContain('Go')
    })
  })

  describe('formatNumber', () => {
    it('should format numbers with thousand separators', () => {
      const formatted = formatNumber(1234567)
      expect(formatted).toContain('1')
      // French format uses non-breaking spaces
      expect(formatted.replace(/\s/g, '')).toBe('1234567')
    })
  })
})
