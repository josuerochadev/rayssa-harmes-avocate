export interface CaseStudy {
  title: string
  problem: string
  approach: string
  result: string
}

/**
 * Cas de succès détaillés
 */
export const caseStudies: CaseStudy[] = [
  {
    title: 'Litige commercial - Rupture abusive de contrat',
    problem: 'Un client entrepreneur avait vu son contrat de distribution résilié brutalement par son partenaire principal, mettant en péril la continuité de son activité.',
    approach: 'Analyse approfondie des clauses contractuelles, mise en demeure pour rupture abusive, puis assignation devant le tribunal commercial avec demandes de dommages-intérêts.',
    result: 'Obtention de 85 000€ de dommages-intérêts pour rupture abusive, permettant au client de redresser sa situation financière et de développer de nouveaux partenariats.',
  },
  {
    title: 'Droit de la famille - Garde d\'enfants internationale',
    problem: 'Divorce avec des enfants résidant à l\'étranger. Le parent français souhaitait obtenir un droit de visite élargi et le retour des enfants en France.',
    approach: 'Procédure coordonnée entre les juridictions française et étrangère, médiation familiale internationale, négociation d\'un accord parental équilibré.',
    result: 'Accord amiable permettant le retour des enfants en France avec garde alternée, préservant l\'intérêt supérieur de l\'enfant et les liens avec les deux parents.',
  },
  {
    title: 'Droit des étrangers - Régularisation complexe',
    problem: 'Situation administrative irrégulière de longue durée avec risque d\'OQTF (Obligation de Quitter le Territoire Français) pour une famille avec enfants scolarisés.',
    approach: 'Constitution d\'un dossier de régularisation sur la base de la vie privée et familiale, recours hiérarchique, puis recours contentieux devant le tribunal administratif.',
    result: 'Obtention d\'un titre de séjour "vie privée et familiale" pour toute la famille, régularisation définitive de leur situation en France.',
  },
  {
    title: 'Droit immobilier - Vice caché majeur',
    problem: 'Découverte de malfaçons importantes dans un logement récemment acheté, avec risque structurel et coûts de réparation évalués à 40 000€.',
    approach: 'Expertise technique contradictoire, négociation amiable avec les vendeurs et leur assurance, puis procédure judiciaire pour vice caché.',
    result: 'Résolution amiable avec prise en charge intégrale des travaux de réparation par l\'assurance décennale, évitant une procédure longue et coûteuse.',
  },
]
