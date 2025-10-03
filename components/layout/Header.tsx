'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'
import LanguageBadges from '@/components/ui/LanguageBadges'
import DesktopNavItem from './nav/DesktopNavItem'
import MobileNavItem from './nav/MobileNavItem'
import { navigation } from '@/data/navigation'

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

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+33745048395"
                className="flex items-center space-x-2 hover:!text-white hover:underline transition-colors"
              >
                <Phone size={14} />
                <span>+33 7 45 04 83 95</span>
              </a>
              <a
                href="mailto:harmes.avocat@gmail.com"
                className="flex items-center space-x-2 hover:!text-white hover:underline transition-colors"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">harmes.avocat@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
            <LanguageBadges />
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navigation">
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
            <nav className="fixed right-0 top-0 h-full w-full max-w-xs bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-slab font-semibold text-primary">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-4">
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
        )}
      </nav>
    </header>
  )
}