import Link from 'next/link'
import type { NavigationItem } from '@/data/navigation'

interface MobileNavItemProps {
  item: NavigationItem
  isActive: (href: string) => boolean
  onClose: () => void
}

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
