/* =========================================================
   Auguste Brain — Carte des Debats
   D3 force-directed mindmap + Chart.js radar + Tabs
   ========================================================= */

// ---- Data ------------------------------------------------

const MODE_COLORS = {
    rouge:  "#DC143C",
    orange: "#FF8C00",
    jaune:  "#DAA520",
    vert:   "#228B22",
    bleu:   "#4169E1"
};

const MODE_LABELS = {
    rouge:  "Rouge",
    orange: "Orange",
    jaune:  "Jaune",
    vert:   "Vert",
    bleu:   "Bleu"
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
    },
    {
        id: "droite-gauche",
        titre: "Droite vs Gauche \u2014 Capitalisme et Redistribution",
        these: "Le debat n'est pas capitalisme OU redistribution, mais comment redistribuer efficacement. La France taxe enormement mais redistribue inefficacement.",
        faits_cles: [
            "France: 43.2% prelevements/PIB (2e OCDE), 57% depenses/PIB",
            "9.1M de pauvres (14.4%) malgre 800 Mds EUR/an d'aides sociales",
            "ISF: ~600 foyers partaient/an, -40% apres suppression en 2018",
            "Coefficient Gini: France 0.32 vs Danemark 0.26 vs USA 0.39",
            "Confiance institutions: France 30% vs Danemark 75%"
        ],
        sources_count: 18,
        explored: true,
        polarisation: { gauche_droite: 25, libertaire_autoritaire: -20, rationnel_emotionnel: 70, factuel_speculatif: 75 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/sept-debats/sept-debats.pdf",
        suggestions: ["Taux optimal Laffer pour France", "Comparer confiance institutionnelle France vs Nordiques", "Etudier flexicurite danoise"]
    },
    {
        id: "victimisation-responsabilisation",
        titre: "Victimisation vs Responsabilisation \u2014 Les Messages Vehicules",
        these: "Les messages de victimisation creent de l'impuissance apprise a grande echelle. La responsabilisation est psychologiquement superieure.",
        faits_cles: [
            "Locus de controle interne = meilleure performance (Rotter, 1966)",
            "Impuissance apprise: Seligman 1967, repliquee chez humains",
            "Growth mindset: d=0.19 chez populations a risque (Dweck/Sisk 2018)",
            "Auto-efficacite: r=0.38 avec performance (Bandura/Stajkovic 1998)",
            "RSA: 34% retour a l'emploi apres 7 ans, 6 gen. mobilite sociale"
        ],
        sources_count: 14,
        explored: true,
        polarisation: { gauche_droite: 30, libertaire_autoritaire: -40, rationnel_emotionnel: 55, factuel_speculatif: 65 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/sept-debats/sept-debats.pdf",
        suggestions: ["Approfondir optimisme appris Seligman", "Etudier programmes empowerment qui marchent", "Analyser reforme RSA et retour a l'emploi"]
    },
    {
        id: "sport-discipline",
        titre: "Le Sport et la Discipline \u2014 Forge Mentale",
        these: "Le sport est le meilleur outil de construction mentale, sante publique et ascenseur social. Il devrait etre une priorite nationale.",
        faits_cles: [
            "Sport: -42% depression, -26% anxiete (Singh 2023, 128K personnes)",
            "Aussi efficace que les antidepresseurs (Schuch 2016)",
            "Obesite France: 17.4% (x2 depuis 1997), cout 12 Mds EUR/an",
            "2x plus d'obesite dans les menages a faibles revenus",
            "12% pratique en club en QPV vs 54% hors QPV"
        ],
        sources_count: 16,
        explored: true,
        polarisation: { gauche_droite: 10, libertaire_autoritaire: -25, rationnel_emotionnel: 50, factuel_speculatif: 80 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/sept-debats/sept-debats.pdf",
        suggestions: ["Etudier programmes sport-insertion QPV", "Analyser body positivity vs sante publique", "Comparer budgets sport par pays"]
    },
    {
        id: "meritocratie-optimisme",
        titre: "Quand on veut, on peut \u2014 Meritocratie et Optimisme",
        these: "La meritocratie pure est un mythe, mais l'optimisme et le grit sont les meilleurs predicteurs de reussite. Le message est imparfait mais necessaire.",
        faits_cles: [
            "36% des Francais croient au merite (vs 62% USA)",
            "Great Gatsby Curve: r=0.62 inegalite vs immobilite (Corak 2013)",
            "Positive illusions = signe de sante mentale (Taylor 1988)",
            "Grit predit mieux que QI a West Point (Duckworth 2007)",
            "Effet Pygmalion: les attentes modifient le QI (Rosenthal 1968)"
        ],
        sources_count: 15,
        explored: true,
        polarisation: { gauche_droite: 35, libertaire_autoritaire: -35, rationnel_emotionnel: 60, factuel_speculatif: 60 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/sept-debats/sept-debats.pdf",
        suggestions: ["Approfondir Raj Chetty mobilite sociale", "Etudier self-fulfilling prophecy en education", "Comparer programmes grit dans les ecoles"]
    },
    {
        id: "course-ia",
        titre: "La Course a l'IA \u2014 Urgence Geopolitique",
        these: "L'IA est le nouveau paradigme de puissance. L'Europe a les atouts (nucleaire, talents) mais pas la volonte. C'est une urgence a 5-10 ans.",
        faits_cles: [
            "USA: 109 Mds USD investis en IA (2024) vs Europe: 4.8 Mds",
            "NVIDIA: 90% du marche GPU pour l'IA",
            "Europe: 98% terres rares importees, 99% OS americains",
            "AGI estimee 2027-2033 (Metaculus, PDGs tech)",
            "30-40% des emplois affectes d'ici 10 ans (McKinsey/Goldman)"
        ],
        sources_count: 20,
        explored: true,
        polarisation: { gauche_droite: 45, libertaire_autoritaire: -50, rationnel_emotionnel: 75, factuel_speculatif: 55 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/sept-debats/sept-debats.pdf",
        suggestions: ["Suivre Mistral AI et champions europeens", "Etudier AI Continent Plan", "Analyser brain drain tech francais"]
    },
    {
        id: "risques-existentiels",
        titre: "Priorites Civilisationnelles \u2014 Risques Existentiels",
        these: "L'IA non alignee est le risque #1. Le climat est urgent mais sub-existentiel. Le decalage entre priorites reelles et debat public est dangereux.",
        faits_cles: [
            "P(catastrophe existentielle) ce siecle: ~17% (Ord 2020)",
            "IA non alignee: 10% a elle seule (> tous autres risques combines)",
            "12 241 ogives nucleaires mondiales (SIPRI 2025)",
            "Horloge Apocalypse: 85 secondes avant minuit (record 2026)",
            "Climat: +1.5\u00b0C depasse en 2024, budget carbone = 3 ans"
        ],
        sources_count: 22,
        explored: true,
        polarisation: { gauche_droite: 5, libertaire_autoritaire: -15, rationnel_emotionnel: 80, factuel_speculatif: 50 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/sept-debats/sept-debats.pdf",
        suggestions: ["Lire The Precipice (Toby Ord)", "Suivre P(doom) et timelines AGI", "Etudier AI Safety Clock"]
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

// ---- Fiches Content -------------------------------------

const fichesContent = {
    "taxe-zucman": {
        rouge: {
            these: "La taxe Zucman est une escroquerie intellectuelle financee par un delinquant financier condamne, destinee a abolir la propriete privee des classes moyennes sous couvert de justice sociale.",
            stats: ["Rendement immobilier 5% - taxe 2% = 40% du CA ponctionne", "France: 57% depenses/PIB vs URSS 50%", "ISF: <0.5% PIB collecte partout"],
            cloture: "Vous voulez une taxe sur la richesse ? Commencez par arreter de bruler l'argent que vous avez deja."
        },
        orange: {
            these: "La question n'est pas s'il faut taxer les ultra-riches, mais comment le faire sans detruire l'economie. La taxe Zucman echoue a ce test.",
            stats: ["Taxe Tobin: 0.01% transactions = 20 Mds/an", "Flat tax: simplicite, zero niche", "TVA luxe: taxe le comportement, pas le patrimoine"],
            cloture: "Ne me dites pas qu'il faut taxer les riches. Dites-moi COMMENT sans que les classes moyennes paient l'addition."
        },
        jaune: {
            these: "La taxe Zucman repose sur un diagnostic correct mais propose un remede dont l'histoire demontre systematiquement l'echec.",
            stats: ["Courbe de Laffer: optimum fiscal = theoreme mathematique", "ISF echoue en Norvege, Espagne, Suisse", "Buy-borrow-die: le vrai mecanisme d'evasion"],
            cloture: "Le probleme est reel. La solution Zucman est fausse. L'intelligence, c'est de taxer ce qui ne peut pas fuir."
        },
        vert: {
            these: "Nous pouvons construire un systeme fiscal intelligent qui finance nos ambitions collectives sans detruire le moteur de creation de richesse.",
            stats: ["Vietnam communiste: 20% depenses/PIB, sorti de la pauvrete", "Suisse: 34% depenses, meilleurs services d'Europe", "Warren Buffett: responsabiliser les depenseurs"],
            cloture: "La grandeur d'un pays ne se mesure pas a combien il prend, mais a combien il batit avec ce qu'il a."
        },
        bleu: {
            these: "Et si la taxe Zucman etait la mauvaise reponse a la bonne question ?",
            stats: ["France 57% depenses/PIB vs URSS 50%... a quel moment est-on deja communiste?", "ISF teste 4 fois, echoue 4 fois. Qu'est-ce qui change?", "Rendement 5%, taxe 2% = 40% du revenu. Tu accepterais?"],
            cloture: "Avant de demander plus d'argent aux citoyens, ne devrait-on pas demander des comptes a ceux qui le depensent ?"
        }
    },
    "science-abondance": {
        rouge: {
            these: "La science n'est pas corrompue par accident. Elle est systematiquement instrumentalisee par le pouvoir, comme la religion l'etait par les Borgias.",
            stats: ["Bernays: cigarettes = 'flambeaux de la liberte' (1929)", "Industrie sucriere: 50 ans de mensonge via le JAMA", "Ferguson COVID: centaines de milliers de morts predits, largement surestime"],
            cloture: "Quand le pretre te dit 'c'est la parole de Dieu', tu as le droit de douter. Quand le politique te dit 'the science is clear', tu as le devoir de douter."
        },
        orange: {
            these: "Tout modele repose sur des hypotheses. Celui qui refuse de declarer ses hypotheses ne fait pas de la science — il fait de la politique deguisee.",
            stats: ["6e probleme de Hilbert: axiomatiser la physique = NON RESOLU", "3 questions: hypotheses? financeur? intervalle de confiance?", "Si votre interlocuteur ne peut pas repondre, il n'a pas compris ce qu'il cite"],
            cloture: "Les hypotheses, c'est comme les impots : ca se declare."
        },
        jaune: {
            these: "La France possede 11 millions de km2 de ZEE. Avec 0.5% en production d'algues, elle pourrait produire tout le gaz necessaire a l'Union europeenne.",
            stats: ["Macroalgues: 120t matiere seche/ha/an", "0.5% ZEE = 400 milliards m3 methane/an", "Investissement: 200-400 Mds vs 3300 Mds de dette existante"],
            cloture: "On vous dit de vous serrer la ceinture pendant qu'on brade votre heritage maritime."
        },
        vert: {
            these: "Venise etait un camp de refugies. En injectant de l'intelligence dans une lagune, ils en ont fait la plus belle ville d'Europe. La France peut faire pareil avec sa mer.",
            stats: ["Ferdinand de Lesseps: le canal de Suez comme projection culturelle", "Colbert encourageait le chanvre (La Canebiere = cannabis en provencal)", "Les infrastructures sont l'intelligence cristallisee d'une civilisation"],
            cloture: "L'intelligence d'une civilisation se manifeste par ses infrastructures. Ou sont les notres ?"
        },
        bleu: {
            these: "Qui a finance l'etude ? Quelles sont les hypotheses ? Quel est l'intervalle de confiance ?",
            stats: ["Si la science est neutre, pourquoi Ferguson n'a pas ete audite?", "Si les ressources sont limitees, pourquoi ignorer 11M km2 de ZEE?", "Si c'est utopique, pourquoi la Coree du Sud le fait deja?"],
            cloture: "La science appartient a tout le monde. C'est une methode, pas une eglise."
        }
    },
    "masculinite-feminisme": {
        rouge: {
            these: "75% des suicides, 96% des detenus, 77% des sans-abri sont des hommes. Et on parle de 'privilege masculin'?",
            stats: ["Testosterone: -1.2%/an depuis 1980", "20% des garcons decrochent vs 11% des filles", "1000+ sanctions universitaires pour cancel culture 2014-2023"],
            cloture: "Quand 3 suicides sur 4 sont masculins et qu'on vous dit que le probleme c'est la masculinite toxique, c'est le diagnostic qui est toxique."
        },
        orange: {
            these: "La crise de la masculinite est documentee par des donnees institutionnelles. L'ignorer n'est pas progressiste, c'est irresponsable.",
            stats: ["Paradoxe de l'egalite: plus un pays est egalitaire, plus les differences de choix s'accentuent", "Big Five: les ecarts grandissent avec l'egalite", "Baron-Cohen: d=0.65 empathie, d=0.64 systemisation"],
            cloture: "Les faits ne sont ni de droite ni de gauche. Ils sont."
        },
        jaune: {
            these: "Les differences homme-femme sont a la fois biologiques et sociales. Nier l'un ou l'autre est anti-scientifique.",
            stats: ["Travison 2007: declin testosterone -1.2%/an independant de l'age", "Stoet & Geary 2018: paradoxe egalite STEM", "Brown 1991: universaux culturels lies au genre"],
            cloture: "La vraie egalite commence par reconnaitre les differences reelles pour mieux les adresser."
        },
        vert: {
            these: "Chaque civilisation qui a survecu l'a fait en donnant un role et un sens a ses jeunes hommes. Il est temps de reconstruire.",
            stats: ["BBBSA: -46% initiation drogues, +20% frequentation universitaire", "70% des jeunes incarceres = foyers monoparentaux", "Le mentorat one-to-one est le programme le plus efficace"],
            cloture: "Un garcon sans modele est un bateau sans gouvernail. Le mentorat n'est pas du luxe, c'est de la prevention."
        },
        bleu: {
            these: "Si la masculinite etait vraiment un 'privilege', pourquoi les hommes meurent-ils plus jeunes, se suicident-ils 3 fois plus, et representent-ils 96% des detenus?",
            stats: ["Si le patriarcat profite aux hommes, pourquoi 77% des SDF?", "Si le genre est construit, pourquoi le paradoxe scandinave?", "Si la testosterone n'a pas d'effet, pourquoi les federations sportives separent les categories?"],
            cloture: "Avant de deconstruire la masculinite, ne devrait-on pas comprendre pourquoi on en a besoin ?"
        }
    }
};

// ---- Citations ------------------------------------------

const citations = [
    // Taxe Zucman
    { quote: "Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato.", auteur: "Benito Mussolini", source: "Definition du fascisme", debat: "taxe-zucman", mode: "rouge" },
    { quote: "I could end the deficit in 5 minutes. You just pass a law that says that anytime there is a deficit of more than 3% of GDP, all sitting members of Congress are ineligible for re-election.", auteur: "Warren Buffett", source: "Interview CNBC", debat: "taxe-zucman", mode: "jaune" },
    { quote: "Les idiots apprennent de leur experience. Les gens intelligents apprennent de l'experience des autres.", auteur: "Otto von Bismarck", source: "", debat: "taxe-zucman", mode: "vert" },
    { quote: "Vous voulez une taxe sur la richesse ? Commencez par arreter de bruler l'argent que vous avez deja.", auteur: "Auguste Pugnet", source: "Fiche Taxe Zucman", debat: "taxe-zucman", mode: "rouge" },
    { quote: "Ne me dites pas qu'il faut taxer les riches. Dites-moi COMMENT sans que les classes moyennes paient l'addition.", auteur: "Auguste Pugnet", source: "Fiche Taxe Zucman", debat: "taxe-zucman", mode: "orange" },
    { quote: "La grandeur d'un pays ne se mesure pas a combien il prend, mais a combien il batit avec ce qu'il a.", auteur: "Auguste Pugnet", source: "Fiche Taxe Zucman", debat: "taxe-zucman", mode: "vert" },

    // Science & Abondance
    { quote: "La plus belle des ruses du diable est de vous persuader qu'il n'existe pas.", auteur: "Charles Baudelaire", source: "Le Spleen de Paris", debat: "science-abondance", mode: "rouge" },
    { quote: "Les lois c'est comme les saucisses, on veut surtout pas voir comment elles sont fabriquees.", auteur: "Otto von Bismarck", source: "", debat: "science-abondance", mode: "orange" },
    { quote: "Il n'y a qu'un seul homme de trop sur terre, c'est Monsieur Malthus.", auteur: "Pierre-Joseph Proudhon", source: "", debat: "science-abondance", mode: "vert" },
    { quote: "Quand le pretre te dit 'c'est la parole de Dieu', tu as le droit de douter. Quand le politique te dit 'the science is clear', tu as le devoir de douter.", auteur: "Auguste Pugnet", source: "Fiche Science", debat: "science-abondance", mode: "rouge" },
    { quote: "Les hypotheses, c'est comme les impots : ca se declare.", auteur: "Auguste Pugnet", source: "Fiche Science", debat: "science-abondance", mode: "orange" },
    { quote: "L'intelligence d'une civilisation se manifeste par ses infrastructures. Ou sont les notres ?", auteur: "Auguste Pugnet", source: "Fiche Science", debat: "science-abondance", mode: "vert" },
    { quote: "Un modele n'est pas la realite. C'est une opinion mathematique. Et les opinions, ca s'achete.", auteur: "Auguste Pugnet", source: "Fiche Science", debat: "science-abondance", mode: "rouge" },

    // Masculinite
    { quote: "Le pouvoir, pour les hommes, c'est le sentiment d'etre oblige de gagner de l'argent que quelqu'un d'autre depense pendant qu'ils meurent plus tot.", auteur: "Warren Farrell", source: "The Myth of Male Power", debat: "masculinite-feminisme", mode: "jaune" },
    { quote: "C'est une mauvaise epoque pour etre un garcon en Amerique.", auteur: "Christina Hoff Sommers", source: "The War Against Boys", debat: "masculinite-feminisme", mode: "orange" },
    { quote: "Ce que le feminisme appelle patriarcat n'est rien d'autre que la civilisation.", auteur: "Camille Paglia", source: "Sexual Personae", debat: "masculinite-feminisme", mode: "rouge" },
    { quote: "Si les hommes sont pousses trop fort a se feminiser, ils deviendront de plus en plus interesses par les ideologies politiques dures et fascistes.", auteur: "Jordan Peterson", source: "12 Rules for Life", debat: "masculinite-feminisme", mode: "vert" },
    { quote: "Quand 3 suicides sur 4 sont masculins et qu'on vous dit que le probleme c'est la masculinite toxique, c'est le diagnostic qui est toxique.", auteur: "Auguste Pugnet", source: "Fiche Masculinite", debat: "masculinite-feminisme", mode: "rouge" },
    { quote: "Un garcon sans modele est un bateau sans gouvernail. Le mentorat n'est pas du luxe, c'est de la prevention.", auteur: "Auguste Pugnet", source: "Fiche Masculinite", debat: "masculinite-feminisme", mode: "vert" }
];

// ---- Poster Data ----------------------------------------

const posterData = [
    {
        id: "taxe-zucman",
        icon: "\uD83D\uDCB0",
        title: "La Taxe Zucman",
        thesis: "La taxe Zucman est une mesure populiste qui abolira la propriete privee des classes moyennes. Des alternatives intelligentes existent.",
        gradient: "linear-gradient(135deg, #1a0a0a 0%, #3d0c0c 30%, #1a1a2e 100%)",
        stats: [
            { number: "57%", label: "Depenses publiques / PIB" },
            { number: "3 300 Mds", label: "Dette publique francaise" },
            { number: "40%", label: "Du CA ponctionne par la taxe 2%" }
        ],
        cloture: "Vous voulez une taxe sur la richesse ? Commencez par arreter de bruler l'argent que vous avez deja."
    },
    {
        id: "science-abondance",
        icon: "\uD83D\uDD2C",
        title: "Science & Abondance",
        thesis: "La science capturee par le politique sert le rationnement. La France peut devenir puissance de l'abondance via ses ressources maritimes.",
        gradient: "linear-gradient(135deg, #0a1a0a 0%, #0c3d1a 30%, #1a1a2e 100%)",
        stats: [
            { number: "11M km\u00b2", label: "ZEE francaise" },
            { number: "400 Mds m\u00b3", label: "Methane potentiel / an" },
            { number: "120t/ha", label: "Rendement macroalgues / an" }
        ],
        cloture: "Quand le pretre te dit 'c'est la parole de Dieu', tu as le droit de douter. Quand le politique te dit 'the science is clear', tu as le devoir de douter."
    },
    {
        id: "masculinite-feminisme",
        icon: "\u2642\uFE0F",
        title: "Masculinite & Feminisme",
        thesis: "La crise de la masculinite est reelle, documentee, et ignoree. Le feminisme de 4e vague et le wokisme aggravent la fragmentation sociale.",
        gradient: "linear-gradient(135deg, #1a0a1a 0%, #3d0c3d 30%, #1a1a2e 100%)",
        stats: [
            { number: "75%", label: "Suicides masculins" },
            { number: "96%", label: "Population carcerale = hommes" },
            { number: "-1.2%/an", label: "Declin testosterone depuis 1980" }
        ],
        cloture: "Quand 3 suicides sur 4 sont masculins et qu'on vous dit que le probleme c'est la masculinite toxique, c'est le diagnostic qui est toxique."
    },
    {
        id: "droite-gauche",
        icon: "\u2696\uFE0F",
        title: "Droite vs Gauche",
        thesis: "Le debat n'est pas capitalisme OU redistribution, mais comment redistribuer efficacement.",
        gradient: "linear-gradient(135deg, #0a0a1a 0%, #0c1a3d 30%, #1a1a2e 100%)",
        stats: [
            { number: "43.2%", label: "Prelevements / PIB (2e OCDE)" },
            { number: "9.1M", label: "Pauvres malgre 800 Mds d'aides" },
            { number: "0.32", label: "Coefficient Gini France" }
        ],
        cloture: "La France taxe enormement mais redistribue inefficacement."
    },
    {
        id: "course-ia",
        icon: "\uD83E\uDD16",
        title: "La Course a l'IA",
        thesis: "L'IA est le nouveau paradigme de puissance. L'Europe a les atouts mais pas la volonte. C'est une urgence a 5-10 ans.",
        gradient: "linear-gradient(135deg, #0a1a1a 0%, #0c3d3d 30%, #1a1a2e 100%)",
        stats: [
            { number: "109 Mds", label: "Investissement USA en IA (2024)" },
            { number: "90%", label: "Marche GPU = NVIDIA" },
            { number: "30-40%", label: "Emplois affectes d'ici 10 ans" }
        ],
        cloture: "L'Europe a les atouts — nucleaire, talents, donnees. Mais la volonte politique manque cruellement."
    },
    {
        id: "risques-existentiels",
        icon: "\u26A0\uFE0F",
        title: "Risques Existentiels",
        thesis: "L'IA non alignee est le risque #1. Le climat est urgent mais sub-existentiel. Le decalage entre priorites reelles et debat public est dangereux.",
        gradient: "linear-gradient(135deg, #1a1a0a 0%, #3d3d0c 30%, #1a1a2e 100%)",
        stats: [
            { number: "17%", label: "Risque catastrophe existentielle ce siecle" },
            { number: "12 241", label: "Ogives nucleaires mondiales" },
            { number: "85s", label: "Horloge Apocalypse avant minuit" }
        ],
        cloture: "Le decalage entre les priorites reelles et le debat public est lui-meme un risque existentiel."
    }
];

// ---- Utility functions -----------------------------------

/** Pick dominant mode color (first mode with highest weight, or cycle) */
function dominantColor(d) {
    if (!d.explored) return "rgba(255,255,255,0.12)";
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

/** Compute overall objectivity 0-100 from polarisation axes. */
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

    const score = objectivityScore(agg);
    const circumference = 2 * Math.PI * 52;
    const arc = document.getElementById("score-arc");
    const val = document.getElementById("objectivity-value");
    if (arc) {
        const offset = circumference - (score / 100) * circumference;
        arc.style.strokeDashoffset = offset;
        if (score >= 70) arc.style.stroke = "#228B22";
        else if (score >= 40) arc.style.stroke = "#DAA520";
        else arc.style.stroke = "#DC143C";
    }
    if (val) val.textContent = score;
}

// ---- Tab Navigation -------------------------------------

let graphInitialized = false;

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update panels
            tabPanels.forEach(p => p.classList.remove('active'));
            const targetPanel = document.getElementById('panel-' + targetTab);
            if (targetPanel) targetPanel.classList.add('active');

            // Lazy-init tabs
            if (targetTab === 'carte' && !graphInitialized) {
                initGraph();
                graphInitialized = true;
            }
            if (targetTab === 'fiches') renderFiches();
            if (targetTab === 'citations') renderCitations();
            if (targetTab === 'posters') renderPosters();
        });
    });
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

    // Build links
    const links = [];
    const exploredNodes = nodes.filter(n => n.explored);
    nodes.filter(n => !n.explored).forEach(s => {
        const target = exploredNodes[Math.floor(Math.random() * exploredNodes.length)];
        if (target) links.push({ source: s.id, target: target.id });
    });
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

    // Inner ring
    nodeGroups.filter(d => d.explored).append("circle")
        .attr("r", d => bubbleRadius(d) - 6)
        .attr("fill", "none")
        .attr("stroke", "rgba(255,255,255,0.12)")
        .attr("stroke-width", 1);

    // Labels
    nodeGroups.each(function(d) {
        const g = d3.select(this);
        const r = bubbleRadius(d);
        const maxWidth = r * 1.5;
        const words = d.titre.split(/\s+/);
        const lines = [];
        let currentLine = [];

        words.forEach(word => {
            currentLine.push(word);
            if (currentLine.join(" ").length > (maxWidth / 6)) {
                lines.push(currentLine.join(" "));
                currentLine = [];
            }
        });
        if (currentLine.length) lines.push(currentLine.join(" "));

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

    // Sources badge
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

    // Click handler
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

// ---- Fiches Tab -----------------------------------------

let fichesRendered = false;

function renderFiches() {
    if (fichesRendered) return;
    fichesRendered = true;

    const grid = document.getElementById('fiches-grid');
    grid.innerHTML = '';

    debates.forEach(debate => {
        const card = document.createElement('div');
        card.className = 'fiche-card';

        const hasFiches = fichesContent[debate.id];

        // Title
        const title = document.createElement('div');
        title.className = 'fiche-card-title';
        title.textContent = debate.titre;
        card.appendChild(title);

        // Thesis
        const thesis = document.createElement('div');
        thesis.className = 'fiche-card-thesis';
        thesis.textContent = debate.these;
        card.appendChild(thesis);

        // Mode badges
        const modesDiv = document.createElement('div');
        modesDiv.className = 'fiche-modes';
        debate.modes.forEach(mode => {
            const badge = document.createElement('span');
            badge.className = 'fiche-mode-badge';
            badge.style.background = MODE_COLORS[mode];
            badge.textContent = MODE_LABELS[mode];
            badge.dataset.mode = mode;
            badge.dataset.debat = debate.id;

            if (hasFiches) {
                badge.addEventListener('click', () => toggleFicheMode(card, debate.id, mode, badge));
            }

            modesDiv.appendChild(badge);
        });
        card.appendChild(modesDiv);

        // Mode content container (hidden by default)
        const contentContainer = document.createElement('div');
        contentContainer.className = 'fiche-mode-content';
        contentContainer.id = 'fiche-content-' + debate.id;
        card.appendChild(contentContainer);

        if (!hasFiches) {
            const placeholder = document.createElement('div');
            placeholder.className = 'fiche-placeholder';
            placeholder.textContent = 'Fiches en preparation';
            card.appendChild(placeholder);
        }

        // Meta row
        const meta = document.createElement('div');
        meta.className = 'fiche-card-meta';

        const sources = document.createElement('span');
        sources.className = 'fiche-sources';
        sources.textContent = debate.sources_count + ' sources';
        meta.appendChild(sources);

        if (debate.pdf_path) {
            const pdfBtn = document.createElement('a');
            pdfBtn.className = 'fiche-pdf-btn';
            pdfBtn.href = debate.pdf_path;
            pdfBtn.target = '_blank';
            pdfBtn.textContent = 'PDF';
            meta.appendChild(pdfBtn);
        }

        card.appendChild(meta);
        grid.appendChild(card);
    });
}

function toggleFicheMode(card, debatId, mode, badge) {
    const container = card.querySelector('.fiche-mode-content');
    const content = fichesContent[debatId];
    if (!content || !content[mode]) return;

    const modeData = content[mode];
    const isExpanded = container.classList.contains('visible') && container.dataset.activeMode === mode;

    // Remove expanded class from all badges in this card
    card.querySelectorAll('.fiche-mode-badge').forEach(b => b.classList.remove('expanded'));

    if (isExpanded) {
        container.classList.remove('visible');
        container.dataset.activeMode = '';
        return;
    }

    // Show content
    badge.classList.add('expanded');
    container.dataset.activeMode = mode;
    container.style.borderLeftColor = MODE_COLORS[mode];

    container.innerHTML = '';

    // These
    const theseLabel = document.createElement('h4');
    theseLabel.textContent = 'These express — Mode ' + MODE_LABELS[mode];
    container.appendChild(theseLabel);

    const theseP = document.createElement('div');
    theseP.className = 'fiche-mode-these';
    theseP.textContent = modeData.these;
    container.appendChild(theseP);

    // Stats
    const statsLabel = document.createElement('h4');
    statsLabel.textContent = 'Chiffres cles';
    container.appendChild(statsLabel);

    const statsList = document.createElement('ul');
    statsList.className = 'fiche-mode-stats';
    modeData.stats.forEach(stat => {
        const li = document.createElement('li');
        li.textContent = stat;
        li.style.color = MODE_COLORS[mode];
        statsList.appendChild(li);
    });
    container.appendChild(statsList);

    // Cloture
    const clotureLabel = document.createElement('h4');
    clotureLabel.textContent = 'Phrase de cloture';
    container.appendChild(clotureLabel);

    const clotureP = document.createElement('div');
    clotureP.className = 'fiche-mode-cloture';
    clotureP.textContent = '\u201C ' + modeData.cloture + ' \u201D';
    container.appendChild(clotureP);

    container.classList.add('visible');
}

// ---- Citations Tab --------------------------------------

let citationsRendered = false;

function renderCitations(filter) {
    const grid = document.getElementById('citations-grid');
    grid.innerHTML = '';

    const searchTerm = (filter || '').toLowerCase().trim();

    const filtered = searchTerm
        ? citations.filter(c =>
            c.quote.toLowerCase().includes(searchTerm) ||
            c.auteur.toLowerCase().includes(searchTerm) ||
            c.source.toLowerCase().includes(searchTerm) ||
            c.debat.toLowerCase().includes(searchTerm) ||
            c.mode.toLowerCase().includes(searchTerm)
        )
        : citations;

    if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'citations-empty';
        empty.textContent = 'Aucune citation trouvee pour "' + searchTerm + '"';
        grid.appendChild(empty);
        return;
    }

    filtered.forEach(c => {
        const card = document.createElement('div');
        card.className = 'citation-card';
        card.style.borderLeftColor = MODE_COLORS[c.mode] || '#666';

        const quote = document.createElement('div');
        quote.className = 'citation-quote';
        quote.textContent = c.quote;
        card.appendChild(quote);

        const meta = document.createElement('div');
        meta.className = 'citation-meta';

        const author = document.createElement('span');
        author.className = 'citation-author';
        author.textContent = '\u2014 ' + c.auteur;
        meta.appendChild(author);

        if (c.source) {
            const source = document.createElement('span');
            source.className = 'citation-source';
            source.textContent = c.source;
            meta.appendChild(source);
        }

        card.appendChild(meta);
        grid.appendChild(card);
    });

    // Setup search listener (only once)
    if (!citationsRendered) {
        citationsRendered = true;
        const searchInput = document.getElementById('citations-search');
        let debounceTimer;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                renderCitations(searchInput.value);
            }, 200);
        });
    }
}

