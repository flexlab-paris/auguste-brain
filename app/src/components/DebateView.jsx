import React, { useState } from 'react';
import {
  Book, BarChart3, Quote, FileDown, Layers, ChevronRight, Sparkles, Download
} from 'lucide-react';
import { getDebates, getCitations, getPosterData, getFichesContent, debateRegistry, modeColor, modeLabel } from '../corpus.js';
import {
  Takeaways, QuoteCards, ArgumentKit, Fallacies, StatCards, Comparisons,
  Devices, Analogies, Frameworks, Drills, Related, ArgGraph, VSection
} from './RichSections.jsx';

function ModeAccordion({ debateId, modes }) {
  const [open, setOpen] = useState(null);
  const fiches = getFichesContent()[debateId] || {};
  return (
    <div className="modes">
      {modes.map((m, i) => {
        const content = fiches[m];
        const isOpen = open === m;
        return (
          <div className={`mode ${isOpen ? 'open' : ''}`} key={m}>
            <button className="mode-head" onClick={() => setOpen(isOpen ? null : m)}>
              <span className="mode-idx">M{i + 1}</span>
              <span className="mode-dot" style={{ background: modeColor(m) }} />
              <span className="mode-title">{modeLabel(m)}</span>
              <ChevronRight className="icon-sm mode-caret" />
            </button>
            <div className="mode-body">
              {content ? (
                <>
                  {content.these && <blockquote>{content.these}</blockquote>}
                  {content.stats?.length ? (<><h4>Points</h4><ul>{content.stats.map((s, j) => <li key={j}>{s}</li>)}</ul></>) : null}
                  {content.cloture && <p><em>{content.cloture}</em></p>}
                </>
              ) : <p>Contenu en préparation.</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DebateView({ id, navigate }) {
  const d = getDebates().find(x => x.id === id);
  const [tab, setTab] = useState('fiche');
  if (!d) return <div className="empty"><div className="empty-title">Débat introuvable</div></div>;

  const cits = getCitations().filter(c => c.debat === id);
  const poster = getPosterData().find(p => p.id === id);
  const rich = debateRegistry()[id];
  const onTag = (t) => navigate({ view: 'tag', id: t });

  return (
    <>
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'home' })}>Débats</span>
          <span className="sep">›</span>
          <span className="current">{d.titre}</span>
        </div>
        <div className="title-wrap">
          <h1 className="page-title">{d.titre}</h1>
          <p className="page-subtitle">{d.these}</p>
        </div>
        <div className="meta-row">
          <span className="chip"><Book className="icon-sm" /><strong>{d.sources_count}</strong> sources</span>
          <span className="chip"><BarChart3 className="icon-sm" /><strong>{(d.faits_cles || []).length}</strong> chiffres</span>
          <span className="chip"><Quote className="icon-sm" /><strong>{cits.length + ((rich?.quotes) || []).length}</strong> citations</span>
          {d.pdf_path && <span className="chip"><FileDown className="icon-sm" />PDF</span>}
        </div>
        <div className="subtabs">
          <button className={`subtab ${tab === 'fiche' ? 'active' : ''}`} onClick={() => setTab('fiche')}>
            Fiche complète {rich && <span className="subtab-count">deep</span>}
          </button>
          <button className={`subtab ${tab === 'citations' ? 'active' : ''}`} onClick={() => setTab('citations')}>
            Citations <span className="subtab-count">{cits.length}</span>
          </button>
          <button className={`subtab ${tab === 'poster' ? 'active' : ''}`} onClick={() => setTab('poster')}>
            Poster <span className="subtab-count">{poster ? 1 : 0}</span>
          </button>
        </div>
      </div>

      <div className="content">
        <div className="content-wrap">
          {tab === 'fiche' && (
            <>
              <div className="thesis-block">{d.these}</div>

              <div className="fsection">
                <div className="fsection-label"><BarChart3 className="icon-sm" /> Chiffres clés · {(d.faits_cles || []).length} data points</div>
                <ul className="facts">
                  {(d.faits_cles || []).map((f, i) => <li key={i} data-num={String(i + 1).padStart(2, '0')}>{f}</li>)}
                </ul>
              </div>

              <div className="fsection">
                <div className="fsection-label"><Layers className="icon-sm" /> Décomposition en 5 modes rhétoriques</div>
                <ModeAccordion debateId={id} modes={d.modes || []} />
              </div>

              {rich && (
                <>
                  {rich.hook && (
                    <VSection id="hook" icon={Sparkles} title="Hook">
                      <div className="vd-hook" style={{ fontSize: 'clamp(19px,2.6vw,24px)' }}>{rich.hook}</div>
                    </VSection>
                  )}
                  <Takeaways items={rich.key_takeaways} />
                  {rich.argument_tree?.root && <ArgGraph root={rich.argument_tree.root} />}
                  <QuoteCards items={rich.quotes} onTag={onTag} />
                  <ArgumentKit kit={rich.argumentation_kit} />
                  <Fallacies items={rich.fallacies} />
                  <StatCards items={rich.stats} />
                  <Comparisons items={rich.comparisons} />
                  <Devices items={rich.devices} />
                  <Analogies items={rich.analogies} />
                  <Frameworks items={rich.frameworks} />
                  <Drills items={rich.drills} />
                  <Related related={rich.related} currentId={id} navigate={navigate} />
                </>
              )}

              {d.pdf_path && (
                <div className="fsection">
                  <div className="fsection-label"><FileDown className="icon-sm" /> Fiche complète</div>
                  <a href={`/${d.pdf_path}`} target="_blank" rel="noreferrer" className="pdf-btn">
                    <Download className="icon-sm" /> Télécharger le PDF
                  </a>
                </div>
              )}
            </>
          )}

          {tab === 'citations' && (
            <div className="cits">
              {cits.length ? cits.map((c, i) => (
                <div className="cit" key={i}>
                  <div className="cit-mark" style={{ background: modeColor(c.mode) }} />
                  <div>
                    <div className="cit-quote">« {c.quote} »</div>
                    <div className="cit-attr">
                      <span className="cit-author">{c.auteur}</span>
                      {c.source && <span style={{ fontStyle: 'italic' }}>{c.source}</span>}
                      <span className="cit-tag">{modeLabel(c.mode)}</span>
                    </div>
                  </div>
                </div>
              )) : <div className="empty">Aucune citation dédiée — voir les quotes de la fiche complète.</div>}
            </div>
          )}

          {tab === 'poster' && (
            poster ? (
              <div className="poster">
                <div className="poster-head">
                  <div className="poster-eyebrow">Poster · {poster.title}</div>
                  <div className="poster-hook">{poster.title}</div>
                  <div className="vd-thesis"><span className="vd-thesis-label">Thèse</span>{poster.thesis}</div>
                </div>
                <div className="psection">
                  <div className="psection-label">Chiffres</div>
                  <div className="pstats">
                    {(poster.stats || []).map((s, i) => (
                      <div className="pstat" key={i}>
                        <div className="pstat-head">
                          <div className="pstat-n">{s.number}</div>
                          <div className="pstat-l">{s.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="poster-closure">
                  <div className="poster-closure-label">Clôture</div>
                  <div className="poster-closure-text">« {poster.cloture} »</div>
                </div>
                <div className="poster-footer">
                  <span>{d.titre}</span>
                  <button className="btn" onClick={() => window.print()}>Imprimer</button>
                </div>
              </div>
            ) : <div className="empty">Pas de poster pour ce débat.</div>
          )}
        </div>
      </div>
    </>
  );
}
