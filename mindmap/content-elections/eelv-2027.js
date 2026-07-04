const CONTENT_ELECTIONS_EELV_2027 = {
  id: "eelv-2027",
  name: "Marine Tondelier",
  party: "Les Écologistes (ex-EELV)",
  bloc: "gauche",
  spectrum: -5.5,
  status: "déclaré",
  status_note: "Candidature déclarée le 22 octobre 2025 (Nouvel Obs : « un acte d'amour pour la France »), désignée candidate des Écologistes le 8 décembre 2025 avec 86% des voix. Co-fondatrice et candidate de la primaire de la gauche unitaire du 11 octobre 2026, face à Ruffin et Autain — sa candidature finale dépend donc du résultat de cette primaire. Secrétaire nationale du parti depuis décembre 2022, élue d'Hénin-Beaumont où elle a construit son identité politique face au RN. Sondages en candidature autonome : ~2,5% (IFOP 25/06/2026) — la primaire est sa seule voie vers un espace significatif.",
  color: "#16a34a",

  thesis: "Le dérèglement climatique n'est plus une prévision mais un présent (canicules, sécheresses, assurabilité) : il faut un État qui planifie réellement la transition — rénovation, transports, agriculture, énergie 100% renouvelable à terme — en la finançant par les patrimoines les plus émetteurs (ISF climatique) et en protégeant les plus modestes (revenu climat), car une écologie qui n'est pas sociale sera rejetée. Face au RN, l'écologie est aussi un combat culturel pour une France apaisée — gagnable, comme le montre Hénin-Beaumont.",
  counter_thesis: "Steelman adverse : l'écologie politique française a un problème de véhicule, pas de diagnostic. Le climat est un consensus scientifique, mais le parti qui le porte plafonne à 2-5% en scrutin présidentiel car il reste perçu — en partie à raison — comme urbain, diplômé, normatif, et lesté d'un passif antinucléaire qui contredit son propre objectif carbone : refuser l'atout décarboné majeur de la France au nom d'un scénario 100% EnR que RTE classe parmi les plus incertains et coûteux relève de la doctrine, pas de la science qu'il invoque. Quant au financement (ISF climatique aux rendements présumés élevés), il répète le schéma « les riches paieront » avec une assiette étroite. La transition avancera probablement mieux par l'ingénierie d'État et le signal-prix que par un parti à 2,5% qui la moralise.",

  program_pillars: [
    "Planification écologique contraignante : plan national pour la transition",
    "ISF climatique pour financer la transition",
    "Revenu climat et bouclier social de la transition (rénovation, mobilité)",
    "Sortie progressive du nucléaire, 100% renouvelables à terme",
    "Adaptation : eau, canicules, assurabilité, congé climatique",
    "Front républicain écologiste contre l'extrême droite"
  ],

  proposals: [
    {
      title: "Plan national pour la transition avec objectifs contraignants",
      domain: "écologie",
      detail: "Loi de planification fixant des objectifs juridiquement contraignants et opposables : réduction des émissions par secteur, rythme de rénovation thermique, déploiement des renouvelables, avec gouvernance de suivi et sanctions.",
      pros: [
        "La France est déjà condamnée deux fois pour inaction climatique (Affaire du Siècle 2021, Conseil d'État Grande-Synthe) : rendre les trajectoires opposables tire la conséquence juridique de l'existant",
        "La planification par objectifs sectoriels contraignants existe et fonctionne partiellement ailleurs (UK Climate Change Act 2008 : budgets carbone quinquennaux, institution indépendante — modèle robuste sur 15 ans)",
        "Répond à l'échec documenté du pilotage actuel : les budgets carbone français ont été respectés surtout grâce aux crises (Covid, prix de l'énergie), pas aux politiques"
      ],
      cons: [
        "Le contraignant sans les moyens produit du contentieux, pas des tonnes de CO2 évitées : condamné en 2021, l'État n'a pas fondamentalement changé de rythme — la sanction juridique sur une personne publique est un levier faible",
        "La rigidité des objectifs sectoriels peut imposer des trajectoires coût-inefficaces (rénover à marche forcée quand l'électrification des usages serait plus rentable au MWh évité)",
        "Empilement institutionnel : SGPE, Haut conseil pour le climat, SNBC existent déjà — le problème est l'arbitrage budgétaire annuel, qu'aucune loi de programmation ne lie vraiment (précédent : lois de programmation militaire, régulièrement révisées)"
      ],
      plausibility: 6,
      plausibility_note: "Loi ordinaire de programmation : votable si majorité. La version « sanctions opposables » a une portée juridique limitée par nature. C'est l'exécution budgétaire annuelle qui décidera, comme toujours.",
      cost_estimate: "La loi elle-même ne coûte rien ; la trajectoire qu'elle encadre exige 25-34 Md€/an d'argent public supplémentaire selon Pisani-Ferry-Mahfouz (2023) et I4CE."
    },
    {
      title: "ISF climatique",
      domain: "économie",
      detail: "Rétablir un impôt sur la fortune dont le barème est modulé selon l'empreinte carbone du patrimoine (actifs fossiles surtaxés, actifs verts allégés), pour financer la transition — inspiré du rapport Pisani-Ferry-Mahfouz qui proposait un prélèvement exceptionnel sur le patrimoine financier des plus aisés.",
      pros: [
        "Fondement distributif solide : l'empreinte carbone croît fortement avec le revenu et le patrimoine (le top 10% émet ~2,5 fois plus que le bas de la distribution — travaux Lucas Chancel/World Inequality Lab) ; faire financer la transition par les patrimoines est cohérent pollueur-payeur",
        "Adossement académique réel : Pisani-Ferry-Mahfouz (France Stratégie, 2023) — pas un think tank militant — recommande explicitement un prélèvement temporaire sur le patrimoine financier des 10% les plus aisés (~5 Md€/an)",
        "Moduler la fiscalité du patrimoine selon l'actif (fossile/vert) oriente les portefeuilles — signal-prix sur le stock de capital, complémentaire de la taxe carbone sur les flux"
      ],
      cons: [
        "Mesurer « l'empreinte carbone d'un patrimoine » est méthodologiquement très fragile (données d'émissions des actifs non cotés quasi inexistantes, double comptage, périmètres) : l'assiette est un chantier statistique avant d'être un impôt",
        "Rendement présenté souvent bien au-dessus de la référence académique : Pisani-Ferry chiffrait ~5 Md€/an temporaires ; les besoins affichés (dizaines de Md€/an) ne seront pas couverts par cet impôt — l'écart de financement demeure",
        "Mêmes objections comportementales que tout ISF : expatriation à la marge, contentieux constitutionnel sur l'égalité devant l'impôt si la modulation carbone est mal objectivée"
      ],
      plausibility: 4,
      plausibility_note: "Un ISF simple rétabli est votable avec majorité de gauche (précédent pré-2017). La version « climatique » modulée bute sur la mesurabilité de l'assiette carbone — risque réel de censure pour rupture d'égalité si les critères sont approximatifs.",
      cost_estimate: "Rendement réaliste : 3-8 Md€/an (référence Pisani-Ferry-Mahfouz : ~5 Md€/an pour le prélèvement patrimonial recommandé ; ISF historique : ~4-5 Md€/an)."
    },
    {
      title: "Revenu climat pour les ménages modestes",
      domain: "social",
      detail: "Versement direct aux ménages modestes compensant les coûts de la transition (énergie, carburant, ZFE), financé par la fiscalité carbone et patrimoniale — dividende carbone à la française.",
      pros: [
        "Tire la leçon centrale des gilets jaunes : une taxe carbone sans redistribution est régressive et politiquement morte ; le dividende carbone redistribué est LA solution documentée (Canada, Suisse, recommandations du CAE et du FMI)",
        "Comme les déciles inférieurs émettent moins, un versement uniforme financé par la taxe les rend gagnants nets : la mesure est mathématiquement progressive",
        "Rend politiquement possible la reprise de la trajectoire carbone gelée depuis 2018 — débloquer ce levier vaut plus que la mesure elle-même"
      ],
      cons: [
        "Le financement fléché suppose de RELEVER la taxe carbone (gelée à 44,6€/t depuis 2018) — le programme est pudique sur cette moitié du mécanisme, qui est pourtant sa condition d'existence",
        "Ciblage : le versement aux seuls modestes (vs universel) crée des effets de seuil et affaiblit le soutien politique du dispositif (les classes moyennes contributrices nettes s'y opposent — cf. rejet suisse partiel)",
        "Ne compense pas les coûts en capital (changer de voiture, de chaudière) qui sont le vrai mur pour les modestes : le revenu lisse le flux, pas l'investissement"
      ],
      plausibility: 6,
      plausibility_note: "Techniquement simple (l'appareil de versement existe : chèque énergie). La difficulté est d'assumer la hausse de fiscalité carbone jumelle. Version chèque élargi : très plausible ; version dividende carbone complet : dépend du courage fiscal.",
      cost_estimate: "5-10 Md€/an selon ciblage et générosité (le chèque énergie actuel : ~0,9 Md€ ; un dividende significatif pour les 5 déciles inférieurs : ~8 Md€)."
    },
    {
      title: "Sortie progressive du nucléaire, cap 100% renouvelables",
      domain: "écologie",
      detail: "Pas de fermeture prématurée des centrales existantes (position assouplie), mais arrêt du programme EPR2, refus des prolongations au-delà des exigences de sûreté, et cap de long terme vers un mix 100% renouvelable, jugeant le nucléaire « trop lent et trop cher » pour la neutralité carbone.",
      pros: [
        "L'argument coût/délai contre le NOUVEAU nucléaire est factuel : Flamanville 3 a coûté ~4 fois le devis (19,1 Md€ en coût complet, Cour des comptes) avec 12 ans de retard ; les EPR2 ont déjà dérivé avant le premier béton (estimations passées de 51 à 67-80 Md€ pour 6 réacteurs)",
        "L'assouplissement sur le parc existant (plus de fermeture anticipée exigée) est un vrai pas vers le réel — la position 2027 est plus rationnelle que la doctrine Fessenheim de 2012-2020",
        "Le pari renouvelables s'appuie sur des faits mondiaux : effondrement des coûts solaire/éolien (LCOE divisés par 5-10 en 15 ans), 80%+ des nouvelles capacités mondiales sont renouvelables"
      ],
      cons: [
        "Incohérence carbone persistante : si l'urgence est le CO2, se priver de l'option nucléaire — pilotable et décarbonée — au profit d'un scénario que RTE classe parmi les plus chers et les plus risqués techniquement (M0 : paris « lourds » sur flexibilités et stockage) est une hiérarchie de valeurs, pas une déduction scientifique",
        "À contre-courant de l'opinion (majorité pro-nucléaire depuis 2022) et de toute la politique énergétique engagée (EPR2 lancés, filière relancée) : coût politique maximal pour une inflexion improbable",
        "Le renouvelable intermittent à haute pénétration a des coûts systémiques (réseau, stockage, back-up) que le LCOE nu ne capture pas — l'argument « moins cher » cherry-picke la métrique favorable"
      ],
      plausibility: 2,
      plausibility_note: "L'arrêt des EPR2 exigerait de casser des engagements industriels et contractuels massifs contre l'opinion et le Parlement : politiquement hors de portée, même en cas de victoire. La position pèsera surtout comme monnaie d'échange dans la primaire et les coalitions.",
      cost_estimate: "Différentiel de coût système : les scénarios RTE 2050 chiffrent le 100% EnR plus cher de ~10-20% en coût complet annuel que les mix avec nucléaire (écart de l'ordre de 10-15 Md€/an à 2050)."
    },
    {
      title: "Congé climatique et adaptation au réchauffement",
      domain: "social",
      detail: "Créer un « congé climatique » pour les travailleurs exposés aux canicules (BTP, agriculture, extérieur), plan national d'adaptation renforcé : eau, végétalisation urbaine, normes de construction, assurabilité des territoires.",
      pros: [
        "Traite un réel juridiquement mal couvert : les morts au travail pendant les canicules existent (recensements de l'inspection du travail chaque été), le cadre actuel (retrait pour danger grave et imminent) protège mal les précaires et intérimaires",
        "L'adaptation est le parent pauvre consensuel : la France se prépare officiellement à +4°C (trajectoire TRACC du gouvernement) mais les financements ne suivent pas (I4CE chiffre le déficit d'investissement adaptation à plusieurs Md€/an)",
        "L'assurabilité est une bombe à retardement documentée : retrait des assureurs de zones à risque, régime CatNat structurellement déficitaire (rapport Langreney 2024)"
      ],
      cons: [
        "Le « congé climatique » indemnisé pose la question du payeur (employeur ? mutualisation type intempéries-BTP ?) — le régime intempéries du BTP existe déjà, l'extension aux autres secteurs coûte et se calibre difficilement (seuils de température ? qui déclenche ?)",
        "Risque d'effet d'annonce : la protection réelle passe par l'organisation du travail (horaires décalés, hydratation, contrôle) plus que par un congé — l'Espagne a pris ce chemin réglementaire en 2023",
        "L'adaptation massive (eau, réseaux, bâti) se chiffre en Md€/an récurrents jamais budgétés précisément par le programme"
      ],
      plausibility: 7,
      plausibility_note: "Extension du régime intempéries-BTP par la loi : tout à fait faisable (précédent espagnol 2023). L'adaptation est le sujet le plus consensuel du programme — c'est le financement qui décidera de l'ampleur.",
      cost_estimate: "Congé climatique mutualisé : 0,5-1,5 Md€/an selon secteurs couverts (extrapolation régime intempéries BTP). Adaptation globale : I4CE évalue le besoin à +5 Md€/an minimum."
    },
    {
      title: "Rénovation thermique massive avec reste à charge zéro pour les modestes",
      domain: "écologie",
      detail: "Porter le rythme des rénovations performantes à ~700 000/an, reste à charge quasi nul pour les ménages modestes, interdiction progressive de location des passoires maintenue et accompagnée, guichet unique et tiers-financement public.",
      pros: [
        "Triple dividende documenté : climat (le bâtiment ≈ 16% des émissions), pouvoir d'achat (factures), santé publique (précarité énergétique touche ~12 millions de personnes selon l'ONPE)",
        "Le reste à charge est LE verrou identifié par toutes les évaluations de MaPrimeRénov' : le supprimer pour les modestes attaque le bon goulot",
        "Le tiers-financement (l'avance est remboursée par les économies d'énergie) a des précédents opérationnels (SEM régionales type Île-de-France Énergies)"
      ],
      cons: [
        "Le goulot réel est la filière : artisans qualifiés RGE insuffisants, malfaçons et fraudes documentées (Tracfin, DGCCRF) — l'argent sans l'appareil productif crée de l'inflation de devis et des rénovations ratées",
        "Les rénovations « performantes » (globales) coûtent 40-70 k€/logement : le reste à charge zéro pour les modestes représente des dizaines de Md€ cumulés, jamais séquencés précisément",
        "L'interdiction de location des passoires, socialement juste en théorie, retire de fait des logements du marché locatif tendu à court terme (effets déjà observés sur les G en 2025)"
      ],
      plausibility: 5,
      plausibility_note: "La trajectoire existe (loi Climat et résilience) ; le programme propose un changement d'échelle x3-x4. Budgétairement très lourd, industriellement contraint par la filière : réalisable à 50-60% de l'ambition affichée.",
      cost_estimate: "10-15 Md€/an publics pour la trajectoire SNBC selon I4CE (contre ~4-5 Md€ actuels MaPrimeRénov') ; le reste à charge zéro modestes est la composante la plus coûteuse."
    },
    {
      title: "Transformation agroécologique et sortie encadrée des pesticides",
      domain: "écologie",
      detail: "Plan de sortie des pesticides de synthèse les plus dangereux avec accompagnement financier massif des agriculteurs, réorientation des aides PAC vers l'agroécologie, moratoire sur les mégabassines, prix planchers et protection contre les imports ne respectant pas les normes (clauses miroirs).",
      pros: [
        "Le statu quo est documenté comme insoutenable : effondrement des populations d'oiseaux (-30% en milieu agricole en 30 ans, MNHN) et des insectes, contamination généralisée des eaux (rapports Anses métabolites), échec répété des plans Ecophyto (usage des pesticides non réduit depuis 2008)",
        "Les clauses miroirs sont devenues consensuelles jusqu'à la FNSEA et le gouvernement : exiger des importations les normes imposées aux producteurs français est de la cohérence concurrentielle",
        "Les prix planchers répondent au fait établi que la crise agricole 2024 était d'abord une crise de revenu, pas de normes"
      ],
      cons: [
        "L'équation rendement/revenu est réelle : les interdictions sans alternative technique (cf. betterave/néonicotinoïdes, moutarde) déplacent la production à l'étranger — l'échec d'Ecophyto tient aussi à cette impasse technique, pas seulement au lobbying",
        "Prix planchers : risque juridique européen (organisation commune des marchés) et économique (surproduction subventionnée, précédent des quotas laitiers) — l'Espagne l'a tenté sur des périmètres étroits seulement",
        "Le moratoire mégabassines tranche par le symbole un vrai dilemme hydrologique local qui mériterait du cas par cas (certaines retenues sont défendables, d'autres non — les études BRGM divergent selon les sites)"
      ],
      plausibility: 4,
      plausibility_note: "La PAC se négocie à 27 (prochaine programmation post-2027 : fenêtre réelle). Les clauses miroirs progressent au niveau UE. Les prix planchers nationaux et l'interdiction unilatérale rapide de pesticides autorisés par l'UE sont juridiquement fragiles.",
      cost_estimate: "Accompagnement transition agroécologique sérieux : 3-5 Md€/an (doublement des aides à la conversion + compensations) ; chiffrage candidat non consolidé."
    },
    {
      title: "Réduction du temps de travail et emplois de la transition",
      domain: "social",
      detail: "Ouvrir le chantier de la semaine de 4 jours / 32h négociée par branche (sans baisse de salaire pour les bas revenus), et créer massivement des emplois dans les secteurs de la transition (rénovation, EnR, agriculture, réparation, économie circulaire).",
      pros: [
        "Les expérimentations 4 jours (Islande, UK pilot 2022, entreprises françaises) montrent des résultats réels sur la santé, l'absentéisme et la productivité horaire dans les métiers compatibles — le dossier empirique est plus sérieux que sa caricature",
        "Version négociée par branche (vs 35h uniformes décrétées) tire la leçon des rigidités de 2000 : c'est la méthode qui a marché à l'étranger",
        "Les métiers de la transition sont effectivement en tension (ADEME chiffre des centaines de milliers de postes à pourvoir d'ici 2030) : la promesse d'emploi n'est pas fictive, elle est conditionnée à la formation"
      ],
      cons: [
        "La généralisation aux métiers à présence obligatoire (soin, enseignement, commerce) exige des embauches compensatoires massives — soit un coût salarial +10-20% dans des secteurs déjà en pénurie de bras : le mur est physique autant que financier",
        "Dans un pays dont le volume d'heures travaillées par habitant est déjà parmi les plus bas de l'OCDE et le déficit à ~5,5%, réduire encore le temps de travail affaiblit la base fiscale qui doit financer... la transition promise",
        "Les emplois « créés » par la transition sont largement des emplois déplacés (l'automobile thermique en perd) : le solde net est modeste dans toutes les études sérieuses"
      ],
      plausibility: 4,
      plausibility_note: "L'incitation à la négociation de branche est faisable (accords existants). La généralisation 32h est hors de portée budgétaire et démographique du quinquennat — les partenaires sociaux eux-mêmes n'en font pas la demande prioritaire.",
      cost_estimate: "Non chiffré par le parti ; extension au secteur public seul : plusieurs Md€/an d'équivalents temps plein compensatoires (par analogie chiffrages 35h hospitalières)."
    },
    {
      title: "Proportionnelle et rénovation démocratique",
      domain: "institutions",
      detail: "Proportionnelle intégrale ou fortement mixte aux législatives, RIP assoupli, conventions citoyennes régulières, indépendance renforcée des médias (protection contre la concentration).",
      pros: [
        "La proportionnelle correspond à l'état réel du pays : un paysage tripolaire que le scrutin majoritaire traduit en assemblées introuvables (2022, 2024) — la représentation fidèle stabiliserait paradoxalement le système en forçant la coalition explicite",
        "Promesse transpartisane serpent de mer (Macron 2017, Bayrou) : une fenêtre politique existe réellement",
        "Sur la concentration des médias : le mouvement Bolloré est un fait documenté (rapports de la commission d'enquête sénatoriale 2022) qui pose une question démocratique légitime"
      ],
      cons: [
        "La proportionnelle intégrale à l'israélienne ou à la façon IVe République fragmente et donne un pouvoir de chantage aux petits partis ; les versions stables (allemande) ont des seuils et des primes que le programme ne précise pas",
        "Aucune majorité constitutionnelle nécessaire (loi ordinaire pour le mode de scrutin) MAIS aucun président élu n'a intérêt à l'adopter une fois élu — l'histoire des promesses proportionnelles est un cimetière",
        "La régulation de la concentration médiatique par une majorité de gauche serait vécue comme une reprise en main politique des médias d'opposition : le remède peut nourrir le mal qu'il combat"
      ],
      plausibility: 5,
      plausibility_note: "Mode de scrutin : loi ordinaire, techniquement simple — la volonté post-électorale est l'inconnue. Anti-concentration médias : loi possible mais champ de mines constitutionnel (liberté d'expression, droit de propriété).",
      cost_estimate: "Coût budgétaire négligeable."
    },
    {
      title: "Police du quotidien et sécurité réinvestie par l'écologie politique",
      domain: "sécurité",
      detail: "Police de proximité recréée, doublement des effectifs de police judiciaire de l'environnement, lutte contre le narcotrafic par le renseignement financier plutôt que le seul harcèlement de voie publique, justice de proximité renforcée.",
      pros: [
        "Assume enfin un angle mort électoral historique de l'écologie (la sécurité est une préoccupation majeure des classes populaires que la gauche verte a longtemps déléguée)",
        "Le ciblage « haut du spectre » du narcotrafic (patrimoine, blanchiment) est la recommandation convergente des magistrats spécialisés et de la commission d'enquête sénatoriale narcotrafic (2024) — contre l'approche purement quantitative des interpellations",
        "La délinquance environnementale (trafics de déchets, pollutions) est massivement sous-poursuivie : le renforcement est original et documenté"
      ],
      cons: [
        "Crédibilité d'émission faible : l'électorat ne croit pas spontanément les Écologistes sur la sécurité (années de positionnements ambivalents sur la police) — le coût d'entrée réputationnel est élevé",
        "La police de proximité recréée exige des effectifs que la démographie policière ne fournit pas immédiatement (recrutements déjà difficiles)",
        "Le volet « moins de harcèlement de voie publique » sera caricaturé en laxisme — sans réponse préparée sur les points de deal, la proposition est politiquement vulnérable"
      ],
      plausibility: 6,
      plausibility_note: "Budgétairement et juridiquement faisable (redéploiements + recrutements). L'obstacle est la crédibilité politique et le temps de montée en charge.",
      cost_estimate: "1-3 Md€/an selon l'ampleur (10 000 postes ≈ 0,6-0,8 Md€/an chargés)."
    }
  ],

  fallacies: [
    {
      claim: "« Le nucléaire est trop lent et trop cher pour le climat, donc 100% renouvelables » ",
      fallacy_type: "cherry-picking + non sequitur",
      why_fallacious: "Les prémisses (lenteur et coût du NOUVEAU nucléaire) sont vraies, mais la conclusion ne suit pas : elles condamneraient aussi le scénario 100% EnR, que RTE classe parmi les plus coûteux en coût système complet et les plus incertains techniquement (flexibilités, stockage non matures). L'argument compare le pire du nucléaire (EPR neuf) au meilleur du renouvelable (LCOE nu du solaire), en omettant les coûts systémiques de l'intermittence et la valeur du parc existant amorti.",
      correction: "La comparaison honnête porte sur des coûts complets de SYSTÈME à horizon donné : RTE (Futurs énergétiques 2050) donne l'avantage aux mix nucléaire+EnR. On peut préférer le 100% EnR pour d'autres raisons (déchets, risque, prolifération) — mais alors l'argument est axiologique, pas économique, et doit être présenté comme tel.",
      severity: "high"
    },
    {
      claim: "« Chaque canicule prouve la justesse de notre programme »",
      fallacy_type: "appel à l'émotion / glissement du diagnostic à la prescription",
      why_fallacious: "Le réchauffement anthropique est établi (GIEC) et l'attribution des canicules progresse scientifiquement — mais un événement météo ne valide pas UN programme particulier parmi les politiques climatiques possibles (nucléaire + électrification valide aussi bien le diagnostic). Le glissement « le climat change donc votez pour NOS mesures » saute l'étape de la comparaison des moyens.",
      correction: "Distinguer trois niveaux : le diagnostic (consensus scientifique), l'objectif (neutralité carbone, largement partagé), les moyens (là est le débat politique légitime : taxe vs norme, nucléaire vs EnR, rythme). L'urgence climatique justifie d'agir, pas d'agir précisément comme le programme le propose.",
      severity: "medium"
    },
    {
      claim: "« L'ISF climatique financera la transition »",
      fallacy_type: "disproportion assiette/besoin (« les riches paieront », version verte)",
      why_fallacious: "Met en regard un besoin de financement de 25-34 Md€/an publics (Pisani-Ferry-Mahfouz) et un impôt dont la référence académique invoquée elle-même chiffre le rendement à ~5 Md€/an. L'impôt peut être juste ET très insuffisant : le programme laisse entendre que la justice fiscale résout l'équation de financement, alors qu'elle en couvre un cinquième au mieux.",
      correction: "Assumer le bouclage complet : ISF climatique (~5 Md€) + redéploiement des niches fossiles (~10-20 Md€ identifiées par I4CE/Cour des comptes) + dette d'investissement + hausse progressive de la fiscalité carbone redistribuée. Ce bouclage existe intellectuellement — le programme gagnerait à l'afficher au lieu de laisser l'ISF porter symboliquement le tout.",
      severity: "high"
    },
    {
      claim: "« Les emplois verts remplaceront les emplois détruits : la transition est une bonne affaire pour l'emploi »",
      fallacy_type: "comptabilité brute présentée en net / vitre cassée inversée",
      why_fallacious: "Compte les emplois créés dans les secteurs verts sans déduire les destructions (automobile thermique, fossiles, industries intensives) ni les effets d'éviction du financement. La littérature sérieuse (dont Pisani-Ferry-Mahfouz) conclut à un effet net faible et incertain à moyen terme, avec des coûts de transition réels pour des territoires et travailleurs identifiables.",
      correction: "Vendre la transition sur ses vrais bénéfices (climat, santé, indépendance énergétique, factures) et traiter l'emploi comme un enjeu de RECONVERSION à accompagner, pas comme un dividende net. Les perdants existent ; les nier prépare des gilets jaunes industriels.",
      severity: "medium"
    },
    {
      claim: "« Hénin-Beaumont prouve qu'on peut battre le RN par le terrain » ",
      fallacy_type: "généralisation à partir d'un contre-exemple non concluant",
      why_fallacious: "Tondelier incarne une résistance courageuse et documentée à Hénin-Beaumont — mais elle y a PERDU toutes les élections municipales face à Steeve Briois (scores RN >70% en 2020). Le cas prouve la possibilité du militantisme en terre RN, pas l'efficacité électorale de la méthode. L'exemple mobilisé démontre l'inverse de ce qu'il illustre.",
      correction: "Utiliser Hénin-Beaumont comme preuve de courage et de connaissance de l'adversaire (légitime), pas comme preuve de méthode gagnante (non démontrée). Les seuls reculs municipaux du RN documentés viennent d'autres configurations (gestion locale défaillante, coalitions larges).",
      severity: "low"
    },
    {
      claim: "« La sobriété choisie rendra la vie meilleure » (récit du bonheur sobre généralisé)",
      fallacy_type: "projection de préférences / échantillon non représentatif",
      why_fallacious: "Généralise à la société entière les préférences d'un segment sociologique (diplômés urbains à capital culturel élevé, pour qui vélo, seconde main et basse consommation sont des choix valorisés) vers des populations pour qui les mêmes pratiques sont des contraintes subies. Le « mieux avec moins » est une expérience de classe présentée comme une vérité anthropologique.",
      correction: "Séparer la sobriété structurelle (efficacité, isolation, transports publics — qui améliore objectivement la vie) de la sobriété comportementale (renoncements perçus), et n'imposer la seconde qu'avec compensations. Le succès du leasing social vs l'échec de la taxe carbone 2018 montre exactement cette frontière.",
      severity: "medium"
    }
  ],

  data_issues: [
    {
      claim: "« Le 100% renouvelable est moins cher que le nucléaire » (raccourci récurrent du parti)",
      problem: "cherry-picking de métrique",
      reality: "Vrai en LCOE unitaire d'un MWh solaire/éolien NEUF vs un MWh d'EPR NEUF ; faux en coût complet de système : RTE (Futurs énergétiques 2050) chiffre les scénarios 100% EnR (M0/M1) PLUS chers que les mix avec nucléaire prolongé et nouveau (N2/N03), du fait du stockage, des réseaux et du back-up. L'écart : ~10-20% de coût système annuel.",
      source: "RTE, Futurs énergétiques 2050 (2021-2022) ; concordant avec l'analyse de la CRE et les données AIE sur les coûts systémiques de l'intermittence"
    },
    {
      claim: "« L'ISF climatique peut rapporter 15 milliards par an » (chiffres hauts circulant dans la communication du parti)",
      problem: "exagéré par rapport à la référence invoquée",
      reality: "Le rapport Pisani-Ferry-Mahfouz (2023), régulièrement cité à l'appui, propose un prélèvement EXCEPTIONNEL et TEMPORAIRE sur le patrimoine financier des 10% les plus aisés calibré à ~5 Md€/an. L'ISF historique rapportait 4-5 Md€/an. Les chiffres à deux chiffres supposent des barèmes et des assiettes jamais détaillés.",
      source: "Pisani-Ferry & Mahfouz, France Stratégie (mai 2023) ; DGFiP (rendement historique de l'ISF)"
    },
    {
      claim: "« Les plus riches polluent 60 fois plus que les pauvres » (variantes utilisées dans les meetings)",
      problem: "sorti de contexte / confusion des périmètres",
      reality: "Le facteur ~60+ concerne les émissions LIÉES AU PATRIMOINE FINANCIER des milliardaires (méthodologie Oxfam, attribution des émissions des entreprises détenues) — pas leur consommation. En empreinte de CONSOMMATION, l'écart D10/D1 en France est de l'ordre de x2,2 à x3 (Chancel, WIL ; SDES). Les deux chiffres sont défendables séparément ; leur fusion rhétorique est trompeuse.",
      source: "Lucas Chancel / World Inequality Lab (2022) ; SDES-CGDD, empreinte carbone par décile ; méthodologie Oxfam France critiquée notamment par Les Décodeurs"
    },
    {
      claim: "« La rénovation thermique crée 3 emplois pour 1 million d'euros investi et s'autofinance par les économies d'énergie »",
      problem: "invérifiable / autofinancement non démontré",
      reality: "Les ratios emplois/M€ varient de 5 à 15 selon les études (bruts, non nets) ; surtout, l'autofinancement par les économies est contredit par les évaluations : les économies d'énergie réelles post-rénovation sont inférieures de 30-50% aux prévisions techniques (effet rebond + performance réelle — études TREMI/CSTB), ce qui allonge les temps de retour bien au-delà des durées de prêt.",
      source: "ADEME (enquêtes TREMI) ; CSTB ; I4CE sur les écarts performance réelle/théorique"
    },
    {
      claim: "« Ecophyto a échoué à cause du seul lobbying de l'agrochimie »",
      problem: "cause unique / omission",
      reality: "L'échec d'Ecophyto (usage des pesticides stable ou en hausse depuis 2008 malgré l'objectif -50%) tient au lobbying ET à des causes structurelles documentées : absence d'alternatives techniques sur des cultures entières, prix agricoles écrasés poussant à l'intensification, CEPP non contraignants. Les rapports officiels (Cour des comptes 2019, INRAE) pointent la multicausalité.",
      source: "Cour des comptes (2019) ; INRAE ; plan Ecophyto — bilans officiels successifs"
    }
  ],

  problematic_arguments: [
    {
      argument: "« L'urgence climatique interdit le débat sur les moyens : qui discute retarde »",
      why_problematic: "Transforme un consensus scientifique (le réchauffement) en immunité politique pour un paquet de mesures particulier. La disqualification morale des désaccords (« climato-relativisme ») ferme le débat exactement là où il est légitime : le choix des instruments, leur coût et leur répartition.",
      what_it_hides: "Que plusieurs chemins de décarbonation existent (le nucléaire+électrification en est un, documenté par RTE), et que le programme écologiste en écarte certains pour des raisons doctrinales antérieures au climat (l'antinucléaire précède la cause carbone dans l'histoire du mouvement)."
    },
    {
      argument: "« Nous sommes le seul parti qui prend le GIEC au sérieux »",
      why_problematic: "Revendication de monopole scientifique alors que le parti s'écarte lui-même des évaluations technico-économiques de référence quand elles dérangent (RTE sur les coûts système, consensus sur l'apport du nucléaire décarboné — le GIEC lui-même inclut le nucléaire dans les portefeuilles d'atténuation).",
      what_it_hides: "L'asymétrie du rapport à la science : invoquée comme autorité absolue sur le diagnostic climatique, relativisée sur le nucléaire, les biotechnologies vertes (NBT) ou l'agriculture de précision quand elle contredit la doctrine."
    },
    {
      argument: "« La primaire de la gauche est la seule voie responsable » — tout en y ayant des intérêts de structure",
      why_problematic: "La primaire du 11 octobre 2026 est présentée comme un impératif moral d'union, mais c'est aussi, factuellement, la seule voie de survie d'une candidature à 2,5% : l'argument moral et l'intérêt stratégique coïncident trop parfaitement pour que le premier soit pris au mot. Mélenchon et Glucksmann font le calcul inverse avec le même habillage.",
      what_it_hides: "Qu'une primaire sans les deux premiers candidats de gauche (Mélenchon ~13-16%, Glucksmann ~9-12%) désignerait un « candidat commun » représentant une minorité de l'espace — reproduisant la Primaire populaire de 2022 (Taubira, 1,7% de non-aboutissement)."
    },
    {
      argument: "« Passer de EELV aux Écologistes, c'est l'ouverture à toute la société »",
      why_problematic: "Le rebranding (2023) traite le symptôme (image de parti de niche querelleuse) sans la cause documentée : sociologie militante étroite, gouvernance par motions et purges périodiques, incapacité chronique à retenir ses présidentiables (Jadot marginalisé, Rousseau électron libre). Le nom change, la machine à sous-performer les attentes demeure (2,5% dans les sondages malgré un sujet — le climat — au sommet des préoccupations).",
      what_it_hides: "La question stratégique jamais tranchée depuis 1984 : parti autonome de gouvernement ou courant d'influence dans une coalition ? La candidature Tondelier via la primaire est une réponse par défaut, pas un choix assumé."
    }
  ],

  strong_ideas: [
    {
      idea: "Dividende carbone / revenu climat : redistribuer la fiscalité carbone aux ménages",
      why_strong: "Consensus économique quasi unanime (CAE, FMI, prix Nobel — la « carbon fee and dividend » est portée par des économistes de droite comme de gauche) ; le Canada l'a opéré à l'échelle ; c'est la seule voie documentée pour réconcilier signal-prix carbone et acceptabilité sociale après l'échec de 2018.",
      adoptable_by: "Tous les blocs : la droite peut le porter comme « rendre l'argent de la taxe » (version conservatrice canadienne), le centre comme déblocage de la trajectoire carbone. C'est LA politique climatique transpartisane par construction."
    },
    {
      idea: "Adaptation systématique au réchauffement (eau, canicules, assurabilité, congé climatique)",
      why_strong: "La France se prépare officiellement à +4°C (TRACC) mais sous-investit (constat I4CE partagé par la Cour des comptes) ; le régime CatNat dérive (rapport Langreney) ; les morts au travail caniculaires sont recensés chaque été. L'adaptation est un angle mort budgétaire à consensus scientifique total — être le parti qui la porte est une position gagnante et utile.",
      adoptable_by: "Tous les blocs sans exception — l'adaptation ne demande aucune conversion idéologique (elle protège l'existant). Version droite : « assurabilité, agriculture, patrimoine » ; version gauche : « travailleurs exposés, passoires thermiques »."
    },
    {
      idea: "Clauses miroirs commerciales sur l'agriculture",
      why_strong: "Cohérence pure : imposer aux importations les normes exigées des producteurs nationaux. Devenue consensuelle de la Confédération paysanne à la FNSEA et reprise par le gouvernement dans les négociations UE (Mercosur). L'écologie politique l'a portée tôt : antériorité réelle.",
      adoptable_by: "Déjà transpartisane en France ; le combat utile est à Bruxelles (faisabilité OMC via l'exception environnementale et sanitaire, qui progresse juridiquement)."
    },
    {
      idea: "Police judiciaire de l'environnement et ciblage financier du narcotrafic",
      why_strong: "La commission d'enquête sénatoriale narcotrafic (2024, transpartisane) recommande exactement le pivot vers le « haut du spectre » (patrimoine, blanchiment) ; la délinquance environnementale (déchets, pollutions) est massivement rentable et sous-réprimée — le créneau est documenté et politiquement vierge.",
      adoptable_by: "Droite régalienne comprise : « frapper le portefeuille des trafiquants » est un cadrage droit-compatible ; la PJ environnementale s'adosse aux préjudices des agriculteurs et chasseurs autant que des écologistes."
    },
    {
      idea: "Rénovation thermique ciblée reste-à-charge-zéro pour les modestes",
      why_strong: "Attaque le verrou identifié par toutes les évaluations (le reste à charge), là où le saupoudrage actuel finance surtout des mono-gestes chez les solvables. Concentre l'argent public où l'externalité sociale et climatique est maximale (passoires occupées par les pauvres).",
      adoptable_by: "Centre et droite sociale : cadrage « pouvoir d'achat énergétique » et « valeur du patrimoine des petits propriétaires ». La contrainte partagée reste la filière artisans — chantier de politique industrielle, pas de couleur politique."
    }
  ],

  electorate: "Électorat jeune-adulte à quadragénaire, très diplômé, urbain, féminisé : enseignants, professions intermédiaires du public, cadres du tertiaire culturel et associatif, centres des métropoles (Grenoble, Lyon, Bordeaux, Nantes, Strasbourg — villes gagnées en 2020). Quasi inexistant chez les ouvriers, les ruraux et les plus de 65 ans. Volatil : cet électorat migre vers LFI (radicalité) ou le PS/Glucksmann (utilité) à chaque présidentielle — d'où l'écart chronique entre les scores municipaux/européens (13,5% en 2019) et présidentiels (4,6% en 2022, ~2,5% dans les sondages 2026).",

  key_quotes: [
    {
      text: "C'est un acte d'amour pour la France.",
      context: "Déclaration de candidature à la présidentielle 2027, entretien au Nouvel Obs",
      source: "Le Nouvel Obs / franceinfo, 22 octobre 2025"
    },
    {
      text: "On est dans une impréparation, comme souvent dans ce pays.",
      context: "Vague de chaleur de l'été 2026 — proposition du « congé climatique » pour les travailleurs exposés",
      source: "franceinfo, été 2026"
    },
    {
      text: "Le nucléaire est trop lent et trop cher pour atteindre la neutralité carbone.",
      context: "Position énergie constante, assortie du renoncement à exiger la fermeture anticipée des centrales existantes",
      source: "Révolution énergétique / débats énergie présidentielle 2027 (SER), 2026"
    },
    {
      text: "Un ISF climatique doit être mis en place pour faire contribuer les plus riches, qui sont aussi ceux qui participent le plus aux changements climatiques.",
      context: "Pilier fiscal du programme des Écologistes",
      source: "Les Écologistes / Public Sénat (plan de sortie de crise), 2025-2026"
    },
    {
      text: "J'espère gagner cette primaire — et que tout le monde en respecte le résultat.",
      context: "Sur la primaire de la gauche unitaire du 11 octobre 2026, dont elle est co-fondatrice et candidate",
      source: "Déclarations à la presse, fin 2025 (franceinfo/France Bleu)"
    }
  ],

  sources: [
    "https://www.franceinfo.fr/elections/presidentielle/la-patronne-des-ecologistes-marine-tondelier-se-declare-candidate-a-l-election-presidentielle-de-2027_7568824.html",
    "https://www.francebleu.fr/infos/politique/presidentielle-2027-l-ecologiste-marine-tondelier-annonce-sa-candidature-4501115",
    "https://fr.wikipedia.org/wiki/Primaire_de_la_gauche_unitaire_de_2026 (désignation à 86% le 8/12/2025)",
    "https://www.franceinfo.fr/replay-magazine/franceinfo/l-invite-politique/vague-de-chaleur-on-est-dans-une-impreparation-comme-souvent-dans-ce-pays-estime-l-ecologiste-marine-tondelier_7988627.html (congé climatique)",
    "https://www.publicsenat.fr/actualites/politique/les-ecologistes-presentent-leur-plan-de-sortie-de-crise-et-preparent-la-cohabitation (ISF climatique, plan)",
    "https://www.revolution-energetique.com/actus/qui-dit-quoi-sur-lenergie-parmi-les-candidats-declares-a-la-presidentielle/ (position nucléaire 2026)",
    "https://energie.eelv.fr/les-ecologistes-resolument-pour-la-sortie-du-nucleaire",
    "RTE, Futurs énergétiques 2050 ; Pisani-Ferry & Mahfouz (France Stratégie, 2023) ; I4CE (financement transition, adaptation) ; rapport Langreney (assurabilité, 2024) ; Cour des comptes (Ecophyto 2019) ; Lucas Chancel/WIL (empreintes par décile) ; commission d'enquête sénatoriale narcotrafic (2024)"
  ]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["eelv-2027"] = CONTENT_ELECTIONS_EELV_2027;
