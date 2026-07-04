import React, { useState, useEffect } from 'react';
import { User, ExternalLink, FileText, Printer } from 'lucide-react';
import { TATE_CORPUS, videoRegistry } from '../corpus.js';
import {
  Highlight, Takeaways, Chapters, QuoteCards, ArgumentKit, Fallacies,
  StatCards, Comparisons, Devices, Analogies, Frameworks, Drills, Related, ArgGraph
} from './RichSections.jsx';

function SectionTabs({ counts }) {
  const [active, setActive] = useState(null);
  const tabs = [
    ['takeaways', 'À retenir'], ['chapters', 'Chapitres'], ['tree', 'Arbre'],
    ['quotes', 'Quotes'], ['kit', 'Kit argument.'], ['fallacies', 'Sophismes'],
    ['stats', 'Data'], ['comparisons', 'Contrastes'], ['devices', 'Procédés'],
    ['analogies', 'Analogies'], ['frameworks', 'Frameworks'], ['drills', 'Drills'], ['related', 'Voir aussi']
  ].filter(([id]) => counts[id]);

  useEffect(() => {
    const scroller = document.querySelector('.main-scroll');
    const sections = tabs.map(([id]) => document.getElementById(`s-${id}`)).filter(Boolean);
    if (!scroller || !sections.length || typeof IntersectionObserver !== 'function') return;
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis.length) setActive(vis[0].target.id.replace('s-', ''));
    }, { root: scroller, rootMargin: '-70px 0px -55% 0px' });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [counts]);   // eslint-disable-line

  const goTo = (id) => {
    const el = document.getElementById(`s-${id}`);
    const scroller = document.querySelector('.main-scroll');
    if (el && scroller) scroller.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  return (
    <nav className="vd-tabs">
      {tabs.map(([id, label]) => (
        <button key={id} className={`vd-tab ${active === id ? 'active' : ''}`} onClick={() => goTo(id)}>
          {label}<span className="vd-tab-count">{counts[id]}</span>
        </button>
      ))}
    </nav>
  );
}

