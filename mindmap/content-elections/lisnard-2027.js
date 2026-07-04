// NOTE : ce fichier remplace « udr-ciotti-2027 ». Au 4 juillet 2026, l'UDR d'Éric Ciotti
// n'est PAS une offre présidentielle autonome : Ciotti, élu maire de Nice en mars 2026
// avec l'appui du RN, soutient le candidat RN (Le Pen ou Bardella) — son cas est traité
// dans rn-2027.js (status_note, key_quotes). La 4e offre pertinente à droite est
// David Lisnard (Nouvelle Énergie), candidat déclaré depuis le 31 mars 2026 après
// avoir quitté LR. Philippe de Villiers, envisagé un temps, n'est pas candidat
// (pétitions de sympathisants uniquement, démentis répétés).

const CONTENT_ELECTIONS_lisnard_2027 = {
  id: "lisnard-2027",
  name: "David Lisnard",
  party: "Nouvelle Énergie",
  bloc: "droite",
  spectrum: 5.5,
  status: "déclaré",
  status_note: "Au 4 juillet 2026 : maire de Cannes (depuis 2014, réélu), président de l'Association des maires de France, Lisnard a quitté Les Républicains le 31 mars 2026 (« Je suis candidat ») après le refus d'une primaire de la droite, et se présente sous les couleurs de Nouvelle Énergie, le mouvement qu'il a fondé en 2021. Positionnement : droite libérale-régalienne (« libéral, sécuritaire, éducatif et scientifique »). Sondages : bas single digits (~2-4%), question des 500 parrainages a priori soluble via son réseau AMF. Sa candidature fragmente encore l'espace LR-Philippe.",
  color: "#334155",

  thesis: "La France ne souffre pas d'un manque de moyens mais d'un excès d'État bureaucratique : dépense publique record (57% du PIB) pour des services publics dégradés — « l'État est drogué à la dépense publique ». La solution est une révolution de l'efficacité : réduction massive des dépenses et des normes, décentralisation radicale vers les communes et des « provinces », hausse du salaire net par baisse des cotisations, école exigeante et régalien restauré. La subsidiarité comme doctrine : que l'État fasse peu et bien, que le local fasse le reste, que la liberté fasse le principal.",
  counter_thesis: "Steelman adverse : Lisnard extrapole la gestion d'une ville riche et touristique de 75 000 habitants (Cannes, base fiscale exceptionnelle) à un pays de 68 millions — l'analogie ne survit pas au changement d'échelle ni à la sociologie (Cannes n'a ni la Seine-Saint-Denis ni la désindustrialisation). Son plan (-80 Md€ dès la première année, -200 sur le quinquennat) est macroéconomiquement récessif à court terme et politiquement irréalisable : aucune démocratie n'a coupé 3 points de PIB en un an hors tutelle de la troïka, et les postes réels (retraites, santé) sont ceux que son électorat refuse de voir touchés. Enfin, sa candidature sans parti de masse, sans groupe parlementaire et sous 5% ne pèse que comme fragmentation supplémentaire d'une droite déjà éclatée — un programme de think tank porté par une ambition municipale.",

  program_pillars: [
    "Réduction massive de la dépense publique : ~80 Md€ la 1re année, ~200 Md€ sur le quinquennat",
    "Choc de déréglementation et suppression/fusion des agences de l'État",
    "Décentralisation radicale : subsidiarité, fusion départements-régions en « provinces », pouvoir communal renforcé",
    "Travail : hausse du salaire net par baisse des cotisations — « cotiser moins pour gagner plus »",
    "École des savoirs fondamentaux et autonomie des établissements ; recherche et nucléaire",
    "Régalien ferme : justice exécutée, immigration maîtrisée par quotas, laïcité"
  ],

  proposals: [
    {
      title: "Plan d'économies : 80 Md€ dès la première année, 200 Md€ sur le quinquennat",
      domain: "économie",
      detail: "Réduction de la dépense publique par suppression d'agences et d'opérateurs (il cite 1 153 organismes, ~450 000 agents, ~100 Md€), non-remplacement de fonctionnaires administratifs, revue générale des missions, suppression des doublons État/collectivités, conditionnalité des aides ; il évoque même 300 Md€ comme cible « appropriée ».",
      pros: [
        "Le diagnostic de fond est exact et documenté : la France a le ratio dépenses/PIB le plus élevé de l'OCDE pour des services publics en dégradation mesurable (PISA, urgences, justice) — le problème d'efficacité est réel, pas idéologique",
        "Il est l'un des seuls à assumer un chiffrage AVANT l'élection, s'exposant à la critique — plus honnête que le flou concurrent",
        "Sa crédibilité gestionnaire est réelle : Cannes désendettée avec services maintenus, notation et audits favorables ; il parle d'expérience exécutive, pas de doctrine"
      ],
      cons: [
        "80 Md€ en un an ≈ 2,7 points de PIB : choc récessif majeur (multiplicateurs budgétaires ~0,8-1,5 en bas de cycle) qui détruirait une partie des recettes attendues — aucun précédent démocratique hors programmes d'ajustement imposés (Grèce)",
        "Le gisement « agences » réel est de l'ordre de 2-3 Md€/an (Sénat 2025), pas de 100 : l'écart entre le stock cité (budgets totaux, qui financent universités, France Travail, ARS) et l'économie réalisable est d'un facteur 30",
        "La liste des vrais perdants (quelles missions supprimées, quels territoires, quels usagers) n'est pas plus publiée que chez Retailleau",
        "Sans majorité parlementaire — Nouvelle Énergie n'a aucun député — le plan est inapplicable"
      ],
      plausibility: 3,
      plausibility_note: "Juridiquement trivial (lois de finances), macroéconomiquement et politiquement hors d'atteinte à ce rythme. Une trajectoire -20 Md€/an tenue 5 ans serait déjà historique. Le 80-la-première-année relève du signal de radicalité.",
      cost_estimate: "Économies annoncées : 80 Md€ (an 1) → 200 Md€ (quinquennat), jusqu'à 300 Md€ évoqués (Nouvelle Énergie / JDD) ; contre-référence : rapport Sénat 2025 sur les agences (~2-3 Md€/an réalistes), précédents RGPP/CAP22 (5-10 Md€ au total)."
    },
    {
      title: "Suppression et fusion massives des agences et opérateurs de l'État",
      domain: "institutions",
      detail: "Revue systématique des ~450 opérateurs et centaines d'organismes para-administratifs : suppression de ceux sans valeur ajoutée mesurée, fusion des redondants, réinternalisation dans les ministères ou transfert aux collectivités, avec évaluation publique des résultats.",
      pros: [
        "Consensus technocratique croissant : Cour des comptes, IGF et commission d'enquête sénatoriale 2025 documentent l'opacité et les doublons du « démembrement » de l'État",
        "La méthode proposée (évaluation, indicateurs de résultat) est celle qui manque réellement à la gestion publique française",
        "Pédagogiquement puissant : rendre visible la strate para-administrative que personne ne pilote"
      ],
      cons: [
        "L'essentiel des budgets d'agences EST de la politique publique (recherche, emploi, santé) : supprimer l'agence ne supprime pas le besoin, juste l'opérateur",
        "Les fusions coûtent avant de rapporter (précédents : régions 2015, dont les économies promises ne sont jamais venues — Cour des comptes)",
        "Résistances corporatives et parlementaires massives : chaque agence a ses élus, ses syndicats, son territoire"
      ],
      plausibility: 6,
      plausibility_note: "Faisable par lois et décrets avec une majorité ; le réalisme porte sur l'ampleur des gains (unités de Md€) et le calendrier (5-10 ans), pas sur le principe.",
      cost_estimate: "Gains réalistes : 2-5 Md€/an à horizon quinquennat (Sénat 2025, IGF) — utile mais sans commune mesure avec les 100 Md€ du stock cité."
    },
    {
      title: "Décentralisation radicale : fusion départements-régions en « provinces », subsidiarité constitutionnelle",
      domain: "institutions",
      detail: "Réorganisation territoriale : remplacement du mille-feuille départements+régions par des « provinces », clause de compétence claire par niveau, autonomie fiscale locale restaurée, transfert de blocs entiers de politiques (logement, formation, une partie de l'emploi) aux communes et provinces, inscription de la subsidiarité dans la Constitution.",
      pros: [
        "Diagnostic solide : la France est l'un des pays les plus centralisés de l'OCDE, et la corrélation entre autonomie locale et efficacité des services est documentée (modèles suisse, nordique, allemand)",
        "Il connaît le sujet mieux que quiconque : président de l'AMF, praticien du bloc communal — crédibilité sectorielle maximale",
        "L'autonomie fiscale locale (détruite par la suppression de la taxe d'habitation) est réclamée par tous les élus locaux, tous partis confondus",
        "La simplification du mille-feuille est plébiscitée par l'opinion depuis 20 ans"
      ],
      cons: [
        "Réforme constitutionnelle et institutionnelle lourde : la fusion départements-régions a été tentée (2010, conseiller territorial, abrogée avant d'exister) et coûte politiquement énorme pour des gains lointains",
        "Risque d'inégalités territoriales accrues : la décentralisation sans péréquation puissante favorise les territoires riches (comme... Cannes) — l'angle mort de son discours",
        "Les précédents de fusions (grandes régions 2015) n'ont produit AUCUNE économie nette documentée (Cour des comptes) : l'argument budgétaire de la réforme est faible",
        "Transférer l'emploi et le logement suppose des administrations locales compétentes qui n'existent pas partout"
      ],
      plausibility: 4,
      plausibility_note: "Exige une révision constitutionnelle (art. 89) + une loi organique + des années de transition. Une décentralisation incrémentale (autonomie fiscale, différenciation) est plausible ; les « provinces » sont un horizon de second mandat au mieux.",
      cost_estimate: "Coûts de transition non chiffrés ; les fusions régionales 2015 ont coûté plus qu'elles n'ont rapporté (Cour des comptes 2019) — le chiffrage honnête de la réforme reste à produire."
    },
    {
      title: "« Cotiser moins pour gagner plus » : hausse du salaire net par baisse des cotisations salariales",
      domain: "économie",
      detail: "Basculer une partie du financement de la protection sociale des cotisations (salariales d'abord) vers d'autres assiettes et vers des économies, pour augmenter immédiatement le net sans alourdir le coût employeur ; distinction assurantiel (cotisations) / universel (impôt).",
      pros: [
        "S'attaque au vrai nœud français : l'écart brut/net le plus élevé d'Europe avec l'écart coût employeur/net — diagnostic partagé de Rexecode à la CFDT",
        "Techniquement praticable : précédent réussi de la bascule cotisations→CSG de 2018 (+1,7 pt CSG contre -3,15 pts de cotisations salariales)",
        "Clarifie philosophiquement le système : l'assurantiel financé par le travail, la solidarité par l'impôt — ligne défendue par de nombreux économistes"
      ],
      cons: [
        "« Moins cotiser » = moins de recettes pour la Sécu : sans dire quelle assiette compense (TVA sociale ? CSG ? coupes ?), la promesse est un chèque en blanc — et chaque option a des perdants (consommateurs, retraités, assurés)",
        "La TVA sociale est régressive (frappe la consommation des modestes) ; la CSG frappe les retraités — son électorat",
        "Risque de décrochage des droits contributifs (retraites, chômage) si les cotisations baissent durablement"
      ],
      plausibility: 6,
      plausibility_note: "Faisable par LFSS avec majorité (précédent 2018). L'enjeu est distributif : qui paie la bascule. Score 6 pour une version partielle (5-15 Md€) ; une bascule massive serait un big-bang social.",
      cost_estimate: "Chaque point de cotisation salariale ≈ 6-7 Md€ ; la version Lisnard n'est pas calibrée publiquement à ce stade."
    },
    {
      title: "Choc de simplification normative et liberté d'entreprendre",
      domain: "économie",
      detail: "Moratoire normatif (« une norme créée = deux supprimées »), simplification drastique du droit du travail pour les TPE-PME, permis de construire accélérés, silence de l'administration vaut accord généralisé, stabilité fiscale garantie sur 5 ans.",
      pros: [
        "Le coût de la complexité est documenté : ~3-4% de PIB selon l'OCDE pour la charge administrative française ; 400 000+ normes ; le rapport « rendez-nous la liberté d'entreprendre » du Sénat converge",
        "La stabilité fiscale quinquennale est une demande unanime des investisseurs, jamais tenue par aucun gouvernement",
        "L'expérience municipale de dématérialisation/simplification à Cannes lui donne des cas concrets"
      ],
      cons: [
        "Promis par tous les gouvernements depuis Balladur : les « chocs de simplification » (Hollande 2013, lois PACTE, ESSOC) accouchent de gains marginaux car chaque norme a un bénéficiaire et un risque couvert",
        "La déréglementation du travail a des effets ambigus documentés : flexibilité accrue mais précarisation aux marges",
        "Une partie des normes est européenne : le levier national est limité sans bataille à Bruxelles"
      ],
      plausibility: 6,
      plausibility_note: "Faisable en droit ; la difficulté est l'exécution dans la durée contre la machine à produire de la norme (Parlement compris). Réaliste en version ciblée (logement, TPE), incantatoire en version totale.",
      cost_estimate: "Gains potentiels élevés mais diffus (OCDE : plusieurs points de PIB à long terme) ; aucun chiffrage propre publié par Nouvelle Énergie."
    },
    {
      title: "École : savoirs fondamentaux, autonomie des établissements, revalorisation par le mérite",
      domain: "éducation",
      detail: "Recentrage du primaire sur lire-écrire-compter, autonomie de recrutement et de projet pour les chefs d'établissement, paie des enseignants liée aux responsabilités et à l'engagement, uniforme laissé au choix local, filières d'excellence et manuelles revalorisées.",
      pros: [
        "L'effondrement français dans PISA et TIMSS (maths surtout) est objectif et transpartisan ; le recentrage fondamentaux a des bases scientifiques (sciences cognitives, rapport Villani-Torossian)",
        "L'autonomie des établissements est corrélée aux performances dans les comparaisons OCDE (avec accountability) — c'est le modèle des pays qui montent",
        "Position cohérente avec sa doctrine subsidiarité : l'école gérée au plus près, l'État garant des programmes et de l'évaluation"
      ],
      cons: [
        "L'autonomie sans moyens ni vivier de direction formé peut accroître les inégalités entre établissements (effet documenté en Angleterre avec les academies : résultats hétérogènes)",
        "La paie au mérite enseignant a des évaluations internationales décevantes (effets faibles, effets pervers de bachotage)",
        "Face au mur démographique enseignant (crise du recrutement), la réforme gestionnaire ne répond pas à l'attractivité salariale de base — coûteuse (~2-4 Md€ pour converger vers la moyenne OCDE)"
      ],
      plausibility: 6,
      plausibility_note: "Réformes législatives et réglementaires classiques ; résistance syndicale forte mais précédents (Blanquer) montrent que c'est jouable partiellement. Le verrou est le financement de l'attractivité.",
      cost_estimate: "Revalorisations ciblées : 2-4 Md€/an ; non consolidé dans le plan d'économies global (tension interne du programme)."
    },
    {
      title: "Immigration : quotas annuels votés par le Parlement, fermeté d'exécution, assimilation",
      domain: "immigration",
      detail: "Quotas quantitatifs par filière votés chaque année par le Parlement, exécution stricte des OQTF, réduction du regroupement familial, conditionnalité de l'aide au développement aux laissez-passer, assimilation exigeante (langue, valeurs) — sans priorité nationale ni remise en cause du droit du sol.",
      pros: [
        "Position médiane argumentée : maîtrise quantitative SANS rupture constitutionnelle ni discrimination — la seule offre de droite compatible avec l'ordre juridique existant",
        "Le vote parlementaire annuel des quotas (modèle canadien/australien) créerait la délibération démocratique manquante identifiée par tous",
        "Cohérente avec sa doctrine : l'État régalien fort sur peu de missions"
      ],
      cons: [
        "Les quotas ne s'appliquent juridiquement qu'à l'immigration économique (~15% des flux) : asile et famille restent conventionnels — l'outil couvre une minorité du sujet",
        "Moins-disant électoral face à Retailleau/RN sur un thème où la surenchère domine : inaudible dans la compétition à droite",
        "Peu détaillé à ce stade (le cœur de son programme est économique) : zone d'ombre sur les chiffres cibles"
      ],
      plausibility: 7,
      plausibility_note: "Version la plus applicable du spectre droite : loi ordinaire pour les quotas économiques, leviers diplomatiques éprouvés pour l'exécution. Limite structurelle : ne « règle » pas les flux conventionnels.",
      cost_estimate: "Non chiffré ; coûts d'exécution des éloignements en hausse si fermeté réelle (Cour des comptes)."
    },
    {
      title: "Régalien : justice dotée, peines exécutées, police recentrée sur la voie publique",
      domain: "sécurité",
      detail: "Augmentation du budget justice (rattrapage européen), exécution systématique des courtes peines, places de prison, décharge des policiers des tâches administratives, continuum sécurité avec polices municipales renforcées (son terrain d'expertise à Cannes : vidéoprotection, CSU pionnier).",
      pros: [
        "La justice française est objectivement sous-dotée (CEPEJ : ~2/3 de la moyenne européenne en juges et procureurs par habitant) : le rattrapage est un investissement rationnel",
        "L'expertise polices municipales est réelle : Cannes est une référence nationale (CSU, coordination) — il parle métier",
        "Le continuum police nationale/municipale est la direction prise par toutes les majorités depuis 2017 : consensuel et documenté"
      ],
      cons: [
        "Budget justice et prisons en hausse + régalien renforcé : encore des dépenses nouvelles dans un programme de coupes — l'arbitrage global n'est pas montré",
        "Le transfert de charges vers les polices municipales creuse les inégalités entre communes riches (Cannes : 1 policier municipal record) et pauvres",
        "Rien de très distinctif : tout le monde promet des moyens à la justice depuis les états généraux 2022"
      ],
      plausibility: 7,
      plausibility_note: "Trajectoire budgétaire justice déjà votée (loi de programmation 2023-2027) : la poursuite est crédible. Les prisons butent sur le foncier et les délais comme pour tous.",
      cost_estimate: "Poursuite du rattrapage justice : +1-2 Md€/an ; plan prisons : voir LR (6-8 Md€ pour 20 000 places, mêmes contraintes)."
    },
    {
      title: "Énergie : nucléaire massif + recherche, sortie de la « décroissance punitive »",
      domain: "écologie",
      detail: "Accélération EPR2 et SMR, réinvestissement dans la recherche (fusion, cycle fermé), simplification des procédures d'implantation, écologie « scientifique » fondée sur l'innovation plutôt que la contrainte d'usage, adaptation assumée (eau, littoral — sujet cannois).",
      pros: [
        "Cohérence avec le consensus RTE/GIEC sur le nucléaire décarboné ; l'angle « recherche » (fusion, SMR) est plus étoffé que chez les concurrents de droite",
        "Il intègre l'ADAPTATION (littoral, eau, risques — vécu de maire méditerranéen après les inondations de 2015 à Cannes) : rare à droite",
        "L'écologie par l'innovation a des succès réels (coûts solaire/batteries, nucléaire français historique)"
      ],
      cons: [
        "Même impasse temporelle que Retailleau : les EPR2 arrivent en 2038+, la décennie critique 2025-2035 exige sobriété et renouvelables que le discours dévalorise",
        "« Écologie scientifique » sans objectif d'émissions chiffré ni prix du carbone assumé reste un cadre rhétorique",
        "Le financement du programme nucléaire (~70-100 Md€) s'ajoute aux baisses d'impôts et aux hausses régaliennes : l'équation budgétaire globale du projet n'est jamais consolidée"
      ],
      plausibility: 6,
      plausibility_note: "Continuité de la relance nucléaire en cours ; la crédibilité dépend du bouclage financier EDF/État et de la tenue des délais (Flamanville : 12 ans de retard).",
      cost_estimate: "Programme EPR2 : 67-80 Md€ (EDF 2025) ; effort recherche additionnel non chiffré."
    },
    {
      title: "Institutions : réduction du nombre de parlementaires, dose de démocratie directe locale, évaluation systématique des politiques publiques",
      domain: "institutions",
      detail: "Parlement resserré et renforcé dans l'évaluation, référendums locaux facilités, obligation d'étude d'impact réelle et d'évaluation ex post pour chaque loi, sunset clauses sur les dispositifs coûteux.",
      pros: [
        "La culture d'évaluation est LE chaînon manquant français documenté (France Stratégie, Cour des comptes) : proposition de méthode plus que d'idéologie, rare dans la campagne",
        "Les sunset clauses et évaluations ex post fonctionnent ailleurs (Royaume-Uni, Pays-Bas)",
        "Référendums locaux : cohérent avec la subsidiarité, précédents suisses probants"
      ],
      cons: [
        "Réduire les parlementaires (réforme constitutionnelle) affaiblirait la représentation des territoires ruraux — en tension avec son discours localiste",
        "L'évaluation est une culture, pas un décret : sans sanction politique des évaluations négatives, elle reste décorative",
        "Programme institutionnel secondaire dans sa communication : profondeur inconnue"
      ],
      plausibility: 5,
      plausibility_note: "Évaluation et sunset clauses : faisables par loi organique/pratique gouvernementale. Réduction des parlementaires : art. 89, déjà échoué sous Macron (2018-2019).",
      cost_estimate: "Marginal budgétairement ; gains d'efficacité potentiels réels mais non quantifiables ex ante."
    }
  ],

  fallacies: [
    {
      claim: "« J'ai redressé Cannes, je redresserai la France » (l'argument gestionnaire central)",
      fallacy_type: "fausse analogie / erreur de composition",
      why_fallacious: "Transpose la gestion d'une commune riche (base fiscale touristique exceptionnelle, ~75 000 habitants, compétences limitées, pas de politique monétaire ni sociale) à un État-providence de 68 millions d'habitants avec retraites, santé et dette. Une commune n'a ni assurance chômage ni Sécurité sociale : les postes qui font les 57% de PIB n'existent pas dans son bilan de maire. Ce qui marche à l'échelle N ne se compose pas automatiquement à l'échelle N×1000.",
      correction: "Le bilan cannois est un indice de compétence exécutive réel mais un prédicteur faible : les compétences pertinentes pour l'Élysée (coalitions parlementaires, arbitrages sociaux nationaux, international) ne sont pas testées par un mandat municipal. Juger le programme sur pièces, pas sur l'analogie.",
      severity: "medium"
    },
    {
      claim: "« 1 153 agences, 450 000 agents, 100 milliards : voilà le gisement » ",
      fallacy_type: "amalgame stock/flux (chiffrage magique par agrégation)",
      why_fallacious: "Présente le BUDGET TOTAL des opérateurs comme un gisement d'ÉCONOMIES, alors que ces 100 Md€ financent des universités, France Travail, les ARS, Météo-France… Supprimer l'opérateur ne supprime pas la mission ; l'économie réelle est le coût de structure redondant, soit ~2-3% du total. Facteur d'exagération implicite : ×30.",
      correction: "Rapport sénatorial 2025 : ~430-450 opérateurs principaux, gisement réaliste en unités de Md€/an. L'argument honnête est l'efficacité et la pilotabilité, pas le montant — en le survendant, Lisnard fragilise sa marque de sérieux.",
      severity: "high"
    },
    {
      claim: "« On dépouille les actifs au profit des inactifs »",
      fallacy_type: "cadrage moralisateur / généralisation abusive",
      why_fallacious: "« Inactifs » agrège retraités (qui ont cotisé toute leur vie — le cœur de son propre électorat), malades, invalides, chômeurs et allocataires de minima : des situations moralement et économiquement incomparables. Le verbe « dépouiller » transforme un système assurantiel et redistributif — critiquable — en spoliation intentionnelle.",
      correction: "Le fait sous-jacent est réel : la France redistribue massivement vers les 65+ (niveau de vie des retraités ≥ actifs, unique en OCDE) et les prélèvements sur le travail sont excessifs. L'énoncé rigoureux vise le DESIGN du système (poids des retraites, coin socio-fiscal), pas une opposition morale actifs/inactifs qui n'existe pas.",
      severity: "medium"
    },
    {
      claim: "« Il suffit de libérer les énergies : la croissance couvrira le reste » (implicite du programme fiscal)",
      fallacy_type: "raisonnement circulaire / pari de Laffer non étayé",
      why_fallacious: "Les baisses d'impôts et de normes sont supposées générer une croissance qui finance les baisses d'impôts. L'effet existe mais son ampleur et son délai sont systématiquement surestimés : les baisses Trump 2017 et Truss 2022 n'ont pas été autofinancées ; le CBO et l'expérience française (CICE : ~100 000 emplois pour ~20 Md€/an) documentent des rendements bien inférieurs à 1.",
      correction: "Chiffrer séparément le coût certain (immédiat) et le gain incertain (différé), avec des hypothèses de bouclage prudentes — exactement ce que sa promesse d'évaluation systématique devrait lui imposer à lui-même.",
      severity: "medium"
    },
    {
      claim: "« Nous assistons au soubresaut d'un système à l'agonie » (le macronisme et l'État central)",
      fallacy_type: "dramatisation / prophétie auto-réalisatrice rhétorique",
      why_fallacious: "Le vocabulaire d'effondrement (« agonie », « faillite ») décrit un État qui lève 1 200 Md€/an, emprunte à des taux maîtrisés et assure les services essentiels. La dramatisation systémique sert à justifier la radicalité du remède (-80 Md€/an 1) sans démontrer que le patient exige ce traitement de choc plutôt qu'un régime long.",
      correction: "Le diagnostic proportionné : dérive lente et documentée (efficacité en baisse, dette en hausse) appelant une consolidation pluriannuelle crédible — ce que disent la Cour des comptes et le FMI, qui ne parlent jamais d'agonie mais d'ajustement de 0,5-1 point de PIB/an.",
      severity: "low"
    }
  ],

  data_issues: [
    {
      claim: "« 1 153 agences et organismes, près de 450 000 agents, 100 milliards d'euros de dépenses »",
      problem: "exagéré / agrégat trompeur",
      reality: "La commission d'enquête du Sénat (2025) recense ~430-450 opérateurs de l'État au sens strict (~77-80 Md€ de financements publics) ; le chiffre de 1 000+ inclut commissions consultatives et organismes minuscules. Surtout, ces budgets financent des missions (universités, France Travail, ARS) : le coût de structure économisable est de l'ordre de 2-3 Md€/an, pas 100.",
      source: "Sénat, commission d'enquête sur les missions des agences, opérateurs et organismes consultatifs de l'État (rapport 2025) ; Cour des comptes ; IGF."
    },
    {
      claim: "« 80 milliards d'économies la première année » présenté comme réaliste car « j'ai fait pareil à Cannes »",
      problem: "invérifiable / sans précédent comparable",
      reality: "Aucune économie avancée n'a jamais réduit sa dépense publique de ~2,7 points de PIB en un an hors tutelle extérieure (les consolidations réussies documentées par le FMI — Suède 1994-98, Canada 1994-98 — font 0,5-1,5 point de PIB PAR AN sur plusieurs années, avec récessions initiales). Le désendettement cannois (~-20% de dette sur plusieurs mandats) est réel mais sans commune mesure d'échelle ni de structure.",
      source: "FMI (fiscal consolidations database) ; OCDE ; comptes administratifs de la ville de Cannes (désendettement documenté mais échelle municipale)."
    },
    {
      claim: "« La fusion des collectivités fera des économies massives »",
      problem: "contredit par les précédents",
      reality: "Cour des comptes (2019) sur la fusion des régions de 2015 : aucune économie nette démontrée, coûts de convergence (alignement des régimes indemnitaires vers le haut) supérieurs aux gains à moyen terme. Les fusions communales européennes (Danemark 2007) montrent des gains modestes et lents.",
      source: "Cour des comptes, rapport sur les finances régionales post-fusion (2019) ; littérature sur les fusions municipales (Blom-Hansen et al., Danemark)."
    },
    {
      claim: "« La France est le pays où l'on travaille le moins » (variantes dans le discours Nouvelle Énergie)",
      problem: "sorti de contexte",
      reality: "Vrai en volume annuel PAR HABITANT (effet taux d'emploi jeunes/seniors faibles + temps partiel), mais la productivité horaire française reste parmi les plus élevées au monde et la durée hebdomadaire des temps pleins (~39,2h effectives) est dans la moyenne UE. Le vrai problème est le taux d'emploi aux âges extrêmes, pas la paresse des employés — le remède n'est donc pas le même.",
      source: "OCDE (heures travaillées, productivité) ; INSEE ; Eurostat (durée effective du travail) ; France Stratégie."
    },
    {
      claim: "L'impôt et la dépense records « pour des services publics parmi les pires d'Europe »",
      problem: "exagéré",
      reality: "La dégradation est réelle et mesurable (PISA en baisse, délais justice, urgences) mais « parmi les pires » est faux : la France reste dans le premier tiers européen sur la santé (espérance de vie, reste à charge le plus bas d'Europe), les infrastructures et la natalité accompagnée. Le paradoxe français est « cher pour moyen », pas « cher pour catastrophique » — nuance qui change le remède (efficience vs démolition).",
      source: "OCDE (Health at a Glance ; PISA) ; DREES (reste à charge) ; Eurostat."
    }
  ],

  problematic_arguments: [
    {
      argument: "La subsidiarité vue de Cannes : décentraliser les compétences sans traiter la péréquation",
      why_problematic: "Donner plus de pouvoir et d'autonomie fiscale aux territoires avantage mécaniquement les communes à forte base fiscale (tourisme, sièges sociaux) — dont Cannes est l'archétype. Sans mécanisme de péréquation renforcé (dont il ne parle presque jamais), la doctrine produit une France à deux vitesses au détriment des territoires pauvres… qui votent RN.",
      what_it_hides: "Le conflit distributif entre communes riches et pauvres que la centralisation actuelle, avec tous ses défauts, amortit. Le président de l'AMF défend aussi, structurellement, les intérêts des maires dotés."
    },
    {
      argument: "« Ni LR ni macronisme » : la candidature de témoignage qui fragmente le camp qu'elle prétend refonder",
      why_problematic: "À ~2-4%, sa candidature ne peut pas gagner mais peut contribuer à éliminer toute droite du second tour (argument Wauquiez appliqué à lui aussi) ; le refus de la primaire qu'il réclamait hier des autres — il est parti quand LR a désigné Retailleau sans primaire, mais ne propose pas non plus de mécanisme de départage avec Philippe/Retailleau/Bertrand.",
      what_it_hides: "La fonction réelle probable de la candidature : construire une marque nationale pour 2032 et peser dans les négociations post-premier tour — légitime, mais différent du discours « sauver la France en 2027 »."
    },
    {
      argument: "Le libéralisme intégral vendu comme évidence technique (« c'est du bon sens gestionnaire »)",
      why_problematic: "Présente des choix politiques massifs (réduire le périmètre social de l'État, baisser les prélèvements) comme de simples optimisations neutres. La dépolitisation du programme évite le débat sur les perdants : un plan à -200 Md€ fait des perdants par millions, et les nommer est la condition de l'honnêteté démocratique.",
      what_it_hides: "Que l'électorat français, y compris de droite, rejette majoritairement les coupes dans la santé et les retraites — les deux seuls postes où se trouvent réellement 200 Md€. Le « bon sens » esquive ce mur démocratique."
    },
    {
      argument: "L'homme anti-système qui cumule les positions institutionnelles (maire, président de l'AMF, ex-LR pendant 20 ans)",
      why_problematic: "Comme pour Retailleau, la posture de rupture émane d'un insider : il a co-animé la principale association d'élus du pays et milité 25 ans dans le parti qu'il quitte à 4 mois de sa désignation interne, au moment précis où elle lui échappe.",
      what_it_hides: "Que son départ de LR suit la défaite de son option (primaire) et non un désaccord doctrinal nouveau : les idées de Retailleau et les siennes se recouvrent aux trois quarts."
    }
  ],

  strong_ideas: [
    {
      idea: "L'évaluation systématique des politiques publiques avec clauses de caducité (sunset clauses)",
      why_strong: "Le déficit français d'évaluation ex post est documenté par France Stratégie et la Cour des comptes ; les pays qui évaluent et suppriment (Canada années 90 : « program review » poste par poste) réussissent leurs consolidations là où les rabots uniformes échouent. C'est l'idée la plus réutilisable de sa boîte à outils — et la condition de crédibilité de TOUS les plans d'économies, de gauche comme de droite.",
      adoptable_by: "Tous les blocs sans exception : une gauche rigoureuse devrait la revendiquer (évaluer protège les politiques efficaces des coupes aveugles)."
    },
    {
      idea: "Restaurer l'autonomie fiscale locale et la responsabilité démocratique territoriale",
      why_strong: "La suppression de la taxe d'habitation a coupé le lien contribuable-service local : les maires dépensent un argent qu'ils ne lèvent plus — anomalie démocratique reconnue par tout le spectre des élus locaux. Les comparaisons OCDE associent autonomie locale + responsabilité fiscale à une meilleure efficacité de la dépense.",
      adoptable_by: "Tous : la gauche décentralisatrice (Rocard, Defferre) en est co-héritière ; version transversale = nouvel impôt résidentiel local + péréquation renforcée (le complément que Lisnard élude)."
    },
    {
      idea: "Le distinguo assurantiel/solidarité pour refonder le financement social (« cotiser moins pour gagner plus »)",
      why_strong: "Clarifier ce qui relève de l'assurance (financée par le travail, ouvrant des droits) et de la solidarité (financée par l'impôt, universelle) est une grille défendue par des économistes de tous bords (de Bozio à Rexecode) et déjà amorcée (CSG 2018). Elle permet de monter le net SANS détruire la protection — le chaînon manquant du débat pouvoir d'achat.",
      adoptable_by: "Centre et centre-gauche : c'est presque la réforme Bozio-Piketty du financement social ; la droite y met la TVA sociale, la gauche la CSG progressive — la grille est commune."
    },
    {
      idea: "L'adaptation climatique territorialisée (eau, littoral, risques) comme compétence locale outillée",
      why_strong: "Maire d'une ville méditerranéenne frappée par les inondations meurtrières de 2015, Lisnard porte l'adaptation par l'expérience — angle quasi absent du débat national alors que la Cour des comptes et le CEREMA alertent sur l'impréparation française (retrait du trait de côte, assurabilité). Le niveau communal est effectivement le bon échelon d'exécution.",
      adoptable_by: "Tous les blocs : un fonds d'adaptation décentralisé avec ingénierie mutualisée (modèle CEREMA renforcé) est compatible avec n'importe quelle majorité."
    }
  ],

  electorate: "Base étroite mais nette : cadres et professions libérales de droite, entrepreneurs, sympathisants LR déçus jugeant Retailleau trop droitier-identitaire et Philippe trop macroniste, lecteurs des Échos/Point, surreprésentation du Sud-Est (fief azuréen) et des métropoles aisées. Réseau spécifique : les maires (via l'AMF) et les cadres territoriaux, qui font sa notoriété institutionnelle mais ne se transforment pas mécaniquement en électeurs. Profil très diplômé, plus jeune que l'électorat Retailleau, recoupant l'électorat Fillon-2017 libéral et une frange Philippe. Plafond actuel : 2-4%.",

  key_quotes: [
    {
      text: "Je suis candidat.",
      context: "Annonce de sa candidature et de son départ de LR après la désignation de Retailleau sans primaire",
      source: "LCP, 31 mars 2026"
    },
    {
      text: "L'État est drogué à la dépense publique.",
      context: "Débat budgétaire, formule-signature de son diagnostic",
      source: "Public Sénat, 2025"
    },
    {
      text: "Aujourd'hui en France, on dépouille les actifs au profit des inactifs.",
      context: "Sur le poids des prélèvements sur le travail",
      source: "Europe 1, 2025"
    },
    {
      text: "Il faut augmenter le salaire net et cotiser moins pour gagner plus.",
      context: "Présentation de son axe pouvoir d'achat",
      source: "La Grande Interview (CNews/Europe 1), 2026, repris par Nouvelle Énergie"
    },
    {
      text: "Nous assistons au soubresaut d'un système à l'agonie.",
      context: "Sur la crise politique et budgétaire du « bloc central », appelant à un changement de modèle",
      source: "RMC/BFM, 2026 (repris par Nouvelle Énergie)"
    }
  ],

  sources: [
    "https://lcp.fr/actualites/je-suis-candidat-david-lisnard-quitte-lr-et-relance-le-debat-sur-une-primaire-a-droite",
    "https://www.unenouvelleenergie.fr/notre-programme/",
    "https://www.unenouvelleenergie.fr/nous-assistons-au-soubresaut-dun-systeme-a-lagonie-sur-rmc-et-bfm-david-lisnard-appelle-a-un-changement-profond-de-modele/",
    "https://www.publicsenat.fr/actualites/economie/budget-letat-est-drogue-a-la-depense-publique-estime-david-lisnard",
    "https://www.lejdd.fr/economie/david-lisnard-reduire-la-depense-publique-cest-possible-157311",
    "https://www.europe1.fr/politique/aujourdhui-en-france-on-depouille-les-actifs-au-profit-des-inactifs-denonce-david-lisnard-938960",
    "https://fr.wikipedia.org/wiki/Nouvelle_%C3%89nergie",
    "https://www.elyseescope.com/candidat/david-lisnard",
    "Sénat, commission d'enquête sur les agences de l'État (2025) ; Cour des comptes (fusion des régions, 2019) ; FMI (consolidations budgétaires) ; OCDE (heures travaillées, PISA)"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["lisnard-2027"] = CONTENT_ELECTIONS_lisnard_2027;
