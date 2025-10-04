import { render, screen } from '@/test/utils'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import FormSelect from './FormSelect'

describe('FormSelect', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  it('should render select with label', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
      />
    )

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should render all options', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
        placeholder="Select an option"
      />
    )

    expect(screen.getByText('Select an option')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('should show required indicator when required', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
        required
      />
    )

    const label = screen.getByText(/Test Label/)
    expect(label.textContent).toContain('*')
  })

  it('should display error message when error prop is provided', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
        error="Please select an option"
      />
    )

    expect(screen.getByText('Please select an option')).toBeInTheDocument()
  })

  it('should apply error styles when error exists', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
        error="Error message"
      />
    )

    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('border-red-500')
  })

  it('should call onChange when selection changes', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={handleChange}
        options={mockOptions}
      />
    )

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'option2')

    expect(handleChange).toHaveBeenCalled()
  })

  it('should maintain controlled select value', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value="option2"
        onChange={vi.fn()}
        options={mockOptions}
      />
    )

    const select = screen.getByRole('combobox') as HTMLSelectElement
    expect(select.value).toBe('option2')
  })

  it('should have proper accessibility attributes', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
        required
        error="Error message"
      />
    )

    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('id', 'test-select')
    expect(select).toHaveAttribute('name', 'test')
    expect(select).toHaveAttribute('required')
    expect(select).toHaveAttribute('aria-invalid', 'true')
  })

  it('should disable placeholder option', () => {
    render(
      <FormSelect
        id="test-select"
        name="test"
        label="Test Label"
        value=""
        onChange={vi.fn()}
        options={mockOptions}
        placeholder="Choose..."
      />
    )

    const placeholderOption = screen.getByText('Choose...')
    expect(placeholderOption).toHaveAttribute('disabled')
  })
})
