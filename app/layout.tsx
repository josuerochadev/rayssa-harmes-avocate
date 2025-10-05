import type { Metadata } from 'next'
import { Inter, Besley } from 'next/font/google'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import NavigationLoader from '@/components/ui/NavigationLoader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const besley = Besley({ subsets: ['latin'], variable: '--font-besley' })

export const metadata: Metadata = {
  title: 'Avocate à Strasbourg - Contrats, Famille, Étrangers, Travail, Immobilier',
  description: 'Cabinet d\'avocat à Strasbourg spécialisé en droit des contrats, droit de la famille, droit des étrangers, droit du travail et droit immobilier. Conseil et contentieux avec prise de rendez-vous rapide.',
  keywords: 'avocat Strasbourg, droit des contrats, droit de la famille, droit des étrangers, droit du travail, droit immobilier, conseil juridique',
  authors: [{ name: 'Rayssa Harmes' }],
  creator: 'Rayssa Harmes',
  publisher: 'Rayssa Harmes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://harmes-avocat.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://harmes-avocat.fr',
    title: 'Avocate à Strasbourg - Conseil et Contentieux Juridique',
    description: 'Cabinet d\'avocat à Strasbourg spécialisé en droit des contrats, famille, étrangers, travail et immobilier. Rendez-vous rapide, écoute et clarté.',
    siteName: 'Cabinet d\'Avocat Strasbourg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avocate à Strasbourg - Conseil et Contentieux Juridique',
    description: 'Cabinet d\'avocat à Strasbourg spécialisé en droit des contrats, famille, étrangers, travail et immobilier.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${besley.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollAnimation />
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Rayssa Harmes - Avocate",
              "image": "https://harmes-avocat.fr/rayssa-hero.jpg",
              "description": "Cabinet d'avocat à Strasbourg spécialisé en droit des contrats, droit de la famille, droit des étrangers, droit du travail et droit immobilier.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "24 avenue des Vosges",
                "addressLocality": "Strasbourg",
                "postalCode": "67000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.58908",
                "longitude": "7.753692"
              },
              "url": "https://harmes-avocat.fr",
              "telephone": "+33745048395",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "€€",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "48.58908",
                  "longitude": "7.753692"
                },
                "geoRadius": "50000"
              },
              "areaServed": ["Strasbourg", "Bas-Rhin", "Alsace", "Grand Est"],
              "knowsLanguage": ["fr", "en", "pt", "es"],
              "memberOf": {
                "@type": "Organization",
                "name": "Barreau de Strasbourg"
              }
            })
          }}
        />
      </body>
    </html>
  )
}