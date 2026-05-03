/* =========================================================
   Auguste Brain — Carte des Debats
   D3 force-directed mindmap + Chart.js radar
   ========================================================= */

// ---- Data ------------------------------------------------

const MODE_COLORS = {
    rouge:  "#DC143C",
    orange: "#FF8C00",
    jaune:  "#DAA520",
    vert:   "#228B22",
    bleu:   "#4169E1"
};

const debates = [
    {
        id: "taxe-zucman",
        titre: "La Taxe Zucman et la Fiscalite des Ultra-Riches",
        these: "La taxe Zucman est une mesure populiste qui abolira la propriete privee des classes moyennes. Des alternatives intelligentes existent.",
        faits_cles: [
            "France: 57% depenses publiques/PIB vs Vietnam 20% vs URSS 50%",
            "ISF echoue: <0.5% PIB collecte en Norvege, Espagne, Suisse",
            "Taxe Tobin: 0.01% transactions \u2192 20 milliards/an potentiels",
            "France: 3300 milliards de dette, >120% dette/PIB",
            "Rendement immobilier 5% \u2192 taxe 2% = 40% du CA ponctionne"
        ],
        sources_count: 12,
        explored: true,
        polarisation: { gauche_droite: 55, libertaire_autoritaire: -60, rationnel_emotionnel: 65, factuel_speculatif: 70 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/taxe-zucman/fiches-taxe-zucman.pdf",
        suggestions: ["Etudier la taxe Tobin en detail", "Comparer flat tax pays par pays", "Analyser les Panama Papers"]
    },
    {
        id: "science-abondance",
        titre: "La Science comme Religion Politique \u2014 Abondance vs Rationnement",
        these: "La science capturee par le politique sert le rationnement. La France peut devenir puissance de l'abondance via ses ressources maritimes.",
        faits_cles: [
            "ZEE francaise: 11 millions km\u00b2",
            "Macroalgues: 120t matiere seche/hectare/an",
            "0.5% ZEE \u2192 400 milliards m\u00b3 methane/an (= conso UE)",
            "30% emissions CO2 mondiales = secteur construction",
            "6e probleme de Hilbert: axiomatiser la physique = NON RESOLU"
        ],
        sources_count: 15,
        explored: true,
        polarisation: { gauche_droite: 30, libertaire_autoritaire: -70, rationnel_emotionnel: 55, factuel_speculatif: 45 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/science-abondance/fiches-science-abondance.pdf",
        suggestions: ["Verifier calculs methane/algues", "Etudier modele coreen", "Approfondir Hilbert 6"]
    },
    {
        id: "masculinite-feminisme",
        titre: "Masculinite, Feminisme et Wokisme",
        these: "La crise de la masculinite est reelle, documentee, et ignoree. Le feminisme de 4e vague et le wokisme aggravent la fragmentation sociale.",
        faits_cles: [
            "75% des suicides sont masculins (France et monde)",
            "96.6% population carcerale = hommes",
            "77% sans-abri = hommes",
            "Testosterone: -1.2%/an depuis 1980 (Travison 2007)",
            "Cancel culture: 1000+ sanctions universitaires 2014-2023"
        ],
        sources_count: 25,
        explored: true,
        polarisation: { gauche_droite: 40, libertaire_autoritaire: -30, rationnel_emotionnel: 80, factuel_speculatif: 85 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/masculinite-feminisme/fiches-masculinite-feminisme.pdf",
        suggestions: ["Etudier programmes mentorat en France", "Approfondir paradoxe egalite genres", "Rechercher donnees fertilite masculine"]
    }
];

const suggestions = [
    { id: "dette-publique", titre: "La Dette Publique Francaise", category: "Economie" },
    { id: "immigration", titre: "Immigration et Identite", category: "Societe" },
    { id: "intelligence-artificielle", titre: "IA et Emploi", category: "Technologie" },
    { id: "souverainete-alimentaire", titre: "Souverainete Alimentaire", category: "Economie" },
    { id: "education-nationale", titre: "Crise de l'Education Nationale", category: "Societe" },
    { id: "monnaie-numerique", titre: "CBDC et Credit Social", category: "Technologie" }
];

// ---- Utility functions -----------------------------------

/** Pick dominant mode color (first mode with highest weight, or cycle) */
function dominantColor(d) {
    if (!d.explored) return "rgba(255,255,255,0.12)";
    // Use the first mode as "dominant"
    const m = d.modes && d.modes[0];
    return MODE_COLORS[m] || "#666";
}

/** Radius from sources_count */
function bubbleRadius(d) {
    if (!d.explored) return 28;
    const base = 36;
    return base + (d.sources_count || 0) * 2.2;
}

/** Normalise polarisation value (-100..100) to 0..1 for gauge */
function normGauge(v) { return (v + 100) / 200; }

/** Compute overall objectivity 0-100 from polarisation axes.
 *  Objectivity = closeness to center (0) on each axis, averaged.
 *  100 = perfectly centered; 0 = maximally biased. */
function objectivityScore(pol) {
    const axes = Object.values(pol);
    const avg = axes.reduce((s, v) => s + (100 - Math.abs(v)), 0) / axes.length;
    return Math.round(avg);
}

// ---- Aggregate polarisation ------------------------------

function computeAggregates() {
    const explored = debates.filter(d => d.explored);
    if (explored.length === 0) return { gauche_droite: 0, libertaire_autoritaire: 0, rationnel_emotionnel: 0, factuel_speculatif: 0 };
    const agg = {};
    ["gauche_droite", "libertaire_autoritaire", "rationnel_emotionnel", "factuel_speculatif"].forEach(k => {
        agg[k] = Math.round(explored.reduce((s, d) => s + d.polarisation[k], 0) / explored.length);
    });
    return agg;
}

function renderDashboard() {
    const agg = computeAggregates();

    // Gauges
    const mapping = [
        { id: "gd", key: "gauche_droite" },
        { id: "la", key: "libertaire_autoritaire" },
        { id: "re", key: "rationnel_emotionnel" },
        { id: "fs", key: "factuel_speculatif" }
    ];
    mapping.forEach(({ id, key }) => {
        const norm = normGauge(agg[key]);
        const fill = document.getElementById("gauge-" + id);
        const marker = document.getElementById("marker-" + id);
        if (fill) fill.style.width = (norm * 100) + "%";
        if (marker) marker.style.left = (norm * 100) + "%";
    });

    // Objectivity
    const score = objectivityScore(agg);
    const circumference = 2 * Math.PI * 52; // ~326.73
    const arc = document.getElementById("score-arc");
    const val = document.getElementById("objectivity-value");
    if (arc) {
        const offset = circumference - (score / 100) * circumference;
        arc.style.strokeDashoffset = offset;
        // Color: green if high, yellow mid, red low
        if (score >= 70) arc.style.stroke = "#228B22";
        else if (score >= 40) arc.style.stroke = "#DAA520";
        else arc.style.stroke = "#DC143C";
    }
    if (val) val.textContent = score;
}

// ---- D3 Force Graph -------------------------------------

function initGraph() {
    const container = document.getElementById("graph-container");
    const svg = d3.select("#graph");
    const width = container.clientWidth;
    const height = container.clientHeight;

    svg.attr("viewBox", [0, 0, width, height]);

    // Build nodes
    const nodes = [];
    debates.forEach(d => {
        nodes.push({ ...d, type: "explored" });
    });
    suggestions.forEach(s => {
        nodes.push({ ...s, explored: false, type: "suggestion", sources_count: 0 });
    });

    // Build links — connect each suggestion to the nearest explored node (visually)
    const links = [];
    const exploredNodes = nodes.filter(n => n.explored);
    nodes.filter(n => !n.explored).forEach(s => {
        // Connect to a random explored node for visual clustering
        const target = exploredNodes[Math.floor(Math.random() * exploredNodes.length)];
        if (target) links.push({ source: s.id, target: target.id });
    });
    // Also link explored nodes to each other
    for (let i = 0; i < exploredNodes.length; i++) {
        for (let j = i + 1; j < exploredNodes.length; j++) {
            links.push({ source: exploredNodes[i].id, target: exploredNodes[j].id });
        }
    }

    // Defs for gradients
    const defs = svg.append("defs");

    // Glow filter
    const filter = defs.append("filter").attr("id", "glow");
    filter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "coloredBlur");
    const merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "coloredBlur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    // Create gradient for each explored node
    debates.forEach(d => {
        if (d.modes && d.modes.length > 1) {
            const grad = defs.append("radialGradient")
                .attr("id", "grad-" + d.id)
                .attr("cx", "35%").attr("cy", "35%").attr("r", "65%");
            grad.append("stop").attr("offset", "0%").attr("stop-color", MODE_COLORS[d.modes[0]]).attr("stop-opacity", 0.95);
            grad.append("stop").attr("offset", "100%").attr("stop-color", MODE_COLORS[d.modes[d.modes.length - 1]]).attr("stop-opacity", 0.7);
        }
    });

    // Simulation
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(180).strength(0.3))
        .force("charge", d3.forceManyBody().strength(-400))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(d => bubbleRadius(d) + 12))
        .force("x", d3.forceX(width / 2).strength(0.04))
        .force("y", d3.forceY(height / 2).strength(0.04));

    // Links
    const linkEls = svg.append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("class", "link-line");

    // Node groups
    const nodeGroups = svg.append("g")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded)
        );

    // Circles
    nodeGroups.append("circle")
        .attr("r", d => bubbleRadius(d))
        .attr("fill", d => {
            if (!d.explored) return "rgba(255,255,255,0.04)";
            if (d.modes && d.modes.length > 1) return "url(#grad-" + d.id + ")";
            return dominantColor(d);
        })
        .attr("stroke", d => d.explored ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.18)")
        .attr("stroke-width", d => d.explored ? 1.5 : 1.5)
        .attr("stroke-dasharray", d => d.explored ? "none" : "6 4")
        .attr("filter", d => d.explored ? "url(#glow)" : "none")
        .attr("class", d => d.explored ? "bubble-explored" : "")
        .style("opacity", d => d.explored ? 0.92 : 0.6);

    // Inner ring showing sources_count as a subtle ring
    nodeGroups.filter(d => d.explored).append("circle")
        .attr("r", d => bubbleRadius(d) - 6)
        .attr("fill", "none")
        .attr("stroke", "rgba(255,255,255,0.12)")
        .attr("stroke-width", 1);

    // Labels — wrap text for explored bubbles
    nodeGroups.each(function(d) {
        const g = d3.select(this);
        const r = bubbleRadius(d);
        const maxWidth = r * 1.5;
        const words = d.titre.split(/\s+/);
        const lines = [];
        let currentLine = [];

        // Simple word-wrap
        words.forEach(word => {
            currentLine.push(word);
            if (currentLine.join(" ").length > (maxWidth / 6)) {
                lines.push(currentLine.join(" "));
                currentLine = [];
            }
        });
        if (currentLine.length) lines.push(currentLine.join(" "));

        // Limit lines
        const maxLines = d.explored ? 3 : 2;
        const displayLines = lines.slice(0, maxLines);
        if (lines.length > maxLines) {
            displayLines[maxLines - 1] += "...";
        }

        const fontSize = d.explored ? 10.5 : 9;
        const lineHeight = fontSize * 1.3;
        const startY = -(displayLines.length - 1) * lineHeight / 2;

        displayLines.forEach((line, i) => {
            g.append("text")
                .attr("class", "bubble-label")
                .attr("y", startY + i * lineHeight)
                .attr("font-size", fontSize)
                .attr("fill", d.explored ? "#fff" : "rgba(255,255,255,0.45)")
                .text(line);
        });
    });

    // Sources badge for explored nodes
    nodeGroups.filter(d => d.explored).append("circle")
        .attr("cx", d => bubbleRadius(d) * 0.65)
        .attr("cy", d => -bubbleRadius(d) * 0.65)
        .attr("r", 12)
        .attr("fill", "var(--bg-surface, #16213e)")
        .attr("stroke", "rgba(255,255,255,0.2)")
        .attr("stroke-width", 1);

    nodeGroups.filter(d => d.explored).append("text")
        .attr("x", d => bubbleRadius(d) * 0.65)
        .attr("y", d => -bubbleRadius(d) * 0.65)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("fill", "#eee")
        .attr("font-size", 9)
        .attr("font-weight", 700)
        .text(d => d.sources_count);

    // Click handler for explored bubbles
    nodeGroups.filter(d => d.explored)
        .style("cursor", "pointer")
        .on("click", (event, d) => {
            event.stopPropagation();
            openPanel(d);
        });

    // Tick
    simulation.on("tick", () => {
        linkEls
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        nodeGroups.attr("transform", d => {
            // Keep nodes within bounds
            d.x = Math.max(bubbleRadius(d), Math.min(width - bubbleRadius(d), d.x));
            d.y = Math.max(bubbleRadius(d), Math.min(height - bubbleRadius(d), d.y));
            return `translate(${d.x},${d.y})`;
        });
    });

    // Drag handlers
    function dragStarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    function dragEnded(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Resize handler
    window.addEventListener("resize", () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        svg.attr("viewBox", [0, 0, w, h]);
        simulation.force("center", d3.forceCenter(w / 2, h / 2));
        simulation.force("x", d3.forceX(w / 2).strength(0.04));
        simulation.force("y", d3.forceY(h / 2).strength(0.04));
        simulation.alpha(0.3).restart();
    });
}

