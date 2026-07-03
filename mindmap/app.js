/* =========================================================
   Auguste Brain — V2 app
   Data-driven, state-based single-page rendering
   ========================================================= */

// ---- Andrew Tate corpus ---------------------------------
const TATE_CORPUS = [
    {
        id: "LFJAHZlizAg",
        slug: "never-tired-when-winning",
        title: "You're Never Tired When You're Winning",
        theme: "Fatigue · Dépression · Purpose · Univers giving",
        thesis: "La fatigue et la dépression sont des états mentaux réversibles par la victoire, l'action et le refus de croire en elles. Le bonheur n'est pas le but d'un homme — la performance l'est.",
        tag: "DEEP",
        depth: "13 sections · 462 lignes · 36 quotes · 8 leçons",
        quotes: [
            { text: "You're never tired when you're winning.", tag: "Aphorisme d'ouverture" },
            { text: "There's no such thing as lazy. There's just people who feel demotivated.", tag: "Reframe de la paresse" },
            { text: "Depression is a blessing. There's no light without dark. There's no joy without pain.", tag: "Yin-yang" },
            { text: "You can outrun depression. You ain't got time to be sad if you're getting where you need to get.", tag: "Cure par saturation" },
            { text: "Feeling depressed is real. You do not have an imaginary disease called depression.", tag: "Distinction cruciale" },
            { text: "The only thing you have genuine control over is your state of mind.", tag: "Stoïcisme vulgarisé" },
            { text: "As a man, you have a burden of performance. Happiness will come at the end of the performance.", tag: "Burden of performance" },
            { text: "Confidence comes from competence. Most guys that are depressed haven't accomplished anything.", tag: "Loi compétence → confiance" },
            { text: "A day becomes a week, a week becomes a month, a month becomes a year, and the years become your life.", tag: "Daydream driver" },
            { text: "I've never seen somebody dedicate themselves to something completely and fail. The universe is extremely giving.", tag: "Univers giving" }
        ]
    },
    {
        id: "P4rkjwaa6so",
        slug: "tate-podcast-competition-money-purpose",
        title: "Compétition, Argent, Purpose (long-form)",
        theme: "Accountability · Speed · Network · Argent · Attention · Trauma",
        thesis: "L'homme moderne perd parce qu'il est lent, isolé, distrait par le confort. La sortie : 100 % accountability, vitesse d'exécution, network de prédateurs, conversion douleur → actif, refus du bonheur au profit du purpose.",
        tag: "DEEP",
        depth: "13 sections · 638 lignes · 48 quotes · 12 leçons · 10 frameworks",
        quotes: [
            { text: "Everything that happens to you is completely and utterly your fault, whether it's good or bad.", tag: "100% accountability" },
            { text: "I'm not subject to circumstance. Tate arrives and circumstances change.", tag: "Cause vs effet" },
            { text: "Fun is for women and children.", tag: "Refus du fun" },
            { text: "Your happiness as a man comes from feeling respected over feeling loved.", tag: "Respect > amour" },
            { text: "By the time you were done reading the book, the moves have been made.", tag: "Speed" },
            { text: "Business is other people's money.", tag: "Essence business" },
            { text: "You are the sum of the five people you spend the most time with.", tag: "Loi du network" },
            { text: "Confidence comes from competence.", tag: "Loi opérationnelle" },
            { text: "The most valuable thing that exists is attention.", tag: "Économie de l'attention" },
            { text: "The best things ever happened to me are the worst things ever happened to me.", tag: "Trauma = building block" },
            { text: "Life is a value exchange.", tag: "Loi des relations" },
            { text: "Your ability to speak freely is directly correlated to your insignificance.", tag: "Free speech ← insignifiance" }
        ]
    },
    {
        id: "h9wod4mPHZw",
        slug: "high-value-man",
        title: "How to Become a High Value Man",
        theme: "Meurtre du soi ancien · Coda théologique · Homme forgé au feu",
        thesis: "Un homme de haute valeur n'est pas né, il est forgé dans le feu (douleur, discipline). Le confort est l'ennemi de la grandeur. Le regret est plus terrifiant que l'échec.",
        tag: "STANDARD",
        depth: "115 lignes — à upgrader",
        quotes: [
            { text: "A high value man isn't born. He is forged in fire. And that fire is pain, rejection, pressure, discipline.", tag: "Métaphore métallurgique" },
            { text: "Discipline is the highest form of self-respect.", tag: "Discipline = self-respect" },
            { text: "Time is not your friend, it's the most ruthless enemy you've got.", tag: "Temps ennemi" },
            { text: "The most terrifying thing about life isn't failure. It's regret.", tag: "Regret > échec" },
            { text: "Comfort is the enemy of greatness.", tag: "Ennemi du confort" }
        ]
    },
    {
        id: "KPbnzSGlAP4",
        slug: "version-qui-tattend",
        title: "The Version Of You That's Waiting",
        theme: "Multivers-self · Discipline · Guerre · Mental aikido",
        thesis: "Il existe une version de toi qui n'a jamais lâché. La discipline (faire ce qui doit être fait indépendamment de ce qu'on ressent) est l'essence de la masculinité. Tout est guerre.",
        tag: "STANDARD",
        depth: "142 lignes — à upgrader",
        quotes: [
            { text: "There's a version of you that never sleeps in, never skips training, never wastes time.", tag: "Multivers-self" },
            { text: "You are not stupid, you are not incompetent, you are lazy and arrogant.", tag: "Diagnostic protecteur" },
            { text: "A man must do what he is supposed to do regardless irrespective of how he feels.", tag: "Discipline = masculinité" },
            { text: "Everything is war. All of it.", tag: "Ontologie guerrière" },
            { text: "Pain is one of the elements in the chemical reaction. Batman is Batman because they killed his parents.", tag: "Douleur = ingrédient" }
        ]
    },
    {
        id: "AG1vvPVkHC8",
        slug: "AG1vvPVkHC8",
        title: "Don't Waste Your Life",
        theme: "Pression · Action brute · Humour comme masque",
        thesis: "La vie d'un homme se mesure à la pression supportée et à la douleur transmutée en carburant — tout en gardant l'humour nécessaire pour en rire.",
        tag: "STANDARD",
        depth: "117 lignes — à upgrader",
        quotes: [
            { text: "True status is shown via competence. And competence cannot be faked.", tag: "Statut = compétence" },
            { text: "When bad things happen to me, my first answer is good.", tag: "Mantra Good." },
            { text: "You need to take everything absolutely seriously, but laugh the entire way through.", tag: "Règle d'or" },
            { text: "Raw action solves all.", tag: "Maxime paternelle" }
        ]
    },
    {
        id: "Gv39IoU5Z5s",
        slug: "Gv39IoU5Z5s",
        title: "Educate Yourself Daily",
        theme: "Capital humain · Sortie du salariat · YouTube > université",
        thesis: "L'éducation est décentralisée. Apprentissage quotidien + sortie du 9-5. Chaque jour où tu n'apprends pas, ta compétition prend de l'avance.",
        tag: "STANDARD",
        depth: "124 lignes — à upgrader",
        quotes: [
            { text: "Educate yourself daily.", tag: "Discipline d'apprentissage" }
        ]
    },
    {
        id: "cZwULaBA9Bw",
        slug: "cZwULaBA9Bw",
        title: "Obsession & Pinnacle",
        theme: "Être un peu fou pour dominer un domaine",
        thesis: "Le sommet d'un domaine exige d'être « a little bit gone to it » — presque insane à son craft.",
        tag: "STANDARD",
        depth: "98 lignes — à upgrader",
        quotes: [
            { text: "To be at the pinnacle of any game, you've got to be a little bit gone to it.", tag: "Insanity clause" }
        ]
    },
    {
        id: "d8FH8K7n0GE",
        slug: "d8FH8K7n0GE",
        title: "Live for Something Bigger",
        theme: "Purpose masculin · Bataille comme sacré",
        thesis: "Comme homme, vivre pour quelque chose de plus grand que soi. La bataille est le devoir masculin.",
        tag: "STANDARD",
        depth: "112 lignes — à upgrader",
        quotes: [
            { text: "As a man, you should always live for something bigger than yourself.", tag: "Impératif masculin" }
        ]
    }
];

