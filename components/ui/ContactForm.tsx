'use client'

import { Send } from 'lucide-react'
import { useContactForm } from '@/lib/hooks/useContactForm'
import FormInput from './form/FormInput'
import FormTextarea from './form/FormTextarea'
import FormSelect from './form/FormSelect'
import FormCheckbox from './form/FormCheckbox'
import FormMessage from './form/FormMessage'
import FormAlert from './form/FormAlert'

const DOMAIN_OPTIONS = [
  { value: 'contrats', label: 'Droit des contrats' },
  { value: 'famille', label: 'Droit de la famille' },
  { value: 'etrangers', label: 'Droit des étrangers' },
  { value: 'travail', label: 'Droit du travail' },
  { value: 'immobilier', label: 'Droit immobilier' },
  { value: 'autre', label: 'Autre' },
]

export default function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="name"
          name="name"
          type="text"
          label="Nom et prénom"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          required
          placeholder="Votre nom complet"
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
          placeholder="votre@email.com"
        />
      </div>

      {/* Phone and Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="phone"
          name="phone"
          type="tel"
          label="Téléphone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Votre numéro de téléphone"
        />

        <FormSelect
          id="subject"
          name="subject"
          label="Domaine concerné"
          value={formData.subject}
          onChange={handleInputChange}
          options={DOMAIN_OPTIONS}
          error={errors.subject}
          required
          placeholder="Sélectionner un domaine"
        />
      </div>

      {/* Message */}
      <FormTextarea
        id="message"
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleInputChange}
        error={errors.message}
        required
        rows={6}
        placeholder="Décrivez brièvement votre situation (évitez les informations trop sensibles dans ce formulaire)"
      />

      {/* Security Alert */}
      <FormAlert
        message={
          <>
            <strong>Important :</strong> Ne transmettez pas d&apos;informations confidentielles ou sensibles
            via ce formulaire. Pour une communication sécurisée, contactez-moi directement par téléphone
            ou prenez rendez-vous.
          </>
        }
      />

      {/* Consent Checkbox */}
      <FormCheckbox
        id="consent"
        name="consent"
        checked={formData.consent}
        onChange={handleInputChange}
        error={errors.consent}
        required
        label={
          <>
            J&apos;accepte que mes données personnelles soient traitées dans le cadre de ma demande de contact.
            Ces données ne seront utilisées que pour répondre à votre demande et ne seront pas transmises à des tiers.
            <span className="text-red-600 ml-1">*</span>
          </>
        }
      />

      {/* Success Message */}
      {submitStatus === 'success' && (
        <FormMessage
          type="success"
          title="Message envoyé avec succès !"
          message="Merci pour votre message. Je vous recontacterai dans les plus brefs délais, généralement sous 24h ouvrées."
        />
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <FormMessage
          type="error"
          title="Erreur d'envoi"
          message={
            <>
              Une erreur est survenue lors de l&apos;envoi de votre message. Veuillez réessayer ou me contacter directement par téléphone au{' '}
              <a href="tel:+33745048395" className="underline font-medium">+33 7 45 04 83 95</a>
              {' '}ou par email à{' '}
              <a href="mailto:harmes.avocat@gmail.com" className="underline font-medium">harmes.avocat@gmail.com</a>
            </>
          }
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formData.consent}
        className="btn-outline w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" />
        <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
      </button>
    </form>
  )
}
