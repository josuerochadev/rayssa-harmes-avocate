import Link from 'next/link'
import { Briefcase, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'
import { generateDomainMetadata, generateDomainJsonLd } from '@/lib/metadata'

export const metadata: Metadata = generateDomainMetadata({
  title: 'Avocat en Droit du Travail à Strasbourg | Licenciement, Harcèlement, Prud\'hommes',
  description: 'Avocat spécialisé en droit du travail à Strasbourg. Licenciement, harcèlement, prud\'hommes, rupture conventionnelle. Défense de vos droits.',
  keywords: 'avocat droit travail Strasbourg, licenciement, harcèlement, prud\'hommes, rupture conventionnelle, contrat travail',
  domain: 'travail',
})

const jsonLd = generateDomainJsonLd({
  name: 'Droit du Travail',
  description: 'Services juridiques en droit du travail : licenciement, harcèlement, prud\'hommes, rupture conventionnelle.',
  url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rayssa-harmes-avocate.fr'}/domaines/travail`,
  serviceType: 'Droit du Travail',
})

const casesHandled = [
  'Contentieux devant le conseil de prud\'hommes (CPH)',
  'Licenciement abusif ou sans cause réelle et sérieuse',
  'Harcèlement moral ou sexuel',
  'Contestation d\'heures supplémentaires non payées',
  'Rupture conventionnelle ou autres modes de rupture du contrat de travail',
  'Discrimination et égalité professionnelle',
  'Accident du travail et maladie professionnelle',
]

const examples = [
  {
    title: 'Licenciement sans motif',
    description: 'Défense d\'un salarié licencié sans motif valable.',
  },
  {
    title: 'Procédure disciplinaire',
    description: 'Accompagnement d\'une entreprise dans une procédure disciplinaire.',
  },
]

const processSteps = [
  {
    number: 1,
    title: 'Phase de conciliation',
    description: 'Phase de conciliation obligatoire devant le conseil de prud\'hommes.',
  },
  {
    number: 2,
    title: 'Audience de jugement',
    description: 'Si échec, audience de jugement et plaidoirie devant la formation paritaire.',
  },
]

export default function TravailPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Droit du travail
                </div>
              </div>
              
              <h1 className="mb-6">
                <span className="block text-primary">Avocat en Droit du Travail</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                  à Strasbourg
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Licenciement, harcèlement, prud&apos;hommes, rupture conventionnelle. 
                Défense efficace de vos droits de salarié avec expertise 
                approfondie du droit social et accompagnement personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="btn-primary text-center">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Consultation
                </Link>
                <Link href="/contact" className="btn-outline text-center">
                  <Mail className="inline h-4 w-4 mr-2" />
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bg-secondary p-8 rounded-2xl">
                <div className="text-center">
                  <Briefcase className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                    Protection des Salariés
                  </h3>
                  <p className="text-gray-600">
                    Défense experte de vos droits professionnels 
                    et accompagnement dans tous vos conflits du travail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Intro section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Votre défense dans les conflits du travail</h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le droit du travail protège les salariés dans leurs relations avec leur 
                employeur, mais ces droits ne sont pas toujours respectés. Licenciement 
                abusif, harcèlement, discrimination, non-paiement d&apos;heures supplémentaires : 
                les situations conflictuelles au travail nécessitent une expertise juridique 
                spécialisée pour faire valoir vos droits.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Je vous accompagne dans tous vos conflits du travail, que vous 
                soyez salarié du secteur privé ou public. Je mets mon expertise du 
                droit social au service de la défense de vos intérêts professionnels et 
                personnels, avec une approche à la fois ferme et pragmatique.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Face à la complexité du droit du travail et aux enjeux financiers et 
                humains importants, je vous offre un accompagnement personnalisé, 
                des conseils stratégiques et une défense efficace devant les prud&apos;hommes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cases handled */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-6">Domaines d&apos;intervention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mon expertise couvre tous les aspects du droit du travail, 
              de la prévention des conflits à leur résolution judiciaire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {casesHandled.map((case_, index) => (
              <div key={index} className="flex items-start space-x-3 animate-on-scroll">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{case_}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Examples section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-6">Exemples concrets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des situations réelles que je traite au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg animate-on-scroll">
                <h3 className="font-slab font-semibold text-lg text-primary mb-3">
                  {example.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {example.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="mb-6">Procédure type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une stratégie adaptée à chaque situation pour obtenir
              la meilleure issue possible à votre conflit du travail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step) => (
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
      
      {/* Important notice */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-slab font-semibold text-lg text-blue-800 mb-3">
                  Délais de prescription importants
                </h3>
                <p className="text-blue-800 leading-relaxed mb-4">
                  En droit du travail, de nombreuses actions sont soumises à des délais de 
                  prescription courts. Pour contester un licenciement ou réclamer des 
                  heures supplémentaires, il est essentiel d&apos;agir rapidement.
                </p>
                <p className="text-blue-800 leading-relaxed">
                  Dès que vous rencontrez des difficultés au travail, n&apos;hésitez pas à 
                  me consulter pour préserver vos droits et évaluer vos options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Problème au travail ? Faites valoir vos droits</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi pour un entretien confidentiel. J&apos;évaluerai 
            votre situation et vous conseillerai sur la meilleure marche à suivre.
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