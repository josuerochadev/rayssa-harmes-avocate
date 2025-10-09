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
    quote: 'Maître Harmes m\'a accompagnée dans mon recours devant la CNDA. Grâce à son écoute, sa compréhension de ma situation d\'opposante politique et son expertise juridique, j\'ai obtenu une protection. Je ne serais pas là aujourd\'hui sans son aide.',
    author: 'Mme S.',
    caseType: 'Droit des étrangers',
    location: 'Strasbourg',
  },
  {
    quote: 'J\'ai été accusée à tort dans une affaire pénale. Maître Harmes a su défendre mon innocence avec détermination et professionnalisme. Je n\'ai pas été condamnée. Un immense soulagement et une reconnaissance éternelle.',
    author: 'Mme L.',
    caseType: 'Droit pénal',
    location: 'Strasbourg',
  },
  {
    quote: 'Ma procédure de regroupement familial était bloquée depuis des mois. Maître Harmes a pris le temps de m\'écouter, de comprendre ma situation et a réussi à débloquer mon dossier. Aujourd\'hui ma famille est enfin réunie.',
    author: 'M. K.',
    caseType: 'Droit des étrangers',
    location: 'Strasbourg',
  },
  {
    quote: 'Grâce à ses conseils avisés, j\'ai pu régulariser ma situation administrative rapidement. Un vrai soulagement après des mois d\'incertitude. Je recommande vivement.',
    author: 'M. A.',
    caseType: 'Droit des étrangers',
    location: 'Haguenau',
  },
  {
    quote: 'Merci pour votre aide dans ma procédure de naturalisation. Votre connaissance des rouages administratifs a fait la différence. Aujourd\'hui je suis français !',
    author: 'M. R.',
    caseType: 'Droit des étrangers',
    location: 'Sélestat',
  },
]

/**
 * Témoignages mis en avant sur la page d'accueil
 * Les 3 mêmes témoignages authentiques
 */
export const featuredTestimonials: Testimonial[] = testimonials
