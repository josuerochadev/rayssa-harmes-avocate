/**
 * String manipulation utilities
 */

/**
 * Creates a URL-friendly slug from a string
 * @param text - Text to slugify
 * @returns Slugified text (e.g., "À propos" -> "a-propos")
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Normalize accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove invalid chars
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-') // Replace multiple - with single -
}

/**
 * Extracts initials from a name
 * @param name - Full name (e.g., "Jean Dupont")
 * @returns Initials (e.g., "JD")
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 3) // Max 3 initials
}

/**
 * Removes all HTML tags from a string
 * @param html - HTML string
 * @returns Plain text
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

/**
 * Escapes HTML special characters
 * @param text - Text to escape
 * @returns Escaped text
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  }
  return text.replace(/[&<>"'/]/g, (char) => map[char])
}

/**
 * Counts words in a text
 * @param text - Text to count words in
 * @returns Number of words
 */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

/**
 * Estimates reading time in minutes
 * @param text - Text to estimate reading time for
 * @param wordsPerMinute - Reading speed (default: 200 words/min)
 * @returns Estimated reading time in minutes
 */
export function estimateReadingTime(text: string, wordsPerMinute = 200): number {
  const words = countWords(text)
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Generates an excerpt from text
 * @param text - Full text
 * @param maxLength - Maximum length of excerpt
 * @returns Excerpt with ellipsis
 */
export function excerpt(text: string, maxLength = 150): string {
  const cleanText = stripHtml(text).trim()

  if (cleanText.length <= maxLength) {
    return cleanText
  }

  // Try to cut at last complete word
  const truncated = cleanText.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...'
}

/**
 * Checks if a string is a valid JSON
 * @param text - String to check
 * @returns true if valid JSON, false otherwise
 */
export function isJson(text: string): boolean {
  try {
    JSON.parse(text)
    return true
  } catch {
    return false
  }
}

/**
 * Replaces multiple consecutive spaces with a single space
 * @param text - Text to normalize
 * @returns Normalized text
 */
export function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/**
 * Masks sensitive information (email, phone, etc.)
 * @param text - Text to mask
 * @param visibleChars - Number of visible characters at start and end
 * @param maskChar - Character to use for masking
 * @returns Masked text
 */
export function mask(text: string, visibleChars = 3, maskChar = '*'): string {
  if (text.length <= visibleChars * 2) {
    return maskChar.repeat(text.length)
  }

  const start = text.slice(0, visibleChars)
  const end = text.slice(-visibleChars)
  const middle = maskChar.repeat(text.length - visibleChars * 2)

  return start + middle + end
}

/**
 * Generates a random string
 * @param length - Length of the string
 * @param characters - Characters to use (default: alphanumeric)
 * @returns Random string
 */
export function randomString(
  length: number,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

/**
 * Pluralizes a French word based on count
 * @param count - Number of items
 * @param singular - Singular form
 * @param plural - Plural form (optional, defaults to singular + 's')
 * @returns Pluralized string with count
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  // In French, 0 and numbers > 1 use plural form
  const form = count === 1 ? singular : plural || singular + 's'
  return `${count} ${form}`
}
