import React, { useEffect, useState } from 'react';

const MODULES = [
  ['dankoe-1day', 'Dan Koe — Fix your life in 1 day'],
  ['dankoe-human3', 'Dan Koe — HUMAN 3.0'],
  ['tate-patterns', 'Andrew Tate — Patterns rhétoriques'],
  ['tate-drills', 'Andrew Tate — Drills de réécriture']
];

/* Pont vers le module legacy learning.js (rendu impératif conservé). */
export default function Learning({ navigate }) {
  const [module, setModule] = useState('dankoe-1day');

  useEffect(() => {
    if (typeof window.showLearningModule === 'function') window.showLearningModule(module);
  }, [module]);

  return (
    <>
      <div className="main-header">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={() => navigate({ view: 'home' })}>Accueil</span>
          <span className="sep">›</span>
          <span className="current">Apprentissage</span>
        </div>
        <div className="title-wrap">
          <h1 className="page-title">Apprentissage</h1>
          <p className="page-subtitle">Modules structurés : Dan Koe (1-Day Fix, HUMAN 3.0), Andrew Tate (patterns, drills de réécriture).</p>
        </div>
      </div>
      <div className="learning-shell">
        <aside className="learning-sidebar">
          <div className="learning-sidebar-title">Modules</div>
          {MODULES.map(([id, label]) => (
            <button key={id} className={`learning-nav-btn ${module === id ? 'active' : ''}`} onClick={() => setModule(id)}>
              {label}
            </button>
          ))}
        </aside>
        <main className="learning-content" id="learning-content" />
      </div>
    </>
  );
}
