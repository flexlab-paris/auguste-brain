import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import { Network, Maximize2, Shuffle } from 'lucide-react';
import { getDebates, TATE_CORPUS, videoRegistry, debateRegistry } from '../corpus.js';

export default function Explorer({ navigate }) {
  const ref = useRef(null);
  const cyRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const debates = getDebates();
    const RV = videoRegistry();
    const RD = debateRegistry();

    const nodes = [];
    const edges = [];
    debates.forEach(d => {
      const q = (RD[d.id]?.quotes || []).length;
      nodes.push({ data: { id: 'debate-' + d.id, label: d.titre, type: 'debate', targetId: d.id, weight: 24 + q * 0.8 } });
    });
    TATE_CORPUS.forEach(t => {
      const q = (RV[t.id]?.quotes || []).length;
      nodes.push({ data: { id: 'video-' + t.id, label: t.title, type: 'video', targetId: t.id, weight: 22 + q * 0.5 } });
    });
    const addEdge = (a, b) => edges.push({ data: { source: a, target: b } });
    debates.forEach(d => {
      const rel = RD[d.id]?.related;
      (rel?.videos || []).forEach(v => TATE_CORPUS.some(t => t.id === v) && addEdge('debate-' + d.id, 'video-' + v));
      (rel?.debates || []).forEach(x => x !== d.id && debates.some(dd => dd.id === x) && addEdge('debate-' + d.id, 'debate-' + x));
    });
    TATE_CORPUS.forEach(t => {
      const rel = RV[t.id]?.related;
      (rel?.videos || []).forEach(v => v !== t.id && TATE_CORPUS.some(tt => tt.id === v) && addEdge('video-' + t.id, 'video-' + v));
      (rel?.debates || []).forEach(x => debates.some(dd => dd.id === x) && addEdge('video-' + t.id, 'debate-' + x));
    });
    const seen = new Set();
    const uniq = edges.filter(e => {
      const k = [e.data.source, e.data.target].sort().join('|');
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });

    const css = getComputedStyle(document.documentElement);
    const v = (n, fb) => (css.getPropertyValue(n) || fb).trim();
    const ORANGE = v('--accent', '#e8590c');
    const BLUE = v('--info', '#1d4ed8');

    const cy = cytoscape({
      container: ref.current,
      elements: [...nodes, ...uniq],
      style: [
        { selector: 'node', style: {
          'background-color': '#fff',
          'border-width': 3,
          'border-color': (e) => e.data('type') === 'video' ? BLUE : ORANGE,
          label: 'data(label)',
          'font-family': 'Inter, sans-serif', 'font-size': 11.5, 'font-weight': 600,
          color: v('--ink', '#1a1915'),
          'text-valign': 'bottom', 'text-margin-y': 8,
          'text-wrap': 'wrap', 'text-max-width': 130,
          width: 'data(weight)', height: 'data(weight)'
        } },
        { selector: 'edge', style: {
          width: 1.5, 'line-color': v('--line-2', '#d8d2c2'),
          'curve-style': 'bezier', opacity: 0.6
        } },
        { selector: 'node:selected', style: {
          'background-color': (e) => e.data('type') === 'video' ? BLUE : ORANGE, color: '#fff'
        } }
      ],
      layout: { name: 'cose', animate: true, animationDuration: 700, nodeRepulsion: 12000, idealEdgeLength: 130, gravity: 60, numIter: 1400, fit: true, padding: 55 },
      minZoom: 0.3, maxZoom: 3, wheelSensitivity: 0.2
    });
    cy.on('tap', 'node', (evt) => {
      const n = evt.target.data();
      navigate(n.type === 'debate' ? { view: 'debate', id: n.targetId } : { view: 'video', id: n.targetId });
    });
    cyRef.current = cy;
    return () => { cy.destroy(); cyRef.current = null; };
  }, [navigate]);

  const relayout = () => cyRef.current?.layout({
    name: 'cose', animate: true, animationDuration: 600,
    nodeRepulsion: 13000 + Math.random() * 6000, idealEdgeLength: 110 + Math.random() * 50,
    gravity: 50 + Math.random() * 30, fit: true, padding: 55
  }).run();

  return (
    <div className="explorer-wrap">
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'home' })}>Accueil</span>
          <span className="sep">›</span>
          <span className="current">Graphe du corpus</span>
        </div>
        <div className="title-wrap">
          <h1 className="page-title"><Network className="icon-lg" /> Graphe du corpus</h1>
          <p className="page-subtitle">15 débats et vidéos reliés par leurs cross-links. Zoom, drag, clique pour ouvrir.</p>
        </div>
      </div>
      <div className="explorer-legend-bar">
        <span className="exl" style={{ color: 'var(--accent)' }}><span className="dot" />Débat</span>
        <span className="exl" style={{ color: 'var(--info)' }}><span className="dot" />Vidéo Tate</span>
        <div className="explorer-controls">
          <button className="btn" onClick={() => cyRef.current?.fit(null, 55)}><Maximize2 className="icon-sm" /> Recentrer</button>
          <button className="btn" onClick={relayout}><Shuffle className="icon-sm" /> Réorganiser</button>
        </div>
      </div>
      <div className="explorer-canvas"><div className="explorer-cy" ref={ref} /></div>
    </div>
  );
}
