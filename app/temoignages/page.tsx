import TestimonialCard from '@/components/ui/TestimonialCard'
import CaseStudyItem from '@/components/ui/CaseStudyItem'
import Link from 'next/link'
import { Star, Users, ArrowRight, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Témoignages Clients - Avocat Strasbourg | Avis et Cas de Succès',
  description: 'Découvrez les témoignages de mes clients et mes cas de succès. Avis authentiques sur mon accompagnement juridique à Strasbourg.',
  keywords: 'témoignages avocat Strasbourg, avis clients, cas succès, satisfaction clients, résultats juridiques',
}

const testimonials = [
  {
    quote: 'Maître [NOM] a su m\'accompagner avec professionnalisme et humanité dans une procédure de divorce complexe. Sa clarté d\'explication et sa réactivité m\'ont beaucoup aidée dans cette période difficile.',
    author: 'Mme M.',
    caseType: 'Droit de la famille',
    location: 'Strasbourg',
  },
  {
    quote: 'Grâce à ses conseils avisés, j\'ai pu régulariser ma situation administrative rapidement. Un vrai soulagement après des mois d\'incertitude. Je recommande vivement.',
    author: 'M. A.',
    caseType: 'Droit des étrangers',
    location: 'Haguenau',
  },
  {
    quote: 'Excellente négociation lors de ma rupture conventionnelle. J\'ai obtenu des conditions bien meilleures que ce qui était initialement proposé par mon employeur.',
    author: 'M. L.',
    caseType: 'Droit du travail',
    location: 'Strasbourg',
  },
  {
    quote: 'Accompagnement parfait pour l\'achat de notre maison. Tous les pièges ont été évités grâce à son expertise. Je suis aujourd\'hui propriétaire en toute sérénité.',
    author: 'M. et Mme D.',
    caseType: 'Droit immobilier',
    location: 'Schiltigheim',
  },
  {
    quote: 'Litige commercial résolu de manière très professionnelle. La stratégie mise en place a permis d\'obtenir gain de cause rapidement et efficacement.',
    author: 'Société X.',
    caseType: 'Droit des contrats',
    location: 'Strasbourg',
  },
  {
    quote: 'Merci pour votre aide dans ma procédure de naturalisation. Votre connaissance des rouages administratifs a fait la différence. Aujourd\'hui je suis français !',
    author: 'M. R.',
    caseType: 'Droit des étrangers',
    location: 'Sélestat',
  },
  {
    quote: 'Succession complexe réglée avec brio. Malgré les tensions familiales, vous avez trouvé une solution équitable pour tous. Un grand merci.',
    author: 'Famille T.',
    caseType: 'Droit de la famille',
    location: 'Strasbourg',
  },
  {
    quote: 'Défense exemplaire face au harcèlement que je subissais au travail. Résultat probant aux prud\'hommes. Je ne peux que vous recommander.',
    author: 'Mme K.',
    caseType: 'Droit du travail',
    location: 'Illkirch',
  },
]

const caseStudies = [
  {
    title: 'Litige commercial - Rupture abusive de contrat',
    problem: 'Un client entrepreneur avait vu son contrat de distribution résilié brutalement par son partenaire principal, mettant en péril la continuité de son activité.',
    approach: 'Analyse approfondie des clauses contractuelles, mise en demeure pour rupture abusive, puis assignation devant le tribunal commercial avec demandes de dommages-intérêts.',
    result: 'Obtention de 85 000€ de dommages-intérêts pour rupture abusive, permettant au client de redresser sa situation financière et de développer de nouveaux partenariats.',
  },
  {
    title: 'Droit de la famille - Garde d\'enfants internationale',
    problem: 'Divorce avec des enfants résidant à l\'étranger. Le parent français souhaitait obtenir un droit de visite élargi et le retour des enfants en France.',
    approach: 'Procédure coordonnée entre les juridictions française et étrangère, médiation familiale internationale, négociation d\'un accord parental équilibré.',
    result: 'Accord amiable permettant le retour des enfants en France avec garde alternée, préservant l\'intérêt supérieur de l\'enfant et les liens avec les deux parents.',
  },
  {
    title: 'Droit des étrangers - Régularisation complexe',
    problem: 'Situation administrative irrégulière de longue durée avec risque d\'OQTF (Obligation de Quitter le Territoire Français) pour une famille avec enfants scolarisés.',
    approach: 'Constitution d\'un dossier de régularisation sur la base de la vie privée et familiale, recours hiérarchique, puis recours contentieux devant le tribunal administratif.',
    result: 'Obtention d\'un titre de séjour "vie privée et familiale" pour toute la famille, régularisation définitive de leur situation en France.',
  },
  {
    title: 'Droit immobilier - Vice caché majeur',
    problem: 'Découverte de malfaçons importantes dans un logement récemment acheté, avec risque structurel et coûts de réparation évalués à 40 000€.',
    approach: 'Expertise technique contradictoire, négociation amiable avec les vendeurs et leur assurance, puis procédure judiciaire pour vice caché.',
    result: 'Résolution amiable avec prise en charge intégrale des travaux de réparation par l\'assurance décennale, évitant une procédure longue et coûteuse.',
  },
]

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
                style={{ animationDelay: `${index * 0.1}s` }}
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