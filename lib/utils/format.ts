/**
 * Formatting utilities for display and data transformation
 */

/**
 * Formats a French phone number to display format
 * @param phone - Phone number to format (e.g., "0612345678" or "+33612345678")
 * @returns Formatted phone (e.g., "06 12 34 56 78" or "+33 6 12 34 56 78")
 */
export function formatFrenchPhone(phone: string): string {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '')

  // International format starting with +33
  if (cleaned.startsWith('+33')) {
    const digits = cleaned.slice(3) // Remove +33
    if (digits.length === 9) {
      return `+33 ${digits[0]} ${digits.slice(1, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7)}`
    }
  }

  // National format starting with 0
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`
  }

  // Return original if can't format
  return phone
}

/**
 * Formats a date to French locale format
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fr-FR', options).format(dateObj)
}

/**
 * Formats a price in euros
 * @param amount - Amount to format
 * @param options - Formatting options
 * @returns Formatted price (e.g., "1 234,56 €")
 */
export function formatPrice(
  amount: number,
  options: { showDecimals?: boolean; showCurrency?: boolean } = {}
): string {
  const { showDecimals = true, showCurrency = true } = options

  const formatted = new Intl.NumberFormat('fr-FR', {
    style: showCurrency ? 'currency' : 'decimal',
    currency: 'EUR',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount)

  return formatted
}

/**
 * Truncates a string to a maximum length and adds ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param ellipsis - Ellipsis string (default: "...")
 * @returns Truncated text
 */
export function truncate(text: string, maxLength: number, ellipsis = '...'): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - ellipsis.length) + ellipsis
}

/**
 * Capitalizes the first letter of a string
 * @param text - Text to capitalize
 * @returns Capitalized text
 */
export function capitalize(text: string): string {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

/**
 * Capitalizes the first letter of each word
 * @param text - Text to capitalize
 * @returns Title-cased text
 */
export function titleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ')
}

/**
 * Formats a SIRET number with spaces (XXX XXX XXX XXXXX)
 * @param siret - SIRET number (14 digits)
 * @returns Formatted SIRET
 */
export function formatSiret(siret: string): string {
  const cleaned = siret.replace(/\s/g, '')
  if (cleaned.length !== 14) return siret

  return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`
}

/**
 * Formats a postal code (adds leading zeros if needed)
 * @param postalCode - Postal code
 * @returns Formatted postal code
 */
export function formatPostalCode(postalCode: string): string {
  const cleaned = postalCode.replace(/\D/g, '')
  return cleaned.padStart(5, '0')
}

/**
 * Formats a file size in human-readable format
 * @param bytes - Size in bytes
 * @returns Formatted size (e.g., "1.5 MB")
 */
export function formatFileSize(bytes: number): string {
  const units = ['octets', 'Ko', 'Mo', 'Go', 'To']
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }

  return `${size.toFixed(unitIndex > 0 ? 2 : 0)} ${units[unitIndex]}`
}

/**
 * Formats a number with thousand separators (French format)
 * @param num - Number to format
 * @returns Formatted number (e.g., "1 234 567")
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('fr-FR').format(num)
}
