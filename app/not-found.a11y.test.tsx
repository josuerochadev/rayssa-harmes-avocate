import { render } from '@/test/utils'
import { describe, it, expect } from 'vitest'
import { axe } from 'jest-axe'
import NotFound from './not-found'

/**
 * Tests d'accessibilité pour la page 404
 *
 * Vérifie que la page d'erreur 404 respecte les standards d'accessibilité WCAG 2.1 AA
 */
describe('404 Page - Accessibility', () => {
  it('should not have any automatically detectable accessibility violations', async () => {
    const { container } = render(<NotFound />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have accessible heading structure', () => {
    const { getByRole } = render(<NotFound />)

    // Vérifier la présence des headings
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('should have accessible navigation links', () => {
    const { getByRole } = render(<NotFound />)

    // Vérifier que les liens ont des textes accessibles
    const homeLink = getByRole('link', { name: /retour à l'accueil/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('should have accessible button for back navigation', () => {
    const { getByRole } = render(<NotFound />)

    const backButton = getByRole('button', { name: /page précédente/i })
    expect(backButton).toBeInTheDocument()
  })
})
