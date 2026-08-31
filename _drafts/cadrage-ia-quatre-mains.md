# Cadrage — rendre le site exploitable par une IA à quatre mains avec l'étudiant

> Fichier de travail privé (non publié). Séance chat intermédiaire du 31/08, PC pro.
> Nature : EXPLORATOIRE. Inventaire d'options avec leurs coûts — pas de décision, pas de mise en œuvre, aucune écriture dans `content/`.
> Objectif porté par Tim : qu'un prompt « cherche dans https://timturko.github.io/TheSkillCodex/ » suffise à ce qu'un assistant (a) oriente l'étudiant vers la bonne fiche, (b) le guide selon NOS normes (cycle en V, jalons, livrables, revue de CdCF), (c) outille un choix technique sans contredire le corpus.

---

## 0. Ce que l'IA voit aujourd'hui — mesuré (31/08)

Chaque chiffre nomme l'outil qui l'a produit (C118).

### 0.1 Côté site publié (`web_fetch`, `web_search`)

- **`web_search`** « timturko.github.io TheSkillCodex » puis « TheSkillCodex mécatronique cycle en V fiches » : **0 résultat pointant vers le site** sur 19 documents rendus. Deux requêtes, un moteur : ce n'est pas une preuve de non-indexation, c'est un constat d'**invisibilité pour un assistant qui cherche** au lieu de fetcher.
- **`web_fetch` racine** : `meta description` = « Bienvenue sur TheSkillCodex English version An English version of this wiki is under way: TheSkillCodex in English. » — le H1 du corps et le callout sont aspirés dans la description. Corps vu par la machine : **3 liens de branche + le lien `/en/`**. « Explorateur » rendu vide (`-`), « Vue Graphique » vide : les deux sont construits côté client depuis `contentIndex.json`, invisibles à un fetch. « Liens retour » rendus.
- **`web_fetch` `/conduite/`** : description = **première phrase de la fiche** (la définition-popover) ; liens internes résolus en URL absolues ; callouts rendus en blockquote avec leur titre (« Question centrale », « Livrable principal ») mais **le type `[!livrable]` est perdu** ; listing des 3 sous-dossiers avec date et tags. Le texte dit au lecteur « trois types de fiches que tu reconnaîtras au champ `type:` dans leur en-tête » — **ce champ n'est rendu nulle part sur le site**.
- **`web_fetch` `/tags/proj`** : « 64 éléments », **FR et EN entremêlés**, sans marqueur de langue ; description « Aucune description fournie ».
- Non mesuré : nombre d'URL du `sitemap.xml` en ligne, `Content-Length` de `/static/contentIndex.json` en ligne, statut HTTP de `/robots.txt` (inféré 404 par lecture du dépôt, pas fetché), indexation Google / Bing.

### 0.2 Côté dépôt (`read_text_file`, `read_multiple_files`, `list_directory`)

