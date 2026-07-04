import React, { useState } from 'react';
import {
  Vote, Merge, Quote, AlertTriangle, Database, ShieldQuestion,
  Lightbulb, Users, ExternalLink, Landmark, Swords
} from 'lucide-react';
import { getElectionCandidates, getElectionConsolidated, BLOC_LABELS } from '../corpus.js';
import { Fallacies, VSection } from './RichSections.jsx';
import { Section } from './Home.jsx';

const initials = (name) => name.split(/[\s-]+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
const plausColor = (p) => p >= 7 ? 'var(--ok)' : p >= 4 ? 'var(--warn)' : 'var(--bad)';

function Plausibility({ value }) {
  return (
    <span className="plaus" title={`Plausibilité ${value}/10`}>
      <span className="plaus-bar"><span className="plaus-fill" style={{ width: `${value * 10}%`, background: plausColor(value) }} /></span>
      {value}/10
    </span>
  );
}

/* ==================== VUE D'ENSEMBLE ==================== */
export function ElectionsOverview({ navigate, electionsReady }) {
  const candidates = getElectionCandidates();

  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">Présidentielle 2027</div>
        <h1>Tous les programmes, au scalpel.</h1>
        <p>
          De l'extrême droite à l'extrême gauche : thèse et contre-thèse de chaque candidat, propositions avec
          pros/cons et plausibilité réelle (Constitution, droit UE, budget), sophismes, données fausses ou
          infondées — et les idées fortes de chaque camp, parce qu'il y en a partout.
        </p>
        {candidates.length > 0 && (
          <>
            <div className="spectrum">
              <div className="spectrum-axis" />
              {candidates.map(c => (
                <div key={c.id} className="spectrum-cand"
                  style={{ left: `${((c.spectrum + 10) / 20) * 100}%` }}
                  onClick={() => navigate({ view: 'candidate', id: c.id })}
                  title={`${c.name} — ${c.party}`}>
                  <div className="dot" style={{ background: c.color || 'var(--ink-4)' }}>{initials(c.name)}</div>
                  <div className="lbl">{c.name.split(' ').slice(-1)[0]}</div>
                </div>
              ))}
            </div>
            <div className="spectrum-ends"><span>← Extrême gauche</span><span>Extrême droite →</span></div>
          </>
        )}
      </div>

      {!candidates.length ? (
        <div className="empty">
          <div className="empty-title">{electionsReady ? 'Aucun programme chargé.' : 'Analyse des programmes en cours…'}</div>
          Les agents de recherche compilent les programmes (web + fact-checkers). Recharge dans quelques minutes.
        </div>
      ) : (
        <>
          <Section icon={Merge} title="Vue consolidée" count="meilleures idées + implémentations">
            <div className="row-list">
              <div className="row-item" onClick={() => navigate({ view: 'elections-consolidated' })}>
                <div className="row-num">★</div>
                <div className="row-body">
                  <h3 className="row-title">Les meilleures idées de chaque camp, et comment les implémenter vraiment</h3>
                  <p className="row-thesis">Synthèse transversale : idées solides tous bords confondus, pros/cons, étapes d'implémentation plausibles, obstacles juridiques et budgétaires, patterns de sophismes récurrents.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section icon={Vote} title="Candidats & programmes" count={candidates.length}>
            <div className="cand-grid">
              {candidates.map(c => (
                <div key={c.id} className="cand-card" style={{ borderTopColor: c.color || 'var(--line-2)' }}
                  onClick={() => navigate({ view: 'candidate', id: c.id })}>
                  <div className="cand-head">
                    <div className="cand-avatar" style={{ background: c.color || 'var(--ink-4)' }}>{initials(c.name)}</div>
                    <div>
                      <div className="cand-name">{c.name}</div>
                      <div className="cand-party">{c.party} · {BLOC_LABELS[c.bloc] || c.bloc}</div>
                    </div>
                    <div className="cand-status" data-s={c.status || 'incertain'}>{c.status || '?'}</div>
                  </div>
                  <div className="cand-thesis">{c.thesis}</div>
                  <div className="cand-meta">
                    <span>{(c.proposals || []).length} propositions</span>
                    <span>{(c.fallacies || []).length} sophismes</span>
                    <span>{(c.data_issues || []).length} data douteuses</span>
                    <span>{(c.strong_ideas || []).length} idées fortes</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}
    </>
  );
}

/* ==================== FICHE CANDIDAT ==================== */
export function CandidateView({ id, navigate }) {
  const c = getElectionCandidates().find(x => x.id === id);
  const [domainFilter, setDomainFilter] = useState(null);
  if (!c) return <div className="empty"><div className="empty-title">Programme introuvable ou en cours d'analyse.</div></div>;

  const domains = [...new Set((c.proposals || []).map(p => p.domain).filter(Boolean))];
  const props = domainFilter ? (c.proposals || []).filter(p => p.domain === domainFilter) : (c.proposals || []);

  return (
    <>
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'elections' })}>Présidentielle 2027</span>
          <span className="sep">›</span>
          <span className="current">{c.name}</span>
        </div>
        <div className="title-wrap">
          <h1 className="page-title">
            <span className="cand-avatar" style={{ background: c.color || 'var(--ink-4)', width: 40, height: 40, fontSize: 13 }}>{initials(c.name)}</span>
            {c.name}
          </h1>
          <p className="page-subtitle">{c.party} · {BLOC_LABELS[c.bloc] || c.bloc} · spectre {c.spectrum > 0 ? '+' : ''}{c.spectrum}</p>
        </div>
        <div className="meta-row">
          <span className="chip"><strong>{c.status}</strong>{c.status_note ? ` — ${c.status_note}` : ''}</span>
          {c.electorate && <span className="chip"><Users className="icon-sm" />{c.electorate}</span>}
        </div>
      </div>

      <div className="content">
        <div className="content-wrap">

          <div className="duel">
            <div className="duel-side" data-side="these">
              <div className="duel-label"><Landmark className="icon-sm" /> Sa thèse</div>
              <div className="duel-text">{c.thesis}</div>
            </div>
            <div className="duel-side" data-side="contre">
              <div className="duel-label"><Swords className="icon-sm" /> La contre-thèse (steelman adverse)</div>
              <div className="duel-text">{c.counter_thesis}</div>
            </div>
          </div>

          {c.program_pillars?.length > 0 && (
            <VSection id="pillars" icon={Landmark} title="Piliers du programme" meta={`${c.program_pillars.length}`}>
              <div className="takeaways">
                {c.program_pillars.map((p, i) => (
                  <div className="takeaway" key={i}>
                    <span className="takeaway-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="takeaway-text">{p}</span>
                  </div>
                ))}
              </div>
            </VSection>
          )}

          {props.length > 0 && (
            <VSection id="proposals" icon={Vote} title="Propositions" meta={`${props.length} mesures analysées`}
              desc="Chaque mesure : le détail, les pros et les cons honnêtes, la plausibilité réelle (Constitution, droit UE, budget) et le chiffrage sourcé.">
              {domains.length > 1 && (
                <div className="vd-tabs" style={{ position: 'static', marginBottom: 16 }}>
                  <button className={`vd-tab ${!domainFilter ? 'active' : ''}`} onClick={() => setDomainFilter(null)}>Toutes</button>
                  {domains.map(d => (
                    <button key={d} className={`vd-tab ${domainFilter === d ? 'active' : ''}`} onClick={() => setDomainFilter(d)}>{d}</button>
                  ))}
                </div>
              )}
              <div className="props">
                {props.map((p, i) => (
                  <div className="prop" key={i}>
                    <div className="prop-head">
                      <div className="prop-title">{p.title}</div>
                      {p.domain && <span className="prop-domain">{p.domain}</span>}
                      {p.plausibility != null && <Plausibility value={p.plausibility} />}
                    </div>
                    <div className="prop-body">
                      <div className="prop-detail">{p.detail}</div>
                      <div className="proscons">
                        <div className="pc" data-k="pros">
                          <div className="pc-label">Pros</div>
                          <ul>{(p.pros || []).map((x, j) => <li key={j}>{x}</li>)}</ul>
                        </div>
                        <div className="pc" data-k="cons">
                          <div className="pc-label">Cons</div>
                          <ul>{(p.cons || []).map((x, j) => <li key={j}>{x}</li>)}</ul>
                        </div>
                      </div>
                      <div className="prop-foot">
                        {p.plausibility_note && <span><strong>Faisabilité :</strong> {p.plausibility_note}</span>}
                        {p.cost_estimate && <span><strong>Chiffrage :</strong> {p.cost_estimate}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </VSection>
          )}

          <Fallacies items={c.fallacies} title="Raisonnements fallacieux" />

          {c.data_issues?.length > 0 && (
            <VSection id="data-issues" icon={Database} title="Données fausses ou infondées" meta={`${c.data_issues.length} claims vérifiés`}
              desc="Chiffres avancés vs réalité, avec source fact-checker ou organisme statistique.">
              {c.data_issues.map((d, i) => (
                <div className="dataissue" key={i}>
                  <span className="dataissue-problem">{d.problem}</span>
                  <div className="dataissue-claim">« {d.claim} »</div>
                  <div className="dataissue-reality"><strong>Réalité :</strong> {d.reality}</div>
                  {d.source && <div className="dataissue-src">Source : {d.source}</div>}
                </div>
              ))}
            </VSection>
          )}

          {c.problematic_arguments?.length > 0 && (
            <VSection id="problematic" icon={ShieldQuestion} title="Arguments problématiques" meta={`${c.problematic_arguments.length}`}>
              {c.problematic_arguments.map((a, i) => (
                <div className="fallacy" data-sev="medium" key={i} style={{ marginBottom: 12, maxWidth: 1100 }}>
                  <div className="fallacy-claim">« {a.argument} »</div>
                  <div className="fblock"><span className="fblock-label">Pourquoi c'est problématique</span>
                    <div className="fblock-text">{a.why_problematic}</div></div>
                  {a.what_it_hides && (
                    <div className="fblock" data-kind="nuance"><span className="fblock-label">Ce que ça masque</span>
                      <div className="fblock-text">{a.what_it_hides}</div></div>
                  )}
                </div>
              ))}
            </VSection>
          )}

          {c.strong_ideas?.length > 0 && (
            <VSection id="strong" icon={Lightbulb} title="Idées fortes — à retenir même d'un autre bord" meta={`${c.strong_ideas.length}`}>
              {c.strong_ideas.map((s, i) => (
                <div className="strong-idea" key={i}>
                  <div className="strong-idea-title">{s.idea}</div>
                  <div className="strong-idea-body"><strong>Pourquoi ça tient :</strong> {s.why_strong}</div>
                  {s.adoptable_by && <div className="strong-idea-body" style={{ marginTop: 6 }}><strong>Récupérable par :</strong> {s.adoptable_by}</div>}
                </div>
              ))}
            </VSection>
          )}

          {c.key_quotes?.length > 0 && (
            <VSection id="quotes" icon={Quote} title="Citations clés" meta={`${c.key_quotes.length}`}>
              <div className="quotes">
                {c.key_quotes.map((q, i) => (
                  <div className="quote-card" key={i}>
                    <div className="quote-text">« {q.text} »</div>
                    <div className="quote-context">{[q.context, q.source].filter(Boolean).join(' — ')}</div>
                  </div>
                ))}
              </div>
            </VSection>
          )}

          {c.sources?.length > 0 && (
            <VSection id="sources" icon={ExternalLink} title="Sources consultées" meta={`${c.sources.length}`}>
              <ul className="facts">
                {c.sources.map((s, i) => <li key={i} data-num={String(i + 1).padStart(2, '0')} style={{ wordBreak: 'break-all' }}>{s}</li>)}
              </ul>
            </VSection>
          )}
        </div>
      </div>
    </>
  );
}

/* ==================== VUE CONSOLIDÉE ==================== */
export function ConsolidatedView({ navigate }) {
  const conso = getElectionConsolidated();
  const candidates = getElectionCandidates();
  const byId = Object.fromEntries(candidates.map(c => [c.id, c]));

  return (
    <>
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'elections' })}>Présidentielle 2027</span>
          <span className="sep">›</span>
          <span className="current">Vue consolidée</span>
        </div>
        <div className="title-wrap">
          <h1 className="page-title"><Merge className="icon-lg" /> Les meilleures idées de chaque camp</h1>
          <p className="page-subtitle">
            Synthèse transversale : ce qui tient la route tous bords confondus, avec implémentation plausible,
            pros/cons, obstacles — et les patterns de sophismes que tout le monde utilise.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="content-wrap">
          {!conso ? (
            <div className="empty">
              <div className="empty-title">Consolidation en cours…</div>
              La synthèse est générée après l'analyse de tous les programmes. Reviens dans quelques minutes.
            </div>
          ) : (
            <>
              {conso.spectrum_summary && <div className="thesis-block">{conso.spectrum_summary}</div>}

              {conso.best_ideas?.length > 0 && (
                <VSection id="best" icon={Lightbulb} title="Meilleures idées, tous camps confondus" meta={`${conso.best_ideas.length}`}>
                  {conso.best_ideas.map((b, i) => (
                    <div className="strong-idea" key={i}>
                      <div className="strong-idea-title">{String(i + 1).padStart(2, '0')} · {b.idea}
                        {b.plausibility != null && <span style={{ marginLeft: 10 }}><Plausibility value={b.plausibility} /></span>}
                      </div>
                      <div className="strong-idea-body">{b.why_good}</div>
                      <div className="proscons" style={{ marginTop: 12 }}>
                        <div className="pc" data-k="pros"><div className="pc-label">Pros</div><ul>{(b.pros || []).map((x, j) => <li key={j}>{x}</li>)}</ul></div>
                        <div className="pc" data-k="cons"><div className="pc-label">Cons</div><ul>{(b.cons || []).map((x, j) => <li key={j}>{x}</li>)}</ul></div>
                      </div>
                      {b.implementation && (
                        <div className="idea-impl">
                          <span className="idea-impl-label">Implémentation plausible</span>
                          <ol className="fw-steps">{(b.implementation.steps || []).map((s, j) => <li key={j}>{s}</li>)}</ol>
                          <div className="prop-foot" style={{ borderTop: 'none', paddingTop: 6 }}>
                            {b.implementation.cost && <span><strong>Coût :</strong> {b.implementation.cost}</span>}
                            {b.implementation.timeline && <span><strong>Délai :</strong> {b.implementation.timeline}</span>}
                            {b.implementation.obstacles?.length ? <span><strong>Obstacles :</strong> {b.implementation.obstacles.join(' · ')}</span> : null}
                          </div>
                        </div>
                      )}
                      <div className="idea-from">
                        {(b.from || []).map(fid => byId[fid] ? (
                          <button key={fid} className="pill tag" style={{ background: byId[fid].color, color: '#fff' }}
                            onClick={() => navigate({ view: 'candidate', id: fid })}>{byId[fid].name}</button>
                        ) : <span key={fid} className="pill">{fid}</span>)}
                        {b.bloc_origin && <span className="pill">{BLOC_LABELS[b.bloc_origin] || b.bloc_origin}</span>}
                      </div>
                    </div>
                  ))}
                </VSection>
              )}

              {conso.cross_analysis?.length > 0 && (
                <VSection id="themes" icon={Vote} title="Analyse par thème" meta={`${conso.cross_analysis.length} thèmes`}>
                  {conso.cross_analysis.map((t, i) => (
                    <div className="prop" key={i} style={{ marginBottom: 14, maxWidth: 1100 }}>
                      <div className="prop-head"><div className="prop-title">{t.theme}</div></div>
                      <div className="prop-body">
                        <div className="proscons">
                          <div className="pc" data-k="pros"><div className="pc-label">Convergences</div><div style={{ fontSize: 12.5, lineHeight: 1.55 }}>{t.convergences}</div></div>
                          <div className="pc" data-k="cons"><div className="pc-label">Divergences</div><div style={{ fontSize: 12.5, lineHeight: 1.55 }}>{t.divergences}</div></div>
                        </div>
                        {t.fallacy_watch && (
                          <div className="fw-warning" style={{ marginBottom: 10 }}>
                            <AlertTriangle className="icon-sm" style={{ verticalAlign: -2, marginRight: 6 }} />
                            <strong>Sophismes des deux camps :</strong> {t.fallacy_watch}
                          </div>
                        )}
                        {t.verdict && <div className="kit-ex">{t.verdict}</div>}
                      </div>
                    </div>
                  ))}
                </VSection>
              )}

              {conso.fallacy_patterns?.length > 0 && (
                <VSection id="patterns" icon={AlertTriangle} title="Patterns de sophismes transversaux" meta={`${conso.fallacy_patterns.length}`}>
                  <div className="cards-2">
                    {conso.fallacy_patterns.map((p, i) => (
                      <div className="mini-card" key={i}>
                        <div className="mini-card-title">{p.pattern}</div>
                        {p.example && <div className="mini-card-ex">{p.example}</div>}
                        {p.who_uses_it?.length ? (
                          <div className="idea-from">
                            {p.who_uses_it.map(fid => byId[fid] ? (
                              <button key={fid} className="pill tag" onClick={() => navigate({ view: 'candidate', id: fid })}>{byId[fid].name}</button>
                            ) : <span key={fid} className="pill">{fid}</span>)}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </VSection>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
