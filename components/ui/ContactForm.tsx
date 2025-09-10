'use client'

import { useState } from 'react'
import { Send, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Placeholder for Formspree integration
      const response = await fetch('[FORMSPREE_ENDPOINT]', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false,
        })
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
            className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Votre nom complet"
          />
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
            className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="votre@email.com"
          />
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
            className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
          >
            <option value="">Sélectionner un domaine</option>
            <option value="contrats">Droit des contrats</option>
            <option value="famille">Droit de la famille</option>
            <option value="etrangers">Droit des étrangers</option>
            <option value="travail">Droit du travail</option>
            <option value="immobilier">Droit immobilier</option>
            <option value="autre">Autre</option>
          </select>
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
          className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical"
          placeholder="Décrivez brièvement votre situation (évitez les informations trop sensibles dans ce formulaire)"
        />
      </div>

      <div className="bg-green-mint border border-green-light rounded-button p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-green-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-primary">
            <strong>Important :</strong> Ne transmettez pas d&apos;informations confidentielles ou sensibles 
            via ce formulaire. Pour une communication sécurisée, contactez-nous directement par téléphone 
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
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-mint border border-green-light rounded-button p-4">
          <p className="text-green-primary">
            Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-button p-4">
          <p className="text-red-800">
            Une erreur est survenue lors de l&apos;envoi de votre message. Veuillez réessayer ou nous contacter directement.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !formData.consent}
        className="btn-green w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-4 w-4" />
        <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
      </button>
    </form>
  )
}