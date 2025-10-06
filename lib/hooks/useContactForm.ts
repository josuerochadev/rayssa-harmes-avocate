import { useState } from 'react'
import { isValidEmail, isNotEmpty, hasMinLength } from '@/lib/utils/validation'
import { ERROR_MESSAGES, VALIDATION, API } from '@/lib/constants'

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
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
 *
 * Gère l'état complet du formulaire de contact incluant :
 * - Données du formulaire (nom, email, téléphone, sujet, message, consentement)
 * - Validation en temps réel avec messages d'erreur personnalisés
 * - Soumission asynchrone vers Formspree
 * - États de chargement et de succès/erreur
 * - Réinitialisation automatique après succès
 *
 * @returns Objet contenant l'état et les handlers du formulaire
 * @returns {ContactFormData} formData - Données actuelles du formulaire
 * @returns {ContactFormErrors} errors - Erreurs de validation par champ
 * @returns {boolean} isSubmitting - État de soumission en cours
 * @returns {SubmitStatus} submitStatus - Statut de soumission ('idle' | 'success' | 'error')
 * @returns {Function} handleInputChange - Handler de changement des champs
 * @returns {Function} handleSubmit - Handler de soumission du formulaire
 * @returns {Function} validateForm - Fonction de validation manuelle
 *
 * @example
 * ```tsx
 * function ContactPage() {
 *   const {
 *     formData,
 *     errors,
 *     isSubmitting,
 *     submitStatus,
 *     handleInputChange,
 *     handleSubmit
 *   } = useContactForm()
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <input
 *         name="email"
 *         value={formData.email}
 *         onChange={handleInputChange}
 *       />
 *       {errors.email && <span>{errors.email}</span>}
 *       <button disabled={isSubmitting}>Envoyer</button>
 *     </form>
 *   )
 * }
 * ```
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

    // Pour les checkboxes, récupère la valeur 'checked'
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }))

    // Efface l'erreur du champ lors de la saisie
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  /**
   * Handler spécifique pour la checkbox de consentement
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))

    // Efface l'erreur du champ
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  /**
   * Gère la soumission du formulaire vers Formspree
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Récupérer l'endpoint Formspree depuis les variables d'environnement
      const formspreeEndpoint = API.FORMSPREE

      if (!formspreeEndpoint) {
        console.error('NEXT_PUBLIC_FORMSPREE_ENDPOINT non configuré')
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Envoyer directement à Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Réinitialise le formulaire après succès
        setFormData(INITIAL_FORM_DATA)
        setErrors({})
      } else {
        // Formspree peut retourner des erreurs de validation
        const data = await response.json()

        if (data.errors) {
          // Formspree retourne les erreurs dans un format spécifique
          const formspreeErrors: ContactFormErrors = {}
          data.errors.forEach((error: { field: string; message: string }) => {
            formspreeErrors[error.field] = error.message
          })
          setErrors(formspreeErrors)
        }

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
    handleCheckboxChange,
    handleSubmit,
    validateForm,
  }
}
