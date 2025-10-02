import DomainCard from '@/components/ui/DomainCard'
import Link from 'next/link'
import { 
  FileText, 
  Heart, 
  Globe, 
  Briefcase, 
  Home,
  Scale,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domaines d\'intervention - Avocat Strasbourg | Contrats, Famille, Étrangers, Travail, Immobilier',
  description: 'Découvrez tous mes domaines d\'intervention : droit des contrats, famille, étrangers, travail et immobilier. Conseil et contentieux à Strasbourg.',
  keywords: 'domaines intervention avocat, droit contrats, droit famille, droit étrangers, droit travail, droit immobilier, Strasbourg',
}

const domains = [
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
  {
    title: 'Droit de la famille',
    description: 'Divorce, séparation, garde d\'enfants, succession. Accompagnement humain et juridique dans les moments difficiles de votre vie familiale avec écoute et bienveillance.',
    href: '/domaines/famille',
    icon: Heart,
    highlights: [
      'Procédures de divorce et séparation',
      'Garde d\'enfants et pension alimentaire',
      'Successions et donations',
      'Violence conjugale et mesures de protection'
    ]
  },
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
    description: 'Achat, vente, locations, copropriété, construction. Sécurisation complète de vos projets immobiliers et résolution efficace des conflits de voisinage.',
    href: '/domaines/immobilier',
    icon: Home,
    highlights: [
      'Transactions immobilières',
      'Litiges locatifs et de copropriété',
      'Droit de la construction',
      'Conflits de voisinage'
    ]
  },
]

const processSteps = [
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

export default function DomainsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-primary p-4 rounded-xl">
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="mb-6">
              <span className="block text-primary">Domaines d&apos;intervention</span>
              <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                Une expertise juridique complète à votre service
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Du conseil préventif au contentieux, je vous accompagne 
              dans tous vos besoins juridiques avec rigueur, réactivité et humanité. 
              Découvrez mes domaines d&apos;expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Domains grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <div key={domain.title} className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-secondary p-3 rounded-lg">
                      <domain.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-slab font-semibold text-2xl text-primary">
                      {domain.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {domain.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Points clés :</h3>
                    <ul className="space-y-2">
                      {domain.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={domain.href}
                    className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Mon processus d&apos;accompagnement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une méthode éprouvée pour vous garantir un service de qualité, 
              quelle que soit la complexité de votre dossier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="text-center animate-on-scroll">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-slab font-semibold text-lg text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Une question juridique ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            N&apos;attendez pas que la situation se complique. Contactez-moi dès maintenant 
            pour un premier échange gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-button font-medium hover:bg-gray-100 transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/honoraires" className="border-2 border-white text-white px-8 py-4 rounded-button font-medium hover:bg-white hover:text-primary transition-colors">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}