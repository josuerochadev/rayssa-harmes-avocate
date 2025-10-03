'use client'

import { Send, AlertCircle } from 'lucide-react'
import { useContactForm } from '@/lib/hooks/useContactForm'

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            Nom et prénom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors ${
              errors.name
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-primary focus:border-primary'
            }`}
            placeholder="Votre nom complet"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors ${
              errors.email
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-primary focus:border-primary'
            }`}
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Votre numéro de téléphone"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
            Domaine concerné *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors bg-white ${
              errors.subject
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-primary focus:border-primary'
            }`}
          >
            <option value="">Sélectionner un domaine</option>
            <option value="contrats">Droit des contrats</option>
            <option value="famille">Droit de la famille</option>
            <option value="etrangers">Droit des étrangers</option>
            <option value="travail">Droit du travail</option>
            <option value="immobilier">Droit immobilier</option>
            <option value="autre">Autre</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors resize-vertical ${
            errors.message
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 focus:ring-primary focus:border-primary'
          }`}
          placeholder="Décrivez brièvement votre situation (évitez les informations trop sensibles dans ce formulaire)"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="bg-accent-light/10 border border-accent rounded-button p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-700">
            <strong>Important :</strong> Ne transmettez pas d&apos;informations confidentielles ou sensibles
            via ce formulaire. Pour une communication sécurisée, contactez-moi directement par téléphone
            ou prenez rendez-vous.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleInputChange}
          required
          className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
        />
        <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
          J&apos;accepte que mes données personnelles soient traitées dans le cadre de ma demande de contact. 
          Ces données ne seront utilisées que pour répondre à votre demande et ne seront pas transmises à des tiers.
          <span className="text-red-600 ml-1">*</span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-button p-4">
          <p className="text-green-800 font-medium mb-1">
            ✅ Message envoyé avec succès !
          </p>
          <p className="text-green-700 text-sm">
            Merci pour votre message. Je vous recontacterai dans les plus brefs délais, généralement sous 24h ouvrées.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-button p-4">
          <p className="text-red-800 font-medium mb-2">
            ❌ Erreur d&apos;envoi
          </p>
          <p className="text-red-700 text-sm">
            Une erreur est survenue lors de l&apos;envoi de votre message. Veuillez réessayer ou me contacter directement par téléphone au{' '}
            <a href="tel:+33745048395" className="underline font-medium">+33 7 45 04 83 95</a>
            {' '}ou par email à{' '}
            <a href="mailto:harmes.avocat@gmail.com" className="underline font-medium">harmes.avocat@gmail.com</a>
          </p>
        </div>
      )}

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