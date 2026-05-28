---
title: BOM (nomenclature)
type: tuto
phases:
  - dossier-technique
tags:
  - proj
  - tuto
  - dossier-technique
prerequis: []
aa:
  - RA-MME-C03-1/MME/5
  - RA-PROJET-C07-1/PROJ/3
  - RA-ESE-C09-2/ESE/1
draft: false
---

La **BOM** (*Bill of Materials*, ou **nomenclature** en français) est la liste exhaustive et chiffrée de tous les composants, matières et prestations nécessaires pour fabriquer un système : pour chaque ligne, une désignation, une référence fournisseur, une quantité et un coût. Produite à l'étape 3 du [[dossier-technique|dossier technique]], elle consolide les nomenclatures des trois disciplines en un seul document qui **engage le budget** du projet et **déclenche les commandes**.

## À quoi ça sert ?

La BOM est le moment où le projet **bascule du papier vers le matériel**. Tant qu'elle n'est pas posée, les plans des trois disciplines restent des intentions ; une fois chiffrée et validée, elle autorise la dépense et l'achat. C'est le pivot entre la conception et la réalisation.

Elle remplit trois rôles indissociables :

- **Chiffrer le coût réel du projet** — le total HT au centime près se confronte à l'enveloppe budgétaire. C'est ce chiffre qui dit si le projet est finançable en l'état, ou s'il faut rétroagir sur une décision d'architecture prise en [[concept|concept]].
- **Servir de base d'achat** — chaque ligne de la BOM devient une ligne de bon de commande. Une BOM propre rend l'émission des commandes presque mécanique ; une BOM floue la transforme en source d'erreurs (mauvaise référence, quantité fausse, ligne oubliée).
- **Alimenter les livrables aval** — l'[[acv-simplifiee|ACV simplifiée]] se calcule sur la BOM réelle (empreinte environnementale par poste), et le [[retroplanning|rétroplanning]] d'approvisionnement se cale sur les délais de livraison (*lead times*) annoncés ligne à ligne.

