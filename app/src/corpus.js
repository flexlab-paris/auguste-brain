/* =========================================================
   Couche données — lit les globals injectés par les scripts
   statiques (data.js, content/*, content-debates/*, élections)
   ========================================================= */

const W = typeof window !== 'undefined' ? window : {};

export const getData = () => W.DATA || { debates: [], citations: [], posterData: [], fichesContent: {}, MODE_COLORS: {}, MODE_LABELS: {} };
export const getDebates = () => getData().debates || [];
export const getCitations = () => getData().citations || [];
export const getPosterData = () => getData().posterData || [];
export const getFichesContent = () => getData().fichesContent || {};
export const modeColor = (m) => (getData().MODE_COLORS || {})[m] || '#888';
export const modeLabel = (m) => (getData().MODE_LABELS || {})[m] || m;

export const videoRegistry = () => W.CONTENT_REGISTRY || {};
export const debateRegistry = () => W.CONTENT_DEBATES_REGISTRY || {};
export const electionsRegistry = () => W.CONTENT_ELECTIONS_REGISTRY || {};

/* ---- Corpus Andrew Tate (métadonnées de base) ---------- */
export const TATE_CORPUS = [
  {
    id: 'LFJAHZlizAg', slug: 'never-tired-when-winning',
    title: "You're Never Tired When You're Winning",
    theme: 'Fatigue · Dépression · Purpose · Univers giving',
    thesis: "La fatigue et la dépression sont des états mentaux réversibles par la victoire, l'action et le refus de croire en elles. Le bonheur n'est pas le but d'un homme — la performance l'est.",
    tag: 'DEEP', depth: '41 quotes · 11 sophismes · 5 frameworks'
  },
  {
    id: 'P4rkjwaa6so', slug: 'tate-podcast-competition-money-purpose',
    title: 'Compétition, Argent, Purpose (long-form)',
    theme: 'Accountability · Speed · Network · Argent · Attention · Trauma',
    thesis: "L'homme moderne perd parce qu'il est lent, isolé, distrait par le confort. La sortie : 100 % accountability, vitesse d'exécution, network de prédateurs, conversion douleur → actif, refus du bonheur au profit du purpose.",
    tag: 'DEEP', depth: '63 quotes · 14 sophismes · 10 frameworks'
  },
  {
    id: 'h9wod4mPHZw', slug: 'high-value-man',
    title: 'How to Become a High Value Man',
    theme: 'Meurtre du soi ancien · Coda théologique · Homme forgé au feu',
    thesis: "Un homme de haute valeur n'est pas né, il est forgé dans le feu (douleur, discipline). Le confort est l'ennemi de la grandeur. Le regret est plus terrifiant que l'échec.",
    tag: 'DEEP', depth: '35 quotes · 10 sophismes · 5 frameworks'
  },
  {
    id: 'KPbnzSGlAP4', slug: 'version-qui-tattend',
    title: "The Version Of You That's Waiting",
    theme: 'Multivers-self · Discipline · Guerre · Mental aikido',
    thesis: "Il existe une version de toi qui n'a jamais lâché. La discipline est l'essence de la masculinité. Tout est guerre.",
    tag: 'DEEP', depth: '34 quotes · 10 sophismes · 5 frameworks'
  },
  {
    id: 'AG1vvPVkHC8', slug: 'AG1vvPVkHC8',
    title: "Don't Waste Your Life",
    theme: 'Pression · Action brute · Humour comme masque',
    thesis: "La vie d'un homme se mesure à la pression supportée et à la douleur transmutée en carburant — tout en gardant l'humour nécessaire pour en rire.",
    tag: 'DEEP', depth: '28 quotes · 7 sophismes · 4 frameworks'
  },
  {
    id: 'Gv39IoU5Z5s', slug: 'Gv39IoU5Z5s',
    title: 'Educate Yourself Daily',
    theme: 'Capital humain · Sortie du salariat · YouTube > université',
    thesis: "L'éducation est décentralisée. Apprentissage quotidien + sortie du 9-5. Chaque jour où tu n'apprends pas, ta compétition prend de l'avance.",
    tag: 'DEEP', depth: '22 quotes · 7 sophismes · 3 frameworks'
  },
  {
    id: 'cZwULaBA9Bw', slug: 'cZwULaBA9Bw',
    title: 'Obsession & Pinnacle (Conor McGregor)',
    theme: 'Être un peu fou pour dominer un domaine',
    thesis: "Le sommet d'un domaine exige d'être « a little bit gone to it » — presque insane à son craft. Conor McGregor sur l'obsession comme condition d'excellence.",
    tag: 'DEEP', depth: '21 quotes · 6 sophismes · McGregor, pas Tate'
  },
  {
    id: 'd8FH8K7n0GE', slug: 'd8FH8K7n0GE',
    title: 'Live for Something Bigger',
    theme: 'Purpose masculin · Bataille comme sacré',
    thesis: 'Comme homme, vivre pour quelque chose de plus grand que soi. La bataille est le devoir masculin.',
    tag: 'DEEP', depth: '24 quotes · 8 sophismes · 3 frameworks'
  }
];

