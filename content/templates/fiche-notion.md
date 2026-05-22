---
title: 
type: notion
phases:
  - 
tags:
  - notion
prerequis: []
aa: []
draft: false
---

<!--
GUIDE DU TEMPLATE
=================
Template pour une fiche-notion : explication courte d'un outil, d'une
méthode ou d'un concept mobilisé dans le projet. Une fiche-notion est
autoportante (lisible sans contexte préalable) et lisible en ~5 min
sur smartphone.

Différence avec une fiche-trame :
- Une fiche-trame décrit une démarche projet en étapes ordonnées
  (cycle en V) et s'incarne sur le fil rouge unique du projet
  (bras 3 axes).
- Une fiche-notion explique UN concept ou outil. Son cas d'illustration
  est CHOISI POUR LA NOTION (cas autonome), pas le fil rouge des
  fiches-trame. Voir décision du 22/05.

Front matter :
- `type: notion` (typologie 3 types : trame / tuto / notion)
- `phases:` liste les phases où la notion est mobilisée (peut être
  vide si la notion est transverse ou pédagogique sans phase précise)
- `tags:` doit contenir `notion` + au moins un tag de domaine
  (`proj`, `eee`, `mia`, `meo`, `mme`, `ese`)
- `prerequis:` notions à connaître avant d'aborder celle-ci

Pour les conventions de callouts (sémantique d'usage, couleurs,
conventions de titre), consulter `templates/callouts.md`.
Convention de titre des [!example] dans une fiche-notion : nom court
du cas d'illustration (ex. « Couveuse », « Bras 6 axes industriel »).

NE PAS mettre de H1 dans le corps : Quartz le génère depuis `title`.
Le template lui-même est `draft: false` pour être consultable sur le
site ; les fiches que vous créerez à partir de lui doivent commencer
en `draft: true` tant qu'elles ne sont pas relues.
Liens internes : [[notion]] crée un popover si la fiche cible existe,
ou un lien rouge sinon (= TODO list naturelle).
-->

<!--
POPOVER (premier paragraphe, hors section)
==========================================
1 à 3 phrases, autoportantes, sans jargon non défini. Doit ENONCER ce
qu'est la notion (catégorie : outil / méthode / concept / norme) et
son rôle dans le projet. Cette ouverture sert de popover sur tout le
site — elle doit pouvoir être lue isolément et tenir debout.

Mettre en gras les concepts-clé en première occurrence.
-->

La **<nom de la notion>** est <catégorie : outil, méthode, concept, norme...> qui <ce qu'elle fait, son rôle>. <Articulation avec d'autres notions ou phases si pertinent>.

## À quoi ça sert ?

<!--
À QUOI ÇA SERT ?
================
Section obligatoire. Pose le ROLE de la notion : pourquoi elle existe,
quel problème elle résout, quelle décision elle informe.

Pas de méthode ici (vient dans la section suivante) — uniquement le
« pourquoi ».

Forme libre : paragraphe court, ou paragraphe + liste à puces de
rôles. Cible 5-15 lignes.
-->

<À rédiger — rôle de la notion, problème qu'elle résout, type de décision qu'elle informe. Peut se terminer par une liste à puces des fonctions remplies.>

## Comment <verbe adapté à la notion> ?

<!--
COMMENT <VERBE> ?
=================
Section obligatoire. Titre adaptatif selon la notion :
- méthode / outil graphique → « Comment la construire ? »
- composant / circuit → « Comment le câbler ? »
- grandeur / phénomène → « Comment le calculer ? »
- norme / protocole → « Comment l'appliquer ? »
- concept algorithmique → « Comment l'implémenter ? »

Décrit la mise en œuvre concrète. Peut contenir :
- un tableau de définitions / paramètres
- un schéma SVG (placer dans content/ressources/img/)
- une méthode numérotée (étapes 1, 2, 3...)
- un bloc de code si la notion est algorithmique

Ton : direct, à l'impératif ou à l'infinitif. Verbes d'action.
-->

<À rédiger — méthode de mise en œuvre. Adapter le verbe du titre à la nature de la notion (construire / câbler / calculer / appliquer / implémenter).>

## Exemple — <Nom court du cas>

