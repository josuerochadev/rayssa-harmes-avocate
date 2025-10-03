export interface Example {
  title: string
  description: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface DomainDetail {
  casesHandled: string[]
  examples: Example[]
  processSteps: ProcessStep[]
}

/**
 * Détails spécifiques pour chaque domaine juridique
 */
export const domainDetails: Record<string, DomainDetail> = {
  famille: {
    casesHandled: [
      'Divorce amiable ou contentieux',
      'Fixation ou révision de l\'autorité parentale, garde et droit de visite',
      'Pension alimentaire (fixation, révision, recouvrement)',
      'Prestation compensatoire',
      'Successions et partages de biens',
      'Violence conjugale et ordonnances de protection',
      'Médiation familiale',
    ],
    examples: [
      {
        title: 'Divorce par consentement mutuel',
        description: 'Accompagnement d\'un couple dans un divorce par consentement mutuel.',
      },
      {
        title: 'Garde alternée',
        description: 'Défense d\'un parent pour obtenir une garde alternée.',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Tentative de règlement amiable',
        description: 'Tentative de règlement amiable si possible.',
      },
      {
        number: 2,
        title: 'Rédaction et représentation',
        description: 'Rédaction des actes et représentation devant le juge aux affaires familiales.',
      },
    ],
  },

  contrats: {
    casesHandled: [
      'Rédaction et analyse de contrats civils ou commerciaux',
      'Litiges liés à l\'inexécution, la résiliation ou la responsabilité contractuelle',
      'Recouvrement de créances contractuelles',
      'Contrats de vente et de prestations de services',
      'Baux commerciaux et professionnels',
      'Garanties et responsabilités contractuelles',
      'Médiation et négociation commerciale',
    ],
    examples: [
      {
        title: 'Conseil entreprise',
        description: 'Conseil à une entreprise pour sécuriser un contrat commercial.',
      },
      {
        title: 'Rupture abusive',
        description: 'Représentation d\'un particulier pour rupture abusive d\'un contrat de prestation de services.',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Audit du contrat',
        description: 'Audit du contrat et analyse juridique approfondie.',
      },
      {
        number: 2,
        title: 'Mise en demeure et négociation',
        description: 'Mise en demeure, négociation ou saisine du tribunal judiciaire selon le litige.',
      },
    ],
  },

  travail: {
    casesHandled: [
      'Contentieux devant le conseil de prud\'hommes (CPH)',
      'Licenciement abusif ou sans cause réelle et sérieuse',
      'Harcèlement moral ou sexuel',
      'Contestation d\'heures supplémentaires non payées',
      'Rupture conventionnelle ou autres modes de rupture du contrat de travail',
      'Discrimination et égalité professionnelle',
      'Accident du travail et maladie professionnelle',
    ],
    examples: [
      {
        title: 'Licenciement sans motif',
        description: 'Défense d\'un salarié licencié sans motif valable.',
      },
      {
        title: 'Procédure disciplinaire',
        description: 'Accompagnement d\'une entreprise dans une procédure disciplinaire.',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Phase de conciliation',
        description: 'Phase de conciliation obligatoire devant le conseil de prud\'hommes.',
      },
      {
        number: 2,
        title: 'Audience de jugement',
        description: 'Si échec, audience de jugement et plaidoirie devant la formation paritaire.',
      },
    ],
  },

  immobilier: {
    casesHandled: [
      'Litiges bailleurs / locataires (loyers impayés, charges, réparations, expulsion)',
      'Conflits de copropriété et troubles de voisinage',
      'Litiges liés à la vente ou l\'acquisition (vices cachés, promesse de vente, malfaçons)',
      'Baux d\'habitation et commerciaux',
      'Servitudes et mitoyenneté',
      'Droit de la construction',
      'Urbanisme et permis de construire',
    ],
    examples: [
      {
        title: 'Propriétaire vs locataire',
        description: 'Défense d\'un propriétaire face à un locataire en impayés.',
      },
      {
        title: 'Vice caché',
        description: 'Assistance d\'un acquéreur ayant découvert un vice caché après achat.',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Échanges amiables',
        description: 'Tentative de règlement amiable et mise en demeure.',
      },
      {
        number: 2,
        title: 'Saisine judiciaire',
        description: 'Si nécessaire, saisine du juge compétent (tribunal judiciaire, juge des contentieux de la protection).',
      },
    ],
  },

  etrangers: {
    casesHandled: [
      'Recours contre un refus de titre de séjour',
      'Contestation d\'une OQTF (obligation de quitter le territoire français)',
      'Demande de naturalisation ou de nationalité française',
      'Regroupement ou réunification familiale',
      'Assignation à résidence',
      'Recours devant la Cour nationale du droit d\'asile (CNDA)',
      'Renouvellement de titres de séjour',
      'Titres de séjour étudiant et professionnel',
    ],
    examples: [
      {
        title: 'Étudiant étranger',
        description: 'Accompagnement d\'un étudiant étranger face au refus de renouvellement de son titre de séjour.',
      },
      {
        title: 'Demandeur d\'asile',
        description: 'Recours devant la CNDA pour un demandeur d\'asile débouté.',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Analyse de la décision',
        description: 'Étude complète de la décision préfectorale ou administrative.',
      },
      {
        number: 2,
        title: 'Rédaction du recours',
        description: 'Rédaction et dépôt du recours dans les délais légaux stricts.',
      },
      {
        number: 3,
        title: 'Représentation juridique',
        description: 'Représentation devant la juridiction compétente (CRRV, tribunal administratif, CNDA, tribunal administratif de Nantes selon le cas).',
      },
    ],
  },
}
