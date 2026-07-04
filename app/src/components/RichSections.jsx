/* Sections riches partagées : quotes, kit, sophismes, stats,
   contrastes, procédés, analogies, frameworks, drills, related,
   graphe d'argumentation Cytoscape. */
import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import {
  Quote, Swords, AlertTriangle, BarChart3, Columns3, Mic, Lightbulb,
  Wrench, Dumbbell, Link2, GitBranch, CheckCircle2, Shield, Sword,
  Repeat, HelpCircle, PlayCircle, Gavel, ListOrdered
} from 'lucide-react';
import { TATE_CORPUS, getDebates } from '../corpus.js';

/* ---- Surlignage des mots-clés dans une quote ---- */
export function Highlight({ text, words }) {
  if (!words || !words.length || !text) return <>{text}</>;
  const escaped = words.filter(Boolean).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!escaped.length) return <>{text}</>;
  const re = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(re);
  return <>{parts.map((p, i) => re.test(p) ? <mark key={i}>{p}</mark> : <React.Fragment key={i}>{p}</React.Fragment>)}</>;
}

export function VSection({ id, icon: Icon, title, meta, desc, children }) {
  if (!children) return null;
  return (
    <div className="vsection" id={id ? `s-${id}` : undefined}>
      <div className="vsection-head">
        <div className="vsection-title">{Icon && <Icon className="icon" />}{title}</div>
        {meta && <div className="vsection-meta">{meta}</div>}
      </div>
      {desc && <p className="vsection-desc">{desc}</p>}
      {children}
    </div>
  );
}

