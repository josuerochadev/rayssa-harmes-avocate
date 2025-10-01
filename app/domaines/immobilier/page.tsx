import Link from 'next/link'
import { Home, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avocat en Droit Immobilier à Strasbourg | Vente, Achat, Contentieux Immobilier',
  description: 'Avocat spécialisé en droit immobilier à Strasbourg. Vente, achat, contentieux, copropriété, bail. Sécurisation de vos transactions immobilières.',
  keywords: 'avocat droit immobilier Strasbourg, vente maison, achat appartement, contentieux immobilier, copropriété, bail',
}

const casesHandled = [
  'Litiges bailleurs / locataires (loyers impayés, charges, réparations, expulsion)',
  'Conflits de copropriété et troubles de voisinage',
  'Litiges liés à la vente ou l\'acquisition (vices cachés, promesse de vente, malfaçons)',
  'Baux d\'habitation et commerciaux',
  'Servitudes et mitoyenneté',
  'Droit de la construction',
  'Urbanisme et permis de construire',
]

const examples = [
  {
    title: 'Propriétaire vs locataire',
    description: 'Défense d\'un propriétaire face à un locataire en impayés.',
  },
  {
    title: 'Vice caché',
    description: 'Assistance d\'un acquéreur ayant découvert un vice caché après achat.',
  },
]

const processSteps = [
  {
    number: 1,
    title: 'Échanges amiables',
    description: 'Tentative de règlement amiable et mise en demeure.',
  },
  {
    number: 2,
    title: 'Saisine judiciaire',
    description: 'Si nécessaire, saisine du juge compétent (tribunal judiciaire, juge des contentieux de la protection).',
  },
]

export default function ImmobilierPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Droit immobilier
                </div>
              </div>
              
              <h1 className="mb-6">
                <span className="block text-primary">Avocat en Droit Immobilier</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                  à Strasbourg
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vente, achat, contentieux immobilier, copropriété, bail. 
                Sécurisation complète de vos transactions immobilières 
                avec expertise juridique et accompagnement personnalisé.
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
                  <Home className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                    Transactions Sécurisées
                  </h3>
                  <p className="text-gray-600">
                    Expertise complète pour tous vos projets immobiliers 
                    et résolution efficace de vos contentieux
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
            <h2 className="mb-8">Votre partenaire pour tous vos projets immobiliers</h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                L&apos;immobilier représente souvent l&apos;investissement le plus important 
                d&apos;une vie. Que vous achetiez votre résidence principale, vendiez un bien, 
                gériez une copropriété ou soyez confronté à un litige immobilier, chaque 
                situation nécessite une expertise juridique spécialisée pour sécuriser 
                vos intérêts et éviter les pièges.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre cabinet vous accompagne dans tous vos projets immobiliers, de la 
                simple transaction à la résolution des contentieux les plus complexes. 
                Nous mettons notre expertise du droit immobilier au service de la 
                protection de vos intérêts, avec une approche préventive et curative.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Face à la complexité croissante du marché immobilier et aux enjeux 
                financiers considérables, nous vous offrons une sécurisation juridique 
                complète, des conseils stratégiques et une défense efficace de vos droits.
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
              Mon expertise couvre tous les aspects du droit immobilier, 
              des transactions aux contentieux spécialisés.
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
              Des situations réelles que nous traitons au quotidien
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
              Une approche méthodique pour mener à bien
              tous vos projets immobiliers en toute sérénité.
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
                  L&apos;importance de l&apos;anticipation
                </h3>
                <p className="text-blue-800 leading-relaxed mb-4">
                  En matière immobilière, mieux vaut prévenir que guérir. Faire vérifier 
                  un contrat de vente, analyser un règlement de copropriété ou examiner 
                  les conditions d&apos;un bail peut vous éviter de lourdes conséquences.
                </p>
                <p className="text-blue-800 leading-relaxed">
                  N&apos;hésitez pas à nous consulter en amont de vos projets immobiliers. 
                  Un conseil préventif peut vous épargner des années de contentieux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Un projet immobilier ? Sécurisez-le</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour un entretien personnalisé. Nous analyserons 
            votre projet et vous proposerons les meilleures solutions juridiques.
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