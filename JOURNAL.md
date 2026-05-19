# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).

---

## 2026-05-19 (suite 2) — Trame projet : cycle en V

### Cadrage de la trame
- **Décision structurante : cycle en V à 5 phases** (vs séquence linéaire ou liste de livrables) :
  1. **Spécification technique** (besoin, état de l'art, cibles, intègre l'analyse du besoin)
  2. **Concept** (schémas, pré-dimensionnement)
  3. **Preuve de concept** (dérisquage des points durs)
  4. **Dossier technique** (plans, élec, soft, BOM intégré)
  5. **Intégration et tests** (prototype, qualif, clôture/REX intégrés)
- **PoC remonté avant le dossier technique** : choix pédagogiquement et techniquement plus sain que la version école initiale (PoC après dossier). Enseigne le **dérisquage amont** comme compétence ingénieur.
- **Fils transverses** (renommés "En parallèle de toutes les phases" pour clarté étudiant) : gestion de projet, écoconception, sécurité/qualité. Évalués transversalement, pas dans une phase dédiée.
- **Itératif différé** : la trame v1 est affichée en linéaire pour structurer la rédaction. Les boucles de retour seront ajoutées en v2.
- **Vocabulaire** : français pour tout le tutoriel. Version anglaise éventuelle hors scope (très long terme).

### Typologie de fiches formalisée
Trois types de fiches distincts, à indiquer en front matter (`type:` ou via les `tags`) :
- **Trame** — phases du cycle en V. Dense, détaillée. Livrable de phase évalué.
- **Tuto** — mise en œuvre d'un outil ou méthode (IDE, GPIO, PID numérique, etc.). Souvent évalué via livrable concret.
- **Notion** — rappels courts (tension, résistance, couple, force) faisant le pont avec d'autres cours. Non évaluée chez Tim.

**Statut `schema-bloc-fonctionnel`** : reclassée en **tuto** (méthode produisant un livrable évalué), pas en notion. Reste dans `fiches/eee/`, juste son `type:` change le moment venu.

### Arborescence : domaine + champ `phases:`
- **Décision actée** : on garde l'arborescence physique par domaine (cohérence référentiel, agréable enseignant) et on ajoute un champ `phases:` en front matter listant les phases où la fiche est mobilisée. L'étudiant aura deux entrées dans le site (par parcours, par domaine).
- Première utilisation : `hub/index.md` qui liste les 5 phases dans son front matter.
- À documenter dans les futurs templates de fiches.

### Production de la fiche hub
- Fiche **fusionnée dans `content/hub/index.md`** (l'ancien index par domaine est devenu le hub principal du site, avec une section "Entrée par domaine" qui récupère les liens d'origine).
- Ancien fichier `content/hub/parcours-projet.md` créé en cours de session puis supprimé après la fusion.
- Format spécifique fiche-hub (pas le template "1 notion = 1 fiche") : définition popover, schéma SVG, sommaire numéroté à ancres, une section par phase, fils transverses, typologie des fiches, entrée par domaine. **Pas de section "Voir aussi"** sur les fiches-hub (la fiche EST une page de liens).

### Schéma SVG du cycle en V
- **Décision politique d'images actée** : `content/ressources/img/` adopté pour toutes les images du site.
- Schéma `content/ressources/img/cycle-v-projet.svg` créé : V à 5 phases avec correspondances horizontales étiquetées ("validée par", "guide", "éclaire la conception détaillée") et bande "En parallèle" en bas.
- Couleurs : Purple (branche descendante 1-2), Amber (PoC, pivot), Teal (branche ascendante 4-5), Gray (fils transverses).
- Gestion native du mode sombre via `@media (prefers-color-scheme: dark)` dans le SVG.
- **Tentative initiale en SVG inline dans le markdown a échoué sous Quartz** (bloc vide). Bascule sur fichier externe — confirme la stratégie de stockage séparé.

