# Architecture du Projet

Ce document explique les choix techniques et architecturaux du site vitrine pour cabinet d'avocat à Strasbourg.

## Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Choix technologiques](#choix-technologiques)
- [Architecture de l'application](#architecture-de-lapplication)
- [Patterns et conventions](#patterns-et-conventions)
- [Performance et SEO](#performance-et-seo)
- [Tests](#tests)
- [Décisions architecturales](#décisions-architecturales)

## Vue d'ensemble

### Contexte et objectifs

Site vitrine professionnel pour un cabinet d'avocat avec les objectifs suivants :
- **Crédibilité** : Présentation professionnelle et expertise juridique
- **Visibilité locale** : Référencement optimisé pour Strasbourg et région
- **Génération de leads** : Formulaire de contact et prise de RDV en ligne
- **Conformité** : Respect RGPD et déontologie de la profession d'avocat

### Contraintes

- **Performance** : Score Lighthouse > 90
- **Accessibilité** : Conformité WCAG 2.1 AA
- **SEO** : Optimisation pour recherche locale
- **Mobile-first** : Responsive design prioritaire
- **Maintenance** : Code maintenable et documenté

## Choix technologiques

### Next.js 14 avec App Router

**Pourquoi Next.js ?**

1. **SEO-friendly par défaut**
   - Server-Side Rendering (SSR) pour un référencement optimal
   - Génération de sitemap automatique
   - Support natif des métadonnées et structured data

2. **Performance exceptionnelle**
   - Optimisation automatique des images avec `next/image`
   - Code splitting automatique
   - Préchargement intelligent des pages
   - Streaming avec React Server Components

3. **Developer Experience**
   - Hot Module Replacement rapide
   - Routing basé sur le système de fichiers
   - TypeScript first-class support
   - Écosystème riche et communauté active

**Pourquoi App Router (et non Pages Router) ?**

- **Architecture moderne** : Server Components par défaut
- **Layouts partagés** : Moins de duplication de code
- **Loading states** : Gestion native du chargement
- **Error boundaries** : Gestion d'erreurs améliorée
- **Streaming** : Meilleure performance perçue
- **Future-proof** : Direction officielle de Next.js

### Tailwind CSS

**Pourquoi Tailwind ?**

1. **Productivité**
   - Utility-first : développement rapide
   - Pas de context switching entre HTML/CSS
   - Design system intégré

2. **Performance**
   - PurgeCSS automatique
   - CSS minimal en production
   - Classes optimisées

3. **Maintenabilité**
   - Pas de styles orphelins
   - Cohérence visuelle garantie
   - Configuration centralisée (`tailwind.config.ts`)

### TypeScript

**Pourquoi TypeScript ?**

- **Sécurité** : Détection d'erreurs à la compilation
- **Maintenance** : Refactoring sûr et assisté
- **Documentation** : Types comme documentation vivante
- **DX** : Autocomplétion et IntelliSense
- **Scalabilité** : Facilite l'ajout de fonctionnalités

### Tests : Vitest + Playwright

**Pourquoi Vitest ?**

- **Vitesse** : Plus rapide que Jest grâce à Vite
- **Compatible** : API similaire à Jest (migration facile)
- **ESM natif** : Support moderne de JavaScript
- **DX** : Interface UI intégrée

**Pourquoi Playwright ?**

- **Cross-browser** : Chromium, Firefox, WebKit
- **Fiabilité** : Auto-waiting, retry automatique
- **CI-friendly** : Excellent support CI/CD
- **Developer Tools** : Trace viewer, codegen

## Architecture de l'application

### Structure des dossiers

```
rayssa-harmes-avocate/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Routes groupées
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page d'accueil
│
├── components/            # Composants React
│   ├── layout/           # Header, Footer, Navigation
│   ├── ui/               # Composants UI réutilisables
│   └── sections/         # Sections de pages
│
├── data/                 # Données statiques
│   ├── navigation.ts     # Menu de navigation
│   ├── domainDetails.ts  # Contenu des domaines
│   └── testimonials.ts   # Témoignages
│
├── lib/                  # Utilitaires et helpers
│   ├── metadata.ts       # Génération de métadonnées
│   ├── validation.ts     # Validation de formulaires
│   └── utils.ts          # Fonctions utilitaires
│
├── e2e/                  # Tests End-to-End
│   ├── navigation.spec.ts
│   ├── pages.spec.ts
│   └── contact-form.spec.ts
│
└── public/              # Assets statiques
    ├── images/
    └── fonts/
```

### Choix de structure

**Séparation par type vs par feature ?**

Nous avons choisi une **séparation par type** pour ce projet car :

1. **Taille du projet** : Site vitrine < 20 pages
2. **Réutilisabilité** : Composants partagés entre toutes les pages
3. **Simplicité** : Structure claire pour les développeurs
4. **Scalabilité** : Facile de migrer vers feature-based si nécessaire

**Centralisation des données (`/data`)**

- Évite la duplication de contenu
- Facilite les mises à jour (un seul endroit)
- Séparation contenu/présentation
- Type-safe avec TypeScript

**Bibliothèque utilitaire (`/lib`)**

- Fonctions pures et testables
- Réutilisation du code métier
- Point central pour la logique complexe

## Patterns et conventions

### Composants

**Hiérarchie des composants**

```
Layout Components (layout/)
  ↓
Section Components (sections/)
  ↓
UI Components (ui/)
```

**Conventions de nommage**

- **PascalCase** : Composants React (`DomainCard.tsx`)
- **camelCase** : Fonctions et variables
- **kebab-case** : Fichiers de données (`domain-details.ts`)

### Server vs Client Components

**Stratégie : Server Components par défaut**

```tsx
// Server Component (défaut)
export default function DomainCard({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Client Component (interactivité requise)
'use client'
export default function ContactForm() {
  const [formData, setFormData] = useState({})
  // ...
}
```

**Client Components uniquement pour :**
- État local (`useState`, `useReducer`)
- Effets (`useEffect`)
- Event handlers interactifs
- Browser APIs (localStorage, etc.)

### Gestion de l'état

**Pas de state management global** car :

1. **Simplicité** : Site vitrine sans état complexe
2. **Performance** : Pas de re-renders inutiles
3. **Server Components** : Données fetchées côté serveur
4. **Local state suffisant** : `useState` pour formulaires

### Custom Hooks

**Pattern : Extraction de logique réutilisable**

```typescript
// hooks/useContactForm.ts
export function useContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})

  const validateForm = () => { /* ... */ }
  const handleSubmit = async () => { /* ... */ }

  return { formData, errors, validateForm, handleSubmit }
}
```

Avantages :
- Logique testable séparément
- Réutilisation entre composants
- Séparation des responsabilités

## Performance et SEO

### Optimisations d'images

**Next.js Image Component**

```tsx
import Image from 'next/image'

<Image
  src="/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
/>
```

- Redimensionnement automatique
- WebP/AVIF automatique
- Lazy loading natif
- Placeholder blur

### SEO : Structured Data

**JSON-LD pour LegalService**

```typescript
export function generateDomainJsonLd(params) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': params.name,
    'description': params.description,
    'areaServed': 'Strasbourg, France',
    // ...
  }
}
```

Avantages :
- Rich snippets dans Google
- Meilleur CTR
- Confiance utilisateur

### Stratégie de cache

```typescript
// app/layout.tsx
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
}

// Revalidation pour pages statiques
export const revalidate = 3600 // 1 heure
```

## Tests

### Pyramide de tests

```
     /\
    /  \  E2E (Playwright)
   /____\
  /      \ Unit (Vitest)
 /________\
```

**Stratégie de test**

1. **Tests unitaires** : Fonctions pures, hooks, utils
2. **Tests de composants** : Rendu, interactions simples
3. **Tests E2E** : Parcours utilisateur critiques

### Organisation des tests

```
e2e/
├── navigation.spec.ts    # Navigation principale
├── pages.spec.ts         # Contenu des pages
└── contact-form.spec.ts  # Formulaire de contact

__tests__/
├── lib/
│   ├── validation.test.ts
│   └── utils.test.ts
└── components/
    └── ContactForm.test.tsx
```

### Tests E2E : Bonnes pratiques

- **Sélecteurs sémantiques** : `getByRole`, `getByText`
- **Attente automatique** : `toBeVisible()` attend l'élément
- **Isolation** : Chaque test est indépendant
- **Données réalistes** : Scénarios utilisateur réels

## Décisions architecturales

### ADR 001 : Choix de Next.js 14

**Contexte**
Besoin d'un framework React performant avec excellent SEO.

**Décision**
Utiliser Next.js 14 avec App Router.

**Conséquences**
✅ SEO excellent out-of-the-box
✅ Performance optimale
✅ Developer Experience supérieure
❌ Courbe d'apprentissage App Router
❌ Dépendance à Vercel (déploiement)

### ADR 002 : Pas de CMS

**Contexte**
Contenu statique, peu de mises à jour fréquentes.

**Décision**
Contenu hardcodé dans des fichiers TypeScript (`/data`).

**Alternatives considérées**
- Strapi/Contentful : Over-engineering pour ce besoin
- Markdown : Moins type-safe, plus complexe

**Conséquences**
✅ Simplicité maximale
✅ Type-safety avec TypeScript
✅ Pas de coûts supplémentaires
❌ Modifications nécessitent déploiement
❌ Éditeur non-technique doit passer par dev

### ADR 003 : Tailwind CSS

**Contexte**
Besoin d'un système de design cohérent et maintenable.

**Décision**
Utiliser Tailwind CSS avec palette personnalisée.

**Alternatives considérées**
- CSS Modules : Plus verbeux, moins productif
- Styled Components : Runtime overhead

**Conséquences**
✅ Développement rapide
✅ Bundle CSS minimal
✅ Design system cohérent
❌ Classes verboses dans le JSX
❌ Courbe d'apprentissage initiale

### ADR 004 : Vitest over Jest

**Contexte**
Besoin de tests unitaires rapides.

**Décision**
Utiliser Vitest au lieu de Jest.

**Raisons**
- Plus rapide (basé sur Vite)
- ESM natif (pas de transpilation)
- API compatible Jest (migration facile)
- Interface UI intégrée

**Conséquences**
✅ Tests 2-3x plus rapides
✅ Meilleure DX
❌ Écosystème moins mature que Jest

### ADR 005 : Server Components par défaut

**Contexte**
App Router encourage les Server Components.

**Décision**
Utiliser Server Components sauf nécessité d'interactivité.

**Conséquences**
✅ Moins de JavaScript côté client
✅ Meilleure performance
✅ SEO optimal
❌ Limitation : pas d'état local ni effets
❌ Courbe d'apprentissage pattern async

## Évolutions futures

### Court terme (v0.2.0)

- [ ] Ajout d'un blog juridique (SEO)
- [ ] Internationalisation (i18n) pour EN/PT
- [ ] Système de cache amélioré

### Moyen terme (v0.3.0)

- [ ] Espace client sécurisé
- [ ] Gestion de documents
- [ ] Paiement en ligne des honoraires

### Long terme (v1.0.0)

- [ ] Migration vers un CMS headless (si besoin éditorial)
- [ ] API pour intégrations tierces
- [ ] Application mobile (React Native)

## Ressources

### Documentation

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Playwright](https://playwright.dev)
- [Vitest](https://vitest.dev)

### Standards

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [RGPD](https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on)
- [Schema.org LegalService](https://schema.org/LegalService)

---

**Maintenu par** : Équipe de développement
**Dernière mise à jour** : Octobre 2024
