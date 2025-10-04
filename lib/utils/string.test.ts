import { describe, it, expect } from 'vitest'
import {
  slugify,
  getInitials,
  stripHtml,
  escapeHtml,
  countWords,
  estimateReadingTime,
  excerpt,
  isJson,
  normalizeSpaces,
  mask,
  randomString,
  pluralize,
} from './string'

describe('string utils', () => {
  describe('slugify', () => {
    it('should create URL-friendly slugs', () => {
      expect(slugify('À propos')).toBe('a-propos')
      expect(slugify('Hello World')).toBe('hello-world')
      expect(slugify('Test   Multiple   Spaces')).toBe('test-multiple-spaces')
    })

    it('should remove special characters', () => {
      expect(slugify('Hello@World!')).toBe('helloworld')
      expect(slugify('Café & Restaurant')).toBe('cafe-restaurant')
    })

    it('should handle accented characters', () => {
      expect(slugify('Éléphant')).toBe('elephant')
      expect(slugify('Crème brûlée')).toBe('creme-brulee')
    })
  })

  describe('getInitials', () => {
    it('should extract initials from names', () => {
      expect(getInitials('Jean Dupont')).toBe('JD')
      expect(getInitials('Marie Claire Martin')).toBe('MCM')
    })

    it('should limit to 3 initials', () => {
      expect(getInitials('Jean Marie Pierre Dupont')).toBe('JMP')
    })

    it('should handle single names', () => {
      expect(getInitials('Dupont')).toBe('D')
    })
  })

  describe('stripHtml', () => {
    it('should remove HTML tags', () => {
      expect(stripHtml('<p>Hello</p>')).toBe('Hello')
      expect(stripHtml('<div>Text <strong>bold</strong></div>')).toBe('Text bold')
    })

    it('should handle plain text', () => {
      expect(stripHtml('Plain text')).toBe('Plain text')
    })
  })

  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHtml('<script>')).toBe('&lt;script&gt;')
      expect(escapeHtml('A & B')).toBe('A &amp; B')
      expect(escapeHtml('"quote"')).toBe('&quot;quote&quot;')
    })
  })

  describe('countWords', () => {
    it('should count words in text', () => {
      expect(countWords('Hello world')).toBe(2)
      expect(countWords('One two three four')).toBe(4)
    })

    it('should handle extra spaces', () => {
      expect(countWords('  Hello   world  ')).toBe(2)
    })

    it('should handle empty strings', () => {
      expect(countWords('')).toBe(0)
      expect(countWords('   ')).toBe(0)
    })
  })

  describe('estimateReadingTime', () => {
    it('should estimate reading time', () => {
      const text = Array(200).fill('word').join(' ') // 200 words
      expect(estimateReadingTime(text)).toBe(1) // 1 minute at 200 wpm
    })

    it('should round up to nearest minute', () => {
      const text = Array(250).fill('word').join(' ') // 250 words
      expect(estimateReadingTime(text)).toBe(2) // 2 minutes
    })

    it('should accept custom reading speed', () => {
      const text = Array(100).fill('word').join(' ')
      expect(estimateReadingTime(text, 100)).toBe(1)
    })
  })

  describe('excerpt', () => {
    it('should create excerpt from long text', () => {
      const text = 'This is a very long text that should be truncated to create an excerpt for display purposes.'
      const result = excerpt(text, 50)
      expect(result.length).toBeLessThanOrEqual(53) // 50 + "..."
      expect(result).toContain('...')
    })

    it('should not truncate short text', () => {
      const text = 'Short text'
      expect(excerpt(text, 50)).toBe(text)
    })

    it('should strip HTML', () => {
      const html = '<p>Hello <strong>world</strong></p>'
      const result = excerpt(html, 50)
      expect(result).not.toContain('<')
    })

    it('should cut at word boundary', () => {
      const text = 'Hello world this is a test'
      const result = excerpt(text, 15)
      expect(result).toBe('Hello world...')
    })
  })

  describe('isJson', () => {
    it('should validate JSON strings', () => {
      expect(isJson('{"key": "value"}')).toBe(true)
      expect(isJson('["array", "values"]')).toBe(true)
      expect(isJson('null')).toBe(true)
    })

    it('should reject invalid JSON', () => {
      expect(isJson('not json')).toBe(false)
      expect(isJson('{invalid}')).toBe(false)
      expect(isJson('')).toBe(false)
    })
  })

  describe('normalizeSpaces', () => {
    it('should replace multiple spaces with single space', () => {
      expect(normalizeSpaces('Hello    world')).toBe('Hello world')
      expect(normalizeSpaces('  Multiple   spaces  ')).toBe('Multiple spaces')
    })

    it('should handle tabs and newlines', () => {
      expect(normalizeSpaces('Hello\t\tworld')).toBe('Hello world')
      expect(normalizeSpaces('Line1\n\nLine2')).toBe('Line1 Line2')
    })
  })

  describe('mask', () => {
    it('should mask sensitive information', () => {
      expect(mask('1234567890')).toBe('123****890')
      expect(mask('secret', 2)).toBe('se**et')
    })

    it('should use custom mask character', () => {
      expect(mask('1234567890', 3, '#')).toBe('123####890')
    })

    it('should handle short strings', () => {
      const short = 'abc'
      expect(mask(short, 3)).toBe('***')
    })
  })

  describe('randomString', () => {
    it('should generate random strings of specified length', () => {
      const str = randomString(10)
      expect(str).toHaveLength(10)
    })

    it('should use custom character set', () => {
      const str = randomString(10, '01')
      expect(str).toMatch(/^[01]+$/)
    })

    it('should generate different strings', () => {
      const str1 = randomString(20)
      const str2 = randomString(20)
      expect(str1).not.toBe(str2)
    })
  })

  describe('pluralize', () => {
    it('should pluralize based on count', () => {
      expect(pluralize(0, 'item')).toBe('0 items')
      expect(pluralize(1, 'item')).toBe('1 item')
      expect(pluralize(2, 'item')).toBe('2 items')
    })

    it('should use custom plural form', () => {
      expect(pluralize(0, 'cheval', 'chevaux')).toBe('0 chevaux')
      expect(pluralize(1, 'cheval', 'chevaux')).toBe('1 cheval')
      expect(pluralize(5, 'cheval', 'chevaux')).toBe('5 chevaux')
    })
  })
})
