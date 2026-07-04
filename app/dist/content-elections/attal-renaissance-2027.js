const CONTENT_ELECTIONS_attal_renaissance_2027 = {
  id: "attal-renaissance-2027",
  name: "Gabriel Attal",
  party: "Renaissance",
  bloc: "centre",
  spectrum: 1.5,
  status: "déclaré",
  status_note: "Candidature officialisée en Aveyron (juin 2026) après un processus interne verrouillé : consultation des adhérents Renaissance (70% pour une désignation directe), bureau exécutif du 5 mai, puis Conseil national du 12 mai 2026 votant à 91% une motion l'invitant à se lancer (22 voix seulement pour une primaire interne). Grand meeting parisien le 5 juillet 2026. Rivalité non arbitrée avec Édouard Philippe (favori des sondages du bloc central : Philippe 14-16% vs Attal 8%, IFOP 25/06/2026) — aucune primaire commune du bloc central n'est actée. Plan finances publiques dévoilé le 2 juillet 2026 (Le Parisien).",
  color: "#f59e0b",

  thesis: "La France peut « redevenir la première puissance européenne » en gagnant quatre « chantiers capitaux » — école, salaires, frontières, IA — et en soldant « deux dettes », financière et climatique. Ligne : un macronisme de deuxième génération, plus dur sur les comptes (zéro déficit en 2037, année blanche, -100 000 fonctionnaires) et sur les frontières (« préférence travail »), incarné par la jeunesse et la promesse d'exécution rapide (décrets dès la rentrée 2027).",
  counter_thesis: "Steelman adverse : Attal est le produit le plus pur du système qu'il prétend dépasser — porte-parole, ministre, Premier ministre de Macron, il porte l'intégralité du bilan (dette +1 000 Md€ depuis 2017, école en chute PISA, services publics dégradés) sans l'once d'une rupture doctrinale. Sa radicalité budgétaire de juillet 2026 contredit ses propres positions de 2022 (« la baisse du nombre de fonctionnaires n'est plus notre politique ») : c'est un positionnement de marché électoral, pas une conviction. Un « zéro déficit en 2037 » engageant deux quinquennats au-delà du sien est le degré zéro de l'engagement falsifiable — la continuité de l'échec macroniste, présentée par son visage le plus jeune.",

  program_pillars: [
    "École : moins de 20 élèves par classe en primaire, brevet exigible pour le lycée, autorité",
    "Salaires : « droit au brut » — réduire l'écart brut/net",
    "Frontières : « préférence travail » pour l'immigration",
    "IA : programmes scolaires dès le collège, 20 millions de salariés formés en 5 ans",
    "Deux dettes : zéro déficit public en 2037, dette climatique traitée en parallèle",
    "Exécution rapide : décrets dès la rentrée 2027"
  ],

  proposals: [
    {
      title: "« Zéro déficit en 2037 » : 120 à 150 Md€ d'économies sans hausse d'impôts",
      domain: "économie",
      detail: "Trajectoire d'élimination totale du déficit public en dix ans, par 120-150 Md€ d'économies cumulées (réformes retraites, assurance-chômage, gel de prestations, effectifs publics), en excluant toute hausse d'impôts.",
      pros: [
        "Prend au sérieux la contrainte réelle : charge d'intérêts ~74 Md€ en 2026, premier ou deuxième poste du budget de l'État (Cour des comptes)",
        "Plus exigeant que les règles européennes (3%) : positionnement de crédibilité vis-à-vis des marchés et de Bruxelles",
        "Assume des mesures impopulaires avant l'élection plutôt qu'après — mérite démocratique rare"
      ],
      cons: [
        "L'horizon 2037 dépasse de 5 ans son propre mandat potentiel : l'engagement est structurellement infalsifiable",
        "« Sans hausse d'impôts » ferme la moitié de l'espace des solutions par posture, alors que les prélèvements exceptionnels 2025-2026 (contribution sur les hauts revenus) ont déjà été nécessaires",
        "Aucun gouvernement français n'a réalisé 120-150 Md€ d'économies structurelles ; le précédent le plus dur (2011-2014) a plafonné à ~50 Md€ avec un fort coût sur la croissance",
        "Zéro déficit n'est pas un optimum économique en soi : un déficit contenu finançant l'investissement peut être soutenable (consensus des économistes cité par la presse économique)"
      ],
      plausibility: 3,
      plausibility_note: "Juridiquement trivial, économiquement et politiquement hors de portée dans les termes annoncés : cela suppose ~12-15 Md€ d'économies nettes NOUVELLES chaque année pendant 10 ans, deux quinquennats de majorités acquises à cette ligne, et aucune récession. La Cour des comptes juge déjà fragile le retour à 3% en 2029.",
      cost_estimate: "120-150 Md€ d'économies revendiquées (chiffrage candidat, Le Parisien 02/07/2026) — aucune ventilation annuelle publiée ; pas de contre-chiffrage indépendant disponible à ce jour."
    },
    {
      title: "« Année blanche » : gel des prestations sociales en début de mandat",
      domain: "économie",
      detail: "Non-revalorisation des prestations sociales (et barèmes) pendant un an en début de quinquennat, en épargnant les petites retraites.",
      pros: [
        "Rendement immédiat et certain : un gel général rapporte 6-9 Md€ selon l'inflation (référentiels PLF/PLFSS)",
        "Mesure documentée et réversible, déjà pratiquée partiellement (sous-indexations 2019-2020)",
        "L'exemption des petites retraites limite l'effet sur la grande pauvreté"
      ],
      cons: [
        "C'est une baisse de revenu réel ciblée sur les plus dépendants des transferts : effet anti-redistributif documenté par l'IPP pour les sous-indexations passées",
        "Rendement dépendant de l'inflation : si elle est faible, l'économie s'évapore ; si elle est forte, le choc social est maximal",
        "Un an de gel ne change pas la trajectoire structurelle — mesure de signal plus que de fond"
      ],
      plausibility: 6,
      plausibility_note: "Faisable en LFSS avec majorité (précédents validés par le Conseil constitutionnel). Le risque est politique : c'est exactement le type de mesure qui a fait tomber le gouvernement Bayrou sur le budget 2026.",
      cost_estimate: "6-9 Md€ d'économie pour un gel d'un an toutes prestations (ordre de grandeur PLFSS, selon inflation ~1,5-2%)."
    },
    {
      title: "Suppression de 100 000 postes de fonctionnaires par départs volontaires",
      domain: "économie",
      detail: "Plan de départs volontaires et non-remplacements aboutissant à -100 000 postes dans la fonction publique, en « sanctuarisant » Éducation, Armées, Justice et Intérieur.",
      pros: [
        "Cible chiffrée et datable, contrairement au vague « fusionner des agences »",
        "Le canal « départs volontaires » évite les licenciements secs — précédent France Télécom/La Poste en gestion d'extinction",
        "L'État emploie ~2,5 M d'agents ; une revue des missions est défendable après 20 ans d'empilement"
      ],
      cons: [
        "Arithmétique quasi impossible : les ministères sanctuarisés concentrent plus des deux tiers des effectifs de l'État — l'effort porterait sur ~800 000 agents restants, soit -12,5% en un quinquennat (analyse Public Sénat)",
        "Virage à 180° non expliqué : en 2022, ministre des Comptes publics, Attal déclarait que la réduction du nombre de fonctionnaires n'était plus la politique du gouvernement",
        "Les plans de départs volontaires coûtent cher avant de rapporter (indemnités) : le rendement net sur un quinquennat est faible",
        "Ne dit pas quelles missions publiques sont abandonnées — le même angle mort que Philippe"
      ],
      plausibility: 3,
      plausibility_note: "Le périmètre annoncé rend l'objectif mathématiquement intenable sans toucher aux opérateurs et à la territoriale (non précisé). Précédent : l'objectif -120 000 de 2017 a été abandonné avec un solde quasi nul.",
      cost_estimate: "Économie brute théorique à terme : ~4 Md€/an (100 000 × ~40 k€ chargés). Coût initial des indemnités de départ volontaire non chiffré par le candidat ; Public Sénat souligne l'incohérence de périmètre."
    },
    {
      title: "Moins de 20 élèves par classe en primaire",
      domain: "éducation",
      detail: "Plafonnement à 20 élèves par classe dans tout le primaire (généralisation de la logique des dédoublements REP/REP+).",
      pros: [
        "S'appuie sur une politique évaluée : les dédoublements CP-CE1 en REP ont produit des gains mesurables, surtout pour les élèves défavorisés (DEPP)",
        "Lisible, populaire chez les enseignants comme chez les parents",
        "La baisse démographique (-100 000 élèves/an dans le 1er degré, INSEE/DEPP) crée une fenêtre : maintenir les postes suffit à baisser les ratios"
      ],
      cons: [
        "Coût massif si appliqué strictement : passer toutes les classes sous 20 exige des dizaines de milliers de postes ET des salles de classe — les dédoublements REP seuls ont mobilisé ~11 000 postes",
        "Contradiction frontale avec le plan -100 000 fonctionnaires, même « Éducation sanctuarisée » : sanctuariser n'est pas augmenter",
        "La littérature (DEPP, Piketty-Valdenaire) montre des effets significatifs surtout en éducation prioritaire — la généralisation aux zones favorisées a un rendement bien plus faible par euro"
      ],
      plausibility: 4,
      plausibility_note: "Atteignable partiellement grâce à la démographie scolaire déclinante, mais la promesse universelle (« moins de 20 partout ») exige des moyens que sa propre trajectoire budgétaire interdit. Non chiffrée par le candidat.",
      cost_estimate: "Non chiffré par le candidat. Référence : dédoublements REP/REP+ ≈ 11 000 postes ≈ 500-600 M€/an ; une généralisation <20 se compterait en milliards annuels + investissement immobilier communal."
    },
    {
      title: "Brevet obligatoire pour entrer au lycée + décrets « autorité » dès la rentrée 2027",
      domain: "éducation",
      detail: "Conditionner le passage au lycée à l'obtention du brevet (avec classes « prépa-lycée » pour les recalés), relever le niveau d'exigence, restaurer l'autorité de l'enseignant — par décrets pris dès l'été 2027 pour application à la rentrée.",
      pros: [
        "Réintroduit un signal d'exigence dans un système où le brevet ne conditionne rien (contrairement à la plupart des pays OCDE où un examen de fin de collège oriente)",
        "Continuité de son passage rue de Grenelle (groupes de niveau, uniforme expérimenté) : dossier qu'il connaît",
        "L'exécution par décret est réaliste : l'essentiel relève du réglementaire"
      ],
      cons: [
        "Sans moyens massifs pour les « prépa-lycée », la mesure fabrique une relégation : ~10-15% d'une classe d'âge échoue au brevet, concentrés dans les collèges défavorisés",
        "Son propre bilan de ministre tempère la promesse : les groupes de niveau annoncés en 2024 ont été largement vidés de leur substance sur le terrain (rapports IGÉSR)",
        "L'« autorité » par décret est un slogan : les déterminants documentés (attractivité du métier, remplacement, climat scolaire) sont budgétaires et pluriannuels"
      ],
      plausibility: 7,
      plausibility_note: "Réglementairement faisable, calendrier crédible. Le risque n'est pas juridique mais social (tri scolaire) et opérationnel (encadrement des recalés non financé).",
      cost_estimate: "Classes prépa-lycée pour ~80-100 000 élèves/an : ~4-6 000 postes équivalents, 300-500 M€/an — non chiffré par le candidat."
    },
    {
      title: "« Droit au brut » : réduire l'écart entre salaire brut et net",
      domain: "économie",
      detail: "Baisse des cotisations salariales pour rapprocher le net du brut, financée par « des économies sur les dépenses sociales » et une réforme de l'assurance-chômage.",
      pros: [
        "Cible le vrai point de douleur : le coin socio-fiscal français est parmi les plus élevés de l'OCDE (~47% du coût du travail au salaire moyen)",
        "Gain immédiat et visible sur la fiche de paie, sans passer par l'employeur",
        "Assume le financement par la dépense plutôt que par la dette — cohérence interne avec sa ligne budgétaire"
      ],
      cons: [
        "Transfert masqué : le « gain de brut » des salariés en emploi est financé par les prestations d'autres ménages (chômeurs, allocataires) — la redistribution inverse n'est jamais présentée comme telle",
        "Les cotisations salariales financent des droits contributifs (retraite, chômage) : les baisser sans baisser les droits creuse les caisses sociales — le précédent CSG 2018 a fini en usine à gaz",
        "Chiffrage absent : 1 point de cotisations salariales ≈ 6-7 Md€"
      ],
      plausibility: 5,
      plausibility_note: "Faisable en LFSS par paliers (précédent : bascule cotisations/CSG 2018). L'ampleur dépend entièrement des économies réalisées en face — donc de la partie la moins crédible du programme.",
      cost_estimate: "Non chiffré précisément. Référence : chaque point de salaire net rendu ≈ 6-7 Md€/an de recettes sociales en moins (PLFSS)."
    },
    {
      title: "« Préférence travail » pour l'immigration",
      domain: "immigration",
      detail: "Réorienter les flux migratoires vers l'immigration de travail, en durcissant les autres voies (familiale notamment) — « celui qui vient pour travailler est bienvenu, pas celui qui vient pour les prestations ».",
      pros: [
        "Rejoint le consensus des économistes sur la composition des flux : l'immigration de travail qualifiée a la contribution nette la plus documentée (OCDE, CAE)",
        "Moins brutal juridiquement que les quotas absolus : jouer sur les critères de visas/titres est dans la main du gouvernement",
        "Écarte la rhétorique identitaire au profit d'un critère économique affichable"
      ],
      cons: [
        "L'immigration familiale est protégée par la Constitution, l'art. 8 CEDH et le droit UE : la « préférence » ne peut s'exercer qu'à la marge — la promesse excède le levier réel",
        "Le sous-texte (« ceux qui viennent pour les prestations ») valide empiriquement une prémisse fausse : les études (INSEE, OCDE) ne montrent pas de migration massivement motivée par les prestations en France",
        "Reprend le cadre RN (tri des « bons » et « mauvais » immigrés) en langage gestionnaire"
      ],
      plausibility: 4,
      plausibility_note: "Réalisable sur l'immigration économique (titres « métiers en tension », passeport talent). Structurellement limité sur le familial et l'asile qui représentent la majorité des titres — même verrou juridique que pour Philippe et la loi immigration 2024, partiellement censurée.",
      cost_estimate: "Impact budgétaire faible et incertain ; aucune étude d'impact publiée."
    },
    {
      title: "Former 20 millions de salariés à l'IA en 5 ans",
      domain: "économie",
      detail: "Plan national de formation à l'intelligence artificielle couvrant 20 millions de salariés en cinq ans, plus intégration de l'IA dans les programmes scolaires dès le collège.",
      pros: [
        "Le diagnostic est solide : l'IA générative touche potentiellement les deux tiers des emplois (études OIT/FMI), et la France sous-investit dans la formation continue effective",
        "L'intégration scolaire précoce est cohérente avec ce que font Singapour ou l'Estonie",
        "Utilise une infrastructure existante (CPF, OPCO, plan d'investissement dans les compétences)"
      ],
      cons: [
        "20 millions = la quasi-totalité des salariés français (~21,5 M, INSEE) : à ce rythme (4 M/an), c'est 15 fois le flux actuel de formations longues — la cible est un slogan, pas un plan",
        "Aucun contenu défini : « formation à l'IA » peut aller de 2h de sensibilisation en ligne (sans effet mesurable) à des reconversions coûteuses",
        "Le CPF a déjà montré la dérive : dépense massive, contrôle qualité faible, fraudes (Cour des comptes sur le CPF)"
      ],
      plausibility: 3,
      plausibility_note: "Faisable seulement en dégradant la définition de « formé » jusqu'au module en ligne — auquel cas l'objectif sera « atteint » et vide. Aucun budget annoncé.",
      cost_estimate: "Non chiffré. Référence : à 500 €/personne (module court), 20 M de personnes = 10 Md€ ; à 2 000 € (formation réelle), 40 Md€ sur 5 ans."
    },
    {
      title: "Réformes retraites et assurance-chômage (nouvelle vague)",
      domain: "social",
      detail: "Nouvelles réformes des retraites et de l'assurance-chômage intégrées au plan « zéro déficit 2037 » — paramètres non détaillés à ce stade (durcissement des règles d'indemnisation, poursuite du recul de l'âge effectif).",
      pros: [
        "Cohérent avec sa ligne de Matignon 2024 (réforme assurance-chômage préparée puis suspendue par la dissolution)",
        "L'assurance-chômage française reste plus généreuse en durée que la moyenne UE pour les seniors — il existe des marges documentées (UNEDIC)"
      ],
      cons: [
        "Troisième réforme de l'assurance-chômage en 8 ans : l'instabilité normative elle-même a un coût (non-recours, contentieux, illisibilité)",
        "Les effets emploi des durcissements passés sont contestés : l'UNEDIC attribue l'essentiel des économies à la baisse des droits, pas au retour à l'emploi",
        "Rouvrir les retraites sans passage électoral explicite sur les paramètres = re-2023"
      ],
      plausibility: 5,
      plausibility_note: "L'assurance-chômage se réforme par décret de carence si les partenaires sociaux échouent — levier réel. Les retraites exigent une loi et une majorité. Paramètres inconnus = plausibilité moyenne par défaut.",
      cost_estimate: "Inclus dans les 120-150 Md€ revendiqués, sans ventilation publiée."
    },
    {
      title: "Faire de la France « la première puissance européenne » par l'IA (plan puissance)",
      domain: "international",
      detail: "Positionnement stratégique : gagner la course européenne de l'IA (calcul, modèles, adoption) comme levier de puissance économique, dans la continuité des sommets IA de 2025 et des investissements annoncés (109 Md€).",
      pros: [
        "La France a des atouts réels : Mistral AI, écosystème mathématique, électricité décarbonée pour les datacenters",
        "Continuité d'État avec les annonces du sommet IA de Paris (février 2025)",
        "Un des rares récits d'avenir positifs du bloc central — utile contre le déclinisme"
      ],
      cons: [
        "Les « 109 Md€ » annoncés en 2025 sont surtout des intentions d'investissements privés étrangers étalées et non contraignantes, pas un budget public",
        "L'échelle pertinente est européenne (Chips Act, calcul) : la promesse nationale survend la marge d'un seul État",
        "Aucun lien démontré entre « former 20 M de salariés » et la frontière technologique, qui dépend de quelques milliers de chercheurs et du capital-risque"
      ],
      plausibility: 5,
      plausibility_note: "En tant qu'orientation (soutien filière, commande publique, énergie), réaliste. En tant que promesse de « première puissance européenne », invérifiable et hors du contrôle d'un gouvernement.",
      cost_estimate: "109 Md€ d'investissements annoncés au sommet IA 2025 (majoritairement privés/étrangers, non budgétaires) ; part publique réelle non consolidée."
    }
  ],

  fallacies: [
    {
      claim: "« Zéro déficit en 2037. »",
      fallacy_type: "engagement infalsifiable (horizon glissant)",
      why_fallacious: "L'échéance est fixée 5 ans après la fin du mandat sollicité : aucun électeur ne pourra jamais sanctionner la non-tenue de la promesse, et son auteur ne sera comptable que de la « trajectoire », concept infiniment réinterprétable. C'est structurellement le même artifice que les objectifs climat 2050 des entreprises.",
      correction: "Un engagement évaluable serait : solde à -3% fin 2029 et -1,5% fin 2032, avec les mesures votées la première année et une clause de rendez-vous chiffrée à mi-mandat.",
      severity: "high"
    },
    {
      claim: "« 120 à 150 milliards d'économies, sans augmenter les impôts. »",
      fallacy_type: "chiffrage magique",
      why_fallacious: "Le montant global est asséné sans ventilation annuelle ni base de calcul vérifiable ; la fourchette de 30 Md€ d'écart (20-25%) révèle elle-même l'absence de chiffrage réel. Exclure a priori toute recette ferme la moitié de l'espace des solutions pour des raisons de positionnement, pas d'optimisation.",
      correction: "Publier la matrice mesure par mesure (rendement, année, hypothèses), comme le font l'IFRAP ou l'Institut Montaigne pour les chiffrages de campagne — et laisser les instituts la contre-expertiser.",
      severity: "high"
    },
    {
      claim: "« -100 000 fonctionnaires, en sanctuarisant l'Éducation, les Armées, la Justice et l'Intérieur. »",
      fallacy_type: "cherry-picking de périmètre (arithmétique masquée)",
      why_fallacious: "Annoncer simultanément la cible globale (impressionnante) et les exemptions (rassurantes) sans dire que les exemptions couvrent plus des deux tiers des effectifs de l'État. L'effort réel — -12,5% sur les ministères restants en 5 ans — n'est jamais énoncé car il est manifestement intenable.",
      correction: "Soit réduire la cible, soit inclure opérateurs et fonction publique territoriale dans le périmètre (et l'assumer devant les élus locaux), soit renoncer aux sanctuarisations.",
      severity: "high"
    },
    {
      claim: "« Nous pouvons redevenir la première puissance européenne à la condition de réussir ces quatre chantiers » (école, salaires, frontières, IA).",
      fallacy_type: "causalité simpliste + définition invérifiable",
      why_fallacious: "Le lien causal entre quatre chantiers hétérogènes et un rang de « puissance » jamais défini (PIB ? PIB/hab ? influence ?) est postulé, pas démontré. L'Allemagne conserve ~40% de PIB de plus que la France : aucun des quatre chantiers ne comble mécaniquement cet écart.",
      correction: "Définir la métrique et l'écart à combler, puis montrer la contribution chiffrée de chaque chantier. En l'état, c'est un slogan de puissance, catégorie rhétorique, pas un objectif.",
      severity: "medium"
    },
    {
      claim: "« Aller droit au brut » financé par « des économies sur les dépenses sociales ».",
      fallacy_type: "« en même temps » qui masque le transfert",
      why_fallacious: "Présente comme un gain net pour « les Français » ce qui est un transfert entre Français : le salarié en emploi gagne ce que perdent les allocataires (gel, durcissement chômage). L'opération peut se défendre (inciter au travail) mais elle est vendue sans son coût distributif, comme si l'argent venait de nulle part.",
      correction: "Publier l'incidence par décile de niveau de vie (comme l'IPP le fait pour chaque budget) : qui gagne, qui perd, de combien.",
      severity: "medium"
    },
    {
      claim: "« Celui qui vient pour travailler est le bienvenu » — la « préférence travail » comme critère central de la politique migratoire.",
      fallacy_type: "prémisse implicite fausse (homme de paille statistique)",
      why_fallacious: "Sous-entend qu'une part importante de l'immigration actuelle vient « pour les prestations », prémisse non étayée par les données (les titres délivrés sont d'abord familiaux et étudiants ; le non-recours aux droits des étrangers récents est documenté). L'argument construit un adversaire statistique commode pour justifier le tri.",
      correction: "Débattre sur les données réelles de composition des flux (ministère de l'Intérieur, INSEE) et sur les leviers juridiquement disponibles, qui sont étroits sur le familial et l'asile.",
      severity: "medium"
    },
    {
      claim: "« Des décrets dès l'été 2027, appliqués à la rentrée » — la vitesse d'exécution comme preuve de sérieux.",
      fallacy_type: "technocratisme (confusion entre décision et transformation)",
      why_fallacious: "Assimile la production de normes à la production de résultats. Son propre passage à l'Éducation illustre l'écart : groupes de niveau décrétés en 2024, largement non appliqués en 2025 (rapports d'inspection). Dans un système de 1,2 M d'agents, le décret est le début du problème, pas sa solution.",
      correction: "Annoncer les moyens d'exécution (formation, remplacement, pilotage, données de suivi publiques) avec le même niveau de détail que les annonces normatives.",
      severity: "medium"
    }
  ],

  data_issues: [
    {
      claim: "« Moins de 20 élèves par classe en primaire » présenté comme finançable dans un plan d'économies historiques.",
      problem: "invérifiable",
      reality: "Aucun chiffrage publié. Les seuls dédoublements REP/REP+ (CP-CE1) ont mobilisé ~11 000 postes pour ~20% d'une classe d'âge ; une généralisation sous 20 élèves, même aidée par la baisse démographique, se chiffre en milliards annuels et en immobilier scolaire à la charge des communes — incompatible avec un plan global de -100 000 postes sans arbitrage explicite.",
      source: "DEPP (évaluations dédoublements) ; Cour des comptes, rapports sur l'Éducation nationale ; analyse Public Sénat sur le périmètre des effectifs"
    },
    {
      claim: "« Supprimer 100 000 postes de fonctionnaires » en préservant Éducation, Armées, Justice, Intérieur.",
      problem: "exagéré",
      reality: "Les ministères préservés concentrent plus des deux tiers des postes de l'État ; l'effort porterait sur ~800 000 agents restants, soit une réduction d'environ un huitième en cinq ans — sans précédent. En 2022, le même Gabriel Attal, ministre des Comptes publics, déclarait que la réduction du nombre de fonctionnaires n'était « plus la politique » du gouvernement.",
      source: "Public Sénat, « Réduction du nombre de fonctionnaires : le virage à 180 degrés de Gabriel Attal » ; DGAFP, rapport annuel sur l'état de la fonction publique"
    },
    {
      claim: "« Former 20 millions de salariés à l'IA en cinq ans. »",
      problem: "invraisemblable en l'état",
      reality: "La France compte ~21,5 millions de salariés (INSEE) : l'objectif revient à former la quasi-totalité du salariat, soit 4 millions de personnes par an — plusieurs fois la capacité annuelle totale de l'appareil de formation continue pour des formations substantielles. Réalisable uniquement en comptant des sensibilisations en ligne de quelques heures.",
      source: "INSEE, emploi salarié ; Cour des comptes, rapports sur le CPF et la formation professionnelle"
    },
    {
      claim: "« 120 à 150 milliards d'économies » sans hausse d'impôts.",
      problem: "invérifiable",
      reality: "Aucune ventilation mesure par mesure, année par année n'est publiée au 4 juillet 2026 ; la fourchette elle-même (±30 Md€) signale l'absence de chiffrage consolidé. Pour référence : l'ensemble des plans d'économies effectivement réalisés 2011-2014 a atteint ~50 Md€, avec hausses d'impôts massives en parallèle.",
      source: "Le Parisien / franceinfo, 02/07/2026 ; Cour des comptes, situation des finances publiques début 2026 ; INSEE, comptes des administrations publiques"
    },
    {
      claim: "Le récit d'exécution rapide fondé sur son bilan de Matignon (« j'ai montré qu'on pouvait agir vite »).",
      problem: "sorti de contexte",
      reality: "Son passage à Matignon (janvier-septembre 2024) s'est achevé sans grand texte adopté : la réforme assurance-chômage a été suspendue, la stratégie des « 100 jours » n'a pas tenu ses promesses selon les constitutionnalistes (Benjamin Morel), et la séquence s'est close sur la dissolution perdue par son camp.",
      source: "Public Sénat, « 100 jours à Matignon : la stratégie Attal n'a pas tenu toutes ses promesses »"
    }
  ],

  problematic_arguments: [
    {
      argument: "La jeunesse (37 ans) et la « nouvelle génération » comme argument central de rupture.",
      why_problematic: "Attal est en responsabilité nationale continue depuis 2017 (porte-parole, ministre, Premier ministre) : il est générationnellement neuf mais politiquement l'héritier le plus direct du bilan sortant. L'argument générationnel substitue un marqueur biographique à une différenciation programmatique.",
      what_it_hides: "L'absence de bilan personnel défendable distinct de celui de Macron, et la question jamais tranchée : qu'aurait-il fait différemment depuis 2017 ?"
    },
    {
      argument: "La désignation par Renaissance (91% du Conseil national) présentée comme légitimité du bloc central.",
      why_problematic: "Le processus a écarté toute primaire réelle (22 voix pour) dans un parti dont il est secrétaire général — juge et partie. Cette « unanimité de façade » ne règle pas la question centrale : Philippe le devance de 6 à 8 points dans tous les sondages, et aucun mécanisme de départage du bloc central n'existe.",
      what_it_hides: "Le risque maximal du camp : deux (voire trois avec Darmanin/de Villepin) candidatures centrales simultanées, aucune ne passant le 1er tour face à Bardella à 36% — le scénario 2002 inversé."
    },
    {
      argument: "Le durcissement budgétaire et migratoire de 2026 présenté comme « courage » et « vérité ».",
      why_problematic: "Chacune de ces positions inverse une position antérieure du même homme (fonctionnaires 2022, « pas d'austérité » 2024, ligne sociale de son passage à Matignon revendiquée alors comme bouclier contre le RN). La conversion suit exactement le déplacement du centre de gravité électoral — signature d'un positionnement de marché plutôt que d'une doctrine.",
      what_it_hides: "L'incertitude fondamentale sur ce qu'il ferait réellement au pouvoir : ses positions ayant une durée de vie moyenne de deux ans, l'électeur achète un style, pas un contrat."
    },
    {
      argument: "« Deux dettes, financière et climatique » — l'équivalence affichée entre les deux urgences.",
      why_problematic: "Le plan publié traite la dette financière avec des mesures dures et datées (année blanche, -100 000 postes) et la dette climatique sans aucune mesure d'ampleur équivalente rendue publique — l'équivalence est rhétorique, l'asymétrie est réelle. Or un plan zéro déficit sans trajectoire d'investissement climat se paie en mur d'investissement plus tard (rapport Pisani-Ferry/Mahfouz : ~66 Md€/an d'investissements supplémentaires nécessaires).",
      what_it_hides: "Que la consolidation budgétaire proposée rend l'investissement climatique public quasi impossible sans recettes nouvelles — qu'il exclut par ailleurs."
    }
  ],

  strong_ideas: [
    {
      idea: "Conditionner le passage au lycée à un socle vérifié (brevet exigible + prépa-lycée pour les recalés).",
      why_strong: "La France est l'un des rares pays OCDE où l'examen de fin de collège n'a aucune conséquence d'orientation : l'exigence certificative crédibilise le diplôme et force le système à traiter les lacunes AVANT le lycée plutôt que de les diluer. Fonctionne dans les systèmes à examens externes (littérature Woessmann : les examens de sortie standardisés sont corrélés à de meilleurs résultats).",
      adoptable_by: "La droite (exigence) comme la gauche (à condition de financer sérieusement les prépa-lycée — c'est la version Savary/Peillon du « redoublement utile »)."
    },
    {
      idea: "Réduire le coin socio-fiscal sur le travail (« droit au brut »), financé explicitement par la dépense plutôt que par la dette.",
      why_strong: "Le principe — rendre le travail plus rémunérateur en jouant sur les cotisations plutôt que sur des primes d'assistance — est soutenu par une large littérature (OCDE, CAE) et traite la « smicardisation » mieux que les coups de pouce au SMIC. L'honnêteté du financement par économies (plutôt que « ça s'autofinancera ») est supérieure à la moyenne des programmes.",
      adoptable_by: "Philippe (bouclier de charges voisin), Darmanin (« le travail doit payer »), et une partie de la gauche travailliste si le financement épargne les minima — l'idée est le vrai consensus latent du bloc central."
    },
    {
      idea: "Intégrer l'IA aux programmes scolaires dès le collège.",
      why_strong: "Coût marginal faible, précédents étrangers réels (Estonie, Singapour, Corée), et cohérent avec l'évidence que l'usage non encadré est déjà massif chez les élèves — mieux vaut une littératie critique organisée qu'une interdiction contournée.",
      adoptable_by: "Transpartisan quasi immédiat ; le débat utile porte sur le contenu (littératie critique vs adoption d'outils) et la formation des enseignants, pas sur le principe."
    },
    {
      idea: "Année blanche assumée AVANT l'élection.",
      why_strong: "Indépendamment du fond, annoncer une mesure impopulaire, datée et chiffrable dix mois avant le scrutin crée un mandat explicite — exactement ce qui a manqué aux réformes de 2019 et 2023. Si elle est votée, sa légitimité démocratique sera difficilement contestable.",
      adoptable_by: "Méthodologiquement, tous les candidats ; sur le fond, Philippe pourrait l'intégrer à sa trajectoire 2% — la mesure est plus proche de lui que d'aucun autre."
    }
  ],

  electorate: "Électorat le plus jeune et le plus urbain du bloc central : diplômés du supérieur des métropoles, actifs CSP+ de 30-50 ans, sympathisants Renaissance historiques restés fidèles à la marque Macron. Crédité de ~8% (IFOP juin 2026), il mord peu sur les retraités (cœur de l'électorat Philippe) et pas du tout sur les catégories populaires. Atout spécifique : notoriété et image de compétence chez les modérés de centre-gauche orphelins ; faiblesse structurelle : il incarne la continuité pour un pays à ~70% demandeur d'alternance (baromètres Elabe/Ipsos 2026).",

  key_quotes: [
    {
      text: "Nous pouvons redevenir la première puissance européenne à la condition de réussir sur ces quatre sujets que j'appelle nos chantiers capitaux : l'école, les salaires, les frontières et l'IA.",
      context: "Officialisation de sa candidature et présentation de son cadre programmatique",
      source: "Déplacement en Aveyron / presse nationale (Orange Actu, La Gazette France), juin 2026"
    },
    {
      text: "Zéro déficit en 2037.",
      context: "Présentation de son plan de redressement des finances publiques : année blanche, -100 000 fonctionnaires, réformes retraites et assurance-chômage, 120-150 Md€ d'économies sans hausse d'impôts",
      source: "Interview au Parisien, 2 juillet 2026 ; repris par franceinfo"
    },
    {
      text: "Aller droit au brut.",
      context: "Formule de son chantier « salaires » : réduire l'écart entre salaire brut et salaire net par des économies sur les dépenses sociales et une réforme de l'assurance-chômage",
      source: "Presse nationale, juin 2026"
    },
    {
      text: "Une préférence travail pour l'immigration.",
      context: "Chantier « frontières » : réorientation des flux vers l'immigration de travail",
      source: "Presse nationale, juin 2026"
    },
    {
      text: "La baisse du nombre de fonctionnaires, ce n'est plus la politique que nous menons.",
      context: "Position tenue comme ministre délégué aux Comptes publics (2022) — à contraster avec son plan de juillet 2026 (-100 000 postes) ; paraphrase fidèle du virage documenté par Public Sénat",
      source: "Public Sénat, « le virage à 180 degrés de Gabriel Attal », juillet 2026"
    }
  ],

  sources: [
    "https://www.publicsenat.fr/actualites/politique/presidentielle-2027-gabriel-attal-officialise-sa-candidature-en-aveyron",
    "https://www.franceinfo.fr/politique/gabriel-attal/zero-deficit-en-2037-gabriel-attal-devoile-une-serie-de-mesures-pour-retablir-les-finances-publiques-en-vue-de-la-presidentielle_8091860.html",
    "https://www.publicsenat.fr/actualites/politique/reduction-de-nombre-de-fonctionnaires-le-virage-a-180-degres-de-gabriel-attal",
    "https://www.publicsenat.fr/actualites/politique/100-jours-a-matignon-la-strategie-attal-na-pas-tenu-toutes-ses-promesses-analyse-benjamin-morel",
    "https://www.cnews.fr/france/2026-05-12/presidentielle-2027-designation-de-gabriel-attal-ou-primaire-le-parti-renaissance",
    "https://actu.orange.fr/france/quot-ecole-salaires-frontieres-et-ia-quot-les-quatre-quot-chantiers-capitaux-quot-presidentiels-de-gabriel-attal-CNT000002pzaVy.html",
    "https://fr.wikipedia.org/wiki/Liste_de_sondages_sur_l%27%C3%A9lection_pr%C3%A9sidentielle_fran%C3%A7aise_de_2027",
    "https://www.ccomptes.fr/fr/publications/la-situation-des-finances-publiques-debut-2026"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["attal-renaissance-2027"] = CONTENT_ELECTIONS_attal_renaissance_2027;
