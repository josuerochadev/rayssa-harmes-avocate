import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Avocat Strasbourg - [NOM PRÉNOM]',
    short_name: 'Avocat Strasbourg',
    description: 'Cabinet d\'avocat à Strasbourg spécialisé en droit des contrats, famille, étrangers, travail et immobilier.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7A3E1E',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'legal'],
    lang: 'fr-FR',
  }
}