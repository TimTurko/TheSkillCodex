---
title: État de l'art technique
type: tuto
phases:
  - specification
  - concept
tags:
  - proj
  - tuto
  - analyse-amont
prerequis:
  - bete-a-cornes
aa:
  - RA-PROJET-C04-4/PROJ/2
  - RA-MEO-C10-3/MEO/1
draft: false
---

L'**état de l'art technique** (EAT) est une comparaison chiffrée de solutions existantes qui adressent un besoin proche du projet à mener. Produit à l'étape 2 de la [[specification-technique|spécification technique]], il calibre les ordres de grandeur réalistes du [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] et identifie les briques techniques réutilisables. Sa forme canonique est un **tableau N × M** : N solutions en colonnes, M critères chiffrés en lignes, accompagné d'une synthèse argumentée qui dit ce qu'on retient.

## À quoi ça sert ?

L'EAT répond à une discipline d'ingénieur : avant de chiffrer ce qu'on va construire, on regarde **ce qui existe déjà**. Personne ne conçoit dans le vide — pour presque tout projet [[mecatronique|mécatronique]], des solutions commerciales, des projets open source ou des projets école antérieurs ont déjà attaqué un besoin proche du vôtre. Les étudier épargne du temps, calibre les attentes, et oriente les choix d'architecture qui suivront.

L'outil joue trois rôles indissociables :

- **Calibrer les ordres de grandeur** réalistes pour les [[niveau|niveaux]] du [[cahier-des-charges-fonctionnel|CdCF]] — savoir qu'un bras pédagogique à 300 € existe et atteint 1 à 2 mm de répétabilité évite de fixer arbitrairement un niveau ± 0,1 mm hors d'atteinte sur ce budget.
- **Identifier les briques techniques réutilisables** — schémas open source, choix de composants éprouvés, firmwares disponibles. Un projet école n'a pas à tout réinventer, et hériter de ce qui fonctionne libère du temps pour les vrais enjeux du projet.
- **Repérer les marges de progrès** — ce que les solutions existantes ne font pas, font mal, ou seulement à coût prohibitif. C'est ce qui justifie l'existence du projet : sans marge identifiée, on reproduit l'existant sans rien apporter.

L'EAT n'est pas une décision technique — il **prépare** la décision. La pondération des critères et l'arbitrage entre solutions candidates internes au projet relèvent de la [[matrice-de-decision|matrice de décision]], en phase de [[concept|concept]]. Mélanger les deux outils fait faire deux fois le même travail à l'étudiant.

> [!warning] Attention
> **EAT ≠ revue bibliographique.** La revue bibliographique consiste à lire (articles, datasheets, normes, livres) et à produire des notes. L'EAT consiste à recenser ce qui existe et qui marche, et à produire une **comparaison chiffrée orientée décision**. Les deux se nourrissent — la biblio fournit la matière — mais ce n'est pas le même livrable. Un EAT qui n'est qu'une liste d'articles lus n'est pas un EAT.

## Procédure pas à pas

L'EAT se mène en quatre étapes courtes mais disciplinées : recenser les solutions, définir les critères, chiffrer le tableau, synthétiser. Aucune ne peut être sautée sans dégrader la suivante.

### 1. Recenser 3 à 6 solutions comparables

Identifier des références qui adressent un besoin proche du vôtre, **même partiellement**. Pas plus de 6 : au-delà, l'analyse se dilue et le tableau devient illisible. Pas moins de 3 : avec 1 ou 2 références, on n'a pas de quoi comparer.

Sources à varier systématiquement :

- **Produits commerciaux** — catalogues fabricants, sites distributeurs, fiches techniques publiques.
- **Projets open source** — GitHub, Hackaday, Thingiverse, Instructables, Open Hardware Repository.
- **Publications académiques courtes** — papiers de conférence, mémoires de fin d'études, articles de vulgarisation technique.
- **Projets école antérieurs** — archives de l'établissement, retours d'expérience disponibles auprès des enseignants.

Pour chaque référence retenue, noter le nom, la source ou l'URL, les principaux chiffres publics, et le statut (en production, en projet, abandonné). Cette première passe peut être large : on filtre par pertinence au moment de chiffrer le tableau.

