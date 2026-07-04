const CONTENT_ELECTIONS_lr_2027 = {
  id: "lr-2027",
  name: "Bruno Retailleau",
  party: "Les Républicains",
  bloc: "droite",
  spectrum: 6,
  status: "déclaré",
  status_note: "Au 4 juillet 2026 : Retailleau, président de LR depuis mai 2025 (élu face à Wauquiez) et ancien ministre de l'Intérieur (gouvernements Barnier puis Lecornu), a été désigné candidat de LR le 19 avril 2026 par consultation directe des adhérents : 73,8% des voix, ~45 000 votants (60% de participation), option primaire écartée. Mais la droite est fragmentée : David Lisnard a quitté LR fin mars 2026 pour se présenter en autonome ; Laurent Wauquiez (patron des députés LR) a rompu, appelle Retailleau à se retirer et soutient Édouard Philippe ; Xavier Bertrand maintient sa propre candidature ; Copé menace d'un « schisme ». Sondages : le candidat LR reste sous les 10% au 1er tour.",
  color: "#1d4ed8",

  thesis: "La France décroche parce qu'elle a renoncé à l'autorité (État régalien affaibli, immigration subie, justice laxiste) et au travail (assistanat, 35 heures, dette). Il faut une rupture d'ordre — réduire l'immigration à un flux minimal décidé par référendum, restaurer la primauté du droit national — et une rupture d'effort : rompre avec « l'État-providence qui dérive », faire travailler plus et dépenser moins. Une droite de conviction, conservatrice sur les mœurs et l'identité, libérale sur l'économie, contre « la démagogie du RN et l'idéologie de LFI » comme contre une « saison 3 du macronisme ».",
  counter_thesis: "Steelman adverse : Retailleau propose la politique migratoire du RN avec les manières de la droite classique — mais sans l'espace électoral : pris entre Bardella (32-37%) qui possède le thème et Philippe qui possède l'électorat de gouvernement, il plafonne sous 10% et son maintien risque surtout d'éliminer toute droite du second tour (l'argument de Wauquiez). Sur le fond : son référendum article 11 pour contourner le Parlement et faire primer le droit national est un contournement constitutionnel que le Conseil constitutionnel bloquerait ; son bilan Place Beauvau montre l'écart entre le verbe et les chiffres (les flux et les OQTF n'ont pas significativement changé sous son ministère) ; et sa « rupture » économique reste évasive sur ce qu'il coupe précisément. Un programme de rupture porté par l'homme du système qui parle de rupture depuis 20 ans au Sénat.",

  program_pillars: [
    "Immigration réduite sous 50 000 entrées/an, décidée par référendum (article 11 élargi)",
    "Primauté du droit national sur le droit européen dans les domaines régaliens",
    "Rupture avec « l'assistanat » : RSA conditionné, dégressivité chômage, travailler plus",
    "Baisse des dépenses publiques et de la fiscalité de production ; État recentré",
    "Régalien : peines exécutées, prisons, fin de l'excuse de minorité pour récidivistes, lutte contre le narcotrafic et l'islamisme (dissolution du frérisme)",
    "Conservatisme culturel : école du mérite et des savoirs, uniforme, autorité, laïcité ferme"
  ],

  proposals: [
    {
      title: "Réduire l'immigration légale sous 50 000 entrées par an",
      domain: "immigration",
      detail: "Diviser par six le flux annuel de premiers titres de séjour (~320 000-340 000/an actuellement) via des quotas votés par le Parlement ou par référendum : restriction drastique du regroupement familial, des titres étudiants et « étranger malade », immigration de travail sur besoins stricts.",
      pros: [
        "Fixe un objectif chiffré et contrôlable là où le débat reste incantatoire — la logique de quotas existe au Canada et était proposée par Sarkozy",
        "Le rythme actuel (record historique de titres délivrés en 2023-2024) n'a jamais été explicitement validé démocratiquement — le point est exact",
        "Prend en compte l'engorgement réel du logement social, de l'école et de l'hôpital dans certains territoires"
      ],
      cons: [
        "~60% des flux actuels sont difficilement compressibles sans rupture juridique : regroupement familial (directive UE 2003/86 + art. 8 CEDH), étudiants (intérêt économique documenté, la France en fait un axe d'influence), asile (conventionnel)",
        "Impact économique : santé (les PADHUE font tourner l'hôpital), BTP, agriculture saisonnière — pénuries immédiates sans plan de substitution",
        "Le chiffre « 50 000 » est un totem sans étude d'impact publiée : pourquoi pas 80 000 ou 120 000 ?",
        "Comme ministre de l'Intérieur, Retailleau n'a pas infléchi significativement ces flux — indice de la difficulté réelle"
      ],
      plausibility: 3,
      plausibility_note: "Atteignable seulement en violant ou renégociant la directive regroupement familial et la jurisprudence CEDH — d'où le couplage avec le référendum de primauté (lui-même très improbable). Une baisse à 150 000-200 000 serait juridiquement atteignable ; 50 000 ne l'est pas dans l'ordre juridique actuel.",
      cost_estimate: "Pas de chiffrage officiel ; effets budgétaires ambigus (moins de dépenses d'accueil mais moins de cotisants — cf. OCDE : contribution nette des immigrés ≈ neutre)."
    },
    {
      title: "Référendum sur l'immigration via un article 11 élargi",
      domain: "institutions",
      detail: "Réviser la Constitution pour élargir le champ de l'article 11 (référendum législatif) aux questions migratoires et de société, afin de « rendre la parole au peuple » — l'immigration ayant « bouleversé la société depuis cinquante ans sans que les Français aient jamais eu à se prononcer ».",
      pros: [
        "Diagnostic démocratique exact : aucune consultation directe sur l'immigration en 50 ans malgré des transformations majeures — le déficit de consentement nourrit les extrêmes",
        "Passer par l'art. 89 pour élargir l'art. 11 est plus propre juridiquement que le passage en force à la De Gaulle envisagé par le RN",
        "Précédents fonctionnels : les votations suisses encadrent l'immigration sans sortie de l'État de droit"
      ],
      cons: [
        "Cercle vicieux : élargir l'art. 11 exige une révision par l'art. 89, donc l'accord de l'Assemblée ET du Sénat puis Congrès ou référendum — introuvable sans majorité massive",
        "Un référendum ne peut pas abroger la CEDH ni les directives UE : le peuple voterait des mesures que les cours neutraliseraient ensuite — machine à frustration",
        "Risque de plébiscite permanent sur les sujets identitaires, dérive illibérale documentée (Hongrie) où le référendum sert à écraser les contre-pouvoirs",
        "Public Sénat/Les Surligneurs : la faisabilité du projet Retailleau est contestée par la majorité des constitutionnalistes"
      ],
      plausibility: 3,
      plausibility_note: "La voie choisie (89 pour élargir 11) est légale mais politiquement improbable (double majorité parlementaire requise) ; et le contenu (primauté sur le droit UE) resterait bloqué par les engagements européens. Score 3 : possible en théorie constitutionnelle, improbable en pratique politique.",
      cost_estimate: "Coût d'organisation d'un référendum : ~200-250 M€ (précédents) ; enjeu principal non budgétaire."
    },
    {
      title: "Primauté du droit national sur le droit européen dans les domaines régaliens",
      domain: "europe",
      detail: "Inscrire dans la Constitution un « bouclier » faisant prévaloir la loi française sur le droit UE et la CEDH pour l'immigration, la sécurité et l'identité — sans sortir de l'UE.",
      pros: [
        "Le conflit de normes est réel et monte partout : Cour de Karlsruhe (arrêt PSPP 2020), Conseil d'État français (French Data Network 2021) ont déjà posé des limites à la primauté absolue",
        "Position médiane entre soumission intégrale et Frexit : assume la confrontation juridique plutôt que le contournement hypocrite",
        "Force l'UE à négocier sur l'asile et les retours — ce que le pacte migratoire 2024 a commencé à faire"
      ],
      cons: [
        "La primauté du droit UE est la clef de voûte de l'ordre juridique européen (jurisprudence Costa 1964) : un opt-out unilatéral déclencherait procédures d'infraction, astreintes financières (précédent Pologne : 1 M€/jour) et crise politique majeure",
        "« Sans sortir de l'UE » est le point aveugle : la Pologne du PiS a essayé exactement cela et a fini par reculer, sanctions à l'appui",
        "Fragilise la position française quand elle invoque le droit UE contre les autres (pêche, Mercosur, aides d'État)",
        "Sur la CEDH, mêmes limites que Zemmour en version douce : la renégociation collective (voie danoise) est lente et incertaine"
      ],
      plausibility: 2,
      plausibility_note: "Constitutionnellement écrivable, mais inapplicable sans affrontement frontal avec la CJUE et la Commission que la France, premier bénéficiaire de la PAC et emprunteur sous surveillance, peut difficilement soutenir. La voie réaliste est la renégociation collective — que le programme n'assume pas comme telle.",
      cost_estimate: "Risque d'astreintes CJUE non provisionné (précédent polonais : centaines de M€)."
    },
    {
      title: "RSA conditionné à 15 heures d'activité et dégressivité des allocations chômage",
      domain: "social",
      detail: "Généralisation stricte du RSA sous condition d'activité (loi plein emploi 2023 durcie), dégressivité des allocations chômage dès 6 mois pour les hauts revenus, plafonnement du cumul des minima sociaux, « le travail doit toujours payer plus que l'inactivité ».",
      pros: [
        "S'appuie sur une réforme déjà votée (loi 2023, généralisée en 2025) : continuité crédible, pas de révolution juridique",
        "Les expérimentations d'accompagnement intensif du RSA montrent des retours à l'emploi améliorés dans les départements pilotes",
        "Consensus OCDE sur les politiques d'activation (modèles danois et allemand Hartz) : conditionnalité + accompagnement fonctionne mieux que l'allocation passive",
        "Répond à un sentiment d'injustice fort chez les travailleurs modestes — électoralement et moralement réel"
      ],
      cons: [
        "Le « travail gratuit » de 15h frôle le travail obligatoire si les heures ne sont ni formatives ni rémunérées — contentieux constitutionnel possible",
        "~40% des allocataires RSA ont des freins lourds (santé, garde d'enfants, mobilité) : sans investissement massif dans l'accompagnement (coûteux), la conditionnalité produit surtout des radiations, pas de l'emploi",
        "La dégressivité chômage a des effets empiriques modestes (études Unédic/DARES) et accélère surtout les sorties vers des emplois de moindre qualité",
        "Économies faibles à court terme : le RSA coûte ~12 Md€, mais les sanctions ne rapportent presque rien si les gens ne retrouvent pas d'emploi"
      ],
      plausibility: 8,
      plausibility_note: "Voie législative simple, dynamique déjà engagée, majorité sénatoriale acquise. La vraie incertitude est l'efficacité, pas la faisabilité.",
      cost_estimate: "Accompagnement sérieux : +1 à 2 Md€/an (France Travail) ; économies nettes incertaines — la Cour des comptes juge les gains des politiques de contrôle modestes."
    },
    {
      title: "Rupture avec « l'État-providence » : ~100 Md€ de baisse des dépenses publiques",
      domain: "économie",
      detail: "Réduction massive des dépenses (objectif évoqué de l'ordre de 100 Md€ sur le quinquennat) : gel du point d'indice hors régalien, non-remplacement partiel, suppression d'agences et d'opérateurs, chasse aux doublons État/collectivités, recentrage de l'État sur le régalien.",
      pros: [
        "Le diagnostic est incontestable : 57% du PIB de dépenses publiques (record OCDE), déficit ~5,5%, charge de la dette >60 Md€/an et en route vers 100 Md€ — la France est objectivement au bord de la contrainte extérieure",
        "Cibler les opérateurs/agences s'appuie sur des travaux sérieux (rapport sénatorial 2025 sur les agences de l'État)",
        "La crédibilité budgétaire est LA condition de tout le reste (taux d'intérêt, marges de manœuvre)"
      ],
      cons: [
        "Le détail des coupes n'est jamais publié : « 100 Md€ » sans liste de mesures est exactement le « chiffrage magique » que la droite reproche aux autres",
        "Les précédents (RGPP, CAP 2022) ont livré 5-10 Md€, pas 100 : l'ordre de grandeur annoncé n'a jamais été atteint par personne en France",
        "60% de la dépense = retraites, santé, éducation : intouchables dans le discours Retailleau (il promet même des hausses régalien/prisons/défense) — l'équation est insoluble sans toucher au social",
        "Effet récessif à court terme si les coupes sont réelles et rapides (multiplicateurs budgétaires)"
      ],
      plausibility: 4,
      plausibility_note: "Faisable par lois de finances SI majorité et SI courage politique — deux conditions historiquement jamais réunies pour cet ordre de grandeur. Une trajectoire crédible serait 30-50 Md€ sur 5 ans ; 100 Md€ relève de l'affichage.",
      cost_estimate: "Économies annoncées ~100 Md€/quinquennat (non détaillées) ; rapports Sénat 2025 : gisement réel sur les agences ≈ 2-3 Md€/an, très loin du compte."
    },
    {
      title: "Suppression de l'AME, remplacée par une aide d'urgence restreinte",
      domain: "santé",
      detail: "Position défendue par Retailleau au gouvernement dès 2024 (arbitrage perdu face à la censure et aux ministres de la Santé) : restreindre la couverture santé des sans-papiers au « vital et à l'urgent ».",
      pros: [
        "Continuité avec ses positions ministérielles : cohérence politique démontrée",
        "Le Sénat LR l'a voté plusieurs fois : majorité sénatoriale disponible",
        "Croissance réelle des dépenses AME (+~50% en 10 ans, ~1,2 Md€) justifiant au minimum un contrôle renforcé (accord même du rapport Évin-Stefanini sur le panier de soins)"
      ],
      cons: [
        "Le rapport Évin-Stefanini (2023) — commandé par la droite — conclut que l'AME n'est pas un facteur d'appel migratoire et que sa suppression serait contre-productive sanitairement et financièrement",
        "Toutes les fédérations hospitalières et l'Académie de médecine y sont opposées : soins retardés = urgences saturées et plus chères",
        "Économie brute 1,2 Md€ = 0,02% du PIB : l'enjeu est symbolique, pas budgétaire",
        "Report de charge sur les hôpitaux (créances irrécouvrables) déjà en difficulté"
      ],
      plausibility: 7,
      plausibility_note: "Juridiquement faisable par loi de finances (le Conseil constitutionnel a validé des restrictions en 2019) ; le blocage est politique (Assemblée) et pratique (les hôpitaux soignent quand même).",
      cost_estimate: "Économie affichée ~1 Md€ ; économie nette réelle contestée, probablement faible ou négative (rapport Évin-Stefanini, FHF)."
    },
    {
      title: "Justice : peines planchers, fin de l'excuse de minorité pour les récidivistes, 20 000 places de prison, exécution réelle des peines",
      domain: "sécurité",
      detail: "Rétablissement de peines minimales pour les récidivistes, exclusion de l'atténuation de responsabilité des mineurs récidivistes de 16-18 ans, programme immobilier pénitentiaire massif, suppression des réductions de peine automatiques résiduelles, comparution immédiate étendue.",
      pros: [
        "L'écart prononcé/exécuté (dizaines de milliers de peines d'emprisonnement en attente) est un vrai scandale d'État documenté par les rapports parlementaires",
        "La surpopulation carcérale (>150% en maison d'arrêt) rend la prison criminogène : construire n'est pas une lubie sécuritaire, c'est aussi une exigence CEDH (condamnations répétées de la France)",
        "Sur le narcotrafic, son bilan ministériel a une réalisation concrète : la loi narcotrafic 2025 (parquet national anticriminalité organisée, régime carcéral durci) votée largement"
      ],
      cons: [
        "Peines planchers : évaluations 2007-2014 sans effet mesurable sur la récidive, mais +4 000 années de détention — coût sans bénéfice démontré",
        "20 000 places : le plan 15 000 de Macron (2017) a livré ~4 500 places en 7 ans ; délais fonciers et coûts (~250-400 k€/place) rendent la promesse invérifiable sur un quinquennat",
        "L'excuse de minorité atténuée peut déjà être écartée par le juge depuis 2021 : la mesure existe en droit, le slogan l'ignore",
        "Aucun mot sérieux sur la prévention et la réinsertion, qui déterminent la récidive autant que la sévérité"
      ],
      plausibility: 6,
      plausibility_note: "Législativement faisable (majorité sénatoriale, opinion favorable) sauf censures ponctuelles (mineurs : le Conseil constitutionnel protège l'atténuation comme principe fondamental — censure partielle de la loi Attal 2024 sur ce point). Le mur est budgétaire et foncier pour les prisons.",
      cost_estimate: "20 000 places ≈ 6-8 Md€ d'investissement + ~1 Md€/an de fonctionnement ; peines planchers : surcoût carcéral non chiffré par le candidat."
    },
    {
      title: "Dissolution des structures fréristes et laïcité durcie",
      domain: "sécurité",
      detail: "Sur la base du rapport sur les Frères musulmans (2025) qu'il a porté au gouvernement : dissolutions d'associations, contrôle des financements, fermetures d'écoles hors contrat liées à la mouvance, interdiction du voile dans le sport et débat sur l'accompagnement scolaire.",
      pros: [
        "S'appuie sur un rapport d'État documenté (remis en mai 2025) et non sur des fantasmes : l'entrisme frériste est attesté par les services",
        "Continuité de la loi séparatisme 2021 : outillage juridique existant, jurisprudence en construction",
        "Ligne partagée du centre à la droite : coalition politique possible"
      ],
      cons: [
        "Les dissolutions administratives sont régulièrement annulées par le Conseil d'État quand les preuves sont faibles : l'outil exige de la rigueur, pas des annonces",
        "Risque d'amalgame musulman/islamiste dans l'exécution — contre-productif pour l'objectif même (assécher le séparatisme suppose de ne pas pousser les musulmans ordinaires vers les séparatistes)",
        "Multiplication des interdits vestimentaires ciblant de fait une seule religion : fragilité constitutionnelle et conventionnelle croissante"
      ],
      plausibility: 7,
      plausibility_note: "Largement faisable à droit quasi constant (loi 2021 + jurisprudence) ; les limites sont probatoires (Conseil d'État) et d'exécution.",
      cost_estimate: "Coût budgétaire marginal ; enjeu de moyens pour le renseignement territorial (non chiffré)."
    },
    {
      title: "« Travailler plus » : assouplissement des 35 heures, heures supplémentaires défiscalisées, débat sur un jour férié",
      domain: "économie",
      detail: "Négociation du temps de travail à l'entreprise (référendum d'entreprise), défiscalisation élargie des heures supplémentaires, allongement de la durée effective du travail sur l'année et la vie (report de l'âge de la retraite assumé, vers 65 ans).",
      pros: [
        "Le volume d'heures travaillées par habitant en France est parmi les plus bas de l'OCDE : le diagnostic « quantité de travail » est économétriquement solide (Rexecode, France Stratégie)",
        "La négociation d'entreprise sur le temps de travail existe déjà (ordonnances 2017) : extension incrémentale crédible",
        "Assumer 65 ans est cohérent avec les projections COR — plus honnête que l'abrogation RN"
      ],
      cons: [
        "Politiquement suicidaire après 2023 : proposer d'aller AU-DELÀ de 64 ans quand 70% des Français veulent revenir dessus",
        "La défiscalisation des heures sup coûte ~2-3 Md€/an pour un effet emploi ambigu (substitution aux embauches)",
        "Le problème français est autant le taux d'emploi des seniors et des jeunes que la durée hebdomadaire : les 35h sont un totem des deux côtés",
        "Contradiction non résolue avec la promesse de hausse du net : travailler plus sans payer plus a déjà échoué politiquement"
      ],
      plausibility: 5,
      plausibility_note: "Techniquement simple (lois travail successives), politiquement explosif. Le report à 65 ans exigerait une majorité introuvable après le traumatisme de 2023.",
      cost_estimate: "Heures sup défiscalisées : 2-3 Md€/an de moindres recettes (chiffrages LFSS) ; gains de croissance espérés non garantis."
    },
    {
      title: "Fiscalité : baisse des impôts de production et des droits de succession, statu quo assumé sur l'ISF",
      domain: "économie",
      detail: "Poursuite de la baisse des impôts de production, relèvement des abattements successions (transmission des PME et patrimoine familial), refus du rétablissement de l'ISF et de la taxe Zucman, TVA et IR stables.",
      pros: [
        "Cohérent avec le consensus économique sur les impôts de production (voir fiche Reconquête — même analyse)",
        "La transmission est le point noir fiscal français documenté (CAE 2021) pour les entreprises familiales",
        "Refuser les impôts symboliques à faible rendement (ISF : ~4-5 Md€ pour des effets d'exil documentés quoique débattus) est défendable en termes d'attractivité"
      ],
      cons: [
        "Baisser succession + production tout en promettant -100 Md€ de dépenses ET la réduction du déficit : l'équation n'est présentée nulle part de façon consolidée",
        "Les baisses profitent d'abord aux patrimoines élevés dans un contexte où le consentement à l'impôt des classes moyennes est déjà fissuré",
        "Aucune contrepartie anti-optimisation sérieuse (pactes Dutreil dévoyés documentés par le CPO)"
      ],
      plausibility: 6,
      plausibility_note: "Faisable par loi de finances avec majorité ; la contrainte est le déficit sous procédure européenne — Bruxelles et les marchés jugeront la crédibilité de la compensation.",
      cost_estimate: "Successions : 2-4 Md€/an selon calibrage ; production : 5-10 Md€ ; total non consolidé par le candidat."
    },
    {
      title: "Nucléaire massif et « écologie de progrès » anti-punitive",
      domain: "écologie",
      detail: "Accélération des EPR2 (au-delà des 6 engagés), relance de la recherche (SMR, fermeture du cycle), moratoire de fait sur l'éolien terrestre, détricotage des ZFE et normes « punitives », refus de la décroissance.",
      pros: [
        "Le consensus scientifique (GIEC, RTE) intègre le nucléaire dans tous les scénarios de décarbonation profonde : la position est climato-compatible sur ce volet",
        "Les ZFE posaient un vrai problème d'équité sociale (exclusion des ménages modestes motorisés) — leur suppression par le Parlement en 2025 a été transpartisane",
        "La filière nucléaire française est un avantage comparatif objectif (électricité parmi les moins carbonées d'Europe)"
      ],
      cons: [
        "Les EPR2 ne produiront pas avant 2038-2040 : d'ici là, sans renouvelables, l'équation électrique ne boucle pas — RTE est formel, tous scénarios exigent AUSSI de l'éolien/solaire",
        "Aucun objectif chiffré de réduction d'émissions dans le programme : « l'écologie de progrès » fonctionne comme un cache-absence",
        "Le moratoire éolien terrestre renchérirait le système électrique (l'éolien terrestre est la production nouvelle la moins chère)",
        "Silence sur l'adaptation (eau, agriculture, assurabilité) qui frappe d'abord l'électorat rural de LR"
      ],
      plausibility: 6,
      plausibility_note: "Relance nucléaire déjà engagée (continuité) ; le moratoire éolien créerait un risque juridique (objectifs européens ENR) et physique (sécurité d'approvisionnement 2030-2035).",
      cost_estimate: "6 EPR2 : ~67-80 Md€ (chiffrage EDF révisé 2025, financement public partiel) ; extension au-delà non chiffrée."
    }
  ],

  fallacies: [
    {
      claim: "« L'immigration provoque l'explosion de la délinquance : regardez la surreprésentation des étrangers dans les prisons et les mis en cause à Paris » (argumentaire récurrent de Retailleau ministre)",
      fallacy_type: "corrélation/causalité (variables confondantes omises)",
      why_fallacious: "Les chiffres bruts de surreprésentation (réels : ~24% de détenus étrangers pour ~8% de la population) sont présentés comme preuve causale sans contrôler âge, sexe, précarité, urbanité, sans-domicile, ni le biais de sélection pénale (les étrangers sont plus souvent en détention provisoire faute de garanties de représentation). Le passage du brut au causal est exactement ce que la statistique interdit.",
      correction: "Les études contrôlées (CEPII, littérature internationale) concluent à un effet faible ou nul de l'immigration en général sur la criminalité, avec des débats réels sur des segments spécifiques (jeunes hommes en situation irrégulière sans ressources). L'énoncé rigoureux serait : « il existe une surdélinquance concentrée sur certains profils et territoires, largement explicable par la structure sociodémographique » — moins vendeur, plus vrai.",
      severity: "high"
    },
    {
      claim: "« L'État de droit n'est ni intangible ni sacré » (Retailleau, 2024)",
      fallacy_type: "équivoque conceptuelle",
      why_fallacious: "Joue sur deux sens : « les lois peuvent changer » (trivialement vrai — on peut réviser la Constitution et les traités par leurs procédures) et « le pouvoir peut s'affranchir des règles qui le contraignent » (négation de l'État de droit lui-même). La formule tire sa force rhétorique de la confusion entretenue entre les deux.",
      correction: "Distinguer : modifier le droit par le droit = programme légitime de droite souverainiste ; présenter les contraintes juridictionnelles comme optionnelles = pente illibérale. Un ministre de l'Intérieur qui brouille cette ligne affaiblit exactement l'autorité de l'État qu'il invoque.",
      severity: "high"
    },
    {
      claim: "« 100 milliards d'économies » sans liste de coupes",
      fallacy_type: "chiffrage magique",
      why_fallacious: "Annonce un total spectaculaire dont aucune décomposition opposable n'est publiée, alors que les postes épargnés (retraites, santé, régalien en hausse, défense en hausse) représentent l'essentiel de la dépense. La somme des exclusions rend l'objectif arithmétiquement inatteignable — le chiffre fonctionne comme signal de sérieux, pas comme plan.",
      correction: "Un plan crédible nommerait les perdants : gel des pensions ? déremboursements ? suppression de la moitié des allègements ? Les précédents réels (RGPP : ~7 Md€) et le gisement « agences » documenté (~2-3 Md€/an, Sénat 2025) donnent l'ordre de grandeur honnête : 30-50 Md€ sur 5 ans en forçant.",
      severity: "high"
    },
    {
      claim: "« Le référendum permettra de tout débloquer sur l'immigration »",
      fallacy_type: "solution miracle / escamotage de la chaîne causale",
      why_fallacious: "Présente l'obstacle comme étant l'absence de consultation populaire, alors que les blocages sont en AMONT du référendum (réviser la Constitution pour l'autoriser exige les majorités qu'il n'a pas) et en AVAL (le droit UE et la CEDH survivent à un référendum national). L'outil est réel, mais présenté comme levant des verrous qu'il ne peut pas atteindre.",
      correction: "Les Surligneurs/Public Sénat : la chaîne complète exige révision constitutionnelle (art. 89) + renégociation européenne + gestion du contentieux CEDH. Dire « référendum » sans dire cela, c'est vendre la clé sans dire que la serrure est ailleurs.",
      severity: "medium"
    },
    {
      claim: "« Assistanat : il y a ceux qui se lèvent tôt et ceux qui vivent des aides » (cadrage général du discours social)",
      fallacy_type: "fausse dichotomie + généralisation",
      why_fallacious: "Découpe la société en deux catégories étanches, alors que la majorité des allocataires du RSA sont d'anciens travailleurs, que ~20% des allocataires travaillent (travailleurs pauvres), et que les plus gros « transferts » vont aux retraités et aux entreprises (allègements ~80 Md€), pas aux minima sociaux (~30 Md€). Le cadrage moralise un problème de structure.",
      correction: "Le non-recours au RSA (~34%, DREES) coexiste avec la fraude (~2-3%) : le système est à la fois trop dur pour certains et mal contrôlé pour d'autres. Une réforme rigoureuse traite les deux ; le discours n'en traite qu'un.",
      severity: "medium"
    },
    {
      claim: "« Je refuse le choix entre la démagogie du RN et l'idéologie de LFI, entre Bardella et une saison 3 du macronisme » (positionnement de campagne)",
      fallacy_type: "faux dilemme inversé / pétition de positionnement",
      why_fallacious: "Construit rhétoriquement un espace central-droit dont l'existence électorale est précisément ce qui est en question (LR <10% dans tous les sondages). Récuser les alternatives ne crée pas une demande pour la sienne — c'est un argument de nécessité qui présuppose sa conclusion.",
      correction: "Le test empirique existe : les sondages de juin 2026 (Ifop, Ipsos, Odoxa) donnent Retailleau entre 8 et 11%, loin derrière Bardella et derrière/à égalité avec Philippe. L'espace revendiqué est actuellement occupé ou inexistant — c'est le cœur de l'argument Wauquiez/Lisnard, qu'on peut contester, mais avec des chiffres.",
      severity: "low"
    }
  ],

  data_issues: [
    {
      claim: "Le lien direct immigration→délinquance revendiqué avec les chiffres bruts de la préfecture de police et de l'administration pénitentiaire",
      problem: "sorti de contexte",
      reality: "Surreprésentation brute réelle (étrangers ~24% des détenus, ~8% de la population) mais fortement réduite après contrôle des variables sociodémographiques et du biais de détention provisoire ; les études (CEPII, méta-analyses internationales) ne valident pas de causalité générale. Le débat académique existe (cf. contre-analyses citées par Atlantico/Stefanini) mais aucune étude ne soutient la version causale simple du discours ministériel.",
      source: "CEPII ; INSEE/SSMSI ; débat contradictoire documenté (Complément d'enquête 2025 ; Atlantico 2025) ; Observatoire des inégalités."
    },
    {
      claim: "« Moins de 50 000 entrées par an » présenté comme un simple retour à la normale historique",
      problem: "exagéré / trompeur",
      reality: "La France délivre ~320 000-340 000 premiers titres/an (2023-2024, DGEF), dont ~1/3 étudiants et ~15% économiques. Même dans les années 1990 « fermées », les flux dépassaient 100 000. Aucune démocratie ouverte comparable n'atteint un ratio de 50 000 pour 68 M d'habitants ; le Danemark, référence des droites, reste proportionnellement au-dessus.",
      source: "Ministère de l'Intérieur (DGEF, chiffres annuels des titres) ; Eurostat (first permits) ; INSEE."
    },
    {
      claim: "« L'AME est un appel d'air migratoire »",
      problem: "contredit par le rapport commandé par son propre camp",
      reality: "Rapport Évin-Stefanini (décembre 2023) : pas d'évidence d'un effet d'attraction significatif de l'AME ; recommande des ajustements, pas la suppression. Patrick Stefanini est un haut fonctionnaire de droite spécialiste de l'immigration — difficile de récuser la source comme gauchiste.",
      source: "Rapport Évin-Stefanini 2023 ; Les Décodeurs ; AFP Factuel."
    },
    {
      claim: "« Sous mon ministère, fermeté rétablie : les résultats sont là » (bilan Place Beauvau 2024-2026)",
      problem: "exagéré",
      reality: "Les indicateurs publiés (SSMSI, DGEF) ne montrent pas d'inflexion majeure : titres délivrés stables ou en hausse, exécutions d'OQTF marginalement améliorées, homicides et coups et blessures sur tendances antérieures. Les réalisations réelles sont législatives (loi narcotrafic 2025, circulaires de fermeté) plus que statistiques — écart classique entre production normative et résultats mesurables.",
      source: "SSMSI (Insécurité et délinquance, bilans annuels) ; DGEF ; fact-checks Libération/CheckNews et Le Média sur les déclarations Retailleau."
    },
    {
      claim: "Les « 1 500 agences » et doublons comme gisement budgétaire majeur",
      problem: "exagéré",
      reality: "Rapport sénatorial 2025 (commission d'enquête sur les agences) : ~430-450 opérateurs et organismes principaux, ~77-80 Md€ de crédits, mais l'essentiel finance des missions de service public (universités, Pôle emploi/France Travail, ARS) ; gisement d'économies réaliste évalué en unités de Md€, pas en dizaines.",
      source: "Sénat, commission d'enquête sur les agences de l'État (2025) ; Cour des comptes ; IGF."
    }
  ],

  problematic_arguments: [
    {
      argument: "Reprendre la grammaire du RN (submersion, « Orange mécanique », ensauvagement) en promettant que seul l'original modéré peut l'appliquer proprement",
      why_problematic: "Valide le diagnostic de l'extrême droite tout en demandant aux électeurs de préférer la copie contenue : historiquement, quand la droite classique importe le cadre du RN, elle légitime le RN plus qu'elle ne le siphonne (précédents 2012, 2021-2022 documentés par les flux électoraux).",
      what_it_hides: "L'absence de théorie du succès : pourquoi l'électeur convaincu par le diagnostic RN voterait-il pour celui qui promet moins ? Le pari stratégique n'est jamais explicité parce qu'il est fragile."
    },
    {
      argument: "« Rupture » revendiquée par un sénateur depuis 2004, ministre de l'Intérieur de deux gouvernements du système qu'il dénonce",
      why_problematic: "La posture d'outsider est en tension avec 20 ans de responsabilités (Sénat, région, ministère). Ses passages au pouvoir n'ont pas produit la rupture annoncée — au contraire, il a servi dans des gouvernements de coalition centrale qu'il qualifie aujourd'hui d'échec.",
      what_it_hides: "Le vrai bilan opposable : Place Beauvau 2024-2026 fournit le test grandeur nature de l'écart annonce/résultat (voir data_issues) — précisément ce qu'un électeur rationnel devrait examiner avant de créditer la « rupture » 2027."
    },
    {
      argument: "Le déni de la fragmentation : se dire « candidat naturel de la droite » quand Lisnard est parti, Wauquiez soutient Philippe, Bertrand se maintient et Copé menace de schisme",
      why_problematic: "La légitimité interne (73,8% des adhérents) est présentée comme légitimité externe, alors que 45 000 votants ne pèsent rien face à un espace électoral <10%. L'argument d'autorité partisane masque la question stratégique posée frontalement par Wauquiez : le maintien de LR sert-il à autre chose qu'à éliminer la droite du second tour ?",
      what_it_hides: "L'alternative non discutée : ralliement à Philippe (option Wauquiez), primaire élargie (option Bertrand historique), ou candidature de témoignage assumée. Le flou permet de ne choisir aucun coût."
    },
    {
      argument: "Un conservatisme culturel intense (islam, wokisme, autorité) pour un électorat LR âgé, couplé à un libéralisme économique (65 ans, dégressivité, coupes) qui frappe ce même électorat",
      why_problematic: "La synthèse « conservateur ET libéral » a électoralement échoué avec Fillon (2017, hors affaires : la partie sociale du programme effrayait déjà) : les retraités LR veulent l'ordre ET leurs pensions ; les jeunes libéraux votent déjà Philippe ou Lisnard.",
      what_it_hides: "L'arbitrage jamais rendu entre les deux jambes du programme : en cas de victoire, couper les dépenses sociales de son propre électorat ou trahir la promesse budgétaire."
    }
  ],

  strong_ideas: [
    {
      idea: "Un vote démocratique explicite sur la politique migratoire (référendum ou loi de programmation solennelle)",
      why_strong: "Le constat « 50 ans de transformations sans consultation » est factuel et le déficit de consentement nourrit la radicalisation du débat. Les votations suisses montrent qu'un encadrement démocratique direct peut coexister avec l'État de droit et produit de l'apaisement (les perdants acceptent mieux un vote qu'un arrêt de cour).",
      adoptable_by: "Centre (Philippe a évoqué un référendum), gauche républicaine (version « loi de programmation migratoire quinquennale débattue et votée ») ; la version propre passe par l'art. 89, pas par le forçage de l'art. 11."
    },
    {
      idea: "Conditionnalité active des minima sociaux AVEC accompagnement renforcé",
      why_strong: "Le couple droits-devoirs adossé à un accompagnement réel est la politique sociale la mieux documentée de l'OCDE (activation danoise) : ni l'allocation passive ni la sanction sèche, mais l'investissement dans le retour à l'emploi. La loi de 2023 en pose la base ; l'assumer et la financer est une vraie politique.",
      adoptable_by: "Tous les blocs de gouvernement — la gauche sociale-démocrate scandinave en est l'inventrice ; le point de bascule honnête est le financement de l'accompagnement (+1-2 Md€), pas le niveau des sanctions."
    },
    {
      idea: "La lutte contre le narcotrafic comme priorité régalienne structurée (acquis législatif 2025)",
      why_strong: "La loi narcotrafic portée avec Darmanin (parquet spécialisé, régime carcéral des « narcos », moyens d'enquête) répond à une menace documentée (points de deal, homicides liés, corruption portuaire) et a été votée très au-delà de la droite. C'est le volet du bilan Retailleau le plus solide et le plus consensuel.",
      adoptable_by: "Déjà transpartisan ; l'étape suivante (moyens judiciaires, lutte anti-blanchiment, coopération européenne) peut être portée par n'importe quelle majorité."
    },
    {
      idea: "Vérité budgétaire : nommer la dépense publique comme LA contrainte de tout programme 2027",
      why_strong: "Même si son propre chiffrage est évasif, Retailleau est l'un des rares à placer le déficit (~5,5% PIB) et la dette (>113%) au centre du discours, quand RN et LFI proposent des dizaines de milliards non financés. La procédure de déficit excessif et la charge d'intérêts >60 Md€/an rendent ce cadrage simplement exact.",
      adoptable_by: "Centre et centre-gauche : la social-démocratie européenne (Danemark, Suède) prouve qu'assainissement et modèle social sont compatibles — le cadrage est récupérable sans le contenu des coupes."
    }
  ],

  electorate: "Électorat LR résiduel : âgé (surreprésentation massive des 65+), propriétaire, catholique pratiquant ou culturel, CSP+ retraitées, ancré dans l'Ouest (Vendée, Pays de la Loire), le rural aisé et les beaux quartiers. Retailleau y ajoute un segment de droite identitaire déçue du macronisme mais réfractaire au RN pour des raisons de respectabilité et de compétence. Sa faiblesse structurelle : les moins de 50 ans et les actifs, partis vers le RN (populaires) ou Philippe/Lisnard (diplômés). Réservoir de second tour important, base de premier tour étroite (~8-11%).",

  key_quotes: [
    {
      text: "Je ne crois pas que les Français choisiront la saison 3 du macronisme avec Édouard Philippe ou Gabriel Attal. Après dix ans d'En marche, plus rien ne marche. Et je ne veux pas du choix entre la démagogie du RN et l'idéologie de LFI.",
      context: "Réponse au ralliement de Wauquiez à Édouard Philippe",
      source: "Presse (Orange actu/AFP), juin 2026"
    },
    {
      text: "Je ne souhaite pas assez de malheur à Édouard Philippe pour vouloir que Laurent Wauquiez le soutienne. Il ne mérite pas ça.",
      context: "Pique à Wauquiez après son appel au retrait de la candidature Retailleau",
      source: "Presse, juin 2026"
    },
    {
      text: "Le candidat LR est en dessous de 10%. Le risque, si chacun maintient sa candidature, c'est que notre seul apport aura été d'éliminer un candidat de droite et de permettre à Jean-Luc Mélenchon de se qualifier au second tour.",
      context: "Laurent Wauquiez justifiant son appel au retrait de Retailleau — l'argument stratégique central contre cette candidature",
      source: "RCF / presse, juin 2026"
    },
    {
      text: "Les prochains mois seront stratégiques.",
      context: "Retailleau après sa désignation par 73,8% des adhérents LR, se posant en « candidat naturel » de la droite",
      source: "franceinfo, 19-20 avril 2026"
    },
    {
      text: "L'immigration a bouleversé la société depuis cinquante ans sans que les Français aient jamais eu à se prononcer.",
      context: "Justification de son projet de référendum sur l'immigration (article 11 élargi)",
      source: "Public Sénat, 2025-2026"
    },
    {
      text: "L'État de droit n'est ni intangible, ni sacré.",
      context: "Ministre de l'Intérieur, à propos des contraintes juridiques sur la politique migratoire — la phrase la plus controversée de son mandat",
      source: "JDD, septembre-octobre 2024 (largement repris et critiqué, y compris par le garde des Sceaux)"
    }
  ],

  sources: [
    "https://www.france24.com/fr/france/20260419-pr%C3%A9sidentielle-2027-bruno-retailleau-d%C3%A9sign%C3%A9-candidat-des-r%C3%A9publicains-une-primaire-%C3%A9cart%C3%A9e",
    "https://www.publicsenat.fr/actualites/politique/presidentielle-les-adherents-lr-designent-bruno-retailleau-comme-candidat",
    "https://www.rcf.fr/articles/actualite/presidentielle-2027-laurent-wauquiez-appelle-bruno-retailleau-a-retirer-sa-0",
    "https://www.publicsenat.fr/actualites/politique/referendum-sur-limmigration-primaute-du-droit-national-le-projet-de-bruno-retailleau-est-il-faisable",
    "https://www.elyseescope.com/candidat/bruno-retailleau/immigration",
    "https://lcp.fr/actualites/etat-de-droit-immigration-securite-islam-politique-bruno-retailleau-offensif-pour-sa",
    "https://lcp.fr/actualites/je-suis-candidat-david-lisnard-quitte-lr-et-relance-le-debat-sur-une-primaire-a-droite",
    "Rapport Évin-Stefanini sur l'AME (2023) ; Sénat, commission d'enquête sur les agences de l'État (2025)",
    "SSMSI, bilans annuels Insécurité et délinquance ; DGEF, chiffres des titres de séjour",
    "Sondages Ifop (25/06/2026), Ipsos-bva (06/2026), Odoxa (06/2026) — intentions de vote présidentielle 2027"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["lr-2027"] = CONTENT_ELECTIONS_lr_2027;