// ---- Posters Tab ----------------------------------------

let postersRendered = false;

function renderPosters() {
    if (postersRendered) return;
    postersRendered = true;

    const grid = document.getElementById('posters-grid');
    grid.innerHTML = '';

    posterData.forEach(poster => {
        const card = document.createElement('div');
        card.className = 'poster-card';
        card.style.background = poster.gradient;

        // Icon
        const icon = document.createElement('div');
        icon.className = 'poster-icon';
        icon.textContent = poster.icon;
        card.appendChild(icon);

        // Title
        const title = document.createElement('div');
        title.className = 'poster-title';
        title.textContent = poster.title;
        card.appendChild(title);

        // Thesis
        const thesis = document.createElement('div');
        thesis.className = 'poster-thesis';
        thesis.textContent = poster.thesis;
        card.appendChild(thesis);

        // Stats
        const statsRow = document.createElement('div');
        statsRow.className = 'poster-stats';
        poster.stats.forEach(stat => {
            const box = document.createElement('div');
            box.className = 'poster-stat-box';

            const num = document.createElement('div');
            num.className = 'poster-stat-number';
            num.textContent = stat.number;
            box.appendChild(num);

            const label = document.createElement('div');
            label.className = 'poster-stat-label';
            label.textContent = stat.label;
            box.appendChild(label);

            statsRow.appendChild(box);
        });
        card.appendChild(statsRow);

        // Cloture
        const cloture = document.createElement('div');
        cloture.className = 'poster-cloture';
        cloture.textContent = poster.cloture;
        card.appendChild(cloture);

        grid.appendChild(card);
    });
}

// ---- Detail Panel ---------------------------------------

let radarChart = null;

function openPanel(d) {
    const panel = document.getElementById("detail-panel");
    const overlay = document.getElementById("overlay");

    document.getElementById("panel-title").textContent = d.titre;
    document.getElementById("panel-thesis").textContent = d.these;

    const factsList = document.getElementById("panel-facts");
    factsList.innerHTML = "";
    (d.faits_cles || []).forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        factsList.appendChild(li);
    });

    const pdfLink = document.getElementById("panel-pdf");
    if (d.pdf_path) {
        pdfLink.href = d.pdf_path;
        pdfLink.style.display = "inline-block";
    } else {
        pdfLink.style.display = "none";
    }

    const sugList = document.getElementById("panel-suggestions");
    sugList.innerHTML = "";
    (d.suggestions || []).forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        sugList.appendChild(li);
    });

    renderRadar(d.polarisation);

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
    initTabs();
    // Init graph immediately since Carte is the default tab
    initGraph();
    graphInitialized = true;
});
