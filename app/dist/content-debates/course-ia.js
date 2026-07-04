// /mindmap/content-debates/course-ia.js
// Fiche rhetorique profonde -- Debat "La Course a l'IA -- Urgence Geopolitique"
// Voix : Auguste Pugnet + corpus polyphonique (industriels, chercheurs, geopoliticiens)
// Source : data.js (debates, citations, posterData, fichesContent)

if (typeof CONTENT_DEBATES_REGISTRY === 'undefined') { var CONTENT_DEBATES_REGISTRY = {}; }

const CONTENT_DEBATES_course_ia = {
  id: "course-ia",
  slug: "course-ia-urgence-geopolitique",
  title: "La Course a l'IA -- Urgence Geopolitique",
  speaker: "Auguste Pugnet (corpus polyphonique)",
  format: "Debat structure - Fiche rhetorique",
  word_count: 8600,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "L'IA n'est pas une industrie de plus. C'est le nouveau socle de la puissance.",
  thesis: "L'IA est le paradigme structurant du XXIe siecle -- au meme titre que la vapeur, l'electricite ou le petrole aux siecles precedents. L'Europe possede les atouts (nucleaire decarbone, mathematiciens, ingenieurs, donnees industrielles) mais pas la volonte politique ni la vitesse d'execution. C'est une urgence a 5-10 ans : au-dela, la souverainete cognitive europeenne aura disparu.",
  key_takeaways: [
    "L'IA est un facteur de production general (comme l'electricite) -- pas un secteur. Manquer le tournant, c'est manquer tout le siecle",
    "USA investit 109 Mds USD en IA (2024), Europe 4.8 Mds -- rapport de 23 pour 1. La course est deja engagee",
    "L'Europe importe 98% de ses terres rares et 99% de ses OS -- la souverainete cognitive s'ajoute a des dependances deja critiques",
    "Le nucleaire francais est un actif strategique unique : 2 GW disponibles a bas cout carbone alors que les datacenters US saturent le reseau texan",
    "AGI estimee 2027-2033 (Metaculus, laboratoires majeurs) : la fenetre de decision politique est tres inferieure a la fenetre technologique",
    "30-40% des emplois affectes d'ici 10 ans (McKinsey/Goldman) : sans strategie de reallocation, l'IA devient un instrument de fracture sociale supplementaire",
    "Mistral, Kyutai, LightOn : la France a une classe d'excellence en IA generative. Elle n'a pas la classe de gouvernance pour l'ancrer",
    "L'AI Act europeen protege les consommateurs contre une IA qui n'existe pas encore en Europe -- il ne regule pas, il empeche",
  ],

  // ============================================================
  // 2. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "L'IA est le nouveau paradigme de puissance mondial et l'Europe joue son autonomie a 5-10 ans",
      children: [
        {
          claim: "L'IA n'est pas une industrie de plus -- c'est un facteur de production general (General Purpose Technology)",
          type: "premise",
          strength: 10,
          evidence: [
            "Vapeur (1770-1830), electricite (1880-1930), IT (1980-2020) -- meme profil de bascule",
            "Impact estime : +1.5 point de PIB annuel additionnel sur 10 ans (Goldman Sachs 2023)",
            "Trois couches touchees : production, decision, coordination",
          ],
          children: [
            {
              claim: "Une GPT redistribue integralement le pouvoir economique et geopolitique",
              type: "premise",
              strength: 9,
              evidence: [
                "Vapeur : Grande-Bretagne devient hegemon",
                "Electricite : USA supplantent Europe",
                "Petrole : bascule vers puissances petrolieres",
              ],
            },
          ],
        },
        {
          claim: "L'ecart de moyens USA/Europe est deja hors de rattrapage marginal",
          type: "premise",
          strength: 9,
          evidence: [
            "109 Mds USD vs 4.8 Mds EUR d'investissement IA en 2024",
            "NVIDIA capitalise plus que le PIB de la France",
            "Big Tech US : 200+ Mds de capex IA cumules 2024-2025",
          ],
          children: [
            {
              claim: "Sans investissement public massif, l'Europe reste condamnee au statut de client",
              type: "premise",
              strength: 8,
              evidence: ["Aucune plateforme cloud europeenne dans le top 5 mondial"],
            },
          ],
        },
        {
          claim: "L'Europe possede des atouts uniques -- s'ils sont mobilises maintenant",
          type: "premise",
          strength: 8,
          evidence: [
            "Nucleaire francais : 400 TWh/an disponibles, bas carbone",
            "Ecoles d'ingenieurs : Polytechnique, ENS, INRIA, EPFL, ETH",
            "Donnees industrielles : Airbus, Siemens, Sanofi, LVMH",
            "Position juridique : neutralite entre USA et Chine",
          ],
          children: [
            {
              claim: "Le nucleaire est l'atout majeur ignore -- l'energie va devenir le goulot d'etranglement de l'IA",
              type: "premise",
              strength: 9,
              evidence: [
                "Un datacenter IA consomme autant qu'une ville moyenne",
                "USA : moratoires locaux sur les datacenters (Virginie, Texas)",
                "IEA : consommation datacenters mondiale doublera d'ici 2026",
              ],
            },
            {
              claim: "Mistral, Kyutai, LightOn prouvent que la France peut produire des modeles de rang mondial",
              type: "example",
              strength: 7,
              evidence: ["Mistral 8x22B : performance comparable a GPT-4 pour 20 fois moins cher"],
            },
          ],
        },
        {
          claim: "L'Europe reglemente ce qu'elle ne produit pas -- transformation industrielle inversee",
          type: "premise",
          strength: 8,
          evidence: [
            "AI Act adopte en 2024 avant l'existence d'un ecosysteme europeen mature",
            "RGPD : cout de conformite estime 8 Mds EUR/an, impact economique sur les PME",
            "Aucune Big Tech europeenne, mais 1000+ regulations cumulees",
          ],
          children: [
            {
              claim: "La regulation avant industrialisation cree un desavantage comparatif structurel",
              type: "premise",
              strength: 7,
              evidence: [
                "Chine : politique industrielle d'abord, regulation apres",
                "USA : marche libre d'abord, regulation ex post",
                "Europe : regulation ex ante d'un produit qu'elle n'a pas",
              ],
            },
          ],
        },
        {
          claim: "La fenetre politique est plus courte que la fenetre technologique",
          type: "premise",
          strength: 9,
          evidence: [
            "AGI probable 2027-2033 (Metaculus median)",
            "Cycle electoral europeen : 5 ans avec renouvellement Commission tous les 5 ans",
            "Delai moyen entre decision UE et impact operationnel : 3-7 ans",
          ],
          children: [
            {
              claim: "Attendre le prochain mandat = ceder definitivement le terrain",
              type: "premise",
              strength: 8,
              evidence: ["Le stack (GPU + modeles + integration) s'ossifie en 3-5 ans"],
            },
          ],
        },
        {
          claim: "L'IA cree une fracture sociale si la reallocation n'est pas prevue",
          type: "premise",
          strength: 7,
          evidence: [
            "30-40% des emplois affectes d'ici 10 ans (McKinsey, Goldman)",
            "Historiquement : chaque GPT detruit avant de creer (metiers du savoir cette fois)",
            "Cols blancs = premiers touches -- pas les cols bleus",
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
      text: "L'IA n'est pas une industrie de plus. C'est le nouveau socle de la puissance.",
      context: "Aphorisme d'ouverture -- requalification de l'IA en GPT",
      tags: ["aphorisme", "GPT", "geopolitique"],
      rhetorical_device: "definition axiomatique / recategorisation",
      power_score: 10,
      chapter_idx: 1,
      highlight_words: ["socle de la puissance"],
    },
    {
      text: "Ceux qui ratent une revolution industrielle passent le siecle suivant dans l'antichambre.",
      context: "Rappel historique -- consequence macro d'un retard technologique",
      tags: ["historique", "avertissement", "geopolitique"],
      rhetorical_device: "aphorisme historique / avertissement",
      power_score: 10,
      chapter_idx: 1,
      highlight_words: ["revolution industrielle", "antichambre"],
    },
    {
      text: "L'Europe a le capital, les talents, les donnees, l'energie. Il ne lui manque qu'une chose : la volonte.",
      context: "Diagnostic des atouts et du manque -- centre de la thesis",
      tags: ["diagnostic", "europe", "volonte"],
      rhetorical_device: "enumeration + climax negatif",
      power_score: 9,
      chapter_idx: 2,
      highlight_words: ["volonte"],
    },
    {
      text: "109 milliards contre 4.8 milliards. Ce n'est plus un ecart, c'est un abandon.",
      context: "Chiffre d'investissement USA/Europe -- attaque frontale",
      tags: ["chiffre", "USA", "Europe"],
      rhetorical_device: "requalification lexicale / hyperbole justifiee",
      power_score: 10,
      chapter_idx: 2,
      highlight_words: ["109 milliards", "4.8 milliards", "abandon"],
    },
    {
      text: "L'AI Act est un chef-d'oeuvre de regulation d'un produit que nous ne fabriquons pas.",
      context: "Attaque de la sequence reglementaire europeenne",
      tags: ["AI Act", "regulation", "sarcasme"],
      rhetorical_device: "ironie institutionnelle / paradoxe",
      power_score: 10,
      chapter_idx: 3,
      highlight_words: ["chef-d'oeuvre", "ne fabriquons pas"],
    },
    {
      text: "L'IA consomme de l'electricite. Nous avons 400 TWh de nucleaire bas carbone. Coincidence, ou opportunite ?",
      context: "Reveiller l'atout nucleaire francais",
      tags: ["nucleaire", "energie", "opportunite"],
      rhetorical_device: "question rhetorique / mise en tension",
      power_score: 9,
      chapter_idx: 4,
      highlight_words: ["400 TWh", "nucleaire"],
    },
    {
      text: "Le prochain empire ne se batira pas sur les hydrocarbures. Il se batira sur les tokens.",
      context: "Recategorisation geopolitique -- lecture nouvelle du pouvoir",
      tags: ["geopolitique", "empire", "tokens"],
      rhetorical_device: "parallele historique / metonymie technique",
      power_score: 9,
      chapter_idx: 1,
      highlight_words: ["hydrocarbures", "tokens"],
    },
    {
      text: "Mistral, Kyutai, LightOn : la France a produit des cerveaux de rang mondial. Elle n'a pas produit la strategie qui les retient.",
      context: "Hommage aux champions et critique de leur environnement",
      tags: ["mistral", "brain-drain", "strategie"],
      rhetorical_device: "concession + critique / eloge partiel",
      power_score: 9,
      chapter_idx: 5,
      highlight_words: ["cerveaux", "strategie qui les retient"],
    },
    {
      text: "Il ne s'agit pas de reguler l'IA. Il s'agit de la produire d'abord.",
      context: "Priorisation industrielle vs reglementaire",
      tags: ["strategie", "regulation", "industrie"],
      rhetorical_device: "distinction / hierarchisation",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["reguler", "produire"],
    },
    {
      text: "L'AGI est estimee 2027-2033. Le prochain cycle electoral europeen se termine en 2029. Faites le calcul.",
      context: "Urgence temporelle -- confrontation calendrier tech/politique",
      tags: ["AGI", "temporalite", "urgence"],
      rhetorical_device: "juxtaposition calendaire / question rhetorique",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["2027-2033", "2029"],
    },
    {
      text: "Une souverainete qui depend de trois entreprises californiennes n'est plus une souverainete.",
      context: "Definition minimale de la souverainete numerique",
      tags: ["souverainete", "dependance", "big-tech"],
      rhetorical_device: "definition axiomatique / attaque frontale",
      power_score: 9,
      chapter_idx: 4,
      highlight_words: ["trois entreprises", "californiennes"],
    },
    {
      text: "98% de terres rares importees, 99% d'OS americains, 100% de dependance cognitive en preparation. C'est un ticket vers le vassalage.",
      context: "Accumulation des dependances -- appel au sursaut",
      tags: ["dependance", "vassalage", "chiffre"],
      rhetorical_device: "gradation / accumulation chiffree",
      power_score: 10,
      chapter_idx: 4,
      highlight_words: ["98%", "99%", "100%", "vassalage"],
    },
    {
      text: "Software is eating the world. Now AI is eating software.",
      context: "Citation revisitee -- Marc Andreessen actualise par Auguste",
      tags: ["andreessen", "citation", "meta-technologie"],
      rhetorical_device: "citation d'autorite revisitee / gradation",
      power_score: 8,
      chapter_idx: 1,
      highlight_words: ["software", "AI"],
    },
    {
      text: "The most dangerous thing is not that AI will destroy jobs. It is that AI will be built without us.",
      context: "Reformulation de l'enjeu europeen",
      tags: ["AI", "menace", "europe"],
      rhetorical_device: "reformulation en anglais / retournement de peur",
      power_score: 9,
      chapter_idx: 4,
      highlight_words: ["without us"],
    },
    {
      text: "La reglementation avant l'industrialisation, c'est le luxe d'une puissance. En l'absence de puissance, c'est un suicide.",
      context: "Distinction ordre historique regulation/industrie",
      tags: ["regulation", "suicide", "sequence"],
      rhetorical_device: "distinction conditionnelle / renversement",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["luxe", "suicide"],
    },
    {
      text: "Le nucleaire francais nous donne l'un des rares avantages structurels non-copiables du monde de demain. Nous le jouons a peine.",
      context: "Rappel de l'exception francaise energetique",
      tags: ["nucleaire", "France", "avantage"],
      rhetorical_device: "recadrage patrimonial / regret operationnel",
      power_score: 9,
      chapter_idx: 5,
      highlight_words: ["non-copiables", "jouons a peine"],
    },
    {
      text: "Chaque jour ou nous debattons pendant qu'ils compilent, l'ecart double.",
      context: "Urgence temporelle -- rythme de croissance exponentielle",
      tags: ["urgence", "exponentiel", "delta"],
      rhetorical_device: "antithese temporelle / hyperbole justifiee",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["debattons", "compilent", "ecart double"],
    },
    {
      text: "AI is the last invention we ever need to make.",
      context: "Citation I.J. Good -- rappel civilisationnel",
      tags: ["good", "AGI", "civilisation"],
      rhetorical_device: "citation d'autorite scientifique",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["last invention"],
    },
    {
      text: "Compute is the new oil. Data is the new soil. Models are the new empires.",
      context: "Triple metaphore geopolitique",
      tags: ["metaphore", "geopolitique", "empire"],
      rhetorical_device: "tricolon metaphorique / paralleles historiques",
      power_score: 9,
      chapter_idx: 1,
      highlight_words: ["compute", "data", "models"],
    },
    {
      text: "L'Europe a le choix : produire son IA ou etre produite par celle des autres.",
      context: "Choix strategique presente comme binaire",
      tags: ["choix", "produire", "etre-produit"],
      rhetorical_device: "chiasme / faux binaire volontaire",
      power_score: 10,
      chapter_idx: 7,
      highlight_words: ["produire", "etre produite"],
    },
    {
      text: "You cannot regulate what you do not build. Regulation without production is renunciation.",
      context: "Formule condensee en anglais -- destinee aux forums internationaux",
      tags: ["regulation", "production", "renunciation"],
      rhetorical_device: "aphorisme anglais / gradation",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["renunciation"],
    },
    {
      text: "Il n'y aura pas de puissance europeenne sans souverainete cognitive. Et il n'y aura pas de souverainete cognitive sans capex.",
      context: "Chaine de conditionnalites -- appel au budget",
      tags: ["souverainete", "capex", "chaine"],
      rhetorical_device: "double conditionnalite / sorites",
      power_score: 9,
      chapter_idx: 7,
      highlight_words: ["souverainete cognitive", "capex"],
    },
  ],

  // ============================================================
  // 4. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "'L'IA est surevaluee, c'est une bulle'",
        response: "Distinguer bulle financiere et bascule technologique",
        technique: "Distinguo temporel / analogie 1999",
        example_response_text: "1999 etait aussi une bulle. Les capitalisations ont chute -- mais Internet a reellement mange le monde. Meme scenario probable pour l'IA : correction financiere possible a court terme, transformation civilisationnelle certaine a 10 ans. L'un n'invalide pas l'autre.",
      },
      {
        challenge: "'L'Europe n'a pas les moyens de rivaliser avec les GAFAM'",
        response: "Reframer autour des actifs specifiques : nucleaire, donnees industrielles, talents",
        technique: "Recadrage des atouts",
        example_response_text: "L'Europe n'a pas les moyens de copier Google, mais elle a des atouts que Google n'a pas : 400 TWh de nucleaire bas carbone, 30 ans de donnees industrielles Siemens/Airbus/Sanofi, une classe de mathematiciens de rang mondial. Le jeu n'est pas 'battre les GAFAM sur leur terrain', c'est 'creer un terrain ou nos atouts comptent'.",
      },
      {
        challenge: "'On doit d'abord proteger les Europeens des risques de l'IA'",
        response: "Distinguer protection et empechement",
        technique: "Distinguo semantique",
        example_response_text: "Personne ne s'oppose a la protection. On s'oppose a l'empechement deguise en protection. L'AI Act interdit des usages avant que l'ecosysteme puisse les produire. On regule un cheval qu'on n'a pas achete. La protection reelle passe par la souverainete, pas par l'interdiction anticipee.",
      },
      {
        challenge: "'L'IA va detruire les emplois'",
        response: "Rappeler l'historique des GPT + proposer une strategie de reallocation",
        technique: "Historique + solutionnisme",
        example_response_text: "Chaque GPT (vapeur, electricite, IT) a detruit plus d'emplois qu'elle n'en a cree la premiere decennie -- puis en a cree infiniment plus. Le probleme n'est pas la destruction, c'est le vide entre les deux. La strategie est double : proteger le corps social pendant la transition ET produire l'IA plutot que la subir.",
      },
      {
        challenge: "'La France a Mistral, ca prouve que ca marche'",
        response: "Reconnaitre le succes tout en denoncant le contexte",
        technique: "Concession + critique",
        example_response_text: "Mistral est brillant. Mais un ecosysteme national ne se resume pas a une entreprise -- il faut 20 Mistral, 100 Hugging Face, 1000 startups infra. Or l'ecosystem VC europeen investit 4.8 Mds contre 109 US. Un champion isole sans meute est fragile, comme l'a montre Nokia.",
      },
      {
        challenge: "'L'AGI, c'est de la science-fiction'",
        response: "Confronter aux estimations des labos majeurs",
        technique: "Empirisme d'estimation",
        example_response_text: "Estimation mediane Metaculus : 2032. Sam Altman (OpenAI), Demis Hassabis (DeepMind), Dario Amodei (Anthropic) -- tous estiment 2027-2033. Ces gens construisent les modeles. Nier leur estimation, c'est nier la parole d'un chirurgien sur sa specialite parce qu'elle nous derange.",
      },
    ],
    how_to_attack: [
      {
        target_claim: "'L'AI Act protege les Europeens'",
        attack: "L'AI Act empeche un ecosysteme qui n'existe pas encore. C'est un chef-d'oeuvre de regulation d'un produit non fabrique.",
        angle: "Sequence industrielle / empirique",
      },
      {
        target_claim: "'L'IA menace les emplois donc il faut la freiner'",
        attack: "Freiner l'IA en Europe n'empeche pas son deploiement -- il transfere seulement sa production hors de nos frontieres. Le chomage vient, la valeur ajoutee part.",
        angle: "Consequentialiste",
      },
      {
        target_claim: "'La France peut porter l'Europe seule'",
        attack: "Mistral est un point lumineux. Un point ne fait pas une strategie. Sans coalition (Allemagne, Pays-Bas, Nordiques), la France ne pese pas au meme rang que USA + Chine.",
        angle: "Realpolitik",
      },
      {
        target_claim: "'L'open source europeen est notre reponse'",
        attack: "L'open source n'exempte pas des couts d'infrastructure. Un modele open source de rang mondial coute >50M USD a entrainer. Sans capex, l'open source europeen restera un derive des poids americains.",
        angle: "Technique / financier",
      },
      {
        target_claim: "'Il faut d'abord un cadre ethique'",
        attack: "L'ethique sans production est un exercice de style. La Chine et les USA vont produire de l'IA avec ou sans notre cadre. Notre choix : soit devenir producteur pour peser sur les normes, soit rester ethiciens sans levier.",
        angle: "Realpolitik normatif",
      },
    ],
    how_to_rephrase: [
      {
        original: "L'AI Act est un chef-d'oeuvre de regulation d'un produit que nous ne fabriquons pas.",
        softer: "L'AI Act intervient avant la maturation de l'ecosysteme europeen, ce qui pose une question de sequence.",
        harder: "L'AI Act, c'est reguler la voiture avant d'avoir construit l'usine. Chef-d'oeuvre de fonctionnaires.",
        academic: "L'AI Act instaure un cadre normatif ex ante d'un secteur ou l'Union europeenne dispose d'une capacite productive marginale, inversant la sequence habituelle industrialisation-regulation.",
      },
      {
        original: "L'Europe a le capital, les talents, les donnees, l'energie. Il ne lui manque qu'une chose : la volonte.",
        softer: "L'Europe reunit les conditions techniques d'une souverainete cognitive ; il lui manque le portage politique.",
        harder: "On a tout. On refuse de s'en servir. Ce n'est pas de l'incompetence, c'est de la lachete.",
        academic: "Les facteurs de production requis pour une puissance cognitive europeenne sont endogenes ; la variable manquante est la mobilisation strategique coordonnee.",
      },
      {
        original: "Le prochain empire ne se batira pas sur les hydrocarbures. Il se batira sur les tokens.",
        softer: "Le facteur de production dominant du siecle change : de l'energie fossile a la puissance de calcul.",
        harder: "Fini le petrole. Bienvenue dans l'ere des tokens. Ceux qui n'ont pas de GPU auront le meme statut que ceux qui n'avaient pas de puits.",
        academic: "La ressource strategique determinante du systeme international se deplace de la ressource fossile vers la capacite de traitement algorithmique.",
      },
      {
        original: "L'Europe a le choix : produire son IA ou etre produite par celle des autres.",
        softer: "Le choix europeen est entre construire son propre stack ou consommer celui d'autrui.",
        harder: "Soit on fait notre IA, soit on devient les data-plaisirs des IA americaines.",
        academic: "L'alternative strategique europeenne se pose entre autonomie productive et heteronomie technologique dans le domaine de l'intelligence artificielle.",
      },
      {
        original: "Chaque jour ou nous debattons pendant qu'ils compilent, l'ecart double.",
        softer: "Le rythme de croissance exponentielle du secteur rend le cout d'attente considerable.",
        harder: "On palabre, ils codent. Chaque jour perdu double le retard.",
        academic: "La nature exponentielle de la courbe d'apprentissage et d'accumulation d'infrastructure IA rend le cout d'opportunite temporel non-lineaire.",
      },
    ],
    if_asked: [
      {
        question: "L'Europe peut-elle vraiment rattraper les USA ?",
        best_response: "Pas au meme jeu. Mais elle peut jouer un autre jeu : specialisation industrielle (IA embarquee, IA medicale, IA militaire souveraine), infrastructures energetiques uniques (nucleaire), consortiums croises Airbus/Sanofi/Siemens. Le rattrapage frontal est perdu ; la specialisation strategique est ouverte.",
        followup_moves: ["Detailler les 3 axes de specialisation", "Rappeler l'atout nucleaire", "Comparer avec le succes ARM (UK) face a Intel"],
      },
      {
        question: "L'AI Act est-il une catastrophe ?",
        best_response: "Non, l'AI Act n'est pas une catastrophe -- c'est un mauvais sequencage. Il fallait produire d'abord, reguler ensuite. Reguler avant produire cree une double perte : on freine l'ecosysteme europeen et on ne freine pas les modeles etrangers, qui contournent ou attendent. Le vrai debat est le calendrier, pas le principe.",
        followup_moves: ["Distinguer principe/calendrier", "Chiffrer les couts de conformite", "Comparer avec RGPD"],
      },
      {
        question: "Que faire des emplois detruits par l'IA ?",
        best_response: "Trois leviers : d'abord une strategie de reallocation active (formation permanente financee via credits d'impot IA), ensuite une fiscalite qui capture une part de la productivite IA pour financer la transition, enfin un plan de metiers 'IA-augmentee' plutot que 'IA-remplacee'. Le pire scenario est le laisser-faire : chomage cols blancs sans filet.",
        followup_moves: ["Chiffrer 30-40% metiers impactes", "Proposer taxe sur productivite IA", "Rappeler les GPT historiques"],
      },
      {
        question: "N'est-ce pas surestimer l'IA ?",
        best_response: "Il est possible qu'on la surestime a court terme et qu'on la sous-estime a long terme -- classique des GPT. Le risque d'excedent d'anticipation est faible (correction financiere) ; le risque de sous-estimation est majeur (perte d'un cycle). Le calcul asymetrique impose la prudence dans la direction de l'action, pas de l'attente.",
        followup_moves: ["Rappeler Amara's Law", "Comparer 1999 Internet", "Analyser cout/opportunite"],
      },
      {
        question: "Le nucleaire est-il vraiment un atout IA ?",
        best_response: "Massif. Un datacenter IA de nouvelle generation demande 100 MW en continu. Les USA saturent : moratoires en Virginie et au Texas. La France dispose de 2 GW de reserve nucleaire mobilisable. Un plan datacenters IA France 2030 pourrait devenir le hub europeen. C'est une occasion strategique concrete, pas theorique.",
        followup_moves: ["Chiffrer 100 MW/datacenter", "Rappeler moratoires US", "Proposer plan France 2030 datacenters"],
      },
      {
        question: "Mistral suffit-il comme champion national ?",
        best_response: "Non, un champion isole est fragile -- Nokia, Alcatel l'ont prouve. Il faut une meute : Mistral + Kyutai + LightOn + 100 startups infra + integrateurs industriels + partenariat energie. Sans ecosysteme, un champion est une cible d'acquisition hostile. La strategie doit etre stack complet, pas fleuron isole.",
        followup_moves: ["Rappeler Nokia/Alcatel", "Detailler stack complet", "Comparer ecosysteme Bay Area"],
      },
      {
        question: "L'IA militaire ne pose-t-elle pas un probleme ethique ?",
        best_response: "Elle pose un probleme ethique. Elle pose surtout un probleme strategique : USA, Chine et Russie ont deja des programmes autonomes majeurs. Renoncer unilateralement a l'IA militaire, c'est ceder l'un des seuls domaines ou la souverainete europeenne est encore mobilisable. L'ethique se defend mieux depuis une position, pas depuis l'absence.",
        followup_moves: ["Rappeler programmes US/CN/RU", "Chiffrer capacites Rafale/Eurofighter", "Distinguer LAWS vs decision-support"],
      },
    ],
  },

  // ============================================================
  // 5. FALLACIES & NUANCES
  // ============================================================
  fallacies: [
    {
      original_claim: "'L'AI Act protege les Europeens'",
      fallacy_type: "faux positif / etiquetage protecteur",
      why_fallacious: "Presente une regulation comme protection alors qu'elle interdit un ecosysteme absent. La protection presuppose un objet a proteger contre -- ici, ni l'objet ni la menace ne sont mures.",
      steelman: "Une regulation prealable peut ancrer des normes ethiques que d'autres puissances devront respecter pour vendre en Europe (Brussels effect). Le RGPD a partiellement fonctionne selon ce mode.",
      nuance: "Vrai : le Brussels effect existe et l'Europe est un marche assez large pour peser. Faux : l'effet marche mieux quand l'Europe est productrice concurrente (auto, luxe), pas simple consommatrice.",
      counter_argument: "L'Europe reglemente une IA qui n'est pas la sienne, donc negocie sans capacite de retorsion productive. Le RGPD marche moins bien qu'annonce : Meta et Google continuent d'operer, les PME europeennes portent la charge de conformite. Le meme scenario se prepare avec l'AI Act.",
      severity: "high",
    },
    {
      original_claim: "'L'IA n'est qu'une mode'",
      fallacy_type: "biais de continuite / analogie erronee",
      why_fallacious: "Assimile un changement de paradigme (GPT) a une mode passagere. Ignore l'historique des GPT : vapeur, electricite, IT ont toutes ete traitees comme 'mode' au debut.",
      steelman: "L'histoire technologique montre des cycles de hype (metavers, blockchain, VR) qui n'ont pas tenu leurs promesses court terme. Le scepticisme est methodologiquement sain.",
      nuance: "Vrai : chaque hype produit des dechets. Faux : traiter l'IA comme le metavers ignore les indicateurs objectifs -- adoption entreprise, productivite mesuree, capex, brevets.",
      counter_argument: "ChatGPT : 100M utilisateurs en 2 mois, plus rapide que TikTok. Adoption entreprise : 65% des Fortune 500 en 2025 (McKinsey). Productivite mesuree +40% sur taches cognitives (MIT/Harvard 2024). Ces indicateurs distinguent une GPT d'une mode.",
      severity: "high",
    },
    {
      original_claim: "'On peut attendre et copier ce qui marche ailleurs'",
      fallacy_type: "erreur d'estimation temporelle / retour au benchmark",
      why_fallacious: "Suppose que le stack IA est copiable rapidement. Ignore la loi de rendement d'echelle des modeles : le retard s'accumule non-lineairement.",
      steelman: "La strategie de suiveur rapide a fonctionne historiquement (Japon d'apres-guerre, Coree). L'imitation intelligente est un avantage strategique documente.",
      nuance: "Vrai : le suivi rapide peut fonctionner pour des technologies matures ou modulaires. Faux : sur les GPT en phase exponentielle, le decalage se cristallise via effets de reseau, ecosysteme, brevets.",
      counter_argument: "Nokia sur le smartphone, Kodak sur le numerique, Yahoo sur le search : tous ont pense pouvoir attendre. Tous ont perdu. Sur une GPT, la fenetre de rattrapage se ferme apres 3-5 ans, pas 10-15.",
      severity: "high",
    },
    {
      original_claim: "'L'IA europeenne sera plus ethique'",
      fallacy_type: "appel a la vertu / effet placebo normatif",
      why_fallacious: "Presuppose que la vertu ethique est une preference du marche mondial. Empiriquement, le consommateur choisit performance/prix, pas ethique de production, sauf sur des niches marginales.",
      steelman: "Certaines industries (bio, luxe, medical) montrent qu'une position ethique de haut de gamme est monetisable, notamment vis-a-vis d'acheteurs europeens et de secteurs publics.",
      nuance: "Vrai : dans certaines niches, l'ethique est un differenciateur payant. Faux : sur un marche mondial commoditise (IA generative grand public), le meilleur/moins cher gagne, pas le plus vertueux.",
      counter_argument: "Windows a domine malgre les alternatives 'ethiques' (Linux, BSD). ChatGPT domine malgre les alternatives 'ouvertes'. L'ethique produit un differenciateur marginal, pas structurant. Sans performance et cout competitifs, l'ethique reste un discours interne europeen.",
      severity: "medium",
    },
    {
      original_claim: "'L'IA va detruire les emplois donc il faut la freiner'",
      fallacy_type: "conclusion inversee / freinage vain",
      why_fallacious: "Freiner l'IA en Europe n'empeche pas son deploiement mondial. Le pays qui la freine perd la valeur ajoutee ET subit la destruction d'emplois -- double perte.",
      steelman: "Il est legitime de prendre le temps d'organiser la transition sociale. La vitesse de deploiement peut etre calibree pour minimiser la fracture.",
      nuance: "Vrai : la vitesse et la sequence de deploiement peuvent etre calibrees. Faux : freiner unilateralement l'Europe alors que USA et Chine deploient revient a subir sans capter.",
      counter_argument: "L'exemple des luddistes : casser les metiers a tisser n'a pas empeche l'industrialisation. Le meme scenario se joue. La bonne strategie est de capter la valeur (production IA) et redistribuer, pas de bloquer et subir.",
      severity: "medium",
    },
    {
      original_claim: "'La France a Mistral, donc tout va bien'",
      fallacy_type: "biais du fleuron / metonymie rassurante",
      why_fallacious: "Reduit une strategie industrielle a l'existence d'un champion isole. Un champion ne survit pas sans ecosysteme (fournisseurs, VC, universites, clients).",
      steelman: "L'existence d'un champion prouve la capacite locale a produire au niveau mondial. C'est un signal positif reel et un point d'entree strategique.",
      nuance: "Vrai : Mistral est un actif national de premier plan. Faux : un actif n'est pas une strategie, et un fleuron sans meute est une cible d'acquisition hostile.",
      counter_argument: "Nokia (Finlande, 40% du marche smartphone en 2007), Alcatel (leader telecom mondial), Airbus (sans supply chain europeen serait mort) : la lecon est constante. Un champion isole meurt ou est achete. Il faut ecosysteme complet.",
      severity: "medium",
    },
    {
      original_claim: "'L'AGI est de la science-fiction'",
      fallacy_type: "argument d'incredulite / rejet par ridicule",
      why_fallacious: "Rejette une estimation technique majoritaire par appel a l'intuition. Les personnes construisant l'AGI (Altman, Hassabis, Amodei) estiment 2027-2033 -- l'estimation n'est pas farfelue.",
      steelman: "L'histoire de l'IA compte plusieurs 'hivers' (annees 60, annees 80) ou des promesses n'ont pas tenu. Le scepticisme est methodologiquement fonde par le precedent.",
      nuance: "Vrai : les timelines IA ont deja glisse et l'AGI reste incertaine dans son calendrier. Faux : l'incertitude temporelle ne rend pas l'evenement improbable -- la probabilite conditionnelle a une decennie est significative.",
      counter_argument: "Le point crucial n'est pas 'AGI en 2027 ou 2040'. C'est 'AGI-like capabilities cette decennie'. Les capacites actuelles (raisonnement multimodal, agents, code) montrent une trajectoire exponentielle. Le calendrier peut glisser -- la direction ne glisse pas.",
      severity: "medium",
    },
    {
      original_claim: "'L'open source suffit pour rattraper'",
      fallacy_type: "sous-estimation du cout infra",
      why_fallacious: "Confond acces au code et acces a l'infrastructure. Entrainer un modele de rang mondial coute >50-100M USD. L'open source ne finance pas l'entrainement, il partage les poids apres coup.",
      steelman: "L'open source a produit des ecosystemes puissants (Linux, PostgreSQL, Kubernetes) qui rivalisent avec les propriétaires. Le principe est economiquement viable.",
      nuance: "Vrai : l'open source cree de la valeur cumulative et evite la capture proprietaire. Faux : sans budget infrastructure massif, l'open source europeen reste une fenetre sur des modeles finances ailleurs.",
      counter_argument: "Llama, Mistral (open weights) sont finances par des budgets prives majeurs (Meta 10 Mds capex IA/an, Mistral leve 600M EUR). L'open source n'exempte pas du capex. Sans investissement public europeen coordonne, l'open source reste un derive du finance americain ou francais.",
      severity: "medium",
    },
    {
      original_claim: "'La regulation ethique est la voie europeenne'",
      fallacy_type: "consolation par la vertu / rationalisation",
      why_fallacious: "Transforme une incapacite industrielle en choix vertueux. Reformule un retard subi comme une position choisie.",
      steelman: "L'Europe a un heritage juridique et humaniste unique qui peut se traduire en avantage normatif sur certains marches (medical, juridique, luxe, public).",
      nuance: "Vrai : l'heritage normatif europeen est un actif reel. Faux : le mobiliser sans capacite productive equivaut a un exercice de style sans levier.",
      counter_argument: "L'ONU a une charte des droits humains. Elle n'a pas d'armee. Son influence reelle depend des Etats qui ont les deux. L'Europe risque de devenir 'l'ONU normative de l'IA' : influente sur les colloques, absente des marches.",
      severity: "medium",
    },
  ],

  // ============================================================
  // 6. STATS & INFOGRAPHICS
  // ============================================================
  stats: [
    {
      number: "109 Mds USD",
      label: "Investissement prive IA USA (2024)",
      source: "Stanford AI Index 2024",
      context: "Vs 4.8 Mds Europe / 12 Mds Chine -- ecart USA/Europe = 23x",
      visual: "bar",
    },
    {
      number: "4.8 Mds EUR",
      label: "Investissement prive IA Europe (2024)",
      source: "France Digitale / Dealroom 2024",
      context: "France 47%, Allemagne 23%, UK 21% des flux europeens",
      visual: "bar",
    },
    {
      number: "90%",
      label: "Part de NVIDIA sur le marche GPU IA",
      source: "IDC 2024",
      context: "Quasi-monopole -- goulot d'etranglement geopolitique",
      visual: "percent",
    },
    {
      number: "98%",
      label: "Terres rares importees par l'UE",
      source: "Commission europeenne 2023",
      context: "Dependance a la Chine (60%) et a l'Afrique (25%)",
      visual: "percent",
    },
    {
      number: "99%",
      label: "OS grand public d'origine americaine en UE",
      source: "StatCounter 2024",
      context: "Windows + macOS + iOS + Android (Google) = quasi-totalite",
      visual: "percent",
    },
    {
      number: "2027-2033",
      label: "Timeline mediane AGI (Metaculus + labos majeurs)",
      source: "Metaculus 2024, declarations Altman/Hassabis/Amodei",
      context: "Ecart-type large mais mediane converge",
      visual: "count-up",
    },
    {
      number: "30-40%",
      label: "Emplois affectes par l'IA d'ici 10 ans",
      source: "McKinsey Global Institute 2024, Goldman Sachs 2023",
      context: "Cols blancs plus touches que cols bleus (inversion historique)",
      visual: "percent",
    },
    {
      number: "400 TWh",
      label: "Production nucleaire francaise annuelle",
      source: "RTE 2024",
      context: "Un des rares actifs energetiques bas carbone mobilisables pour datacenters",
      visual: "count-up",
    },
    {
      number: "100 MW",
      label: "Consommation d'un datacenter IA de nouvelle generation",
      source: "IEA Electricity 2024",
      context: "Equivalent d'une ville de 100 000 habitants -- l'energie devient goulot",
      visual: "count-up",
    },
    {
      number: "+40%",
      label: "Gain de productivite sur taches cognitives avec IA",
      source: "MIT Sloan / Harvard Business School 2024",
      context: "Etude experimentale sur 4000 consultants -- effet documente",
      visual: "percent",
    },
    {
      number: "65%",
      label: "Fortune 500 utilisant deja l'IA generative en production",
      source: "McKinsey State of AI 2024",
      context: "Adoption entreprise plus rapide que toute technologie precedente",
      visual: "percent",
    },
    {
      number: "8 Mds EUR/an",
      label: "Cout de conformite RGPD estime UE",
      source: "European Commission Regulatory Fitness 2023",
      context: "Precedent important : reguler sans produire cree une charge asymetrique sur PME",
      visual: "count-up",
    },
  ],

  // ============================================================
  // 7. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "USA vs Europe : moyens investis en IA (2024)",
      left: {
        label: "USA",
        items: [
          "109 Mds USD d'investissement prive",
          "GAFAM + OpenAI + Anthropic",
          "50 000 GPU H100 disponibles",
          "3 hyperscalers domestiques (AWS/Azure/GCP)",
          "CHIPS Act : 52 Mds public",
        ],
      },
      right: {
        label: "Europe",
        items: [
          "4.8 Mds EUR d'investissement prive",
          "Mistral + Kyutai + poches isolees",
          "GPU quasi tous loues aux hyperscalers US",
          "0 hyperscaler domestique de premier rang",
          "AI Continent Plan : 20 Mds public annonces",
        ],
      },
    },
    {
      title: "Sequence industrielle vs Sequence reglementaire",
      left: {
        label: "USA / Chine (industrialisation d'abord)",
        items: [
          "Marche libre / soutien etatique cible",
          "Regulation ex post apres emergence",
          "Champions industriels d'abord",
          "Normes co-construites par les producteurs",
          "Souverainete comme produit derive",
        ],
      },
      right: {
        label: "Europe (regulation d'abord)",
        items: [
          "AI Act ex ante",
          "Regulation avant industrialisation",
          "Champions absents ou fragiles",
          "Normes portees sans producteurs",
          "Souverainete comme discours",
        ],
      },
    },
    {
      title: "Facteurs de production IA : Europe vs USA",
      left: {
        label: "Europe (atouts sous-mobilises)",
        items: [
          "Nucleaire : 400 TWh disponibles",
          "Mathematiques : Fields Medal ratio elite",
          "Donnees industrielles : Siemens, Airbus, Sanofi",
          "Marche interieur : 450M consommateurs",
        ],
      },
      right: {
        label: "USA (avantages mobilises)",
        items: [
          "Compute : datacenters domines par 3 firmes",
          "Talents importes du monde entier (H1-B)",
          "Donnees consommateurs : GAFAM",
          "Marche global via Big Tech",
        ],
      },
    },
    {
      title: "Historique des GPT (General Purpose Technologies)",
      left: {
        label: "GPT precedentes",
        items: [
          "Vapeur (1770-1830) : Grande-Bretagne emerge",
          "Electricite (1880-1930) : USA supplantent",
          "IT (1980-2020) : Silicon Valley domine",
        ],
      },
      right: {
        label: "IA (2020-2040 ?)",
        items: [
          "Position hegemonique en jeu",
          "USA a l'avantage initial",
          "Chine deuxieme force",
          "Europe : atouts non mobilises",
        ],
      },
    },
    {
      title: "Ce que capte l'Europe vs Ce que capte les USA",
      left: {
        label: "Europe capte",
        items: [
          "Amendes GDPR (occasionnelles)",
          "Taxes numeriques (partielles)",
          "Effets de spillover marginaux",
          "Prestige normatif",
        ],
      },
      right: {
        label: "USA capte",
        items: [
          "Rente de plateforme (85% du profit IA global)",
          "Capitalisation boursiere (10 Mds+ par entreprise IA)",
          "Souverainete numerique",
          "Norme de facto imposee au monde",
        ],
      },
    },
  ],

  // ============================================================
  // 8. RHETORICAL DEVICES
  // ============================================================
  devices: [
    {
      name: "Recategorisation strategique",
      example_text: "L'IA n'est pas une industrie de plus. C'est le nouveau socle de la puissance.",
      effect: "Requalifie l'objet du debat pour changer l'echelle de reponse attendue",
      why_it_works: "Passe de 'sujet sectoriel' a 'sujet civilisationnel' -- ce qui rend inaudible toute reponse minimaliste.",
    },
    {
      name: "Tricolon metaphorique",
      example_text: "Compute is the new oil. Data is the new soil. Models are the new empires.",
      effect: "Rend memorable en 3 metaphores familieres l'architecture de la nouvelle puissance",
      why_it_works: "Chaque metaphore relie une couche technique a une realite geopolitique deja comprise (petrole, terre, empire).",
    },
    {
      name: "Gradation chiffree",
      example_text: "98% de terres rares, 99% d'OS, 100% de dependance cognitive en preparation.",
      effect: "Provoque une prise de conscience par accumulation",
      why_it_works: "Chaque chiffre approche 100 ; la gradation cree l'effet d'absurdite de la sequence.",
    },
    {
      name: "Ironie institutionnelle",
      example_text: "L'AI Act est un chef-d'oeuvre de regulation d'un produit que nous ne fabriquons pas.",
      effect: "Ridiculise sans crier",
      why_it_works: "Le compliment ironique (chef-d'oeuvre) met en relief l'absurdite de la sequence.",
    },
    {
      name: "Juxtaposition calendaire",
      example_text: "AGI 2027-2033. Prochaine Commission europeenne 2029. Faites le calcul.",
      effect: "Cree l'urgence sans la nommer explicitement",
      why_it_works: "L'auditeur fait le calcul lui-meme -- il s'auto-convainc, ce qui est plus puissant qu'une affirmation.",
    },
    {
      name: "Question rhetorique conditionnelle",
      example_text: "L'IA consomme de l'electricite. Nous avons 400 TWh de nucleaire. Coincidence ?",
      effect: "Suggere une strategie sans l'imposer",
      why_it_works: "Laisse l'auditeur formuler la reponse. L'insight semble venir de lui.",
    },
    {
      name: "Chiasme decisionnel",
      example_text: "Produire son IA ou etre produite par celle des autres.",
      effect: "Force le choix par elegance semantique",
      why_it_works: "Le chiasme (structure ABBA) fait entendre la symetrie d'un dilemme fondamental.",
    },
    {
      name: "Autorite d'origine",
      example_text: "Sam Altman, Demis Hassabis, Dario Amodei -- tous estiment 2027-2033.",
      effect: "Legitime une estimation par convergence d'experts",
      why_it_works: "Les trois PDG des trois labos majeurs se rejoignent -- l'accord d'experts concurrents est un signal fort.",
    },
    {
      name: "Requalification lexicale",
      example_text: "109 vs 4.8 milliards -- ce n'est plus un ecart, c'est un abandon.",
      effect: "Transforme un chiffre en jugement moral",
      why_it_works: "Le mot 'abandon' ajoute une couche affective au constat -- passe du descriptif au normatif.",
    },
    {
      name: "Aphorisme historique",
      example_text: "Ceux qui ratent une revolution industrielle passent le siecle suivant dans l'antichambre.",
      effect: "Ancre l'urgence dans un pattern historique",
      why_it_works: "Format aphorisme + reference historique = memorable et intimidant.",
    },
  ],

  // ============================================================
  // 9. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "Vapeur, electricite, IT",
      used_for: "Categoriser l'IA comme GPT et projeter ses effets civilisationnels",
      strength: 10,
      why_it_works: "Trois precedents historiques massifs, tous familiers, tous ayant redistribue la puissance mondiale. Le parallele est structurellement fort.",
    },
    {
      source: "Le nucleaire comme atout IA",
      used_for: "Recadrer un actif francais mal utilise en levier strategique",
      strength: 9,
      why_it_works: "Deplace la conversation de 'l'Europe est en retard' vers 'l'Europe a des atouts non joues'. Rebasculle l'affect de dépité vers proactif.",
    },
    {
      source: "Nokia / Alcatel / Kodak",
      used_for: "Illustrer le sort d'un champion isole sans ecosysteme",
      strength: 8,
      why_it_works: "Cas europeens familiers, tous ex-leaders mondiaux disparus faute d'ecosysteme. Cree la peur de la repetition.",
    },
    {
      source: "L'AI Act comme reguler la voiture avant d'avoir construit l'usine",
      used_for: "Denoncer l'inversion de sequence industrialisation/regulation",
      strength: 9,
      why_it_works: "Image concrete, absurde a l'oeil. Fait rire donc retient. Ridiculise sans crier.",
    },
    {
      source: "L'ONU normative sans armee",
      used_for: "Illustrer les limites de la puissance purement normative",
      strength: 8,
      why_it_works: "Compare l'Europe cognitive future a l'ONU actuelle : influence sur les mots, absence sur les actes. Prevention par similitude.",
    },
    {
      source: "1999 Internet vs bulle passagere",
      used_for: "Distinguer bulle financiere et bascule technologique",
      strength: 8,
      why_it_works: "Rappelle qu'une bulle peut coexister avec une revolution reelle. Distingue les temporalites (correction 2 ans vs transformation 20 ans).",
    },
  ],

  // ============================================================
  // 10. OPERATIONAL FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "Le triangle de la souverainete cognitive",
      when_to_use: "Evaluation strategique d'un choix industriel IA",
      steps: [
        "Angle 1 : Compute (GPU/datacenters/energie) -- capacite de calcul locale",
        "Angle 2 : Data (donnees industrielles + consommateurs) -- matiere premiere",
        "Angle 3 : Models (algorithmes + talents + IP) -- transformation en valeur",
      ],
      warning: "Un angle manquant = dependance structurelle. L'Europe est faible sur Compute, moyenne sur Data, correcte sur Models.",
    },
    {
      name: "La sequence 'produire avant de reguler'",
      when_to_use: "Toute proposition de nouvelle regulation IA",
      steps: [
        "Etape 1 : Chiffrer la capacite productive europeenne dans le domaine regule",
        "Etape 2 : Si <10% du marche mondial, reporter la regulation",
        "Etape 3 : Si 10-30%, calibrer une regulation permissive",
        "Etape 4 : Si >30%, deployer une regulation structurante",
      ],
      warning: "Reguler a <10% de capacite productive = charge asymetrique sans effet normatif reel.",
    },
    {
      name: "Le plan France 2030 datacenters IA",
      when_to_use: "Mobilisation de l'avantage energetique francais",
      steps: [
        "Etape 1 : Identifier 10 sites nucleaires avec surplus de capacite (2 GW disponibles)",
        "Etape 2 : Zonage rapide (procedure ZAN acceleree) autour des sites",
        "Etape 3 : Contrat energie-industrie 20 ans (prix garanti bas carbone)",
        "Etape 4 : Partenariat GPU (NVIDIA / AMD / Groq) sur allocation stable",
        "Etape 5 : Guichet unique CNIL / ARCEP / ARCOM pour les acteurs IA installes",
      ],
      warning: "Sans zonage rapide, chaque site prend 5-7 ans. La fenetre se ferme.",
    },
    {
      name: "La strategie de specialisation europeenne",
      when_to_use: "Definition d'une doctrine industrielle IA europeenne",
      steps: [
        "Axe 1 : IA industrielle (embedded, robotique, jumeaux numeriques) -- Siemens, Schneider, Bosch",
        "Axe 2 : IA medicale (donnees hospitalieres, drug discovery) -- Sanofi, Bayer, Roche",
        "Axe 3 : IA souveraine defense (LAWS, cyber, intelligence) -- Thales, Airbus, Rheinmetall",
        "Axe 4 : IA culturelle (langue, patrimoine, education) -- IRCAM, INA, Bibliotheque",
      ],
      warning: "Renoncer au rattrapage frontal generaliste. La specialisation est notre seule voie realiste.",
    },
  ],

  // ============================================================
  // 11. DRILLS
  // ============================================================
  drills: [
    {
      name: "Drill 'lecture souverainete cognitive'",
      duration: "4 semaines",
      instructions: [
        "Semaine 1 : Lire 'AI Superpowers' (Kai-Fu Lee) -- chapitres Chine",
        "Semaine 2 : Lire 'The Coming Wave' (Mustafa Suleyman) -- risques technologiques",
        "Semaine 3 : Lire les rapports Stanford AI Index + Metaculus AGI",
        "Semaine 4 : Rediger 1 page : que doit faire l'Europe demain matin ?",
      ],
      difficulty: 4,
    },
    {
      name: "Drill '2 minutes 5 chiffres'",
      duration: "10 jours, quotidien",
      instructions: [
        "Memoriser 5 chiffres cle : 109 Mds, 4.8 Mds, 400 TWh, 98% terres rares, 2027-2033 AGI",
        "Reciter chaque jour en 2 minutes avec contexte",
        "En fin de drill, defendre la these devant camera en incorporant les 5 chiffres",
      ],
      difficulty: 2,
    },
    {
      name: "Drill 'contradiction sur AI Act'",
      duration: "1 heure hebdo, 3 semaines",
      instructions: [
        "Preparer 5 arguments pro-AI Act et 5 arguments contre",
        "Se filmer en train de defendre chacun pendant 3 minutes",
        "Identifier lequel a le plus de tenue empirique",
        "Formuler sa propre position finale en 3 phrases",
      ],
      difficulty: 4,
    },
    {
      name: "Drill 'atelier scenario 2030'",
      duration: "2 heures, mensuel",
      instructions: [
        "Ecrire trois scenarios courts (500 mots) : Europe souveraine / Europe cliente / Europe fracturee",
        "Pour chaque, identifier la decision de 2026 qui a fait basculer",
        "Discuter avec un pair : quel scenario est le plus probable si rien ne change ?",
      ],
      difficulty: 3,
    },
  ],

  // ============================================================
  // 12. STRUCTURE RHETORIQUE (5 modes)
  // ============================================================
  structure: {
    rouge: {
      these: "L'Europe a construit un cadre reglementaire pour une industrie qu'elle ne possede pas, pendant que les USA compilent, que la Chine industrialise, et que nos entreprises perdent chaque jour un peu plus de leur souverainete cognitive. Ce n'est pas un retard, c'est une lachete strategique.",
      stats: [
        "109 Mds USD USA vs 4.8 Mds EUR Europe -- rapport 23:1",
        "98% terres rares importees, 99% OS americains, 100% dependance cognitive en preparation",
        "AI Act adopte AVANT emergence d'un ecosysteme europeen mature",
      ],
      cloture: "Ceux qui ratent une revolution industrielle passent le siecle suivant dans l'antichambre. Le siecle a commence.",
    },
    orange: {
      these: "L'urgence n'est pas dans 20 ans, elle est dans 5. L'AGI est estimee 2027-2033 par les acteurs eux-memes. Le cycle politique europeen se termine en 2029. La fenetre entre decision et impact est plus courte que jamais.",
      stats: [
        "AGI mediane Metaculus + Altman/Hassabis/Amodei : 2027-2033",
        "Delai moyen decision UE -> operationnel : 3-7 ans",
        "Chaque annee d'ecart de rythme entraine un decalage non-lineaire d'ecosysteme",
      ],
      cloture: "Chaque jour ou nous debattons pendant qu'ils compilent, l'ecart double.",
    },
    jaune: {
      these: "L'Europe possede des atouts uniques -- nucleaire francais, mathematiciens de rang mondial, donnees industrielles Airbus/Siemens/Sanofi, position juridique neutre. Le retard n'est pas dans les moyens, il est dans la mobilisation.",
      stats: [
        "400 TWh nucleaire francais bas carbone -- energie que les USA saturent deja",
        "Mistral 8x22B : performance GPT-4 pour 20x moins cher -- preuve de capacite",
        "65% Fortune 500 utilisent l'IA en production -- adoption entreprise deja passee",
      ],
      cloture: "L'Europe a le capital, les talents, les donnees, l'energie. Il ne lui manque qu'une chose : la volonte.",
    },
    vert: {
      these: "Il existe un chemin europeen : specialisation (IA industrielle + medicale + defense + culturelle), mobilisation de l'atout nucleaire (plan France 2030 datacenters), coalition Airbus (Mistral + Kyutai + LightOn + integrateurs), et sequence 'produire avant reguler'. Cela suppose une bascule strategique en 24 mois.",
      stats: [
        "Plan France 2030 datacenters : 2 GW mobilisables -- capacite pour 15-20 hyperscalers europeens",
        "Consortium industriel type Airbus : montage juridique connu, reussi, replicable",
        "AI Continent Plan annonce : 20 Mds -- a mettre en execution rapide et coordonnee",
      ],
      cloture: "Le prochain empire ne se batira pas sur les hydrocarbures. Il se batira sur les tokens. Il est temps d'en produire.",
    },
    bleu: {
      these: "Si l'AI Act nous protege, pourquoi Mistral s'inquiete-t-il ? Si l'open source suffit, pourquoi Llama coute-t-il 10 Mds/an a Meta ? Si l'Europe rattrapera par l'ethique, pourquoi les acheteurs mondiaux choisissent-ils la performance ?",
      stats: [
        "Les 3 PDG des 3 labos majeurs convergent : AGI 2027-2033",
        "Cout d'entrainement d'un modele de rang mondial : >100M USD -- l'open source ne suffit pas",
        "Historique GPT : chaque revolution a produit un hegemon (UK, USA, USA). Qui sera le prochain ?",
      ],
      cloture: "Avant de reguler l'IA du futur, l'Europe s'est-elle demandee si elle serait capable d'en produire une ?",
    },
  },

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    videos: [],
    debates: ["risques-existentiels", "science-abondance", "levee-friction", "droite-gauche"],
  },
};

if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["course-ia"] = CONTENT_DEBATES_course_ia;
