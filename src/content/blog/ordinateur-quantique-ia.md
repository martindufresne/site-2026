---
title: J'ai appris à un ordinateur quantique à corriger ses propres erreurs (et ça a marché)
excerpt: Comment une pincée d'IA a permis de battre un standard vieux de 30 ans sur un processeur IBM.
publishDate: 'Feb 4 2026'
isFeatured: true
tags:
  - Quantique
seo:
  image:
    src: '/post-1.jpg'
    alt: A person standing at the window
---

![Plan du Protocole Dufresne](/protocole_Dufresne.png)

Imaginez que vous possédez deux pièces de monnaie magiques. Donnez-en une à Alice à Montréal et l'autre à Bob à Paris. Si Alice fait tourner sa pièce et obtient "Face", la pièce de Bob tombera instantanément sur "Face" aussi. Pas de délai, pas de triche. C'est ce qu'on appelle l'intrication quantique.

C'est la base de l'internet du futur : un réseau inviolable.

Mais il y a un problème. Dans la vraie vie, ces pièces magiques sont fragiles. Si quelqu'un éternue à côté de la pièce de Bob, ou s'il fait un peu trop chaud dans la pièce, la magie se brise. La pièce de Bob ne s'aligne plus sur celle d'Alice. On appelle ça le **bruit**.

Et aujourd'hui, les ordinateurs quantiques (comme ceux d'IBM) sont très bruyants. C'est comme essayer de chuchoter un secret à quelqu'un en plein milieu d'un concert de Heavy Metal.

## Le vieux manuel et la réalité du terrain

Depuis 1996, les physiciens ont une recette pour régler ce problème : la "purification" (le protocole BBPSSW, pour les intimes). L'idée est simple : on prend deux paires de pièces bruyantes, on les compare, on garde les bonnes et on jette les mauvaises. C'est une méthode élégante, mathématique et… rigide.

C'est là que j'ai tiqué.

Cette méthode suppose que le bruit est "parfaitement aléatoire". Mais sur un vrai processeur quantique (comme la puce Eagle d'IBM que j'ai utilisée), le bruit n'est pas juste du hasard. C'est un défaut physique : un qubit qui tourne un peu trop vite à gauche, un autre qui chauffe, une interférence micro-ondes…

Utiliser le vieux protocole de 1996 sur une machine de 2026, c'est comme essayer de réparer une Ferrari avec un manuel de Ford T. Ça marche un peu, mais ce n'est pas optimal.

## Mon idée : Et si on laissait la machine apprendre ?

Au lieu d'imposer à l'ordinateur une correction rigide ("Tourne de 90 degrés à droite !"), je me suis posé une question: **Et si on utilisait l'IA pour que l'ordinateur apprenne à compenser ses propres défauts**?

J'ai créé ce que j'appelle le "Protocole Dufresne" (il faut bien lui donner un nom !). Concrètement, j'ai inséré 18 petits boutons de réglage dans le circuit quantique. Au début, ces boutons sont réglés au hasard.
1. J'envoie des paires de photons (simulés par des qubits).
2. Je mesure combien arrivent correctement.
3. J'utilise un algorithme d'optimisation (le même genre que celui qui entraîne ChatGPT) pour tourner légèrement les boutons.
4. Je recommence.

Pour les curieux, voici à quoi ressemble le "moteur" de ce protocole. Ce n'est pas juste du code, c'est une architecture physique où j'intercale mes corrections (les blocs blancs) avant et après le cœur du système :

![Le plan du Protocole Dufresne. Les blocs blancs sont les zones où l'IA a le droit de modifier le circuit.](/protocole_Dufresne.png)
*<center>Le plan du Protocole Dufresne. Les blocs blancs sont les zones où l'IA a le droit de modifier le circuit.</center>*

C'est comme accorder une guitare à l'oreille. L'ordinateur "écoute" son propre bruit et ajuste ses paramètres pour l'annuler. On ne force pas la correction, on la trouve.

## La beauté mathématique de la chose

J'ai dû traduire cette intuition en langage mathématique rigoureux. C'est l'équation dont je suis le plus fier. Elle décrit comment mon circuit (𝑈) enveloppe l'opération classique avec des rotations correctrices (ℛ) à l'entrée et à la sortie :

![Formule Dufresne](/formula.png)

Ce que cette ligne raconte, c'est l'histoire d'un nettoyage : on prend le signal, on le redresse (ℛᵢₙ), on le purifie, et on le réoriente (ℛₘₑₐₛ) pour qu'il soit parfait à l'arrivée.

## Le moment de vérité : David contre Goliath

La théorie, c'est bien beau. Mais est-ce que ça marche sur une vraie machine ?
Je me suis connecté au cloud d'IBM Quantum et j'ai réservé du temps sur le processeur ibm_fez (une bête de 127 qubits). J'y ai lancé deux expériences :
1. Le protocole classique de 1996.
2. Mon protocole "adaptatif" entraîné par IA.

J'ai retenu mon souffle en attendant les résultats.

Le verdict est tombé. Le protocole classique a nettoyé le signal avec un taux d'erreur résiduel de **4.30%**. Mon protocole ? Il a descendu l'erreur à **3.62%**.

![En rouge, la réduction de l'erreur. Une victoire de 15.8% pour l'approche IA.](/error_reduction.png)
*<center>En rouge, la réduction de l'erreur. Une victoire de 15.8% pour l'approche IA.</center>*

Cela peut sembler peu, mais en relatif, c'est une réduction de **15.8% des erreurs**. C'est la différence entre un message qui passe et un message qui se perd. L'IA a réussi à trouver des micro-ajustements invisibles à l'œil nu pour compenser les défauts physiques de la puce d'IBM.

## Pourquoi c'est important ?

---

Ce que cette petite expérience montre, c'est que nous n'avons pas besoin d'attendre l'ordinateur quantique "parfait" pour faire des choses utiles.

Nous sommes dans l'ère du "NISQ" (*Noisy Intermediate-Scale Quantum*). Nos machines sont imparfaites, bruyantes et un peu capricieuses. Mais en combinant la force brute du quantique avec la souplesse de l'Intelligence Artificielle, nous pouvons nettoyer ce bruit.

Nous n'avons pas besoin de changer les lois de la physique. Nous avons juste besoin de meilleures "lunettes" pour voir à travers le brouillard. Et l'IA est une excellente paire de lunettes.

---

**Pour les curieux**: Si vous voulez voir le code, les graphiques ou lire le papier scientifique (avec toutes les équations mathématiques), j'ai tout mis en open-source sur mon GitHub.
[https://github.com/martindufresne/dufresne-quantum-protocol](https://github.com/martindufresne/dufresne-quantum-protocol)

*Merci à l'équipe Qiskit et PennyLane pour les outils incroyables qui permettent à un prof d'informatique de jouer avec les atomes depuis son salon.*