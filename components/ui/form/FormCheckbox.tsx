/**
 * Props pour le composant FormCheckbox
 */
interface FormCheckboxProps {
  /** ID unique du champ */
  id: string
  /** Nom du champ (utilisé pour l'état du formulaire) */
  name: string
  /** État coché/décoché */
  checked: boolean
  /** Handler de changement */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Label affiché à côté du checkbox (peut contenir du JSX) */
  label: React.ReactNode
  /** Message d'erreur de validation */
  error?: string
  /** Champ requis */
  required?: boolean
}

/**
 * Composant de checkbox avec gestion d'erreurs
 *
 * Checkbox accessible avec label flexible (texte ou JSX), états d'erreur,
 * et styles cohérents. Layout flex avec checkbox à gauche et label à droite.
 *
 * @param props - Props du composant
 * @returns Checkbox de formulaire stylisé
 */
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
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`mt-1 h-4 w-4 text-primary rounded focus:ring-2 focus:ring-primary ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <label htmlFor={id} className="text-sm text-gray-700 leading-relaxed">
          {label} {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
