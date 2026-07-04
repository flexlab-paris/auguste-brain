const CONTENT_ELECTIONS_darmanin_2027 = {
  id: "darmanin-2027",
  name: "Gérald Darmanin",
  party: "Populaires (mouvement) / garde des Sceaux",
  bloc: "centre-droit",
  spectrum: 3.5,
  status: "incertain",
  status_note: "Non déclaré en juillet 2026 mais en pré-campagne assumée : « envie » d'être candidat confirmée, « je travaille » sur un projet, puis « Inch'Allah, on verra bien » (France Inter, 13 mai 2026). A lancé son mouvement « Populaires » à Tourcoing (hors des structures Renaissance) et plaide — avec Wauquiez et Lisnard — pour une primaire ou une désignation rapide d'un candidat unique « de la droite et du centre, et peut-être même de la gauche républicaine », avant janvier 2027. Ministre de la Justice en exercice, ce qui contraint sa parole. Choisi ici comme 4e figure du centre : après le renoncement explicite de Bayrou (juin 2026, Paris Match), Darmanin est le candidat potentiel restant le plus significatif du bloc central — troisième homme possible entre Philippe et Attal, avec un espace distinct (droite sociale populaire).",
  color: "#4338ca",

  thesis: "Le bloc central meurt de son embourgeoisement : il a gagné les CSP+ et perdu le peuple, parti au RN. Il faut « écrire le récit social du bloc central » — ordre, nation ET question sociale — pour reconquérir les classes populaires et moyennes : le travail doit toujours payer plus que l'assistance, les travailleurs (quelle que soit leur nationalité) doivent passer avant les autres dans l'accès au logement et aux aides, et l'État régalien doit être impitoyable avec le narcotrafic et la délinquance. Un seul candidat de la droite et du centre doit porter cela, désigné vite.",
  counter_thesis: "Steelman adverse : Darmanin est la démonstration vivante que courir après le RN ne l'arrête pas — quatre ans place Beauvau (2020-2024) à durcir le discours (« ensauvagement », loi immigration 2024 votée avec les voix du RN puis censurée sur un tiers de ses articles), pour un résultat net : le RN à 36%, plus haut que jamais. Son « récit social » est une préférence nationale euphémisée en « préférence travailleurs », juridiquement fragile et moralement ambiguë ; son bilan régalien est contesté (Mayotte, OQTF, surpopulation carcérale record en tant que garde des Sceaux) ; et l'homme qui dénonce « beaucoup de candidats, pas beaucoup d'idées » n'a publié ni programme ni chiffrage. C'est un talent tactique — le meilleur de sa génération — au service d'une ligne dont l'échec est déjà documenté.",

  program_pillars: [
    "Récit social du bloc central : reconquérir les classes populaires parties au RN",
    "Le travail doit payer : aucune combinaison d'aides au-dessus de 75% du SMIC",
    "Versement social unique : toutes les aides en un seul virement",
    "Préférence travailleurs (pas nationale) : logement, transports, priorité aux actifs",
    "Régalien : guerre au narcotrafic, prisons de haute sécurité, fermeté migratoire",
    "Candidature unique droite-centre désignée avant janvier 2027"
  ],

  proposals: [
    {
      title: "Versement social unique : toutes les aides en un seul virement",
      domain: "social",
      detail: "Fusionner le versement de l'ensemble des aides sociales (RSA, APL, prime d'activité, etc.) en un virement mensuel unique, calculé automatiquement à partir des revenus (« solidarité à la source »), créé « au plus vite ».",
      pros: [
        "Attaque le vrai scandale silencieux du système : le non-recours (~34% pour le RSA, ~30% pour le minimum vieillesse — DREES 2022) qui prive les plus pauvres de droits existants",
        "Simplification radicale d'un maquis de ~15 prestations aux bases ressources incompatibles — recommandée par tous les rapports depuis Sirugue (2016)",
        "L'infrastructure existe partiellement (préremplissage RSA/prime d'activité expérimenté depuis 2024) : c'est une accélération, pas une utopie"
      ],
      cons: [
        "Paradoxe budgétaire jamais assumé : résorber le non-recours COÛTE des milliards (les économistes chiffrent le non-recours au RSA seul à ~3 Md€/an non versés) — présenté comme une mesure d'ordre, c'est en réalité une dépense nouvelle",
        "La fusion des bases ressources fait mécaniquement des perdants (simulations DREES/IPP sur l'allocation sociale unique) sauf enveloppe supplémentaire",
        "Chantier informatique de 5-10 ans (précédents : prélèvement à la source réussi, mais DSN et RSA préfiguré laborieux) — incompatible avec le « au plus vite »"
      ],
      plausibility: 6,
      plausibility_note: "Direction déjà engagée par l'administration (solidarité à la source) ; faisable législativement. Le calendrier et l'arbitrage perdants/gagnants sont les vrais obstacles. Paradoxalement plus crédible que la plupart des mesures du champ 2027 parce que le chantier existe déjà.",
      cost_estimate: "Non chiffré par Darmanin. Références : coût de résorption du non-recours RSA ~3 Md€/an (DREES) ; coût projet informatique : centaines de M€ ; économies de gestion CAF à terme : ~1 Md€/an potentiel."
    },
    {
      title: "Plafonnement de l'ensemble des aides sociales à 75% du SMIC",
      domain: "social",
      detail: "Aucune combinaison d'aides sociales ne pourra dépasser 75% du SMIC net, pour garantir que le travail paie toujours davantage que l'assistance et « inciter au retour à l'emploi ».",
      pros: [
        "Principe lisible et majoritaire dans l'opinion (l'écart travail/assistance est une préoccupation constante des baromètres, y compris chez les ouvriers et employés)",
        "Cible un vrai sujet de conception : l'empilement non coordonné des aides peut créer localement des taux marginaux de prélèvement >70% au retour à l'emploi (rapports CPO)",
        "Simple à énoncer, simple à contrôler une fois le versement unique créé — cohérence interne avec sa première mesure"
      ],
      cons: [
        "La prémisse est largement fausse : depuis la prime d'activité, la reprise d'emploi est quasi systématiquement gagnante financièrement (études DREES/CAF sur les cas-types) — les configurations où « l'assistance paie plus » sont marginales et concernent surtout des familles nombreuses via les APL",
        "Le plafond frapperait d'abord les familles monoparentales et nombreuses (les aides par enfant s'additionnent) : effet direct sur la pauvreté infantile, jamais évalué publiquement",
        "Comparaison biaisée : le « 75% du SMIC » compare un revenu de ménage (aides pour plusieurs personnes) à un salaire individuel — l'unité de compte est incohérente"
      ],
      plausibility: 4,
      plausibility_note: "Législativement possible mais constitutionnellement risqué (exigences de dignité et d'égalité — le CC a déjà encadré les réductions de prestations) et socialement explosif dès que les cas-types (mère isolée, 3 enfants) sortiront. Le RN et LR proposent des variantes : majorité imaginable à droite.",
      cost_estimate: "Économie potentielle non chiffrée par l'intéressé ; les dispositifs comparables (plafonnement type « cap » britannique) ont rapporté peu (~0,1-0,3 Md€/an équivalent) pour un coût social documenté (études IFS sur le benefit cap)."
    },
    {
      title: "« Préférence travailleurs » : priorité aux actifs dans le logement social et les aides",
      domain: "social",
      detail: "Donner la priorité aux travailleurs — « quelle que soit leur nationalité », précise-t-il pour se distinguer de la préférence nationale — dans l'accès au logement social, aux aides au transport et à certains services publics.",
      pros: [
        "Répond à une frustration réelle et documentée des travailleurs modestes (les « travailleurs pauvres » périurbains, cœur du vote RN) qui se perçoivent perdants du système redistributif",
        "Formellement distinct de la préférence nationale du RN : le critère est l'activité, pas la nationalité — différence juridique et morale réelle",
        "Des précédents partiels existent et fonctionnent (points « activité » dans la cotation DALO/logement social de certaines métropoles)"
      ],
      cons: [
        "Rupture d'égalité probable devant le Conseil constitutionnel si le critère « travail » évince les critères de besoin (le logement social a une base légale de destination aux plus modestes)",
        "Effet pervers mécanique : déprioriser les non-actifs = déprioriser les retraités pauvres, les invalides, les mères isolées — publics qui ne « choisissent » pas l'inactivité",
        "Fonction politique ambiguë : le mot « préférence » est choisi pour résonner avec le lexique RN tout en s'en distinguant — triangulation lexicale qui légitime le cadre adverse"
      ],
      plausibility: 4,
      plausibility_note: "Des versions modestes (pondération activité dans les attributions HLM) passent ; la version forte (priorité générale) se heurte au principe d'égalité et au droit au logement. Comme souvent chez Darmanin, la mesure réelle sera bien plus petite que le slogan.",
      cost_estimate: "Coût budgétaire direct quasi nul (réallocation de files d'attente, pas de dépense) — c'est une mesure distributive, dont les perdants sont les non-actifs prioritaires actuels."
    },
    {
      title: "Guerre au narcotrafic : prisons de haute sécurité, régime carcéral dérogatoire (bilan à prolonger)",
      domain: "sécurité",
      detail: "Prolongation présidentielle de son bilan de garde des Sceaux : loi narcotrafic (2025), quartiers/prisons de haute sécurité pour les 100 plus gros narcotrafiquants (Vendin-le-Vieil), parquet national anticriminalité organisée (PNACO), isolement carcéral renforcé.",
      pros: [
        "Le diagnostic est incontestable : le narcotrafic irrigue ~3-6 Md€/an, corrompt ports, prisons et élus locaux (rapports sénatoriaux 2024), et les règlements de comptes touchent désormais les villes moyennes",
        "S'inspire d'un précédent qui a réellement fonctionné : le régime « 41-bis » italien contre la mafia, dont l'efficacité sur la déstructuration des commandements est documentée",
        "C'est le seul dossier où il a un bilan personnel récent, concret et daté (loi votée, établissement ouvert en 2025) — rare dans le champ 2027"
      ],
      cons: [
        "Le régime dérogatoire français est déjà attaqué devant le Conseil constitutionnel et la CEDH (conditions d'isolement) : une partie du dispositif peut tomber juridiquement",
        "Politique de l'offre carcérale sans politique de la demande : rien sur la consommation (la France reste 1er consommateur européen de cannabis), donc le marché se recompose — leçon de 50 ans de « guerres à la drogue »",
        "En tant que garde des Sceaux, il préside aussi à une surpopulation carcérale record (~82 000 détenus pour ~62 000 places en 2026) qui fabrique de la récidive — l'angle mort de son récit d'efficacité"
      ],
      plausibility: 8,
      plausibility_note: "C'est de la continuité d'action publique déjà votée et budgétée — la plausibilité est élevée par construction. L'incertitude est contentieuse (CC/CEDH) et opérationnelle (le 41-bis italien a mis une décennie à produire ses effets).",
      cost_estimate: "Loi narcotrafic + établissements dédiés : centaines de M€ (budget Justice 2025-2027) ; le coût global de l'immobilier pénitentiaire nécessaire reste celui documenté par la Cour des comptes (~400-500 k€/place)."
    },
    {
      title: "Fermeté migratoire : reprise de la ligne Beauvau (quotas, laïcité, expulsions)",
      domain: "immigration",
      detail: "Prolongement de sa doctrine de ministre de l'Intérieur : réduction de l'immigration familiale, expulsions facilitées des étrangers délinquants et radicalisés, lutte contre « l'islamisme séparatiste » (loi 2021), conditionnement des visas à la coopération des pays d'origine.",
      pros: [
        "Expérience d'exécution réelle : quatre ans à l'Intérieur, la loi séparatisme (2021) et la doctrine visas/laissez-passer consulaires ont produit des résultats mesurables (fermetures de structures, hausse temporaire des LPC obtenus du Maghreb en 2023)",
        "Sa distinction islam/islamisme est plus travaillée que la moyenne de la droite (lui-même se revendique de culture populaire et assume le dialogue avec le culte musulman)",
        "Le conditionnement migratoire de l'aide et des visas est devenu la position européenne majoritaire (pactes UE 2024)"
      ],
      cons: [
        "Bilan contesté par les faits : le taux d'exécution des OQTF est resté ~7-10% sous son ministère, l'immigration légale a atteint des records de titres délivrés — l'écart discours/résultat est béant",
        "Sa loi immigration (décembre 2023) a été votée avec les voix du RN puis censurée sur ~35% de ses articles (32 sur 86, Conseil constitutionnel, janvier 2024) : précédent de fabrication législative bâclée à des fins d'affichage",
        "La surenchère verbale (« ensauvagement », « décivilisation ») a un coût documenté : elle installe l'agenda du RN sans capter son électorat (le RN a progressé de 15 points pendant sa période Beauvau)"
      ],
      plausibility: 5,
      plausibility_note: "Les mesures administratives (visas, LPC, fermetures) sont dans la main de l'exécutif : faisables. Les mesures législatives butent sur les mêmes murs que 2023 (Constitution, CEDH, droit UE) — la censure de SA propre loi est le meilleur prédicteur.",
      cost_estimate: "Impact budgétaire faible ; coût d'exécution des éloignements : ~4 000-5 000 €/éloignement (Cour des comptes 2024)."
    },
    {
      title: "« Le travail doit payer » : désmicardisation et allègement sur les salaires modestes",
      domain: "économie",
      detail: "Faire que chaque heure travaillée rapporte visiblement plus que l'inactivité et que les hausses de salaires ne soient pas confisquées par la perte d'aides et les cotisations — ligne partagée avec Attal (« droit au brut ») et Philippe (« bouclier de charges »), version orientée bas salaires.",
      pros: [
        "Consensus technique réel sur le diagnostic : la « smicardisation » (60% de hausses du SMIC automatiques depuis 2021, tassement des grilles) et les taux marginaux confiscatoires au niveau du SMIC sont documentés (rapport Bozio-Wasmer 2024, commandé... par le gouvernement Attal)",
        "Positionnement distributif distinct dans le bloc central : il cible les 1-1,5 SMIC quand Philippe vise 1-2,5 SMIC — plus populaire, moins coûteux",
        "Cohérent avec sa sociologie électorale cible (ouvriers/employés du Nord)"
      ],
      cons: [
        "Aucun paramétrage publié : ni coût, ni instrument (cotisations ? prime ? barème) — au stade du slogan",
        "Le même objectif est déjà porté par ses deux rivaux directs : la valeur ajoutée spécifique de sa version n'est pas démontrée",
        "Toute désmicardisation par allègements supplémentaires aggrave le problème documenté par Bozio-Wasmer (trappe à bas salaires financée par l'État) si elle n'est pas couplée à une réforme des barèmes"
      ],
      plausibility: 5,
      plausibility_note: "Faisable en LFSS ; le sujet est mûr techniquement (rapport Bozio-Wasmer). Plausibilité moyenne par absence totale de paramétrage à ce jour.",
      cost_estimate: "Non chiffré. Référence : chaque point de cotisation salariale rendu aux salaires ≤1,5 SMIC ≈ 2-3 Md€/an."
    },
    {
      title: "Candidature unique de la droite et du centre, désignée avant janvier 2027",
      domain: "institutions",
      detail: "Méthode plus que mesure : organiser une désignation commune (primaire ou accord) du bloc central élargi — « de la droite et du centre, et peut-être même de la gauche républicaine » — sans attendre janvier 2027, pour éviter l'élimination mutuelle au 1er tour face à Bardella (36%) et Mélenchon.",
      pros: [
        "Arithmétiquement lucide : Philippe (14-16%) + Attal (8%) + Retailleau (8%) + divers s'éliminent mutuellement — la somme qualifierait largement, les parties peut-être aucune",
        "Il est le seul du bloc central à en faire un axe public constant, avec Wauquiez et Lisnard — les autres (Philippe, Attal) esquivent car ils se croient chacun le point de ralliement naturel",
        "Précédent réussi : la primaire de la droite 2016 a produit une dynamique (4,4 M de votants) même si le vainqueur a chuté ensuite"
      ],
      cons: [
        "Aucun mécanisme n'existe ni n'est accepté : Renaissance a déjà désigné Attal (mai 2026), Philippe refuse toute primaire depuis 2024 — la proposition arrive après que les jeux sont partiellement faits",
        "Les primaires françaises récentes ont surtout radicalisé les vainqueurs et fracturé les camps (2016, 2021) — le remède peut aggraver le mal",
        "Fonction stratégique personnelle transparente : distancé dans les sondages, Darmanin est celui qui a le plus besoin d'un mécanisme pour exister — l'appel au rassemblement est aussi un appel à rebattre les cartes"
      ],
      plausibility: 3,
      plausibility_note: "Ne dépend pas de lui : exige que Philippe (favori, aucun intérêt à une primaire) et Attal (déjà désigné) acceptent. Scénario réaliste : désistements négociés début 2027 sous la pression des sondages, pas une primaire organisée.",
      cost_estimate: "Coût d'organisation d'une primaire : ~5-10 M€ (autofinancée par les votants, précédents 2016/2021)."
    },
    {
      title: "Autorité régalienne : poursuite du réarmement judiciaire et pénitentiaire",
      domain: "sécurité",
      detail: "Continuité de son passage à la Justice : hausse du budget (loi de programmation justice 2023-2027 : +21% sur 5 ans, 10 000 recrutements dont 1 500 magistrats), comparutions plus rapides, extension des places de prison, fermeté sur les mineurs délinquants (il a soutenu l'atténuation de l'excuse de minorité).",
      pros: [
        "S'appuie sur une programmation déjà votée et partiellement exécutée — crédibilité d'exécution supérieure aux promesses ex nihilo",
        "Le sous-dimensionnement de la justice française est objectivé (CEPEJ : ~11 juges/100 000 hab contre ~24 en Allemagne) : le rattrapage est consensuel",
        "La rapidité de la réponse pénale est le paramètre le plus corrélé à l'effet dissuasif dans la littérature criminologique (certitude/célérité > sévérité)"
      ],
      cons: [
        "Contradiction structurelle : durcir les peines (sa ligne) + surpopulation record (~130%) sans construction au rythme promis = conditions indignes sanctionnées par la CEDH (arrêt J.M.B. c. France 2020) et récidive accrue",
        "Le durcissement pour les mineurs contredit les données (la délinquance des mineurs baisse tendanciellement depuis 10 ans dans les statistiques du ministère... de la Justice)",
        "Budget justice en concurrence frontale avec les plans d'économies de son propre camp (Attal sanctuarise, mais Philippe non)"
      ],
      plausibility: 7,
      plausibility_note: "Continuité d'une LPJ votée : plausible par construction. Les tensions sont budgétaires (post-2027) et conventionnelles (CEDH sur la surpopulation).",
      cost_estimate: "LPJ 2023-2027 : budget porté à ~11 Md€/an en 2027 (+21%) ; toute extension pénitentiaire au-delà : ~400-500 k€/place (référentiel APIJ/Cour des comptes)."
    }
  ],

  fallacies: [
    {
      claim: "« 48% des actes de délinquance à Paris sont le fait d'étrangers » (et 55% à Marseille, 39% à Lyon) — l'argument statistique fondateur de son discours immigration-sécurité.",
      fallacy_type: "biais de sélection + glissement sémantique",
      why_fallacious: "Triple glissement : (1) les chiffres comptent les personnes MISES EN CAUSE ou interpellées, pas les condamnées — or l'interpellation reflète aussi le ciblage policier et la précarité (SDF, sans-papiers plus facilement interpellables) ; (2) « délinquance à Paris » agrège une population de passage (touristes, non-résidents) rapportée implicitement à la population résidente ; (3) l'extrapolation « les étrangers causent la délinquance » ignore la structure (les étrangers sont surreprésentés dans les catégories jeunes, masculines, pauvres, urbaines — qui sont surreprésentées dans la délinquance quelle que soit la nationalité).",
      correction: "Les données nationales robustes : étrangers ~7,4% de la population, ~15-19% des mis en cause, surreprésentation réelle mais bien moindre après contrôle de l'âge, du sexe et du niveau de vie ; concentrée sur certains contentieux (vols simples), pas sur les violences graves. Un débat honnête utilise les condamnations et contrôle la structure démographique.",
      severity: "high"
    },
    {
      claim: "« L'assistanat ne doit pas rapporter plus que le travail » — justification du plafond 75% du SMIC.",
      fallacy_type: "homme de paille statistique (prémisse implicite fausse)",
      why_fallacious: "Le raisonnement suppose répandu un état du monde (l'inactivité paie plus que l'emploi) que les cas-types DREES/CAF réfutent depuis la prime d'activité : la reprise d'emploi est financièrement gagnante dans la quasi-totalité des configurations. La mesure « corrige » donc un problème essentiellement perçu, et son coût réel (pauvreté des familles nombreuses et monoparentales) frappe des gens qui ne sont pas dans l'arbitrage travail/assistance (enfants, invalides).",
      correction: "Le vrai problème documenté est ailleurs : les taux marginaux de prélèvement élevés au voisinage du SMIC (perte d'aides + cotisations) — il se traite par le lissage des barèmes (rapport Bozio-Wasmer), pas par un plafond sur les ménages pauvres.",
      severity: "high"
    },
    {
      claim: "« Une préférence aux travailleurs, quelle que soit leur nationalité » — présentée comme l'exact opposé de la préférence nationale.",
      fallacy_type: "euphémisation / triangulation lexicale",
      why_fallacious: "Le choix du mot « préférence » — signature lexicale du FN/RN depuis 1985 — n'est pas neutre : il importe le cadre (il y a des Français qui passent après) en changeant le critère (activité au lieu de nationalité). La distinction est réelle juridiquement mais la fonction rhétorique est de capter la charge émotionnelle du terme RN tout en gardant la respectabilité — au prix de légitimer l'idée qu'un tri des ayants droit est la réponse à la crise sociale.",
      correction: "Nommer la mesure pour ce qu'elle est (pondération des critères d'attribution) et publier qui perd : retraités pauvres, invalides, mères isolées — puis débattre de cet arbitrage-là.",
      severity: "medium"
    },
    {
      claim: "« Il y a beaucoup de candidats et pas beaucoup d'idées » (mai 2026).",
      fallacy_type: "dénigrement sans charge de la preuve inversée",
      why_fallacious: "L'attaque positionne son auteur comme l'homme des « idées » sans qu'il ait publié ni programme, ni chiffrage, ni calendrier — au moment où Attal publiait son plan finances publiques et Philippe sa méthode institutionnelle. L'asymétrie critique (juger les offres des autres sans exposer la sienne) est une stratégie sans risque logiquement vide : elle ne démontre rien sur ses propres idées.",
      correction: "L'aphorisme ne vaut que si suit une offre comparable et opposable. Jusqu'à publication d'un programme Darmanin chiffré, la déclaration est du positionnement, pas de l'analyse.",
      severity: "low"
    },
    {
      claim: "« Je ne trouve nulle part un candidat qui porte mes idées : l'ordre et la nation, avec une vraie question sociale » — l'espace politique vacant comme preuve de la nécessité de sa candidature.",
      fallacy_type: "faux dilemme d'offre (niche autodéfinie)",
      why_fallacious: "L'espace « ordre + nation + social » n'est vacant que si l'on découpe les axes exactement comme lui : le RN revendique littéralement ce triptyque (c'est même sa formule historique), Philippe et Attal ont chacun durci leurs volets régalien et social. La « place vide » est un artefact du cadrage — chaque candidat du champ construit la sienne (Villepin : « humanisme + ordre » ; Attal : « jeunesse + rigueur »).",
      correction: "Tester la niche empiriquement : les sondages le créditent de 3-5%, ce qui suggère que l'espace « Darmanin » est déjà servi ailleurs (par le RN pour l'électorat populaire, par Philippe pour l'électorat d'ordre gestionnaire).",
      severity: "medium"
    },
    {
      claim: "Son récit d'efficacité régalienne (« quand je décide, j'exécute ») fondé sur les fermetures de mosquées, dissolutions et lois portées à Beauvau.",
      fallacy_type: "cherry-picking de bilan",
      why_fallacious: "Sélectionne les indicateurs d'activité (textes votés, structures dissoutes, communication) et omet les indicateurs de résultat : exécution des OQTF stagnante (~7-10%), records de titres de séjour délivrés, loi immigration censurée au tiers, homicides en hausse sur sa période, Mayotte en crise permanente. L'activité législative et médiatique est prise pour de l'efficacité — la confusion exacte que dénonce la Cour des comptes sur les politiques de sécurité.",
      correction: "Évaluer sur les outcomes publiés (SSMSI, ministère Justice, Cour des comptes) : le bilan Beauvau est mixte, avec des réussites réelles (démantèlements, LPC 2023) et des échecs structurels (éloignements, narcotrafic en expansion sur la période).",
      severity: "high"
    }
  ],

  data_issues: [
    {
      claim: "« La moitié des actes de délinquance à Paris est le fait d'étrangers » (48% Paris, 55% Marseille, 39% Lyon — déclarations d'août 2022, régulièrement recyclées depuis).",
      problem: "sorti de contexte",
      reality: "Les chiffres mesurent la part des étrangers parmi les personnes mises en cause/interpellées dans certaines agglomérations — pas la « délinquance » (condamnations), pas la France (nationalement : étrangers ~7,4% de la population, ~15-19% des mis en cause selon les contentieux, SSMSI). La surreprésentation existe mais elle est fortement réduite après contrôle de l'âge, du sexe et de la précarité, et gonflée dans les grandes villes par les populations non résidentes. Les fact-checkers (Les Décodeurs, CheckNews) ont documenté ces limites dès 2022.",
      source: "SSMSI, Insécurité et délinquance (bilans annuels) ; Les Décodeurs/CheckNews, vérifications 2022 ; INSEE, population étrangère"
    },
    {
      claim: "La loi immigration de 2023 présentée comme le grand acquis législatif de sa méthode.",
      problem: "sorti de contexte",
      reality: "Le Conseil constitutionnel a censuré 32 des 86 articles (janvier 2024) — l'essentiel des durcissements ajoutés pour obtenir le vote LR/RN (quotas, caution étudiants, restrictions prestations) — principalement comme cavaliers législatifs. Le texte promulgué est proche de la version initiale ; la version « victoire idéologique » célébrée au vote n'a juridiquement jamais existé.",
      source: "Conseil constitutionnel, décision n° 2024-863 DC du 25 janvier 2024 ; Les Décodeurs, analyse de la censure"
    },
    {
      claim: "« Le versement social unique permettra de faire des économies et de lutter contre la fraude. »",
      problem: "invérifiable (et contre-intuitif)",
      reality: "Aucun chiffrage publié. La littérature disponible suggère l'inverse à court terme : l'automatisation résorbe le non-recours (~34% du RSA, ~3 Md€/an non réclamés — DREES), donc AUGMENTE la dépense sociale ; les économies de gestion (~1 Md€/an potentiel côté CAF) et les gains anti-fraude (fraude sociale détectée : ~2 Md€/an, très inférieure à la fraude fiscale) ne compensent pas mécaniquement. La mesure est bonne pour d'autres raisons (justice, simplicité) que celles avancées.",
      source: "DREES, études sur le non-recours (2022) ; Cour des comptes, rapports sur la fraude sociale ; CNAF"
    },
    {
      claim: "Le récit du « ministre qui expulse » : communication récurrente sur les chiffres d'éloignements d'étrangers délinquants.",
      problem: "exagéré",
      reality: "Le taux d'exécution des OQTF est resté de l'ordre de 7-10% sur sa période Beauvau (contre ~15-20% avant 2015) ; les hausses annoncées portent sur des volumes absolus faibles ou sur les « départs volontaires aidés ». La Cour des comptes (2024) documente le coût et la faible efficacité de la chaîne d'éloignement. Le contraste discours/données est l'un des plus documentés du champ politique français.",
      source: "Cour des comptes, « La politique de lutte contre l'immigration irrégulière » (janvier 2024) ; ministère de l'Intérieur, chiffres annuels de l'éloignement"
    }
  ],

  problematic_arguments: [
    {
      argument: "« Reconquérir les électeurs partis au RN » en reprenant leurs thèmes (ordre, nation, préférence) avec un vocabulaire adouci.",
      why_problematic: "Quinze ans de données électorales (2007-2026) montrent que la stratégie de siphonnage par imitation nourrit l'original : chaque durcissement du centre-droit a précédé une progression du RN, jamais un reflux. L'électeur préfère l'original à la copie quand la copie valide le diagnostic de l'original.",
      what_it_hides: "L'alternative jamais tentée par son camp : traiter les causes matérielles documentées du vote RN (services publics périphériques, revenu disponible, logement) — précisément les budgets que les plans d'économies de son bloc compriment."
    },
    {
      argument: "L'origine populaire (petit-fils de tirailleur algérien, enfance modeste à Tourcoing) comme brevet de légitimité sociale du discours.",
      why_problematic: "La biographie est réelle et politiquement puissante, mais elle est utilisée comme substitut de preuve : « je viens du peuple, donc ma politique est pour le peuple ». Or l'incidence d'une politique se juge à ses effets distributifs (qui gagne, qui perd au plafond des aides, à la préférence travailleurs), pas à la trajectoire de son auteur.",
      what_it_hides: "Que les perdants nets de ses mesures sociales phare (plafonnement, priorité actifs) seraient largement... les catégories populaires inactives : mères isolées, invalides, retraités pauvres du Nord qu'il revendique de représenter."
    },
    {
      argument: "Se présenter en homme libre (« Populaires », hors Renaissance) tout en restant ministre du gouvernement sortant.",
      why_problematic: "Le cumul est stratégiquement rationnel mais argumentativement intenable : il critique l'offre politique de son propre camp (« pas beaucoup d'idées ») tout en exerçant l'un des trois premiers postes régaliens de ce camp depuis 2020. Chaque échec du quinquennat qu'il dénonce est aussi le sien (Intérieur 2020-2024, Justice depuis 2024).",
      what_it_hides: "La question de responsabilité : sur l'immigration, la sécurité et la justice — ses trois thèmes — il est l'homme qui a exercé le pouvoir le plus longtemps de tous les candidats du champ, RN inclus."
    },
    {
      argument: "L'appel à la candidature unique « de la droite au centre, et peut-être même de la gauche républicaine » présenté comme dépassement de l'intérêt personnel.",
      why_problematic: "L'élargissement maximal du périmètre (jusqu'à la « gauche républicaine ») rend le rassemblement d'autant plus improbable qu'il est large — et fonctionne surtout comme une machine à empêcher la consolidation autour du favori actuel (Philippe), seul scénario où Darmanin n'a aucune carte.",
      what_it_hides: "Qu'aucun mécanisme de désignation n'est proposé concrètement (qui organise ? quel corps électoral ? quelle date ?) : l'appel au rassemblement sans procédure est un positionnement, pas un plan."
    }
  ],

  strong_ideas: [
    {
      idea: "Le versement social unique / solidarité à la source.",
      why_strong: "Rare mesure du champ 2027 qui améliore simultanément la justice (résorption du non-recours : 34% du RSA non réclamé), l'efficience (fusion des bases ressources, ~1 Md€ de gestion) et la confiance (fin du sentiment d'arbitraire des aides). Le chantier administratif est déjà engagé (préremplissage 2024-2025) : c'est exécutable. Précédent réussi de la même famille : le prélèvement à la source.",
      adoptable_by: "Littéralement tous les blocs — la gauche y voit l'accès aux droits, la droite le contrôle et la lisibilité. C'est probablement l'idée la plus consensuelle du cycle 2027, et Darmanin est paradoxalement crédible pour la porter (expérience Comptes publics 2017-2020, prélèvement à la source livré)."
    },
    {
      idea: "Le diagnostic électoral : le bloc central est mort s'il ne reparle pas aux classes populaires.",
      why_strong: "Analytiquement exact et documenté : l'électorat macroniste 2017-2022 s'est réduit aux CSP+ et retraités aisés (CEVIPOF, Ipsos sociologie électorale), pendant que le RN devenait le premier parti ouvrier ET employé. Un bloc central à 22% cumulés (Philippe+Attal) ne survit pas démographiquement. Darmanin est le seul de son camp à formuler le problème dans ces termes.",
      adoptable_by: "Tout le bloc central — le désaccord porte sur la réponse (imitation régalienne vs offre sociale-économique), pas sur le diagnostic. La gauche sociale-démocrate partage le même constat en miroir."
    },
    {
      idea: "Régime carcéral dérogatoire type 41-bis pour le haut du spectre du narcotrafic.",
      why_strong: "Import raisonné d'un dispositif étranger évalué : l'isolement des donneurs d'ordre a été un facteur documenté de l'affaiblissement de Cosa Nostra (magistrature antimafia italienne). Le narcotrafic français a précisément atteint le stade (corruption systémique, commandement depuis la détention) où l'outil devient pertinent. Mesure ciblée (~100 profils), pas populiste de masse.",
      adoptable_by: "Consensus sécuritaire large de LR au PS (la loi narcotrafic 2025 a été votée au-delà du bloc central) ; le point de vigilance transpartisan doit rester le contrôle juridictionnel des conditions d'isolement (CEDH)."
    },
    {
      idea: "Lisser les taux marginaux de prélèvement autour du SMIC (la version rigoureuse du « travail doit payer »).",
      why_strong: "Débarrassée de son emballage (« assistanat »), la mesure pointe un vrai défaut de conception documenté par le rapport Bozio-Wasmer 2024 : entre les cotisations, la perte de prime d'activité et d'APL, un salarié au SMIC peut ne garder que 30-40 centimes par euro d'augmentation. Lisser ces barèmes augmente le rendement du travail sans couper les aides de personne.",
      adoptable_by: "Attal (droit au brut) et Philippe (bouclier de charges) en portent des variantes ; la gauche peut l'adopter car la version « lissage » ne fait pas de perdants pauvres — contrairement au plafond à 75% du SMIC."
    }
  ],

  electorate: "Électorat cible plus que conquis : classes populaires et moyennes du Nord et des périphéries (son fief de Tourcoing/Hauts-de-France), électeurs de droite d'origine populaire hésitant entre RN et abstention, catholiques sociaux et Français de culture musulmane conservateurs sensibles à son double registre autorité/méritocratie. En l'état des sondages (3-5% testés), sa base réelle reste la droite gouvernementale du Nord et les réseaux d'élus locaux — l'écart entre l'électorat visé (ouvriers RN-compatibles) et l'électorat acquis (notables de centre-droit) est son problème stratégique central.",

  key_quotes: [
    {
      text: "Inch'Allah, on verra bien.",
      context: "Réponse sur ses ambitions présidentielles, entretenant le suspense tout en confirmant l'envie",
      source: "France Inter, 13 mai 2026 (repris par franceinfo)"
    },
    {
      text: "Il y a beaucoup de candidats et pas beaucoup d'idées. [La prochaine présidentielle sera] sans doute la plus importante que nous vivrons depuis au moins 30 ou 40 ans.",
      context: "Positionnement critique vis-à-vis de l'offre du bloc central (Philippe, Attal déclarés)",
      source: "France Inter / franceinfo, 13 mai 2026"
    },
    {
      text: "Non pas une préférence nationale, mais une préférence aux travailleurs, quelle que soit leur nationalité.",
      context: "Présentation de sa doctrine sociale lors du lancement de « Populaires » à Tourcoing",
      source: "Le JDD, compte rendu du lancement de Populaires"
    },
    {
      text: "Créer au plus vite le versement unique social [...] et que ces aides ne puissent pas dépasser 75% du SMIC.",
      context: "Les deux mesures sociales fondatrices de son mouvement (paraphrase fidèle des annonces de Tourcoing)",
      source: "Le JDD / populaires.net"
    },
    {
      text: "Je veux écrire le récit social du bloc central.",
      context: "Formulation de sa mission politique : reconquérir les classes populaires parties au RN",
      source: "Le JDD, lancement de Populaires à Tourcoing"
    },
    {
      text: "Une candidature unique de la droite et du centre, et peut-être même de la gauche républicaine.",
      context: "Son appel constant à la désignation rapide d'un candidat commun du bloc central élargi, avant janvier 2027",
      source: "Le JDD, 2026"
    }
  ],

  sources: [
    "https://www.franceinfo.fr/elections/presidentielle/presidentielle-2027-inch-allah-on-verra-bien-glisse-gerald-darmanin-sur-ses-ambitions-presidentielles_8001371.html",
    "https://www.franceinfo.fr/politique/gerald-darmanin/presidentielle-2027-gerald-darmanin-a-envie-d-etre-candidat-et-travaille-sur-un-projet_7211097.html",
    "https://www.lejdd.fr/politique/tourcoing-gerald-darmanin-en-homme-libre-lance-populaires-pour-2027-150028",
    "https://www.lejdd.fr/politique/presidentielle-2027-darmanin-prone-une-candidature-unique-de-la-droite-et-du-centre-et-peut-etre-meme-de-la-gauche-republicaine-169452",
    "https://populaires.net/",
    "https://www.cnews.fr/france/2026-01-25/presidentielle-2027-gerald-darmanin-revele-y-songer-1807185",
    "https://www.conseil-constitutionnel.fr/decision/2024/2024863DC.htm",
    "https://www.ccomptes.fr/fr/publications/la-politique-de-lutte-contre-limmigration-irreguliere",
    "https://www.franceinfo.fr/elections/presidentielle/l-ancien-premier-ministre-francois-bayrou-n-est-pas-candidat-a-l-election-presidentielle-de-2027_8054486.html"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["darmanin-2027"] = CONTENT_ELECTIONS_darmanin_2027;
