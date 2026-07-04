const CONTENT_ELECTIONS_villepin_2027 = {
  id: "villepin-2027",
  name: "Dominique de Villepin",
  party: "La France humaniste",
  bloc: "centre",
  spectrum: 0.5,
  status: "probable",
  status_note: "Non officiellement déclaré en juillet 2026, mais tout y conduit : lancement de son parti « La France humaniste » le 23 juin 2025 (président d'honneur ; direction opérationnelle confiée à Benoît Jimenez, UDI), structuration de sections locales, multiplication des déplacements, contours d'un programme économique présentés au printemps 2026. Il affirme que les 500 parrainages « ne seront pas un obstacle » (leçon retenue de son échec de 2012). Gaulliste social inclassable : très haut en popularité (3e personnalité en opinions favorables, Cluster17 avril 2026, 29%), mais faible en intentions de vote (~2-5% selon les hypothèses).",
  color: "#64748b",

  thesis: "La crise française est d'abord une crise de la fonction présidentielle et de la place de la France dans le monde : un président-arbitre restauré au-dessus des partis, une diplomatie d'indépendance gaullienne (hors du giron américain, exigeante avec Israël comme avec la Russie), et un réarmement de l'État stratège (fonds souverain, réindustrialisation, justice fiscale) peuvent réconcilier ordre républicain et justice sociale — contre la double impasse du bloc libéral gestionnaire et de l'extrême droite.",
  counter_thesis: "Steelman adverse : Villepin est une posture sans machine et sans mandat — jamais élu à quoi que ce soit en quarante ans de vie publique, candidat avorté en 2012 faute de 500 signatures, il convertit un capital rhétorique (le discours de l'ONU en 2003) en offre politique sans jamais affronter le réel des urnes ni celui des comptes : son programme additionne l'abrogation de la réforme des retraites (~15 Md€/an), un fonds souverain de 100 Md€ et la « crédibilité budgétaire » sans chiffrage cohérent. Sa popularité est celle d'un commentateur : elle s'évapore dès qu'il redevient un choix. Et ses années de conseil rémunéré auprès du Qatar, de l'Arabie saoudite et de la Chine rendent sa « voix libre de la France » structurellement suspecte de conflits d'intérêts.",

  program_pillars: [
    "Restaurer la fonction présidentielle : président-arbitre, fin de l'hyperprésidence",
    "Indépendance stratégique : pilier de défense européen, distance avec l'OTAN, diplomatie tous azimuts",
    "État stratège : fonds souverain 100 Md€, réindustrialisation, décarbonation",
    "Justice fiscale : contribution des plus riches, grandes successions, recul des exonérations",
    "Réparation démocratique : suppression du 49.3, RIC, Parlement renforcé",
    "Justice sociale : abrogation des 64 ans, revenu de transition, logement social massif"
  ],

  proposals: [
    {
      title: "Abrogation de la réforme des retraites (64 ans) et système par points avec pénibilité",
      domain: "social",
      detail: "Abroger la réforme de 2023, revenir sur les 64 ans, et refonder un système par points intégrant réellement la pénibilité et la visibilité des droits.",
      pros: [
        "Répond à un rejet social massif et persistant (~65-70% d'opposition constante à la réforme, tous instituts)",
        "Le système par points offre une transparence réelle des droits — c'était le projet macroniste de 2019, soutenu alors par une partie des syndicats réformistes",
        "La réintégration de critères de pénibilité corrige un angle mort documenté (espérance de vie en bonne santé des ouvriers inférieure de ~10 ans à celle des cadres, INSEE)"
      ],
      cons: [
        "Coût direct : revenir à 62 ans coûte de l'ordre de 10-15 Md€/an à horizon 2030 (fourchettes COR/études gouvernementales) — non financé dans son discours de « crédibilité budgétaire »",
        "Contradiction frontale avec sa propre loi organique quinquennale de réduction du déficit",
        "Refaire une réforme systémique par points = rouvrir le chantier qui a échoué en 2019-2020, avec les mêmes conflits (régimes spéciaux, transition)"
      ],
      plausibility: 3,
      plausibility_note: "L'abrogation est votable (une loi défait une loi) mais son financement est incompatible avec ses autres engagements budgétaires sans hausses de prélèvements majeures, qu'il n'assume que partiellement (successions, hauts patrimoines : rendements bien inférieurs au besoin).",
      cost_estimate: "Retour à 62 ans : ~10-15 Md€/an en régime de croisière (COR, chiffrages 2023) ; refonte par points : coûts de transition non chiffrés par le mouvement."
    },
    {
      title: "Fonds souverain français de 100 Md€ pour la décarbonation et la réindustrialisation",
      domain: "économie",
      detail: "Création d'un fonds souverain public de 100 Md€ orientant l'épargne vers la transition énergétique, les filières stratégiques et la réindustrialisation, assumé « même avec un déficit aggravé » à court terme.",
      pros: [
        "L'outil existe ailleurs et fonctionne (Norvège, Singapour, fonds stratégiques italien et français Bpifrance) — la France a l'épargne (~6 000 Md€ de patrimoine financier des ménages) mais pas le véhicule d'orientation",
        "Cohérent avec le besoin d'investissement climat documenté (~66 Md€/an supplémentaires, rapport Pisani-Ferry/Mahfouz)",
        "Peut être capitalisé sans dépense sèche (apport d'actifs publics, fléchage de l'épargne réglementée) — ce que le débat public confond souvent"
      ],
      cons: [
        "« 100 Md€ » sans structure de financement précisée : dotation budgétaire (impossible à 5-6% de déficit), épargne fléchée (pas de coût, mais pas non plus de « fonds souverain » au sens propre) ou dette (contradictoire avec sa loi organique)",
        "Risque documenté de capture politique des fonds publics d'investissement (précédents FSI 2008 : bilan mitigé, Cour des comptes)",
        "Doublon potentiel avec Bpifrance, France 2030 et la Caisse des dépôts — l'écosystème public d'investissement est déjà dense et peu lisible"
      ],
      plausibility: 4,
      plausibility_note: "Créer le véhicule est facile ; le doter de 100 Md€ réels ne l'est pas. La version réaliste (regroupement d'actifs existants + fléchage d'épargne) est faisable mais très en-deçà du récit ; la version littérale est incompatible avec l'état budgétaire.",
      cost_estimate: "100 Md€ annoncés (contours présentés printemps 2026, Boursorama) ; part de dotation publique nouvelle non précisée."
    },
    {
      title: "Fiscalité renforcée sur les hauts patrimoines et contribution sur les grandes successions (>2 M€)",
      domain: "économie",
      detail: "Contribution exceptionnelle sur les patrimoines transmis supérieurs à 2 M€, soutien à une imposition plancher des plus fortunés (logique taxe Zucman), progressivité renforcée.",
      pros: [
        "Assis sur un fait robuste : la France est en train de devenir une société d'héritiers (60% du patrimoine est hérité contre 35% dans les années 1970 — CAE, note « Repenser l'héritage » 2021), et les très hauts patrimoines ont un taux effectif d'imposition inférieur à la moyenne (travaux IPP 2023)",
        "Rendement réel possible : les propositions type Zucman sont chiffrées à 15-25 Md€/an selon le périmètre",
        "Cohérence gauche-droite gaullienne : financer la baisse du coût du travail par le capital dormant plutôt que par la dette"
      ],
      cons: [
        "Risques d'attrition et d'exil fiscal réels quoique souvent exagérés (l'expérience ISF documente des effets modestes mais non nuls — France Stratégie 2019)",
        "L'imposition plancher type Zucman pose des problèmes concrets de liquidité (patrimoine professionnel non liquide) et de constitutionnalité (capacité contributive, décision CC 2025 sur les versions dures)",
        "Rendement (15-25 Md€ max) très inférieur à la somme de ses dépenses annoncées (retraites + fonds souverain + embauches hôpital/école)"
      ],
      plausibility: 5,
      plausibility_note: "Votable avec majorité de gauche ou coalition large ; le Conseil constitutionnel encadre (caractère confiscatoire) mais des versions calibrées passent. Le point faible n'est pas la faisabilité, c'est l'écart entre le rendement et les besoins de son propre programme.",
      cost_estimate: "Recette potentielle : 15-25 Md€/an pour un plancher patrimonial large (chiffrages Zucman/IPP en débat) ; contribution successions >2 M€ : quelques Md€/an (les successions >1,8 M€ représentent ~1% des transmissions)."
    },
    {
      title: "Réduction des exonérations de cotisations patronales (~80 Md€/an qualifiés de « piège »)",
      domain: "économie",
      detail: "Revenir sur une partie des allègements généraux de cotisations patronales, qu'il qualifie de piège économique entretenant les bas salaires et la dépendance des entreprises à l'argent public.",
      pros: [
        "Le diagnostic « trappe à bas salaires » est partagé par des économistes de bords opposés : les allègements concentrés au SMIC désincitent les hausses de salaire (rapports Bozio-Wasmer 2024)",
        "Assiette énorme : ~75-80 Md€/an d'allègements (annexes PLFSS) — même une réduction de 10% dégage 7-8 Md€",
        "Cohérent avec sa critique de l'économie sous perfusion publique (aides aux entreprises ~150-200 Md€/an tous dispositifs confondus, estimation IRES/CLERSÉ 2022)"
      ],
      cons: [
        "Le consensus empirique (DARES, OFCE, Bozio-Wasmer) attribue aux allègements bas salaires un effet emploi massif : les supprimer brutalement détruirait des centaines de milliers d'emplois peu qualifiés",
        "Effet immédiat sur le coût du travail au moment où la réindustrialisation qu'il promeut en dépend",
        "Il cite le chiffre global (80 Md€) mais la partie critiquable (allègements au-dessus de 1,6 SMIC, efficacité faible) n'en représente qu'une fraction — la mesure réaliste est bien plus petite que le discours"
      ],
      plausibility: 5,
      plausibility_note: "Techniquement simple (LFSS). Le paramétrage fait tout : recentrer les allègements au-dessus de 1,6 SMIC est défendable et documenté ; toucher aux allègements au niveau du SMIC serait économiquement dangereux et politiquement explosif côté patronat.",
      cost_estimate: "Assiette totale ~75-80 Md€/an (PLFSS) ; un recentrage réaliste (au-dessus de 1,6 SMIC) rapporterait 5-10 Md€/an — chiffrage Bozio-Wasmer 2024."
    },
    {
      title: "Pilier de défense européen autonome, distance avec l'OTAN, Conseil de sécurité européen à 5",
      domain: "international",
      detail: "Construire une défense européenne viable sans dépendance à l'OTAN (position « plutôt contre » l'ancrage atlantiste durable), créer un Conseil de sécurité européen réunissant Allemagne, Espagne, France, Italie, Pologne ; maintien de la dissuasion nucléaire, extension possible de sa couverture aux alliés européens ; réarmement significatif.",
      pros: [
        "La question de la fiabilité de la garantie américaine est devenue mainstream depuis 2024-2025 : le diagnostic gaullien a été rattrapé par les faits",
        "L'extension du parapluie nucléaire français est exactement le débat ouvert par l'Allemagne elle-même depuis 2024",
        "Format à 5 pragmatique : contourne la paralysie à 27 en réunissant ~75% des capacités militaires de l'UE"
      ],
      cons: [
        "Aucun des 4 partenaires pressentis ne veut d'une défense « sans l'OTAN » — la Pologne surtout : le projet suppose de convertir des alliés qui considèrent l'OTAN comme existentielle",
        "Sa ligne Ukraine (privilégier la diplomatie, réticence au renforcement militaire) contredit la crédibilité du pilier européen qu'il propose : on ne bâtit pas une défense commune en refusant de l'employer face à la seule menace qui la justifie",
        "Ambiguïté entretenue entre « sortir du commandement intégré » (faisable, précédent 1966) et « sans l'OTAN » (rupture stratégique majeure jamais clarifiée)"
      ],
      plausibility: 3,
      plausibility_note: "La sortie du commandement intégré est une décision souveraine (précédent de Gaulle 1966). Le pilier européen « sans l'OTAN » dépend de partenaires qui n'en veulent pas ; le Conseil à 5 est diplomatiquement lançable mais sans pouvoir réel sans traité.",
      cost_estimate: "Réarmement évoqué sans cible chiffrée explicite ; la convergence européenne vers 3-3,5% du PIB représenterait +30-45 Md€/an pour la France."
    },
    {
      title: "Ligne Proche-Orient : application du mandat d'arrêt CPI contre Netanyahu, reconnaissance pleine de la Palestine",
      domain: "international",
      detail: "La France doit appliquer le mandat d'arrêt de la CPI si Netanyahu se rend sur son territoire ; Israël « doit rendre des comptes devant la société internationale » ; soutien à une solution à deux États avec reconnaissance effective.",
      pros: [
        "Position juridiquement cohérente : la France est partie au Statut de Rome, qui ne prévoit pas d'exception pour les dirigeants d'États non parties en exercice (la CIJ et la doctrine sont partagées, mais l'obligation de coopération existe)",
        "Cohérence historique de la position française (politique arabe gaullienne, 2003) — crédibilité réelle dans le Sud global",
        "A dit tôt et clairement ce qu'une grande partie des chancelleries a admis tardivement sur la conduite de la guerre à Gaza"
      ],
      cons: [
        "Coût diplomatique réel avec Israël et les États-Unis, jamais mis en balance explicitement",
        "Sa surexposition sur ce thème unique (des dizaines de plateaux 2023-2026) fait de la politique étrangère un fonds de commerce médiatique plus qu'un programme de gouvernement",
        "La séquence « Quotidien » de novembre 2023 (propos sur la « domination financière » dans les médias américains) a durablement fragilisé sa capacité à porter cette ligne sans soupçon — même si l'accusation d'antisémitisme est contestée et contestable (voir data_issues)"
      ],
      plausibility: 7,
      plausibility_note: "C'est une orientation diplomatique, entièrement dans la main d'un président (domaine réservé). Le prix géopolitique est le seul obstacle — il est réel mais la décision est exécutable.",
      cost_estimate: "Coût budgétaire nul ; coût diplomatique et commercial non chiffrable."
    },
    {
      title: "Suppression du 49.3, référendum d'initiative citoyenne, Parlement renforcé",
      domain: "institutions",
      detail: "Supprimer l'article 49.3, instaurer un RIC pour « débloquer le pays », rééquilibrer les pouvoirs vers le Parlement, restaurer un président-arbitre qui ne gouverne pas au jour le jour.",
      pros: [
        "Répond à la pathologie documentée du quinquennat Macron : 23 utilisations du 49.3 par Élisabeth Borne, record depuis Rocard, et crise de légitimité afférente",
        "Le président-arbitre est la lecture originelle de la Constitution de 1958 (art. 5) — la proposition a une cohérence doctrinale forte",
        "Le RIC encadré existe ailleurs sans chaos (Suisse, Italie) et répond à une demande mesurée massive depuis 2018 (~70% de soutien, ELABE)"
      ],
      cons: [
        "Ironie historique lourde : Villepin est l'homme du 49.3 sur le CPE (2006), imposé puis retiré sous la pression de la rue — sa conversion n'est jamais expliquée",
        "Supprimer le 49.3 sans réforme du mode de scrutin ni du bicamérisme = risque d'Assemblée ingouvernable type IVe République (l'objection de tous les constitutionnalistes, y compris favorables à une révision)",
        "Toute cette architecture exige une révision constitutionnelle (art. 89 : accord des deux chambres + référendum ou Congrès) — improbable sans majorité massive"
      ],
      plausibility: 3,
      plausibility_note: "Verrou art. 89 : le Sénat, dominé par la droite, n'a aucun intérêt à voter la suppression du 49.3 ni le RIC. Faisable seulement dans un scénario de refondation avec rapport de force écrasant.",
      cost_estimate: "Coût budgétaire quasi nul (organisation des référendums : ~200-250 M€ par scrutin)."
    },
    {
      title: "Suppression de Parcoursup",
      domain: "éducation",
      detail: "Supprimer Parcoursup au motif qu'« un algorithme ne choisira pas la vie de nos enfants », au profit d'un système d'orientation ré-humanisé.",
      pros: [
        "Capitalise sur un rejet réel : Parcoursup est l'un des services publics les plus mal perçus par les familles (baromètres Défenseur des droits, satisfaction très faible)",
        "L'opacité des algorithmes locaux de classement est un problème documenté (Cour des comptes 2020, Défenseur des droits)"
      ],
      cons: [
        "Diagnostic faux au sens strict : Parcoursup n'affecte personne par algorithme central — ce sont les formations qui classent ; supprimer la plateforme ne supprime pas la rareté des places, qui est le vrai problème",
        "Le précédent APB (tirage au sort en licence saturée) rappelle ce qui existait avant : pire",
        "Aucune alternative opérationnelle décrite : « ré-humaniser » n'est pas un système d'affectation pour 950 000 candidats/an"
      ],
      plausibility: 4,
      plausibility_note: "Supprimer ou renommer la plateforme est faisable ; résoudre le problème sous-jacent (adéquation places/demandes, transparence des classements) ne passe pas par la suppression. Mesure probablement symbolique en exécution.",
      cost_estimate: "Refonte du système d'affectation : dizaines de M€ ; le coût réel serait la création de places dans les filières en tension (non chiffrée)."
    },
    {
      title: "Revenu de transition : fusion des allocations, refus de la conditionnalité RSA",
      domain: "social",
      detail: "Fusionner les allocations en un revenu de transition simplifié ; opposition aux 15-20h d'activité obligatoires conditionnant le RSA.",
      pros: [
        "La fusion des minima est une idée robuste et transpartisane (rapports Sirugue 2016, CAE) : lisibilité, réduction du non-recours (~34% pour le RSA, DREES 2022)",
        "Sa critique de la conditionnalité s'appuie sur des évaluations mitigées des dispositifs coercitifs (les expérimentations France Travail montrent surtout un effet d'accompagnement, pas de sanction)"
      ],
      cons: [
        "La fusion mécanique fait des perdants parmi les plus pauvres (les simulations DREES/IPP le montrent systématiquement) sauf à y mettre plusieurs Md€ supplémentaires",
        "Position à contre-courant de l'opinion (la conditionnalité du RSA est majoritairement soutenue) — courageux mais coûteux électoralement, et non articulé avec son discours d'« ordre républicain »",
        "Chiffrage absent"
      ],
      plausibility: 5,
      plausibility_note: "Législativement faisable ; la solidarité à la source est déjà en chantier administratif. Le paramétrage (qui perd, qui gagne) est le vrai sujet, jamais précisé.",
      cost_estimate: "Une fusion « sans perdants » coûterait 3-8 Md€/an selon le périmètre (ordres de grandeur des simulations IPP sur l'allocation sociale unique)."
    },
    {
      title: "Limitation de la concentration des médias",
      domain: "institutions",
      detail: "Renforcer les règles anti-concentration de la propriété des médias, au motif que « les médias français sont tenus par une dizaine de milliardaires ».",
      pros: [
        "Le fait de base est solide : ~90% des quotidiens nationaux et une part majeure de l'audiovisuel privé appartiennent à une dizaine de groupes/fortunes (cartographies Le Monde diplomatique/Acrimed, rapports sénatoriaux 2022)",
        "Le dispositif anti-concentration de 1986 est unanimement jugé obsolète (commission d'enquête sénatoriale 2022, États généraux de l'information 2024)",
        "Enjeu démocratique direct dans une campagne où l'écosystème Bolloré pèse explicitement"
      ],
      cons: [
        "Difficile à écrire juridiquement sans toucher à la liberté d'entreprendre (censures constitutionnelles possibles) ni créer un contrôle politique des rédactions",
        "Ne dit rien du modèle économique : la presse est concentrée d'abord parce qu'elle perd de l'argent — limiter la propriété sans traiter le financement peut accélérer les disparitions",
        "Angle mort : il est lui-même un produit du système médiatique qu'il dénonce (omniprésence plateaux 2023-2026, dont les chaînes des mêmes milliardaires)"
      ],
      plausibility: 5,
      plausibility_note: "Une loi de modernisation anti-concentration est faisable (les États généraux de l'information l'ont préparée) mais son ambition sera rabotée par le Conseil constitutionnel et le lobbying — précédents nombreux.",
      cost_estimate: "Coût budgétaire direct quasi nul ; effets économiques sectoriels non chiffrés."
    },
    {
      title: "Mix énergétique : nucléaire pilier + renouvelables massifs, taxe carbone rétablie, ZAN maintenu",
      domain: "écologie",
      detail: "Nucléaire assumé comme pilier avec renouvelables en complément massif (refus du 100% ENR), rétablissement d'un signal prix carbone national/européen, sortie progressive des fossiles, maintien du Zéro artificialisation nette, reconnaissance de l'écocide.",
      pros: [
        "Mix nucléaire+ENR aligné sur les scénarios RTE « Futurs énergétiques 2050 » les moins coûteux",
        "Le signal prix carbone est l'instrument le plus consensuel chez les économistes (rapport Quinet, prix tutélaire) — le dire après les Gilets jaunes est courageux",
        "Maintenir le ZAN contre la fronde des élus locaux est une position de cohérence écologique rare au centre"
      ],
      cons: [
        "La taxe carbone est LE précédent explosif français (2018) : il ne présente pas le mécanisme redistributif qui la rendrait socialement acceptable — or c'est toute la difficulté",
        "Cumul de contraintes (ZAN + écocide + sortie fossiles) sans chiffrage des compensations pour les territoires et secteurs perdants",
        "Positionnement énergétique proche de celui de tous les candidats centraux : différenciation faible"
      ],
      plausibility: 6,
      plausibility_note: "Trajectoire énergétique dans la continuité des lois existantes (accélération nucléaire 2023, PPE) ; la taxe carbone rétablie est le point politiquement radioactif — faisable en droit, périlleux en fait.",
      cost_estimate: "Signal carbone : recette potentielle de 8-10 Md€/an au niveau 2018 gelé ; redistribution nécessaire non chiffrée par le mouvement."
    },
    {
      title: "Pause Schengen et contrôles renforcés aux frontières, sans durcissement du droit des étrangers",
      domain: "immigration",
      detail: "Suspension temporaire de la libre circulation Schengen avec contrôles renforcés, MAIS refus de la réduction de l'immigration légale, du démantèlement du droit du sol, de la suppression de l'AME, et refus de l'amalgame immigration-délinquance.",
      pros: [
        "Combinaison originale : fermeté sur le contrôle des flux SANS surenchère sur les droits — cohérente avec l'opinion médiane (contrôle oui, cruauté non)",
        "Refus de la suppression de l'AME appuyé sur le consensus sanitaire (rapport Évin-Stefanini 2023 : la suppression coûterait plus cher qu'elle ne rapporte)",
        "Le rétablissement temporaire des contrôles est prévu par le code frontières Schengen (art. 25 s.) : juridiquement carré"
      ],
      cons: [
        "La « pause Schengen » durable est illégale au-delà des durées prévues (la CJUE l'a rappelé en 2022 contre l'Autriche) : la mesure est soit temporaire soit contentieuse",
        "Positionnement électoralement illisible : trop dur pour la gauche, trop doux pour la droite — le « en même temps » migratoire n'a jamais trouvé de majorité",
        "Contrôles fixes aux frontières intérieures : coût économique réel pour le fret et les transfrontaliers (études Prognos post-2015 : plusieurs Md€/an à l'échelle UE)"
      ],
      plausibility: 5,
      plausibility_note: "Les contrôles temporaires sont déjà pratiqués par la France depuis 2015 (reconduits en continu) — la « pause » est donc surtout la poursuite verbalisée de l'existant. Le reste (statu quo sur les droits) est faisable par simple non-action.",
      cost_estimate: "Contrôles renforcés : centaines de M€/an (effectifs PAF) ; coûts économiques indirects non chiffrés."
    }
  ],

  fallacies: [
    {
      claim: "La stature diplomatique (le discours de l'ONU en 2003, l'expérience du Quai d'Orsay) invoquée comme qualification centrale pour la présidence.",
      fallacy_type: "appel à l'autorité / halo rétrospectif",
      why_fallacious: "Un moment rhétorique juste il y a 23 ans ne valide ni une compétence économique, ni une capacité de coalition, ni un programme de gouvernement. Le raisonnement transfère le prestige d'un domaine (diplomatie) et d'une époque vers l'ensemble de l'offre politique — c'est précisément l'effet de halo. Son seul bilan exécutif interne (Matignon 2005-2007 : CPE imposé par 49.3 puis retiré, crise des banlieues) est, lui, rarement invoqué.",
      correction: "Évaluer la candidature sur le programme 2027 et sur le bilan exécutif complet (2005-2007 inclus), pas sur le capital symbolique de 2003.",
      severity: "high"
    },
    {
      claim: "« Restaurer la fonction présidentielle », « réarmer l'État », « retrouver notre voix dans le monde ».",
      fallacy_type: "mots-valises (vacuité performative)",
      why_fallacious: "Formules à haute charge symbolique et à contenu opérationnel indéterminé : aucun critère ne permettrait de dire si la fonction présidentielle a été « restaurée ». Ce vocabulaire de la verticalité produit de l'assentiment sans engagement vérifiable — le sophisme n'est pas dans la fausseté mais dans l'impossibilité d'être faux.",
      correction: "Exiger la traduction institutionnelle précise : quels articles de la Constitution changent, quelles pratiques cessent (interventions présidentielles quotidiennes ?), quel calendrier.",
      severity: "medium"
    },
    {
      claim: "Crédibilité budgétaire (loi organique quinquennale de déficit) + abrogation des 64 ans + fonds souverain 100 Md€ + embauches massives hôpital/école.",
      fallacy_type: "chiffrage magique par empilement",
      why_fallacious: "Chaque promesse est présentée isolément avec sa justification propre, jamais consolidée : ~15 Md€/an (retraites) + dizaines de Md€ (fonds, embauches) contre ~20-25 Md€ de recettes nouvelles maximales (patrimoine, successions, exonérations). Le déficit de bouclage est de l'ordre de 20-40 Md€/an, masqué par le séquençage rhétorique. C'est le « en même temps » version gaulliste sociale : l'ordre budgétaire ET la générosité sociale, sans l'arbitrage.",
      correction: "Publier un tableau de financement consolidé sur 5 ans. En son absence, considérer que l'un des deux piliers (rigueur ou dépense sociale) est décoratif.",
      severity: "high"
    },
    {
      claim: "Sur l'Ukraine et la Russie : « le temps de la diplomatie », renvoi dos à dos des « logiques de guerre » occidentale et russe.",
      fallacy_type: "fausse symétrie",
      why_fallacious: "Construit une équivalence implicite entre l'agresseur (invasion de 2022, crimes documentés) et les soutiens de l'agressé, comme si la « désescalade » était un choix également disponible aux deux parties. La diplomatie sans rapport de force militaire n'est pas une politique alternative : c'est l'entérinement des gains de l'agresseur — objection standard que son discours n'affronte jamais.",
      correction: "Préciser les termes : diplomatie pour quel objectif (intégrité territoriale ? cessez-le-feu gelé ?), avec quels leviers, et quel plan B si la Russie refuse — sinon la « diplomatie » est un mot, pas une stratégie.",
      severity: "high"
    },
    {
      claim: "« La France Humaniste est aujourd'hui le premier mouvement de jeunes en France » (avril 2026).",
      fallacy_type: "affirmation invérifiable / autoproclamation statistique",
      why_fallacious: "Aucune donnée publique (adhésions certifiées, comparatif avec les mouvements jeunes RN, LFI ou Renaissance) ne soutient le superlatif. L'affirmation crée un effet de preuve sociale (« les jeunes nous rejoignent ») sans base contrôlable — technique classique de bootstrapping des mouvements naissants.",
      correction: "Demander les chiffres d'adhésion audités et la définition (« mouvement de jeunes » : moins de 30 ans ? sections étudiantes ?). En l'absence, traiter comme un slogan.",
      severity: "medium"
    },
    {
      claim: "L'omniprésence médiatique et les sondages de popularité présentés comme preuve d'une demande politique (« les Français attendent autre chose »).",
      fallacy_type: "confusion popularité/intention de vote (échantillonnage biaisé)",
      why_fallacious: "La popularité d'un non-candidat mesure un capital de sympathie sans coût d'opportunité : dire du bien de Villepin ne coûte rien tant qu'il n'est pas un choix contre d'autres. Les données 2026 illustrent l'écart : 3e personnalité en opinions favorables (29%, Cluster17) mais ~2-5% d'intentions de vote. L'histoire regorge de ces popularités de position (Delors 1994, Rocard, Bertrand 2021) qui s'effondrent à l'épreuve du choix.",
      correction: "Ne considérer que les intentions de vote en configuration réelle, avec la question de la qualification au 1er tour (parrainages, financement, machine militante — tout ce qui lui a manqué en 2012).",
      severity: "medium"
    }
  ],

  data_issues: [
    {
      claim: "« Premier mouvement de jeunes en France » (La France humaniste).",
      problem: "invérifiable",
      reality: "Aucun chiffre d'adhésion publié ni audité au 4 juillet 2026 ; aucun organisme indépendant ne mesure le classement des « mouvements de jeunes ». À titre de comparaison, le RN revendiquait ~25 000 adhérents jeunes et LFI des dizaines de milliers de jeunes inscrits — revendications elles-mêmes invérifiables : le terrain entier est déclaratif.",
      source: "Interview D. de Villepin (avril 2026, reprise Orange/AFP) ; absence de données — méthodologie des fact-checkers sur les chiffres d'adhérents (Les Décodeurs ont documenté l'inflation systématique des chiffres d'adhérents des partis)"
    },
    {
      claim: "L'abrogation des 64 ans présentée comme compatible avec la « restauration de la crédibilité budgétaire ».",
      problem: "incohérent avec les données",
      reality: "Le retour à 62 ans représente 10-15 Md€/an de dépenses supplémentaires à horizon 2030 (COR, étude d'impact 2023), quand ses recettes nouvelles identifiables (successions >2 M€, plancher hauts patrimoines, recentrage d'exonérations) plafonnent à ~20-25 Md€/an dans les chiffrages les plus favorables — avant de financer le fonds souverain et les embauches promises. Aucun chiffrage consolidé n'a été publié par La France humaniste.",
      source: "COR, rapports annuels ; étude d'impact du PLFRSS 2023 ; chiffrages IPP/Zucman sur la fiscalité patrimoniale"
    },
    {
      claim: "« Les médias français sont tenus par une dizaine de milliardaires. »",
      problem: "exagéré (mais partiellement fondé)",
      reality: "Une dizaine de fortunes contrôlent effectivement l'essentiel de la presse quotidienne nationale et une large part de l'audiovisuel privé (cartographie Acrimed/Le Monde diplomatique ; commission d'enquête sénatoriale 2022). Mais la formule omet l'audiovisuel public (~4 Md€/an, premières audiences info avec France Télévisions et Radio France) et la presse régionale mutualiste : « les médias » ne sont pas réductibles aux titres détenus par des milliardaires.",
      source: "Commission d'enquête du Sénat sur la concentration des médias (2022) ; cartographie Acrimed/Le Monde diplomatique, mise à jour 2024"
    },
    {
      claim: "Sa disponibilité pour incarner une « voix libre » de la France à l'international.",
      problem: "sorti de contexte",
      reality: "Depuis 2008, Villepin exerce une activité de conseil rémunérée auprès d'acteurs souverains étrangers — dont la Qatar Investment Authority, des intérêts saoudiens et chinois — sans publication du registre de ses clients ni des montants. En avril 2026, Robert Bourgi a en outre affirmé (Complément d'enquête, France 2) lui avoir remis des cadeaux de valeur (statuettes estimées 125 000 €) lorsqu'il était ministre — allégation contestée, non jugée. L'indépendance revendiquée est donc structurellement invérifiable en l'état.",
      source: "La Libre (07/05/2026) ; France 2, Complément d'enquête (30/04/2026) ; presse économique sur l'activité de Villepin International"
    },
    {
      claim: "La lecture de sa popularité comme dynamique électorale (« les Français nous rejoignent »).",
      problem: "sorti de contexte",
      reality: "Cluster17 (avril 2026) le classe 3e personnalité en opinions favorables (29%) mais les intentions de vote testées le créditent de ~2-5% au 1er tour selon les configurations — derrière Philippe (14-16%), Attal (8%) et loin de la qualification. La popularité hors compétition ne se convertit historiquement qu'à ~30-50% en voix réelles.",
      source: "Cluster17, baromètre avril-juin 2026 ; IFOP 25/06/2026 ; Wikipédia, liste des sondages présidentielle 2027"
    }
  ],

  problematic_arguments: [
    {
      argument: "La posture « au-dessus des partis » : ni primaire, ni bloc, un mouvement « ouvert à tous » avec lui en président d'honneur.",
      why_problematic: "Refuser toute médiation partisane tout en construisant un appareil personnel (parti fondé pour lui, dirigé par un fidèle) est une contradiction performative : c'est la personnalisation maximale déguisée en dépassement des partis — le geste bonapartiste classique.",
      what_it_hides: "L'absence de coalition de gouvernement : avec 2-5% et aucun groupe parlementaire, un président Villepin serait l'hyper-minorité institutionnelle qu'il reproche à Macron, en pire."
    },
    {
      argument: "La séquence Gaza comme matrice de la candidature : la justice au Proche-Orient comme preuve de courage politique global.",
      why_problematic: "La position peut être fondée en droit, mais en faire l'axe central d'une candidature présidentielle française opère un déplacement : la présidentielle se joue sur l'économie, les services publics et la sécurité, sujets sur lesquels son offre est la moins construite. C'est une stratégie de niche émotionnelle qui segmente l'électorat (jeunes, gauche déçue, électeurs musulmans) plus qu'elle ne construit une majorité.",
      what_it_hides: "La minceur du programme intérieur et l'absence de réponse à la question qui a tué sa candidature en 2012 : avec quelle machine, quels relais, quels parrainages, quel financement ?"
    },
    {
      argument: "La dénonciation de « l'oligarchie » et des milliardaires des médias par un homme d'affaires du conseil aux fonds souverains.",
      why_problematic: "L'argument anti-oligarchique est porté par quelqu'un dont la prospérité post-politique vient précisément des concentrations de capital (souverain qatari, saoudien, chinois) qu'il ne divulgue pas. Sans transparence sur ses clients, la critique de l'argent des autres est un angle mort éthique.",
      what_it_hides: "Le registre exact de ses intérêts : aucun déport annoncé, aucune liste de clients publiée, aucune règle de gestion des conflits d'intérêts pour sa campagne."
    },
    {
      argument: "Le gaullisme comme réponse en soi (« restaurer », « retrouver », « renouer avec »).",
      why_problematic: "Le lexique de la restauration postule qu'un état antérieur désirable existait et qu'il suffit d'y revenir — or la France de 1965 (plein emploi industriel, monopole télévisuel d'État, monde bipolaire) n'offre aucun mode d'emploi pour 2027. La nostalgie institutionnalisée dispense de trancher les questions neuves (vieillissement, IA, UE à 27).",
      what_it_hides: "Que de Gaulle gouvernait avec une croissance à 5%, une démographie jeune et sans dette — les conditions matérielles du gaullisme, pas seulement son style."
    }
  ],

  strong_ideas: [
    {
      idea: "Réhabiliter la fiscalité des grandes successions comme levier central (contribution >2 M€, logique CAE).",
      why_strong: "C'est l'angle mort le mieux documenté du système fiscal français : 60% du patrimoine est désormais hérité, la concentration revient aux niveaux de 1900 (Piketty, CAE 2021), et l'impôt successoral réel des très hauts patrimoines est mité par les niches (assurance-vie, Dutreil, démembrement). Taxer les flux d'héritage distord moins l'économie que taxer le travail — consensus économique large, de l'OCDE au CAE.",
      adoptable_by: "La gauche entière (déjà dans les programmes PS/LFI), mais surtout le bloc central : Attal ou Philippe pourraient financer leurs baisses de charges par les successions — l'échange « moins sur le travail, plus sur l'héritage » est le grand deal fiscal disponible de 2027."
    },
    {
      idea: "Conseil de sécurité européen restreint (5 puissances) et extension du débat sur la dissuasion française.",
      why_strong: "Le format restreint contourne la paralysie à 27, et la question de la dimension européenne de la dissuasion française est devenue LE sujet stratégique depuis le désengagement américain — Villepin l'a posée avant qu'elle soit mainstream. Précédents fonctionnels : format E3 sur l'Iran, coalitions ad hoc.",
      adoptable_by: "Tout candidat de gouvernement ; Philippe (3% défense) et Attal y sont compatibles ; même le RN pourrait s'en réclamer en version souverainiste. Le point clivant reste le rapport à l'OTAN, séparable du reste."
    },
    {
      idea: "Fermeté migratoire procédurale SANS démantèlement des droits (garder AME, droit du sol) — le découplage contrôle/droits.",
      why_strong: "Correspond à l'opinion médiane réelle (majorité pour le contrôle des flux ET contre la privation de soins) et au consensus technique (suppression de l'AME : coût sanitaire supérieur aux économies, rapport Évin-Stefanini). C'est la seule position migratoire du champ 2027 qui ne soit ni déni ni surenchère.",
      adoptable_by: "Le centre-gauche (Glucksmann) en est proche ; le bloc central pourrait y converger s'il cessait de courir après le RN sur les droits plutôt que sur l'exécution."
    },
    {
      idea: "Rétablir un signal prix carbone en le disant AVANT l'élection.",
      why_strong: "Économiquement, c'est l'instrument au meilleur rapport coût-efficacité (rapport Quinet, consensus des économistes du climat) ; politiquement, l'échec de 2018 venait de l'absence de mandat et de redistribution, pas de l'instrument. L'annoncer en campagne recrée les conditions de légitimité.",
      adoptable_by: "Les écologistes (à condition de redistribution intégrale type dividende carbone), le centre (logique pigouvienne), voire la droite si les recettes financent la baisse d'autres impôts."
    }
  ],

  electorate: "Coalition atypique et fragile : jeunes urbains diplômés politisés par Gaza, électeurs de gauche déçus de la NUPES cherchant une figure d'autorité morale, Français de culture musulmane sensibles à sa ligne proche-orientale (surreprésentés dans ses soutiens selon Cluster17), et une frange de gaullistes âgés nostalgiques de la « certaine idée de la France ». Forte notoriété (~29% d'opinions favorables) mais électorat de conviction très étroit (~2-5% d'intentions de vote), sans implantation territoriale ni relais d'élus — le profil exact d'une popularité de commentateur, pas encore d'une force électorale.",

  key_quotes: [
    {
      text: "J'ai décidé de créer un mouvement d'idées, de citoyens [...] un mouvement ouvert à tous.",
      context: "Lancement de La France humaniste",
      source: "Le Parisien / franceinfo, 23 juin 2025"
    },
    {
      text: "La France Humaniste est aujourd'hui le premier mouvement de jeunes en France.",
      context: "Interview sur la dynamique de son mouvement — affirmation invérifiable (voir data_issues)",
      source: "Interview reprise par Orange Actu / AFP, avril 2026"
    },
    {
      text: "Israël doit rendre des comptes devant la société internationale. La France doit appliquer le mandat d'arrêt de la CPI si Benyamin Netanyahu se rend sur son territoire.",
      context: "Position constante depuis 2024 sur Gaza et la CPI (paraphrase fidèle de déclarations répétées)",
      source: "Plateaux TV et entretiens 2024-2026, synthèse MonVote2027"
    },
    {
      text: "Tous les chemins mènent à Rome, mais tous les chemins de la critique ne mènent pas à l'antisémitisme.",
      context: "Défense après la polémique de novembre 2023 (propos sur la « domination financière » à propos d'Hollywood et des médias américains, tenus dans Quotidien)",
      source: "LCI / Europe 1, novembre 2023"
    },
    {
      text: "Un algorithme ne choisira pas la vie de nos enfants.",
      context: "Justification de sa proposition de suppression de Parcoursup",
      source: "Déclaration 2026, synthèse MonVote2027"
    },
    {
      text: "Un certain nombre de personnalités pourrait éprouver un déficit de crédibilité.",
      context: "Pique visant les candidats du bloc central sortant (Philippe, Attal), positionnement en recours extérieur au bilan",
      source: "La Libre, 7 mai 2026"
    }
  ],

  sources: [
    "https://www.franceinfo.fr/politique/dominique-de-villepin-lance-son-propre-parti-baptise-la-france-humaniste_7334352.html",
    "https://monvote2027.fr/candidat/devillepin",
    "https://www.boursorama.com/videos/actualites/dette-fonds-souverain-retraites-isf-le-programme-economique-de-dominique-de-villepin-est-il-de-droite-a9c3661c1cc30bef53d95e9e229d2c11",
    "https://www.lalibre.be/international/europe/elections-france/2026/05/07/presidentielle-2027-lequation-de-villepin-un-certain-nombre-de-personnalites-pourrait-eprouver-un-deficit-de-credibilite-HCILMLORZVFIXFXPR2VZO7KS3E/",
    "https://actu.orange.fr/politique/dominique-de-villepin-la-france-humaniste-est-aujourd-hui-le-premier-mouvement-de-jeunes-en-france-magic-CNT000002oeGZz.html",
    "https://www.europe1.fr/politique/domination-financiere-dominique-de-villepin-se-defend-apres-ses-propos-polemiques-sur-israel-4216730",
    "https://www.rts.ch/info/monde/2025/article/dominique-de-villepin-lance-un-parti-pour-la-presidentielle-2027-28923750.html",
    "https://cluster17.com/wp-content/uploads/2026/06/Barometre-des-personnalites-politiques-Juin-2026-Cluster17-1.pdf",
    "https://www.acrimed.org/Polemique-de-Villepin-la-fabrique-mediatique-de-l"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["villepin-2027"] = CONTENT_ELECTIONS_villepin_2027;
