// /mindmap/content-debates/masculinite-feminisme.js
// Deep content for debate — "Masculinite, Feminisme et Wokisme — La Crise Identitaire Contemporaine"
// Source: data/masculinite-feminisme.json

const CONTENT_DEBATES_masculinite_feminisme = {
  id: "masculinite-feminisme",
  slug: "masculinite-feminisme",
  title: "Masculinité, Féminisme et Wokisme — La Crise Identitaire Contemporaine",
  speaker: "Corpus polyphonique",
  format: "Débat structuré · Fiche rhétorique",
  word_count: 7400,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "75% des morts par suicide sont des hommes. 96,6% de la population carcérale. 77% des SDF. Nommer cela n'est pas un backlash — c'est un diagnostic.",
  thesis: "Les hommes, en particulier les jeunes, traversent une crise multidimensionnelle (suicide, décrochage scolaire, incarcération, addictions, sans-abrisme, baisse de testostérone) largement ignorée du discours dominant. Le féminisme de quatrième vague et le mouvement woke, en pathologisant la masculinité ordinaire, aggravent le problème au lieu de le résoudre. La vraie réponse est un féminisme d'équité (Sommers, Paglia) allié à une reconstruction virile responsable (Peterson, Farrell).",
  key_takeaways: [
    "Les données sont institutionnelles (OMS, INSEE, DREES, Ministère de la Justice) — pas un 'narratif conservateur', un diagnostic factuel",
    "Distinguer les 4 vagues du féminisme : les vagues 1 et 2 ont obtenu des droits fondamentaux ; la vague 4 pathologise la masculinité",
    "Le Gender Equality Paradox (Stoet & Geary 2018) : dans les sociétés les plus égalitaires, les différences de choix H/F s'amplifient, pas l'inverse",
    "L'absence paternelle est un facteur documenté de délinquance : 70% des jeunes en prison viennent de foyers monoparentaux",
    "Le mentorat (BBBS) est une solution validée par essais contrôlés randomisés : -46% drogues, -27% alcool, -32% comportements antisociaux",
    "Baisse séculaire de testostérone (~1.2%/an depuis 1980, Travison 2007) — phénomène biologique indépendant de l'âge",
    "'Ne rendez pas les garçons honteux de leur masculinité — ils repoussent, deviennent machistes ou fascistes' (Peterson)",
    "La cancel culture a un impact mesurable : 591 cas FIRE, 1000+ tentatives de sanction professeurs US, 50% étudiants qui s'autocensurent",
  ],

  // ============================================================
  // 2. STRUCTURE — 5 MODES RHÉTORIQUES
  // ============================================================
  structure: {
    rouge: {
      mode: "Abrasif · Le Marteau",
      these: "Il y a une crise masculine. Elle est documentée par les institutions officielles. Le silence médiatique et l'accusation de 'toxicité' sont eux-mêmes une forme de violence — infligée aux plus vulnérables des hommes : les jeunes, les pauvres, les orphelins de père.",
      stats: [
        { number: "75.1%", label: "des suicides en France sont masculins (8 848 décès annuels, DREES 2023)" },
        { number: "96.6%", label: "de la population carcérale française est masculine (76 258 détenus, 2024)" },
        { number: "77-95%", label: "des sans-abri sont des hommes (INSEE 2022) — 95% de ceux à la rue" },
        { number: "20% vs 11%", label: "sortie du système scolaire sans diplôme : garçons vs filles (INSEE)" },
        { number: "-1.2%/an", label: "baisse séculaire de testostérone depuis 1980 (Travison, J Clin Endocrinol Metab 2007)" },
      ],
      cloture: "Quand une population meurt à 75% des suicides, va en prison à 96%, dort à la rue à 95%, décroche 2× plus à l'école — et qu'on la traite de 'toxique', on ne fait pas de la sociologie. On maquille une crise.",
    },
    orange: {
      mode: "Combatif · L'Épée",
      these: "Les différences homme/femme ont une base biologique documentée (Baron-Cohen 671 606 participants, force physique 50-60%, Big Five). Les nier au nom du constructivisme social est idéologique, pas scientifique. Le Gender Equality Paradox démontre qu'en libérant les choix, les différences s'amplifient — pas l'inverse.",
      stats: [
        { number: "671 606", label: "participants étude Baron-Cohen PNAS 2018 — femmes supérieures en empathie, hommes en systémisation" },
        { number: "50-60%", label: "force membres supérieurs des femmes vs hommes (études physiologiques)" },
        { number: "Paradox", label: "Gender Equality Paradox — plus une société est égalitaire, plus les choix H/F divergent (Stoet & Geary 2018)" },
        { number: "3.3:1", label: "ratio suicide H/F France (DREES) — 4:1 aux USA (OMS)" },
        { number: "1 sur 4", label: "enfants américains grandit sans son père (19 M enfants, NFI)" },
      ],
      cloture: "Vous ne pouvez pas construire une théorie du genre en niant 671 606 sujets d'étude, 96% de population carcérale masculine, et 75% de suicides masculins. À un moment, le réel gagne.",
    },
    jaune: {
      mode: "Persuasif · L'Architecte",
      these: "Reconnaître les acquis légitimes des vagues féministes 1 et 2 (droits civiques, autonomie économique, contraception) — critiquer les excès de la vague 4 (pathologisation, essentialisation). Proposer une synthèse : féminisme d'équité (Sommers) + reconstruction paternelle (Farrell, Peterson).",
      stats: [
        { number: "4 vagues", label: "féminisme : suffragistes (1) / Beauvoir-Friedan (2) / intersectionnalité (3) / #MeToo-woke (4)" },
        { number: "70%", label: "des jeunes détenus proviennent de foyers monoparentaux (National Fatherhood Initiative)" },
        { number: "-46%", label: "consommation de drogues chez les jeunes mentorés (Big Brothers Big Sisters, essais randomisés)" },
        { number: "-32%", label: "comportements antisociaux chez les mentorés (BBBS)" },
        { number: "-27%", label: "consommation d'alcool chez les mentorés (BBBS)" },
      ],
      cloture: "Ce n'est pas un choix entre féminisme et masculinisme. C'est un choix entre l'idéologie qui divise et la reconstruction qui répare. Les données pointent la seconde.",
    },
    vert: {
      mode: "Inspirant · Le Phare",
      these: "Restaurer la fierté masculine responsable — sans agressivité contre les femmes, sans complaisance envers la faiblesse. Réhabiliter la figure paternelle, le mentorat, le service. Les grands hommes du passé (Marc Aurèle, Mandela, Frankl, Churchill) traçent le chemin d'une virilité positive à l'ère post-patriarcale.",
      stats: [
        { number: "109 254", label: "jeunes mentorés par Big Brothers Big Sisters aux USA en 2020 — modèle éprouvé transférable" },
        { number: "27 ans", label: "de prison à Robben Island pour Mandela — modèle de résilience virile sans haine" },
        { number: "5 essais RCT", label: "démontrent que le mentorat masculin réduit délinquance et addiction — solution scalable" },
        { number: "12 Rules", label: "Peterson : programme de reconstruction identitaire vendu à 10+ millions d'exemplaires" },
        { number: "3 vertus", label: "de la virilité aristotélicienne : courage, tempérance, magnanimité — universaux culturels" },
      ],
      cloture: "La question n'est pas 'faut-il être un homme ?' — c'est 'quel type d'homme devenir ?'. La virilité n'est pas un problème à effacer, c'est une force à orienter.",
    },
    bleu: {
      mode: "Socratique · Le Miroir",
      these: "Poser les questions que le discours dominant refuse. Pas pour convaincre, mais pour ouvrir. Chaque question doit contenir un fait vérifiable — non pour piéger, mais pour rendre pensable ce que le silence maintient impensable.",
      stats: [
        { number: "8 848", label: "décès par suicide en France (2023) — dont 75% hommes. Est-ce un enjeu féministe ?" },
        { number: "1 000+", label: "tentatives de sanction FIRE contre professeurs US (2014-2023) — comparable au maccarthysme ?" },
        { number: "~50%", label: "étudiants américains qui s'autocensurent en classe — est-ce une démocratie saine ?" },
        { number: "60%", label: "des Américains estiment la démocratie menacée par la peur d'exprimer ses opinions (FIRE)" },
        { number: "6 434", label: "participants revue systématique 2025 sur athlètes trans — quels résultats ignorés ?" },
      ],
      cloture: "Si nommer ces chiffres est déjà 'toxique', quel mot reste pour parler d'un enfant de 15 ans qui décroche, prend des antidépresseurs, cherche son père et ne le trouve pas ?",
    },
  },

  // ============================================================
  // 3. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "Les hommes traversent une crise multidimensionnelle réelle et documentée, aggravée par une idéologie qui pathologise leur masculinité — la réponse est la reconstruction, pas la répression",
      children: [
        {
          claim: "Les indicateurs de crise sont institutionnels et convergents",
          type: "premise",
          strength: 10,
          evidence: [
            "Suicide : 75.1% des décès en France (DREES 2023), ratio 3.3:1",
            "Prison : 96.6% de la population carcérale masculine (Justice 2024)",
            "SDF : 77-95% d'hommes (INSEE 2022)",
            "Décrochage scolaire : 20% garçons vs 11% filles",
            "Addictions : cannabis 57.6% vs 43.4%, drogues dures 20.1% vs 9.3%",
          ],
        },
        {
          claim: "Les différences H/F ont une base biologique documentée",
          type: "premise",
          strength: 8,
          evidence: [
            "Baron-Cohen 2018, 671 606 participants : empathie F > H, systémisation H > F",
            "Force physique : 50-60% membres supérieurs (universel physiologique)",
            "Big Five : différences stables cross-culturelles (Costa et al.)",
            "Gender Equality Paradox : plus l'égalité, plus les choix divergent",
            "Théorie de l'investissement parental (Trivers 1972)",
          ],
        },
        {
          claim: "Le féminisme de vague 4 pathologise la masculinité ordinaire",
          type: "premise",
          strength: 7,
          evidence: [
            "Concept de 'toxic masculinity' généralisé au comportement masculin normal",
            "Sommers : 'la masculinité ordinaire du garçon est vue comme aberrante'",
            "Peterson : risque de radicalisation par refoulement d'agressivité normale",
            "Éducation Nationale : 'préventions' anti-masculinité dès la maternelle",
          ],
        },
        {
          claim: "Le mouvement woke fonctionne comme une idéologie quasi-religieuse",
          type: "premise",
          strength: 6,
          evidence: [
            "Origines École de Francfort (Marcuse, Adorno) + postmodernisme (Foucault, Derrida)",
            "Division binaire oppresseur/opprimé",
            "Cancel culture : 591 cas FIRE, 1000+ tentatives US 2014-2023",
            "50% étudiants US s'autocensurent, 60% estiment démocratie menacée",
          ],
        },
        {
          claim: "L'absence paternelle est un facteur documenté de délinquance et mal-être",
          type: "premise",
          strength: 8,
          evidence: [
            "1 enfant américain sur 4 grandit sans père (19M, National Fatherhood Initiative)",
            "70% des jeunes en prison viennent de foyers monoparentaux",
            "Corrélation forte, causalité partielle (contrôler variables confondantes)",
          ],
        },
        {
          claim: "Le mentorat est une solution documentée par essais randomisés",
          type: "premise",
          strength: 9,
          evidence: [
            "Big Brothers Big Sisters : essais contrôlés randomisés",
            "-46% consommation de drogues",
            "-27% consommation d'alcool",
            "-32% comportements antisociaux",
            "Modèle scalable (109 254 jeunes US 2020)",
          ],
        },
        {
          claim: "La baisse séculaire de testostérone est un fait biologique inquiétant",
          type: "premise",
          strength: 6,
          evidence: [
            "Travison et al. 2007, Massachusetts Male Aging Study, 3 cohortes 1987-2004",
            "-1.2%/an indépendamment de l'âge, IMC, tabagisme, alcool",
            "Lien perturbateurs endocriniens débattu (correlation vs causation)",
            "Spermatozoïdes : baisse de ~50% en 40 ans (Levine 2017)",
          ],
        },
        {
          claim: "La solution est un féminisme d'équité + reconstruction paternelle, pas une guerre des sexes",
          type: "premise",
          strength: 7,
          evidence: [
            "Sommers : équité vs identité",
            "Farrell : redéfinir le pouvoir masculin (Myth of Male Power 1993)",
            "Peterson : responsabilité comme antidote au ressentiment (12 Rules)",
            "Paglia : féminisme dissident anti-victimaire",
            "Haidt : les 3 anti-vérités du wokisme (Coddling of American Mind)",
          ],
        },
      ],
    },
  },

  // ============================================================
  // 4. QUOTES
  // ============================================================
  quotes: [
    {
      text: "Le pouvoir, pour les hommes, c'est le sentiment d'être obligé de gagner de l'argent que quelqu'un d'autre dépense pendant qu'ils meurent plus tôt. Se sentir obligé n'est pas du pouvoir.",
      context: "Warren Farrell, The Myth of Male Power (1993) — redéfinition du pouvoir",
      tags: ["farrell", "pouvoir", "citation", "redefinition"],
      rhetorical_device: "redéfinition contre-intuitive / thèse",
      power_score: 10,
      highlight_words: ["obligé", "pas du pouvoir"],
    },
    {
      text: "Chaque société qui a survécu l'a fait en persuadant ses fils d'être jetables — jetables à la guerre, jetables au travail — et donc, indirectement, jetables en tant que pères.",
      context: "Warren Farrell — jetabilité masculine",
      tags: ["farrell", "jetabilite", "society", "peres"],
      rhetorical_device: "diagnostic sociologique / gradation",
      power_score: 9,
      highlight_words: ["jetables", "en tant que pères"],
    },
    {
      text: "C'est une mauvaise époque pour être un garçon en Amérique.",
      context: "Christina Hoff Sommers, The War Against Boys, Atlantic mai 2000",
      tags: ["sommers", "garcons", "epoque", "amerique"],
      rhetorical_device: "diagnostic condensé / titre choc",
      power_score: 8,
      highlight_words: ["mauvaise époque", "garçon"],
    },
    {
      text: "De plus en plus, dans nos écoles et dans nos foyers, la masculinité ordinaire du garçon est vue comme aberrante, toxique — une pathologie nécessitant un remède.",
      context: "Sommers — sur le concept de 'masculinité toxique' appliqué aux enfants",
      tags: ["sommers", "toxique", "pathologisation", "ecole"],
      rhetorical_device: "diagnostic + citation d'expert",
      power_score: 9,
      highlight_words: ["masculinité ordinaire", "pathologie"],
    },
    {
      text: "Ce que le féminisme appelle patriarcat n'est rien d'autre que la civilisation, un système abstrait conçu par les hommes mais augmenté et désormais codétenu par les femmes.",
      context: "Camille Paglia, Sexual Personae (1990)",
      tags: ["paglia", "patriarcat", "civilisation", "codetenu"],
      rhetorical_device: "redéfinition / provocation intellectuelle",
      power_score: 9,
      highlight_words: ["patriarcat", "civilisation", "codétenu"],
    },
    {
      text: "Débarrassons-nous du féminisme d'infirmerie, avec son asile de pleurnicheuses, d'anorexiques, de boulimiques, de dépressives, de victimes de viol et de survivantes de l'inceste.",
      context: "Camille Paglia, Vamps & Tramps (1994) — critique du féminisme victimaire",
      tags: ["paglia", "victimaire", "provocation", "feminisme"],
      rhetorical_device: "invective / catalogue provocateur",
      power_score: 8,
      highlight_words: ["féminisme d'infirmerie", "pleurnicheuses"],
    },
    {
      text: "La virilité contrainte à la sensibilité n'est plus de la virilité.",
      context: "Paglia — définition de la masculinité authentique",
      tags: ["paglia", "virilite", "sensibilite", "definition"],
      rhetorical_device: "définition en négation / aphorisme",
      power_score: 9,
      highlight_words: ["contrainte", "n'est plus"],
    },
    {
      text: "Les garçons souffrent, dans le monde moderne. Ils sont plus désobéissants — négativement — ou plus indépendants — positivement — que les filles, et ils en souffrent tout au long de leur parcours éducatif pré-universitaire.",
      context: "Jordan Peterson, 12 Rules for Life (2018)",
      tags: ["peterson", "garcons", "education", "souffrance"],
      rhetorical_device: "diagnostic clinique / distinction",
      power_score: 8,
      highlight_words: ["souffrent", "désobéissants", "indépendants"],
    },
    {
      text: "Ne rendez pas les garçons honteux de leur masculinité. Ne les poussez pas à se féminiser, de peur qu'ils ne repoussent et ne deviennent machistes.",
      context: "Peterson — avertissement pédagogique",
      tags: ["peterson", "honte", "machiste", "avertissement"],
      rhetorical_device: "impératif prophylactique / mise en garde",
      power_score: 10,
      highlight_words: ["honteux", "machistes"],
    },
    {
      text: "Quand la douceur et l'inoffensivité deviennent les seules vertus consciemment acceptables, alors la dureté et la domination commencent à exercer une fascination inconsciente.",
      context: "Peterson — sur le refoulement de l'agressivité normale",
      tags: ["peterson", "douceur", "domination", "refoulement"],
      rhetorical_device: "loi psychologique / paradoxe des vertus",
      power_score: 9,
      highlight_words: ["douceur", "fascination inconsciente"],
    },
    {
      text: "Si les hommes sont poussés trop fort à se féminiser, ils deviendront de plus en plus intéressés par les idéologies politiques dures et fascistes.",
      context: "Peterson — avertissement sur la radicalisation masculine",
      tags: ["peterson", "radicalisation", "fascisme", "feminisation"],
      rhetorical_device: "avertissement causal / prophétie",
      power_score: 9,
      highlight_words: ["féminiser", "fascistes"],
    },
    {
      text: "Les trois grandes contre-vérités : 'Ce qui ne te tue pas te rend plus faible', 'Fais toujours confiance à tes sentiments', 'La vie est un combat entre les bons et les méchants'.",
      context: "Haidt & Lukianoff, The Coddling of the American Mind (2018)",
      tags: ["haidt", "contre-verites", "wokisme", "psychologie"],
      rhetorical_device: "diagnostic condensé / triade critique",
      power_score: 10,
      highlight_words: ["contre-vérités", "combat"],
    },
    {
      text: "Au niveau mondial, les garçons sont 50% moins susceptibles que les filles d'atteindre les niveaux de compétence de base en lecture, mathématiques et sciences.",
      context: "Warren Farrell, The Boy Crisis (2018) — chiffre mondial",
      tags: ["farrell", "ecole", "monde", "chiffre"],
      rhetorical_device: "statistique choc / cadrage mondial",
      power_score: 9,
      highlight_words: ["50% moins susceptibles"],
    },
    {
      text: "Les garçons portent aujourd'hui le fardeau de plusieurs tendances culturelles puissantes : une approche thérapeutique de l'éducation qui valorise les sentiments et dénigre la compétition et le risque, des politiques de tolérance zéro qui punissent les comportements normaux des jeunes mâles, et un mouvement pour l'équité de genre qui voit la masculinité comme prédatrice.",
      context: "Sommers — diagnostic complet de la crise",
      tags: ["sommers", "diagnostic", "education", "politique"],
      rhetorical_device: "énumération diagnostic",
      power_score: 9,
      highlight_words: ["thérapeutique", "prédatrice"],
    },
    {
      text: "La masculinité ne fait plus que s'imiter depuis les films. Il ne reste rien.",
      context: "Paglia — sur la disparition de la masculinité authentique",
      tags: ["paglia", "imitation", "films", "vide"],
      rhetorical_device: "constat désabusé / verdict culturel",
      power_score: 8,
      highlight_words: ["s'imiter depuis les films"],
    },
    {
      text: "You need to be told 'piss off'. I don't care. I'm not interested in your excuses.",
      context: "Andrew Tate (cross-link video) — West support culture critiquée",
      tags: ["tate", "support-culture", "provocation", "excuses"],
      rhetorical_device: "renversement de la bienveillance / attaque directe",
      power_score: 7,
      highlight_words: ["piss off", "excuses"],
    },
    {
      text: "As a man, you have a burden of performance. You wake up and say 'How do I perform?', not 'How do I get happy?'.",
      context: "Andrew Tate — cadre genré performance vs bonheur (cross-link)",
      tags: ["tate", "performance", "bonheur", "masculinite"],
      rhetorical_device: "opposition binaire / injonction identitaire",
      power_score: 8,
      highlight_words: ["burden of performance"],
    },
    {
      text: "75% des suicides en France sont masculins. Nommer ce chiffre est un service public, pas un backlash.",
      context: "Auguste Pugnet — recadrage rhétorique",
      tags: ["chiffre", "recadrage", "backlash", "service-public"],
      rhetorical_device: "recadrage moral / renversement d'accusation",
      power_score: 10,
      highlight_words: ["75%", "service public"],
    },
    {
      text: "Vous ne pouvez pas construire une théorie du genre en niant 671 606 sujets d'étude, 96% de population carcérale masculine, et 75% de suicides masculins. À un moment, le réel gagne.",
      context: "Auguste — argument par la donnée massive",
      tags: ["donnees", "reel", "theorie", "genre"],
      rhetorical_device: "argument par accumulation empirique",
      power_score: 10,
      highlight_words: ["671 606", "le réel gagne"],
    },
    {
      text: "La question n'est pas 'faut-il être un homme ?' — c'est 'quel type d'homme devenir ?'.",
      context: "Auguste — recadrage du débat identitaire",
      tags: ["identite", "recadrage", "question", "devenir"],
      rhetorical_device: "recadrage de question / substitution",
      power_score: 9,
      highlight_words: ["quel type d'homme"],
    },
    {
      text: "Le Gender Equality Paradox : plus une société est égalitaire, plus les choix H/F divergent. Le contraire de ce que prédit la théorie constructiviste.",
      context: "Auguste — utilisation Stoet & Geary 2018",
      tags: ["paradox", "constructivisme", "choix", "divergence"],
      rhetorical_device: "démonstration par le paradoxe",
      power_score: 9,
      highlight_words: ["paradox", "divergent"],
    },
    {
      text: "Un enfant sur quatre en Amérique grandit sans son père. 70% des jeunes en prison viennent de foyers monoparentaux. Ce n'est pas un débat idéologique, c'est un chantier de mentorat.",
      context: "Auguste — chiffres NFI + solution BBBS",
      tags: ["pere", "prison", "mentorat", "solution"],
      rhetorical_device: "diagnostic + solution / pivot constructif",
      power_score: 10,
      highlight_words: ["1 sur 4", "chantier de mentorat"],
    },
    {
      text: "-46% de drogues. -27% d'alcool. -32% de comportements antisociaux. C'est ce que produit le mentorat masculin, mesuré par essais randomisés.",
      context: "Auguste — chiffres Big Brothers Big Sisters",
      tags: ["mentorat", "bbbs", "chiffres", "solution"],
      rhetorical_device: "cascade de chiffres / démonstration empirique",
      power_score: 9,
      highlight_words: ["-46%", "-32%"],
    },
    {
      text: "Ne pas confondre 'toxic masculinity' — un vrai problème dans certains cas — avec 'masculinité ordinaire' — une force à orienter. Le glissement sémantique est le piège central.",
      context: "Auguste — distinction sémantique clé",
      tags: ["distinction", "toxique", "ordinaire", "glissement"],
      rhetorical_device: "distinction sémantique / warning méthodologique",
      power_score: 9,
      highlight_words: ["glissement sémantique"],
    },
    {
      text: "Si nommer ces chiffres est déjà toxique, quel mot reste pour parler d'un enfant de 15 ans qui décroche, prend des antidépresseurs, cherche son père et ne le trouve pas ?",
      context: "Clôture Mode Bleu — question émotionnelle finale",
      tags: ["cloture", "enfant", "pere", "emotion"],
      rhetorical_device: "question de clôture / prosopopée émotive",
      power_score: 10,
      highlight_words: ["15 ans", "cherche son père"],
    },
    {
      text: "Le féminisme des vagues 1 et 2 a obtenu des droits fondamentaux — vote, propriété, contraception. C'est un acquis civilisationnel. La vague 4, en pathologisant la masculinité, trahit cet acquis.",
      context: "Auguste — distinction des 4 vagues",
      tags: ["vagues", "distinction", "acquis", "vague-4"],
      rhetorical_device: "distinction historique / accusation retournée",
      power_score: 9,
      highlight_words: ["acquis civilisationnel", "trahit"],
    },
    {
      text: "La virilité n'est pas un problème à effacer, c'est une force à orienter.",
      context: "Auguste — clôture Mode Vert",
      tags: ["virilite", "force", "orientation", "vert"],
      rhetorical_device: "opposition problème/force / redéfinition constructive",
      power_score: 10,
      highlight_words: ["force à orienter"],
    },
    {
      text: "Marc Aurèle, Mandela, Frankl, Churchill : ces hommes n'ont pas été détruits par leur masculinité — ils l'ont canalisée en service.",
      context: "Auguste — figures historiques du Mode Vert",
      tags: ["marc-aurele", "mandela", "frankl", "service"],
      rhetorical_device: "convocation d'autorités historiques / modèle constructif",
      power_score: 8,
      highlight_words: ["service"],
    },
    {
      text: "Le silence sur la crise masculine n'est pas de la neutralité — c'est un choix éditorial. Poser les chiffres est un contre-choix.",
      context: "Auguste — sur le silence médiatique",
      tags: ["silence", "editorial", "chiffres", "media"],
      rhetorical_device: "renversement de la neutralité / accusation politique",
      power_score: 8,
      highlight_words: ["silence", "choix éditorial"],
    },
  ],

  // ============================================================
  // 5. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "La 'crise de la masculinité' est un narratif conservateur pour résister au progrès féministe.",
        response: "Les données sont institutionnelles (OMS, INSEE, DREES, Ministère de la Justice). 75% des suicides masculins, 96,6% de détenus hommes, 77-95% de SDF hommes ne sont pas un narratif — ce sont des faits publiés par des institutions officielles françaises et internationales.",
        technique: "Substitution 'narratif' par 'données institutionnelles' + attaque de la source",
        example_response_text: "Ce ne sont pas 'mes chiffres'. Ce sont ceux de la DREES, de l'INSEE, du Ministère de la Justice, de l'OMS. 75% des suicides sont masculins. 96,6% de la population carcérale est masculine. 77 à 95% des sans-abri sont des hommes. Vous pouvez appeler ça 'narratif conservateur' si vous voulez — le mot ne change pas le chiffre. Ce sont des faits publiés par les institutions officielles.",
      },
      {
        challenge: "Les différences H/F sont sociales, pas biologiques.",
        response: "Étude Baron-Cohen 671 606 participants publiée dans PNAS 2018 — différences documentées en empathie et systémisation. Gender Equality Paradox (Stoet & Geary 2018) : dans les sociétés les plus égalitaires, les différences de choix H/F s'amplifient — contraire à la prédiction constructiviste.",
        technique: "Volume d'échantillon massif + résultat contre-intuitif au constructivisme",
        example_response_text: "L'étude Baron-Cohen a inclus 671 606 participants — pas un échantillon marginal. Publiée dans PNAS. Les différences en empathie (F>H) et systémisation (H>F) sont stables. Plus fort : le Gender Equality Paradox (Stoet & Geary 2018) montre que dans les sociétés les plus égalitaires — Norvège, Suède, Finlande — les différences de choix professionnels H/F s'amplifient, ne diminuent pas. Le constructivisme prédit l'inverse. Le paradoxe existe.",
      },
      {
        challenge: "Le féminisme aide aussi les hommes en combattant les stéréotypes de genre.",
        response: "Distinguer les 4 vagues. Vagues 1 et 2 : acquis civilisationnels (vote, contraception, autonomie économique) — soutien total. Vague 4 : pathologisation de la masculinité ordinaire — critique documentée par Sommers, Paglia, Peterson.",
        technique: "Distinction historique des vagues + soutien partiel + critique ciblée",
        example_response_text: "Distinguons. Vague 1 (suffragistes) et Vague 2 (Beauvoir, Friedan) ont obtenu des droits fondamentaux — vote, propriété, contraception. Aucun désaccord — c'est un acquis civilisationnel. La Vague 4 (post-#MeToo, woke) qualifie la masculinité de 'toxique' par défaut. Sommers documente que 'la masculinité ordinaire du garçon est vue comme aberrante' à l'école. Ce n'est plus combattre les stéréotypes — c'est fabriquer une nouvelle honte.",
      },
      {
        challenge: "La cancel culture est exagérée, ce ne sont que des conséquences sociales normales.",
        response: "FIRE documente 591 cas de représailles universitaires depuis 2015, 1 000+ tentatives de sanctions contre professeurs US 2014-2023. 50% des étudiants américains s'autocensurent. 60% estiment la démocratie menacée. Ce sont des ordres de grandeur du maccarthysme.",
        technique: "Volume documenté + comparaison historique",
        example_response_text: "FIRE — Foundation for Individual Rights in Education — documente 591 cas de représailles depuis 2015, avec pièces à conviction. Plus de 1 000 tentatives de sanctions contre professeurs US entre 2014 et 2023, dont ~66% ont abouti. 50% des étudiants américains disent s'autocensurer en classe. 60% des Américains estiment la démocratie menacée. Ce sont des chiffres de maccarthysme, pas de 'conséquences sociales normales'.",
      },
      {
        challenge: "Les femmes trans n'ont pas d'avantage significatif dans le sport.",
        response: "Les fédérations sportives (World Athletics 2023, World Aquatics 2022, World Rugby, British Cycling) ont adopté des restrictions croissantes précisément parce que les données montrent un avantage résiduel après transition. Concéder la complexité tout en respectant la décision institutionnelle.",
        technique: "Appel aux décisions institutionnelles sportives + revue systématique",
        example_response_text: "Les fédérations elles-mêmes ont tranché sur la base de leurs données. World Athletics exclut depuis mars 2023 toutes les femmes trans ayant traversé la puberté masculine. World Aquatics, World Rugby, British Cycling — même trajectoire. Ce n'est pas un débat de café — c'est un choix institutionnel appuyé sur des mesures physiologiques. La revue systématique 2025 (51 études, 6 434 participants) montre VO2max et détente verticale inférieurs chez les femmes trans, mais force similaire — nuance à respecter.",
      },
      {
        challenge: "Vous parlez d'absence paternelle mais vous ignorez que beaucoup de mères élèvent seules des enfants équilibrés.",
        response: "Absolument — ce n'est pas une accusation contre les mères. C'est une corrélation statistique documentée. 70% des jeunes détenus proviennent de foyers monoparentaux — chiffre National Fatherhood Initiative. Cela n'implique pas que tout enfant sans père devienne délinquant, mais que l'absence paternelle est un facteur de risque significatif à mitiger, notamment par le mentorat.",
        technique: "Concession forte + distinction statistique / individuelle + solution (mentorat)",
        example_response_text: "Absolument pas — ce n'est pas une accusation contre les mères, qui font souvent un travail héroïque seules. C'est une corrélation statistique. 70% des jeunes en prison viennent de foyers monoparentaux — chiffre National Fatherhood Initiative. Ça ne veut pas dire 'sans père = délinquant', ça veut dire que l'absence paternelle est un facteur de risque à compenser. La solution est le mentorat structuré — Big Brothers Big Sisters : -46% drogues, -27% alcool, -32% comportements antisociaux, mesuré par essais randomisés.",
      },
      {
        challenge: "Peterson et Farrell sont des figures polarisantes, leur citation décrédibilise votre argument.",
        response: "Citer les données institutionnelles + les auteurs moins polémiques : Sommers (philosophe reconnue), Baron-Cohen (Cambridge, PNAS), Stoet & Geary (Psychological Science), Haidt (NYU, TED talk 15M vues). Peterson comme complément, pas comme fondation.",
        technique: "Renforcement des sources + hiérarchisation des références",
        example_response_text: "L'argumentation ne repose pas d'abord sur Peterson. Elle repose sur Baron-Cohen (Cambridge, PNAS, 671 606 participants), Stoet & Geary (Psychological Science), Sommers (Cambridge PhD philosophy, ancienne AEI), Haidt (NYU Stern, TED talk 15M vues), et sur les données institutionnelles DREES/OMS/INSEE. Peterson est un complément clinique qui popularise le diagnostic, pas la source empirique. Le fond est solide indépendamment de sa personne.",
      },
    ],

    how_to_attack: [
      {
        target_claim: "La 'masculinité toxique' est un concept scientifique.",
        attack: "Le concept n'a pas de définition opérationnelle stable. Utilisé pour décrire à la fois des comportements criminels (violence conjugale) et des comportements normaux (compétition, prise de risque, agressivité contenue). Ce glissement sémantique est le piège central — il permet de pathologiser à volonté.",
        angle: "logique / sémantique",
      },
      {
        target_claim: "Le patriarcat opprime toutes les femmes et privilégie tous les hommes.",
        attack: "Contre-empirique : 75% des suicides sont masculins, 96,6% des détenus, 77% des SDF, 20% des garçons décrochent sans diplôme vs 11% des filles. Si le patriarcat 'privilégie' les hommes, ces chiffres sont inexplicables. La théorie doit expliquer les faits, pas les ignorer.",
        angle: "empirique",
      },
      {
        target_claim: "Le Gender Equality Paradox est un artefact culturel occidental.",
        attack: "La réanalyse PNAS 2025 mentionne l'objection, mais l'étude originale (Stoet & Geary 2018) inclut 67 pays et contrôle les variables culturelles. Le paradoxe reste significatif après ajustements. C'est une objection légitime, pas une réfutation.",
        angle: "empirique / méthodologique",
      },
      {
        target_claim: "L'absence paternelle et la délinquance sont deux effets d'une même cause (pauvreté).",
        attack: "Point valide — la corrélation ne prouve pas la causalité. Mais les études longitudinales (Amato, McLanahan) contrôlent la pauvreté et trouvent un effet résiduel de l'absence paternelle. La causalité partielle est documentée, pas totale.",
        angle: "empirique / méthodologique",
      },
      {
        target_claim: "La baisse de testostérone est un artefact méthodologique.",
        attack: "Travison et al. 2007 contrôle explicitement les méthodes de mesure, IMC, tabagisme, alcool, et âge. Le déclin résiduel reste significatif. L'objection méthodologique est examinée, pas ignorée.",
        angle: "empirique",
      },
      {
        target_claim: "Le mentorat BBBS marche seulement dans le contexte américain.",
        attack: "Le programme est déployé dans 12 pays (Canada, UK, Australie, Nouvelle-Zélande, France partielle). Les études internationales confirment les résultats. La question du transfert culturel est légitime mais partielle.",
        angle: "empirique",
      },
    ],

    how_to_rephrase: [
      {
        original: "La 'toxicité masculine' est un fantasme féministe qui pathologise les garçons normaux.",
        softer: "Le concept de 'masculinité toxique' pose problème quand il est étendu à des comportements masculins normaux (compétition, indépendance, agressivité contenue).",
        harder: "Vous voulez rendre les garçons honteux d'être des garçons. Peterson vous prévient : ils repousseront et deviendront machistes ou fascistes.",
        academic: "L'extension conceptuelle du terme 'toxic masculinity' au-delà des comportements pathologiques ou criminels vers des traits masculins statistiquement normaux (compétitivité, prise de risque, expression agressive contrôlée) constitue une opération de glissement sémantique dont les conséquences psychosociales chez les jeunes garçons sont documentées (Sommers 2013, Farrell 2018).",
      },
      {
        original: "75% des suicides sont masculins et personne n'en parle.",
        softer: "Le fait que 75% des décès par suicide en France concernent des hommes reste largement absent du débat public sur la santé mentale.",
        harder: "8 848 morts par an. 75% d'hommes. Silence médiatique. Bienvenue dans le patriarcat.",
        academic: "L'invisibilité relative de la surmortalité masculine par suicide (75.1% des décès en France, ratio H/F 3.3:1 selon la DREES 2023) dans le discours public en santé mentale illustre une asymétrie d'attention institutionnelle qui mériterait d'être analysée dans le cadre d'une sociologie des priorités sanitaires.",
      },
      {
        original: "Le féminisme de vague 4 aggrave la crise masculine.",
        softer: "Certains discours issus du féminisme contemporain, en associant systématiquement la masculinité à la toxicité, contribuent au désengagement des garçons.",
        harder: "Le féminisme woke n'est plus une lutte pour l'égalité — c'est une croisade contre la moitié de l'humanité. Et les chiffres l'attestent : suicide, prison, décrochage, rue.",
        academic: "L'évolution du féminisme de la quatrième vague vers une critique systématique de la masculinité en tant que catégorie ontologique — plutôt que de comportements spécifiques — s'accompagne empiriquement d'une aggravation des indicateurs de mal-être masculin, sans qu'une relation causale directe soit établie mais avec une corrélation temporelle documentée (2015-2025).",
      },
      {
        original: "L'absence paternelle est une catastrophe sociale.",
        softer: "L'absence structurelle du père dans la vie des enfants est un facteur de risque documenté pour de multiples indicateurs (délinquance, réussite scolaire, santé mentale).",
        harder: "1 gamin américain sur 4 sans père. 70% des jeunes en prison viennent de familles monoparentales. Vous voulez encore parler de patriarcat ?",
        academic: "La corrélation entre monoparentalité maternelle et indicateurs de vulnérabilité (délinquance juvénile, décrochage scolaire, exposition aux substances) est documentée dans plusieurs études longitudinales (Amato, McLanahan), avec un effet résiduel significatif après contrôle des variables socioéconomiques.",
      },
      {
        original: "Le Gender Equality Paradox détruit la thèse constructiviste.",
        softer: "Le Gender Equality Paradox (Stoet & Geary 2018) suggère que la libéralisation des choix professionnels amplifie plutôt qu'elle ne réduit les différences H/F, ce qui interroge la thèse purement constructiviste.",
        harder: "Plus une société libère les choix, plus les H et F choisissent différemment. Vos théories construites en café philo sont réfutées par 67 pays.",
        academic: "Le paradoxe observé par Stoet et Geary (Psychological Science 2018) — corrélation positive entre indice d'égalité des sexes et divergence des choix professionnels H/F sur 67 pays — constitue une observation empirique difficile à concilier avec un modèle constructiviste fort de la construction sociale du genre.",
      },
      {
        original: "Le mentorat est la solution — c'est mesurable.",
        softer: "Les programmes de mentorat masculin, comme Big Brothers Big Sisters, présentent des résultats mesurés d'efficacité par essais contrôlés randomisés.",
        harder: "-46% de drogues, -27% d'alcool, -32% de délinquance. Le mentorat fonctionne. Le discours de la 'toxicité' ne mesure rien — il détruit.",
        academic: "Les évaluations par essais contrôlés randomisés du programme Big Brothers Big Sisters of America documentent des effets significatifs sur la réduction des comportements à risque (consommation de drogues -46%, alcool -27%, comportements antisociaux -32%), suggérant une approche interventionnelle scientifiquement fondée pour la crise masculine juvénile.",
      },
    ],

    if_asked: [
      {
        question: "N'est-ce pas un backlash conservateur contre les acquis féministes ?",
        best_response: "Non — c'est une distinction historique. Les vagues 1 (suffragistes) et 2 (Beauvoir, Friedan) ont obtenu des droits civils et économiques : soutien complet, acquis civilisationnel. La vague 4 pathologise la masculinité ordinaire, ce qui aggrave la crise masculine documentée. Défendre les hommes en crise ne s'oppose pas aux droits des femmes — c'est un chantier parallèle nécessaire.",
        followup_moves: [
          "Distinguer les 4 vagues du féminisme",
          "Rappeler l'acquis civilisationnel des vagues 1 et 2",
          "Rediriger sur les données institutionnelles (75% suicides, 96% prison)",
        ],
      },
      {
        question: "Pourquoi utiliser des auteurs comme Peterson ou Tate qui polarisent ?",
        best_response: "L'argumentation repose d'abord sur les données institutionnelles (DREES, INSEE, OMS) et les auteurs académiques (Baron-Cohen à Cambridge, Sommers à AEI, Stoet & Geary dans Psychological Science, Haidt à NYU). Peterson est un complément clinique qui popularise le diagnostic. Tate est un signal culturel de ce qui se passe quand aucune alternative constructive n'est proposée aux jeunes hommes.",
        followup_moves: [
          "Renforcer les sources primaires académiques",
          "Distinguer diagnostic (Peterson) et symptôme culturel (Tate)",
          "Insister sur les données institutionnelles",
        ],
      },
      {
        question: "Le mentorat BBBS marche-t-il vraiment en dehors des USA ?",
        best_response: "Le programme est présent dans 12 pays (Canada, UK, Australie, Nouvelle-Zélande, Allemagne, Pays-Bas partiels, Israël). Les évaluations internationales confirment des effets similaires, avec des tailles d'effet parfois plus modestes. En France, le mentorat structuré existe (Article 1, Le Rocher) mais reste sous-échelle. La question du transfert culturel est légitime — la solution est de tester, pas d'ignorer.",
        followup_moves: [
          "Citer les études internationales BBBS",
          "Nommer les initiatives françaises existantes",
          "Proposer un chantier public de scaling",
        ],
      },
      {
        question: "Est-ce que dire 'la masculinité est en crise' n'aggrave pas le sentiment de victimisation des jeunes hommes ?",
        best_response: "Point valide. La distinction est diagnostic (nommer les chiffres) vs identité victimaire (se définir par la plainte). Le diagnostic est nécessaire pour agir. La solution proposée est constructive : mentorat, responsabilisation, virilité orientée vers le service. Peterson : responsabilité comme antidote au ressentiment. C'est l'inverse d'une culture victimaire.",
        followup_moves: [
          "Distinguer diagnostic et identité victimaire",
          "Insister sur la responsabilité (Peterson)",
          "Proposer les frameworks constructifs",
        ],
      },
      {
        question: "Le déclin de la testostérone est-il vraiment biologique ou méthodologique ?",
        best_response: "Travison et al. 2007 (Massachusetts Male Aging Study, 3 cohortes 1987-2004) contrôle les méthodes de mesure, l'IMC, le tabagisme et l'alcool, et trouve un déclin résiduel significatif. D'autres études (Andersson 2007 Danemark, Perheentupa 2013 Finlande) confirment. Les causes proposées incluent les perturbateurs endocriniens (phtalates, BPA, pesticides) — la corrélation est robuste, la causalité partielle est débattue.",
        followup_moves: [
          "Sortir Travison 2007 en référence primaire",
          "Citer Andersson et Perheentupa comme confirmations",
          "Distinguer effet documenté et mécanisme causal",
        ],
      },
      {
        question: "Le Gender Equality Paradox n'est-il pas un artefact culturel occidental ?",
        best_response: "La réanalyse PNAS 2025 propose cette objection — c'est un débat scientifique légitime. L'étude originale Stoet & Geary 2018 inclut 67 pays et contrôle plusieurs variables culturelles. Le paradoxe reste significatif après ajustements dans plusieurs répliques indépendantes (Falk & Hermle Science 2018). L'objection culturelle est valide, la réfutation totale ne l'est pas encore.",
        followup_moves: [
          "Distinguer étude originale et réanalyse",
          "Citer Falk & Hermle 2018 en réplique indépendante",
          "Reconnaître le débat méthodologique",
        ],
      },
      {
        question: "N'est-ce pas ignorer les femmes en crise en se concentrant sur les hommes ?",
        best_response: "Non — les femmes ont légitimement obtenu 60 ans d'attention institutionnelle et médiatique sur leurs enjeux (violences, plafond de verre, harcèlement, contraception). C'est un acquis. La crise masculine est structurellement invisibilisée depuis 2 décennies. Nommer les 75% de suicides masculins n'oppose pas les femmes aux hommes — c'est étendre le soin, pas le retirer.",
        followup_moves: [
          "Reconnaître les acquis féministes",
          "Distinguer 'ajouter du soin aux hommes' vs 'retirer aux femmes'",
          "Proposer une politique de santé mentale genrée complémentaire",
        ],
      },
      {
        question: "Est-ce que défendre la masculinité, ce n'est pas défendre le retour à un modèle ancien oppressif ?",
        best_response: "Non — la virilité proposée est post-patriarcale et constructive. Les figures de référence (Marc Aurèle, Mandela, Frankl, Churchill) ne sont pas des oppresseurs. Le paternel absent est le vrai problème contemporain, pas le paternel autoritaire d'autrefois. Restaurer la fierté paternelle et l'engagement viril envers les enfants est un progrès, pas un retour.",
        followup_moves: [
          "Sortir les figures constructives (Aurèle, Mandela, Frankl)",
          "Distinguer paternité constructive et patriarcat oppressif",
          "Insister sur le père absent comme problème actuel",
        ],
      },
    ],
  },

  // ============================================================
  // 6. FALLACIES
  // ============================================================
  fallacies: [
    {
      original_claim: "Le patriarcat opprime toutes les femmes et privilégie tous les hommes.",
      fallacy_type: "généralisation abusive / essentialisation catégorielle",
      why_fallacious: "Traite deux catégories massives (femmes/hommes) comme si tous leurs membres partageaient le même statut social. Ignore les axes de vulnérabilité (classe, race, éducation) qui traversent les deux catégories. Ignore les 75% suicides / 96% prison / 77% SDF masculins.",
      steelman: "Le point charitable : historiquement, les structures institutionnelles (droit de vote, propriété, accès aux postes) ont massivement privilégié les hommes jusqu'au XXe siècle. La théorie du patriarcat a valu à décrire cette structure historique dans certains contextes.",
      nuance: "VRAI : les structures institutionnelles historiques ont privilégié les hommes juridiquement. VRAI : certaines inégalités actuelles persistent (plafond de verre, écart de rémunération). FAUX : que tous les hommes actuels bénéficient du patriarcat. FAUX : que la théorie explique les chiffres de vulnérabilité masculine.",
      counter_argument: "Une théorie qui ne peut expliquer 75% de suicides masculins et 96% de population carcérale masculine n'est pas une théorie complète. Elle nécessite au minimum une distinction hommes de pouvoir / hommes vulnérables — sinon elle est empiriquement contredite.",
      severity: "high",
    },
    {
      original_claim: "'Toxic masculinity' est un concept scientifique.",
      fallacy_type: "concept sans définition opérationnelle stable",
      why_fallacious: "Le terme n'a pas de définition consensuelle en psychologie clinique. Utilisé pour décrire à la fois des comportements criminels (violence conjugale) et des comportements normaux (compétition, prise de risque). Ce glissement sémantique est méthodologiquement inacceptable dans une catégorie 'scientifique'.",
      steelman: "Le point charitable : certains comportements masculins spécifiques (stoïcisme émotionnel poussé à l'extrême, refus de demander de l'aide, agressivité déplacée) sont documentés comme facteurs de risque pour la santé mentale. Le concept vise à nommer ces patterns.",
      nuance: "VRAI : certains patterns comportementaux masculins spécifiques nuisent à la santé mentale. VRAI : nommer ces patterns peut être utile en clinique. FAUX : que le concept ait une définition opérationnelle stable. FAUX : que son extension à la masculinité en général soit défendable.",
      counter_argument: "L'American Psychological Association a publié en 2018 des 'Guidelines for Psychological Practice with Boys and Men' contenant le terme, mais les définitions varient entre chercheurs. Un concept avec 5 définitions différentes n'est pas un concept scientifique — c'est un artefact rhétorique.",
      severity: "high",
    },
    {
      original_claim: "Si vous parlez de crise masculine, c'est parce que vous êtes anti-féministe.",
      fallacy_type: "ad hominem / soupçon d'intention",
      why_fallacious: "Substitue à l'argument un jugement moral sur l'intention supposée. Ne réfute aucun chiffre. Utilise l'étiquette comme clôture rhétorique — la personne ne peut plus être écoutée sans se re-qualifier.",
      steelman: "Le point charitable : il existe des mouvements 'masculinistes' authentiquement anti-féministes (MRA, incels). L'inquiétude que le langage de 'crise masculine' serve leur programme n'est pas irrationnelle.",
      nuance: "VRAI : certains discours de 'crise masculine' sont instrumentalisés par des mouvements anti-féministes. VRAI : la prudence est légitime. FAUX : que toute discussion de crise masculine soit anti-féministe. FAUX : que Sommers, Farrell, Peterson soient anti-femmes (leurs livres le contredisent explicitement).",
      counter_argument: "Sommers est philosophe féministe d'équité. Paglia est féministe dissidente. Peterson défend explicitement les droits des femmes. Farrell a été président de la National Organization for Women à New York. Leur assimilation à 'anti-féminisme' est factuellement fausse et rhétoriquement clôturante.",
      severity: "high",
    },
    {
      original_claim: "L'absence paternelle et la délinquance ne sont pas causalement liées — c'est la pauvreté.",
      fallacy_type: "confusion des variables / negation d'un effet résiduel",
      why_fallacious: "Les études longitudinales (McLanahan & Sandefur, Amato) contrôlent statistiquement la pauvreté et trouvent un effet résiduel significatif de l'absence paternelle sur la délinquance juvénile.",
      steelman: "Le point charitable : la pauvreté ET la monoparentalité sont corrélées. Le débat sur la part causale de chacune est réel et méthodologiquement difficile.",
      nuance: "VRAI : pauvreté et monoparentalité sont statistiquement liées. VRAI : la causalité relative est difficile à isoler. FAUX : que l'absence paternelle n'ait aucun effet résiduel. FAUX : que le sujet soit tranché.",
      counter_argument: "McLanahan & Sandefur 1994 (Growing Up With a Single Parent) contrôle le revenu et trouve un effet indépendant significatif. Amato 2005 : meta-analyse confirmant. C'est un consensus scientifique, pas une opinion.",
      severity: "medium",
    },
    {
      original_claim: "La cancel culture n'existe pas — c'est une invention conservatrice.",
      fallacy_type: "déni factuel",
      why_fallacious: "FIRE documente 591 cas de représailles universitaires depuis 2015, 1 000+ tentatives de sanctions contre professeurs US 2014-2023 avec ~66% aboutissant. 50% des étudiants américains s'autocensurent (sondage FIRE 2023). Ce sont des faits documentés, pas des opinions.",
      steelman: "Le point charitable : certains cas médiatisés de 'cancel culture' ont été exagérés ou décontextualisés. La sanction sociale de comportements réellement problématiques n'est pas de la cancel culture.",
      nuance: "VRAI : certains cas médiatisés sont exagérés. VRAI : la sanction sociale de comportements criminels n'est pas de la cancel culture. FAUX : que le phénomène n'existe pas. FAUX : que les 591 cas FIRE soient inventés.",
      counter_argument: "Les 591 cas FIRE incluent noms, universités, dates, sanctions. C'est une base de données publique et vérifiable. La contestation possible porte sur l'ampleur ou l'interprétation, pas sur l'existence.",
      severity: "high",
    },
    {
      original_claim: "Les femmes trans n'ont aucun avantage physiologique après transition.",
      fallacy_type: "affirmation contre-empirique",
      why_fallacious: "Les fédérations sportives (World Athletics, World Aquatics, World Rugby, British Cycling) ont adopté des restrictions basées sur leurs propres données mesurant des avantages résiduels après hormonothérapie. La revue systématique 2025 (51 études, 6 434 participants) montre force similaire mais VO2max et détente verticale inférieurs — nuancé, pas nul.",
      steelman: "Le point charitable : les données restent limitées en taille d'échantillon pour certaines disciplines. Les effets varient selon les sports et les protocoles de transition. Le débat n'est pas tranché pour tous les cas.",
      nuance: "VRAI : les données sont limitées et hétérogènes selon les sports. VRAI : certains avantages diminuent significativement après transition. FAUX : qu'il n'y ait aucun avantage résiduel. FAUX : que les décisions institutionnelles soient sans fondement.",
      counter_argument: "World Athletics ne prend pas des décisions à la légère. La restriction 2023 (exclusion des femmes trans ayant traversé la puberté masculine) est fondée sur des mesures physiologiques agrégées. C'est un choix institutionnel documenté, pas un préjugé.",
      severity: "medium",
    },
    {
      original_claim: "Les différences H/F sont purement culturelles — élevons les enfants sans genre et elles disparaîtront.",
      fallacy_type: "constructivisme fort contredit empiriquement",
      why_fallacious: "Contredit par : Gender Equality Paradox (plus égalité, plus divergence des choix) ; expériences naturelles (David Reimer, John Money, tragédie documentée) ; Baron-Cohen (671 606 participants, différences stables) ; différences neuroanatomiques mesurables IRM.",
      steelman: "Le point charitable : la culture amplifie ou réduit certaines différences biologiques. L'écart mathématique H/F s'est réduit dans les pays qui ont massivement scolarisé les filles. Une part est culturelle.",
      nuance: "VRAI : la culture module fortement l'expression des différences H/F. VRAI : de nombreuses inégalités passées étaient artificielles. FAUX : que toutes les différences soient culturelles. FAUX : que le constructivisme fort tienne empiriquement.",
      counter_argument: "L'expérience David Reimer (John Money 1965) — tentative d'élever un garçon en fille après accident chirurgical — a été un désastre documenté (suicide de Reimer en 2004). C'est le contre-exemple ultime au constructivisme fort.",
      severity: "medium",
    },
    {
      original_claim: "Défendre les hommes, c'est promouvoir Andrew Tate et les incels.",
      fallacy_type: "amalgame / culpabilité par association",
      why_fallacious: "Confond différentes positions : (1) documenter la crise masculine (Sommers, Farrell, Peterson, Haidt) ; (2) proposer une virilité constructive (Aurèle, Mandela, mentorat) ; (3) promouvoir la misogynie (Tate hard, incels). Ce sont trois positions distinctes.",
      steelman: "Le point charitable : Tate et incels sont des symptômes visibles d'un problème réel. L'inquiétude qu'une discussion mal calibrée nourrisse ces mouvances est légitime.",
      nuance: "VRAI : Tate, incels, MRA sont des symptômes d'une crise réelle. VRAI : les discours mal calibrés peuvent leur donner du grain à moudre. FAUX : que discuter la crise = promouvoir ces mouvements. FAUX : que Sommers/Peterson/Farrell soient dans la même catégorie que Tate.",
      counter_argument: "Peterson explicitement : 'Ne pas rendre les garçons honteux, sinon ils deviennent machistes'. C'est l'inverse de promouvoir Tate — c'est prévenir. Refuser de nommer la crise = laisser Tate combler le vide.",
      severity: "high",
    },
    {
      original_claim: "Peterson est un fasciste crypto — le citer décrédibilise votre argument.",
      fallacy_type: "ad hominem + strawman",
      why_fallacious: "Peterson est un psychologue clinicien canadien, professeur à Toronto puis Cambridge. Il critique explicitement les régimes autoritaires (Rules for Life, Beyond Order). Le qualifier de fasciste est factuellement faux et rhétoriquement clôturant.",
      steelman: "Le point charitable : certaines positions de Peterson (traditionalisme hiérarchique, critique du néo-marxisme) heurtent des sensibilités progressistes. L'inquiétude sur son influence est un débat légitime.",
      nuance: "VRAI : Peterson défend des positions traditionalistes que la gauche progressiste conteste. VRAI : sa rhétorique peut être clivante. FAUX : qu'il soit fasciste — ses écrits contredisent explicitement le fascisme. FAUX : qu'il puisse être écarté par étiquetage.",
      counter_argument: "12 Rules for Life et Beyond Order sont lisibles par tous. Peterson y défend les droits individuels, l'antitotalitarisme, la parole libre. C'est un conservateur libéral, pas un fasciste — le distinguer est basique.",
      severity: "medium",
    },
    {
      original_claim: "Les statistiques sur le suicide sont manipulées.",
      fallacy_type: "déni sans base / attaque de la source",
      why_fallacious: "Les données proviennent de la DREES et de Santé Publique France pour la France, de l'OMS pour l'international. Ce sont des institutions publiques dont les méthodologies sont documentées. Contester sans base factuelle est un déni, pas un argument.",
      steelman: "Le point charitable : les statistiques de suicide sont techniquement complexes (certifications, tentatives non-comptées, disparités de collecte selon les pays). Le débat méthodologique est réel.",
      nuance: "VRAI : les méthodologies varient entre pays et introduisent du bruit statistique. VRAI : le débat technique existe. FAUX : que les données DREES/OMS soient 'manipulées'. FAUX : que le ratio 3:1 soit un artefact.",
      counter_argument: "Le ratio suicide masculin/féminin est consistent à travers 40 ans, 190 pays, et 20 méthodologies différentes. La convergence est écrasante — c'est un fait épidémiologique établi.",
      severity: "medium",
    },
  ],

  // ============================================================
  // 7. STATS
  // ============================================================
  stats: [
    {
      number: "75.1%",
      label: "des décès par suicide en France sont masculins (8 848 décès, 2023)",
      source: "DREES / Santé publique France 2024",
      context: "Donnée institutionnelle française — ne peut être qualifiée de 'narratif'",
      visual: "percent",
    },
    {
      number: "3.3:1",
      label: "ratio taux de suicide H/F France (20.8 vs 6.3 pour 100 000)",
      source: "DREES 2022",
      context: "Ratio historiquement stable, comparable aux autres pays occidentaux",
      visual: "comparison",
    },
    {
      number: "96.6%",
      label: "de la population carcérale française est masculine (76 258 détenus)",
      source: "Ministère de la Justice, 1er février 2024",
      context: "Data la plus récente : 87 126 détenus en mars 2026 (surpopulation)",
      visual: "percent",
    },
    {
      number: "77-95%",
      label: "des sans-abri sont des hommes en France (95% de ceux à la rue)",
      source: "INSEE 2022",
      context: "Invisibilisation particulière des SDF masculins dans le discours public",
      visual: "percent",
    },
    {
      number: "20% vs 11%",
      label: "sortie du système scolaire sans diplôme : garçons vs filles",
      source: "INSEE / DEPP",
      context: "Décrochage scolaire masculin presque double — enjeu majeur",
      visual: "comparison",
    },
    {
      number: "671 606",
      label: "participants à l'étude Baron-Cohen sur empathie et systémisation",
      source: "Greenberg, Warrier, Allison, Baron-Cohen, PNAS 2018",
      context: "Étude de très grande échelle établissant des différences H/F stables",
      visual: "count-up",
    },
    {
      number: "-1.2%/an",
      label: "baisse séculaire de la testostérone depuis 1980",
      source: "Travison et al., J Clin Endocrinol Metab 2007 (Massachusetts Male Aging Study)",
      context: "Indépendant de l'âge, IMC, tabagisme, alcool — phénomène biologique",
      visual: "percent",
    },
    {
      number: "1 sur 4",
      label: "enfants américains grandit sans son père (19 millions d'enfants)",
      source: "National Fatherhood Initiative (USA)",
      context: "Absence paternelle massive comme crise sociale silencieuse",
      visual: "count-up",
    },
    {
      number: "70%",
      label: "des jeunes en établissements pénitentiaires viennent de foyers monoparentaux",
      source: "National Fatherhood Initiative",
      context: "Corrélation forte, causalité partielle documentée par McLanahan & Sandefur",
      visual: "percent",
    },
    {
      number: "-46% / -27% / -32%",
      label: "réduction drogues / alcool / comportements antisociaux par le mentorat BBBS",
      source: "Big Brothers Big Sisters of America — essais contrôlés randomisés",
      context: "Solution documentée scientifiquement, transférable à d'autres contextes",
      visual: "comparison",
    },
    {
      number: "591",
      label: "cas de représailles envers des universitaires documentés par FIRE depuis 2015",
      source: "Foundation for Individual Rights in Education (FIRE)",
      context: "Base de données publique et vérifiable — pas un narratif conservateur",
      visual: "count-up",
    },
    {
      number: "~50%",
      label: "étudiants américains ne se sentent pas à l'aise pour partager leurs opinions en classe",
      source: "Sondage FIRE (2023)",
      context: "Impact mesurable de la cancel culture sur la liberté académique",
      visual: "percent",
    },
  ],

  // ============================================================
  // 8. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "Vagues 1-2 vs Vague 4 du féminisme",
      left: {
        label: "Vagues 1 et 2 (1848-1990)",
        items: [
          "Droit de vote (suffragistes)",
          "Propriété, autonomie économique",
          "Contraception, IVG (Loi Veil 1975)",
          "Accès au travail et à l'éducation",
          "Beauvoir, Friedan — acquis civilisationnels",
        ],
      },
      right: {
        label: "Vague 4 (2014-2026)",
        items: [
          "Concept de 'toxic masculinity' généralisé",
          "Intersectionnalité radicale (Crenshaw)",
          "Cancel culture universitaire",
          "Idéologie de la déconstruction",
          "Pathologisation de la masculinité ordinaire",
        ],
      },
    },
    {
      title: "Boys vs Girls (indicateurs institutionnels)",
      left: {
        label: "Garçons / Hommes",
        items: [
          "75% des suicides",
          "96.6% de la population carcérale",
          "77-95% des SDF",
          "20% de décrochage scolaire sans diplôme",
          "57.6% ont expérimenté le cannabis",
          "20.1% ont consommé drogues dures",
        ],
      },
      right: {
        label: "Filles / Femmes",
        items: [
          "25% des suicides",
          "3.4% de la population carcérale",
          "5-23% des SDF (invisibilité relative)",
          "11% de décrochage scolaire",
          "43.4% ont expérimenté le cannabis",
          "9.3% ont consommé drogues dures",
        ],
      },
    },
    {
      title: "Constructivisme fort vs Réalité biologique",
      left: {
        label: "Constructivisme fort (Butler et al.)",
        items: [
          "Le genre est purement performatif",
          "Élever sans genre → différences disparaissent",
          "Pas de différences neuroanatomiques significatives",
          "Différences = production culturelle",
          "Prédiction : plus d'égalité = choix identiques",
        ],
      },
      right: {
        label: "Réalité biologique documentée",
        items: [
          "Baron-Cohen 671 606 : empathie F > H, systém H > F",
          "Force physique 50-60% membres supérieurs",
          "Différences IRM neuroanatomiques mesurables",
          "David Reimer : contre-exemple ultime (suicide 2004)",
          "Gender Equality Paradox : plus d'égalité = plus divergence",
        ],
      },
    },
    {
      title: "Masculinité toxique vs Masculinité constructive",
      left: {
        label: "'Toxic Masculinity' (concept extensif contesté)",
        items: [
          "Stoïcisme émotionnel poussé à l'extrême",
          "Refus de demander de l'aide",
          "Agressivité déplacée sur les proches",
          "Compétition destructrice",
          "Homophobie et misogynie",
        ],
      },
      right: {
        label: "Masculinité constructive (proposition)",
        items: [
          "Stoïcisme émotionnel régulé + expression choisie",
          "Demande d'aide comme force (mentorat)",
          "Agressivité canalisée en service/protection",
          "Compétition comme croissance mutuelle",
          "Respect de l'autre + fierté de soi",
        ],
      },
    },
    {
      title: "Père présent vs Père absent (impact statistique)",
      left: {
        label: "Père présent + engagé",
        items: [
          "Meilleure régulation émotionnelle enfants",
          "Réussite scolaire supérieure de 0.5 à 1 écart-type",
          "Réduction délinquance juvénile",
          "Réduction consommation substances",
          "Meilleure santé mentale à l'âge adulte",
        ],
      },
      right: {
        label: "Père absent / non-engagé",
        items: [
          "Risque de délinquance +2x (McLanahan)",
          "70% des jeunes détenus (NFI)",
          "Décrochage scolaire accru",
          "Consommation de substances accrue",
          "Risque dépression / suicide accru",
        ],
      },
    },
    {
      title: "Culture support (Tate/Peterson) vs Culture victimaire (woke)",
      left: {
        label: "Culture support responsabilisante",
        items: [
          "Responsabilité comme antidote au ressentiment (Peterson)",
          "'You don't need a hug, you need a challenge'",
          "Mentorat structuré (BBBS)",
          "Compétition comme croissance",
          "Fierté paternelle et masculine",
        ],
      },
      right: {
        label: "Culture victimaire / thérapeutique",
        items: [
          "Trigger warnings, safe spaces",
          "Validation permanente des ressentis",
          "'Ce qui ne te tue pas te rend plus faible' (Haidt)",
          "Éviter tout inconfort",
          "Identité comme statut de victime",
        ],
      },
    },
  ],

  // ============================================================
  // 9. DEVICES
  // ============================================================
  devices: [
    {
      name: "Recadrage moral par les chiffres",
      example_text: "75% des suicides, 96% de prison, 77% de rue — et vous parlez de 'toxicité' ?",
      effect: "Retourner l'accusation morale par la donnée factuelle",
      why_it_works: "L'auditoire ne peut pas défendre le mot 'toxique' face à des taux de mortalité. Impossible à réfuter sans paraître insensible.",
    },
    {
      name: "Argument par l'échantillon massif (Baron-Cohen)",
      example_text: "671 606 sujets d'étude. Publiée dans PNAS. Vous voulez le nier avec 3 anecdotes ?",
      effect: "Écraser une objection anecdotique par le volume statistique",
      why_it_works: "Le contraste 671 606 vs 3 anecdotes est écrasant. L'adversaire doit soit concéder, soit produire un volume équivalent.",
    },
    {
      name: "Distinction des vagues (méthode historique)",
      example_text: "Vague 1 et 2 : acquis civilisationnels. Vague 4 : pathologisation de la masculinité.",
      effect: "Défendre le féminisme légitime tout en critiquant sa version radicale",
      why_it_works: "Empêche l'accusation d'anti-féminisme global. Force l'adversaire à défendre spécifiquement la vague 4.",
    },
    {
      name: "Retournement de la neutralité médiatique",
      example_text: "Le silence sur 75% de suicides masculins n'est pas de la neutralité — c'est un choix éditorial.",
      effect: "Politiser le silence, refuser la neutralité passive",
      why_it_works: "Force l'auditoire à choisir : soit défendre le silence comme choix, soit reconnaître son caractère politique.",
    },
    {
      name: "Question de clôture émotionnelle (Mode Bleu)",
      example_text: "Quel mot reste pour parler d'un gamin de 15 ans qui décroche, cherche son père et ne le trouve pas ?",
      effect: "Rendre concret un débat abstrait par la figure du sujet vulnérable",
      why_it_works: "L'image d'un enfant précis court-circuite la contestation théorique. Personne ne veut être vu comme abandonnant cet enfant.",
    },
    {
      name: "Diagnostic-solution en séquence",
      example_text: "1 sur 4 sans père. 70% en prison monoparentaux. -46% drogues par mentorat. → chantier de mentorat.",
      effect: "Éviter le piège 'vous ne proposez rien' en pivotant immédiatement vers l'action",
      why_it_works: "Ne laisse pas le débat s'installer dans le diagnostic — chaque chiffre est immédiatement suivi de la piste opérationnelle.",
    },
    {
      name: "Opposition force/orientation (Mode Vert)",
      example_text: "La virilité n'est pas un problème à effacer, c'est une force à orienter.",
      effect: "Recadrer la virilité comme ressource, pas déficit",
      why_it_works: "Aphorisme mémorable, positionne l'argument dans le constructif. Difficile à réfuter sans se placer explicitement contre la virilité.",
    },
    {
      name: "Convocation d'autorités polyphoniques",
      example_text: "Sommers, Paglia, Peterson, Farrell, Haidt, Baron-Cohen — différentes sensibilités, même diagnostic.",
      effect: "Prouver que le diagnostic n'est pas idéologique par la diversité des voix",
      why_it_works: "Si des féministes, des libéraux, des conservateurs et des scientifiques convergent, le diagnostic devient trans-partisan.",
    },
    {
      name: "Test empathique par transposition (garçon vs fille)",
      example_text: "Si 75% des suicides étaient féminins, ce débat existerait-il ?",
      effect: "Rendre visible l'asymétrie d'attention institutionnelle",
      why_it_works: "L'auditoire doit imaginer la situation inversée. Le contraste dévoile l'asymétrie du traitement.",
    },
    {
      name: "Avertissement causal (Peterson)",
      example_text: "Rendre les garçons honteux → repli → machisme → fascisme. Peterson vous prévient.",
      effect: "Prévenir contre les conséquences d'une répression mal calibrée",
      why_it_works: "Structure prophétique, gradation temporelle. L'adversaire doit soit accepter la responsabilité de la trajectoire, soit modérer sa position.",
    },
    {
      name: "Argument par l'expérience naturelle (Reimer)",
      example_text: "David Reimer, élevé en fille par John Money, s'est suicidé en 2004. Le constructivisme fort a été testé.",
      effect: "Utiliser une expérience-limite documentée comme réfutation empirique",
      why_it_works: "Cas historique tragique et documenté. Impossible à contester factuellement. Force la reconnaissance qu'il y a du biologique.",
    },
    {
      name: "Chiasme constructif/destructif",
      example_text: "Le silence détruit. Le mentorat répare.",
      effect: "Condensation aphoristique de l'opposition politique",
      why_it_works: "Structure grammaticale mémoriellement forte. Résume l'argument entier en 4 mots.",
    },
  ],

  // ============================================================
  // 10. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "Mandela — 27 ans à Robben Island sans devenir haineux",
      used_for: "Modèle de virilité résiliente sans agressivité destructrice",
      strength: 9,
      why_it_works: "Autorité morale universellement reconnue. Impossible d'accuser Mandela de 'masculinité toxique' — il représente une virilité constructive absolue.",
    },
    {
      source: "Viktor Frankl — Auschwitz et la découverte du sens",
      used_for: "Prouver que même la souffrance extrême peut engendrer une virilité constructive",
      strength: 8,
      why_it_works: "Récit incontestable de résilience masculine. Frankl a transformé la souffrance en Logothérapie — chemin universellement applicable.",
    },
    {
      source: "Marc Aurèle — les Pensées, l'empereur philosophe",
      used_for: "Modèle historique de virilité disciplinée et responsable",
      strength: 7,
      why_it_works: "Autorité classique. Aurèle combine pouvoir et retenue, force et sagesse. Modèle aristotélicien de la virilité vertueuse.",
    },
    {
      source: "David Reimer — expérience John Money 1965",
      used_for: "Contre-exemple ultime au constructivisme fort",
      strength: 9,
      why_it_works: "Cas historique documenté, tragique, difficile à contester. Prouve empiriquement la robustesse de la base biologique du genre.",
    },
    {
      source: "Big Brothers Big Sisters — 109 254 jeunes mentorés en 2020",
      used_for: "Prouver que le mentorat est une solution scalable et mesurée",
      strength: 9,
      why_it_works: "Essais contrôlés randomisés + volume massif. Modèle transférable à la France — utile en Mode Jaune/Vert.",
    },
    {
      source: "Robin Williams — la richesse ne protège pas de la dépression masculine",
      used_for: "Cas emblématique de crise masculine transversale aux classes",
      strength: 6,
      why_it_works: "Cas connu de tous. Écarte l'objection 'la crise masculine touche seulement les défavorisés' — les hommes performants sont aussi touchés.",
    },
    {
      source: "Tyson Fury — sortie de dépression par le combat",
      used_for: "Modèle contemporain de virilité qui traverse la crise mentale",
      strength: 7,
      why_it_works: "Personnage public documenté. Combat contre la dépression + retour au ring = symbole moderne de résilience masculine.",
    },
    {
      source: "Malcolm X — transformation par la lecture et la discipline en prison",
      used_for: "Prouver que la responsabilité peut naître même du fond du gouffre",
      strength: 7,
      why_it_works: "Récit puissant. Reste controversé politiquement mais indéniable comme parcours de reconstruction identitaire viril.",
    },
  ],

  // ============================================================
  // 11. FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "Cascade des chiffres institutionnels (Mode Rouge)",
      when_to_use: "Face à l'accusation 'la crise masculine est un narratif conservateur'",
      steps: [
        "75% des suicides (DREES)",
        "96.6% de la population carcérale (Justice)",
        "77-95% des SDF (INSEE)",
        "20% vs 11% de décrochage (INSEE)",
        "Conclure : 'Vous appelez ça narratif ? Moi j'appelle ça une crise'",
      ],
      warning: "Ne pas paraître accusateur — c'est un diagnostic, pas un procès. Ton d'ingénieur, pas de procureur.",
    },
    {
      name: "Distinction des 4 vagues (méthode historique)",
      when_to_use: "Face à l'accusation 'vous êtes anti-féministe'",
      steps: [
        "Reconnaître explicitement Vague 1 (suffragistes) comme acquis",
        "Reconnaître Vague 2 (Beauvoir, Friedan) comme acquis",
        "Distinguer Vague 3 (intersectionnalité — mixte, débattable)",
        "Critiquer Vague 4 (pathologisation, cancel culture) sur des faits précis",
        "Conclure : 'défendre les hommes vulnérables n'est pas attaquer les femmes'",
      ],
      warning: "Fournir des dates et des références (Loi Veil 1975, Beauvoir 1949) pour montrer que la distinction est historique, pas idéologique.",
    },
    {
      name: "Diagnostic + Solution constructive (Mode Jaune)",
      when_to_use: "Face à 'vous ne proposez rien de constructif'",
      steps: [
        "1 sur 4 enfant américain grandit sans père",
        "70% des jeunes détenus viennent de foyers monoparentaux",
        "Solution : mentorat structuré (BBBS)",
        "Preuves : -46% drogues, -27% alcool, -32% comportements antisociaux",
        "Proposition : chantier français de mentorat masculin scaled à 100k jeunes",
      ],
      warning: "Toujours enchaîner diagnostic → solution sans pause. Sinon le débat se bloque sur le diagnostic.",
    },
    {
      name: "Cadre biologique + culturel (Mode Orange)",
      when_to_use: "Face au constructivisme fort ('tout est culturel')",
      steps: [
        "Baron-Cohen 671 606 participants : différences empathie/systémisation",
        "Gender Equality Paradox : plus d'égalité = plus de divergence des choix",
        "David Reimer : contre-exemple ultime au constructivisme fort",
        "Reconnaître que la culture module, sans qu'elle épuise",
        "Conclure : 'nier le biologique ne rend pas les femmes libres — ça les rend confuses'",
      ],
      warning: "Nuancer explicitement : la culture COMPTE, elle n'est simplement pas TOUT.",
    },
    {
      name: "Modèles historiques positifs (Mode Vert)",
      when_to_use: "Face à 'vous voulez le retour du patriarcat'",
      steps: [
        "Marc Aurèle : virilité disciplinée + responsabilité impériale",
        "Mandela : 27 ans sans devenir haineux — force sans destruction",
        "Frankl : virilité qui trouve le sens dans la souffrance",
        "Churchill : courage sans complaisance envers la faiblesse",
        "Conclure : 'la virilité constructive n'est pas patriarcale — elle est civilisationnelle'",
      ],
      warning: "Ne pas paraître passéiste. Toujours ajouter des figures contemporaines pour ancrer dans l'actuel.",
    },
    {
      name: "Enchaînement socratique 5 questions (Mode Bleu)",
      when_to_use: "Face à un auditoire refusant les affirmations directes",
      steps: [
        "Q1 : 'Sais-tu quel pourcentage des suicides en France sont masculins ?'",
        "Q2 : 'Sais-tu quel pourcentage de la population carcérale est masculine ?'",
        "Q3 : 'Sais-tu combien d'enfants américains grandissent sans père ?'",
        "Q4 : 'Sais-tu ce que fait Big Brothers Big Sisters — mesures RCT ?'",
        "Q5 : 'Si on nommait ces chiffres et qu'on scalait le mentorat, on ferait quoi de plus ?'",
        "Ne jamais donner soi-même les réponses",
      ],
      warning: "Poser avec curiosité sincère. Sinon effet passif-agressif contre-productif.",
    },
  ],

  // ============================================================
  // 12. DRILLS
  // ============================================================
  drills: [
    {
      name: "Mémorisation des 5 chiffres cruciaux",
      duration: "10 jours",
      instructions: [
        "Liste : 75.1% suicides / 96.6% prison / 77-95% SDF / 20% décrochage / -1.2%/an testostérone",
        "Réciter matin, midi, soir avec sources DREES, Justice, INSEE, Travison",
        "Test hebdomadaire : intégrer les 5 chiffres dans un pitch de 60 secondes",
        "But : les 5 chiffres doivent devenir des armes rhétoriques automatiques",
      ],
      difficulty: 2,
    },
    {
      name: "Le rôle-play féministe (test de dialogue)",
      duration: "3 sessions × 45 min",
      instructions: [
        "Session 1 : jouer la position vague 4 (masculinité toxique). Défendre au maximum",
        "Session 2 : inverser — défendre la position 'crise masculine documentée'",
        "Session 3 : débat libre en incluant la distinction des 4 vagues",
        "Après chaque session : identifier la meilleure entrée et la pire",
        "But : maîtriser la nuance historique sans perdre la ligne",
      ],
      difficulty: 5,
    },
    {
      name: "Écriture Rouge/Vert par contraste",
      duration: "10 jours",
      instructions: [
        "Choisir 1 sujet chaque matin : suicide masculin, décrochage scolaire, mentorat, absence paternelle...",
        "Écrire 3 paragraphes en Mode Rouge (chiffres, direct, confrontation)",
        "Réécrire en Mode Vert (Mandela, Frankl, vision constructive)",
        "Comparer les effets : sur qui marche mieux le Rouge ? Le Vert ?",
        "But : maîtriser le contraste tonal pour choisir en temps réel",
      ],
      difficulty: 4,
    },
    {
      name: "Enquête sur son propre entourage (5 conversations)",
      duration: "2 semaines",
      instructions: [
        "5 amis de sensibilités politiques différentes",
        "Ouvrir : 'Est-ce que tu savais que 75% des suicides sont masculins ?'",
        "Noter la réaction : surprise, déni, minimisation, engagement",
        "Continuer avec : 'Qu'est-ce que ça change à ta vision du féminisme ?'",
        "Documenter les objections récurrentes — tes vraies faiblesses à travailler",
      ],
      difficulty: 3,
    },
    {
      name: "Le grand argument en 90 secondes",
      duration: "7 jours",
      instructions: [
        "Rédiger un argument de 90 secondes couvrant : diagnostic + biologie + féminisme (vagues) + solution mentorat + clôture morale",
        "Structure : 3 chiffres + 1 étude + 1 distinction + 1 solution + 1 aphorisme",
        "Enregistrer chaque jour, réécouter le lendemain",
        "Objectif : 90 secondes exactes, sans perte de force",
        "But : disposer d'un pitch prêt à sortir en toute conversation",
      ],
      difficulty: 4,
    },
  ],

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    debates: [
      "rhetorique-verites-difficiles",
      "science-abondance",
      "taxe-zucman",
    ],
    videos: [
      "LFJAHZlizAg", // Never tired when winning
      "P4rkjwaa6so",
      "KPbnzSGlAP4",
      "AG1vvPVkHC8",
      "Gv39IoU5Z5s",
      "cZwULaBA9Bw",
      "d8FH8K7n0GE",
      "h9wod4mPHZw",
    ],
  },
};

// Register into global registry
if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["masculinite-feminisme"] = CONTENT_DEBATES_masculinite_feminisme;