> [!warning] Attention
> **BOM ≠ [[etat-de-l-art-technique|état de l'art technique]].** Les deux sont des tableaux chiffrés, mais ils regardent dans des directions opposées. L'état de l'art compare des solutions **externes existantes**, en amont (phase de [[specification-technique|spécification technique]]), pour *calibrer* les niveaux du [[cahier-des-charges-fonctionnel|CdCF]]. La BOM liste les composants **internes au projet**, en aval (dossier technique), pour *engager* le budget et acheter. Le seul pont entre les deux : le critère « ouverture / BOM disponible » de l'état de l'art désigne parfois une brique réutilisable, qui se retrouvera plus tard dans votre propre BOM.

## Procédure pas à pas

Construire une BOM se fait en quatre temps : recenser les composants, les sourcer sur le catalogue fournisseurs, chiffrer et structurer le tableau, puis contrôler et tenir à jour. L'ordre compte — on ne chiffre pas avant d'avoir sourcé, on ne contrôle pas avant d'avoir chiffré.

### 1. Recenser et regrouper les composants

Agréger les nomenclatures des trois disciplines en une seule liste. La mécanique apporte les pièces, matières et visserie ; l'électronique apporte composants actifs, passifs, connectique et carte ; l'informatique ne consomme en général **aucun matériel propre** au-delà du PC de développement. Regrouper les lignes par poste (élec / méca / consommables) rend le tableau lisible et prépare l'éclatement par fournisseur de l'étape suivante.

Le piège récurrent à ce stade est l'oubli silencieux : ce ne sont pas les gros composants qu'on oublie, mais la visserie, les consommables (filament, soudure, gaines) et la **sous-traitance** ([[usinage|usinage]], impression 3D externalisée). Une ligne oubliée ici est une commande manquante qui bloquera l'intégration.

> [!tip] Astuce
> **Démarrez par les composants confirmés.** Les choix passés sans réserve dans les matrices de décision du concept chiffrent vite et stabilisent le gros de la BOM. Gardez les composants recalés en sortie de [[preuve-de-concept|preuve de concept]] pour la fin : ils peuvent demander un aller-retour avec le fournisseur ou une sous-traitance à chiffrer à part.

### 2. Sourcer sur le catalogue fournisseurs

En projet école, la BOM se construit sur le **catalogue de fournisseurs partenaires** négocié par l'établissement : un partenaire électronique pour les composants, un partenaire matière pour les métaux et plastiques, un partenaire fablab pour la sous-traitance d'usinage ou d'impression. Cette contrainte est structurante — elle limite les références accessibles, mais fixe des conditions tarifaires et des lead times connus d'avance.

Pour chaque ligne, renseigner la référence catalogue, le prix unitaire HT et le lead time annoncé. Si un composant retenu n'a pas d'équivalent au catalogue, deux issues : substitution simple arbitrée en interne, ou remontée au responsable projet pour un achat hors catalogue (processus alourdi). Dans tous les cas, marquer la ligne hors catalogue d'un drapeau explicite avec son surcoût estimé.

### 3. Chiffrer et structurer le tableau

Croiser les lignes recensées dans un tableau aux colonnes normalisées : *fournisseur / désignation / référence / quantité / prix unitaire HT / total ligne HT / lead time*. Le total ligne se calcule (quantité × PU), le total général s'additionne **au centime près** — c'est ce niveau de précision qui rend le total opposable à l'enveloppe budgétaire en étape 4.

Deux disciplines d'écriture héritées de l'état de l'art : pas de cellule vide (une donnée manquante se note `n.c.` ou `?`, jamais à blanc), et toute valeur dérivée par estimation est marquée comme telle (`~95 € (devis fablab)`). Un total qui « tombe rond » est presque toujours un total approximatif — méfiance.

### 4. Contrôler et faire vivre la BOM

Trois contrôles avant de figer :

- **Cohérence budget** — comparer le total HT à l'enveloppe initiale. Trois sorties : dans l'enveloppe (on continue), dépassement marginal (arbitrage interne ou rallonge motivée), dépassement structurel (rétroaction vers le [[concept|concept]] : une [[matrice-de-decision|matrice de décision]] a retenu une solution hors budget cible).
- **Lead time critique** — repérer la pièce la plus longue à arriver. C'est elle qui fixe la date butoir d'émission de commande et nourrit le [[retroplanning|rétroplanning]] d'approvisionnement.
- **Versionnage** — une BOM est vivante. Un composant recalé en [[integration-et-tests|intégration]] la modifie ; toute version doit être datée pour que l'équipe achète sur la bonne.

## Exemple — Bras 3 axes pédagogique

Reprenons le projet fil rouge — un bras robotique pédagogique 3 axes. La BOM finale, consolidée à partir du catalogue des fournisseurs partenaires de l'école après le retour amont structurant *PLA imprimé → aluminium usiné* décidé en preuve de concept :

| Fournisseur | Désignation | Référence | Qté | PU HT | Total HT | Lead time |
| --- | --- | --- | --- | --- | --- | --- |
| Élec | Stepper NEMA 17 1,8°/pas | ELEC-MOT-N17 | 3 | 14,80 € | 44,40 € | 5 j |
| Élec | Driver A4988 | ELEC-DRV-A49 | 3 | 4,20 € | 12,60 € | 5 j |
| Élec | [[microcontroleur\|MCU]] Arduino-compatible | ELEC-MCU-ARD | 1 | 22,00 € | 22,00 € | 5 j |
| Élec | Alim 12 V / 5 A régulée | ELEC-ALI-125 | 1 | 18,50 € | 18,50 € | 5 j |
| Matière | Barre alu 6061 Ø20 mm × 1 m | MAT-ALU-6061-20 | 1 | 12,30 € | 12,30 € | 7 j |
| Matière | Visserie M3 + M5 (lot) | MAT-VIS-LOT | 1 | 8,40 € | 8,40 € | 5 j |
| Fablab | Usinage 3 articulations (sous-traité) | SST-USI-3PCS | 1 | 95,00 € | 95,00 € | 15 j |
| **Total HT** | | | | | **213,20 €** | **15 j (max)** |

**Ce que la BOM décide.** Total **213,20 € HT**, sous l'enveloppe initiale de 250 € → passage en validation sans alerte budgétaire. Le **lead time critique** est l'usinage sous-traité (15 jours) : il fixe la date butoir d'émission de commande à trois semaines avant le début de l'[[integration-et-tests|intégration et tests]]. Le regroupement par fournisseur (3 lignes élec, 2 matière, 1 fablab) préfigure directement les **trois bons de commande** qui seront émis à l'étape 5 — un par partenaire.

La BOM nourrit aussi l'[[acv-simplifiee|ACV simplifiée]] : la ligne *barre alu + usinage* pèse à elle seule près de 28 % de l'empreinte, contre 3 % pour l'ancienne ligne PLA — coût environnemental réel du retour amont, à reporter dans la conclusion d'[[ecoconception|écoconception]].

## Pièges

**Cellule vide ou total approximatif.** Une donnée manquante laissée à blanc se confond avec une valeur nulle et fausse le total ; un total non chiffré au centime n'est pas opposable à l'enveloppe. La discipline `n.c.` et l'addition exacte sont ce qui transforme une liste en livrable budgétaire.

**Sourcer hors du catalogue partenaire.** Choisir la référence parfaite sur un distributeur généraliste est inutile si elle n'est pas au catalogue négocié par l'école. Le sourcing se fait sur le catalogue fermé ; le hors-catalogue est l'exception signalée, pas la règle.

**Oublier la visserie, les consommables ou la sous-traitance.** Ce sont les petites lignes qu'on oublie, et une articulation à usiner non commandée bloque tout autant l'intégration qu'un moteur manquant. Le recensement doit ratisser au-delà des composants visibles.

**Découvrir un dépassement à l'émission de commande.** Au moment de commander, il est trop tard pour rétroagir proprement vers le concept. Le total cumulé se vérifie à chaque ligne ajoutée, pas une fois le tableau terminé.

**Amputer la BOM pour rentrer dans l'enveloppe.** Réduire les quantités ou supprimer des sécurités pour rester sous budget ouvre la porte à une intégration ratée ou à une non-conformité [[securite-et-qualite|sécurité-qualité]]. Si le dépassement est structurel, c'est le concept qu'on reprend, pas la BOM qu'on tronque.

**Confondre la BOM avec un devis fournisseur.** La BOM est le document **du projet** (toutes disciplines, toutes sources), pas la facture d'un seul partenaire. Un devis nourrit la BOM ; il ne la remplace pas.

## Cas particulier — projet sans catalogue fournisseur imposé

Tous les projets ne disposent pas d'un catalogue partenaire négocié : projet personnel, hackathon, club étudiant autofinancé. Le sourcing se fait alors sur des distributeurs ouverts (Mouser, RS, Digi-Key, fournisseurs locaux), et deux colonnes supplémentaires deviennent indispensables : le **distributeur** retenu pour chaque ligne et les **frais de port** (souvent significatifs sur un petit panier, parfois plus chers que le composant lui-même). Les lead times varient aussi beaucoup plus d'un distributeur à l'autre.

La méthode ne change pas — recenser, sourcer, chiffrer, contrôler — mais la BOM gagne à grouper les lignes par distributeur pour mutualiser les frais de port et limiter le nombre de commandes. La discipline du total HT au centime et du lead time critique reste strictement la même.

## Raccrochage projet

- **Étape 3 de la [[dossier-technique|phase de dossier technique]]** — phase principale où la BOM est consolidée, chiffrée et confrontée à l'enveloppe budgétaire.
- **Étape 5 du dossier technique** — chaque ligne devient une ligne de bon de commande, regroupée par fournisseur partenaire ; la BOM est la source unique des commandes émises.
- **Étape 2 de la [[specification-technique|spécification technique]]** — la BOM apparaît en amont comme *critère d'ouverture* dans l'[[etat-de-l-art-technique|état de l'art]] (la nomenclature d'une solution concurrente est-elle publiée ?), pas encore comme livrable.
- **[[integration-et-tests|Intégration et tests]]** — la BOM sert de checklist de réception : référence reçue = référence commandée, quantité reçue = quantité commandée.

Une BOM construite proprement en amont rend l'émission des commandes mécanique et la réception vérifiable. Bâclée, elle se paie au prix fort en aval — recommander, payer une deuxième fois, perdre des semaines au pire moment du projet.

## Voir aussi

- [[dossier-technique|Dossier technique]] — phase où la BOM est produite (étape 3) puis commandée (étape 5)
- [[etat-de-l-art-technique|État de l'art technique]] — outil amont à ne pas confondre avec la BOM
- [[acv-simplifiee|ACV simplifiée]] — livrable aval calculé sur la BOM réelle
- [[retroplanning|Rétroplanning]] — l'approvisionnement se cale sur les lead times de la BOM
- [[matrice-de-decision|Matrice de décision]] — outil amont (concept) qui fige les choix de composants entrant dans la BOM
