const CONTENT_ELECTIONS_philippe_horizons_2027 = {
  id: "philippe-horizons-2027",
  name: "Édouard Philippe",
  party: "Horizons",
  bloc: "centre-droit",
  spectrum: 3,
  status: "déclaré",
  status_note: "Candidat déclaré depuis le 3 septembre 2024 (interview Le Point) — première déclaration du cycle 2027. En juillet 2026 : favori du bloc central mais en tassement dans les sondages (IFOP 25/06/2026 : 14-16% au 1er tour, 20 points derrière Bardella à 36%). Programme complet annoncé comme « massif », dévoilé par étapes ; méthode de gouvernement présentée à Reims puis fin juin 2026.",
  color: "#0e7490",

  thesis: "La France décroche parce qu'elle ne produit pas assez, dépense mal et n'assume plus l'autorité de l'État. Il faut un choc de vérité budgétaire et productive — travailler plus longtemps, produire plus, verrouiller la dépense par une règle d'or constitutionnelle — exécuté vite et fort dès l'été 2027 (dissolution + référendums + ordonnances), par une coalition droite-centre qui refuse l'extrême droite.",
  counter_thesis: "Steelman adverse : Philippe est l'incarnation de la continuité macroniste qui a produit la situation qu'il dénonce — il fut le Premier ministre de la taxe carbone qui a déclenché les Gilets jaunes, du 49.3 sur les retraites et des promesses de réduction d'effectifs jamais tenues, pendant que la dette filait. Son « ordre et réformes » est une austérité de l'offre sans projet de société : les mêmes recettes (baisses de charges, travailler plus) appliquées depuis 2017 n'ont redressé ni les comptes ni la production. Le passage en force assumé (ordonnances, référendums-plébiscites, dissolution immédiate) traite la crise démocratique par plus de verticalité — exactement ce qui nourrit le RN.",

  program_pillars: [
    "Produire : économie de l'offre, baisses de charges ciblées, relocalisations, nucléaire",
    "Protéger : régalien renforcé (police, prisons, quotas migratoires), défense à 3% du PIB",
    "Éduquer : fondamentaux, évaluation nationale, mérite et lycées d'excellence",
    "Soigner : réorganisation du système de santé par ordonnances",
    "Assainir : règle d'or budgétaire constitutionnelle, déficit à 2% en 2032",
    "Gouverner vite : dissolution + 3 référendums + ordonnances dès l'été 2027"
  ],

  proposals: [
    {
      title: "Référendum : dose de capitalisation collective dans les retraites",
      domain: "social",
      detail: "Ajouter au système par répartition un étage de capitalisation collective obligatoire « en s'inspirant de l'Agirc-Arrco », validé par référendum dès l'été 2027. Objectif affiché : 10-15% des pensions versées par capitalisation d'ici 15 ans.",
      pros: [
        "Diversifie le financement des retraites face au mur démographique (ratio cotisants/retraités de 1,7 aujourd'hui vers 1,4 en 2050 selon le COR)",
        "Oriente une épargne massive vers le financement des entreprises françaises — Philippe l'assume comme objectif de politique industrielle",
        "Des précédents fonctionnent : ERAFP pour les fonctionnaires, fonds de pension suédois AP7, régime complémentaire capitalisé des pharmaciens"
      ],
      cons: [
        "Période de transition coûteuse : une génération doit payer deux fois (les pensions courantes par répartition + sa propre capitalisation)",
        "Expose les pensions au risque de marché ; les scénarios de rendement présentés sont rarement nets de frais et de crises",
        "Un référendum sur un sujet aussi technique se transforme en plébiscite pour/contre le président — risque d'échec type 2005",
        "Ne résout pas le déséquilibre de court terme de la répartition, ce que Philippe reconnaît lui-même (« cela n'évitera pas de devoir travailler plus longtemps »)"
      ],
      plausibility: 5,
      plausibility_note: "Référendum art. 11 juridiquement possible (organisation des pouvoirs publics / politique sociale depuis la révision de 2008 — débat constitutionnel réel sur le périmètre). Le vrai obstacle est politique : perdre le référendum tue le quinquennat. La montée en charge sur 15 ans dépasse deux mandats.",
      cost_estimate: "Transition non chiffrée par le candidat. Ordre de grandeur : chaque point de pension basculé vers la capitalisation nécessite des cotisations supplémentaires ou une baisse des droits répartition ; l'Agirc-Arrco gère ~68 Md€ de réserves — pour 10-15% des ~380 Md€ de pensions annuelles, il faudrait constituer plusieurs centaines de Md€ d'actifs."
    },
    {
      title: "Règle d'or budgétaire constitutionnelle (État + Sécurité sociale)",
      domain: "économie",
      detail: "Inscrire dans la Constitution, par référendum, une limite aux déficits publics s'appliquant aussi au budget de la Sécurité sociale. Trajectoire annoncée : déficit ramené de ~5% à 2% du PIB en 2032.",
      pros: [
        "Crédibilise la signature française auprès des marchés alors que la charge d'intérêts atteint ~74 Md€ en 2026 (Cour des comptes)",
        "Le précédent allemand (Schuldenbremse 2009) a réellement contraint la dépense",
        "Étendre la règle à la Sécu attaque le vrai foyer de dérive (l'ONDAM dépassé quasi chaque année)"
      ],
      cons: [
        "La France a déjà ratifié une règle d'or (TSCG 2012, loi organique) — jamais respectée : constitutionnaliser ne crée aucune économie par soi-même",
        "Une règle rigide est procyclique : elle force l'austérité en récession (critique standard, y compris du FMI sur la Schuldenbremse, que l'Allemagne a fini par assouplir en 2025 pour la défense)",
        "Reporte l'arbitrage douloureux (quelles dépenses couper ?) sur un mécanisme, sans le trancher devant les électeurs"
      ],
      plausibility: 4,
      plausibility_note: "Révision constitutionnelle par référendum art. 89 exige un vote préalable des deux chambres en termes identiques — improbable sans majorité ; la voie art. 11 directe (précédent 1962) serait contestée. Et une règle votée n'implique pas une trajectoire tenue : passer de 5-6% à 2% du PIB exige ~100-130 Md€ d'effort structurel.",
      cost_estimate: "La mesure ne coûte rien ; la trajectoire qu'elle impose représente ~3 points de PIB d'ajustement (~90-110 Md€) d'ici 2032, non détaillés poste par poste à ce stade."
    },
    {
      title: "Stratégie « flash » : dissolution immédiate + 3 référendums + ordonnances",
      domain: "institutions",
      detail: "Dissoudre l'Assemblée nationale dès l'élection pour obtenir une majorité, puis lancer trois référendums (capitalisation, règle d'or, habilitation à légiférer par ordonnances sur santé, éducation, justice) et réformer par ordonnances dès l'été 2027.",
      pros: [
        "Lucide sur la leçon de 2022-2027 : sans majorité et sans vitesse, rien ne passe — la fenêtre de légitimité post-élection est courte",
        "La dissolution post-présidentielle est la logique historique de la Ve République (1981, 1988)",
        "Assume devant les électeurs la méthode avant l'élection — plus honnête que de la découvrir après"
      ],
      cons: [
        "Un référendum d'habilitation à légiférer par ordonnances sur trois secteurs entiers est un chèque en blanc — contournement du Parlement inédit depuis 1958",
        "Trois référendums simultanés ou rapprochés deviennent un plébiscite sur la personne : un seul « non » casse la dynamique",
        "Traiter la défiance démocratique par plus de verticalité risque de nourrir la radicalisation qu'il prétend endiguer"
      ],
      plausibility: 6,
      plausibility_note: "Dissolution : droit discrétionnaire du président (art. 12), faisable. Référendum art. 11 sur l'organisation des pouvoirs publics : possible mais le champ « habilitation à ordonnances » serait juridiquement disputé (le Conseil d'État a toujours encadré l'art. 38). Le succès dépend entièrement du résultat des législatives qui suivent.",
      cost_estimate: "Coût d'organisation de 3 référendums : ~200-250 M€ chacun (base : coût d'un scrutin national, ministère de l'Intérieur)."
    },
    {
      title: "Travailler plus longtemps (67 ans évoqué, puis « pas de chiffre totémique »)",
      domain: "social",
      detail: "Allongement de la durée de travail au-delà de la réforme de 2023. Philippe a publiquement évoqué 65-67 ans par le passé ; en juin 2026 il refuse de fixer un « chiffre totémique » mais maintient qu'« il faudra travailler plus longtemps ».",
      pros: [
        "Cohérent avec la démographie : l'espérance de vie à 60 ans a gagné ~3 ans depuis 1990 (INSEE)",
        "C'est le levier qui rapporte le plus vite à horizon 2030 selon le COR",
        "Aligne la France sur ses voisins (Allemagne, Italie, Pays-Bas : 67 ans programmés)"
      ],
      cons: [
        "Le taux d'emploi des 60-64 ans reste ~38% (DARES) : repousser l'âge sans emploi senior transfère le coût vers chômage, invalidité et minima — effets documentés par la DREES après 2010",
        "Injuste pour les carrières longues et les métiers pénibles si les correctifs restent cosmétiques",
        "Politiquement explosif après le passage en force de 2023 : refaire une réforme d'âge sans référendum dédié serait perçu comme un déni"
      ],
      plausibility: 6,
      plausibility_note: "Faisable par la loi ordinaire (précédents 2010, 2023) si majorité. L'obstacle est social et politique, pas juridique. Le flou volontaire sur l'âge cible rend l'engagement inévaluable.",
      cost_estimate: "Chaque année d'âge légal en plus ≈ 10-18 Md€ d'économies annuelles à terme (fourchettes COR/DREES), amputées de 20-30% par les effets de report sur les autres prestations."
    },
    {
      title: "Bouclier de charges sur les salaires de 1 à 2,5 SMIC + heures sup désocialisées",
      domain: "économie",
      detail: "Réduction des cotisations sur les salaires intermédiaires (1-2,5 SMIC) pour casser les trappes à bas salaires, et suppression des charges sociales sur les heures supplémentaires.",
      pros: [
        "Cible la vraie anomalie française : la « smicardisation » — les allègements actuels concentrés sous 1,6 SMIC découragent les hausses de salaire",
        "Gain de pouvoir d'achat sans dépense publique directe apparente",
        "Continuité avec des dispositifs connus des entreprises (TEPA 2007 sur les heures sup)"
      ],
      cons: [
        "Coût budgétaire massif jamais chiffré publiquement : les allègements existants coûtent déjà ~75-80 Md€/an (annexes PLFSS) — étendre à 2,5 SMIC en ajoute des dizaines de milliards",
        "Contradiction frontale avec l'objectif déficit 2% : chaque baisse de recettes doit être compensée par des coupes non précisées",
        "Efficacité emploi des allègements au-dessus de 1,6 SMIC faible selon la littérature (rapports Comité de suivi des aides, France Stratégie)"
      ],
      plausibility: 5,
      plausibility_note: "Techniquement simple (loi de finances/LFSS). Le verrou est budgétaire : mesure de dizaines de Md€ dans un pays à 5-6% de déficit — soit c'est réduit, soit c'est financé par des coupes que le programme ne détaille pas encore.",
      cost_estimate: "Non chiffré par le candidat. Référence : la désocialisation des heures sup version 2019 coûte ~2-3 Md€/an ; un bouclier 1-2,5 SMIC se compte en 10-25 Md€/an selon le paramétrage (ordres de grandeur PLFSS/IFRAP)."
    },
    {
      title: "Plan de relocalisation industrielle de 80-100 Md€ sur 5 ans",
      domain: "économie",
      detail: "Programme d'investissement et d'incitations pour relocaliser des chaînes de production stratégiques (santé, électronique, énergie), présenté comme la suite en plus gros de France 2030.",
      pros: [
        "Diagnostic partagé sur tout le spectre : la part de l'industrie dans le PIB (~10%) est parmi les plus faibles d'Europe",
        "S'appuie sur un outil qui a partiellement fonctionné (France 2030 : 54 Md€, effets réels sur batteries et santé)",
        "Cohérent avec la doctrine « produire » — pas une subvention de guichet mais des filières"
      ],
      cons: [
        "80-100 Md€ non financés dans un budget à 5-6% de déficit — même en incluant du capital privé, la part publique n'est pas précisée",
        "Les évaluations de France 2030 (Cour des comptes 2024-2025) pointent la dispersion et la faible mesure d'impact — doubler la mise sans corriger la gouvernance est risqué",
        "Tension avec le droit européen des aides d'État si ciblage national agressif"
      ],
      plausibility: 4,
      plausibility_note: "Un plan pluriannuel est faisable (précédent France 2030), mais l'enveloppe annoncée est incompatible en l'état avec la trajectoire déficit 2% de son propre programme, sauf redéploiement massif non documenté.",
      cost_estimate: "80-100 Md€ sur 5 ans annoncés par le candidat (mix public/privé non ventilé) — source : programme Philippe repris par la presse (élection-presidentielle-francaise-2027.fr, presse régionale)."
    },
    {
      title: "Quotas annuels d'immigration + révision de l'accord franco-algérien de 1968",
      domain: "immigration",
      detail: "Fixation par le Parlement de quotas annuels par catégorie, durcissement de l'immigration familiale, renégociation ou dénonciation de l'accord franco-algérien de 1968, immigration de travail maintenue dans les métiers en tension, exécution facilitée des OQTF.",
      pros: [
        "Le vote parlementaire annuel de quotas rend l'arbitrage public et traçable — plus honnête que le statu quo par circulaires",
        "L'accord de 1968 crée réellement un régime dérogatoire pour les ressortissants algériens ; sa renégociation est une position désormais transpartisane à droite et au centre",
        "Assumer l'immigration de travail en tension est plus cohérent économiquement que le discours « zéro immigration »"
      ],
      cons: [
        "Les quotas ne peuvent pas couvrir les flux principaux : asile (convention de Genève) et vie familiale (art. 8 CEDH, directives UE) échappent largement au contingentement — le Conseil d'État l'a rappelé en 2019",
        "La dénonciation unilatérale de l'accord de 1968 déclencherait une crise diplomatique aux effets migratoires incertains (coopération consulaire sur les OQTF déjà quasi nulle)",
        "Reprend l'agenda RN en version gestionnaire — risque documenté de légitimer l'original plutôt que la copie"
      ],
      plausibility: 5,
      plausibility_note: "Quotas sur l'immigration économique : faisables. Sur le familial et l'asile : bloqués par la Constitution (droit d'asile, préambule 1946), la CEDH et le droit UE — une partie de la promesse est donc juridiquement creuse sans révision constitutionnelle et renégociation européenne.",
      cost_estimate: "Impact budgétaire marginal ; l'exécution des OQTF a un coût net (rétention, escortes : ~4 000-5 000 € par éloignement selon la Cour des comptes 2024)."
    },
    {
      title: "15 000 policiers et gendarmes + 10 000 places de prison supplémentaires",
      domain: "sécurité",
      detail: "Recrutement de 15 000 policiers/gendarmes sur le quinquennat, construction de 10 000 places de prison, expulsion systématique des délinquants étrangers condamnés.",
      pros: [
        "Répond à une surpopulation carcérale record (~130% en moyenne, >150% en maison d'arrêt, chiffres ministère de la Justice 2026)",
        "Continuité crédible : il a une expérience d'exécution (loi de programmation sécurité sous son gouvernement)",
        "L'expulsion des étrangers condamnés est juridiquement possible et majoritairement soutenue dans l'opinion"
      ],
      cons: [
        "Le plan « 15 000 places » de 2018 (le sien) puis celui de 2022 ont accumulé les retards massifs — la Cour des comptes constate ~4 500 places nettes livrées sur les 15 000 promises pour 2027",
        "Recruter 15 000 agents se heurte au vivier : les concours de gardien de la paix peinent déjà à remplir leurs places",
        "Coût cumulé (masse salariale pérenne + immobilier pénitentiaire) rarement intégré aux trajectoires d'économies affichées par ailleurs"
      ],
      plausibility: 6,
      plausibility_note: "Rien d'inconstitutionnel, tout est budgétaire et opérationnel. Les précédents (2018, 2022) montrent un taux de réalisation de ~30-50% sur un quinquennat.",
      cost_estimate: "10 000 places ≈ 4-5 Md€ d'investissement (400-500 k€/place, référentiel APIJ) ; 15 000 agents ≈ 900 M€-1,1 Md€/an de masse salariale pérenne."
    },
    {
      title: "École : fondamentaux, évaluation nationale annuelle, 50 lycées d'excellence",
      domain: "éducation",
      detail: "Recentrage du primaire sur lire-écrire-compter dès le CP, suppression d'options jugées accessoires, évaluation nationale annuelle des élèves, création de 50 lycées d'excellence avec classes préparatoires dans les territoires délaissés.",
      pros: [
        "Répond à l'effondrement documenté du niveau (PISA 2022 : chute historique en maths ; TIMSS : dernier de l'UE en maths en CM1)",
        "L'évaluation annuelle standardisée donne enfin un pilotage par les données — ce que font les systèmes qui progressent (Portugal, Pologne)",
        "Les lycées d'excellence territoriaux s'appuient sur un précédent évalué positivement (internats d'excellence : effets significatifs mesurés par l'École d'économie de Paris)"
      ],
      cons: [
        "« Retour aux fondamentaux » est annoncé par chaque ministre depuis 15 ans (Blanquer inclus, sous le gouvernement... Philippe) sans inversion de tendance : le problème est l'exécution (formation, remplacement, attractivité), pas la doctrine",
        "50 lycées d'excellence = politique de l'écrémage si rien n'est fait pour les 3 700 autres lycées : risque d'aggraver la ségrégation scolaire, déjà la plus forte de l'OCDE",
        "Aucun chiffrage sur la crise d'attractivité enseignante (4 000+ postes non pourvus aux concours 2025)"
      ],
      plausibility: 7,
      plausibility_note: "Essentiellement réglementaire et budgétaire, faisable à majorité acquise. Le risque n'est pas juridique mais d'exécution : chaque réforme pédagogique met 5-8 ans à produire des effets mesurables.",
      cost_estimate: "50 lycées d'excellence : ~1-2 Md€ d'investissement + fonctionnement (référence internats d'excellence : ~30-50 k€/élève d'investissement initial)."
    },
    {
      title: "1 million d'apprentis en 2030",
      domain: "économie",
      detail: "Poursuite de la montée en charge de l'apprentissage (record ~880 000 contrats en 2023) vers 1 million, avec recentrage des aides.",
      pros: [
        "Prolonge l'un des rares succès quantitatifs incontestables du macronisme (triplement depuis 2017)",
        "L'apprentissage améliore réellement l'insertion des niveaux CAP-Bac pro (DARES : +10-15 points d'emploi à 6 mois)"
      ],
      cons: [
        "La Cour des comptes (2025) chiffre le dispositif à ~25 Md€/an et documente des effets d'aubaine massifs sur l'enseignement supérieur (60% de la hausse vient du supérieur, où la plus-value insertion est faible)",
        "« 1 million » est un objectif de volume, pas de qualité : le taux de rupture de contrat reste ~30%",
        "Coût incompatible avec la règle d'or sans recentrage brutal que le slogan ne dit pas"
      ],
      plausibility: 7,
      plausibility_note: "Tendanciellement atteignable — c'est presque une extrapolation de la courbe actuelle. La vraie question est le coût par contrat, pas le volume.",
      cost_estimate: "Dispositif actuel : ~24-25 Md€/an toutes aides confondues (Cour des comptes, 2025). Le passage à 1 M sans réforme des aides ajouterait 2-4 Md€/an."
    },
    {
      title: "6 à 8 nouveaux réacteurs nucléaires + défense à 3% du PIB",
      domain: "écologie",
      detail: "Accélération du programme EPR2 (6 réacteurs confirmés + options), et montée du budget défense vers 3% du PIB (contre ~2,1% en 2026).",
      pros: [
        "Cohérence décarbonation + souveraineté énergétique : le nucléaire français émet ~6 gCO2/kWh (ADEME)",
        "3% défense est aligné sur l'engagement OTAN post-2025 et le consensus stratégique européen",
        "Continuité d'État : prolonge des décisions déjà engagées, donc crédible"
      ],
      cons: [
        "L'EPR de Flamanville a coûté 4 fois le devis initial et 12 ans de retard — le chiffrage EPR2 (~67-80 Md€ pour 6 réacteurs selon la Cour des comptes 2025) reste incertain, et le financement n'est pas bouclé",
        "3% du PIB défense = ~30 Md€/an de plus qu'aujourd'hui : additionné à la règle d'or et aux baisses de charges, l'équation budgétaire globale n'est jamais présentée consolidée",
        "Premiers MWh EPR2 pas avant 2038-2040 : n'aide en rien la trajectoire climat 2030"
      ],
      plausibility: 7,
      plausibility_note: "Programme déjà lancé (loi d'accélération 2023), consensus centre-droite. Le risque est industriel (filière, coûts) et budgétaire, pas politique.",
      cost_estimate: "EPR2 : 67-80 Md€ pour 6 réacteurs (Cour des comptes 2025, en dérive vs 51,7 Md€ initiaux). Défense 3% : ~+30 Md€/an à horizon 2030 vs LPM actuelle."
    },
    {
      title: "Réduction des effectifs publics par non-remplacement et fusions d'administrations",
      domain: "économie",
      detail: "Baisse du nombre de postes de fonctionnaires par non-remplacement partiel des départs en retraite, fusions d'agences et d'administrations, numérisation — sans licenciements.",
      pros: [
        "Méthode éprouvée (RGPP 2007-2012 : ~150 000 postes) et socialement moins brutale que des suppressions sèches",
        "Cible réelle : la France compte ~1 200 agences et opérateurs dont plusieurs rapports sénatoriaux documentent les doublons"
      ],
      cons: [
        "Son propre précédent invalide la promesse : l'objectif de 120 000 suppressions du quinquennat 2017-2022 (dont 50 000 État) a été officiellement abandonné en 2019, solde final quasi nul",
        "La RGPP a durablement désorganisé des services (éducation, hôpital) : l'économie brute a des coûts de production différés",
        "Sans liste précise des missions abandonnées, « fusionner et numériser » est le boilerplate de tous les programmes depuis 20 ans"
      ],
      plausibility: 5,
      plausibility_note: "Faisable en gestion, mais l'histoire récente (y compris la sienne) montre un écart promesse/réalisation de l'ordre de 90%. Sans dire quelles missions publiques disparaissent, le chiffre n'engage à rien.",
      cost_estimate: "Non chiffré précisément à ce stade. Référence : 100 000 postes en moins ≈ 3,5-4 Md€/an d'économies brutes à terme (coût moyen chargé d'un agent ~40 k€)."
    },
    {
      title: "Proportionnelle partielle (~30%) aux législatives",
      domain: "institutions",
      detail: "Introduction d'une dose de proportionnelle d'environ 30% aux élections législatives pour stabiliser la représentation et forcer les coalitions explicites.",
      pros: [
        "Répond à la distorsion réelle de représentation (2022 : le RN et LFI sous-représentés en sièges vs voix, puis surcorrection en 2024)",
        "Rendrait les coalitions explicites avant l'élection plutôt que subies après — culture de compromis à l'allemande"
      ],
      cons: [
        "Contradiction interne : son plan « flash » exige une majorité nette, que la proportionnelle rend structurellement moins probable",
        "Une dose de 30% est un entre-deux qui ne satisfait ni la logique majoritaire ni la logique représentative",
        "Promise par Macron en 2017 et 2022, jamais faite — crédibilité d'exécution faible"
      ],
      plausibility: 6,
      plausibility_note: "Simple loi ordinaire (le mode de scrutin législatif n'est pas dans la Constitution). Obstacle purement politique : aucune majorité sortante n'a intérêt à changer la règle qui l'a élue.",
      cost_estimate: "Coût budgétaire nul."
    }
  ],

  fallacies: [
    {
      claim: "« Une capitalisation collective en s'inspirant de l'Agirc-Arrco, qui est équilibrée » — l'Agirc-Arrco présenté comme preuve que la capitalisation gérée par les partenaires sociaux fonctionne.",
      fallacy_type: "analogie trompeuse",
      why_fallacious: "L'Agirc-Arrco n'est PAS un régime par capitalisation : c'est un régime complémentaire par répartition (par points) qui détient des réserves de précaution (~68 Md€, quelques mois de prestations). Son équilibre vient du pilotage paritaire des paramètres, pas de la capitalisation. Utiliser son bon bilan pour vendre la capitalisation transfère indûment la crédibilité d'un système à un autre.",
      correction: "Les vrais comparables sont l'ERAFP, le fonds suédois AP7 ou les fonds néerlandais — qui fonctionnent, mais avec des risques de marché et des coûts de transition que l'analogie Agirc-Arrco escamote précisément.",
      severity: "high"
    },
    {
      claim: "« Il faudra travailler plus longtemps » présenté comme une nécessité arithmétique sans alternative.",
      fallacy_type: "fausse dichotomie (TINA)",
      why_fallacious: "L'équilibre des retraites a mathématiquement quatre leviers (âge, cotisations, niveau des pensions, taux d'emploi/assiette), documentés par chaque rapport du COR. Présenter l'âge comme LA solution est un choix politique déguisé en fatalité comptable.",
      correction: "Une analyse honnête dirait : « parmi les leviers possibles, je choisis l'âge parce que je refuse de monter les cotisations et de baisser les pensions » — c'est défendable, mais c'est un choix, pas une nécessité.",
      severity: "medium"
    },
    {
      claim: "Avoir évoqué 65 puis 67 ans, puis refuser tout « chiffre totémique » en 2026 tout en maintenant le principe.",
      fallacy_type: "motte-and-bailey (repli stratégique)",
      why_fallacious: "La position ambitieuse (67 ans) est avancée quand le terrain est favorable, puis remplacée par une position vague et indéfendable en négatif (« travailler plus, sans totem ») quand la critique arrive. L'électeur ne peut plus évaluer ce sur quoi il vote — l'engagement devient infalsifiable.",
      correction: "Soit un âge cible et un calendrier soumis au vote, soit l'admission explicite que le paramètre sera arbitré après l'élection — mais alors l'électeur signe un chèque en blanc et doit le savoir.",
      severity: "high"
    },
    {
      claim: "« La règle d'or constitutionnelle garantira le sérieux budgétaire. »",
      fallacy_type: "appel à la procédure (légalisme magique)",
      why_fallacious: "Confond l'existence d'une règle avec la réalisation des économies. La France est déjà liée par le TSCG (2012), le pacte de stabilité réformé (2024) et des lois de programmation des finances publiques — toutes violées sans sanction réelle. Le problème français est la décision politique de couper, pas l'absence de norme.",
      correction: "Une règle peut aider à la marge (coût réputationnel de la violation), mais l'analyse rigoureuse exige la liste des économies : quels postes, quels montants, quel calendrier. C'est cette liste qui manque.",
      severity: "medium"
    },
    {
      claim: "« Produire plus pour gagner plus et dépenser mieux » — la croissance par l'offre présentée comme résolvant simultanément pouvoir d'achat, dette et services publics.",
      fallacy_type: "« en même temps » qui masque les arbitrages",
      why_fallacious: "Les trois objectifs sont en tension à court terme : baisser les charges (recettes en moins) + règle d'or (déficit contraint) + relocalisations à 80-100 Md€ (dépenses en plus) ne bouclent que si la croissance générée est forte et rapide — hypothèse jamais explicitée ni stress-testée. C'est le chiffrage optimiste classique du centre : l'écart est comblé par une croissance supposée.",
      correction: "Publier une trajectoire consolidée : coût brut des baisses de charges, hypothèse de croissance sous-jacente, et ce qui est coupé si la croissance n'est pas au rendez-vous.",
      severity: "high"
    },
    {
      claim: "« Je ne promets pas du sang et des larmes » (30 juin 2026) tout en annonçant « des efforts assez importants » et un programme « massif » d'économies.",
      fallacy_type: "euphémisation / dissonance calculée",
      why_fallacious: "Nie la qualification (austérité) tout en confirmant la substance (3 points de PIB de consolidation, gel de dépenses, travail allongé). Le désaccord porte sur le mot, pas sur les faits — c'est un déplacement sémantique qui empêche le débat sur qui porte l'effort.",
      correction: "Assumer la distribution de l'effort : quelles catégories (retraités ? classes moyennes ? entreprises ?) contribuent combien. L'« effort » sans répartition annoncée est une promesse de conflit social différé.",
      severity: "medium"
    }
  ],

  data_issues: [
    {
      claim: "La crédibilité de gestionnaire fondée sur son bilan de Matignon (2017-2020), notamment la maîtrise des effectifs publics.",
      problem: "sorti de contexte",
      reality: "L'objectif officiel de -120 000 postes (dont -50 000 État) a été abandonné en 2019 ; le solde du quinquennat est quasi nul, et la dette publique est passée de ~98% à ~115% du PIB entre 2017 et 2020 (Covid inclus, mais la trajectoire pré-Covid était déjà en dérapage sur la dépense).",
      source: "Cour des comptes, rapports sur le budget de l'État 2019-2021 ; INSEE, comptes nationaux"
    },
    {
      claim: "L'Agirc-Arrco cité comme modèle de « capitalisation collective ».",
      problem: "faux",
      reality: "L'Agirc-Arrco est un régime par répartition par points, avec des réserves de pilotage (~68 Md€), et non un régime par capitalisation. La confusion répétée dans les éléments de langage du candidat et de ses soutiens change la nature du débat.",
      source: "Agirc-Arrco, rapports annuels ; COR ; vérifications Les Décodeurs sur les débats retraites"
    },
    {
      claim: "« Déficit à 2% du PIB en 2032 » présenté comme trajectoire réaliste.",
      problem: "invérifiable",
      reality: "Passer de ~5,4% (2025) à 2% exige ~90-130 Md€ d'ajustement structurel selon les hypothèses de croissance — la Cour des comptes (situation des finances publiques, début 2026) juge déjà « fragile » le simple retour sous 3% en 2029. Aucun chiffrage consolidé poste par poste n'a été publié par le candidat, alors que son programme additionne par ailleurs des baisses de recettes (bouclier de charges) et des dépenses nouvelles (défense 3%, relocalisations).",
      source: "Cour des comptes, « La situation des finances publiques début 2026 » ; programme de stabilité"
    },
    {
      claim: "« Seul candidat capable de battre Bardella au second tour » — argument de campagne appuyé sur les sondages de 2e tour.",
      problem: "sorti de contexte",
      reality: "Les sondages à un an du scrutin ont un pouvoir prédictif historiquement faible (Balladur 1995, Jospin 2002, DSK 2011, Juppé 2016 : tous favoris déchus). En juin 2026 l'IFOP le crédite de 14-16% au 1er tour, en baisse, à 20 points de Bardella — l'hypothèse du « seul rempart » repose sur des configurations de 2e tour qu'il n'est pas assuré d'atteindre.",
      source: "IFOP 25/06/2026 ; Wikipédia, liste des sondages présidentielle 2027 ; littérature sur la fiabilité des sondages précoces (Elabe, notes méthodologiques)"
    },
    {
      claim: "Le plan pénitentiaire : « nous savons construire des places de prison ».",
      problem: "exagéré",
      reality: "Le plan « 15 000 places » lancé sous son gouvernement (2018) puis repris en 2022 affiche ~4 500 places nettes livrées à fin 2024 selon la Cour des comptes — taux de réalisation ~30%, délais moyens 7-10 ans par établissement.",
      source: "Cour des comptes, rapport sur l'immobilier pénitentiaire (2024-2025) ; ministère de la Justice, statistiques trimestrielles"
    }
  ],

  problematic_arguments: [
    {
      argument: "« Ordre et réformes » comme réponse principale à la poussée RN : occuper le terrain régalien (quotas, expulsions, prisons) pour assécher l'extrême droite.",
      why_problematic: "Vingt ans de triangulation (Sarkozy 2007-2012, lois immigration successives) montrent que durcir le discours régalien au centre légitime la grille de lecture du RN plus qu'il ne le concurrence — le RN est passé de 18% à 36% pendant cette période.",
      what_it_hides: "L'absence de réponse au moteur réel du vote RN documenté par les études électorales (Ipsos, CEVIPOF) : relégation territoriale, pouvoir d'achat, sentiment de déclassement — sujets où son programme d'austérité est le plus vulnérable."
    },
    {
      argument: "« Il faudra construire une majorité nouvelle rassemblant la droite et le centre » — la coalition présentée comme évidente.",
      why_problematic: "Suppose résolu ce qui est le problème central : LR est courtisé simultanément par Retailleau/Wauquiez sur une ligne droitière, et le bloc central est fragmenté entre Philippe, Attal et Darmanin sans mécanisme de départage accepté. La « majorité nouvelle » est une pétition de principe.",
      what_it_hides: "Le scénario le plus probable en cas de victoire : une coalition hétéroclite reproduisant l'impuissance de 2022-2027, que sa stratégie « flash » tente de contourner par plébiscite — au prix d'une fragilité démocratique."
    },
    {
      argument: "Le bilan Gilets jaunes et 49.3 jamais soldé : Philippe se présente en homme d'ordre sans retour critique sur la séquence 2018-2020.",
      why_problematic: "La crise des Gilets jaunes est partie d'une mesure de son gouvernement (trajectoire carbone sans compensation redistributive) et s'est soldée par ~17 Md€ de dépenses d'urgence — un échec de conception ET un coût budgétaire, aux antipodes du récit de rigueur.",
      what_it_hides: "Que la même méthode (mesure techniquement juste, socialement aveugle, imposée verticalement) est reconduite dans le programme 2027 : règle d'or, ordonnances, âge de départ."
    },
    {
      argument: "Le flou revendiqué (« pas de chiffre totémique », programme dévoilé tard) présenté comme de la prudence de bon gestionnaire.",
      why_problematic: "À 10 mois du scrutin, l'asymétrie est totale : il demande un mandat pour des « efforts massifs » dont la répartition n'est pas publiée, tout en critiquant le chiffrage des autres.",
      what_it_hides: "La leçon de 2017-2023 : les réformes non explicitées avant l'élection (retraites) finissent en 49.3 et en crise de légitimité. Le flou d'avant-vote se paie en conflit d'après-vote."
    }
  ],

  strong_ideas: [
    {
      idea: "Étage de capitalisation collective public, adossé à des gestionnaires paritaires, en complément (pas en remplacement) de la répartition.",
      why_strong: "Les précédents fonctionnent : ERAFP (fonctionnaires français, 40 Md€ d'actifs, ISR), AP7 suédois (rendement net ~10%/an sur 10 ans), fonds néerlandais. Capte la prime de risque actions sur 40 ans pour les jeunes générations qui, elles, n'auront pas le ratio démographique favorable. Réduit aussi la dépendance du financement des entreprises françaises aux fonds étrangers (40% du CAC40 détenu par des non-résidents).",
      adoptable_by: "La gauche sociale-démocrate pourrait la reprendre en version « fonds souverain retraite » public (proche de l'idée de fonds souverain de Villepin) ; la droite en version épargne salariale obligatoire. Le point commun décisif : gestion collective à frais faibles, pas des fonds de pension individuels à l'américaine."
    },
    {
      idea: "Vote parlementaire annuel sur des cibles migratoires chiffrées, catégorie par catégorie.",
      why_strong: "Même si les quotas ne peuvent pas être contraignants sur l'asile et le familial, forcer un débat annuel chiffré au Parlement (modèle canadien des « immigration levels plans ») sortirait le sujet du face-à-face fantasmes/déni et créerait une donnée publique de référence.",
      adoptable_by: "Toute la gauche pragmatique pourrait s'en emparer en y ajoutant les besoins de main-d'œuvre documentés (DARES, métiers en tension) ; la droite y trouve la traçabilité qu'elle réclame."
    },
    {
      idea: "Lycées d'excellence et prépas dans les territoires périphériques.",
      why_strong: "S'attaque à une inégalité mesurée : la probabilité d'accéder à une CPGE est 3 à 4 fois plus faible pour un bachelier de zone rurale à niveau égal (France Stratégie, IPP). Les évaluations des internats d'excellence (PSE/J-PAL) montrent des effets réels sur les résultats et les aspirations.",
      adoptable_by: "Consensus possible de LFI (qui parle d'égalité territoriale) au RN (électorat périphérique) — l'un des rares objets transpartisans du cycle 2027, à condition de le financer sans écrémer les établissements voisins."
    },
    {
      idea: "Annoncer la méthode institutionnelle AVANT l'élection (dissolution, référendums, calendrier).",
      why_strong: "Quoi qu'on pense du contenu, expliciter la séquence de gouvernement avant le vote est un progrès démocratique par rapport à 2017 et 2022 où les méthodes (ordonnances travail, 49.3 retraites) ont été découvertes après. Cela rend le mandat évaluable.",
      adoptable_by: "Tous les candidats — c'est une norme de campagne (un « contrat de mandature » daté) plus qu'une mesure, et Mélenchon comme Bardella y ont partiellement recouru."
    }
  ],

  electorate: "Cœur électoral : retraités (32% d'opinions favorables, en progression, Elabe juin 2026) et cadres/CSP+ (30%), urbains et périurbains aisés de l'Ouest et des métropoles régionales — l'électorat Macron 2022 vieilli, plus droitier. Faible pénétration chez les moins de 35 ans et les catégories populaires (~20%), quasi nulle chez les électeurs RN et LFI. Géographie : Normandie (fief havrais), Grand Ouest, métropoles. Son enjeu stratégique : capter l'électorat LR orphelin sans perdre l'aile centriste face à Attal.",

  key_quotes: [
    {
      text: "Mon programme sera massif.",
      context: "Préparation de sa candidature, annonce de l'ampleur des réformes revendiquée",
      source: "Presse régionale (La Dépêche du Midi), reprise nationale, 2026"
    },
    {
      text: "Si on arrive à faire en sorte que la retraite par capitalisation représente 10 à 15% des pensions versées dans quinze ans, on aura rendu un fier service au financement de l'économie française, mais cela n'évitera pas le fait de devoir travailler plus longtemps.",
      context: "Présentation de sa méthode et du volet retraites",
      source: "AFP, repris par Boursorama/Bourse Direct, 30 juin 2026"
    },
    {
      text: "Il faudra construire une majorité, proposer une majorité législative nouvelle, ouverte, rassemblant explicitement la droite et le centre et refusant explicitement le mirage d'une union avec la droite extrême.",
      context: "Discours de Reims, projection vers 2027",
      source: "franceinfo, 2026"
    },
    {
      text: "Je ne promets pas aux Français du sang et des larmes.",
      context: "Réponse aux critiques sur l'austérité de son programme (déficit 2% en 2032, « efforts assez importants »)",
      source: "AFP, 30 juin 2026"
    },
    {
      text: "Dissoudre l'Assemblée nationale et lancer trois référendums : sur les retraites, sur une règle d'or budgétaire, et sur la possibilité de légiférer par ordonnances sur la santé, l'éducation et la justice.",
      context: "Sa « méthode » de gouvernement pour l'été 2027 (paraphrase fidèle du dispositif annoncé)",
      source: "Europe 1 / Planet.fr, juin 2026"
    }
  ],

  sources: [
    "https://www.elyseescope.com/candidat/edouard-philippe/programme-presidentiel-et-methode",
    "https://www.elyseescope.com/candidat/edouard-philippe/retraites",
    "https://election-presidentielle-francaise-2027.fr/edouard-philippe-le-programme-pour-2027/",
    "https://www.europe1.fr/politique/dissolution-referendum-sur-les-retraites-et-sur-une-regle-dor-budgetaire-philippe-devoile-sa-methode-668233",
    "https://www.boursorama.com/actualite-economique/actualites/edouard-philippe-refute-promettre-aux-francais-du-sang-et-des-larmes-fd91d49253e642d0639e25090ba56a5c",
    "https://elabe.fr/lobservatoire-politique-juin-2026/",
    "https://fr.wikipedia.org/wiki/Liste_de_sondages_sur_l%27%C3%A9lection_pr%C3%A9sidentielle_fran%C3%A7aise_de_2027",
    "https://www.ccomptes.fr/fr/publications/la-situation-des-finances-publiques-debut-2026",
    "https://www.franceinfo.fr/replay-jt/franceinfo/21h-minuit/23-heures/presidentielle-2027-a-reims-edouard-philippe-se-projette_7996955.html"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["philippe-horizons-2027"] = CONTENT_ELECTIONS_philippe_horizons_2027;
