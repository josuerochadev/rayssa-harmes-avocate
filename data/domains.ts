import {
  FileText,
  Heart,
  Globe,
  Briefcase,
  Home,
  LucideIcon
} from 'lucide-react'

/**
 * Type pour un domaine d'intervention juridique
 */
export interface Domain {
  /** Titre du domaine */
  title: string
  /** Description courte du domaine */
  description: string
  /** URL vers la page de détail */
  href: string
  /** Icône Lucide représentant le domaine */
  icon: LucideIcon
  /** Points clés / services proposés */
  highlights: string[]
}

/**
 * Liste complète des domaines d'intervention juridique
 *
 * Tableau des domaines affichés sur la page d'accueil et la page /domaines.
 * Chaque domaine a sa propre page de détail avec contenu approfondi.
 */
export const domains: Domain[] = [
  {
    title: 'Droit des étrangers',
    description: 'Titres de séjour, naturalisation, regroupement familial. Défense de vos droits dans vos démarches administratives et accompagnement dans tous vos recours.',
    href: '/domaines/etrangers',
    icon: Globe,
    highlights: [
      'Titres de séjour et renouvellements',
      'Procédures de naturalisation',
      'Regroupement familial',
      'Recours contre les décisions préfectorales'
    ]
  },
  {
    title: 'Droit de la famille',
    description: 'Divorce, séparation, garde d\'enfants. Accompagnement humain et juridique dans les moments difficiles de votre vie familiale avec écoute et bienveillance.',
    href: '/domaines/famille',
    icon: Heart,
    highlights: [
      'Procédures de divorce et séparation',
      'Garde d\'enfants et pension alimentaire',
      'Violence conjugale et mesures de protection'
    ]
  },
  {
    title: 'Droit du travail',
    description: 'Licenciement, harcèlement, discrimination, rupture conventionnelle. Protection efficace de vos droits de salarié et conseil stratégique aux employeurs.',
    href: '/domaines/travail',
    icon: Briefcase,
    highlights: [
      'Contentieux prud\'homal',
      'Négociation de ruptures conventionnelles',
      'Harcèlement et discrimination',
      'Conseil en droit social'
    ]
  },
  {
    title: 'Droit immobilier',
    description: 'Achat, vente, locations, copropriété. Sécurisation complète de vos projets immobiliers et résolution efficace des conflits de voisinage.',
    href: '/domaines/immobilier',
    icon: Home,
    highlights: [
      'Transactions immobilières',
      'Litiges locatifs et de copropriété',
      'Conflits de voisinage'
    ]
  },
  {
    title: 'Droit des contrats',
    description: 'Rédaction, négociation et contentieux contractuel. Conseils pour sécuriser vos relations d\'affaires, rédiger vos contrats et résoudre vos litiges commerciaux avec efficacité.',
    href: '/domaines/contrats',
    icon: FileText,
    highlights: [
      'Rédaction et négociation de contrats',
      'Contentieux commercial et civil',
      'Recouvrement de créances',
      'Conseil en droit des affaires'
    ]
  },
]

/**
 * Processus d'accompagnement juridique
 */
export interface ProcessStep {
  number: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Premier contact',
    description: 'Prise de contact rapide pour cerner votre situation et vos besoins spécifiques.',
  },
  {
    number: 2,
    title: 'Analyse juridique',
    description: 'Étude approfondie de votre dossier et analyse des options disponibles.',
  },
  {
    number: 3,
    title: 'Stratégie personnalisée',
    description: 'Élaboration d\'une stratégie adaptée à votre situation et vos objectifs.',
  },
  {
    number: 4,
    title: 'Accompagnement & suivi',
    description: 'Mise en œuvre et suivi régulier avec points d\'étape et ajustements.',
  },
]
