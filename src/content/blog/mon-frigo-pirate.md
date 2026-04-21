---
title: Inverser le temps pour cacher un secret - Voyage au cœur d’un coffre-fort multi-agents
excerpt: Inverser le temps pour cacher un secret - Voyage au cœur d’un coffre-fort multi-agents
publishDate: 'Feb 26 2026'
isFeatured: true
tags:
  - Cybersécurité
seo:
  image:
    src: '/temporalBreach.webp'
    alt: Brèche temporel
---

![Brèche temporel](/temporalBreach.webp)

Imaginez que vous deviez cacher une bille d’or dans une piscine remplie de millions de billes de plastique identiques. C’est facile : n’importe qui peut plonger et la trouver.

Maintenant, imaginez que vous donnez un grand coup de pied dans la piscine, que vous mélangez tout, et qu’en plus, chaque bille change de place selon une danse mathématique précise que vous seul connaissez. Pour un observateur, la piscine est devenue un chaos total. Mais pour vous, il suffit de “rembobiner” le film pour que la bille d’or revienne exactement dans votre main.

C’est le cœur de mon projet : le **Temporal Breach Protocol**.

## Le problème : Les serrures que l’on peut casser

Aujourd’hui, la plupart de nos secrets (mots de passe, fichiers) sont protégés par des problèmes de mathématiques très difficiles, comme la factorisation de grands nombres. C’est solide… jusqu’à ce qu’un ordinateur quantique arrive et résolve le problème en un claquement de doigts.

J’ai voulu explorer une autre voie. Pas une équation, mais un **système dynamique**.

## Étape 1 : Le camouflage (L’injection)

Dans mon système, on commence par créer une grille géante de 4096 cases (un “Lattice”). On y cache notre secret — les “Agents Dorés” — à des endroits que vous seul connaissez. Tout le reste est rempli de bruit, de faux agents. À ce stade, le secret est là, mais il est noyé dans la foule.

## Étape 2 : La “Moulinette” (Le Tissage)

C’est ici que la magie opère. On applique deux couches de chaos :

1. **Le Shuffling** : On téléporte chaque agent à l’autre bout de la grille selon une séquence ultra-complexe.
2. **La Danse de Margolus** : On prend des petits carrés de 2x2 cases et on les fait pivoter. En alternant ces rotations, l’information finit par se disperser comme une goutte d’encre dans un verre d’eau.
Après quelques tours, votre secret a disparu. Il n’est plus “quelque part”, il est “partout” et “nulle part” à la fois.

## Étape 3 : La Brèche Temporelle (Le déchiffrement)

C’est la partie Feynman : La nature est réversible. Si vous connaissez la danse exacte, vous pouvez inverser le sens de rotation des carrés et annuler les téléportations. En “remontant le temps” algorithmique, le chaos s’ordonne soudainement. Les agents dorés reprennent leur place initiale.

Une fois les bits récupérés, on les passe dans un moulinet final (SHA-256) pour obtenir la clé qui ouvre votre fichier AES-256.

## Pourquoi c’est important ? (Le futur Post-Quantique)

Ce qui est fascinant, c’est que ce chaos n’a pas de “point faible” mathématique. Un ordinateur quantique peut calculer vite, mais il ne peut pas “deviner” la structure du chaos sans connaître la clé de la danse. Mon PoC prouve que l’on peut obtenir une réversibilité de 100% : pas un seul bit n’est perdu dans la tempête.

## Conclusion : La science est un jeu d’enfant

Ce projet est une **Preuve de Concept (PoC)** académique. Ce n’est pas encore l’outil qui remplacera votre gestionnaire de mots de passe, mais c’est une démonstration que l’on peut construire des forteresses numériques en utilisant les lois du désordre et du temps.

Comme le disait Feynman : _“Ce que je ne peux pas créer, je ne le comprends pas.”_ En créant ce chaos et en apprenant à le dompter, on comprend un peu mieux comment protéger nos vies numériques demain.

**Pour les curieux**: Si vous voulez voir le code, le diagramme ou lire le papier scientifique (avec toutes les équations mathématiques), j’ai tout mis en open-source sur mon GitHub.
[https://github.com/martindufresne/poc-temporal-breach](https://github.com/martindufresne/poc-temporal-breach)