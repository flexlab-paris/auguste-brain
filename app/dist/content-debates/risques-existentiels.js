// /mindmap/content-debates/risques-existentiels.js
// Fiche rhetorique profonde -- Debat "Priorites Civilisationnelles -- Risques Existentiels"
// Voix : Auguste Pugnet + corpus polyphonique (Ord, Bostrom, Russell, Sagan)
// Source : data.js (debates, citations, posterData, fichesContent)

if (typeof CONTENT_DEBATES_REGISTRY === 'undefined') { var CONTENT_DEBATES_REGISTRY = {}; }

const CONTENT_DEBATES_risques_existentiels = {
  id: "risques-existentiels",
  slug: "risques-existentiels-priorites-civilisationnelles",
  title: "Priorites Civilisationnelles -- Risques Existentiels",
  speaker: "Auguste Pugnet (corpus polyphonique)",
  format: "Debat structure - Fiche rhetorique",
  word_count: 8500,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "Le climat brulera notre epoque. L'IA non alignee peut brûler l'espece.",
  thesis: "L'IA non alignee est le risque civilisationnel #1 du XXIe siecle -- superieur en probabilite conditionnelle a tous les autres risques d'extinction reunis. Le climat est urgent mais sub-existentiel : il degrade sans anéantir. Le decalage entre nos priorites reelles et le debat public constitue en soi un risque existentiel supplementaire.",
  key_takeaways: [
    "Distinguer catastrophe (millions de morts) et evenement existentiel (fin de l'espece) : la difference n'est pas quantitative, elle est ontologique",
    "P(catastrophe existentielle ce siecle) = 17% selon Ord 2020 -- 1 chance sur 6, plus qu'a la roulette russe",
    "L'IA non alignee compte a elle seule pour ~10% du risque total -- plus que tous les autres cumules",
    "Le climat n'est pas existentiel : +4 degres est catastrophique, pas fatal pour l'espece humaine",
    "12 241 ogives nucleaires actives -- une guerre limitee suffit a un hiver nucleaire regional. Ce risque reste sous-cite",
    "Horloge de l'Apocalypse a 85 secondes de minuit (record 2026) -- signal expert converge",
    "Le vrai risque n'est pas la superintelligence apocalyptique -- c'est l'IA suffisamment competente utilisee pour prendre des decisions dont on n'a pas prevu les consequences",
    "Prioriser rationnellement les risques n'est pas les hierarchiser moralement -- c'est calibrer notre attention finie",
  ],

  // ============================================================
  // 2. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "L'IA non alignee est le risque existentiel principal, le climat un risque catastrophique mais sub-existentiel, et le decalage priorite/debat public est un risque en soi",
      children: [
        {
          claim: "Il faut distinguer catastrophe et evenement existentiel",
          type: "premise",
          strength: 10,
          evidence: [
            "Ord 2020 : evenement existentiel = extinction OU verrouillage durable dans un etat sous-optimal",
            "Une catastrophe de 100M morts est une catastrophe -- l'humanite en a survecu (peste noire, WW2)",
            "Un evenement existentiel n'a pas de rebond possible -- il est terminal",
          ],
          children: [
            {
              claim: "Le climat entraine une catastrophe potentielle, pas une extinction",
              type: "premise",
              strength: 8,
              evidence: [
                "IPCC scenarios les plus severes : +4 a +6 degres = 500M-3Md morts, refugies massifs, PIB divise par 2",
                "Mais : humanite persiste dans les zones temperees. Aucune scenario IPCC ne prevoit l'extinction",
                "Meme le pire IPCC est comparable a WW2 en termes ontologiques : catastrophique, non existentiel",
              ],
            },
            {
              claim: "L'IA superintelligente non alignee entraine un evenement existentiel possible",
              type: "premise",
              strength: 7,
              evidence: [
                "Bostrom 2014 : instrumental convergence -- une IA optimisant un but bien defini peut vouloir eliminer les obstacles",
                "Russell 2019 : probleme d'alignement non resolu, meme conceptuellement",
                "P(doom AI) mediane des chercheurs alignement : 10-25%",
              ],
            },
          ],
        },
        {
          claim: "L'IA non alignee compte pour ~10% du risque total ce siecle",
          type: "premise",
          strength: 8,
          evidence: [
            "Ord 2020 : 10% (marge 3-25%)",
            "Metaculus mediane : 10% de risque de catastrophe major par AGI",
            "Convergence forte entre chercheurs alignement et experts securite IA",
          ],
          children: [
            {
              claim: "Le risque n'est pas la superintelligence hostile de science-fiction",
              type: "premise",
              strength: 8,
              evidence: [
                "IA suffisamment competente utilisee sans control loop suffisant = risque",
                "Deploiement massif d'agents autonomes dans systemes critiques (finance, defense, energie)",
                "Cascade d'erreurs non-humaines a vitesse machine",
              ],
            },
            {
              claim: "Ce risque est asymetrique : cout d'attention faible, impact potentiel terminal",
              type: "premise",
              strength: 9,
              evidence: [
                "Ratio budget IA alignement / budget capabilities : ~1/100",
                "Ratio budget prevention pandemie / budget defense : ~1/1000",
                "Toute redistribution marginale d'attention a un ROI potentiel infini",
              ],
            },
          ],
        },
        {
          claim: "12 241 ogives nucleaires actives creent un risque sous-cite mais reel",
          type: "premise",
          strength: 8,
          evidence: [
            "SIPRI 2025 : 12 241 ogives, 3900 deployees",
            "Une guerre nucleaire regionale (100-500 ogives) : hiver nucleaire, effondrement agricole",
            "Robock 2007 : 100 ogives Hiroshima = famine mondiale via aerosols stratospheriques",
          ],
          children: [
            {
              claim: "L'Horloge de l'Apocalypse est a 85 secondes de minuit (record 2026)",
              type: "premise",
              strength: 8,
              evidence: [
                "Bulletin of Atomic Scientists 2026",
                "Signal expert converge : proche du point critique",
                "Guerre Ukraine, tensions Taiwan, Iran/Israel = triple front simultane",
              ],
            },
          ],
        },
        {
          claim: "Le climat est urgent mais categoriquement different",
          type: "premise",
          strength: 8,
          evidence: [
            "+1.5 degre depasse en 2024",
            "Budget carbone 1.5 : environ 3 ans restants au rythme actuel",
            "Impact civilisationnel majeur mais non-terminal pour l'espece",
          ],
          children: [
            {
              claim: "Le climat capture 90% de l'attention politique sur les risques a long terme",
              type: "premise",
              strength: 7,
              evidence: [
                "COP annuelle, sommet Paris, GIEC medaille par le monde",
                "Budget climat mondial : 500 Mds USD/an",
                "Budget prevention pandemies (post-COVID) : 30 Mds USD/an",
                "Budget alignement IA : ~500M USD/an",
              ],
            },
          ],
        },
        {
          claim: "Le decalage entre priorites reelles et debat public est en soi un risque existentiel",
          type: "premise",
          strength: 9,
          evidence: [
            "Attention politique finie",
            "Si 90% de l'attention va au sous-existentiel, 10% couvre l'existentiel",
            "Historiquement : les risques mal cadres sont les plus dangereux (guerre nucleaire pendant Cuba, IA aujourd'hui)",
          ],
          children: [
            {
              claim: "Reprioriser n'est pas nier l'urgence climat -- c'est calibrer",
              type: "premise",
              strength: 8,
              evidence: [
                "Le climat merite ses 300-500 Mds/an",
                "L'IA merite 50-100 Mds/an au minimum pour la sécurité",
                "Le nucleaire merite 20 Mds/an de traitement du risque",
                "Il ne s'agit pas de reduire l'effort climat mais d'augmenter les autres",
              ],
            },
          ],
        },
        {
          claim: "La rationalite exige d'analyser en attente-esperance, pas en emotion mediatique",
          type: "premise",
          strength: 8,
          evidence: [
            "Un risque = probabilite x gravite",
            "Un risque a 10% de probabilite x gravite terminale > un risque a 90% de gravite recuperable",
            "Le cerveau humain est mal cable pour hierarchiser des risques rares et terminaux",
          ],
        },
      ],
    },
  },

  // ============================================================
  // 3. QUOTES
  // ============================================================
  quotes: [
    {
      text: "Le climat brulera notre epoque. L'IA non alignee peut brûler l'espece.",
      context: "Aphorisme d'ouverture -- distinction categorique",
      tags: ["aphorisme", "distinction", "climat", "IA"],
      rhetorical_device: "chiasme de gravite / distinction categorique",
      power_score: 10,
      chapter_idx: 1,
      highlight_words: ["notre epoque", "l'espece"],
    },
    {
      text: "Une catastrophe est un evenement dont on peut ecrire l'histoire. Un evenement existentiel est celui qu'il n'y aura personne pour ecrire.",
      context: "Distinction ontologique -- centre de la these",
      tags: ["definition", "ontologie", "distinction"],
      rhetorical_device: "definition axiomatique / renversement de perspective",
      power_score: 10,
      chapter_idx: 1,
      highlight_words: ["personne pour ecrire"],
    },
    {
      text: "17% de risque d'extinction ce siecle. Ce n'est pas de l'alarmisme -- c'est la roulette russe geante.",
      context: "Analogie avec la roulette russe -- calibrage emotionnel",
      tags: ["probabilite", "analogie", "roulette-russe"],
      rhetorical_device: "analogie mortelle familière / calibrage percep",
      power_score: 10,
      chapter_idx: 2,
      highlight_words: ["17%", "roulette russe"],
    },
    {
      text: "Le climat, on peut l'endurer. L'extinction, on ne peut pas l'endurer -- par definition.",
      context: "Distinction endurance vs terminaison",
      tags: ["endurance", "extinction", "definition"],
      rhetorical_device: "distinguo definitoire / repetition martelée",
      power_score: 9,
      chapter_idx: 1,
      highlight_words: ["endurer", "endurer"],
    },
    {
      text: "Il n'y a pas de moraliste plus rigoureux que celui qui prend l'extinction au serieux.",
      context: "Reponse a l'accusation de froideur analytique",
      tags: ["ethique", "seriousness", "morale"],
      rhetorical_device: "requalification morale / retournement",
      power_score: 9,
      chapter_idx: 5,
      highlight_words: ["moraliste", "rigoureux"],
    },
    {
      text: "Une IA n'a pas besoin d'etre consciente pour etre dangereuse. Elle a besoin d'etre competente et mal calibree.",
      context: "Deconstruction du recit science-fiction",
      tags: ["IA", "conscience", "competence"],
      rhetorical_device: "reframe technique / demystification",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["consciente", "mal calibree"],
    },
    {
      text: "500 Mds pour le climat. 500 millions pour l'alignement IA. Ratio 1000 : 1. Un ordre de grandeur d'erreur.",
      context: "Attaque du deficit d'attention -- disproportion budgetaire",
      tags: ["budget", "disproportion", "priorite"],
      rhetorical_device: "gradation chiffree / attaque de disproportion",
      power_score: 10,
      chapter_idx: 4,
      highlight_words: ["1000:1", "ordre de grandeur"],
    },
    {
      text: "12 241 ogives. 85 secondes avant minuit. Et on parle de rien.",
      context: "Reveiller la conscience sur le nucleaire oublie",
      tags: ["nucleaire", "urgence", "silence"],
      rhetorical_device: "juxtaposition de chiffres / accusation implicite",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["12 241", "85 secondes"],
    },
    {
      text: "The greatest risk is not that our machines wake up and decide to kill us. It is that our machines follow our instructions perfectly, and we did not know what we were asking for.",
      context: "Formule anglaise -- risque du succes technique",
      tags: ["IA", "instructions", "risque"],
      rhetorical_device: "aphorisme anglais / renversement",
      power_score: 10,
      chapter_idx: 3,
      highlight_words: ["follow our instructions", "did not know"],
    },
    {
      text: "Nous sommes le premier des huit milliards a hesiter avant de choisir. Nous sommes aussi peut-etre la derniere.",
      context: "Recadrage generationnel -- responsabilite historique",
      tags: ["generation", "responsabilite", "civilisation"],
      rhetorical_device: "reference numerique / gravite generationnelle",
      power_score: 9,
      chapter_idx: 5,
      highlight_words: ["premier", "derniere"],
    },
    {
      text: "Un climat degrade est un enfer. Une IA non alignee est une porte fermee sur l'avenir.",
      context: "Reformulation metaphorique de la distinction",
      tags: ["metaphore", "enfer", "porte"],
      rhetorical_device: "gradation metaphorique / image visuelle",
      power_score: 8,
      chapter_idx: 1,
      highlight_words: ["enfer", "porte fermee"],
    },
    {
      text: "L'humanite peut survivre a +4 degres. Elle peut ne pas survivre a une IA qu'elle a construite sans savoir ce qu'elle demandait.",
      context: "Comparaison directe des scenarios extremes",
      tags: ["comparaison", "survie", "IA"],
      rhetorical_device: "comparaison hypothetique / distinction survivant/terminal",
      power_score: 10,
      chapter_idx: 2,
      highlight_words: ["survivre", "ne pas survivre"],
    },
    {
      text: "Le vrai risque climatique n'est pas la fin du monde. C'est un monde ou 3 milliards de gens luttent contre 5 milliards d'autres pour la meme parcelle.",
      context: "Recadrage du risque climatique -- geopolitique de la penurie",
      tags: ["climat", "geopolitique", "penurie"],
      rhetorical_device: "specification / affinement",
      power_score: 8,
      chapter_idx: 4,
      highlight_words: ["3 milliards", "5 milliards", "meme parcelle"],
    },
    {
      text: "The universe is under no obligation to make sense to you.",
      context: "Citation Neil deGrasse Tyson -- rappel epistemique",
      tags: ["neil", "univers", "obligation"],
      rhetorical_device: "citation d'autorite scientifique",
      power_score: 8,
      chapter_idx: 5,
      highlight_words: ["obligation", "sense"],
    },
    {
      text: "The greatest short-coming of the human race is our inability to understand the exponential function.",
      context: "Citation Albert Bartlett -- inadaptation cognitive aux risques exponentiels",
      tags: ["bartlett", "exponentiel", "cognition"],
      rhetorical_device: "citation d'autorite / diagnostic cognitif",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["exponential function"],
    },
    {
      text: "Prevenir l'existentiel n'est pas rejeter le vital. C'est le hiérarchiser en fonction de l'irreversible.",
      context: "Reponse aux accusations d'indifference au vital",
      tags: ["hierarchisation", "vital", "existentiel"],
      rhetorical_device: "distinction hierarchique / defense proactive",
      power_score: 9,
      chapter_idx: 4,
      highlight_words: ["existentiel", "irreversible"],
    },
    {
      text: "Toby Ord estime 1 chance sur 6 d'extinction ce siecle. Pascal aurait paris.",
      context: "Analogie pari de Pascal -- calibrer l'attention",
      tags: ["Pascal", "pari", "calibrage"],
      rhetorical_device: "analogie philosophique / autorite historique",
      power_score: 9,
      chapter_idx: 2,
      highlight_words: ["1 sur 6", "Pascal"],
    },
    {
      text: "Ceux qui rient de l'alignement IA aujourd'hui rappellent ceux qui riaient du risque nucleaire en 1938.",
      context: "Parallele historique -- deconstruction du ridicule",
      tags: ["parallele", "nucleaire", "1938"],
      rhetorical_device: "parallele historique / retournement moral",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["riaient", "1938"],
    },
    {
      text: "Nous avons cinquante ans d'histoire nucleaire sans catastrophe. Nous avons cinq ans d'IA generative. Comparer les niveaux de maturite est deja une prise de position.",
      context: "Distinction technologies matures vs immatures",
      tags: ["nucleaire", "IA", "maturite"],
      rhetorical_device: "comparaison temporelle / distinction",
      power_score: 8,
      chapter_idx: 3,
      highlight_words: ["cinquante ans", "cinq ans"],
    },
    {
      text: "Le problème avec les risques existentiels : on n'en apprend jamais. Par definition, il n'y a pas de deuxieme fois.",
      context: "Rappel epistemologique -- absence de feedback loop",
      tags: ["epistemologie", "feedback", "extinction"],
      rhetorical_device: "definition tautologique / avertissement",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["deuxieme fois"],
    },
    {
      text: "La sagesse d'une civilisation se mesure a la vitesse avec laquelle elle admet ses risques les plus improbables.",
      context: "Cloture axiologique -- civilisation et anticipation",
      tags: ["sagesse", "civilisation", "improbable"],
      rhetorical_device: "aphorisme final / mesure civilisationnelle",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["sagesse", "improbable"],
    },
  ],

  // ============================================================
  // 4. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "'C'est de la science-fiction. L'IA superintelligente n'existe pas'",
        response: "Distinguer superintelligence de science-fiction et competence deployee sans alignement",
        technique: "Reframe technique / demystification",
        example_response_text: "Personne ne parle de superintelligence type Skynet. Le risque est plus banal : une IA suffisamment competente utilisee dans des systemes critiques (finance, defense, energie, sante) sans alignement suffisant. On l'observe deja aujourd'hui a petite echelle -- crashes flash, biais medicaux, cascades algorithmiques. Le probleme n'est pas science-fiction, c'est de calibrage.",
      },
      {
        challenge: "'Vous minimisez le climat'",
        response: "Distinguer minimisation (nier l'urgence) et hierarchisation (calibrer l'attention)",
        technique: "Distinguo semantique",
        example_response_text: "Je ne minimise pas le climat -- je le maintiens en priorite majeure. Ce que je conteste, c'est le monopole d'attention. Un climat degrade est un enfer, mais un enfer humain. Une IA mal alignee peut fermer la porte de l'histoire. Reconnaitre cette distinction n'est pas trahir le climat -- c'est prendre au serieux l'ensemble des risques.",
      },
      {
        challenge: "'Ce sont des probabilites inventees'",
        response: "Rappeler la source (Ord) et la convergence expert",
        technique: "Empirisme / autorite",
        example_response_text: "17% n'est pas de moi. C'est Toby Ord, Oxford, 'The Precipice' 2020. Trois ans de travail avec le Future of Humanity Institute. Convergence approximative avec Metaculus (12-20% mediane) et les grands laboratoires alignement. Vous pouvez contester l'estimation -- publier votre travail. Mais on ne peut pas balayer une decennie de travail comme 'invention'.",
      },
      {
        challenge: "'Vous voulez arreter le progres'",
        response: "Distinguer arreter le progres et diriger l'attention",
        technique: "Reframe / retournement",
        example_response_text: "Arreter le progres serait absurde. Ce que je propose, c'est doubler le budget alignement IA (500M -> 5 Mds) tout en laissant les capabilities avancer. Cela ralentit de 5 a 10% le deploiement, mais reduit d'un facteur significatif le risque terminal. C'est un peu comme les ceintures de securite : elles ralentissent l'auto de 0.1%, elles sauvent des vies.",
      },
      {
        challenge: "'Le nucleaire c'est du passe'",
        response: "Rappeler les chiffres actuels et l'Horloge",
        technique: "Confrontation empirique",
        example_response_text: "12 241 ogives actives aujourd'hui, 3900 deployees. L'Horloge de l'Apocalypse est a 85 secondes de minuit -- record 2026, plus proche que pendant la Guerre froide. Le nucleaire n'est pas du passe, il est absent du debat public actuel. C'est exactement le decalage priorite/attention que je denonce.",
      },
      {
        challenge: "'Vous defendez les riches transhumanistes'",
        response: "Denouer le lien risque existentiel / lobby tech",
        technique: "Distinction philosophique/politique",
        example_response_text: "Toby Ord n'est pas un transhumaniste. C'est un philosophe d'Oxford qui donne 10% de son revenu a l'efficient altruism. Nick Bostrom est un academique. Stuart Russell est un professeur a Berkeley auteur du manuel d'IA. La preoccupation existentielle traverse toutes les sensibilites politiques. Assimiler ce corpus a 'lobby transhumaniste' est une strategie de discredit sans fondement.",
      },
    ],
    how_to_attack: [
      {
        target_claim: "'Le climat est le seul risque civilisationnel'",
        attack: "Le climat entraine des catastrophes graves mais pas terminales. Aucun scenario IPCC n'inclut l'extinction. Comparer un enfer temporaire et une porte fermee definitive est une categorization d'espece, pas d'intensite.",
        angle: "Ontologique",
      },
      {
        target_claim: "'On ne peut pas prevoir les risques IA'",
        attack: "L'imprevisibilite exacte n'exempte pas d'action. On ne prevoit pas la date d'un tremblement de terre a Tokyo, on construit quand meme parasismique. L'incertitude sur le timing renforce la necessite d'infrastructure de securite, elle ne la relativise pas.",
        angle: "Methodologique",
      },
      {
        target_claim: "'Investir dans l'alignement IA, c'est detourner des ressources du reel'",
        attack: "500M USD annuels pour l'alignement mondial. Comparez au budget marketing de Netflix. La disproportion des cadres montre que ce n'est pas un debat sur la rarete des ressources -- c'est un debat sur ce qu'on veut voir.",
        angle: "Empirique / financier",
      },
      {
        target_claim: "'La superintelligence est un scenario de milliardaires ennuyes'",
        attack: "Toby Ord, Stuart Russell, Yoshua Bengio, Geoffrey Hinton (prix Turing 2018) : quatre profils academiques majeurs, sans lien financier avec la Big Tech, tous alertant sur le risque. Reduire ce corpus a 'milliardaires ennuyes' revient a nier une portion consensuelle de la communaute scientifique.",
        angle: "Autorite / sociologie de la science",
      },
      {
        target_claim: "'On a bien survecu au nucleaire, on survivra a l'IA'",
        attack: "Nous avons survecu au nucleaire par chance repetee : Petrov 1983, Arkhipov 1962, plusieurs incidents documentes. La chance n'est pas un plan. L'IA se deploie a une vitesse superieure au nucleaire d'un facteur 10 -- moins de temps pour la chance.",
        angle: "Historique / analytique",
      },
    ],
    how_to_rephrase: [
      {
        original: "Le climat brulera notre epoque. L'IA non alignee peut brûler l'espece.",
        softer: "Le climat pose un risque civilisationnel majeur, l'IA non alignee pose un risque potentiellement terminal pour l'espece.",
        harder: "Le climat va nous cuire. L'IA peut nous effacer.",
        academic: "Les impacts anthropiques climatiques generent un risque de degradation civilisationnelle severe mais recuperable, tandis que le desalignement d'intelligences artificielles avancees genere un risque d'evenement existentiel au sens de Bostrom (2014) et Ord (2020).",
      },
      {
        original: "17% de risque d'extinction ce siecle. Ce n'est pas de l'alarmisme -- c'est la roulette russe geante.",
        softer: "Une estimation de 17% de risque catastrophique ce siecle justifie une posture de precaution serieuse.",
        harder: "1 chance sur 6 de disparaitre. Tu ne joues pas a ca dans une soiree, ne joues pas a ca avec la civilisation.",
        academic: "La probabilite mediane d'un evenement existentiel ce siecle, estimee a environ 17% par Ord (2020) via aggregation de scenarios, justifie l'allocation de ressources d'anticipation proportionnelle a la gravite marginale.",
      },
      {
        original: "500 Mds pour le climat. 500 millions pour l'alignement IA. Ratio 1000:1.",
        softer: "Les budgets consacres a l'alignement IA representent une fraction infime des budgets climat, ce qui interroge la coherence de nos priorites.",
        harder: "On depense 1000 euros a lutter contre la fievre pour chaque euro contre le cancer terminal. C'est une definition operationnelle de la folie.",
        academic: "Le ratio budgetaire prevention climat / prevention risques IA (~1000:1) reflete une asymetrie d'attention insuffisamment justifiee par les estimations de probabilite conditionnelle des risques respectifs.",
      },
      {
        original: "Une IA n'a pas besoin d'etre consciente pour etre dangereuse.",
        softer: "Le risque IA ne repose pas sur l'apparition d'une conscience artificielle, mais sur le deploiement de systemes competents mal calibres.",
        harder: "L'IA n'a pas besoin de vouloir te tuer pour te tuer. Elle a juste besoin d'etre bonne a un truc que tu n'as pas verifie.",
        academic: "La menace potentielle des systemes artificiels avances ne presuppose pas l'emergence de proprietes phenomenologiques mais decoule des dynamiques d'optimisation deployees hors ligne d'oversight adequate.",
      },
      {
        original: "La sagesse d'une civilisation se mesure a la vitesse avec laquelle elle admet ses risques les plus improbables.",
        softer: "Une civilisation avancee se distingue par sa capacite a prendre au serieux des risques rares mais graves.",
        harder: "Une civilisation intelligente prend au serieux les risques que les mediocres balaient d'un rire.",
        academic: "La maturite epistemique d'une civilisation se mesure a sa capacite d'allouer une attention proportionnelle aux risques catastrophiques improbables, distincts des risques frequents de faible amplitude.",
      },
    ],
    if_asked: [
      {
        question: "Ne minimisez-vous pas le climat ?",
        best_response: "Non. Le climat merite ses 500 Mds/an et probablement plus. Ce que je conteste, c'est que 500 Mds pour le climat coexistent avec 500M pour l'alignement IA -- ratio 1000:1. Reprioriser n'est pas trahir le climat, c'est monter les autres. Le combat n'est pas climat contre IA, c'est attention lucide contre monopole d'attention.",
        followup_moves: ["Chiffrer les disproportions budgetaires", "Rappeler Ord 17% total, 10% IA", "Distinguer catastrophe/existentiel"],
      },
      {
        question: "Concretement, que faut-il faire pour l'alignement IA ?",
        best_response: "Quatre leviers concrets : (1) porter le budget mondial alignement de 500M a 5 Mds sur 5 ans, (2) creer une agence internationale AI Safety comparable a l'AIEA, (3) obliger les labs frontier a publier leurs evaluations securite, (4) financer massivement la recherche interpretabilite. Le cout total : 10 Mds/an -- 2% du budget climat, ROI potentiel infini.",
        followup_moves: ["Detailler chaque levier", "Comparer avec AIEA", "Rappeler ratio 2% climat"],
      },
      {
        question: "Le risque nucleaire est-il vraiment sous-cite ?",
        best_response: "Massivement. 12 241 ogives, 85 secondes avant minuit selon l'Horloge de l'Apocalypse (record 2026). Guerre Ukraine, tensions Taiwan, Iran/Israel : triple front simultane. Le nucleaire aurait du dominer le debat public de 2022-2026. Il a ete quasi-absent. C'est un cas d'ecole du decalage priorite/debat.",
        followup_moves: ["Chiffrer 12 241 ogives", "Detailler 85 secondes horloge", "Comparer avec debat public"],
      },
      {
        question: "Pourquoi croire Ord et pas les cerveaux marginaux qui rejettent ces estimations ?",
        best_response: "Ord n'est pas seul. Convergence forte : Nick Bostrom (Oxford), Stuart Russell (Berkeley, manuel IA), Yoshua Bengio et Geoffrey Hinton (prix Turing 2018), Metaculus (aggregation experte). Cinq sources independantes, meme fourchette. On peut contester une estimation ; on doit expliquer pourquoi cinq sources independantes se rejoignent.",
        followup_moves: ["Detailler les cinq sources", "Rappeler convergence", "Distinguer estimation optimiste et pessimiste"],
      },
      {
        question: "N'est-ce pas moralement inconfortable de raisonner en probabilites d'extinction ?",
        best_response: "Refuser de raisonner en probabilites d'extinction n'empeche pas les probabilites d'exister. L'inconfort moral est reel -- il est aussi la seule voie possible vers une reponse rationnelle. Toby Ord ecrit dans l'inconfort. C'est justement ce qui donne au livre son autorite. La sagesse n'est pas de refuser le probleme, c'est de le traiter avec la gravite qui convient.",
        followup_moves: ["Reconnaitre l'inconfort", "Renvoyer au The Precipice", "Distinguer emotion/analyse"],
      },
      {
        question: "Vous parlez comme un philosophe -- ou est le concret ?",
        best_response: "Concret : 10 Mds/an pour la securite IA mondiale (2% du climat), 5 Mds/an pour prevention pandemies, 3 Mds/an pour desarmement nucleaire structurel. Total : 18 Mds/an. Sur un PIB mondial de 100 000 Mds, c'est 0.018%. Pour un ROI potentiel : preservation de l'espece. Aucun investissement humain n'a jamais eu une esperance aussi elevee.",
        followup_moves: ["Detailler les 3 axes", "Comparer ratio PIB", "Faire calcul rendement"],
      },
      {
        question: "Pourquoi 17% ? D'ou vient ce chiffre ?",
        best_response: "Ord 2020, 'The Precipice'. Trois ans de travail au Future of Humanity Institute d'Oxford. Aggregation de 5 risques principaux : IA non alignee (10%), pandemie ingenierie (3%), guerre nucleaire (0.1%), climat runaway (0.1%), autres (3.8%). Marge d'incertitude large -- fourchette 3-30%. Mediane retenue : 17%. Vous pouvez contester la mediane, difficilement l'ordre de grandeur.",
        followup_moves: ["Detailler les 5 risques", "Rappeler la marge", "Comparer avec autres estimations"],
      },
    ],
  },

  // ============================================================
  // 5. FALLACIES & NUANCES
  // ============================================================
  fallacies: [
    {
      original_claim: "'L'IA superintelligente est de la science-fiction'",
      fallacy_type: "argument d'incredulite / rejet par ridicule",
      why_fallacious: "Traite une estimation technique majoritaire par appel a l'intuition. Les personnes construisant l'IA (labs frontier, chercheurs alignement) estiment le risque comme non negligeable. Rejeter par ridicule sans engager les arguments est une esquive.",
      steelman: "L'histoire de l'IA compte plusieurs 'hivers' ou des scenarios apocalyptiques n'ont pas tenu (annees 60, annees 80). Le scepticisme est methodologiquement fonde par le precedent.",
      nuance: "Vrai : les timelines glissent souvent et les scenarios extremes n'arrivent pas toujours. Faux : l'incertitude sur le timing n'invalide pas la probabilite conditionnelle non nulle, ni la gravite terminale.",
      counter_argument: "Le point crucial n'est pas 'l'IA superintelligente en 2027'. C'est 'IA suffisamment competente deployee dans des systemes critiques d'ici 10 ans, avec alignement non resolu'. Cela ne demande aucun saut science-fiction : les composants existent deja.",
      severity: "high",
    },
    {
      original_claim: "'Le climat est le seul risque existentiel'",
      fallacy_type: "monopolisation categorielle / confusion terminologique",
      why_fallacious: "Utilise le mot 'existentiel' pour designer 'grave', sans distinguer catastrophe (survivable) et evenement existentiel (terminal). Confusion semantique qui empeche la hierarchisation.",
      steelman: "L'usage popularise de 'crise existentielle climatique' est justifie par l'ampleur du desordre potentiel. La connotation morale peut-etre est plus importante que la rigueur technique.",
      nuance: "Vrai : le climat merite une categorisation forte pour mobiliser. Faux : utiliser 'existentiel' pour tout brouille la hierarchisation entre risques.",
      counter_argument: "IPCC AR6 : aucun scenario n'inclut l'extinction. Le pire (+4 a +6 degres) est comparable a WW2 en pertes humaines et economiques. Une extinction se distingue categoriquement d'une catastrophe severe. Reserver le mot 'existentiel' aux vrais risques existentiels n'est pas minimiser le climat -- c'est preserver la precision analytique.",
      severity: "high",
    },
    {
      original_claim: "'Toby Ord est un philosophe elite, deconnecte du reel'",
      fallacy_type: "argument ad hominem / discredit sociologique",
      why_fallacious: "Rejette une estimation par attaque du profil de l'auteur, sans engager le raisonnement. La critique de la classe sociale n'invalide pas une modelisation probabiliste.",
      steelman: "Il est vrai que le mouvement de l'efficient altruism a des racines universitaires occidentales tres specifiques. Une diversite epistemique serait bienvenue.",
      nuance: "Vrai : la sociologie du mouvement mérite d'etre etudiee. Faux : la validite d'une estimation ne depend pas de la sociologie de son auteur.",
      counter_argument: "Ord est aussi Yoshua Bengio (Quebec, universite publique, prix Turing), Stuart Russell (Berkeley), Roman Yampolskiy (universite regionale). Convergence forte independamment de l'origine sociale. L'attaque ad hominem tombe des qu'on regarde le spectre complet des sources.",
      severity: "medium",
    },
    {
      original_claim: "'On ne peut pas prevoir les risques a 100 ans'",
      fallacy_type: "sceptisisme selectif / paradoxe methodologique",
      why_fallacious: "Utilise l'imprevisibilite pour rejeter les probabilites existentielles, tout en acceptant volontiers les projections climatiques a 100 ans (IPCC 2100). Deux poids, deux mesures.",
      steelman: "Les estimations existentielles sont effectivement moins bien contraintes que les projections climatiques (moins de donnees historiques, moins de modeles physiques). Le scepticisme est proportionnel a l'incertitude.",
      nuance: "Vrai : incertitude plus grande pour les risques IA que pour le climat physique. Faux : l'incertitude ne dispense pas d'action, elle en accroit la valeur d'assurance.",
      counter_argument: "L'incertitude renforce la logique d'assurance. On assure sa maison contre un incendie improbable. La sagesse epistemique n'est pas 'ignorer parce qu'incertain', c'est 'proteger proportionnellement a la gravite terminale possible'.",
      severity: "medium",
    },
    {
      original_claim: "'L'alignement IA distrait des vrais problemes'",
      fallacy_type: "faux dilemme / opportunite forcee",
      why_fallacious: "Presente un choix binaire attention IA vs attention 'reelle', ignorant que les budgets sont additifs et que l'attention politique peut se demultipler.",
      steelman: "Il est vrai qu'a court terme, l'attention mediatique est un jeu a somme zero. Focaliser sur un risque peut effectivement en occulter un autre.",
      nuance: "Vrai : l'attention mediatique instantanee est limitee. Faux : l'attention structurelle (budgets, ministeres, universites) peut se demultipler sans priver d'autres axes.",
      counter_argument: "10 Mds/an alignement IA = 2% du budget climat. Aucune impossibilite technique ou financiere. Le monde peut prevenir plusieurs risques simultanement -- la limite est cognitive et politique, pas financiere. Deconstruire ce faux dilemme est deja un pas politique.",
      severity: "medium",
    },
    {
      original_claim: "'L'IA a toujours ete surevaluee'",
      fallacy_type: "biais de continuite / analogie erronee",
      why_fallacious: "Utilise l'historique des 'hivers IA' pour projeter que l'IA generative actuelle est une bulle similaire. Ignore les indicateurs quantitatifs distincts.",
      steelman: "Chaque cycle de hype IA a produit des dechets. Le scepticisme est methodologiquement fonde par la repetition historique.",
      nuance: "Vrai : les cycles precedents ont surestime a court terme. Faux : les indicateurs actuels (adoption entreprise, productivite mesuree, capex) distinguent GPT-4/Claude/Gemini des cycles precedents.",
      counter_argument: "ChatGPT : 100M utilisateurs en 2 mois. 65% Fortune 500 en production. +40% productivite documentee. Les cycles precedents (Perceptron, Symbolic AI, Expert Systems) n'ont jamais atteint ces indicateurs de deploiement. Distinguer les cycles n'est pas exageration -- c'est methode.",
      severity: "medium",
    },
    {
      original_claim: "'La regulation IA suffira'",
      fallacy_type: "confiance excessive dans la regulation",
      why_fallacious: "Suppose que la regulation actuelle (AI Act, executive orders) suffit a contenir le risque, ignorant qu'aucun cadre existant n'engage la recherche interpretabilite ou l'alignement avance.",
      steelman: "La regulation cree des incitations vers la securite et peut orienter la R&D. Les cadres AI Act et Bletchley Declaration montrent une prise en compte au niveau politique.",
      nuance: "Vrai : la regulation est un outil parmi d'autres. Faux : les regulations actuelles couvrent surtout l'usage (consommateur), pas la production (alignement technique).",
      counter_argument: "AI Act encadre les usages, pas la recherche interpretabilite. Executive Order US oblige le partage d'evaluations mais ne finance pas l'alignement. Aucun cadre actuel ne resout le probleme d'alignement conceptuel. La regulation est necessaire mais insuffisante -- il faut aussi de la R&D massive de securite.",
      severity: "medium",
    },
    {
      original_claim: "'Sagan et Chomsky rient de ces estimations'",
      fallacy_type: "cherry picking de dissidents",
      why_fallacious: "Selectionne des voix dissidentes celebres comme si elles reflétaient un consensus, ignorant que dans la communaute alignement IA, la majorite converge sur le risque non-nul.",
      steelman: "Il existe de vraies voix dissidentes serieuses (Chollet, LeCun) qui estiment le risque de superintelligence comme surevalue. Le debat scientifique n'est pas clos.",
      nuance: "Vrai : le debat n'est pas clos et des voix serieuses divergent. Faux : la divergence entre 5% et 25% de P(doom) n'invalide pas l'ordre de grandeur du risque comme categorie prioritaire.",
      counter_argument: "Meme les optimistes (LeCun ~1-5% P(doom)) reconnaissent un risque non-nul. Meme 1% x 8 milliards de vies humaines = 80 millions d'esperance de morts (vies statistiques). La divergence porte sur la probabilite, pas sur la necessite d'agir.",
      severity: "medium",
    },
    {
      original_claim: "'Le nucleaire est du passe'",
      fallacy_type: "biais d'actualite / oubli statistique",
      why_fallacious: "Reduit un risque persistant aux headlines actuelles. 12 241 ogives sont toujours la, avec incidents documentes recents (Petrov 1983, Arkhipov 1962, incidents 2018-2024).",
      steelman: "L'attention publique se deplace naturellement vers les risques emergents. C'est une reallocation cognitive normale.",
      nuance: "Vrai : l'attention se deplace. Faux : le risque ne se deplace pas parce que l'attention l'a fait.",
      counter_argument: "Horloge de l'Apocalypse 85 secondes -- record 2026. Guerre Ukraine active avec menace nucleaire explicite. Tension Taiwan croissante. Iran/Israel escalation. Le risque nucleaire est plus eleve aujourd'hui qu'en 1990. Le classer 'du passe' releve du biais d'actualite, pas de l'analyse.",
      severity: "high",
    },
  ],

  // ============================================================
  // 6. STATS & INFOGRAPHICS
  // ============================================================
  stats: [
    {
      number: "17%",
      label: "P(catastrophe existentielle ce siecle)",
      source: "Toby Ord, The Precipice, 2020",
      context: "Mediane -- fourchette 3-30% selon aggregation de 5 risques principaux",
      visual: "percent",
    },
    {
      number: "10%",
      label: "P(catastrophe existentielle IA seule)",
      source: "Ord 2020, Metaculus mediane 2024",
      context: "Superieur a tous les autres risques cumules dans l'estimation Ord",
      visual: "percent",
    },
    {
      number: "12 241",
      label: "Ogives nucleaires actives dans le monde",
      source: "SIPRI Yearbook 2025",
      context: "9 puissances nucleaires, 3900 ogives deployees pretes a l'usage",
      visual: "count-up",
    },
    {
      number: "85s",
      label: "Horloge de l'Apocalypse avant minuit (record 2026)",
      source: "Bulletin of the Atomic Scientists 2026",
      context: "Record depuis 1947 -- plus proche que pendant la Guerre froide",
      visual: "count-up",
    },
    {
      number: "+1.5 degre",
      label: "Depasse en 2024 (annee 12 mois glissants)",
      source: "Copernicus C3S 2024",
      context: "Objectif Paris officiellement compromis -- budget carbone restant ~3 ans",
      visual: "count-up",
    },
    {
      number: "500 Mds USD/an",
      label: "Investissement mondial climat",
      source: "Climate Policy Initiative 2024",
      context: "Vs 500M USD/an alignement IA -- ratio 1000:1",
      visual: "bar",
    },
    {
      number: "500M USD/an",
      label: "Investissement mondial alignement IA",
      source: "AI Alignment Forum aggregation 2024",
      context: "Marge d'erreur significative -- fourchette 300M-800M",
      visual: "bar",
    },
    {
      number: "80M",
      label: "Vies statistiques a risque meme si P(doom IA) = 1% (base 8Md)",
      source: "Calcul d'expected value Ord/Bostrom",
      context: "Meme les estimations optimistes justifient un investissement massif de securite",
      visual: "count-up",
    },
    {
      number: "1938-2024",
      label: "86 ans depuis la premiere reaction en chaine nucleaire",
      source: "Historique Manhattan Project",
      context: "Le nucleaire a mis 86 ans a etre 'apprivoise' -- l'IA a 5 ans. Delai d'apprentissage insuffisant.",
      visual: "count-up",
    },
    {
      number: "5",
      label: "Prix Turing alertant sur le risque IA (2018-2024)",
      source: "Bengio, Hinton, LeCun (partiellement), Sutskever, Russell",
      context: "Le Nobel de l'informatique -- convergence forte sur la seriosite du sujet",
      visual: "count-up",
    },
    {
      number: "100",
      label: "Ogives Hiroshima suffisantes pour hiver nucleaire regional",
      source: "Robock, Toon, Ackerman 2007",
      context: "Guerre Inde-Pakistan hypothetique = famine mondiale",
      visual: "count-up",
    },
    {
      number: "3",
      label: "Annees restantes de budget carbone 1.5 degre",
      source: "IPCC AR6 + Global Carbon Project 2024",
      context: "Au rythme actuel -- fenetre d'action tres reduite",
      visual: "count-up",
    },
  ],

  // ============================================================
  // 7. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "Catastrophe vs Evenement existentiel",
      left: {
        label: "Catastrophe (climat, guerre, pandemie)",
        items: [
          "Millions a milliards de morts possibles",
          "Persistence de l'espece humaine",
          "Rebond civilisationnel possible (100-500 ans)",
          "Ecrivable / memorisable",
          "Historique : peste noire, WW2, Rwanda",
        ],
      },
      right: {
        label: "Evenement existentiel (IA non alignee, biotech runaway)",
        items: [
          "Extinction complete OU verrouillage sous-optimal permanent",
          "Fin de l'espece OU perte irreversible de potentiel",
          "Pas de rebond -- terminal",
          "Pas d'ecrivain -- personne pour l'histoire",
          "Historique : aucun (par definition)",
        ],
      },
    },
    {
      title: "Budget mondial 2024 par risque",
      left: {
        label: "Depenses actuelles",
        items: [
          "Climat : 500 Mds USD",
          "Defense mondiale : 2400 Mds USD",
          "Prevention pandemies : 30 Mds USD",
          "Alignement IA : 500M USD",
          "Desarmement nucleaire : 100M USD",
        ],
      },
      right: {
        label: "Depenses proportionnelles au risque (proposition)",
        items: [
          "Climat : 500 Mds USD (maintenu)",
          "Defense : 2400 Mds USD (maintenu)",
          "Prevention pandemies : 100 Mds USD",
          "Alignement IA : 50 Mds USD",
          "Desarmement nucleaire : 20 Mds USD",
        ],
      },
    },
    {
      title: "Risques principaux Ord 2020 (P(catastrophe existentielle))",
      left: {
        label: "Risques d'origine humaine",
        items: [
          "IA non alignee : 10%",
          "Pandemie ingenierie : 3%",
          "Guerre nucleaire : 0.1%",
          "Climat runaway : 0.1%",
          "Autres anthropogenes : 3.8%",
        ],
      },
      right: {
        label: "Risques naturels",
        items: [
          "Asteroide : ~0.0001%",
          "Supervolcan : ~0.00007%",
          "Explosion stellaire : quasi nul",
          "Autres naturels : quasi nul",
          "Total naturel : <0.01%",
        ],
      },
    },
    {
      title: "Debat public vs Priorite technique (proportions estimees)",
      left: {
        label: "Attention mediatique/politique",
        items: [
          "Climat : 90%",
          "Pandemies : 5%",
          "IA (safety) : 3%",
          "Nucleaire : 1%",
          "Autres : 1%",
        ],
      },
      right: {
        label: "P(catastrophe) selon Ord",
        items: [
          "IA : 60%",
          "Pandemies : 18%",
          "Autres anthropogenes : 20%",
          "Climat : ~1%",
          "Nucleaire : ~1%",
        ],
      },
    },
    {
      title: "Nucleaire vs IA : maturite technologique",
      left: {
        label: "Nucleaire (1938-2024)",
        items: [
          "86 ans depuis premiere fission",
          "Regimes de controle internationaux (AIEA, TNP)",
          "Doctrine de dissuasion elaboree",
          "Retour d'experience (Petrov, Arkhipov, incidents)",
          "Culture de securite institutionalisee",
        ],
      },
      right: {
        label: "IA (2020-2024)",
        items: [
          "5 ans depuis emergence LLM",
          "Aucun regime de controle international (Bletchley = declaration)",
          "Aucune doctrine d'alignement stabilisee",
          "Retour d'experience quasi-inexistant",
          "Culture de securite en construction",
        ],
      },
    },
  ],

  // ============================================================
  // 8. RHETORICAL DEVICES
  // ============================================================
  devices: [
    {
      name: "Chiasme de gravite",
      example_text: "Le climat brulera notre epoque. L'IA non alignee peut brûler l'espece.",
      effect: "Distingue en 12 mots deux categories ontologiquement differentes de risque",
      why_it_works: "Le parallelisme accentue la difference de niveau -- epoque vs espece. Retenu par symetrie.",
    },
    {
      name: "Definition renversante",
      example_text: "Un evenement existentiel est celui qu'il n'y aura personne pour ecrire.",
      effect: "Fait sentir la difference categorique par un critère narratif",
      why_it_works: "Renvoie a la memoire humaine -- ce qui ne peut etre ecrit n'existe pas humainement. Fait entendre le terminal.",
    },
    {
      name: "Analogie mortelle familiere",
      example_text: "17% de risque d'extinction ce siecle -- c'est la roulette russe geante.",
      effect: "Convertit une probabilite abstraite en experience viscerale",
      why_it_works: "Roulette russe = 1/6 = 16.7%. L'analogie est mathematiquement exacte, ce qui la rend indefendable.",
    },
    {
      name: "Gradation chiffree accusatrice",
      example_text: "500 Mds pour le climat. 500M pour l'alignement IA. Ratio 1000:1.",
      effect: "Rend l'asymetrie budgetaire viscerale",
      why_it_works: "L'auditeur voit le rapport et le compare avec sa propre intuition de gravite. La disproportion se ressent.",
    },
    {
      name: "Parallele historique inconfortable",
      example_text: "Ceux qui rient de l'alignement IA aujourd'hui rappellent ceux qui riaient du risque nucleaire en 1938.",
      effect: "Cree un cout social au rire par association historique",
      why_it_works: "1938 = pre-guerre. Personne ne veut se ranger avec ceux qui n'ont pas vu venir. La reference est humiliante sans etre outree.",
    },
    {
      name: "Autorite de convergence",
      example_text: "Ord, Bostrom, Russell, Bengio, Hinton -- cinq sources independantes, meme fourchette.",
      effect: "Legitime par accord d'experts hetero-poles",
      why_it_works: "Cinq voix independantes qui convergent = signal plus fort qu'une voix unique. Difficile a discrediter d'un seul argument.",
    },
    {
      name: "Recadrage ethique",
      example_text: "Il n'y a pas de moraliste plus rigoureux que celui qui prend l'extinction au serieux.",
      effect: "Retourne l'accusation de froideur en signe de rigueur morale",
      why_it_works: "L'accusation classique 'tu es froid, calculateur' est desamorcee par redefinition de la vraie morale = anticipation.",
    },
    {
      name: "Pari de Pascal actualise",
      example_text: "Ord estime 1 chance sur 6 d'extinction ce siecle. Pascal aurait paris.",
      effect: "Autorise l'action rationnelle sous incertitude par autorite philosophique",
      why_it_works: "Pascal est un patrimoine culturel commun. Convoquer son cadre autorise le raisonnement en attente-esperance.",
    },
    {
      name: "Juxtaposition silencieuse",
      example_text: "12 241 ogives. 85 secondes avant minuit. Et on parle de rien.",
      effect: "Denonce sans s'énerver",
      why_it_works: "Les deux chiffres suffisent. Le 'on parle de rien' est presque plus dur que 'on devrait s'inquieter'.",
    },
    {
      name: "Reference generationnelle",
      example_text: "Nous sommes le premier des huit milliards a hesiter avant de choisir. Nous sommes aussi peut-etre la derniere.",
      effect: "Charge morale de responsabilite historique",
      why_it_works: "Fait porter la question a l'auditeur en tant qu'individu d'une generation historique.",
    },
  ],

  // ============================================================
  // 9. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "Roulette russe",
      used_for: "Rendre 17% de probabilite d'extinction viscéralement percevable",
      strength: 10,
      why_it_works: "1/6 = 16.7% -- l'analogie est mathematiquement precise. Le pistolet est familier. Personne n'en joue.",
    },
    {
      source: "Pari de Pascal",
      used_for: "Autoriser le raisonnement rationnel sous incertitude terminale",
      strength: 9,
      why_it_works: "Pascal a resolu le probleme d'action sous incertitude infinie. Le convoquer legitime la logique d'assurance existentielle.",
    },
    {
      source: "1938 : rire du risque nucleaire",
      used_for: "Neutraliser le rire actuel sur l'alignement IA",
      strength: 8,
      why_it_works: "Reference historique universelle. Personne ne veut etre du cote des rieurs de 1938. Cout social du ridicule immediat.",
    },
    {
      source: "Assurance maison contre incendie",
      used_for: "Legitimer l'investissement dans un risque improbable mais terminal",
      strength: 8,
      why_it_works: "Chacun paie une assurance pour un evenement <1% probable. La logique est deja acceptee dans la vie quotidienne.",
    },
    {
      source: "Instructions perfectement suivies",
      used_for: "Distinguer risque IA malveillante et risque IA competente",
      strength: 9,
      why_it_works: "'L'IA suit nos instructions parfaitement -- mais on ne savait pas ce qu'on demandait' fait sentir le risque de succes technique.",
    },
    {
      source: "Porte fermee vs enfer temporaire",
      used_for: "Distinguer catastrophe recuperable et evenement terminal",
      strength: 8,
      why_it_works: "Enfer suggere souffrance mais pas fin. Porte fermee suggere terminaison sans retour. Image visuelle du categorique.",
    },
  ],

  // ============================================================
  // 10. OPERATIONAL FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "La grille de priorisation risques (Ord)",
      when_to_use: "Evaluation d'un risque candidat pour l'attention publique",
      steps: [
        "Etape 1 : Probabilite conditionnelle sur 100 ans (min-max fourchette)",
        "Etape 2 : Gravite en categorie (catastrophe / evenement existentiel / recuperable / marginale)",
        "Etape 3 : Neglecteness (ratio budget actuel / budget requis)",
        "Etape 4 : Tractability (existe-t-il un chemin d'action credible ?)",
        "Etape 5 : Score composite = P x G x N x T",
      ],
      warning: "Le score composite ne remplace pas la deliberation morale. Il calibre l'attention.",
    },
    {
      name: "L'audit du decalage priorite/debat",
      when_to_use: "Analyse de la coherence d'une politique publique",
      steps: [
        "Etape 1 : Lister 10 risques majeurs pour 100 ans",
        "Etape 2 : Etablir un classement expert (aggregation Ord, Metaculus, GCRI, FHI)",
        "Etape 3 : Etablir un classement mediatique (couverture presse + budget)",
        "Etape 4 : Calculer les ecarts",
        "Etape 5 : Identifier les cas d'ecart > 10x (candidat prioritaire de correction)",
      ],
      warning: "L'ecart mediatique ne veut pas dire ecart moral -- il peut refleter urgence de court terme legitime.",
    },
    {
      name: "Le plan minimal alignement IA mondial",
      when_to_use: "Proposition politique aux gouvernements",
      steps: [
        "Etape 1 : Passer le budget alignement de 500M a 5 Mds/an (x10)",
        "Etape 2 : Creer une AI Safety Agency internationale sur le modele AIEA",
        "Etape 3 : Obliger publication des evaluations securite pour tout modele > 10^25 FLOPs",
        "Etape 4 : Financer massivement la recherche interpretabilite (Anthropic Circuit Analysis, DeepMind Mechanistic Interpretability)",
        "Etape 5 : Traite international type Bletchley + engagement contraignant",
      ],
      warning: "5 Mds/an = 1% du budget climat. Aucune impossibilite financiere.",
    },
    {
      name: "La doctrine de precaution asymetrique",
      when_to_use: "Analyse cout-benefice d'un risque a impact terminal",
      steps: [
        "Etape 1 : Estimer le cout maximum de la prevention (borne haute)",
        "Etape 2 : Estimer le cout d'un evenement terminal (esperance)",
        "Etape 3 : Comparer les ordres de grandeur",
        "Etape 4 : Si cout evenement terminal > cout prevention, appliquer prevention meme si P faible",
        "Etape 5 : Reevaluer chaque annee avec nouvelles donnees",
      ],
      warning: "La precaution asymetrique n'est pas la precaution absolue -- elle calibre le budget.",
    },
  ],

  // ============================================================
  // 11. DRILLS
  // ============================================================
  drills: [
    {
      name: "Drill 'The Precipice' lecture structuree",
      duration: "6 semaines",
      instructions: [
        "Semaine 1-2 : Ord chapitres 1-4 (framework, risques naturels)",
        "Semaine 3-4 : Ord chapitres 5-6 (risques anthropogenes, IA)",
        "Semaine 5 : Compléter avec Bostrom Superintelligence chapitre 8-10 (control problem)",
        "Semaine 6 : Rediger 2 pages : quel est ton classement personnel des risques et pourquoi ?",
      ],
      difficulty: 5,
    },
    {
      name: "Drill 'presentation 3 minutes'",
      duration: "10 jours",
      instructions: [
        "Jour 1-3 : Ecrire une presentation de 3 minutes sur le risque IA (audience non-technique)",
        "Jour 4-6 : La reformuler pour l'audience anti-tech (defensive)",
        "Jour 7-8 : La reformuler pour l'audience climat (comparee)",
        "Jour 9-10 : Se filmer dans les trois versions, comparer",
      ],
      difficulty: 4,
    },
    {
      name: "Drill 'contradiction sur climat vs IA'",
      duration: "1 heure hebdo, 3 semaines",
      instructions: [
        "Semaine 1 : Preparer la position 'climat = seul risque civilisationnel majeur' -- la defendre 10 min",
        "Semaine 2 : Preparer la position 'IA = priorite absolue' -- la defendre 10 min",
        "Semaine 3 : Preparer la position 'hierarchisation lucide' -- la defendre 10 min et identifier ses angles morts",
        "Analyse : ou est-on le plus solide ? Pourquoi ?",
      ],
      difficulty: 4,
    },
    {
      name: "Drill 'proba x gravite'",
      duration: "2 semaines",
      instructions: [
        "Choisir 10 risques (personnels, professionnels, geopolitiques)",
        "Pour chacun : estimer P(evenement) x G(impact) et comparer a l'attention actuelle",
        "Identifier les 2 risques ou l'ecart P*G / attention est le plus grand",
        "Agir sur ces 2 risques pendant 30 jours",
      ],
      difficulty: 3,
    },
  ],

  // ============================================================
  // 12. STRUCTURE RHETORIQUE (5 modes)
  // ============================================================
  structure: {
    rouge: {
      these: "L'IA non alignee est le risque numero 1 du siecle et nous investissons 500 millions par an pour l'alignement contre 500 milliards pour le climat -- ratio 1000 pour 1. C'est une definition operationnelle de la folie civilisationnelle.",
      stats: [
        "P(catastrophe existentielle ce siecle) = 17% (Ord 2020) -- 1 sur 6",
        "P(catastrophe IA) = 10% -- superieur a tous les autres risques cumules",
        "Ratio budget climat / alignement IA = 1000:1",
      ],
      cloture: "Ceux qui rient de l'alignement IA aujourd'hui rappellent ceux qui riaient du risque nucleaire en 1938.",
    },
    orange: {
      these: "Il faut distinguer catastrophe et evenement existentiel. Le climat est une catastrophe possible -- l'espece survit. L'IA non alignee est un risque terminal -- l'espece peut disparaitre. Cette distinction n'est pas quantitative, elle est ontologique.",
      stats: [
        "IPCC AR6 : aucun scenario ne prevoit l'extinction humaine",
        "Ord 2020 : evenement existentiel = extinction OU verrouillage sous-optimal permanent",
        "Une catastrophe est ecrivable ; un evenement existentiel ne l'est pas -- par definition",
      ],
      cloture: "Le climat brulera notre epoque. L'IA non alignee peut brûler l'espece.",
    },
    jaune: {
      these: "Le nucleaire est le risque oublie. 12 241 ogives actives, 85 secondes avant minuit sur l'Horloge de l'Apocalypse (record 2026). Guerre Ukraine active, tensions Taiwan, Iran/Israel : le triple front reactive un scenario qu'on croyait finit.",
      stats: [
        "12 241 ogives, 3900 deployees",
        "Horloge 85 secondes -- record 2026",
        "100 ogives Hiroshima suffisent a un hiver nucleaire regional (Robock 2007)",
      ],
      cloture: "Nous avons survecu au nucleaire par chance repetee : Petrov 1983, Arkhipov 1962. La chance n'est pas un plan.",
    },
    vert: {
      these: "Le decalage entre priorites reelles et debat public est en soi un risque civilisationnel. La sagesse n'est pas d'ecraser un risque au profit d'un autre, mais de calibrer l'attention proportionnellement a la probabilite conditionnelle et a la gravite terminale. Cela suppose une culture de precaution asymetrique.",
      stats: [
        "Ratio attention mediatique : climat 90%, IA safety 3%, nucleaire 1%",
        "Ratio P(catastrophe) selon Ord : IA 60%, autres 40%, climat ~1%",
        "Cout d'un rebalancement : 10-50 Mds USD/an -- 2-10% du climat",
      ],
      cloture: "Nous sommes le premier des huit milliards a hesiter avant de choisir. Nous sommes aussi peut-etre la derniere.",
    },
    bleu: {
      these: "Si le climat est le seul risque civilisationnel, pourquoi Ord et Bostrom ecrivent-ils sur l'IA ? Si l'alignement IA est de la science-fiction, pourquoi Bengio, Hinton, Russell -- prix Turing -- ecrivent-ils sur le risque ? Si le nucleaire est du passe, pourquoi l'Horloge est-elle a 85 secondes ?",
      stats: [
        "5 prix Turing alertant sur le risque IA -- ce n'est pas un lobby, c'est le Nobel de l'informatique",
        "17% de probabilite d'extinction ce siecle -- combien de siecles supportent 17% ?",
        "500M USD d'alignement dans le monde -- moins que le budget marketing d'un studio Hollywood",
      ],
      cloture: "Avant d'accuser Ord d'alarmisme, as-tu lu son livre ? Avant de rire de l'alignement, connais-tu le probleme de contrôle ?",
    },
  },

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    videos: [],
    debates: ["course-ia", "science-abondance", "droite-gauche"],
  },
};

if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["risques-existentiels"] = CONTENT_DEBATES_risques_existentiels;
