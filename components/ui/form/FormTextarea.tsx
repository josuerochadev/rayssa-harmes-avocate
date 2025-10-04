/**
 * Props pour le composant FormTextarea
 */
interface FormTextareaProps {
  /** ID unique du champ */
  id: string
  /** Nom du champ (utilisé pour l'état du formulaire) */
  name: string
  /** Label affiché au-dessus du textarea */
  label: string
  /** Valeur actuelle du champ */
  value: string
  /** Handler de changement */
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Message d'erreur de validation */
  error?: string
  /** Champ requis (affiche *) */
  required?: boolean
  /** Texte de placeholder */
  placeholder?: string
  /** Nombre de lignes visibles (défaut: 6) */
  rows?: number
}

/**
 * Composant de textarea avec gestion d'erreurs
 *
 * Textarea accessible avec label, états d'erreur, redimensionnement vertical,
 * et styles cohérents. Utilise aria-invalid et aria-describedby.
 *
 * @param props - Props du composant
 * @returns Textarea de formulaire stylisé
 */
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
