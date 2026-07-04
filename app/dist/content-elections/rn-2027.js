const CONTENT_ELECTIONS_rn_2027 = {
  id: "rn-2027",
  name: "Jordan Bardella / Marine Le Pen",
  party: "Rassemblement National (+ ralliement UDR d'Éric Ciotti)",
  bloc: "extreme-droite",
  spectrum: 8.5,
  status: "probable",
  status_note: "Au 4 juillet 2026 : Marine Le Pen condamnée en 1re instance (31 mars 2025) à 5 ans d'inéligibilité avec exécution provisoire (affaire des assistants d'eurodéputés FN). Procès en appel tenu janvier-février 2026 ; le parquet général a requis la confirmation des 5 ans d'inéligibilité mais SANS exécution provisoire. Décision de la cour d'appel de Paris attendue le 7 juillet 2026 à 13h30. Le Pen : « Si les réquisitions sont suivies, je serai empêchée ». Si elle est écartée, Jordan Bardella sera le candidat — il domine déjà tous les sondages (32-37% au 1er tour, Ifop/Ipsos/Odoxa juin 2026). Éric Ciotti (UDR, élu maire de Nice en mars 2026 face à Estrosi) a renoncé à toute candidature propre et soutient le candidat RN, quel qu'il soit : l'UDR n'existe plus comme offre présidentielle autonome.",
  color: "#0f2d5c",

  thesis: "La France est menacée dans son existence même par une immigration incontrôlée, une Union européenne qui dissout la souveraineté nationale et des élites mondialisées coupées du peuple. Il faut rendre le pouvoir aux Français (référendum, priorité nationale) et protéger à la fois l'identité (frontières, droit du sol) et le niveau de vie des classes populaires et moyennes (TVA énergie, retraites, salaires) contre le libre-échange et la technocratie bruxelloise.",
  counter_thesis: "Steelman adverse : le programme RN promet simultanément moins d'impôts, plus de dépenses sociales et le respect des traités — c'est arithmétiquement intenable (déficit déjà à ~5,5% du PIB, dette >113%) : l'Institut Montaigne chiffre le dérapage à ~+71 Md€/an. Ses économies reposent presque entièrement sur un « coût de l'immigration » scientifiquement contesté (OCDE : impact budgétaire net entre -1% et +1% du PIB). Et la priorité nationale exige une révision constitutionnelle juridiquement explosive (art. 1er, droit UE, CEDH) qui déclencherait un conflit institutionnel majeur. Enfin, un parti qui n'a jamais gouverné ni géré une grande collectivité offre zéro garantie d'exécution — le risque « Liz Truss » sur les taux de la dette française est réel.",

  program_pillars: [
    "Priorité nationale (emploi, logement, prestations) par référendum constitutionnel",
    "Réduction drastique de l'immigration : fin du droit du sol, suppression AME, exécution des OQTF",
    "Pouvoir d'achat : TVA énergie 5,5%, exonérations hausses de salaires, taxe foncière allégée",
    "Retraite à 60 ans pour carrières longues, abrogation de la réforme de 2023",
    "Souveraineté : primauté du droit national, sortie du marché européen de l'électricité, protectionnisme ciblé",
    "Régalien : peines planchers, présomption de légitime défense, expulsion des délinquants étrangers"
  ],

  proposals: [
    {
      title: "TVA à 5,5% sur l'énergie (électricité, gaz, carburants, fioul)",
      domain: "économie",
      detail: "Baisse de la TVA de 20% à 5,5% sur tous les produits énergétiques, présentée comme la mesure phare de pouvoir d'achat, prolongée par une sortie du marché européen de l'électricité pour revenir à un « prix français » adossé au nucléaire.",
      pros: [
        "Effet immédiat et visible sur les factures des ménages, y compris les plus modestes",
        "Cible une dépense contrainte qui pèse proportionnellement plus sur les ruraux et périurbains dépendants de la voiture",
        "Simple à administrer, pas de dossier à remplir (contrairement aux chèques énergie)"
      ],
      cons: [
        "Coût massif : 11 à 17 Md€/an selon les périmètres (IFRAP, Institut Montaigne), non financé",
        "Mesure non ciblée : les gros consommateurs (ménages aisés, grandes maisons) captent une part importante du gain",
        "La directive TVA européenne interdit un taux réduit sur les carburants : contentieux UE quasi certain sur ce volet",
        "Signal anti-transition : subventionner les énergies fossiles contredit les engagements climatiques"
      ],
      plausibility: 4,
      plausibility_note: "Possible sur l'électricité/gaz (la directive TVA 2022 l'autorise), illégal en droit UE sur les carburants sauf renégociation de la directive (unanimité des 27 requise). Budgétairement très difficile avec un déficit à ~5,5% du PIB et la France sous procédure de déficit excessif.",
      cost_estimate: "≈12 Md€/an (chiffrage RN) à 16,7 Md€/an (Institut Montaigne, législatives 2024) ; IFRAP dans la même fourchette."
    },
    {
      title: "Retraite à 60 ans pour 40 annuités (début avant 20 ans) + abrogation de la réforme de 2023",
      domain: "social",
      detail: "Retour à 60 ans pour ceux qui ont commencé avant 20 ans avec 40 annuités ; âge légal maintenu à 62 ans pour les autres (au lieu de 64), abrogation de la réforme Borne.",
      pros: [
        "Répond à une vraie inégalité : les carrières longues et pénibles ont une espérance de vie en bonne santé inférieure",
        "Politiquement majoritaire : la réforme de 2023 reste massivement rejetée dans l'opinion",
        "Version 2024 plus ciblée (et moins coûteuse) que la promesse « 60 ans pour tous » de 2022 — signe d'un apprentissage budgétaire"
      ],
      cons: [
        "Coût : ~10-25 Md€/an selon les paramètres (IFRAP), alors que le COR prévoit un déficit durable du système",
        "Aucun financement crédible en face : ni hausse de cotisations ni baisse de pensions assumées",
        "À rebours de tous les voisins européens (Allemagne 67 ans, Espagne 67, Italie 67) dans un contexte de vieillissement",
        "Dégraderait la crédibilité de la signature française au moment où la charge de la dette dépasse 60 Md€/an"
      ],
      plausibility: 3,
      plausibility_note: "Juridiquement faisable par loi ordinaire, mais budgétairement explosif : c'est le poste qui fait dérailler tous les chiffrages du programme. Une majorité parlementaire RN absolue serait nécessaire.",
      cost_estimate: "IFRAP : 9,6 à 25 Md€/an selon le périmètre carrières longues ; Institut Montaigne (2024) : contribue au dérapage global de +71 Md€/an."
    },
    {
      title: "Hausse des salaires nets via exonération de cotisations patronales sur les augmentations de 10%",
      domain: "économie",
      detail: "Inciter les entreprises à augmenter les salaires jusqu'à 10% (jusqu'à 3 SMIC) en exonérant ces hausses de cotisations patronales, avec l'objectif affiché d'un SMIC autour de 1 500 € net.",
      pros: [
        "Évite la destruction d'emplois qu'entraînerait une hausse brutale du SMIC brut imposée aux entreprises",
        "Cible le vrai problème français : l'écart entre coût du travail (élevé) et salaire net (faible)",
        "Mécanisme incitatif plutôt que coercitif, compatible avec la liberté contractuelle"
      ],
      cons: [
        "Effet d'aubaine massif : les entreprises qui allaient augmenter de toute façon empochent l'exonération",
        "Trou dans les caisses de la Sécurité sociale (3-5 Md€/an minimum) à compenser par le budget de l'État",
        "Aucune garantie de résultat : l'entreprise reste libre de ne pas augmenter",
        "Complexifie encore le mille-feuille des exonérations (déjà ~80 Md€/an d'allègements généraux)"
      ],
      plausibility: 6,
      plausibility_note: "Faisable par loi de financement de la Sécurité sociale, pas d'obstacle constitutionnel ni européen. Le vrai risque est l'inefficacité (effets d'aubaine) plus que l'infaisabilité.",
      cost_estimate: "3 à 7 Md€/an selon le taux de recours (fourchettes IFRAP/Institut Montaigne 2022-2024, jamais consolidées par le RN)."
    },
    {
      title: "Référendum constitutionnel instaurant la « priorité nationale »",
      domain: "immigration",
      detail: "Révision constitutionnelle par référendum (art. 11, en contournant le Parlement) pour instaurer la priorité aux Français dans l'accès à l'emploi, au logement social et aux prestations sociales, et faire primer la Constitution sur le droit européen et international.",
      pros: [
        "Cohérence démocratique : sur un sujet aussi clivant, faire trancher directement le peuple est défendable",
        "Répond à un sentiment réel de concurrence pour l'accès au logement social dans les zones tendues",
        "Clarifierait le conflit de normes droit national / droit UE au lieu de le laisser pourrir"
      ],
      cons: [
        "L'article 11 ne permet pas de réviser la Constitution (l'art. 89 exige un vote préalable des deux chambres) : utiliser le 11 serait un coup de force à la De Gaulle 1962, que le Conseil constitutionnel de 2026 ne laisserait probablement pas passer",
        "La priorité nationale viole l'art. 1er de la Constitution (égalité), le droit UE (non-discrimination des résidents légaux) et la CEDH : conflit juridique total, sanctions financières européennes probables",
        "Discrimination légalisée envers des étrangers en situation régulière qui cotisent aux mêmes caisses",
        "Précédent institutionnel dangereux : gouverner par référendum contre les cours, c'est le playbook illibéral (Hongrie)"
      ],
      plausibility: 2,
      plausibility_note: "Verrou constitutionnel majeur (art. 89 vs 11), incompatibilité frontale avec le droit UE et la CEDH. Même gagné, un tel référendum ouvrirait des années de guérilla juridique. C'est la mesure la moins plausible du programme — et sa clef de voûte.",
      cost_estimate: "Économies alléguées par le RN : ~8-16 Md€/an — chiffrage jugé infondé par l'Institut Montaigne et les fact-checkers (voir data_issues)."
    },
    {
      title: "Suppression du droit du sol",
      domain: "immigration",
      detail: "Fin de l'acquisition automatique de la nationalité à la majorité pour les enfants nés en France de parents étrangers ; naturalisation uniquement par mérite et assimilation démontrée.",
      pros: [
        "Existe ailleurs : la plupart des pays du monde (et l'Autriche, le Danemark en Europe) pratiquent le droit du sang dominant",
        "Réaffirme la nationalité comme adhésion et non comme automatisme — argument philosophique cohérent",
        "Réduirait l'incitation aux stratégies de naissance sur le sol français (phénomène réel quoique marginal, ~Mayotte)"
      ],
      cons: [
        "Impact numérique faible sur les flux (≈30 000 acquisitions/an par le sol) : mesure plus symbolique qu'efficace",
        "Fabriquerait des apatrides de fait et une population née, scolarisée et socialisée en France sans citoyenneté — bombe à retardement d'intégration",
        "Rupture avec une tradition républicaine ancienne (1889) qui a fait l'assimilation française",
        "Révision constitutionnelle probablement nécessaire selon une partie de la doctrine"
      ],
      plausibility: 4,
      plausibility_note: "Une loi ordinaire pourrait durcir les conditions (le Conseil constitutionnel a validé des restrictions à Mayotte en 2018), mais une suppression totale se heurterait vraisemblablement à des principes fondamentaux reconnus par les lois de la République. Faisable partiellement.",
      cost_estimate: "Impact budgétaire direct négligeable ; coûts administratifs et contentieux non chiffrés."
    },
    {
      title: "Suppression de l'Aide médicale d'État (AME)",
      domain: "santé",
      detail: "Remplacement de l'AME (couverture santé des étrangers en situation irrégulière, ~466 000 bénéficiaires) par une aide restreinte aux « urgences vitales ».",
      pros: [
        "Cohérence affichée : ne pas offrir une couverture complète à des personnes ayant vocation à quitter le territoire",
        "L'AME connaît une croissance réelle des dépenses (~1,2 Md€ en 2024, +50% en 10 ans) qui mérite un contrôle renforcé",
        "Mesure plébiscitée dans l'électorat de droite, y compris LR (Retailleau la défend aussi)"
      ],
      cons: [
        "Contre-productif sanitairement : soigner tard aux urgences coûte plus cher que soigner tôt en ville (consensus des fédérations hospitalières et de l'Académie de médecine)",
        "Risque de santé publique : renoncement aux soins = circulation accrue de tuberculose, VIH non traités",
        "1,2 Md€ = 0,5% des dépenses de santé : l'économie réelle serait marginale voire négative",
        "Le rapport Évin-Stefanini (2023, commandé par un gouvernement de droite) a conclu que l'AME n'était pas un facteur d'attractivité migratoire significatif"
      ],
      plausibility: 7,
      plausibility_note: "Faisable par loi de finances (majorité simple), le Sénat l'a déjà voté plusieurs fois. Les obstacles sont sanitaires et pratiques (les hôpitaux soigneront quand même, en non-remboursé), pas juridiques.",
      cost_estimate: "Économie brute affichée : ~1 Md€/an ; économie nette réelle probablement bien moindre (reports vers urgences et soins non programmés — FHF, rapport Évin-Stefanini)."
    },
    {
      title: "Exécution systématique des OQTF et « double frontière »",
      domain: "immigration",
      detail: "Exécution de toutes les obligations de quitter le territoire (taux d'exécution actuel ~7%), rétablissement de contrôles aux frontières nationales en plus de Frontex, expulsion systématique des délinquants et fichés S étrangers, loi d'urgence immigration dès les premières semaines (annoncé par Bardella pour Matignon en 2024, repris pour 2027).",
      pros: [
        "Le taux d'exécution des OQTF (~7-12% selon les années, Cour des comptes) est objectivement un échec d'État de droit : une décision de justice non exécutée à 90% délégitime l'État",
        "L'expulsion effective des étrangers condamnés pour crimes graves fait consensus bien au-delà du RN",
        "Pression diplomatique sur les laissez-passer consulaires : levier réel déjà utilisé (visas Maghreb 2021)"
      ],
      cons: [
        "L'obstacle principal n'est pas la volonté mais la coopération des pays d'origine (laissez-passer consulaires) : aucun gouvernement, même déterminé, n'exécute 100% des OQTF",
        "Coût logistique énorme : rétention, escortes, vols — l'Allemagne, plus dure, ne dépasse pas ~30%",
        "Contrôles permanents aux frontières intérieures = violation du code Schengen au-delà des dérogations temporaires",
        "Une partie des OQTF vise des déboutés d'asile protégés par le principe de non-refoulement (art. 33 Convention de Genève)"
      ],
      plausibility: 4,
      plausibility_note: "Amélioration du taux possible (levier visas/aide au développement), exécution « systématique » impossible : contraintes diplomatiques, Schengen, non-refoulement. Objectif directionnel plutôt que réalisable littéralement.",
      cost_estimate: "Non chiffré par le RN ; le RN compte au contraire 8 Md€ d'« économies immigration » — la Cour des comptes souligne à l'inverse le coût élevé de la rétention et de l'éloignement (plusieurs milliers d'€ par éloignement forcé)."
    },
    {
      title: "Privatisation de l'audiovisuel public",
      domain: "institutions",
      detail: "Vente de France Télévisions, Radio France et France Médias Monde, présentée comme une économie (~3 Md€ de dotation annuelle) et une réponse au « biais » supposé du service public.",
      pros: [
        "Économie budgétaire réelle et récurrente (~2,5-3 Md€/an de financement public) plus produit de cession ponctuel",
        "Débat légitime sur le périmètre du service public à l'heure du streaming",
        "Précédents partiels à l'étranger (privatisation de TF1 en 1987 n'a pas tué le paysage audiovisuel)"
      ],
      cons: [
        "Risque de concentration accrue des médias aux mains de quelques milliardaires (Bolloré, etc.) — problème démocratique documenté",
        "France Médias Monde = instrument d'influence internationale que la Russie/Chine seraient ravies de voir disparaître",
        "Valeur de cession probablement faible (modèle économique publicitaire saturé) : l'économie de 1,6 Md€ affichée par le RN est jugée optimiste",
        "L'information locale (France 3, France Bleu) n'est pas rentable et disparaîtrait largement"
      ],
      plausibility: 5,
      plausibility_note: "Juridiquement faisable par loi, politiquement coûteux, économiquement moins rentable qu'affiché. Le Conseil constitutionnel exigerait des garanties de pluralisme.",
      cost_estimate: "RN : 1,6 Md€/an d'économies (chiffrage IFRAP proche) ; recette de cession incertaine et non récurrente."
    },
    {
      title: "Suppression de la taxe foncière pour les primo-accédants (5 ans) et restrictions d'achat aux non-résidents",
      domain: "économie",
      detail: "Exonération temporaire de taxe foncière pour les primo-accédants, simplification des permis de construire, et restriction de l'achat immobilier par des investisseurs non-résidents dans les zones tendues.",
      pros: [
        "Cible un vrai point de blocage : les jeunes ménages exclus de la propriété par les taux et les prix",
        "La restriction aux non-résidents a des précédents fonctionnels (Canada 2023, Nouvelle-Zélande 2018, Suisse loi Koller)",
        "La taxe foncière a explosé (+20% en moyenne 2018-2024) et pèse sur les nouveaux propriétaires"
      ],
      cons: [
        "La taxe foncière finance les communes : l'État devrait compenser (~1-2 Md€/an) ou étrangler les maires",
        "Effet inflationniste probable : solvabiliser la demande sans augmenter l'offre fait monter les prix",
        "Restriction aux non-résidents contraire à la libre circulation des capitaux (art. 63 TFUE) pour les résidents UE",
        "L'impact des acheteurs étrangers sur les prix est marginal hors Paris/Côte d'Azur"
      ],
      plausibility: 5,
      plausibility_note: "Exonération foncière faisable avec compensation budgétaire ; restriction non-résidents applicable seulement aux extra-Européens (droit UE), ce qui vide en partie la mesure.",
      cost_estimate: "1 à 2 Md€/an pour l'exonération foncière (extrapolation IFRAP) ; non consolidé par le RN."
    },
    {
      title: "Sortie du marché européen de l'électricité",
      domain: "europe",
      detail: "Découpler le prix français de l'électricité du prix marginal européen (fixé par le gaz) pour faire payer aux Français le « vrai coût » du nucléaire amorti.",
      pros: [
        "Diagnostic partiellement juste : le mécanisme de prix marginal a fait payer aux Français des prix décorrélés du coût de production nucléaire pendant la crise 2022",
        "La rente nucléaire française est un avantage compétitif réel qui peut légitimement bénéficier d'abord aux consommateurs français",
        "Le débat sur la réforme du marché européen est légitime — l'UE elle-même l'a réformé en 2024 (CfD, contrats long terme)"
      ],
      cons: [
        "La France est exportatrice nette d'électricité (~89 TWh en 2024, record) : le marché européen lui rapporte des milliards",
        "« Sortir » unilatéralement violerait les traités et désorganiserait les interconnexions dont la France dépend lors des pics hivernaux",
        "La réforme européenne de 2024 + le nouveau nucléaire régulé (post-ARENH 2026) répondent déjà partiellement au problème",
        "Prix administrés bas = signal anti-investissement pour les 6-14 EPR2 annoncés"
      ],
      plausibility: 2,
      plausibility_note: "Incompatible avec le droit UE sans renégociation des traités ; la France ne peut pas rester physiquement interconnectée et sortir juridiquement du marché. Slogan plus que politique publique.",
      cost_estimate: "Le RN annonce des baisses de facture de 30-40% ; aucun chiffrage indépendant ne valide ce chiffre, et le manque à gagner exportateur n'est jamais décompté."
    },
    {
      title: "Peines planchers, présomption de légitime défense pour les forces de l'ordre, abaissement de la majorité pénale",
      domain: "sécurité",
      detail: "Rétablissement des peines planchers (supprimées en 2014), présomption de légitime défense pour policiers/gendarmes, exclusion de l'excuse de minorité pour les 16-18 ans récidivistes, construction de places de prison.",
      pros: [
        "L'inexécution des courtes peines et les remises automatiques nourrissent un sentiment d'impunité documenté",
        "La surpopulation carcérale (>120% en moyenne, >150% en maison d'arrêt) exige effectivement des places",
        "Les peines planchers ont existé (2007-2014) sans effondrement de l'État de droit"
      ],
      cons: [
        "Le bilan empirique des peines planchers Dati est faible : pas d'effet mesuré sur la récidive (études Chancellerie), mais +4 000 années de détention prononcées",
        "La « présomption de légitime défense » inverse la charge de la preuve pour l'usage de la force létale — contraire à la jurisprudence CEDH (art. 2, droit à la vie)",
        "Construire 20-40 000 places de prison prend 10-15 ans et 4-8 Md€ : toujours promis, jamais tenu (toutes majorités confondues)",
        "L'excuse de minorité atténuée existe déjà pour les 16-18 ans (le juge peut l'écarter)"
      ],
      plausibility: 5,
      plausibility_note: "Peines planchers et prisons : faisables par loi et budget (avec délais longs). Présomption de légitime défense : censure quasi certaine (Conseil constitutionnel + CEDH).",
      cost_estimate: "Plan prisons : 4-8 Md€ d'investissement + coûts de fonctionnement (~120 €/jour/détenu) ; non détaillé dans le chiffrage RN 2024."
    },
    {
      title: "Protectionnisme ciblé et « priorité nationale » dans la commande publique",
      domain: "économie",
      detail: "Réserver une part de la commande publique aux entreprises françaises, taxer certaines importations, renégocier les accords de libre-échange (Mercosur), « patriotisme économique ».",
      pros: [
        "Le refus du Mercosur en l'état est partagé par la FNSEA, une grande partie de LR et même Macron : diagnostic consensuel sur les clauses miroirs",
        "L'UE elle-même évolue vers plus de protection (mécanisme carbone aux frontières, instrument anti-coercition, Buy European Act en débat)",
        "Les asymétries normatives (bœuf aux hormones, déforestation) sont réelles"
      ],
      cons: [
        "Le « acheter français » dans la commande publique viole les directives marchés publics et les accords OMC (AMP) : inapplicable sans rupture",
        "La France exporte 30% de son PIB : une spirale protectionniste lui coûterait plus qu'elle ne rapporterait (économie très intégrée aux chaînes de valeur UE)",
        "Renchérit les intrants des entreprises françaises et les prix à la consommation — contradiction directe avec l'agenda pouvoir d'achat",
        "Le précédent Trump montre des gains sectoriels étroits pour des pertes diffuses larges"
      ],
      plausibility: 3,
      plausibility_note: "Compatible avec l'UE seulement dans sa version homéopathique (clauses miroirs, filières stratégiques). La version RN (priorité nationale commande publique) exige de désobéir aux traités.",
      cost_estimate: "Non chiffré sérieusement ; l'Institut Montaigne note que les recettes douanières espérées sont incompatibles avec le maintien dans l'union douanière."
    }
  ],

  fallacies: [
    {
      claim: "« L'immigration coûte 40 milliards d'euros par an à la France » (variantes Bardella : 30-40 Md€, parfois 70-100 Md€)",
      fallacy_type: "cherry-picking + appel à l'autorité douteuse",
      why_fallacious: "Le chiffre agrège les dépenses supposées sans les recettes (cotisations, TVA, impôts payés par les immigrés), s'appuie sur des « instituts » militants sans méthodologie revue par les pairs, et projette des moyennes de longues périodes sur une année unique. La variation même du chiffre selon les interviews (de 30 à 100 Md€) trahit l'absence de base solide.",
      correction: "Les deux études de référence (OCDE 2021, CEPII 2018) concluent à un impact budgétaire net de l'immigration compris entre -1% et +1% du PIB — c'est-à-dire proche de la neutralité. Le CEPII estime -0,49% du PIB pour 2011 (~8,8 Md€), jamais un déterminant du déficit. On peut débattre de l'immigration sur d'autres terrains ; le terrain budgétaire ne donne pas les chiffres du RN.",
      severity: "high"
    },
    {
      claim: "« Les entrées irrégulières en Europe ont bondi de 300% » (Bardella, citant Frontex)",
      fallacy_type: "cherry-picking temporel",
      why_fallacious: "Le pourcentage est obtenu en choisissant comme point de départ l'année Covid (2020-2021), où les flux étaient artificiellement écrasés par les fermetures de frontières. Toute grandeur comparée à un creux exceptionnel « explose ».",
      correction: "Franceinfo (Vrai du Faux) : la hausse réelle sur une base de comparaison normale est très inférieure ; Frontex, cité comme source, ne valide pas ce chiffre. Les franchissements irréguliers détectés ont d'ailleurs fortement baissé en 2024-2025 (-38% en 2024 selon Frontex).",
      severity: "medium"
    },
    {
      claim: "« Supprimer les dépenses liées à l'immigration financera nos mesures » (8 à 16 Md€ d'économies affichées)",
      fallacy_type: "chiffrage magique / pétition de principe",
      why_fallacious: "Le financement du programme repose sur des économies dont la réalisation suppose déjà résolu ce qui est en question : que les expulsions massives soient possibles (elles ne le sont pas à ce niveau), que la priorité nationale soit constitutionnelle (elle ne l'est pas), et que ces mesures ne coûtent rien à mettre en œuvre (rétention et éloignement sont chers).",
      correction: "L'Institut Montaigne (2024) : 85 Md€ de dépenses nouvelles contre 14 Md€ d'économies « affichées » dont la faisabilité juridique et politique est incertaine → déficit aggravé de ~71 Md€/an. Un chiffrage honnête doit provisionner le coût des contentieux et des sanctions UE.",
      severity: "high"
    },
    {
      claim: "« La France connaît une submersion migratoire »",
      fallacy_type: "appel à la peur + hyperbole statistique",
      why_fallacious: "« Submersion » suggère un phénomène hors de contrôle et existentiel. La France compte ~10,7% d'immigrés (INSEE 2024), dans la moyenne ouest-européenne, en dessous de l'Allemagne, de la Suède, de l'Autriche, de la Suisse. Les flux augmentent, mais le vocabulaire hydraulique transforme une évolution graduelle et mesurable en catastrophe imminente qui suspend le débat rationnel.",
      correction: "Débat légitime : le rythme (+ ~320 000 premiers titres/an, record d'immigration étudiante et de travail), la concentration territoriale et les échecs d'intégration. Mais un vocabulaire de catastrophe naturelle n'est pas une donnée — l'INSEE et l'INED fournissent les vraies séries longues, en croissance régulière, pas en « submersion ».",
      severity: "high"
    },
    {
      claim: "« L'insécurité explose à cause de l'immigration » (association systématique des deux thèmes)",
      fallacy_type: "corrélation/causalité + généralisation abusive",
      why_fallacious: "La surreprésentation des étrangers dans certaines statistiques de délinquance (réelle sur certains segments, notamment à Paris) est présentée comme un lien causal nationalité→crime, sans contrôler les variables confondantes massives : âge, sexe, pauvreté, urbanité, statut administratif, probabilité différentielle d'interpellation. On infère du groupe à l'individu.",
      correction: "Les études contrôlées (CEPII, littérature internationale) trouvent un lien faible ou nul entre immigration et criminalité une fois les variables socio-économiques contrôlées ; le débat académique reste ouvert sur certains segments (voir Atlantico/Stefanini pour le contre-argument de droite), mais l'énoncé RN — causalité directe et massive — n'est soutenu par aucune étude sérieuse.",
      severity: "high"
    },
    {
      claim: "« Soit la soumission à Bruxelles, soit la France libre » (cadrage européen du RN)",
      fallacy_type: "fausse dichotomie",
      why_fallacious: "Présente l'alternative comme binaire alors que l'UE est un espace de négociation permanent où la France a obtenu des inflexions majeures (taxonomie nucléaire, réforme du marché électrique 2024, assouplissement PSC). Le RN a d'ailleurs lui-même abandonné le Frexit et la sortie de l'euro — preuve que sa propre dichotomie était fausse.",
      correction: "La question réelle est : quel rapport de force et quelles coalitions pour infléchir les règles ? L'abandon successif par le RN du Frexit, de la sortie de l'euro puis de la sortie de Schengen montre que le parti le sait.",
      severity: "medium"
    },
    {
      claim: "« Nous, on n'a jamais essayé — tout le reste a échoué »",
      fallacy_type: "sophisme du nirvana / appel à la nouveauté",
      why_fallacious: "L'absence de bilan est présentée comme une vertu probante. Or ne pas avoir gouverné ne prouve pas qu'on gouvernerait bien ; ça prouve seulement qu'on n'a pas encore pu échouer. Les bilans disponibles (gestion des mairies RN, alliés européens au pouvoir : Meloni ayant renoncé à l'essentiel de son programme économique, expérience Truss) suggèrent au mieux la normalisation, au pire le mur budgétaire.",
      correction: "Évaluer le RN sur ce qui est observable : votes au Parlement (européen et national), gestion municipale, cohérence des chiffrages, capacité à recruter des cadres compétents — critères sur lesquels le bilan est mitigé.",
      severity: "medium"
    }
  ],

  data_issues: [
    {
      claim: "Coût net de l'immigration : « 30 à 40 milliards par an » (Bardella, avril 2024, répété en 2025-2026)",
      problem: "faux",
      reality: "OCDE (Perspectives des migrations 2021) : contribution budgétaire nette des immigrés entre -1% et +1% du PIB selon les années — quasi neutre. CEPII (2018) : -0,49% du PIB en 2011 (~8,8 Md€), et « l'immigration n'a jamais déterminé l'ampleur du solde budgétaire » sur 1979-2011. Les chiffres de Bardella proviennent d'officines militantes (OID) sans validation académique.",
      source: "AFP Factuel ; De Facto (Observatoire) « attention aux chiffres trompeurs de 35 à 40 milliards » ; OCDE 2021 ; CEPII WP 2018-04 ; Fondation Jean-Jaurès."
    },
    {
      claim: "« +300% d'entrées irrégulières en Europe » attribué à Frontex",
      problem: "faux / sorti de contexte",
      reality: "Comparaison construite sur l'année Covid comme base. Frontex ne publie pas ce chiffre ; sur des bases normales la hausse est bien moindre, et 2024 a vu une baisse de 38% des franchissements irréguliers détectés (Frontex, bilan 2024).",
      source: "Franceinfo, Le Vrai du Faux ; données Frontex 2024."
    },
    {
      claim: "« La fraude sociale des étrangers coûte des dizaines de milliards » (thème récurrent RN, cartes Vitale surnuméraires)",
      problem: "exagéré",
      reality: "La fraude sociale détectée est ~2,1 Md€ (2023, toutes nationalités) ; les estimations hautes de fraude totale (Cour des comptes, HCFiPS) restent très en deçà des « dizaines de milliards », et la fraude fiscale (80-100 Md€ estimés) est un ordre de grandeur supérieur. Le mythe des « millions de cartes Vitale fantômes » a été démonté : les cartes surnuméraires sont massivement inactives.",
      source: "Cour des comptes (rapports fraude aux prestations) ; Les Décodeurs ; CheckNews sur les cartes Vitale."
    },
    {
      claim: "« La baisse de TVA sur les carburants est possible, l'Europe le permet »",
      problem: "faux",
      reality: "La directive TVA (2022/542) autorise des taux réduits sur électricité et gaz, mais PAS sur les carburants routiers. Un taux à 5,5% sur l'essence/diesel exposerait la France à une procédure d'infraction. Les Surligneurs l'ont relevé dès 2022 et le point reste valable en 2026.",
      source: "Les Surligneurs ; directive (UE) 2022/542 ; Institut Montaigne (chiffrage 2024)."
    },
    {
      claim: "« Le programme est financé » (Bardella présentant le contre-budget RN)",
      problem: "invérifiable / contredit par les chiffrages indépendants",
      reality: "Institut Montaigne (2024) : 85 Md€ de coûts nouveaux, 14 Md€ d'économies incertaines → +71 Md€/an de déficit supplémentaire. IFRAP (orientation libérale, pas hostile à la droite) aboutit aussi à un solde très négatif. Aucun chiffrage indépendant ne valide l'équilibre affiché, dans un contexte de déficit ~5,5% du PIB et de dette >113%.",
      source: "Institut Montaigne, chiffrage législatives 2024 ; Fondation IFRAP, « Le vrai coût du programme du Rassemblement National »."
    },
    {
      claim: "« 10,7% d'immigrés = submersion » (usage du stock comme preuve d'un emballement)",
      problem: "sorti de contexte",
      reality: "INSEE 2024 : 7,3 millions d'immigrés (10,7% de la population), dont ~35% ont acquis la nationalité française. Proportion comparable à la moyenne ouest-européenne, inférieure à l'Allemagne (~18% de nés à l'étranger), l'Autriche ou la Suède. La hausse est réelle et régulière (8,5% en 2010), pas exponentielle.",
      source: "INSEE, « L'essentiel sur les immigrés et les étrangers » (édition 2024) ; Eurostat, population née à l'étranger."
    }
  ],

  problematic_arguments: [
    {
      argument: "« Les Français d'abord » : la priorité nationale comme réponse universelle (emploi, logement, prestations)",
      why_problematic: "Institue une discrimination légale entre contribuables : un étranger en situation régulière qui cotise aux mêmes caisses percevrait moins de droits. Rupture avec le principe d'égalité (art. 1er Constitution) et avec la logique assurantielle de la Sécurité sociale.",
      what_it_hides: "Que les problèmes visés (pénurie de logement social, salaires faibles) sont des problèmes d'OFFRE (construction insuffisante, productivité, coût du travail) que la priorité nationale ne résout pas : exclure des étrangers d'une file d'attente ne construit aucun logement."
    },
    {
      argument: "La normalisation stratégique : abandon successif du Frexit, de la sortie de l'euro, de la retraite à 60 ans pour tous — sans jamais reconnaître que les critiques d'hier étaient fondées",
      why_problematic: "Le parti a soutenu pendant 15 ans des positions (sortie de l'euro) dont il admet implicitement aujourd'hui qu'elles auraient été catastrophiques, sans audit public de ces revirements. Cela interroge la fiabilité des positions actuelles : lesquelles seront abandonnées à leur tour, et lesquelles seront réellement tentées ?",
      what_it_hides: "L'incertitude radicale sur ce qu'un gouvernement RN ferait vraiment : le programme officiel est-il un plan d'action ou un produit d'appel électoral ? L'exemple Meloni (programme économique largement abandonné au pouvoir) suggère la deuxième hypothèse — ce qui rassure sur les risques mais ruine la promesse de « rupture »."
    },
    {
      argument: "« La justice politique veut empêcher le peuple de voter Le Pen » (cadrage du procès des assistants parlementaires)",
      why_problematic: "Transforme une affaire pénale documentée (détournement de fonds publics européens, ~4,5 M€, système organisé reconnu par le tribunal en mars 2025) en complot politique. Attaquer l'institution judiciaire elle-même — plutôt que la décision par les voies de recours — affaiblit l'État de droit que le RN prétend restaurer sur le régalien.",
      what_it_hides: "Le fond du dossier : le tribunal a jugé établi un système de détournement au profit du parti. La question légitime (l'exécution provisoire d'une inéligibilité avant épuisement des recours est-elle proportionnée pour une candidate à la présidentielle ?) est noyée sous la délégitimation globale des juges — alors que le parquet général lui-même a requis en appel SANS exécution provisoire, preuve que le système judiciaire s'auto-corrige."
    },
    {
      argument: "Le double discours économique : protectionniste et social devant les ouvriers, rassurant devant les milieux d'affaires (dette, euro, entreprises)",
      why_problematic: "Les deux promesses sont incompatibles : on ne peut pas simultanément rassurer le marché obligataire (spread OAT-Bund déjà sensible) et dépenser 71 Md€ non financés. L'électeur ouvrier et le chef d'entreprise reçoivent deux programmes différents.",
      what_it_hides: "L'arbitrage inévitable : au pouvoir, il faudrait sacrifier soit les promesses sociales (trahison de l'électorat populaire), soit la stabilité financière (crise à la Truss). Le programme ne dit jamais lequel des deux serait sacrifié."
    },
    {
      argument: "L'écologie réduite à « l'écologie punitive » à abattre (moratoire éolien, retour au thermique, détricotage des ZFE)",
      why_problematic: "Utilise le coût social réel de certaines politiques climatiques pour délégitimer toute politique climatique. Le RN ne propose aucune trajectoire alternative de décarbonation chiffrée alors que le changement climatique frappe d'abord son électorat rural (sécheresses agricoles, assurabilité).",
      what_it_hides: "Le coût de l'inaction (chiffré par le rapport Pisani-Ferry/Mahfouz et la Cour des comptes) et le fait que le nucléaire seul, à horizon 2035, ne suffit pas — les EPR2 n'arriveront pas avant 2038-2040."
    }
  ],

  strong_ideas: [
    {
      idea: "L'exécution effective des décisions d'éloignement (OQTF) comme exigence d'État de droit",
      why_strong: "Un taux d'exécution de ~7-12% des OQTF (Cour des comptes) est objectivement pathologique : des décisions administratives et judiciaires massivement non appliquées délégitiment l'État bien au-delà de l'immigration. Le levier diplomatique (visas contre laissez-passer consulaires) a fait ses preuves en 2021. Le diagnostic est repris par LR, Horizons et une partie de la gauche républicaine.",
      adoptable_by: "Tous les blocs de gouvernement : un centre ou une droite classique peut viser un doublement crédible du taux d'exécution (vers les standards allemands ~25-30%) par la diplomatie migratoire et les moyens de rétention, sans reprendre la promesse impossible du 100%."
    },
    {
      idea: "La fiscalité énergétique est régressive : protéger les ménages contraints à la voiture",
      why_strong: "Diagnostic validé par l'INSEE et le Conseil des prélèvements obligatoires : les taxes sur l'énergie pèsent proportionnellement 2 à 3 fois plus sur les ruraux modestes que sur les urbains aisés. Les Gilets jaunes l'ont démontré politiquement. Le RN est le seul à en avoir fait un axe central — c'est une vraie faille des politiques climatiques actuelles.",
      adoptable_by: "Centre et gauche : versions ciblées (chèque carburant travailleurs, tarification progressive de l'électricité, fléchage des recettes carbone vers les ménages contraints — dividende carbone à la canadienne) plutôt que TVA uniforme."
    },
    {
      idea: "Prendre au sérieux la demande référendaire sur les grands choix migratoires",
      why_strong: "50 ans de politiques migratoires sans consultation directe nourrissent le sentiment de dépossession démocratique — le diagnostic est repris par Retailleau (LR) quasi mot pour mot. Les précédents suisses et danois montrent qu'un encadrement démocratique dur de l'immigration peut coexister avec l'État de droit. La demande de démocratie directe dépasse largement l'électorat RN.",
      adoptable_by: "LR (déjà fait), centre : un référendum régulier par l'art. 89 (ou une loi de programmation migratoire quinquennale votée solennellement) capterait la demande démocratique sans le coup de force de l'art. 11."
    },
    {
      idea: "Le décrochage entre coût du travail et salaire net comme problème central",
      why_strong: "La France a l'un des coins socio-fiscaux les plus élevés de l'OCDE : le brut coûte cher à l'employeur, le net déçoit le salarié. L'exonération des hausses de salaire est une mauvaise réponse (effets d'aubaine), mais le diagnostic — augmenter le net sans alourdir le coût — structure désormais le débat de Lisnard à la CFDT.",
      adoptable_by: "Droite libérale et centre : bascule cotisations→TVA/CSG, réduction des trappes à bas salaires en lissant les exonérations (smicardisation), plutôt que des exonérations ad hoc."
    },
    {
      idea: "Refus du Mercosur sans clauses miroirs",
      why_strong: "L'asymétrie normative (hormones, pesticides interdits en UE, déforestation) est documentée ; la position rejoint la FNSEA, la Confédération paysanne, LR et une partie de la majorité. Position RN validée par les faits davantage que sa doctrine protectionniste générale.",
      adoptable_by: "Tous les blocs — c'est déjà une quasi-position française officielle ; la version utile est « clauses miroirs + contrôles renforcés », pas la sortie du commerce international."
    }
  ],

  electorate: "Premier parti ouvrier et employé de France : surreprésentation massive des CSP populaires, des 25-49 ans, des non-diplômés du supérieur, du périurbain et des zones rurales industrielles (Hauts-de-France, Grand Est, pourtour méditerranéen, Garonne). Faible chez les cadres urbains, les retraités aisés (en progression toutefois) et les diplômés bac+5. Bardella y ajoute une pénétration inédite chez les 18-24 (premier parti chez les jeunes actifs non étudiants) et entame la digue des retraités qui avait coûté 2022 à Le Pen. Vote d'abord motivé par immigration, insécurité et pouvoir d'achat ; fort sentiment de relégation territoriale.",

  key_quotes: [
    {
      text: "Si les réquisitions sont suivies, je serai empêchée.",
      context: "Marine Le Pen sur sa possible inéligibilité, avant la décision d'appel du 7 juillet 2026",
      source: "France 24 / franceinfo, juillet 2026"
    },
    {
      text: "Il faudra la présidence de la République, parce que cela nécessitera une révision constitutionnelle et cela se fera par référendum.",
      context: "Jordan Bardella sur la mise en œuvre de la priorité nationale",
      source: "France 2, campagne législative 2024 (position maintenue pour 2027)"
    },
    {
      text: "Si Jordan Bardella est candidat, il aura son propre programme et sa vision des choses.",
      context: "Louis Aliot, vice-président du RN, acte l'autonomisation programmatique de Bardella par rapport à l'héritage Le Pen",
      source: "franceinfo, 2026"
    },
    {
      text: "J'appelle à l'union des droites : ceux qui partagent les mêmes idées doivent travailler ensemble.",
      context: "Éric Ciotti (UDR), maire de Nice depuis mars 2026, rallié au candidat RN quel qu'il soit — paraphrase fidèle de sa ligne constante depuis 2024",
      source: "LCP / Public Sénat, 2024-2026"
    },
    {
      text: "Le programme du RN aggraverait le déficit public d'environ 71 milliards d'euros par an.",
      context: "Chiffrage indépendant du programme législatif 2024, base du programme 2027",
      source: "Institut Montaigne, juin 2024"
    }
  ],

  sources: [
    "https://www.france24.com/fr/france/20260702-proces-appel-marine-le-pen-quels-scenarios-possibles-7-juillet-ineligibilite-rassemblement-national-eurodeputes-fn-jugement",
    "https://lcp.fr/actualites/marine-le-pen-cinq-ans-d-ineligibilite-requis-en-appel-dans-l-affaire-des-assistants-d",
    "https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/direct-proces-en-appel-de-marine-le-pen-suivez-les-dernieres-plaidoiries-de-la-defense-avant-la-mise-en-delibere-de-la-decision_7796651.html",
    "https://www.institutmontaigne.org/legislatives-2024/rassemblement-national/synthese/",
    "https://www.ifrap.org/budget-et-fiscalite/le-vrai-cout-du-programme-du-rassemblement-national",
    "https://www.elyseescope.com/le-radar/programme-bardella-2027-protectionnisme-retraite-pouvoir-achat",
    "https://www.franceinfo.fr/replay-radio/le-vrai-du-faux/le-vrai-du-faux-immigration-le-nombre-d-entrees-irregulieres-en-europe-a-t-il-bondi-de-300-comme-le-dit-jordan-bardella_5802017.html",
    "https://defacto-observatoire.fr/Medias/Factuel/Fact-checks/Cout-de-l-immigration-attention-aux-chiffres-trompeurs-de-35-a-40-milliards-d-euros-annuels/",
    "https://www.cepii.fr/PDF_PUB/wp/2018/wp2018-04.pdf",
    "https://lessurligneurs.eu/immigration-les-promesses-et-les-non-dits-du-programme-du-rassemblement-national/",
    "https://www.publicsenat.fr/actualites/politique/eric-ciotti-confortablement-elu-a-nice-face-a-christian-estrosi",
    "https://ecfr.eu/publication/if-bardella-wins-scenarios-for-a-far-right-presidency-in-france/",
    "https://fr.wikipedia.org/wiki/%C3%89lection_pr%C3%A9sidentielle_fran%C3%A7aise_de_2027",
    "Ipsos-bva, intentions de vote présidentielle 2027, juin 2026 ; Ifop 25 juin 2026 ; baromètre Odoxa juin 2026"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["rn-2027"] = CONTENT_ELECTIONS_rn_2027;
