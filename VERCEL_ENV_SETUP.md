# Variables d'Environnement pour Vercel

## Instructions de Configuration

1. Aller sur votre projet Vercel
2. Aller dans **Settings** > **Environment Variables**
3. Ajouter les variables suivantes **pour tous les environnements** (Production, Preview, Development)

---

## Variables à Configurer

### Site Configuration

```
NEXT_PUBLIC_SITE_URL
Valeur: https://votre-domaine.com (ou https://votre-projet.vercel.app)
```

```
NEXT_PUBLIC_SITE_NAME
Valeur: Rayssa Harmes - Avocate à Strasbourg
```

---

### Contact Information

```
NEXT_PUBLIC_PHONE
Valeur: +33 7 45 04 83 95
```

```
NEXT_PUBLIC_EMAIL
Valeur: harmes.avocat@gmail.com
```

```
NEXT_PUBLIC_ADDRESS
Valeur: 24 avenue des Vosges
```

```
NEXT_PUBLIC_POSTAL_CODE
Valeur: 67000
```

```
NEXT_PUBLIC_CITY
Valeur: Strasbourg
```

---

### Professional Information

```
NEXT_PUBLIC_LAWYER_NAME
Valeur: Rayssa Harmes
```

```
NEXT_PUBLIC_BAR
Valeur: Barreau de Strasbourg
```

```
NEXT_PUBLIC_SIRET
Valeur: 91837784700028
```

---

### Third-Party Services

```
NEXT_PUBLIC_CALENDLY_URL
Valeur: https://calendly.com/harmes-avocat
```

```
FORMSPREE_ENDPOINT
Valeur: [À CONFIGURER APRÈS CRÉATION DU COMPTE FORMSPREE]
Instructions:
1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire
3. Copier l'endpoint (format: https://formspree.io/f/xxxxxxxx)
4. Ajouter cette variable sur Vercel
```

---

### Analytics (Optionnel)

```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN
Valeur: votre-domaine.com
Note: Seulement si vous utilisez Plausible Analytics
```

---

## Après Configuration

1. **Redéployer** le projet pour que les variables prennent effet
2. **Tester** toutes les fonctionnalités :
   - Widget Calendly
   - Formulaire de contact (après configuration Formspree)
   - Informations de contact affichées

---

## Configuration Formspree (À faire après le déploiement)

1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire nommé "Contact - Rayssa Harmes"
3. Copier l'endpoint fourni
4. Ajouter la variable `FORMSPREE_ENDPOINT` sur Vercel
5. Redéployer le projet
6. Tester le formulaire de contact sur le site en production

---

## Commandes Utiles Vercel CLI (Optionnel)

Si vous utilisez Vercel CLI:

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Lier le projet
vercel link

# Ajouter une variable d'environnement
vercel env add NEXT_PUBLIC_SITE_URL

# Pull les variables en local
vercel env pull
```

---

## Notes Importantes

- ✅ Toutes les variables `NEXT_PUBLIC_*` sont exposées au client (browser)
- ✅ La variable `FORMSPREE_ENDPOINT` n'est PAS exposée (sécurisée côté serveur)
- ✅ Redéployer après chaque modification de variable d'environnement
- ✅ Les variables sont chiffrées par Vercel
