interface FormCheckboxProps {
  id: string
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: React.ReactNode
  error?: string
  required?: boolean
}

export default function FormCheckbox({
  id,
  name,
  checked,
  onChange,
  label,
  error,
  required = false,
}: FormCheckboxProps) {
  return (
    <div>
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
          className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
        />
        <label htmlFor={id} className="text-sm text-gray-700 leading-relaxed">
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
