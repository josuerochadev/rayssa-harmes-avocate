interface FormSelectOption {
  value: string
  label: string
}

interface FormSelectProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: FormSelectOption[]
  error?: string
  required?: boolean
  placeholder?: string
}

export default function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
  required = false,
  placeholder = 'Sélectionner une option',
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">
        {label} {required && '*'}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors bg-white ${
          error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-primary focus:border-primary'
        }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
