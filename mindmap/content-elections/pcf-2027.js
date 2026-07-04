const CONTENT_ELECTIONS_PCF_2027 = {
  id: "pcf-2027",
  name: "Fabien Roussel",
  party: "Parti Communiste Français",
  bloc: "extreme-gauche",
  spectrum: -7,
  status: "probable",
  status_note: "Le 40e congrès du PCF se tient à Lille du 3 au 5 juillet 2026 (en cours au moment de cette fiche) : il doit valider la stratégie présidentielle, la désignation formelle du candidat étant attendue début septembre 2026. Roussel, secrétaire national depuis 2018 et candidat 2022 (2,28%), « rêve d'une deuxième aventure » (Politis, mai 2026) et n'exclut pas une campagne PCF autonome ; le parti s'estime « pleinement légitime à présenter une candidature issue de ses rangs », tout en étant opposé à la primaire de la gauche unitaire du 11 octobre (une partie du groupe, dont Stéphane Peu, préfère le dialogue avec LFI). Sondages : ~2-3% (IFOP 25/06/2026 : 3%).",
  color: "#dc2626",

  thesis: "La gauche a abandonné le travail et les travailleurs : le PCF veut une « France du travail » — hausse des salaires (SMIC à 1500€ net puis au-delà), 32 heures, plein emploi par la reconquête industrielle, services publics reconstruits (100 000 soignants), énergie nucléaire publique et abondante (« Plan Messmer 2 ») — financée par la reprise du pouvoir sur le capital : taxation des profits et des dividendes, contrôle des aides publiques, fonds d'investissement de 100 Md€ pour produire en France. Une gauche des fiches de paie, ni woke ni décroissante.",
  counter_thesis: "Steelman adverse : le PCF pose de bonnes questions (travail, industrie, nucléaire, sécurité dans les quartiers populaires) mais son logiciel de financement — taxer « le coût du capital » comme gisement quasi infini — ignore l'économie ouverte : le capital est mobile, les marges françaises déjà moyennes en Europe, et la fraude fiscale invoquée (« 100 milliards ») est une estimation militante, pas une recette disponible. Électoralement, la stratégie identitaire de Roussel (rupture avec la gauche « des allocations » et « sociétale ») n'a pas fonctionné : 2,28% en 2022, ~2-3% en 2026 — elle a surtout fourni des arguments à la droite contre le reste de la gauche sans ramener l'électorat ouvrier, parti au RN. Le PCF survit par ses élus locaux ; sa candidature nationale ressemble davantage à une stratégie de survie d'appareil qu'à un projet de conquête du pouvoir.",

  program_pillars: [
    "La France du travail : salaires, plein emploi, 32 heures",
    "Reconquête industrielle : fonds de 100 Md€ pour produire en France",
    "Services publics : 100 000 embauches à l'hôpital, école, transports",
    "Énergie publique et nucléaire : « Plan Messmer 2 », prix administrés",
    "Reprise de pouvoir sur le capital : taxation des profits, contrôle des aides",
    "République sociale : sécurité et services dans les quartiers populaires"
  ],

  proposals: [
    {
      title: "SMIC à 1500€ net et échelle des salaires",
      domain: "économie",
      detail: "Porter le SMIC à 1500€ net par mois, revaloriser les grilles de branche en cascade, conditionner les allègements de cotisations à l'augmentation des salaires, conférence nationale sur les salaires.",
      pros: [
        "Version plus graduée que le 1600€ de LFI : ~8-10% de hausse, dans l'épure des rattrapages historiques absorbés par l'économie française (1981 : +10%)",
        "Le levier « allègements contre hausses de salaires » attaque la vraie mécanique des bas salaires : les exonérations dégressives créent une trappe documentée autour du SMIC (rapports Bozio-Wasmer 2024 sur les effets de la dégressivité)",
        "Soutien à la demande des ménages contraints, à propension à consommer maximale"
      ],
      cons: [
        "Effets d'emploi au voisinage du SMIC : l'élasticité n'est pas nulle pour les TPE et les services exposés — le risque se concentre exactement sur les emplois peu qualifiés qu'on veut protéger",
        "La conditionnalité des allègements, si elle est brutale, équivaut à une hausse massive du coût du travail : le calibrage fin (type recommandations Bozio-Wasmer) est absent du discours",
        "Effet de tassement des grilles : sans hausses générales coûteuses, le 1500€ écrase les qualifications intermédiaires"
      ],
      plausibility: 6,
      plausibility_note: "Décret pour le SMIC, loi pour la conditionnalité : juridiquement simple. Le débat est économique (calibrage) et budgétaire (compensation ou non des exonérations). Version étalée sur 2-3 ans : plausible.",
      cost_estimate: "Selon le schéma de compensation des exonérations : 8-18 Md€/an pour les finances publiques (extrapolation des chiffrages 2022 du programme Roussel et travaux Bozio-Wasmer sur les allègements)."
    },
    {
      title: "Semaine de 32 heures sans perte de salaire",
      domain: "social",
      detail: "Réduction du temps de travail légal vers 32 heures hebdomadaires, négociée par branche, sans réduction de salaire, avec embauches compensatoires.",
      pros: [
        "Continuité historique cohérente du mouvement ouvrier (1936 : 40h ; 1982 : 39h ; 2000 : 35h) — chaque étape a été dénoncée comme impossible puis absorbée",
        "Les 35 heures ont créé des emplois (350 000 à 400 000 selon les évaluations DARES/INSEE des lois Aubry) : le précédent empirique n'est pas nul",
        "Les expérimentations 4 jours étrangères montrent des gains de productivité horaire et de santé dans les secteurs compatibles"
      ],
      cons: [
        "Le passage 39→35h s'est fait avec modération salariale et allègements massifs de cotisations (~20 Md€/an pérennes, toujours payés aujourd'hui) : « sans perte de salaire » = +9% de coût horaire, non absorbable sans subvention équivalente",
        "Dans les secteurs à présence obligatoire (santé, éducation — précisément les bastions du PCF), 32h sans embauches massives = services dégradés ; avec embauches = des Md€ et des pénuries de recrutement immédiates (l'hôpital ne trouve déjà pas ses soignants à 35h)",
        "La France a déjà un des volumes horaires travaillés par habitant les plus bas de l'OCDE et finance mal son modèle social : réduire la base horaire creuse l'équation du financement que le programme prétend résoudre"
      ],
      plausibility: 2,
      plausibility_note: "Aucun verrou constitutionnel, mais le coût (subventions type Aubry x1,5) et l'état des finances publiques rendent la généralisation hors de portée d'un quinquennat. Version réaliste : 32h ciblées sur métiers pénibles et travail de nuit — d'ailleurs défendue par le PCF pour les hospitaliers.",
      cost_estimate: "Non chiffré précisément par le PCF pour 2027 ; par analogie avec les 35h : 25-40 Md€/an de compensations publiques pour une généralisation sans perte de salaire."
    },
    {
      title: "Plan Messmer 2 : relance nucléaire publique massive",
      domain: "écologie",
      detail: "Programme de construction de nouveaux réacteurs au-delà des 6 EPR2 engagés (visant le renouvellement complet du parc), 100% public via EDF renationalisée intégralement, prix de l'électricité administrés sortis du marché européen, recherche (fermeture du cycle, RNR).",
      pros: [
        "Cohérence climat-réalisme rare à gauche : l'électricité nucléaire française est décarbonée et pilotable ; le PCF est le seul parti de gauche aligné avec le consensus RTE sur l'intérêt des scénarios à forte part nucléaire",
        "Légitimité historique réelle du parti sur la filière (CEA, Joliot-Curie, CGT énergie) et ancrage dans les territoires industriels concernés",
        "La sortie des prix de marché répond à un dysfonctionnement documenté : le prix européen marginal (gaz) a déconnecté les factures françaises des coûts de production nationaux en 2022 — la réforme du marché européen de 2023-2024 ne l'a que partiellement corrigé"
      ],
      cons: [
        "Le mur industriel est le vrai obstacle : la filière peine déjà à tenir le calendrier et les coûts des 6 EPR2 (dérive de 51 vers 67-80 Md€ avant travaux, retards annoncés) — doubler la commande sans ingénieurs, soudeurs et tuyauteurs formés est un vœu, pas un plan",
        "Prix administrés sous les coûts complets = décapitalisation d'EDF (précédent : tarifs gelés 2022, ~8 Md€ de manque à gagner) ; l'électricité « pas chère » payée par la dette d'EDF est un transfert intergénérationnel masqué",
        "Sortie unilatérale du marché européen de l'électricité : incompatible avec le droit UE en l'état, et contraire à l'intérêt exportateur français (la France est le premier exportateur d'électricité d'Europe — le marché lui rapporte)"
      ],
      plausibility: 4,
      plausibility_note: "La direction (relance nucléaire publique) est déjà la politique nationale — le PCF pousse plus loin un consensus existant, crédible. Les éléments spécifiques (au-delà des EPR2, prix administrés hors marché UE) butent sur la filière et le droit européen.",
      cost_estimate: "6 EPR2 déjà engagés : 67-80 Md€ (estimations 2023-2025) ; un « Messmer 2 » complet (14+ réacteurs) : 150-200 Md€ sur 25 ans, financement public à définir (le PCF propose un livret d'épargne dédié et la BCE — cette seconde jambe est hors cadre juridique actuel)."
    },
    {
      title: "100 000 embauches à l'hôpital et plan santé",
      domain: "santé",
      detail: "Recruter 100 000 soignants, revaloriser les salaires hospitaliers, rétablir un maillage hospitalier de proximité, supprimer la tarification à l'activité (T2A), rétablir un numerus clausus élargi et des pré-recrutements étudiants rémunérés.",
      pros: [
        "L'ordre de grandeur du manque est corroboré par le terrain : dizaines de milliers de postes vacants (FHF : ~30 000 postes soignants vacants), lits fermés faute de personnel, absentéisme record — le diagnostic quantitatif est solide",
        "Les pré-recrutements rémunérés (payer les études contre engagement de service) attaquent le vrai goulot — le vivier — là où le seul affichage budgétaire échoue à pourvoir les postes existants",
        "La critique de la T2A est largement partagée (rapports parlementaires, engagement macroniste de 2023 de la réformer) : incitations documentées à la sur-activité rentable et à l'abandon des missions non tarifables"
      ],
      cons: [
        "100 000 soignants supplémentaires n'existent pas sur le marché du travail : même financés, les postes resteraient vacants 5-10 ans, le temps de former (le goulot est démographique et de formation, pas seulement budgétaire)",
        "Coût pérenne majeur (~6-8 Md€/an en année pleine) s'ajoutant à une ONDAM déjà en dérive — sans réforme d'organisation (pertinence des actes, ambulatoire), l'argent peut financer le statu quo dysfonctionnel",
        "Supprimer la T2A sans mécanisme alternatif précis ramène à la dotation globale historique, dont les défauts (rationnement implicite, inégalités entre hôpitaux) avaient justifié la T2A"
      ],
      plausibility: 4,
      plausibility_note: "Budgétairement votable par étapes ; physiquement contraint par la démographie soignante. La partie la plus opérante (pré-recrutements, formation massive) porte ses fruits à 8-10 ans.",
      cost_estimate: "100 000 postes ≈ 6-8 Md€/an chargés (chiffrage Roussel 2022 : ~10 Md€ pour le plan santé complet) ; formation et pré-recrutements : 1-2 Md€/an additionnels."
    },
    {
      title: "Fonds souverain de 100 Md€ pour produire en France",
      domain: "économie",
      detail: "« Pacte pour l'avenir de la France » : fonds d'investissement de 100 Md€ dédié à la production nationale (industrie, relocalisations, filières stratégiques), adossé à l'épargne populaire et au crédit bancaire orienté, avec droits de regard des salariés.",
      pros: [
        "Le principe d'orienter l'épargne abondante des Français (~6 000 Md€ de patrimoine financier, livrets sur-liquides) vers l'industrie est défendu bien au-delà du PCF (rapports parlementaires sur le financement de l'industrie, débats sur le livret industrie)",
        "Ordre de grandeur cohérent avec les plans existants (France 2030 : 54 Md€) — le PCF propose un changement d'échelle, pas une rupture d'instrument",
        "Le droit de regard des salariés sur l'usage des fonds publics reçus par leur entreprise a des précédents fonctionnels (codétermination, comités de suivi des aides)"
      ],
      cons: [
        "Un fonds public qui choisit les gagnants a un historique français mitigé (plan calcul, Bull, Areva) : sans gouvernance indépendante des pressions politiques locales — que le fléchage « produire en France » aggrave — le risque de capture est structurel",
        "100 Md€ mobilisés par l'épargne réglementée sont retirés d'autres emplois (logement social financé par le livret A) : le coût d'opportunité n'est jamais présenté",
        "La contrainte UE sur les aides d'État encadre les subventions sectorielles ; l'échelle proposée exigerait des notifications et exemptions négociées"
      ],
      plausibility: 5,
      plausibility_note: "Instruments existants (Bpifrance, fonds d'épargne CDC) : une montée en charge est faisable. L'échelle et le fléchage politique posent les vraies questions. Version 30-50 Md€ pilotée par Bpifrance : plausible.",
      cost_estimate: "100 Md€ d'engagements (pas de dépense budgétaire directe équivalente) ; coût budgétaire réel = bonifications, garanties et pertes éventuelles : quelques Md€/an."
    },
    {
      title: "Taxation des dividendes, des rachats d'actions et « prise de pouvoir sur le coût du capital »",
      domain: "économie",
      detail: "Surtaxer les dividendes et rachats d'actions, moduler l'impôt sur les sociétés selon l'usage des profits (investissement/emploi vs distribution), supprimer les aides publiques sans contrepartie et récupérer « l'argent du capital » estimé par le parti à 200 Md€/an.",
      pros: [
        "Les rachats d'actions ont explosé (CAC40 : ~30 Md€/an record) et leur taxation existe ailleurs (buyback tax américaine de 1% créée en 2022, doublement débattu) : l'instrument n'est pas exotique",
        "La modulation de l'IS selon le comportement (investir vs distribuer) a une logique incitative défendable et des précédents partiels (taux réduit PME, suramortissements)",
        "L'exigence d'évaluation des 110-160 Md€ d'aides publiques aux entreprises rejoint la Cour des comptes et le rapport sénatorial 2025 — sur ce point le PCF est aligné avec l'orthodoxie de contrôle"
      ],
      cons: [
        "Le « gisement » de 200 Md€ agrège des flux non capturables (dividendes versés à des non-résidents, profits déjà taxés, aides qui sont en réalité des baisses de prélèvements sur le travail) : la recette réelle mobilisable est une fraction — probablement 10-20 Md€ en étant volontariste",
        "Surtaxer la distribution sans toucher l'investissement suppose de tracer l'usage des profits : les entreprises optimisent (report, holdings étrangères, dette) — l'expérience de la surtaxe dividendes 2012-2017 s'est terminée par une condamnation et 10 Md€ de remboursements (contribution de 3% censurée)",
        "Dans une économie ouverte, le capital sur-taxé unilatéralement se déplace : effet documenté sur les sièges et les cotations, que le programme ne traite que par la dénonciation"
      ],
      plausibility: 4,
      plausibility_note: "Une taxe sur les rachats d'actions (type US 1%) est votable et probablement constitutionnelle. La modulation générale de l'IS et la « récupération » des 200 Md€ sont respectivement complexe et illusoire. Précédent défavorable : la taxe dividendes censurée (2017).",
      cost_estimate: "Rendement réaliste du paquet : 5-15 Md€/an (taxe rachats d'actions : 1-2 Md€ ; conditionnalité et coups de rabot sur aides inefficaces : quelques Md€) — loin des 200 Md€ affichés comme gisement."
    },
    {
      title: "Éradication de la fraude fiscale (« 100 milliards »)",
      domain: "économie",
      detail: "Plan de lutte contre la fraude et l'évasion fiscales présenté comme gisement de ~100 Md€/an : effectifs du contrôle fiscal doublés, levée du verrou de Bercy complète, taxation unitaire des multinationales, registre des actifs.",
      pros: [
        "Le renforcement des moyens du contrôle a un rendement démontré : chaque contrôleur fiscal « rapporte » plusieurs fois son coût (résultats DGFiP : ~15 Md€ encaissés/an, en hausse avec les data-analytics), et les effectifs du contrôle ont baissé de ~15% en 10 ans",
        "La taxation unitaire (répartir le profit mondial selon l'activité réelle) est la direction de l'accord OCDE pilier 1/2 : le PCF pousse plus loin une dynamique internationale réelle",
        "Le registre des actifs et la transparence sont recommandés par la recherche (Zucman, EU Tax Observatory) et progressent en droit européen"
      ],
      cons: [
        "Le chiffre de 100 Md€ est une borne haute militante (syndicat Solidaires Finances publiques) : ni la Cour des comptes ni l'INSEE ne valident d'estimation officielle — la Cour a explicitement souligné en 2019 l'absence de chiffrage fiable, et l'évasion « légale » (optimisation) n'est pas récupérable par le contrôle",
        "Le rendement marginal décroît : les fraudes massives simples sont déjà ciblées ; doubler les effectifs ne double pas les recettes",
        "Utiliser ce gisement hypothétique comme financement de dépenses certaines reproduit le sophisme du chiffrage magique — même structure que « les riches paieront »"
      ],
      plausibility: 5,
      plausibility_note: "Renforcer le contrôle : faisable et rentable (gain réaliste : +5-10 Md€/an à horizon du mandat). L'« éradication » à 100 Md€ : sans base empirique. Taxation unitaire complète : dépend de négociations internationales.",
      cost_estimate: "Gain réaliste net : 5-10 Md€/an supplémentaires (extrapolation des rendements DGFiP et études EU Tax Observatory) — pas 100 Md€."
    },
    {
      title: "Nationalisations et pôle public bancaire",
      domain: "économie",
      detail: "Nationalisation intégrale d'EDF-Engie (branches stratégiques), création d'un pôle public bancaire (à partir de La Banque Postale, CDC, Bpifrance) orientant le crédit vers l'emploi et l'industrie, pôle public du médicament.",
      pros: [
        "EDF est déjà renationalisée à 100% (2023) : sur ce point le réel a rejoint le programme — la question restante (statut, financement du nucléaire) est légitime",
        "Un pôle public bancaire d'orientation du crédit existe partiellement (CDC-Bpifrance-LBP représentent déjà un réseau public massif) : la proposition organise l'existant plus qu'elle n'exproprie",
        "Le crédit orienté a des précédents efficaces (KfW allemande — banque publique qui finance la transition sans scandale idéologique)"
      ],
      cons: [
        "Nationaliser des banques commerciales au-delà du pôle existant coûterait des dizaines de Md€ de capital pour un bénéfice incertain, et le souvenir du Crédit Lyonnais (sauvetage : ~15 Md€ pour le contribuable) documente le risque du crédit politiquement orienté",
        "Engie : l'État est actionnaire minoritaire d'un groupe coté international — la nationalisation intégrale coûterait ~30-35 Md€ de capitalisation plus primes, pour un contrôle déjà largement exercé par la régulation",
        "Le droit UE n'interdit pas la propriété publique (art. 345 TFUE) mais interdit les avantages concurrentiels indus : un pôle public géant serait sous surveillance permanente des aides d'État"
      ],
      plausibility: 3,
      plausibility_note: "EDF : fait. Pôle public bancaire par coordination CDC/Bpifrance/LBP : plausible. Nationalisations nouvelles à grande échelle : coût d'acquisition prohibitif dans l'état des finances publiques.",
      cost_estimate: "Engie seul : 30-40 Md€ ; extension bancaire : selon périmètre, 20-60 Md€ de capital — le programme ne détaille pas le financement d'acquisition."
    },
    {
      title: "Sécurité : rétablir la police de proximité et « la tranquillité pour les quartiers populaires »",
      domain: "sécurité",
      detail: "Doublement des policiers de terrain formés (police de proximité), rétablissement de la police des quartiers, lutte contre le narcotrafic incluant le blanchiment, refus du « laxisme comme du tout-répressif », maires associés à la sécurité.",
      pros: [
        "Positionnement assumé rare à gauche radicale : Roussel parle sécurité sans détour, en phase avec les demandes documentées des habitants des quartiers populaires (enquêtes de victimation SSMSI : les plus pauvres sont les premières victimes)",
        "La police de proximité a des évaluations internationales favorables sur la confiance et le renseignement de terrain (community policing) — sa suppression en 2003 est régulièrement critiquée y compris par des policiers",
        "Cohérence électorale avec l'électorat communal du PCF (maires de banlieue confrontés quotidiennement au trafic)"
      ],
      cons: [
        "Recruter et former massivement bute sur l'attractivité du métier (concours déjà sous-dotés en candidats de qualité) — promesse d'effectifs sans vivier",
        "Le « ni laxisme ni tout-répressif » reste un slogan sans doctrine pénale précisée (échelle des peines ? courtes peines ? moyens de la justice, goulot réel du système ?)",
        "Concurrence de crédibilité frontale avec la droite et le RN sur un terrain où le différentiel de confiance est massivement défavorable (baromètres CEVIPOF/Elabe sur la crédibilité sécurité par parti)"
      ],
      plausibility: 6,
      plausibility_note: "Budgétairement et juridiquement banal (redéploiements + recrutements pluriannuels). La contrainte est le vivier de recrutement et le temps de formation.",
      cost_estimate: "10 000-20 000 postes de terrain : 0,7-1,5 Md€/an chargés, montée en charge sur 5 ans."
    },
    {
      title: "Prix bloqués et TVA à 0% sur les produits de première nécessité",
      domain: "social",
      detail: "TVA à 0% sur un panier de produits de première nécessité (alimentaire de base, hygiène), blocage des prix de l'énergie via le pôle public, encadrement des marges de la grande distribution.",
      pros: [
        "La TVA à 0% sur l'alimentaire de base est désormais PERMISE par le droit UE (directive TVA révisée 2022 : liste élargie incluant les denrées) — l'Espagne l'a appliquée en 2023 sur l'huile, le pain, le lait : précédent européen concret",
        "Instrument simple, immédiat, sans appareil administratif nouveau",
        "L'encadrement des marges s'appuie sur des travaux réels de l'Inspection générale des finances sur les marges de la distribution et de l'agroalimentaire pendant l'inflation 2022-2023"
      ],
      cons: [
        "La TVA à 0% est mal ciblée : elle bénéficie proportionnellement aux gros consommateurs (les aisés), coûte cher (~5-8 Md€/point selon panier) et la transmission aux prix est incomplète (l'expérience espagnole montre une répercussion partielle, captée en partie par les marges)",
        "Un chèque ciblé sur les ménages modestes fait mieux pour moins cher — consensus des économistes publics (CAE, IPP) contre les baisses de TVA généralisées",
        "L'encadrement permanent des marges de la distribution (secteur à marges nettes faibles, 1-3%) confond marges brutes et nettes et risque de déstabiliser un secteur fortement employeur"
      ],
      plausibility: 7,
      plausibility_note: "Juridiquement ouvert depuis 2022 (directive TVA), politiquement populaire, budgétairement coûteux mais dosable par la taille du panier. Une des mesures les plus applicables du programme — pas la plus efficiente.",
      cost_estimate: "TVA 0% sur panier alimentaire de base : 4-8 Md€/an selon périmètre (extrapolations DGFiP/IPP)."
    }
  ],

  fallacies: [
    {
      claim: "« Le coût du capital, c'est 200 milliards par an : voilà notre financement »",
      fallacy_type: "chiffrage magique / confusion stock de flux et recette fiscale",
      why_fallacious: "Agrège des flux hétérogènes (dividendes, intérêts, rachats d'actions, aides publiques) en un « gisement » présenté comme mobilisable, alors que : une partie est déjà taxée, une partie appartient à des non-résidents hors d'atteinte, une partie (allègements bas salaires) financerait sa suppression par des destructions d'emplois, et la taxation du solde modifie les comportements qui génèrent le flux. Le gisement affiché et la recette réalisable diffèrent d'un ordre de grandeur.",
      correction: "Chiffrer mesure par mesure avec élasticités : taxe rachats d'actions (~1-2 Md€), conditionnalité des aides ciblées (~2-5 Md€), IS modulé (incertain). Total réaliste : 10-20 Md€/an — utile, mais qui ne finance ni les 32h ni le plan santé ni le Messmer 2 simultanément.",
      severity: "high"
    },
    {
      claim: "« 100 milliards de fraude fiscale : il suffit d'aller les chercher »",
      fallacy_type: "appel au chiffre non sourcé / solution miracle",
      why_fallacious: "Le chiffre — borne haute d'une estimation syndicale (Solidaires Finances publiques) incluant l'optimisation légale — est traité comme une cagnotte récupérable par simple volonté politique. Or aucune administration au monde ne recouvre l'intégralité de l'écart fiscal théorique ; la Cour des comptes refuse même de valider un chiffrage. La dépense financée est certaine, la recette est une espérance sur une assiette invérifiable.",
      correction: "Les rendements marginaux réels du contrôle renforcé sont documentés : +5-10 Md€/an atteignables à horizon d'un mandat. Dire « nous financerons X par la fraude » n'est honnête que pour un X de cet ordre.",
      severity: "high"
    },
    {
      claim: "« La gauche des allocations a trahi la gauche du travail » (ligne Roussel depuis 2022)",
      fallacy_type: "fausse dichotomie / épouvantail",
      why_fallacious: "Oppose deux figures (le travailleur méritant / l'assisté) qui recouvrent largement les mêmes personnes : la majorité des allocataires du RSA ont travaillé récemment ou travailleront, les travailleurs pauvres cumulent salaire et prestations (prime d'activité). La dichotomie importe à gauche un cadre de la droite sociale (« assistanat ») qui fracture l'électorat populaire au lieu de l'unifier — résultat électoral : les voix ne sont pas venues (2,28%).",
      correction: "La distinction pertinente est entre revenus du travail insuffisants et protection sociale — complémentaires, pas rivaux. On peut revaloriser le travail (salaires, conditions) sans dévaloriser les protections : c'est même la combinaison scandinave que le PCF cite par ailleurs.",
      severity: "medium"
    },
    {
      claim: "« Le nucléaire français, c'est l'indépendance énergétique totale »",
      fallacy_type: "généralisation abusive / omission",
      why_fallacious: "L'électronucléaire réduit fortement la dépendance aux hydrocarbures pour l'ÉLECTRICITÉ, mais : l'uranium est 100% importé (Kazakhstan, Niger, Ouzbékistan — dépendances géopolitiques réelles), l'électricité ne couvre que ~27% de l'énergie finale française (pétrole et gaz dominent transports et chauffage), et la filière dépend d'aciers et composants importés. « Indépendance » est un abus sur trois périmètres.",
      correction: "Formulation exacte : le nucléaire donne une électricité décarbonée, pilotable, à coût stabilisé, avec une dépendance amont (uranium) diversifiable et stockable — avantage réel mais partiel. L'indépendance énergétique complète exige aussi électrification des usages et sobriété, que le PCF minore.",
      severity: "medium"
    },
    {
      claim: "« Produire en France recréera le plein emploi ouvrier »",
      fallacy_type: "nostalgie économique / négligence du progrès technique",
      why_fallacious: "Suppose que la relocalisation restaurerait l'emploi industriel de masse des années 1970, alors que l'industrie moderne est intensive en capital et automatisée : une usine relocalisée crée 10 fois moins d'emplois directs qu'en 1975 à production égale. La désindustrialisation française est d'abord un phénomène de productivité et de spécialisation, partiellement seulement de délocalisation.",
      correction: "La réindustrialisation est souhaitable (balance commerciale, souveraineté, emplois qualifiés induits) mais son rendement en emplois est modeste : les études des relocalisations récentes (gigafactories) montrent des milliers d'emplois par site, pas des centaines de milliers au total. Le plein emploi passera aussi — surtout — par les services et la formation.",
      severity: "medium"
    },
    {
      claim: "« Les 35 heures ont créé 400 000 emplois, les 32 heures feront de même »",
      fallacy_type: "extrapolation hors contexte",
      why_fallacious: "Transpose un résultat obtenu dans des conditions précises (croissance forte 1998-2001, modération salariale négociée, 20 Md€/an d'allègements, gains de productivité disponibles) à un contexte opposé (croissance faible, plein emploi relatif des qualifiés, finances publiques exsangues, « sans perte de salaire » excluant la modération). Les conditions qui ont produit l'effet sont précisément celles qui manquent.",
      correction: "L'évaluation honnête des 35h (DARES) attribue les créations d'emplois au PAQUET complet (RTT + modération + subventions). Les 32h « sans perte de salaire et sans conditions » n'est pas la même politique — son effet emploi attendu est faible voire négatif selon le financement.",
      severity: "medium"
    }
  ],

  data_issues: [
    {
      claim: "« La fraude fiscale coûte 100 milliards d'euros par an à la France »",
      problem: "invérifiable / borne haute militante présentée en fait établi",
      reality: "Estimation de Solidaires Finances publiques (80-100 Md€) incluant des périmètres d'optimisation légale ; la Cour des comptes (2019) constate qu'« aucune estimation fiable » n'existe et l'INSEE avance ~25-35 Md€ pour la seule TVA et l'IS éludés par des méthodes robustes. Recouvrements effectifs DGFiP : ~15 Md€/an. L'ordre de grandeur récupérable est très inférieur au chiffre brandi.",
      source: "Cour des comptes, « La fraude aux prélèvements obligatoires » (2019) ; INSEE (écart TVA) ; DGFiP (résultats annuels du contrôle fiscal) ; Les Décodeurs sur les 100 Md€"
    },
    {
      claim: "« 200 milliards d'aides publiques aux entreprises sans contrôle ni contrepartie »",
      problem: "exagéré / périmètre gonflé et hétérogène",
      reality: "L'étude IRES/CLERSÉ (2022) — source du chiffre — totalise ~157 Md€ en incluant les allègements généraux de cotisations (~75 Md€, qui soutiennent l'emploi peu qualifié), les baisses d'impôts de production et le CIR. La part discrétionnaire réellement « conditionnable » est de 20-40 Md€. Le rapport sénatorial 2025 confirme le déficit d'évaluation, pas l'absence de tout contrôle.",
      source: "IRES/CLERSÉ « Un capitalisme sous perfusion » (2022) ; rapport de la commission d'enquête du Sénat sur les aides publiques (2025) ; France Stratégie"
    },
    {
      claim: "« L'électricité nucléaire est la moins chère du monde et le restera avec les nouveaux réacteurs »",
      problem: "obsolète pour le nouveau nucléaire",
      reality: "Vrai pour le parc historique amorti (~50-60€/MWh coût complet) ; faux pour le neuf : Flamanville 3 ≈ 19,1 Md€ en coût complet (Cour des comptes 2020), coût du MWh EPR2 estimé 90-110€ selon les hypothèses de financement — comparable ou supérieur à l'éolien terrestre avec stockage partiel. L'argument PCF fusionne les deux parcs pour prêter au neuf les coûts de l'ancien.",
      source: "Cour des comptes (2020) ; RTE Futurs énergétiques 2050 ; CRE ; estimations EPR2 (DGEC/presse spécialisée 2023-2025)"
    },
    {
      claim: "« Les 35 heures ont créé 700 000 emplois » (chiffre parfois avancé côté PCF/gauche)",
      problem: "exagéré",
      reality: "Les évaluations de référence (DARES, INSEE — Crépon/Kramarz et suivantes) convergent vers 350 000-400 000 emplois créés ou sauvegardés au titre des lois Aubry, en incluant l'effet des allègements de cotisations associés. Le chiffre de 700 000 additionne des créations conjoncturelles de la période 1997-2001 non attribuables aux 35h.",
      source: "DARES, bilans des lois Aubry ; INSEE ; synthèses académiques (Askenazy)"
    },
    {
      claim: "« Le pouvoir d'achat des salariés s'effondre depuis 20 ans »",
      problem: "faux en moyenne, vrai par segments — généralisation trompeuse",
      reality: "Le pouvoir d'achat moyen par unité de consommation a PROGRESSÉ en France sur 20 ans (INSEE, ~+1%/an hors crises), mieux que chez la plupart des voisins ; MAIS avec des angles morts réels : dépenses contraintes (logement) en hausse, décrochage des bas salaires vs coût du logement métropolitain, épisode inflationniste 2022-2023 non intégralement rattrapé pour certaines branches. Le sentiment cité est documentable ; « l'effondrement » ne l'est pas.",
      source: "INSEE (comptes nationaux, pouvoir d'achat par UC) ; France Stratégie sur les dépenses contraintes ; Les Décodeurs"
    }
  ],

  problematic_arguments: [
    {
      argument: "« Ni woke ni décroissant : la gauche du steak, du nucléaire et du travail » (positionnement identitaire Roussel depuis 2022 — barbecue, chasse, sécurité)",
      why_problematic: "Le positionnement anti-« gauche morale » fonctionne médiatiquement mais fabrique ses adversaires à gauche plus qu'il ne convainc à droite : les électeurs ouvriers visés votent RN pour des raisons (immigration, autorité) que le folklore barbecue n'adresse pas, tandis que l'électorat de gauche disponible est heurté. Bilan mesurable : 2,28% en 2022, ~2-3% en 2026 — la stratégie a un déficit de validation empirique de quatre ans.",
      what_it_hides: "Que le problème du PCF n'est pas son image culturelle mais sa fonction : son électorat historique a trois héritiers mieux placés (RN pour le protestataire ouvrier, LFI pour le radical urbain, abstention), et aucun positionnement rhétorique ne recrée une base sociale disparue (désindustrialisation, fin des bastions cheminots-métallos)."
    },
    {
      argument: "« Le PCF est pleinement légitime à présenter sa candidature » (résolution pré-congrès 2026) — l'autonomie comme principe",
      why_problematic: "À ~2-3%, une candidature autonome ne pèse sur rien nationalement mais peut coûter la qualification à la gauche entière (en 2022, les 2,28% de Roussel dépassaient l'écart Mélenchon-Le Pen au premier tour : 1,2 point). L'argument de légitimité est formellement vrai et stratégiquement auto-destructeur pour l'objectif affiché (battre l'extrême droite).",
      what_it_hides: "La fonction réelle de la candidature présidentielle pour le PCF : visibilité, financement public (aide aux partis indexée sur les législatives qui suivent), préservation de l'appareil d'élus locaux — des intérêts d'organisation légitimes mais distincts de l'intérêt électoral de son propre camp, jamais arbitrés publiquement."
    },
    {
      argument: "« Le peuple veut travailler plus et gagner plus, pas des minima sociaux » (réitérations de la ligne travail)",
      why_problematic: "Prête au « peuple » une préférence homogène qui valide la ligne du parti, alors que les enquêtes montrent des attentes simultanées (salaires ET protection ET temps libre) ; ironiquement, le même programme défend les 32 heures — travailler moins — au nom du même peuple. L'invocation du peuple sert de joker argumentatif dans les deux sens.",
      what_it_hides: "La tension non résolue du programme entre productivisme (produire plus, nucléaire, industrie, pouvoir d'achat) et ses alliances écologistes potentielles — le PCF évite de trancher publiquement ce conflit de fond avec le reste de la gauche."
    },
    {
      argument: "« L'Europe de Maastricht nous a tout pris » — l'euro et l'UE comme cause englobante du déclin industriel et social",
      why_problematic: "L'UE a des responsabilités réelles (concurrence intra-européenne, politique commerciale, règles budgétaires pro-cycliques), mais l'argument englobant absout les choix NATIONAUX documentés : sous-investissement éducatif et de formation, positionnement de gamme, fiscalité de production, choix industriels ratés — l'Allemagne et l'Italie du Nord, sous les mêmes traités, ont gardé leur industrie.",
      what_it_hides: "Que le PCF ne propose plus la sortie de l'euro (abandonnée car impopulaire) : la dénonciation reste, la conséquence logique a disparu — signe que l'argument est un marqueur identitaire plus qu'une prémisse de politique publique."
    }
  ],

  strong_ideas: [
    {
      idea: "Assumer le nucléaire à gauche comme colonne de la décarbonation",
      why_strong: "Alignement réel avec les scénarios de référence (RTE : les mix avec nucléaire sont moins chers et moins risqués), avec l'emploi industriel qualifié et avec l'opinion post-2022. Le PCF est le seul parti de gauche sans dissonance entre urgence climatique affichée et moyens énergétiques — cette cohérence est un actif intellectuel objectif.",
      adoptable_by: "Déjà la politique du centre et de la droite ; l'apport spécifique PCF adoptable par d'autres : le volet 100% public, la sortie de la tarification spéculative et les pré-recrutements massifs de la filière (écoles de soudeurs, tuyauteurs)."
    },
    {
      idea: "Pré-recrutements rémunérés dans les métiers publics en pénurie (santé, éducation)",
      why_strong: "Attaque le goulot réel (le vivier, pas le budget) : payer les études contre engagement de servir a fonctionné historiquement (IPES pour les enseignants jusqu'en 1979, ESM pour les militaires) et existe en médecine (CESP). La généralisation est une idée opérationnelle, chiffrable et évaluable.",
      adoptable_by: "Tous les blocs : la droite peut la porter en logique « bourse contre engagement » méritocratique ; le centre l'a déjà en germe (CESP). Zéro obstacle constitutionnel."
    },
    {
      idea: "TVA à 0% sur un panier de première nécessité (désormais euro-compatible)",
      why_strong: "Depuis la directive TVA 2022, l'instrument est légal ; l'Espagne l'a testé en vraie grandeur (2023) avec une répercussion partielle mais réelle. Simple, lisible, immédiat — même si un chèque ciblé est plus efficient, la faisabilité politique de la TVA 0% est supérieure (pas de stigmatisation, pas de non-recours).",
      adoptable_by: "RN (qui la propose aussi), droite sociale, centre en version panier étroit. Le débat inter-blocs porte sur l'efficience, pas la faisabilité — débat sain."
    },
    {
      idea: "Taxe sur les rachats d'actions",
      why_strong: "Précédent américain opérationnel (buyback tax 1%, 2022, votée par les démocrates avec débat d'extension bipartisan) ; assiette simple, difficile à délocaliser pour les sociétés cotées à Paris ; corrige à la marge la préférence fiscale pour la distribution vs l'investissement. Rendement modeste mais réel (~1-2 Md€).",
      adoptable_by: "Centre et droite gaulliste (le capital doit financer l'outil productif national) — Macron lui-même avait évoqué l'idée en 2023. Version consensuelle : 1-2% non confiscatoire."
    },
    {
      idea: "Sécurité du quotidien assumée par la gauche dans les quartiers populaires",
      why_strong: "Les données de victimation (SSMSI) établissent que les habitants pauvres des quartiers denses subissent le plus la délinquance : une gauche qui déserte le sujet abandonne ses électeurs déclarés. La position Roussel (police de proximité + haut du spectre du narcotrafic) est alignée avec la commission d'enquête sénatoriale 2024 — techniquement sérieuse.",
      adoptable_by: "Toute la gauche (Tondelier et Glucksmann s'y mettent), et crédibilise le dialogue avec le centre et la droite sur le régalien — condition de toute coalition de gouvernement future."
    }
  ],

  electorate: "Électorat résiduel mais territorialisé : bastions municipaux du Nord (bassin minier), de la banlieue parisienne historique (Seine-Saint-Denis, Val-de-Marne) et de quelques terres rurales (Allier, Cher), électorat vieillissant fidèle au parti plus qu'au candidat, employés et retraités du secteur public. Le PCF reste le premier réseau d'élus locaux de la gauche (maires, ~600 000 voix aux départementales) — sa force réelle est communale, en décalage complet avec ses scores présidentiels (2,28% en 2022, ~2-3% en 2026). L'électorat ouvrier historique a majoritairement migré vers le RN ou l'abstention.",

  key_quotes: [
    {
      text: "Les communistes se considèrent pleinement légitimes à porter une candidature issue de leurs rangs, pour l'élection présidentielle comme pour toutes les élections du pays.",
      context: "Résolution préparatoire au 40e congrès de Lille (3-5 juillet 2026), qui doit trancher la stratégie présidentielle",
      source: "PCF / CNews (enjeux du 40e congrès), juillet 2026"
    },
    {
      text: "Je rêve d'une deuxième aventure présidentielle.",
      context: "Paraphrase fidèle du positionnement rapporté à l'approche du congrès — Roussel prépare sa deuxième candidature",
      source: "Politis, « Fabien Roussel rêve d'une deuxième aventure », mai 2026"
    },
    {
      text: "Je veux une France du plein emploi, des hauts salaires, qui vive de son travail — pas des minima sociaux.",
      context: "Ligne « gauche du travail » constante depuis 2022 (la sortie initiale sur « la gauche des allocations », janvier 2022, avait déclenché une controverse durable à gauche)",
      source: "Meetings et médias, 2022-2026 (formule réitérée)"
    },
    {
      text: "Il nous faut un nouveau plan Messmer : le nucléaire sera au cœur de la présidentielle de 2027, et je prends des engagements dans ce domaine.",
      context: "Discours sur la filière nucléaire — positionnement énergie singulier à gauche",
      source: "PCF.fr (soirée nucléaire, discours de Fabien Roussel) ; Reporterre"
    },
    {
      text: "Faisons de 2026 une année utile : nous proposons un pacte pour l'avenir de la France, avec un fonds de 100 milliards pour produire en France.",
      context: "Vœux 2026 — contre-proposition économique du PCF",
      source: "PCF.fr, vœux 2026 de Fabien Roussel"
    }
  ],

  sources: [
    "https://www.cnews.fr/france/2026-07-03/presidentielle-2027-quels-sont-les-enjeux-du-40e-congres-du-parti-communiste (congrès de Lille, juillet 2026)",
    "https://www.politis.fr/articles/2026/05/politique-presidentielle-fabien-roussel-reve-dune-deuxieme-aventure/",
    "https://www.parlons-politique.fr/elections/fabien-roussel-remet-le-pcf-en-ordre-de-bataille-pour-2027-et-relance-le-debat-sur-lunite-a-gauche_15685/",
    "https://www.pcf.fr/soiree_nucleaire_discours (Plan Messmer 2)",
    "https://www.pcf.fr/voeux_2026_fabien_roussel (pacte, fonds 100 Md€)",
    "https://reporterre.net/Le-communiste-Fabien-Roussel-presente-un-programme-fort-en-nucleaire",
    "https://www.elyseescope.com/questions/roussel-pcf-candidature-programme-2027 (SMIC 1500€, 32h, 100 000 soignants)",
    "https://fr.wikipedia.org/wiki/Primaire_de_la_gauche_unitaire_de_2026 (position PCF sur la primaire)",
    "Cour des comptes (fraude fiscale 2019, Flamanville 2020) ; IRES/CLERSÉ (2022) ; DARES (bilan 35h) ; INSEE ; RTE Futurs énergétiques 2050 ; SSMSI (victimation) ; commission d'enquête sénatoriale narcotrafic (2024)"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["pcf-2027"] = CONTENT_ELECTIONS_PCF_2027;
