---
title: Cahier des charges fonctionnel
type: notion
aliases:
  - CdCF
phases:
  - specification
tags:
  - proj
  - notion
  - analyse-fonctionnelle
prerequis:
  - bete-a-cornes
  - pieuvre
  - fonction
  - caracteriser-une-exigence
aa: []
draft: false
---

Le **cahier des charges fonctionnel** (CdCF) est le document de référence d'un projet : il formalise sans ambiguïté ce que le système doit faire, chiffre chaque exigence et engage formellement le client et le concepteur. Issu de la méthode [[afnor-nfx50-151|NF X50-151]], il est l'**output principal de la phase de [[specification-technique|spécification technique]]**. La version enseignée dans ce tutoriel est une *version école simplifiée* qui agrège dans un document unique les cinq livrables de la phase : présentation du projet, expression du besoin, étude de l'existant, analyse fonctionnelle et planification.

## À quoi ça sert ?

Un CdCF bien rédigé joue trois rôles indissociables, qui justifient l'effort de rédaction qu'il représente :

- **Référence partagée** : tous les acteurs (équipe, client, encadrants, fournisseurs) parlent du même projet. En cas de désaccord en cours de route, on revient au CdCF — pas à un échange de mails ou à un souvenir de réunion.
- **Document opposable** : chaque exigence chiffrée engage les deux parties. Le client ne peut pas demander plus que ce qui a été validé ; l'équipe ne peut pas livrer moins. Cette opposabilité est exactement ce qui distingue un CdCF d'une simple note d'intention.
- **Grille d'évaluation finale** : à la livraison, on reprend le CdCF point par point pour valider ou non chaque exigence. Le succès du projet se mesure exigence par exigence, pas par appréciation globale.

Sans CdCF formel, un projet vit dans l'implicite — chacun construit sa propre image du livrable attendu, et les écarts ne se révèlent qu'à la fin, quand il est trop tard pour les corriger sans coût.

## Comment le construire ?

Le CdCF n'est pas produit d'un seul jet : il **agrège** la matière produite tout au long de la phase de [[specification-technique|spécification technique]]. La démarche complète — analyse du besoin avec la [[bete-a-cornes|bête à cornes]], étude de l'existant, formalisation des fonctions avec la [[pieuvre|pieuvre]], caractérisation chiffrée, planification — est détaillée dans la fiche-trame de la phase.

La rédaction du document lui-même (étape 6 de la phase) consiste à :

1. **Agréger** les cinq livrables intermédiaires dans la structure type du document (voir section suivante)
2. **Mettre en forme** : sommaire, pagination, en-tête de page, numérotation des sections, tableaux propres, schémas légendés
3. **Vérifier la cohérence inter-sections** : une exigence chiffrée à l'étape 4 doit être cohérente avec l'ordre de grandeur retenu à l'étape 2 ; un risque identifié à l'étape 5 doit faire écho à une [[FC]] de la pieuvre
4. **Faire valider** en *revue de CdCF*, [[jalons|jalon]] de fin de spécification technique conduit par les enseignants (qui jouent le rôle du client en contexte école)

