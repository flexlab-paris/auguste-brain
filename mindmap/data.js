/* =========================================================
   Auguste Brain — Data layer
   All content data (debates, fiches, citations, posters)
   ========================================================= */

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
    },
    {
        id: "levee-friction",
        titre: "Levee de Fonds — Friction Administrative France vs US",
        these: "La friction juridico-administrative francaise protege les parties mais detruit la vitesse, condamnant les seeds a payer 5 a 10% du tour en intermediaires la ou les US standardisent a moins d'1%. La vraie revolution n'est pas moins de droit, mais du droit pre-emballe.",
        faits_cles: [
            "SAFE Y Combinator: closing en 24h pour ~5K USD vs France 15-30K EUR + 3 mois",
            "5-10% du tour en frais juridiques en seed France vs <1% aux US",
            "Commissaire aux avantages particuliers obligatoire si actions de preference",
            "Suppression du DPS exige PV special + parfois rapport commissaire",
            "Estonie: levee 100% en ligne via e-residency, registre numerique"
        ],
        sources_count: 8,
        explored: true,
        polarisation: { gauche_droite: -10, libertaire_autoritaire: -45, rationnel_emotionnel: 75, factuel_speculatif: 80 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: null,
        suggestions: ["Etudier le BSA-Air et son standard", "Comparer SEIS/EIS britannique", "Analyser le notaire allemand", "Mesurer cout reel d'une seed FR moyenne"]
    },
    {
        id: "dilution-fondateur",
        titre: "Dilution — Sacrifice ou Erreur Strategique ?",
        these: "La dilution n'est ni vertu ni vice : c'est un outil mathematique. 70% d'une boite a 50M vaut infiniment plus que 100% d'une boite a 500K. Mais chaque pourcent cede l'est pour toujours, et les clauses asymetriques transforment souvent un fondateur majoritaire en spectateur.",
        faits_cles: [
            "Jeff Bezos: 16% d'Amazon au IPO, fortune massive grace au scale",
            "Liquidation preference 1x non-participatif vs 2x participatif: ecart de 5M sur exit 30M",
            "Bootstrapped exemples: Mailchimp vendu 12 Mds, Basecamp profitable, Patagonia rentable",
            "Regle empirique: ne pas ceder >20% en seed, >25% en Series A",
            "Anti-dilution full ratchet vs weighted average: difference de 10pts sur down round"
        ],
        sources_count: 6,
        explored: true,
        polarisation: { gauche_droite: -20, libertaire_autoritaire: -30, rationnel_emotionnel: 60, factuel_speculatif: 85 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: null,
        suggestions: ["Etudier cap tables Stripe, Airbnb, Figma", "Analyser drag-along et tag-along", "Comparer SAFE post-money vs pre-money"]
    },
    {
        id: "rhetorique-verites-difficiles",
        titre: "Rhetorique des Verites Difficiles — Comment dire ce qui doit etre dit",
        these: "Une verite dure n'atteint sa cible que si elle est emballee pour ne pas activer les defenses du destinataire. Sept mecaniques transforment une prescription qui blesse en temoignage qui transforme : posture de partage, desamorcage explicite, glissement pronominal, metaphore, caution externe, rythme, nuance fondamentale.",
        faits_cles: [
            "Carl Rogers : la reformulation empathique augmente l'adoption d'une verite difficile de 3 a 7x",
            "Miller & Rollnick (Motivational Interviewing) : posture temoignage vs prescription = taux d'acceptation x4",
            "Lakoff : la metaphore active 2x plus de regions cerebrales que l'enonce direct",
            "Heath Brothers (Switch) : 80% des changements ratent par defaut d'emballage, pas par defaut de contenu",
            "Viktor Frankl : on peut tout enlever a un homme, sauf la liberte de choisir son attitude face a ce qu'il vit"
        ],
        sources_count: 10,
        explored: true,
        polarisation: { gauche_droite: 0, libertaire_autoritaire: -25, rationnel_emotionnel: 55, factuel_speculatif: 65 },
        modes: ["rouge", "orange", "jaune", "vert", "bleu"],
        pdf_path: "fiches/rhetorique-verites-difficiles/fiches-rhetorique-verites-difficiles.pdf",
        suggestions: ["Etudier Carl Rogers ecoute active", "Lire Switch de Heath Brothers", "Approfondir Motivational Interviewing", "Constituer bibliotheque personnelle de 50 metaphores"]
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
    "levee-friction": {
        rouge: {
            these: "La France a invente un capitalisme de notaires. Pendant qu'un fondateur parisien remplit son 17e formulaire INPI, son concurrent californien a leve, embauche, et tue le marche.",
            stats: ["SAFE YC: 24h, 5K USD vs FR: 3 mois, 30K EUR", "5 a 10% du tour englouti en juridique seed France", "Une seed FR moyenne mobilise le fondateur 200h en compliance"],
            cloture: "Vous avez le droit d'aimer le droit. Vous n'avez pas le droit de tuer les entrepreneurs sous le poids du formulaire."
        },
        orange: {
            these: "Le vrai cout d'une levee francaise n'est pas dans les honoraires d'avocats. Il est dans les semaines de cerveau fondateur drainees au lieu d'etre concentrees sur le produit, les clients, l'execution.",
            stats: ["Temps fondateur = ressource la plus rare d'une startup", "100h en compliance = 100h non passees a vendre", "Aux US, le SAFE a industrialise le seed: cout marginal quasi nul"],
            cloture: "On ne mesure pas la friction en euros. On la mesure en startups qui n'ont jamais leve parce que c'etait trop lourd."
        },
        jaune: {
            these: "La protection juridique francaise est reelle. Elle a une valeur. Mais son cout marginal est devenu superieur a sa valeur marginale pour les tours sous 1 million d'euros.",
            stats: ["Code de commerce: protections fortes minoritaires", "Delaware: standardisation NVCA, vitesse maximale", "BSA-Air FR existe mais 0 standardisation reelle"],
            cloture: "Le bon arbitrage n'est pas friction vs vitesse. C'est friction calibree vs friction aveugle."
        },
        vert: {
            these: "La France pourrait creer un SAFE national, un BSA-Air standardise, un greffe accelere pour les seeds. Pas moins de droit, mais du droit pre-emballe. C'est ce que YC a fait. C'est imitable.",
            stats: ["UK SEIS: credit d'impot 50% pour BA, closing 4 a 6 semaines", "Estonie: levee 100% en ligne, e-residency, registre numerique", "Singapour: hub mondial, fiscalite startup-friendly, common law"],
            cloture: "Si les Estoniens peuvent faire mieux que nous, la question n'est plus 'pouvons-nous?' mais 'pourquoi ne le faisons-nous pas?'"
        },
        bleu: {
            these: "Si la friction protege, pourquoi les fondateurs les plus serieux choisissent-ils Delaware ? Si elle filtre les escrocs, pourquoi y a-t-il quand meme des fraudes ? Si elle institutionnalise, pourquoi rassure-t-elle si peu les LPs etrangers ?",
            stats: ["50% des startups francaises Series B+ ont une holding US", "Les meilleurs avocats francais pretent le SAFE en interne", "0 deal seed francais ne ferme en moins de 4 semaines"],
            cloture: "La friction est-elle une protection ou une rente d'intermediaires deguisee en garde-fou ?"
        }
    },
    "dilution-fondateur": {
        rouge: {
            these: "On vous vend la dilution comme une elevation. On oublie de vous dire que les clauses asymetriques peuvent transformer votre majorite formelle en spectacle, et votre exit en disparition.",
            stats: ["Liquidation preference 2x participating: fondateur peut sortir avec 0 sur exit 30M", "Drag-along: votre 60% peut etre force a vendre par vos 40%", "Anti-dilution full ratchet: down round = annihilation"],
            cloture: "Le term sheet, ce n'est pas un contrat. C'est un piege en costume."
        },
        orange: {
            these: "Le bon question n'est pas combien tu cedes, mais a qui et avec quelles clauses. Un partner premium a 25% vaut mieux qu'un fonds mediocre a 15%.",
            stats: ["Top-tier VCs apportent 3 a 10x leur cheque en reseau/credibilite", "Mais 80% des fonds VCs sous-performent l'index public", "Le mauvais investisseur peut detruire en 6 mois 5 ans de travail"],
            cloture: "Ne demande pas 'combien je dilue?' Demande 'qui suis-je en train d'inviter dans mon mariage?'"
        },
        jaune: {
            these: "La dilution est une operation mathematique. 70% d'une boite a 50M vaut infiniment plus que 100% d'une boite a 500K. Mais cela suppose que la boite scale -- ce qui n'est ni automatique ni garanti.",
            stats: ["Bezos: 16% Amazon IPO, fortune massive grace au scale", "Mailchimp bootstrapped: 12 Mds USD a la sortie", "Regle empirique: <20% par tour seed, <25% Series A"],
            cloture: "Diluer pour scale = noble. Diluer pour exister = parfois necessaire. Diluer pour exhiber un term sheet = faute."
        },
        vert: {
            these: "Le vrai capital n'est pas l'argent. C'est le couple capital + reseau + gouvernance. Le bon investisseur transforme une boite. Le mauvais la fossilise.",
            stats: ["Sequoia, Benchmark, Accel: ratio de transformation x10 vs cheque moyen", "Stripe a Sequoia 2010 = inflexion definitive", "Pacte fondateur blinde = condition non-negociable"],
            cloture: "Le meilleur investisseur n'est pas celui qui paie le plus cher. C'est celui qui rend ton aventure inevitable."
        },
        bleu: {
            these: "Si la dilution etait sans cout, pourquoi tant de fondateurs regrettent-ils leur premier tour ? Si les VCs creaient toujours de la valeur, pourquoi 80% des fonds sous-performent ? Si bootstrap etait inferieur, pourquoi Mailchimp, Patagonia, Basecamp ?",
            stats: ["80% des VCs sous-performent l'index public", "Le regret #1 des fondateurs: 'leve trop tot, dilue trop fort'", "Bootstrapped exits >100M: rarement evoques, souvent superieurs"],
            cloture: "Avant de dire 'je dois lever', as-tu serieusement etudie pourquoi tu pourrais ne pas lever ?"
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
    },
    "rhetorique-verites-difficiles": {
        rouge: {
            these: "Tu crois dire la verite. Tu fais en realite acte de violence. Une verite balancee sans soin n'eclaire pas le destinataire, elle l'agresse. Et l'agression ferme les oreilles avant meme que le mot soit prononce.",
            stats: [
                "80% des changements echouent par defaut d'emballage, pas par defaut de contenu (Heath Brothers)",
                "Le 'tu dois' active l'amygdale en 200ms : reaction defense AVANT comprehension",
                "Une prescription mal emballee divise par 4 le taux d'acceptation (Miller & Rollnick)"
            ],
            cloture: "Dire la verite comme une matraque, c'est la trahir. Tu n'as pas livre un message, tu as livre une blessure."
        },
        orange: {
            these: "Le contenu de ta verite est juste. C'est l'emballage qui tue le message. Tant que tu n'auras pas accepte que la forme est aussi importante que le fond, tes meilleures intuitions resteront sur le carreau.",
            stats: [
                "Ratio diagnostic juste / message recu : souvent 1 sur 10",
                "Carl Rogers : la reformulation empathique multiplie l'adoption par 3 a 7",
                "La metaphore active 2x plus de regions cerebrales que l'enonce direct (Lakoff)"
            ],
            cloture: "Avoir raison ne suffit pas. Etre entendu, ca se travaille."
        },
        jaune: {
            these: "Sept mecaniques eprouvees transforment une prescription qui blesse en temoignage qui transforme : posture de partage, desamorcage prealable, glissement 'tu' vers 'on', metaphore, caution historique, rythme, nuance fondamentale. C'est une science, pas un don.",
            stats: [
                "Mecanique 1 (partage > prescription) : 'ce que j'ai compris' au lieu de 'tu dois'",
                "Mecanique 4 (metaphore) : remplacer 'compare pas au passe' par 'on ne marche pas en arriere vers son avenir'",
                "Mecanique 7 (nuance) : 'difficile et foutu, ce n'est pas la meme chose' detruit la binaire defaitiste"
            ],
            cloture: "Les grands rheteurs ne diluent jamais la verite. Ils la presentent de facon a ce qu'elle ne soit pas refusee."
        },
        vert: {
            these: "L'eloquence est un cadeau, pas un sermon. Communiquer une verite dure avec efficacite, c'est trouver l'angle qui permet a l'autre de la recevoir sans avoir a se defendre. C'est un acte d'amour deguise en technique.",
            stats: [
                "Cicero, Lincoln, Churchill, MLK : aucun n'a jamais dilue la verite, tous l'ont emballee",
                "Viktor Frankl : 'On peut tout enlever a un homme, sauf la liberte de choisir son attitude'",
                "L'inclusion pronominale (nous, on) dissout 80% de la posture accusatoire"
            ],
            cloture: "La plus belle des verites est celle qui rejoint l'autre sur le banc, pas celle qui le pointe du doigt."
        },
        bleu: {
            these: "Si ta verite etait si juste, pourquoi personne ne la recoit ? Si tu communiques bien, pourquoi tes proches se ferment ? Si l'autre etait borne, pourquoi tu n'as jamais essaye une autre formulation ?",
            stats: [
                "Combien de fois as-tu dit 'tu dois' cette semaine ? Combien de fois 'ce que j'ai compris' ?",
                "Tes 10 dernieres verites difficiles : combien ont change quelqu'un ? Combien ont blesse pour rien ?",
                "Ta voix interieure dit-elle 'j'ai raison' ou 'je suis entendu' ? Ce n'est pas la meme chose."
            ],
            cloture: "Avant d'accuser le monde de ne pas t'ecouter, as-tu serieusement examine la facon dont tu parles ?"
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
    { quote: "Un garcon sans modele est un bateau sans gouvernail. Le mentorat n'est pas du luxe, c'est de la prevention.", auteur: "Auguste Pugnet", source: "Fiche Masculinite", debat: "masculinite-feminisme", mode: "vert" },

    // Rhetorique des verites difficiles
    { quote: "On peut tout enlever a un homme, sauf la liberte de choisir son attitude face a ce qu'il vit.", auteur: "Viktor Frankl", source: "Man's Search for Meaning", debat: "rhetorique-verites-difficiles", mode: "vert" },
    { quote: "If you cannot, in the long run, tell everyone what you have been doing, your doing has been worthless.", auteur: "Erwin Schrodinger", source: "Science and Humanism", debat: "rhetorique-verites-difficiles", mode: "jaune" },
    { quote: "Le langage est la maison de l'etre. Dans son abri habite l'homme.", auteur: "Martin Heidegger", source: "Lettre sur l'humanisme", debat: "rhetorique-verites-difficiles", mode: "vert" },
    { quote: "Quand un sage montre la lune, l'imbecile regarde le doigt.", auteur: "Proverbe chinois", source: "", debat: "rhetorique-verites-difficiles", mode: "orange" },
    { quote: "Les hommes ne sont pas troubles par les choses, mais par les jugements qu'ils portent sur les choses.", auteur: "Epictete", source: "Manuel", debat: "rhetorique-verites-difficiles", mode: "bleu" },
    { quote: "Dire la verite comme une matraque, c'est la trahir.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "rouge" },
    { quote: "Avoir raison ne suffit pas. Etre entendu, ca se travaille.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "orange" },
    { quote: "La plus belle des verites est celle qui rejoint l'autre sur le banc, pas celle qui le pointe du doigt.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "vert" },
    { quote: "Difficile et foutu, ce n'est pas la meme chose. Et toute la difference est la.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "jaune" },
    { quote: "On ne marche pas en arriere vers son avenir.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "vert" },
    { quote: "Chaque pensee qu'on laisse passer est une brique dans l'homme qu'on devient.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "jaune" },
    { quote: "Le vrai adversaire n'est pas la situation. C'est la voix interieure. Et cette voix-la, c'est toi qui lui donnes le micro.", auteur: "Auguste Pugnet", source: "Fiche Rhetorique", debat: "rhetorique-verites-difficiles", mode: "rouge" }
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
    },
    {
        id: "rhetorique-verites-difficiles",
        icon: "\uD83D\uDDE3\uFE0F",
        title: "Rhetorique des Verites Difficiles",
        thesis: "Une verite dure n'atteint sa cible que si elle est emballee pour ne pas activer les defenses du destinataire. Sept mecaniques eprouvees transforment une prescription qui blesse en temoignage qui transforme.",
        gradient: "linear-gradient(135deg, #1a0a1a 0%, #2d1a0c 30%, #1a1a2e 100%)",
        stats: [
            { number: "7", label: "Mecaniques rhetoriques essentielles" },
            { number: "x4", label: "Acceptation : temoignage vs prescription" },
            { number: "80%", label: "Des changements echouent par mauvais emballage" }
        ],
        cloture: "Communiquer une verite dure, c'est trouver l'angle qui permet a l'autre de la recevoir sans avoir a se defendre."
    }
];

