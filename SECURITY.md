# Sécurité

Ce document décrit les mesures de sécurité implémentées dans l'application.

## 📋 Vue d'ensemble

L'application implémente plusieurs couches de sécurité pour protéger les données des utilisateurs et prévenir les attaques courantes.

## 🔒 Mesures de sécurité implémentées

### 1. Validation côté client

**Fichier** : `lib/hooks/useContactForm.ts`

- ✅ **Validation frontend** : Toutes les données du formulaire sont validées avant envoi
- ✅ **Messages d'erreur** : Feedback immédiat à l'utilisateur
- ✅ **Sanitization** : Les données sont validées avec des règles strictes (email, longueur, etc.)

**Règles de validation** :
- Nom : requis, non vide
- Email : requis, format valide
- Téléphone : format optionnel
- Sujet : requis
- Message : requis, min 10 caractères
- Consentement RGPD : obligatoire

### 2. Protection Anti-Spam (Formspree)

**Service** : Formspree (https://formspree.io)

Le formulaire envoie directement les données à Formspree qui gère :

- ✅ **Rate limiting** : Maximum 2 soumissions par minute par IP
- ✅ **Honeypot fields** : Pièges à bots automatiques
- ✅ **Email validation** : Vérification des adresses email
- ✅ **Blocklist** : Filtrage des domaines suspects

**Avantages** :
- Pas de backend complexe à maintenir
- Protection professionnelle contre le spam
- Conforme RGPD
- Monitoring via dashboard Formspree

### 3. Content Security Policy (CSP) stricte

**Fichier** : `middleware.ts`

- ✅ **CSP avec nonce** : Scripts et styles inline sécurisés via nonce
- ✅ **Sources limitées** : Whitelist stricte des domaines autorisés
- ✅ **Protection XSS** : Empêche l'injection de scripts malveillants
- ✅ **strict-dynamic** : Permet le chargement dynamique sécurisé

**Politique CSP** :
```
default-src 'self';
script-src 'self' 'nonce-{random}' 'strict-dynamic' https://assets.calendly.com;
style-src 'self' 'nonce-{random}' https://fonts.googleapis.com https://assets.calendly.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://formspree.io https://*.formspree.io;
frame-src https://calendly.com;
object-src 'none';
base-uri 'self';
form-action 'self' https://formspree.io;
frame-ancestors 'none';
upgrade-insecure-requests;
```

**Domaines autorisés** :
- Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
- Calendly (calendly.com, assets.calendly.com)
- Formspree (formspree.io)
- Vercel Analytics (va.vercel-scripts.com, vitals.vercel-insights.com)

### 4. Headers de sécurité supplémentaires

**Fichier** : `middleware.ts`

- ✅ **X-Content-Type-Options** : `nosniff` - Empêche le MIME type sniffing
- ✅ **X-Frame-Options** : `DENY` - Protection contre le clickjacking
- ✅ **X-XSS-Protection** : `1; mode=block` - Protection XSS navigateur
- ✅ **Referrer-Policy** : `strict-origin-when-cross-origin` - Contrôle du referrer
- ✅ **Permissions-Policy** : Désactive caméra, micro, géolocalisation

### 5. Protection des images SVG

**Fichier** : `next.config.js`

- ✅ **CSP pour SVG** : Politique stricte avec sandbox
- ✅ **Content-Disposition** : Force le téléchargement des SVG
- ✅ **Script désactivé** : Empêche l'exécution de scripts dans les SVG

## 🚨 Points d'attention

### Formspree Configuration

⚠️ **Configuration requise** : Le endpoint Formspree doit être configuré via variable d'environnement

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**Voir** : `FORMSPREE_SETUP.md` pour le guide complet de configuration.

**Sécurité Formspree** :
- ✅ Protection anti-spam intégrée
- ✅ Rate limiting automatique (2 req/min/IP)
- ✅ Validation email
- ✅ Honeypot fields
- ✅ Conforme RGPD

### CSP et développement

⚠️ **Hot reload** : En développement, Next.js injecte des scripts pour le hot reload qui peuvent être bloqués par la CSP stricte.

**Solution** : La CSP utilise `strict-dynamic` pour permettre le chargement dynamique sécurisé.

## 🔐 Bonnes pratiques

### Données sensibles

- ❌ Ne jamais transmettre de données hautement sensibles via le formulaire public
- ✅ Utiliser le chiffrement HTTPS (TLS) pour toutes les communications
- ✅ Avertir les utilisateurs de ne pas inclure d'informations confidentielles

### Variables d'environnement

- ❌ Ne jamais commiter les fichiers `.env.local` ou `.env.production`
- ✅ Utiliser des secrets pour les clés sensibles
- ✅ Préfixer les variables publiques avec `NEXT_PUBLIC_`

### Monitoring

**À surveiller en production** :
- Taux de rejets HTTP 429 (rate limiting)
- Erreurs de validation backend
- Violations CSP (via CSP reporting)
- Tentatives de soumission suspectes

## 📚 Références

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [MDN CSP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Formspree Security](https://formspree.io/legal/security)

## 🔄 Améliorations futures possibles

1. **CAPTCHA** : Ajouter reCAPTCHA ou hCaptcha pour protection bot
2. **Rate limiting distribué** : Migrer vers Redis/Upstash
3. **CSP Reporting** : Configurer `report-uri` pour monitorer les violations
4. **Honeypot fields** : Champs cachés pour détecter les bots
5. **API abuse detection** : Analyser les patterns de requêtes suspectes
6. **CSRF tokens** : Protection contre les attaques CSRF (déjà géré par Next.js)
