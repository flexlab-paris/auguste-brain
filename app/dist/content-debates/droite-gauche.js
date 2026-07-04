// /mindmap/content-debates/droite-gauche.js
// Fiche rhetorique profonde -- Debat "Droite vs Gauche -- Capitalisme et Redistribution"
// Voix : Auguste Pugnet + corpus polyphonique
// Source : data.js (debates, citations, posterData, fichesContent)

if (typeof CONTENT_DEBATES_REGISTRY === 'undefined') { var CONTENT_DEBATES_REGISTRY = {}; }

const CONTENT_DEBATES_droite_gauche = {
  id: "droite-gauche",
  slug: "droite-gauche-redistribution-efficace",
  title: "Droite vs Gauche -- Capitalisme et Redistribution",
  speaker: "Auguste Pugnet (corpus polyphonique)",
  format: "Debat structure - Fiche rhetorique",
  word_count: 8200,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "La France taxe comme la Suede, redistribue comme la Grece.",
  thesis: "Le debat n'est pas capitalisme OU redistribution, mais comment redistribuer efficacement. La France est deja au deuxieme rang OCDE des prelevements ; le probleme n'est pas la quantite d'impot mais la qualite de la depense et la confiance dans l'institution qui la manie.",
  key_takeaways: [
    "Sortir du faux binaire 'plus d'impot' vs 'moins d'etat' : la vraie question est le rendement social de l'euro depense",
    "43.2% de prelevements et 57% de depenses/PIB placent la France au sommet OCDE -- ajouter n'est plus une reforme, c'est une escalade",
    "9.1 millions de pauvres malgre 800 milliards d'aides sociales : le probleme n'est pas le montant, c'est le ciblage et la coordination",
    "Coefficient de Gini francais (0.32) meilleur que USA (0.39), pire que Danemark (0.26) : la redistribution marche, mais elle plafonne sans la confiance institutionnelle",
    "Le Danemark a 75% de confiance dans ses institutions, la France 30% : sans capital de confiance, chaque euro redistribue perd 30 a 50% de son efficience",
    "Flexicurite danoise : liberer le licenciement + securiser la personne. La France a fait l'inverse -- rigidifier l'emploi + fragiliser le chomeur",
    "Le vrai adversaire du pauvre francais n'est pas le riche, c'est le bureaucrate qui capture 40% de l'aide avant qu'elle n'atteigne le destinataire",
    "Refuser la redistribution est immoral. La refuser dans son execution actuelle est intelligent",
  ],

  // ============================================================
  // 2. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "Le debat capitalisme vs redistribution est mal pose : le probleme francais est un probleme d'efficience redistributive, pas de volume",
      children: [
        {
          claim: "La France a deja atteint la frontiere haute de la taxation dans l'OCDE",
          type: "premise",
          strength: 9,
          evidence: [
            "43.2% prelevements/PIB (2e OCDE derriere le Danemark)",
            "57% depenses publiques/PIB -- superieur a l'URSS tardive (50%)",
            "3300 milliards de dette publique, > 120% du PIB",
          ],
          children: [
            {
              claim: "Chaque nouveau point d'impot approche de la zone descendante de la courbe de Laffer",
              type: "premise",
              strength: 7,
              evidence: ["Elasticite fiscale des hauts revenus francais estimee entre 0.3 et 0.6"],
            },
            {
              claim: "ISF : 600 depots/an de riches, -40% de departs apres suppression 2018",
              type: "example",
              strength: 8,
              evidence: ["Rapport France Strategie 2020"],
            },
          ],
        },
        {
          claim: "La redistribution francaise est massive mais peu efficiente",
          type: "premise",
          strength: 9,
          evidence: [
            "9.1 millions de pauvres (14.4%) malgre 800 milliards d'aides sociales",
            "Cout de gestion sociale : 6.2% des transferts (contre 1% en Allemagne)",
            "Non-recours au RSA : 34% des ayants droit ne demandent pas",
          ],
          children: [
            {
              claim: "L'aide se dilue dans l'appareil bureaucratique avant d'atteindre le pauvre",
              type: "premise",
              strength: 7,
              evidence: ["Etudes Cour des comptes 2022 : 30-40% des transferts consommes par la gestion + non-recours"],
            },
            {
              claim: "Le mille-feuille administratif multiplie les guichets et cree des trappes a inactivite",
              type: "premise",
              strength: 8,
              evidence: ["Passage de RSA a salaire minimum : taux marginal effectif superieur a 80% pour certains menages"],
            },
          ],
        },
        {
          claim: "La confiance institutionnelle est le multiplicateur cache de la redistribution",
          type: "premise",
          strength: 9,
          evidence: [
            "Danemark : 75% confiance institutions, Gini 0.26",
            "France : 30% confiance institutions, Gini 0.32",
            "Correlation r=0.7 confiance/Gini dans OCDE (Rothstein 2011)",
          ],
          children: [
            {
              claim: "Sans confiance, chaque contribuable optimise, chaque beneficiaire soupconne, chaque euro fuit",
              type: "premise",
              strength: 8,
              evidence: ["Evasion + non-recours + fraude cumulent 5-8% du PIB en France"],
            },
            {
              claim: "La confiance ne se decrete pas : elle se construit par execution repetee et transparente",
              type: "premise",
              strength: 7,
              evidence: ["Danemark : reformes gagnant-gagnant tenues 30 ans sans virage brutal"],
            },
          ],
        },
        {
          claim: "Le modele danois (flexicurite) fournit une matrice imitable",
          type: "premise",
          strength: 8,
          evidence: [
            "Liberte de licencier + revenu de securite eleve + formation obligatoire",
            "Chomage 4.9% vs 7.3% France",
            "Mobilite intergenerationnelle 3 generations vs 6 en France",
          ],
          children: [
            {
              claim: "La France a fait le contraire : rigidification de l'emploi + fragilisation du chomeur",
              type: "example",
              strength: 7,
              evidence: ["Code du travail 3600 pages, reforme assurance chomage 2023"],
            },
          ],
        },
        {
          claim: "Le pauvre francais n'a pas besoin de plus d'aides -- il a besoin d'un ascenseur social qui remonte",
          type: "premise",
          strength: 8,
          evidence: [
            "L'ascenseur immobilise est un ascenseur qui insulte",
            "62% des Americains croient au merite vs 36% des Francais",
            "Chetty : USA a moins de mobilite absolue mais plus de sortie de precarite",
          ],
        },
        {
          claim: "L'opposition ideologique droite/gauche est un theatre qui masque le vrai enjeu : la competence executive de l'Etat",
          type: "premise",
          strength: 8,
          evidence: [
            "Vietnam communiste : 20% depenses/PIB, sortie de la pauvrete en 30 ans",
            "Suisse liberale : 34% depenses/PIB, meilleurs services d'Europe",
            "Le clivage droite/gauche n'explique ni le succes ni l'echec macroeconomique observe",
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
      text: "La France taxe comme la Suede, redistribue comme la Grece.",
      context: "Aphorisme d'ouverture -- diagnostic condense",
      tags: ["diagnostic", "comparaison", "efficience"],
      rhetorical_device: "aphorisme antithetique / paradoxe geographique",
      power_score: 10,
      chapter_idx: 1,
      highlight_words: ["taxe comme la Suede", "redistribue comme la Grece"],
    },
    {
      text: "Le probleme francais n'est pas le volume de la depense. C'est le rendement social de l'euro depense.",
      context: "Reframe du debat -- passage de la quantite a la qualite",
      tags: ["reframe", "efficience", "diagnostic"],
      rhetorical_device: "reframe / substitution de metrique",
      power_score: 9,
      chapter_idx: 1,
      highlight_words: ["rendement social"],
    },
    {
      text: "43% de prelevements, 57% de depenses, 120% de dette. Trois chiffres qui devraient clore le debat sur 'l'austerite'.",
      context: "Reponse a l'accusation d'austerite -- confrontation aux chiffres",
      tags: ["reponse", "chiffre", "populisme"],
      rhetorical_device: "regle de trois / tricolon chiffre",
      power_score: 9,
      chapter_idx: 2,
      highlight_words: ["43%", "57%", "120%"],
    },
    {
      text: "9.1 millions de pauvres malgre 800 milliards d'aides sociales. La question n'est plus 'combien' mais 'ou passe l'argent'.",
      context: "Attaque frontale de l'efficience -- deplacement de la question",
      tags: ["reponse", "efficience", "audit"],
      rhetorical_device: "concession + reprise / question deplacee",
      power_score: 10,
      chapter_idx: 2,
      highlight_words: ["9.1 millions", "800 milliards", "ou passe l'argent"],
    },
    {
      text: "Refuser la redistribution est immoral. La refuser dans son execution actuelle est intelligent.",
      context: "Position de synthese -- desamorce l'accusation liberale",
      tags: ["synthese", "steelman", "posture"],
      rhetorical_device: "double negation morale / distinction principle/execution",
      power_score: 10,
      chapter_idx: 3,
      highlight_words: ["immoral", "intelligent"],
    },
    {
      text: "Le vrai adversaire du pauvre francais n'est pas le riche. C'est le bureaucrate qui capture 40% de l'aide avant qu'elle ne l'atteigne.",
      context: "Renversement du narratif de classe -- deplacement de l'ennemi",
      tags: ["renversement", "narratif", "bureaucratie"],
      rhetorical_device: "renversement de bouc emissaire",
      power_score: 10,
      chapter_idx: 3,
      highlight_words: ["adversaire", "bureaucrate", "40%"],
    },
    {
      text: "Un pays qui taxe a 43% et laisse 9 millions de pauvres n'a pas un probleme de gauche ou de droite. Il a un probleme de competence.",
      context: "Cloture ideologique -- deplacement vers l'operationnel",
      tags: ["synthese", "competence", "post-ideologie"],
      rhetorical_device: "concession bilaterale / requalification",
      power_score: 9,
      chapter_idx: 4,
      highlight_words: ["competence"],
    },
    {
      text: "L'ascenseur social ne se casse pas par manque d'aides. Il se casse quand on demande a l'ascenseur de remonter sans jamais nettoyer la cage.",
      context: "Metaphore de la maintenance publique",
      tags: ["metaphore", "mobilite", "reforme"],
      rhetorical_device: "metaphore etendue / analogie technique",
      power_score: 8,
      chapter_idx: 4,
      highlight_words: ["ascenseur", "nettoyer la cage"],
    },
    {
      text: "Le Danemark n'a pas reussi parce qu'il est de gauche. Il a reussi parce qu'il est fiable.",
      context: "Deconstruction du mythe scandinave -- deplacement causal",
      tags: ["comparaison", "confiance", "danemark"],
      rhetorical_device: "distinguo causal",
      power_score: 9,
      chapter_idx: 5,
      highlight_words: ["fiable"],
    },
    {
      text: "La flexicurite, ce n'est pas de la magie. C'est un contrat : je peux te licencier facilement, mais je te paie un vrai chomage et je te forme.",
      context: "Explication concrete du modele danois",
      tags: ["flexicurite", "contrat", "modele"],
      rhetorical_device: "definition operationnelle / demystification",
      power_score: 8,
      chapter_idx: 5,
      highlight_words: ["contrat"],
    },
    {
      text: "Vietnam communiste : 20% de depenses publiques et sortie de la pauvrete. Suisse liberale : 34% et meilleurs services d'Europe. La France : 57% et 9 millions de pauvres. Cherchez l'erreur.",
      context: "Comparaison tripartite -- destruction du clivage droite/gauche",
      tags: ["comparaison", "chiffre", "ideologie"],
      rhetorical_device: "syllogisme comparatif / juxtaposition demonstrative",
      power_score: 10,
      chapter_idx: 5,
      highlight_words: ["Vietnam", "Suisse", "France"],
    },
    {
      text: "Taxer plus quand on brule deja mal ce qu'on a, ce n'est pas de la justice sociale. C'est de la fuite en avant morale.",
      context: "Reponse aux propositions de nouvelle taxe",
      tags: ["reponse", "justice", "fuite-en-avant"],
      rhetorical_device: "requalification morale / ironie",
      power_score: 9,
      chapter_idx: 2,
      highlight_words: ["fuite en avant morale"],
    },
    {
      text: "La confiance institutionnelle est le multiplicateur cache de la fiscalite. Sans confiance, chaque euro d'impot perd 30% en route.",
      context: "Introduction du concept de multiplicateur social",
      tags: ["confiance", "efficience", "multiplicateur"],
      rhetorical_device: "concept operatoire / economie behaviorale",
      power_score: 9,
      chapter_idx: 3,
      highlight_words: ["multiplicateur cache", "30%"],
    },
    {
      text: "Vous voulez que je paie plus ? Montrez-moi d'abord comment vous depensez. Je ne signe pas de cheque en blanc, meme au nom de la solidarite.",
      context: "Position de contribuable exigeant -- responsabilisation du depenseur",
      tags: ["contribuable", "audit", "responsabilite"],
      rhetorical_device: "conditionnalite / retournement de la charge",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["cheque en blanc", "solidarite"],
    },
    {
      text: "Il n'y a pas de generosite dans un impot qu'on ne peut pas refuser. Il n'y a que de la gestion. Et une gestion, ca se juge sur ses resultats.",
      context: "Distinction generosite/gestion -- attaque de la vertu affichee",
      tags: ["ethique", "impot", "resultat"],
      rhetorical_device: "distinguo semantique / retour au principe de realite",
      power_score: 8,
      chapter_idx: 6,
      highlight_words: ["generosite", "gestion", "resultats"],
    },
    {
      text: "The problem with socialism is that you eventually run out of other people's money.",
      context: "Citation Thatcher -- limite mathematique de la redistribution",
      tags: ["citation", "thatcher", "limite"],
      rhetorical_device: "citation d'autorite / aphorisme celebre",
      power_score: 9,
      chapter_idx: 2,
      highlight_words: ["other people's money"],
    },
    {
      text: "Les idiots apprennent de leur experience. Les gens intelligents apprennent de l'experience des autres.",
      context: "Citation Bismarck -- appel a l'observation des modeles etrangers",
      tags: ["citation", "bismarck", "meta-apprentissage"],
      rhetorical_device: "citation d'autorite historique",
      power_score: 9,
      chapter_idx: 5,
      highlight_words: ["idiots", "intelligents"],
    },
    {
      text: "Un pays ne devient pas prospere en punissant ses producteurs. Il le devient en rendant productif ce qui ne l'etait pas.",
      context: "Reframe positif de la politique economique",
      tags: ["reframe", "productivite", "prosperite"],
      rhetorical_device: "chiasme / opposition binaire",
      power_score: 8,
      chapter_idx: 6,
      highlight_words: ["punissant", "productif"],
    },
    {
      text: "L'egalite reelle n'est pas l'egalite des points d'arrivee. C'est l'egalite du droit de partir.",
      context: "Definition minimale de l'egalite republicaine",
      tags: ["egalite", "opportunite", "definition"],
      rhetorical_device: "distinguo definitoire / rappel republicain",
      power_score: 9,
      chapter_idx: 4,
      highlight_words: ["droit de partir"],
    },
    {
      text: "Le seul impot legitime, c'est celui dont on peut prouver le rendement. Le reste, c'est de la confiscation ceremonielle.",
      context: "Principe fiscal minimal -- exigence de traceabilite",
      tags: ["principe", "traceabilite", "legitimite"],
      rhetorical_device: "definition operatoire / attaque semantique",
      power_score: 9,
      chapter_idx: 6,
      highlight_words: ["rendement", "confiscation ceremonielle"],
    },
    {
      text: "Ce n'est pas parce qu'on aime les pauvres qu'on doit haïr les riches. Et ce n'est pas parce qu'on defend les riches qu'on abandonne les pauvres.",
      context: "Position anti-manicheisme -- refus du clivage",
      tags: ["synthese", "anti-manicheisme", "posture"],
      rhetorical_device: "double negation / desamorcage moral",
      power_score: 8,
      chapter_idx: 6,
      highlight_words: ["aimer", "haïr", "defendre"],
    },
    {
      text: "La grandeur d'un pays ne se mesure pas a combien il prend, mais a combien il batit avec ce qu'il a.",
      context: "Cloture -- deplacement de la metrique de succes",
      tags: ["cloture", "grandeur", "construction"],
      rhetorical_device: "chiasme final / aphorisme moral",
      power_score: 10,
      chapter_idx: 6,
      highlight_words: ["batit", "prend"],
    },
  ],

  // ============================================================
  // 4. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "'Vous defendez les riches contre les pauvres'",
        response: "Reframer : la question n'est pas riche/pauvre mais efficience de l'euro depense pour le pauvre",
        technique: "Reframe / renversement d'intention",
        example_response_text: "Je defends le pauvre francais qui recoit 60 centimes sur chaque euro qu'on lui envoie, contre l'appareil qui capture les 40 autres. Si defendre l'efficience est defendre les riches, alors defendre l'inefficience c'est defendre les fonctionnaires -- pas les pauvres.",
      },
      {
        challenge: "'Les pays scandinaves prouvent que taxer plus, ca marche'",
        response: "Rappeler la variable manquante : la confiance institutionnelle",
        technique: "Ajout de variable / correlation partielle",
        example_response_text: "Le Danemark a 75% de confiance dans ses institutions, la France 30%. Sans ce capital, chaque euro d'impot perd 30 a 50% en route. Copier la fiscalite scandinave sans la confiance scandinave, c'est copier la carrosserie sans le moteur.",
      },
      {
        challenge: "'La France est un pays inegalitaire'",
        response: "Confronter les chiffres reels du Gini et de la redistribution",
        technique: "Correction empirique",
        example_response_text: "Coefficient de Gini francais : 0.32. USA : 0.39. Allemagne : 0.30. La France est dans la moyenne haute des pays egalitaires. Le probleme n'est pas l'inegalite de niveau mais l'inegalite de mobilite : 6 generations pour sortir de la pauvrete contre 3 au Danemark.",
      },
      {
        challenge: "'Vous refusez toute redistribution'",
        response: "Assumer la redistribution comme principe, contester l'execution",
        technique: "Distinguo principe/execution",
        example_response_text: "Je defends la redistribution. Je conteste sa version francaise. Ce n'est pas la meme chose. Refuser la redistribution est immoral. La refuser dans son execution actuelle est intelligent. Les deux positions ne se recouvrent pas.",
      },
      {
        challenge: "'Vous voulez privatiser la solidarite'",
        response: "Retourner : la solidarite d'Etat n'est solidaire que si elle marche",
        technique: "Retournement moral",
        example_response_text: "Une solidarite qui laisse 9 millions de pauvres malgre 800 milliards, c'est une solidarite ceremonielle, pas une solidarite reelle. Je ne veux pas privatiser la solidarite -- je veux qu'elle atteigne le destinataire.",
      },
      {
        challenge: "'La courbe de Laffer, c'est de la propagande liberale'",
        response: "Rappeler les 4 echecs de l'ISF",
        technique: "Empirisme historique",
        example_response_text: "L'ISF a ete teste en Norvege, Espagne, Suisse et France. Il rapporte moins de 0.5% du PIB partout. Ce n'est pas une opinion, c'est une donnee. Peu importe le nom qu'on donne a la courbe, les faits sont la : au-dela d'un seuil, l'assiette fuit plus vite que le taux ne monte.",
      },
    ],
    how_to_attack: [
      {
        target_claim: "'Il suffit de mieux depenser pour resoudre le probleme social'",
        attack: "Le 'mieux depenser' n'est pas un plan, c'est un slogan. Sans reforme institutionnelle profonde (confiance, mille-feuille, guichet unique), l'efficience ne bouge pas.",
        angle: "Logique / operationnel",
      },
      {
        target_claim: "'La flexicurite danoise est transposable'",
        attack: "Elle presuppose 75% de confiance institutionnelle. La France est a 30%. Sans passage prealable de la confiance de 30 a 60, la flexicurite se transforme en flex sans curite.",
        angle: "Institutionnel",
      },
      {
        target_claim: "'Le pauvre francais recoit trop peu'",
        attack: "Il recoit peu parce que la chaine de transmission absorbe. Ajouter du volume en amont n'augmente pas ce qui arrive en aval. La reforme est aval, pas amont.",
        angle: "Systemique",
      },
      {
        target_claim: "'La confiance se construit par la redistribution'",
        attack: "L'inverse est plus vrai : la confiance rend la redistribution possible. Sans confiance prealable, chaque redistribution alimente le soupcon, la fraude, l'evasion. Le Danemark a construit la confiance en 100 ans avant sa social-democratie -- pas l'inverse.",
        angle: "Historique / causal",
      },
      {
        target_claim: "'Le liberalisme francais est deja triomphant'",
        attack: "43% de prelevements et 57% de depenses publiques ne caracterisent aucun liberalisme au monde. Nommer 'liberal' un pays au-dessus du niveau de depense de l'URSS tardive est un abus de langage.",
        angle: "Semantique / empirique",
      },
    ],
    how_to_rephrase: [
      {
        original: "La France taxe comme la Suede, redistribue comme la Grece.",
        softer: "Nous avons un niveau de prelevement scandinave sans en avoir les resultats sociaux.",
        harder: "On a le poids fiscal de la Suede et l'efficacite sociale de la Grece. Beau pays.",
        academic: "Le decouplage entre pression fiscale et rendement social place la France dans une categorie atypique de l'OCDE : haute intensite fiscale, faible efficience redistributive.",
      },
      {
        original: "Le vrai adversaire du pauvre francais n'est pas le riche, c'est le bureaucrate.",
        softer: "L'appareil administratif absorbe une part significative de l'aide destinee aux plus fragiles.",
        harder: "Le vrai racket sur les pauvres n'est pas paye par les riches. Il est paye par le mille-feuille.",
        academic: "La chaine de transmission bureaucratique absorbe entre 30 et 40% des transferts destines aux beneficiaires precaires, ce qui constitue la variable dominante de la sous-performance redistributive francaise.",
      },
      {
        original: "Refuser la redistribution est immoral. La refuser dans son execution actuelle est intelligent.",
        softer: "Il faut distinguer le principe de la redistribution -- qu'on peut soutenir -- de ses modalites actuelles, qu'on peut critiquer.",
        harder: "Ceux qui refusent la redistribution sont des barbares. Ceux qui refusent d'auditer son execution sont des complices.",
        academic: "L'adhesion au principe redistributif n'exempte pas d'une critique rigoureuse de son architecture operationnelle, laquelle determine seule son efficience reelle.",
      },
      {
        original: "Un pays qui taxe a 43% et laisse 9 millions de pauvres n'a pas un probleme de droite ou de gauche. Il a un probleme de competence.",
        softer: "L'ampleur des ecarts entre effort fiscal et resultat social suggere que le clivage ideologique n'est pas la bonne grille de lecture.",
        harder: "Quand tu prends 43% et que 9 millions de gens crevent quand meme, tu n'as pas un probleme d'ideologie. Tu as un probleme d'incompetence.",
        academic: "La dissociation empirique entre pression fiscale et resultat social suggere que la variable causale explicative reside dans la qualite executive de l'Etat plutot que dans son orientation politique.",
      },
      {
        original: "La grandeur d'un pays ne se mesure pas a combien il prend, mais a combien il batit avec ce qu'il a.",
        softer: "Ce qui compte, ce n'est pas le montant collecte, c'est ce qui est construit avec.",
        harder: "Un pays qui ne juge son etat que sur ce qu'il prend est un pays qui a deja renonce a batir.",
        academic: "La performance d'une puissance publique se mesure a son ratio d'output infrastructurel et social par euro preleve, non a sa capacite bruye de mobilisation fiscale.",
      },
    ],
    if_asked: [
      {
        question: "Etes-vous pour ou contre la redistribution ?",
        best_response: "Pour, sans hesitation. Mais la redistribution est un moyen, pas une fin. Le principe est intangible, l'execution est perfectible. Quand 800 milliards laissent 9 millions de pauvres, on peut soutenir le principe et exiger l'audit.",
        followup_moves: ["Preciser la distinction principe/execution", "Rappeler les 30-40% capture bureaucratique", "Renvoyer sur les modeles Danemark/Vietnam"],
      },
      {
        question: "Faut-il taxer plus les riches ?",
        best_response: "Il faut taxer intelligemment. La question 'plus' est mal posee : la France est deja au 2e rang OCDE. La bonne question est : quelle base fiscale ne peut pas fuir ? La consommation ostentatoire, l'immobilier, la finance a haute frequence -- oui. Le patrimoine mobile -- l'ISF a prouve 4 fois que non.",
        followup_moves: ["Rappeler les 4 ISF echoues", "Proposer taxe Tobin, TVA luxe", "Distinguer flux vs stock"],
      },
      {
        question: "Le modele scandinave est-il transposable ?",
        best_response: "La fiscalite oui, la confiance non. Le Danemark a 75% de confiance dans ses institutions, la France 30%. Sans importer d'abord la confiance -- ce qui prend une generation -- on importe la charge sans la contrepartie. La flexicurite sans confiance devient flex sans curite.",
        followup_moves: ["Detailler les mesures de confiance", "Rappeler que la confiance danoise precede la social-democratie", "Comparer avec l'echec des importations Beveridge"],
      },
      {
        question: "Que faites-vous des 9 millions de pauvres ?",
        best_response: "Trois leviers : guichet unique (fusion CAF/RSA/APL), automatisation de la demande (fin du non-recours), et remonte de l'ascenseur social par l'emploi (activation, formation, mobilite). Ce n'est pas moins d'aide, c'est de l'aide qui arrive. Les 800 milliards depenses aujourd'hui peuvent en couvrir la reforme.",
        followup_moves: ["Detailler la fusion des guichets", "Chiffrer le non-recours (34% RSA)", "Rappeler la flexicurite danoise"],
      },
      {
        question: "N'est-ce pas un discours de riche pour riche ?",
        best_response: "Non. C'est un discours pour un pauvre francais qui recoit 60 centimes quand on lui envoie 1 euro. Defendre l'efficience, c'est defendre le pauvre contre l'appareil qui le represente symboliquement en le trahissant operationnellement. Le riche, lui, a deja optimise ou emigre. Le pauvre attend.",
        followup_moves: ["Rappeler que les riches ont deja quitte", "Chiffrer la capture bureaucratique", "Retourner l'accusation morale"],
      },
      {
        question: "Le liberalisme n'a-t-il pas tue les services publics ?",
        best_response: "En France, aucun liberalisme n'a jamais atteint le pouvoir. Nous sommes a 57% de depenses publiques -- superieur a l'URSS tardive. Accuser le liberalisme d'un echec observe dans un des pays les plus etatises du monde, c'est comme accuser la secheresse d'une inondation. Le probleme est la qualite de la depense, pas son absence.",
        followup_moves: ["Rappeler le chiffre 57%", "Comparer avec URSS, Suisse, USA", "Distinguer liberalisme culturel et economique"],
      },
      {
        question: "Comment justifier de defendre les riches ?",
        best_response: "Je ne defends pas les riches, je defends l'assiette fiscale mobile. Chaque riche parti est un montant d'impot qui manque et des emplois qui suivent. Retenir les producteurs de valeur n'est pas de l'idolatrie, c'est de la comptabilite nationale. Le Danemark le sait : leur IS est de 22%, pas de 33%.",
        followup_moves: ["Rappeler les 600 depots ISF/an avant 2018", "Comparer IS France/Danemark/Irlande", "Distinguer patrimoine et flux"],
      },
    ],
  },

  // ============================================================
  // 5. FALLACIES & NUANCES
  // ============================================================
  fallacies: [
    {
      original_claim: "'Il faut taxer plus les riches pour financer les pauvres'",
      fallacy_type: "faux dilemme + saut logique",
      why_fallacious: "Le raisonnement suppose que (1) taxer plus = collecter plus (courbe de Laffer ignoree), et (2) collecter plus = pauvre servi plus (chaine de transmission ignoree). Deux presupposes empiriquement faux.",
      steelman: "L'intuition morale est puissante : ceux qui ont beaucoup peuvent donner plus, et cela reduit l'ecart. La proposition energise l'electorat parce qu'elle articule un principe elementaire de justice distributive.",
      nuance: "Vrai : les inegalites de patrimoine se sont creusees et une contribution ciblee est legitime. Faux : le seul levier disponible est la hausse d'un taux marginal, deja parmi les plus hauts OCDE.",
      counter_argument: "La France taxe deja a 43.2% (2e OCDE). L'ISF a rapporte <0.5% PIB en Norvege, Espagne, Suisse. La fuite d'assiette compense la hausse de taux. La bonne strategie est de taxer ce qui ne peut pas fuir (immobilier, consommation ostentatoire), pas de repeter une erreur historique.",
      severity: "high",
    },
    {
      original_claim: "'La France est un pays ultra-liberal'",
      fallacy_type: "affirmation contre-factuelle",
      why_fallacious: "Aucune definition rigoureuse du liberalisme economique n'inclut un pays a 57% de depenses publiques/PIB et 43% de prelevements. C'est un abus semantique.",
      steelman: "Certaines dereglementations (marche du travail, telecoms, transports) ont ete effectuees et ont eu des effets sociaux. La perception de 'liberalisation' correspond a une realite locale et sectorielle.",
      nuance: "Vrai : certains secteurs ont ete liberalises et ont produit du desordre social non compense. Faux : le pays dans son ensemble reste dans le top 5 mondial des etats-providence les plus interventionnistes.",
      counter_argument: "Le pays le plus liberal d'Europe (Suisse) a 34% de depenses/PIB. Nous en avons 57%. Nommer le second 'ultra-liberal' releve d'un lexique politique detache de toute comparaison internationale.",
      severity: "high",
    },
    {
      original_claim: "'Si on baisse les impots, les riches accumulent et les pauvres perdent'",
      fallacy_type: "somme nulle / zero-sum fallacy",
      why_fallacious: "Presuppose que la richesse est un stock fixe : ce qui n'est pas preleve sur le riche est perdu pour le pauvre. Empiriquement faux : la richesse est un flux dependant de l'investissement, de l'emploi, de la productivite.",
      steelman: "Dans un horizon court, les baisses d'impot mal calibrees peuvent ne pas ruisseler : Reagan 1981, tax cuts Trump 2017 ont produit des rendements sociaux discutables.",
      nuance: "Vrai : le 'ruissellement' est souvent survendu et jamais garanti. Faux : la richesse est un flux, non un stock. Le retenir en France a plus d'effet que le prelever une fois avant fuite.",
      counter_argument: "Depuis la suppression de l'ISF en 2018, les depots de riches ont baisse de 40%, l'investissement productif capte a rebondi, et les recettes fiscales globales ont augmente. Le stock n'a pas ete redistribue mais le flux s'est reoriente.",
      severity: "medium",
    },
    {
      original_claim: "'Les scandinaves prouvent qu'on peut taxer beaucoup et bien vivre'",
      fallacy_type: "cherry picking + variable omise",
      why_fallacious: "Compare la fiscalite scandinave et la fiscalite francaise en ignorant la variable dominante : la confiance institutionnelle, qui multiplie ou divise l'efficience d'un euro preleve.",
      steelman: "Il est vrai qu'un modele social genereux peut coexister avec une economie performante. La preuve empirique existe -- Danemark, Suede, Finlande -- et merite d'etre etudiee.",
      nuance: "Vrai : le modele scandinave marche localement. Faux : sa transposition mecanique ne fonctionne pas hors de son ecosysteme culturel-institutionnel.",
      counter_argument: "La confiance institutionnelle est de 75% au Danemark vs 30% en France. Sans importer d'abord la confiance -- ce qui prend une generation -- on importe la charge sans le multiplicateur. Beveridge a echoue en France pour la meme raison.",
      severity: "high",
    },
    {
      original_claim: "'Les riches partent, c'est un chantage'",
      fallacy_type: "moralisation d'un fait empirique",
      why_fallacious: "Requalifie un comportement rationnel (optimisation fiscale legale) en accusation morale (chantage), evitant ainsi le probleme empirique de la mobilite du capital.",
      steelman: "Il est desagreable de constater que ceux qui ont le plus profite d'une nation puissent la quitter au moment d'y contribuer davantage. L'indignation est humainement comprehensible.",
      nuance: "Vrai : la mobilite fiscale creuse un sentiment d'injustice reel. Faux : traiter d'un chantage un comportement legalement autorise ne resout rien -- il faut soit changer la loi (imperialisme fiscal a l'americaine), soit changer l'incitatif.",
      counter_argument: "600 depots par an sous l'ISF, -40% apres suppression. Le fait empirique est mesure. Le traiter comme un chantage moralise sans rien resoudre. Le taxer intelligemment (immobilier, consommation) enleve le choix du depart tout en collectant.",
      severity: "medium",
    },
    {
      original_claim: "'La solidarite s'evalue au montant preleve, pas au resultat'",
      fallacy_type: "confusion input/output",
      why_fallacious: "Evalue une politique publique par son effort (montant preleve) plutot que par son resultat (pauvres reellement sortis de la pauvrete). Confusion classique input/output.",
      steelman: "L'evaluation strictement resultative peut sous-estimer les effets de long terme (education, prevention sante) dont les benefices n'apparaissent qu'a 20 ans.",
      nuance: "Vrai : certains transferts ont des effets differes non mesurables a court terme. Faux : cela ne dispense pas d'evaluer l'efficience des transferts a effet direct (RSA, APL), qui pesent 400 Mds/an.",
      counter_argument: "Une politique se juge sur ses resultats. 800 Mds d'aides et 9.1 millions de pauvres, c'est un ratio efficience de 0.11 pauvre sorti pour 10 Mds engages. Ce n'est pas de la solidarite, c'est de la ceremonie.",
      severity: "high",
    },
    {
      original_claim: "'La bureaucratie est le prix de la protection'",
      fallacy_type: "faux equilibre / justification par le necessaire",
      why_fallacious: "Assimile toute bureaucratie a une protection, ce qui rend inaudible la question de son calibrage. Une bureaucratie peut proteger a marge decroissante, voire negative.",
      steelman: "Il est vrai qu'un Etat social nomme suppose des institutions de gestion. Zero bureaucratie = zero protection. Le point est raisonnable.",
      nuance: "Vrai : une administration est necessaire. Faux : sa taille et sa complexite actuelles depassent le point de rendement decroissant. La courbe protection/bureaucratie a un optimum, qu'on a manifestement depasse.",
      counter_argument: "L'Allemagne assure une protection sociale comparable avec 1% de couts de gestion contre 6.2% en France. Ce n'est pas la bureaucratie qui protege, c'est la bureaucratie calibree. Au-dela d'un seuil, elle ne protege plus, elle se protege elle-meme.",
      severity: "medium",
    },
    {
      original_claim: "'Le liberalisme cree l'inegalite'",
      fallacy_type: "correlation causale + ellipse historique",
      why_fallacious: "Impute a une doctrine (liberalisme) un phenomene (inegalite) sans distinguer les differentes formes de liberalisme et sans comparer aux societes non-liberales pre-modernes.",
      steelman: "Certains liberalismes derives (financiarisation, crony capitalism) ont documente une hausse des inegalites : USA post-1980, UK post-Thatcher.",
      nuance: "Vrai : certains modeles liberaux mal regules ont concentre la richesse. Faux : le liberalisme au sens large (Etat de droit, marches ouverts) a produit la plus grande extraction historique de pauvrete de l'humanite (1990-2020 : -1.2 Md pauvres).",
      counter_argument: "Vietnam a reduit sa pauvrete de 60% a 3% en 30 ans en s'ouvrant a l'economie de marche. Chine idem. Nier la relation entre marche et sortie de la pauvrete revient a ignorer la donnee historique la plus massive du XXe siecle finissant.",
      severity: "medium",
    },
    {
      original_claim: "'Sans redistribution, la societe s'effondre'",
      fallacy_type: "pente glissante + faux dilemme",
      why_fallacious: "Presente un choix binaire entre 'redistribution actuelle' et 'aucune redistribution', ignorant l'espace des redistributions differemment calibrees.",
      steelman: "Historiquement, l'absence totale de mecanisme de redistribution a coincide avec des periodes d'instabilite grave (revolutions, guerres civiles). L'intuition est fondee.",
      nuance: "Vrai : une societe sans mecanisme social se fracture. Faux : le choix n'est pas entre 800 Mds et 0, mais entre 800 Mds mal distribues et 800 Mds bien distribues, voire 700 Mds mieux distribues.",
      counter_argument: "Personne ne propose zero redistribution. La question est le calibrage et l'efficience. Le Danemark redistribue autant que la France avec de meilleurs resultats. La question n'est pas 'redistribuer ou non' -- elle est reglee -- c'est 'comment'.",
      severity: "medium",
    },
  ],

  // ============================================================
  // 6. STATS & INFOGRAPHICS
  // ============================================================
  stats: [
    {
      number: "43.2%",
      label: "Prelevements obligatoires / PIB, France (2e OCDE)",
      source: "OCDE Revenue Statistics 2024",
      context: "Point de saturation fiscale -- toute hausse marginale approche la zone Laffer descendante",
      visual: "bar",
    },
    {
      number: "57%",
      label: "Depenses publiques / PIB, France (record OCDE)",
      source: "Eurostat / INSEE 2024",
      context: "Superieur a l'URSS tardive (50%), superieur a la Suede (49%) et au Danemark (49%)",
      visual: "bar",
    },
    {
      number: "9.1M",
      label: "Personnes sous seuil de pauvrete (14.4% population)",
      source: "INSEE 2024 (seuil 60% mediane)",
      context: "Malgre 800 Mds EUR/an d'aides sociales -- ratio efficience discutable",
      visual: "count-up",
    },
    {
      number: "800 Mds",
      label: "Depenses sociales annuelles (protection + aide + retraite)",
      source: "DREES 2024",
      context: "Environ 34% du PIB -- plus haut niveau OCDE",
      visual: "count-up",
    },
    {
      number: "34%",
      label: "Non-recours au RSA (Francais eligibles non demandeurs)",
      source: "DREES 2023",
      context: "Perte seche d'efficience : l'aide existe mais n'atteint pas",
      visual: "percent",
    },
    {
      number: "6.2%",
      label: "Cout de gestion / transferts sociaux, France",
      source: "Cour des comptes 2022",
      context: "Contre ~1% en Allemagne -- surcharge bureaucratique francaise",
      visual: "comparison",
    },
    {
      number: "0.32",
      label: "Coefficient de Gini France (post-redistribution)",
      source: "OCDE Income Distribution Database 2024",
      context: "Danemark 0.26 / USA 0.39 -- position intermediaire",
      visual: "comparison",
    },
    {
      number: "30% vs 75%",
      label: "Confiance institutionnelle France vs Danemark",
      source: "OECD Trust Survey 2024",
      context: "Variable dominante d'efficience redistributive selon Rothstein 2011",
      visual: "comparison",
    },
    {
      number: "600/an",
      label: "Depots ISF avant 2018 (-40% apres suppression)",
      source: "Rapport France Strategie 2020",
      context: "Elasticite fiscale des hauts patrimoines mesuree empiriquement",
      visual: "count-up",
    },
    {
      number: "6 vs 3",
      label: "Generations pour sortir de la pauvrete, France vs Danemark",
      source: "OCDE A Broken Social Elevator 2018",
      context: "L'ascenseur social francais est deux fois plus lent",
      visual: "comparison",
    },
    {
      number: "36% vs 62%",
      label: "Francais vs Americains croyant au merite",
      source: "PewResearch Global Attitudes 2023",
      context: "Ecart de conviction meritocratique -- effet auto-realisateur documente",
      visual: "comparison",
    },
    {
      number: "3300 Mds",
      label: "Dette publique francaise (>120% PIB)",
      source: "INSEE / AFT 2024",
      context: "Toute nouvelle depense s'ajoute a une charge d'interet deja de 50 Mds/an",
      visual: "count-up",
    },
  ],

  // ============================================================
  // 7. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "France vs Danemark : effort vs efficience",
      left: {
        label: "France",
        items: [
          "43.2% prelevements / PIB",
          "57% depenses / PIB",
          "9.1M pauvres (14.4%)",
          "30% confiance institutions",
          "Gini 0.32",
          "6 generations sortie de pauvrete",
        ],
      },
      right: {
        label: "Danemark",
        items: [
          "46% prelevements / PIB",
          "49% depenses / PIB",
          "1.5M pauvres equivalent (12%)",
          "75% confiance institutions",
          "Gini 0.26",
          "3 generations sortie de pauvrete",
        ],
      },
    },
    {
      title: "Rigidification francaise vs Flexicurite danoise",
      left: {
        label: "France (rigide)",
        items: [
          "Code du travail 3600 pages",
          "Licenciement difficile",
          "Chomage 7.3%",
          "Formation professionnelle sous-utilisee",
          "Retour a l'emploi RSA : 34% a 7 ans",
        ],
      },
      right: {
        label: "Danemark (flexicurite)",
        items: [
          "Licenciement facile",
          "Indemnisation elevee",
          "Chomage 4.9%",
          "Formation obligatoire pour les chomeurs",
          "Retour a l'emploi : 76% en 1 an",
        ],
      },
    },
    {
      title: "Etats-providence performants : trois modeles differents",
      left: {
        label: "Modele nordique (Danemark)",
        items: [
          "49% depenses publiques",
          "IS 22% (attractif)",
          "Marche du travail flexible",
          "Confiance elevee",
          "Redistribution efficace",
        ],
      },
      right: {
        label: "Modele confederal (Suisse)",
        items: [
          "34% depenses publiques",
          "IS 8-21% selon canton",
          "Marche du travail tres flexible",
          "Confiance elevee",
          "Services publics excellents",
        ],
      },
    },
    {
      title: "Ideologie vs Resultat : trois pays sortis de la pauvrete",
      left: {
        label: "Depense publique / PIB",
        items: [
          "Vietnam (communiste officiel) : 20%",
          "Suisse (liberal-conservatrice) : 34%",
          "France (mixte) : 57%",
        ],
      },
      right: {
        label: "Trajectoire sociale",
        items: [
          "Vietnam : sortie de la pauvrete en 30 ans",
          "Suisse : plus hauts revenus mondiaux",
          "France : 9.1 millions de pauvres",
        ],
      },
    },
    {
      title: "Ce qui fuit vs Ce qui ne fuit pas (assiette fiscale)",
      left: {
        label: "Fuit (echec ISF)",
        items: [
          "Patrimoine mobile",
          "Revenus internationaux",
          "Talents nomades",
          "Capital financier",
        ],
      },
      right: {
        label: "Ne fuit pas (taxable)",
        items: [
          "Immobilier de luxe",
          "Consommation ostentatoire",
          "Transactions financieres a haute frequence (Tobin)",
          "Successions bien calibrees",
        ],
      },
    },
  ],

  // ============================================================
  // 8. RHETORICAL DEVICES
  // ============================================================
  devices: [
    {
      name: "Chiasme geographique",
      example_text: "La France taxe comme la Suede, redistribue comme la Grece.",
      effect: "Encapsule un diagnostic complexe en 8 mots memorables",
      why_it_works: "Deux modeles europeens familiers, mis en position croisee. Le contraste fait rire et retenir avant meme le raisonnement.",
    },
    {
      name: "Tricolon chiffre",
      example_text: "43% de prelevements. 57% de depenses. 120% de dette.",
      effect: "Ecrase toute contestation par accumulation factuelle",
      why_it_works: "Trois chiffres officiels difficilement contestables, prononces en rythme croissant. L'accumulation semble irrefutable.",
    },
    {
      name: "Renversement du bouc emissaire",
      example_text: "Le vrai adversaire du pauvre n'est pas le riche, c'est le bureaucrate.",
      effect: "Deplace la cible sans nier la souffrance",
      why_it_works: "Reconnait la victime tout en substituant l'agresseur. Le pauvre est valide, mais l'ennemi designe change de nom.",
    },
    {
      name: "Concession-reprise",
      example_text: "Refuser la redistribution est immoral. La refuser dans son execution actuelle est intelligent.",
      effect: "Desamorce l'accusation liberale tout en preservant la critique",
      why_it_works: "L'orateur accepte 90% du terrain moral adverse pour mieux couper le dernier 10% qui l'interesse.",
    },
    {
      name: "Question deplacee",
      example_text: "Ne demandez plus 'combien'. Demandez 'ou passe l'argent'.",
      effect: "Refocalise le debat sur le terrain choisi",
      why_it_works: "Redirige l'attention hors de la question originelle (le volume) vers une question ou l'orateur a l'avantage empirique (la chaine de transmission).",
    },
    {
      name: "Metaphore de l'ascenseur",
      example_text: "L'ascenseur social ne se casse pas par manque d'aides. Il se casse quand on demande a l'ascenseur de remonter sans jamais nettoyer la cage.",
      effect: "Traduit un probleme systemique en image mecanique",
      why_it_works: "Ascenseur = mobilite. Nettoyer la cage = reforme institutionnelle. L'image contient tout le raisonnement.",
    },
    {
      name: "Autorite historique",
      example_text: "Bismarck : les idiots apprennent de leur experience, les intelligents apprennent de celle des autres.",
      effect: "Legitime l'appel a la comparaison internationale",
      why_it_works: "Une figure historique classique legitime une methode (le benchmark) contre les objections d'exceptionnalisme francais.",
    },
    {
      name: "Syllogisme comparatif",
      example_text: "Vietnam 20%, Suisse 34%, France 57%. Cherchez l'erreur.",
      effect: "Detruit le clivage droite/gauche par juxtaposition",
      why_it_works: "Trois cas ideologiquement opposes juxtaposes montrent que la variable ideologique n'est pas la variable causale.",
    },
    {
      name: "Requalification morale",
      example_text: "Il n'y a pas de generosite dans un impot qu'on ne peut pas refuser.",
      effect: "Enleve la charge morale de son adversaire",
      why_it_works: "Distingue vertu volontaire et prelevement force. L'auditeur reconnait le distinguo intuitivement.",
    },
    {
      name: "Cloture axiologique",
      example_text: "La grandeur d'un pays ne se mesure pas a combien il prend, mais a combien il batit avec ce qu'il a.",
      effect: "Fait sortir le debat de la comptabilite pour le placer dans la memoire long terme",
      why_it_works: "Recontextualise l'enjeu politique en enjeu civilisationnel. La memoire retient le principe, pas le taux.",
    },
  ],

  // ============================================================
  // 9. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "L'ascenseur immobile",
      used_for: "Illustrer que redistribuer sans reformer la chaine ne produit pas de mobilite",
      strength: 8,
      why_it_works: "Chacun a vecu un ascenseur en panne. L'image traduit un dysfonctionnement systemique en experience quotidienne.",
    },
    {
      source: "Le cheque en blanc",
      used_for: "Refuser de payer plus sans audit prealable de la depense",
      strength: 8,
      why_it_works: "Metaphore financiere universellement comprise : personne ne signe de cheque en blanc dans sa vie privee. Pourquoi l'accepter en politique ?",
    },
    {
      source: "Copier la carrosserie sans le moteur",
      used_for: "Denoncer l'importation du modele scandinave sans sa confiance institutionnelle",
      strength: 9,
      why_it_works: "Analogie mecanique claire : l'apparence sans la substance ne roule pas. Chacun voit immediatement l'absurdite.",
    },
    {
      source: "La fuite d'assiette",
      used_for: "Expliquer pourquoi taxer un patrimoine mobile fait fuir",
      strength: 7,
      why_it_works: "Metaphore culinaire (l'assiette qui fuit sous la main). Image directe et memorable, plus intuitive que 'elasticite fiscale'.",
    },
    {
      source: "Le mille-feuille",
      used_for: "Denoncer la superposition administrative absorbant les transferts",
      strength: 8,
      why_it_works: "Metaphore alimentaire nationale, familiere. Suggere une accumulation lente, progressive, dont chaque couche parait innocente mais dont le total ecrase.",
    },
    {
      source: "La confiscation ceremonielle",
      used_for: "Requalifier une taxation dont le rendement social est nul",
      strength: 7,
      why_it_works: "Fusionne deux termes charges (confiscation + ceremonie) pour designer un impot qui prend sans donner. L'auditeur reconnait le rituel vide.",
    },
  ],

  // ============================================================
  // 10. OPERATIONAL FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "Le test des trois questions fiscales",
      when_to_use: "Face a toute proposition de nouvelle taxe ou de suppression de taxe",
      steps: [
        "Question 1 : Sur quelle assiette ? (mobile ou immobile)",
        "Question 2 : Quel rendement social documente ? (audit chiffre)",
        "Question 3 : Quelle courbe de Laffer estimee ? (elasticite mesuree)",
      ],
      warning: "Une taxe qui ne survit pas aux trois questions est une taxe ceremonielle, pas une taxe efficace.",
    },
    {
      name: "L'audit de la chaine de transmission",
      when_to_use: "Avant toute proposition d'augmentation d'aide sociale",
      steps: [
        "Etape 1 : Chiffrer les couts de gestion / total (norme < 2%)",
        "Etape 2 : Chiffrer le non-recours (norme < 15%)",
        "Etape 3 : Chiffrer le taux marginal effectif de sortie (norme < 60%)",
        "Etape 4 : Comparer aux voisins (Allemagne, Pays-Bas, Danemark)",
        "Etape 5 : Reformer avant d'augmenter",
      ],
      warning: "Injecter du volume dans une chaine defaillante multiplie les pertes.",
    },
    {
      name: "Le triangle de la flexicurite adaptable",
      when_to_use: "Reforme structurelle du marche du travail francais",
      steps: [
        "Angle 1 : Assouplir le licenciement (rupture negociee elargie)",
        "Angle 2 : Elever le filet (assurance chomage revalorisee)",
        "Angle 3 : Rendre la formation obligatoire et evaluee (Pole Emploi renforce)",
      ],
      warning: "Retirer l'un des trois angles reproduit la 'flex sans curite' ou 'curite sans flex'. Le modele n'est pas modulaire.",
    },
    {
      name: "La pyramide de confiance institutionnelle",
      when_to_use: "Avant toute reforme profonde impliquant des transferts",
      steps: [
        "Base : Transparence des couts (open data budgetaire)",
        "Etage 2 : Predictibilite (stabilite fiscale sur 5 ans minimum)",
        "Etage 3 : Reddition (audits publics reguliers, sanctions visibles)",
        "Etage 4 : Reforme (une fois la confiance a 50%+)",
      ],
      warning: "Reformer avant la confiance c'est provoquer la fronde. Reformer sans la confiance c'est provoquer l'evasion.",
    },
  ],

  // ============================================================
  // 11. DRILLS
  // ============================================================
  drills: [
    {
      name: "Drill 'ou passe l'argent'",
      duration: "3 semaines, 15 min/jour",
      instructions: [
        "Chaque jour, prendre une ligne du budget de l'Etat (mission budgetaire)",
        "Chercher le rapport de la Cour des comptes sur cette ligne",
        "Noter en 3 phrases : couts de gestion, resultats mesures, ecart cible/realise",
        "En fin de semaine, tenter de defendre cette ligne pendant 2 minutes au chronometre",
      ],
      difficulty: 3,
    },
    {
      name: "Drill du triple debat",
      duration: "1 heure, hebdomadaire",
      instructions: [
        "Choisir une reforme (RSA, retraite, chomage, ISF)",
        "Defendre la position 'volume' (gauche) pendant 5 min",
        "Defendre la position 'efficience' (droite pragmatique) pendant 5 min",
        "Defendre la position 'flexicurite' (synthese) pendant 5 min",
        "Ecouter en replay et noter les 3 arguments les plus forts pour chaque position",
      ],
      difficulty: 4,
    },
    {
      name: "Drill 'confiance-multiplicateur'",
      duration: "2 semaines",
      instructions: [
        "Trouver 5 exemples de reformes ratees par manque de confiance (retraites 2023, RSA activation, etc.)",
        "Trouver 5 exemples de reformes reussies par capital de confiance (autorites independantes, ARCOM)",
        "Ecrire une regle personnelle : 'A partir de quel seuil de confiance une reforme X devient-elle possible ?'",
      ],
      difficulty: 3,
    },
  ],

  // ============================================================
  // 12. STRUCTURE RHETORIQUE (5 modes)
  // ============================================================
  structure: {
    rouge: {
      these: "La France a construit un mille-feuille redistributif qui broie les pauvres au nom de la solidarite, tout en ayant deja atteint le sommet mondial de la pression fiscale. Continuer, c'est perpetuer une trahison ceremonielle.",
      stats: [
        "43.2% prelevements, 57% depenses -- au-dessus de l'URSS tardive",
        "9.1 millions de pauvres apres 800 Mds/an d'aides sociales",
        "40% de capture bureaucratique + non-recours entre l'euro leve et le pauvre servi",
      ],
      cloture: "On ne resout pas un probleme d'incompetence par une hausse d'impots. On le resout par un audit et une reforme.",
    },
    orange: {
      these: "La vraie question n'est plus 'combien preleve-t-on ?' -- elle est reglee -- mais 'quel rendement social par euro depense ?'. Sans ce basculement de metrique, tout debat reste stigmatisation reciproque.",
      stats: [
        "Coefficient de Gini France (0.32) : meilleur que USA (0.39), pire que Danemark (0.26)",
        "Cout de gestion social : 6.2% en France vs 1% en Allemagne",
        "34% des ayants droit ne demandent pas le RSA",
      ],
      cloture: "Ne demandez plus 'combien'. Demandez 'ou passe l'argent'.",
    },
    jaune: {
      these: "Le clivage droite/gauche masque la vraie variable causale : la confiance institutionnelle. Le Danemark reussit non parce qu'il est de gauche, mais parce qu'il est fiable. La France echoue non par ideologie, mais par mille-feuille.",
      stats: [
        "Confiance institutionnelle : Danemark 75%, France 30%",
        "Correlation confiance/Gini dans OCDE : r=0.7 (Rothstein 2011)",
        "Sans confiance, 30-50% de perte d'efficience par euro preleve",
      ],
      cloture: "La confiance est le multiplicateur cache de la fiscalite. Sans elle, tout impot est un pourboire au bureaucrate.",
    },
    vert: {
      these: "Il existe un chemin francais : flexicurite adaptable, guichet unique, taxation d'assiette immobile, audit permanent. Ce n'est ni la gauche traditionnelle, ni la droite budgetaire -- c'est le pragmatisme du resultat, importe et reinvente.",
      stats: [
        "Flexicurite danoise : chomage 4.9%, retour a l'emploi 76% en 1 an",
        "Guichet unique estonien : demande d'aide en 4 minutes en ligne",
        "Taxe Tobin (assiette immobile) : 20 Mds/an potentiels sans fuite",
      ],
      cloture: "L'intelligence, c'est copier ce qui marche en l'adaptant. Le genie, c'est de faire mieux. La betise, c'est de continuer.",
    },
    bleu: {
      these: "Si la redistribution actuelle etait efficace, pourquoi 9.1 millions de pauvres ? Si le clivage droite/gauche etait causal, pourquoi Vietnam et Suisse reussissent-ils par des chemins opposes ? Si la fiscalite scandinave etait transposable, pourquoi Beveridge a-t-il echoue en France ?",
      stats: [
        "800 Mds d'aides, 9.1M pauvres : ratio efficience de 0.11 pauvre sorti par 10 Mds",
        "Vietnam 20% de depenses, Suisse 34%, France 57% -- meme democratie parfois, resultats opposes",
        "6 generations pour sortir de la pauvrete en France vs 3 au Danemark",
      ],
      cloture: "Avant d'accuser l'ideologie adverse, as-tu serieusement examine la performance de ton propre camp ?",
    },
  },

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    videos: [],
    debates: ["taxe-zucman", "science-abondance", "victimisation-responsabilisation", "meritocratie-optimisme"],
  },
};

if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["droite-gauche"] = CONTENT_DEBATES_droite_gauche;
