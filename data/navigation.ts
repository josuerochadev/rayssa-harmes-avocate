export interface NavigationChild {
  name: string
  href: string
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationChild[]
}

/**
 * Configuration de la navigation principale du site
 */
export const navigation: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  {
    name: 'Domaines d\'intervention',
    href: '/domaines',
    children: [
      { name: 'Droit des contrats', href: '/domaines/contrats' },
      { name: 'Droit de la famille', href: '/domaines/famille' },
      { name: 'Droit des étrangers', href: '/domaines/etrangers' },
      { name: 'Droit du travail', href: '/domaines/travail' },
      { name: 'Droit immobilier', href: '/domaines/immobilier' },
    ],
  },
  { name: 'Témoignages', href: '/témoignages' },
  { name: 'Honoraires', href: '/honoraires' },
  { name: 'Contact', href: '/contact' },
]
