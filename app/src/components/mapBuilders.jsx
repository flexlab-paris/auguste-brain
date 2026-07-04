/* =========================================================
   Builders — transforment un contenu deep (vidéo / débat)
   en arbre MindMap avec panneaux latéraux riches.
   Palette Flexlab : navy, royal, laiton, done, block, red, violet.
   ========================================================= */
import React from 'react';
import {
  Flame, Gavel, CheckCircle2, ListOrdered, GitBranch, AlertTriangle,
  Quote, Swords, BarChart3, Wrench, Dumbbell, Layers, Lightbulb, Columns3
} from 'lucide-react';
import { Highlight } from './RichSections.jsx';
import { getFichesContent, modeLabel, modeColor } from '../corpus.js';

const C = {
  navy: '#14213D', royal: '#2C4FB5', laiton: '#9A7B3F',
  done: '#1F8A5F', block: '#C97B1F', red: '#B3261E', violet: '#6D28D9'
};

const short = (s, n = 44) => !s ? '' : (s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s);

/* ---------- Panneaux ---------- */
const P = {
  text: (t) => <p className="fxp-lede">{t}</p>,

  quote: (q) => (
    <>
      <blockquote className="fxp-quote">« <Highlight text={q.text} words={q.highlight_words} /> »</blockquote>
      <div className="fxp-chips">
        {q.rhetorical_device && <span className="fxp-chip blue">{q.rhetorical_device}</span>}
        {(q.tags || []).map(t => <span key={t} className="fxp-chip">{t}</span>)}
        {q.power_score ? <span className="fxp-chip amber">⚡ {q.power_score}/10</span> : null}
      </div>
      {q.context && <p className="fxp-note">{q.context}</p>}
    </>
  ),

  chapter: (ch) => (
    <>
      {ch.summary && <p className="fxp-lede">{ch.summary}</p>}
      {ch.key_quote && <blockquote className="fxp-quote">« {ch.key_quote} »</blockquote>}
    </>
  ),

  argNode: (n) => (
    <>
      <p className="fxp-lede">{n.claim}</p>
      <div className="fxp-chips">
        {n.type && <span className="fxp-chip blue">{n.type}</span>}
        {n.strength ? <span className="fxp-chip amber">force {n.strength}/10</span> : null}
      </div>
      {Array.isArray(n.evidence) && n.evidence.length > 0 && (
        <>
          <div className="fxp-label">Appuis</div>
          <ul className="fxp-list">{n.evidence.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </>
      )}
    </>
  ),

  fallacy: (f) => (
    <>
      <blockquote className="fxp-quote">« {f.original_claim || f.claim} »</blockquote>
      {f.why_fallacious && (<><div className="fxp-label red">Pourquoi c'est fallacieux</div><p className="fxp-body">{f.why_fallacious}</p></>)}
      {f.steelman && (<><div className="fxp-label green">Steelman</div><p className="fxp-body boxed green">{f.steelman}</p></>)}
      {f.nuance && (<><div className="fxp-label amber">Nuance</div><p className="fxp-body">{f.nuance}</p></>)}
      {(f.counter_argument || f.correction) && (<><div className="fxp-label red">Contre-argument</div><p className="fxp-body boxed red">{f.counter_argument || f.correction}</p></>)}
    </>
  ),

  kitAsk: (q) => (
    <>
      <p className="fxp-lede">{q.question}</p>
      <div className="fxp-label green">Réponse calibrée</div>
      <p className="fxp-body boxed green">{q.best_response}</p>
      {q.followup_moves?.length ? (<><div className="fxp-label">Follow-up</div><ul className="fxp-list">{q.followup_moves.map((m, i) => <li key={i}>{m}</li>)}</ul></>) : null}
    </>
  ),
  kitDefend: (d) => (
    <>
      <p className="fxp-lede">{d.challenge}</p>
      <div className="fxp-label green">Défense</div>
      <p className="fxp-body boxed green">{d.response}</p>
      {d.technique && <p className="fxp-note">Technique : {d.technique}</p>}
      {d.example_response_text && <blockquote className="fxp-quote">« {d.example_response_text} »</blockquote>}
    </>
  ),
  kitAttack: (a) => (
    <>
      <p className="fxp-lede">{a.target_claim}</p>
      <div className="fxp-label red">Attaque</div>
      <p className="fxp-body boxed red">{a.attack}</p>
      {a.angle && <p className="fxp-note">Angle : {a.angle}</p>}
    </>
  ),
  kitRephrase: (r) => (
    <>
      <p className="fxp-lede">{r.original}</p>
      {r.softer && (<><div className="fxp-label green">Softer</div><p className="fxp-body">{r.softer}</p></>)}
      {r.harder && (<><div className="fxp-label red">Harder</div><p className="fxp-body">{r.harder}</p></>)}
      {r.academic && (<><div className="fxp-label blue">Academic</div><p className="fxp-body">{r.academic}</p></>)}
    </>
  ),

  stat: (s) => (
    <>
      <div className="fxp-big">{s.number}</div>
      <p className="fxp-lede">{s.label}</p>
      {s.context && <p className="fxp-body">{s.context}</p>}
      {s.source && <p className="fxp-note">Source : {s.source}</p>}
    </>
  ),

  framework: (f) => (
    <>
      {f.when_to_use && <p className="fxp-note">Quand : {f.when_to_use}</p>}
      <ol className="fxp-steps">{(f.steps || []).map((s, i) => <li key={i}>{s}</li>)}</ol>
      {f.warning && <p className="fxp-body boxed amber">⚠ {f.warning}</p>}
    </>
  ),

  drill: (d) => (
    <>
      {d.duration && <p className="fxp-note">Durée : {d.duration} · difficulté {d.difficulty ?? '?'}/5</p>}
      <ul className="fxp-list">{(d.instructions || []).map((s, i) => <li key={i}>{s}</li>)}</ul>
    </>
  ),

  comparison: (cp) => (
    <div className="fxp-vs">
      <div>
        <div className="fxp-label red">{cp.left?.label}</div>
        <ul className="fxp-list">{(cp.left?.items || []).map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
      <div>
        <div className="fxp-label green">{cp.right?.label}</div>
        <ul className="fxp-list">{(cp.right?.items || []).map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
    </div>
  ),

  mode: (m) => (
    <>
      {m.these && <blockquote className="fxp-quote">{m.these}</blockquote>}
      {m.stats?.length ? <ul className="fxp-list">{m.stats.map((s, i) => <li key={i}>{s}</li>)}</ul> : null}
      {m.cloture && <p className="fxp-body boxed amber">{m.cloture}</p>}
    </>
  )
};

/* ---------- Conversion arbre d'argumentation ---------- */
function argChildren(node, eyebrow) {
  return (node.children || []).map(ch => ({
    label: short(ch.claim, 46),
    icon: GitBranch,
    eyebrow,
    panelTitle: short(ch.claim, 90),
    panel: P.argNode(ch),
    children: argChildren(ch, eyebrow)
  }));
}

/* ---------- Carte VIDÉO ---------- */
export function buildVideoMap(c, meta) {
  const kit = c.argumentation_kit || {};
  const branches = [];

  if (c.key_takeaways?.length) branches.push({
    label: 'À retenir', icon: CheckCircle2, color: C.royal,
    children: c.key_takeaways.map((t, i) => ({
      label: short(t), eyebrow: 'À retenir', panelTitle: `Take-away ${i + 1}`, panel: P.text(t)
    }))
  });

  if (c.chapters?.length) branches.push({
    label: 'Chapitres', icon: ListOrdered, color: C.laiton,
    children: c.chapters.map(ch => ({
      label: short(ch.title, 40), eyebrow: `Chapitre ${ch.idx ?? ''}`,
      panelTitle: ch.title, panel: P.chapter(ch)
    }))
  });

  if (c.argument_tree?.root) branches.push({
    label: 'Arguments', icon: GitBranch, color: C.navy,
    eyebrow: 'Arbre d’argumentation', panelTitle: short(c.argument_tree.root.claim, 90),
    panel: P.argNode(c.argument_tree.root),
    children: argChildren(c.argument_tree.root, 'Argument')
  });

  if (c.fallacies?.length) branches.push({
    label: 'Sophismes', icon: AlertTriangle, color: C.red,
    children: c.fallacies.map(f => ({
      label: short(f.fallacy_type, 36), sub: f.severity,
      eyebrow: 'Sophisme', panelTitle: f.fallacy_type, panel: P.fallacy(f)
    }))
  });

  const topQuotes = (c.quotes || []).slice().sort((a, b) => (b.power_score || 0) - (a.power_score || 0)).slice(0, 10);
  if (topQuotes.length) branches.push({
    label: 'Quotes', icon: Quote, color: C.violet,
    children: topQuotes.map(q => ({
      label: short(q.text, 42), sub: q.power_score ? `⚡ ${q.power_score}/10` : null,
      eyebrow: 'Quote', panelTitle: short(q.text, 80), panel: P.quote(q)
    }))
  });

  const kitKids = [];
  (kit.if_asked || []).length && kitKids.push({
    label: 'Si on te demande', icon: Swords, badge: '?',
    children: kit.if_asked.map(q => ({ label: short(q.question, 42), eyebrow: 'Question', panelTitle: q.question, panel: P.kitAsk(q) }))
  });
  (kit.how_to_defend || []).length && kitKids.push({
    label: 'Défendre', badge: '🛡',
    children: kit.how_to_defend.map(d => ({ label: short(d.challenge, 42), eyebrow: 'Défense', panelTitle: short(d.challenge, 80), panel: P.kitDefend(d) }))
  });
  (kit.how_to_attack || []).length && kitKids.push({
    label: 'Attaquer', badge: '⚔',
    children: kit.how_to_attack.map(a => ({ label: short(a.target_claim, 42), eyebrow: 'Attaque', panelTitle: short(a.target_claim, 80), panel: P.kitAttack(a) }))
  });
  (kit.how_to_rephrase || []).length && kitKids.push({
    label: 'Reformuler', badge: '↺',
    children: kit.how_to_rephrase.map(r => ({ label: short(r.original, 42), eyebrow: 'Reformulation', panelTitle: short(r.original, 80), panel: P.kitRephrase(r) }))
  });
  if (kitKids.length) branches.push({ label: 'Kit d’argumentation', icon: Swords, color: C.done, children: kitKids });

  if (c.stats?.length) branches.push({
    label: 'Data', icon: BarChart3, color: C.block,
    children: c.stats.map(s => ({
      label: s.number, sub: short(s.label, 34),
      eyebrow: 'Data point', panelTitle: s.label, panel: P.stat(s)
    }))
  });

  if (c.comparisons?.length) branches.push({
    label: 'Contrastes', icon: Columns3, color: C.laiton,
    children: c.comparisons.map(cp => ({
      label: short(cp.title, 40), eyebrow: 'Contraste', panelTitle: cp.title, panel: P.comparison(cp)
    }))
  });

  if (c.frameworks?.length) branches.push({
    label: 'Frameworks', icon: Wrench, color: C.royal,
    children: c.frameworks.map(f => ({
      label: short(f.name, 40), eyebrow: 'Framework', panelTitle: f.name, panel: P.framework(f)
    }))
  });

  if (c.drills?.length) branches.push({
    label: 'Drills', icon: Dumbbell, color: C.done,
    children: c.drills.map(d => ({
      label: short(d.name, 40), sub: d.duration,
      eyebrow: 'Drill', panelTitle: d.name, panel: P.drill(d)
    }))
  });

  return {
    label: short(meta.title, 48), icon: Flame, color: C.navy,
    eyebrow: c.speaker || 'Vidéo', panelTitle: meta.title,
    panel: (
      <>
        <p className="fxp-lede">{c.hook}</p>
        <div className="fxp-label">Thèse centrale</div>
        <p className="fxp-body">{c.thesis}</p>
      </>
    ),
    children: branches
  };
}

/* ---------- Carte DÉBAT ---------- */
export function buildDebateMap(c, d) {
  const base = buildVideoMap(c || {}, { title: d.titre });
  base.icon = Gavel;
  base.eyebrow = 'Débat';
  base.panelTitle = d.titre;
  base.panel = (
    <>
      <p className="fxp-lede">{c?.hook || d.these}</p>
      {c?.thesis && (<><div className="fxp-label">Thèse</div><p className="fxp-body">{c.thesis}</p></>)}
    </>
  );

  // Branche spécifique : les 5 modes rhétoriques
  const fiches = getFichesContent()[d.id] || {};
  const modes = (d.modes || []).filter(m => fiches[m]);
  if (modes.length) base.children.unshift({
    label: 'Modes rhétoriques', icon: Layers, color: C.laiton,
    children: modes.map(m => ({
      label: modeLabel(m), color: modeColor(m),
      eyebrow: 'Mode rhétorique', panelTitle: modeLabel(m), panel: P.mode(fiches[m])
    }))
  });

  // Chiffres clés du débat si le contenu riche n'a pas de stats
  if (!(c?.stats?.length) && d.faits_cles?.length) base.children.push({
    label: 'Chiffres clés', icon: BarChart3, color: C.block,
    children: d.faits_cles.map((f, i) => ({
      label: short(f, 40), eyebrow: 'Chiffre clé', panelTitle: `Fait ${i + 1}`, panel: P.text(f)
    }))
  });

  if (c?.analogies?.length) base.children.push({
    label: 'Analogies', icon: Lightbulb, color: C.violet,
    children: c.analogies.map(a => ({
      label: short(a.source, 38), eyebrow: 'Analogie', panelTitle: a.source,
      panel: (
        <>
          <p className="fxp-lede">{a.used_for}</p>
          {a.why_it_works && <p className="fxp-body">{a.why_it_works}</p>}
          {a.strength ? <p className="fxp-note">Force : {a.strength}/10</p> : null}
        </>
      )
    }))
  });

  return base;
}

export const MAP_LEGEND = [
  { color: C.navy, label: 'Arguments' },
  { color: C.royal, label: 'À retenir · Frameworks' },
  { color: C.red, label: 'Sophismes' },
  { color: C.violet, label: 'Quotes' },
  { color: C.done, label: 'Kit' },
  { color: C.block, label: 'Data' }
];

/* ---------- Carte ARGUMENTS seule (remplace l'ancien arbre) ---------- */
export function buildArgMap(argRoot) {
  return {
    label: short(argRoot.claim, 52), icon: GitBranch, color: C.navy,
    eyebrow: 'Thèse racine', panelTitle: short(argRoot.claim, 100), panel: P.argNode(argRoot),
    children: argChildren(argRoot, 'Argument')
  };
}
