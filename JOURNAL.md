# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).

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
