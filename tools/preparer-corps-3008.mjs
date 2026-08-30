#!/usr/bin/env node
/**
 * preparer-corps-3008.mjs - SCRIPT JETABLE (C114), seance 2 du 30/08.
 *
 * OBJET : preparer les DEUX fichiers de corps qui jugent le mode --corps.
 *   1. tools/corps-bom-3008.md      corps COURANT de bom-en, extrait a l octet
 *      -> test POSITIF de non-regression : reecrire une fiche avec son propre
 *         corps doit rendre un fichier IDENTIQUE A L OCTET. Tout ecart, fut-il
 *         d un espace, casse l egalite des sha256.
 *   2. tools/corps-negatif-3008.md  un corps qui OUVRE PAR UN FRONT MATTER
 *      -> test NEGATIF delibere : c est le geste fautif du 30/08 (seance 2),
 *         coller un fichier entier la ou on attend un corps. La garde 3 doit
 *         le refuser sans ecrire un octet.
 *
 * Ce script ne modifie AUCUN fichier de content/. Il ne sera pas reutilise.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';

const CONTENT = join(process.cwd(), 'content');
const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');

const REL = 'en/conduite/proj/bom-en.md';
const texte = lire(REL);
const m = texte.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
if (!m) {
  console.error('Pas de front matter dans content/' + REL);
  process.exit(1);
}
const corps = texte.slice(m[0].length);

writeFileSync('tools/corps-bom-3008.md', corps, { encoding: 'utf8' });
console.log('ECRIT tools/corps-bom-3008.md');
console.log('  octets du fichier complet : ' + Buffer.byteLength(texte, 'utf8'));
console.log('  octets du front matter    : ' + Buffer.byteLength(m[0], 'utf8'));
console.log('  octets du corps extrait   : ' + Buffer.byteLength(corps, 'utf8'));
console.log('  controle : front matter + corps = complet ? ' +
  ((m[0] + corps) === texte ? 'oui' : 'NON'));

const negatif = '---\ntitle: Corps fautif\nsource_fr: conduite/proj/bom.md\n' +
  'source_sha256: 0000000000000000000000000000000000000000000000000000000000000000\n' +
  '---\n\nCe fichier ouvre par un front matter : il porte le geste que la garde 3\n' +
  'existe pour refuser. Le marqueur ci-dessus est BIEN FORME - 64 hexadecimaux\n' +
  'minuscules - et pourtant invente, ce qui est exactement le cas que\n' +
  'MARQUE INVALIDE ne sait pas distinguer d une empreinte perimee.\n';
writeFileSync('tools/corps-negatif-3008.md', negatif, { encoding: 'utf8' });
console.log('ECRIT tools/corps-negatif-3008.md');
console.log('  ouvre par un front matter : ' + (/^---\r?\n/.test(negatif) ? 'oui' : 'NON'));
