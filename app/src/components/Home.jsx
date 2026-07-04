import React, { useMemo } from 'react';
import { Gavel, Flame, Search, Zap, ChevronRight, Filter, Vote } from 'lucide-react';
import { getDebates, TATE_CORPUS, globalQuoteIndex, corpusTotals, getElectionCandidates } from '../corpus.js';

function QuoteResult({ q, navigate }) {
  const go = () => navigate(q.sourceType === 'video' ? { view: 'video', id: q.sourceId } : { view: 'debate', id: q.sourceId });
  return (
    <div className="qresult" onClick={go}>
      <div className="qresult-text">« {q.text.length > 220 ? q.text.slice(0, 217) + '…' : q.text} »</div>
      <div className="qresult-src">
        <span className="qresult-kind">{q.sourceType === 'video' ? 'Vidéo Tate' : 'Débat'}</span>
        <span>{q.sourceTitle}</span>
        {q.author && <span>— {q.author}</span>}
        {q.power ? <span className="qresult-power">⚡ {q.power}/10</span> : null}
      </div>
    </div>
  );
}

function RowItem({ num, title, thesis, meta, onClick }) {
  return (
    <div className="row-item" onClick={onClick}>
      <div className="row-num">{String(num).padStart(2, '0')}</div>
      <div className="row-body">
        <h3 className="row-title">{title}</h3>
        {thesis && <p className="row-thesis">{thesis}</p>}
        {meta && <div className="row-meta">{meta.map((m, i) => <span key={i}>{m}</span>)}</div>}
      </div>
      <ChevronRight className="icon row-arrow" />
    </div>
  );
}

export function Section({ icon: Icon, title, count, children }) {
  return (
    <div className="section">
      <div className="section-head">
        <div className="section-title">{Icon && <Icon className="icon-sm" />}{title}</div>
        {count != null && <div className="section-count">{count}</div>}
      </div>
      {children}
    </div>
  );
}

export default function Home({ navigate, search }) {
  const filter = (search || '').toLowerCase().trim();
  const debates = getDebates();
  const totals = useMemo(corpusTotals, []);
  const quotes = useMemo(globalQuoteIndex, []);
  const candidates = getElectionCandidates();

  const fDebates = filter
    ? debates.filter(d => d.titre.toLowerCase().includes(filter) || d.these.toLowerCase().includes(filter)
        || (d.faits_cles || []).some(f => f.toLowerCase().includes(filter)))
    : debates;
  const fVideos = filter
    ? TATE_CORPUS.filter(t => t.title.toLowerCase().includes(filter) || t.theme.toLowerCase().includes(filter) || t.thesis.toLowerCase().includes(filter))
    : TATE_CORPUS;
  const fQuotes = filter
    ? quotes.filter(q => q.text.toLowerCase().includes(filter)
        || q.tags.some(t => (t || '').toLowerCase().includes(filter))
        || (q.device || '').toLowerCase().includes(filter)).slice(0, 12)
    : [];
  const topQuotes = useMemo(
    () => quotes.filter(q => q.power >= 8).sort((a, b) => b.power - a.power).slice(0, 6),
    [quotes]
  );

  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Corpus intellectuel</div>
        <h1>Débats, programmes, quotes, sophismes. Un seul endroit.</h1>
        <p>
          7 débats décomposés en cinq modes rhétoriques. 8 vidéos analysées en profondeur avec kit
          d'argumentation, sophismes et frameworks. La présidentielle 2027 passée au crible : thèses,
          contre-thèses, données bidon et meilleures idées de chaque camp.
        </p>
        <div className="hero-stats">
          <div className="hstat"><div className="hstat-n">{debates.length}</div><div className="hstat-l">débats</div></div>
          <div className="hstat"><div className="hstat-n">{TATE_CORPUS.length}</div><div className="hstat-l">vidéos</div></div>
          <div className="hstat"><div className="hstat-n">{candidates.length}</div><div className="hstat-l">programmes 2027</div></div>
          <div className="hstat"><div className="hstat-n">{totals.quotes}</div><div className="hstat-l">quotes</div></div>
          <div className="hstat"><div className="hstat-n">{totals.fallacies}</div><div className="hstat-l">sophismes</div></div>
          <div className="hstat"><div className="hstat-n">{totals.stats}</div><div className="hstat-l">data points</div></div>
        </div>
      </div>

      {fQuotes.length > 0 && (
        <Section icon={Search} title={`Quotes trouvées pour « ${filter} »`} count={fQuotes.length}>
          <div className="qresults">{fQuotes.map((q, i) => <QuoteResult key={i} q={q} navigate={navigate} />)}</div>
        </Section>
      )}

      {candidates.length > 0 && !filter && (
        <Section icon={Vote} title="Présidentielle 2027 — programmes analysés" count={candidates.length}>
          <div className="row-list">
            <RowItem num={1} title="Tous les programmes, de l'extrême droite à l'extrême gauche"
              thesis="Thèse et contre-thèse par candidat, propositions avec pros/cons et plausibilité, sophismes, données fausses, idées fortes."
              meta={[`${candidates.length} candidats`, 'spectre complet', 'vue consolidée']}
              onClick={() => navigate({ view: 'elections' })} />
          </div>
        </Section>
      )}

      <Section icon={Gavel} title="Débats" count={`${fDebates.length} / ${debates.length}`}>
        <div className="row-list">
          {fDebates.length ? fDebates.map((d, i) => (
            <RowItem key={d.id} num={i + 1} title={d.titre} thesis={d.these}
              meta={[`${d.sources_count} sources`, `${(d.faits_cles || []).length} chiffres clés`, d.pdf_path ? 'PDF' : null].filter(Boolean)}
              onClick={() => navigate({ view: 'debate', id: d.id })} />
          )) : <div className="empty"><div className="empty-title">Rien pour cette recherche.</div>Essaie un autre terme.</div>}
        </div>
      </Section>

      <Section icon={Flame} title="Corpus Andrew Tate — vidéos analysées" count={`${fVideos.length} / ${TATE_CORPUS.length}`}>
        <div className="row-list">
          {fVideos.map((t, i) => (
            <RowItem key={t.id} num={i + 1} title={t.title} thesis={t.thesis}
              meta={[t.theme, t.depth]} onClick={() => navigate({ view: 'video', id: t.id })} />
          ))}
        </div>
      </Section>

      {!filter && topQuotes.length > 0 && (
        <Section icon={Zap} title="Top quotes du corpus · power ≥ 8/10" count={topQuotes.length}>
          <div className="qresults">{topQuotes.map((q, i) => <QuoteResult key={i} q={q} navigate={navigate} />)}</div>
        </Section>
      )}
    </>
  );
}

export function TagFilterView({ tag, navigate }) {
  const quotes = globalQuoteIndex().filter(q => q.tags.some(t => (t || '').toLowerCase() === tag.toLowerCase()));
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Filtre par tag</div>
        <h1>« {tag} »</h1>
        <p>{quotes.length} quote{quotes.length > 1 ? 's' : ''} taguée{quotes.length > 1 ? 's' : ''} dans tout le corpus.</p>
        <div style={{ marginTop: 18 }}>
          <button className="btn" onClick={() => navigate({ view: 'home' })}>← Retour à l'accueil</button>
        </div>
      </div>
      <Section icon={Filter} title="Résultats" count={quotes.length}>
        <div className="qresults">
          {quotes.length ? quotes.map((q, i) => <QuoteResult key={i} q={q} navigate={navigate} />)
            : <div className="empty">Aucune quote pour ce tag.</div>}
        </div>
      </Section>
    </>
  );
}