### 2. Définir 5 à 8 critères chiffrables

Choisir les critères qui font sens **pour votre projet**, en partant du besoin formulé à l'étape 1 de la spec-tech (la [[bete-a-cornes|bête à cornes]]). Les critères doivent **discriminer les solutions** : un critère sur lequel toutes les références ont la même valeur n'apporte rien au tableau et peut être retiré.

Familles à parcourir systématiquement :

- **Coût** — d'achat, de fabrication, de maintenance. Presque toujours présent, surtout en projet école.
- **Performance principale** — la grandeur cible du système (précision, débit, autonomie, charge utile, portée selon le projet).
- **Contraintes d'usage** — encombrement, masse, consommation, robustesse, sécurité, niveau sonore.
- **[[ecoconception|Écoconception]]** — origine et recyclabilité des matériaux, durabilité, démontabilité, réparabilité.
- **Ouverture** — disponibilité du [[bom|BOM]], du firmware, des schémas, de la documentation. Déterminant pour réutiliser des briques.

> [!tip] Astuce
> **Les critères choisis ici préfigurent ceux que vous chiffrerez à l'étape 4 de la spec-tech.** Un EAT bien outillé en critères rend l'écriture du [[cahier-des-charges-fonctionnel|CdCF]] nettement plus simple — chaque critère discriminant du tableau donne un point d'ancrage pour [[caracteriser-une-exigence|caractériser une exigence]] avec un niveau réaliste plutôt qu'arbitraire.

### 3. Chiffrer le tableau N × M

Croiser solutions et critères dans un tableau, **solutions en colonnes** et **critères en lignes** par convention de lisibilité — on lit plus facilement quatre colonnes étroites que six lignes longues.

Quatre disciplines d'écriture à tenir :

- **Valeurs chiffrées avec unité** (`250 g`, `0,1 mm`, `180 €`). Pas de qualificatif vague (`bonne autonomie`, `faible coût`) qui réintroduirait le flou que l'EAT est censé lever.
- **Pas de cellule vide.** Une donnée manquante se note `n.c.` (non communiqué) ou `?`. Son absence devient elle-même une information : un industriel qui ne publie pas la répétabilité de son bras envoie un signal.
- **Source explicitée** pour chaque chiffre, en note ou ligne dédiée. Un chiffre non sourcé est non vérifiable et n'a pas sa place dans un livrable opposable.
- **Estimation marquée comme telle.** Si on dérive un chiffre par calcul (charge utile estimée à partir du couple moteur publié, par exemple), le mentionner explicitement : `~250 g (estimé)`.

L'EAT **ne pondère pas** les critères et ne calcule pas de score agrégé. C'est la différence fondamentale avec la [[matrice-de-decision|matrice de décision]] : ici on cartographie l'existant, on n'arbitre pas. La pondération viendra en phase de [[concept|concept]], pour trancher entre solutions candidates **internes** au projet.

### 4. Synthétiser et conclure

Le tableau seul ne suffit pas. Conclure en quelques lignes : **qu'est-ce qu'on retient ?** La synthèse répond à trois questions :

- **Quelle ou quelles solutions inspirent l'architecture envisagée ?** Pas une décision technique (on ne choisit pas encore), mais un éclairage : telle référence semble cohérente avec le besoin et les contraintes du projet.
- **Quelles solutions écarte-t-on, et pourquoi ?** Coût prohibitif, complexité hors scope, indisponibilité de la documentation. Documenter l'élimination est aussi important que documenter la retenue.
- **Quels ordres de grandeur retient-on pour calibrer le CdCF ?** Coût matériaux cible, performance principale visée, contraintes plancher. Ces ordres de grandeur deviennent les chiffres de référence pour l'étape 4 de la spec-tech.

La synthèse fait deux à quatre paragraphes. Au-delà, elle se transforme en récit qui dilue la décision. En deçà, elle reste vague et n'apporte rien au lecteur du CdCF.

> [!warning] Attention
> **Une synthèse qui dit *« tout est intéressant, à voir plus tard »* annule le travail amont.** L'EAT est censé éclairer la suite, pas reporter la décision. Si la synthèse n'engage pas, c'est généralement que les critères choisis à l'étape 2 ne discriminaient pas — il faut alors revenir à l'étape 2 et reprendre, pas continuer en bottant en touche.

