import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidFrenchPhone,
  isNotEmpty,
  hasMinLength,
  hasMaxLength,
  isLengthInRange,
  isValidUrl,
  isInList,
  isValidFrenchPostalCode,
  isValidSiret,
} from './validation'

describe('validation utils', () => {
  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true)
      expect(isValidEmail('  valid@email.com  ')).toBe(true) // with spaces
    })

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false)
      expect(isValidEmail('invalid@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('')).toBe(false)
    })
  })

  describe('isValidFrenchPhone', () => {
    it('should validate correct French phone numbers', () => {
      expect(isValidFrenchPhone('0612345678')).toBe(true)
      expect(isValidFrenchPhone('06 12 34 56 78')).toBe(true)
      expect(isValidFrenchPhone('+33612345678')).toBe(true)
      expect(isValidFrenchPhone('+33 6 12 34 56 78')).toBe(true)
      expect(isValidFrenchPhone('0033612345678')).toBe(true)
      expect(isValidFrenchPhone('01 23 45 67 89')).toBe(true)
    })

    it('should reject invalid phone numbers', () => {
      expect(isValidFrenchPhone('123')).toBe(false)
      expect(isValidFrenchPhone('0012345678')).toBe(false) // Invalid prefix
      expect(isValidFrenchPhone('12345678')).toBe(false) // Too short
      expect(isValidFrenchPhone('')).toBe(false)
    })
  })

  describe('isNotEmpty', () => {
    it('should return true for non-empty strings', () => {
      expect(isNotEmpty('hello')).toBe(true)
      expect(isNotEmpty('  text  ')).toBe(true) // Spaces around
    })

    it('should return false for empty strings', () => {
      expect(isNotEmpty('')).toBe(false)
      expect(isNotEmpty('   ')).toBe(false) // Only spaces
      expect(isNotEmpty('\n\t')).toBe(false) // Only whitespace
    })
  })

  describe('hasMinLength', () => {
    it('should validate minimum length', () => {
      expect(hasMinLength('hello', 5)).toBe(true)
      expect(hasMinLength('hello', 3)).toBe(true)
      expect(hasMinLength('  hello  ', 5)).toBe(true) // Trimmed
    })

    it('should fail when below minimum', () => {
      expect(hasMinLength('hi', 5)).toBe(false)
      expect(hasMinLength('', 1)).toBe(false)
    })
  })

  describe('hasMaxLength', () => {
    it('should validate maximum length', () => {
      expect(hasMaxLength('hello', 5)).toBe(true)
      expect(hasMaxLength('hello', 10)).toBe(true)
    })

    it('should fail when exceeding maximum', () => {
      expect(hasMaxLength('hello world', 5)).toBe(false)
    })
  })

  describe('isLengthInRange', () => {
    it('should validate length within range', () => {
      expect(isLengthInRange('hello', 3, 10)).toBe(true)
      expect(isLengthInRange('hello', 5, 5)).toBe(true) // Exact
    })

    it('should fail when outside range', () => {
      expect(isLengthInRange('hi', 5, 10)).toBe(false)
      expect(isLengthInRange('very long text', 1, 5)).toBe(false)
    })
  })

  describe('isValidUrl', () => {
    it('should validate correct URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true)
      expect(isValidUrl('http://test.org/path?query=1')).toBe(true)
      expect(isValidUrl('ftp://files.example.com')).toBe(true)
    })

    it('should reject invalid URLs', () => {
      expect(isValidUrl('not a url')).toBe(false)
      expect(isValidUrl('example.com')).toBe(false) // Missing protocol
      expect(isValidUrl('')).toBe(false)
    })
  })

  describe('isInList', () => {
    it('should check if value is in allowed list', () => {
      expect(isInList('apple', ['apple', 'banana', 'orange'])).toBe(true)
      expect(isInList(5, [1, 2, 3, 5, 10])).toBe(true)
    })

    it('should return false if value not in list', () => {
      expect(isInList('grape', ['apple', 'banana', 'orange'])).toBe(false)
      expect(isInList(7, [1, 2, 3, 5])).toBe(false)
    })
  })

  describe('isValidFrenchPostalCode', () => {
    it('should validate correct postal codes', () => {
      expect(isValidFrenchPostalCode('67000')).toBe(true)
      expect(isValidFrenchPostalCode('75001')).toBe(true)
      expect(isValidFrenchPostalCode('  13008  ')).toBe(true) // With spaces
    })

    it('should reject invalid postal codes', () => {
      expect(isValidFrenchPostalCode('123')).toBe(false)
      expect(isValidFrenchPostalCode('123456')).toBe(false)
      expect(isValidFrenchPostalCode('abcde')).toBe(false)
      expect(isValidFrenchPostalCode('')).toBe(false)
    })
  })

  describe('isValidSiret', () => {
    it('should validate correct SIRET numbers', () => {
      expect(isValidSiret('12345678901234')).toBe(true)
      expect(isValidSiret('123 456 789 01234')).toBe(true) // With spaces
    })

    it('should reject invalid SIRET numbers', () => {
      expect(isValidSiret('123')).toBe(false)
      expect(isValidSiret('123456789012345')).toBe(false) // Too long
      expect(isValidSiret('1234567890123a')).toBe(false) // Contains letter
      expect(isValidSiret('')).toBe(false)
    })
  })
})
