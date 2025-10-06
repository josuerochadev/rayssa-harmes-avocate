import DomainCard from '@/components/ui/DomainCard'
import Link from 'next/link'
import {
  Scale,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import type { Metadata } from 'next'
import { domains, processSteps } from '@/data/domains'

export const metadata: Metadata = {
  title: 'Domaines d\'intervention - Avocat Strasbourg | Contrats, Famille, Étrangers, Travail, Immobilier',
  description: 'Découvrez tous mes domaines d\'intervention : droit des contrats, famille, étrangers, travail et immobilier. Conseil et contentieux à Strasbourg.',
  keywords: 'domaines intervention avocat, droit contrats, droit famille, droit étrangers, droit travail, droit immobilier, Strasbourg',
}

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
            pour échanger sur votre dossier.
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