### Mermaid abandonné dans la fiche hub
- Le flowchart Mermaid linéaire des 5 phases (sous le V) était redondant avec le SVG du V.
- **Remplacé par un sommaire textuel numéroté à liens-ancres** (`#1-spécification-technique`, etc.). Plus léger, plus lisible, sert de table des matières.
- Mermaid reste utilisable ailleurs sur le site (la fiche pilote `schema-bloc-fonctionnel` continue de l'utiliser pour le schéma vertical).

### Palette de callouts harmonisée
- **5 callouts natifs restylés** dans `quartz/styles/custom.scss` avec une palette alignée sur le SVG du V :
  - `[!question]` → Blue (informatif neutre)
  - `[!info]` / `[!note]` → Gray (complément discret)
  - `[!tip]` → Teal (astuce pratique)
  - `[!warning]` → Amber (piège fréquent)
  - `[!danger]` / `[!failure]` / `[!bug]` → Red (sécurité, risque réel)
  - `[!example]` → Purple light (exemple, démo)
- **2 callouts custom conservés** : `[!terrain]` (orange brûlé, aparté projet), `[!livrable]` (purple foncé, livrable évalué).
- Tous gèrent le mode sombre via `[saved-theme="dark"]`.

### Fiche de doc des callouts
- Créée à `content/_templates/callouts.md` : panorama de tous les callouts avec sémantique d'usage, exemples markdown et exemples rendus.
- **Règle générale** documentée : un callout n'est pas un effet de mise en page. Viser 0 à 3 callouts par fiche sauf cas justifié (fiche-trame avec un `[!livrable]` par phase). En abuser dilue leur force visuelle.
- **Usage strict de `[!livrable]`** : à utiliser uniquement pour les livrables qui correspondent à une compétence évaluée. À garder en tête lors de la rédaction des fiches.

### Décisions actées en cours de session
- **Trame projet** : cycle en V à 5 phases (vs cascade linéaire ou cycle en V école strict)
- **Typologie** : 3 types de fiches (trame, tuto, notion) déclarés en front matter
- **Arborescence** : par domaine + champ `phases:` pour double entrée parcours/domaine
- **Politique d'images** : `content/ressources/img/` pour tout
- **Hub principal** : `content/hub/index.md` (fusion), pas de fiche `parcours-projet.md` séparée
- **SVG hors markdown** : toujours en fichier externe (l'inline ne passe pas sous Quartz)
- **Vocabulaire** : 100 % français
- **Palette callouts v1** : 8 callouts alignés sur le V, première itération à raffiner avec l'usage

### Décisions reportées (toujours en attente)
- **Convention de tags AA** : session dédiée à programmer
- **Stratégie fiches MME/ESE** : pages courtes pointant vers collègues, ou rien ?
- **Glossaire vs fiches courtes** pour acronymes : à voir à l'usage
- **Charte couleur / identité visuelle complète** : nouvelle décision en attente, à traiter quand on aura plus de matière
- **Pliage des callouts** (`[!example]-` replié par défaut ?) : à trancher après quelques fiches rédigées
- **Sort du flowchart Mermaid commenté** dans hub : finalement supprimé, sommaire textuel suffit

---

## 2026-05-19 (suite) — Installation PC perso

### Outils installés et vérifiés
- Git for Windows : déjà présent (le `git clone` initial avait fonctionné avant début de session)
- Node.js v22 LTS : déjà présent
- Obsidian : installé + vault ouvert sur `C:\Users\turko\Documents\TheSkillCodex`

### Configuration Git PC perso
- `user.name` = `TimTurko`
- `user.email` = `turko.tim@gmail.com`
- Remote `origin` correctement branché en fetch + push sur `https://github.com/TimTurko/TheSkillCodex.git`
- Branche `main` synchro avec `origin/main`

### Obsidian Git
- Plugin auto-rapatrié via `.obsidian/` versionné — **validation du choix de versionner la config Obsidian** : zero reconfiguration manuelle sur le 2ème poste, gain de temps confirmé
- Cycle test pull → édit → commit-and-sync → vérif GitHub : OK

### Note ajoutée a posteriori (session du 2026-05-19 suite 2)
- `npm install` est obligatoire **une fois par poste** pour faire tourner `npx quartz build --serve` en local. Oublié à l'installation PC perso, identifié au moment du premier rendu local de la fiche hub.

### Bilan
- Workflow multi-poste opérationnel : PC pro + PC perso peuvent maintenant alterner sans friction
- Smartphone reste en consultation seule (décision précédente confirmée)
- Discipline Git à maintenir : pull à l'arrivée, push au départ sur chaque poste

---

## 2026-05-19 — Mise en place initiale

### Infrastructure
- Création dépôt GitHub `TimTurko/TheSkillCodex` (public)
- Git configuré sur PC pro
- PAT créé avec scope minimal (repo + workflows)
- Obsidian installé sur PC pro + plugin Obsidian Git
- Convention de discipline Git : pull à l'arrivée, push au départ

### Quartz
- Quartz v4 installé dans le dépôt (un seul dépôt, pas de submodule)
- Configuration personnalisée : titre "TheSkillCodex", locale fr-FR, baseUrl `timturko.github.io/TheSkillCodex`
- Pas d'analytique (choix de simplicité au démarrage)
- Workflow GitHub Actions `deploy.yml` créé sur branche `main`
- GitHub Pages activé avec source "GitHub Actions"
- **Site déployé** : https://timturko.github.io/TheSkillCodex/

### Structure de contenu
- Arborescence `content/` créée :
  - `hub/` (parcours pédagogique)
  - `fiches/{eee, mia, meo, proj, mme, ese}/` (6 domaines)
  - `ressources/` (médias, datasheets)
  - `_templates/` (modèles de fiches)
- 9 fichiers `index.md` créés, un par dossier
- `content/index.md` racine (page d'accueil du site)

### Conventions éditoriales fixées
- **Noms de fichiers** : kebab-case (`cahier-des-charges-fonctionnel.md`)
- **Front matter YAML** : title, tags, prerequis, aa, draft
- **Pas de H1 dans le corps** : Quartz génère le titre depuis le front matter
- **Définition popover** : premier paragraphe de la fiche, autoportant, 1-3 phrases
- **Structure de fiche** : sections suggérées en commentaires HTML, l'auteur garde ce qui sert
- **Sections type** : `À quoi ça sert ?` → `Comment le réaliser ?` → `Exemple` → `Cas particuliers` → `Pièges` → `Aller plus loin` → `Voir aussi` (toutes optionnelles sauf "Voir aussi")
- **Politique du gras** : uniquement sur concepts-clé en 1ère occurrence. Exception tolérée : gras "structurel" (têtes de paragraphes-pièges, mots de scan dans listes à puces)
- **Liens popovers** : approche A — liens directs `[[notion]]`, le rouge sert de TODO list
- **Apartés étudiants** : intégrés dans le texte en *italique* (pas de callout dédié)
- **Justification du texte** : justifié sur écran large avec césure auto, drapeau sur smartphone (<600px)

### Personnalisations CSS (`quartz/styles/custom.scss`)
- Justification des paragraphes d'article + césure auto (désactivée sous 600px)
- Centrage horizontal des diagrammes Mermaid
- Callout custom `[!terrain]` couleur orange brûlé (réservé pour usages futurs type avertissement, note méthodo)

### Fichiers de suivi de projet
- `TODO.md` — court terme, actionnable
- `BACKLOG.md` — long terme, idées en réserve, fiches à rédiger par domaine
- `JOURNAL.md` — mémoire datée (ce fichier)
- Méthode : mise à jour à la fin de chaque session

### Fiche pilote
- `fiches/eee/schema-bloc-fonctionnel.md` créée et raffinée en plusieurs itérations
- Validation : template, liens internes, rendu Mermaid (vertical, centré), conventions de gras minimal
- 10 popovers en liens directs (capteur, actionneur, effecteur, controleur, microcontroleur, frontiere-systeme, boucle-ouverte-boucle-fermee, pwm, asservissement, pid, cahier-des-charges-fonctionnel)
- 2 apartés étudiants intégrés en italique

### Décisions reportées
- **Convention de tags AA** : session dédiée à programmer (pas de décision rapide)
- **Politique de stockage des images** : à définir
- **Glossaire séparé vs fiches courtes** pour acronymes : à voir à l'usage
- **Stratégie fiches MME/ESE** : pages pointant vers collègues, ou rien du tout ?

### Référentiel
- Analyse de `Compétences.xlsx` : 107 dénominations regroupées en 27 codes-AA uniques, 6 domaines
- Note : `AA-PROJ-C03-CFE3-01` mélange MIA (objet connecté) et MME (fabrication) — anomalie référentiel à signaler à terme

### Décisions calées en fin de session
- **Smartphone en consultation seule** : pas d'install Obsidian mobile, le smartphone consulte directement le site déployé. Édition uniquement sur PC pro et PC perso. Cohérent avec le principe "écran vertical court = lecture, pas écriture". Évite aussi les conflits Git à 3 appareils.
- **Démarrage de session automatisé** : ajout aux instructions du projet Claude.ai des consignes pour lire JOURNAL.md et TODO.md au démarrage de chaque conversation, et pour proposer une mise à jour à la fin de session.
- **OS PC perso** : Windows 11 (cohérent avec PC pro). Le guide d'installation initial est directement réutilisable.

---
