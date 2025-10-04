import { render, screen } from '@/test/utils'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import FormInput from './FormInput'

describe('FormInput', () => {
  it('should render input with label', () => {
    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
      />
    )

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should show required indicator when required', () => {
    const { container } = render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        required
      />
    )

    const label = screen.getByText(/Test Label/)
    expect(label.textContent).toContain('*')
  })

  it('should display error message when error prop is provided', () => {
    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        error="This field is required"
      />
    )

    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('should apply error styles when error exists', () => {
    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        error="Error message"
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-red-500')
  })

  it('should call onChange when input value changes', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={handleChange}
      />
    )

    const input = screen.getByRole('textbox')
    await user.type(input, 'Hello')

    expect(handleChange).toHaveBeenCalled()
  })

  it('should render with placeholder', () => {
    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        placeholder="Enter text here"
      />
    )

    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument()
  })

  it('should render different input types', () => {
    const { rerender } = render(
      <FormInput
        id="test-input"
        name="test"
        type="email"
        label="Email"
        value=""
        onChange={vi.fn()}
      />
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')

    rerender(
      <FormInput
        id="test-input"
        name="test"
        type="tel"
        label="Phone"
        value=""
        onChange={vi.fn()}
      />
    )

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel')
  })

  it('should maintain controlled input value', () => {
    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value="Initial value"
        onChange={vi.fn()}
      />
    )

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('Initial value')
  })

  it('should have proper accessibility attributes', () => {
    render(
      <FormInput
        id="test-input"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        required
        error="Error message"
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'test-input')
    expect(input).toHaveAttribute('name', 'test')
    expect(input).toHaveAttribute('required')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })
})
