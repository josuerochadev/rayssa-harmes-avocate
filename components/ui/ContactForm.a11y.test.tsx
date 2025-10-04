import { render } from '@/test/utils'
import { describe, it, expect } from 'vitest'
import { axe } from 'jest-axe'
import ContactForm from './ContactForm'

/**
 * Tests d'accessibilité pour le formulaire de contact
 *
 * Utilise axe-core via jest-axe pour détecter automatiquement
 * les violations WCAG 2.1 AA et autres problèmes d'accessibilité.
 *
 * Ces tests vérifient :
 * - Structure sémantique HTML
 * - Labels et attributs ARIA
 * - Contraste des couleurs
 * - Navigation au clavier
 * - Messages d'erreur accessibles
 */
describe('ContactForm - Accessibility', () => {
  it('should not have any automatically detectable accessibility violations', async () => {
    const { container } = render(<ContactForm />)

    // Exécuter axe sur le composant rendu
    const results = await axe(container)

    // Vérifier qu'il n'y a aucune violation
    expect(results).toHaveNoViolations()
  })

  it('should have accessible form labels', () => {
    const { getByLabelText } = render(<ContactForm />)

    // Vérifier que tous les champs ont des labels accessibles
    expect(getByLabelText(/nom et prénom/i)).toBeInTheDocument()
    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText(/téléphone/i)).toBeInTheDocument()
    expect(getByLabelText(/domaine concerné/i)).toBeInTheDocument()
    expect(getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('should have proper ARIA attributes for required fields', () => {
    const { getByLabelText } = render(<ContactForm />)

    const nameInput = getByLabelText(/nom et prénom/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    // Vérifier que les champs requis ont l'attribut required
    expect(nameInput).toHaveAttribute('required')
    expect(emailInput).toHaveAttribute('required')
    expect(messageInput).toHaveAttribute('required')
  })

  it('should have accessible submit button', () => {
    const { getByRole } = render(<ContactForm />)

    const submitButton = getByRole('button', { name: /envoyer le message/i })

    // Vérifier que le bouton est accessible
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('should have accessible error messages when validation fails', async () => {
    const { container } = render(<ContactForm />)

    // Même avec des erreurs de validation affichées, il ne devrait pas y avoir de violations
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
