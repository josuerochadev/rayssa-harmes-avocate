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
- **Langage** : TypeScript
- **Icons** : Lucide React
- **Tests unitaires** : Vitest + Testing Library
- **Tests E2E** : Playwright
- **Déploiement** : Vercel
- **Analytics** : Plausible (RGPD-friendly)
- **Formulaires** : Formspree
- **Rendez-vous** : Calendly

## 🎨 Design & Branding

### Palette de couleurs
- **Primaire** : `#A85840` (terracotta principal)
- **Secondaire** : `#F9F6F2` (beige très clair)
- **Accent** : `#D4A574` (or discret / sable doré)
- **Success** : `#2D5F3F` (vert forêt discret)
- **Neutral** : Gamme de gris 50-900

### Typographie
- **Titres** : Roboto Slab (Serif)
- **Texte** : Inter (Sans-serif)
- **Taille de base** : 18px (1.125rem) pour une meilleure lisibilité

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
│   ├── temoignages/            # Témoignages clients
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
├── e2e/                       # Tests End-to-End (Playwright)
├── lib/                       # Utilitaires et helpers
├── data/                      # Données statiques
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
npm run dev               # Démarrer le serveur de développement
npm run build             # Build de production
npm run start             # Démarrer le serveur de production
npm run lint              # Linter le code
npm run type-check        # Vérification TypeScript
```

Le site sera accessible à l'adresse `http://localhost:3000`.

## 🧪 Tests

Le projet inclut des tests unitaires (Vitest) et des tests End-to-End (Playwright).

### Tests unitaires

```bash
npm run test              # Lancer les tests en mode watch
npm run test:run          # Lancer les tests une fois
npm run test:ui           # Interface UI pour les tests
npm run test:coverage     # Générer le rapport de couverture
```

### Tests E2E

```bash
npm run test:e2e          # Lancer les tests E2E
npm run test:e2e:ui       # Interface UI pour les tests E2E
npm run test:e2e:headed   # Lancer avec navigateur visible
```

### Lancer tous les tests

```bash
npm run test:all          # Tests unitaires + E2E
```

## 🔄 Workflow de Développement

### Stratégie Git Flow

Le projet utilise une stratégie Git Flow simplifiée avec deux branches principales :

- **`main`** : Branche de production (déploiement automatique sur Vercel)
- **`dev`** : Branche de développement (intégration et tests)

#### Workflow recommandé

1. **Créer une feature branch** depuis `dev` :
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```

2. **Développer et commiter régulièrement** :
   ```bash
   git add .
   git commit -m "feat: ajouter nouvelle fonctionnalité"
   ```

3. **Pousser et créer une Pull Request** vers `dev` :
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   # Créer une PR sur GitHub vers dev
   ```

4. **Merger vers main** après validation sur `dev` :
   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```

### Pre-commit Hooks (Husky + lint-staged)

Le projet utilise **Husky** et **lint-staged** pour automatiser les vérifications avant chaque commit.

#### Hooks configurés

Avant chaque commit, les vérifications suivantes s'exécutent automatiquement :

1. **ESLint** : Analyse et correction automatique du code sur les fichiers stagés
2. **TypeScript** : Vérification de la compilation TypeScript

```bash
# Ces commandes s'exécutent automatiquement avant chaque commit
npx lint-staged          # ESLint sur fichiers stagés (.ts, .tsx, .js, .jsx)
npm run type-check       # Vérification TypeScript
```

#### Que faire si le hook échoue ?

- **ESLint errors** : Corrigez les erreurs signalées dans le code
- **TypeScript errors** : Résolvez les erreurs de typage
- Le commit sera bloqué jusqu'à ce que toutes les vérifications passent

#### Désactiver temporairement (non recommandé)

```bash
git commit --no-verify -m "votre message"  # Bypass les hooks (à éviter !)
```

### Conventions de Commit

Le projet utilise **Conventional Commits** pour des messages de commit standardisés :

```
<type>(<scope>): <description>

[corps optionnel]

[footer optionnel]
```

#### Types de commit

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Modification de la documentation
- `style`: Changements de style (formatage, etc.)
- `refactor`: Refactoring du code
- `test`: Ajout ou modification de tests
- `chore`: Tâches de maintenance (dépendances, config, etc.)
- `perf`: Amélioration des performances

#### Exemples

```bash
git commit -m "feat: ajouter section témoignages clients"
git commit -m "fix: corriger validation formulaire de contact"
git commit -m "docs: mettre à jour README avec instructions deployment"
git commit -m "refactor: optimiser performance composant ContactForm"
git commit -m "test: ajouter tests E2E pour navigation"
```

### Configuration locale

Les hooks sont automatiquement installés lors du `npm install` grâce au script `prepare` dans `package.json`.

Si vous clonez le projet pour la première fois :

```bash
npm install              # Installe les dépendances + configure Husky
```

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

### CI/CD avec GitHub Actions

Le projet inclut une pipeline CI/CD qui s'exécute automatiquement :
- ✅ Vérification TypeScript
- ✅ Lint du code
- ✅ Tests unitaires (Vitest)
- ✅ Tests E2E (Playwright)
- ✅ Build de production

Le badge CI en haut du README indique le statut de la dernière exécution.

### Déploiement automatique

1. Poussez votre code sur GitHub
2. Connectez votre repository à [Vercel](https://vercel.com)
3. Configurez les variables d'environnement dans les paramètres Vercel
4. Le déploiement se fera automatiquement après chaque push sur `main`

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

### Configuration
- [ ] Remplacer tous les placeholders `[PLACEHOLDER]`
- [ ] Ajouter la photo professionnelle
- [ ] Configurer Formspree
- [ ] Configurer Calendly
- [ ] Intégrer Google Maps (optionnel)
- [ ] Ajouter Plausible Analytics

### Tests
- [ ] Tous les tests unitaires passent (`npm run test:run`)
- [ ] Tous les tests E2E passent (`npm run test:e2e`)
- [ ] Vérification TypeScript sans erreurs (`npm run type-check`)
- [ ] Lint sans erreurs (`npm run lint`)
- [ ] Tester le formulaire de contact
- [ ] Vérifier l'accessibilité

### Déploiement
- [ ] Tester sur mobile
- [ ] Configurer les redirections si nécessaire
- [ ] Mettre à jour le sitemap si ajout de pages
- [ ] Test final sur tous les navigateurs
- [ ] Vérifier le build de production (`npm run build`)

---

**Développé avec ❤️ pour la profession d'avocat**

Site conforme aux exigences déontologiques et aux standards web modernes.