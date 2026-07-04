import React from 'react';
import {
  Search, Home, Gavel, Flame, List, PlayCircle, Compass, Network,
  BookOpen, GraduationCap, Landmark, FlaskConical, Users, Scale, Cpu,
  ShieldAlert, MessageSquareQuote, FileText, Vote, LayoutDashboard, Merge
} from 'lucide-react';
import { TATE_CORPUS, getDebates, getElectionCandidates } from '../corpus.js';

const DEBATE_ICONS = {
  'taxe-zucman': Landmark,
  'science-abondance': FlaskConical,
  'masculinite-feminisme': Users,
  'droite-gauche': Scale,
  'course-ia': Cpu,
  'risques-existentiels': ShieldAlert,
  'rhetorique-verites-difficiles': MessageSquareQuote
};

export default function Sidebar({ route, navigate, search, setSearch, electionsReady, closeDrawer }) {
  const debates = getDebates();
  const candidates = electionsReady ? getElectionCandidates() : [];

  const go = (r) => { navigate(r); closeDrawer && closeDrawer(); };
  const is = (view, id) => route.view === view && (id === undefined || route.id === id);

  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <span className="brand-dot" />
        <div>
          <div className="sb-brand-name">Auguste Brain</div>
          <div className="sb-brand-meta">v5 · react · corpus rhétorique</div>
        </div>
      </div>

      <div className="sb-search">
        <Search className="icon-sm" />
        <input
          type="text"
          placeholder="Rechercher dans tout le corpus…"
          value={search}
          onChange={(e) => { setSearch(e.target.value); if (route.view !== 'home') navigate({ view: 'home' }); }}
        />
      </div>

      <nav className="sb-nav">
        <div className="sb-section">
          <div className="sb-section-label"><span><Home className="icon-sm" /> Accueil</span></div>
          <button className={`sb-item ${is('home') ? 'active' : ''}`} onClick={() => go({ view: 'home' })}>
            <LayoutDashboard className="icon-sm" />
            <span className="sb-item-text">Vue d'ensemble</span>
          </button>
        </div>

        <div className="sb-section">
          <div className="sb-section-label">
            <span><Vote className="icon-sm" /> Présidentielle 2027</span>
            <span className="sb-count">{candidates.length || '…'}</span>
          </div>
          <button className={`sb-item ${is('elections') ? 'active' : ''}`} onClick={() => go({ view: 'elections' })}>
            <List className="icon-sm" />
            <span className="sb-item-text">Tous les programmes</span>
          </button>
          <button className={`sb-item ${is('elections-consolidated') ? 'active' : ''}`} onClick={() => go({ view: 'elections-consolidated' })}>
            <Merge className="icon-sm" />
            <span className="sb-item-text">Vue consolidée — meilleures idées</span>
          </button>
          {candidates.map(c => (
            <button key={c.id} className={`sb-item sub ${is('candidate', c.id) ? 'active' : ''}`}
              onClick={() => go({ view: 'candidate', id: c.id })}>
              <span className="icon-sm" style={{ width: 10, height: 10, borderRadius: 3, background: c.color || 'var(--ink-4)', display: 'inline-block' }} />
              <span className="sb-item-text">{c.name}</span>
            </button>
          ))}
        </div>

        <div className="sb-section">
          <div className="sb-section-label">
            <span><Gavel className="icon-sm" /> Débats</span>
            <span className="sb-count">{debates.length}</span>
          </div>
          {debates.map(d => {
            const Icon = DEBATE_ICONS[d.id] || FileText;
            return (
              <button key={d.id} className={`sb-item ${is('debate', d.id) ? 'active' : ''}`}
                onClick={() => go({ view: 'debate', id: d.id })}>
                <Icon className="icon-sm" />
                <span className="sb-item-text">{d.titre}</span>
                <span className="sb-item-meta">{d.sources_count}</span>
              </button>
            );
          })}
        </div>

        <div className="sb-section">
          <div className="sb-section-label">
            <span><Flame className="icon-sm" /> Corpus Andrew Tate</span>
            <span className="sb-count">{TATE_CORPUS.length}</span>
          </div>
          <button className={`sb-item ${is('tate') ? 'active' : ''}`} onClick={() => go({ view: 'tate' })}>
            <List className="icon-sm" />
            <span className="sb-item-text">Toutes les vidéos</span>
          </button>
          {TATE_CORPUS.map(t => (
            <button key={t.id} className={`sb-item sub ${is('video', t.id) ? 'active' : ''}`}
              onClick={() => go({ view: 'video', id: t.id })}>
              <PlayCircle className="icon-sm" />
              <span className="sb-item-text">{t.title}</span>
            </button>
          ))}
        </div>

        <div className="sb-section">
          <div className="sb-section-label"><span><Compass className="icon-sm" /> Exploration</span></div>
          <button className={`sb-item ${is('explorer') ? 'active' : ''}`} onClick={() => go({ view: 'explorer' })}>
            <Network className="icon-sm" />
            <span className="sb-item-text">Graphe du corpus</span>
          </button>
          <button className={`sb-item ${is('learning') ? 'active' : ''}`} onClick={() => go({ view: 'learning' })}>
            <BookOpen className="icon-sm" />
            <span className="sb-item-text">Apprentissage</span>
          </button>
        </div>
      </nav>

      <div className="sb-footer">
        <span>{new Date().getFullYear()} · flexlab</span>
        <a href="https://auguste-brain.vercel.app" target="_blank" rel="noreferrer">↗</a>
      </div>
    </aside>
  );
}