// ---- State ---------------------------------------------
const state = {
    view: 'home',              // 'home' | 'debate' | 'tate' | 'tate-video' | 'learning'
    debateId: null,
    subtab: 'fiche',           // 'fiche' | 'citations' | 'posters'
    tateVideoId: null,
    search: ''
};

// ---- Utils ---------------------------------------------
const escape = (s) => (s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mode2label = (m) => (typeof MODE_LABELS !== 'undefined' && MODE_LABELS[m]) || m;
const mode2color = (m) => (typeof MODE_COLORS !== 'undefined' && MODE_COLORS[m]) || '#888';

// ---- Sidebar rendering ---------------------------------
function renderSidebar() {
    const activeDebate = state.view === 'debate' && state.debateId;
    const activeTateHome = state.view === 'tate';
    const activeTateVideo = state.view === 'tate-video' && state.tateVideoId;
    const activeLearning = state.view === 'learning';
    const activeHome = state.view === 'home';

    const debateItems = debates.map(d => `
        <button class="sb-item ${activeDebate && state.debateId === d.id ? 'active' : ''}" data-action="select-debate" data-id="${d.id}">
            <span class="sb-item-marker"></span>
            <span class="sb-item-text">${escape(d.titre)}</span>
            <span class="sb-item-meta">${d.sources_count}</span>
        </button>
    `).join('');

    const tateItems = TATE_CORPUS.map(t => `
        <button class="sb-item sub ${activeTateVideo && state.tateVideoId === t.id ? 'active' : ''}" data-action="select-tate" data-id="${t.id}">
            <span class="sb-item-marker"></span>
            <span class="sb-item-text">${escape(t.title)}</span>
            <span class="sb-item-meta">${t.tag === 'DEEP' ? '●' : '○'}</span>
        </button>
    `).join('');

    document.getElementById('sidebar').innerHTML = `
        <div class="sb-brand">
            <div>
                <span class="sb-brand-name"><span class="sb-brand-dot"></span>Auguste Brain</span>
                <div class="sb-brand-meta">v2 · corpus rhétorique</div>
            </div>
        </div>

        <div class="sb-search">
            <input type="text" id="sb-search-input" placeholder="Rechercher…" value="${escape(state.search)}"/>
        </div>

        <nav class="sb-nav">
            <div class="sb-section">
                <div class="sb-section-label">
                    <span>Accueil</span>
                </div>
                <button class="sb-item ${activeHome ? 'active' : ''}" data-action="go-home">
                    <span class="sb-item-marker"></span>
                    <span class="sb-item-text">Tous les débats</span>
                </button>
            </div>

            <div class="sb-section">
                <div class="sb-section-label">
                    <span>Débats</span>
                    <span class="sb-section-count">${debates.length}</span>
                </div>
                ${debateItems}
            </div>

            <div class="sb-section">
                <div class="sb-section-label">
                    <span>Corpus Andrew Tate</span>
                    <span class="sb-section-count">${TATE_CORPUS.length}</span>
                </div>
                <button class="sb-item ${activeTateHome ? 'active' : ''}" data-action="go-tate">
                    <span class="sb-item-marker"></span>
                    <span class="sb-item-text">Vue d'ensemble</span>
                </button>
                ${tateItems}
            </div>

            <div class="sb-section">
                <div class="sb-section-label">
                    <span>Ressources</span>
                </div>
                <button class="sb-item ${activeLearning ? 'active' : ''}" data-action="go-learning">
                    <span class="sb-item-marker"></span>
                    <span class="sb-item-text">Apprentissage</span>
                </button>
            </div>
        </nav>

        <div class="sb-footer">
            <span>${new Date().getFullYear()} · flexlab</span>
            <a href="https://auguste-brain.vercel.app" target="_blank">↗</a>
        </div>
    `;

    document.getElementById('sb-search-input')?.addEventListener('input', (e) => {
        state.search = e.target.value;
        if (state.view !== 'home') { state.view = 'home'; }
        renderMain();
    });
    document.querySelectorAll('#sidebar [data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const act = btn.dataset.action;
            if (act === 'go-home')     { state.view = 'home'; }
            if (act === 'go-tate')     { state.view = 'tate'; }
            if (act === 'go-learning') { state.view = 'learning'; }
            if (act === 'select-debate') {
                state.view = 'debate';
                state.debateId = btn.dataset.id;
                state.subtab = 'fiche';
            }
            if (act === 'select-tate') {
                state.view = 'tate-video';
                state.tateVideoId = btn.dataset.id;
            }
            render();
        });
    });
}

