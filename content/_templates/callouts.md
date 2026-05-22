---
title: Palette de callouts
tags:
  - meta
  - template
  - editorial
draft: false
---

Cette fiche documente l'**ensemble des callouts** utilisables dans le site, leur sémantique d'usage, leurs conventions de titre et leur rendu visuel. Elle sert de référence pour la rédaction : avant d'utiliser un callout, vérifier ici qu'on emploie le bon, qu'on respecte sa sémantique, et qu'on suit la convention de titre.

## Règle générale

Un callout n'est **pas un effet de mise en page**. Chaque callout a une sémantique précise (un type d'information signalé) et un usage prescrit. En abuser dilue leur force visuelle : si toute la page est en callout, plus rien ne ressort.

Règle pratique par défaut : viser **0 à 3 callouts par fiche**. Les **fiches-trame** (phases du cycle en V) sont une exception assumée : on y trouve typiquement un `[!example]` et un `[!livrable]` par étape, plus quelques `[!warning]` et `[!tip]` ponctuels — soit 5 à 10 callouts par fiche. La justification est pédagogique : incarnation systématique sur le fil rouge + marquage visuel des livrables évalués.

## Charte graphique

Palette pastel saturée, ambiance lecture longue. Pour chaque callout, un fond clair (`--bg`) et un titre/filet plus profond (`--color`, `--border`). Le mode sombre n'est pas décliné en v2 — les étudiants travaillent principalement en mode clair.

| Callout | Fond | Titre / filet |
|---|---|---|
| `[!question]` | `#B5C5D6` (bleu très clair) | `#3B5F7F` |
| `[!info]` / `[!note]` | `#FAF6EC` (crème) | `#8C7E5C` |
| `[!tip]` / `[!success]` / `[!check]` / `[!done]` | `#D8E3D3` (sauge très clair) | `#5C8556` |
| `[!warning]` | `#FADFAF` (ambre clair) | `#A8761F` |
| `[!danger]` / `[!failure]` / `[!bug]` | `#F6B5A0` (corail clair) | `#A33A1F` |
| `[!example]` / `[!terrain]` | `#F9E6D4` (pêche très clair) | `#A86A3F` |
| `[!livrable]` | `#EED9FB` (lavande très clair) | `#6B3B96` |

Mise à jour : modifier `quartz/styles/custom.scss`. Les variables CSS suivent la nomenclature Quartz (`--color`, `--border`, `--bg`).

## Callouts disponibles

### `[!question]` — question centrale

**Sémantique** : pour formuler une **question fondamentale** d'une phase, d'un outil ou d'une notion. Sert d'ancrage cognitif en début de section ou pour soulever un point ouvert.

**Convention de titre** : `Question : <la question posée>` — la question elle-même est dans le titre, pas dans le corps.

```markdown
> [!question] Question : Que faire si je n'ai pas assez de pins GPIO sur mon microcontrôleur ?
> Plusieurs pistes : multiplexer avec un expander I²C, basculer sur un microcontrôleur plus dense, ou revoir la décomposition fonctionnelle pour réduire le besoin.
```

> [!question] Question : Que faire si je n'ai pas assez de pins GPIO sur mon microcontrôleur ?
> Plusieurs pistes : multiplexer avec un expander I²C, basculer sur un microcontrôleur plus dense, ou revoir la décomposition fonctionnelle pour réduire le besoin.

### `[!info]` / `[!note]` — complément neutre

**Sémantique** : pour un **complément contextuel** ou une précision qui n'est ni un piège, ni un conseil, ni un livrable. Le callout le plus discret, à privilégier quand on hésite.

**Convention de titre** : `Info` ou `À retenir`. Court, neutre.

```markdown
> [!info] Info
> Le format DXF est ouvert mais n'embarque pas les annotations CAO complètes.
```

> [!info] Info
> Le format DXF est ouvert mais n'embarque pas les annotations CAO complètes.

### `[!tip]` / `[!success]` — astuce pratique, validation atteinte

**Sémantique** : pour un **conseil de mise en œuvre**, un raccourci, une bonne pratique non triviale — ce que dirait un pro à un débutant. Mêmes couleurs que `[!success]`, qui signale un état positif atteint.

**Convention de titre** : `Astuce` ou `Succès`. Court, descriptif. Si l'astuce tient en quelques mots, le titre peut porter l'idée (`Branches ≠ rôles`).

