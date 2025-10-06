import ContactForm from '@/components/ui/ContactForm'
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
  description: 'Contactez votre avocat à Strasbourg. Prise de rendez-vous rapide. Adresse, horaires, plan d\'accès.',
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
    description: 'Stationnement payant dans le centre (9h-19h). Privilégiez les Park & Ride en périphérie + tram, ou réservez une place dans un parking public sécurisé (Indigo, etc.).',
  },
  {
    icon: Train,
    title: 'Transports en commun',
    description: 'Bus "Travail" ou "Wissembourg" (2 min à pied) - Lignes 10, 2, C1, C9, H, N1, C3. Trams à 7-8 min : Ancienne Synagogue / Les Halles, Faubourg de Saverne, Homme de Fer. Réseau : 4h30-0h30 (5h30-0h30 dim.).',
  },
  {
    icon: Navigation,
    title: 'À pied / Situation',
    description: 'Quartier central, proche commerces. Depuis Homme de Fer : 8 min. Depuis Les Halles / Ancienne Synagogue : 7 min.',
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
              Contactez-moi pour échanger sur votre situation.
              J&apos;analyse votre dossier et vous propose les meilleures solutions
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

      {/* Appointment booking */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-6">Prendre rendez-vous en ligne</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Réservez directement un créneau dans mon agenda pour échanger sur votre situation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-slab font-semibold text-xl text-primary mb-3">
                  Réservez votre consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Choisissez le créneau qui vous convient le mieux. Vous recevrez une confirmation
                  par email avec tous les détails du rendez-vous.
                </p>
                <a
                  href="https://calendly.com/harmes-avocat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Clock className="h-4 w-4" />
                  <span>Voir les créneaux disponibles</span>
                </a>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-600">
                <strong>Note :</strong> Le rendez-vous peut se faire au cabinet (24 avenue des Vosges, 67000 Strasbourg)
                ou par visioconférence selon votre préférence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and access */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <div className="animate-on-scroll">
              <h2 className="mb-8">Plan d&apos;accès</h2>
              <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.081106564934!2d7.751182175955174!3d48.58914587129696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c85a0b832b71%3A0x7416e211ae6dad4f!2s24%20Av.%20des%20Vosges%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1759766105072!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du cabinet - 24 avenue des Vosges, 67000 Strasbourg"
                  aria-label="Carte Google Maps montrant la localisation du cabinet d'avocat"
                />
              </div>

              <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary">Adresse :</strong> {contactInfo.address}, {contactInfo.postalCode} {contactInfo.city}
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