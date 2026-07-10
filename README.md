# Site Web Martin Dufresne 2026

Ce site est un espace dédié au partage de mes projets de R&D, de mes publications et de mes réflexions sur l’évolution des systèmes numériques et biologiques. Explorez ici la convergence entre la transmission des savoirs technologiques et l'étude de la genèse des formes.

## Caractéristiques du Thème:

- ✅ **Astro 7** (Mise à jour majeure, performances accrues)
- ✅ **Support multilingue natif (FR / EN)** avec sélecteur de langue épuré
- ✅ **Section Éducation & Inscriptions** avec intégration Stripe (Plans uniques et étalés)
- ✅ Modes clair et sombre (nouvelles icônes Lucide épurées)
- ✅ Section principale avec biographie dynamique et localisée
- ✅ Pagination
- ✅ Gestion des tags localisés
- ✅ Transitions entre les vues (View Transitions)
- ✅ Tailwind CSS
- ✅ Conception responsive optimisée pour mobile
- ✅ Optimisation SEO avec URL canoniques et données OpenGraph
- ✅ Plan du site
- ✅ Flux RSS
- ✅ Compatibilité Markdown et MDX

## Intégrations de modèles

- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/

## Structure du projet et multilingue

Le contenu du site est structuré par langue dans les répertoires sous `src/content/` (collections) :

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   │   ├── fr/      <-- Articles en français
│   │   │   └── en/      <-- Articles en anglais
│   │   ├── pages/
│   │   │   ├── fr/      <-- Pages statiques en français (apropos, contact)
│   │   │   └── en/      <-- Pages statiques en anglais (about, contact)
│   │   └── projects/
│   │       ├── fr/      <-- Projets en français
│   │       └── en/      <-- Projets en anglais
│   ├── data/
│   ├── i18n/            <-- Dictionnaires de traduction UI (ui.ts, utils.ts)
│   ├── icons/
│   ├── layouts/
│   ├── pages/           <-- Routes du site (les pages en anglais sont sous /pages/en/)
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Les ressources statiques, comme les images, sont placées dans le répertoire `public/`.

## Commandes Astro.js

Toutes les commandes sont exécutées depuis la racine du projet, depuis un terminal :

| Commande                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installe les dépendances                            |
| `npm run dev`             | Démarre le serveur de développement local sur `localhost:4321`      |
| `npm run build`           | Construisez votre site de production pour `./dist/`          |
| `npm run preview`         | Prévisualisez le build localement avant de le déployer.     |
| `npm run astro ...`       | Exécutez des commandes CLI comme `astro add`, `astro check` |
| `npm run astro -- --help` | Obtenez de l'aide pour utiliser l'interface de ligne de commande Astro.

## License

Sous licence [GPL-3.0](https://github.com/JustGoodUI/dante-astro-theme/blob/main/LICENSE).