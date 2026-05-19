---
title: Palette de callouts
tags:
  - meta
  - template
  - editorial
draft: false
---

Cette fiche documente l'**ensemble des callouts** utilisables dans le site, leur sémantique d'usage et leur rendu visuel. Elle sert de référence pour la rédaction : avant d'utiliser un callout, vérifier ici qu'on emploie le bon, et qu'on en respecte la sémantique.

## Règle générale

Un callout n'est **pas un effet de mise en page**. Chaque callout a une sémantique précise (un type d'information signalé) et un usage prescrit. En abuser dilue leur force visuelle : si toute la page est en callout, plus rien ne ressort.

Règle pratique : viser **0 à 3 callouts par fiche**, sauf cas justifié (fiche-trame avec un callout `[!livrable]` par phase, par exemple).

## Callouts disponibles

### `[!question]` — question centrale

Utilisation : pour formuler la **question fondamentale** d'une phase, d'un outil ou d'une notion. Sert d'ancrage cognitif en début de section.

```markdown
> [!question] Question centrale
> Que doit faire le système, dans quel contexte, et pour qui ?
```

> [!question] Question centrale
> Que doit faire le système, dans quel contexte, et pour qui ?

### `[!info]` — complément neutre

Utilisation : pour un **complément contextuel** ou une précision qui n'est ni un piège, ni un conseil, ni un livrable. C'est le callout le plus discret, à privilégier quand on hésite.

```markdown
> [!info] À noter
> Le format DXF est ouvert mais n'embarque pas les annotations CAO complètes.
```

> [!info] À noter
> Le format DXF est ouvert mais n'embarque pas les annotations CAO complètes.

### `[!tip]` — astuce pratique

Utilisation : pour un **conseil de mise en œuvre**, un raccourci, une bonne pratique non triviale. Ce que dirait un pro à un débutant.

```markdown
> [!tip] Astuce
> Toujours dimensionner l'alimentation au double du courant nominal calculé.
```

> [!tip] Astuce
> Toujours dimensionner l'alimentation au double du courant nominal calculé.

### `[!warning]` — piège fréquent

Utilisation : pour signaler une **erreur courante** ou un piège dans lequel tombent les étudiants. Pas un danger physique, juste une source de bug ou de perte de temps.

```markdown
> [!warning] Piège classique
> Oublier que l'ESP32 ne tolère pas 5 V sur ses GPIO — un seul fil mal câblé peut griller la carte.
```

> [!warning] Piège classique
> Oublier que l'ESP32 ne tolère pas 5 V sur ses GPIO — un seul fil mal câblé peut griller la carte.

### `[!danger]` — danger réel

Utilisation : pour un **risque matériel, électrique ou de sécurité personnelle**. À réserver aux vrais dangers (haute tension, lithium, mécanique en mouvement). Ne pas confondre avec `[!warning]`.

```markdown
> [!danger] Sécurité
> Les batteries lithium percées peuvent s'enflammer spontanément. Ne jamais déformer un accu.
```

> [!danger] Sécurité
> Les batteries lithium percées peuvent s'enflammer spontanément. Ne jamais déformer un accu.

### `[!example]` — exemple, cas pratique

Utilisation : pour un **exemple chiffré, un cas concret, une mini-démo**. Sert à illustrer une notion abstraite.

```markdown
> [!example] Couveuse
> Pour maintenir 37 °C à ±0,2 °C dans une enceinte de 40 L, on dimensionne une résistance de 30 W pilotée en PWM à 1 kHz.
```

> [!example] Couveuse
> Pour maintenir 37 °C à ±0,2 °C dans une enceinte de 40 L, on dimensionne une résistance de 30 W pilotée en PWM à 1 kHz.

### `[!livrable]` — livrable attendu (custom)

Utilisation **stricte** : pour signaler un **livrable concret attendu de l'étudiant**, qui correspond à une compétence évaluée. Ne **pas** l'employer pour des livrables secondaires ou des suggestions.

```markdown
> [!livrable] Livrable principal
> Le cahier des charges fonctionnel, complété d'un dossier de spécification technique.
```

> [!livrable] Livrable principal
> Le cahier des charges fonctionnel, complété d'un dossier de spécification technique.

### `[!terrain]` — aparté carnet de projet (custom)

Utilisation : pour un **retour d'expérience, une anecdote projet, une remarque tirée du terrain**. Ton plus libre, presque journal de bord. À utiliser parcimonieusement pour rester crédible.

```markdown
> [!terrain] Vu en projet
> En 2024, une équipe a découvert en semaine 14 que son moteur consommait 3 A à vide alors que le pré-dim en prévoyait 0,8 A. Refonte complète de l'alim, prototype repoussé d'un mois.
```

> [!terrain] Vu en projet
> En 2024, une équipe a découvert en semaine 14 que son moteur consommait 3 A à vide alors que le pré-dim en prévoyait 0,8 A. Refonte complète de l'alim, prototype repoussé d'un mois.

## Pliage (à valider)

Tous les callouts supportent le pliage en ajoutant `+` (déplié par défaut) ou `-` (replié par défaut) après le type :

```markdown
> [!example]- Démonstration repliée par défaut
> Contenu visible uniquement après clic sur le titre.
```

**Décision en attente** : faut-il replier certains callouts par défaut (typiquement `[!example]` quand il est long) ? À trancher après quelques fiches rédigées.

## Palette technique

Pour mémoire, les couleurs employées (alignées sur le SVG du cycle en V) :

| Callout | Couleur principale (light) | Couleur principale (dark) |
|---|---|---|
| `[!question]` | Blue `#185FA5` | Blue `#85B7EB` |
| `[!info]` | Gray `#5F5E5A` | Gray `#B4B2A9` |
| `[!tip]` | Teal `#0F6E56` | Teal `#5DCAA5` |
| `[!warning]` | Amber `#BA7517` | Amber `#EF9F27` |
| `[!danger]` | Red `#A32D2D` | Red `#F09595` |
| `[!example]` | Purple `#7F77DD` | Purple `#CECBF6` |
| `[!livrable]` | Purple `#534AB7` | Purple `#AFA9EC` |
| `[!terrain]` | Orange brûlé `#c2410c` | Orange `#fb923c` |

Cette palette est une **première itération**. Une charte couleur complète du site est à définir ultérieurement.