// ---- Main content rendering ----------------------------
function renderMain() {
    const main = document.getElementById('main');
    let html = '';

    if (state.view === 'home')            html = renderHome();
    else if (state.view === 'debate')     html = renderDebate();
    else if (state.view === 'tate')       html = renderTateHome();
    else if (state.view === 'tate-video') html = renderTateVideo();
    else if (state.view === 'learning')   html = renderLearningShell();

    main.innerHTML = html;
    attachMainEvents();
}

// ---- HOME ----------------------------------------------
function renderHome() {
    const filter = state.search.toLowerCase().trim();
    const filtered = filter
        ? debates.filter(d =>
            d.titre.toLowerCase().includes(filter) ||
            d.these.toLowerCase().includes(filter) ||
            d.faits_cles.some(f => f.toLowerCase().includes(filter))
          )
        : debates;

    const tateFiltered = filter
        ? TATE_CORPUS.filter(t =>
            t.title.toLowerCase().includes(filter) ||
            t.theme.toLowerCase().includes(filter) ||
            t.thesis.toLowerCase().includes(filter)
          )
        : TATE_CORPUS;

    const debateList = filtered.map((d, i) => `
        <div class="home-item" data-action="select-debate" data-id="${d.id}">
            <div class="home-item-num">${String(i+1).padStart(2, '0')}</div>
            <div class="home-item-body">
                <h3 class="home-item-title">${escape(d.titre)}</h3>
                <p class="home-item-thesis">${escape(d.these)}</p>
                <div class="home-item-meta">
                    <span>${d.sources_count} sources</span>
                    <span>${d.faits_cles.length} chiffres clés</span>
                    ${d.pdf_path ? '<span>PDF disponible</span>' : ''}
                </div>
            </div>
            <div class="home-item-arrow">→</div>
        </div>
    `).join('');

    const tateList = tateFiltered.slice(0, 5).map((t, i) => `
        <div class="home-item" data-action="select-tate" data-id="${t.id}">
            <div class="home-item-num">${String(i+1).padStart(2, '0')}</div>
            <div class="home-item-body">
                <h3 class="home-item-title">${escape(t.title)}</h3>
                <p class="home-item-thesis">${escape(t.thesis)}</p>
                <div class="home-item-meta">
                    <span>${t.theme}</span>
                    <span>${t.tag}</span>
                </div>
            </div>
            <div class="home-item-arrow">→</div>
        </div>
    `).join('');

    return `
        <div class="home-hero">
            <div class="home-hero-eyebrow">Corpus intellectuel</div>
            <h1>Débats, fiches, citations, posters. Un seul endroit.</h1>
            <p>Chaque débat est décomposé en cinq modes rhétoriques. Chaque prise est sourcée. Chaque citation est attribuée. Chaque poster imprimable.</p>
        </div>

        <div class="home-section">
            <div class="home-section-head">
                <div class="home-section-title">Débats</div>
                <div class="home-section-count">${filtered.length} / ${debates.length}</div>
            </div>
            <div class="home-list">${debateList || '<div class="empty-state"><div class="empty-state-title">Rien pour cette recherche.</div>Essaie un autre terme.</div>'}</div>
        </div>

        <div class="home-section">
            <div class="home-section-head">
                <div class="home-section-title">Corpus Andrew Tate — vidéos analysées</div>
                <div class="home-section-count">${tateFiltered.length} / ${TATE_CORPUS.length}</div>
            </div>
            <div class="home-list">${tateList}</div>
        </div>
    `;
}

