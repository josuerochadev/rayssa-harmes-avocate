import Link from 'next/link'
import { FileText, ArrowRight, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avocat en Droit des Contrats à Strasbourg | Conseil & Contentieux Commercial',
  description: 'Avocat spécialisé en droit des contrats à Strasbourg. Rédaction, négociation, contentieux commercial et recouvrement de créances. Conseil personnalisé.',
  keywords: 'avocat droit contrats Strasbourg, contentieux commercial, rédaction contrats, recouvrement créances, droit affaires',
}

const casesHandled = [
  'Rédaction et négociation de contrats commerciaux',
  'Contrats de vente et de prestations de services',
  'Baux commerciaux et professionnels',
  'Contrats de partenariat et de distribution',
  'Contentieux contractuels et ruptures',
  'Recouvrement amiable et judiciaire de créances',
  'Garanties et responsabilités contractuelles',
  'Résolution de litiges commerciaux',
  'Conseil en droit des affaires',
  'Médiation et négociation commerciale',
]

const processSteps = [
  {
    number: 1,
    title: 'Prise de contact',
    description: 'Analyse de vos besoins contractuels et de votre contexte commercial.',
  },
  {
    number: 2,
    title: 'Analyse juridique',
    description: 'Étude des clauses, des risques juridiques et des enjeux commerciaux.',
  },
  {
    number: 3,
    title: 'Stratégie adaptée',
    description: 'Élaboration d\'une stratégie de négociation ou de résolution du litige.',
  },
  {
    number: 4,
    title: 'Suivi personnalisé',
    description: 'Accompagnement dans la mise en œuvre et suivi des résultats obtenus.',
  },
]

export default function ContractsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Droit des contrats
                </div>
              </div>
              
              <h1 className="mb-6">
                <span className="block text-primary">Avocat en Droit des Contrats</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                  à Strasbourg
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conseil, rédaction, négociation et contentieux contractuel. 
                Sécurisez vos relations d&apos;affaires et résolvez vos litiges 
                commerciaux avec une expertise juridique confirmée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <FileText className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                    Expertise Contractuelle
                  </h3>
                  <p className="text-gray-600">
                    Conseil préventif et défense contentieuse 
                    pour sécuriser vos relations commerciales
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
            <h2 className="mb-8">Le droit des contrats au service de votre entreprise</h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le droit des contrats constitue le socle de toute relation commerciale. 
                Qu&apos;il s&apos;agisse de conseil préventif pour sécuriser vos accords ou 
                de défense contentieuse pour faire valoir vos droits, notre expertise 
                vous accompagne à chaque étape.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                De la rédaction de contrats sur-mesure à la résolution de litiges complexes, 
                nous mettons notre connaissance approfondie du droit commercial et civil 
                au service de votre réussite. Notre approche pragmatique vise toujours 
                à trouver des solutions efficaces et économiquement viables.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Que vous soyez entrepreneur, dirigeant d&apos;entreprise ou particulier 
                engagé dans des relations contractuelles importantes, nous vous conseillons 
                et vous défendons avec rigueur et détermination.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cases handled */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-6">Cas traités</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre expertise couvre tous les aspects du droit contractuel, 
              du conseil préventif au contentieux le plus complexe.
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
      
      {/* Process section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre processus d&apos;accompagnement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une méthode éprouvée pour analyser votre situation contractuelle 
              et vous proposer les meilleures solutions juridiques.
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
      
      {/* Important notice */}
      <section className="section-padding bg-yellow-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-slab font-semibold text-lg text-yellow-800 mb-3">
                  L&apos;importance du conseil préventif
                </h3>
                <p className="text-yellow-800 leading-relaxed mb-4">
                  Un contrat bien rédigé en amont évite de nombreux litiges. N&apos;hésitez pas 
                  à nous consulter avant la signature de vos accords importants pour sécuriser 
                  vos intérêts et prévenir les conflits.
                </p>
                <p className="text-yellow-800 leading-relaxed">
                  En cas de litige existant, une intervention rapide permet souvent de 
                  trouver des solutions amiables plus économiques et plus rapides que 
                  les procédures contentieuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Un projet contractuel ou un litige ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour analyser votre situation et vous proposer 
            la stratégie juridique la plus adaptée à vos enjeux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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