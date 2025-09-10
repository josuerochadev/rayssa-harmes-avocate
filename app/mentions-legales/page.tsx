import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - Cabinet d\'Avocat Strasbourg',
  description: 'Mentions légales du cabinet d\'avocat. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation du site.',
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Mentions Légales</h1>
          
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Nom :</strong> [NOM PRÉNOM]<br />
            <strong>Profession :</strong> Avocat<br />
            <strong>Adresse :</strong> [ADRESSE_COMPLETE], [CODE_POSTAL] Strasbourg<br />
            <strong>Téléphone :</strong> [NUMERO_TELEPHONE]<br />
            <strong>Email :</strong> [ADRESSE_EMAIL]<br />
            <strong>SIRET :</strong> [NUMERO_SIRET]<br />
            <strong>TVA :</strong> [NUMERO_TVA]<br />
          </p>
          
          <h2>2. Barreau et assurance</h2>
          <p>
            <strong>Barreau :</strong> Barreau de Strasbourg<br />
            <strong>Assurance Responsabilité Civile Professionnelle :</strong> [NOM_ASSURANCE]<br />
            <strong>Adresse de l&apos;assureur :</strong> [ADRESSE_ASSURANCE]<br />
            <strong>Couverture géographique :</strong> France et Union Européenne
          </p>
          
          <h2>3. Règles professionnelles</h2>
          <p>
            La profession d&apos;avocat est régie par :
          </p>
          <ul>
            <li>La loi n° 71-1130 du 31 décembre 1971 portant réforme de certaines professions judiciaires et juridiques</li>
            <li>Le décret n° 91-1197 du 27 novembre 1991 organisant la profession d&apos;avocat</li>
            <li>Le Règlement Intérieur National (RIN) de la profession d&apos;avocat</li>
            <li>Le Code de déontologie des avocats européens</li>
          </ul>
          
          <h2>4. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
          
          <h2>5. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
          
          <h2>6. Données personnelles</h2>
          <p>
            Les informations recueillies sur ce site font l&apos;objet d&apos;un traitement informatique destiné à la gestion des demandes de contact. 
            Elles sont destinées uniquement au cabinet d&apos;avocat et ne sont transmises à aucun tiers.
          </p>
          <p>
            Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au RGPD, 
            vous bénéficiez d&apos;un droit d&apos;accès, de rectification, de portabilité et d&apos;effacement des informations qui vous concernent. 
            Pour exercer ce droit, contactez-nous à l&apos;adresse : [ADRESSE_EMAIL]
          </p>
          
          <h2>7. Cookies</h2>
          <p>
            Ce site utilise des cookies de mesure d&apos;audience (Plausible Analytics) qui respectent votre vie privée et ne nécessitent pas votre consentement. 
            Ces cookies ne collectent aucune donnée personnelle et sont conformes aux recommandations de la CNIL.
          </p>
          
          <h2>8. Responsabilité</h2>
          <p>
            Les informations contenues sur ce site le sont à titre purement informatif et ne constituent pas un conseil juridique. 
            Seule une consultation personnalisée peut donner lieu à un conseil adapté à une situation particulière.
          </p>
          <p>
            L&apos;éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, 
            lors de l&apos;accès au site, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées, 
            soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
          </p>
          
          <h2>9. Liens hypertextes</h2>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres ressources présentes sur le réseau Internet 
            ne sauraient engager la responsabilité de l&apos;éditeur.
          </p>
          
          <h2>10. Litiges</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. 
            En cas de litige, les tribunaux français seront seuls compétents.
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