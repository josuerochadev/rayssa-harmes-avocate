'use client'

import { useEffect } from 'react'
import { Calendar } from 'lucide-react'

/**
 * Props pour le composant CalendlyWidget
 */
interface CalendlyWidgetProps {
  /** URL de la page Calendly (défaut: https://calendly.com/harmes-avocat) */
  url?: string
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Widget de prise de rendez-vous intégré via Calendly
 *
 * Composant client qui charge dynamiquement les scripts et styles Calendly
 * pour permettre la prise de rendez-vous en ligne. Gère :
 * - Chargement asynchrone du SDK Calendly (CSS + JS)
 * - Ouverture du widget en popup ou inline
 * - Fallback vers lien direct si le script n'est pas chargé
 * - Nettoyage des scripts au démontage du composant
 *
 * @param props - Props du composant
 * @returns Composant widget Calendly avec bouton et widget inline
 *
 * @example
 * ```tsx
 * <CalendlyWidget url="https://calendly.com/harmes-avocat" />
 * ```
 */
export default function CalendlyWidget({
  url = 'https://calendly.com/harmes-avocat',
  className = ''
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly widget CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      if (existingLink) {
        document.head.removeChild(existingLink)
      }
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const handleCalendlyClick = () => {
    // @ts-ignore - Calendly global object
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url })
    } else {
      // Fallback to direct link if script not loaded
      window.open(url, '_blank')
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-primary p-2 rounded-lg">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-slab font-semibold text-xl text-primary">
            Prendre rendez-vous
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Réservez un appel de cadrage gratuit de 15-20 minutes pour discuter
          de votre situation et déterminer comment je peux vous aider.
        </p>
        
        <button
          onClick={handleCalendlyClick}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <Calendar className="h-4 w-4" />
          <span>Réserver un créneau</span>
        </button>
      </div>
      
      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-button">
        <p>
          <strong>Lors du rendez-vous :</strong> Je ferai le point sur votre situation,
          vos besoins et les options qui s&apos;offrent à vous. Aucun engagement n&apos;est requis.
        </p>
      </div>
      
      {/* Inline widget container - will be populated by Calendly script */}
      <div 
        className="calendly-inline-widget" 
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}