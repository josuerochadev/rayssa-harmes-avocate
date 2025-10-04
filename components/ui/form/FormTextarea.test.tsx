import { render, screen } from '@/test/utils'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import FormTextarea from './FormTextarea'

describe('FormTextarea', () => {
  it('should render textarea with label', () => {
    render(
      <FormTextarea
        id="test-textarea"
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
    render(
      <FormTextarea
        id="test-textarea"
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
      <FormTextarea
        id="test-textarea"
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
      <FormTextarea
        id="test-textarea"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        error="Error message"
      />
    )

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('border-red-500')
  })

  it('should call onChange when textarea value changes', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <FormTextarea
        id="test-textarea"
        name="test"
        label="Test Label"
        value=""
        onChange={handleChange}
      />
    )

    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'Multi-line text')

    expect(handleChange).toHaveBeenCalled()
  })

  it('should render with placeholder', () => {
    render(
      <FormTextarea
        id="test-textarea"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        placeholder="Enter your message"
      />
    )

    expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument()
  })

  it('should respect rows prop', () => {
    render(
      <FormTextarea
        id="test-textarea"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        rows={6}
      />
    )

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('rows', '6')
  })

  it('should maintain controlled textarea value', () => {
    render(
      <FormTextarea
        id="test-textarea"
        name="test"
        label="Test Label"
        value="Initial message"
        onChange={vi.fn()}
      />
    )

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
    expect(textarea.value).toBe('Initial message')
  })

  it('should have proper accessibility attributes', () => {
    render(
      <FormTextarea
        id="test-textarea"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        required
        error="Error message"
      />
    )

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('id', 'test-textarea')
    expect(textarea).toHaveAttribute('name', 'test')
    expect(textarea).toHaveAttribute('required')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
  })
})
