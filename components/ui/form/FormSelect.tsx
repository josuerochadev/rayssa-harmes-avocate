/**
 * Option pour le composant FormSelect
 */
interface FormSelectOption {
  /** Valeur de l'option */
  value: string
  /** Label affiché */
  label: string
}

/**
 * Props pour le composant FormSelect
 */
interface FormSelectProps {
  /** ID unique du champ */
  id: string
  /** Nom du champ (utilisé pour l'état du formulaire) */
  name: string
  /** Label affiché au-dessus du select */
  label: string
  /** Valeur actuelle sélectionnée */
  value: string
  /** Handler de changement */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  /** Liste des options disponibles */
  options: FormSelectOption[]
  /** Message d'erreur de validation */
  error?: string
  /** Champ requis (affiche *) */
  required?: boolean
  /** Texte de l'option placeholder */
  placeholder?: string
}

/**
 * Composant de select avec gestion d'erreurs
 *
 * Select accessible avec label, options dynamiques, états d'erreur,
 * et styles cohérents. Utilise aria-invalid et aria-describedby.
 *
 * @param props - Props du composant
 * @returns Select de formulaire stylisé
 */
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