// ---- Detail Panel ---------------------------------------

let radarChart = null;

function openPanel(d) {
    const panel = document.getElementById("detail-panel");
    const overlay = document.getElementById("overlay");

    // Populate
    document.getElementById("panel-title").textContent = d.titre;
    document.getElementById("panel-thesis").textContent = d.these;

    // Facts
    const factsList = document.getElementById("panel-facts");
    factsList.innerHTML = "";
    (d.faits_cles || []).forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        factsList.appendChild(li);
    });

    // PDF
    const pdfLink = document.getElementById("panel-pdf");
    if (d.pdf_path) {
        pdfLink.href = d.pdf_path;
        pdfLink.style.display = "inline-block";
    } else {
        pdfLink.style.display = "none";
    }

    // Suggestions
    const sugList = document.getElementById("panel-suggestions");
    sugList.innerHTML = "";
    (d.suggestions || []).forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        sugList.appendChild(li);
    });

    // Radar chart
    renderRadar(d.polarisation);

    // Show
    panel.classList.add("panel-visible");
    panel.classList.remove("panel-hidden");
    overlay.classList.add("overlay-visible");
    overlay.classList.remove("overlay-hidden");
}

function closePanel() {
    const panel = document.getElementById("detail-panel");
    const overlay = document.getElementById("overlay");
    panel.classList.remove("panel-visible");
    panel.classList.add("panel-hidden");
    overlay.classList.remove("overlay-visible");
    overlay.classList.add("overlay-hidden");
}

