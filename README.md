# Site Vitrine Avocate Strasbourg

[![CI](https://github.com/josuerochadev/rayssa-eskinazi-avocate/actions/workflows/ci.yml/badge.svg)](https://github.com/josuerochadev/rayssa-eskinazi-avocate/actions/workflows/ci.yml)

Site vitrine professionnel pour un avocate basé à Strasbourg, développé avec Next.js 14 et déployé sur Vercel.

## 🎯 Objectifs

- **Crédibilité** : Présentation professionnelle et expertise juridique
- **Visibilité locale** : SEO optimisé pour Strasbourg et région
- **Génération de leads** : Formulaire de contact et prise de RDV
- **Conformité** : Respect des usages de la profession d'avocat

## 🛠 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Déploiement** : Vercel
- **Analytics** : Plausible (RGPD-friendly)
- **Formulaires** : Formspree
- **Rendez-vous** : Calendly
- **Langues** : TypeScript

## 🎨 Design & Branding

### Palette de couleurs
- **Primaire** : `#7A3E1E` (bordeaux)
- **Secondaire** : `#F2E8DC` (beige doux)
- **Accent** : `#B58B00` (doré discret)
- **Blanc** : `#FFFFFF`
- **Gris texte** : `#333333`

### Typographie
- **Titres** : Roboto Slab (Serif)
- **Texte** : Inter (Sans-serif)

## 📁 Structure du Projet

```
├── app/                          # App Router (Next.js 14)
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   ├── a-propos/                # Page À propos
│   ├── domaines/                # Domaines d'intervention
│   │   ├── contrats/           # Droit des contrats
│   │   ├── famille/            # Droit de la famille
│   │   ├── etrangers/          # Droit des étrangers
│   │   ├── travail/            # Droit du travail
│   │   └── immobilier/         # Droit immobilier
│   ├── témoignages/            # Témoignages clients
│   ├── honoraires/             # Grille tarifaire
│   ├── contact/                # Contact et RDV
│   ├── mentions-legales/       # Mentions légales
│   ├── politique-confidentialite/ # RGPD
│   ├── sitemap.ts             # Plan du site
│   ├── robots.ts              # Robots.txt
│   └── manifest.ts            # PWA Manifest
├── components/                 # Composants réutilisables
│   ├── layout/                # Header, Footer
│   ├── ui/                    # Composants UI
│   └── sections/              # Sections spécifiques
├── public/                    # Assets statiques
└── package.json
```

## 🚀 Installation et Setup

### 1. Installation des dépendances

```bash
npm install
```

### 2. Configuration des variables d'environnement

Copiez le fichier `.env.example` vers `.env.local` et remplissez les valeurs :

```bash
cp .env.example .env.local
```

Variables à configurer :
```
# Informations du site
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_LAWYER_NAME="Nom Prénom"
NEXT_PUBLIC_PHONE="+33 X XX XX XX XX"
NEXT_PUBLIC_EMAIL="contact@votre-domaine.com"

# Services tiers
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/votre-calendly"
FORMSPREE_ENDPOINT="https://formspree.io/f/YOUR_FORM_ID"
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="votre-domaine.com"
```

### 3. Développement local

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:3000`.

## 📝 Contenus à Personnaliser

### Informations essentielles à remplacer

1. **Informations personnelles** (marquées par `[PLACEHOLDER]`) :
   - `[NOM PRÉNOM]` - Nom de l'avocate
   - `[ADRESSE_COMPLETE]` - Adresse du cabinet
   - `[NUMERO_TELEPHONE]` - Numéro de téléphone
   - `[ADRESSE_EMAIL]` - Adresse e-mail
   - `[NUMERO_SIRET]` - SIRET du cabinet
   - `[NUMERO_TVA]` - Numéro de TVA
   - `[ANNÉE]` - Année de prestation de serment
   - `[UNIVERSITÉ]` - Université de formation

2. **Services tiers** :
   - URL Calendly dans `CalendlyWidget.tsx`
   - Endpoint Formspree dans `ContactForm.tsx`
   - Intégrer Google Maps dans `/contact`

3. **Assets visuels** :
   - Photo professionnelle (remplacer les placeholders)
   - Favicon et icônes (`/public/`)
   - Images illustratives si nécessaire

### Contenus rédigés et prêts

- ✅ Textes de présentation pour chaque page
- ✅ Descriptions des domaines d'intervention
- ✅ 8 témoignages clients (à personnaliser)
- ✅ 4 cas de succès détaillés (à adapter)
- ✅ Politique de confidentialité RGPD
- ✅ Mentions légales

## 🔧 Configuration des Services Tiers

### Formspree (Formulaire de contact)

1. Créez un compte sur [Formspree](https://formspree.io)
2. Créez un nouveau formulaire
3. Récupérez l'endpoint et ajoutez-le dans `.env.local`
4. Le formulaire inclut déjà la validation et le consentement RGPD

### Calendly (Prise de RDV)

1. Configurez votre Calendly avec un créneau "Consultation gratuite 15min"
2. Récupérez le lien public
3. Ajoutez-le dans `.env.local`
4. Le widget s'affichera automatiquement

### Plausible Analytics

1. Créez un compte [Plausible](https://plausible.io)
2. Ajoutez votre domaine
3. Intégrez le script dans `layout.tsx` :

```tsx
<script defer data-domain="votre-domaine.com" src="https://plausible.io/js/script.js"></script>
```

## 🚀 Déploiement sur Vercel

### Déploiement automatique

1. Poussez votre code sur GitHub
2. Connectez votre repository à [Vercel](https://vercel.com)
3. Configurez les variables d'environnement dans les paramètres Vercel
4. Le déploiement se fera automatiquement

### Variables d'environnement Vercel

Dans les paramètres Vercel, ajoutez toutes les variables de votre `.env.local`.

### Configuration DNS

1. Ajoutez votre domaine dans Vercel
2. Configurez les enregistrements DNS selon les instructions Vercel
3. Le certificat SSL sera automatiquement généré

## 📊 SEO et Performance

### Optimisations incluses

- ✅ Métadonnées optimisées pour chaque page
- ✅ Données structurées JSON-LD (LegalService)
- ✅ Sitemap XML automatique
- ✅ Robots.txt configuré
- ✅ Images optimisées avec `next/image`
- ✅ Lazy loading
- ✅ Accessibilité AA (WCAG 2.1)
- ✅ Core Web Vitals optimisés

### SEO Local Strasbourg

- Mots-clés ciblés : "avocat Strasbourg", "droit des contrats Strasbourg", etc.
- Schema LegalService avec zone de service
- Langues multiples affichées (FR, EN, PT, ES)
- Informations de contact structurées

## 🛡 Conformité et Accessibilité

### RGPD
- ✅ Politique de confidentialité complète
- ✅ Formulaire avec consentement explicite
- ✅ Analytics respectueux (Plausible)
- ✅ Pas de cookies tiers non essentiels

### Accessibilité
- ✅ Contraste AA respecté
- ✅ Navigation au clavier
- ✅ Lecteurs d'écran supportés
- ✅ Tailles de police adaptées (16px+)
- ✅ Focus states visibles

### Profession d'avocat
- ✅ Ton professionnel et sobre
- ✅ Pas de promesses de résultats
- ✅ Mentions déontologiques
- ✅ Transparence sur les honoraires
- ✅ Secret professionnel respecté

## 🎨 Composants Disponibles

### Layout
- `Header` - Navigation principale avec menu responsive
- `Footer` - Informations de contact et liens

### UI Components
- `DomainCard` - Carte domaine d'intervention
- `TestimonialCard` - Témoignage client
- `CaseStudyItem` - Cas de succès
- `ContactForm` - Formulaire de contact avec validation
- `CalendlyWidget` - Widget de prise de RDV
- `LanguageBadges` - Badges des langues parlées

### Sections
- `Hero` - Section héro avec CTA

## 🔄 Maintenance et Mises à Jour

### Mises à jour régulières

1. **Contenu** : Actualisez les témoignages et cas de succès
2. **Tarifs** : Maintenez la grille tarifaire à jour
3. **Formations** : Ajoutez les nouvelles formations/certifications
4. **Actualité juridique** : Blog optionnel pour le SEO

### Monitoring

- **Analytics** : Suivez les performances via Plausible
- **Vercel** : Monitoring des performances et erreurs
- **SEO** : Utilisez Google Search Console

## 📞 Support

Pour toute question technique ou modification :
- Consultez la documentation Next.js
- Vérifiez les composants dans `/components`
- Testez les modifications en local avant déploiement

## 📋 Checklist de Mise en Production

- [ ] Remplacer tous les placeholders `[PLACEHOLDER]`
- [ ] Ajouter la photo professionnelle
- [ ] Configurer Formspree
- [ ] Configurer Calendly
- [ ] Intégrer Google Maps
- [ ] Ajouter Plausible Analytics
- [ ] Tester le formulaire de contact
- [ ] Vérifier l'accessibilité
- [ ] Tester sur mobile
- [ ] Configurer les redirections si nécessaire
- [ ] Mettre à jour le sitemap si ajout de pages
- [ ] Test final sur tous les navigateurs

---

**Développé avec ❤️ pour la profession d'avocat**

Site conforme aux exigences déontologiques et aux standards web modernes.