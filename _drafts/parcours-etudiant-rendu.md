# Parcours étudiant — traversée au rendu (session 2)

> Fichier de travail (non publié). **À remplir par Tim, sur le site rendu.**
> Ouvert le 20/08 (suite 2), après les douze traversées côté fichiers.

## Pourquoi cette seconde traversée

La traversée de session 1 n'a suivi que les **liens écrits dans les fichiers**. Or un
étudiant navigue aussi par des canaux invisibles depuis le dépôt : la vignette qui
s'affiche au survol, la recherche, la vue graphe, le fil d'Ariane, et le rendu mobile où
la moitié d'une page est sous le pli.

**Ce sont les écarts entre les deux traversées qui intéressent, pas les résultats de
celle-ci prise seule.** Un scénario que les liens ratent et que la recherche rattrape
n'est pas le même défaut qu'un scénario que les deux ratent — le premier se corrige par
un mot-clé, le second par une porte.

## Protocole

1. **Ne pas lire mes prédictions avant d'avoir rempli.** Elles sont en fin de fichier,
   sous un titre explicite. Les lire d'abord change ce qu'on cherche.
2. Les douze dans l'ordre du fichier. Une seule session si possible.
3. **Cliquer comme un étudiant**, pas comme l'auteur : ne pas utiliser ce qu'on sait de
   l'arborescence, ne pas corriger mentalement un libellé maladroit.
4. Noter **ce qui s'est passé**, pas ce qui aurait dû. Une hésitation de trois secondes
   est une donnée.
5. Ne rien corriger. Le gel court jusqu'à la session 3.

## Les cinq canaux à tester

À chaque scénario, les mêmes cinq questions. Répondre court — un mot suffit souvent.

