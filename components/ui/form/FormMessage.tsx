/**
 * Props pour le composant FormMessage
 */
interface FormMessageProps {
  /** Type de message (success: vert, error: rouge) */
  type: 'success' | 'error'
  /** Titre du message */
  title: string
  /** Contenu du message (texte ou JSX) */
  message: string | React.ReactNode
}

/**
 * Composant de message de feedback pour formulaire
 *
 * Affiche un message de succès (vert) ou d'erreur (rouge) avec icône,
 * titre et contenu. Utilisé pour le feedback après soumission.
 *
 * @param props - Props du composant
 * @returns Message de feedback stylisé
 */
export default function FormMessage({ type, title, message }: FormMessageProps) {
  const styles = {
    success: {
      container: 'bg-green-50 border border-green-200',
      title: 'text-green-800',
      message: 'text-green-700',
      icon: '✅',
    },
    error: {
      container: 'bg-red-50 border border-red-200',
      title: 'text-red-800',
      message: 'text-red-700',
      icon: '❌',
    },
  }

  const style = styles[type]

  return (
    <div className={`${style.container} rounded-button p-4`}>
      <p className={`${style.title} font-medium mb-${type === 'success' ? '1' : '2'}`}>
        {style.icon} {title}
      </p>
      <p className={`${style.message} text-sm`}>{message}</p>
    </div>
  )
}
