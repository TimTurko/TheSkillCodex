# Protocole PC pro — diagnostic horloge, commit perdu, serveur MCP

> Fichier de travail privé. Écrit le 26/08 (date réelle) depuis le PC perso,
> à exécuter au prochain passage sur le PC pro. À supprimer une fois les
> trois volets refermés.

Trois choses à établir là-bas, dans cet ordre. Le volet 1 conditionne
l'interprétation du volet 2 : tant que l'horloge n'est pas sûre, aucune date
de commit ne prouve quoi que ce soit.

---

## Volet 1 — L'horloge

**Ce qu'on sait déjà.** Le PC perso lit **2026-08-26**. Le JOURNAL ouvre sur
une entrée datée **28/08** et le prompt de lancement parle d'une séance du
**29/08**. L'écart des libellés à l'horloge réelle est de **trois jours** au
front. La dérive vient du libellé de séance, pas nécessairement d'une horloge
fausse : plusieurs séances tenues le même jour réel ont été libellées comme
des jours successifs au lieu de recevoir un suffixe `(suite N)`.

**Ce qui reste à mesurer.** L'horloge du PC pro elle-même n'a jamais été lue.
La note « le PC pro lit deux jours de retard » du prompt de lancement n'est
adossée à aucune mesure (C118).

À relever, terminal PowerShell :

```powershell
Get-Date -Format 'yyyy-MM-dd HH:mm:ss K'
(Get-TimeZone).Id
w32tm /query /status
w32tm /query /source
```

Comparer à une source extérieure (téléphone). Si l'écart dépasse quelques
secondes, resynchroniser en administrateur :

```powershell
w32tm /resync /force
```

**Puis relever la date du dernier commit fait depuis ce poste :**

```powershell
git log -3 --date=iso --pretty=format:"%h %ad %an %s"
```

Si cette date colle à l'horloge du poste et que l'horloge est juste, alors la
dérive est **entièrement dans les libellés** et il n'y a rien à réparer côté
système — seulement une règle d'écriture à changer.

---

## Volet 2 — Le commit de clôture du 29/08

**Ce qu'on sait déjà.** Le pull du 26/08 20:11 sur le PC perso a amené les
**six sources FR du lot 5** (76 passes C109, résidu 22 vérifié emplacement par
emplacement). Il n'a **pas** amené les quatre insertions de pilotage :
`JOURNAL.md`, `TODO.md`, `BACKLOG.md` et `conventions.md` sont restés à leur
état du matin et aucun ne porte d'entrée 29/08.

**Question à trancher :** ces insertions ont-elles été écrites puis perdues,
écrites puis non commitées, commitées puis non poussées, ou jamais écrites ?

```powershell
git status -sb
git log --oneline origin/main..HEAD          # commits locaux non pousses
git diff --stat HEAD -- JOURNAL.md TODO.md BACKLOG.md conventions.md
git stash list
git reflog --date=iso -30
git fsck --lost-found --no-reflogs           # commits pendants
```

Regarder aussi ce que le patch a réellement produit ce jour-là :

```powershell
git log --oneline -6
git show --stat <le commit du lot 5>
```

**Règle de décision, à ne pas court-circuiter.** Si un commit ou un stash
contenant les quatre insertions est retrouvé, **ne pas le fusionner à
l'aveugle** : le PC perso a écrit sa propre clôture le soir du 26/08. Extraire
le texte retrouvé (`git show <sha>:JOURNAL.md > pcpro-journal.txt`), le
comparer à ce qui est en production, et réconcilier à la main. Deux entrées
pour une séance casserait l'invariant antichronologique.

Si rien n'est retrouvé, la clôture écrite ce soir fait foi et le volet se
ferme.

---

## Volet 3 — Le serveur MCP

**Symptôme rapporté.** Le serveur `theskillcodex:*` refuse ses outils, message
de schémas **draft-07 contre un validateur 2020-12**, insensible au
redémarrage. C'est une signature de **décalage de version** entre le paquet
serveur installé et le client qui le charge, pas une panne de configuration.

**Indice fort, disponible sans rien lancer :** les deux postes n'exposent pas
le même nom de serveur — `filesystem:*` sur le PC perso, `theskillcodex:*` sur
le PC pro. Deux entrées de configuration distinctes, donc potentiellement deux
paquets ou deux versions distinctes. Le témoin du poste qui marche est relevé
par le bloc E de `tools/seance.ps1` et se trouve dans `tools/seance-sortie.txt`.

À relever sur le PC pro, puis à diffuser contre ce témoin :

```powershell
node -v
npm -v
(Get-Command node).Source
Get-Content (Join-Path $env:APPDATA 'Claude\claude_desktop_config.json') -Raw
Get-ChildItem (Join-Path $env:APPDATA 'Claude\logs') | Sort-Object LastWriteTime -Descending | Select-Object -First 5
```

Ouvrir le dernier fichier de log et **capturer la ligne d'erreur exacte**,
pas sa paraphrase. Puis lancer le serveur à la main, hors de Claude, pour voir
s'il démarre seul :

```powershell
npx -y @modelcontextprotocol/server-filesystem "C:\Users\timothe.turko.ICAMAD\Documents\TheSkillCodex"
```

**Ordre des correctifs à essayer**, du moins cher au plus cher :

1. Vider le cache `npx` pour forcer un retéléchargement du serveur :
   `Remove-Item (Join-Path $env:LOCALAPPDATA 'npm-cache\_npx') -Recurse -Force`
2. Épingler dans la configuration la version exacte relevée sur le PC perso.
3. Aligner la version de Node sur celle du PC perso.
4. Aligner la version de Claude Desktop.

**Repli si rien ne marche.** Le patch git reste la voie : `git apply --check`
tient lieu de `dryRun` et refuse le patch entier si un seul contexte a bougé.
Mais avec la garde apprise aujourd'hui — **vérifier que la moitié pilotage du
patch a bien atterri avant de clore**, en relisant le `git show --stat` du
commit et pas seulement le compte-rendu de l'outil.

---

## Ce qui se décide au retour

- La règle de libellé de séance (volet 1) : voir l'arbitrage versé au BACKLOG.
- Le sort de la clôture retrouvée ou non (volet 2).
- Le retour ou non de `edit_file` + `dryRun` sur le PC pro (volet 3).
