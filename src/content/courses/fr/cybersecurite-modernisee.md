---
title: "Cursus : Cybersécurité Modernisée (IA & Quantique)"
subtitle: "Une spécialisation intensive de 30h axée sur les technologies de rupture"
excerpt: "Une formation pratique de 30 heures (1 soir par semaine pendant 10 semaines) pour acquérir des bases solides en réseaux TCP/IP, Linux, automatisation IA, défense active et transition post-quantique."
duration: "30 heures (10 cours de 3h)"
format: "Hybride"
difficulty: "Connaissances générales en informatique requises"
priceUnique: "525 $ CAD"
priceInstallments: "3 mensualités de 175 $"
stripeUniqueLink: "#"
stripeInstallments6Link: "#"
stripeInstallments12Link: "#"
isFeatured: true
publishDate: "2026-07-14"
---

## Pourquoi ce programme ?

Ce programme a été conçu comme un accélérateur de compétences pour les professionnels, développeurs, administrateurs et passionnés d'informatique. En abordant directement les fondamentaux réseau et système pour ensuite intégrer l'intelligence artificielle et la cryptographie post-quantique, ce cursus intensif de **30 heures (10 semaines à raison d'un cours de 3 heures en soirée par semaine)** vous permet d'acquérir une maîtrise pratique avancée directement applicable sur le terrain.

---

## Une formule hybride unique — Bien plus que des vidéos passives

Pour garantir votre succès et vous offrir un accompagnement à forte valeur ajoutée, bien loin des cours en ligne passifs à bas coût, je vous propose un encadrement personnalisé :
* **Ateliers interactifs en direct** : Des sessions en direct de 3 heures chaque semaine pour répondre de vive voix à vos questions, approfondir les concepts complexes et surmonter ensemble les défis techniques.
* **Correction individualisée** : Je révise et commente personnellement chacun de vos laboratoires pratiques (HomeLab) afin de valider vos acquis et de vous guider pas à pas.
* **Dynamique de cohorte** : Un accès exclusif à un canal Discord privé pour échanger avec vos pairs, partager vos découvertes et élargir votre réseau professionnel.

---

## Garantie « Satisfait ou Remboursé » sans risque

Je vous propose une **garantie complète de satisfaction** : vous pouvez tester le cursus en toute confiance. Si après la première semaine (incluant le premier atelier en direct) vous constatez que le format ou le contenu ne vous convient pas, vous serez intégralement remboursé sur simple demande, sans aucun justificatif requis.

---

## Prérequis & Matériel requis

* **Compétences :** Connaissances générales de l'environnement informatique (systèmes de fichiers, navigation web, aisance générale avec un ordinateur). Forte motivation pour l'expérimentation pratique sur le terrain. Aucune compétence préalable en cybersécurité n'est exigée : les fondations réseaux et ligne de commande sont enseignées dès le départ.
* **Matériel requis :**
  * Ordinateur Mac, Windows ou Linux récent avec **au moins 16 Go de RAM** (pour exécuter avec fluidité les conteneurs Docker de votre HomeLab local).
  * 40 Go d'espace disque disponible et droits d'administration sur votre machine (pour installer Docker, Wireshark et les outils d'audit).
  * Connexion Internet stable.
* **Ce qui n'est PAS requis :** Aucun diplôme préalable en informatique requis, aucune maîtrise préalable de Linux ou des réseaux, ni connaissances en mathématiques avancées.

---

## Structure du Programme (30 heures — 10 cours de 3h)

Le cursus est articulé autour de 10 sessions hebdomadaires intensives de 3 heures, alliant théorie ciblée et mise en pratique immédiate :

### Session 1 : Réseaux & Protocoles TCP/IP fondamentaux (3h)
* **Objectif** : Comprendre en profondeur la circulation des données sur un réseau local et sur Internet sans rien prendre pour acquis.
* **Contenu** :
  * Modèle TCP/IP, couches réseau, adressage IP (IPv4 vs IPv6), masques de sous-réseau et routage.
  * Protocoles critiques en clair et sécurisés : ARP, DHCP, DNS, TCP/UDP, HTTP/S, TLS et SSH.
  * Analyse et capture de paquets en direct avec `Wireshark` et `tcpdump` pour observer les flux réels.
* **Travaux pratiques** : Diagnostic de connectivité complet, inspection des poignées de main (handshakes) TCP et détection de communications non chiffrées.

### Session 2 : Le Terminal (Bash / PowerShell) & le HomeLab Docker (3h)
* **Objectif** : Dompter la ligne de commande et déployer l'environnement de laboratoire sécurisé local.
* **Contenu** :
  * Navigation, gestion des permissions (chmod, chown, ACL) et administration système sous Linux (Bash) et Windows (PowerShell).
  * Automatisation simple : tuyaux (pipes), redirections, filtres (`grep`, `awk`, `jq`) et scripts d'audit.
  * Conteneurisation avec Docker et Docker Compose : isolation, réseaux virtuels internes et volumes.
* **Travaux pratiques** : Déploiement en un clic du HomeLab local de la cohorte et écriture d'un script d'automatisation pour auditer les services actifs.

### Session 3 : Centralisation des Journaux & Déploiement SIEM (3h)
* **Objectif** : Mettre en place la visibilité nécessaire pour détecter les activités suspectes dans une infrastructure.
* **Contenu** :
  * Anatomie d'un journal d'événements (Syslog, journaux d'authentification Linux, Windows Event Viewer).
  * Déploiement et architecture d'un SIEM/XDR moderne (Wazuh).
  * Collecte d'événements, corrélation et règles de détection d'intrusions basiques.
* **Travaux pratiques** : Connexion d'un agent de surveillance Wazuh à une machine cible et création de règles d'alerte sur des connexions anormales.

### Session 4 : Détection d'Anomalies & AIOps (3h)
* **Objectif** : Tirer parti des modèles d'intelligence artificielle pour identifier des comportements malveillants masqués dans la masse de logs.
* **Contenu** :
  * Limites de la détection basée sur de simples signatures fixes face aux menaces modernes.
  * Analyse comportementale des utilisateurs et des entités (UEBA) et détection d'anomalies réseau.
  * Initiation aux architectures SOAR pour l'automatisation des réponses et le tri des fausses alertes.
* **Travaux pratiques** : Entraînement et exécution d'un script d'analyse statistique et de Machine Learning pour repérer une exfiltration furtive de données.

### Session 5 : Durcissement Système (Hardening) & Règles Pare-feu (3h)
* **Objectif** : Réduire la surface d'attaque et verrouiller les configurations systèmes et réseaux.
* **Contenu** :
  * Principes de sécurité en profondeur (Defense in Depth) et principe du moindre privilège.
  * Durcissement des systèmes d'exploitation (fermeture des ports inutiles, désactivation des protocoles vulnérables).
  * Configuration de pare-feu applicatifs et réseau (UFW, iptables, règles Windows Defender Firewall).
* **Travaux pratiques** : Audit automatisé de vulnérabilités système avec Lynis et application d'une politique stricte de filtrage pare-feu.

### Session 6 : La Menace Quantique & Standards Post-Quantiques (NIST) (3h)
* **Objectif** : Comprendre la rupture technologique quantique et les nouveaux algorithmes de chiffrement résistants.
* **Contenu** :
  * Principes de base de l'informatique quantique et vulnérabilité des chiffrements asymétriques actuels (RSA, ECC face à Shor et Grover).
  * La menace imminente « Récolter maintenant, déchiffrer plus tard » (*Harvest Now, Decrypt Later*).
  * Les nouveaux standards post-quantiques finalisés par le NIST (ML-KEM / Kyber, ML-DSA / Dilithium).
* **Travaux pratiques** : Génération de clés et échange sécurisé post-quantique en ligne de commande à l'aide de la bibliothèque Open Quantum Safe (liboqs).

### Session 7 : Architectures Hybrides & Tunnels Post-Quantiques (TLS 1.3) (3h)
* **Objectif** : Mettre en œuvre concrètement la transition quantique dans les communications sécurisées existantes.
* **Contenu** :
  * Stratégies de transition hybrides (combinaison d'algorithmes classiques et post-quantiques pour garantir la conformité).
  * TLS 1.3 et négociation de suites cryptographiques hybrides post-quantiques.
  * Tunnels VPN et certificats X.509 résistants au quantique.
* **Travaux pratiques** : Mise en place d'un tunnel sécurisé hybride post-quantique entre deux conteneurs et vérification de la négociation dans Wireshark.

### Session 8 : Audit Offensif & Pentesting assisté par IA (MITRE ATT&CK) (3h)
* **Objectif** : Adopter la posture de l'attaquant pour mieux défendre ses infrastructures, en exploitant les outils IA.
* **Contenu** :
  * Cartographie des tactiques et techniques d'attaque via la matrice MITRE ATT&CK.
  * Reconnaissance, cartographie de surface d'attaque (Nmap) et recherche de vulnérabilités connues (CVE).
  * Utilisation d'assistants et agents IA pour analyser du code vulnérable, concevoir des scénarios d'attaque et accélérer le pentest.
* **Travaux pratiques** : Exploitation guidée et éthique d'un serveur vulnérable dans le HomeLab local avec documentation d'un rapport de vulnérabilité.

### Session 9 : Sécurité des Architectures IA & Injections de Prompts (3h)
* **Objectif** : Sécuriser les applications d'entreprise intégrant des modèles de langage (LLMs) et des pipelines RAG.
* **Contenu** :
  * Le référentiel OWASP Top 10 for LLMs & GenAI : injections de prompts directes et indirectes, fuites d'informations, empoisonnement des données.
  * Menaces d'ingénierie sociale augmentées par l'IA (phishing ultra-personnalisé, voix synthétiques).
  * Barrières de sécurité (Guardrails), validation d'entrées et de sorties et isolation des privilèges pour les agents IA.
* **Travaux pratiques** : Exercices d'attaque par injection de prompt sur un agent LLM conteneurisé dans le HomeLab et implémentation de mécanismes de défense.

### Session 10 : Gouvernance (Loi 25), Réponse aux Incidents & Simulation Finale (3h)
* **Objectif** : Gérer un incident de bout en bout, respecter les cadres légaux québécois et valider l'ensemble des acquis.
* **Contenu** :
  * Exigences légales québécoises (Loi 25 sur la protection des renseignements personnels) et notification des incidents de sécurité.
  * Processus de réponse aux incidents : détection, confinement, éradication, récupération et retour d'expérience (post-mortem).
  * Réponse aux incidents assistée par IA (synthèse de journaux, désobfuscation de scripts suspects).
* **Travaux pratiques** : Simulation de crise complète (*Incident Response Challenge*) — investigation d'une compromission simulée dans le HomeLab et rédaction du rapport d'incident.

---

## Modèle de livraison et Laboratoires

L'apprentissage est 100% orienté pratique grâce à un **HomeLab local basé sur Docker** :
* **Déploiement en un clic** : L'environnement complet se lance localement sur votre machine en une seule commande avec Docker Compose.
* **Gratuit et accessible** : Aucune plateforme cloud externe ou abonnement payant tiers n'est requis pour les étudiants.
* **Contenu du HomeLab** : Des conteneurs pré-configurés simulant des infrastructures d'attaque et de défense (LLMs locaux vulnérables aux prompt injections, simulateurs de clés quantiques, serveur de centralisation des logs et SIEM léger).

---

## Certification

* **Certificat de réussite** : Un certificat officiel de réussite vous sera remis à la fin du cursus après validation des travaux pratiques de synthèse, idéal pour faire valoir vos compétences auprès de votre employeur ou sur LinkedIn.
