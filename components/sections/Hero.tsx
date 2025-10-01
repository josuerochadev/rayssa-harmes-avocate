import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Mail, Shield, Clock, Users, Star, Heart } from 'lucide-react'
import LanguageBadges from '@/components/ui/LanguageBadges'

export default function Hero() {
  return (
    <section className="relative section-hero geometric-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <LanguageBadges className="mb-4" />
              <div className="text-sm text-gray-600 font-medium">
                Zone d&apos;intervention : Strasbourg, Eurométropole, Schiltigheim, Illkirch-Graffenstaden, Nancy, Grand Est
              </div>
            </div>
            
            <h1 className="mb-6 animate-fade-in">
              <span className="block text-primary">Rayssa Harmes - Avocate à Strasbourg</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-700 mt-2">
                Particuliers • Entreprises
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Avocate passionnée et à l&apos;écoute, j&apos;accompagne particuliers et entreprises
              dans leurs démarches juridiques. Mon parcours international me permet d&apos;offrir
              une approche ouverte, sensible et adaptée à chaque histoire.
            </p>
            
            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Heart className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Écoute & bienveillance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Réactivité</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Sérieux & pédagogie</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                <Calendar className="inline h-4 w-4 mr-2" />
                Prendre RDV
              </Link>
              <Link href="/contact" className="btn-outline text-center">
                <Mail className="inline h-4 w-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
          
          {/* Professional photo placeholder */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                {/* Placeholder for professional photo */}
                <div className="w-64 h-80 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-sm">
                      Photo professionnelle
                      <br />
                      à remplacer
                    </p>
                  </div>
                </div>
                
                {/* Credentials */}
                <div className="mt-6 space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-cream px-4 py-2 rounded-full shadow-sm">
                    <Star className="h-4 w-4 text-green-accent" />
                    <span className="text-sm font-medium text-green-primary">
                      Barreau de Strasbourg
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Avocate depuis 2024
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15min</div>
                  <div className="text-xs text-gray-600">Appel gratuit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}