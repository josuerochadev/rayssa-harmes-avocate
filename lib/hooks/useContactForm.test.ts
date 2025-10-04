import { renderHook, act, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useContactForm } from './useContactForm'

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Initial state', () => {
    it('should initialize with empty form data', () => {
      const { result } = renderHook(() => useContactForm())

      expect(result.current.formData).toEqual({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      })
      expect(result.current.errors).toEqual({})
      expect(result.current.isSubmitting).toBe(false)
      expect(result.current.submitStatus).toBe('idle')
    })
  })

  describe('Validation', () => {
    it('should validate required name field', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.name).toBe('Le nom est requis')
    })

    it('should validate required email field', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.email).toBe("L'email est requis")
    })

    it('should validate email format', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.handleInputChange({
          target: { name: 'email', value: 'invalid-email', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.email).toBe('Email invalide')
    })

    it('should accept valid email format', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'subject', value: 'contrats', type: 'select-one' },
        } as React.ChangeEvent<HTMLSelectElement>)
        result.current.handleInputChange({
          target: { name: 'message', value: 'This is a test message', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.email).toBeUndefined()
    })

    it('should validate required subject field', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.subject).toBe('Veuillez sélectionner un domaine')
    })

    it('should validate required message field', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.message).toBe('Le message est requis')
    })

    it('should validate message minimum length', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.handleInputChange({
          target: { name: 'message', value: 'Short', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
      })

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.message).toBe('Le message doit contenir au moins 10 caractères')
    })

    it('should validate consent checkbox', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.consent).toBe('Vous devez accepter le traitement de vos données')
    })

    it('should return true when all fields are valid', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'subject', value: 'contrats', type: 'select-one' },
        } as React.ChangeEvent<HTMLSelectElement>)
        result.current.handleInputChange({
          target: { name: 'message', value: 'This is a valid message with enough characters', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      let isValid = false
      act(() => {
        isValid = result.current.validateForm()
      })

      expect(isValid).toBe(true)
      expect(Object.keys(result.current.errors)).toHaveLength(0)
    })
  })

  describe('Input handling', () => {
    it('should update text input value', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      expect(result.current.formData.name).toBe('John Doe')
    })

    it('should update checkbox value', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      expect(result.current.formData.consent).toBe(true)
    })

    it('should clear error when input changes', () => {
      const { result } = renderHook(() => useContactForm())

      act(() => {
        result.current.validateForm()
      })

      expect(result.current.errors.name).toBeDefined()

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      expect(result.current.errors.name).toBe('')
    })
  })

  describe('Form submission', () => {
    it('should not submit if validation fails', async () => {
      const { result } = renderHook(() => useContactForm())
      const mockFetch = vi.fn()
      global.fetch = mockFetch

      await act(async () => {
        await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
      })

      expect(mockFetch).not.toHaveBeenCalled()
      expect(result.current.submitStatus).toBe('idle')
    })

    it('should submit successfully with valid data', async () => {
      const { result } = renderHook(() => useContactForm())
      const mockFetch = vi.fn().mockResolvedValue({ ok: true })
      global.fetch = mockFetch

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'subject', value: 'contrats', type: 'select-one' },
        } as React.ChangeEvent<HTMLSelectElement>)
        result.current.handleInputChange({
          target: { name: 'message', value: 'This is a valid message', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      await act(async () => {
        await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
      })

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled()
        expect(result.current.submitStatus).toBe('success')
        expect(result.current.isSubmitting).toBe(false)
      })
    })

    it('should reset form after successful submission', async () => {
      const { result } = renderHook(() => useContactForm())
      const mockFetch = vi.fn().mockResolvedValue({ ok: true })
      global.fetch = mockFetch

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'subject', value: 'contrats', type: 'select-one' },
        } as React.ChangeEvent<HTMLSelectElement>)
        result.current.handleInputChange({
          target: { name: 'message', value: 'This is a valid message', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      await act(async () => {
        await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
      })

      await waitFor(() => {
        expect(result.current.formData).toEqual({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false,
        })
        expect(result.current.errors).toEqual({})
      })
    })

    it('should handle submission error', async () => {
      const { result } = renderHook(() => useContactForm())
      const mockFetch = vi.fn().mockResolvedValue({ ok: false })
      global.fetch = mockFetch

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'subject', value: 'contrats', type: 'select-one' },
        } as React.ChangeEvent<HTMLSelectElement>)
        result.current.handleInputChange({
          target: { name: 'message', value: 'This is a valid message', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      await act(async () => {
        await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
      })

      await waitFor(() => {
        expect(result.current.submitStatus).toBe('error')
        expect(result.current.isSubmitting).toBe(false)
      })
    })

    it('should handle network error', async () => {
      const { result } = renderHook(() => useContactForm())
      const mockFetch = vi.fn().mockRejectedValue(new Error('Network error'))
      global.fetch = mockFetch

      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe', type: 'text' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com', type: 'email' },
        } as React.ChangeEvent<HTMLInputElement>)
        result.current.handleInputChange({
          target: { name: 'subject', value: 'contrats', type: 'select-one' },
        } as React.ChangeEvent<HTMLSelectElement>)
        result.current.handleInputChange({
          target: { name: 'message', value: 'This is a valid message', type: 'textarea' },
        } as React.ChangeEvent<HTMLTextAreaElement>)
        result.current.handleInputChange({
          target: { name: 'consent', checked: true, type: 'checkbox' },
        } as React.ChangeEvent<HTMLInputElement>)
      })

      await act(async () => {
        await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
      })

      await waitFor(() => {
        expect(result.current.submitStatus).toBe('error')
        expect(result.current.isSubmitting).toBe(false)
      })
    })
  })
})