// ---- DEBATE view ---------------------------------------
function renderDebate() {
    const d = debates.find(x => x.id === state.debateId);
    if (!d) return '<div class="empty-state">Débat introuvable</div>';

    const cits = citations.filter(c => c.debat === state.debateId);
    const poster = posterData.find(p => p.id === state.debateId);
    const hasFiches = typeof fichesContent !== 'undefined' && !!fichesContent[state.debateId];

    const factsHtml = d.faits_cles.map((f, i) => `<li data-num="${String(i+1).padStart(2, '0')}">${escape(f)}</li>`).join('');

    const modesHtml = d.modes.map((m, i) => `
        <div class="fiche-mode" data-mode="${m}">
            <div class="fiche-mode-head" data-action="toggle-mode">
                <span class="fiche-mode-index">M${i+1}</span>
                <span class="fiche-mode-dot" style="background:${mode2color(m)}"></span>
                <span class="fiche-mode-title">${escape(mode2label(m))}</span>
                <span class="fiche-mode-caret">▸</span>
            </div>
            <div class="fiche-mode-body">${hasFiches && fichesContent[state.debateId][m] ? renderFicheMode(fichesContent[state.debateId][m]) : '<p>Contenu en préparation.</p>'}</div>
        </div>
    `).join('');

    let contentHtml = '';
    if (state.subtab === 'fiche') {
        contentHtml = `
            <div class="content-wrap">
                <div class="fiche-thesis-block">${escape(d.these)}</div>

                <div class="fiche-section">
                    <div class="fiche-section-label">Chiffres clés · ${d.faits_cles.length} data points</div>
                    <ul class="fiche-facts">${factsHtml}</ul>
                </div>

                <div class="fiche-section">
                    <div class="fiche-section-label">Décomposition en 5 modes rhétoriques</div>
                    <div class="fiche-modes">${modesHtml}</div>
                </div>

                ${d.pdf_path ? `
                <div class="fiche-section">
                    <div class="fiche-section-label">Fiche complète</div>
                    <a href="${d.pdf_path}" target="_blank" class="fiche-pdf-download">↓ Télécharger le PDF</a>
                </div>` : ''}
            </div>
        `;
    } else if (state.subtab === 'citations') {
        const citsHtml = cits.length ? cits.map(c => `
            <div class="cit-item">
                <div class="cit-mark" style="background:${mode2color(c.mode)}"></div>
                <div>
                    <div class="cit-quote">« ${escape(c.quote)} »</div>
                    <div class="cit-attr">
                        <span class="cit-author">${escape(c.auteur)}</span>
                        ${c.source ? `<span class="cit-source">${escape(c.source)}</span>` : ''}
                        <span class="cit-mode-tag">${escape(mode2label(c.mode))}</span>
                    </div>
                </div>
            </div>
        `).join('') : '<div class="cit-empty">Aucune citation pour ce débat pour l\'instant.</div>';
        contentHtml = `<div class="content-wrap"><div class="cit-list">${citsHtml}</div></div>`;
    } else if (state.subtab === 'posters') {
        if (poster) {
            const statsHtml = poster.stats.map(s => `
                <div class="poster-stat-row">
                    <div class="poster-stat-num">${escape(s.number)}</div>
                    <div class="poster-stat-lbl">${escape(s.label)}</div>
                </div>
            `).join('');
            contentHtml = `
                <div class="content-wrap">
                    <div class="poster-large">
                        <div class="poster-large-title">${escape(poster.title)}</div>
                        <div class="poster-large-thesis">${escape(poster.thesis)}</div>
                        <div class="poster-large-stats">${statsHtml}</div>
                        <div class="poster-large-closure">« ${escape(poster.cloture)} »</div>
                    </div>
                </div>
            `;
        } else {
            contentHtml = '<div class="content-wrap"><div class="cit-empty">Pas de poster pour ce débat.</div></div>';
        }
    }

    return `
        <div class="main-header">
            <div class="main-breadcrumb">
                <span data-action="go-home" style="cursor:pointer">Débats</span>
                <span class="crumb-sep">›</span>
                <span class="crumb-current">${escape(d.titre)}</span>
            </div>
            <div class="main-title-wrap">
                <h1 class="main-title">${escape(d.titre)}</h1>
                <p class="main-subtitle">${escape(d.these)}</p>
            </div>
            <div class="main-meta">
                <span class="meta-chip"><strong>${d.sources_count}</strong> sources</span>
                <span class="meta-chip"><strong>${d.faits_cles.length}</strong> chiffres</span>
                <span class="meta-chip"><strong>${cits.length}</strong> citations</span>
                ${d.pdf_path ? '<span class="meta-chip">PDF</span>' : ''}
            </div>
            <div class="subtabs">
                <button class="subtab ${state.subtab === 'fiche' ? 'active' : ''}" data-subtab="fiche">Fiche<span class="subtab-count">${d.faits_cles.length + d.modes.length}</span></button>
                <button class="subtab ${state.subtab === 'citations' ? 'active' : ''}" data-subtab="citations">Citations<span class="subtab-count">${cits.length}</span></button>
                <button class="subtab ${state.subtab === 'posters' ? 'active' : ''}" data-subtab="posters">Poster<span class="subtab-count">${poster ? 1 : 0}</span></button>
            </div>
        </div>
        <div class="main-content">${contentHtml}</div>
    `;
}