Un **template Word pré-rempli** est fourni dans le dépôt : [[cdcf-ecole-template.docx|cdcf-ecole-template.docx]]. Il reprend la TdM en 5 sections, avec page de garde, sommaire automatique et tableaux pré-structurés (bête à cornes, état de l'art comparatif, caractérisation des fonctions, matrice de risques). Compléter les placeholders entre crochets et le CdCF prend forme.

## Structure type du document école

Le CdCF école simplifié s'organise en cinq sections, qui suivent l'ordre du déroulé pédagogique de la phase :

1. **Présentation du projet** — contexte, parties prenantes, frontière système *(matière de l'étape 1)*
2. **Expression du besoin** — [[bete-a-cornes|bête à cornes]], validation du besoin *(matière de l'étape 1)*
3. **Étude de l'existant** *(complément école)* — [[etat-de-l-art-technique|état de l'art technique]], tableau comparatif, synthèse *(matière de l'étape 2)*
4. **Analyse fonctionnelle** *(cœur NF X50-151)* — [[pieuvre|pieuvre]], tableau des [[fonction|fonctions]] caractérisées *(matière des étapes 3 et 4)*
5. **Planification du projet** *(complément école)* — [[wbs|WBS]], [[gantt|Gantt]], [[matrice-de-risques|matrice de risques]] *(matière de l'étape 5)*

Les sections sont **explicitement labellisées** « cœur NF X50-151 » (section 4) et « complément école » (sections 3 et 5) pour que le lecteur — et l'étudiant lui-même — distingue le cœur normatif des compléments pédagogiques.

> [!info] À retenir
> En contexte professionnel, le **CdCF NF X50-151 strict se limite à l'analyse fonctionnelle** (sections 2 et 4 ci-dessus). L'état de l'art technique et la planification sont des livrables séparés, produits en parallèle et destinés à des interlocuteurs différents (équipe technique, direction de projet). Le « cadre de réponse » formel de NF X50-151 — chapitre dédié à la manière dont le fournisseur doit répondre à l'appel d'offres — n'a pas d'équivalent direct en école : la planification du projet en tient le rôle pratique, elle cadre la suite à défaut d'organiser une consultation fournisseur.

## Exemple — projet bras 3 axes

Pour le projet fil rouge — un bras robotique pédagogique 3 axes — le CdCF s'organise selon la TdM standard en 5 sections. La section 1 reprend la posture étudiant-client-de-lui-même (commanditaire = enseignant de mécatronique, but pédagogique explicite). La section 4 — cœur NF X50-151 — agrège la pieuvre et le tableau de fonctions caractérisées : 1 [[FP]], 1 [[FS]], 2 [[FC]], toutes chiffrées (précision ± 5 mm en F1, programmation depuis poste informatique en F2, alimentation 230 V en F0, démontabilité fablab en F0).

La démarche [[ecoconception|écoconception]] est intégrée transversalement : critère « ouverture / réparabilité » dans le tableau de l'état de l'art (section 3), FC2 sur la démontabilité dans la pieuvre (section 4), risque « disponibilité fablab » dans la matrice de risques (section 5). Pas de section écoconception dédiée — l'enjeu environnemental traverse le document.

Le détail complet de la démarche de construction (les six étapes de la phase, étape par étape) est dans la fiche-trame [[specification-technique|spécification technique]]. Le CdCF est ensuite présenté en *revue de CdCF*, validé par les enseignants, et le projet bascule officiellement en [[concept|concept]].

## Pièges

**Compilation au lieu d'agrégation.** La tentation, quand cinq étapes ont produit cinq lots de pages, est d'agrafer le tout et de poser une page de garde. Ce qui en sort est une compilation, pas un document : les répétitions ne sont pas résorbées, les transitions manquent, les incohérences entre sections passent inaperçues. La rédaction du CdCF est l'occasion de **relire l'ensemble** et de réécrire ce qui doit l'être pour produire un récit cohérent.

**Exigences non chiffrées.** *« Le système doit être précis »*, *« le coût doit être raisonnable »* : sans valeur ni unité, l'exigence n'est ni évaluable en fin de projet, ni arbitrable en cours de route. Chaque ligne du CdCF doit porter un chiffre. La méthode est détaillée dans [[caracteriser-une-exigence|caractériser une exigence]].

**Critères subjectifs.** *« Ergonomique »*, *« agréable »*, *« robuste »* ne sont pas des critères mais des intentions. À reformuler systématiquement en grandeur mesurable (force d'actionnement maximale, MTBF, temps d'apprentissage, plage de température admissible).

**Écoconception en addendum.** Une section *« écoconception »* ajoutée à la fin du CdCF, sans intégration dans les autres sections, ne tient pas — l'[[ecoconception|écoconception]] doit être **transverse** : critère dans l'état de l'art, [[FC]] dans la pieuvre, risque dans la matrice. Une fiche-trame dédiée détaille la démarche.

**Sauter la revue de CdCF.** Le passage en revue par les enseignants (ou le client en contexte professionnel) n'est pas une formalité : c'est ce qui **engage** le document. Sans revue, le CdCF reste un brouillon d'équipe ; après revue, c'est un contrat qui ne se renégocie plus à la légère.

## Cas particulier — projet école sans client réel

Quand le projet n'a pas de client externe (robot sumo, robot suiveur de ligne, démonstrateur démonté après soutenance), la rédaction d'un CdCF complet peut sembler artificielle. Deux postures honnêtes existent — voir le [[specification-technique#cas-particulier-projet-école-sans-client-réel|cas particulier de la phase de spécification]] pour le détail. L'essentiel : choisir explicitement une posture (*étudiant-client-de-lui-même* ou *client fictif crédible*) et la tenir tout au long du document.

## Voir aussi

- [[specification-technique|Spécification technique]] — phase qui produit le CdCF (démarche détaillée en 6 étapes)
- [[cdcf-ecole-template.docx|Template CdCF école à compléter]] — document Word pré-rempli pour démarrer la rédaction
- [[bete-a-cornes|Bête à cornes]] — outil pour formuler le besoin (section 2 du CdCF)
- [[pieuvre|Pieuvre]] — outil pour formaliser les fonctions (section 4 du CdCF)
- [[fonction|Fonction]] — typologie FP/FS/FC mobilisée dans l'analyse fonctionnelle
- [[caracteriser-une-exigence|Caractériser une exigence]] — méthode du triplet critère/niveau/flexibilité (section 4)
- [[etat-de-l-art-technique|État de l'art technique]] — section 3 du CdCF
- [[afnor-nfx50-151|Norme NF X50-151]] — cadre méthodologique de référence