function PosterView({ base, c }) {
  const topQuotes = (c.quotes || []).slice().sort((a, b) => (b.power_score || 0) - (a.power_score || 0)).slice(0, 5);
  const topStats = (c.stats || []).slice(0, 6);
  const maxVal = topStats.reduce((m, s) => Math.max(m, parseFloat(String(s.number).replace(/[^0-9.]/g, '')) || 0), 1);
  const topFallacies = (c.fallacies || []).filter(f => f.severity === 'high').slice(0, 2);
  const bestFw = (c.frameworks || [])[0];
  const closure = (c.chapters || []).slice(-1)[0]?.key_quote;

  return (
    <div className="poster">
      <div className="poster-head">
        <div className="poster-eyebrow">{c.speaker} · {c.format} · {c.word_count?.toLocaleString('fr-FR')} mots</div>
        <div className="poster-hook">{c.hook || base.title}</div>
        <div className="vd-thesis"><span className="vd-thesis-label">Thèse centrale</span>{c.thesis || base.thesis}</div>
      </div>

      {topStats.length > 0 && (
        <div className="psection">
          <div className="psection-label">Data — {topStats.length} chiffres à retenir</div>
          <div className="pstats">
            {topStats.map((s, i) => {
              const n = parseFloat(String(s.number).replace(/[^0-9.]/g, '')) || 0;
              return (
                <div className="pstat" key={i}>
                  <div className="pstat-head"><div className="pstat-n">{s.number}</div><div className="pstat-l">{s.label}</div></div>
                  <div className="pstat-bar"><div className="pstat-fill" style={{ width: `${Math.min(100, (n / maxVal) * 100)}%` }} /></div>
                  {s.source && <div className="pstat-s">{s.source}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {topQuotes.length > 0 && (
        <div className="psection">
          <div className="psection-label">Top {topQuotes.length} quotes par puissance</div>
          {topQuotes.map((q, i) => (
            <div className="pquote" key={i}>
              <div className="pquote-power">{q.power_score || 0}</div>
              <div>
                <div className="pquote-text">« <Highlight text={q.text} words={q.highlight_words} /> »</div>
                <div className="pquote-meta">{[q.rhetorical_device, ...(q.tags || [])].filter(Boolean).join(' · ')}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {topFallacies.length > 0 && (
        <div className="psection">
          <div className="psection-label">Sophismes à ne pas reprendre tels quels</div>
          {topFallacies.map((f, i) => (
            <div className="dataissue" key={i} style={{ maxWidth: 'none' }}>
              <span className="dataissue-problem">{f.fallacy_type}</span>
              <div className="dataissue-claim">« {f.original_claim} »</div>
              <div className="dataissue-reality"><strong>Nuance :</strong> {f.nuance}</div>
            </div>
          ))}
        </div>
      )}

      {bestFw && (
        <div className="psection">
          <div className="psection-label">Framework à appliquer</div>
          <div className="framework" style={{ boxShadow: 'none', border: '1px solid var(--line)' }}>
            <div className="framework-name">{bestFw.name}</div>
            {bestFw.when_to_use && <div className="framework-when">Quand : {bestFw.when_to_use}</div>}
            <ol className="fw-steps">{(bestFw.steps || []).slice(0, 5).map((s, j) => <li key={j}>{s}</li>)}</ol>
          </div>
        </div>
      )}

      {closure && (
        <div className="poster-closure">
          <div className="poster-closure-label">Clôture</div>
          <div className="poster-closure-text">« {closure} »</div>
        </div>
      )}

      <div className="poster-footer">
        <span>{(c.key_takeaways || []).length} take-aways · {(c.quotes || []).length} quotes · {(c.fallacies || []).length} sophismes · {(c.frameworks || []).length} frameworks</span>
        <button className="btn" onClick={() => window.print()}><Printer className="icon-sm" /> Imprimer</button>
      </div>
    </div>
  );
}

export default function VideoView({ id, navigate }) {
  const base = TATE_CORPUS.find(t => t.id === id);
  const c = videoRegistry()[id];
  const [display, setDisplay] = useState('rich');
  useEffect(() => setDisplay('rich'), [id]);

  if (!base) return <div className="empty"><div className="empty-title">Vidéo introuvable</div></div>;
  const onTag = (t) => navigate({ view: 'tag', id: t });

  const counts = c ? {
    takeaways: (c.key_takeaways || []).length,
    chapters: (c.chapters || []).length,
    tree: c.argument_tree ? 1 : 0,
    quotes: (c.quotes || []).length,
    kit: ((c.argumentation_kit?.how_to_defend || []).length + (c.argumentation_kit?.if_asked || []).length),
    fallacies: (c.fallacies || []).length,
    stats: (c.stats || []).length,
    comparisons: (c.comparisons || []).length,
    devices: (c.devices || []).length,
    analogies: (c.analogies || []).length,
    frameworks: (c.frameworks || []).length,
    drills: (c.drills || []).length,
    related: c.related ? 1 : 0
  } : {};

  return (
    <>
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'home' })}>Accueil</span>
          <span className="sep">›</span>
          <span className="crumb-link" onClick={() => navigate({ view: 'tate' })}>Corpus Tate</span>
          <span className="sep">›</span>
          <span className="current">{base.title}</span>
        </div>
      </div>

      <div className="content">
        <div className="content-wrap">
          <div className="vd-hero">
            {c && (
              <div className="vd-tag">
                <User className="icon-sm" />
                {c.speaker} · {c.format} · {c.word_count?.toLocaleString('fr-FR')} mots · {Math.max(1, Math.round((c.word_count || 0) / 250))} min
              </div>
            )}
            <h1 className="vd-hook">{c?.hook || base.title}</h1>
            <div className="vd-thesis">
              <span className="vd-thesis-label">Thèse centrale</span>
              {c?.thesis || base.thesis}
            </div>
            <div className="vd-actions">
              <div className="toggle">
                <button className={display === 'rich' ? 'active' : ''} onClick={() => setDisplay('rich')}>Vue complète</button>
                <button className={display === 'poster' ? 'active' : ''} onClick={() => setDisplay('poster')}>Poster / Résumé</button>
              </div>
              <a className="btn" href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer"><ExternalLink className="icon-sm" /> Vidéo YouTube</a>
              <a className="btn" href={`/fiches/andrew-tate/fiche-${base.slug}.md`} target="_blank" rel="noreferrer"><FileText className="icon-sm" /> Fiche .md</a>
            </div>
          </div>

          {!c && <div className="empty"><div className="empty-title">Analyse en cours de chargement…</div></div>}

          {c && display === 'poster' && <PosterView base={base} c={c} />}

          {c && display === 'rich' && (
            <>
              <SectionTabs counts={counts} />
              <Takeaways items={c.key_takeaways} />
              <Chapters items={c.chapters} />
              {c.argument_tree?.root && <ArgGraph root={c.argument_tree.root} />}
              <QuoteCards items={c.quotes} onTag={onTag} />
              <ArgumentKit kit={c.argumentation_kit} />
              <Fallacies items={c.fallacies} />
              <StatCards items={c.stats} />
              <Comparisons items={c.comparisons} />
              <Devices items={c.devices} />
              <Analogies items={c.analogies} />
              <Frameworks items={c.frameworks} />
              <Drills items={c.drills} />
              <Related related={c.related} currentId={id} navigate={navigate} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export function TateHome({ navigate }) {
  return (
    <>
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'home' })}>Accueil</span>
          <span className="sep">›</span>
          <span className="current">Corpus Andrew Tate</span>
        </div>
        <div className="title-wrap">
          <h1 className="page-title">Andrew Tate — Corpus d'étude</h1>
          <p className="page-subtitle">
            Huit vidéos analysées : résumé exécutif, chapitres, arbre d'argumentation interactif, quotes
            classées, kit d'argumentation, sophismes avec steelman, frameworks et drills.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="row-list">
          {TATE_CORPUS.map((t, i) => (
            <div className="row-item" key={t.id} onClick={() => navigate({ view: 'video', id: t.id })}>
              <div className="row-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="row-body">
                <h3 className="row-title">{t.title}</h3>
                <p className="row-thesis">{t.thesis}</p>
                <div className="row-meta"><span>{t.theme}</span><span>{t.depth}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
