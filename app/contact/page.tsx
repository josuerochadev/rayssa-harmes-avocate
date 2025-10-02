import ContactForm from '@/components/ui/ContactForm'
import CalendlyWidget from '@/components/ui/CalendlyWidget'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car,
  Train,
  Navigation
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Rendez-vous - Avocat Strasbourg | Consultation Juridique',
  description: 'Contactez votre avocat à Strasbourg. Prise de rendez-vous rapide, consultation gratuite 15min. Adresse, horaires, plan d\'accès.',
  keywords: 'contact avocat Strasbourg, rendez-vous, consultation juridique, adresse cabinet, horaires',
}

const contactInfo = {
  address: '24 avenue des Vosges',
  postalCode: '67000',
  city: 'Strasbourg',
  phone: '+33 7 45 04 83 95',
  email: 'harmes.avocat@gmail.com',
  hours: {
    weekdays: 'Lundi - Vendredi : 9h00 - 18h00',
    note: 'Sur rendez-vous uniquement',
  }
}

const accessInfo = [
  {
    icon: Car,
    title: 'En voiture',
    description: 'Parking gratuit à proximité • Accès facile depuis l\'A4 et A35',
  },
  {
    icon: Train,
    title: 'Transports en commun',
    description: 'Tram A, B, C, D • Lignes de bus • Strasbourg centre',
  },
  {
    icon: Navigation,
    title: 'À pied',
    description: 'Centre-ville accessible • Proche des institutions européennes',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-primary">Contact & Rendez-vous</span>
              <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                Parlons de votre situation juridique
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Contactez-moi pour un premier échange gratuit de 15 minutes.
              J&apos;analyse votre situation et vous propose les meilleures solutions
              juridiques adaptées à vos besoins.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div className="animate-on-scroll">
              <h2 className="mb-8">Envoyez-moi un message</h2>
              <ContactForm />
            </div>
            
            {/* Contact info */}
            <div className="animate-on-scroll">
              <h2 className="mb-8">Mes coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-lg text-primary mb-2">
                      Adresse
                    </h3>
                    <div className="text-gray-600">
                      <div>{contactInfo.address}</div>
                      <div>{contactInfo.postalCode} {contactInfo.city}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-lg text-primary mb-2">
                      Téléphone
                    </h3>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-lg text-primary mb-2">
                      Email
                    </h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-slab font-semibold text-lg text-primary mb-2">
                      Horaires
                    </h3>
                    <div className="text-gray-600">
                      <div>{contactInfo.hours.weekdays}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {contactInfo.hours.note}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar widget */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-6">Réservez votre consultation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Planifiez directement votre rendez-vous en ligne. Choisissez le créneau 
              qui vous convient le mieux pour votre appel de cadrage gratuit.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <CalendlyWidget />
          </div>
        </div>
      </section>
      
      {/* Map and access */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map placeholder */}
            <div className="animate-on-scroll">
              <h2 className="mb-8">Plan d&apos;accès</h2>
              <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p>Carte Google Maps</p>
                  <p className="text-sm">À intégrer avec les coordonnées réelles</p>
                </div>
              </div>
              
              {/* Google Maps embed placeholder */}
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>À faire :</strong> Remplacer par l&apos;embed Google Maps réel avec l&apos;adresse du cabinet
                </p>
              </div>
            </div>
            
            {/* Access info */}
            <div className="animate-on-scroll">
              <h2 className="mb-8">Comment me rejoindre</h2>
              
              <div className="space-y-6">
                {accessInfo.map((access, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                      <access.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-slab font-semibold text-lg text-primary mb-2">
                        {access.title}
                      </h3>
                      <p className="text-gray-600">
                        {access.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-slab font-semibold text-lg text-primary mb-3">
                  Cabinet accessible
                </h3>
                <p className="text-gray-700 text-sm">
                  Le cabinet est accessible aux personnes à mobilité réduite. 
                  N&apos;hésitez pas à me signaler tout besoin spécifique lors de 
                  la prise de rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Urgences section */}
      <section className="section-padding bg-red-50 border-y border-red-100">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-red-800 mb-6">Situations d&apos;urgence</h2>
            <p className="text-red-700 leading-relaxed mb-6">
              En cas de situation juridique urgente (garde à vue, procédure d&apos;expulsion, 
              assignation avec délai court), contactez-moi immédiatement par téléphone. 
              J&apos;étudierai la possibilité d&apos;un rendez-vous en urgence.
            </p>
            <div className="inline-flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-button">
              <Phone className="h-5 w-5" />
              <span className="font-medium">Urgences : {contactInfo.phone}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}