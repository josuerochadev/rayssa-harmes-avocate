# Guide Vercel Analytics & Speed Insights

Ce guide explique comment utiliser Vercel Analytics et Speed Insights pour monitorer les performances et le trafic du site.

## 📋 Présentation

Le projet utilise **deux outils Vercel** :

### 1. **Vercel Analytics** 📊
- Tracking des visiteurs (pages vues, sessions, etc.)
- Sources de trafic (Google, direct, etc.)
- Données démographiques (pays, ville, appareil)
- **Conforme RGPD** (pas de cookies, données anonymisées)

### 2. **Vercel Speed Insights** ⚡
- **Core Web Vitals** en temps réel (LCP, FID, CLS, etc.)
- Monitoring de performance par page
- Détection des problèmes de performance
- Alertes automatiques

---

## ✅ Ce qui a été configuré

### Packages installés
```json
{
  "@vercel/analytics": "^1.5.0",
  "@vercel/speed-insights": "^1.2.0"
}
```

### Composants intégrés

**`app/layout.tsx`** :
```tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### CSP configurée

La Content Security Policy autorise Vercel Analytics :
- `https://va.vercel-scripts.com` (Analytics script)
- `https://vitals.vercel-insights.com` (Speed Insights)

---

## 🚀 Activation sur Vercel

### Étape 1 : Activer Analytics

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet `rayssa-harmes-avocate`
3. Onglet **"Analytics"** dans le menu latéral
4. Cliquez sur **"Enable Analytics"**

**C'est tout !** Aucune variable d'environnement n'est requise.

### Étape 2 : Activer Speed Insights

1. Dans le même projet sur Vercel
2. Onglet **"Speed Insights"**
3. Cliquez sur **"Enable Speed Insights"**

**Gratuit** : Inclus dans tous les plans Vercel (même le plan Hobby gratuit).

---

## 📊 Dashboard Analytics

### Accès au Dashboard

https://vercel.com/[votre-username]/rayssa-harmes-avocate/analytics

### Métriques Disponibles

**Pages vues** :
- Total de pages vues
- Visiteurs uniques
- Sessions
- Taux de rebond

**Sources de trafic** :
- Google Search
- Direct
- Réseaux sociaux
- Référents

**Démographie** :
- **Pays** : France, autres
- **Ville** : Strasbourg, Paris, etc.
- **Appareil** : Desktop, Mobile, Tablet
- **Navigateur** : Chrome, Firefox, Safari
- **OS** : Windows, macOS, iOS, Android

**Top Pages** :
- Pages les plus visitées
- Temps passé par page
- Taux de conversion

### Filtres

Vous pouvez filtrer par :
- **Période** : 24h, 7 jours, 30 jours, custom
- **Appareil** : Desktop, Mobile
- **Pays/Ville**
- **Source de trafic**

---

## ⚡ Speed Insights Dashboard

### Accès au Dashboard

https://vercel.com/[votre-username]/rayssa-harmes-avocate/speed-insights

### Core Web Vitals

**Métriques surveillées** :

| Métrique | Description | Cible | Importance |
|----------|-------------|-------|-----------|
| **LCP** | Largest Contentful Paint | < 2.5s | 🔴 Critique |
| **FID** | First Input Delay | < 100ms | 🔴 Critique |
| **CLS** | Cumulative Layout Shift | < 0.1 | 🔴 Critique |
| **FCP** | First Contentful Paint | < 1.8s | 🟡 Important |
| **TTFB** | Time to First Byte | < 600ms | 🟡 Important |
| **INP** | Interaction to Next Paint | < 200ms | 🔴 Critique |

### Real User Monitoring (RUM)

- ✅ Données **réelles** de vos visiteurs
- ✅ Distribution par appareil, pays, navigateur
- ✅ Détection des pages lentes
- ✅ Tendances dans le temps

### Score de Performance

Vercel calcule un **score global** basé sur :
- 75ème percentile des Core Web Vitals
- Pondération selon l'importance (LCP, FID, CLS)
- Couleur : 🟢 Bon | 🟡 À améliorer | 🔴 Mauvais

---

## 🔒 RGPD et Confidentialité

### Vercel Analytics est conforme RGPD

- ✅ **Pas de cookies** : Aucun cookie stocké
- ✅ **Données anonymisées** : Pas d'identification personnelle
- ✅ **Serveurs EU** : Données stockées en Europe
- ✅ **Pas de partage** : Données non vendues à des tiers

### Pas de bannière cookie nécessaire

