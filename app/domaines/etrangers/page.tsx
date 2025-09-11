import Link from 'next/link'
import { Users, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avocat en Droit des Étrangers à Strasbourg | Titres de Séjour, Naturalisation',
  description: 'Avocat spécialisé en droit des étrangers à Strasbourg. Titres de séjour, naturalisation, regroupement familial. Accompagnement personnalisé.',
  keywords: 'avocat droit étrangers Strasbourg, titre séjour, naturalisation, visa, regroupement familial, immigration',
}

const casesHandled = [
  'Demandes de titres de séjour et renouvellements',
  'Cartes de séjour temporaire et pluriannuelle',
  'Naturalisation française et acquisition nationalité',
  'Regroupement familial et visa famille',
  'Contestation d\'obligations de quitter le territoire',
  'Recours contre refus de visa',
  'Demandes d\'asile et protection subsidiaire',
  'Cartes de séjour UE longue durée',
  'Titres de séjour étudiant et professionnel',
  'Accès à la nationalité par mariage',
]

const processSteps = [
  {
    number: 1,
    title: 'Analyse du dossier',
    description: 'Étude complète de votre situation administrative et de vos droits au séjour.',
  },
  {
    number: 2,
    title: 'Constitution du dossier',
    description: 'Préparation méticuleuse des documents nécessaires et rédaction des courriers.',
  },
  {
    number: 3,
    title: 'Procédures administratives',
    description: 'Accompagnement dans vos démarches auprès des préfectures et consulats.',
  },
  {
    number: 4,
    title: 'Suivi et recours',
    description: 'Surveillance des délais et exercice des recours en cas de décision défavorable.',
  },
]

export default function EtrangersPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Droit des étrangers
                </div>
              </div>
              
              <h1 className="mb-6">
                <span className="block text-primary">Avocat en Droit des Étrangers</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                  à Strasbourg
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Titres de séjour, naturalisation, regroupement familial. 
                Accompagnement expert dans toutes vos démarches d&apos;immigration 
                et de séjour en France avec suivi personnalisé.
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
                  <Users className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                    Expertise Spécialisée
                  </h3>
                  <p className="text-gray-600">
                    Maîtrise des procédures administratives 
                    et connaissance approfondie du droit des étrangers
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
            <h2 className="mb-8">Votre partenaire pour vos démarches d&apos;immigration</h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le droit des étrangers est un domaine juridique complexe, en constante évolution, 
                qui nécessite une expertise spécialisée et une parfaite connaissance des 
                procédures administratives. Que vous souhaitiez obtenir un titre de séjour, 
                renouveler votre carte de séjour, ou entamer une procédure de naturalisation, 
                chaque situation requiert un accompagnement personnalisé.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre cabinet vous accompagne dans toutes vos démarches d&apos;immigration et 
                de séjour en France. Nous mettons notre expertise au service de vos projets 
                de vie, que vous soyez étudiant, travailleur, conjoint de français ou que 
                vous souhaitiez vous installer durablement en France.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Face à la complexité administrative et aux enjeux importants de ces procédures, 
                nous vous offrons un accompagnement rigoureux, des conseils avisés et une 
                défense efficace de vos droits.
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
              Notre expertise couvre tous les aspects du droit des étrangers, 
              des premières démarches aux recours contentieux.
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
            <h2 className="mb-6">Notre méthode d&apos;accompagnement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une approche méthodique et rigoureuse pour maximiser 
              vos chances de succès dans vos démarches.
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
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-slab font-semibold text-lg text-blue-800 mb-3">
                  Importance des délais
                </h3>
                <p className="text-blue-800 leading-relaxed mb-4">
                  En droit des étrangers, le respect des délais est crucial. Les demandes de 
                  renouvellement doivent être déposées dans les temps, et les recours contre 
                  les décisions défavorables sont soumis à des délais stricts.
                </p>
                <p className="text-blue-800 leading-relaxed">
                  N&apos;attendez pas la dernière minute pour nous consulter. Plus nous 
                  intervenons tôt dans votre dossier, meilleures sont vos chances de succès.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Besoin d&apos;aide pour vos démarches ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour un entretien personnalisé. Nous analyserons 
            votre situation et vous proposerons la stratégie la plus adaptée.
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