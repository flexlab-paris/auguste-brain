const CONTENT_ELECTIONS_LFI_2027 = {
  id: "lfi-2027",
  name: "Jean-Luc Mélenchon",
  party: "La France Insoumise",
  bloc: "extreme-gauche",
  spectrum: -8.5,
  status: "déclaré",
  status_note: "Candidature officialisée le 3 mai 2026 au 20h de TF1 — 4e candidature (2012, 2017, 2022). Désigné candidat unique par les élus LFI réunis à Paris. Refuse la primaire de la gauche unitaire du 11 octobre 2026. Sondages juin 2026 : 13-16% au 1er tour (IFOP 25/06 : 13%, Odoxa mai : 16%), premier à gauche mais très fort taux de rejet dans l'ensemble de l'électorat. À 74 ans, il avait échoué à 420 000 voix du second tour en 2022 (22%). Contexte interne : purges de 2024 (Garrido, Corbière écartés des investitures), départs d'Autain et Ruffin — mouvement verrouillé autour du candidat.",
  color: "#c81e3a",

  thesis: "Le néolibéralisme et la monarchie présidentielle de la Ve République ont produit un pays inégalitaire, écologiquement insoutenable et démocratiquement épuisé. Il faut une rupture : bifurcation écologique planifiée par l'État, redistribution massive (SMIC 1600€, retraite à 60 ans, blocage des prix), 6e République par Assemblée constituante, et désobéissance aux règles européennes qui empêchent ce programme. Le peuple, souverain, contre l'oligarchie.",
  counter_thesis: "Steelman adverse : le programme suppose simultanément un choc de dépense publique historique (250-320 Md€) dans un pays déjà à ~5,5% de déficit et >113% de dette, une désobéissance aux traités UE qui déclencherait un bras de fer avec Bruxelles et les marchés (spread, financement de la dette détenue à ~50% par des non-résidents), et un alignement international (sortie du commandement intégré de l'OTAN, non-alignement) qui isolerait la France au pire moment géopolitique. Chaque brique est défendable isolément ; leur simultanéité rend le scénario de crise financière et institutionnelle non pas possible mais probable — et ce sont les plus modestes, ceux que le programme veut protéger, qui paient les crises monétaires et les fuites de capitaux. S'ajoute un problème démocratique interne : un mouvement qui purge ses cadres dissidents peine à incarner la 6e République délibérative qu'il promet.",

  program_pillars: [
    "Rupture sociale : SMIC 1600€ net, retraite à 60 ans, blocage des prix de première nécessité",
    "Planification écologique : règle verte, bifurcation, 100% renouvelables et sortie du nucléaire",
    "6e République : Assemblée constituante, RIC, fin du présidentialisme",
    "Désobéissance aux traités européens incompatibles avec le programme",
    "Non-alignement international : sortie du commandement intégré de l'OTAN",
    "Fiscalité de rupture : 14 tranches d'impôt, ISF renforcé, héritage maximum"
  ],

  proposals: [
    {
      title: "SMIC à 1600€ net",
      domain: "économie",
      detail: "Porter le SMIC mensuel à 1600€ net, avec indexation des salaires sur l'inflation et encadrement des écarts de rémunération (1 à 20) dans l'entreprise.",
      pros: [
        "Soutien direct à la demande intérieure : les bas salaires ont la propension à consommer la plus élevée — effet multiplicateur keynésien réel en bas de cycle",
        "Réduction de la pauvreté laborieuse : un temps plein au SMIC reste proche du seuil de pauvreté pour une famille monoparentale",
        "Compression de l'éventail salarial par le bas, là où les négociations de branche échouent depuis 20 ans (nombreuses branches avec minima sous le SMIC)"
      ],
      cons: [
        "Hausse d'environ 13-15% du coût du travail au niveau du SMIC : risque documenté sur l'emploi peu qualifié, surtout dans les TPE/PME et les services exposés (études sur l'élasticité emploi-coût du travail au voisinage du SMIC)",
        "Écrasement de l'échelle salariale : le salarié à 1650€ net rejoint le smicard, effet démotivant et pressions de rattrapage en chaîne",
        "Si compensé par exonérations de cotisations, coût budgétaire massif ; si non compensé, choc direct sur les marges des petites entreprises"
      ],
      plausibility: 6,
      plausibility_note: "Juridiquement trivial (décret). Économiquement, le vrai débat est le calibrage : une hausse de cette ampleur en une fois est sans précédent depuis 1981 (+10%), dont les effets emploi restent discutés. Faisable, mais avec des effets de bord non maîtrisés.",
      cost_estimate: "Coût direct pour l'État si exonérations maintenues : 15-25 Md€/an selon le schéma de compensation (ordres de grandeur Institut Montaigne 2022 sur la version 1500€ ; version 1600€ non chiffrée indépendamment à date)."
    },
    {
      title: "Retraite à 60 ans, 40 annuités",
      domain: "social",
      detail: "Abrogation de la réforme Macron (64 ans), retour au droit à la retraite à 60 ans à taux plein pour 40 annuités ; pension minimale au niveau du SMIC revalorisé pour carrière complète ; minimum vieillesse au seuil de pauvreté.",
      pros: [
        "Répond à une inégalité documentée : l'espérance de vie en bonne santé des ouvriers est inférieure de ~7 ans à celle des cadres (INSEE) — l'âge uniforme est régressif",
        "Forte légitimité démocratique : la réforme de 2023 est passée par 49.3 contre une opinion majoritairement hostile",
        "La pension minimale au SMIC traite la pauvreté des retraités à carrière complète, notamment des femmes"
      ],
      cons: [
        "Coût brut estimé entre 30 et 85 Md€/an selon les hypothèses de comportement et d'annuités (fourchettes Institut Montaigne / COR 2022) — dans un système déjà déficitaire à horizon 2030 selon le COR",
        "Le financement repose sur des hypothèses en cascade : hausse des cotisations + emplois créés par la relance + égalité salariale femmes-hommes décrétée — chaque maillon est incertain, leur produit l'est davantage",
        "À rebours de tous les voisins européens (Allemagne 67, Italie 67, Espagne 66+) : détériore la crédibilité budgétaire de la France au moment où elle emprunte 300 Md€/an"
      ],
      plausibility: 2,
      plausibility_note: "Législativement possible avec majorité absolue (improbable). Budgétairement : c'est la mesure la plus coûteuse du programme, dans le contexte du déficit ~5,5% PIB. Une abrogation partielle (retour à 62 ans) serait plus plausible qu'un retour à 60.",
      cost_estimate: "25-85 Md€/an brut selon périmètre et hypothèses (Institut Montaigne 2022 ; LFI chiffrait sa version 2022 à ~25 Md€ nets, contesté). IFRAP : >70 Md€."
    },
    {
      title: "Blocage des prix de première nécessité",
      domain: "économie",
      detail: "Blocage par décret des prix de produits de première nécessité (alimentaire de base, énergie, carburants) en période d'inflation.",
      pros: [
        "Protection immédiate du pouvoir d'achat des plus modestes, pour qui l'alimentaire et l'énergie pèsent 2 à 3 fois plus lourd que pour les aisés (INSEE, enquêtes budget des familles)",
        "Précédent réel et efficace à court terme : le bouclier tarifaire énergie 2022 (gouvernement Borne) était de facto un blocage de prix, qui a contenu l'inflation française sous la moyenne UE",
        "Outil juridique existant : l'article L410-2 du code de commerce autorise déjà le blocage temporaire en cas de circonstances exceptionnelles"
      ],
      cons: [
        "Bloqué durablement, un prix sous le coût de production crée pénuries, rationnement ou marchés parallèles — littérature empirique abondante (contrôles des loyers, Venezuela, mais aussi expériences françaises 1945-1978)",
        "Compense le symptôme sans traiter la cause ; le bouclier tarifaire a coûté ~40 Md€ nets aux finances publiques (Cour des comptes 2024) sans cibler les ménages modestes",
        "Report des marges sur les produits non bloqués et pression sur les fournisseurs amont (agriculteurs notamment)"
      ],
      plausibility: 6,
      plausibility_note: "Faisable temporairement (base légale existante, précédent 2022). Non soutenable en régime permanent sans subventions massives ou nationalisation de la distribution.",
      cost_estimate: "Fortement dépendant du périmètre : le seul bouclier énergie 2022-2023 a coûté ~40 Md€ nets (Cour des comptes). Blocage étendu et durable : dizaines de Md€/an ou pertes reportées sur les filières."
    },
    {
      title: "Impôt sur le revenu à 14 tranches + héritage maximum",
      domain: "économie",
      detail: "Barème de l'IR à 14 tranches (contre 5), tranche marginale supérieure ~90% au-delà d'un seuil élevé, ISF rétabli et renforcé, héritage maximum (~12 M€, au-delà confiscation).",
      pros: [
        "Un barème plus progressif à 14 tranches lisse réellement les effets de seuil — c'est techniquement mieux qu'un barème à 5 tranches, indépendamment des taux",
        "La taxation des très hautes successions est soutenue par des économistes de tout le spectre (rapport Blanchard-Tirole 2021, CAE 2021) : la France taxe beaucoup les héritages moyens et peu les très gros (assurance-vie, démembrement, Dutreil)",
        "Le taux effectif d'imposition des milliardaires français est régressif au sommet (~26% tous prélèvements vs ~50% pour les hauts salaires — travaux Institut des politiques publiques 2023)"
      ],
      cons: [
        "Un taux marginal à 90% et un héritage confiscatoire au-delà de 12 M€ déclencheraient expatriations et restructurations patrimoniales avant même l'entrée en vigueur — l'assiette anticipée est très supérieure à l'assiette réalisée",
        "Risque constitutionnel direct : le Conseil constitutionnel a censuré la taxe à 75% en 2012 (caractère confiscatoire) ; l'héritage maximum serait presque certainement censuré (droit de propriété, art. 17 DDHC)",
        "Rendement des mesures sur le patrimoine systématiquement surestimé : l'exit tax et les conventions fiscales limitent la capacité de capture unilatérale"
      ],
      plausibility: 3,
      plausibility_note: "Le barème à 14 tranches est plausible (loi de finances). Le taux à ~90% et l'héritage maximum se heurtent frontalement à la jurisprudence constitutionnelle de 2012-2013. Sans révision constitutionnelle, la version votée serait amputée de ses éléments les plus durs.",
      cost_estimate: "LFI attend ~35-40 Md€ de recettes nouvelles de l'ensemble du bloc fiscal (chiffrage candidat 2022) ; Institut Montaigne jugeait la matérialisation d'une large part 'trop incertaine pour être prise en compte'."
    },
    {
      title: "6e République par Assemblée constituante",
      domain: "institutions",
      detail: "Convocation d'une Assemblée constituante (référendum art. 11), rédaction d'une nouvelle Constitution : fin du présidentialisme, RIC (initiative, abrogation, révocation), mandat unique, proportionnelle.",
      pros: [
        "Diagnostic largement partagé au-delà de LFI : hyper-présidentialisme, 49.3 en série, abstention record — l'usure de la Ve est documentée (rapports Bartolone-Winock 2015)",
        "Le RIC et la proportionnelle existent dans des démocraties stables (Suisse, Italie, Allemagne pour la proportionnelle) — rien d'exotique",
        "Une constituante élue est plus légitime qu'une révision négociée entre appareils"
      ],
      cons: [
        "Voie juridique contestée : utiliser l'art. 11 pour réviser la Constitution contourne l'art. 89 — précédent de Gaulle 1962, mais doctrine majoritairement hostile ; crise juridique garantie dès le décret de convocation",
        "Deux ans de processus constituant = deux ans d'incertitude institutionnelle pendant lesquels le programme économique dépend d'institutions en sursis",
        "Aucune garantie que la constituante accouche du texte souhaité — elle peut être dominée par d'autres forces (précédent chilien 2022 : projet rejeté à 62%)"
      ],
      plausibility: 3,
      plausibility_note: "Constitutionnellement acrobatique (art. 11 vs 89), politiquement dépendant d'une majorité parlementaire et d'un référendum gagné. Le précédent chilien montre que même lancé, le processus peut échouer.",
      cost_estimate: "Coût direct faible ; coût d'incertitude institutionnelle non chiffrable mais réel (investissement, taux)."
    },
    {
      title: "Désobéissance aux traités européens",
      domain: "europe",
      detail: "Appliquer le programme 'quoi qu'il en coûte' face aux règles UE : opt-out unilatéral des règles budgétaires, de concurrence et de libre circulation des capitaux si nécessaire ('appliquer notre programme, désobéir aux traités qui l'empêchent').",
      pros: [
        "Pose une vraie question : plusieurs politiques du programme (aides d'État, nationalisations, protectionnisme ciblé) sont effectivement entravées par le droit UE — le dire est plus honnête que promettre de tout faire 'dans les traités'",
        "Des précédents de désobéissance sélective existent et n'ont pas déclenché l'apocalypse (dépassements de déficit répétés France/Allemagne années 2000, opt-outs négociés, Pologne/Hongrie sur l'État de droit pendant des années)",
        "Levier de négociation réel : la France est trop grosse pour être traitée comme la Grèce 2015 — poids systémique dans la zone euro"
      ],
      cons: [
        "Asymétrie décisive avec la Grèce mal comprise : la taille de la France signifie que la BCE ne pourrait PAS la soutenir sans conditions (l'instrument anti-fragmentation TPI exige le respect du cadre budgétaire) — le filet de sécurité disparaît précisément quand on désobéit",
        "50% de la dette française est détenue par des non-résidents : une prime de risque de 100-200 points de base coûterait à terme 30-60 Md€/an d'intérêts supplémentaires — plus que le rendement espéré des taxes sur les riches",
        "Contradiction interne : le programme veut simultanément désobéir aux traités et obtenir de l'UE des politiques ambitieuses (harmonisation fiscale, protectionnisme européen) qui exigent la confiance des partenaires"
      ],
      plausibility: 2,
      plausibility_note: "Unilatéralement possible en droit interne, mais le rapport de force financier (dette >113% PIB, déficit ~5,5%, dépendance aux marchés) rend le scénario de confrontation prolongée intenable sans contrôle des capitaux — que le programme n'assume qu'à demi-mot.",
      cost_estimate: "Non chiffrable ex ante ; le seul renchérissement de la dette en cas de spread durable dépasserait le rendement attendu de l'ensemble du bloc fiscal du programme."
    },
    {
      title: "Sortie du nucléaire et 100% renouvelables",
      domain: "écologie",
      detail: "Arrêt du programme EPR2, sortie progressive du nucléaire, objectif 100% énergies renouvelables (scénario type négaWatt/RTE M0), pôle public de l'énergie.",
      pros: [
        "Le scénario 100% EnR à 2050 existe dans les travaux de RTE (M0) — ce n'est pas une lubie, c'est une option technique documentée",
        "Les coûts et délais du nouveau nucléaire plaident partiellement pour la prudence : Flamanville 3 livré avec 12 ans de retard et un coût multiplié par ~4 (19,1 Md€ en coût complet selon la Cour des comptes 2020)",
        "Un pôle public de l'énergie répond à un vrai problème : la volatilité des prix de marché de l'électricité déconnectés des coûts de production français"
      ],
      cons: [
        "RTE lui-même conditionne M0 à des paris technologiques 'lourds' (flexibilités, stockage, hydrogène) et le classe parmi les scénarios les plus incertains et les plus coûteux en réseau",
        "Se priver du parc nucléaire existant (électricité décarbonée la moins chère d'Europe en coût complet amorti) alors que l'objectif est la décarbonation est difficilement cohérent avec l'urgence climatique affichée",
        "Position isolée à gauche même : le PCF est pro-nucléaire, l'opinion a basculé pro-nucléaire depuis 2022 (crise énergétique)"
      ],
      plausibility: 3,
      plausibility_note: "Techniquement possible à très long terme selon RTE, mais politiquement (opinion, filière, emplois) et industriellement (EPR2 lancés) le coût d'arrêt est devenu prohibitif. Une inflexion (pas de nouveaux réacteurs au-delà des EPR2 engagés) est le plausible réel.",
      cost_estimate: "Scénarios RTE 2050 : le 100% EnR (M0) est 10-20% plus coûteux en coût complet système que les scénarios avec nucléaire (N2/N03), soit ~10-15 Md€/an d'écart."
    },
    {
      title: "Garantie d'emploi (État employeur en dernier ressort)",
      domain: "social",
      detail: "Tout chômeur de longue durée se voit proposer un emploi utile (transition écologique, aide à la personne) payé au moins au SMIC, financé par l'État, sur le modèle étendu de 'Territoires zéro chômeur de longue durée'.",
      pros: [
        "S'appuie sur une expérimentation française réelle et évaluée (TZCLD, loi 2016 puis extension 2020) avec des résultats humains solides sur les territoires pilotes",
        "Économiquement défendable : le coût brut est partiellement compensé par les dépenses évitées (RSA, ASS, santé, délinquance) — les évaluations TZCLD chiffrent le coût net bien en-deçà du coût brut",
        "Traite le noyau dur du chômage que ni la conjoncture ni la formation ne résorbent"
      ],
      cons: [
        "Le passage à l'échelle change la nature du dispositif : TZCLD repose sur un ancrage local très fin ; généralisé, risque de créer un secteur d'emplois subventionnés permanents sans productivité, concurrençant l'emploi marchand local",
        "Coût brut à l'échelle : ~1,3-1,5 million de chômeurs de longue durée × ~30 000€/an chargés = 40+ Md€ brut",
        "Effets de verrouillage : peu d'incitation à retourner vers l'emploi marchand"
      ],
      plausibility: 4,
      plausibility_note: "L'extension progressive de TZCLD est plausible et déjà en cours ; la garantie universelle immédiate ne l'est pas budgétairement. Version crédible : montée en charge sur 10 ans.",
      cost_estimate: "40-45 Md€/an brut à pleine échelle, coût net estimé 15-25 Md€ après dépenses évitées (extrapolation des évaluations TZCLD ; chiffrage plein périmètre non consolidé)."
    },
    {
      title: "Sortie du commandement intégré de l'OTAN, non-alignement",
      domain: "international",
      detail: "Retrait du commandement intégré de l'OTAN (retour à la position 1966-2009), 'non-alignement' et 'diplomatie altermondialiste', refus des logiques de blocs.",
      pros: [
        "Précédent gaullien réel : la France a vécu hors du commandement intégré de 1966 à 2009 sans cesser d'être alliée — ce n'est pas une sortie de l'Alliance atlantique",
        "L'autonomie stratégique européenne est un objectif partagé jusqu'à Macron ; la dépendance aux É.-U. (renseignement, munitions) est un vrai sujet documenté",
        "Une voix française non alignée peut être audible au 'Sud global' où la position occidentale est contestée"
      ],
      cons: [
        "Timing : en pleine guerre en Ukraine et incertitude américaine, affaiblir le pilier européen de l'OTAN enverrait un signal désastreux aux alliés de l'Est et un cadeau stratégique à Moscou",
        "Les ambiguïtés répétées de LFI sur la Russie (votes au Parlement européen, qualification de l'OTAN comme co-responsable) minent la crédibilité du 'non-alignement' qui ressemble à un alignement par abstention",
        "Isolement européen garanti : aucune capitale de l'UE ne suivrait, ce qui contredit l'ambition d'entraîner l'Europe vers d'autres politiques"
      ],
      plausibility: 5,
      plausibility_note: "Juridiquement simple (décision souveraine, précédent 1966). Politiquement coûteux mais exécutable — c'est une des rares mesures de rupture réellement à la main d'un président seul.",
      cost_estimate: "Coût direct faible ; coûts indirects (interopérabilité, industrie de défense, exportations) non chiffrés."
    },
    {
      title: "Pôle public du médicament",
      domain: "santé",
      detail: "Création d'un pôle public de production pharmaceutique pour les médicaments essentiels en pénurie, transparence des prix, licences d'office sur les brevets si nécessaire.",
      pros: [
        "Répond à un problème réel et croissant : ~5000 signalements de ruptures de stock de médicaments en 2023-2024 (ANSM), dont amoxicilline et anticancéreux",
        "La licence d'office existe déjà en droit français (CSP art. L613-16) — l'outil est légal, jamais activé",
        "Précédents étrangers fonctionnels (production publique au Brésil, en Suède historiquement)"
      ],
      cons: [
        "Construire une capacité industrielle pharmaceutique publique prend 5-10 ans et des milliards — ne résout pas les pénuries du prochain hiver",
        "Risque de désinvestissement privé si les prix administrés baissent trop : les pénuries actuelles viennent en partie de prix français déjà parmi les plus bas d'Europe",
        "Frictions avec le droit UE des aides d'État selon le montage"
      ],
      plausibility: 6,
      plausibility_note: "Version modeste (façonnage public de molécules critiques, stocks stratégiques) très plausible et déjà amorcée par l'exécutif actuel. Version intégrée (recherche + production) coûteuse et lente.",
      cost_estimate: "1-3 Md€ d'investissement initial pour un pôle de production ciblé (ordre de grandeur, pas de chiffrage consolidé public)."
    },
    {
      title: "Règle verte constitutionnalisée",
      domain: "écologie",
      detail: "Inscrire dans la Constitution la 'règle verte' : ne pas prélever sur la nature plus que ce qu'elle peut reconstituer, opposable aux lois et projets.",
      pros: [
        "Principe cohérent avec la science des limites planétaires ; donne un ancrage juridique supérieur aux objectifs climatiques, aujourd'hui non contraignants (l'Affaire du Siècle a montré la faiblesse de l'opposabilité actuelle)",
        "Des équivalents existent : droits de la nature en Équateur, devoir climatique constitutionnel jugé par Karlsruhe (2021)",
        "Force chaque loi de finances à un examen écologique — mécanisme disciplinant analogue à la règle d'or budgétaire, mais écologique"
      ],
      cons: [
        "Notion juridiquement indéterminée : 'ce que la nature peut reconstituer' n'est pas mesurable à l'échelle d'un pays pour la plupart des ressources — contentieux infini, pouvoir de fait transféré au juge",
        "Une règle absolue est inapplicable sans mise à l'arrêt de pans entiers de l'économie ; elle serait donc interprétée souplement, donc symbolique",
        "Nécessite révision constitutionnelle (art. 89 : accord des deux chambres) — improbable avec un Sénat à droite"
      ],
      plausibility: 2,
      plausibility_note: "Verrou art. 89 : le Sénat bloquerait. Même adoptée, l'indétermination du concept la rendrait déclarative ou ingouvernable.",
      cost_estimate: "Coût direct nul ; effets économiques dépendants de l'interprétation juridictionnelle."
    },
    {
      title: "Allocation d'autonomie pour les jeunes en formation",
      domain: "éducation",
      detail: "Allocation d'autonomie d'environ 1100-1200€/mois pour les 18-25 ans en formation, sous condition de ressources détachée du foyer fiscal parental.",
      pros: [
        "Traite un angle mort réel : la France est un des rares pays où les droits sociaux des 18-25 ans dépendent des parents ; la précarité étudiante est documentée (files d'attente d'aide alimentaire étudiante depuis 2020)",
        "Détacher du foyer fiscal supprime l'hypocrisie des étudiants pauvres de parents moyens non aidés",
        "Investissement dans le capital humain avec rendement de long terme (poursuite d'études, moins de salariat subi concurrent des études)"
      ],
      cons: [
        "Coût élevé : ~2,7 millions d'étudiants ; même sous condition de ressources, 10-15 Md€/an",
        "Effet d'aubaine pour les familles aisées organisant le rattachement fiscal ; frontière formation/inactivité difficile à contrôler",
        "Concurrence budgétaire directe avec l'investissement dans l'appareil de formation lui-même (universités sous-financées)"
      ],
      plausibility: 5,
      plausibility_note: "Techniquement simple, budgétairement lourd. Une version ciblée (revalorisation et élargissement des bourses, déjà amorcée) est le compromis probable.",
      cost_estimate: "10-15 Md€/an selon seuils (chiffrages 2022 : LFI ~10 Md€, Institut Montaigne plus élevé)."
    }
  ],

  fallacies: [
    {
      claim: "« Les riches paieront » — le programme est autofinancé par la taxation du capital et des hauts patrimoines",
      fallacy_type: "assiette fantôme / hypothèses en cascade",
      why_fallacious: "Le chiffrage additionne des rendements fiscaux théoriques calculés sur des assiettes statiques, comme si les comportements (expatriation, restructuration, optimisation, baisse d'activité) ne réagissaient pas. Puis il réinjecte les recettes hypothétiques comme financement de dépenses certaines. La dépense est ferme, la recette est conditionnelle : l'asymétrie est le cœur du sophisme.",
      correction: "Une analyse rigoureuse applique des élasticités comportementales aux assiettes (littérature sur l'ISF, l'exit tax, les hauts revenus) et présente des fourchettes. L'Institut Montaigne écartait en 2022 une partie des recettes LFI comme 'trop incertaines' — l'écart de chiffrage (250 vs 320 Md€ de coût net) vient largement de là. On peut défendre une hausse de la taxation du capital ; on ne peut pas la présenter comme un financement garanti de 40 Md€.",
      severity: "high"
    },
    {
      claim: "« Le bouclier des traités saute si on a le courage politique » — la désobéissance à l'UE est une simple question de volonté",
      fallacy_type: "nirvana fallacy / négation des contraintes",
      why_fallacious: "Réduit une contrainte structurelle (dépendance de la France aux marchés obligataires, rôle de la BCE, interdépendance commerciale) à un défaut de courage. Le raisonnement suppose que la contrainte est purement idéologique et qu'un rapport de force suffit — sans modéliser ce que font les créanciers, la BCE et les partenaires dans les 30 jours qui suivent.",
      correction: "La contrainte extérieure est partiellement réelle : avec ~5,5% de déficit, la France emprunte ~300 Md€/an, la BCE conditionne son soutien anti-spread (TPI) au respect du cadre. Un bras de fer est possible mais son coût (spread, refinancement) doit être chiffré et assumé, y compris l'option contrôle des capitaux. Grèce 2015 est le cas d'école d'un rapport de force perdu faute de plan B crédible.",
      severity: "high"
    },
    {
      claim: "« C'est l'austérité ou notre relance » — présentation du débat budgétaire comme un choix binaire",
      fallacy_type: "fausse dichotomie",
      why_fallacious: "Écrase le continuum des politiques possibles (consolidation lente, redéploiement, relance ciblée, réformes de recettes sans choc de dépense) en deux pôles caricaturaux, dont l'un est repoussoir. Toute critique du chiffrage devient ainsi une défense de 'l'austérité'.",
      correction: "Entre un choc de dépense de 250-320 Md€ et l'austérité, il existe une gamme de trajectoires. Les pays qui ont le mieux redistribué (Scandinavie) ont des finances publiques équilibrées : redistribution forte et sérieux budgétaire ne sont pas antinomiques, ils sont historiquement corrélés.",
      severity: "medium"
    },
    {
      claim: "« Le peuple contre l'oligarchie » — toute institution ou expertise critique est assimilée au camp de l'oligarchie",
      fallacy_type: "ad hominem circonstanciel / raisonnement immunisé",
      why_fallacious: "Le cadre populiste (au sens de Laclau, explicitement revendiqué par Mélenchon) rend la thèse infalsifiable : si le COR, la Cour des comptes ou un économiste critique le chiffrage, c'est la preuve qu'ils servent l'oligarchie. La critique devient confirmation. C'est une immunisation épistémique, pas un argument.",
      correction: "Distinguer les critiques par leur contenu, pas leur émetteur. La Cour des comptes critique aussi les cadeaux fiscaux aux entreprises et les niches des plus aisés — la grille 'oligarchie' ne prédit pas ses positions. Un chiffrage se conteste par un contre-chiffrage.",
      severity: "high"
    },
    {
      claim: "« Le multiplicateur budgétaire rendra la relance largement autofinancée »",
      fallacy_type: "cherry-picking d'hypothèses",
      why_fallacious: "Retient systématiquement les valeurs hautes du multiplicateur (>1,3, valables en récession profonde avec taux zéro) pour une économie proche du plein emploi de ses capacités avec inflation résiduelle et taux positifs — configuration où la littérature situe le multiplicateur nettement plus bas (0,5-0,9), voire avec éviction.",
      correction: "Le multiplicateur dépend du cycle : élevé en récession/trappe à liquidité, faible en haut de cycle et en économie ouverte (fuite par les importations ~30% en France). Un chiffrage honnête présente les deux scénarios ; l'autofinancement partiel est plausible, l'autofinancement large ne l'est pas hors récession.",
      severity: "medium"
    },
    {
      claim: "« La purge n'existe pas, c'est le mouvement qui se renouvelle » — déni du verrouillage interne",
      fallacy_type: "novlangue / redéfinition ad hoc",
      why_fallacious: "Requalifie l'éviction ciblée des cadres dissidents (Garrido, Corbière écartés des investitures 2024 après leurs critiques ; Simonnet, Autain marginalisées) en 'principe de rotation' ou 'renouvellement', alors que la rotation n'a frappé que les critiques et jamais les loyaux. L'explication avancée ne prédit pas le pattern observé.",
      correction: "Le test empirique est simple : si c'était de la rotation, la probabilité d'être écarté serait indépendante de la loyauté. Or elle est corrélée à la dissidence (constat documenté par les intéressés et la presse, y compris à gauche — Regards, Politis). Un mouvement peut assumer une ligne verticale ; il ne peut pas la nier tout en promettant la 6e République délibérative.",
      severity: "medium"
    },
    {
      claim: "« L'OTAN est responsable de la guerre en Ukraine autant que la Russie » (ambiguïtés répétées sur les 'co-belligérances')",
      fallacy_type: "fausse équivalence",
      why_fallacious: "Met sur le même plan une politique d'élargissement contestable (fait débattu) et une invasion militaire à grande échelle (fait établi, crime d'agression au sens du droit international). L'existence de torts partagés en amont n'établit pas d'équivalence des responsabilités dans le déclenchement.",
      correction: "On peut critiquer l'élargissement de l'OTAN (débat stratégique réel, positions de Kennan ou Mearsheimer) sans diluer la responsabilité juridique et morale de l'agression, qui incombe à la Russie. Le non-alignement gagnerait en crédibilité en étant net sur ce point.",
      severity: "high"
    }
  ],

  data_issues: [
    {
      claim: "Le programme coûte 250 Md€ de dépenses nouvelles, intégralement financées par 267 Md€ de recettes (chiffrage candidat 2022, base du programme actualisé)",
      problem: "contesté / recettes surévaluées",
      reality: "L'Institut Montaigne comptabilisait ~320 Md€ de dépenses (dont une erreur reconnue de 24 Md€ sur les retraites, corrigée) et écartait une partie des recettes 'dont la matérialisation est trop incertaine'. L'écart résiduel réel entre chiffrage candidat et chiffrages externes reste de plusieurs dizaines de Md€, essentiellement côté recettes comportementales.",
      source: "Institut Montaigne, chiffrage présidentielle 2022 ; IFRAP ; Public Sénat sur le débat NUPES 2022"
    },
    {
      claim: "« La police tue » (formule récurrente de Mélenchon et de cadres LFI depuis 2020, réactivée à chaque affaire)",
      problem: "sorti de contexte / généralisation d'un chiffre réel",
      reality: "Les décès liés aux interventions policières existent et ont augmenté sur les refus d'obtempérer (record de 13 décès en 2022 après tir sur refus d'obtempérer, selon les recensements presse/chercheurs), mais la formule généralisante transforme des cas — dont certains jugés illégitimes par la justice — en caractérisation d'institution. Les comparaisons internationales (États-Unis ~1000 morts/an) sont d'un autre ordre de grandeur.",
      source: "Les Décodeurs (Le Monde), recensements 2022-2023 ; IGPN rapports annuels ; CheckNews (Libération)"
    },
    {
      claim: "« 12 millions de pauvres en France » (chiffre utilisé dans la communication LFI)",
      problem: "exagéré / dépend du seuil retenu",
      reality: "Au seuil standard de 60% du revenu médian, la France compte ~9,1 millions de pauvres (14,4% — INSEE 2021-2022, stable en tendance). Le chiffre de 11-12 millions agrège des seuils ou indicateurs différents (privation matérielle, seuil à 70%). La pauvreté française est par ailleurs parmi les plus faibles d'Europe APRÈS redistribution — ce que le discours omet symétriquement.",
      source: "INSEE, Revenus et patrimoine des ménages ; Observatoire des inégalités (qui utilise le seuil à 50% : ~5,3 millions)"
    },
    {
      claim: "« Les milliardaires français ont doublé leur fortune pendant le Covid » / « 100 Md€ de dividendes records prouvent que l'argent existe »",
      problem: "sorti de contexte",
      reality: "La hausse des fortunes boursières 2020-2021 est réelle (valorisations d'actifs) mais il s'agit de plus-values latentes, pas de revenus disponibles taxables au sens de l'IR ; les dividendes du CAC40 (~70-100 Md€ selon années, Janus Henderson/Vernimmen) sont versés pour ~40% à des actionnaires étrangers et déjà soumis au PFU. L'ordre de grandeur mobilisable par la taxation est très inférieur au stock cité.",
      source: "AFP Factuel sur les fortunes Covid ; Vernimmen/La Lettre ; rapport IPP 2023 sur l'imposition des milliardaires"
    },
    {
      claim: "« Le nucléaire est l'énergie la plus chère » (argumentaire sortie du nucléaire)",
      problem: "cherry-picking entre parc existant et nouveau nucléaire",
      reality: "Vrai pour le NOUVEAU nucléaire type Flamanville 3 (coût complet 19,1 Md€, Cour des comptes 2020 ; LCOE élevé), faux pour le parc EXISTANT amorti (~50-60€/MWh coût complet ARENH+, parmi les plus bas d'Europe). Les scénarios RTE 2050 chiffrent le 100% EnR PLUS cher en coût système complet que les mix avec nucléaire prolongé.",
      source: "Cour des comptes 2020 (Flamanville) ; RTE, Futurs énergétiques 2050 (2021-2022) ; CRE"
    },
    {
      claim: "« La retraite à 60 ans coûte 25 Md€ et est financée » (chiffrage LFI)",
      problem: "sous-estimé selon les chiffrages externes",
      reality: "Les chiffrages externes (Institut Montaigne corrigé, IFRAP, extrapolations COR) situent le coût brut entre 30 et 85 Md€/an selon les hypothèses de comportement de départ et de bonification. Le financement LFI suppose la réalisation simultanée de la hausse des cotisations, de l'égalité salariale H/F et des créations d'emploi de la relance — hypothèses jointes dont la probabilité conjointe est faible.",
      source: "Institut Montaigne 2022 ; COR, rapports annuels ; IFRAP"
    }
  ],

  problematic_arguments: [
    {
      argument: "« L'Union européenne nous impose l'austérité, désobéir suffit à libérer les marges budgétaires »",
      why_problematic: "Confond la contrainte juridique (règles budgétaires UE, effectivement critiquables et souvent contournées) avec la contrainte économique (besoin d'emprunter ~300 Md€/an sur les marchés). Supprimer la première ne supprime pas la seconde.",
      what_it_hides: "Que le vrai créancier n'est pas Bruxelles mais les détenteurs de dette ; qu'un conflit ouvert avec l'UE renchérit précisément le financement dont le programme a besoin ; et que l'option cohérente (contrôle des capitaux, financement monétaire) n'est jamais assumée devant les électeurs."
    },
    {
      argument: "« Nous avons fait 22% en 2022, nous sommes la force centrale, l'union doit se faire derrière nous »",
      why_problematic: "Utilise un score vieux de 5 ans comme titre de propriété sur la gauche, alors que la dynamique 2024-2026 (départs de Ruffin/Autain, refus de la primaire, rejet record dans l'opinion générale) montre un plafond de verre : premier à gauche (~13-16%) mais avec le taux de rejet le plus élevé du paysage, donc structurellement faible au second tour.",
      what_it_hides: "Que la stratégie maximise la position de LFI dans la gauche plutôt que la probabilité de victoire de la gauche ; le refus de la primaire du 11 octobre 2026 est cohérent avec la première, pas avec la seconde."
    },
    {
      argument: "« La violence sociale du système justifie la radicalité du ton » (conflictualisation permanente, 'la République c'est moi', outrances assumées)",
      why_problematic: "La conflictualisation comme méthode ('le bruit et la fureur') érode la frontière entre radicalité programmatique légitime et transgression institutionnelle (perquisition 2018, sorties sur les journalistes, les juges, la police). Elle offre à ses adversaires le motif de disqualification que le programme ne mérite pas toujours.",
      what_it_hides: "Que le rejet personnel de Mélenchon (records d'impopularité dans les baromètres) est devenu le principal obstacle à son propre programme : les mesures testées séparément (SMIC, retraite, taxation du capital) sondent souvent majoritaires, le porteur non."
    },
    {
      argument: "« Créolisation, non-alignement : nous parlons au monde réel, pas à l'Occident déclinant »",
      why_problematic: "Le positionnement international mélange une intuition juste (le monde se dé-occidentalise, la France doit parler au Sud) avec des complaisances datées envers des régimes autoritaires (Venezuela hier, ambiguïtés Russie/Chine) qui contredisent l'universalisme des droits revendiqué par ailleurs.",
      what_it_hides: "L'absence de doctrine claire sur ce que ferait concrètement la France insoumise face à une agression d'un État membre de l'UE ou à Taïwan : le non-alignement fonctionne comme un évitement des cas difficiles."
    },
    {
      argument: "« Un seul candidat possible, pas de primaire : la clarté » ",
      why_problematic: "Présente comme clarté démocratique ce qui est une désignation sans vote ouvert (les élus LFI réunis en mai 2026 ont 'désigné' un candidat unique jamais mis en concurrence interne depuis 2016).",
      what_it_hides: "Le paradoxe fondateur du mouvement : promettre le RIC, la révocabilité et la Constituante au pays, et ne pratiquer ni élection interne contestable, ni congrès délibératif, ni comptes certifiés d'adhérents dans sa propre organisation."
    }
  ],

  strong_ideas: [
    {
      idea: "La planification écologique comme fonction d'État centralisée",
      why_strong: "Idée LFI 2017-2022 devenue consensus opérationnel : Macron a créé le Secrétariat général à la planification écologique (2022) en reprenant explicitement le concept. La décarbonation exige bien de la coordination intertemporelle longue (réseaux, filières, formation) que le marché seul ne produit pas — c'est confirmé par toutes les revues (RTE, France Stratégie).",
      adoptable_by: "Déjà adopté par le centre ; la droite peut la reprendre en version 'planification de l'offre énergétique et industrielle' (nucléaire inclus). Le point dur restant : lui donner des moyens budgétaires pluriannuels sanctuarisés."
    },
    {
      idea: "Taxation renforcée des très hautes successions et taux effectif minimal sur les ultra-riches",
      why_strong: "Convergence rare : rapport Blanchard-Tirole (2021), CAE, travaux IPP (taux effectif régressif au sommet : ~26% pour les milliardaires) et l'initiative internationale G20/Zucman. La France taxe lourdement les successions moyennes et faiblement les très grosses via assurance-vie, démembrement et pacte Dutreil : corriger cette régressivité est défendable à droite comme à gauche au nom de la méritocratie.",
      adoptable_by: "Centre et droite libérale au nom de l'égalité des chances (préférer taxer l'héritage que le travail) — en échange d'une baisse de la fiscalité sur les successions moyennes, ce que LFI ne propose pas mais qui rendrait la réforme majoritaire."
    },
    {
      idea: "Garantie d'emploi territorialisée (extension de Territoires zéro chômeur)",
      why_strong: "Expérimentation française évaluée, votée deux fois à la quasi-unanimité (2016, 2020), résultats humains et locaux solides. Le principe 'activer les dépenses passives du chômage' est économiquement orthodoxe.",
      adoptable_by: "Tous les blocs — la droite sociale peut la porter en version 'devoirs et activité' ; le centre l'a déjà étendue. La condition : montée en charge progressive et évaluation, pas de généralisation décrétée."
    },
    {
      idea: "Pôle public du médicament et stocks stratégiques sanitaires",
      why_strong: "Les pénuries de médicaments (5000 signalements ANSM 2023-2024) sont un fait ; la souveraineté sanitaire est devenue consensuelle post-Covid. La licence d'office existe déjà en droit. Version ciblée : coût modéré, bénéfice de résilience élevé.",
      adoptable_by: "Droite souverainiste (relocalisation industrielle) et centre (résilience) — en version 'façonnage public ou contractualisé des molécules critiques' plutôt que nationalisation du secteur."
    },
    {
      idea: "Allocation d'autonomie / droits sociaux propres pour les 18-25 ans",
      why_strong: "L'exclusion des moins de 25 ans du RSA est une singularité française sans justification robuste ; la précarité étudiante est documentée. Même des rapports non partisans (CESE) recommandent l'ouverture de droits propres.",
      adoptable_by: "Centre-gauche et centre en version 'revenu d'engagement' conditionné à la formation ou l'activité — le principe (droits détachés du foyer parental) survit à la négociation sur les conditions."
    }
  ],

  electorate: "Électorat le plus jeune du paysage politique : très fort chez les 18-34 ans, les étudiants, les habitants des quartiers populaires des grandes métropoles et leurs banlieues (scores >40% dans le 93 en 2022), les diplômés précarisés du secteur public et associatif, et l'électorat musulman (report massif en 2022). Faible chez les retraités, les ruraux et les indépendants. Géographie métropolitaine et ultramarine (scores très élevés aux Antilles et à La Réunion en 2022), en miroir inversé du RN.",

  key_quotes: [
    {
      text: "Oui, je suis candidat.",
      context: "Officialisation de sa 4e candidature présidentielle, JT de 20h de TF1",
      source: "TF1 / franceinfo, 3 mai 2026"
    },
    {
      text: "Nous c'est carré, il y a une équipe, un programme et un seul candidat.",
      context: "Réunion des élus LFI à Paris désignant le candidat, en réponse aux appels à la primaire de la gauche",
      source: "LCP / franceinfo, mai 2026"
    },
    {
      text: "La République, c'est moi !",
      context: "Perquisition au siège de LFI — épisode devenu emblématique du rapport de Mélenchon aux institutions",
      source: "Vidéo, octobre 2018 (large couverture médias)",
    },
    {
      text: "Ne pas prendre à la nature plus que ce qu'elle peut reconstituer : c'est la règle verte.",
      context: "Présentation de L'Avenir en commun, colonne vertébrale écologique du programme",
      source: "L'Avenir en commun (programme, éditions successives 2016-2024), melenchon2027.fr"
    },
    {
      text: "Faites mieux !",
      context: "Soirée électorale du 1er tour 2022 — passage de témoin revendiqué à la génération suivante… avant de se représenter en 2026",
      source: "Discours du 10 avril 2022 (archives médias)"
    }
  ],

  sources: [
    "https://melenchon2027.fr/ (site de campagne, programme)",
    "https://www.franceinfo.fr/politique/melenchon/jean-luc-melenchon-invite-du-20-heures-de-tf1-dimanche-doit-officialiser-sa-candidature-pour-la-presidentielle-2027_7980578.html",
    "https://lcp.fr/actualites/presidentielle-jean-luc-melenchon-officialise-sa-candidature-pour-2027-435851",
    "https://melenchon2027.fr/programme2025/livre/ (L'Avenir en commun actualisé)",
    "https://www.institutmontaigne.org/presidentielle-2022/jean-luc-melenchon/synthese/ (chiffrage 2022)",
    "https://www.ifrap.org/budget-et-fiscalite/chiffrage-du-programme-de-jean-luc-melenchon",
    "https://www.publicsenat.fr/actualites/politique/face-aux-critiques-la-nupes-defend-la-credibilite-de-son-programme-economique",
    "https://www.publicsenat.fr/actualites/politique/sondage-presidentielle-2027-jean-luc-melenchon-reprend-le-leadership-a-gauche-mais-reste-rejete-par-lensemble-des-francais",
    "https://fr.wikipedia.org/wiki/Primaire_de_la_gauche_unitaire_de_2026 (refus de la primaire)",
    "https://regards.fr/comprendre-la-purge-lfi-daniele-simonnet/ (fonctionnement interne, critique de gauche)",
    "RTE, Futurs énergétiques 2050 ; Cour des comptes (Flamanville 2020, bouclier tarifaire 2024) ; INSEE ; COR ; rapport Blanchard-Tirole 2021 ; IPP 2023"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["lfi-2027"] = CONTENT_ELECTIONS_LFI_2027;
