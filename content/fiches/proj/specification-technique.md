---
title: Spécification technique
type: trame
phase: 1
phases:
  - specification
tags:
  - proj
  - trame
  - phase-1
prerequis: []
aa: []
draft: true
---

La **spécification technique** est la première phase du projet mécatronique : elle transforme un besoin formulé en langage courant ("on aimerait un robot qui...") en un document de référence chiffré et opposable — le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]]. C'est la phase qui décide *ce qu'on doit faire*, avant tout choix de solution technique.

## Posture attendue

*La tentation, à ce stade, est de sauter directement aux composants : "il nous faudrait un ESP32, un capteur de température, un moteur pas-à-pas". Résistez. Cette phase ne demande pas d'imaginer la solution, elle demande de **comprendre le problème**. Plus vous serez précis ici, moins vous reviendrez en arrière plus tard. Un cahier des charges bâclé coûte deux à cinq fois plus cher à la phase 4 ou 5 qu'à la phase 1.*

## Objectif de la phase

Produire un cahier des charges fonctionnel (CdCF) qui :

- formule sans ambiguïté **ce que le système doit faire** (et pas comment)
- chiffre chaque exigence (critère, niveau, flexibilité)
- intègre les contraintes d'écoconception
- s'appuie sur un état de l'art technique
- est validé par le client (ou le commanditaire du projet)

Ce document servira de **référence pendant tout le projet** et de **grille d'évaluation finale** : à la livraison, on reprend le CdCF point par point pour valider ou non chaque exigence.

## Démarche

### 1. Analyser le besoin

Avant tout schéma ou choix de composant, il faut comprendre **ce qu'on cherche vraiment à faire et pour qui**. Cette étape est la plus tentée d'être bâclée, et la plus pénalisante quand elle l'est : un besoin mal compris produit un système qui fonctionne mais qui ne sert à rien.

L'analyse du besoin se mène en trois temps : contextualiser, formuler avec la bête à cornes, valider.

*Selon les projets, une note de cadrage peut être fournie par les enseignants. Dans ce cas, vous ne « découvrez » pas le besoin — vous le **reformulez** pour montrer que vous l'avez compris, et vous le **précisez** sur ce qui n'est pas explicite. La démarche reste la même.*

#### Contextualiser

Le contexte répond à la question : **pourquoi ce projet existe ?**

À traiter dans le rapport :

- **Origine du projet** — qui le demande, pourquoi maintenant, quelle situation initiale le motive
- **Parties prenantes** — qui est concerné (utilisateur final, client, mainteneur, fabricant, voisinage, environnement)
- **Verrous technologiques** — quels obstacles techniques ou scientifiques le projet cherche à dépasser

> [!warning] Piège : verrou technologique ≠ difficulté personnelle
> « Nous n'avons jamais fait de PCB » n'est pas un verrou technologique, c'est un manque d'expérience qu'on va combler. Un vrai verrou : « détecter un gaz inflammable en concentration < 50 ppm avec un composant à moins de 10 € en grande série ». Si votre projet n'a pas de verrou technologique fort, dites-le honnêtement et déplacez l'enjeu ailleurs (intégration système, contraintes industrielles, performances).

#### Formuler le besoin avec la bête à cornes

La bête à cornes est l'outil canonique de [[afnor-nfx50-151|la norme NF X50-151]] pour exprimer un besoin de manière formelle. Elle force trois réponses :

- **À qui le système rend-il service ?** → l'utilisateur (au sens large)
- **Sur quoi agit-il ?** → la matière d'œuvre, l'objet ou le milieu sur lequel il opère
- **Dans quel but ?** → le service rendu

*[schéma bête à cornes à produire — `content/ressources/img/bete-a-cornes-generique.svg`]*

> [!example] Exemple — Couveuse à œufs de poule
>
> - **À qui** : éleveur amateur en autoconsommation
> - **Sur quoi** : œufs de poule fécondés
> - **But** : assurer le développement embryonnaire jusqu'à l'éclosion sans surveillance permanente

##### Cas particulier : projet école sans client réel

Beaucoup de projets pédagogiques n'ont pas de client externe et seront démontés après soutenance (robot solveur de labyrinthe, robot suiveur de ligne, etc.). La bête à cornes paraît alors tourner à vide.

Deux postures honnêtes selon le projet :

- **L'étudiant devient son propre client** : le service rendu est l'acquisition de compétences ciblées (« développer une chaîne d'asservissement, intégrer une carte électronique sur mesure, manipuler une régulation [[pid|PID]] »). Le « à qui » est l'équipe elle-même, le « but » est explicitement pédagogique. C'est défendable en école, **pas en projet professionnel**.
- **L'équipe se donne un client fictif crédible** : pour le robot labyrinthe, on peut imaginer un cas d'usage (« robot d'inspection de canalisations enterrées »). L'analyse fonctionnelle devient cohérente, et l'exercice prend une dimension d'ingénierie réaliste.

Choisissez explicitement l'une des deux postures et tenez-la pendant toute la rédaction du CdCF.

#### Valider la compréhension du besoin

Une fois la bête à cornes formulée, **confrontez-la** :

- **Mode sujet ouvert** (besoin construit par l'équipe) : la valider auprès du client réel ou de son représentant. Si la formulation surprend le client, c'est qu'on a mal compris.
- **Mode sujet cadré** (note de cadrage fournie) : la confronter au document. Y a-t-il des éléments du cadrage qui n'apparaissent pas dans la bête à cornes ? Des choix qu'on a faits qui ne sont pas justifiés par le cadrage ?

Cette validation laisse une trace écrite (mail, compte-rendu de réunion, ou section dédiée du CdCF). C'est la preuve que la compréhension est partagée — sans elle, vous travaillez sur des suppositions.

> [!tip] Pourquoi la bête à cornes paraît triviale (et ne l'est pas)
> Trois questions, trois réponses : ça semble enfantin. La puissance de l'outil est précisément là : formuler en trois lignes ce qu'on croyait évident révèle les désaccords cachés dans l'équipe ou avec le client. Le moment où deux équipiers répondent différemment au « à qui » est exactement le moment où l'outil paye son utilité.

---

### 2. Étudier l'existant

*[À rédiger — état de l'art technique : N solutions × M critères, tableau comparatif chiffré]*

### 3. Formaliser les fonctions

*[À rédiger — pieuvre NF X50-151, fonctions principales et contraintes, ouverture FAST en phase 2]*

### 4. Caractériser les fonctions

*[À rédiger — cœur de la phase : critère, niveau, flexibilité, ordres de grandeur, exemples mauvais/moyen/bon]*

### 5. Planifier le projet

*[À rédiger — WBS, jalons, rétroplanning à partir de la date de soutenance, prise en compte du calendrier scolaire]*

### 6. Rédiger le CdCF

*[À rédiger — agrégation, intégration de la démarche environnementale, structure type du document, validation finale]*

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Sauter à la solution avant d'avoir formulé le besoin
- Confondre verrou technologique et difficulté d'équipe
- Cahier des charges flou ("le système doit être performant") qui ne permettra rien d'évaluer en fin de projet

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca, fabrication) + fils transverses (gestion projet, écoconception, sécurité) spécifiques à la phase 1]*

## Voir aussi

- [[index|Hub du parcours projet]]
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] *(notion fondatrice)*
- [[afnor-nfx50-151|Norme NF X50-151 — analyse fonctionnelle]] *(à créer)*
- Phase suivante : [[concept|Concept]] *(à créer)*
