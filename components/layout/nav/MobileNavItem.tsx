import Link from 'next/link'
import type { NavigationItem } from '@/data/navigation'

/**
 * Props pour le composant MobileNavItem
 */
interface MobileNavItemProps {
  /** Item de navigation avec nom, href et enfants optionnels */
  item: NavigationItem
  /** Fonction déterminant si un lien est actif */
  isActive: (href: string) => boolean
  /** Callback pour fermer le menu mobile */
  onClose: () => void
}

/**
 * Item de navigation pour le menu mobile
 *
 * Composant de navigation pour menu mobile gérant :
 * - Lien principal avec état actif
 * - Liste d'enfants affichée sous le lien parent si présents
 * - Fermeture automatique du menu au clic sur un lien
 *
 * @param props - Props du composant
 * @returns Item de navigation mobile
 */
export default function MobileNavItem({ item, isActive, onClose }: MobileNavItemProps) {
  return (
    <div>
      <Link
        href={item.href}
        className={`block py-2 font-medium transition-colors ${
          isActive(item.href) ? 'text-primary' : 'text-neutral-700 hover:text-accent'
        }`}
        onClick={onClose}
      >
        {item.name}
      </Link>
      {item.children && (
        <div className="ml-4 mt-2 space-y-2">
          {item.children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className={`block py-1 text-sm transition-colors ${
                isActive(child.href) ? 'text-primary' : 'text-neutral-600 hover:text-accent'
              }`}
              onClick={onClose}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
