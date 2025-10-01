import Image from 'next/image'
import Link from 'next/link'
import { Scale, Award, Shield, Heart, Clock, Users, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos - Avocate à Strasbourg spécialisée en droit des contrats, famille, étrangers',
  description: 'Découvrez le parcours et les valeurs de votre avocate à Strasbourg. Expérience, rigueur et approche humaine au service de vos droits.',
  keywords: 'avocat Strasbourg, parcours, expérience, valeurs, barreau Strasbourg',
}

const values = [
  {
    icon: Heart,
    title: 'Écoute & Bienveillance',
    description: 'Chaque situation est unique. Je prends le temps de comprendre vos préoccupations et vos objectifs avec empathie et respect.',
  },
  {
    icon: Shield,
    title: 'Sérieux & Rigueur',
    description: 'Formation juridique solide et approche méthodique pour vous offrir les conseils les plus fiables et pertinents.',
  },
  {
    icon: Clock,
    title: 'Réactivité & Disponibilité',
    description: 'Réponse rapide à vos sollicitations et disponibilité pour les situations nécessitant une intervention urgente.',
  },
  {
    icon: Users,
    title: 'Pédagogie & Transparence',
    description: 'Explications claires et accessibles du droit. Communication transparente sur les procédures, les coûts et les délais.',
  },
]

const commitments = [
  'Confidentialité absolue de vos informations',
  'Respect scrupuleux des délais',
  'Transparence totale sur les honoraires',
  'Accompagnement personnalisé',
  'Disponibilité et réactivité',
  'Formation continue et veille juridique',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h1 className="mb-6">
                <span className="block text-primary">À propos</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                  Votre avocate à Strasbourg
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Avocate passionnée et à l&apos;écoute, j&apos;accompagne particuliers et entreprises
                dans leurs démarches en droit des étrangers, de la famille, du travail,
                de l&apos;immobilier, du pénal et du droit des sociétés. Mon parcours international
                me permet d&apos;offrir une approche ouverte, sensible et adaptée à chaque histoire.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-slab font-semibold text-lg text-primary">
                    Rayssa Harmes
                  </div>
                  <div className="text-gray-600">
                    Avocate au Barreau de Strasbourg
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                <Award className="h-4 w-4 text-accent" />
                <span>Serment prêté en 2024 • Avocate inscrite au Barreau de Strasbourg</span>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              {/* Professional photo placeholder */}
              <div className="bg-secondary rounded-2xl p-8">
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Photo professionnelle
                      <br />
                      à remplacer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parcours section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Mon parcours</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Diplômée en droit, j&apos;ai prêté serment au Barreau de Strasbourg.
                Mon parcours m&apos;a menée à me spécialiser dans plusieurs domaines du droit
                qui touchent directement la vie quotidienne de mes clients : droit des étrangers,
                droit de la famille, droit du travail, droit immobilier, droit pénal et droit des sociétés.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                J&apos;ai développé une approche pragmatique du droit, alliant rigueur juridique
                et compréhension des enjeux humains et économiques de chaque dossier. Ma pratique
                couvre aussi bien le conseil préventif que la défense contentieuse, toujours avec
                la même attention portée à votre situation personnelle.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Multilingue (français, portugais, anglais, espagnol), je peux accompagner
                une clientèle internationale et faciliter les échanges dans des dossiers
                transfrontaliers, particulièrement fréquents dans la région strasbourgeoise.
                Mon parcours international enrichit mon approche et me permet d&apos;être sensible
                aux différences culturelles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll">
                <h3 className="font-slab font-semibold text-lg text-primary mb-4">
                  Formation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Master 2 Droit de l&apos;Homme - Université de Strasbourg (2020-2021)</li>
                  <li>• DSU Droit international public - Panthéon-Assas (2022-2023)</li>
                  <li>• DU Clinique des droits de l&apos;homme - Strasbourg (2021-2023)</li>
                  <li>• Licence en droit - Brésil (2014-2019)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll">
                <h3 className="font-slab font-semibold text-lg text-primary mb-4">
                  Engagements
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Membre du Barreau de Strasbourg</li>
                  <li>• Respect du code de déontologie</li>
                  <li>• Formation continue obligatoire</li>
                  <li>• Assurance responsabilité civile professionnelle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Mes valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              L&apos;exercice de la profession d&apos;avocat repose sur des valeurs fondamentales 
              que je place au cœur de ma pratique quotidienne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-8 rounded-lg card animate-on-scroll">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-lg text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commitments section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Mes engagements</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                En me choisissant, vous bénéficiez de garanties claires
                pour un accompagnement juridique de qualité.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center space-x-3 animate-on-scroll">
                  <div className="bg-primary p-1 rounded-full flex-shrink-0">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Prêt(e) à faire valoir vos droits ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi pour un premier échange gratuit et confidentiel. 
            Ensemble, nous trouverons la meilleure stratégie pour votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-button font-medium hover:bg-gray-100 transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/domaines" className="border-2 border-white text-white px-8 py-4 rounded-button font-medium hover:bg-white hover:text-primary transition-colors">
              Voir mes domaines
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}