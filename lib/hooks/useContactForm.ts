import { useState } from 'react'
import { isValidEmail, isNotEmpty, hasMinLength } from '@/lib/utils/validation'
import { API, ERROR_MESSAGES, VALIDATION } from '@/lib/constants'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  consent: boolean
}

export interface ContactFormErrors {
  [key: string]: string
}

export type SubmitStatus = 'idle' | 'success' | 'error'

interface UseContactFormReturn {
  formData: ContactFormData
  errors: ContactFormErrors
  isSubmitting: boolean
  submitStatus: SubmitStatus
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  validateForm: () => boolean
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
}

/**
 * Hook personnalisé pour gérer la logique du formulaire de contact
 * Gère l'état, la validation et la soumission du formulaire
 */
export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  /**
   * Valide les données du formulaire
   * @returns true si le formulaire est valide, false sinon
   */
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {}

    // Validation du nom
    if (!isNotEmpty(formData.name)) {
      newErrors.name = ERROR_MESSAGES.NAME_REQUIRED
    }

    // Validation de l'email
    if (!isNotEmpty(formData.email)) {
      newErrors.email = ERROR_MESSAGES.EMAIL_REQUIRED
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = ERROR_MESSAGES.INVALID_EMAIL
    }

    // Validation du domaine
    if (!formData.subject) {
      newErrors.subject = ERROR_MESSAGES.SUBJECT_REQUIRED
    }

    // Validation du message
    if (!isNotEmpty(formData.message)) {
      newErrors.message = ERROR_MESSAGES.MESSAGE_REQUIRED
    } else if (!hasMinLength(formData.message, VALIDATION.MIN_MESSAGE_LENGTH)) {
      newErrors.message = ERROR_MESSAGES.MESSAGE_MIN_LENGTH
    }

    // Validation du consentement RGPD
    if (!formData.consent) {
      newErrors.consent = ERROR_MESSAGES.CONSENT_REQUIRED
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Gère les changements dans les champs du formulaire
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))

    // Efface l'erreur du champ lors de la saisie
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  /**
   * Gère la soumission du formulaire
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(API.FORMSPREE || '[FORMSPREE_ENDPOINT]', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Réinitialise le formulaire après succès
        setFormData(INITIAL_FORM_DATA)
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    validateForm,
  }
}
