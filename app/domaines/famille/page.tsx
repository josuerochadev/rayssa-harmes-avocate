import Link from 'next/link'
import { Heart, ArrowRight, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avocat en Droit de la Famille à Strasbourg | Divorce, Garde d\'Enfants, Succession',
  description: 'Avocat spécialisé en droit de la famille à Strasbourg. Divorce, séparation, garde d\'enfants, succession. Accompagnement humain et juridique.',
  keywords: 'avocat droit famille Strasbourg, divorce, garde enfants, succession, pension alimentaire, séparation',
}

const casesHandled = [
  'Divorce par consentement mutuel et contentieux',
  'Séparation de corps et de biens',
  'Garde d\'enfants et droit de visite',
  'Pension alimentaire et prestation compensatoire',
  'Successions et partages de biens',
  'Donations et testaments',
  'Adoption et filiation',
  'Protection des majeurs (tutelle, curatelle)',
  'Violence conjugale et ordonnances de protection',
  'Médiation familiale',
]

const processSteps = [
  {
    number: 1,
    title: 'Écoute et accueil',
    description: 'Accueil bienveillant pour comprendre votre situation familiale et vos préoccupations.',
  },
  {
    number: 2,
    title: 'Analyse juridique',
    description: 'Étude de vos droits, des procédures applicables et des solutions possibles.',
  },
  {
    number: 3,
    title: 'Stratégie personnalisée',
    description: 'Définition de la meilleure approche : négociation, médiation ou procédure contentieuse.',
  },
  {
    number: 4,
    title: 'Accompagnement continu',
    description: 'Suivi régulier et soutien tout au long de la procédure jusqu\'à sa conclusion.',
  },
]

export default function FamillePage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Droit de la famille
                </div>
              </div>
              
              <h1 className="mb-6">
                <span className="block text-primary">Avocat en Droit de la Famille</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                  à Strasbourg
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Divorce, séparation, garde d&apos;enfants, succession. Accompagnement 
                humain et juridique dans les moments difficiles de votre vie 
                familiale avec écoute, bienveillance et professionnalisme.
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
                  <Heart className="h-24 w-24 text-primary mx-auto mb-6" />
                  <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                    Approche Humaine
                  </h3>
                  <p className="text-gray-600">
                    Écoute, discrétion et accompagnement 
                    personnalisé dans vos épreuves familiales
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
            <h2 className="mb-8">Le droit de la famille avec humanité</h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-gray-700 leading-relaxed mb-6">
                Les affaires familiales touchent à l&apos;intime et nécessitent une approche 
                particulièrement humaine et bienveillante. Divorce, séparation, garde d&apos;enfants, 
                successions : ces moments difficiles de la vie requièrent un accompagnement 
                juridique expert mais aussi un soutien personnel adapté.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre cabinet privilégie l&apos;écoute, la discrétion et la recherche de solutions 
                apaisées. Nous mettons tout en œuvre pour préserver l&apos;intérêt des enfants 
                et maintenir le dialogue entre les parties, tout en défendant fermement 
                vos droits et vos intérêts.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Que vous traversiez une crise conjugale, que vous ayez des questions 
                successorales ou que vous cherchiez à protéger votre famille, nous vous 
                accompagnons avec professionnalisme et humanité à chaque étape.
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
              Notre expertise couvre tous les aspects du droit de la famille, 
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
      
      {/* Process section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Notre approche d&apos;accompagnement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une démarche respectueuse et bienveillante pour vous aider 
              à traverser cette période difficile avec sérénité.
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
                  L&apos;intérêt supérieur de l&apos;enfant
                </h3>
                <p className="text-blue-800 leading-relaxed mb-4">
                  Dans toutes les procédures impliquant des enfants mineurs, nous plaçons 
                  leur intérêt supérieur au centre de nos préoccupations. Notre objectif 
                  est de préserver leur équilibre et leurs liens familiaux autant que possible.
                </p>
                <p className="text-blue-800 leading-relaxed">
                  La médiation familiale peut souvent offrir des solutions plus apaisées 
                  que les procédures contentieuses. N&apos;hésitez pas à nous consulter pour 
                  explorer cette option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Besoin d&apos;aide pour votre situation familiale ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour un premier entretien confidentiel. Nous vous 
            écouterons avec bienveillance et vous proposerons les meilleures solutions.
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