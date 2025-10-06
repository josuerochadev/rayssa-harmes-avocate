/**
 * Global constants used across the application
 */

/**
 * Site metadata and SEO constants
 */
export const SITE = {
  NAME: 'Rayssa Harmes - Avocat à Strasbourg',
  DESCRIPTION: 'Cabinet d\'avocat à Strasbourg spécialisé en droit des contrats, droit de la famille, droit des étrangers, droit du travail et droit immobilier.',
  URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://rayssa-harmes-avocate.fr',
  LOCALE: 'fr_FR',
  LANGUAGE: 'fr',
} as const

/**
 * Contact information
 */
export const CONTACT = {
  PHONE: process.env.NEXT_PUBLIC_PHONE || '+33 7 45 04 83 95',
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || 'harmes.avocat@gmail.com',
  ADDRESS: process.env.NEXT_PUBLIC_ADDRESS || '24 avenue des Vosges',
  POSTAL_CODE: process.env.NEXT_PUBLIC_POSTAL_CODE || '67000',
  CITY: process.env.NEXT_PUBLIC_CITY || 'Strasbourg',
  COUNTRY: 'France',
} as const

/**
 * Professional information
 */
export const PROFESSIONAL = {
  LAWYER_NAME: process.env.NEXT_PUBLIC_LAWYER_NAME || 'Rayssa Harmes',
  BAR: process.env.NEXT_PUBLIC_BAR || 'Barreau de Strasbourg',
  SIRET: process.env.NEXT_PUBLIC_SIRET || '[SIRET]',
  CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || '',
} as const

/**
 * Form validation constants
 */
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(?:(?:\+33|0033|0)[1-9])(?:\d{8})$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 5000,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
} as const

/**
 * Legal domain types
 */
export const DOMAIN_TYPES = {
  CONTRATS: 'contrats',
  FAMILLE: 'famille',
  ETRANGERS: 'etrangers',
  TRAVAIL: 'travail',
  IMMOBILIER: 'immobilier',
  AUTRE: 'autre',
} as const

/**
 * Time and date constants
 */
export const TIME = {
  RESPONSE_TIME_HOURS: 24,
  CONSULTATION_DURATION_MINUTES: 30,
  OFFICE_HOURS: {
    MONDAY: '9h00 - 18h00',
    TUESDAY: '9h00 - 18h00',
    WEDNESDAY: '9h00 - 18h00',
    THURSDAY: '9h00 - 18h00',
    FRIDAY: '9h00 - 18h00',
    SATURDAY: 'Sur rendez-vous',
    SUNDAY: 'Fermé',
  },
} as const

/**
 * Social media and external links
 */
export const SOCIAL = {
  LINKEDIN: '',
  TWITTER: '',
  FACEBOOK: '',
} as const

/**
 * Navigation routes
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/a-propos',
  DOMAINS: '/domaines',
  TESTIMONIALS: '/témoignages',
  FEES: '/honoraires',
  CONTACT: '/contact',
  LEGAL_NOTICE: '/mentions-legales',
  PRIVACY_POLICY: '/politique-confidentialite',
} as const

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  // Generic messages
  REQUIRED_FIELD: 'Ce champ est requis',
  INVALID_EMAIL: 'Email invalide',
  INVALID_PHONE: 'Numéro de téléphone invalide',
  MIN_LENGTH: (min: number) => `Minimum ${min} caractères requis`,
  MAX_LENGTH: (max: number) => `Maximum ${max} caractères autorisés`,
  CONSENT_REQUIRED: 'Vous devez accepter le traitement de vos données',
  GENERIC_ERROR: 'Une erreur est survenue. Veuillez réessayer.',
  NETWORK_ERROR: 'Erreur de connexion. Vérifiez votre connexion internet.',

  // Field-specific messages for contact form
  NAME_REQUIRED: 'Le nom est requis',
  EMAIL_REQUIRED: "L'email est requis",
  SUBJECT_REQUIRED: 'Veuillez sélectionner un domaine',
  MESSAGE_REQUIRED: 'Le message est requis',
  MESSAGE_MIN_LENGTH: 'Le message doit contenir au moins 10 caractères',
} as const

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Message envoyé avec succès !',
  FORM_SUBMITTED_RESPONSE: 'Merci pour votre message. Je vous recontacterai dans les plus brefs délais, généralement sous 24h ouvrées.',
} as const

/**
 * API endpoints
 */
export const API = {
  FORMSPREE: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '',
} as const

/**
 * Feature flags
 */
export const FEATURES = {
  ENABLE_CALENDLY: !!process.env.NEXT_PUBLIC_CALENDLY_URL,
} as const
