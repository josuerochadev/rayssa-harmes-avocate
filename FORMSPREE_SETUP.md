# Guide de Configuration Formspree

Ce guide explique comment configurer Formspree pour le formulaire de contact du site.

## 📋 Présentation

Le formulaire de contact envoie les données **directement à Formspree** depuis le navigateur du client. Formspree gère :
- ✅ **Réception des emails** : Envoi automatique à votre adresse email
- ✅ **Anti-spam** : Protection contre les bots et soumissions abusives
- ✅ **Rate limiting** : Limitation automatique des soumissions
- ✅ **Validation** : Vérification des champs email

**Pas besoin de Vercel KV, Redis ou backend complexe !**

---

## 🚀 Configuration

### Étape 1 : Créer un Compte Formspree

1. Allez sur https://formspree.io
2. Créez un compte gratuit ou payant :
   - **Gratuit** : 50 soumissions/mois
   - **Gold ($10/mois)** : 1000 soumissions/mois + features avancées
   - **Premium ($40/mois)** : 10,000 soumissions/mois

### Étape 2 : Créer un Formulaire

1. Dans le dashboard Formspree, cliquez sur **"+ New Form"**
2. Configurez le formulaire :
   - **Name** : "Contact - harmes-avocat.fr"
   - **Email** : `harmes.avocat@gmail.com` (adresse qui recevra les messages)
   - **Redirect** : Laisser vide (géré par React)

3. Cliquez sur **"Create Form"**

4. **Récupérez l'endpoint** :
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

   Exemple : `https://formspree.io/f/mwpklqnr`

### Étape 3 : Configurer les Variables d'Environnement

**En local** : `.env.local`
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/YOUR_FORM_ID"
```

**Sur Vercel** :
1. Dashboard → Projet → Settings → Environment Variables
2. Ajoutez :
   - **Key** : `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - **Value** : `https://formspree.io/f/YOUR_FORM_ID`
   - **Environments** : Production, Preview, Development

3. Redéployez le projet

### Étape 4 : Configurer les Paramètres Formspree (Optionnel)

Dans le dashboard Formspree, Settings du formulaire :

**1. Notifications**
- ✅ Recevoir un email à chaque soumission
- ✅ Format de notification personnalisable

**2. Anti-spam**
- ✅ **Honeypot** : Activé par défaut (piège à bots)
- ✅ **reCAPTCHA** : Optionnel (si beaucoup de spam)
- ✅ **Blocklist** : Bloquer des domaines email spécifiques

**3. Confirmation Email**
- ✅ Envoyer un email de confirmation au client
- Template personnalisable

**4. Webhooks** (plan payant)
- Intégration avec Zapier, Slack, etc.

---

## 🧪 Tester le Formulaire

### Test en Local

1. Démarrez le serveur :
```bash
npm run dev
```

2. Allez sur http://localhost:3000/contact

3. Remplissez et soumettez le formulaire

4. Vérifiez :
   - ✅ Message de succès affiché
   - ✅ Email reçu sur `harmes.avocat@gmail.com`
   - ✅ Soumission visible dans le dashboard Formspree

### Test en Production

1. Allez sur https://harmes-avocat.fr/contact

2. Soumettez le formulaire

3. Vérifiez dans Formspree Dashboard → Forms → Submissions

---

## 📊 Formspree Dashboard

### Voir les Soumissions

1. Dashboard → Votre formulaire
2. Onglet **"Submissions"**
3. Vous verrez :
   - Date et heure de soumission
   - Tous les champs du formulaire
   - Adresse IP (anonymisée selon paramètres RGPD)

### Exporter les Données

1. Submissions → **"Export"**
2. Format : CSV ou JSON
3. Utile pour archivage ou analyse

---

## 🔒 Sécurité et RGPD

### Protection Anti-Spam Formspree

Formspree intègre plusieurs protections :
- **Honeypot fields** : Champs cachés pour piéger les bots
- **Rate limiting** : Max 2 soumissions/minute par IP
- **Email validation** : Vérification du format email
- **Blocklist** : Bloquer les domaines suspects

### RGPD

**Formspree est conforme RGPD** :
- ✅ Serveurs en EU disponibles (plan payant)
- ✅ Accord de traitement des données (DPA)
- ✅ Suppression des données sur demande
- ✅ Anonymisation des IP optionnelle

**Notre implémentation** :
- ✅ Consentement RGPD obligatoire (checkbox)
- ✅ Message d'avertissement sur données sensibles
- ✅ Politique de confidentialité liée

---

## 🎨 Personnalisation Avancée

### Champs Formspree Spéciaux

Vous pouvez ajouter des champs spéciaux dans le formulaire :

```typescript
// Dans formData
{
  name: "John Doe",
  email: "john@example.com",
  message: "Mon message",
  _subject: "Nouveau contact - harmes-avocat.fr", // Sujet custom
  _replyto: "john@example.com", // Reply-To automatique
  _cc: "backup@example.com", // CC
}
```

### Auto-Réponse

Dans Formspree Settings → Autoresponder :

```
Merci pour votre message !

Nous avons bien reçu votre demande concernant : {{subject}}

Nous vous recontacterons dans les plus brefs délais, généralement sous 24h ouvrées.

Cordialement,
Rayssa Harmes
Avocate au Barreau de Strasbourg
```

---

## 🚨 Dépannage

### Le formulaire ne s'envoie pas

**Vérifiez** :
1. Variable d'environnement configurée :
   ```bash
   echo $NEXT_PUBLIC_FORMSPREE_ENDPOINT
   ```

2. Console du navigateur (F12) :
   - Erreurs CORS ? → Vérifiez l'endpoint Formspree
   - Erreur 403 ? → Vérifiez que le formulaire est actif dans Formspree

3. Network tab :
   - Requête envoyée à `https://formspree.io/f/...` ?
   - Status code 200 = succès

### Emails non reçus

1. Vérifiez les **Spam/Courrier indésirable**
2. Vérifiez l'email configuré dans Formspree Settings
3. Vérifiez les notifications dans Formspree Settings → Notifications

### Rate Limiting Formspree

Si vous voyez "Too many requests" :
- Formspree limite à **2 soumissions/minute/IP**
- C'est normal et protège contre le spam
- Attendez 1 minute et réessayez

---

## 💰 Limites et Tarifs

### Plan Gratuit
- ✅ 50 soumissions/mois
- ✅ 1 formulaire
- ✅ Protection anti-spam basique
- ❌ Pas de webhooks
- ❌ Serveurs US uniquement

### Plan Gold ($10/mois)
- ✅ 1000 soumissions/mois
- ✅ Formulaires illimités
- ✅ Webhooks
- ✅ Serveurs EU
- ✅ Export CSV/JSON
- ✅ Support prioritaire

### Plan Premium ($40/mois)
- ✅ 10,000 soumissions/mois
- ✅ Toutes les features Gold
- ✅ Intégrations avancées
- ✅ White-label

**Recommandation pour vous** : Commencer avec le **Plan Gratuit**, upgrader si besoin.

---

## 📚 Ressources

- [Documentation Formspree](https://help.formspree.io/)
- [Formspree AJAX](https://help.formspree.io/hc/en-us/articles/360013580813-AJAX)
- [Formspree reCAPTCHA](https://help.formspree.io/hc/en-us/articles/360022811154)
- [Formspree RGPD](https://formspree.io/legal/privacy-policy)

---

## 🆘 Support

**Dashboard Formspree** :
- Support via chat (plans payants)
- Documentation : https://help.formspree.io

**Email** :
- support@formspree.io (plans payants)
