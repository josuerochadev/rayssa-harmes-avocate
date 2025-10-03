import { useState } from 'react'

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
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    // Validation du domaine
    if (!formData.subject) {
      newErrors.subject = 'Veuillez sélectionner un domaine'
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    // Validation du consentement RGPD
    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter le traitement de vos données'
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
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '[FORMSPREE_ENDPOINT]'

      const response = await fetch(formspreeEndpoint, {
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
