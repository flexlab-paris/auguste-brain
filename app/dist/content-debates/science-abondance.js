// /mindmap/content-debates/science-abondance.js
// Deep content for debate — "La Science comme Religion Politique — Abondance vs Rationnement"
// Source: data/science-abondance.json + fiches/science-abondance/fiches-science-abondance.tex

const CONTENT_DEBATES_science_abondance = {
  id: "science-abondance",
  slug: "science-abondance",
  title: "La Science comme Religion Politique — Abondance vs Rationnement",
  speaker: "Auguste Pugnet",
  format: "Débat structuré · Fiche rhétorique",
  word_count: 7200,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "La science n'est pas corrompue par accident — elle est systématiquement instrumentalisée.",
  thesis: "La 'science' est devenue une religion politique — invoquée comme autorité incontestable pour justifier le rationnement (Malthus, Schwab, WEF), alors que la France possède 11 millions de km² de ZEE, des macroalgues à 120 t/ha, du chanvre, de l'ammoniac naval, des nodules polymétalliques : l'abondance existe, mais elle est étouffée par une bureaucratie qui préfère le contrôle à la souveraineté.",
  key_takeaways: [
    "Quand on te dit 'the science is clear', réponds 'montre-moi les axiomes' — Hilbert attend encore (6e problème, 1900, non résolu)",
    "Trois questions à poser face à un modèle : (1) quelles hypothèses ? (2) qui a financé ? (3) quel intervalle de confiance ?",
    "0.5% de la ZEE française en culture de macroalgues = 400 Md m³ de méthane/an = consommation gazière UE entière",
    "Le chanvre absorbe plus de CO₂ qu'il n'en émet — construction carbone-négative dans un secteur qui pèse 30% des émissions mondiales",
    "L'ammoniac (NH₃) est un carburant naval zéro-carbone connu depuis 20 ans — la France peut propulser la plus grande flotte du monde",
    "Distinguer méthode scientifique (sacrée) de institution scientifique (corruptible) — ne pas basculer dans le rejet total",
    "L'abondance est un choix politique, pas un miracle : Venise est née d'un marécage, Suez d'un désert, la souveraineté française attend son plan",
    "Le rationnement sert ceux qui contrôlent les ressources existantes — l'abondance libère ceux qui pourraient produire les nouvelles",
  ],

  // ============================================================
  // 2. STRUCTURE — 5 MODES RHÉTORIQUES
  // ============================================================
  structure: {
    rouge: {
      mode: "Abrasif · Le Marteau",
      these: "La science n'est pas corrompue par accident. Elle est systématiquement instrumentalisée par le pouvoir, exactement comme la religion l'était par les Borgias. Ceux qui disent 'the science is clear' sont les nouveaux curés d'une église qui ne tolère pas le doute.",
      stats: [
        { number: "50 ans", label: "de politique nutritionnelle basée sur un mensonge scientifique payé par l'industrie sucrière (JAMA)" },
        { number: "500 000", label: "morts prédits par Ferguson au Royaume-Uni sans confinement (modèle non-audité, non-reproductible)" },
        { number: "11 M km²", label: "ZEE française — 2e mondiale — inexploitée pendant qu'on brade nos richesses" },
        { number: "4 000", label: "méthaniers nécessaires pour remplacer le gaz russe par du GNL américain (importé)" },
        { number: "1929", label: "année Bernays vend la cigarette aux femmes comme 'flambeaux de la liberté' — même méthode aujourd'hui" },
      ],
      cloture: "Quand le prêtre te dit 'c'est la parole de Dieu', tu as le droit de douter. Quand le politique te dit 'the science is clear', tu as le devoir de douter. Parce que derrière les deux, il y a quelqu'un qui veut ton obéissance.",
    },
    orange: {
      mode: "Combatif · L'Épée",
      these: "Tout modèle repose sur des hypothèses. Celui qui refuse de déclarer ses hypothèses ne fait pas de la science — il fait de la politique déguisée. Exigeons la transparence : retournez le paquet de cigarettes.",
      stats: [
        { number: "6e problème", label: "de Hilbert (1900) : l'axiomatisation de la physique reste NON RÉSOLU 126 ans plus tard" },
        { number: "3 questions", label: "à poser à tout modèle : hypothèses / financement / intervalle de confiance" },
        { number: "0.3 M km²", label: "ZEE de la Corée du Sud (36× moins que la France) — leader mondial des algues" },
        { number: "0.5%", label: "de la ZEE française = souveraineté énergétique complète" },
        { number: "1 fait", label: "suffit à réfuter une théorie (Popper) — le consensus n'est PAS un vote" },
      ],
      cloture: "Talleyrand disait : ce qui va sans dire va mieux en le disant. Moi je dis : ce qui va sans hypothèse va mieux en la déclarant. Déclarez vos hypothèses, et on discutera de science. Sinon, on discute de religion.",
    },
    jaune: {
      mode: "Persuasif · L'Architecte",
      these: "Les calculs démontrent que la France peut devenir énergétiquement souveraine et exportatrice nette, en mobilisant moins de 1% de sa Zone Économique Exclusive. Ce n'est pas un rêve — c'est de l'arithmétique.",
      stats: [
        { number: "120 t/ha", label: "matière sèche macroalgues en surface — en profondeur (30m colonnes verticales) potentiellement 900 t/ha" },
        { number: "55 000 km²", label: "0.5% de la ZEE = 5.5 millions d'hectares de culture d'algues potentielle" },
        { number: "400 Md m³/an", label: "de méthane potentiel — égal à la consommation UE entière, supérieur aux exports russes (~300 Md m³)" },
        { number: "200-400 Md€", label: "investissement estimé — vs 3 300 Md€ de dette accumulée pour rien" },
        { number: "6 t/ha", label: "chanvre terrestre — construction carbone-négative dans un secteur (bâtiment) qui pèse 30% des émissions mondiales" },
      ],
      cloture: "0.5% de notre mer. 10% de notre dette. 100% de notre énergie. Les chiffres sont là. Le seul obstacle, c'est l'ignorance organisée.",
    },
    vert: {
      mode: "Inspirant · Le Phare",
      these: "La France n'est pas un pays continental qui a une façade maritime. C'est une puissance océanique qui s'est oubliée. Avec 11 millions de km² de mer, elle possède le plus grand territoire du monde — si elle ose le voir.",
      stats: [
        { number: "11 M km²", label: "ZEE française — plus vaste que la métropole × 20, le plus grand territoire au monde par surface totale" },
        { number: "1869", label: "Ferdinand de Lesseps ouvre Suez : un Français transforme la géographie du monde" },
        { number: "15 ans", label: "durée de construction du parc nucléaire français (1975-1990) — quand la volonté est là, les délais fondent" },
        { number: "Canebière", label: "nom marseillais de 'cannabis' en provençal — Colbert plantait du chanvre pour la marine française" },
        { number: "0 CO₂", label: "carburant ammoniac naval — technologie connue depuis 20 ans, brevets partiels français" },
      ],
      cloture: "Venise a bâti un empire depuis un marécage. Ferdinand de Lesseps a coupé un continent en deux. Colbert a planté du chanvre pour conquérir les océans. La France a 11 millions de km² de mer et une dette de 3 300 milliards pour rien. L'histoire nous jugera : avions-nous les moyens, ou nous manquait-il le courage ?",
    },
    bleu: {
      mode: "Socratique · Le Miroir",
      these: "Je ne vais rien affirmer. Je vais poser des questions. Si les réponses vous dérangent, ce n'est pas ma faute — c'est celle de la réalité.",
      stats: [
        { number: "5 g/semaine", label: "microplastiques ingérés par personne — les algues fixent les métaux lourds. Pourquoi n'en parle-t-on pas ?" },
        { number: "0.5% vs 4 000", label: "0.5% de notre mer OU 4 000 méthaniers américains — quelle option est rationnelle ?" },
        { number: "126 ans", label: "depuis Hilbert 1900 sans axiomatisation de la physique — sur quoi repose 'the science is clear' ?" },
        { number: "1929", label: "Bernays paie des médecins pour vendre la cigarette — quand exactement la méthode a-t-elle cessé de fonctionner ?" },
        { number: "3 300 vs 300", label: "3 300 Md€ de dette pour rien vs 300 Md€ pour la souveraineté — lequel est irresponsable ?" },
      ],
      cloture: "Je n'ai rien affirmé ce soir. J'ai posé des questions. Si ces questions vous ont dérangé, demandez-vous pourquoi. Baudelaire disait que la plus belle ruse du diable est de vous persuader qu'il n'existe pas. La plus belle ruse du rationnement, c'est de vous persuader que l'abondance est impossible. Elle est sous vos pieds. À 11 millions de km².",
    },
  },

  // ============================================================
  // 3. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "La 'science' est instrumentalisée pour justifier le rationnement, alors que l'abondance existe à condition politique et technique — la France en possède les clés",
      children: [
        {
          claim: "La 'science' populaire est capturée par des intérêts — Bernays, JAMA, Ferguson en sont la preuve",
          type: "premise",
          strength: 8,
          evidence: [
            "Bernays vend le tabac aux femmes comme 'flambeaux de la liberté' (1929)",
            "Kearns, Schmidt & Glantz JAMA Internal Medicine 2016 : l'industrie sucrière a payé Harvard pour blâmer les graisses (1967)",
            "Ferguson Imperial College COVID-19 : modèle non-audité qui a justifié les confinements mondiaux",
          ],
          children: [
            {
              claim: "50 ans de politique nutritionnelle basée sur un mensonge scientifique payé",
              type: "example",
              strength: 9,
            },
          ],
        },
        {
          claim: "Distinguer méthode (sacrée) de institution (corruptible) — l'attaque porte sur la capture politique, pas sur la science",
          type: "premise",
          strength: 9,
          evidence: [
            "La méthode scientifique (Popper : falsifiabilité) est un principe universel",
            "Les institutions (universités, agences, revues) sont soumises aux financements",
            "Ne pas basculer dans l'anti-science globale — précision chirurgicale",
          ],
        },
        {
          claim: "Tout modèle repose sur des hypothèses choisies — le 6e problème de Hilbert le confirme",
          type: "premise",
          strength: 8,
          evidence: [
            "Hilbert 1900 : peut-on axiomatiser la physique ? Non résolu en 2026",
            "Conséquence : aucun modèle physique n'a de fondement axiomatique démontré",
            "Toute modélisation repose sur des hypothèses choisies, pas prouvées",
          ],
        },
        {
          claim: "L'idéologie du rationnement (Malthus, Schwab, WEF) sert ceux qui contrôlent les ressources existantes",
          type: "premise",
          strength: 6,
          evidence: [
            "Malthus 1798 : famine mondiale prédite, réfutée par les révolutions agricoles",
            "Chaque génération malthusienne a été démentie par l'innovation",
            "Great Reset (Schwab) : 'You will own nothing and be happy'",
            "Rationnisme = contrôle, pas libération",
          ],
        },
        {
          claim: "La France possède les moyens de l'abondance — ZEE, algues, chanvre, ammoniac, nodules",
          type: "premise",
          strength: 8,
          evidence: [
            "ZEE 11 M km² (2e mondiale)",
            "Macroalgues : 120 t/ha (surface), potentiellement 900 t/ha (colonnes verticales)",
            "Chanvre : Colbert le plantait déjà — Canebière = cannabis en provençal",
            "Ammoniac : carburant naval zéro-carbone connu depuis 20 ans",
            "Nodules polymétalliques : Mn, Ni, Co, Cu dans les fonds océaniques",
          ],
          children: [
            {
              claim: "0.5% de la ZEE en macroalgues = 400 Md m³ de méthane = consommation gazière UE",
              type: "example",
              strength: 8,
              evidence: [
                "5.5 millions d'hectares",
                "Méthanisation 40% de rendement",
                "Investissement 200-400 Md€ vs 3 300 Md€ de dette",
              ],
            },
            {
              claim: "La Corée du Sud, 36× moins de mer, est leader mondial des algues",
              type: "example",
              strength: 9,
            },
          ],
        },
        {
          claim: "L'histoire nous donne les exemples : Venise sortie d'un marécage, Suez d'un désert",
          type: "premise",
          strength: 6,
          evidence: [
            "Venise commence comme camp de réfugiés dans une lagune boueuse",
            "Devient la plus belle ville d'Europe et 1re puissance commerciale méditerranéenne",
            "Ferdinand de Lesseps 1869 : Français transforme la géographie mondiale",
            "Nucléaire français construit en 15 ans (1975-1990)",
          ],
        },
        {
          claim: "Les alternatives françaises sont technologiquement mûres et financièrement raisonnables",
          type: "premise",
          strength: 7,
          evidence: [
            "Méthanisation industrielle : technologie existante",
            "Ammoniac naval : projets pilotes Maersk, MAN Energy Solutions",
            "Chanvre construction : filière existante en France (1er producteur européen)",
            "Coût 200-400 Md€ vs 3 300 Md€ de dette",
          ],
        },
      ],
    },
  },

  // ============================================================
  // 4. QUOTES
  // ============================================================
  quotes: [
    {
      text: "Un modèle n'est pas la réalité. C'est une opinion mathématique. Et les opinions, ça s'achète.",
      context: "Mode Rouge — attaque de la science modélisée",
      tags: ["modele", "science", "provocation", "opinion"],
      rhetorical_device: "reframe conceptuel / accusation",
      power_score: 10,
      highlight_words: ["opinion mathématique", "ça s'achète"],
    },
    {
      text: "Quand quelqu'un te dit 'la science dit que', demande-lui : qui a payé l'étude ?",
      context: "Mode Rouge — règle opérationnelle sur les études scientifiques",
      tags: ["regle", "financement", "science", "corruption"],
      rhetorical_device: "règle opérationnelle / question de test",
      power_score: 9,
      highlight_words: ["qui a payé"],
    },
    {
      text: "Quand le prêtre te dit 'c'est la parole de Dieu', tu as le droit de douter. Quand le politique te dit 'the science is clear', tu as le devoir de douter.",
      context: "Clôture Mode Rouge — parallélisme droit/devoir",
      tags: ["cloture", "science", "religion", "parallelisme"],
      rhetorical_device: "parallélisme + gradation morale",
      power_score: 10,
      highlight_words: ["droit de douter", "devoir de douter"],
    },
    {
      text: "Ils te disent de te serrer la ceinture pendant qu'ils bradent ton héritage maritime.",
      context: "Mode Rouge — dénonciation de l'incohérence",
      tags: ["provocation", "elites", "hypocrisie", "maritime"],
      rhetorical_device: "chiasme / attaque de l'hypocrisie",
      power_score: 8,
      highlight_words: ["serrer la ceinture", "bradent"],
    },
    {
      text: "Montrez-moi les axiomes. Hilbert attend encore.",
      context: "Mode Orange — retournement scientifique face au 'the science is clear'",
      tags: ["hilbert", "axiomes", "orange", "retournement"],
      rhetorical_device: "retournement d'autorité / défi",
      power_score: 10,
      highlight_words: ["axiomes", "Hilbert"],
    },
    {
      text: "Je n'ai pas besoin d'être boulanger pour savoir que le pain est brûlé.",
      context: "Mode Orange — réponse à 'tu n'es pas scientifique'",
      tags: ["analogie", "science", "boulanger", "orange"],
      rhetorical_device: "analogie de la compétence / argument du bon sens",
      power_score: 9,
      highlight_words: ["boulanger", "pain brûlé"],
    },
    {
      text: "Un consensus n'est pas un vote. En science, un seul fait suffit à invalider une théorie. C'est Popper, pas Twitter.",
      context: "Mode Orange — sur le 'consensus scientifique'",
      tags: ["consensus", "popper", "science", "twitter"],
      rhetorical_device: "citation autorité + opposition rhétorique",
      power_score: 9,
      highlight_words: ["Popper, pas Twitter"],
    },
    {
      text: "Ce qui va sans hypothèse va mieux en la déclarant.",
      context: "Mode Orange — réécriture Talleyrand",
      tags: ["talleyrand", "hypothese", "science", "clarté"],
      rhetorical_device: "reprise / réécriture d'un classique",
      power_score: 8,
      highlight_words: ["hypothèse", "déclarant"],
    },
    {
      text: "Déclarez vos hypothèses, et on discutera de science. Sinon, on discute de religion.",
      context: "Clôture Mode Orange — condition de dialogue",
      tags: ["cloture", "science", "religion", "condition"],
      rhetorical_device: "condition dialogique / clôture posant l'alternative",
      power_score: 10,
      highlight_words: ["hypothèses", "religion"],
    },
    {
      text: "Il n'y a qu'un seul homme de trop sur terre, c'est Monsieur Malthus.",
      context: "Citation Proudhon — Mode Jaune, sur l'obsolescence du malthusianisme",
      tags: ["citation", "proudhon", "malthus", "abondance"],
      rhetorical_device: "citation historique / renversement",
      power_score: 9,
      highlight_words: ["un seul homme de trop", "Malthus"],
    },
    {
      text: "0.5% de notre mer. 10% de notre dette. 100% de notre énergie.",
      context: "Clôture Mode Jaune — triade des chiffres condensée",
      tags: ["cloture", "chiffres", "triade", "jaune"],
      rhetorical_device: "gradation ternaire / mémorisation",
      power_score: 10,
      highlight_words: ["0.5%", "10%", "100%"],
    },
    {
      text: "Ce n'est pas une question de moyens. C'est une question de volonté.",
      context: "Mode Jaune — comparaison Corée du Sud (36× moins de mer, leader mondial)",
      tags: ["volonte", "moyens", "coree", "comparaison"],
      rhetorical_device: "opposition sémantique / recadrage psychologique",
      power_score: 9,
      highlight_words: ["question de volonté"],
    },
    {
      text: "Le méthane issu de la méthanisation est du cycle court — le carbone vient des algues qui l'ont fixé. C'est neutre en carbone.",
      context: "Mode Jaune — réponse technique à 'le méthane est un GES'",
      tags: ["methane", "carbone", "algues", "cycle"],
      rhetorical_device: "démonstration technique / distinction",
      power_score: 7,
      highlight_words: ["cycle court", "neutre en carbone"],
    },
    {
      text: "Venise a commencé comme un camp de réfugiés — populations fuyant les invasions barbares, réfugiées sur des îlots boueux.",
      context: "Mode Vert — récit fondateur",
      tags: ["venise", "histoire", "vert", "recit"],
      rhetorical_device: "narratif fondateur / anecdote historique",
      power_score: 8,
      highlight_words: ["camp de réfugiés", "îlots boueux"],
    },
    {
      text: "Ce ne sont pas les ressources naturelles qui font la puissance. C'est la volonté d'ingénierie — transformer ce qu'on a en ce qu'on veut.",
      context: "Mode Vert — leçon de Venise",
      tags: ["ingenierie", "volonte", "venise", "puissance"],
      rhetorical_device: "leçon condensée / redéfinition",
      power_score: 9,
      highlight_words: ["volonté d'ingénierie", "transformer"],
    },
    {
      text: "Colbert encourageait la culture du chanvre pour les cordages de la marine française. La Canebière à Marseille vient de 'cannabis' — chanvre en provençal.",
      context: "Mode Vert — l'abondance est dans notre ADN toponymique",
      tags: ["colbert", "chanvre", "canebiere", "histoire"],
      rhetorical_device: "révélation étymologique / continuité historique",
      power_score: 8,
      highlight_words: ["Canebière", "cannabis"],
    },
    {
      text: "La différence entre un rêve et un plan, c'est un tableur Excel et de la volonté politique.",
      context: "Mode Vert — réponse à 'c'est un rêve déconnecté'",
      tags: ["reve", "plan", "vert", "tableur"],
      rhetorical_device: "définition-formule / réduction opérationnelle",
      power_score: 8,
      highlight_words: ["tableur Excel", "volonté politique"],
    },
    {
      text: "Elle a 3 300 milliards de dette pour rien. 300 milliards pour la souveraineté énergétique, c'est le meilleur investissement de l'histoire de France.",
      context: "Mode Vert — recadrage de l'objection budgétaire",
      tags: ["dette", "souverainete", "investissement", "vert"],
      rhetorical_device: "comparaison choc / recadrage priorités",
      power_score: 9,
      highlight_words: ["3 300 milliards pour rien", "meilleur investissement"],
    },
    {
      text: "L'histoire nous jugera : avions-nous les moyens, ou nous manquait-il le courage ?",
      context: "Clôture Mode Vert — question rhétorique sur la responsabilité historique",
      tags: ["cloture", "histoire", "courage", "vert"],
      rhetorical_device: "question rhétorique de clôture / verdict historique",
      power_score: 10,
      highlight_words: ["l'histoire nous jugera", "courage"],
    },
    {
      text: "La France a 11 millions de km² de zone maritime. Pouvez-vous m'expliquer pourquoi on parle de 'ressources limitées' ?",
      context: "Mode Bleu — question sur le cadrage du rationnement",
      tags: ["socratique", "ressources", "zee", "cadrage"],
      rhetorical_device: "question socratique / renversement du cadrage",
      power_score: 9,
      highlight_words: ["11 millions", "ressources limitées"],
    },
    {
      text: "Le 6e problème de Hilbert demande : peut-on axiomatiser la physique ? Il est posé depuis 1900 et non résolu. Sur quoi exactement repose votre certitude ?",
      context: "Mode Bleu — question fondamentale sur les fondements scientifiques",
      tags: ["hilbert", "axiomatique", "certitude", "socratique"],
      rhetorical_device: "question fondamentale / défi épistémologique",
      power_score: 10,
      highlight_words: ["axiomatiser", "certitude"],
    },
    {
      text: "Il faudrait 4 000 méthaniers pour remplacer le gaz russe par du GNL américain. Ou 0.5% de notre mer. Quelle option vous semble la plus rationnelle ?",
      context: "Mode Bleu — question de choix radical",
      tags: ["choix", "methanier", "algues", "socratique"],
      rhetorical_device: "question comparative de choix",
      power_score: 9,
      highlight_words: ["4 000 méthaniers", "0.5%"],
    },
    {
      text: "Toutes les questions sont orientées. La différence, c'est que les miennes attendent une réponse. Les vôtres attendent du silence.",
      context: "Mode Bleu — réponse à 'tes questions sont orientées'",
      tags: ["questions", "reponse", "silence", "socratique"],
      rhetorical_device: "renversement / distinction",
      power_score: 9,
      highlight_words: ["attendent une réponse", "attendent du silence"],
    },
    {
      text: "La plus belle des ruses du diable est de vous persuader qu'il n'existe pas.",
      context: "Citation Baudelaire — Mode Rouge et Bleu",
      tags: ["baudelaire", "citation", "diable", "manipulation"],
      rhetorical_device: "citation littéraire / analogie de la manipulation",
      power_score: 9,
      highlight_words: ["diable", "n'existe pas"],
    },
    {
      text: "La plus belle ruse du rationnement, c'est de vous persuader que l'abondance est impossible.",
      context: "Clôture Mode Bleu — reprise Baudelaire retournée",
      tags: ["cloture", "rationnement", "abondance", "baudelaire"],
      rhetorical_device: "reprise/retournement d'une citation",
      power_score: 10,
      highlight_words: ["ruse du rationnement", "abondance"],
    },
    {
      text: "L'abondance est sous vos pieds. À 11 millions de km².",
      context: "Clôture finale Mode Bleu — chute condensée",
      tags: ["cloture", "abondance", "zee", "condense"],
      rhetorical_device: "chute condensée / réduction spatiale",
      power_score: 10,
      highlight_words: ["sous vos pieds", "11 millions"],
    },
    {
      text: "L'industrie sucrière a payé des chercheurs pour publier dans le JAMA — le journal médical le plus prestigieux du monde — accusant les graisses au lieu du sucre.",
      context: "Mode Rouge — exemple emblématique de capture scientifique",
      tags: ["jama", "sucre", "capture", "corruption"],
      rhetorical_device: "exemplum documenté / autorité renversée",
      power_score: 9,
      highlight_words: ["JAMA", "50 ans"],
    },
    {
      text: "Après 50 ans de mensonge sur le sucre ? Après des modèles COVID jamais audités publiquement ? Elle se corrige, oui. En 2070. Tu peux attendre ?",
      context: "Mode Rouge — réponse à 'la science se corrige d'elle-même'",
      tags: ["correction", "science", "temps", "provocation"],
      rhetorical_device: "question rhétorique + gradation temporelle absurde",
      power_score: 8,
      highlight_words: ["en 2070", "peux attendre"],
    },
    {
      text: "L'ammoniac est un carburant naval zéro-carbone connu depuis 20 ans. Combien de conférences COP faut-il pour le découvrir ?",
      context: "Mode Bleu — question sur les COP",
      tags: ["ammoniac", "cop", "socratique", "provocation"],
      rhetorical_device: "question rhétorique + attaque des institutions climatiques",
      power_score: 8,
      highlight_words: ["ammoniac", "COP"],
    },
    {
      text: "CRISPR-Cas9 : la France a contribué à la découverte, les Américains détiennent les brevets. Est-ce un problème de science ou un problème de stratégie ?",
      context: "Mode Bleu — question distinguant science et politique industrielle",
      tags: ["crispr", "brevets", "france", "strategie"],
      rhetorical_device: "question distinctive / diagnostic",
      power_score: 8,
      highlight_words: ["CRISPR", "stratégie"],
    },
  ],

  // ============================================================
  // 5. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "Tu es complotiste — tu remets en cause la science.",
        response: "Distinguer méthode scientifique (sacrée) de institution scientifique (corruptible). Concéder que la méthode est solide. Attaquer les cas documentés de capture : Bernays 1929, JAMA sucre 1967, Ferguson COVID modèle non-audité.",
        technique: "Distinction méthode/institution + exemples documentés",
        example_response_text: "Non — je ne conteste pas la méthode scientifique. Popper, la falsifiabilité, la reproductibilité — sacrés. Je conteste la capture politique et industrielle des institutions. C'est le JAMA, revue à comité de lecture, qui a publié pendant 50 ans les études sucrières falsifiées. C'est Ferguson à l'Imperial College, sous financement public, dont le code COVID n'a jamais été audité publiquement. Ce ne sont pas des théories — ce sont des faits documentés.",
      },
      {
        challenge: "Les modèles de Ferguson ont sauvé des vies en justifiant les confinements.",
        response: "Contester la reproductibilité. Ferguson prédisait 500 000 morts UK sans intervention — chiffre non atteint dans les pays sans confinement strict comme la Suède. Le code C++ n'a été publié qu'après pression, avec 15 000 lignes non-versionnées et incompatibilités documentées.",
        technique: "Attaque de la reproductibilité + comparaison naturelle",
        example_response_text: "Le débat scientifique nécessite reproductibilité. Le code Ferguson n'a été publié qu'après pression publique, dans un état non-versionné, avec des bugs documentés par plusieurs équipes (Sue Denim, Konstantin Boudnik). La Suède, sans confinement strict, a eu un taux de mortalité inférieur à plusieurs pays confinés. Ça ne prouve pas que les confinements étaient inutiles — mais ça prouve que le modèle Ferguson ne peut pas être invoqué comme démonstration.",
      },
      {
        challenge: "Le calcul 400 Md m³ de méthane est de l'ordre de la fiction — vous rêvez.",
        response: "Concéder que le chiffre est un maximum théorique. Utiliser le chiffre prudent (120 t/ha au lieu de 900 t/ha en colonnes). Rappeler que la Corée du Sud produit déjà à ces rendements sur une surface 36× plus petite. C'est de l'agro-industrie, pas de la fusée.",
        technique: "Concession du maximum + repli sur le prudent + preuve empirique existante",
        example_response_text: "Le chiffre de 900 t/ha en colonnes verticales est théorique — je le concède, c'est de la R&D. Mais 120 t/ha en culture de surface est atteint aujourd'hui par les producteurs asiatiques. La Corée du Sud, avec 36× moins de mer que la France, est le leader mondial. Il ne s'agit pas d'inventer — il s'agit d'appliquer. Même à rendement conservateur, 0.5% de la ZEE française produit un ordre de grandeur comparable à la consommation gazière européenne.",
      },
      {
        challenge: "L'exploitation des océans est écologiquement dangereuse.",
        response: "Distinguer exploitation destructive (pêche industrielle, nodules débattus) de culture régénérative (macroalgues). Les algues séquestrent le CO₂, fixent les métaux lourds, ne demandent ni eau douce ni engrais ni pesticides. C'est un puits carbone actif.",
        technique: "Distinction cultiver/piller + bénéfice environnemental positif",
        example_response_text: "Il ne s'agit pas d'exploitation extractive mais de culture régénérative. Les macroalgues séquestrent le CO₂ atmosphérique, fixent les métaux lourds, dépolluent les colonnes d'eau. Elles n'ont besoin ni d'eau douce, ni de terres arables, ni d'engrais, ni de pesticides. C'est l'agriculture la plus propre au monde. Le vrai risque écologique est de continuer à importer du gaz russe et du GNL américain — bilan CO₂ délirant.",
      },
      {
        challenge: "Le WEF et Schwab ne prônent pas le rationnement mais une économie durable.",
        response: "Citer directement le WEF : 'You will own nothing and be happy' (article Ida Auken, 2016, publié sur weforum.org). Distinguer soutenabilité (partagée) de rationnement (imposé). L'un est un objectif, l'autre est une méthode contestable.",
        technique: "Citation directe + distinction méthode/objectif",
        example_response_text: "Le WEF a publié en 2016 l'article d'Ida Auken '8 predictions for the world in 2030' — 1ère phrase : 'You will own nothing. And you'll be happy.' Ce n'est pas une invention conspirationniste, c'est sur weforum.org, encore aujourd'hui. Distinguons : la soutenabilité est un objectif partagé — le rationnement est une méthode contestable. Je conteste la méthode, pas l'objectif.",
      },
      {
        challenge: "L'analogie Borgias-institutions scientifiques est provocatrice et injuste.",
        response: "Concéder que l'analogie est forte — la reformuler en pattern historique récurrent : l'Église médiévale, l'Académie soviétique de Lyssenko, la Big Tobacco des années 60. Chaque fois qu'une institution centralisée détient le monopole d'une vérité, la capture politique suit.",
        technique: "Concession du choc + généralisation historique",
        example_response_text: "L'analogie est forte, oui — je peux la reformuler. Le pattern historique est constant : une institution qui centralise la vérité (Église médiévale, Académie soviétique Lyssenko, Big Tobacco, complexes pharmaceutiques) devient un enjeu de capture. C'est un motif universel. Les Borgias en sont l'exemple romain le plus mémorable, pas le seul. Le point n'est pas d'insulter — c'est de nommer un mécanisme.",
      },
      {
        challenge: "Ça prendra 20 ans pour développer la filière algues.",
        response: "Précédents français : nucléaire construit en 15 ans (1975-1990). Canal de Suez : 10 ans. TGV réseau : 20 ans. Quand la volonté politique existe, les délais fondent.",
        technique: "Précédents historiques comparés",
        example_response_text: "Le parc nucléaire français a été construit en 15 ans (1975-1990). Le Canal de Suez en 10 ans. Le réseau TGV en 20 ans. Ces projets étaient jugés impossibles à leur époque. La différence n'est jamais le délai technique — c'est la volonté politique. Si on décide, 10 ans suffisent pour la filière algues. Si on ne décide pas, 100 ans ne suffiront pas.",
      },
    ],

    how_to_attack: [
      {
        target_claim: "L'assimilation de la science à une religion est un raccourci rhétorique, pas une démonstration.",
        attack: "Concéder l'analogie et la préciser : la similitude n'est pas doctrinale mais fonctionnelle — invocation d'autorité incontestable, taxation d'hérétiques (cancel culture), monopole d'interprétation par des clercs (experts patentés). Ces trois traits sont documentables.",
        angle: "logique / structurel",
      },
      {
        target_claim: "Le calcul 400 Md m³ = consommation UE suppose méthanisation 40% et rendements optimaux.",
        attack: "Rendement méthanisation : 40% est standard industriel (INRAE, CEA), pas un maximum. 120 t/ha est atteint en Corée. Le calcul est prudent — le potentiel de 900 t/ha en colonnes verticales n'est pas inclus. Vérifiable dans les publications FAO Aquaculture.",
        angle: "empirique",
      },
      {
        target_claim: "Le lien Soros/promotion Zucman relève de la spéculation politique.",
        attack: "Documentable partiellement : Open Society Foundations a un budget ~1.5 Md$/an, dont une part significative va aux think tanks progressistes. Le lien direct avec Zucman comme personne est mince, mais le lien avec l'écosystème intellectuel qui porte la proposition est documentable.",
        angle: "prudential",
      },
      {
        target_claim: "L'ammoniac naval reste au stade pilote — pas une solution déployée.",
        attack: "Concéder — mais rappeler que le nucléaire naval l'était en 1954. Les projets pilotes actuels (Maersk, MAN Energy Solutions) valident le principe. La décision d'industrialisation est politique, pas technique.",
        angle: "empirique + historique",
      },
      {
        target_claim: "Attaquer 'the science is clear' sans proposer un cadre alternatif nourrit l'anti-scientisme.",
        attack: "Proposer immédiatement l'alternative : (1) publication du code + données brutes ; (2) déclaration transparente des financements ; (3) reproductibilité indépendante avant décision publique. Ce sont trois exigences opérationnelles, pas de l'anti-scientisme.",
        angle: "éthique + constructif",
      },
      {
        target_claim: "Bernays a corrompu l'industrie de son époque, pas la science moderne — l'exemple est daté.",
        attack: "Contre-empirique : la méthode Bernays est étudiée dans les MBA et employée par les cabinets de conseil politique et industriel (Publicis, Havas). L'exemple sucre-JAMA est de 1967 — historique. Ferguson COVID 2020 : contemporain. La méthode a-t-elle disparu ?",
        angle: "historique + contemporain",
      },
    ],

    how_to_rephrase: [
      {
        original: "La science est instrumentalisée par le pouvoir, comme la religion l'était par les Borgias.",
        softer: "Certaines institutions scientifiques sont vulnérables aux financements et aux pressions politiques, comme toute institution centralisée dans l'histoire.",
        harder: "La science 'officielle' est aujourd'hui une religion d'État avec ses curés (les experts patentés), ses hérétiques (les dissidents cancellés) et ses dogmes (le consensus non-débattable).",
        academic: "L'articulation entre production de savoir académique et institutions politiques et industrielles introduit des mécanismes documentés de biais de sélection, de suppression de résultats non-conformes, et de capture réglementaire — décrits par Kuhn (paradigmes), Latour (réseaux), et empiriquement dans les études sur le tabac, le sucre, et les statines.",
      },
      {
        original: "Bernays a vendu la cigarette aux femmes comme flambeaux de la liberté — même méthode, même arnaque, un siècle plus tard.",
        softer: "L'histoire des relations publiques montre que la même méthodologie qui a manipulé la perception du tabac est aujourd'hui appliquée à d'autres sujets.",
        harder: "Tu crois que la manipulation Bernays s'est arrêtée en 1929 ? Elle est massive aujourd'hui — pharmaceutique, agroalimentaire, climat. Les cabinets de conseil facturent des millions pour ça.",
        academic: "Les techniques de fabrication du consentement théorisées par Edward Bernays dans Propaganda (1928) demeurent le fondement méthodologique de l'influence stratégique contemporaine, appliquées par les cabinets de conseil en communication auprès des acteurs institutionnels et industriels.",
      },
      {
        original: "Un modèle n'est pas la réalité — c'est une opinion mathématique.",
        softer: "Un modèle scientifique est une représentation partielle et hypothétique de la réalité, dépendant d'hypothèses choisies.",
        harder: "Un modèle, c'est une opinion en Excel. Retire les hypothèses, tu as un chiffre au hasard. Le modèle Ferguson vaut son code — publié après coup, non-versionné, buggé.",
        academic: "Toute modélisation mathématique repose sur des hypothèses paramétriques et structurelles dont la sélection introduit un aléa méthodologique irréductible ; l'audit de reproductibilité et la publication du code source sont des conditions nécessaires à l'établissement de la crédibilité scientifique.",
      },
      {
        original: "0.5% de la ZEE = 400 Md m³ de méthane = consommation UE.",
        softer: "Une exploitation modeste (0.5%) de la Zone Économique Exclusive française en culture de macroalgues pourrait, selon les calculs les plus prudents, couvrir une part significative de la consommation gazière européenne.",
        harder: "0.5% de notre mer. C'est ridicule. Ça couvre tout le gaz de l'UE. Et on brade notre héritage maritime pour acheter du GNL américain avec 4 000 méthaniers.",
        academic: "Sur la base d'un rendement conservateur de 120 tonnes de matière sèche par hectare (attesté chez les producteurs asiatiques), l'exploitation de 0.5% de la ZEE française (55 000 km², 5.5 M ha) associée à une chaîne de méthanisation à rendement standard (~40%) produirait un ordre de grandeur de 400 milliards de m³ de méthane annuels, comparable à la consommation gazière de l'Union européenne (~400 Gm³/an).",
      },
      {
        original: "Il n'y a qu'un seul homme de trop sur terre, c'est Monsieur Malthus.",
        softer: "Chaque génération malthusienne a été démentie par l'innovation technologique — de l'agriculture au capteur solaire.",
        harder: "Malthus, c'est le mensonge le plus rentable de l'histoire : peur = obéissance = pouvoir. Chaque prédiction de rareté a été retournée par une innovation. Et pourtant on continue.",
        academic: "La prophétie malthusienne (1798) a été systématiquement invalidée par les révolutions technologiques successives (rendement agricole via la révolution verte, énergie via l'hydrocarbure puis les renouvelables, matériaux via les substitutions synthétiques), suggérant une sous-évaluation structurelle de la capacité d'innovation dans les modèles de contrainte des ressources.",
      },
      {
        original: "La différence entre un rêve et un plan, c'est un tableur Excel et de la volonté politique.",
        softer: "La transformation d'une vision ambitieuse en projet réalisable passe par un chiffrage rigoureux et un engagement politique durable.",
        harder: "Tout le monde peut rêver. Le plan, c'est le tableur ET les couilles politiques. Sans les deux, c'est de la littérature.",
        academic: "Le passage d'une vision stratégique à un programme d'action opérationnel requiert la conjonction d'une modélisation économique détaillée (analyse coût-bénéfice, séquençage) et d'un capital politique suffisant pour soutenir un horizon de mise en œuvre pluri-décennal.",
      },
    ],

    if_asked: [
      {
        question: "Tu es donc anti-science ?",
        best_response: "Non. Je distingue méthode (Popper, falsifiabilité, reproductibilité — sacrée) de institution (universités, agences, revues — corruptibles). L'attaque porte sur la capture politique des institutions, jamais sur la méthode. Preuve : je demande précisément plus de reproductibilité et de transparence, pas moins.",
        followup_moves: [
          "Distinguer méthode/institution",
          "Citer Popper et la falsifiabilité",
          "Proposer les 3 exigences (code + financements + intervalle de confiance)",
        ],
      },
      {
        question: "Le calcul 400 Md m³ de méthane est vraiment réaliste ?",
        best_response: "L'ordre de grandeur est solide, pas la précision au litre près. Rendement conservateur 120 t/ha × 5.5 millions d'hectares × méthanisation 40% = environ 400 Md m³. Comparé à la consommation UE (400 Md m³ selon Eurostat), c'est du même ordre. Le potentiel réel est probablement entre 200 et 500 Md m³ selon les zones et espèces cultivées. Un ordre de grandeur, pas un chiffre exact.",
        followup_moves: [
          "Ancrer avec le rendement coréen actuel",
          "Proposer une étude R&D de 5 ans avec chiffrage précis",
          "Comparer avec l'ordre de grandeur des importations russes (~300 Md m³)",
        ],
      },
      {
        question: "Le 6e problème de Hilbert est un problème mathématique — pas un argument pour tout contester.",
        best_response: "Point valide. Le 6e problème (axiomatisation de la physique) illustre qu'aucun modèle physique n'a de fondement axiomatique démontré. Ça ne veut pas dire que les modèles sont faux — ça veut dire qu'ils reposent sur des hypothèses choisies, pas prouvées. La conséquence opérationnelle : exiger la déclaration des hypothèses avant d'accepter la conclusion. Pas 'tout contester', mais 'tout expliciter'.",
        followup_moves: [
          "Reformuler : ce n'est pas 'science = faux', c'est 'science = hypothèses explicites'",
          "Distinguer physique fondamentale / modélisation appliquée",
          "Proposer les 3 questions (hypothèses / financement / intervalle)",
        ],
      },
      {
        question: "Pourquoi personne d'autre ne développe cette filière algues si c'est si évident ?",
        best_response: "La Corée du Sud, le Japon, l'Indonésie, la Chine développent déjà. La Corée est leader mondial avec 36× moins de mer. Ce n'est pas 'personne ne le fait' — c'est 'l'Europe ne le fait pas'. La raison est politique : dépendance héritée (gazoducs russes, LNG américain), inertie institutionnelle, absence de champion politique. C'est un choix collectif de rester dépendants.",
        followup_moves: [
          "Sortir les chiffres FAO Aquaculture 2024",
          "Comparer avec la Corée du Sud (leader mondial, 36× moins de ZEE)",
          "Interroger : pourquoi cette dépendance choisie ?",
        ],
      },
      {
        question: "Ferguson n'était pas seul — tous les épidémiologistes prédisaient une catastrophe.",
        best_response: "Faux. Karl Popper aurait sourit — la reproductibilité était basse. John Ioannidis (Stanford), Anders Tegnell (Suède), Sunetra Gupta (Oxford) ont publiquement contesté les hypothèses Ferguson. Le confinement suédois modéré a produit un taux de mortalité inférieur à plusieurs pays confinés. Le débat scientifique existait — il a été médiatiquement supprimé au profit d'un consensus fabriqué.",
        followup_moves: [
          "Citer Ioannidis, Tegnell, Gupta comme dissidents scientifiques",
          "Comparer mortalité Suède vs pays confinés",
          "Distinguer consensus construit et consensus établi",
        ],
      },
      {
        question: "L'analogie Bernays / science moderne, ce n'est pas un peu paranoïaque ?",
        best_response: "Non — c'est documenté. Étude Kearns/Schmidt/Glantz, JAMA Internal Medicine 2016 : l'industrie sucrière a payé Harvard en 1967 pour publier une méta-analyse blâmant les graisses au lieu du sucre. 50 ans de politique nutritionnelle basés sur cette fraude. La méthode Bernays n'a pas disparu — elle est enseignée en MBA de communication stratégique et appliquée par les cabinets de conseil.",
        followup_moves: [
          "Sortir la référence Kearns 2016",
          "Citer l'exemple statines (débat en cours sur les seuils)",
          "Élargir à Big Pharma, Big Sugar, Big Oil",
        ],
      },
      {
        question: "Tu ne minimises pas l'urgence climatique en attaquant les modèles ?",
        best_response: "Non — j'accélère la vraie réponse. Le climat est un problème réel. Mais la réponse actuelle (rationnement, culpabilisation, taxation carbone) est inefficace. La vraie réponse est technique : méthane cycle-court par algues, chanvre construction carbone-négative, ammoniac naval zéro-carbone. Ce sont des solutions positives, pas des solutions de contrainte. L'urgence climatique justifie l'ambition, pas le rationnement.",
        followup_moves: [
          "Distinguer diagnostic (climat = problème réel) et remède (rationnement vs innovation)",
          "Chiffrer le potentiel décarbonation des algues",
          "Comparer coûts rationnement vs coûts innovation",
        ],
      },
      {
        question: "Venise et Suez, c'était l'ère coloniale — l'exemple n'est pas transférable.",
        best_response: "Il est transférable au principe : la volonté d'ingénierie transforme la géographie. Le nucléaire français (1975-1990, 15 ans) est un exemple non-colonial et récent. Le réseau TGV (années 1980-2000) idem. La question n'est pas coloniale — elle est politique. Un projet à horizon 15-20 ans, chiffré, ambitieux, décidé démocratiquement. Ça s'appelle un plan d'État.",
        followup_moves: [
          "Basculer sur nucléaire ou TGV comme précédent moderne",
          "Distinguer méthode coloniale (extractive) de méthode d'ingénierie (constructive)",
          "Proposer un modèle de plan démocratique moderne",
        ],
      },
    ],
  },

  // ============================================================
  // 6. FALLACIES
  // ============================================================
  fallacies: [
    {
      original_claim: "The science is clear.",
      fallacy_type: "argument d'autorité / appel au consensus",
      why_fallacious: "Un consensus scientifique n'est pas un vote démocratique. En science, un seul fait suffit à réfuter une théorie (Popper). L'invocation du consensus court-circuite le débat sur les hypothèses, les données, et les intervalles de confiance.",
      steelman: "Le point charitable : dans certains domaines (relativité générale, sélection naturelle), le consensus reflète effectivement une masse écrasante de preuves reproductibles convergentes. L'invocation est alors légitime.",
      nuance: "VRAI : sur des théories massivement testées, le consensus reflète des preuves. VRAI : le grand public a besoin d'un langage synthétique. FAUX : que le consensus soit toujours équivalent à la vérité. FAUX : que la contestation d'un consensus soit toujours de l'obscurantisme.",
      counter_argument: "Le modèle Ferguson COVID était un consensus institutionnel (WHO, gouvernements OCDE) — non reproductible, code non-audité. Le consensus tabagique 1950s (industrie payant les médecins) idem. Le consensus n'est pas la preuve — la reproductibilité l'est.",
      severity: "high",
    },
    {
      original_claim: "La science est instrumentalisée exactement comme la religion l'était par les Borgias.",
      fallacy_type: "analogie historique forte / possible reductio",
      why_fallacious: "L'analogie compresse des mécanismes très différents : les Borgias contrôlaient une Église détenant le monopole doctrinal ; la science moderne est décentralisée, pluraliste, avec des mécanismes de correction internes.",
      steelman: "Le pattern fonctionnel (institution centralisée + monopole de vérité + capture par le pouvoir) se retrouve dans plusieurs cas historiques (Église médiévale, Académie soviétique Lyssenko, Big Tobacco). L'analogie souligne un motif universel de capture des institutions de connaissance.",
      nuance: "VRAI : il existe un pattern historique de capture des institutions détentrices de vérité. VRAI : la science moderne connaît des cas documentés de capture (sucre-JAMA, Ferguson COVID). FAUX : que la science moderne soit fonctionnellement équivalente à l'Église Borgias. FAUX : que tous les scientifiques soient corrompus.",
      counter_argument: "La science moderne dispose de mécanismes correcteurs (peer review, réplication, pré-registrement) que l'Église médiévale n'avait pas. L'analogie est forte pour signaler un risque, elle est fausse comme description.",
      severity: "medium",
    },
    {
      original_claim: "Malthus s'est toujours trompé — le rationnement est toujours un mensonge.",
      fallacy_type: "généralisation à partir d'échecs passés",
      why_fallacious: "Le fait que Malthus se soit trompé sur son horizon (1798) n'implique pas que toute prédiction de contrainte des ressources soit fausse. Certaines ressources sont réellement finies dans certains horizons (pétrole conventionnel, terres arables spécifiques).",
      steelman: "Le point charitable : chaque génération malthusienne a été démentie par une innovation majeure. La probabilité empirique qu'une nouvelle prédiction malthusienne échoue est élevée. Malthus est un biais cognitif documenté.",
      nuance: "VRAI : les prédictions malthusiennes ont été systématiquement démenties par l'innovation. VRAI : ce pattern crée une présomption défavorable envers les nouvelles prédictions. FAUX : que toutes les ressources soient infinies. FAUX : qu'une prédiction de contrainte soit toujours idéologique.",
      counter_argument: "Certaines ressources sont réellement contraintes (eau douce dans certaines zones, terres agricoles, biodiversité). Le débat doit porter sur QUELLES ressources, pas sur la validité générale de toute prédiction de contrainte.",
      severity: "medium",
    },
    {
      original_claim: "Le WEF veut vous imposer 'you will own nothing and be happy'.",
      fallacy_type: "citation isolée / interprétation extensive",
      why_fallacious: "La phrase provient d'un article de Ida Auken (2016) publié comme scénario prospectif — pas comme programme officiel du WEF. L'utiliser comme preuve d'un projet délibéré est une extension d'une citation isolée.",
      steelman: "Le point charitable : la publication sur weforum.org lui donne un statut de scénario endorsé par l'institution. Que ce soit prospective ou programme, cela reflète une pensée qui circule dans l'institution.",
      nuance: "VRAI : la phrase existe et est publiée sur weforum.org. VRAI : cela reflète des courants de pensée qui circulent au WEF. FAUX : que ce soit un programme officiel du WEF. FAUX : que Schwab lui-même le soutienne dans ces termes.",
      counter_argument: "Auken a précisé plus tard qu'il s'agissait d'un scénario, pas d'une prescription. L'utiliser comme argument principal contre le WEF est un choix rhétorique — solide sur le trait de circulation d'idées, fragile sur l'affirmation d'un projet officiel.",
      severity: "medium",
    },
    {
      original_claim: "Si tu doutes de la science, tu es complotiste.",
      fallacy_type: "faux dilemme / ad hominem catégoriel",
      why_fallacious: "Le doute méthodique est le fondement de la science elle-même (Descartes, Popper). Assimiler tout doute à du complotisme est une clôture rhétorique qui empêche l'examen des cas de capture documentés.",
      steelman: "Le point charitable : il existe un vrai complotisme (anti-vaccination générale, terre plate) qui invoque le doute comme camouflage. Le critère de distinction est la reproductibilité des faits mobilisés.",
      nuance: "VRAI : il existe du complotisme réel (anti-vaccin, terre plate, chemtrails). VRAI : ces mouvements exploitent le vocabulaire du doute. FAUX : que tout doute soit du complotisme. FAUX : que citer JAMA-sucre ou Ferguson soit du complotisme.",
      counter_argument: "Kearns JAMA 2016 est peer-reviewed dans la revue même compromise. Ferguson code publié après pression est vérifiable. Ce ne sont pas des théories du complot — ce sont des faits documentés dans les revues scientifiques.",
      severity: "high",
    },
    {
      original_claim: "Les ressources planétaires sont limitées, le rationnement est nécessaire.",
      fallacy_type: "extrapolation statique / ignorer l'innovation",
      why_fallacious: "Le calcul de 'ressources limitées' suppose des technologies et usages actuels comme statiques. L'histoire démontre qu'une ressource devient obsolète (ex : huile de baleine → pétrole → renouvelables) avant d'être épuisée.",
      steelman: "Le point charitable : certaines ressources sont effectivement finies dans le temps humain (métaux rares, phosphore). L'innovation ne compense pas mécaniquement — elle nécessite du temps et des ressources.",
      nuance: "VRAI : certaines ressources sont finies dans le temps humain. VRAI : l'innovation demande du temps et des ressources. FAUX : que toutes les ressources soient contraintes de la même façon. FAUX : que le rationnement soit la seule réponse (la substitution en est une autre).",
      counter_argument: "Les macroalgues, le solaire, la fusion, l'ammoniac vert sont des exemples de ressources quasi-illimitées à l'échelle humaine. Le débat pertinent est : quelles ressources sont finies et à quel horizon ? Pas 'les ressources sont limitées donc rationnement'.",
      severity: "medium",
    },
    {
      original_claim: "Le calcul 400 Md m³ suppose des rendements maximums non-réalistes.",
      fallacy_type: "attaque sur le paramètre / non-sequitur",
      why_fallacious: "Le calcul utilise le rendement moyen atteint aujourd'hui en Asie (120 t/ha), pas un maximum théorique. L'objection confond rendement moyen validé et rendement maximum théorique (900 t/ha en colonnes).",
      steelman: "Le point charitable : passer d'un rendement moyen validé sur des sites spécifiques à une extrapolation sur 5.5 millions d'hectares de ZEE française introduit des incertitudes réelles (variabilité climatique, choix des sites, adaptation d'espèces).",
      nuance: "VRAI : l'extrapolation sur une grande surface introduit de l'incertitude. VRAI : les sites premium ne sont pas généralisables. FAUX : que 120 t/ha soit un maximum théorique — c'est un rendement moyen atteint. FAUX : que le calcul soit fictif.",
      counter_argument: "Étude R&D préalable de 5 ans avec 3-5 sites pilotes permettrait de valider les hypothèses. C'est ce que fait la Corée du Sud depuis 20 ans. Le passage à l'échelle demande de la méthode, pas de la magie.",
      severity: "medium",
    },
    {
      original_claim: "Les brevets CNRS sont massivement inexploités, prouvant l'inefficacité du système public.",
      fallacy_type: "généralisation à partir d'anecdotes / manque de chiffrage",
      why_fallacious: "L'affirmation 'massivement inexploités' n'est pas chiffrée. Le CNRS a environ 5000 familles de brevets et un taux de valorisation comparable aux Max Planck Institute allemands (~10-15%). Le débat existe mais 'massif' est excessif.",
      steelman: "Le point charitable : la valorisation commerciale des brevets publics français est débattue publiquement, avec des taux effectivement plus faibles que ceux du MIT ou de Stanford. La question de l'efficience de la valorisation est légitime.",
      nuance: "VRAI : la valorisation commerciale des brevets CNRS est un sujet de politique publique légitime. FAUX : que ce soit 'massivement inexploité' sans chiffrage. FAUX : que cela prouve à soi seul un échec systémique.",
      counter_argument: "Comparer aux benchmarks : Max Planck ~12% de valorisation, MIT ~18%, CNRS ~8-10%. L'écart existe, il est réel, mais 'massivement' est excessif. Le vrai débat est structurel (culture entrepreneuriale, financement early-stage).",
      severity: "low",
    },
    {
      original_claim: "L'exploitation des nodules polymétalliques serait un désastre écologique.",
      fallacy_type: "sélection écologique / biais de rejet nouveauté",
      why_fallacious: "L'objection ignore les coûts écologiques de l'extraction minière terrestre alternative (Congo cobalt, Chili lithium, Chine terres rares). Le débat pertinent est comparatif, pas absolu.",
      steelman: "Le point charitable : les fonds océaniques (zones abyssales, hydrothermales) hébergent des écosystèmes fragiles et peu connus. Le principe de précaution est légitime avant l'exploitation industrielle.",
      nuance: "VRAI : les fonds océaniques hébergent des écosystèmes fragiles et méconnus. VRAI : le principe de précaution s'applique. FAUX : que l'exploitation soit intrinsèquement désastreuse comparée aux alternatives terrestres. FAUX : que le débat soit binaire (oui/non).",
      counter_argument: "Comparer les coûts écologiques : mines cobalt Congo = destruction sociale + pollution eau + travail enfants. Nodules polymétalliques = zone abyssale (biomasse faible), technologie moins destructrice. Le choix comparatif favorise probablement les nodules pour certains métaux.",
      severity: "low",
    },
    {
      original_claim: "L'ammoniac est un carburant maritime dangereux.",
      fallacy_type: "focus sur les risques / ignorer la maturité technique",
      why_fallacious: "L'ammoniac est produit et transporté depuis 100 ans (100 M tonnes/an dans l'agriculture). Les technologies de manipulation sont matures. Les projets Maersk et MAN Energy sont opérationnels en phase pilote.",
      steelman: "Le point charitable : l'ammoniac est toxique (limite d'exposition 25 ppm) et son usage naval nécessite des adaptations de sécurité spécifiques. Les protocoles doivent être renforcés.",
      nuance: "VRAI : l'ammoniac requiert des protocoles de sécurité stricts. VRAI : la formation d'équipages doit être adaptée. FAUX : que ce soit une technologie immature. FAUX : que ce soit trop dangereux pour le naval.",
      counter_argument: "L'ammoniac est manipulé à grande échelle depuis 1 siècle. Les protocoles maritimes sont en cours de standardisation (IMO 2028). Maersk vise sa première commande commerciale pour 2027. Ce n'est pas de la science-fiction.",
      severity: "low",
    },
  ],

  // ============================================================
  // 7. STATS
  // ============================================================
  stats: [
    {
      number: "11 M km²",
      label: "Zone Économique Exclusive française — 2e mondiale après les USA",
      source: "SHOM / IFREMER, données officielles",
      context: "Fondement du calcul d'abondance maritime — 20× la surface métropolitaine",
      visual: "count-up",
    },
    {
      number: "120 t/ha",
      label: "rendement en matière sèche des macroalgues en culture de surface",
      source: "FAO Aquaculture 2024, publications INRAE / IFREMER",
      context: "Chiffre validé en Asie (Corée du Sud, Japon, Indonésie)",
      visual: "count-up",
    },
    {
      number: "0.5%",
      label: "de la ZEE française = 55 000 km² = 5.5 M ha exploitables",
      source: "Calcul direct de projection",
      context: "Surface à mobiliser pour la souveraineté énergétique",
      visual: "percent",
    },
    {
      number: "400 Md m³/an",
      label: "de méthane potentiel par méthanisation (rendement 40%)",
      source: "Calcul basé sur INRAE méthanisation + rendement algues",
      context: "Égal à la consommation gazière UE, supérieur aux exports russes historiques",
      visual: "count-up",
    },
    {
      number: "200-400 Md€",
      label: "investissement estimé pour la filière algues + méthanisation + infrastructure",
      source: "Estimations analogues nucléaire français, ordre de grandeur",
      context: "Vs 3 300 Md€ de dette accumulée pour rien — arbitrage d'opportunité",
      visual: "count-up",
    },
    {
      number: "36×",
      label: "moins de mer que la France pour la Corée du Sud, pourtant leader mondial des algues",
      source: "FAO 2024, comparaison ZEE Corée / France",
      context: "'Ce n'est pas une question de moyens, c'est une question de volonté'",
      visual: "comparison",
    },
    {
      number: "500 000",
      label: "morts prédits par Ferguson au Royaume-Uni sans confinement",
      source: "Report 9, Imperial College COVID-19 Response Team, 16 mars 2020",
      context: "Modèle non-reproductible, code publié après pression, non-versionné",
      visual: "count-up",
    },
    {
      number: "50 ans",
      label: "de politique nutritionnelle basée sur un mensonge scientifique payé",
      source: "Kearns, Schmidt & Glantz, JAMA Internal Medicine 2016",
      context: "Industrie sucrière → Harvard → JAMA 1967 : blâmer les graisses au lieu du sucre",
      visual: "count-up",
    },
    {
      number: "6e problème",
      label: "de Hilbert (1900) — axiomatisation de la physique, non résolu depuis 126 ans",
      source: "Hilbert, ICM Paris 1900, problème n°6",
      context: "Illustre qu'aucun modèle physique n'a de fondement axiomatique démontré",
      visual: "count-up",
    },
    {
      number: "4 000",
      label: "méthaniers nécessaires pour remplacer le gaz russe par du GNL américain",
      source: "Estimations Eurostat / IEA sur remplacement des imports russes",
      context: "Alternative absurde à 0.5% de la ZEE française",
      visual: "count-up",
    },
    {
      number: "30%",
      label: "des émissions CO₂ mondiales viennent du secteur de la construction",
      source: "UN Environment Global Status Report for Buildings 2023",
      context: "Le chanvre construction est carbone-négatif — leviers massifs",
      visual: "percent",
    },
    {
      number: "5 g/semaine",
      label: "microplastiques ingérés par personne (moyenne mondiale)",
      source: "WWF 'No Plastic in Nature' 2019, étude Université Newcastle",
      context: "Les algues fixent les métaux lourds et dégradent certains plastiques — solution ignorée",
      visual: "count-up",
    },
  ],

  // ============================================================
  // 8. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "France vs Corée du Sud (paradoxe maritime)",
      left: {
        label: "France",
        items: [
          "11 M km² de ZEE (2e mondiale)",
          "Production algues : négligeable",
          "Importe 100% de son gaz naturel",
          "3 300 Md€ de dette pour rien",
          "Débat public : rationnement",
        ],
      },
      right: {
        label: "Corée du Sud",
        items: [
          "0.3 M km² de ZEE (36× moins)",
          "Production algues : leader mondial",
          "Souveraineté alimentaire partielle",
          "Investissements ciblés depuis les années 60",
          "Débat public : abondance",
        ],
      },
    },
    {
      title: "Rationnement vs Abondance (deux idéologies)",
      left: {
        label: "Idéologie du rationnement",
        items: [
          "Malthus, Schwab, WEF",
          "'Les ressources sont limitées'",
          "Solution : contrainte, taxe, culpabilité",
          "'You will own nothing and be happy'",
          "Contrôle des ressources existantes",
        ],
      },
      right: {
        label: "Idéologie de l'abondance",
        items: [
          "Proudhon, Julian Simon, Peter Diamandis",
          "'L'innovation repousse les limites'",
          "Solution : investissement, technologie, souveraineté",
          "'Cultivate what you have'",
          "Création de nouvelles ressources",
        ],
      },
    },
    {
      title: "Méthode scientifique vs Institution scientifique",
      left: {
        label: "Méthode scientifique (sacrée)",
        items: [
          "Falsifiabilité (Popper)",
          "Reproductibilité",
          "Peer review anonyme",
          "Publication du code et données",
          "Un seul fait suffit à réfuter",
        ],
      },
      right: {
        label: "Institution scientifique (corruptible)",
        items: [
          "Financements publics et privés",
          "Carrières, promotions, tenures",
          "Éditeurs de revues à comité",
          "Effets de mode et conformisme",
          "Cas documentés : sucre-JAMA, Ferguson",
        ],
      },
    },
    {
      title: "Ferguson COVID vs Ioannidis / Tegnell / Gupta",
      left: {
        label: "Modèle Ferguson (consensus fabriqué)",
        items: [
          "500 000 morts prédits UK sans intervention",
          "Code C++ publié après pression",
          "15 000 lignes non-versionnées",
          "Bugs documentés (Sue Denim, Boudnik)",
          "Base des confinements mondiaux",
        ],
      },
      right: {
        label: "Dissidents scientifiques ignorés",
        items: [
          "Ioannidis (Stanford) : IFR plus faible",
          "Tegnell (Suède) : confinement modéré",
          "Gupta (Oxford) : immunité population",
          "Grande Barrington Declaration (2020)",
          "Cancellation médiatique documentée",
        ],
      },
    },
    {
      title: "Bernays (tabac 1929) vs Big Sugar (JAMA 1967)",
      left: {
        label: "Bernays / American Tobacco",
        items: [
          "'Torches of Freedom' 1929",
          "Marche New York : cigarette = émancipation",
          "Médecins payés : cigarette 'saine'",
          "Bacon & eggs = 'petit-déjeuner américain'",
          "Fondation des RP modernes",
        ],
      },
      right: {
        label: "Sugar Research Foundation / Harvard 1967",
        items: [
          "Kearns JAMA 2016 : preuves du paiement",
          "Harvard payé pour blâmer les graisses",
          "Publication JAMA (revue prestigieuse)",
          "50 ans de policy nutritionnelle biaisée",
          "Modèle reproduit avec Big Pharma, Big Oil",
        ],
      },
    },
    {
      title: "Venise (marécage → empire) vs France (ZEE → néant)",
      left: {
        label: "Venise (Xe-XVIIIe s.)",
        items: [
          "Camp de réfugiés dans lagune boueuse",
          "Volonté d'ingénierie collective",
          "1re puissance commerciale méditerranéenne",
          "Arsenal : industrie navale à la chaîne",
          "Empire commercial de la mer",
        ],
      },
      right: {
        label: "France (2026)",
        items: [
          "11 M km² de ZEE (Venise ×1000)",
          "Absence de vision d'ingénierie collective",
          "Importatrice nette d'énergie",
          "Naval Group : sous-financé",
          "Puissance oubliée",
        ],
      },
    },
  ],

  // ============================================================
  // 9. DEVICES
  // ============================================================
  devices: [
    {
      name: "Recadrage épistémologique (Hilbert)",
      example_text: "Montrez-moi les axiomes. Hilbert attend encore.",
      effect: "Retourner l'autorité scientifique de l'adversaire par une objection fondamentale",
      why_it_works: "L'invocation d'un mathématicien de rang mondial (Hilbert) déplace l'autorité. L'adversaire doit désormais fournir des axiomes qu'il ne peut pas fournir.",
    },
    {
      name: "Question rhétorique en chaîne (Mode Bleu)",
      example_text: "Qui a payé l'étude ? Quelles hypothèses ? Quel intervalle de confiance ?",
      effect: "Systématiser le doute face à toute affirmation scientifique",
      why_it_works: "Les 3 questions sont universellement applicables. Elles forcent l'adversaire à défendre les fondations, pas la conclusion.",
    },
    {
      name: "Analogie du paquet de cigarettes (Guy Ritchie)",
      example_text: "La face avant : insignes royaux. Retourne le paquet : 'fumer tue'. Les modèles scientifiques, c'est pareil.",
      effect: "Rendre visuelle et mémorable la structure trompeuse d'un modèle",
      why_it_works: "Analogie cinématographique populaire (RocknRolla). Le retournement physique du paquet devient une action mentale que l'auditeur peut refaire.",
    },
    {
      name: "Analogie du boulanger",
      example_text: "Je n'ai pas besoin d'être boulanger pour savoir que le pain est brûlé.",
      effect: "Neutraliser l'argument de compétence exclusive",
      why_it_works: "Analogie du quotidien, universellement compréhensible. Force l'auditoire à reconnaître qu'on peut juger un résultat sans être l'expert du processus.",
    },
    {
      name: "Parallélisme droit/devoir",
      example_text: "Quand le prêtre dit 'parole de Dieu' → droit de douter. Quand le politique dit 'the science is clear' → devoir de douter.",
      effect: "Élever moralement l'obligation de doute",
      why_it_works: "Gradation morale (droit → devoir). L'auditoire est amené à accepter une responsabilité, pas juste une permission.",
    },
    {
      name: "Reprise/retournement d'une citation classique",
      example_text: "Baudelaire : la plus belle ruse du diable est de vous persuader qu'il n'existe pas. La plus belle ruse du rationnement, c'est de vous persuader que l'abondance est impossible.",
      effect: "Emprunter le poids d'une citation reconnue pour transporter sa propre thèse",
      why_it_works: "L'auditoire reconnaît la structure baudelairienne et transfère automatiquement l'autorité littéraire à la thèse politique.",
    },
    {
      name: "Gradation ternaire des chiffres",
      example_text: "0.5% de notre mer. 10% de notre dette. 100% de notre énergie.",
      effect: "Mémorisation par la triade croissante",
      why_it_works: "La structure 0.5% / 10% / 100% est mémoriellement virale. Force le contraste : très peu de moyens pour un résultat total.",
    },
    {
      name: "Récit fondateur (Venise)",
      example_text: "Venise a commencé comme un camp de réfugiés — des îlots boueux dans une lagune.",
      effect: "Court-circuiter l'objection 'utopiste' par un précédent historique",
      why_it_works: "Le récit engage l'imagination. Venise est un fait — impossible à réfuter. Le transfert vers la France maritime devient évident.",
    },
    {
      name: "Révélation étymologique (Canebière)",
      example_text: "La Canebière à Marseille vient de 'cannabis' — chanvre en provençal. L'abondance est dans notre ADN toponymique.",
      effect: "Ancrer une politique moderne dans une continuité historique intime",
      why_it_works: "Découverte étymologique surprenante et vérifiable. Personne ne l'attend, tout le monde peut la vérifier. Effet 'aha' mémorable.",
    },
    {
      name: "Question comparative de choix (Mode Bleu)",
      example_text: "4 000 méthaniers américains ou 0.5% de notre mer — quelle option est rationnelle ?",
      effect: "Forcer l'adversaire à faire un choix ridicule ou à concéder",
      why_it_works: "Le contraste 4 000 vs 0.5% est écrasant. Défendre l'option 4 000 est indéfendable — seule sortie : concéder ou reformuler.",
    },
    {
      name: "Renversement Talleyrand",
      example_text: "Ce qui va sans hypothèse va mieux en la déclarant.",
      effect: "Emprunter l'autorité classique tout en imposant sa règle méthodologique",
      why_it_works: "Reprise d'une citation reconnue (Talleyrand : ce qui va sans dire va mieux en le disant). Force la sortie de l'implicite scientifique.",
    },
    {
      name: "Question de clôture-verdict (Mode Vert)",
      example_text: "L'histoire nous jugera : avions-nous les moyens, ou nous manquait-il le courage ?",
      effect: "Placer le débat sur un horizon temporel long pour dégager les enjeux",
      why_it_works: "Le tribunal de l'histoire est un cadre inattaquable. Refuser d'agir devient un choix moral historique.",
    },
  ],

  // ============================================================
  // 10. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "Le paquet de cigarettes de Guy Ritchie (RocknRolla)",
      used_for: "Rendre visible la structure trompeuse des modèles scientifiques",
      strength: 8,
      why_it_works: "Analogie cinématographique. Face avant = conclusion. Face arrière = hypothèses cachées. Le retournement physique devient un geste mental.",
    },
    {
      source: "La calculette du marchand (écran non-négociable)",
      used_for: "Attaquer 'the science is clear' comme un écran, pas un raisonnement",
      strength: 7,
      why_it_works: "Expérience universelle du marché. Le chiffre paraît non-négociable — mais il vient d'un calcul modifiable.",
    },
    {
      source: "Le curé médiéval / le politique moderne",
      used_for: "Structurer le parallèle religion politique / science politique",
      strength: 8,
      why_it_works: "Le curé médiéval est un archétype négatif. Le transfert vers 'the science is clear' active la même méfiance historique.",
    },
    {
      source: "Bernays 'Torches of Freedom' (1929)",
      used_for: "Prouver que la manipulation industrielle par 'la science' est une méthode éprouvée",
      strength: 9,
      why_it_works: "Fait historique documenté et cinématique. Une image mémorable (femmes en marche avec cigarette) qui symbolise la fabrique du consentement.",
    },
    {
      source: "Les Borgias / Église médiévale",
      used_for: "Analogie de la capture d'une institution centralisée de vérité",
      strength: 6,
      why_it_works: "Rappel historique fort. Attention : peut paraître exagéré si mal calibré — utile en mode Rouge, à modérer ailleurs.",
    },
    {
      source: "Venise sortie d'un marécage",
      used_for: "Récit d'inspiration pour la France maritime",
      strength: 8,
      why_it_works: "Récit universellement admiré. Le transfert vers la France (11 M km² vs quelques îlots) rend l'analogie écrasante.",
    },
    {
      source: "Ferdinand de Lesseps et le Canal de Suez (1869)",
      used_for: "Prouver qu'un Français peut transformer la géographie du monde",
      strength: 7,
      why_it_works: "Fierté nationale + faisabilité prouvée. Un précédent difficile à contester frontalement.",
    },
    {
      source: "Le boulanger et le pain brûlé",
      used_for: "Rejeter l'argument 'tu n'es pas scientifique donc tu ne peux pas juger'",
      strength: 8,
      why_it_works: "Analogie du quotidien universelle. Force la reconnaissance qu'on peut juger un résultat sans être expert du processus.",
    },
  ],

  // ============================================================
  // 11. FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "Les 3 questions face à un modèle",
      when_to_use: "Chaque fois qu'un argument invoque 'the science is clear' ou un modèle chiffré",
      steps: [
        "Q1 : Quelles sont les hypothèses du modèle ?",
        "Q2 : Qui a financé l'étude ?",
        "Q3 : Quel est l'intervalle de confiance / la marge d'erreur ?",
        "Si l'interlocuteur ne peut répondre aux 3 : il n'a pas compris ce qu'il cite",
        "Refuser le débat sur la conclusion tant que les 3 réponses n'existent pas",
      ],
      warning: "Ne pas donner l'impression de refuser le débat — c'est un test de sincérité, pas une clôture.",
    },
    {
      name: "Distinction méthode / institution (règle d'or épistémologique)",
      when_to_use: "Quand on t'accuse d'être anti-science ou complotiste",
      steps: [
        "Affirmer publiquement le respect de la méthode (Popper, falsifiabilité, reproductibilité)",
        "Séparer nettement : méthode = sacrée, institution = corruptible",
        "Documenter avec cas historiques : Bernays 1929, JAMA sucre 1967, Ferguson COVID 2020",
        "Proposer une exigence constructive : publication du code, transparence des financements",
        "Ne jamais glisser vers le rejet global — c'est la ligne à ne pas franchir",
      ],
      warning: "Le rejet total de la science moderne est un piège — perdre la crédibilité épistémologique = perdre le débat.",
    },
    {
      name: "Retournement du paquet de cigarettes",
      when_to_use: "Face à un chiffre présenté comme incontestable (modèle climatique, projection démographique, etc.)",
      steps: [
        "Reconnaître explicitement le chiffre",
        "Introduire la métaphore : 'la conclusion est devant, les hypothèses derrière'",
        "Demander à retourner le paquet : quelles hypothèses ?",
        "Sortir les 3 questions type modèle",
        "Recadrer le débat sur les fondations, pas sur la conclusion",
      ],
      warning: "Analogie forte, mais peut paraître polémique — l'utiliser avec un ton d'ingénieur, pas de procureur.",
    },
    {
      name: "Cascade Abondance (Mode Jaune)",
      when_to_use: "Face à un adversaire malthusien / rationniste",
      steps: [
        "Poser le fait : 11 M km² de ZEE française (2e mondiale)",
        "Introduire les 4 ressources : macroalgues, chanvre, ammoniac naval, nodules polymétalliques",
        "Chiffrer chaque ressource : 120 t/ha, 6 t/ha, zéro-carbone, Mn/Ni/Co/Cu",
        "Faire le calcul : 0.5% de la ZEE = 400 Md m³ de méthane = consommation UE",
        "Comparer investissement (200-400 Md€) et dette actuelle (3 300 Md€)",
      ],
      warning: "Bien maîtriser l'ordre de grandeur et être prêt à concéder les incertitudes techniques — 'ordre de grandeur, pas précision au litre'.",
    },
    {
      name: "Récit Venise (Mode Vert)",
      when_to_use: "Face à un auditoire abattu ou défaitiste sur l'avenir français",
      steps: [
        "Introduire Venise comme camp de réfugiés dans une lagune boueuse",
        "Détailler la transformation par 'volonté d'ingénierie'",
        "Ajouter Lesseps (Suez), Colbert (Canebière/chanvre), nucléaire français (1975-1990)",
        "Faire le pont : 'la France a infiniment plus que Venise n'a jamais eu'",
        "Conclure sur le verdict de l'histoire : 'avions-nous les moyens ou le courage ?'",
      ],
      warning: "Éviter la nostalgie stérile — chaque exemple historique doit servir la vision d'action présente.",
    },
    {
      name: "Enchaînement socratique 5 questions (Mode Bleu)",
      when_to_use: "Face à un auditoire hostile où les affirmations sont refusées",
      steps: [
        "Q1 : 'Sais-tu quelle est la taille de la ZEE française ?'",
        "Q2 : 'Sais-tu qui est le leader mondial des algues et avec quelle surface ?'",
        "Q3 : 'Sais-tu combien de méthaniers pour remplacer le gaz russe par du GNL ?'",
        "Q4 : 'Sais-tu que l'ammoniac naval zéro-carbone est connu depuis 20 ans ?'",
        "Q5 : 'Sais-tu combien de dette on a accumulée pour rien vs le coût de la souveraineté ?'",
        "Ne jamais donner soi-même les réponses — laisser l'adversaire les découvrir",
      ],
      warning: "Poser les questions avec curiosité sincère, pas comme un interrogatoire. Sinon effet passif-agressif contre-productif.",
    },
  ],

  // ============================================================
  // 12. DRILLS
  // ============================================================
  drills: [
    {
      name: "Les 3 questions par jour",
      duration: "30 jours",
      instructions: [
        "Chaque fois qu'on lit 'une étude montre' ou 'les scientifiques disent', appliquer les 3 questions",
        "Q1 : Quelles sont les hypothèses ? Q2 : Qui a financé ? Q3 : Quel est l'intervalle de confiance ?",
        "Noter dans un carnet : article + réponses cherchées + réponses trouvées",
        "En fin de mois : identifier les 3 sources qui répondent le mieux et les 3 pires",
        "But : automatiser le réflexe méthodologique",
      ],
      difficulty: 2,
    },
    {
      name: "La cascade des chiffres ZEE (récitation)",
      duration: "14 jours",
      instructions: [
        "Mémoriser la triade : 0.5% / 10% / 100% (mer / dette / énergie)",
        "Mémoriser les 5 chiffres clés : 11 M km², 120 t/ha, 400 Md m³, 200-400 Md€, 4 000 méthaniers",
        "Réciter 3 fois par jour : matin, midi, soir",
        "Test hebdomadaire : intégrer les chiffres dans un pitch de 30 secondes",
        "But : les chiffres doivent devenir automatiques dans le flux verbal",
      ],
      difficulty: 3,
    },
    {
      name: "Le débat rôle-play Ferguson",
      duration: "3 sessions × 60 min",
      instructions: [
        "Session 1 : jouer le défenseur du modèle Ferguson. Chercher les meilleurs arguments — comprendre le steelman",
        "Session 2 : jouer le critique. Appliquer les 3 questions + citer les dissidents (Ioannidis, Tegnell, Gupta)",
        "Session 3 : débat libre. Basculer entre modes rhétoriques selon l'auditoire",
        "Enregistrer chaque session. Réécouter le lendemain, noter les 3 meilleures répliques et les 3 pires",
        "But : identifier ses vraies armes et ses vrais points faibles",
      ],
      difficulty: 5,
    },
    {
      name: "L'écriture Rouge/Vert par contraste",
      duration: "10 jours",
      instructions: [
        "Choisir 1 sujet abondance/rationnement chaque matin (algues, chanvre, ammoniac, ZEE, brevets CNRS)",
        "Écrire 3 paragraphes en Mode Rouge (abrasif, provocateur)",
        "Réécrire les mêmes 3 paragraphes en Mode Vert (inspirant, vision)",
        "Comparer : quel effet chaque version produit ? Sur quel public marche mieux ?",
        "But : maîtriser le contraste tonal pour choisir en temps réel selon l'auditoire",
      ],
      difficulty: 4,
    },
    {
      name: "Le retournement du paquet (Mode Orange)",
      duration: "7 jours",
      instructions: [
        "Chaque jour, prendre une affirmation type 'la science montre X'",
        "Appliquer l'analogie : quelle est la face avant (la conclusion) ? Quelle est la face arrière (les hypothèses) ?",
        "Formuler la question de retournement : 'peut-on voir la face arrière ?'",
        "Noter la réaction de l'interlocuteur (défense / concession / esquive)",
        "But : automatiser le geste de retournement dans toute conversation",
      ],
      difficulty: 3,
    },
  ],

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    debates: [
      "taxe-zucman",
      "rhetorique-verites-difficiles",
      "masculinite-feminisme",
    ],
    videos: [
      "LFJAHZlizAg",
      "P4rkjwaa6so",
      "h9wod4mPHZw",
    ],
  },
};

// Register into global registry
if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["science-abondance"] = CONTENT_DEBATES_science_abondance;