function renderFicheMode(modeData) {
    let html = '';
    if (modeData.these) html += `<blockquote>${escape(modeData.these)}</blockquote>`;
    if (modeData.stats && modeData.stats.length) {
        html += '<h4>Points</h4><ul>';
        modeData.stats.forEach(s => html += `<li>${escape(s)}</li>`);
        html += '</ul>';
    }
    if (modeData.cloture) html += `<h4>Clôture</h4><p><em>${escape(modeData.cloture)}</em></p>`;
    return html;
}

// ---- TATE overview -------------------------------------
function renderTateHome() {
    const list = TATE_CORPUS.map((t, i) => `
        <div class="home-item" data-action="select-tate" data-id="${t.id}">
            <div class="home-item-num">${String(i+1).padStart(2, '0')}</div>
            <div class="home-item-body">
                <h3 class="home-item-title">${escape(t.title)}</h3>
                <p class="home-item-thesis">${escape(t.thesis)}</p>
                <div class="home-item-meta">
                    <span>${escape(t.theme)}</span>
                    <span>${escape(t.tag)}</span>
                    <span>${escape(t.depth)}</span>
                </div>
            </div>
            <div class="home-item-arrow">→</div>
        </div>
    `).join('');

    return `
        <div class="main-header">
            <div class="main-breadcrumb">
                <span data-action="go-home" style="cursor:pointer">Accueil</span>
                <span class="crumb-sep">›</span>
                <span class="crumb-current">Corpus Andrew Tate</span>
            </div>
            <div class="main-title-wrap">
                <h1 class="main-title">Andrew Tate — Corpus d'étude</h1>
                <p class="main-subtitle">Huit vidéos analysées. Chaque fiche : résumé exécutif, cours en 8-12 leçons, structure narrative, points-clés avec citations, recueil de quotes classées, analyse rhétorique complète, exemples & analogies, frameworks opérationnels, drills, limites critiques.</p>
            </div>
        </div>
        <div class="main-content">
            <div class="home-list">${list}</div>
        </div>
    `;
}

