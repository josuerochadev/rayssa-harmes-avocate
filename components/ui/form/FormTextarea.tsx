interface FormTextareaProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  required?: boolean
  placeholder?: string
  rows?: number
}

export default function FormTextarea({
  id,
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 6,
}: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">
        {label} {required && '*'}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors resize-vertical ${
          error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-primary focus:border-primary'
        }`}
        placeholder={placeholder}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
