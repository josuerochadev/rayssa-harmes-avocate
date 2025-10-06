import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Hoist the env stub to ensure it runs before module imports
vi.hoisted(() => {
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT = 'https://formspree.io/f/test123'
})

import { render, screen, waitFor } from '@/test/utils'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

const MOCK_FORMSPREE_ENDPOINT = 'https://formspree.io/f/test123'

describe('ContactForm Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/nom et prénom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/téléphone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/domaine concerné/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should display validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Enable consent to allow submit
    const consentCheckbox = screen.getByRole('checkbox')
    await user.click(consentCheckbox)

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/le nom est requis/i)).toBeInTheDocument()
      expect(screen.getByText(/l'email est requis/i)).toBeInTheDocument()
      expect(screen.getByText(/veuillez sélectionner un domaine/i)).toBeInTheDocument()
      expect(screen.getByText(/le message est requis/i)).toBeInTheDocument()
    })
  })

  it('should validate email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'invalid-email')

    // Enable consent to allow submit
    const consentCheckbox = screen.getByRole('checkbox')
    await user.click(consentCheckbox)

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/email invalide/i)).toBeInTheDocument()
    })
  })

  it('should validate message minimum length', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const messageInput = screen.getByLabelText(/message/i)
    await user.type(messageInput, 'Short')

    // Enable consent to allow submit
    const consentCheckbox = screen.getByRole('checkbox')
    await user.click(consentCheckbox)

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/le message doit contenir au moins 10 caractères/i)).toBeInTheDocument()
    })
  })

  it('should clear field error when user starts typing', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Enable consent to allow submit
    const consentCheckbox = screen.getByRole('checkbox')
    await user.click(consentCheckbox)

    // Submit to trigger validation errors
    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/le nom est requis/i)).toBeInTheDocument()
    })

    // Type in the name field
    const nameInput = screen.getByLabelText(/nom et prénom/i)
    await user.type(nameInput, 'John')

    // Error should be cleared
    await waitFor(() => {
      expect(screen.queryByText(/le nom est requis/i)).not.toBeInTheDocument()
    })
  })

  it('should disable submit button when consent is not given', () => {
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    expect(submitButton).toBeDisabled()
  })

  it('should enable submit button when consent is given', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const consentCheckbox = screen.getByRole('checkbox')
    await user.click(consentCheckbox)

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    expect(submitButton).not.toBeDisabled()
  })

  it('should submit form successfully with valid data', async () => {
    const user = userEvent.setup()
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    })
    global.fetch = mockFetch

    render(<ContactForm />)

    // Fill in all required fields
    await user.type(screen.getByLabelText(/nom et prénom/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.selectOptions(screen.getByLabelText(/domaine concerné/i), 'contrats')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with sufficient length')
    await user.click(screen.getByRole('checkbox'))

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled()
      expect(screen.getByText(/message envoyé avec succès/i)).toBeInTheDocument()
    })
  })

  it('should show error message on submission failure', async () => {
    const user = userEvent.setup()
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Submission failed' })
    })
    global.fetch = mockFetch

    render(<ContactForm />)

    // Fill in all required fields
    await user.type(screen.getByLabelText(/nom et prénom/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.selectOptions(screen.getByLabelText(/domaine concerné/i), 'contrats')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')
    await user.click(screen.getByRole('checkbox'))

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/erreur d'envoi/i)).toBeInTheDocument()
    })
  })

  it('should display security alert', () => {
    render(<ContactForm />)

    expect(screen.getByText(/ne transmettez pas d'informations confidentielles/i)).toBeInTheDocument()
  })

  it('should have all domain options available', () => {
    render(<ContactForm />)

    const select = screen.getByLabelText(/domaine concerné/i)

    expect(select).toContainHTML('Droit des contrats')
    expect(select).toContainHTML('Droit de la famille')
    expect(select).toContainHTML('Droit des étrangers')
    expect(select).toContainHTML('Droit du travail')
    expect(select).toContainHTML('Droit immobilier')
    expect(select).toContainHTML('Autre')
  })

  it('should show loading state while submitting', async () => {
    const user = userEvent.setup()
    const mockFetch = vi.fn(() => new Promise((resolve) => setTimeout(() => resolve({
      ok: true,
      json: async () => ({ success: true })
    } as Response), 100)))
    global.fetch = mockFetch as any

    render(<ContactForm />)

    // Fill in all required fields
    await user.type(screen.getByLabelText(/nom et prénom/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.selectOptions(screen.getByLabelText(/domaine concerné/i), 'contrats')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')
    await user.click(screen.getByRole('checkbox'))

    const submitButton = screen.getByRole('button', { name: /envoyer le message/i })
    await user.click(submitButton)

    expect(screen.getByText(/envoi en cours/i)).toBeInTheDocument()
    expect(submitButton).toBeDisabled()

    await waitFor(() => {
      expect(screen.getByText(/envoyer le message/i)).toBeInTheDocument()
    })
  })
})