export function Takeaways({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="takeaways" icon={CheckCircle2} title="À retenir" meta={`${items.length} take-aways`}>
      <div className="takeaways">
        {items.map((t, i) => (
          <div className="takeaway" key={i}>
            <span className="takeaway-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="takeaway-text">{t}</span>
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Chapters({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="chapters" icon={ListOrdered} title="Chapitres" meta={`${items.length} sections`}
      desc="Structure narrative, avec la citation-clé de chaque chapitre.">
      <div className="chapters">
        {items.map((ch, i) => (
          <div className="chapter" key={i}>
            <div className="chapter-idx">{String(ch.idx ?? i + 1).padStart(2, '0')}</div>
            <div>
              <div className="chapter-title">{ch.title}</div>
              {ch.summary && <div className="chapter-summary">{ch.summary}</div>}
              {ch.key_quote && <div className="chapter-quote">« {ch.key_quote} »</div>}
            </div>
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function QuoteCards({ items, onTag }) {
  if (!items?.length) return null;
  return (
    <VSection id="quotes" icon={Quote} title="Quotes marquantes" meta={`${items.length} extraits`}
      desc="Taggées, avec procédé rhétorique, score de puissance et surlignage des mots-clés. Clique un tag pour filtrer tout le corpus.">
      <div className="quotes">
        {items.map((q, i) => (
          <div className="quote-card" key={i}>
            <div className="quote-text">« <Highlight text={q.text} words={q.highlight_words} /> »</div>
            <div className="quote-meta">
              {q.rhetorical_device && <span className="pill device">{q.rhetorical_device}</span>}
              {(q.tags || []).map(t => (
                <button className="pill tag" key={t} onClick={() => onTag && onTag(t)}>{t}</button>
              ))}
              {q.power_score ? <span className="pill power">⚡ {q.power_score}/10</span> : null}
            </div>
            {q.context && <div className="quote-context">{q.context}</div>}
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function ArgumentKit({ kit }) {
  if (!kit) return null;
  const { how_to_defend = [], how_to_attack = [], how_to_rephrase = [], if_asked = [] } = kit;
  const total = how_to_defend.length + how_to_attack.length + if_asked.length + how_to_rephrase.length;
  if (!total) return null;
  return (
    <VSection id="kit" icon={Swords} title="Kit d'argumentation" meta="defend · attack · rephrase · if-asked"
      desc="Comment défendre si on te challenge, comment attaquer les points faibles, comment reformuler selon le public, et quoi répondre aux questions courantes.">
      <div className="kit">
        {if_asked.map((q, i) => (
          <div className="kit-card" data-type="ask" key={`a${i}`}>
            <div className="kit-label"><HelpCircle className="icon-sm" /> Si on te pose cette question</div>
            <div className="kit-q">{q.question}</div>
            <div className="kit-a">{q.best_response}</div>
            {q.followup_moves?.length ? <div className="kit-tech">Follow-up : {q.followup_moves.join(' · ')}</div> : null}
          </div>
        ))}
        {how_to_defend.map((d, i) => (
          <div className="kit-card" data-type="defend" key={`d${i}`}>
            <div className="kit-label"><Shield className="icon-sm" /> Comment défendre</div>
            <div className="kit-q">{d.challenge}</div>
            <div className="kit-a">{d.response}</div>
            {d.technique && <div className="kit-tech">Technique : {d.technique}</div>}
            {d.example_response_text && <div className="kit-ex">« {d.example_response_text} »</div>}
          </div>
        ))}
        {how_to_attack.map((a, i) => (
          <div className="kit-card" data-type="attack" key={`t${i}`}>
            <div className="kit-label"><Sword className="icon-sm" /> Point faible à attaquer</div>
            <div className="kit-q">{a.target_claim}</div>
            <div className="kit-a">{a.attack}</div>
            {a.angle && <div className="kit-tech">Angle : {a.angle}</div>}
          </div>
        ))}
        {how_to_rephrase.map((r, i) => (
          <div className="kit-card" data-type="rephrase" key={`r${i}`}>
            <div className="kit-label"><Repeat className="icon-sm" /> Reformuler selon le public</div>
            <div className="reph-orig"><strong>Original :</strong> {r.original}</div>
            <div className="reph-grid">
              {r.softer && <div className="reph" data-tone="softer"><span className="reph-label">Softer</span>{r.softer}</div>}
              {r.harder && <div className="reph" data-tone="harder"><span className="reph-label">Harder</span>{r.harder}</div>}
              {r.academic && <div className="reph" data-tone="academic"><span className="reph-label">Academic</span>{r.academic}</div>}
            </div>
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Fallacies({ items, title = 'Sophismes & nuances', id = 'fallacies' }) {
  if (!items?.length) return null;
  return (
    <VSection id={id} icon={AlertTriangle} title={title} meta={`${items.length} points`}
      desc="Chaque sophisme : le claim original + son type + steelman (lecture charitable) + nuance + contre-argument. Sévérité codée en couleur.">
      <div className="fallacies">
        {items.map((f, i) => (
          <div className="fallacy" data-sev={f.severity || 'medium'} key={i}>
            <div className="fallacy-head">
              <div className="fallacy-type"><AlertTriangle className="icon-sm" />{f.fallacy_type || 'sophisme'}</div>
              <div className="sev" data-sev={f.severity || 'medium'}>{f.severity || 'medium'}</div>
            </div>
            <div className="fallacy-claim">« {f.original_claim || f.claim} »</div>
            {f.why_fallacious && (
              <div className="fblock"><span className="fblock-label">Pourquoi c'est fallacieux</span>
                <div className="fblock-text">{f.why_fallacious}</div></div>
            )}
            {f.steelman && (
              <div className="fblock" data-kind="steelman"><span className="fblock-label">Steelman — la version la plus forte</span>
                <div className="fblock-text">{f.steelman}</div></div>
            )}
            {f.nuance && (
              <div className="fblock" data-kind="nuance"><span className="fblock-label">Nuance</span>
                <div className="fblock-text">{f.nuance}</div></div>
            )}
            {(f.counter_argument || f.correction) && (
              <div className="fblock" data-kind="counter"><span className="fblock-label">Contre-argument à utiliser</span>
                <div className="fblock-text">{f.counter_argument || f.correction}</div></div>
            )}
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function StatCards({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="stats" icon={BarChart3} title="Data & chiffres sourcés" meta={`${items.length} data points`}>
      <div className="stats">
        {items.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-n">{s.number}</div>
            <div className="stat-l">{s.label}</div>
            {s.context && <div className="stat-ctx">{s.context}</div>}
            {s.source && <div className="stat-src">{s.source}</div>}
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Comparisons({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="comparisons" icon={Columns3} title="Contrastes binaires" meta={`${items.length}`}
      desc="Les structures d'opposition utilisées pour forcer un choix.">
      {items.map((cp, i) => (
        <div className="compare" key={i}>
          <div className="compare-title">{cp.title}</div>
          <div className="compare-grid">
            <div className="cside" data-side="left">
              <div className="cside-label">{cp.left?.label}</div>
              {(cp.left?.items || []).map((it, j) => <div className="citem" key={j}>{it}</div>)}
            </div>
            <div className="cvs">VS</div>
            <div className="cside" data-side="right">
              <div className="cside-label">{cp.right?.label}</div>
              {(cp.right?.items || []).map((it, j) => <div className="citem" key={j}>{it}</div>)}
            </div>
          </div>
        </div>
      ))}
    </VSection>
  );
}

export function Devices({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="devices" icon={Mic} title="Procédés rhétoriques" meta={`${items.length}`}>
      <div className="cards-2">
        {items.map((d, i) => (
          <div className="mini-card" key={i}>
            <div className="mini-card-title">{d.name}</div>
            {d.example_text && <div className="mini-card-ex">« {d.example_text} »</div>}
            {d.effect && <div className="mini-card-body">{d.effect}</div>}
            {d.why_it_works && <div className="mini-card-why">{d.why_it_works}</div>}
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Analogies({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="analogies" icon={Lightbulb} title="Analogies & exemples" meta={`${items.length}`}>
      <div className="cards-2">
        {items.map((a, i) => (
          <div className="mini-card" key={i}>
            <div className="mini-card-title" style={{ color: 'var(--accent)' }}>
              {a.source}{a.strength ? <span className="strength">{a.strength}/10</span> : null}
            </div>
            <div className="mini-card-body">{a.used_for}</div>
            {a.why_it_works && <div className="mini-card-why">{a.why_it_works}</div>}
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Frameworks({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="frameworks" icon={Wrench} title="Frameworks opérationnels" meta={`${items.length}`}
      desc="Modèles mentaux prêts à appliquer, avec étapes numérotées et warning quand pertinent.">
      <div className="frameworks">
        {items.map((f, i) => (
          <div className="framework" key={i}>
            <div className="framework-name">{f.name}</div>
            {f.when_to_use && <div className="framework-when">Quand : {f.when_to_use}</div>}
            <ol className="fw-steps">{(f.steps || []).map((s, j) => <li key={j}>{s}</li>)}</ol>
            {f.warning && <div className="fw-warning">⚠ {f.warning}</div>}
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Drills({ items }) {
  if (!items?.length) return null;
  return (
    <VSection id="drills" icon={Dumbbell} title="Drills — exercices d'intériorisation" meta={`${items.length}`}>
      <div className="drills">
        {items.map((d, i) => (
          <div className="drill" key={i}>
            <div>
              <div className="drill-name">{d.name}</div>
              {d.duration && <div className="drill-duration">Durée : {d.duration}</div>}
              <ul className="drill-steps">{(d.instructions || []).map((s, j) => <li key={j}>{s}</li>)}</ul>
            </div>
            <div className="drill-diff">
              <div className="drill-diff-n">{d.difficulty ?? '?'}</div>
              <div className="drill-diff-l">/ 5</div>
            </div>
          </div>
        ))}
      </div>
    </VSection>
  );
}

export function Related({ related, currentId, navigate }) {
  if (!related) return null;
  const vids = (related.videos || [])
    .map(id => TATE_CORPUS.find(t => t.id === id))
    .filter(t => t && t.id !== currentId);
  const debs = (related.debates || [])
    .map(id => getDebates().find(d => d.id === id))
    .filter(d => d && d.id !== currentId);
  if (!vids.length && !debs.length) return null;
  return (
    <VSection id="related" icon={Link2} title="Voir aussi">
      <div className="related">
        {vids.map(t => (
          <div className="related-card" key={t.id} onClick={() => navigate({ view: 'video', id: t.id })}>
            <span className="related-kind"><PlayCircle className="icon-sm" /> Vidéo Tate</span>
            <span className="related-title">{t.title}</span>
          </div>
        ))}
        {debs.map(d => (
          <div className="related-card" key={d.id} onClick={() => navigate({ view: 'debate', id: d.id })}>
            <span className="related-kind"><Gavel className="icon-sm" /> Débat</span>
            <span className="related-title">{d.titre}</span>
          </div>
        ))}
      </div>
    </VSection>
  );
}

/* ---- Graphe d'argumentation interactif ---- */
export function ArgGraph({ root }) {
  const ref = useRef(null);
  const cyRef = useRef(null);

  useEffect(() => {
    if (!root || !ref.current) return;
    const nodes = [], edges = [];
    let counter = 0;
    (function walk(n, parentId, depth) {
      const id = 'n' + (counter++);
      const label = n.claim || n.text || '';
      nodes.push({ data: {
        id,
        label: label.length > 90 ? label.slice(0, 87) + '…' : label,
        full: label,
        type: depth === 0 ? 'root' : (n.type || 'premise')
      } });
      if (parentId) edges.push({ data: { source: parentId, target: id } });
      (n.children || []).forEach(ch => walk(ch, id, depth + 1));
    })(root, null, 0);

    const css = getComputedStyle(document.documentElement);
    const v = (name, fb) => (css.getPropertyValue(name) || fb).trim();
    const COLORS = {
      root:     { bg: v('--accent', '#e8590c'), fg: '#fff' },
      premise:  { bg: v('--warn', '#b45309'),   fg: '#fff' },
      evidence: { bg: v('--ok', '#15803d'),     fg: '#fff' },
      analogy:  { bg: v('--info', '#1d4ed8'),   fg: '#fff' },
      example:  { bg: '#ffffff',                fg: v('--ink', '#1a1915') },
      counter:  { bg: v('--bad', '#b91c1c'),    fg: '#fff' }
    };
    const cy = cytoscape({
      container: ref.current,
      elements: [...nodes, ...edges],
      style: [
        { selector: 'node', style: {
          'background-color': (e) => (COLORS[e.data('type')] || COLORS.premise).bg,
          'color': (e) => (COLORS[e.data('type')] || COLORS.premise).fg,
          label: 'data(label)', 'text-wrap': 'wrap', 'text-max-width': 160,
          'text-valign': 'center', 'text-halign': 'center',
          'font-family': 'Inter, sans-serif', 'font-size': 11, 'font-weight': 500,
          padding: '10px', shape: 'roundrectangle', width: 'label', height: 'label',
          'border-width': 1, 'border-color': v('--line-2', '#d8d2c2')
        } },
        { selector: 'node[type="root"]', style: { 'font-size': 13, 'font-weight': 700, padding: '14px', 'text-max-width': 220 } },
        { selector: 'edge', style: {
          width: 1.5, 'line-color': v('--line-2', '#d8d2c2'),
          'target-arrow-shape': 'triangle', 'target-arrow-color': v('--line-2', '#d8d2c2'),
          'curve-style': 'bezier', opacity: 0.75
        } }
      ],
      layout: { name: 'breadthfirst', directed: true, roots: ['n0'], spacingFactor: 1.35, padding: 28, fit: true },
      minZoom: 0.35, maxZoom: 3, wheelSensitivity: 0.2
    });
    cy.on('mouseover', 'node', (evt) => { ref.current.parentElement.title = evt.target.data('full'); });
    cyRef.current = cy;
    return () => { cy.destroy(); cyRef.current = null; };
  }, [root]);

  if (!root) return null;
  return (
    <VSection id="tree" icon={GitBranch} title="Arbre d'argumentation" meta="interactif — zoom, drag, hover"
      desc="Thèse racine → branches. Couleurs par type : premise (jaune), evidence (vert), analogy (bleu), counter (rouge).">
      <div className="arg-graph">
        <div className="arg-graph-bar">
          <div className="arg-legend">
            <span><span className="dot" style={{ background: 'var(--accent)' }} />Root</span>
            <span><span className="dot" style={{ background: 'var(--warn)' }} />Premise</span>
            <span><span className="dot" style={{ background: 'var(--ok)' }} />Evidence</span>
            <span><span className="dot" style={{ background: 'var(--info)' }} />Analogy</span>
            <span><span className="dot" style={{ background: 'var(--bad)' }} />Counter</span>
          </div>
          <button className="graph-btn" onClick={() => cyRef.current?.fit(null, 36)}>Recentrer</button>
        </div>
        <div className="arg-graph-cy" ref={ref} />
      </div>
    </VSection>
  );
}