## Exemple — Bras 3 axes pédagogique

Reprenons le projet fil rouge — un [[bras-3-axes|bras robotique pédagogique 3 axes]]. L'EAT mené pour calibrer le CdCF retient trois références issues de catalogues commerciaux et de communautés open source, comparées sur six critères discriminants.

| Critère | Niryo One | uArm Swift Pro | BCN3D Moveo |
|---|---|---|---|
| **Coût** | ~3 000 € prêt à l'emploi | ~600 € prêt à l'emploi | ~300 € en matériaux à fabriquer |
| **Charge utile** | 500 g | 500 g | ~250 g (estimé, communauté) |
| **Répétabilité** | 0,5 mm | 0,2 mm | 1 à 2 mm (estimé) |
| **Volume de travail** | sphère R ≈ 440 mm | sphère R ≈ 340 mm | sphère R ≈ 500 mm |
| **Ouverture** | BOM partiel + firmware ouvert | fermé | BOM complet + firmware ouvert + plans STL |
| **Démontabilité fablab** | non (kit industriel monobloc) | non (assemblage usine) | oui (imprimable 3D + visserie standard) |

**Sources** : sites fabricants Niryo et UFactory pour les deux premières références, dépôt GitHub BCN3D Moveo et fil communautaire Reddit r/robotics pour la troisième.

**Ce qu'on retient.** Le **Moveo** est la référence la plus inspirante pour le projet — il est ouvert, démontable, abordable, et sa structure imprimable 3D s'aligne avec les contraintes du fablab école. On en reprend la logique générale (architecture articulée, imprimable, pilotée par steppers) mais on simplifie de 6 axes à 3 axes pour rester dans un scope pédagogique d'un semestre. Le Niryo et l'uArm sont écartés : le premier par son coût hors budget projet école, le second par sa fermeture qui interdit toute exploration des choix d'architecture.

**Ordres de grandeur calibrés pour le CdCF :**