function renderRadar(pol) {
    const canvas = document.getElementById("radar-chart");
    const ctx = canvas.getContext("2d");

    if (radarChart) {
        radarChart.destroy();
    }

    // Normalise: values are -100..100, shift to 0..100 for display
    const labels = [
        "Gauche \u2194 Droite",
        "Libertaire \u2194 Autoritaire",
        "Rationnel \u2194 Emotionnel",
        "Factuel \u2194 Speculatif"
    ];
    const values = [
        Math.abs(pol.gauche_droite),
        Math.abs(pol.libertaire_autoritaire),
        Math.abs(pol.rationnel_emotionnel),
        Math.abs(pol.factuel_speculatif)
    ];

    radarChart = new Chart(ctx, {
        type: "radar",
        data: {
            labels: labels,
            datasets: [{
                label: "Intensite de polarisation",
                data: values,
                backgroundColor: "rgba(233, 69, 96, 0.2)",
                borderColor: "rgba(233, 69, 96, 0.8)",
                borderWidth: 2,
                pointBackgroundColor: "#e94560",
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 4
            }]
        },
        options: {
            responsive: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 25,
                        color: "rgba(255,255,255,0.3)",
                        backdropColor: "transparent",
                        font: { size: 9 }
                    },
                    grid: {
                        color: "rgba(255,255,255,0.08)"
                    },
                    angleLines: {
                        color: "rgba(255,255,255,0.08)"
                    },
                    pointLabels: {
                        color: "rgba(255,255,255,0.65)",
                        font: { size: 10, weight: "500" }
                    }
                }
            },
            plugins: {
                legend: { display: false }
            },
            animation: {
                duration: 600,
                easing: "easeOutQuart"
            }
        }
    });
}

// ---- Event Listeners ------------------------------------

document.getElementById("panel-close").addEventListener("click", closePanel);
document.getElementById("overlay").addEventListener("click", closePanel);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
});

// ---- Init -----------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    renderDashboard();
    initGraph();
});
