import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Clock } from 'lucide-react'
import LanguageBadges from '@/components/ui/LanguageBadges'

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Domaines d\'intervention', href: '/domaines' },
    { name: 'Témoignages', href: '/témoignages' },
    { name: 'Honoraires', href: '/honoraires' },
    { name: 'Contact', href: '/contact' },
  ],
  domains: [
    { name: 'Droit des contrats', href: '/domaines/contrats' },
    { name: 'Droit de la famille', href: '/domaines/famille' },
    { name: 'Droit des étrangers', href: '/domaines/etrangers' },
    { name: 'Droit du travail', href: '/domaines/travail' },
    { name: 'Droit immobilier', href: '/domaines/immobilier' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cabinet info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-2 rounded-lg">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-slab font-bold text-xl">
                    Rayssa Harmes
                  </div>
                  <div className="text-white/80">
                    Avocate à Strasbourg
                  </div>
                </div>
              </div>
              <p className="text-white/90 mb-6 max-w-md">
                Avocate passionnée et à l&apos;écoute, j&apos;accompagne particuliers et entreprises
                en droit des étrangers, de la famille, du travail, de l&apos;immobilier,
                du pénal et du droit des sociétés.
              </p>
              <LanguageBadges variant="footer" />
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-slab font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                  <div className="text-white/90">
                    <div>24 avenue des Vosges</div>
                    <div>67000 Strasbourg</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white/70 flex-shrink-0" />
                  <a
                    href="tel:+33745048395"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    +33 7 45 04 83 95
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white/70 flex-shrink-0" />
                  <a
                    href="mailto:harmes.avocat@gmail.com"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    harmes.avocat@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                  <div className="text-white/90 text-sm">
                    <div>Lun - Ven : 9h - 18h</div>
                    <div>Sur rendez-vous uniquement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-slab font-semibold text-lg mb-6">Liens rapides</h3>
              <div className="space-y-2">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-white/80 hover:text-accent hover:translate-x-1 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Domains section */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="font-slab font-semibold text-lg mb-6">Domaines d&apos;intervention</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {navigation.domains.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-accent hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-white/80">
              <div>© 2024 Rayssa Harmes - Tous droits réservés</div>
              <div>Barreau de Strasbourg</div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {navigation.legal.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  {index > 0 && <span className="mr-6 text-white/40">•</span>}
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}