// ---- TATE video detail ---------------------------------
function renderTateVideo() {
    const t = TATE_CORPUS.find(x => x.id === state.tateVideoId);
    if (!t) return '<div class="empty-state">Vidéo introuvable</div>';

    const quotesHtml = (t.quotes || []).map(q => `
        <div class="tate-quote">
            <div class="tate-quote-text">« ${escape(q.text)} »</div>
            <div class="tate-quote-tag">${escape(q.tag)}</div>
        </div>
    `).join('');

    return `
        <div class="main-header">
            <div class="main-breadcrumb">
                <span data-action="go-home" style="cursor:pointer">Accueil</span>
                <span class="crumb-sep">›</span>
                <span data-action="go-tate" style="cursor:pointer">Corpus Tate</span>
                <span class="crumb-sep">›</span>
                <span class="crumb-current">${escape(t.title)}</span>
            </div>
            <div class="main-title-wrap">
                <h1 class="main-title">${escape(t.title)}</h1>
                <p class="main-subtitle">${escape(t.thesis)}</p>
            </div>
            <div class="main-meta">
                <span class="meta-chip">${escape(t.theme)}</span>
                <span class="meta-chip"><strong>${t.tag}</strong> · ${escape(t.depth)}</span>
                <span class="meta-chip">ID <strong>${t.id}</strong></span>
            </div>
        </div>
        <div class="main-content">
            <div class="tate-video-detail">
                <div class="tate-links-row">
                    <a href="https://youtu.be/${t.id}" target="_blank" class="tate-link">↗ Voir la vidéo</a>
                    <a href="../fiches/andrew-tate/fiche-${t.slug}.md" target="_blank" class="tate-link primary">Lire la fiche complète</a>
                </div>

                <div class="fiche-section" style="margin-top:36px">
                    <div class="fiche-section-label">Citations extraites — ${(t.quotes || []).length} quotes</div>
                    <div class="tate-video-quotes">${quotesHtml || '<div class="cit-empty">Quotes en préparation.</div>'}</div>
                </div>
            </div>
        </div>
    `;
}