<!--
EXEMPLE — <NOM COURT DU CAS>
============================
Section quasi obligatoire (la notion sans exemple reste abstraite).

CONVENTION DE TITRE : le H2 lui-même intègre le nom du cas.
- « Exemple — Couveuse à œufs »
- « Exemple — Bras 6 axes industriel »
- « Exemple — Régulation thermique d'une couveuse »

Cas d'illustration CHOISI POUR LA NOTION (cas autonome). Pas le fil
rouge bras 3 axes des fiches-trame — c'est la convention de
coexistence actée le 22/05.

Forme libre : peut contenir du texte, des schémas SVG, et un triptyque
pédagogique mauvais / moyen / bon dans des callouts [!failure] /
[!warning] / [!example] (utilisé dans bete-a-cornes.md, à reprendre
quand pertinent).

Triptyque mauvais/moyen/bon : 1 paragraphe d'introduction situant le
cas, puis 3 callouts en colonne avec analyse en gras (« Pourquoi
c'est mauvais », etc.).
-->

<À rédiger — introduction au cas, puis exemple détaillé. Pour les notions à fort enjeu pédagogique, structurer en triptyque mauvais / moyen / bon avec callouts.>

## Pièges

<!--
PIÈGES
======
Section obligatoire dès que la notion a des pièges d'usage récurrents
en projet étudiant (cas le plus fréquent).

Forme : 4-6 pièges, chacun introduit par une PHRASE FORTE EN GRAS
(le piège lui-même), suivie d'une phrase d'explication.

Pas de liste à puces : les pièges sont des mini-paragraphes pour
laisser respirer.

Ton : impératif négatif ou nominatif court.
- « **Confondre besoin et solution.** Si une réponse contient un nom
   de composant... »
- « **"Tout le monde" comme utilisateur.** Quand on ne sait pas à qui
   le système rend service... »
-->

**<Piège 1 en gras court>.** <Phrase d'explication du piège et de la conséquence.>

**<Piège 2 en gras court>.** <Phrase d'explication.>

**<Piège 3 en gras court>.** <Phrase d'explication.>

## Cas particulier — <sujet>

<!--
CAS PARTICULIER(S) — OPTIONNEL
==============================
Section optionnelle, à inclure seulement si la notion a un cas d'usage
spécifique qui mérite un traitement à part (ex. « projet école sans
client réel » pour la bête à cornes).

Convention de titre :
- 1 seul cas → « Cas particulier — <sujet> »
- N cas → « Cas particuliers » (sans tiret), puis sous-sections H3

Forme : paragraphe court qui explique le cas, ou renvoi vers une fiche
ou section qui le traite en détail.

À SUPPRIMER si la notion n'a pas de cas particulier digne d'être
mentionné.
-->

<À rédiger ou supprimer — cas particulier qui mérite un traitement séparé. Renvoyer vers une autre fiche si le sujet y est traité en détail.>

## Aller plus loin

<!--
ALLER PLUS LOIN — OPTIONNEL
===========================
Section optionnelle pour les ressources externes (livres, normes,
articles, tutoriels), les approfondissements pour les curieux, ou
les variantes plus avancées de la notion.

Forme : liste à puces avec lien et brève description.

À SUPPRIMER si on n'a rien à pointer au-delà des fiches du site (cas
fréquent au démarrage du tutoriel).
-->

<À rédiger ou supprimer — ressources externes, approfondissements.>

## Voir aussi

<!--
VOIR AUSSI
==========
Section obligatoire. Liens internes vers les fiches du site qui
prolongent ou contextualisent la notion.

Structure type :
- 1-2 fiche(s)-trame où la notion est mobilisée (phase du projet)
- 1-3 notion(s) associée(s) (prérequis, outils proches, méthodes
  alternatives)
- 1 norme ou référence méthodologique si pertinent

Discipline : ne pas chasser les liens. Uniquement les liens
structurels évidents.

Format : `[[cible|texte affiché]] — description courte` (avec un
tiret cadratin et une description, pas juste le lien nu).
-->

- [[<phase-concernée>|<Phase concernée>]] — <où la notion est mobilisée>
- [[<notion-associée>|<Notion associée>]] — <relation>
- [[<référence>|<Référence>]] — <type : norme, cadre, outil parent>
