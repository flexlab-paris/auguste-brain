const CONTENT_ELECTIONS_CONSOLIDATED = {
  updated: "2026-07-04",

  // ============================================================
  // MEILLEURES IDÉES TOUS BORDS CONFONDUS (15)
  // Équilibre : 4 droite/extrême droite, 5 centre, 6 gauche
  // ============================================================
  best_ideas: [
    {
      idea: "Exécution effective des OQTF : la diplomatie migratoire comme enjeu d'État de droit",
      from: ["rn-2027", "lr-2027", "lisnard-2027"],
      bloc_origin: "extreme-droite",
      why_good: "Un taux d'exécution de ~7-12% des obligations de quitter le territoire (Cour des comptes) est pathologique indépendamment de toute position sur l'immigration : des décisions administratives et judiciaires massivement inappliquées délégitiment l'État. Le levier visas-contre-laissez-passer consulaires a fait ses preuves en 2021 (Maghreb), et l'Allemagne exécute 25-30% — la cible d'un doublement est documentée, contrairement à la promesse RN du 100%.",
      pros: [
        "Restaure la crédibilité de la décision publique — le vrai carburant du vote extrême",
        "Ne requiert aucune révision constitutionnelle ni sortie de la CEDH dans sa version réaliste",
        "Diagnostic partagé du RN à une partie de la gauche républicaine : coalition parlementaire possible",
        "Précédent opérationnel français (2021) et étranger (Danemark) déjà évalué"
      ],
      cons: [
        "Dépend de la coopération d'États tiers qui monnaient chaque laissez-passer (rapport de force diplomatique coûteux)",
        "Coûts d'exécution réels en hausse si fermeté effective : rétention, escortes, vols (Cour des comptes)",
        "Risque de tension avec l'aide au développement et les intérêts économiques bilatéraux",
        "Le 100% est impossible (pays en guerre, apatrides, art. 3 CEDH) : survendre garantit la déception"
      ],
      implementation: {
        steps: [
          "Publier un tableau de bord public trimestriel du taux d'exécution par nationalité (transparence = pression)",
          "Lier officiellement la politique de visas aux taux de délivrance des laissez-passer consulaires (décret + instruction Quai d'Orsay)",
          "Augmenter les capacités de rétention ciblées sur les profils effectivement éloignables",
          "Négocier des accords de réadmission bilatéraux avec contreparties (visas étudiants, aide projet)",
          "Fixer une cible réaliste : doubler le taux d'exécution en 3 ans (vers 20-25%)"
        ],
        cost: "0,5-1 Md€/an (rétention, escortes, moyens consulaires) — coût net selon la Cour des comptes, hors contreparties diplomatiques",
        timeline: "Effets mesurables en 18-24 mois ; doublement du taux à horizon 3 ans",
        obstacles: [
          "Souveraineté des États de retour : aucun levier juridique interne ne contraint un consulat étranger",
          "Jurisprudence CEDH art. 3 et 8 sur une fraction des cas (minoritaire mais médiatisée)",
          "Arbitrage permanent avec les autres intérêts bilatéraux (économie, sécurité, francophonie)"
        ]
      },
      plausibility: 6
    },
    {
      idea: "Évaluation systématique des politiques publiques avec clauses de caducité (sunset clauses)",
      from: ["lisnard-2027"],
      bloc_origin: "droite",
      why_good: "Le déficit français d'évaluation ex post est documenté par France Stratégie et la Cour des comptes. Les consolidations réussies (Canada années 90 : « program review » poste par poste, -9 points de dépense/PIB sans casse sociale majeure) passent par l'évaluation ciblée, jamais par le rabot uniforme. C'est la condition de crédibilité de TOUS les plans d'économies, de gauche comme de droite — et elle protège les politiques efficaces des coupes aveugles.",
      pros: [
        "Coût quasi nul, rendement élevé : chaque dispositif inefficace supprimé libère des marges récurrentes",
        "Transpartisane par construction : une gauche rigoureuse devrait la revendiquer autant que la droite gestionnaire",
        "Les sunset clauses inversent la charge de la preuve : c'est au dispositif de prouver son utilité pour survivre",
        "Précédents étrangers évalués (Canada, Pays-Bas, Texas sunset commission)"
      ],
      cons: [
        "Gains réels bien inférieurs aux annonces : 2-5 Md€/an pour la revue des agences (Sénat 2025, IGF), pas les « 100 milliards » du stock cité",
        "Chaque niche, agence ou aide a sa clientèle organisée : la résistance est proportionnelle à la précision des coupes",
        "Exige un appareil d'évaluation indépendant et doté — la France sous-investit précisément là",
        "Cycle politique de 5 ans vs horizon d'évaluation de 3-5 ans : tentation permanente de conclure avant les données"
      ],
      implementation: {
        steps: [
          "Créer une obligation organique : toute dépense fiscale ou nouveau dispositif > 100 M€ naît avec une clause de caducité à 5 ans",
          "Doter France Stratégie / une agence d'évaluation indépendante rattachée au Parlement (modèle CBO)",
          "Lancer une revue exhaustive des ~450 opérateurs de l'État : supprimer, fusionner, réinternaliser sur critères publiés",
          "Publier chaque évaluation intégralement (pas de résumé ministériel)",
          "Programmer les suppressions dans les lois de finances successives avec clause de revoyure"
        ],
        cost: "Investissement : 50-100 M€/an d'appareil d'évaluation ; gains réalistes 2-5 Md€/an à horizon quinquennat (Sénat 2025, IGF)",
        timeline: "Loi organique année 1 ; premiers gains budgétaires années 2-3 ; régime de croisière à 5 ans",
        obstacles: [
          "Lobbys sectoriels de chaque dispositif menacé (le concentré gagne toujours contre le diffus)",
          "Réticence des administrations à l'évaluation externe de leurs propres dispositifs",
          "Nécessite une majorité durable : les sunset clauses ne produisent qu'au 2e budget"
        ]
      },
      plausibility: 8
    },
    {
      idea: "Conditionnalité des minima sociaux AVEC accompagnement renforcé (activation à la danoise)",
      from: ["lr-2027", "darmanin-2027"],
      bloc_origin: "droite",
      why_good: "Le couple droits-devoirs adossé à un accompagnement réel est la politique sociale la mieux documentée de l'OCDE : ni l'allocation passive, ni la sanction sèche, mais l'investissement massif dans le retour à l'emploi. Inventée par la social-démocratie scandinave, reprise par la droite française — la loi plein emploi de 2023 en pose la base. Le point de bascule honnête est le financement de l'accompagnement, pas le niveau des sanctions.",
      pros: [
        "Littérature OCDE robuste : l'activation avec accompagnement réduit durablement le chômage de longue durée",
        "Base légale déjà votée (loi 2023) : il s'agit d'exécuter et de financer, pas de légiférer",
        "Politiquement majoritaire : la version accompagnement est acceptable du centre-gauche à la droite",
        "Répond au sentiment documenté d'injustice entre revenus du travail et de l'inactivité"
      ],
      cons: [
        "Sans financement de l'accompagnement (+1-2 Md€/an France Travail), la mesure dégénère en sanction sèche inefficace",
        "La Cour des comptes juge modestes les économies nettes des politiques de contrôle : ce n'est PAS une mesure d'économies",
        "Les 15h d'activité obligatoires butent sur l'offre réelle d'activités dans les territoires pauvres",
        "Risque de non-recours accru chez les publics les plus éloignés (effet inverse du but social)"
      ],
      implementation: {
        steps: [
          "Financer d'abord : +1-2 Md€/an à France Travail pour des portefeuilles de 50-70 suivis par conseiller (vs 200+ aujourd'hui)",
          "Généraliser progressivement les 15h d'activité en commençant par les bassins où l'offre existe",
          "Contractualiser avec les départements (RSA) sur des objectifs de retour à l'emploi, pas de radiation",
          "Évaluer par expérimentation contrôlée avant généralisation (l'inverse de 2023)",
          "Publier les résultats par bassin d'emploi"
        ],
        cost: "+1 à 2 Md€/an d'accompagnement ; économies nettes incertaines à 5 ans (Cour des comptes) — mesure d'efficacité sociale, pas de rendement budgétaire",
        timeline: "Montée en charge 2-4 ans, calée sur les recrutements France Travail",
        obstacles: [
          "Tension budgétaire : la tentation permanente de garder les devoirs et couper l'accompagnement",
          "Capacités des départements très inégales (RSA décentralisé)",
          "Conflit politique sur les sanctions : le durcissement symbolique détruit le consensus possible"
        ]
      },
      plausibility: 7
    },
    {
      idea: "Poursuite de la baisse des impôts de production ciblée sur l'industrie",
      from: ["reconquete-2027", "lr-2027", "lisnard-2027"],
      bloc_origin: "droite",
      why_good: "Consensus économique rare (CAE, Rexecode, OFCE sur le diagnostic) : l'écart franco-allemand sur les impôts de production — qui taxent l'activité avant tout profit — explique une part mesurable du décrochage industriel. La trajectoire est engagée (suppression CVAE amorcée) ; la question restante est le séquençage et le financement, pas le principe.",
      pros: [
        "Seul impôt dont la baisse fait consensus chez les économistes : il frappe la production même déficitaire",
        "Cohérent avec la réindustrialisation que TOUS les programmes 2027 affichent",
        "Effet direct sur les marges industrielles, donc sur l'investissement et la localisation des usines",
        "Trajectoire déjà crédibilisée par les étapes 2021-2024"
      ],
      cons: [
        "Coût élevé : C3S ~4 Md€/an, CVAE résiduelle 5-6 Md€ — dans un contexte de déficit à 5,5% du PIB",
        "La CVAE finance les collectivités : chaque suppression recentralise et déresponsabilise le local",
        "Effet d'aubaine pour les secteurs abrités (grande distribution, services) si la baisse n'est pas ciblée",
        "Aucun des candidats ne documente le financement — le gage reste magique dans toutes les versions"
      ],
      implementation: {
        steps: [
          "Supprimer d'abord la C3S (l'impôt unanimement jugé le plus nocif : cascade sur le chiffre d'affaires)",
          "Compenser intégralement les collectivités par une fraction d'impôt national dynamique",
          "Cibler le reliquat CVAE sur l'industrie exposée à la concurrence internationale",
          "Financer par la revue des aides aux entreprises inefficaces (voir conditionnalité) — le deal fiscal cohérent",
          "Évaluer à 3 ans l'effet sur l'investissement industriel avant d'aller plus loin"
        ],
        cost: "4 Md€/an (C3S seule) à 10 Md€/an (paquet complet) — chiffrages Rexecode/IFRAP convergents",
        timeline: "C3S en loi de finances année 1 ; paquet complet sur le quinquennat si financement documenté",
        obstacles: [
          "État budgétaire : procédure de déficit excessif, charge d'intérêts > 60 Md€/an",
          "Opposition des associations d'élus sur la compensation CVAE",
          "Concurrence avec toutes les autres baisses promises (cotisations, successions) : l'arbitrage n'est jamais rendu"
        ]
      },
      plausibility: 6
    },
    {
      idea: "Étage de capitalisation collective publique en complément (pas en remplacement) de la répartition",
      from: ["philippe-horizons-2027"],
      bloc_origin: "centre-droit",
      why_good: "Les précédents fonctionnent : ERAFP (fonctionnaires français, 40 Md€ d'actifs, gestion ISR), AP7 suédois (~10%/an net sur 10 ans), fonds néerlandais. Capte la prime de risque actions sur 40 ans pour les générations qui n'auront pas le ratio démographique favorable, et réduit la dépendance du financement des entreprises françaises aux capitaux étrangers (40% du CAC40 détenu par des non-résidents). Le point décisif : gestion collective paritaire à frais faibles, pas des fonds de pension individuels à l'américaine.",
      pros: [
        "Rendement long terme des actions structurellement supérieur à la croissance de la masse salariale (base de la répartition)",
        "Précédent français déjà opérationnel (ERAFP) : le modèle juridique et de gouvernance existe",
        "Réoriente l'épargne nationale abondante (assurance-vie ~1 900 Md€) vers les fonds propres des entreprises",
        "Adoptable à gauche en version « fonds souverain retraite » public — le pont existe"
      ],
      cons: [
        "Double charge de la génération de transition : cotiser pour les retraités actuels ET pour sa propre capitalisation",
        "Risque de marché : une crise majeure à l'approche des liquidations ampute les rentes (mitigeable, pas annulable)",
        "L'analogie Agirc-Arrco utilisée par Philippe est trompeuse : c'est de la répartition par points, pas de la capitalisation",
        "Rendement significatif seulement à horizon 25-40 ans : aucun effet sur l'équilibre des retraites d'ici 2040"
      ],
      implementation: {
        steps: [
          "Créer le fonds public par la loi, gouvernance paritaire, mandat de gestion indiciel à frais < 0,3%",
          "Affecter une cotisation dédiée faible au départ (0,5-1 point) pour lisser la double charge",
          "Garantir l'insaisissabilité par une règle organique (protéger le fonds des besoins budgétaires courants)",
          "Monter en charge sur 10 ans, avec option d'abondement employeur négociée par branche",
          "Publier la performance et les frais annuellement (transparence AP7)"
        ],
        cost: "Transition : 5-10 Md€/an de cotisations détournées de la répartition à compenser ; frais de gestion faibles si indiciel",
        timeline: "Loi année 1 ; premiers versements année 2 ; effets sur les pensions à 25-40 ans",
        obstacles: [
          "Le mot « capitalisation » reste politiquement radioactif : le référendum envisagé par Philippe est risqué",
          "Tentation historique de l'État de piocher dans les réserves (précédent du FRR, siphonné en 2010)",
          "Double charge de transition dans un contexte budgétaire déjà saturé"
        ]
      },
      plausibility: 6
    },
    {
      idea: "Solidarité à la source : le versement social unique automatique",
      from: ["darmanin-2027"],
      bloc_origin: "centre-droit",
      why_good: "Rare mesure du champ 2027 qui améliore simultanément la justice (résorption du non-recours : 34% du RSA non réclamé), l'efficience (fusion des bases ressources, ~1 Md€ d'économies de gestion à terme) et la confiance (fin du sentiment d'arbitraire). Le chantier est déjà engagé (préremplissage 2024-2025) et le précédent de la même famille — le prélèvement à la source — a été livré avec succès. Probablement l'idée la plus consensuelle du cycle 2027.",
      pros: [
        "Gagnant-gagnant idéologique : la gauche y voit l'accès aux droits, la droite le contrôle et la lisibilité",
        "Chantier administratif déjà démarré : exécutable dans le quinquennat",
        "Réduit mécaniquement la fraude ET le non-recours (les deux obsessions opposées du débat)",
        "Précédent direct réussi (prélèvement à la source, 2019)"
      ],
      cons: [
        "Coût paradoxal : résorber le non-recours au RSA coûte ~3 Md€/an (DREES) — la justice sociale se paie",
        "Projet informatique interadministratif majeur : risque d'échec technique réel (précédents : Louvois, SNU numérique)",
        "L'harmonisation des bases ressources fait mécaniquement des perdants à la marge (chaque aide a sa définition du revenu)",
        "Ne règle pas le débat sur le NIVEAU des aides — il reviendra par la fenêtre"
      ],
      implementation: {
        steps: [
          "Achever la généralisation du montant net social et du préremplissage (chantier en cours)",
          "Harmoniser les bases ressources RSA / prime d'activité / APL par ordonnance technique",
          "Expérimenter le versement unique automatique dans 5-10 départements avec évaluation indépendante",
          "Généraliser en 2 vagues, en provisionnant le coût du non-recours résorbé",
          "Créer un guichet unique de contestation (la contrepartie de l'automaticité)"
        ],
        cost: "Projet informatique : centaines de M€ ; résorption du non-recours : jusqu'à 3 Md€/an en régime plein (DREES) ; économies de gestion : ~1 Md€/an à terme",
        timeline: "Expérimentation 18 mois ; généralisation à 4-5 ans (réaliste vu la complexité SI)",
        obstacles: [
          "Complexité des systèmes d'information CAF/MSA/France Travail/DGFiP",
          "Coût budgétaire du succès même de la mesure (non-recours résorbé = dépense en plus)",
          "Arbitrages douloureux sur les bases ressources harmonisées"
        ]
      },
      plausibility: 8
    },
    {
      idea: "Brevet exigible pour l'entrée au lycée, avec classes prépa-lycée financées pour les recalés",
      from: ["attal-renaissance-2027"],
      bloc_origin: "centre",
      why_good: "La France est l'un des rares pays de l'OCDE où l'examen de fin de collège n'a aucune conséquence d'orientation : l'exigence certificative crédibilise le diplôme et force le système à traiter les lacunes AVANT le lycée plutôt que de les diluer. La littérature (Woessmann) associe les examens de sortie standardisés à de meilleurs résultats. La condition non négociable : financer sérieusement les prépa-lycée, sinon la mesure devient une machine à relégation.",
      pros: [
        "S'attaque au vrai scandale : des élèves entrent en seconde sans maîtriser lire-écrire-compter, et le système fait semblant",
        "Adoptable à droite (exigence) comme à gauche (si les prépa-lycée sont dotées — version « redoublement utile »)",
        "Crée un signal clair pour les familles et les équipes dès la 6e",
        "Faisable par décret + loi de finances : pas d'obstacle constitutionnel"
      ],
      cons: [
        "Sans les 4-6 000 postes des prépa-lycée (300-500 M€/an, non chiffrés par le candidat), c'est un tri social sec",
        "Risque de bachotage du brevet au détriment des compétences réelles (effet pervers documenté des examens à enjeux)",
        "Concentration prévisible des recalés dans les établissements déjà défavorisés",
        "L'expérience des dispositifs relais montre la difficulté à y affecter des enseignants expérimentés"
      ],
      implementation: {
        steps: [
          "Rehausser d'abord la fiabilité du brevet (correction externe, harmonisation) — sinon l'exigence est arbitraire",
          "Créer et budgéter les classes prépa-lycée : ~80-100 000 élèves/an, effectifs réduits, enseignants volontaires mieux payés",
          "Annoncer la règle 3 ans avant application (cohorte prévenue en 4e)",
          "Évaluer la première cohorte prépa-lycée par comparaison contrôlée",
          "Ajuster le seuil d'exigence sur les données, pas sur la polémique"
        ],
        cost: "300-500 M€/an pour les prépa-lycée (4-6 000 postes équivalents) — non chiffré par le candidat, mais c'est LE coût de sérieux de la mesure",
        timeline: "Décrets année 1, première application année 3-4 (délai de prévenance)",
        obstacles: [
          "Budget Éducation déjà sous tension : la sanctuarisation affichée ne couvre pas les créations de postes",
          "Opposition d'une partie des syndicats et des fédérations de parents",
          "Risque contentieux sur l'égalité d'accès si les prépa-lycée sont inégalement réparties"
        ]
      },
      plausibility: 7
    },
    {
      idea: "Lisser les taux marginaux de prélèvement autour du SMIC (la version rigoureuse du « travail doit payer »)",
      from: ["darmanin-2027", "attal-renaissance-2027", "lisnard-2027", "rn-2027"],
      bloc_origin: "centre",
      why_good: "Débarrassée de l'emballage « assistanat », la mesure pointe un défaut de conception documenté par le rapport Bozio-Wasmer (2024) : entre cotisations, perte de prime d'activité et d'APL, un salarié au SMIC peut ne garder que 30-40 centimes par euro d'augmentation. Lisser ces barèmes augmente le rendement du travail sans couper les aides de personne — et traite la « smicardisation » (60% des salariés du privé proches du SMIC dans certaines branches) mieux que les coups de pouce ou les exonérations ad hoc.",
      pros: [
        "Le seul consensus latent du bloc central ET du RN sur les salaires : quatre programmes en portent des variantes",
        "Version « lissage » sans perdants pauvres — contrairement au plafonnement des aides à 75% du SMIC",
        "Traite la cause (trappe à bas salaires) et non le symptôme (pouvoir d'achat au SMIC)",
        "Base technique déjà écrite (Bozio-Wasmer) : le travail préparatoire est fait"
      ],
      cons: [
        "Coût élevé : chaque point de cotisation salariale ≈ 6-7 Md€ ; un lissage sérieux se chiffre en 5-10 Md€/an",
        "La réforme des allègements peut renchérir le coût du travail au-dessus du SMIC (risque emploi, débat non tranché)",
        "Complexité technique extrême : barèmes CAF, fiscaux et sociaux enchevêtrés",
        "Aucun des quatre porteurs n'a publié de calibrage consolidé — le consensus reste rhétorique"
      ],
      implementation: {
        steps: [
          "Adopter le cadre Bozio-Wasmer : cartographier les taux marginaux effectifs de 0,5 à 2 SMIC",
          "Lisser la sortie de prime d'activité et d'APL (les deux plus grosses marches)",
          "Refondre les allègements de cotisations en pente continue jusqu'à 2 SMIC",
          "Financer par redéploiement partiel des 80 Md€ d'allègements existants et par la non-indexation temporaire des niches",
          "Publier un simulateur public : chaque salarié doit voir son gain par euro de hausse"
        ],
        cost: "5-10 Md€/an selon l'ambition du lissage (référentiel Bozio-Wasmer ; 1 point de cotisation salariale ≈ 6-7 Md€)",
        timeline: "Cartographie 6 mois ; réforme en 2 lois de finances ; effets sur les négociations salariales à 2-3 ans",
        obstacles: [
          "Coût budgétaire dans un contexte de consolidation",
          "Toute refonte des allègements déclenche l'opposition patronale (coût du travail) ou syndicale (aides)",
          "Technicité qui rend la mesure invisible politiquement — d'où la tentation permanente des slogans à la place"
        ]
      },
      plausibility: 7
    },
    {
      idea: "Frapper le haut du spectre du narcotrafic : régime carcéral dérogatoire ciblé + ciblage financier",
      from: ["darmanin-2027", "lr-2027", "eelv-2027", "pcf-2027"],
      bloc_origin: "centre-droit",
      why_good: "Import raisonné du 41-bis italien : l'isolement des donneurs d'ordre a été un facteur documenté de l'affaiblissement de Cosa Nostra. Le narcotrafic français a atteint le stade (corruption portuaire systémique, commandement depuis la détention) où l'outil devient pertinent — mesure ciblée (~100 profils), pas populisme de masse. Le complément décisif, porté par la commission d'enquête sénatoriale 2024 et repris jusqu'à EELV et au PCF : pivoter du harcèlement de voie publique vers le patrimoine et le blanchiment.",
      pros: [
        "Consensus transpartisan réel : la loi narcotrafic 2025 (parquet spécialisé PNACO, Vendin-le-Vieil) votée bien au-delà du bloc central",
        "Précédent étranger évalué (Italie) sur le mécanisme précis, pas par analogie vague",
        "Le ciblage financier attaque la rentabilité — le seul point vital d'une économie criminelle",
        "EELV et PCF portent la même logique : la coalition parlementaire existe déjà"
      ],
      cons: [
        "Risque contentieux CEDH sur les conditions d'isolement : le contrôle juridictionnel doit rester effectif",
        "L'Italie a mis 20 ans : aucun effet spectaculaire à attendre dans le quinquennat",
        "Le renseignement financier (TRACFIN, juridictions) reste sous-doté par rapport à l'ambition",
        "Effet de déplacement documenté : la répression du haut du spectre recompose les réseaux plus qu'elle ne les supprime"
      ],
      implementation: {
        steps: [
          "Consolider l'acquis 2025 : PNACO doté, quartiers de haute sécurité opérationnels, évaluation annuelle publique",
          "Doubler les effectifs d'enquêteurs financiers et d'assistants spécialisés auprès des juridictions",
          "Généraliser la confiscation des avoirs non justifiés (inversion de la charge sur le train de vie, à droit constant renforcé)",
          "Plan portuaire : scanners, criblage des personnels, coopération Anvers-Rotterdam",
          "Maintenir le contrôle juridictionnel strict du régime d'isolement (condition de survie CEDH du dispositif)"
        ],
        cost: "Centaines de M€ (établissements dédiés, budget Justice 2025-2027) + ~400-500 k€/place de prison additionnelle (APIJ/Cour des comptes)",
        timeline: "Acquis législatif fait ; montée en puissance des enquêtes financières sur 3-5 ans ; effets structurels à 10 ans",
        obstacles: [
          "Censure partielle possible (CEDH/Conseil constitutionnel) si l'isolement dérive vers l'automaticité",
          "Corruption des personnels (portuaires, pénitentiaires) : le maillon faible documenté",
          "Concurrence budgétaire avec l'immobilier pénitentiaire de masse promis par ailleurs"
        ]
      },
      plausibility: 8
    },
    {
      idea: "Dividende carbone : rétablir un signal prix carbone intégralement redistribué aux ménages",
      from: ["eelv-2027", "villepin-2027"],
      bloc_origin: "gauche",
      why_good: "Consensus économique quasi unanime (CAE, FMI, la « carbon fee and dividend » signée par des dizaines de prix Nobel de droite comme de gauche) et précédent à l'échelle : le Canada l'a opéré des années durant. L'échec français de 2018 venait de l'absence de redistribution et de mandat, pas de l'instrument — la fiscalité énergétique actuelle est régressive (INSEE : 2 à 3 fois plus lourde pour les ruraux modestes), exactement ce que le dividende corrige. Seule voie documentée pour réconcilier trajectoire carbone et acceptabilité sociale.",
      pros: [
        "L'instrument climatique au meilleur rapport coût-efficacité (rapport Quinet, consensus des économistes du climat)",
        "Redistribution intégrale = les 5-6 déciles inférieurs sont gagnants nets (données canadiennes et modélisations françaises)",
        "Transpartisan par construction : version droite « rendre l'argent de la taxe », version gauche « revenu climat »",
        "Répond frontalement à la meilleure objection du RN (fiscalité énergétique régressive) au lieu de la nier"
      ],
      cons: [
        "Traumatisme gilets jaunes : aucun politique n'ose, même avec redistribution — le coût d'entrée politique est maximal",
        "Le versement doit précéder ou accompagner la taxe, visiblement (chèque nommé « dividende carbone »), sinon rejet",
        "Perte de recettes nette si la redistribution est intégrale : ne finance PAS la transition (erreur d'EELV de le survendre)",
        "Exposition aux chocs de prix mondiaux qui s'additionnent au signal domestique"
      ],
      implementation: {
        steps: [
          "L'annoncer AVANT l'élection avec le barème et le montant du dividende par ménage (leçon de 2018 : le mandat d'abord)",
          "Verser le premier dividende trimestriel AVANT le premier euro de hausse de taxe",
          "Reprendre la trajectoire carbone gelée par paliers annuels modérés, 100% des recettes redistribuées",
          "Moduler le dividende : majoration rural/périurbain contraint à la voiture",
          "Rendez-vous d'évaluation publique annuel (émissions, incidence par décile)"
        ],
        cost: "Neutre par construction si redistribution intégrale ; recette brute potentielle ~8-10 Md€/an au niveau 2018 gelé, reversée ; coût administratif faible (canal chèque énergie existant)",
        timeline: "Annonce en campagne ; premier dividende dans les 6 mois du mandat ; trajectoire sur 10 ans",
        obstacles: [
          "Verrou politique post-gilets jaunes : la fenêtre n'existe qu'avec un mandat électoral explicite",
          "Coordination avec le mécanisme européen ETS2 (2027) qui arrive au même moment — risque de double peine perçue",
          "Pression permanente pour détourner les recettes vers le budget général (ce qui tue le contrat)"
        ]
      },
      plausibility: 6
    },
    {
      idea: "Réforme des successions : durcir fortement le sommet, alléger le milieu",
      from: ["ps-2027", "villepin-2027", "lfi-2027"],
      bloc_origin: "centre-gauche",
      why_good: "Convergence académique rare (Blanchard-Tirole 2021, CAE, IPP) : 60% du patrimoine français est désormais hérité, la concentration revient aux niveaux de 1900, et le taux effectif des très hautes transmissions tombe à ~10% via les niches (assurance-vie, démembrement, pacte Dutreil) pendant que les successions moyennes paient plein tarif. Corriger cette régressivité est défendable en logique méritocratique libérale comme en logique égalitariste — taxer les flux d'héritage distord moins l'économie que taxer le travail. Le grand deal fiscal disponible de 2027 : « moins sur le travail, plus sur l'héritage ».",
      pros: [
        "Rendement réel : 2 à 8 Md€/an selon l'ampleur de la fermeture des niches (CAE : jusqu'à ~10 Md€)",
        "Le volet « alléger le milieu » rend la réforme électoralement vendable — c'est la version votable",
        "Peut financer les baisses de charges du bloc central : le pont droite-gauche existe objectivement",
        "Assiette difficile à délocaliser (immobilier français, exit tax possible sur les donations)"
      ],
      cons: [
        "L'impôt le plus détesté des Français, y compris de ceux qui ne le paieront jamais (biais documenté)",
        "Optimisation internationale des très grands patrimoines mobiliers (expatriation pré-transmission)",
        "Le pacte Dutreil protège de vraies transmissions d'entreprises : le durcissement doit distinguer outil productif et niche",
        "LFI ne propose pas le volet « alléger le milieu » qui rendrait la réforme majoritaire — la version punitive tue le deal"
      ],
      implementation: {
        steps: [
          "Basculer sur la taxation du flux reçu par héritier sur la vie entière (logique CAE) plutôt que par succession",
          "Fermer les trois niches du sommet : plafonner l'avantage assurance-vie, encadrer le démembrement, resserrer Dutreil sur l'outil productif réel",
          "Relever l'abattement en ligne directe pour les successions moyennes (le volet qui achète la majorité)",
          "Rendement net affecté explicitement à la baisse des prélèvements sur le travail (le deal rendu visible)",
          "Clause d'évaluation à 5 ans sur le rendement et les comportements d'évitement"
        ],
        cost: "Rendement net : 2-8 Md€/an selon calibrage (CAE 2021) — après le coût du volet allègement du milieu",
        timeline: "Loi de finances année 1 ou 2 ; application aux transmissions futures (pas de rétroactivité)",
        obstacles: [
          "Impopularité massive de l'impôt successoral : exige un paquet gagnants-visibles",
          "Lobby de l'assurance-vie (1 900 Md€ d'encours) et des transmissions familiales",
          "Risque constitutionnel sur la rétroactivité économique de la fermeture des niches"
        ]
      },
      plausibility: 6
    },
    {
      idea: "Retraite anticipée par exposition réelle à la pénibilité (retour des critères supprimés en 2017)",
      from: ["ruffin-2027"],
      bloc_origin: "gauche",
      why_good: "Base scientifique solide : les écarts d'espérance de vie en bonne santé entre catégories professionnelles (jusqu'à 10 ans entre cadres et ouvriers) rendent l'âge uniforme structurellement injuste. Le ciblage par exposition réelle (port de charges, nuit, gestes répétitifs) est plus juste ET moins coûteux qu'un abaissement général de l'âge. C'est LA ligne de compromis social évidente pour toute future réforme des retraites — l'Allemagne et les pays nordiques ont des dispositifs équivalents.",
      pros: [
        "Corrige l'injustice la mieux documentée du système : ceux qui commencent tôt et usent leur corps financent la retraite longue des autres",
        "Coût maîtrisé (3-8 Md€/an) contre 15-25 Md€ pour un retour général à 62 ans",
        "Rend acceptable un système à âge pivot pour le reste de la population — la concession qui débloque tout",
        "Les 4 critères de 2017 existaient déjà : le dispositif technique est écrit (C3P)"
      ],
      cons: [
        "Complexité de mesure de l'exposition réelle : la traçabilité individuelle est le point d'échec du C3P version 2015",
        "Frontières contestables : chaque métier exclu produira un contentieux politique et prud'homal",
        "Coût pour les employeurs de la déclaration d'exposition (la raison du détricotage de 2017)",
        "Risque de trappe : un départ anticipé mal calibré désincite à l'aménagement des postes en fin de carrière"
      ],
      implementation: {
        steps: [
          "Réintégrer les 4 critères supprimés en 2017 (charges, postures, vibrations, agents chimiques) dans le C2P",
          "Simplifier la mesure : référentiels de branche opposables plutôt que traçabilité individuelle exhaustive",
          "Ouvrir des droits gradués : trimestres anticipés + temps partiel de fin de carrière financé",
          "Coupler avec une obligation de prévention (l'exposition doit coûter plus cher que l'aménagement du poste)",
          "Évaluation à 5 ans sur les écarts d'espérance de vie en bonne santé par métier"
        ],
        cost: "3-8 Md€/an selon calibrage (extrapolations C3P) — à comparer aux 10-18 Md€/an que rapporte chaque année d'âge légal",
        timeline: "Loi année 1, référentiels de branche sous 18 mois, premiers départs anticipés année 3",
        obstacles: [
          "Opposition patronale sur la charge déclarative (cause de l'échec de 2015-2017)",
          "Définition des seuils d'exposition : bataille technique à fort enjeu financier",
          "Équilibre global des retraites : la mesure doit s'insérer dans une réforme d'ensemble pour être finançable"
        ]
      },
      plausibility: 7
    },
    {
      idea: "Garantie d'emploi territorialisée : étendre Territoires zéro chômeur de longue durée",
      from: ["lfi-2027"],
      bloc_origin: "extreme-gauche",
      why_good: "Expérimentation française évaluée, votée deux fois à la quasi-unanimité (2016, 2020), avec des résultats humains et locaux solides. Le principe — activer les dépenses passives du chômage (RSA, ASS, coûts induits santé/logement, ~18-20 k€/an par chômeur de longue durée) pour financer des emplois utiles non concurrents — est économiquement orthodoxe. La condition qui fait tout : montée en charge progressive et évaluée, pas de généralisation décrétée.",
      pros: [
        "Rare politique sociale co-signée par la droite sociale, le centre et la gauche au Parlement",
        "Cible le noyau dur (chômage > 2 ans) que ni la conjoncture ni la formation seule ne résorbent",
        "Effets non monétaires documentés : santé, dignité, tissu local — le coût social évité est réel",
        "Cadre d'évaluation déjà construit (comité scientifique, IGAS/IGF)"
      ],
      cons: [
        "Coût net par emploi supérieur aux annonces initiales (IGAS/IGF : l'activation des dépenses passives ne couvre pas tout)",
        "Risque de concurrence avec l'emploi marchand local si le « non-concurrent » est mal contrôlé",
        "Qualité et pérennité des EBE (entreprises à but d'emploi) très hétérogènes selon les territoires",
        "Une généralisation brutale détruirait le modèle : il repose sur la mobilisation locale, non décrétable"
      ],
      implementation: {
        steps: [
          "Passer de ~60 à 150-200 territoires habilités sur le quinquennat (3e loi d'extension)",
          "Stabiliser le financement État par emploi (la variable d'ajustement actuelle qui fragilise les EBE)",
          "Renforcer le contrôle de non-concurrence par les comités locaux (commerces, artisans associés)",
          "Poursuivre l'évaluation contradictoire (comité scientifique + IGAS/IGF) avec publication intégrale",
          "Conditionner chaque nouvelle vague aux résultats de la précédente"
        ],
        cost: "~20-25 k€ nets/emploi/an après activation des dépenses passives ; une extension à 200 territoires ≈ 0,5-1 Md€/an en régime plein",
        timeline: "3e loi année 1-2 ; montée en charge continue sur le quinquennat",
        obstacles: [
          "Débat non tranché sur le coût net réel (évaluations IGAS/IGF plus sévères que celles de l'association)",
          "Dépendance à l'ingénierie locale : le goulot est humain, pas budgétaire",
          "Tentation politique de généraliser vite pour l'affichage — ce qui tuerait l'outil"
        ]
      },
      plausibility: 7
    },
    {
      idea: "Pré-recrutements rémunérés dans les métiers publics en pénurie (santé, éducation)",
      from: ["pcf-2027"],
      bloc_origin: "extreme-gauche",
      why_good: "Attaque le goulot réel — le vivier de candidats, pas le budget : payer les études contre engagement de servir a fonctionné historiquement (IPES pour les enseignants jusqu'en 1979, écoles militaires) et existe déjà en médecine (CESP). Face à des concours enseignants qui ne font plus le plein et à des déserts médicaux structurels, la généralisation est une idée opérationnelle, chiffrable, évaluable — zéro obstacle constitutionnel.",
      pros: [
        "Traite la cause (attractivité et sécurisation des parcours) là où les primes traitent le symptôme",
        "Précédents français directs et évalués : le mécanisme juridique existe (CESP)",
        "Adoptable par la droite en logique « bourse contre engagement » méritocratique",
        "Cible les étudiants modestes : effet égalité des chances mécanique"
      ],
      cons: [
        "Coût par bénéficiaire élevé (rémunération 3-5 ans avant le premier poste occupé)",
        "Effet d'aubaine partiel : une fraction des bénéficiaires aurait choisi ces métiers de toute façon",
        "L'engagement de servir se contourne (rachat, abandons) si la pénalité est faible — calibrage délicat",
        "Ne règle pas seul l'attractivité : salaires et conditions d'exercice restent les déterminants principaux"
      ],
      implementation: {
        steps: [
          "Étendre le CESP médecine (objectif x3-x5) avec affectation prioritaire dans les zones sous-denses",
          "Recréer un IPES moderne : rémunération dès la L2-L3 contre 5-8 ans d'engagement d'enseignement",
          "Cibler les disciplines et académies déficitaires (maths, lettres, Créteil/Versailles) — pas de guichet uniforme",
          "Fixer une pénalité de rupture dissuasive mais proportionnée (remboursement dégressif)",
          "Évaluer les cohortes : taux de service effectif, maintien à 10 ans"
        ],
        cost: "~25-35 k€/étudiant/an rémunéré ; un dispositif de 10 000 entrants/an ≈ 1-1,5 Md€/an en régime de croisière",
        timeline: "Loi + décrets année 1 ; premières cohortes rentrée suivante ; premiers postes pourvus à 3-5 ans",
        obstacles: [
          "Délai incompressible entre la dépense et l'effet (au-delà du quinquennat pour la médecine)",
          "Concurrence budgétaire avec les revalorisations générales réclamées par les mêmes secteurs",
          "Gestion RH des affectations liées : risque de contentieux et d'évaporation"
        ]
      },
      plausibility: 8
    },
    {
      idea: "Conditionnalité et évaluation systématique des aides publiques aux entreprises",
      from: ["ruffin-2027", "pcf-2027"],
      bloc_origin: "gauche",
      why_good: "Premier poste de dépense fiscale et sociale de l'État (~160 Md€/an selon les périmètres), évaluations lacunaires reconnues par la Cour des comptes et le Sénat (rapport 2025) ; le CIR seul coûte 7 Md€/an pour une efficacité contestée par France Stratégie/CNEPI. L'exigence d'évaluation et de contreparties est de l'orthodoxie budgétaire, pas du gauchisme — c'est le miroir gauche des sunset clauses de Lisnard, et le gisement de financement le plus sérieux du cycle 2027.",
      pros: [
        "Gisement réel de plusieurs Md€/an sur les aides inefficaces — un des rares financements non magiques du paysage",
        "Adoptable par la droite gestionnaire (chasse à la dépense inefficace) : convergence objective avec l'évaluation Lisnard",
        "Clauses de reprise (licenciements boursiers après subventions) : forte légitimité démocratique",
        "Améliore la qualité de la dépense sans hausse d'impôt"
      ],
      cons: [
        "Le chiffre agrégé « 160 Md€ » mélange allègements généraux, dépenses fiscales et subventions : le gisement réellement récupérable est bien moindre",
        "Conditionnalités mal conçues = insécurité juridique et paperasse pour les PME (l'effet inverse du but)",
        "Toucher aux allègements généraux de cotisations détruirait de l'emploi peu qualifié (consensus empirique)",
        "Les clauses de reprise sont juridiquement délicates (droit de propriété, droit UE des aides d'État)"
      ],
      implementation: {
        steps: [
          "Cartographie publique exhaustive des aides par entreprise bénéficiaire au-delà d'un seuil (transparence d'abord)",
          "Évaluation triennale obligatoire de chaque dispositif > 500 M€, par un évaluateur indépendant",
          "Réformer le CIR : plafonnement, recentrage PME et ruptures technologiques (recommandations CNEPI)",
          "Clauses de reprise ciblées sur les aides discrétionnaires (subventions, exonérations locales) — pas sur les allègements généraux",
          "Affecter les économies documentées à la baisse des impôts de production (le deal avec la droite)"
        ],
        cost: "Mesure d'économie : récupération réaliste de 2-5 Md€/an à horizon quinquennat (CIR réformé + aides discrétionnaires évaluées)",
        timeline: "Transparence année 1 ; premières évaluations année 2 ; redéploiements années 3-5",
        obstacles: [
          "Lobbying massif des bénéficiaires du CIR (grands groupes) et des secteurs aidés",
          "Droit UE : les contreparties ne doivent pas requalifier les dispositifs en aides d'État illégales",
          "Risque de dérive bureaucratique si la conditionnalité s'applique uniformément aux TPE"
        ]
      },
      plausibility: 7
    }
  ],

  // ============================================================
  // ANALYSE CROISÉE PAR THÈME (9)
  // ============================================================
  cross_analysis: [
    {
      theme: "Économie et dette",
      convergences: "Personne n'assume l'austérité mais presque tout le monde a intégré la contrainte : Retailleau, Philippe et Attal placent la dette au centre (règle d'or, zéro déficit 2037, année blanche) ; même la gauche chiffre désormais en se référant à Pisani-Ferry ou au CAE. Convergence massive et peu dite sur « le travail doit payer plus » : RN (exonération des hausses), Lisnard (« cotiser moins pour gagner plus »), Darmanin (lissage des taux marginaux), Attal (« droit au brut ») — quatre variantes du même diagnostic Bozio-Wasmer. Et la baisse des impôts de production fait consensus de Reconquête au centre.",
      divergences: "Le vrai clivage n'est pas dépenser/économiser mais QUI paie l'ajustement : la dépense sociale et le nombre de fonctionnaires (Attal -100 000, Retailleau, Lisnard) contre le capital et les successions (PS, LFI, PCF, Villepin). Et derrière : croissance par l'offre (bloc central, droite) contre relance par la demande et l'investissement public (gauche, 100 Md€ verts du PS, fonds PCF).",
      fallacy_watch: "Le chiffrage magique est bilatéral et systématique : « 100 Md€ d'économies » sans liste (Retailleau), « 120-150 Md€ sans hausse d'impôts » (Attal), « 100 Md€ dans les agences » (Lisnard) côté droite ; « le coût du capital c'est 200 Md€ » (Roussel), « les riches paieront » en assiette fantôme (LFI), « 100 Md€ de fraude fiscale » côté gauche. Symétrie parfaite dans l'évitement.",
      verdict: "Avec un déficit à ~5,5% du PIB, une dette > 113% et > 60 Md€/an d'intérêts, aucun programme n'est exécutable tel quel. Les seuls financements non magiques du paysage : évaluation/suppression de dispositifs (Lisnard), aides aux entreprises réformées (Ruffin/PCF), successions du sommet (PS/Villepin), gel temporaire des prestations (Attal — le seul à assumer une mesure impopulaire datée avant le vote). Un programme sérieux combinerait ces quatre-là ; aucun candidat ne le fait."
    },
    {
      theme: "Immigration",
      convergences: "Convergence spectaculaire et inavouée sur trois points : (1) l'exécution des OQTF est un scandale d'État de droit — du RN à Lisnard en passant par LR et Darmanin, et la gauche ne le conteste plus frontalement ; (2) il faut un moment démocratique sur le sujet — référendum (RN, Retailleau), vote parlementaire annuel de cibles (Philippe, Lisnard), convention citoyenne (Glucksmann) : trois habillages d'un même constat de dépossession ; (3) le critère du travail monte partout — « préférence travail » d'Attal, « travailleurs d'abord » de Darmanin, et jusqu'à Ruffin contre « l'immigration de travail » (à front renversé).",
      divergences: "Le vrai clivage est entre restriction des DROITS (priorité nationale RN, remigration Zemmour, suppression de l'AME RN/LR) et fermeté sur les FLUX à droits constants (Lisnard sans toucher au droit du sol, Villepin qui garde AME et droit du sol, Philippe). La gauche, elle, se divise entre assumer le débat (Glucksmann, convention) et le requalifier en diversion (LFI).",
      fallacy_watch: "À droite : la statistique sans dénominateur (48% des délinquants à Paris sont étrangers — Darmanin ; surreprésentation carcérale — Retailleau ; « submersion » — RN) qui confond corrélation brute et causalité en omettant âge, sexe, précarité, et politiques de poursuite. À gauche : le déni symétrique — traiter toute question migratoire comme une diversion fabriquée, ce qui abandonne le sujet aux extrêmes. Partout : le référendum ou la loi présentés comme débloquant l'exécution, alors que le goulot est diplomatique et administratif.",
      verdict: "Les données réelles tiennent en trois faits : les flux légaux sont majoritairement étudiants et travail, l'exécution des éloignements dépend des pays tiers plus que du droit français, et la suppression de l'AME coûterait probablement plus qu'elle ne rapporte (Évin-Stefanini). La position la plus cohérente du champ est le découplage de Villepin — contrôle procédural dur, droits sociaux et sanitaires intacts — précisément parce qu'elle correspond à l'opinion médiane réelle et au consensus technique. Personne d'autre ne l'occupe : tout le monde court après le RN sur les droits plutôt que sur l'exécution."
    },
    {
      theme: "Écologie et énergie",
      convergences: "Le nucléaire a gagné la bataille culturelle : EPR2 accélérés chez Retailleau, Lisnard, Philippe, mix nucléaire+ENR chez Villepin, « Plan Messmer 2 » au PCF — seuls EELV et LFI restent au 100% renouvelables, contre les scénarios de référence RTE. Deuxième convergence : les clauses miroirs commerciales (Mercosur), devenues quasi-position française officielle du RN à EELV. Troisième, plus récente : l'adaptation au réchauffement (Lisnard par l'expérience cannoise, EELV par le congé climatique) — l'angle mort budgétaire que I4CE et la Cour des comptes documentent.",
      divergences: "Le clivage réel : écologie par le signal-prix et la planification (dividende carbone Villepin/EELV, planification LFI reprise par l'État macroniste) contre écologie « de l'offre » anti-contrainte (Retailleau et Lisnard détricotent ZFE et normes, refus de toute fiscalité carbone à droite et au RN). Et le 100% ENR vs nucléaire reste le marqueur identitaire de la gauche écologiste contre tout le reste du spectre.",
      fallacy_watch: "À gauche : « l'ISF climatique financera la transition » (EELV — disproportion assiette/besoin : 25-34 Md€/an nécessaires selon Pisani-Ferry) et le nucléaire « trop lent trop cher » par cherry-picking anti-RTE ; les emplois verts comptés en brut. À droite : « l'écologie punitive » en épouvantail permanent qui évite de dire quel instrument on garde (ni taxe, ni norme, ni quota = pas de politique), et le nucléaire en solution unique qui néglige le mur d'investissement (67-80 Md€ pour 6 EPR2, en dérive).",
      verdict: "La physique tranche mieux que les partis : décarboner exige nucléaire ET renouvelables (RTE), un signal-prix redistribué (Quinet, échec 2018 par absence de dividende, pas par l'instrument), et un mur d'adaptation sous-budgété que tout le monde paiera. Le programme énergie-climat optimal du cycle est un assemblage que personne ne porte seul : nucléaire public PCF + dividende carbone EELV/Villepin + adaptation territorialisée Lisnard + rénovation ciblée reste-à-charge-zéro."
    },
    {
      theme: "Institutions et démocratie",
      convergences: "Diagnostic unanime d'épuisement démocratique : présidentialisme à bout de souffle, défiance record, 49.3 délégitimé. La proportionnelle (partielle chez Philippe ~30%, intégrale à gauche) progresse partout sauf chez LR. La demande de démocratie directe traverse le spectre : référendums RN et Retailleau, RIC LFI, convention citoyenne Glucksmann, votations locales Lisnard. Et la moralisation (pantouflage, cabinets de conseil) fait consensus depuis l'affaire McKinsey — Ruffin en tête mais votes RN et LR acquis.",
      divergences: "Trois régimes en concurrence : rationalisation de l'exécutif existant (Philippe : dissolution + ordonnances + référendums = exécution rapide dans le cadre actuel), restauration de l'arbitre au-dessus des partis (Villepin), rupture constituante (6e République LFI). Le clivage profond porte sur le référendum art. 11 forcé sur l'immigration (RN, Retailleau) — inconstitutionnel selon la doctrine majoritaire — contre la voie art. 89.",
      fallacy_watch: "Le légalisme magique des deux côtés : « la règle d'or garantira le sérieux » (Philippe) et « la 6e République réglera la crise démocratique » (LFI) prêtent aux procédures des vertus causales qu'elles n'ont pas. Le référendum-solution-miracle (RN, LR) escamote la chaîne d'exécution. Et « l'État de droit n'est ni intangible ni sacré » (Retailleau) — l'équivoque conceptuelle la plus lourde du cycle, qui confond règles révisables et principe de légalité.",
      verdict: "La vraie question institutionnelle de 2027 n'est pas la règle mais la coalition : aucun bloc n'aura de majorité absolue, et un seul candidat (Philippe, proportionnelle 30% + méthode annoncée avant le vote) en tire les conséquences explicites. Annoncer sa méthode de gouvernement avant l'élection — Philippe, et Attal avec son année blanche datée — est le seul progrès démocratique concret du cycle ; le reste oscille entre bricolage et table rase incantatoire."
    },
    {
      theme: "Social et retraites",
      convergences: "Tout le monde a un discours « travail » : SMIC à 1500-1600€ (PCF, LFI) ou net augmenté par les cotisations (RN, Lisnard, Attal, Darmanin), conférences salariales (PS, Ruffin, PCF), revalorisation des métiers essentiels (Ruffin, mais le Ségur l'a amorcé au centre). Convergence discrète aussi sur la pénibilité comme angle mort de la réforme de 2023 — Ruffin la porte, mais aucun candidat ne défend le statu quo intégral des 64 ans, pas même le bloc central (Philippe veut aller plus loin, les autres évitent).",
      divergences: "Retraites, le clivage en trois : abroger les 64 ans et revenir à 60-62 (LFI, PCF, Villepin pour l'abrogation), geler et corriger par la pénibilité (gauche sociale, Ruffin), allonger encore (Philippe « travailler plus longtemps », 67 ans évoqué puis retiré). Sur les minima sociaux : conditionnalité et dégressivité (Retailleau, Darmanin) contre automaticité des droits (solidarité à la source... portée par le même Darmanin — la tension est interne au centre-droit) contre extension des droits (RSA jeunes LFI).",
      fallacy_watch: "À droite : l'homme de paille statistique de « l'assistanat qui rapporte plus que le travail » (Darmanin, Retailleau) — faux au niveau individuel dans la quasi-totalité des configurations réelles. Au centre : le TINA démographique (« il faudra travailler plus longtemps ») qui présente UN choix parmi d'autres (cotisations, assiette, capitalisation) comme une nécessité arithmétique, et le motte-and-bailey de Philippe sur l'âge (65-67 évoqués, puis « pas de chiffre totémique »). À gauche : le déni symétrique du vieillissement — l'abrogation des 64 ans chiffrée par personne de façon honnête.",
      verdict: "Le COR donne les ordres de grandeur que tout le monde contourne : chaque année d'âge ≈ 10-18 Md€, amputés de 20-30% par les reports sur les autres prestations. Le compromis techniquement disponible est visible dans les fiches elles-mêmes : âge pivot maintenu + pénibilité réelle réintégrée (Ruffin) + capitalisation collective en complément pour les jeunes (Philippe) + lissage des taux marginaux au SMIC (Darmanin/Attal). Chaque bloc en détient une pièce et refuse celle des autres."
    },
    {
      theme: "Sécurité et justice",
      convergences: "Le thème le plus consensuel du cycle, et de loin : la loi narcotrafic 2025 (Retailleau-Darmanin) votée bien au-delà de la droite, avec parquet spécialisé et régime carcéral dérogatoire ; la police de proximité revendiquée par le PCF, EELV ET le bloc central ; le ciblage financier du haut du spectre recommandé par la commission sénatoriale transpartisane 2024 et repris de Darmanin à Tondelier ; le réarmement judiciaire (LPJ +21%) que personne ne propose d'annuler. La gauche a cessé de déserter le sujet — Roussel l'a rendu dicible.",
      divergences: "Le clivage porte sur le pénal ordinaire, pas sur le crime organisé : peines planchers et excuse de minorité (Retailleau, RN) contre refus du tout-carcéral (gauche) ; 20 000 places de prison (LR) vs 10 000 (Philippe) vs priorité aux alternatives (gauche). Et l'articulation immigration-délinquance reste le marqueur : systématique à l'extrême droite et chez Retailleau/Darmanin, refusée à gauche.",
      fallacy_watch: "À droite : la corrélation brute étrangers/délinquance sans variables de confusion (âge, sexe, précarité, politiques de contrôle) — le sophisme le plus répété du cycle (RN, Retailleau, Darmanin). Le cherry-picking de bilan (« quand je décide, j'exécute » — Darmanin). À gauche : l'angélisme résiduel qui attribue toute la délinquance aux causes sociales (symétrique exact), et chez EELV la généralisation d'Hénin-Beaumont en méthode nationale.",
      verdict: "Les données de victimation (SSMSI) sont sans ambiguïté : les premiers exposés à la délinquance sont les habitants pauvres des quartiers denses — la sécurité est objectivement un sujet de gauche que la gauche a longtemps abandonné. L'acquis 2024-2025 (narcotrafic, PNACO) est solide et transpartisan ; les vrais goulots sont l'exécution des peines courtes, la surpopulation carcérale (contentieux CEDH garanti si 20 000 places restent un slogan : 6-8 Md€ non budgétés) et la corruption portuaire. Les peines planchers, elles, ont déjà été essayées (2007-2014) avec des effets nuls documentés — leur retour est du symbole pur."
    },
    {
      theme: "Europe et international",
      convergences: "Plus personne ne propose le Frexit ni la sortie de l'euro — le RN lui-même a abandonné (il reste sur la désobéissance sélective, comme... LFI, symétrie gênante pour les deux). Le réarmement fait consensus : 3% du PIB chez Philippe, Europe de la défense chez Glucksmann, dissuasion élargie en débat chez Villepin ; seule la gauche radicale traîne. Les clauses miroirs et la protection commerciale progressent partout. L'autonomie stratégique vis-à-vis de Washington est devenue transversale — de Villepin à LFI en passant par le RN, pour des raisons opposées.",
      divergences: "Le clivage structurant : l'Europe comme levier (Glucksmann — emprunt commun, Europe puissance ; le bloc central) contre l'Europe comme contrainte à desserrer (RN, LFI, PCF — désobéissance ; Retailleau — primauté du droit national). Sur l'Ukraine : soutien clair (PS, centre, LR) contre ambiguïtés symétriques de LFI (« l'OTAN co-responsable ») et de Villepin (renvoi dos à dos des « logiques de guerre »). Sur Israël-Gaza : Villepin et la gauche pour la reconnaissance de la Palestine et l'application du mandat CPI, droite et centre en soutien conditionnel à Israël.",
      fallacy_watch: "À gauche et au centre-gauche : « l'Europe nous protégera » (Glucksmann) — le déplacement du fardeau vers un échelon dont la France ne contrôle pas les décisions, chaque promesse devenant conditionnelle sans le dire. Aux extrêmes : « le bouclier des traités saute si on a le courage » (LFI) et la fausse dichotomie « soumission à Bruxelles ou France libre » (RN) — le même sophisme de la volonté pure contre le droit. Chez Villepin : la fausse symétrie Russie/Occident et le halo rétrospectif de 2003 comme qualification.",
      verdict: "Le réel : la France pèse par l'UE ou pèse peu — mais l'UE décide à 27, lentement, et l'emprunt commun défense n'a aucune majorité au Conseil à ce jour. La proposition la plus opérationnelle du champ est le format restreint de Villepin (précédent E3), la plus mûre est le réarmement européen de Glucksmann (validé par les faits depuis 2022). Les désobéissances promises (RN, LFI) se heurteraient en semaines à la réalité des marchés et de la BCE — aucun des deux ne décrit la séquence d'après."
    },
    {
      theme: "Santé",
      convergences: "Consensus sur le diagnostic de pénurie : déserts médicaux, hôpital en tension, dépendance aux importations pharmaceutiques (5 000 signalements de pénuries ANSM 2023-2024). La souveraineté sanitaire post-Covid est transpartisane : pôle public du médicament (LFI) et relocalisation des molécules critiques (droite souverainiste, centre) sont deux versions du même mouvement. Les pré-recrutements type CESP et les maisons de santé salariées (Ruffin) rejoignent les expérimentations du centre.",
      divergences: "L'AME est le vrai marqueur : suppression (RN, Retailleau) contre maintien au nom du consensus technique (Villepin, toute la gauche, et en pratique le centre — l'arbitrage a déjà été perdu deux fois par Retailleau au gouvernement). Sur l'hôpital : 100 000 soignants (PCF) et embauches massives (LFI, Villepin) contre réorganisation et efficience (droite, centre) — le clivage moyens/organisation classique.",
      fallacy_watch: "À droite : l'économie fantôme de la suppression de l'AME (~1 Md€ affiché, économie nette probablement faible ou négative par report vers les urgences — Évin-Stefanini, FHF) : la mesure est identitaire, pas budgétaire. À gauche : l'embauche magique (100 000 soignants) qui ignore le goulot du vivier — on ne recrute pas des soignants qui n'existent pas, d'où la supériorité des pré-recrutements sur les cibles d'effectifs.",
      verdict: "Le goulot sanitaire français est humain (démographie médicale, attractivité, temps administratif) plus que financier. Les mesures qui traitent le vivier — CESP multiplié, pré-recrutements PCF, délégations d'actes — dominent objectivement celles qui affichent des effectifs ou suppriment des couvertures. La suppression de l'AME est le cas d'école du cycle : une mesure dont le coût sanitaire et budgétaire net est documenté comme négatif, maintenue pour sa valeur de signal."
    },
    {
      theme: "Éducation",
      convergences: "Retour aux fondamentaux quasi unanime : lire-écrire-compter au primaire chez Philippe, Attal, Lisnard, exigence et autorité partout à droite et au centre ; même la gauche ne défend plus le collège unique indifférencié. L'égalité territoriale d'accès à l'excellence fait consensus improbable : lycées d'excellence et prépas en zone périphérique (Philippe) compatibles avec le discours LFI sur l'égalité et l'électorat RN périphérique. La revalorisation enseignante est promise par tous — financée par personne.",
      divergences: "Le tri assumé (brevet exigible d'Attal, groupes de niveau) contre l'école commune ; l'autonomie des établissements et le recrutement par les chefs (Lisnard, Philippe) contre le statut national ; le privé sous contrat, attaqué à gauche, sanctuarisé à droite — clivage évité par le centre. L'IA à l'école (Attal) est le seul objet neuf, sans opposition structurée à ce stade.",
      fallacy_watch: "Le technocratisme du décret (« décrets dès l'été 2027, appliqués à la rentrée » — Attal) : confondre la décision et la transformation, alors que PISA et les évaluations nationales montrent l'inertie décennale des systèmes éducatifs. Le chiffrage évité : prépa-lycée (300-500 M€/an), revalorisations (2-4 Md€/an chez Lisnard) jamais consolidés dans les plans d'économies des mêmes candidats. À gauche : l'explication de l'échec scolaire par les seuls moyens, contre l'évidence comparative (la France dépense dans la moyenne OCDE pour des résultats sous la moyenne).",
      verdict: "Le système français cumule trois faits mesurés : effondrement du niveau en maths (TIMSS, PISA), ségrégation scolaire record, crise du recrutement enseignant. Les mesures les mieux étayées du cycle : brevet exigible AVEC prépa-lycée financées (Attal, littérature Woessmann), pré-recrutements IPES (PCF), lycées d'excellence territoriaux (Philippe, évaluations J-PAL des internats). L'angle mort commun : la ségrégation entre établissements, dont aucun candidat majeur ne fait une priorité chiffrée — c'est pourtant le premier prédicteur des écarts."
    }
  ],

  // ============================================================
  // PATTERNS DE SOPHISMES TRANSVERSAUX (8)
  // ============================================================
  fallacy_patterns: [
    {
      pattern: "Le chiffrage magique : des dizaines de milliards annoncés sans liste, sans assiette ou sans arbitrage",
      who_uses_it: ["rn-2027", "lr-2027", "lisnard-2027", "attal-renaissance-2027", "villepin-2027", "pcf-2027", "lfi-2027"],
      example: "Retailleau promet « 100 milliards d'économies » sans liste de coupes ; Attal « 120 à 150 milliards, sans augmenter les impôts » en sanctuarisant les quatre plus gros budgets ; Lisnard agrège « 1 153 agences, 450 000 agents, 100 milliards » en confondant stock budgétaire et gisement d'économies (gains réels : 2-5 Md€/an selon le Sénat) ; Roussel réplique avec « le coût du capital, 200 milliards par an » qui confond flux comptable et recette fiscale mobilisable ; Villepin empile crédibilité budgétaire, abrogation des 64 ans, fonds souverain de 100 Md€ et embauches massives sans arbitrage. Sept candidats sur treize recourent au même geste."
    },
    {
      pattern: "L'assiette fantôme : « les riches / l'immigration / la fraude paieront » — un financement dont l'assiette réelle est 5 à 10 fois inférieure au besoin",
      who_uses_it: ["lfi-2027", "pcf-2027", "eelv-2027", "ps-2027", "rn-2027"],
      example: "Version gauche : LFI autofinance son programme par la taxation du capital (hypothèses en cascade, fuite d'assiette ignorée), EELV fait financer 25-34 Md€/an de transition par un ISF climatique qui en rapporterait une fraction, Glucksmann reprend les chiffrages hauts du débat Zucman (« 15 à 25 milliards ») sans les stress-tester, Roussel ajoute « 100 milliards de fraude fiscale : il suffit d'aller les chercher ». Version extrême droite, structure identique : le RN finance ses mesures par « la suppression des dépenses liées à l'immigration » (8-16 Md€ affichés, jamais consolidés). Le sophisme est rigoureusement bipartisan — seule la cible change."
    },
    {
      pattern: "La procédure-miracle : référendum, règle d'or ou constituante présentés comme résolvant un problème d'exécution",
      who_uses_it: ["rn-2027", "lr-2027", "philippe-horizons-2027", "lfi-2027"],
      example: "Retailleau : « le référendum permettra de tout débloquer sur l'immigration » — alors que le goulot des éloignements est diplomatique (laissez-passer consulaires) et administratif, pas normatif. Philippe : « la règle d'or constitutionnelle garantira le sérieux budgétaire » — légalisme magique, l'Italie a une règle d'or et 135% de dette. LFI : l'Assemblée constituante de la 6e République comme résolution de la crise démocratique. Trois camps, une même confusion entre changer la règle et changer le réel."
    },
    {
      pattern: "L'ennemi providentiel : un adversaire unique qui explique tout et immunise le programme contre la critique",
      who_uses_it: ["rn-2027", "reconquete-2027", "lfi-2027", "ruffin-2027", "lisnard-2027"],
      example: "L'immigré et Bruxelles (RN : « submersion », « soit la soumission à Bruxelles, soit la France libre »), l'islam (Zemmour : « incompatible avec la République »), l'oligarchie (Mélenchon : toute institution ou expertise critique est assimilée au camp adverse — raisonnement immunisé), la « gauche des métropoles » (Ruffin), « l'État central drogué à la dépense » (Lisnard). Le mécanisme est identique : l'ennemi désigné dispense de chiffrer, et toute objection devient une preuve d'appartenance au camp ennemi."
    },
    {
      pattern: "La nostalgie de l'âge d'or : un passé idéalisé érigé en preuve de faisabilité",
      who_uses_it: ["reconquete-2027", "pcf-2027", "ruffin-2027", "villepin-2027"],
      example: "Zemmour : « la remigration est réaliste, De Gaulle a bien rapatrié un million de pieds-noirs » — fausse analogie entre l'accueil de citoyens français et l'expulsion de millions d'étrangers et de binationaux. Roussel : « produire en France recréera le plein emploi ouvrier » et « les 35 heures ont créé 400 000 emplois, les 32 feront de même » — négligence du progrès technique et extrapolation hors contexte. Ruffin : « le libre-échange a détruit l'industrie » en cause unique. Villepin : le discours de l'ONU de 2003 en halo rétrospectif comme qualification présidentielle."
    },
    {
      pattern: "TINA et son miroir : la nécessité arithmétique sans alternative contre le faux binaire austérité/relance",
      who_uses_it: ["philippe-horizons-2027", "attal-renaissance-2027", "lfi-2027", "rn-2027"],
      example: "Philippe : « il faudra travailler plus longtemps » présenté comme une nécessité sans alternative — alors que cotisations, assiette, capitalisation et pénibilité sont des variables réelles ; son motte-and-bailey sur l'âge (65-67 évoqués, puis « pas de chiffre totémique ») complète le dispositif. Attal : le « en même temps » qui masque le transfert (« droit au brut » financé par « des économies sur les dépenses sociales » — quelqu'un paie, ce n'est juste pas dit qui). En miroir exact, LFI : « c'est l'austérité ou notre relance » — la fausse dichotomie qui interdit tout l'espace intermédiaire où se joue la politique budgétaire réelle."
    },
    {
      pattern: "L'euphémisation stratégique : le vocabulaire qui fait disparaître le contenu de la mesure",
      who_uses_it: ["attal-renaissance-2027", "philippe-horizons-2027", "darmanin-2027"],
      example: "« L'année blanche » (Attal) pour un gel des prestations sociales de 6-9 Md€ pris sur les allocataires ; « je ne promets pas du sang et des larmes » (Philippe, 30 juin 2026) en annonçant simultanément un programme « massif » d'économies et « des efforts assez importants » ; « une préférence aux travailleurs, quelle que soit leur nationalité » (Darmanin) — triangulation lexicale construite pour capter le vocabulaire de la préférence nationale tout en s'en défendant. Le bloc central a fait de l'euphémisme sa langue maternelle : c'est sa version du chiffrage magique."
    },
    {
      pattern: "La statistique sans dénominateur : la corrélation brute immigration/délinquance sans variables de confusion",
      who_uses_it: ["darmanin-2027", "lr-2027", "rn-2027", "reconquete-2027"],
      example: "Darmanin : « 48% des actes de délinquance à Paris sont le fait d'étrangers » (55% à Marseille) — chiffre de mis en cause, pas de condamnés, sur des contentieux où les étrangers sont surexposés aux contrôles, sans correction par âge, sexe et précarité ; Retailleau : la surreprésentation carcérale des étrangers en preuve causale ; le RN : « l'insécurité explose à cause de l'immigration » en association systématique ; Zemmour : les prénoms comme proxy du « changement de peuple ». Quatre variantes du même sophisme de corrélation, du plus technocratique au plus essentialiste — c'est le sophisme le plus répété du cycle 2027."
    }
  ],

  // ============================================================
  // LECTURE D'ENSEMBLE À J-10 MOIS
  // ============================================================
  spectrum_summary: "À dix mois du scrutin, le paysage est le plus fragmenté de la Ve République : treize offres sérieuses, aucune au-dessus de 40%, et un seul pôle dominant — le RN à 32-37% pour Bardella, dont la candidature dépend du verdict d'appel de Marine Le Pen le 7 juillet 2026, l'événement qui peut tout redistribuer à l'extrême droite (Zemmour, à 3-5%, attend ce même verdict pour exister). Le bloc central est éclaté en quatre : Philippe, déclaré depuis septembre 2024, se tasse à 14-16% et voit revenir Attal (8%, investi à 91% par Renaissance), pendant que Darmanin cultive sa niche « droite sociale populaire » sans se déclarer et que Villepin convertit mal une popularité record (3e personnalité) en intentions de vote (2-5%). La droite LR s'est disloquée : Retailleau, désigné à 73,8% par les adhérents, plafonne sous 10% avec Lisnard parti en autonome, Wauquiez rallié à Philippe et Bertrand maintenu. À gauche, Mélenchon (13-16%, fort rejet) a verrouillé LFI et refuse toute primaire, comme Glucksmann (9-12%) qui lancera formellement sa candidature à la fin de l'été — le PS tranche entre les deux lignes par consultation militante le 9 juillet, tandis que la primaire unitaire du 11 octobre (Tondelier, Ruffin, Autain) ne rassemble que des candidatures à 2-3% : l'union porte sur le wagon de queue, pas sur la locomotive. Sur le fond, les convergences réelles dépassent largement l'affichage — exécution des OQTF, nucléaire, « le travail doit payer », narcotrafic, clauses miroirs — mais aucun candidat n'assemble les pièces compatibles détenues par les camps adverses, et les sophismes sont symétriques : chiffrage magique à droite et au centre, assiette fantôme à gauche, statistique sans dénominateur à l'extrême droite. Le scénario central reste un second tour Bardella contre le survivant de la guerre des centres, avec une gauche arbitre malgré elle ; la seule certitude est qu'aucune majorité parlementaire absolue n'en sortira, et que le candidat le mieux préparé à cette réalité-là — coalitions, proportionnelle, méthode annoncée — gouvernera peut-être, quel que soit le vainqueur du soir."
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["_consolidated"] = CONTENT_ELECTIONS_CONSOLIDATED;