export const DEBATE_ICONS = {
  'taxe-zucman': 'Landmark',
  'science-abondance': 'FlaskConical',
  'masculinite-feminisme': 'Users',
  'droite-gauche': 'Scale',
  'course-ia': 'Cpu',
  'risques-existentiels': 'ShieldAlert',
  'rhetorique-verites-difficiles': 'MessageSquareQuote'
};

export const BLOC_ORDER = ['extreme-gauche', 'gauche', 'centre-gauche', 'centre', 'centre-droit', 'droite', 'extreme-droite'];
export const BLOC_LABELS = {
  'extreme-gauche': 'Extrême gauche', gauche: 'Gauche', 'centre-gauche': 'Centre gauche',
  centre: 'Centre', 'centre-droit': 'Centre droit', droite: 'Droite', 'extreme-droite': 'Extrême droite'
};

export function getElectionCandidates() {
  const reg = electionsRegistry();
  return Object.keys(reg)
    .filter(k => k !== '_consolidated')
    .map(k => reg[k])
    .filter(c => c && c.id)
    .sort((a, b) => (a.spectrum ?? 0) - (b.spectrum ?? 0));
}
export const getElectionConsolidated = () => electionsRegistry()['_consolidated'] || null;

/* ---- Index global des quotes (vidéos + débats) --------- */
let _quoteIndex = null;
export function globalQuoteIndex() {
  if (_quoteIndex) return _quoteIndex;
  const idx = [];
  const RV = videoRegistry();
  for (const id of Object.keys(RV)) {
    const meta = TATE_CORPUS.find(t => t.id === id);
    (RV[id].quotes || []).forEach(q => idx.push({
      text: q.text, tags: q.tags || [], device: q.rhetorical_device || '',
      power: q.power_score || 0, highlights: q.highlight_words || [],
      sourceType: 'video', sourceId: id, sourceTitle: meta ? meta.title : id
    }));
  }
  const RD = debateRegistry();
  for (const id of Object.keys(RD)) {
    const deb = getDebates().find(d => d.id === id);
    (RD[id].quotes || []).forEach(q => idx.push({
      text: q.text, tags: q.tags || [], device: q.rhetorical_device || '',
      power: q.power_score || 0, highlights: q.highlight_words || [],
      sourceType: 'debate', sourceId: id, sourceTitle: deb ? deb.titre : id
    }));
  }
  getCitations().forEach(c => {
    const deb = getDebates().find(d => d.id === c.debat);
    idx.push({
      text: c.quote, tags: [c.auteur, c.mode].filter(Boolean), device: c.source || '',
      power: 0, highlights: [], sourceType: 'debate', sourceId: c.debat,
      sourceTitle: deb ? deb.titre : c.debat, author: c.auteur, mode: c.mode
    });
  });
  _quoteIndex = idx;
  return idx;
}

export function corpusTotals() {
  const t = { quotes: 0, fallacies: 0, stats: 0, frameworks: 0, drills: 0 };
  const add = (c) => {
    t.quotes += (c.quotes || []).length;
    t.fallacies += (c.fallacies || []).length;
    t.stats += (c.stats || []).length;
    t.frameworks += (c.frameworks || []).length;
    t.drills += (c.drills || []).length;
  };
  Object.values(videoRegistry()).forEach(add);
  Object.values(debateRegistry()).forEach(add);
  return t;
}

/* ---- Chargement dynamique des fichiers élections -------- */
export function loadElectionScripts(onDone) {
  const manifest = (W.ELECTIONS_MANIFEST || []).filter(f => f.endsWith('.js'));
  if (!manifest.length) { onDone && onDone(); return; }
  let pending = manifest.length;
  manifest.forEach(f => {
    const s = document.createElement('script');
    s.src = '/content-elections/' + f;
    s.onload = s.onerror = () => { if (--pending === 0) onDone && onDone(); };
    document.head.appendChild(s);
  });
}