| Canal | La question |
|---|---|
| **A · Popover** | Survole le lien clé indiqué. **La vignette suffit-elle à décider de cliquer ?** Ou faut-il ouvrir pour savoir si c'est la bonne fiche ? |
| **B · Recherche** | `Ctrl+K`, taper les mots indiqués (**ceux de l'étudiant**, pas ceux du wiki). Qu'est-ce qui remonte en premier ? Rien ? |
| **C · Graphe** | Depuis la fiche d'arrivée, la vue graphe montre-t-elle un voisin qui aurait été un **raccourci** ou une **meilleure réponse** ? |
| **D · Fil d'Ariane** | Dit-il où on est, et permet-il de remonter utilement ? |
| **E · Mobile** | Le **point de décision** de la page (la liste de liens, le callout, le teaser d'étape) est-il visible sans scroller longuement ? |

> Le graphe et les popovers ne peuvent **pas créer de lien qui n'existe pas** — ils
> rendent visibles des liens écrits. Un scénario sans porte côté fichiers restera sans
> porte au graphe. La recherche, elle, est le seul canal qui peut **court-circuiter tout
> le maillage** : c'est celui dont les écarts seront les plus instructifs.

---

# Les douze

## 1 — « On me demande un cahier des charges, je ne sais pas ce que c'est »

**Entrée** : accueil. **Lien clé à survoler** : `Cahier des charges fonctionnel`, dans le
callout *Livrable* de la phase 1 du hub Conduite de projet.
**Mots à taper** : `cahier des charges` · `CdCF`

- A —
- B —
- C —
- D —
- E —
- **Écart avec la traversée fichiers** —

## 2 — « Quel microcontrôleur pour mon projet ? »

**Entrée** : accueil. **Lien clé** : `Microcontrôleur`, étape 2 du hub Système embarqué.
**Mots à taper** : `quel microcontrôleur` · `choisir une carte`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 3 — « Mon capteur renvoie n'importe quoi » *(sans cible nommable)*

**Entrée** : la fiche `Lire un capteur analogique`, section *Pièges*.
**Lien clé** : `Filtrer des mesures`, cité **dans** un piège.
**Mots à taper** : `capteur valeurs bizarres` · `bruit` · `mesure instable`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 4 — « Mon code ne compile pas »

**Entrée** : accueil. **Lien clé** : `C++`, étape 4 du hub Système embarqué. Survole
**aussi** le teaser de l'étape 6, *Fiabiliser et déboguer*.
**Mots à taper** : `erreur compilation` · `was not declared`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 5 — « Le dossier technique, il contient quoi ? »

**Entrée** : accueil. **Lien clé** : `Dossier technique`, callout *Livrable* de la phase 4.
**Mots à taper** : `dossier technique`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 6 — « Ma PoC élec marche, et après ? » *(frontière embarqué / conduite)*

**Entrée** : la fiche `Concevoir l'électronique` (fin de l'étape 3 embarquée), **pas** le
hub. **Lien clé** : `Dossier technique`, dans la *Conclusion*.
**Mots à taper** : `preuve de concept` · `PoC` · `et après`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 7 — « On est au milestone PoC, je n'ai pas écouté le prof »

**Entrée** : accueil. **Lien clé** : `Preuve de concept`, callout *Livrable* de la phase 3.
**Mots à taper** : `milestone` · `jalon` · `PoC`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 8 — « Comment j'alimente mon montage ? »

**Entrée** : accueil. **Lien clé** : `Concevoir une alimentation`, étape 2 du hub embarqué.
**Mots à taper** : `alimenter` · `5V`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 9 — « On me demande une AMDEC »

**Entrée** : accueil. **Liens clés — les deux** : `Gestion de projet` et
`Sécurité et qualité`, sous *En parallèle de toutes les phases*. La question précise :
**les deux vignettes permettent-elles de trancher laquelle porte l'AMDEC ?**
**Mots à taper** : `AMDEC` · `analyse de risques`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 10 — « Mon moteur manque de couple » *(frontière avec la Méca)*

**Entrée** : la fiche `Piloter un moteur pas-à-pas`, section *Pièges*.
**Pas de lien clé** — c'est précisément le constat : le mot *couple* n'y est jamais un
lien. Regarde surtout le **graphe** et la **recherche**.
**Mots à taper** : `couple` · `perte de pas` · `réduction`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 11 — « Je dois faire un PCB, par où je commence ? »

**Entrée** : accueil. **Lien clé** : `Circuit imprimé`, étape 3 du hub embarqué.
**Mots à taper** : `PCB` · `circuit imprimé`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

## 12 — « Mon robot marche parfois » *(le cas pur)*

**Entrée** : accueil. **Lien clé** : le teaser de l'étape 6 du hub embarqué (« un montage
qui marche au premier essai n'est pas fiable pour autant »).
**Mots à taper** : `reproductibilité` · `marche parfois` · `intermittent`

- A —
- B —
- C —
- D —
- E —
- **Écart** —

---

# Deux questions transverses, à répondre à la fin

**Q1 — La recherche a-t-elle rendu une porte que les liens n'offraient pas ?** Sur quels
scénarios, avec quels mots ? C'est la question qui décidera si le chantier de session 3
porte sur les **libellés de liens** ou sur les **alias et mots-clés**.

**Q2 — As-tu cliqué quelque part que je n'avais pas prévu ?** Un chemin divergent est
plus informatif qu'un chemin confirmé : il dit ce qu'un libellé promet réellement, par
opposition à ce que son auteur croyait promettre.

---
---

# ⚠ MES PRÉDICTIONS — à ne lire qu'après avoir rempli

Publiées **avant** ta traversée pour qu'elles soient réfutables. Une prédiction fausse
est un meilleur résultat qu'une prédiction confirmée : elle dit que je lis mal le wiki.

**Sur la recherche (canal B), le pronostic scénario par scénario :**

| # | Mot de l'étudiant | Ce que je prédis |
|---|---|---|
| 1 | `CdCF` | **Trouve.** La fiche porte `aliases: [CdCF]`. |
| 2 | `quel microcontrôleur` | Trouve. |
| 3 | `bruit`, `mesure instable` | **Trouve — et rattrape le scénario.** `filtrage` ou `precision-de-mesure` devraient remonter. Si oui, la recherche fournit la porte-symptôme que les liens n'ont pas. |
| 4 | `erreur compilation` | **Trouve, et annule le piège de l'étape 6.** Le titre de la fiche cible est *Lire et comprendre les erreurs*. |
| 5 | `dossier technique` | Trouve. |
| 6 | `preuve de concept` | **Trouve.** Le défaut #6 serait donc invisible à qui connaît le mot — et il le connaît, il vient de le dire. |
| 7 | `milestone` | **Ne trouve rien.** Le mot est anglais et le wiki dit *jalon*. `jalon` devrait rendre `jalons`. |
| 8 | `alimenter` | Trouve. |
| 9 | `AMDEC` | **Trouve directement.** Conséquence : le détour de 3 clics ne coûte qu'à qui n'a pas le sigle exact — or on le lui a donné. **#9 serait donc moins grave qu'il n'en a l'air**, et #12 plus. |
| 10 | `couple` | **Incertain, et c'est le test le plus intéressant.** Si `schema-cinematique` ou une fiche Méca remonte, la recherche ouvre la frontière que les liens ferment, et #10 change de nature. Si seules des fiches Arduino remontent, le diagnostic tient. |
| 11 | `PCB` | Trouve. |
| 12 | `reproductibilité`, `marche parfois` | **Ne trouve rien sur les deux.** Seul `intermittent` devrait rendre `cable-management` et `pcb` — un mot que l'étudiant n'a pas. |

**Sur les popovers (A)** : je prédis qu'ils confirment sans surprise partout **sauf au
scénario 9**, où la vraie question est de savoir si les deux vignettes « risques »
(`gestion-de-projet` contre `securite-et-qualite`) laissent trancher. Si elles ne le
laissent pas, le défaut est bien dans le hub et non dans le lecteur.

**Sur le graphe (C)** : je prédis qu'il **ne sauve aucun scénario**, parce qu'il affiche
les liens écrits et rien d'autre. Sur #10 il devrait au contraire **confirmer visuellement
l'absence** — aucun voisin Méca autour de `arduino-moteur-pas-a-pas`. Si le graphe me
dément quelque part, c'est mon extraction de liens qui est en cause, pas le wiki.

**Sur le mobile (E)** : je prédis que le hub embarqué est le point faible. Ses sept étapes
font une page longue, et les listes de liens sont **sous** la prose de chaque étape ;
le teaser de l'étape 6 — la seule porte-depuis-symptôme du wiki (#12) — est très bas.
Sur le hub du V, les cinq callouts `[!livrable]` devraient mieux tenir, étant visuellement
distincts.

**Prédiction d'ensemble** : la recherche rattrape 3, 4 et 6, ne rattrape ni 10 ni 12, et
rend 9 bénin. Si ça se vérifie, **le chantier de session 3 se resserre sur deux dossiers**
— la frontière Méca, et l'indexation par symptôme — au lieu des quatre motifs relevés en
session 1.