```markdown
> [!tip] Astuce
> Toujours dimensionner l'alimentation au double du courant nominal calculé.
```

> [!tip] Astuce
> Toujours dimensionner l'alimentation au double du courant nominal calculé.

### `[!warning]` — piège fréquent

**Sémantique** : pour signaler une **erreur courante** ou un piège dans lequel tombent les étudiants. Pas un danger physique, juste une source de bug ou de perte de temps. Inclut les anti-patterns pédagogiques (« on a tendance à faire X alors qu'il faut faire Y »).

**Convention de titre** : `Attention`. L'icône native du callout suffit, pas d'emoji additionnel.

```markdown
> [!warning] Attention
> Oublier que l'ESP32 ne tolère pas 5 V sur ses GPIO — un seul fil mal câblé peut griller la carte.
```

> [!warning] Attention
> Oublier que l'ESP32 ne tolère pas 5 V sur ses GPIO — un seul fil mal câblé peut griller la carte.

### `[!danger]` — danger réel

**Sémantique** : pour un **risque matériel, électrique ou de sécurité personnelle**. À réserver aux vrais dangers (haute tension, lithium, mécanique en mouvement). Ne pas confondre avec `[!warning]`.

**Convention de titre** : `Danger`. L'icône native du callout suffit.

```markdown
> [!danger] Danger
> Les batteries lithium percées peuvent s'enflammer spontanément. Ne jamais déformer un accu.
```

> [!danger] Danger
> Les batteries lithium percées peuvent s'enflammer spontanément. Ne jamais déformer un accu.

### `[!example]` — exemple, cas pratique

**Sémantique** : pour un **exemple chiffré, un cas concret, une mini-démo** qui incarne la notion. Sert à ancrer la théorie sur un cas réel.

**Convention de titre** :
- Dans une **fiche-trame** (phase du cycle en V) : toujours `Sur le bras 3 axes` (fil rouge unique du projet, voir décision du 22/05).
- Dans une **fiche-notion** : nom court du cas d'illustration (par exemple `Couveuse`, `Bras 6 axes industriel`).

```markdown
> [!example] Sur le bras 3 axes
> Décomposition probable en trois sous-systèmes : mobilité articulaire, interface utilisateur, alimentation et sécurité.
```

> [!example] Sur le bras 3 axes
> Décomposition probable en trois sous-systèmes : mobilité articulaire, interface utilisateur, alimentation et sécurité.

### `[!terrain]` — retour d'expérience (custom)

**Sémantique** : pour une **anecdote tirée d'un projet réel**, un retour d'expérience d'une promotion antérieure. Ton plus libre, presque journal de bord. À utiliser parcimonieusement pour rester crédible.

**Convention de titre** : `Vu dans une ancienne promo`. Variantes possibles si on veut dater (`Vu dans la promo 2024`).

```markdown
> [!terrain] Vu dans une ancienne promo
> Une équipe a découvert en semaine 14 que son moteur consommait 3 A à vide alors que le pré-dimensionnement en prévoyait 0,8 A. Refonte complète de l'alimentation, prototype repoussé d'un mois.
```

> [!terrain] Vu dans une ancienne promo
> Une équipe a découvert en semaine 14 que son moteur consommait 3 A à vide alors que le pré-dimensionnement en prévoyait 0,8 A. Refonte complète de l'alimentation, prototype repoussé d'un mois.

### `[!livrable]` — livrable évalué (custom)

**Sémantique** **stricte** : pour signaler un **livrable concret attendu de l'étudiant**, qui correspond à une compétence évaluée. Ne **pas** l'employer pour des livrables secondaires ou des suggestions.

**Convention de titre** : `Livrable de l'étape N` (singulier) ou `Livrables de l'étape N` (pluriel selon le nombre de livrables listés).

```markdown
> [!livrable] Livrable de l'étape 1
> Décomposition fonctionnelle du système (sous-systèmes + fonctions techniques par bloc).
```

> [!livrable] Livrable de l'étape 1
> Décomposition fonctionnelle du système (sous-systèmes + fonctions techniques par bloc).

## Pliage (à valider)

Tous les callouts supportent le pliage en ajoutant `+` (déplié par défaut) ou `-` (replié par défaut) après le type :

```markdown
> [!example]- Sur le bras 3 axes
> Contenu visible uniquement après clic sur le titre.
```

**Décision en attente** : faut-il replier certains callouts par défaut (typiquement `[!example]` quand il est long) ? À trancher après quelques fiches rédigées.
