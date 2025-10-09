import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import type { NavigationItem } from '@/data/navigation'

/**
 * Props pour le composant DesktopNavItem
 */
interface DesktopNavItemProps {
  /** Item de navigation avec nom, href et enfants optionnels */
  item: NavigationItem
  /** Fonction déterminant si un lien est actif */
  isActive: (href: string) => boolean
}

/**
 * Item de navigation pour le menu desktop avec dropdown
 *
 * Composant de navigation pour header desktop gérant :
 * - Lien principal avec état actif
 * - Dropdown au hover si l'item a des enfants
 * - Icône ChevronDown avec rotation au hover
 * - Animation de fade-in et slide-up pour le dropdown
 *
 * @param props - Props du composant
 * @returns Item de navigation desktop
 */
export default function DesktopNavItem({ item, isActive }: DesktopNavItemProps) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 whitespace-nowrap ${
          isActive(item.href) ? 'text-primary' : 'text-neutral-700'
        }`}
      >
        {item.name}
        {item.children && (
          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
        )}
      </Link>
      {item.children && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
          <div className="py-2">
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                className={`block px-4 py-2 text-sm transition-colors hover:bg-secondary hover:text-primary ${
                  isActive(child.href) ? 'text-primary bg-secondary' : 'text-neutral-700'
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