Comme Vercel Analytics n'utilise pas de cookies et anonymise les données, **vous n'avez pas besoin de bannière de consentement** pour les analytics.

---

## 📈 Utilisation Avancée

### Événements Personnalisés (Analytics)

Vous pouvez tracker des événements spécifiques :

```tsx
import { track } from '@vercel/analytics'

// Exemple : Tracker un clic sur CTA
export default function CTAButton() {
  const handleClick = () => {
    track('cta_click', {
      location: 'homepage',
      button: 'Prendre RDV'
    })
  }

  return (
    <button onClick={handleClick}>
      Prendre RDV
    </button>
  )
}
```

**Voir les événements** :
- Dashboard Analytics → Custom Events

### Conversion Tracking

```tsx
import { track } from '@vercel/analytics'

// Dans le formulaire de contact après succès
track('form_submission', {
  form: 'contact',
  subject: formData.subject
})
```

---

## 🎯 Best Practices

### Performance

- ✅ Scripts chargés de manière optimale (defer, async)
- ✅ Poids minimal : ~1 KB pour Analytics, ~2 KB pour Speed Insights
- ✅ Pas d'impact sur le LCP ou FCP
- ✅ Compatible avec toutes les pages (App Router, Pages Router)

### Monitoring

**Vérifiez régulièrement** :
1. **Core Web Vitals** : Objectif 🟢 pour tous
2. **Pages lentes** : Identifier et optimiser
3. **Tendances** : Amélioration ou dégradation ?
4. **Alertes** : Configurer des notifications

### Alertes

Dans Settings → Notifications :
- ✅ Alerte si les Core Web Vitals se dégradent
- ✅ Email quotidien/hebdomadaire avec résumé
- ✅ Intégration Slack (plans payants)

---

## 💰 Tarifs Vercel

### Plan Hobby (Gratuit)
- ✅ Analytics **inclus** (10k events/mois)
- ✅ Speed Insights **inclus**
- ✅ Parfait pour un site vitrine

### Plan Pro ($20/mois)
- ✅ Analytics illimités
- ✅ Custom events illimités
- ✅ Export des données (CSV)
- ✅ Alertes Slack

**Pour vous** : Le **plan gratuit est largement suffisant** pour un site vitrine.

---

## 🧪 Tester

### En Local

Les composants sont injectés mais **ne trackent pas en local** (uniquement en production).

```bash
npm run dev
# Analytics et Speed Insights inactifs localement
```

### En Production

1. Déployez sur Vercel :
```bash
git push
```

2. Visitez https://harmes-avocat.fr

3. Vérifiez le dashboard :
   - Analytics : https://vercel.com/[username]/rayssa-harmes-avocate/analytics
   - Speed Insights : https://vercel.com/[username]/rayssa-harmes-avocate/speed-insights

4. Attendez quelques minutes pour voir les premières données

---

## 🆘 Dépannage

### Les données n'apparaissent pas

**Vérifiez** :
1. Analytics/Speed Insights **activés** sur Vercel
2. Déploiement en **production** (pas preview)
3. **Attendez 5-10 minutes** (délai de propagation)
4. Pas d'adblocker bloquant Vercel

### Erreurs CSP

Si vous voyez des erreurs CSP dans la console :

```
Refused to connect to 'https://vitals.vercel-insights.com'
```

**Solution** : Vérifiez que la CSP dans `middleware.ts` autorise bien :
- `https://va.vercel-scripts.com`
- `https://vitals.vercel-insights.com`

### Score de Performance Faible

Si Speed Insights montre 🔴 :

1. **Identifiez les problèmes** :
   - LCP trop lent ? → Optimiser images, fonts
   - CLS élevé ? → Fixer les dimensions d'images/ads
   - FID élevé ? → Réduire JavaScript

2. **Voir** : `PERFORMANCE.md` pour optimisations

---

## 📚 Ressources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Custom Events](https://vercel.com/docs/analytics/custom-events)

---

## ✅ Checklist d'Activation

- [ ] Analytics activé sur Vercel Dashboard
- [ ] Speed Insights activé sur Vercel Dashboard
- [ ] Site déployé en production
- [ ] Premières données visibles dans le dashboard (attendre 10min)
- [ ] Core Web Vitals 🟢 (objectif)

---

**Vercel Analytics et Speed Insights sont maintenant configurés !** 🎉

Aucune configuration supplémentaire nécessaire, tout fonctionne automatiquement après activation sur Vercel.
