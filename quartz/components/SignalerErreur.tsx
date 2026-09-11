import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

// =====================================================================
// Encadré « Signaler une erreur » (12/09, séance 22)
// =====================================================================
// Posé une seule fois, en `afterBody` partagé : aucune édition de
// `content/`, aucune jumelle EN en dérive, et les fiches futures le
// portent sans geste. Remplace le projet d'encadré sur les 50 fiches
// des modules MicroPython / STM32 / Teensy : le libellé retenu est une
// invitation conditionnelle, donc sa population est le site entier et
// non un lot de modules.
//
// Le style est celui de [!info] : la charte v2 de `custom.scss` cible
// `.callout[data-callout="info"]`, donc la structure ci-dessous hérite
// la palette sans une ligne de CSS neuve.
//
// Les exclusions (404, page `/ia/`) sont déclarées dans
// `quartz.layout.ts` par `ConditionalRender`, là où la pose se lit.
//
// L'espace insécable avant les deux-points est écrite en échappement
// `\u00a0` et non en caractère littéral, pour qu'un accident d'encodage
// ne puisse pas la perdre en silence.
// =====================================================================

const TEXTES = {
  fr: {
    titre: "Signaler une erreur",
    corps:
      "Si vous trouvez une erreur, un lien qui ne mène nulle part, une image manquante ou une explication bancale, dites-le à votre enseignant\u00a0: la correction profite à la promotion suivante.",
  },
  en: {
    titre: "Report an error",
    corps:
      "If you find a mistake, a link that leads nowhere, a missing image or an explanation that doesn't hold up, tell your teacher: the fix will benefit next year's class.",
  },
}

function SignalerErreur({ fileData, cfg }: QuartzComponentProps) {
  // Même lecture de la langue que `renderPage.tsx` pour `<html lang>` :
  // le champ `lang:` posé sur les 242 fiches EN au bloc B du 31/08.
  const langue = fileData.frontmatter?.lang ?? cfg.locale?.split("-")[0] ?? "fr"
  const t = langue === "en" ? TEXTES.en : TEXTES.fr

  return (
    <blockquote class="callout" data-callout="info">
      <div class="callout-title">
        <div class="callout-icon"></div>
        <div class="callout-title-inner">
          <p>{t.titre}</p>
        </div>
      </div>
      <div class="callout-content">
        <p>{t.corps}</p>
      </div>
    </blockquote>
  )
}

export default (() => SignalerErreur) satisfies QuartzComponentConstructor
