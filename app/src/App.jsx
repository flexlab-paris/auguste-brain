import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar.jsx';
import Home, { TagFilterView } from './components/Home.jsx';
import DebateView from './components/DebateView.jsx';
import VideoView, { TateHome } from './components/VideoView.jsx';
import Explorer from './components/Explorer.jsx';
import Learning from './components/Learning.jsx';
import { ElectionsOverview, CandidateView, ConsolidatedView } from './components/Elections.jsx';
import { loadElectionScripts } from './corpus.js';

/* ---- Routing par hash : URLs partageables ---- */
function parseHash() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  const [view, ...rest] = h.split('/');
  const id = rest.length ? decodeURIComponent(rest.join('/')) : null;
  const known = ['debate', 'video', 'tate', 'explorer', 'learning', 'tag', 'elections', 'elections-consolidated', 'candidate'];
  if (!view || !known.includes(view)) return { view: 'home', id: null };
  return { view, id };
}
function routeToHash(r) {
  if (!r || r.view === 'home') return '#/';
  return r.id ? `#/${r.view}/${encodeURIComponent(r.id)}` : `#/${r.view}`;
}

export default function App() {
  const [route, setRoute] = useState(parseHash);
  const [search, setSearch] = useState('');
  const [drawer, setDrawer] = useState(false);
  const [electionsReady, setElectionsReady] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    loadElectionScripts(() => setElectionsReady(true));
  }, []);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((r) => {
    const hash = routeToHash(r);
    if (location.hash !== hash) location.hash = hash;   // déclenche hashchange → setRoute
    else setRoute(r);
    setDrawer(false);
    requestAnimationFrame(() => { scrollRef.current?.scrollTo({ top: 0 }); });
  }, []);

  // Raccourci "/" → focus recherche
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        document.querySelector('.sb-search input')?.focus();
      }
      if (e.key === 'Escape') setDrawer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  let content = null;
  switch (route.view) {
    case 'debate':   content = <DebateView id={route.id} navigate={navigate} />; break;
    case 'video':    content = <VideoView id={route.id} navigate={navigate} />; break;
    case 'tate':     content = <TateHome navigate={navigate} />; break;
    case 'explorer': content = <Explorer navigate={navigate} />; break;
    case 'learning': content = <Learning navigate={navigate} />; break;
    case 'tag':      content = <TagFilterView tag={route.id || ''} navigate={navigate} />; break;
    case 'elections': content = <ElectionsOverview navigate={navigate} electionsReady={electionsReady} />; break;
    case 'elections-consolidated': content = <ConsolidatedView navigate={navigate} />; break;
    case 'candidate': content = <CandidateView id={route.id} navigate={navigate} key={electionsReady ? 'r' : 'w'} />; break;
    default:          content = <Home navigate={navigate} search={search} />;
  }

  return (
    <div className="shell" data-drawer={drawer ? 'open' : 'closed'}>
      <div className="topbar">
        <button className="topbar-burger" onClick={() => setDrawer(v => !v)} aria-label="Menu">
          {drawer ? <X className="icon-lg" /> : <Menu className="icon-lg" />}
        </button>
        <span className="topbar-brand"><span className="brand-dot" />Auguste Brain</span>
      </div>

      <div className="drawer-overlay" onClick={() => setDrawer(false)} />

      <Sidebar
        route={route}
        navigate={navigate}
        search={search}
        setSearch={setSearch}
        electionsReady={electionsReady}
        closeDrawer={() => setDrawer(false)}
      />

      <main className="main">
        <div className="main-scroll" ref={scrollRef}>
          {content}
        </div>
      </main>
    </div>
  );
}
