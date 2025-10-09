'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'
import FocusTrap from 'focus-trap-react'
import LanguageBadges from '@/components/ui/LanguageBadges'
import DesktopNavItem from './nav/DesktopNavItem'
import MobileNavItem from './nav/MobileNavItem'
import { navigation } from '@/data/navigation'

/**
 * Header principal du site avec navigation responsive
 *
 * Composant complexe gérant :
 * - Navigation desktop avec dropdowns
 * - Menu mobile avec overlay
 * - Barre de contact sticky (téléphone, email)
 * - Badges de langues parlées
 * - État actif des liens de navigation
 * - Animation au scroll (shadow)
 *
 * Le header devient sticky avec ombre au scroll > 10px.
 * Le menu mobile s'ouvre en overlay avec backdrop sur mobile/tablette.
 *
 * @returns Composant header avec navigation
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Gérer la touche Escape pour fermer le menu mobile
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  /**
   * Détermine si un lien de navigation est actif
   * @param href - URL du lien à vérifier
   * @returns true si le lien correspond au pathname actuel
   */
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top bar with contact info - hidden on mobile to avoid redundancy with call button */}
      <div className="hidden sm:block bg-primary text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm gap-3">
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="tel:+33745048395"
                className="flex items-center gap-2 hover:!text-white hover:underline transition-colors whitespace-nowrap"
              >
                <Phone size={14} className="flex-shrink-0" />
                <span>+33 7 45 04 83 95</span>
              </a>
              <a
                href="mailto:harmes.avocat@gmail.com"
                className="flex items-center gap-2 hover:!text-white hover:underline transition-colors whitespace-nowrap"
              >
                <Mail size={14} className="flex-shrink-0" />
                <span>harmes.avocat@gmail.com</span>
              </a>
            </div>
            <div className="flex-shrink-0">
              <LanguageBadges />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-opacity-90 transition-colors">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-slab font-bold text-xl text-primary">
                Rayssa Harmes
              </div>
              <div className="text-sm text-gray-600">
                Avocate à Strasbourg
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <DesktopNavItem key={item.name} item={item} isActive={isActiveLink} />
            ))}
            <Link href="/contact" className="btn-primary">
              Prendre RDV
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+33745048395"
              className="btn-primary py-2 px-4 text-sm"
              aria-label="Appeler maintenant"
            >
              <Phone className="h-4 w-4 inline mr-1" />
              Appeler
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile menu with focus trap - outside header to avoid z-index stacking context issues */}
    {mobileMenuOpen && (
      <FocusTrap
        focusTrapOptions={{
          initialFocus: false,
          escapeDeactivates: true,
          clickOutsideDeactivates: true,
          returnFocusOnDeactivate: true,
        }}
      >
        <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navigation">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
              <span className="font-slab font-semibold text-primary">Menu</span>
              <button
                type="button"
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-4 py-6 space-y-4 overflow-y-auto flex-1">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  isActive={isActiveLink}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
              <div className="pt-4 border-t">
                <Link
                  href="/contact"
                  className="btn-primary block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </FocusTrap>
    )}
    </>
  )
}