- Coût matériaux **cible ~300 €**, aligné sur le Moveo.
- Charge utile **cible 100 g** (réduction assumée du fait des 3 axes au lieu de 6, et de l'objectif démonstratif plutôt que productif).
- Répétabilité **cible ± 5 mm** en bout, calibrée entre le Moveo (1 à 2 mm avec une complexité hors scope) et un minimum opérationnel pour une démonstration en classe.

Ces trois ordres de grandeur deviennent les chiffres de référence à l'étape 4 de la spec-tech, où chaque [[fonction|fonction]] sera caractérisée par un triplet [[critere|critère]] / [[niveau|niveau]] / [[flexibilite|flexibilité]].

## Pièges

**Confondre EAT et revue bibliographique.** Une liste d'articles lus n'est pas un EAT. L'EAT produit un tableau chiffré orienté décision ; la revue bibliographique produit des notes. La biblio **nourrit** l'EAT (elle fournit la matière), elle ne le remplace pas.

**Critères qui ne discriminent pas.** Un critère sur lequel toutes les références retenues ont la même valeur (toutes sont alimentées en 230 V, toutes pèsent autour de 5 kg) n'apporte rien au tableau. Retirer le critère, ou élargir l'échantillon pour faire émerger la discrimination.

**Cellule vide silencieuse.** Une donnée manquante laissée à blanc se confond visuellement avec une valeur faible ou nulle, et fausse la lecture du tableau. La discipline `n.c.` ou `?` rend visible ce qu'on ne sait pas — et l'absence devient elle-même une information à débattre en revue.

**Chiffre non sourcé.** Un coût ou une performance reporté sans source n'est pas vérifiable et n'engage personne. La traçabilité des chiffres est ce qui transforme un tableau d'EAT en livrable opposable plutôt qu'en intuition d'équipe.

**Comparer des solutions non comparables.** Mettre un produit industriel à 50 000 € à côté d'un projet maker à 200 € dans le même tableau dilue l'analyse. Soit on les compare sur des critères qui les rendent cohérents (performance pure, en ignorant le coût), soit on les sépare en deux EAT distincts si le budget vise un seul des deux mondes.

**EAT qui dérive en exhaustivité.** 15 solutions × 12 critères devient un document qu'on ne lit plus, ni en revue, ni en équipe. La discipline 3 à 6 solutions × 5 à 8 critères n'est pas une norme arbitraire — c'est la fenêtre où l'analyse reste contraignante sans devenir un travail à plein temps.

**Synthèse en sourdine.** Un tableau livré sans synthèse, ou avec un paragraphe vague (*« on retient plusieurs solutions intéressantes »*), annule le travail amont. La synthèse est ce qui transforme la cartographie en décision préparée pour la suite du projet.

## Cas particulier — marché immature ou projet de niche

Beaucoup de projets école attaquent des cas d'usage spécifiques pour lesquels **aucune solution commerciale comparable n'existe** : robot d'inspection adapté à une géométrie particulière, instrumentation de mesure pour un protocole expérimental rare, dispositif d'assistance pour un public restreint. L'EAT semble alors impossible à mener par manque de matière.

Trois ajustements rendent l'exercice utile malgré tout :

- **Élargir les sources** au-delà des produits finis : brevets actifs, publications de recherche, prototypes universitaires non commercialisés, blogs techniques d'équipes en R&D.
- **Comparer des briques plutôt que des produits.** Si aucun système complet ne ressemble au projet, des sous-systèmes (l'actuation, l'instrumentation, la commande) peuvent l'être. L'EAT devient alors un patchwork de comparaisons partielles, à expliciter comme telles dans la synthèse.
- **Fixer un timebox dès le départ** — une à deux journées dédiées à l'EAT, pas davantage. Sur un marché immature, le risque est de sur-investir l'exploration au détriment du reste du projet ; à l'inverse, ne pas faire d'EAT du tout sous prétexte d'absence de matière prive le projet de toute calibration externe.

Dans tous les cas, l'EAT d'un projet de niche assume sa nature **exploratoire** plutôt qu'industrielle. La synthèse en tient compte : les ordres de grandeur retenus pour le CdCF sont alors moins calibrés par l'existant et plus calibrés par les contraintes propres du projet (budget, calendrier, moyens de fabrication accessibles).

## Raccrochage projet

L'EAT n'est pas un livrable isolé : il alimente plusieurs étapes ultérieures, parfois à plusieurs phases de distance.

- **Étape 2 de la [[specification-technique|spécification technique]]** — phase principale où l'EAT est produit, sous forme de tableau + synthèse intégré au [[cahier-des-charges-fonctionnel|CdCF]] en section *Étude de l'existant* du document école.
- **Étape 4 de la [[specification-technique|spécification technique]]** — les ordres de grandeur retenus dans la synthèse calibrent les **niveaux** des exigences. Sans EAT, les niveaux du CdCF sont fixés arbitrairement et risquent d'être soit hors d'atteinte, soit trop laxistes par rapport à ce qui se fait déjà.
- **Étape 2 de la phase de [[concept|concept]]** — les critères choisis pour l'EAT deviennent souvent la base des critères de la [[matrice-de-decision|matrice de décision]] qui arbitre entre solutions candidates internes au projet, avec l'ajout central de la **pondération**, absente de l'EAT.
- **[[dossier-technique|Dossier technique]]** — le pré-dimensionnement et le choix final des composants peuvent réutiliser des ordres de grandeur EAT (consommation, encombrement, contraintes thermiques) pour calibrer les premières simulations.

Ce raccrochage multi-phases est ce qui justifie l'investissement initial : un EAT solide à l'étape 2 de la spec-tech évite de revenir en arrière sur des hypothèses non calibrées à chacune des étapes suivantes.

## Voir aussi

- [[specification-technique|Spécification technique]] — phase où l'EAT est produit (étape 2)
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] — document final qui consolide l'EAT en section *Étude de l'existant*
- [[caracteriser-une-exigence|Caractériser une exigence]] — étape aval (étape 4 spec-tech) qui réutilise les ordres de grandeur EAT pour fixer les niveaux
- [[matrice-de-decision|Matrice de décision]] — outil aval (étape 2 concept) qui pondère et arbitre entre solutions candidates internes
- [[concept|Concept]] — phase aval où les critères EAT sont réutilisés
- [[bom|BOM]] — outil aval (dossier technique) qui formalise le choix final des composants
