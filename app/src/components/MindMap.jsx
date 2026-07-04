/* =========================================================
   MindMap — moteur de carte mentale style Flexlab /map/
   Layout radial + arbre, pan/zoom, expand/collapse avec
   badges compteurs, panneau latéral riche au clic.
   ========================================================= */
import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { X, Plus, Minus, Home as HomeIcon } from 'lucide-react';

/* Rayons d'anneau et besoin d'arc (px) par profondeur — repris du modèle Flexlab */
const RB = [0, 220, 400, 570, 720, 850];
const AW = [0, 260, 235, 205, 180, 165];
const DOT = [88, 62, 48, 42, 38, 36];
const ICO = [34, 24, 18, 16, 14, 13];
const LABW = [190, 152, 132, 120, 112, 108];
const LABF = [15, 13.5, 12.5, 12, 11.5, 11];
const CX = [0, 320, 660, 990, 1290, 1560];
const ROW = 66;

/* Prépare l'arbre : ids stables, depth, couleur héritée */
function prepare(node, depth = 0, parentColor = null, path = 'r') {
  const color = node.color || parentColor || '#14213D';
  const n = { ...node, depth, color, _id: node.id || path, children: [] };
  (node.children || []).forEach((c, i) => n.children.push(prepare(c, depth + 1, color, path + '.' + i)));
  return n;
}

function layoutRadial(root, expanded) {
  const isOpen = (n) => n.depth === 0 || expanded.has(n._id);
  const leaves = [];
  (function dfs(n) {
    const ks = isOpen(n) ? n.children : [];
    if (!ks.length) { if (n !== root) leaves.push(n); return; }
    ks.forEach(dfs);
  })(root);
  root.x = 0; root.y = 0;
  if (!leaves.length) return;
  let total = 0;
  leaves.forEach(l => { l._need = AW[Math.min(l.depth, AW.length - 1)] / RB[Math.min(l.depth, RB.length - 1)]; total += l._need; });
  const scaleR = Math.max(1, total / (Math.PI * 2));
  let acc = -Math.PI / 2;
  leaves.forEach(l => { const slot = l._need / scaleR; l._am = acc + slot / 2; acc += slot; });
  (function post(n) {
    const ks = isOpen(n) ? n.children : [];
    if (!ks.length) return;
    ks.forEach(post);
    const shownKs = ks.filter(k => k._am !== undefined);
    if (shownKs.length) n._am = (shownKs[0]._am + shownKs[shownKs.length - 1]._am) / 2;
  })(root);
  (function place(n) {
    if (n !== root && n._am !== undefined) {
      const r = RB[Math.min(n.depth, RB.length - 1)] * scaleR;
      n.x = Math.cos(n._am) * r;
      n.y = Math.sin(n._am) * r;
    }
    (isOpen(n) ? n.children : []).forEach(place);
  })(root);
}

function layoutTree(root, expanded) {
  const isOpen = (n) => n.depth === 0 || expanded.has(n._id);
  let leaf = 0;
  (function rec(n) {
    n.x = CX[Math.min(n.depth, CX.length - 1)];
    const ks = isOpen(n) ? n.children : [];
    if (!ks.length) { n.y = leaf * ROW; leaf++; return; }
    ks.forEach(rec);
    n.y = (ks[0].y + ks[ks.length - 1].y) / 2;
  })(root);
  const dy = root.y;
  (function shift(n) {
    n.y -= dy;
    (isOpen(n) ? n.children : []).forEach(shift);
  })(root);
}

function collectShown(root, expanded) {
  const isOpen = (n) => n.depth === 0 || expanded.has(n._id);
  const nodes = [], edges = [];
  (function walk(n) {
    nodes.push(n);
    if (!isOpen(n)) return;
    n.children.forEach(c => { edges.push([n, c]); walk(c); });
  })(root);
  return { nodes, edges };
}