- `quartz.config.ts` : `ContentIndex({ enableSiteMap: true, enableRSS: true })`, `Description()`, `CustomOgImages()`, `locale: "fr-FR"`, `enableSPA: true`, `analytics: null`, `ignorePatterns: ["private", "prof", "templates", ".obsidian"]`.
- `quartz/plugins/emitters/contentIndex.tsx` : émet **`sitemap.xml`** (`<loc>` + `<lastmod>` par page), **`index.xml`** (RSS, 10 items par défaut) et **`static/contentIndex.json`** = pour chaque page `{ slug, filePath, title, links, tags, content }` où `content` est le **texte intégral aplati** (`file.data.text`). `description` et `date` sont retirés du JSON.
- `quartz/plugins/transformers/description.ts` : description = première(s) phrase(s) jusqu'à 150 caractères (max 300), sauf `description:` explicite en front matter. **Par la convention du 19/05 (première phrase = définition autoportante), la description machine de chaque fiche est déjà sa définition.** Exception : les pages qui portent un H1 dans le corps (`index.md`, `en/index.md`).
- `quartz/components/Head.tsx` : `<meta name="description">`, `og:*`, `twitter:*`. **Pas de `hreflang`, pas de JSON-LD, pas de `<meta name="robots">`.**
- `quartz/components/renderPage.tsx` : `<html lang={frontmatter.lang ?? locale.split("-")[0]}>` → **`lang="fr"` sur toute page sans champ `lang`**.
- Front matter FR (`conduite/proj/specification-technique.md`) : `title, type, phase, phases, tags, prerequis, aa, draft`. Front matter EN (`en/conduite/proj/specification-technique-en.md`) : mêmes champs **+ `source_fr` + `source_sha256`**. **Ni l'une ni l'autre ne porte `lang`, ni `description`.** Sur 242 fiches EN, attendu : 242 sans `lang` (le générateur ne l'écrit pas) — **à mesurer** : `Select-String -Path content\en\**\*.md -Pattern '^lang:' | Measure-Object`.
- `quartz/styles/custom.scss` : `hyphens: auto` sur les paragraphes justifiés au-dessus de 600 px. **Le navigateur choisit le dictionnaire de césure d'après `lang` : les 242 pages EN sont césurées en français sur écran large.** Défaut humain, silencieux, causé par le même champ manquant que le défaut machine.
- `quartz/plugins/emitters/assets.ts` : **tout fichier non-`.md` sous `content/`** (hors `ignorePatterns`) est copié tel quel dans `public/` avec son chemin. Un `content/llms.txt` sortirait à `/llms.txt`, un `content/robots.txt` à `/robots.txt`, sans toucher à Quartz.
- `quartz/static/` : `giscus/`, `icon.png`, `og-image.png`. **Pas de `robots.txt`.** Racine de `content/` : `index.md` + dossiers, **pas de `robots.txt`, pas de `llms.txt`.**
- `.github/workflows/deploy.yml` : push sur `main` → `npm ci` → `npx quartz build` → `public/` déployé (Node 22). Tout émetteur ajouté à Quartz tourne donc en CI, sans geste local.
- `public/` local du PC pro : **build périmé** (arborescence `fiches/`, `hub/` d'avant la restructuration) ; `static/contentIndex.json` = 786,96 Ko (`list_directory_with_sizes`) — **non représentatif du corpus actuel**, cité seulement pour dire que le fichier est un seul objet, une seule ligne.
- Ordre de grandeur, **estimation et non mesure** : 291 261 mots FR × ~6,5 caractères ≈ 1,9 Mo de texte brut FR, EN du même ordre → `contentIndex.json` en ligne vraisemblablement **~4 Mo**. Les outils de fetch des assistants tronquent bien en dessous : **l'index intégral existe mais n'est pas avalable en un fetch**. À mesurer par `curl -sI https://timturko.github.io/TheSkillCodex/static/contentIndex.json`.

### 0.3 Anomalies relevées (aucune corrigée — séance sans écriture)

1. `<html lang="fr">` sur les pages EN → césure française sur de l'anglais (humain, écran large) + signal de langue faux (machine, lecteurs d'écran).
2. Description machine de la racine polluée par le H1 et le callout « English version ».
3. `conduite/index` renvoie le lecteur au champ `type:` « dans leur en-tête », que le site ne rend pas.
4. Pied de page : `GitHub → github.com/jackyzha0/quartz`, `Discord Community` — liens du gabarit Quartz, pas du projet.
5. Pages d'étiquette FR + EN entremêlées sans marqueur de langue.
6. Site absent de deux recherches web nominatives.

---

## 1. L'axe qui ordonne l'inventaire : RENVOYER ou RÉPONDRE À LA PLACE

Un dispositif qui donne à l'assistant **des titres, des définitions et des URL** le met exactement dans la position que le wiki assigne déjà à un wiki-link : un popover (la première phrase) et une redirection (le clic). L'assistant peut orienter, situer, citer — et doit ouvrir la fiche pour en dire plus. C'est le dispositif **de renvoi**.

Un dispositif qui donne à l'assistant **le corpus entier en un bloc** le met en position de paraphraser sans que l'étudiant ouvre jamais une fiche. Les « Pièges » deviennent des conseils détachés de leur argumentation, la fiche de 5 minutes n'est plus lue. C'est le dispositif **de substitution**.

Les deux modes d'échec ne sont pas symétriques, et c'est ce qui rend l'état actuel trompeur :

- **Aujourd'hui (rien)**, l'assistant qui ne trouve pas le corpus répond **depuis ses connaissances générales** et **contredit le corpus sans le savoir** : cycle en V à neuf étapes, « dérisquer », « phase 1 », « soutenance intermédiaire », choix de carte par le prix. L'étudiant ne peut pas voir la contradiction. C'est le pire des cas pour le critère (c).
- **Avec le corpus entier**, l'assistant répond **conformément** au corpus mais **à sa place**.

Le point d'équilibre est donc un dispositif de renvoi **accompagné de règles** : l'assistant sait où sont les fiches, ce qu'elles définissent, et ce qu'il n'a pas le droit de faire. Ce qui suit est ordonné du plus léger au plus lourd, et chaque option est classée sur cet axe.

**Une observation structurante** : la convention « première phrase = définition autoportante » (19/05) a déjà produit le résumé machine de chaque fiche. Aucune fiche n'a à être réécrite pour la machine ; tout artefact de renvoi ci-dessous **se dérive** de ce que le lecteur humain lit déjà. C'est ce qui garantit la contrainte « ne pas dégrader la lecture humaine » : les artefacts sont des projections, pas des ajouts au corps.

---

## 2. Inventaire des dispositifs

Unités de coût : *mise en place* = patch de N lignes, une fois / un bloc Code / une séance ; *entretien* = ce que coûte chaque évolution du corpus ; *étudiant* = rien / une URL à donner / un prompt à coller.

### A — Rien (état mesuré au § 0)

- **Coût** : 0 / 0 / rien.
- **Ce que ça donne** : un assistant fetche la racine, voit 3 liens, descend hub → domaine → fiche en 3 sauts, lit une fiche par fetch (~2 à 5 k tokens avec le chrome « Search / Recherche / Mode sombre / Explorateur »). Un assistant qui **cherche** au lieu de fetcher ne trouve rien.
- **Risque** : substitution par **contradiction** — l'assistant répond depuis le général. Le plus élevé de l'inventaire sur (b) et (c).
- **Bilinguisme** : le fetcher tombe sur `/en/` dès la racine ; les pages d'étiquette mêlent les deux langues ; `lang` faux.

### B — Hygiène de publication (métadonnées que Quartz sait déjà porter)

Aucun mécanisme neuf : front matter, deux fichiers texte, une action de compte.

- **B1 — `lang: en` sur les 242 fiches EN** : le générateur `creer-fiche-en.mjs` l'écrit à la création ; une passe rétroactive par script sur l'existant. *Coût* : un bloc Code. *Entretien* : zéro, porté par le générateur. *Effet* : `<html lang="en">`, césure anglaise, signal machine juste. **C'est le socle de tout ce qui touche au bilinguisme.**
- **B2 — `description:` explicite sur `index.md` et `en/index.md`** (les pages à H1 dans le corps). Deux lignes. Corrige l'anomalie 2.
- **B3 — `content/robots.txt`** avec la ligne `Sitemap: https://timturko.github.io/TheSkillCodex/sitemap.xml`. Deux lignes. Porte aussi une **décision** : que dire aux crawlers IA (GPTBot, ClaudeBot, Google-Extended…) — l'absence actuelle de `robots.txt` équivaut à *tout permettre*. Le site est public : rien n'est perdu, mais le choix doit être explicite.
- **B4 — Indexation** : soumettre le sitemap à Google Search Console et Bing Webmaster. Action de compte, pas de dépôt. **Précondition** pour qu'un assistant qui *cherche* trouve le site.
- **B5 — Pied de page** : remplacer les liens du gabarit Quartz par ceux du projet (ou les retirer). Une ligne dans `quartz.layout.ts`. Corrige l'anomalie 4.
- **Risque pédagogique** : aucun. **Lecture humaine** : améliorée (B1), inchangée ailleurs.
- **Ce que Quartz sait déjà** : tout ; il ne manque que les valeurs.

### C — `llms.txt` : l'index de renvoi

Un fichier Markdown à la racine (convention `llmstxt.org`) : titre, préambule court, puis **une ligne par fiche** — `- [Titre](URL) : définition (première phrase)` — groupées par branche et domaine, avec `type`, `phases` et **l'URL jumelle dans l'autre langue**. Source : uniquement le front matter et la première phrase des fiches de `content/` ; les fichiers de pilotage n'y entrent pas.

- **Taille** : 484 entrées × ~260 caractères ≈ 125 Ko, soit ~30 k tokens — un fetch. Variante : `llms.txt` (FR) et `en/llms.txt` (EN), ~60 Ko chacun.
- **Deux mises en œuvre** :
  - **C1 — script `tools/generer-llms.mjs` + fichier commité** : rejoué à chaque séance qui touche `content/`. *Coût* : un bloc Code. *Entretien* : **une commande par séance**, avec un risque de dérive si oubliée — parable par une garde de fraîcheur dans `livrer.ps1` (précédent : ses sept gardes) ou un hook pre-commit (précédent : `normalize-pilotage.js --check`).
  - **C2 — émetteur Quartz `quartz/plugins/emitters/llmsTxt.ts`** : tourne en CI à chaque push. *Coût* : ~80 lignes TypeScript + une ligne dans `quartz.config.ts`. *Entretien* : **zéro**. Couplage à l'API interne de Quartz (`file.data.frontmatter`, `file.data.description`, `file.data.slug`), stable sur la branche 4.x, à revérifier à chaque montée de version.
- **Étudiant** : rien si l'assistant consulte `llms.txt` de lui-même — **ce n'est pas garanti** aujourd'hui ; sinon une URL à donner (« lis …/llms.txt puis… »).
- **Risque** : **renvoi pur**. L'index ne dit rien de plus que ce que le site donne au survol.
- **Bilinguisme** : résolu par construction — `source_fr` existe dans chaque front matter EN, la paire FR ↔ EN est déjà connue de la machine ; l'index l'imprime.
- **Variante à nommer séparément — `llms-full.txt`** : le corpus concaténé (~2 Mo par langue). C'est **l'artefact de substitution** de l'inventaire. Même mécanisme, autre objet, autre décision.

### D — Métadonnées structurées par page

Ce que le front matter porte et que le HTML ne dit pas : `type`, `phases`, `prerequis`, `aa`, la langue, la jumelle.

- **D1 — `<link rel="alternate" hreflang="fr|en">`** sur chaque page : EN → FR par `source_fr` ; FR → EN par la convention de slug (`en/<même chemin>/<slug>-en`, vérifiée sur `specification-technique`) ou par l'inverse de la carte `source_fr` construite au build. Patch de ~15 lignes dans `Head.tsx`.
- **D2 — bloc JSON-LD `schema.org/LearningResource`** dans le `<head>` : `learningResourceType` (trame / tuto / notion), `inLanguage`, `isPartOf`, `educationalLevel`, et, **si arbitré**, `teaches` porté par les codes `aa`. ~40 lignes dans `Head.tsx`. Effet secondaire : les moteurs reconnaissent une ressource éducative.
- **D3 — contrepartie humaine** : rendre `type` visible dans `ContentMeta` — c'est ce qui corrige l'anomalie 3. Décision d'affichage, distincte.
- **Coût** : une fois, patch. **Entretien** : zéro, le front matter est la source. **Étudiant** : rien.
- **Risque** : renvoi ; les métadonnées ne remplacent rien. **Un arbitrage** : publier les codes AA sur un site public. Les codes sont opaques sans le texte du référentiel ; le référentiel est celui de l'école. Pour (b), ce sont les **phases, livrables et jalons** qui comptent, pas les codes : D2 peut sortir sans `aa` dans un premier temps.

### E — Mode d'emploi pour l'assistant

Le dispositif qui porte (b) et (c) : dire à l'assistant **quelles sont nos normes** et **ce qu'il n'a pas le droit de faire**.

- **Contenu** : une **extraction** des conventions qui regardent le corpus, pas une copie de `conventions.md` — les 5 phases et leurs livrables, les jalons et la revue de CdCF (jalon *enseignant*), les termes proscrits et leur remplacement, « l'école fournit le matériel : pas d'argument par le prix » (C71), l'interface vers les cours collègues (méca, fabrication, ACV : renvoyer, ne pas suppléer), la règle de langue, et les interdictions : ne pas livrer le CdCF à la place de l'équipe, ne pas « valider » une revue, ne pas choisir la carte à la place de l'équipe, **citer la fiche avant de conseiller, et dire explicitement quand aucune fiche ne couvre la question plutôt que d'inventer**.
- **Deux formes** : **E1** une page publique avec le prompt dans un bloc de code copiable (l'étudiant le colle — et le lit) ; **E2** le même texte en **préambule de `llms.txt`** (tout assistant qui lit l'index lit les règles). Les deux se cumulent.
- **Coût** : une séance de rédaction, brique D obligatoire (pédagogie de fond, posture étudiante, vocabulaire à proscrire). **Entretien** : seulement quand une convention *qui regarde le corpus* change — rare, mais cela suppose de savoir distinguer, à chaque convention neuve, celles qui regardent le corpus de celles qui regardent la production. Ce tri n'existe pas aujourd'hui.
- **Risque** : le plus fort levier contre la contradiction, et **le dispositif le plus exposé au dérapage de posture** : un assistant à qui l'on dit « guide selon nos normes » devient facilement l'enseignant de substitution qui applique le V à la place de l'étudiant. Les interdictions sont la moitié du texte.
- **Public** : un prompt publié est aussi une **déclaration pédagogique** lisible par les étudiants — il doit être écrit pour eux autant que pour la machine.

### F — Markdown brut par page

Servir `/chemin/slug.md` à côté du HTML. Quartz ne le fait pas ; un émetteur d'une trentaine de lignes relit la source depuis `content/` et l'écrit dans `public/`. Les brouillons restent exclus (les émetteurs ne voient que le contenu filtré).

- **Ce que la machine gagne** : le front matter, les types de callout (`[!livrable]`), les libellés de wiki-links, et **aucun chrome** — la lecture la plus fidèle et la moins chère en tokens.
- **Coût** : une fois. **Entretien** : zéro. **Étudiant** : rien.
- **Risque** : **intermédiaire** — page par page, ce n'est pas plus substitutif que le HTML ; c'est la concaténation qui l'est. Attention : publierait les lignes de commentaire HTML de gabarit relevées dans le corpus FR (9 lignes, séance 12) et le champ `source_sha256` — inoffensif, mais visible.
- **Bilinguisme** : neutre.

### G — Service dédié (RAG, GPT sur mesure, MCP, Projet partagé)

- **Coût** : élevé (hébergement ou compte fournisseur). **Entretien** : **à chaque évolution du corpus** (re-téléversement, re-indexation). **Étudiant** : un outil imposé, chez un fournisseur.
- **Contre la formulation de Tim** : les étudiants travaillent sur des assistants variés ; un artefact lié à un fournisseur ne satisfait pas « un prompt suffise ». Les prompts des étudiants transitent chez un tiers.
- **Risque** : **substitution par construction** — le RAG répond, il ne renvoie pas.
- **Position** : à ne pas ouvrir tant que les dispositifs statiques n'ont pas été essayés. Et l'essai ne se mesurera pas : `analytics: null` — l'usage réel du site par les assistants est aujourd'hui invisible, ce qui est une décision en soi (vie privée) et non un oubli.

### Tableau de synthèse

| Option | Mise en place | Entretien par évolution | Côté étudiant | Quartz sait déjà | À ajouter | Axe |
|---|---|---|---|---|---|---|
| A rien | 0 | 0 | rien | HTML, sitemap, RSS, JSON intégral, étiquettes | — | contradiction |
| B hygiène | 1 bloc Code + minutes + 1 action de compte | 0 (générateur) | rien | tout | valeurs de front matter, 2 fichiers texte | neutre |
| C index `llms.txt` | 1 bloc Code (C1) ou ~80 lignes TS (C2) | 1 commande / séance (C1) ou 0 (C2) | rien ou une URL | copie des non-`.md` (C1) | script ou émetteur | **renvoi** |
| C-full | idem | idem | rien | idem | idem | **substitution** |
| D métadonnées | patch `Head.tsx` | 0 | rien | `description`, `lang` | `hreflang`, JSON-LD | renvoi |
| E mode d'emploi | 1 séance D | rare, mais tri des conventions | un prompt à coller (E1) ou rien (E2) | rendu d'une page | rédaction | renvoi **si** interdictions |
| F Markdown brut | ~30 lignes TS | 0 | rien | rien | émetteur | intermédiaire |
| G service | élevé | à chaque évolution | outil imposé | rien | tout | substitution |

---

## 3. Bilinguisme

**Faits** : 242 / 242 ; slug EN = slug FR + `-en` sous `en/` ; chaque front matter EN porte `source_fr` ; les étiquettes sont communes aux deux langues ; `lang` est faux sur les pages EN ; la racine FR lie `/en/` dès la première ligne ; les schémas et captures restent en français dans les fiches EN (la racine EN le dit).

**Ce qui se passe sans dispositif** : l'étudiant prompte en français ; un assistant qui fetche peut descendre dans `/en/` par la racine ou par une page d'étiquette, lire une fiche EN et **retraduire** en français — le vocabulaire du corpus repasse par une traduction non contrôlée (« CdCF review » → ? ; « stepper » conservé ou non ?). Le glossaire §5.3 de `_drafts/traduction-en-regles.md` qui fixe ces choix est **privé**.

**Dispositifs, par ordre de dépendance** :

1. **B1 `lang`** — sans lui, rien de ce qui suit n'a de sens.
2. **D1 `hreflang`** — la paire est déclarée page par page ; un assistant qui tombe sur l'EN sait où est le FR.
3. **C index avec paires** — l'index imprime les deux URL sur chaque ligne ; un assistant qui part de l'index ne se trompe jamais de langue.
4. **E règle de langue** — « le corpus existe en FR (source de référence) et en EN (traduction) ; réponds et cite dans la langue de l'étudiant ; pour un étudiant francophone, cite la fiche FR ; en cas d'écart entre les deux, la FR fait foi ». La racine EN dit déjà que la FR « reste la plus complète » : la règle ne fait que l'écrire pour la machine.
5. **Optionnel** — publier un **mini-glossaire FR ↔ EN** des termes du corpus (extraction du §5.3, décision à part) pour que la retraduction ne dérive pas.

**Pages d'étiquette** : le mélange FR / EN est un comportement Quartz (étiquettes communes). Le séparer coûterait soit des étiquettes distinctes par langue (touche 242 front matter EN — lourd, et casse la symétrie voulue), soit un composant. À ne pas engager : D1 + C rendent l'entremêlement inoffensif pour la machine, et pour l'humain il est déjà là.

---

## 4. Contraintes non négociables — passage en revue

| Contrainte | Où elle mord |
|---|---|
| **Socle AA, rôle d'interface** | E doit dire à l'assistant que méca, fabrication et ACV sont *renvoyés* aux cours collègues, pas suppléés. Les codes AA (D2) sont un arbitrage à part — les publier n'est pas nécessaire à (a), (b), (c). |
| **Dépôt privé, site public** | Tout artefact se dérive de `content/` seulement. E est une *extraction* de `conventions.md`, jamais une copie ; le glossaire optionnel est une extraction de `_drafts/`. Aucune option ne publie JOURNAL, TODO, BACKLOG, conventions. |
| **Fiche autoportante, 5 min, lecture humaine intacte** | B, C, D, F : zéro octet dans le corps des fiches. E1 : une page neuve, écrite pour l'étudiant. D3 (affichage de `type`) est le seul changement visible, et il corrige une incohérence existante. C-full et G : ne dégradent pas la *lecture*, ils la *contournent*. |

---

## 5. Arbitrages à rendre — pas dans cette séance

1. **Périmètre de publication machine** : index seul (C) / index + Markdown brut (C + F) / avec corpus concaténé (C-full). C'est l'arbitrage de l'axe § 1.
2. **Codes AA sur le site public** : non / codes seuls / codes + libellés / référentiel entier. Question institutionnelle avant d'être technique.
3. **Mode d'emploi** : E1 page + prompt à coller / E2 préambule / les deux ; et le **tri des conventions** qui regardent le corpus — qui l'établit, où il vit.
4. **Mécanisme** : script + fichier commité (C1) / émetteur Quartz (C2). Recommandation à instruire : C2 pour l'entretien nul, C1 si l'on refuse de toucher `quartz/plugins/`.
5. **`robots.txt`** : posture vis-à-vis des crawlers IA (l'état actuel = tout permettre).
6. **Indexation** : soumettre le sitemap (action de compte Tim).
7. **Affichage humain de `type`** (anomalie 3) : rendre le champ, ou réécrire la phrase du hub.
8. **Analytics** : rester à `analytics: null` (l'usage restera invisible) ou non.

---

## 6. Ce qui reste à mesurer avant tout bloc

- `curl -sI` sur `/robots.txt` (attendu 404), `/static/contentIndex.json` (Content-Length), `/sitemap.xml` ; compte des `<loc>` du sitemap en ligne (attendu 484 + pages de dossier + étiquettes ; ne pas prédire sans lire).
- `Select-String '^lang:'` sur `content/en/**/*.md` (attendu 0).
- Compte des fiches publiées dont la première phrase ne tient pas en 300 caractères (la description serait tronquée avec « … ») — `--controle` ne le mesure pas ; un script jetable le rendrait.
- Lignes de commentaire HTML dans `content/` (9 FR relevées en séance 12) — à confirmer avant tout F.

---

## 6 bis. Mesures rendues le 31/08 (séance 14)

Sondes PowerShell de Tim, puis `tools/seance.ps1` (témoin `tools/seance-sortie-3108s14.txt`). **19 termes prédits, 17 tenus, 2 réfutés** — les deux sur le même objet.

| Mesure | Prédit | Mesuré |
|---|---|---|
| `/robots.txt`, `/llms.txt` | 404, 404 | 404, 404 |
| `/sitemap.xml`, `/static/contentIndex.json` | 200, 200 | 200 `application/xml`, 200 `application/json` |
| `contentIndex.json` en ligne | 2 à 8 Mo | **4 171 260 octets** |
| `<loc>` du sitemap / dont `/en/` / dont `/tags/` | lecture | **484 / 242 / 0** — `ContentIndex` n'indexe que les `.md` |
| `.md` sous `content/en` / avec `lang:` | 242 / 0 | 242 / 0 |
| ouvertures de commentaire HTML | 8 | 8, toutes dans trois trames FR |
| H1 dans le corps | 3 | **29 — réfuté** : 20 commentaires Python de blocs de code (prédicat) + 6 hubs de domaine (monde) ; 9 pages réelles |
| première ligne du corps `#` / prose | 3 / lecture | **9 / 476** — réfuté sur le même monde ; 476 + 9 = 485 |
| `type:` porté par une étiquette | hors tags 0 | **0** sur 468 (notion 198, trame 26, tuto 244) |
| `source_fr` : EN avec / sans cible | 242 / 0 | 242 / 0 |
| FR hors `en` et templates / draft / sans jumelle | 243 / 1 / 1 | 243 / 1 / 1 (`ressources/index.md`) |
| `description:` explicite | 0 | 0 |
| premières phrases > 300 caractères bruts | lecture | **29** (17 FR, 12 EN, 301–397) |

**Recette AVANT** (`_drafts/recette-ia-3108-avant.md`) : trois assistants, trois familles d'accès — Claude suit les liens (3/3 cite, 3/3 conforme, 1/3 renvoie), ChatGPT lit la racine seule (0/3 cite, 2 contradictions attribuées au site, dont un V à douze étapes sur le prompt de Tim), Gemini ne lit rien (0/3, une méthode inventée). Zéro terme proscrit, zéro argument par le prix sur neuf réponses.

## 7. Arbitrages rendus (Tim, 31/08)

1. **C + F** : `llms.txt` et Markdown brut par page. 2. **Codes AA : non** (évoluent d'année en année). 3. **Automatique, sans geste étudiant** : l'étudiant donne la racine, rien d'autre → **page `/ia/` unique, bilingue, hors navigation, jamais cachée** ; pas de prompt à coller. 4. **Émetteurs Quartz** (CI, entretien nul). 5. **`robots.txt`** : tout permis + `Sitemap:`. 6. **Indexation : oui**, par balise `google-site-verification` dans `Head.tsx` (le dépôt d'un `.html` dans `content/` perd son extension). 7. **Phrase du hub (a)**. 8. **Analytics : `null`.** **Carte des cinq phases sur la racine : oui.** Pris par Claude avec 1, coût de revert nul : B entier, D1 `hreflang`, D2 abandonné, `aliases: [IA]`, un seul `llms.txt` bilingue à définition FR, préambule = corps de `/ia/`, l'émetteur lit lui-même le premier paragraphe, commentaires HTML retirés du Markdown brut.

## 8. Spécification des blocs — onglet Code, une séance

Toute édition en `--dry` puis live ; prédictions en lignes exactes dans `tools/predictions-AAMMJJ.md` avant chaque bloc ; commits par Tim.

### Bloc A — machinerie Quartz, aucun contenu

- **A1 `quartz/plugins/emitters/rawMarkdown.ts`.** Pour chaque `[tree, file]` du contenu filtré (les brouillons sont déjà exclus) : relire la source `content/<relativePath>`, retirer les commentaires `<!-- … -->` (multi-lignes), écrire `<slug>.md` à côté du HTML via `write({ ctx, content, slug, ext: ".md" })`. Front matter conservé. *Prédictions* : `Get-ChildItem public -Recurse -Filter *.md | Measure-Object` → **484** (+1 quand `/ia/` existe : 485) ; `Select-String '<!--' public\conduite\proj\ecoconception.md` → **0**.
- **A2 `quartz/plugins/emitters/llmsTxt.ts`.** Carte FR → EN par le `source_fr` des fichiers EN (jamais par le slug : la règle `-en` rate les 7 `index.md`). Préambule = corps de `content/ia/index.md` sans front matter ni commentaires (tant que la page n'existe pas, préambule vide et avertissement au build). Puis, groupées par dossier FR (titre du `index.md` du dossier), **une ligne par paire** : `- [Titre FR](URL FR) · [Title EN](URL EN) — type, phases — définition`. Définition = première phrase du premier paragraphe de la source FR (paragraphe = lignes jusqu'à la première ligne vide ; phrase = jusqu'au premier `. ` ou fin de paragraphe ; `**`/`*` retirés, `[[cible|libellé]]` → libellé, `[[cible]]` → cible) — **sans plafond de longueur**. Dernière ligne : la règle `.md`. Bilan imprimé au build : `llms.txt : N paires, M sans jumelle`. *Prédictions* : **242 paires, 1 sans jumelle** (`ia/index`) une fois la page en place ; taille < 150 Ko.
- **A3 `quartz/components/Head.tsx`.** (i) `<link rel="alternate" hreflang="en" href=…>` sur toute page FR dont un fichier de `allFiles` porte `frontmatter.source_fr === fileData.relativePath`, et `hreflang="fr"` sur toute page EN vers sa source ; (ii) `<link rel="alternate" type="text/markdown" href="<slug>.md">` ; (iii) `<meta name="google-site-verification" content="<jeton Tim>">`. *Prédictions* : `Select-String 'hreflang' public\conduite\proj\concept.html` → **1** ; `public\en\conduite\proj\concept-en.html` → **1** ; `public\index.html` porte le jeton.
- **A4 `quartz.layout.ts`.** Explorateur : `node.slugSegment !== "ia"` dans les deux filtres. Pied de page : `links: {}` (le dépôt est privé, un lien GitHub serait un 404 pour l'étudiant). *Prédiction* : `Select-String 'discord' public\index.html` → **0**.
- **Contrôle local** : `npx quartz build` sur `public/` régénéré (celui du PC pro est périmé). Rien ne part avant A1 et A2 fermés sur leurs nombres.

### Bloc B — passes mécaniques

- **B1 `content/robots.txt`** : `User-agent: *` / `Allow: /` / `Sitemap: https://timturko.github.io/TheSkillCodex/sitemap.xml`. *Prédiction* : `public/robots.txt` présent (`.txt` garde son extension).
- **B2 passe `lang: en`** : outil jetable `tools/ajouter-lang-en-AAMMsNN.mjs`, insère `lang: en` après la ligne `title:` de chaque `.md` sous `content/en`, **fin de ligne relue par fichier**, `--dry` puis live. *Prédictions* : **242** fichiers ; delta total en octets par `Buffer.byteLength` publié avant écriture (9 par fichier en LF, 10 en CRLF, à compter par le dry) ; `git diff --numstat` : 242 lignes `1\t0` ; `Select-String '^lang: en' content\en -Recurse` → **242** ; `derive-traduction` → `DERIVE 0`, `A JOUR 242` (le sha porte la source FR).
- **B3 générateur** : `creer-fiche-en.mjs` écrit `lang: en` dans le squelette EN, au même rang.

### Bloc C — contenu, textes validés en séance chat J+1

- **C1 `content/ia/index.md`** : `title`, `description:`, `aliases: [IA]`, `aa: []`, `tags: []`, `lang: fr`, `bilingue: true` (forme à confirmer, § 8 des conventions), `draft: false`. Corps : bloc FR (consignes en registre « on », carte des cinq phases vers leurs trames, trois fils continus, branches et sous-hubs, `choisir-le-materiel` et `matrice-de-decision`, règle de langue, pointeurs `/llms.txt` et `.md`), puis `<section lang="en">` avec le même contenu en anglais. Aucun wiki-link entrant depuis une page humaine ; `audit-wikilinks` la verra orpheline — exemption nommée ou acceptée.
- **C2 exemption** : `creer-fiche-en.mjs --controle` et `compter-mots --paires` ignorent `bilingue: true` et l'annoncent. **Test négatif** : avant patch `RESTANT A TRADUIRE : 1`, après `0`.
- **C3 racines** : carte des cinq phases (reprise de `/conduite/`, définitions et livrables, jamais les étapes) et `description:` explicite sur `index.md` ; jumelle `en/index.md` par le circuit de traduction, `--recaler`. La `description:` FR porte l'adresse de `/ia/`.
- **C4 hub** : phrase de `conduite/index.md` (« à leur étiquette `trame`, `tuto` ou `notion` sous le titre ») + jumelle + `--recaler`.
- **C5 contrôle en ligne après push et CI** : `Invoke-WebRequest -Method Head` sur `/llms.txt`, `/ia/`, `/conduite/proj/concept.md`, `/robots.txt` → **quatre 200** ; `hreflang` présent sur une page FR publiée ; clic EN → FR depuis `/en/`.
- **Puis, Tim, hors dépôt** : Search Console « Vérifier » → Sitemaps `sitemap.xml` → Inspection d'URL sur `/` et `/ia/` → Bing : importer depuis Search Console.

### Bloc D — recette APRÈS

Les neuf prompts, mêmes conditions, `_drafts/recette-ia-AAMMJJ-apres.md`, grille contre grille. Gemini : rejouer P2 seul à J+7 et J+21 après indexation.

## 9. Plan validé par Tim (31/08)

J0 : jeton Search Console, clic EN → FR, clôture, commit. J+1 : séance chat courte, rédaction des textes de C1, C3, C4 dans `_drafts/textes-ia-brouillon.md`, relecture Tim. J+1/J+2 : séance Code, blocs A + B + C, build, push, contrôle en ligne, Search Console. J+2 soir : recette APRÈS. J+3 : lecture ; un lot d'une page si les consignes n'ont pas mordu. Rentrée : l'adresse donnée aux étudiants est la racine. Après la rentrée : le TODO dans son ordre — bloc 0 des puces, bloc 1, relecture ciblée, tranche 1, C132.
