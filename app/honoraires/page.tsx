import Link from 'next/link'
import { Euro, FileText, Clock, Shield, CheckCircle, AlertCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Honoraires & Tarifs - Avocat Strasbourg | Transparence des Coûts Juridiques',
  description: 'Découvrez mes tarifs transparents : forfait, taux horaire, convention d\'honoraires. Devis préalable gratuit pour tous vos besoins juridiques.',
  keywords: 'honoraires avocat Strasbourg, tarifs conseil juridique, devis gratuit, forfait avocat, taux horaire',
}

const pricingMethods = [
  {
    icon: Euro,
    title: 'Honoraire au forfait',
    description: 'Tarif fixe défini à l\'avance pour une prestation clairement délimitée.',
    benefits: [
      'Prix fixe connu à l\'avance',
      'Pas de surprise sur la facture',
      'Adapté aux procédures standards',
      'Sécurité financière pour le client',
    ],
    examples: [
      'Rédaction de contrats types',
      'Procédure de divorce par consentement mutuel',
      'Demande de titre de séjour',
      'Rupture conventionnelle',
    ],
  },
  {
    icon: Clock,
    title: 'Honoraire au temps passé',
    description: 'Facturation basée sur le temps effectivement consacré à votre dossier.',
    benefits: [
      'Facturation au réel',
      'Adapté aux dossiers complexes',
      'Flexibilité selon l\'évolution',
      'Suivi détaillé du temps',
    ],
    examples: [
      'Contentieux complexes',
      'Négociations longues',
      'Conseil ponctuel',
      'Accompagnement sur mesure',
    ],
  },
  {
    icon: FileText,
    title: 'Convention d\'honoraires',
    description: 'Accord personnalisé adaptant la rémunération aux spécificités de votre dossier.',
    benefits: [
      'Solution sur-mesure',
      'Prise en compte de vos moyens',
      'Modalités de paiement flexibles',
      'Transparence contractuelle',
    ],
    examples: [
      'Dossiers de grande ampleur',
      'Affaires avec enjeux importants',
      'Accompagnement long terme',
      'Situations particulières',
    ],
  },
]

const includedServices = [
  'Devis préalable détaillé et gratuit',
  'Suivi régulier de l\'avancement',
  'Explications claires des procédures',
  'Correspondances et démarches',
  'Représentation devant les juridictions',
]

const paymentInfo = [
  {
    title: 'Aide juridictionnelle',
    description: 'Possibilité de bénéficier de l\'aide juridictionnelle selon vos ressources. Je vous accompagne dans cette démarche.',
  },
  {
    title: 'Assurance protection juridique',
    description: 'Vérifiez si votre assurance habitation ou automobile couvre les frais d\'avocat. J\'accepte les prises en charge.',
  },
  {
    title: 'Paiement échelonné',
    description: 'Possibilité d\'étaler le règlement selon un échéancier adapté à votre situation financière.',
  },
]

export default function HonorairesPage() {
  return (
    <>
      {/* Hero section */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-primary p-4 rounded-xl">
                <Euro className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="mb-6">
              <span className="block text-primary">Honoraires & Tarifs</span>
              <span className="block text-2xl md:text-3xl font-normal text-gray-700 mt-2">
                Transparence et équité dans les tarifs
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez mes différentes modalités tarifaires adaptées à chaque situation. 
              Devis préalable gratuit et transparence totale sur les coûts pour vous permettre 
              de prendre vos décisions en toute connaissance de cause.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6">Mes modes de facturation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              J&apos;adapte mon mode de facturation à votre dossier et à vos besoins 
              pour vous offrir la solution la plus équitable et transparente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingMethods.map((method, index) => (
              <div key={method.title} className="bg-gray-50 rounded-lg p-8 animate-on-scroll">
                <div className="text-center mb-8">
                  <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-slab font-semibold text-xl text-primary mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">
                    {method.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Exemples d&apos;application :</h4>
                    <ul className="space-y-1">
                      {method.examples.map((example, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What's included */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="mb-8">Ce qui est inclus</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Mes honoraires incluent l&apos;ensemble des prestations nécessaires 
                à votre accompagnement juridique, sans surprise ni frais cachés.
              </p>
              
              <div className="space-y-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="mb-8">Facilités de paiement</h2>
              <div className="space-y-6">
                {paymentInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border">
                    <h3 className="font-slab font-semibold text-lg text-primary mb-3">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Important information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-slab font-semibold text-xl text-blue-900 mb-4">
                    Les engagements tarifaires
                  </h3>
                  <div className="space-y-4 text-blue-800">
                    <p>
                      <strong>Devis préalable obligatoire :</strong> Avant toute intervention, 
                      j&apos;établis un devis détaillé gratuit précisant les honoraires 
                      prévisibles et les modalités de facturation.
                    </p>
                    <p>
                      <strong>Pas de dépassement sans accord :</strong> En cas d&apos;évolution 
                      du dossier nécessitant des honoraires supplémentaires, je vous 
                      informe et obtient votre accord préalable.
                    </p>
                    <p>
                      <strong>Factures détaillées :</strong> Chaque facture précise les
                      prestations réalisées, le temps passé et les débours engagés pour
                      une transparence totale.
                    </p>
                    <p>
                      <strong>Assurance responsabilité civile professionnelle :</strong>
                      Couverture professionnelle obligatoire conforme aux exigences du Barreau
                      pour vous garantir une protection optimale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Warning section */}
      <section className="section-padding bg-yellow-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-slab font-semibold text-lg text-yellow-800 mb-3">
                  Informations importantes
                </h3>
                <div className="space-y-3 text-yellow-800">
                  <p>
                    Les tarifs mentionnés sont donnés à titre indicatif et peuvent varier 
                    selon la complexité du dossier. Seul le devis personnalisé fait foi.
                  </p>
                  <p>
                    En cas de procédure contentieuse, des frais supplémentaires peuvent 
                    s&apos;appliquer (frais de greffe, d&apos;huissier, d&apos;expertise, etc.). 
                    Ces frais vous seront détaillés dans le devis.
                  </p>
                  <p>
                    En application de l&apos;article 10 de la loi du 31 décembre 1971, 
                    tout différend relatif aux honoraires peut faire l&apos;objet d&apos;une 
                    saisine du Bâtonnier de l&apos;Ordre des Avocats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Besoin d&apos;un devis personnalisé ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi pour obtenir un devis gratuit et personnalisé. 
            J&apos;étudierai votre situation pour vous proposer la solution 
            tarifaire la plus adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-button font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" />
              Demander un devis
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-button font-medium hover:bg-white hover:text-primary transition-colors">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}