const CONTENT_ELECTIONS_reconquete_2027 = {
  id: "reconquete-2027",
  name: "Éric Zemmour (avec Sarah Knafo en figure montante)",
  party: "Reconquête !",
  bloc: "extreme-droite",
  spectrum: 9.5,
  status: "incertain",
  status_note: "Au 4 juillet 2026 : Zemmour dit « se préparer » pour 2027 (automne 2025) mais n'a pas déclaré sa candidature. Sarah Knafo, eurodéputée, est devenue la figure la plus visible du parti et pilote « Le Programme pour la France » (plateforme participative) tout en affirmant : « Je souhaite qu'Éric Zemmour soit notre candidat » (JDD, mai 2026). Rumeurs persistantes d'une candidature Knafo. Le parti est affaibli : exclusion de Marion Maréchal en juin 2024 (partie fonder Identité-Libertés, proche du RN), hémorragie d'élus et d'adhérents après l'échec des législatives 2024, finances tendues. Sondages 2027 : ~3-5% selon les hypothèses.",
  color: "#7c2d12",

  thesis: "La France vit un « grand remplacement » démographique et civilisationnel : l'immigration extra-européenne massive et l'islam transforment le peuple français au point de menacer son existence historique. La priorité absolue — avant l'économie, avant tout — est de renverser les flux (immigration zéro puis « remigration »), de réislamiser l'espace public à zéro et de restaurer l'assimilation intégrale. Sur l'économie, ligne libérale-conservatrice : moins d'impôts sur la production et l'héritage, État recentré sur le régalien.",
  counter_thesis: "Steelman adverse : le socle factuel du programme — le « grand remplacement » — est réfuté par la démographie académique (INSEE, INED) : la croissance de la population française tient pour un tiers au baby-boom, un tiers à l'espérance de vie, un tiers à une immigration qui n'est pas exclusivement extra-européenne ; il n'y a ni plan ni substitution de population. La « remigration » de centaines de milliers de personnes est logistiquement, juridiquement et moralement impraticable en démocratie (aucun précédent hors régimes autoritaires). Politiquement, Zemmour a déjà démontré en 2022-2024 que cette offre plafonne à ~7% puis s'effondre (0,8% aux législatives 2024 en propre) : elle divise l'électorat national sans le élargir, et le RN comme l'UDR en ont siphonné les cadres. C'est une avant-garde idéologique, pas une force de gouvernement.",

  program_pillars: [
    "Immigration zéro puis « immigration négative » : remigration des irréguliers, délinquants, fichés S",
    "Assimilation intégrale et combat contre l'islamisme : voile, financements étrangers, prénoms",
    "Abolition du droit du sol, asile réduit à ~100 cas/an, suppression AME et aides sociales non-UE",
    "Sortie de la CEDH et primauté du droit national",
    "Économie libérale-conservatrice : baisse des impôts de production, transmission/héritage favorisés, natalité",
    "Union des droites comme stratégie (échouée jusqu'ici : RN et Maréchal l'ont refusée à ses conditions)"
  ],

  proposals: [
    {
      title: "Immigration zéro puis « immigration négative » (remigration)",
      domain: "immigration",
      detail: "Arrêt quasi total des flux entrants, puis solde migratoire négatif via un « ministère de la Remigration » chargé du départ des clandestins, étrangers délinquants, fichés S et chômeurs de longue durée étrangers — « 17 mesures réalistes et fermes » selon le parti.",
      pros: [
        "Cohérence interne : si l'on pense que le problème est le nombre, la réponse au nombre est le flux ET le stock — Zemmour assume la logique jusqu'au bout là où d'autres l'euphémisent",
        "A imposé le mot et le thème dans le débat : fenêtre d'Overton déplacée, le « zéro immigration » est désormais discuté partout à droite",
        "Certaines briques isolées existent ailleurs (Danemark : politique du « zéro réfugié », retours syriens)"
      ],
      cons: [
        "Impraticable à l'échelle annoncée : aucun État de droit n'a jamais organisé le départ forcé de centaines de milliers de résidents ; les pays d'origine ne délivrent déjà pas les laissez-passer pour quelques dizaines de milliers d'OQTF",
        "Violerait la Constitution (égalité, droits acquis), la CEDH (art. 3, 8), la Convention de Genève et le droit UE — nécessiterait de sortir de la quasi-totalité de l'ordre juridique européen",
        "Expulser des « chômeurs de longue durée » réguliers = rupture des contrats sociaux et des traités bilatéraux (accords franco-algériens etc.)",
        "Coût économique : secteurs entiers (BTP, santé, hôtellerie, agriculture) dépendent de la main-d'œuvre immigrée ; choc d'offre de travail négatif massif"
      ],
      plausibility: 1,
      plausibility_note: "La mesure-socle du programme est la moins réalisable de tout le spectre politique 2027 : incompatible avec la Constitution, la CEDH, le droit UE, la coopération consulaire et la logistique d'État. Même une sortie de la CEDH (5 ans minimum) ne lèverait pas les blocages constitutionnels internes.",
      cost_estimate: "Aucun chiffrage sérieux n'existe ; le parti n'a jamais produit d'étude d'impact. Coûts de rétention/éloignement : plusieurs milliers d'euros par personne (Cour des comptes), soit des dizaines de Md€ à l'échelle annoncée, hors désorganisation économique."
    },
    {
      title: "Asile réduit à une centaine de cas par an",
      domain: "immigration",
      detail: "Traitement des demandes d'asile uniquement depuis l'étranger (ambassades), avec un objectif d'une centaine d'admissions annuelles contre ~140 000-160 000 demandes actuellement.",
      pros: [
        "Pointe un vrai dysfonctionnement : le détournement de l'asile comme filière d'immigration économique (taux de protection ~30-40%, déboutés majoritairement non éloignés)",
        "L'externalisation de l'examen des demandes est discutée sérieusement ailleurs (modèle « Rwanda » britannique, centres Albanie de Meloni, débat européen 2024-2026)"
      ],
      cons: [
        "Chiffre arbitraire sans rapport avec les persécutions réelles : la Convention de Genève crée un droit individuel, pas un quota",
        "Exigerait de dénoncer la Convention de Genève de 1951 — aucune démocratie ne l'a fait, isolement diplomatique total",
        "Le précédent britannique (plan Rwanda) s'est effondré juridiquement et financièrement (~700 M£ pour 4 volontaires) ; les centres albanais de Meloni sont bloqués par les juges",
        "Supprime de fait la protection des dissidents (Iraniens, Russes, Afghanes) que Zemmour dit par ailleurs vouloir protéger — incohérence"
      ],
      plausibility: 1,
      plausibility_note: "Contraire à la Convention de Genève, à la Constitution (alinéa 4 du préambule de 1946 : droit d'asile constitutionnel), à la CEDH et au droit UE. Infaisable sans révolution juridique complète.",
      cost_estimate: "Économies alléguées ~2 Md€ (coût du système d'asile) ; jamais consolidées, coûts de contentieux et de rupture des traités non provisionnés."
    },
    {
      title: "Abolition du droit du sol et déchéance de nationalité élargie",
      domain: "immigration",
      detail: "Suppression totale de l'acquisition de nationalité par la naissance en France, naturalisation par assimilation prouvée uniquement, déchéance possible pour binationaux criminels.",
      pros: [
        "Position cohérente avec la doctrine assimilationniste revendiquée : la nationalité comme aboutissement, pas comme point de départ",
        "Le droit du sang dominant existe en Autriche, au Danemark, en Suisse sans que ces pays soient des dictatures",
        "La déchéance pour terroristes binationaux avait été proposée par… Hollande en 2015 (avant retrait) : idée transpartisane dans les moments de crise"
      ],
      cons: [
        "Créerait une caste de résidents nés en France, sans autre pays réel, exclus de la citoyenneté sur plusieurs générations (modèle des Gastarbeiter allemands d'avant 2000, abandonné par l'Allemagne car il fabriquait de la désintégration)",
        "Se heurte aux principes fondamentaux reconnus par les lois de la République (droit du sol présent dans la loi depuis 1889)",
        "La déchéance élargie crée deux classes de Français (mono/binationaux) — censure constitutionnelle probable, débat de 2015-2016 déjà tranché négativement",
        "Effet sur les flux quasi nul : le droit du sol n'est pas un moteur migratoire documenté"
      ],
      plausibility: 2,
      plausibility_note: "Durcissements partiels possibles par loi (précédent Mayotte 2018) ; abolition totale = très probable censure du Conseil constitutionnel, donc révision constitutionnelle par art. 89 (accord des deux chambres — inexistant).",
      cost_estimate: "Impact budgétaire direct négligeable."
    },
    {
      title: "Sortie de la CEDH (Cour européenne des droits de l'homme)",
      domain: "institutions",
      detail: "Dénonciation de la Convention européenne des droits de l'homme pour lever les blocages jurisprudentiels sur l'éloignement des étrangers (art. 3 et 8) et restaurer la souveraineté juridique.",
      pros: [
        "Diagnostic partiellement partagé au-delà de l'extrême droite : la jurisprudence extensive de la CEDH sur l'art. 8 (vie familiale) est critiquée par des juristes sérieux et par une lettre de 9 chefs de gouvernement européens (2024, initiée par le Danemark et l'Italie)",
        "Le Royaume-Uni débat de la même sortie : la question n'est plus taboue en Europe",
        "Clarifierait le conflit de normes au lieu du contournement permanent"
      ],
      cons: [
        "La sortie de la CEDH est incompatible de fait avec l'appartenance à l'UE (adhésion à la Convention exigée des membres, art. 6 TUE et jurisprudence) et au Conseil de l'Europe : seuls la Russie et le Bélarus sont dehors — le signal géopolitique serait désastreux",
        "Les protections équivalentes existent dans la Constitution française et la Charte des droits fondamentaux UE : sortir de la CEDH ne lèverait qu'une petite partie des blocages",
        "Détricote la protection des Français eux-mêmes (la France est régulièrement condamnée sur les prisons, la garde à vue — au bénéfice des citoyens)",
        "La voie réformiste (protocoles, marge nationale d'appréciation, déclaration de Copenhague 2018) existe et progresse"
      ],
      plausibility: 2,
      plausibility_note: "Juridiquement possible (dénonciation art. 58, préavis 6 mois) mais politiquement et systémiquement explosif : conflit direct avec l'UE, le Conseil de l'Europe, et inefficace sans réforme constitutionnelle interne simultanée.",
      cost_estimate: "Pas de coût budgétaire direct ; coûts diplomatiques et juridiques systémiques non chiffrables."
    },
    {
      title: "Interdiction du voile dans l'espace public et lutte contre l'islamisme",
      domain: "institutions",
      detail: "Interdiction du port du voile dans la rue et tous les espaces publics, interdiction des financements étrangers des mosquées, fermeture des mosquées « fréristes », interdiction de l'écriture inclusive et des prénoms non français à l'état civil (retour à la loi de l'an XI).",
      pros: [
        "L'entrisme frériste est documenté par des rapports d'État sérieux (rapport Obin, rapport sénatorial 2020, rapport sur le frérisme commandé par Darmanin 2025) : le diagnostic n'est pas fantasmé",
        "L'interdiction des financements étrangers des cultes est débattue au centre (loi séparatisme 2021 l'a partiellement fait)",
        "Cohérence assimilationniste assumée plutôt que multiculturalisme par défaut"
      ],
      cons: [
        "Interdire un vêtement religieux dans la RUE (pas seulement école/services publics) violerait frontalement la liberté religieuse (art. 10 DDHC, art. 9 CEDH) — la laïcité française encadre l'État, pas les individus dans l'espace public",
        "La police des prénoms (abrogée en 1993) est une intrusion de l'État dans l'intime sans aucun effet mesurable sur l'intégration — et Zemmour l'a illustrée par l'humiliation télévisée de Hapsatou Sy, contre-productive",
        "Stigmatisation de 4-5 millions de musulmans français ordinaires pour atteindre quelques milliers d'islamistes : l'outil est disproportionné à la cible",
        "Ferait de chaque femme voilée une infraction ambulante : inapplicable policièrement (des millions de contrôles)"
      ],
      plausibility: 2,
      plausibility_note: "L'interdiction du voile dans la rue serait censurée par le Conseil constitutionnel et condamnée par la CEDH (la loi burqa de 2010 n'a survécu que parce qu'elle visait la dissimulation du visage, pas la religion). Financements étrangers : partiellement faisable, déjà engagé.",
      cost_estimate: "Coût budgétaire faible ; coût de mise en œuvre policière non évalué."
    },
    {
      title: "Suppression de l'AME et de toutes les aides sociales aux étrangers non européens",
      domain: "social",
      detail: "Suppression de l'Aide médicale d'État et réservation des prestations non contributives (APL, allocations familiales, RSA, minimum vieillesse) aux Français et Européens.",
      pros: [
        "Distinction contributif/non-contributif juridiquement plus défendable que la priorité nationale généralisée du RN",
        "Le Danemark social-démocrate a durci l'accès des non-Européens aux prestations sans censure européenne massive — précédent réel",
        "Poserait la question légitime de l'articulation État-providence / libre installation"
      ],
      cons: [
        "Les étrangers réguliers cotisent : les exclure des prestations tout en les faisant cotiser est une double peine juridiquement fragile (conventions OIT, accords d'association UE-pays tiers, jurisprudence constitutionnelle de 1990)",
        "Effets sociaux en chaîne : enfants (français pour beaucoup) précipités dans la pauvreté, coûts différés (santé, échec scolaire, délinquance)",
        "Économies réelles bien moindres qu'affiché : les étrangers non-UE perçoivent une fraction modeste des prestations totales",
        "L'AME : mêmes objections sanitaires que pour le RN (soins retardés plus chers, santé publique)"
      ],
      plausibility: 3,
      plausibility_note: "Le Conseil constitutionnel (décision 89-269 DC) a jugé que les étrangers réguliers ont droit aux prestations sociales ; les conventions bilatérales et le droit UE protègent les résidents de longue durée. Seuls des durcissements de durée de résidence (débat sur 5 ans) sont envisageables.",
      cost_estimate: "Parti : ~15-20 Md€ d'économies alléguées ; aucune validation indépendante, chiffre incompatible avec la structure réelle des prestations (Les Décodeurs, DREES)."
    },
    {
      title: "Suppression des droits de succession jusqu'à 500 000 € par enfant et transmission facilitée",
      domain: "économie",
      detail: "Relèvement massif des abattements sur les successions et donations (500 000 € par enfant en ligne directe), suppression des droits pour les entreprises familiales transmises.",
      pros: [
        "La France a l'une des fiscalités successorales les plus lourdes de l'OCDE en taux marginal, et l'opinion y est massivement hostile (toutes classes confondues)",
        "La transmission des PME familiales est un vrai point noir (pacte Dutreil complexe) : l'Allemagne et l'Italie font beaucoup mieux",
        "Cohérence avec la vision « enracinement/famille » du projet"
      ],
      cons: [
        "Coût : plusieurs Md€/an (les droits de succession rapportent ~16-18 Md€) au moment où le déficit est à 5,5% du PIB",
        "Bénéficie mécaniquement aux 10-20% les plus dotés : 87% des successions sont déjà exonérées sous les abattements actuels (100 000 €/enfant)",
        "Aggrave la dynamique de société d'héritiers documentée par le CAE (2021) : la richesse héritée redevient déterminante par rapport à la richesse gagnée — paradoxal pour un discours méritocratique",
        "Aucun financement proposé en face"
      ],
      plausibility: 6,
      plausibility_note: "Juridiquement simple (loi de finances). L'obstacle est budgétaire (coût 3-6 Md€/an selon paramètres) et politique. Une version partielle (abattements relevés à 150-200 k€) est plausible sous n'importe quelle droite.",
      cost_estimate: "3 à 6 Md€/an selon le calibrage (extrapolation IFRAP/CAE) ; non chiffré précisément par Reconquête."
    },
    {
      title: "Baisse massive des impôts de production",
      domain: "économie",
      detail: "Suppression/réduction des impôts de production (C3S, CVAE résiduelle, CFE) pour réindustrialiser, dans la lignée libérale du programme économique 2022 conservé.",
      pros: [
        "Consensus économique large : les impôts de production français (~4,5% du PIB avant baisses, vs ~0,8% en Allemagne) frappent les entreprises avant tout profit — c'est l'impôt le plus distorsif (Conseil d'analyse économique, Rexecode)",
        "La C3S est unanimement considérée comme l'impôt le plus nocif de France (assise sur le chiffre d'affaires, en cascade)",
        "Trajectoire déjà engagée par Macron (CVAE) : continuité crédible"
      ],
      cons: [
        "Coût : 10-15 Md€/an pour une suppression complète C3S+CVAE+CFE partielle — non financé",
        "La CFE/CVAE financent les collectivités : compensation étatique nécessaire, recentralisation rampante",
        "Effet réindustrialisation réel mais lent (5-10 ans) : ne « paie » pas la mesure à court terme",
        "Peu crédible que ce volet libéral survive à l'alliance électorale populaire recherchée par ailleurs"
      ],
      plausibility: 6,
      plausibility_note: "Faisable par loi de finances, déjà amorcé par d'autres majorités. Contrainte purement budgétaire — c'est la partie la plus « normale » du programme Reconquête.",
      cost_estimate: "C3S : ~4 Md€/an ; CVAE résiduelle : ~5-6 Md€ ; chiffrages Rexecode/IFRAP convergents."
    },
    {
      title: "Politique nataliste : « revenu parental », part fiscale pleine dès le 2e enfant, priorité aux familles françaises",
      domain: "social",
      detail: "Allocations et avantages fiscaux natalistes renforcés, réservés ou majorés pour les familles françaises, pour redresser la natalité (1,62 enfant/femme en 2024, plus bas depuis 1945).",
      pros: [
        "Le déclin de la fécondité française est réel et son coût à long terme (retraites, dépendance) est massif — le sujet est sous-traité par les autres blocs",
        "La politique familiale française historique (universelle) a démontrablement soutenu la fécondité vs voisins ; sa dé-universalisation depuis 2014 a coïncidé avec la baisse",
        "La Hongrie a testé des dispositifs comparables avec des effets modestes mais réels sur les intentions de fécondité"
      ],
      cons: [
        "Conditionner les allocations à la nationalité : mêmes obstacles constitutionnels que la priorité nationale RN",
        "Le lien subvention→natalité est faible dans la littérature (les milliards hongrois ont surtout déplacé le calendrier des naissances : fécondité hongroise retombée à ~1,5)",
        "Coût : plusieurs Md€/an non financés",
        "Les déterminants lourds (logement, garde d'enfants, précarité des jeunes adultes) ne sont pas traités par le programme"
      ],
      plausibility: 4,
      plausibility_note: "Volet universel faisable (budget), volet « familles françaises » censurable. L'efficacité nataliste des transferts monétaires purs est empiriquement faible.",
      cost_estimate: "Non chiffré par le parti ; dispositifs hongrois équivalents ~2-4% du PIB (soit 60-120 Md€ transposés — irréaliste), version réaliste 3-8 Md€/an."
    },
    {
      title: "Union des droites (stratégie politique centrale)",
      domain: "institutions",
      detail: "Fusionner électoralement RN, UDR, LR-droite et Reconquête autour d'un programme national-conservateur, sur le modèle de la coalition Meloni en Italie.",
      pros: [
        "Arithmétiquement fondée : le bloc droite+extrême droite dépasse 50% des suffrages exprimés depuis 2022 — sa division est le principal verrou du système",
        "Le modèle italien (FdI+Lega+FI) prouve que la formule peut gagner ET gouverner sans effondrement",
        "Ciotti (UDR) l'a partiellement réalisée ; Maréchal la poursuit côté RN : l'idée de Zemmour a gagné culturellement même si son parti a perdu"
      ],
      cons: [
        "Échec pratique total pour Reconquête : le RN refuse toute alliance avec Zemmour (trop radioactif), Maréchal est partie, les cadres (Marion, Bay, Rougé…) ont fui vers le RN/UDR",
        "L'union à la Meloni s'est faite en Italie AUTOUR du parti dominant, pas à son initiative extérieure : transposé en France, c'est Bardella qui unifie, pas Zemmour",
        "Le « cordon sanitaire » LR (Retailleau exclut toute alliance RN) rend l'union complète impossible avant 2027",
        "Reconquête n'apporte plus assez d'électeurs (~3-5%) pour peser dans une négociation"
      ],
      plausibility: 3,
      plausibility_note: "L'union des droites progresse (Ciotti, Maréchal, porosité LR-RN) mais sans et contre Zemmour. La probabilité qu'elle se fasse À SON profit est quasi nulle ; qu'elle se fasse tout court d'ici 2027 : partielle au mieux.",
      cost_estimate: "Sans objet (mesure stratégique)."
    }
  ],

  fallacies: [
    {
      claim: "« Le grand remplacement n'est ni un mythe ni un complot mais un processus inexorable » (Zemmour, constante depuis 2021)",
      fallacy_type: "généralisation abusive + extrapolation tendancielle + vocabulaire complotiste",
      why_fallacious: "Extrapole linéairement des évolutions démographiques locales et partielles vers une « substitution » totale de population, en agrégeant des catégories hétérogènes (immigrés, descendants, musulmans, prénoms) et en postulant une direction unique et irréversible. Le terme « remplacement » importe l'idée d'un agent remplaçant — glissement du descriptif au complotiste.",
      correction: "INSEE/INED : la population française a crû de 20 millions depuis 1945 — 1/3 baby-boom, 1/3 espérance de vie, 1/3 immigration (pas exclusivement extra-européenne). Les descendants d'immigrés s'unissent massivement hors de leur groupe d'origine (mariages mixtes ~2/3 en 2e génération selon l'enquête TeO de l'INED) : la dynamique dominante est le mélange, pas la substitution. L'islam progresse (~10% de la population) sans trajectoire vers une majorité à aucun horizon démographique modélisé.",
      severity: "high"
    },
    {
      claim: "« Les prénoms le prouvent : Mohamed est dans le top des prénoms, la France change de peuple »",
      fallacy_type: "proxy fallacieux / cherry-picking",
      why_fallacious: "Utilise les prénoms comme mesure d'identité nationale : un prénom arabe n'indique ni la nationalité, ni la pratique religieuse, ni le degré d'assimilation (que Zemmour mesure par ailleurs par d'autres critères quand ça l'arrange). Les classements cités agrègent souvent les variantes orthographiques d'un prénom arabe mais pas celles des prénoms français, biaisant le classement.",
      correction: "Les fichiers de prénoms INSEE montrent une diversification générale (prénoms anglo-saxons, latins, inventés) dont les prénoms arabo-musulmans sont ~15-20% des naissances — croissance réelle mais très loin d'une majorité, et sans lien mécanique avec l'assimilation (les Kevin des années 90 n'ont pas fait de la France une banlieue de Chicago).",
      severity: "medium"
    },
    {
      claim: "Sur le chômage des extra-Européens : mélange de sources INSEE incompatibles pour affirmer que « la majorité ne travaille pas »",
      fallacy_type: "équivoque statistique",
      why_fallacious: "Zemmour combine des chiffres issus d'enquêtes différentes (enquête Emploi vs recensement), portant sur des périodes et des périmètres différents (immigrés vs étrangers vs descendants), pour produire un taux d'inactivité gonflé. Confondre taux de chômage (part des actifs sans emploi) et taux d'emploi (part des personnes en âge de travailler qui travaillent) permet toutes les manipulations.",
      correction: "INSEE : le taux d'emploi des immigrés non-UE est effectivement plus faible (~57-60% vs ~68-70% ensemble) — écart réel qui pose une vraie question d'intégration économique — mais « la majorité ne travaille pas » est faux pour les hommes et trompeur globalement ; l'écart se referme fortement à la 2e génération.",
      severity: "medium"
    },
    {
      claim: "« L'islam est incompatible avec la République » (essentialisation)",
      fallacy_type: "essentialisme / généralisation abusive",
      why_fallacious: "Attribue à une religion de 4-5 millions de personnes en France une essence unique et immuable, en prenant sa frange islamiste pour son cœur. Le même raisonnement appliqué au catholicisme de 1905 (alors massivement anti-républicain, Syllabus à l'appui) aurait « prouvé » son incompatibilité — l'histoire a tranché autrement.",
      correction: "Les enquêtes (IFOP-Institut Montaigne 2016-2022) montrent un continuum : une majorité de musulmans français sécularisés ou accommodés avec la laïcité, une minorité rigoriste réelle (~25-28% adhérant à des positions « séparatistes » chez les jeunes) qui justifie des politiques ciblées — pas une essence collective. Le problème réel (islamisme) est soluble par le droit commun ciblé, comme l'anticléricalisme d'État a cédé au concordat de fait.",
      severity: "high"
    },
    {
      claim: "« On me censure, on me fait des procès : preuve que je dis la vérité »",
      fallacy_type: "sophisme du martyre / auto-validation",
      why_fallacious: "Les condamnations pénales (provocation à la haine, contestation de crime contre l'humanité — condamnation définitive pour les propos sur les mineurs isolés, CEDH ayant validé une condamnation en 2022) sont retournées en preuve de véracité. Être poursuivi ne rend pas un propos vrai ; Galilée était persécuté ET avait raison, mais des milliers de persécutés avaient tort.",
      correction: "Traiter les condamnations pour ce qu'elles sont : des jugements sur la légalité du discours, pas sur sa vérité — et évaluer les affirmations factuelles de Zemmour sur pièces (voir data_issues : elles sont fréquemment fausses).",
      severity: "medium"
    },
    {
      claim: "« La remigration est réaliste : De Gaulle a bien rapatrié un million de pieds-noirs en quelques mois »",
      fallacy_type: "fausse analogie",
      why_fallacious: "Compare un rapatriement VOLONTAIRE de citoyens français fuyant une guerre vers leur propre pays avec le départ FORCÉ d'étrangers et de résidents installés vers des pays qui n'en veulent pas. Tous les paramètres opérants (consentement, citoyenneté, direction du flux, coopération des États) sont inversés.",
      correction: "Les seuls précédents de déplacements forcés de populations à cette échelle sont le fait de régimes autoritaires ou de guerres (échanges gréco-turcs 1923, Allemands des Sudètes 1945) — avec des coûts humains que personne ne revendique. En démocratie, les retours forcés se comptent en milliers/an, pas en centaines de milliers.",
      severity: "high"
    }
  ],

  data_issues: [
    {
      claim: "Le « grand remplacement » démographique de la population française",
      problem: "faux",
      reality: "INED/INSEE : pas de substitution de population. Croissance démographique française = baby-boom + longévité + immigration diverse. Immigrés : 10,7% de la population (INSEE 2024) ; en incluant la 2e génération, ~1/3 a au moins une ascendance immigrée sur 3 générations — dont une grande part européenne (Italiens, Espagnols, Portugais). Mariages mixtes majoritaires en 2e génération (enquête TeO, INED). François Héran (Collège de France) et l'ensemble de la démographie académique réfutent la thèse.",
      source: "INED (enquête Trajectoires et Origines) ; INSEE Immigrés et descendants d'immigrés 2023-2024 ; F. Héran ; fact-checks Les Décodeurs et AFP Factuel répétés 2021-2026."
    },
    {
      claim: "« La majorité des chômeurs sont étrangers » / chiffres de chômage des extra-Européens (mélange de sources)",
      problem: "faux / sorti de contexte",
      reality: "Le JDD (fact-check) a montré que Zemmour mélange enquêtes Emploi et recensements sur des périodes différentes. INSEE : les étrangers représentent ~7,4% de la population active et sont surreprésentés au chômage (taux ~12-13% vs 7,5%) mais très minoritaires parmi les chômeurs en valeur absolue.",
      source: "Le JDD « Chômeurs extra-européens : Eric Zemmour mélange les chiffres de l'Insee » ; INSEE enquête Emploi."
    },
    {
      claim: "« Les mineurs isolés sont des voleurs, des violeurs, des assassins » (propos condamnés)",
      problem: "faux (généralisation condamnée pénalement)",
      reality: "Condamnation définitive pour provocation à la haine (Cass. 2022), validée dans son principe par la jurisprudence CEDH. Les MNA présentent une surdélinquance documentée sur certains segments parisiens (préfecture de police), mais l'immense majorité des ~30 000 MNA pris en charge par l'ASE n'a aucun antécédent : la généralisation est factuellement fausse.",
      source: "Cour de cassation 2022 ; CheckNews ; rapports ASE/départements."
    },
    {
      claim: "« 100% de l'immigration coûte, rien ne rapporte » (variantes sur le coût global)",
      problem: "faux",
      reality: "Mêmes données que pour le RN : OCDE 2021 (-1% à +1% du PIB), CEPII 2018 (-0,49% en 2011). L'immigration de travail qualifiée a une contribution nette positive ; le solde global est proche de zéro.",
      source: "OCDE, Perspectives des migrations internationales 2021 ; CEPII WP 2018-04 ; Fondation Jean-Jaurès 2024."
    },
    {
      claim: "« Reconquête, premier parti de France en adhérents » (revendication de ~100 000+ adhérents maintenue après 2022)",
      problem: "obsolète / invérifiable",
      reality: "Le pic revendiqué (110 000 en 2022) n'a jamais été audité ; depuis l'exclusion de Maréchal (juin 2024), le départ des 4 eurodéputés sur 5 et les échecs électoraux (0,8% cumulé aux législatives 2024), le parti a perdu l'essentiel de ses cadres et une grande partie de ses adhérents, avec des finances dégradées faute de financement public significatif.",
      source: "Wikipédia Reconquête (sourcé presse) ; Le JDD juin 2024 (exclusion Maréchal) ; franceinfo."
    }
  ],

  problematic_arguments: [
    {
      argument: "La hiérarchisation explicite : « la question identitaire prime sur tout, y compris l'économie et le climat »",
      why_problematic: "Subordonne tous les problèmes vérifiables et urgents (dette, hôpital, école, climat) à une menace dont le cœur factuel est réfuté. C'est une machine à ne jamais traiter le reste : tout échec futur pourra être réimputé à l'ennemi identitaire.",
      what_it_hides: "L'absence de programme de gouvernement opérationnel : sur la santé, l'école (hors uniforme et « fondamentaux »), l'énergie, la recherche, le programme est squelettique. Voter Zemmour, c'est voter UNE politique, pas un gouvernement."
    },
    {
      argument: "« Je dis tout haut ce que tout le monde pense tout bas » — le tabou comme preuve",
      why_problematic: "Confond impopularité d'un propos et véracité, et s'auto-immunise contre la réfutation : toute critique devient confirmation du tabou. Épistémologiquement, c'est un système non falsifiable.",
      what_it_hides: "Que ses affirmations centrales ont été examinées — et souvent réfutées — publiquement et en détail par les démographes, les statisticiens et les juges. Le débat a eu lieu ; il l'a largement perdu sur les faits, pas par censure."
    },
    {
      argument: "L'ambiguïté Zemmour/Knafo entretenue : un parti sans candidat déclaré à 10 mois de l'échéance, une consultation « programme » sans porteur",
      why_problematic: "Demande aux militants et donateurs de s'engager pour un projet dont le visage est inconnu ; la rivalité feutrée (Zemmour : « il n'y a aucun problème entre Sarah Knafo et moi ») paralyse la clarification stratégique que l'échec de 2022-2024 exigeait.",
      what_it_hides: "Le vrai dilemme du parti : Zemmour est trop usé pour gagner mais trop propriétaire pour céder ; Knafo est plus moderne mais sans base électorale propre démontrée. La « consultation participative » masque l'absence de décision."
    },
    {
      argument: "Se réclamer de l'assimilation républicaine (Ferry, De Gaulle) pour des mesures d'exclusion par origine",
      why_problematic: "L'assimilation historique française fonctionnait par PROMESSE d'égalité complète en échange de la conformité culturelle. Les mesures Reconquête (droit du sol aboli, prestations par nationalité, remigration) retirent la promesse : c'est le contraire de l'assimilation, qui devient impossible par construction pour ceux qu'on exclut.",
      what_it_hides: "Le glissement de l'assimilationnisme (culturel, ouvert à tous) vers l'identitarisme (origine, fermé) — précisément la ligne de fracture avec la tradition républicaine invoquée."
    }
  ],

  strong_ideas: [
    {
      idea: "Nommer le sujet de l'islamisme et de l'entrisme frériste sans euphémisme",
      why_strong: "Le fond documentaire existe indépendamment de Zemmour : rapport Obin (2004), rapport sénatorial sur la radicalisation (2020), rapport sur les Frères musulmans remis au gouvernement (2025). Le déni des années 2000-2015 a été reconnu jusqu'au sommet de l'État (discours des Mureaux de Macron, 2020). Zemmour a contribué à lever ce déni — la loi séparatisme de 2021 en est l'aval indirect.",
      adoptable_by: "Déjà largement adopté : centre (loi 2021), LR (Retailleau), et une gauche laïque (Printemps républicain). La version utile : cibler l'organisation et le financement islamistes par le droit commun, pas la religion des individus."
    },
    {
      idea: "La critique juridique argumentée de la jurisprudence CEDH art. 8 (vie familiale) sur l'éloignement",
      why_strong: "Portée aussi par des juristes non extrémistes et par 9 chefs de gouvernement européens (lettre de mai 2024, Danemark/Italie en tête) demandant une réinterprétation de la Convention sur les migrations. Le débat sur la marge nationale d'appréciation est réel et légitime — la Cour elle-même a amorcé une inflexion.",
      adoptable_by: "LR et centre-droit : voie réformiste (protocole additionnel, déclaration interprétative, coalition d'États) plutôt que sortie — c'est exactement ce que teste le Danemark social-démocrate."
    },
    {
      idea: "La baisse des impôts de production comme priorité industrielle",
      why_strong: "Consensus des économistes (CAE, Rexecode, OFCE sur le diagnostic) : l'écart franco-allemand sur les impôts de production explique une part mesurable du décrochage industriel. Volet le plus solide du programme économique Reconquête, hérité de sa frange libérale.",
      adoptable_by: "Tous les blocs de gouvernement — trajectoire déjà engagée (suppression CVAE amorcée) ; la question restante est le financement de la poursuite."
    },
    {
      idea: "Poser la natalité comme enjeu stratégique de long terme",
      why_strong: "La fécondité française à 1,62 (2024, INSEE — plus bas historique) engage les retraites, l'école, la puissance à horizon 2050. Aucun autre bloc n'en fait une priorité alors que le consensus démographique sur le coût du vieillissement est total. Le diagnostic est solide même si les solutions Reconquête (nationalité, transferts purs) sont faibles.",
      adoptable_by: "Tous : les leviers efficaces documentés sont le logement des jeunes ménages, les modes de garde et la sécurité de l'emploi féminin (modèle nordique) — une politique familiale universelle rénovée, pas ethnicisée."
    }
  ],

  electorate: "Électorat 2022 (7,1%) : le plus masculin, le plus âgé-CSP+ et le plus diplômé de la droite radicale — cadres retraités, professions libérales, catholiques observants, sud-est et ouest parisien, fort tropisme Fillon-2017. Très différent du socle populaire RN : Reconquête mord sur la bourgeoisie identitaire, pas sur les ouvriers. Depuis 2024, cet électorat s'est dispersé vers le RN (majoritairement), l'UDR de Ciotti et l'abstention ; le noyau restant (~3-5%) est militant, radicalisé et très en ligne. Knafo attire un segment plus jeune, libéral-technophile (discours crypto/Milei).",

  key_quotes: [
    {
      text: "Je suis pour l'immigration zéro mais aussi pour l'immigration négative.",
      context: "Doctrine migratoire assumée, matrice de la « remigration »",
      source: "Europe 1, 2023 (ligne constante réaffirmée depuis)"
    },
    {
      text: "Je souhaite qu'Éric Zemmour soit notre candidat.",
      context: "Sarah Knafo, répondant aux rumeurs sur sa propre candidature, tout en pilotant la plateforme programmatique du parti",
      source: "Le JDD, mai 2026"
    },
    {
      text: "Il n'y a aucun problème entre Sarah Knafo et moi.",
      context: "Zemmour, démentant les tensions internes sur le leadership pour 2027",
      source: "franceinfo, 2026"
    },
    {
      text: "Je préfère être naïf que traître.",
      context: "Zemmour lors de l'exclusion de Marion Maréchal, juin 2024 — la rupture qui a vidé le parti de ses cadres",
      source: "Le JDD, 12 juin 2024"
    },
    {
      text: "2027 sera la dernière chance de la France.",
      context: "Philippe de Villiers (compagnon de route idéologique, non candidat), illustrant la dramaturgie eschatologique partagée par cette famille politique",
      source: "JDNews/JDD, 2025"
    }
  ],

  sources: [
    "https://www.lejdd.fr/politique/sarah-knafo-eurodeputee-reconquete-je-souhaite-queric-zemmour-soit-notre-candidat-173520",
    "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-il-n-y-a-aucun-probleme-entre-sarah-knafo-et-moi-assure-eric-zemmour_8018111.html",
    "https://www.lejdd.fr/politique/legislatives-eric-zemmour-annonce-lexclusion-de-marion-marechal-de-reconquete-146322",
    "https://www.publicsenat.fr/actualites/non-classe/presidentielle-2022-eric-zemmour-detaille-son-programme-et-assume-le-terme",
    "https://www.euractiv.fr/section/politics/news/eric-zemmour-veut-creer-un-ministere-de-la-remigration/",
    "https://www.europe1.fr/politique/je-suis-pour-limmigration-zero-mais-aussi-pour-limmigration-negative-martele-eric-zemmour-958758",
    "https://www.lejdd.fr/Politique/chomeurs-extra-europeens-eric-zemmour-melange-les-chiffres-de-linsee-4075499",
    "https://fr.wikipedia.org/wiki/Grand_remplacement (synthèse des réfutations INSEE/INED)",
    "https://fr.wikipedia.org/wiki/Reconqu%C3%AAte_(parti_politique)",
    "INED, enquête Trajectoires et Origines ; INSEE, Immigrés et descendants d'immigrés ; OCDE Perspectives des migrations 2021 ; CEPII WP 2018-04"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["reconquete-2027"] = CONTENT_ELECTIONS_reconquete_2027;
