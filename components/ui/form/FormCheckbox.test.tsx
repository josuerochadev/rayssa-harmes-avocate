import { render, screen } from '@/test/utils'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import FormCheckbox from './FormCheckbox'

describe('FormCheckbox', () => {
  it('should render checkbox with label', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="I agree to the terms"
        checked={false}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByText('I agree to the terms')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should show required indicator when required', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={vi.fn()}
        required
      />
    )

    const label = screen.getByText(/Accept terms/)
    expect(label.textContent).toContain('*')
  })

  it('should display error message when error prop is provided', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={vi.fn()}
        error="You must accept the terms"
      />
    )

    expect(screen.getByText('You must accept the terms')).toBeInTheDocument()
  })

  it('should apply error styles when error exists', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={vi.fn()}
        error="Error message"
      />
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('border-red-500')
  })

  it('should call onChange when checkbox is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={handleChange}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(handleChange).toHaveBeenCalled()
  })

  it('should reflect checked state', () => {
    const { rerender } = render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={vi.fn()}
      />
    )

    let checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    rerender(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={true}
        onChange={vi.fn()}
      />
    )

    checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('should support React node as label', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label={
          <>
            I accept the <strong>terms and conditions</strong>
          </>
        }
        checked={false}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByText('I accept the')).toBeInTheDocument()
    expect(screen.getByText('terms and conditions')).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={vi.fn()}
        required
        error="Error message"
      />
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'test-checkbox')
    expect(checkbox).toHaveAttribute('name', 'test')
    expect(checkbox).toHaveAttribute('required')
    expect(checkbox).toHaveAttribute('aria-invalid', 'true')
  })

  it('should associate label with checkbox via htmlFor', () => {
    render(
      <FormCheckbox
        id="test-checkbox"
        name="test"
        label="Accept terms"
        checked={false}
        onChange={vi.fn()}
      />
    )

    const label = screen.getByText('Accept terms').closest('label')
    expect(label).toHaveAttribute('for', 'test-checkbox')
  })
})
