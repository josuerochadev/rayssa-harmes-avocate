import { Quote } from 'lucide-react'

/**
 * Props pour le composant TestimonialCard
 */
interface TestimonialCardProps {
  /** Citation du témoignage client */
  quote: string
  /** Nom de l'auteur du témoignage */
  author: string
  /** Type de cas juridique traité */
  caseType: string
  /** Localisation du client */
  location: string
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Carte d'affichage d'un témoignage client
 *
 * Présente un témoignage de client avec citation, nom de l'auteur,
 * type de cas traité et localisation. Design avec icône de guillemet
 * en coin supérieur droit et footer séparé par bordure.
 *
 * @param props - Props du composant
 * @returns Composant carte de témoignage
 *
 * @example
 * ```tsx
 * <TestimonialCard
 *   quote="Maître Harmes a su gérer mon dossier avec professionnalisme"
 *   author="Marie L."
 *   caseType="Droit de la famille"
 *   location="Strasbourg"
 * />
 * ```
 */
export default function TestimonialCard({
  quote,
  author,
  caseType,
  location,
  className = ''
}: TestimonialCardProps) {
  return (
    <div className={`card p-6 relative animate-on-scroll ${className}`}>
      <div className="absolute top-4 right-4">
        <Quote className="h-8 w-8 text-secondary" />
      </div>
      
      <blockquote className="mb-6">
        <p className="text-gray-700 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      
      <footer className="border-t border-gray-100 pt-4">
        <div className="flex flex-col space-y-1">
          <cite className="font-medium text-primary not-italic">
            {author}
          </cite>
          <div className="text-sm text-gray-600">
            {caseType} • {location}
          </div>
        </div>
      </footer>
    </div>
  )
}