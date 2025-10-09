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
    title: 'Droit des étrangers - Recours CNDA pour opposante politique',
    problem: 'Une cliente persécutée dans son pays d\'origine en raison de son engagement politique risquait un renvoi. Sa première demande d\'asile avait été rejetée par l\'OFPRA.',
    approach: 'Préparation minutieuse du recours devant la CNDA avec constitution d\'un dossier solide documentant les persécutions subies, écoute approfondie de sa situation d\'opposante politique, et accompagnement lors de l\'audience.',
    result: 'Obtention d\'une protection internationale. La cliente a pu rester en France en toute sécurité et reconstruire sa vie loin des persécutions.',
  },
  {
    title: 'Droit pénal - Défense face à des accusations infondées',
    problem: 'Une cliente accusée à tort dans une affaire pénale risquait une condamnation qui aurait eu des conséquences graves sur sa vie personnelle et professionnelle.',
    approach: 'Défense rigoureuse de son innocence avec analyse approfondie du dossier, contestation des éléments à charge, et plaidoirie déterminée démontrant l\'absence de culpabilité.',
    result: 'La cliente n\'a pas été condamnée. Un immense soulagement pour elle et sa famille, et la préservation de sa réputation.',
  },
  {
    title: 'Droit des étrangers - Regroupement familial après blocage administratif',
    problem: 'Un client voyait sa procédure de regroupement familial bloquée depuis plusieurs mois par l\'administration, le séparant de sa famille restée à l\'étranger.',
    approach: 'Écoute attentive de sa situation familiale, compréhension approfondie des obstacles administratifs, et intervention efficace auprès des autorités compétentes pour débloquer le dossier.',
    result: 'Déblocage de la procédure et réunification familiale réussie. La famille est aujourd\'hui réunie en France.',
  },
  {
    title: 'Droit des étrangers - Régularisation complexe',
    problem: 'Situation administrative irrégulière de longue durée avec risque d\'OQTF (Obligation de Quitter le Territoire Français) pour une famille avec enfants scolarisés.',
    approach: 'Constitution d\'un dossier de régularisation sur la base de la vie privée et familiale, recours hiérarchique, puis recours contentieux devant le tribunal administratif.',
    result: 'Obtention d\'un titre de séjour "vie privée et familiale" pour toute la famille, régularisation définitive de leur situation en France.',
  },
]
