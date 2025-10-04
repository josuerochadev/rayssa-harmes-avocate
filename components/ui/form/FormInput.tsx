/**
 * Props pour le composant FormInput
 */
interface FormInputProps {
  /** ID unique du champ */
  id: string
  /** Nom du champ (utilisé pour l'état du formulaire) */
  name: string
  /** Type du champ input */
  type?: 'text' | 'email' | 'tel'
  /** Label affiché au-dessus du champ */
  label: string
  /** Valeur actuelle du champ */
  value: string
  /** Handler de changement */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Message d'erreur de validation */
  error?: string
  /** Champ requis (affiche *) */
  required?: boolean
  /** Texte de placeholder */
  placeholder?: string
}

/**
 * Composant de champ input avec gestion d'erreurs
 *
 * Input accessible avec label, états d'erreur, et styles cohérents.
 * Utilise aria-invalid et aria-describedby pour l'accessibilité.
 *
 * @param props - Props du composant
 * @returns Input de formulaire stylisé
 */
export default function FormInput({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-2">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 border rounded-button focus:ring-2 transition-colors ${
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
