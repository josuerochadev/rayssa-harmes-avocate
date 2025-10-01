'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Scale, Phone, Mail } from 'lucide-react'
import LanguageBadges from '@/components/ui/LanguageBadges'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { 
    name: 'Domaines d\'intervention', 
    href: '/domaines',
    children: [
      { name: 'Droit des contrats', href: '/domaines/contrats' },
      { name: 'Droit de la famille', href: '/domaines/famille' },
      { name: 'Droit des étrangers', href: '/domaines/etrangers' },
      { name: 'Droit du travail', href: '/domaines/travail' },
      { name: 'Droit immobilier', href: '/domaines/immobilier' },
    ]
  },
  { name: 'Témoignages', href: '/témoignages' },
  { name: 'Honoraires', href: '/honoraires' },
  { name: 'Contact', href: '/contact' },
]

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
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+33 7 45 04 83 95</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>harmes.avocat@gmail.com</span>
              </div>
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
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`font-medium transition-colors hover:text-accent ${
                    isActiveLink(item.href) ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-secondary hover:text-primary ${
                            isActiveLink(child.href) ? 'text-primary bg-secondary' : 'text-neutral-700'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 h-full w-full max-w-xs bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-slab font-semibold text-primary">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-2 font-medium transition-colors ${
                        isActiveLink(item.href) ? 'text-primary' : 'text-neutral-700 hover:text-accent'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block py-1 text-sm transition-colors ${
                              isActiveLink(child.href) ? 'text-primary' : 'text-neutral-600 hover:text-accent'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}