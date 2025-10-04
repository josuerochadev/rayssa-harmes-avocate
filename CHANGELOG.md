# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Corrigé
- Correction des violations de strict mode dans les tests E2E
- Correction des sélecteurs de tests pour éviter les interceptions d'éléments
- Correction de la route `/témoignages` en `/temoignages` dans les tests
- Amélioration de la stabilité des tests E2E en CI

### Documentation
- Mise à jour du README avec les informations exactes du projet
- Ajout de la palette de couleurs correcte (terracotta)
- Documentation de la section tests (Vitest + Playwright)
- Ajout de ce CHANGELOG

## [0.1.0] - 2024-10-03

### Ajouté
- **Tests** : Suite de tests complète avec couverture industrielle
  - Tests unitaires avec Vitest et Testing Library
  - Tests E2E avec Playwright (navigation, formulaires, contenu)
  - Couverture de code avec Vitest Coverage
- **Bibliothèque utilitaire** : Validation, formatage et helpers de chaînes
- **CI/CD** : Pipeline GitHub Actions avec lint, type-check, tests et build
- **Structure de données** : Centralisation des données statiques dans `/data`
- **Hooks personnalisés** : `useContactForm` pour la logique de formulaire

### Modifié
- **Refactoring majeur** : Élimination de la duplication dans la navigation
- **Composants de formulaire** : Division en composants réutilisables plus petits
- **Métadonnées de domaine** : Centralisation pour réduire la duplication de code
- **Dépendances** : Mise à jour et correction des vulnérabilités de sécurité
- **Nom du projet** : Renommé en `rayssa-harmes-avocate`

### Corrigé
- Erreurs ESM dans la configuration Vitest
- Erreurs CI avec passage de jsdom à happy-dom
- Échecs des tests unitaires et E2E en CI
- Timeouts des tests E2E avec amélioration de la stabilité
- Placeholders restants dans la politique de confidentialité
- Upload d'artefacts GitHub Actions (mise à jour vers v4)

### Sécurité
- Correction des vulnérabilités de sécurité dans les dépendances

## [0.0.1] - 2024-10-01

### Ajouté
- Configuration initiale du projet Next.js 14
- Architecture App Router complète
- Pages principales : Accueil, À propos, Domaines, Témoignages, Honoraires, Contact
- 5 domaines d'intervention détaillés : Contrats, Famille, Étrangers, Travail, Immobilier
- Composants réutilisables : Header, Footer, DomainCard, TestimonialCard
- Design system avec Tailwind CSS (palette terracotta)
- Optimisations SEO : métadonnées, structured data JSON-LD, sitemap
- Conformité RGPD : Politique de confidentialité, mentions légales
- Accessibilité WCAG 2.1 AA
- Intégrations : Formspree (contact), Calendly (RDV)
- Configuration TypeScript stricte
- Configuration ESLint et Prettier

[Non publié]: https://github.com/josuerochadev/rayssa-eskinazi-avocate/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/josuerochadev/rayssa-eskinazi-avocate/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/josuerochadev/rayssa-eskinazi-avocate/releases/tag/v0.0.1