export default function MindMap({ tree, height = 'calc(100dvh - 220px)', legend = [], defaultOpen = [] }) {
  const containerRef = useRef(null);
  const [mode, setMode] = useState('radial');
  const [expanded, setExpanded] = useState(() => new Set(defaultOpen));
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState({ px: 0, py: 0, k: 1 });
  const dragRef = useRef(null);

  const root = useMemo(() => prepare(tree), [tree]);

  const { nodes, edges } = useMemo(() => {
    if (mode === 'radial') layoutRadial(root, expanded);
    else layoutTree(root, expanded);
    return collectShown(root, expanded);
  }, [root, expanded, mode]);

  const fit = useCallback(() => {
    const el = containerRef.current;
    if (!el || !nodes.length) return;
    const xs = nodes.map(n => n.x), ys = nodes.map(n => n.y);
    const minX = Math.min(...xs) - 140, maxX = Math.max(...xs) + 140;
    const minY = Math.min(...ys) - 110, maxY = Math.max(...ys) + 110;
    const w = el.clientWidth, h = el.clientHeight;
    const k = Math.min(1.15, Math.min(w / (maxX - minX), h / (maxY - minY)));
    setView({ k, px: -((minX + maxX) / 2) * k, py: -((minY + maxY) / 2) * k });
  }, [nodes]);

  useEffect(() => { fit(); }, [mode]);           // eslint-disable-line
  useEffect(() => { const t = setTimeout(fit, 30); return () => clearTimeout(t); }, []);   // eslint-disable-line

  // Wheel natif non-passif (React 18 attache onWheel en passif → preventDefault inopérant)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const cx = rect.width / 2, cy = rect.height / 2;
      const sx = e.clientX - rect.left - cx, sy = e.clientY - rect.top - cy;
      setView(v => {
        const k2 = Math.max(0.25, Math.min(2.5, v.k * Math.exp(-e.deltaY * 0.0016)));
        const wx = (sx - v.px) / v.k, wy = (sy - v.py) / v.k;
        return { k: k2, px: sx - wx * k2, py: sy - wy * k2 };
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);
  const onPointerDown = (e) => {
    if (e.target.closest('.fx-node') || e.target.closest('.fx-panel') || e.target.closest('.fx-ctl')) return;
    dragRef.current = { x: e.clientX, y: e.clientY, px: view.px, py: view.py };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    setView(v => ({ ...v, px: d.px + (e.clientX - d.x), py: d.py + (e.clientY - d.y) }));
  };
  const onPointerUp = () => { dragRef.current = null; };
  const zoom = (f) => setView(v => ({ ...v, k: Math.max(0.25, Math.min(2.5, v.k * f)) }));

  const clickNode = (n) => {
    const hasKids = n.children.length > 0;
    const isOpen = expanded.has(n._id);
    if (n.depth === 0) { setSelected(sel => sel?._id === n._id ? null : (n.panel ? n : sel)); return; }
    if (hasKids && !isOpen) {
      setExpanded(prev => new Set(prev).add(n._id));
      if (n.panel) setSelected(n);
    } else if (hasKids && isOpen) {
      if (n.panel && selected?._id !== n._id) setSelected(n);
      else {
        setExpanded(prev => { const s = new Set(prev); s.delete(n._id); return s; });
        if (selected?._id === n._id) setSelected(null);
      }
    } else {
      setSelected(sel => sel?._id === n._id ? null : n);
    }
  };

  const edgePath = ([a, b]) => {
    if (mode === 'tree') {
      const dx = (b.x - a.x) * 0.5;
      return `M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`;
    }
    const mx = (a.x + b.x) / 2 * 1.07, my = (a.y + b.y) / 2 * 1.07;
    return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
  };

  return (
    <div className="fxmap" style={{ height }} ref={containerRef}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}>

      <div className="fx-world" style={{ transform: `translate(${view.px}px, ${view.py}px) scale(${view.k})` }}>
        <svg className="fx-edges">
          {edges.map(([a, b]) => (
            <path key={a._id + '>' + b._id} d={edgePath([a, b])}
              stroke={b.color} strokeOpacity="0.3" strokeWidth={Math.max(1.2, 2.6 - b.depth * 0.45)} fill="none" />
          ))}
        </svg>
        {nodes.map(n => {
          const d = Math.min(n.depth, DOT.length - 1);
          const isOpen = n.depth === 0 || expanded.has(n._id);
          const Icon = n.icon;
          return (
            <div key={n._id}
              className={`fx-node ${selected?._id === n._id ? 'sel' : ''}`}
              style={{ left: n.x, top: n.y, '--c': n.color }}
              onClick={(e) => { e.stopPropagation(); clickNode(n); }}>
              <div className="fx-dot" style={{ width: DOT[d], height: DOT[d] }}>
                {Icon
                  ? <Icon style={{ width: ICO[d], height: ICO[d] }} className="fx-ic" />
                  : <span className="fx-ic-txt" style={{ fontSize: ICO[d] * 0.62 }}>{(n.badge ?? '•')}</span>}
                {n.children.length > 0 && (
                  <span className={`fx-cnt ${isOpen && n.depth > 0 ? 'open' : ''}`}>{n.children.length}</span>
                )}
              </div>
              <div className="fx-lab" style={{ width: LABW[d], fontSize: LABF[d] }}>
                {n.label}
                {n.sub && <i>{n.sub}</i>}
              </div>
            </div>
          );
        })}
      </div>

      {legend.length > 0 && (
        <div className="fx-legend">
          {legend.map((l, i) => <span key={i}><i style={{ background: l.color }} />{l.label}</span>)}
        </div>
      )}

      <div className="fx-dockC fx-ctl">
        <div className="fx-seg">
          <button className={mode === 'radial' ? 'on' : ''} onClick={() => setMode('radial')}>Radial</button>
          <button className={mode === 'tree' ? 'on' : ''} onClick={() => setMode('tree')}>Arbre</button>
        </div>
      </div>
      <div className="fx-dockR fx-ctl">
        <button onClick={() => zoom(1.25)} aria-label="Zoom +"><Plus className="icon-sm" /></button>
        <button onClick={() => zoom(0.8)} aria-label="Zoom −"><Minus className="icon-sm" /></button>
        <button onClick={fit} aria-label="Recentrer"><HomeIcon className="icon-sm" /></button>
      </div>

      {selected && (
        <div className="fx-panel">
          <div className="fx-panel-head" style={{ '--c': selected.color }}>
            <div>
              {selected.eyebrow && <div className="fx-panel-eyebrow">{selected.eyebrow}</div>}
              <div className="fx-panel-title">{selected.panelTitle || selected.label}</div>
            </div>
            <button className="fx-panel-close" onClick={() => setSelected(null)}><X className="icon" /></button>
          </div>
          <div className="fx-panel-body">{selected.panel}</div>
        </div>
      )}
    </div>
  );
}
