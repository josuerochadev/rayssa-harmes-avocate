import TestimonialCard from '@/components/ui/TestimonialCard'
import CaseStudyItem from '@/components/ui/CaseStudyItem'
import Link from 'next/link'
import { Star, Users, ArrowRight, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'
import { testimonials } from '@/data/testimonials'
import { caseStudies } from '@/data/caseStudies'

export const metadata: Metadata = {
  title: 'Témoignages Clients - Avocat Strasbourg | Avis et Cas de Succès',
  description: 'Découvrez les témoignages de mes clients et mes cas de succès. Avis authentiques sur mon accompagnement juridique à Strasbourg.',
  keywords: 'témoignages avocat Strasbourg, avis clients, cas succès, satisfaction clients, résultats juridiques',
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-primary p-4 rounded-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="mb-6">
              <span className="block text-primary">Témoignages & Cas de Succès</span>
              <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                La satisfaction de mes clients, ma priorité
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Découvrez les témoignages authentiques de mes clients et mes cas de succès. 
              Leur confiance et leur satisfaction guident mon engagement quotidien 
              à vos côtés.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-accent" />
                <span>Satisfaction clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-accent" />
                <span>Accompagnement personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Ce que disent mes clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Témoignages authentiques de clients accompagnés dans leurs démarches juridiques, 
              illustrant mon engagement à leurs côtés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                caseType={testimonial.caseType}
                location={testimonial.location}
                className="animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Case studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Cas de succès</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exemples concrets de dossiers traités avec succès, illustrant mon approche 
              et les résultats obtenus pour mes clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyItem
                key={index}
                title={caseStudy.title}
                problem={caseStudy.problem}
                approach={caseStudy.approach}
                result={caseStudy.result}
                className="animate-on-scroll"
              />
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-button p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-slab font-semibold text-lg text-yellow-800 mb-3">
                  Avertissement important
                </h3>
                <p className="text-yellow-800 leading-relaxed">
                  <strong>Les résultats passés ne préjugent pas des résultats futurs.</strong> Chaque 
                  situation juridique est unique et nécessite une analyse spécifique. Les cas de succès 
                  présentés sont des exemples réels mais ne garantissent pas un résultat identique 
                  pour d&apos;autres dossiers similaires. Toute évaluation de vos chances de succès 
                  ne pourra être donnée qu&apos;après étude approfondie de votre dossier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Prêt(e) à rejoindre mes clients satisfaits ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi pour bénéficier du même niveau d&apos;accompagnement et d&apos;expertise. 
            Votre satisfaction est mon engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-button font-medium hover:bg-gray-100 transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/domaines" className="border-2 border-white text-white px-8 py-4 rounded-button font-medium hover:bg-white hover:text-primary transition-colors">
              Voir mes domaines d&apos;intervention
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}