import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Cabinet d\'Avocat Strasbourg',
  description: 'Politique de confidentialité et de protection des données personnelles. Vos droits RGPD et nos engagements.',
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Politique de Confidentialité</h1>
          
          <p className="lead">
            La protection de vos données personnelles est une priorité pour notre cabinet. 
            Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
            dans le respect du Règlement Général sur la Protection des Données (RGPD).
          </p>
          
          <h2>1. Responsable du traitement</h2>
          <p>
            <strong>Identité :</strong> [NOM PRÉNOM], Avocat<br />
            <strong>Adresse :</strong> [ADRESSE_COMPLETE], [CODE_POSTAL] Strasbourg<br />
            <strong>Email :</strong> [ADRESSE_EMAIL]<br />
            <strong>Téléphone :</strong> [NUMERO_TELEPHONE]
          </p>
          
          <h2>2. Données collectées</h2>
          
          <h3>2.1 Données collectées via le formulaire de contact</h3>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Domaine juridique concerné</li>
            <li>Message et description de votre situation</li>
          </ul>
          
          <h3>2.2 Données collectées automatiquement</h3>
          <ul>
            <li>Adresse IP (anonymisée)</li>
            <li>Type de navigateur</li>
            <li>Pages visitées et durée de visite</li>
            <li>Date et heure de connexion</li>
          </ul>
          
          <h2>3. Finalités du traitement</h2>
          
          <h3>3.1 Gestion des demandes de contact</h3>
          <ul>
            <li><strong>Finalité :</strong> Répondre à vos questions et demandes de consultation</li>
            <li><strong>Base légale :</strong> Consentement (art. 6.1.a du RGPD)</li>
            <li><strong>Destinataires :</strong> Avocat responsable du cabinet uniquement</li>
            <li><strong>Durée de conservation :</strong> 3 ans après le dernier contact</li>
          </ul>
          
          <h3>3.2 Suivi de clientèle</h3>
          <ul>
            <li><strong>Finalité :</strong> Gestion des dossiers clients et suivi juridique</li>
            <li><strong>Base légale :</strong> Exécution du contrat (art. 6.1.b du RGPD)</li>
            <li><strong>Destinataires :</strong> Avocat et collaborateurs habilités</li>
            <li><strong>Durée de conservation :</strong> 5 ans après la fin du mandat (obligations professionnelles)</li>
          </ul>
          
          <h3>3.3 Analyses statistiques</h3>
          <ul>
            <li><strong>Finalité :</strong> Améliorer le fonctionnement du site web</li>
            <li><strong>Base légale :</strong> Intérêt légitime (art. 6.1.f du RGPD)</li>
            <li><strong>Outil utilisé :</strong> Plausible Analytics (respectueux de la vie privée)</li>
            <li><strong>Durée de conservation :</strong> 24 mois maximum</li>
          </ul>
          
          <h2>4. Vos droits</h2>
          
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          
          <h3>4.1 Droit d&apos;accès</h3>
          <p>Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.</p>
          
          <h3>4.2 Droit de rectification</h3>
          <p>Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
          
          <h3>4.3 Droit à l&apos;effacement</h3>
          <p>Vous pouvez demander la suppression de vos données dans certaines conditions.</p>
          
          <h3>4.4 Droit à la limitation</h3>
          <p>Vous pouvez demander la limitation du traitement de vos données dans certains cas.</p>
          
          <h3>4.5 Droit à la portabilité</h3>
          <p>Vous pouvez demander la transmission de vos données dans un format structuré.</p>
          
          <h3>4.6 Droit d&apos;opposition</h3>
          <p>Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</p>
          
          <h3>4.7 Exercice de vos droits</h3>
          <p>
            Pour exercer ces droits, contactez-nous à l&apos;adresse : [ADRESSE_EMAIL]<br />
            Nous vous répondrons dans un délai d&apos;un mois maximum.
          </p>
          
          <h2>5. Sécurité des données</h2>
          
          <h3>5.1 Mesures techniques</h3>
          <ul>
            <li>Chiffrement des communications (HTTPS/SSL)</li>
            <li>Hébergement sécurisé (Vercel)</li>
            <li>Sauvegardes régulières et chiffrées</li>
            <li>Mise à jour des systèmes de sécurité</li>
          </ul>
          
          <h3>5.2 Mesures organisationnelles</h3>
          <ul>
            <li>Accès limité aux données (principe du moindre privilège)</li>
            <li>Formation du personnel aux questions de confidentialité</li>
            <li>Procédures de gestion des incidents de sécurité</li>
            <li>Respect du secret professionnel de l&apos;avocat</li>
          </ul>
          
          <h2>6. Transferts de données</h2>
          
          <p>
            Vos données personnelles sont traitées au sein de l&apos;Union Européenne. 
            Aucun transfert vers des pays tiers n&apos;est effectué, à l&apos;exception de l&apos;hébergement 
            du site web (Vercel - États-Unis) qui bénéficie de garanties appropriées.
          </p>
          
          <h2>7. Cookies et technologies similaires</h2>
          
          <h3>7.1 Cookies utilisés</h3>
          <p>
            Ce site utilise uniquement des cookies de mesure d&apos;audience via Plausible Analytics, 
            qui ne collecte aucune donnée personnelle et ne nécessite pas de consentement.
          </p>
          
          <h3>7.2 Gestion des cookies</h3>
          <p>
            Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. 
            Cela n&apos;affectera pas le fonctionnement du site.
          </p>
          
          <h2>8. Modifications de cette politique</h2>
          
          <p>
            Cette politique de confidentialité peut être mise à jour pour refléter les changements 
            dans nos pratiques ou pour des raisons opérationnelles, légales ou réglementaires. 
            La date de dernière modification est indiquée en bas de cette page.
          </p>
          
          <h2>9. Contact et réclamations</h2>
          
          <h3>9.1 Contact</h3>
          <p>
            Pour toute question concernant cette politique de confidentialité, contactez-nous :<br />
            <strong>Email :</strong> [ADRESSE_EMAIL]<br />
            <strong>Téléphone :</strong> [NUMERO_TELEPHONE]<br />
            <strong>Courrier :</strong> [ADRESSE_COMPLETE], [CODE_POSTAL] Strasbourg
          </p>
          
          <h3>9.2 Réclamations</h3>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
            auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :
          </p>
          <p>
            <strong>CNIL</strong><br />
            3 Place de Fontenoy<br />
            TSA 80715<br />
            75334 PARIS CEDEX 07<br />
            <strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>
          </p>
          
          <hr className="my-8" />
          
          <p className="text-sm text-gray-600">
            <em>Dernière mise à jour : [DATE_MAJ]</em>
          </p>
        </div>
      </div>
    </div>
  )
}