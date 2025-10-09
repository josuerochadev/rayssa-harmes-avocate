/**
 * Type pour un item enfant de navigation (sous-menu)
 */
export interface NavigationChild {
  /** Nom affiché du lien */
  name: string
  /** URL de destination */
  href: string
}

/**
 * Type pour un item de navigation principal
 */
export interface NavigationItem {
  /** Nom affiché du lien */
  name: string
  /** URL de destination */
  href: string
  /** Items enfants optionnels (sous-menu dropdown) */
  children?: NavigationChild[]
}

/**
 * Configuration de la navigation principale du site
 *
 * Tableau d'items de navigation utilisé par le Header pour générer
 * les menus desktop (avec dropdowns) et mobile.
 */
export const navigation: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  {
    name: 'Domaines d\'intervention',
    href: '/domaines',
    children: [
      { name: 'Droit des étrangers', href: '/domaines/etrangers' },
      { name: 'Droit de la famille', href: '/domaines/famille' },
      { name: 'Droit du travail', href: '/domaines/travail' },
      { name: 'Droit immobilier', href: '/domaines/immobilier' },
      { name: 'Droit des contrats', href: '/domaines/contrats' },
    ],
  },
  { name: 'Témoignages', href: '/témoignages' },
  { name: 'Honoraires', href: '/honoraires' },
  { name: 'Contact', href: '/contact' },
]
