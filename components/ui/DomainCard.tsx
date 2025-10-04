import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

/**
 * Props pour le composant DomainCard
 */
interface DomainCardProps {
  /** Titre du domaine d'intervention (ex: "Droit de la Famille") */
  title: string
  /** Description courte du domaine */
  description: string
  /** URL vers la page de détail du domaine */
  href: string
  /** Icône Lucide à afficher */
  icon: LucideIcon
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Carte interactive de présentation d'un domaine d'intervention juridique
 *
 * Affiche un domaine avec son icône, titre et description. La carte est cliquable
 * et redirige vers la page de détail. Animations au hover pour feedback visuel.
 *
 * @param props - Props du composant
 * @returns Composant carte de domaine
 *
 * @example
 * ```tsx
 * import { Scale } from 'lucide-react'
 *
 * <DomainCard
 *   title="Droit des contrats"
 *   description="Rédaction, négociation et contentieux contractuel"
 *   href="/domaines/contrats"
 *   icon={Scale}
 * />
 * ```
 */
export default function DomainCard({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  className = '' 
}: DomainCardProps) {
  return (
    <Link href={href} className={`group ${className}`}>
      <div className="card p-8 h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-accent-light/20 p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-slab font-semibold text-xl text-primary group-hover:text-primary-dark transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-neutral-600 flex-grow leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex items-center text-primary group-hover:text-accent transition-colors font-medium">
            <span>En savoir plus</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}