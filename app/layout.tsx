import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto-slab' })

export const metadata: Metadata = {
  title: 'Avocate à Strasbourg - Contrats, Famille, Étrangers, Travail, Immobilier',
  description: 'Cabinet d\'avocat à Strasbourg spécialisé en droit des contrats, droit de la famille, droit des étrangers, droit du travail et droit immobilier. Conseil et contentieux avec prise de rendez-vous rapide.',
  keywords: 'avocat Strasbourg, droit des contrats, droit de la famille, droit des étrangers, droit du travail, droit immobilier, conseil juridique',
  authors: [{ name: 'Cabinet d\'Avocat Strasbourg' }],
  creator: 'Cabinet d\'Avocat Strasbourg',
  publisher: 'Cabinet d\'Avocat Strasbourg',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://your-domain.com',
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
    <html lang="fr" className={`${inter.variable} ${robotoSlab.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "[NOM_CABINET]",
              "image": "[URL_PHOTO_PROFESSIONNELLE]",
              "description": "Cabinet d'avocat à Strasbourg spécialisé en droit des contrats, droit de la famille, droit des étrangers, droit du travail et droit immobilier.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[ADRESSE_COMPLETE]",
                "addressLocality": "Strasbourg",
                "postalCode": "[CODE_POSTAL]",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[LATITUDE]",
                "longitude": "[LONGITUDE]"
              },
              "url": "https://your-domain.com",
              "telephone": "[NUMERO_TELEPHONE]",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "12:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "14:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "€€",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "[LATITUDE]",
                  "longitude": "[LONGITUDE]"
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