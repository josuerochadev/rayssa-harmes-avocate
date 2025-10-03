/**
 * Validation utilities for forms and user input
 */

/**
 * Validates an email address format
 * @param email - Email address to validate
 * @returns true if email is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/**
 * Validates a French phone number (mobile or landline)
 * Accepts formats: 0612345678, 06 12 34 56 78, +33 6 12 34 56 78, etc.
 * @param phone - Phone number to validate
 * @returns true if phone is valid, false otherwise
 */
export function isValidFrenchPhone(phone: string): boolean {
  // Remove all spaces, dots, dashes
  const cleaned = phone.replace(/[\s.\-]/g, '')

  // French mobile: 06/07, French landline: 01-05/09
  const frenchPhoneRegex = /^(?:(?:\+33|0033|0)[1-9])(?:\d{8})$/

  return frenchPhoneRegex.test(cleaned)
}

/**
 * Validates that a string is not empty (after trimming)
 * @param value - String to validate
 * @returns true if string is not empty, false otherwise
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}

/**
 * Validates minimum string length (after trimming)
 * @param value - String to validate
 * @param minLength - Minimum required length
 * @returns true if string meets minimum length, false otherwise
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength
}

/**
 * Validates maximum string length (after trimming)
 * @param value - String to validate
 * @param maxLength - Maximum allowed length
 * @returns true if string is within max length, false otherwise
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength
}

/**
 * Validates that a string is within a length range (after trimming)
 * @param value - String to validate
 * @param min - Minimum required length
 * @param max - Maximum allowed length
 * @returns true if string is within range, false otherwise
 */
export function isLengthInRange(value: string, min: number, max: number): boolean {
  const length = value.trim().length
  return length >= min && length <= max
}

/**
 * Validates a URL format
 * @param url - URL to validate
 * @returns true if URL is valid, false otherwise
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validates that a value is one of the allowed options
 * @param value - Value to validate
 * @param allowedValues - Array of allowed values
 * @returns true if value is in allowed values, false otherwise
 */
export function isInList<T>(value: T, allowedValues: T[]): boolean {
  return allowedValues.includes(value)
}

/**
 * Validates French postal code (5 digits)
 * @param postalCode - Postal code to validate
 * @returns true if postal code is valid, false otherwise
 */
export function isValidFrenchPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^\d{5}$/
  return postalCodeRegex.test(postalCode.trim())
}

/**
 * Validates SIRET number (14 digits)
 * @param siret - SIRET number to validate
 * @returns true if SIRET is valid format, false otherwise
 */
export function isValidSiret(siret: string): boolean {
  const cleaned = siret.replace(/\s/g, '')
  return /^\d{14}$/.test(cleaned)
}
