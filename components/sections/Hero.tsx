import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Mail, Shield, Clock, Star, Heart } from 'lucide-react'
import LanguageBadges from '@/components/ui/LanguageBadges'

/**
 * Section Hero de la page d'accueil
 *
 * Affiche la bannière principale avec :
 * - Badges de langues parlées
 * - Zone d'intervention géographique
 * - Titre principal et sous-titre
 * - Texte de présentation
 * - CTAs (Prendre RDV, Contact)
 * - Points forts du cabinet (confiance, expertise, etc.)
 * - Image professionnelle avec ombre
 *
 * @returns Composant section hero
 */
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
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="btn-primary text-center text-lg px-10 py-5 shadow-lg hover:shadow-xl">
                <Calendar className="inline h-5 w-5 mr-2" />
                Prendre RDV
              </Link>
              <Link href="/contact" className="btn-outline text-center">
                <Mail className="inline h-4 w-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
          
          {/* Professional photo */}
          <div className="animate-on-scroll">
            <div className="relative max-w-md mx-auto">
              {/* Main photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/rayssa-hero.jpg"
                  alt="Rayssa Harmes - Avocate au Barreau de Strasbourg"
                  width={448}
                  height={500}
                  className="w-full h-auto object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0+iiigD//2Q=="
                />
              </div>

              {/* Credentials badge - floating over photo */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-primary">
                    Barreau de Strasbourg
                  </span>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Avocate depuis 2024
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