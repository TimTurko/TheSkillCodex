---
title: Test — couleurs des callouts
type: notion
---

Page de travail temporaire, à supprimer après l'arbitrage des couleurs du mode sombre. Chaque famille de callout y figure **trois fois** : le rendu **actuel** (charte v2), le **candidat B** (inversion des deux teintes de la charte, fond à 10 %), et la **variante A** (la charte cesse de s'appliquer en sombre, les teintes d'origine de Quartz reprennent la main).

Les trois versions sont **identiques en mode clair** — c'est volontaire, et c'est le premier contrôle : si un bloc diffère des deux autres en clair, la proposition touche au mode clair, ce qu'aucune des deux options ne doit faire. Tout l'écart se juge **en mode sombre**.

Révision 2 : les valeurs d'attribut des sélecteurs sont **sans guillemets**, la chaîne de rendu échappant les guillemets d'un `<style>` de contenu en `&quot;` — ce qui tuait silencieusement les seize règles. Le bloc « Fond 16 % » de la section 3 porte, lui, ses couleurs en attribut `style=` inline : c'est le témoin de mécanisme, il départage « la feuille de style est morte » de « les couleurs sont mauvaises ».

<style>
:root[saved-theme=dark] .callout.cand[data-callout=question]{--color:#B5C5D6;--border:#B5C5D6;--bg:#3B5F7F1A}
:root[saved-theme=dark] .callout.orig[data-callout=question]{--color:#dba642;--border:#dba64244;--bg:#dba64210}
:root[saved-theme=dark] .callout.cand[data-callout=info]{--color:#FAF6EC;--border:#FAF6EC;--bg:#8C7E5C1A}
:root[saved-theme=dark] .callout.orig[data-callout=info]{--color:#00b8d4;--border:#00b8d444;--bg:#00b8d410}
:root[saved-theme=dark] .callout.cand[data-callout=tip]{--color:#D8E3D3;--border:#D8E3D3;--bg:#5C85561A}
:root[saved-theme=dark] .callout.orig[data-callout=tip]{--color:#00bfa5;--border:#00bfa544;--bg:#00bfa510}
:root[saved-theme=dark] .callout.cand[data-callout=warning]{--color:#FADFAF;--border:#FADFAF;--bg:#A8761F1A}
:root[saved-theme=dark] .callout.orig[data-callout=warning]{--color:#db8942;--border:#db894244;--bg:#db894210}
:root[saved-theme=dark] .callout.cand[data-callout=failure]{--color:#F6B5A0;--border:#F6B5A0;--bg:#A33A1F1A}
:root[saved-theme=dark] .callout.orig[data-callout=failure]{--color:#db4242;--border:#db424244;--bg:#db424210}
:root[saved-theme=dark] .callout.cand[data-callout=example]{--color:#F9E6D4;--border:#F9E6D4;--bg:#A86A3F1A}
:root[saved-theme=dark] .callout.orig[data-callout=example]{--color:#7a43b5;--border:#7a43b544;--bg:#7a43b510}
:root[saved-theme=dark] .callout.cand[data-callout=livrable]{--color:#EED9FB;--border:#EED9FB;--bg:#6B3B961A}
:root[saved-theme=dark] .callout.orig[data-callout=livrable]{--color:#448aff;--border:#448aff44;--bg:#448aff10}
:root[saved-theme=dark] .callout.a24[data-callout=livrable]{--color:#EED9FB;--border:#EED9FB;--bg:#6B3B963D}
</style>

## 1. Les sept familles

### question

> [!question] Actuel — charte v2
> Le **corps** du callout hérite de `--darkgray`, soit `#d4d4d4` en sombre : c'est lui qui meurt sous un fond opaque.

<blockquote class="callout cand" data-callout="question">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p>Le <strong>corps</strong> du callout hérite de <code>--darkgray</code>, soit <code>#d4d4d4</code> en sombre : c'est lui qui meurt sous un fond opaque.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="question">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content"><p>Le <strong>corps</strong> du callout hérite de <code>--darkgray</code>, soit <code>#d4d4d4</code> en sombre : c'est lui qui meurt sous un fond opaque.</p></div>
</blockquote>

### info / note

> [!info] Actuel — charte v2
> C'est la famille du composant « Signaler une erreur », donc celle qui est **sur toutes les pages** du site.

<blockquote class="callout cand" data-callout="info">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p>C'est la famille du composant « Signaler une erreur », donc celle qui est <strong>sur toutes les pages</strong> du site.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="info">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content"><p>C'est la famille du composant « Signaler une erreur », donc celle qui est <strong>sur toutes les pages</strong> du site.</p></div>
</blockquote>

### tip / success / check / done

> [!tip] Actuel — charte v2
> Une astuce, avec un mot en **gras** et un `identifiant` en code inline.

<blockquote class="callout cand" data-callout="tip">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p>Une astuce, avec un mot en <strong>gras</strong> et un <code>identifiant</code> en code inline.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="tip">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content"><p>Une astuce, avec un mot en <strong>gras</strong> et un <code>identifiant</code> en code inline.</p></div>
</blockquote>

### warning

> [!warning] Actuel — charte v2
> **Piège courant.** Deux lignes de prose pour juger le contraste réel à la lecture, et pas seulement sur un mot isolé.

<blockquote class="callout cand" data-callout="warning">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p><strong>Piège courant.</strong> Deux lignes de prose pour juger le contraste réel à la lecture, et pas seulement sur un mot isolé.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="warning">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content"><p><strong>Piège courant.</strong> Deux lignes de prose pour juger le contraste réel à la lecture, et pas seulement sur un mot isolé.</p></div>
</blockquote>

### danger / failure / bug

> [!failure] Actuel — charte v2
> Un contre-exemple, avec un mot en **gras** et un `identifiant` en code inline.

<blockquote class="callout cand" data-callout="failure">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p>Un contre-exemple, avec un mot en <strong>gras</strong> et un <code>identifiant</code> en code inline.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="failure">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content"><p>Un contre-exemple, avec un mot en <strong>gras</strong> et un <code>identifiant</code> en code inline.</p></div>
</blockquote>

### example / terrain

> [!example] Actuel — charte v2
> Exemple incarné sur un cas, avec un mot en **gras** et un `identifiant` en code inline.

<blockquote class="callout cand" data-callout="example">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p>Exemple incarné sur un cas, avec un mot en <strong>gras</strong> et un <code>identifiant</code> en code inline.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="example">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content"><p>Exemple incarné sur un cas, avec un mot en <strong>gras</strong> et un <code>identifiant</code> en code inline.</p></div>
</blockquote>

### livrable

> [!livrable] Actuel — charte v2
> Le violet est le plus chargé de sens des sept : un `[!livrable]` par étape dans toutes les trames du V.

<blockquote class="callout cand" data-callout="livrable">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content"><p>Le violet est le plus chargé de sens des sept : un <code>[!livrable]</code> par étape dans toutes les trames du V.</p></div>
</blockquote>

<blockquote class="callout orig" data-callout="livrable">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz (bleu générique)</p></div></div>
<div class="callout-content"><p>Le violet est le plus chargé de sens des sept : un <code>[!livrable]</code> par étape dans toutes les trames du V. <strong>Le fichier d'origine n'a pas d'entrée pour cette famille</strong> : elle retombe sur le bleu par défaut, comme <code>[!terrain]</code>.</p></div>
</blockquote>

## 2. Batterie complète sur `[!info]`

Les points de rupture réels d'un callout : une liste, un lien, un bloc de code (dont le fond est forcé à `var(--light)`, donc quasi noir en sombre), du gras et du code inline.

> [!info] Actuel — charte v2
> Prose courante avec un mot en **gras**, un `identifiant` en code inline et un [lien](https://timturko.github.io/TheSkillCodex/ia/).
>
> - premier item de liste
> - second item, un peu plus long pour voir le retour à la ligne
>
> ```cpp
> const int broche = 13;   // sortie numérique
> digitalWrite(broche, HIGH);
> ```

<blockquote class="callout cand" data-callout="info">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Candidat B — inversion, fond 10 %</p></div></div>
<div class="callout-content">
<p>Prose courante avec un mot en <strong>gras</strong>, un <code>identifiant</code> en code inline et un <a href="https://timturko.github.io/TheSkillCodex/ia/">lien</a>.</p>
<ul><li>premier item de liste</li><li>second item, un peu plus long pour voir le retour à la ligne</li></ul>
<pre><code>const int broche = 13;   // sortie numérique
digitalWrite(broche, HIGH);
</code></pre>
</div>
</blockquote>

<blockquote class="callout orig" data-callout="info">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Variante A — teintes Quartz</p></div></div>
<div class="callout-content">
<p>Prose courante avec un mot en <strong>gras</strong>, un <code>identifiant</code> en code inline et un <a href="https://timturko.github.io/TheSkillCodex/ia/">lien</a>.</p>
<ul><li>premier item de liste</li><li>second item, un peu plus long pour voir le retour à la ligne</li></ul>
<pre><code>const int broche = 13;   // sortie numérique
digitalWrite(broche, HIGH);
</code></pre>
</div>
</blockquote>

## 3. Échelle d'alpha du fond, sur `[!livrable]`

Le 10 % arbitré est en section 1. Ces deux témoins sont là **au cas où 10 % serait trop discret** — ils évitent un aller-retour de plus si c'est le cas, et ne coûtent rien puisque la page est jetable.

Le bloc 16 % porte ses couleurs **en attribut inline**, donc dans les deux thèmes : il paraîtra délavé en mode clair, c'est attendu. Il est là comme témoin de mécanisme.

<blockquote class="callout a16" data-callout="livrable" style="--color:#EED9FB;--border:#EED9FB;--bg:#6B3B9629">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Fond 16 % — témoin en attribut inline</p></div></div>
<div class="callout-content"><p>Même titre, même filet, seul le fond change. La question est : le bloc se détache-t-il de la page sans devenir un îlot lumineux ?</p></div>
</blockquote>

<blockquote class="callout a24" data-callout="livrable">
<div class="callout-title"><div class="callout-icon"></div><div class="callout-title-inner"><p>Fond 24 %</p></div></div>
<div class="callout-content"><p>Même titre, même filet, seul le fond change. La question est : le bloc se détache-t-il de la page sans devenir un îlot lumineux ?</p></div>
</blockquote>

## 4. Le défaut en situation

Le composant « Signaler une erreur » s'affiche tout seul en bas de cette page, comme sur toutes les autres. **En mode sombre, c'est le défaut lui-même, non corrigé** : c'est la référence à battre, et la famille `[!info]` de la section 1 dit exactement ce que chaque option lui ferait.
