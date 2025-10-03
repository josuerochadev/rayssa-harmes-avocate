export interface Testimonial {
  quote: string
  author: string
  caseType: string
  location: string
}

/**
 * Tous les témoignages clients
 */
export const testimonials: Testimonial[] = [
  {
    quote: 'Maître [NOM] a su m\'accompagner avec professionnalisme et humanité dans une procédure de divorce complexe. Sa clarté d\'explication et sa réactivité m\'ont beaucoup aidée dans cette période difficile.',
    author: 'Mme M.',
    caseType: 'Droit de la famille',
    location: 'Strasbourg',
  },
  {
    quote: 'Grâce à ses conseils avisés, j\'ai pu régulariser ma situation administrative rapidement. Un vrai soulagement après des mois d\'incertitude. Je recommande vivement.',
    author: 'M. A.',
    caseType: 'Droit des étrangers',
    location: 'Haguenau',
  },
  {
    quote: 'Excellente négociation lors de ma rupture conventionnelle. J\'ai obtenu des conditions bien meilleures que ce qui était initialement proposé par mon employeur.',
    author: 'M. L.',
    caseType: 'Droit du travail',
    location: 'Strasbourg',
  },
  {
    quote: 'Accompagnement parfait pour l\'achat de notre maison. Tous les pièges ont été évités grâce à son expertise. Je suis aujourd\'hui propriétaire en toute sérénité.',
    author: 'M. et Mme D.',
    caseType: 'Droit immobilier',
    location: 'Schiltigheim',
  },
  {
    quote: 'Litige commercial résolu de manière très professionnelle. La stratégie mise en place a permis d\'obtenir gain de cause rapidement et efficacement.',
    author: 'Société X.',
    caseType: 'Droit des contrats',
    location: 'Strasbourg',
  },
  {
    quote: 'Merci pour votre aide dans ma procédure de naturalisation. Votre connaissance des rouages administratifs a fait la différence. Aujourd\'hui je suis français !',
    author: 'M. R.',
    caseType: 'Droit des étrangers',
    location: 'Sélestat',
  },
  {
    quote: 'Succession complexe réglée avec brio. Malgré les tensions familiales, vous avez trouvé une solution équitable pour tous. Un grand merci.',
    author: 'Famille T.',
    caseType: 'Droit de la famille',
    location: 'Strasbourg',
  },
  {
    quote: 'Défense exemplaire face au harcèlement que je subissais au travail. Résultat probant aux prud\'hommes. Je ne peux que vous recommander.',
    author: 'Mme K.',
    caseType: 'Droit du travail',
    location: 'Illkirch',
  },
]

/**
 * Témoignages mis en avant sur la page d'accueil
 */
export const featuredTestimonials: Testimonial[] = [
  {
    quote: 'Maître Harmes a su m\'accompagner avec professionnalisme et humanité dans une procédure de divorce complexe. Sa clarté d\'explication et sa réactivité m\'ont beaucoup aidée.',
    author: 'Mme M.',
    caseType: 'Droit de la famille',
    location: 'Strasbourg',
  },
  {
    quote: 'Grâce à ses conseils avisés, j\'ai pu régulariser ma situation administrative rapidement. Un vrai soulagement après des mois d\'incertitude.',
    author: 'M. A.',
    caseType: 'Droit des étrangers',
    location: 'Haguenau',
  },
  {
    quote: 'Excellente négociation lors de ma rupture conventionnelle. J\'ai obtenu des conditions bien meilleures que ce qui était initialement proposé.',
    author: 'M. L.',
    caseType: 'Droit du travail',
    location: 'Strasbourg',
  },
]
