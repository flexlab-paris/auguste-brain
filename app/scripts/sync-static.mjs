/* Copie les données (globals JS) et les fiches statiques dans public/
   pour que Vite les serve en dev et les embarque dans dist/ au build.
   Source de vérité : ../mindmap/ et ../fiches/ — ne jamais éditer public/. */
import { cpSync, mkdirSync, rmSync, readdirSync, statSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const appDir = join(here, '..');
const repo = join(appDir, '..');
const pub = join(appDir, 'public');

const SRC = {
  data: join(repo, 'mindmap', 'data.js'),
  learning: join(repo, 'mindmap', 'learning.js'),
  content: join(repo, 'mindmap', 'content'),
  contentDebates: join(repo, 'mindmap', 'content-debates'),
  contentElections: join(repo, 'mindmap', 'content-elections'),
  fiches: join(repo, 'fiches')
};

rmSync(join(pub, 'content'), { recursive: true, force: true });
rmSync(join(pub, 'content-debates'), { recursive: true, force: true });
rmSync(join(pub, 'content-elections'), { recursive: true, force: true });
rmSync(join(pub, 'fiches'), { recursive: true, force: true });

copyFileSync(SRC.data, join(pub, 'data.js'));
copyFileSync(SRC.learning, join(pub, 'learning.js'));
cpSync(SRC.content, join(pub, 'content'), { recursive: true, filter: (s) => !s.endsWith('.md') });
cpSync(SRC.contentDebates, join(pub, 'content-debates'), { recursive: true, filter: (s) => !s.endsWith('.md') });
if (existsSync(SRC.contentElections)) {
  cpSync(SRC.contentElections, join(pub, 'content-elections'), { recursive: true, filter: (s) => !s.endsWith('.md') });
} else {
  mkdirSync(join(pub, 'content-elections'), { recursive: true });
}

// Fiches : uniquement .pdf et .md (pas les .tex/.aux/.log), en conservant l'arborescence
function copyFiches(src, dst) {
  mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(src)) {
    const s = join(src, entry);
    const d = join(dst, entry);
    const st = statSync(s);
    if (st.isDirectory()) copyFiches(s, d);
    else if (['.pdf', '.md', '.txt'].includes(extname(entry))) copyFileSync(s, d);
  }
}
copyFiches(SRC.fiches, join(pub, 'fiches'));

// Manifeste des fichiers élections présents (pour chargement dynamique côté app)
const electionFiles = existsSync(join(pub, 'content-elections'))
  ? readdirSync(join(pub, 'content-elections')).filter(f => f.endsWith('.js'))
  : [];
const manifest = `window.ELECTIONS_MANIFEST = ${JSON.stringify(electionFiles)};\n`;
import('node:fs').then(fs => fs.writeFileSync(join(pub, 'elections-manifest.js'), manifest));

console.log('sync-static: OK —', electionFiles.length, 'fichiers élections');
