import Hero from '@/components/sections/Hero'
import DomainCard from '@/components/ui/DomainCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import Link from 'next/link'
import { 
  FileText, 
  Heart, 
  Globe, 
  Briefcase, 
  Home,
  ArrowRight,
  Shield,
  Clock,
  Users
} from 'lucide-react'

const domains = [
  {
    title: 'Droit des contrats',
    description: 'Rédaction, négociation et contentieux contractuel. Conseils pour sécuriser vos relations d\'affaires et résoudre vos litiges commerciaux.',
    href: '/domaines/contrats',
    icon: FileText,
  },
  {
    title: 'Droit de la famille',
    description: 'Divorce, séparation, garde d\'enfants, succession. Accompagnement humain et juridique dans les moments difficiles de votre vie familiale.',
    href: '/domaines/famille',
    icon: Heart,
  },
  {
    title: 'Droit des étrangers',
    description: 'Titres de séjour, naturalisation, regroupement familial. Défense de vos droits dans vos démarches administratives et recours.',
    href: '/domaines/etrangers',
    icon: Globe,
  },
  {
    title: 'Droit du travail',
    description: 'Licenciement, harcèlement, discrimination, rupture conventionnelle. Protection de vos droits de salarié ou conseil aux employeurs.',
    href: '/domaines/travail',
    icon: Briefcase,
  },
  {
    title: 'Droit immobilier',
    description: 'Achat, vente, locations, copropriété, construction. Sécurisation de vos projets immobiliers et résolution des conflits de voisinage.',
    href: '/domaines/immobilier',
    icon: Home,
  },
]

const featuredTestimonials = [
  {
    quote: 'Maître Harmes a su m\'accompagner avec professionnalisme et humanité dans une procédure de divorce complexe. Sa clarté d\'explication et sa réactivité m\'ont beaucoup aidée.',
    author: 'Mme M.',
    caseType: 'Droit de la famille',
    location: 'Strasbourg',
  },
  {
    quote: 'Grâce à ses conseils avisés, j\'ai pu régulariser ma situation administrative rapidement. Un vrai soulagement après des mois d\'incertitude.',
    author: 'M. A.',
    caseType: 'Droit des étrangers',
    location: 'Haguenau',
  },
  {
    quote: 'Excellente négociation lors de ma rupture conventionnelle. J\'ai obtenu des conditions bien meilleures que ce qui était initialement proposé.',
    author: 'M. L.',
    caseType: 'Droit du travail',
    location: 'Strasbourg',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Why choose us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Pourquoi me choisir ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un accompagnement juridique de qualité avec des valeurs humaines fortes :
              transparence, écoute et engagement pour défendre vos intérêts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="bg-secondary p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                Expertise confirmée
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Formation solide et expérience pratique dans mes domaines de spécialisation.
                Veille juridique constante pour vous offrir les conseils les plus actuels.
              </p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="bg-secondary p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                Réactivité garantie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Réponse rapide à vos sollicitations, respect des délais et disponibilité 
                pour les situations d&apos;urgence. Votre temps est précieux.
              </p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="bg-secondary p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-slab font-semibold text-xl text-primary mb-4">
                Approche humaine
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Écoute attentive, explications claires et accompagnement personnalisé. 
                Le droit au service de l&apos;humain, pas l&apos;inverse.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Domains of intervention */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Domaines d&apos;intervention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une expertise pluridisciplinaire pour répondre à tous vos besoins juridiques, 
              en conseil comme en contentieux.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {domains.map((domain, index) => (
              <DomainCard
                key={domain.title}
                title={domain.title}
                description={domain.description}
                href={domain.href}
                icon={domain.icon}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/domaines" className="btn-outline">
              Voir tous mes domaines
              <ArrowRight className="inline ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Témoignages clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La confiance de nos clients est notre plus belle récompense. 
              Découvrez leurs témoignages sur notre accompagnement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                caseType={testimonial.caseType}
                location={testimonial.location}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/témoignages" className="btn-outline">
              Voir tous les témoignages
              <ArrowRight className="inline ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Besoin d&apos;un conseil juridique ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi dès aujourd&apos;hui pour un premier échange gratuit de 15 minutes.
            J&apos;étudierai votre situation et vous proposerai les meilleures solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-button font-medium hover:bg-gray-100 transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-button font-medium hover:bg-white hover:text-primary transition-colors">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}