// ---- LEARNING shell ------------------------------------
function renderLearningShell() {
    return `
        <div class="main-header">
            <div class="main-breadcrumb">
                <span data-action="go-home" style="cursor:pointer">Accueil</span>
                <span class="crumb-sep">›</span>
                <span class="crumb-current">Apprentissage</span>
            </div>
            <div class="main-title-wrap">
                <h1 class="main-title">Apprentissage</h1>
                <p class="main-subtitle">Modules structurés : Dan Koe (Fix your life in 1 day, HUMAN 3.0), Andrew Tate (patterns rhétoriques, drills de réécriture).</p>
            </div>
        </div>
        <div class="main-content" style="padding:0">
            <div class="learning-shell">
                <aside class="learning-sidebar">
                    <div class="learning-sidebar-title">Modules</div>
                    <button class="learning-nav-btn active" data-module="dankoe-1day">Dan Koe — Fix your life in 1 day</button>
                    <button class="learning-nav-btn" data-module="dankoe-human3">Dan Koe — HUMAN 3.0</button>
                    <button class="learning-nav-btn" data-module="tate-patterns">Andrew Tate — Patterns rhétoriques</button>
                    <button class="learning-nav-btn" data-module="tate-drills">Andrew Tate — Drills de réécriture</button>
                </aside>
                <main class="learning-content" id="learning-content"></main>
            </div>
        </div>
    `;
}

// ---- Event wiring for main -----------------------------
function attachMainEvents() {
    document.querySelectorAll('#main [data-action]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            const act = el.dataset.action;
            if (act === 'go-home')      { state.view = 'home'; render(); }
            if (act === 'go-tate')      { state.view = 'tate'; render(); }
            if (act === 'select-debate') { state.view = 'debate'; state.debateId = el.dataset.id; state.subtab = 'fiche'; render(); }
            if (act === 'select-tate')   { state.view = 'tate-video'; state.tateVideoId = el.dataset.id; render(); }
            if (act === 'toggle-mode') {
                const parent = el.closest('.fiche-mode');
                parent.classList.toggle('open');
            }
        });
    });
    document.querySelectorAll('#main .subtab').forEach(btn => {
        btn.addEventListener('click', () => {
            state.subtab = btn.dataset.subtab;
            render();
        });
    });
    if (state.view === 'learning' && typeof renderLearning === 'function') {
        // reset init flag so listeners re-attach after DOM re-render
        if (typeof learningInitialized !== 'undefined') { learningInitialized = false; }
        setTimeout(renderLearning, 10);
    }
}

// ---- Render ---------------------------------------------
function render() {
    renderSidebar();
    renderMain();
}

document.addEventListener('DOMContentLoaded', render);
