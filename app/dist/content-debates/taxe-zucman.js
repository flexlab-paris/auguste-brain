// /mindmap/content-debates/taxe-zucman.js
// Deep content for debate — "La Taxe Zucman et la Fiscalité des Ultra-Riches"
// Source: data/taxe-zucman.json + fiches/taxe-zucman/fiches-taxe-zucman.tex

const CONTENT_DEBATES_taxe_zucman = {
  id: "taxe-zucman",
  slug: "taxe-zucman",
  title: "La Taxe Zucman et la Fiscalité des Ultra-Riches",
  speaker: "Auguste Pugnet",
  format: "Débat structuré · Fiche rhétorique",
  word_count: 6800,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "Le problème français n'est pas le manque d'impôts — c'est l'excès de dépenses.",
  thesis: "La taxe Zucman de 2% sur le patrimoine mondial est une illusion démagogique : sans coopération planétaire totale, elle échoue (ISF, Norvège, Espagne, Suisse en font foi) ; le vrai levier est la réforme de la dépense publique (57% du PIB) et le choix de taxes sur les flux (Tobin, TVA luxe) impossibles à fuir, pas sur le stock patrimonial.",
  key_takeaways: [
    "Ne jamais accepter le cadrage 'pour ou contre taxer les riches' — recadrer sur 'comment taxer intelligemment ET dépenser responsablement'",
    "2% de patrimoine ≈ 40% du revenu réel quand le rendement est de 5% : ce n'est pas symbolique, c'est confiscatoire",
    "La mobilité du capital est un fait, pas une opinion : ISF français, suédois, espagnol — tous échoués avec fuite documentée",
    "La courbe de Laffer est un théorème mathématique, pas une opinion politique — au-delà d'un seuil, plus d'impôt = moins de recettes",
    "Les alternatives Tobin (0.01%), TVA luxe, flat tax sur le capital, loi Buffett rapportent plus que l'ISF sans faire fuir personne",
    "Le buy-borrow-die est un vrai angle mort — mais la réponse est une réforme des plus-values latentes, pas une taxe patrimoniale mondiale",
    "Sarkozy (589 tonnes d'or), Hidalgo (+7 Md€ dette Paris), Ecotax (1 Md€), Autolib (75 M€) : la gestion, pas les recettes, est le problème",
    "Elon Musk est le plus gros contribuable individuel de l'histoire — l'ennemi n'est pas le créateur de valeur, c'est le gaspilleur public",
  ],

  // ============================================================
  // 2. STRUCTURE — 5 MODES RHÉTORIQUES
  // ============================================================
  structure: {
    rouge: {
      mode: "Abrasif · Le Marteau",
      these: "La taxe Zucman est une escroquerie intellectuelle financée par un délinquant financier condamné (Soros), destinée à abolir la propriété privée des classes moyennes sous couvert de justice sociale.",
      stats: [
        { number: "57%", label: "dépenses publiques France / PIB — plus que l'URSS des années 80 (50%)" },
        { number: "3 300 Md€", label: "dette française — plus de 120% du PIB" },
        { number: "40%", label: "du revenu réel ponctionné : 2% de patrimoine × rendement immobilier 5%" },
        { number: "< 0.5% PIB", label: "collecté par l'ISF partout où il a été essayé (Norvège, Espagne, Suisse, France)" },
        { number: "589 tonnes", label: "d'or vendues par Sarkozy 2004-2009, au plus bas du cours" },
      ],
      cloture: "Vous voulez une taxe sur la richesse ? Commencez par arrêter de brûler l'argent que vous avez déjà.",
    },
    orange: {
      mode: "Combatif · L'Épée",
      these: "La question n'est pas s'il faut taxer les ultra-riches, mais comment le faire sans détruire l'économie. La taxe Zucman échoue à ce test — des alternatives supérieures existent et fonctionnent.",
      stats: [
        { number: "0.01%", label: "taxe Tobin sur transactions financières — impossible à fuir, prélevée à la source" },
        { number: "~20 Md€/an", label: "rendement potentiel de la taxe Tobin étendue en France" },
        { number: "0.3%", label: "taxe française sur les transactions financières en vigueur depuis 2012 (grandes capitalisations)" },
        { number: "3-5 Md€/an", label: "rendement potentiel d'une TVA majorée sur biens de luxe (yachts, jets, biens >100k€)" },
        { number: "11 Md$", label: "impôts payés par Elon Musk en 2021 — record individuel historique" },
      ],
      cloture: "Ne me dites pas qu'il faut taxer les riches. Dites-moi COMMENT sans que les classes moyennes finissent par payer l'addition.",
    },
    jaune: {
      mode: "Persuasif · L'Architecte",
      these: "La taxe Zucman repose sur un diagnostic correct (l'évasion fiscale des ultra-riches est un vrai problème) mais propose un remède dont l'histoire démontre systématiquement l'échec, alors que des mécanismes plus efficaces existent et sont immédiatement déployables.",
      stats: [
        { number: "1798-2026", label: "228 ans depuis Malthus — l'histoire de l'échec des politiques de rationnement fiscal" },
        { number: "5%", label: "rendement immobilier moyen — 2% de taxe = 40% de ponction sur le revenu brut" },
        { number: "57%", label: "dépenses publiques France / PIB — record mondial pour une démocratie" },
        { number: "1 Md€", label: "coût de l'abandon de l'écotaxe (indemnisation Ecomouv + démantèlement portiques)" },
        { number: "7+ Md€", label: "dette de Paris sous Hidalgo, 52 000 agents municipaux" },
      ],
      cloture: "Le problème est réel. La solution Zucman est fausse. L'intelligence, c'est de taxer ce qui ne peut pas fuir.",
    },
    vert: {
      mode: "Inspirant · Le Phare",
      these: "Nous pouvons construire un système fiscal intelligent qui finance nos ambitions collectives sans détruire le moteur de création de richesse — à condition d'avoir le courage de penser autrement que par la punition.",
      stats: [
        { number: "20%", label: "dépenses publiques / PIB au Vietnam — pays qui a sorti 40 millions de personnes de la pauvreté en une génération" },
        { number: "34%", label: "dépenses publiques / PIB en Suisse — les meilleurs services publics d'Europe" },
        { number: "13%", label: "flat tax russe introduite en 2001 — recettes fiscales multipliées par 3 en 5 ans" },
        { number: "3%", label: "seuil de déficit dans la loi Buffett : au-delà, interdiction de se représenter" },
        { number: "75 000 $/an", label: "seuil au-delà duquel le revenu n'améliore plus le bonheur subjectif (Kahneman-Deaton 2010)" },
      ],
      cloture: "La grandeur d'un pays ne se mesure pas à combien il prend, mais à combien il bâtit avec ce qu'il a.",
    },
    bleu: {
      mode: "Socratique · Le Miroir",
      these: "Et si la taxe Zucman était la mauvaise réponse à la bonne question ? Une série de questions pour amener l'interlocuteur à découvrir par lui-même les failles du raisonnement.",
      stats: [
        { number: "57% vs 50%", label: "France 2026 vs URSS années 80 — à quel moment sommes-nous dans la 'redistribution massive' ?" },
        { number: "40%", label: "du revenu ponctionné par une taxe de 2% sur un patrimoine à 5% de rendement — accepteriez-vous cela sur votre salaire ?" },
        { number: "6+", label: "pays ayant essayé l'ISF et l'ayant abandonné ou réduit — qu'est-ce qui rendrait cette fois différente ?" },
        { number: "0.01%", label: "taxe Tobin impossible à fuir — pourquoi personne n'en parle jamais ?" },
        { number: "11 Md$", label: "payés par Musk — Soros paie combien ? Qui propose la taxe, déjà ?" },
      ],
      cloture: "La bonne question n'est pas 'faut-il taxer les riches ?' — c'est 'pourquoi répéter ce qui a toujours échoué ?'.",
    },
  },

  // ============================================================
  // 3. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "La taxe Zucman est une mauvaise réponse à un vrai problème — le levier réel est la réforme de la dépense et des taxes sur les flux, pas sur le stock",
      children: [
        {
          claim: "L'ISF a échoué partout où il a été essayé — preuve empirique de la mobilité du capital",
          type: "premise",
          strength: 9,
          evidence: [
            "France : ISF supprimé en 2017, remplacé par IFI ciblé sur l'immobilier",
            "Suède : ISF supprimé en 2007",
            "Norvège, Espagne, Suisse (cantons) : collecte < 0.5% du PIB",
            "Fuite documentée de contribuables et de capitaux",
          ],
        },
        {
          claim: "Le vrai problème français est l'excès de dépense publique, pas l'insuffisance de recettes",
          type: "premise",
          strength: 8,
          evidence: [
            "57% du PIB en dépenses publiques — record OCDE pour une démocratie",
            "Comparaison URSS 80s : 50%, Vietnam : 20%, Suisse : 34%",
            "3 300 Md€ de dette, 120% du PIB",
            "Gaspillages documentés : Autolib, Écotax, Sarkozy vente d'or, dette Hidalgo",
          ],
        },
        {
          claim: "La courbe de Laffer démontre qu'au-delà d'un optimum, plus d'impôt = moins de recettes",
          type: "premise",
          strength: 7,
          evidence: [
            "Théorème mathématique reconnu, seul le taux optimal est débattu",
            "Corrélation empirique observée entre pression fiscale et évasion",
            "Baisse d'impôt Reagan/Thatcher/Trump — recettes ont paradoxalement augmenté",
          ],
        },
        {
          claim: "Des alternatives supérieures existent et sont immédiatement déployables",
          type: "premise",
          strength: 8,
          evidence: [
            "Taxe Tobin 0.01% : impossible à fuir, ~20 Md€/an potentiels",
            "TVA de luxe : cible la consommation, pas la possession",
            "Flat tax capital : simplification + suppression niches",
            "Réforme fiscalité successorale (plus-values latentes)",
          ],
          children: [
            {
              claim: "La France applique déjà une TTF depuis 2012 — la mécanique est prouvée",
              type: "example",
              strength: 9,
            },
            {
              claim: "La Russie a triplé ses recettes fiscales avec la flat tax de 2001",
              type: "example",
              strength: 6,
            },
          ],
        },
        {
          claim: "La taxe Zucman est structurellement inapplicable sans coopération mondiale totale",
          type: "premise",
          strength: 9,
          evidence: [
            "Précédent BEPS OCDE : résultats limités malgré 15 ans d'efforts",
            "Paradis fiscaux persistent : Cayman, BVI, Singapour, Delaware",
            "Zucman lui-même reconnaît que sans coordination, la taxe est contournée",
          ],
        },
        {
          claim: "Le financement de la proposition (Soros, think tanks progressistes) doit interroger",
          type: "premise",
          strength: 4,
          evidence: [
            "Soros condamné pour délit d'initié (France, 2002)",
            "Fondations Open Society : ~1.5 Md$/an — usage fiscal opaque",
            "Cui bono ? : pas les classes moyennes",
          ],
          children: [
            {
              claim: "Argument ad hominem à manier avec précaution — le fond de Zucman reste sérieux",
              type: "premise",
              strength: 5,
            },
          ],
        },
        {
          claim: "Le buy-borrow-die est un vrai problème américain — mais la réponse n'est pas une taxe patrimoniale mondiale",
          type: "premise",
          strength: 7,
          evidence: [
            "Stratégie : emprunter contre actifs pour vivre sans revenu imposable, transmettre avec step-up basis",
            "Réforme cible : taxation des plus-values latentes au décès (proposition Biden)",
            "Solution structurelle plus efficace qu'une taxe additionnelle",
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
      text: "La France dépense plus que l'URSS des années 80. Communiste de facto ?",
      context: "Ouverture Mode Rouge — statistique comparative choc",
      tags: ["provocation", "chiffres", "urss", "france"],
      rhetorical_device: "comparaison choc / analogie historique",
      power_score: 9,
      highlight_words: ["57%", "URSS", "communiste"],
    },
    {
      text: "Un délinquant financier qui finance une taxe sur les riches. Vous ne voyez pas le problème ?",
      context: "Mode Rouge — ad hominem contre Soros, question rhétorique",
      tags: ["ad-hominem", "soros", "provocation"],
      rhetorical_device: "question rhétorique + attaque de la source",
      power_score: 8,
      highlight_words: ["délinquant", "finance"],
    },
    {
      text: "2% de patrimoine quand le rendement est 5%, c'est 40% du revenu. Sur l'immobilier, c'est la destruction.",
      context: "Mode Orange — retournement mathématique",
      tags: ["chiffres", "immobilier", "calcul", "retournement"],
      rhetorical_device: "démonstration arithmétique",
      power_score: 10,
      highlight_words: ["40% du revenu", "destruction"],
    },
    {
      text: "Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato.",
      context: "Citation de Mussolini — Mode Rouge, avertissement sur l'étatisme total",
      tags: ["citation", "mussolini", "etat", "extreme"],
      rhetorical_device: "citation historique explosive / analogie fasciste",
      power_score: 8,
      highlight_words: ["Tutto nello Stato"],
    },
    {
      text: "I could end the deficit in 5 minutes. You just pass a law that says that anytime there is a deficit of more than 3% of GDP, all sitting members of Congress are ineligible for re-election.",
      context: "Warren Buffett cité comme alternative à la posture punitive",
      tags: ["citation", "buffett", "responsabilite", "deficit"],
      rhetorical_device: "citation d'autorité — retournement responsabilité",
      power_score: 9,
      highlight_words: ["end the deficit", "5 minutes", "ineligible"],
    },
    {
      text: "Un budget équilibré est comme protéger sa vertu : il faut apprendre à dire non.",
      context: "Warren Buffett — sur la discipline budgétaire",
      tags: ["citation", "buffett", "discipline", "budget"],
      rhetorical_device: "analogie morale / aphorisme",
      power_score: 7,
      highlight_words: ["dire non"],
    },
    {
      text: "Les idiots apprennent de leur expérience. Les gens intelligents apprennent de l'expérience des autres.",
      context: "Bismarck cité en Mode Jaune et Bleu — sur l'échec historique de l'ISF",
      tags: ["citation", "bismarck", "histoire", "apprentissage"],
      rhetorical_device: "argument d'autorité historique / aphorisme",
      power_score: 9,
      highlight_words: ["expérience des autres"],
    },
    {
      text: "L'ISF a été essayé en Norvège, en Espagne, en Suisse. Résultat : moins de 0.5% du PIB collecté. Fuite massive des capitaux. La France l'a vécu. On recommence ?",
      context: "Mode Rouge — argument par l'échec empirique",
      tags: ["isf", "empirique", "echec", "capital"],
      rhetorical_device: "argument par accumulation d'échecs / question rhétorique",
      power_score: 9,
      highlight_words: ["0.5% du PIB", "Fuite massive"],
    },
    {
      text: "Elon Musk est le plus gros contribuable fiscal de l'histoire des États-Unis. Il paie. Soros, non. Qui propose la taxe, déjà ?",
      context: "Mode Rouge — retournement personnel Musk vs Soros",
      tags: ["musk", "soros", "hypocrisie", "retournement"],
      rhetorical_device: "opposition binaire / accusation d'hypocrisie",
      power_score: 8,
      highlight_words: ["plus gros contribuable", "Soros, non"],
    },
    {
      text: "Ils te disent de te serrer la ceinture pendant qu'ils bradent ton héritage maritime.",
      context: "Formule anti-élites — dénonciation de l'incohérence",
      tags: ["provocation", "elites", "hypocrisie"],
      rhetorical_device: "chiasme / attaque de l'hypocrisie",
      power_score: 8,
      highlight_words: ["serrer la ceinture", "bradent"],
    },
    {
      text: "L'optimum fiscal est un théorème mathématique, pas une opinion politique.",
      context: "Mode Orange — cadrage épistémologique",
      tags: ["laffer", "theoreme", "science", "cadrage"],
      rhetorical_device: "recadrage épistémologique / autorité scientifique",
      power_score: 9,
      highlight_words: ["théorème mathématique", "pas une opinion"],
    },
    {
      text: "C'est un renard qui propose de garder le poulailler.",
      context: "Mode Orange — sur Soros finançant la taxe",
      tags: ["metaphore", "soros", "hypocrisie"],
      rhetorical_device: "métaphore animale / accusation d'inversion",
      power_score: 8,
      highlight_words: ["renard", "poulailler"],
    },
    {
      text: "La vraie justice, c'est taxer les flux, pas le stock.",
      context: "Mode Orange — formule condensée d'alternative",
      tags: ["justice", "flux", "stock", "alternative"],
      rhetorical_device: "opposition binaire / aphorisme opérationnel",
      power_score: 9,
      highlight_words: ["flux", "stock"],
    },
    {
      text: "La taxe Tobin à 0.01% rapporte plus que l'ISF à 1.5% parce qu'on ne peut pas la fuir.",
      context: "Mode Orange — comparaison chiffrée du levier fiscal",
      tags: ["tobin", "isf", "comparaison", "fuite"],
      rhetorical_device: "paradoxe apparent / démonstration par l'écart",
      power_score: 9,
      highlight_words: ["0.01%", "1.5%", "ne peut pas la fuir"],
    },
    {
      text: "Imaginez un jardinier qui veut plus de fruits. Il a deux options : couper les branches les plus hautes, ou améliorer la terre. La taxe Zucman coupe les branches. La taxe Tobin améliore la terre.",
      context: "Mode Vert — analogie du jardinier",
      tags: ["analogie", "jardinier", "metaphore", "vert"],
      rhetorical_device: "analogie visuelle / opposition métaphorique",
      power_score: 9,
      highlight_words: ["jardinier", "couper", "améliorer la terre"],
    },
    {
      text: "Un arbre élagué trop court ne produit plus. Un écosystème bien nourri, si.",
      context: "Mode Vert — extension de l'analogie du jardinier",
      tags: ["analogie", "ecosysteme", "vert"],
      rhetorical_device: "parallélisme / conclusion métaphorique",
      power_score: 7,
      highlight_words: ["élagué", "écosystème"],
    },
    {
      text: "Le Vietnam, pays communiste, a compris que la légèreté fiscale (20% PIB) crée de la croissance.",
      context: "Mode Vert — retournement idéologique",
      tags: ["vietnam", "communisme", "paradoxe", "fiscalite"],
      rhetorical_device: "paradoxe / renversement d'attente",
      power_score: 8,
      highlight_words: ["pays communiste", "légèreté fiscale"],
    },
    {
      text: "La Suisse n'est pas un pays libéral sauvage. C'est un pays où chaque centime public est voté par le peuple. Responsabilité + démocratie directe = efficacité.",
      context: "Mode Vert — défense de la Suisse comme modèle",
      tags: ["suisse", "democratie", "responsabilite", "modele"],
      rhetorical_device: "définition en négation / équation politique",
      power_score: 7,
      highlight_words: ["voté par le peuple", "efficacité"],
    },
    {
      text: "Si le rendement immobilier est de 5% et qu'on prend 2% du patrimoine, tu réalises que c'est 40% du revenu brut ? Tu accepterais qu'on te prenne 40% de ton salaire en plus de l'impôt sur le revenu ?",
      context: "Mode Bleu — question socratique de retournement",
      tags: ["question", "socratique", "salaire", "empathie"],
      rhetorical_device: "question rhétorique + transfert empathique",
      power_score: 9,
      highlight_words: ["40% de ton salaire", "en plus"],
    },
    {
      text: "Sais-tu qui finance la promotion de la taxe Zucman ? Sais-tu qu'il a été condamné pour délit d'initié ? Est-ce que ça ne t'interroge pas, un évaseur fiscal qui milite pour taxer les autres ?",
      context: "Mode Bleu — enchaînement socratique sur Soros",
      tags: ["socratique", "soros", "enchainement", "questions"],
      rhetorical_device: "questions enchaînées / maïeutique offensive",
      power_score: 8,
      highlight_words: ["délit d'initié", "évaseur fiscal"],
    },
    {
      text: "Pourquoi taxer le patrimoine plutôt que les transactions ? Une taxe Tobin à 0.01% est impossible à fuir. Pourquoi personne n'en parle ?",
      context: "Mode Bleu — question ouvrant sur l'alternative",
      tags: ["socratique", "tobin", "alternative"],
      rhetorical_device: "question rhétorique / ouverture",
      power_score: 8,
      highlight_words: ["Pourquoi personne n'en parle"],
    },
    {
      text: "Avant de demander plus d'argent aux citoyens, est-ce qu'on ne devrait pas d'abord demander des comptes à ceux qui le dépensent ?",
      context: "Mode Bleu — question de clôture — inversion du fardeau",
      tags: ["socratique", "responsabilite", "cloture"],
      rhetorical_device: "question de clôture / renversement du fardeau",
      power_score: 10,
      highlight_words: ["demander des comptes"],
    },
    {
      text: "L'argent public est GASPILLÉ.",
      context: "Formule martelée en Mode Rouge — conclusion pilonnage",
      tags: ["conclusion", "gaspillage", "provocation"],
      rhetorical_device: "affirmation lapidaire / verdict",
      power_score: 8,
      highlight_words: ["GASPILLÉ"],
    },
    {
      text: "La grandeur d'un pays ne se mesure pas à combien il prend, mais à combien il bâtit avec ce qu'il a.",
      context: "Clôture Mode Vert — élévation morale",
      tags: ["grandeur", "batir", "vision", "vert"],
      rhetorical_device: "aphorisme moral / chiasme conceptuel",
      power_score: 9,
      highlight_words: ["grandeur", "bâtit"],
    },
    {
      text: "Le statu quo, c'est répéter les mêmes erreurs. L'ISF a échoué. Je propose des solutions différentes. Qui défend le statu quo, vraiment ?",
      context: "Mode Bleu — retournement de l'accusation de conservatisme",
      tags: ["statu-quo", "retournement", "reforme"],
      rhetorical_device: "retournement dialectique / accusation renversée",
      power_score: 8,
      highlight_words: ["répéter les mêmes erreurs"],
    },
    {
      text: "L'ennemi, ce n'est pas le créateur de valeur. L'ennemi, c'est le gaspilleur public.",
      context: "Mode Vert — désignation claire de l'adversaire",
      tags: ["ennemi", "createur", "gaspillage", "cadrage"],
      rhetorical_device: "opposition binaire / recadrage moral",
      power_score: 9,
      highlight_words: ["créateur de valeur", "gaspilleur public"],
    },
    {
      text: "Ne jamais accepter le cadrage 'pour ou contre taxer les riches'. Recadrer toujours sur 'comment taxer intelligemment et comment dépenser responsablement'.",
      context: "Règle d'or méta-rhétorique",
      tags: ["cadrage", "meta", "regle-or"],
      rhetorical_device: "règle méta / reframe stratégique",
      power_score: 10,
      highlight_words: ["cadrage", "recadrer"],
    },
  ],

  // ============================================================
  // 5. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "Les ultra-riches ne paient pas leur juste part d'impôts — la taxe Zucman corrige une injustice.",
        response: "Distinguer le fait (optimisation légale agressive existe) de la solution (taxe patrimoniale mondiale inapplicable). Concéder le diagnostic pour attaquer le remède. Proposer immédiatement les alternatives (Tobin, TVA luxe, réforme plus-values latentes).",
        technique: "Concession du diagnostic + attaque ciblée du remède + proposition alternative",
        example_response_text: "D'accord sur le principe : l'optimisation agressive (buy-borrow-die) est un vrai problème. Mais la taxe Zucman ne le résout pas — elle punit surtout les entrepreneurs français qui, eux, paient déjà. Musk a payé 11 milliards. Soros, qui finance la promotion de la taxe, utilise des fondations offshore. La bonne réponse : taxer les plus-values latentes à la succession et étendre la taxe Tobin. Ciblé, efficace, impossible à fuir.",
      },
      {
        challenge: "La coopération internationale (G20, OCDE) peut rendre la taxe Zucman applicable.",
        response: "S'appuyer sur le précédent BEPS : 15 ans d'efforts OCDE, résultats très limités, paradis fiscaux persistent. Zucman lui-même reconnaît que sans coordination totale, sa taxe est contournée. Or cette coordination est structurellement impossible.",
        technique: "Précédent historique + concession stratégique de l'adversaire",
        example_response_text: "L'OCDE tente depuis 2013 avec le projet BEPS d'harmoniser la fiscalité internationale. 15 ans plus tard, les paradis fiscaux prospèrent — Cayman, BVI, Singapour, Delaware. Zucman lui-même écrit que sa taxe suppose une coopération quasi-totale. Or les États-Unis n'ont pas signé Pilier 2. Sans les États-Unis, la taxe ne peut pas exister. C'est pourquoi il faut taxer ce qui ne peut pas fuir : les flux.",
      },
      {
        challenge: "La France a besoin de plus de recettes pour financer les services publics et l'écologie.",
        response: "Retourner sur le vrai chiffre : 57% du PIB en dépenses publiques est déjà le record OCDE pour une démocratie. Le problème est l'efficacité, pas le volume. Documenter par les gaspillages (Écotax, Autolib, dette Paris, vente d'or Sarkozy).",
        technique: "Retournement du diagnostic — d'un problème de recettes à un problème de dépenses",
        example_response_text: "La France dépense déjà 57% de son PIB — plus que tout autre pays de l'OCDE, plus que l'URSS des années 80. Ce n'est pas un pays qui manque de recettes : c'est un pays qui gaspille. Écotax : 1 milliard perdu. Autolib : 75 millions. Sarkozy a vendu 589 tonnes d'or au plus bas — manque à gagner cumulé de plusieurs milliards. Hidalgo : +7 milliards de dette à Paris. Avant d'ajouter une taxe, exigeons des comptes.",
      },
      {
        challenge: "Comparer la France à l'URSS ou au fascisme, c'est une exagération malhonnête.",
        response: "Ne pas défendre l'équivalence — la reformuler en trajectoire. C'est un avertissement statistique : quand l'État dépasse 50% du PIB, on entre dans une zone historiquement associée à l'étatisme (l'URSS l'était à 50%, la France à 57%). Ce n'est pas une équivalence politique, c'est une comparaison de poids économique.",
        technique: "Retrait tactique + reformulation en trajectoire",
        example_response_text: "Ce n'est pas une équivalence politique, c'est un ordre de grandeur. L'URSS n'est pas comparée à la France comme régime — c'est comparé comme poids de l'État dans l'économie. Et là, oui : 57% > 50%. C'est un point de repère, pas une accusation. Il faut regarder ce chiffre en face avant de dire 'l'État manque de moyens'.",
      },
      {
        challenge: "Les alternatives que vous proposez (Tobin, flat tax) sont technocratiques et invisibles — elles n'ont pas la charge symbolique de la taxe Zucman.",
        response: "Concéder la charge symbolique — mais rappeler que le rôle de la fiscalité n'est pas de faire du symbole mais de collecter. Ajouter : ce qui est réellement symbolique, c'est un ISF qui rapporte moins qu'il ne coûte à collecter. La taxe Zucman est du symbole qui échoue.",
        technique: "Concession + retournement — le symbole raté est le pire des symboles",
        example_response_text: "Le symbole est important, oui. Mais quel symbole envoie-t-on quand on répète l'ISF qui a échoué en France, en Suède, en Norvège ? Le symbole de l'incapacité à apprendre. La taxe Tobin, elle, est déjà en vigueur en France depuis 2012 sur les grandes capitalisations. Elle rapporte, elle est stable, elle est difficile à fuir. C'est un symbole d'efficacité — plus radical que la démagogie qui échoue.",
      },
      {
        challenge: "La courbe de Laffer est une théorie contestée — vous en faites un dogme.",
        response: "Concéder que le taux optimal exact est débattu — mais l'existence de l'optimum est mathématiquement démontrée : à 0% comme à 100% d'imposition, les recettes sont nulles. Il existe donc un maximum quelque part. La question est où, pas si.",
        technique: "Distinction existence / valeur — céder le débat sur la valeur, garder l'existence",
        example_response_text: "Le taux optimal exact est débattu — 50%, 70%, personne ne sait précisément. Mais l'existence d'un optimum n'est pas contestable : à taux 0%, aucune recette ; à taux 100%, personne ne travaille, aucune recette non plus. Il y a donc un maximum. Personne ne conteste ça. Le débat, c'est où on est sur la courbe. Avec 57% de dépenses/PIB, on est vraisemblablement au-delà.",
      },
      {
        challenge: "Le buy-borrow-die, vous le reconnaissez comme un vrai problème — donc il faut bien taxer le patrimoine.",
        response: "Distinguer la solution : ce n'est pas une taxe annuelle sur le patrimoine mondial qui règle le buy-borrow-die, c'est une réforme de la fiscalité successorale et de la 'step-up basis'. Solution ciblée, applicable au niveau national.",
        technique: "Concession + précision du remède structurel",
        example_response_text: "Vous avez raison, buy-borrow-die est réel — j'en fais un angle mort dans ma propre argumentation. Mais la réponse est structurelle : supprimer la step-up basis américaine, taxer les plus-values latentes à la succession, comme le proposait Biden. Solution nationale, ciblée, immédiate. La taxe Zucman ne résout pas ce problème — elle en ajoute un autre.",
      },
    ],

    how_to_attack: [
      {
        target_claim: "La taxe Zucman à 2% est applicable sans fuite si on obtient la coopération internationale.",
        attack: "Le précédent BEPS est écrasant : 15 ans de négociations OCDE, Pilier 2 non ratifié par les États-Unis, paradis fiscaux prospères. La coopération 'presque totale' que Zucman postule n'a jamais existé dans l'histoire moderne. C'est une hypothèse contre-empirique.",
        angle: "empirique / historique",
      },
      {
        target_claim: "Les ultra-riches ne paient pas leur juste part.",
        attack: "Confusion entre taux effectif et montant absolu. Musk a payé 11 Md$ en 2021, LVMH ~5 Md€/an de dividendes ISOC. Ce que Zucman cible est le patrimoine dormant — mais le patrimoine imposé annuellement à 2% n'existe pas comme flux, il faudrait vendre des actifs pour payer, ce qui détruit la structure productive.",
        angle: "logique / opérationnel",
      },
      {
        target_claim: "L'ISF français avant 2017 avait un rendement significatif.",
        attack: "L'ISF rapportait ~5 Md€/an — mais avec des coûts de collecte élevés, un exil fiscal documenté (~500 contribuables/an sous Hollande), et un manque à gagner en IR et IS estimé supérieur au produit brut par plusieurs études (dont Trésor 2013). Rendement net probablement négatif ou nul.",
        angle: "empirique / comptable",
      },
      {
        target_claim: "La courbe de Laffer est une fiction idéologique néolibérale.",
        attack: "Contre-attaque par l'histoire : la baisse d'impôt Reagan (1981) a été suivie d'une hausse des recettes fédérales. La Suède a baissé son impôt sur les sociétés à 20.6% — recettes stables. La courbe n'est pas idéologique, elle est mesurable.",
        angle: "empirique",
      },
      {
        target_claim: "Le financement Soros est un argument ad hominem qui n'invalide pas la thèse.",
        attack: "Sur le plan strictement logique, oui — mais sur le plan de la sincérité du promoteur, ça compte. Un évaseur fiscal notoire (fondations offshore) qui finance des think tanks poussant à taxer les autres est une hypocrisie qui doit être documentée. Attention à ne pas en faire l'argument principal.",
        angle: "éthique / prudential",
      },
      {
        target_claim: "La taxe Tobin est utopique — jamais appliquée à grande échelle.",
        attack: "Faux — la France applique une TTF à 0.3% depuis 2012 sur les grandes capitalisations, rendement stable ~1.5 Md€/an. Le Royaume-Uni a le Stamp Duty (0.5% sur transactions actions) depuis 1694. La mécanique existe, il suffit de l'étendre.",
        angle: "empirique",
      },
    ],

    how_to_rephrase: [
      {
        original: "La taxe Zucman est une escroquerie financée par Soros.",
        softer: "La taxe Zucman a des angles morts structurels que le débat public devrait mieux examiner.",
        harder: "La taxe Zucman est une fraude intellectuelle qui vend aux pauvres la fausse promesse qu'ils paieront moins si les riches paient plus. Historiquement faux à chaque fois.",
        academic: "La proposition Zucman souffre d'un problème d'implementabilité structurel : elle suppose une coopération internationale que le précédent BEPS suggère quasi-impossible, et repose sur une valuation annuelle du patrimoine mondial dont les coûts de conformité pourraient excéder le rendement net.",
      },
      {
        original: "La France est communiste de facto à 57% du PIB.",
        softer: "La France a un ratio de dépenses publiques / PIB parmi les plus élevés de l'OCDE — c'est un fait qui devrait faire réfléchir.",
        harder: "La France dépense plus que l'URSS des années 80. On peut appeler ça comme on veut — moi j'appelle ça un régime de contrôle économique déguisé en démocratie.",
        academic: "Le ratio dépenses publiques / PIB français (55-58% selon les années, Eurostat) place la France au-dessus de tous les autres pays de l'OCDE. Ce niveau se situe historiquement dans la zone occupée par les économies planifiées d'Europe de l'Est avant 1989 (URSS ~50%, RDA ~65%), ce qui interroge sur l'efficacité marginale de la dépense.",
      },
      {
        original: "Sarkozy a bradé 589 tonnes d'or.",
        softer: "La vente d'or française sous Sarkozy est un cas d'école de mauvais timing macroéconomique — vendu au plus bas du cycle.",
        harder: "Sarkozy a bradé 589 tonnes d'or au plus bas pour financer des dépenses courantes. Manque à gagner cumulé : plusieurs dizaines de milliards. Personne ne rend de comptes. Et c'est nous qu'on veut taxer.",
        academic: "Entre 2004 et 2009, la Banque de France a cédé environ 589 tonnes d'or, dans le cadre du Central Bank Gold Agreement. Le prix de cession moyen (~750 $/oz) contre le cours actuel (~2400 $/oz) représente un coût d'opportunité de l'ordre de 40 Md€ — arbitrage macro-financier discutable.",
      },
      {
        original: "Soros est un délinquant qui finance la taxe.",
        softer: "Il est légitime de s'interroger sur le financement des think tanks qui promeuvent des politiques fiscales, y compris ceux liés aux Open Society Foundations.",
        harder: "Soros a été condamné pour délit d'initié, a fait sauter la Banque d'Angleterre, utilise des fondations offshore, et paie des économistes pour promouvoir une taxe qu'il ne paiera jamais. C'est du théâtre.",
        academic: "L'origine philanthropique du financement de certains travaux économiques en faveur d'une taxation patrimoniale coordonnée soulève des questions de transparence des intérêts, indépendamment de la validité intrinsèque des propositions académiques.",
      },
      {
        original: "40% du revenu confisqué, c'est la destruction de l'immobilier.",
        softer: "Sur un rendement locatif net de 5%, une taxe annuelle de 2% sur la valeur du bien représente environ 40% du revenu — un ordre de grandeur à comparer aux 30% d'IR + prélèvements sociaux déjà en place.",
        harder: "2% du patrimoine sur 5% de rendement = 40% de ponction. Additionnez à l'IR (30%), prélèvements sociaux (17.2%), taxe foncière : vous êtes au-delà de 100% du revenu. Vous vendez ou vous ruinez.",
        academic: "Sur un actif immobilier à rendement locatif net de 5%, une imposition patrimoniale annuelle de 2% capte une fraction de 40% du flux de revenu. Cumulée aux prélèvements existants (IR, prélèvements sociaux, taxe foncière), la pression marginale résultante excède fréquemment 100%, forçant l'arbitrage de vente et générant un choc d'offre sur le marché.",
      },
      {
        original: "Il faut taxer les flux, pas le stock.",
        softer: "Historiquement, les taxes sur les flux (transactions, consommation) sont plus stables et moins évitables que les taxes sur le stock patrimonial.",
        harder: "Le stock fuit, le flux ne fuit pas. On taxe ce qui bouge, pas ce qui dort — parce que ce qui dort part si on le réveille brutalement.",
        academic: "La théorie fiscale suggère que les bases mobiles (patrimoine financier, entreprises) sont difficilement taxables unilatéralement dans une économie ouverte, tandis que les bases attachées à des juridictions (transactions localisées, consommation finale, transmission successorale) offrent une meilleure incidence effective.",
      },
      {
        original: "L'argent public est GASPILLÉ.",
        softer: "Les études de la Cour des comptes documentent régulièrement des inefficacités significatives dans la dépense publique française.",
        harder: "L'État français brûle l'argent. Écotax : 1 milliard. Autolib : 75 millions. Or de Sarkozy : 40 milliards de manque à gagner. Dette Hidalgo : 7 milliards. Et on veut nous taxer plus ?",
        academic: "L'analyse cost-benefit de plusieurs politiques publiques françaises récentes (dispositifs de mobilité urbaine, taxation environnementale abandonnée, gestion des réserves de la Banque de France) suggère un problème d'allocation marginale de la ressource publique, indépendamment du niveau nominal des recettes.",
      },
    ],

    if_asked: [
      {
        question: "Es-tu vraiment contre le fait que les ultra-riches paient plus d'impôts ?",
        best_response: "Non. Je suis contre une taxe qui échoue mécaniquement et qui frappera surtout les classes moyennes. Musk paie 11 Md$. Soros — qui promeut la taxe — utilise des fondations offshore. La bonne politique cible le vrai problème : le buy-borrow-die par la fiscalité successorale, et les transactions par la taxe Tobin. Solutions ciblées, applicables, sans fuite.",
        followup_moves: [
          "Demander : qui est riche selon toi ? Où mets-tu le seuil ?",
          "Introduire la taxe Tobin comme alternative concrète",
          "Recadrer sur la dépense publique : 57% du PIB",
        ],
      },
      {
        question: "Comment tu réponds à ceux qui disent que 'sans taxe, les inégalités explosent' ?",
        best_response: "Les inégalités ne se règlent pas en taxant plus, mais en taxant mieux. La Suisse (34% PIB dépenses) a moins d'inégalités que la France (57%). L'ISF français n'a pas réduit les inégalités entre 1981 et 2017 — coefficient de Gini français quasi-stable. La vraie réduction vient de l'école, de la santé, de l'accès au capital productif — pas d'un impôt confiscatoire qui fait fuir les capitaux.",
        followup_moves: [
          "Comparer Gini avant/après ISF (données INSEE)",
          "Distinguer inégalités de revenu / inégalités de patrimoine / inégalités d'opportunités",
          "Proposer les leviers réels : capital humain + accès au crédit productif",
        ],
      },
      {
        question: "La taxe Tobin ne rapporterait vraiment que 20 Md€/an ?",
        best_response: "L'ordre de grandeur est robuste. La TTF française actuelle (0.3% grandes capitalisations) rapporte ~1.5 Md€. Étendue à 0.01% sur toutes les transactions financières incluant dérivés et devises, sur un volume français de plusieurs milliers de milliards, l'estimation basse est 15-20 Md€. Le Parlement européen l'estimait à 30-35 Md€ pour l'UE en 2013. Ordres de grandeur : pas 200 Md€, pas 2 Md€ — 20 Md€.",
        followup_moves: [
          "Citer le rapport Lamassoure au Parlement européen 2013",
          "Distinguer TTF actions / dérivés / devises",
          "Répondre à l'objection 'ça pénalise la liquidité' avec le cas UK",
        ],
      },
      {
        question: "Le chiffre de 57% du PIB en dépenses publiques n'est-il pas gonflé par la Sécurité sociale ?",
        best_response: "Le chiffre Eurostat inclut effectivement la Sécurité sociale, qui représente ~26 points de PIB. Mais la comparaison OCDE utilise la même méthodologie partout — la France reste au sommet. Si on retire la Sécu, tous les autres retirent aussi la leur, l'écart reste le même. L'Allemagne : 49% en méthodologie identique. La Suisse : 34%. La France est bien au-dessus, pas par effet comptable.",
        followup_moves: [
          "Sortir la méthodologie Eurostat / OCDE",
          "Comparer PIB/dépenses France vs Allemagne à structure sociale comparable",
          "Séparer dépenses de fonctionnement / prestations / investissement",
        ],
      },
      {
        question: "Tu ne trouves pas gênant d'utiliser Musk comme exemple, vu ses positions politiques ?",
        best_response: "L'exemple n'est pas politique — il est fiscal. Musk a payé 11 milliards de dollars en 2021, plus qu'aucun individu dans l'histoire. C'est un fait comptable, indépendant de ses tweets. Utiliser cet exemple ne veut pas dire l'endosser politiquement — ça sert à montrer que les créateurs de valeur productive paient déjà, contrairement au discours dominant.",
        followup_moves: [
          "Distinguer position fiscale / position politique",
          "Ajouter d'autres exemples : Bezos, Buffett, Bernard Arnault",
          "Recadrer sur la structure : impôt sur plus-values réalisées vs latentes",
        ],
      },
      {
        question: "L'exemple du Vietnam n'est-il pas malhonnête ? Ils partent de très bas.",
        best_response: "Point valide et concédé. Le Vietnam est un modèle de trajectoire, pas de niveau final. Un meilleur modèle stable est la Suisse (34%, PIB par habitant supérieur à la France, meilleurs services publics selon les enquêtes internationales). Ou le Danemark, souvent cité par la gauche comme social-démocrate — 51%, mais avec une gestion beaucoup plus efficace de la dépense.",
        followup_moves: [
          "Basculer sur la Suisse comme comparaison stable",
          "Introduire l'indice d'efficacité de la dépense (Bloomberg Innovation Index, etc.)",
          "Distinguer niveau et efficacité",
        ],
      },
      {
        question: "Que fais-tu du buy-borrow-die si tu refuses la taxe Zucman ?",
        best_response: "Je le prends au sérieux comme problème réel. La solution structurelle est américaine — supprimer la step-up basis à la succession — et française — taxer les plus-values latentes au décès sur seuil élevé. C'est ce que proposait Biden en 2021. Impact réel, ciblé sur ceux qui pratiquent la stratégie, sans fuite parce que le décès est un événement qui se produit sur le territoire fiscal.",
        followup_moves: [
          "Détailler la mécanique step-up basis",
          "Citer la proposition Biden 2021 (American Families Plan)",
          "Distinguer seuil de déclenchement (5M€, 10M€, 50M€ ?)",
        ],
      },
      {
        question: "Le vrai problème, c'est le capitalisme lui-même, non ?",
        best_response: "Le capitalisme a sorti 1 milliard de personnes de l'extrême pauvreté en 30 ans — c'est un fait Banque mondiale. Le socialisme réel a produit famine et goulags. Le débat n'est pas capitalisme vs socialisme, c'est comment discipliner intelligemment un capitalisme qui fonctionne. La discipline vient de l'impôt sur les flux, de l'antitrust, de la transparence — pas d'une taxation confiscatoire du patrimoine qui a échoué à chaque essai.",
        followup_moves: [
          "Citer la baisse mondiale de la pauvreté extrême 1990-2020",
          "Distinguer régulation / redistribution / expropriation",
          "Proposer les leviers efficaces : antitrust, transparence, plus-values latentes",
        ],
      },
    ],
  },

  // ============================================================
  // 6. FALLACIES
  // ============================================================
  fallacies: [
    {
      original_claim: "Il suffit d'une taxe mondiale de 2% pour régler l'injustice fiscale.",
      fallacy_type: "solution simple à un problème complexe / vœu pieux réglementaire",
      why_fallacious: "Suppose une coopération internationale quasi-totale qui n'a jamais existé (BEPS OCDE en est la preuve). Ignore les mécanismes de fuite (relocalisation domicile fiscal, holdings intermédiaires) et le coût administratif de valuation annuelle du patrimoine mondial.",
      steelman: "Le point charitable : la coordination progresse (Pilier 2 à 15% sur les multinationales est une avancée). Certains estiment qu'une masse critique de 60-70% du PIB mondial coopérant rendrait la taxe efficace même sans unanimité. L'objectif est de forcer la conversation.",
      nuance: "VRAI : la coordination fiscale internationale progresse et a produit des résultats (Pilier 2, échange automatique d'informations). VRAI : cibler les ultra-riches est politiquement légitime. FAUX : que la coordination totale nécessaire est atteignable à court terme. FAUX : que la France seule peut appliquer la taxe efficacement.",
      counter_argument: "15 ans d'OCDE-BEPS pour obtenir un impôt minimum à 15% sur les multinationales — et les États-Unis n'ont même pas ratifié le Pilier 2. Croire qu'une taxe patrimoniale mondiale à 2% obtiendra la coopération que ne trouve pas un impôt minimum ISOC est un vœu pieux.",
      severity: "high",
    },
    {
      original_claim: "La courbe de Laffer est de la propagande néolibérale — il n'y a pas d'optimum fiscal.",
      fallacy_type: "négation d'un théorème / rejet idéologique d'un résultat mathématique",
      why_fallacious: "L'existence d'un optimum est mathématiquement forcée par le fait que recettes = taux × base et que la base répond au taux. À taux 0, recettes = 0. À taux 100%, base = 0 (personne ne travaille), recettes = 0. Un maximum existe donc quelque part. Seule sa localisation est débattue.",
      steelman: "La critique légitime est qu'estimer le point d'inflexion est empiriquement difficile et politiquement instrumentalisé pour justifier des baisses d'impôt qui peuvent être prématurées.",
      nuance: "VRAI : le taux optimal exact est difficile à établir empiriquement. VRAI : Laffer a été utilisé pour justifier des baisses parfois non-optimales (Reaganomics 1981-83 a creusé le déficit). FAUX : que l'optimum n'existe pas. FAUX : que la courbe est purement idéologique.",
      counter_argument: "Baisse Reagan 1981 : recettes fédérales US en $ de 2020 sont passées de 1400 Md$ (1980) à 1900 Md$ (1988). Baisse d'impôt sur les sociétés en Suède (28% → 20.6%) : recettes ISOC stables ou en légère hausse. La mécanique est empirique.",
      severity: "medium",
    },
    {
      original_claim: "L'ISF a échoué, DONC toute taxation du patrimoine est inefficace.",
      fallacy_type: "généralisation abusive / non-sequitur",
      why_fallacious: "L'échec d'un dispositif particulier (ISF avec ses seuils, ses exonérations spécifiques, sa base et son taux) ne démontre pas l'échec de toute taxation patrimoniale. Une taxe sur les plus-values latentes au décès, par exemple, est structurellement différente.",
      steelman: "Le point charitable : les échecs répétés en France, Suède, Norvège, Espagne suggèrent un problème structurel avec la taxation annuelle du stock patrimonial dans une économie ouverte. C'est une régularité empirique forte.",
      nuance: "VRAI : la taxation annuelle du patrimoine (type ISF, Zucman) a échoué partout. VRAI : la mobilité du capital rend cette formule difficile. FAUX : que toutes les formes de taxation patrimoniale sont vouées à l'échec. FAUX : que la taxation successorale ou des plus-values latentes serait vouée aux mêmes fuites.",
      counter_argument: "L'impôt successoral fonctionne (rendement français ~15 Md€/an, US federal estate tax ~30 Md$/an). C'est une taxation du patrimoine, mais au moment de la transmission — donc non-fuyable.",
      severity: "medium",
    },
    {
      original_claim: "Soros finance la taxe Zucman, donc la taxe est un complot.",
      fallacy_type: "ad hominem / attaque de la source",
      why_fallacious: "Le financement d'une recherche ou d'une proposition ne détermine pas sa validité. La position académique de Zucman doit être évaluée sur son mérite intellectuel, pas sur son financement.",
      steelman: "Le point charitable : il est légitime de connaître les sources de financement des travaux politiques et de s'interroger sur les conflits d'intérêts, y compris philanthropiques.",
      nuance: "VRAI : la transparence des financements des think tanks est un principe démocratique légitime. VRAI : les intérêts derrière une proposition doivent être documentés. FAUX : que le financement invalide la thèse. FAUX : que Zucman lui-même soit malhonnête intellectuellement — il est un économiste sérieux.",
      counter_argument: "Zucman a publié dans Quarterly Journal of Economics, American Economic Review — journaux à comité de lecture strict. Sa méthodologie est examinée. Attaquer Soros ne réfute pas ses papiers. C'est un argument prudential, pas logique.",
      severity: "medium",
    },
    {
      original_claim: "La France est communiste de facto à 57% du PIB.",
      fallacy_type: "reductio ad absurdum / analogie fasciste-communiste indirecte",
      why_fallacious: "Le ratio dépenses publiques / PIB n'est qu'un des indicateurs du poids de l'État. Le communisme se caractérise aussi par le contrôle des moyens de production, la propriété d'État, l'absence de marché — la France reste une économie de marché avec propriété privée.",
      steelman: "Le point charitable : le ratio 57% place la France dans une zone historique où la marge de manœuvre privée est structurellement réduite. C'est un signal d'alerte, pas une équivalence.",
      nuance: "VRAI : la France a le ratio dépenses publiques / PIB le plus élevé de l'OCDE. VRAI : ce niveau interroge l'efficacité marginale. FAUX : que la France soit 'communiste' — la structure économique est fondamentalement différente. FAUX : que le seul indicateur du poids étatique soit le ratio dépenses.",
      counter_argument: "Le communisme ce n'est pas 50% de dépenses publiques, c'est la propriété collective des moyens de production. La France en est très loin. La comparaison sert le choc rhétorique, pas l'analyse.",
      severity: "medium",
    },
    {
      original_claim: "Sarkozy a bradé l'or, DONC on ne peut pas augmenter les impôts.",
      fallacy_type: "non-sequitur / diversion",
      why_fallacious: "L'échec de gestion d'un actif public particulier ne démontre pas l'inefficacité de toute nouvelle recette fiscale. Ce sont deux sujets différents : la qualité de la gestion des réserves et la structure de la fiscalité.",
      steelman: "Le point charitable : documenter les gaspillages est légitime pour établir que la question de la 'ressource' est mal posée si la 'dépense' est inefficace. C'est un argument de séquence : reformer la dépense avant d'ajouter des recettes.",
      nuance: "VRAI : les cas de mauvaise gestion (vente d'or, Écotax, Autolib) sont des faits documentés. VRAI : la séquence 'améliorer la gestion avant d'ajouter des taxes' est défendable. FAUX : que ces cas invalident logiquement toute réforme fiscale.",
      counter_argument: "On peut avoir à la fois : (1) une meilleure gestion des ressources publiques ET (2) une nouvelle recette fiscale. Ce n'est pas soit l'un soit l'autre. L'argument gaspillage est un point valide, pas une réfutation logique de la taxe Zucman.",
      severity: "low",
    },
    {
      original_claim: "Musk a payé 11 milliards, DONC les riches paient déjà leur juste part.",
      fallacy_type: "généralisation à partir d'un cas exceptionnel",
      why_fallacious: "Un cas exceptionnel (Musk 2021, dû à l'exercice massif de stock-options) ne représente pas la fiscalité normale des ultra-riches, dont le taux effectif moyen est souvent inférieur à celui des cadres supérieurs (études Zucman, Piketty).",
      steelman: "Le point charitable : les cas de contribution massive existent et sont ignorés du discours dominant. Il est légitime de les nommer pour contester la caricature 'les riches ne paient rien'.",
      nuance: "VRAI : Musk 2021 est un fait — 11 Md$ payés. VRAI : plusieurs milliardaires ont des taux effectifs élevés certaines années. FAUX : que ce cas caractérise le taux moyen des ultra-riches. FAUX : que le buy-borrow-die n'existe pas.",
      counter_argument: "Le rapport ProPublica 2021 a montré que Bezos, Musk, Buffett ont eu des années entières à taux effectif proche de 0%. Musk 2021 est l'exception justement parce qu'il a exercé des options — la plupart des années, il ne réalise rien.",
      severity: "medium",
    },
    {
      original_claim: "La taxe Tobin est utopique — jamais appliquée.",
      fallacy_type: "faux — factuellement erroné",
      why_fallacious: "Contre-empirique : la France a une TTF de 0.3% depuis 2012, le Royaume-Uni a le Stamp Duty depuis 1694, l'Italie a une TTF depuis 2013. La mécanique est éprouvée. L'objection cache une hostilité, pas une impossibilité.",
      steelman: "Le point charitable : les taxes Tobin actuelles restent limitées en scope (actions grandes capitalisations, exclusion des dérivés et devises), donc leur extension aurait des effets encore incertains sur la liquidité.",
      nuance: "VRAI : l'extension aux dérivés et devises pose des questions techniques réelles. FAUX : que la taxe Tobin est utopique. FAUX : que la mécanique n'est pas éprouvée.",
      counter_argument: "France : 1.5 Md€/an de TTF depuis 2012. Royaume-Uni : ~3 Md£/an de Stamp Duty. Italie : 500 M€/an. Ce n'est pas utopique — c'est déjà en fonctionnement.",
      severity: "low",
    },
    {
      original_claim: "Les inégalités s'aggravent, DONC il faut la taxe Zucman.",
      fallacy_type: "conclusion non-sequitur",
      why_fallacious: "Le diagnostic (inégalités croissantes) ne détermine pas le remède. On peut convenir des inégalités et refuser la taxe Zucman en proposant d'autres leviers (accès au capital productif, école, antitrust, TTF étendue).",
      steelman: "Le point charitable : accepter qu'un problème existe (inégalités) crée l'obligation de proposer une solution. Refuser la Zucman sans alternative est politiquement intenable.",
      nuance: "VRAI : les inégalités de patrimoine ont augmenté depuis 1980. VRAI : c'est un enjeu politique légitime. FAUX : que la seule solution est une taxe patrimoniale mondiale. FAUX : que ne pas soutenir Zucman signifie ne rien faire.",
      counter_argument: "Le coefficient de Gini français est resté stable entre 1981 et 2017 pendant l'ISF. Le vrai levier documenté de réduction des inégalités : école (capital humain), accès au crédit productif, antitrust. Pas la taxe patrimoniale.",
      severity: "medium",
    },
    {
      original_claim: "L'État français a besoin de plus de recettes pour financer les services publics.",
      fallacy_type: "vice de cadrage — problème de dépenses présenté comme problème de recettes",
      why_fallacious: "À 57% du PIB de dépenses publiques (record OCDE), le problème français est démontrablement d'efficience allocative, pas de niveau de ressource. Comparaisons : Suisse 34% avec meilleurs services publics selon les indices internationaux ; Allemagne 49% avec meilleure éducation.",
      steelman: "Le point charitable : certains services (santé, éducation) sont sous-financés à la marge malgré le niveau global élevé — les problèmes de recrutement dans l'Éducation nationale sont réels.",
      nuance: "VRAI : certains segments sont sous-tension (hôpital, écoles). VRAI : le niveau des dépenses n'implique pas leur allocation optimale. FAUX : que la France manque globalement de recettes. FAUX : que le problème principal est le volume plutôt que l'allocation.",
      counter_argument: "Le rapport Cour des comptes 2024 identifie plus de 30 Md€ d'inefficience allocative annuelle documentée. Avant d'ajouter une taxe, transférer ces 30 Md€ vers les priorités serait plus efficace et plus rapide.",
      severity: "high",
    },
  ],

  // ============================================================
  // 7. STATS
  // ============================================================
  stats: [
    {
      number: "57%",
      label: "dépenses publiques France / PIB (2023)",
      source: "Eurostat, INSEE",
      context: "Record OCDE pour une démocratie, plus élevé que l'URSS des années 80 (~50%)",
      visual: "percent",
    },
    {
      number: "3 300 Md€",
      label: "dette publique française (fin 2024)",
      source: "INSEE",
      context: "~112% du PIB — utile pour souligner que le problème n'est pas les recettes mais la gestion",
      visual: "count-up",
    },
    {
      number: "<0.5%",
      label: "du PIB collecté par l'ISF partout où il a été essayé",
      source: "OCDE Revenue Statistics, études nationales (France, Norvège, Espagne, Suisse)",
      context: "Preuve empirique de l'échec de la taxation annuelle du patrimoine",
      visual: "percent",
    },
    {
      number: "40%",
      label: "du revenu ponctionné : taxe 2% sur patrimoine × rendement immobilier 5%",
      source: "Calcul arithmétique — moyenne rendement locatif net INSEE ~5%",
      context: "Retournement mathématique le plus percutant contre la taxe Zucman",
      visual: "percent",
    },
    {
      number: "11 Md$",
      label: "impôts payés par Elon Musk en 2021 — record individuel historique",
      source: "IRS, déclarations publiques Musk 2022",
      context: "Contre-exemple à 'les riches ne paient rien' — utile mais à contextualiser",
      visual: "count-up",
    },
    {
      number: "589 tonnes",
      label: "d'or vendues par la Banque de France sous Sarkozy 2004-2009",
      source: "Rapports Banque de France, Central Bank Gold Agreement",
      context: "Manque à gagner cumulé estimé ~40 Md€ au cours actuel — exemple de gestion catastrophique",
      visual: "count-up",
    },
    {
      number: "7+ Md€",
      label: "dette de la Ville de Paris sous Hidalgo",
      source: "Chambre régionale des comptes, Cour des comptes",
      context: "52 000 agents municipaux, coût Autolib 75 M€, Seine olympique 1.4 Md€",
      visual: "count-up",
    },
    {
      number: "1 Md€",
      label: "coût de l'abandon de l'Écotax (indemnisation Ecomouv + démantèlement portiques)",
      source: "Rapports Sénat 2015, Cour des comptes",
      context: "Exemple emblématique de gaspillage public — utile en Mode Rouge",
      visual: "count-up",
    },
    {
      number: "20 Md€/an",
      label: "rendement potentiel taxe Tobin étendue à 0.01% en France",
      source: "Rapport Lamassoure Parlement européen 2013 (proratisé), estimations Bercy",
      context: "Alternative crédible à la taxe Zucman — chiffre à donner comme ordre de grandeur",
      visual: "count-up",
    },
    {
      number: "1.5 Md€/an",
      label: "TTF française actuelle (0.3% grandes capitalisations, en vigueur depuis 2012)",
      source: "Direction Générale des Finances Publiques",
      context: "Preuve que la mécanique existe déjà et fonctionne — contre l'objection 'utopique'",
      visual: "count-up",
    },
    {
      number: "20% / 34%",
      label: "dépenses publiques / PIB Vietnam et Suisse",
      source: "Banque mondiale (Vietnam ~28-30% en réalité), OFS Suisse",
      context: "Points de comparaison — attention Vietnam plutôt 28-30%, ajuster",
      visual: "comparison",
    },
    {
      number: "75 000 $/an",
      label: "seuil au-delà duquel le bonheur subjectif plateau",
      source: "Kahneman & Deaton, PNAS 2010",
      context: "Contre-preuve à 'un million réglerait les problèmes des pauvres'",
      visual: "count-up",
    },
  ],

  // ============================================================
  // 8. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "Taxe Zucman vs Taxe Tobin",
      left: {
        label: "Taxe Zucman (2% patrimoine)",
        items: [
          "Cible : stock patrimonial",
          "Requiert coopération mondiale (~impossible)",
          "Rendement estimé : incertain, contesté",
          "Coût administratif : valuation annuelle patrimoine mondial",
          "Fuite documentée (précédent ISF)",
          "Applicable dans : 0 pays actuellement",
        ],
      },
      right: {
        label: "Taxe Tobin (0.01% transactions)",
        items: [
          "Cible : flux financiers",
          "Applicable unilatéralement à la source",
          "Rendement France ~20 Md€/an potentiel",
          "Coût administratif : minimal (prélevé par plateformes)",
          "Impossible à fuir (transaction = localisation)",
          "Déjà appliquée : France, UK, Italie",
        ],
      },
    },
    {
      title: "Problème de recettes vs Problème de dépenses",
      left: {
        label: "Narratif 'manque de recettes'",
        items: [
          "'Il faut plus taxer les riches'",
          "'La France est sous-financée'",
          "'Les services publics manquent d'argent'",
          "Solution : ajouter des taxes",
          "Ignoré : niveau OCDE record",
        ],
      },
      right: {
        label: "Diagnostic 'problème de dépenses'",
        items: [
          "57% du PIB, record OCDE",
          "30 Md€ d'inefficience Cour des comptes 2024",
          "Écotax 1 Md€, Autolib 75 M€, dette Paris",
          "Solution : reformer la dépense",
          "Ignoré : Suisse 34% avec meilleurs services",
        ],
      },
    },
    {
      title: "Musk vs Soros (parabole de l'hypocrisie fiscale)",
      left: {
        label: "Elon Musk",
        items: [
          "11 Md$ d'impôts en 2021",
          "Plus gros contribuable individuel de l'histoire US",
          "Créateur de valeur productive (Tesla, SpaceX)",
          "Fiscalité assumée publiquement",
          "Cible privilégiée du discours anti-riche",
        ],
      },
      right: {
        label: "George Soros",
        items: [
          "Fondations Open Society (~1.5 Md$/an flux)",
          "Structure offshore protégée fiscalement",
          "Spéculateur — a fait sauter la Livre 1992",
          "Condamné pour délit d'initié (Société Générale 2002)",
          "Finance les think tanks pro-Zucman",
        ],
      },
    },
    {
      title: "Flat tax vs Impôt progressif à niches",
      left: {
        label: "Flat tax (modèle russe 2001)",
        items: [
          "Taux unique 13%",
          "Aucune niche fiscale",
          "Simplicité : formulaire 1 page",
          "Recettes multipliées par 3 en 5 ans",
          "Coût de collecte réduit",
          "Éligible aux revenus du capital",
        ],
      },
      right: {
        label: "Impôt progressif à niches (France)",
        items: [
          "5 tranches (0-45%)",
          "~500 niches fiscales, 90 Md€/an",
          "Complexité : Code impôts 3000 pages",
          "Recettes IR ~80 Md€/an",
          "Coût de collecte élevé",
          "Optimisation légale par les hauts revenus",
        ],
      },
    },
    {
      title: "Stock vs Flux (règle d'or fiscale)",
      left: {
        label: "Taxation du stock",
        items: [
          "Patrimoine, propriété",
          "Valuation nécessaire annuellement",
          "Fuite par relocalisation",
          "Contentieux d'évaluation fréquents",
          "Ex : ISF, taxe Zucman",
        ],
      },
      right: {
        label: "Taxation du flux",
        items: [
          "Transactions, consommation, revenu, succession",
          "Événement mesurable au moment T",
          "Difficile à délocaliser (transaction = lieu)",
          "Prélèvement à la source",
          "Ex : Tobin, TVA, IR, droits de succession",
        ],
      },
    },
    {
      title: "Vraie friend vs Ami de gauche performatif",
      left: {
        label: "'Ami' de gauche performatif",
        items: [
          "'Il faut taxer les riches'",
          "Ne propose pas d'alternative technique",
          "Ignore les précédents d'échec",
          "Se satisfait du symbole",
          "Ne parle jamais de dépense",
        ],
      },
      right: {
        label: "Vraie discussion fiscale",
        items: [
          "'Comment taxer efficacement ?'",
          "Propose Tobin, TVA luxe, plus-values latentes",
          "Étudie les précédents et en tire les leçons",
          "Vise le rendement réel",
          "Interroge dépense ET recette conjointement",
        ],
      },
    },
  ],

  // ============================================================
  // 9. RHETORICAL DEVICES
  // ============================================================
  devices: [
    {
      name: "Recadrage épistémologique",
      example_text: "L'optimum fiscal est un théorème mathématique, pas une opinion politique.",
      effect: "Sort le débat du terrain idéologique pour le mettre sur le terrain scientifique",
      why_it_works: "Le mot 'théorème' déplace l'autorité — l'adversaire doit désormais contester un résultat mathématique, pas une préférence politique.",
    },
    {
      name: "Comparaison choc URSS",
      example_text: "La France dépense plus que l'URSS des années 80.",
      effect: "Choc mémoriel immédiat + reset du cadrage 'la France manque de moyens'",
      why_it_works: "L'URSS est l'archétype négatif de l'étatisme. Placer la France au-delà force un examen des chiffres — même l'auditeur de gauche doit répondre au comparatif.",
    },
    {
      name: "Retournement arithmétique",
      example_text: "2% de patrimoine × 5% de rendement = 40% du revenu.",
      effect: "Rendre concret un chiffre qui paraissait abstrait et faible",
      why_it_works: "Le '2%' semble anodin. Le calcul en 3 secondes révèle un ordre de grandeur inacceptable. Impossible à contester puisque c'est du calcul, pas de l'opinion.",
    },
    {
      name: "Question rhétorique en pilonnage (Mode Bleu)",
      example_text: "Sais-tu qui finance ? Sais-tu qu'il a été condamné ? Sais-tu qu'il utilise des fondations offshore ? Est-ce que ça ne t'interroge pas ?",
      effect: "Force l'adversaire à défendre au lieu d'attaquer",
      why_it_works: "Chaque question précédente construit le poids de la suivante. À la 4e question, l'auditeur cherche des réponses au lieu de contester le cadrage.",
    },
    {
      name: "Analogie du jardinier (Mode Vert)",
      example_text: "Un jardinier veut plus de fruits. Il coupe les branches hautes, ou améliore la terre. La taxe Zucman coupe. La taxe Tobin nourrit.",
      effect: "Rendre visuelle une opposition politique abstraite",
      why_it_works: "L'image agricole active un archétype universel. Le contraste couper/nourrir devient auto-évident. La position 'couper' devient rétrograde par simple mise en scène.",
    },
    {
      name: "Citation-piège (Mussolini)",
      example_text: "Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato — et c'est exactement là qu'on va.",
      effect: "Choquer sans être facilement réfutable — la citation est authentique",
      why_it_works: "Impossible de contester la citation (elle est de Mussolini). L'adversaire doit soit accepter le lien avec la trajectoire, soit s'exposer à défendre le régime de l'étatisme total.",
    },
    {
      name: "Renard/poulailler (métaphore de l'hypocrisie)",
      example_text: "Soros propose de garder le poulailler — c'est le renard.",
      effect: "Ridiculiser une position en une image de conte pour enfant",
      why_it_works: "Le conte est universel, l'analogie est immédiate. Rire = adhésion. Difficile de défendre 'le renard qui garde le poulailler' — l'image force la reformulation.",
    },
    {
      name: "Opposition binaire simplificatrice",
      example_text: "L'ennemi, ce n'est pas le créateur de valeur. L'ennemi, c'est le gaspilleur public.",
      effect: "Recadrer la ligne de fracture pour rallier l'auditoire ciblé",
      why_it_works: "Force un choix identitaire simple. L'auditoire doit soit être 'contre le créateur' (position rare), soit se rallier au 'contre le gaspilleur'.",
    },
    {
      name: "Empathie transférée",
      example_text: "Tu accepterais qu'on te prenne 40% de ton salaire en plus de l'impôt sur le revenu ?",
      effect: "Faire ressentir à l'adversaire la position du contribuable qu'il propose de taxer",
      why_it_works: "Sortir de l'abstraction 'les riches' pour faire un test empathique concret. Personne ne dit oui — donc personne ne peut soutenir l'analogue pour un autre.",
    },
    {
      name: "Accumulation de gaspillages (Mode Rouge)",
      example_text: "Écotax 1 Md€. Autolib 75 M€. Sarkozy or 589 tonnes. Hidalgo 7 Md€. Et on veut nous taxer ?",
      effect: "Créer une masse d'exemples qui écrase le contre-argument abstrait",
      why_it_works: "Chaque exemple est vérifiable individuellement. L'accumulation crée un pattern qui devient plus fort que la meilleure objection théorique.",
    },
    {
      name: "Chiasme conceptuel de clôture (Mode Vert)",
      example_text: "La grandeur d'un pays ne se mesure pas à combien il prend, mais à combien il bâtit.",
      effect: "Élever le débat au moral pour clôturer sur un aphorisme mémorable",
      why_it_works: "Le chiasme 'prend/bâtit' est mémoriellement forte. La formule fonctionne sur les valeurs partagées (grandeur, construction) — impossible à réfuter frontalement.",
    },
    {
      name: "Renversement du fardeau (Mode Bleu final)",
      example_text: "Avant de demander plus d'argent aux citoyens, est-ce qu'on ne devrait pas d'abord demander des comptes à ceux qui le dépensent ?",
      effect: "Retourner la question morale sur l'accusateur",
      why_it_works: "L'auditoire porte spontanément le fardeau de justification vers les décideurs. Question de séquence indiscutable : d'abord la gestion, ensuite la ressource.",
    },
  ],

  // ============================================================
  // 10. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "Le jardinier qui coupe les branches vs nourrit la terre",
      used_for: "Opposer la taxe Zucman (extractive) à la taxe Tobin (systémique)",
      strength: 9,
      why_it_works: "Analogie visuelle universelle. Personne ne défend le jardinier qui coupe. Le contraste est immédiat.",
    },
    {
      source: "Le renard proposant de garder le poulailler",
      used_for: "Attaquer l'incohérence de Soros finançant une taxe qu'il ne paiera pas",
      strength: 8,
      why_it_works: "Conte universel, humour, ridicule. L'analogie est intuitivement forte et impose la ré-évaluation.",
    },
    {
      source: "La cigarette au petit-déjeuner (parallèle Bernays)",
      used_for: "Attaquer la 'science' fiscale devenue instrument de propagande",
      strength: 6,
      why_it_works: "Historiquement documenté — l'industrie sucrière a payé des chercheurs pour le JAMA pendant 50 ans. Parallèle transférable à la fiscalité.",
    },
    {
      source: "La courbe de Laffer (fonction mathématique)",
      used_for: "Prouver l'existence d'un optimum fiscal",
      strength: 9,
      why_it_works: "Mathématiquement inattaquable. Les deux extrêmes (0% et 100%) donnent 0 recette — un maximum existe donc entre.",
    },
    {
      source: "Le Vietnam sorti de la pauvreté avec 20% de dépenses/PIB",
      used_for: "Prouver qu'un État léger n'empêche pas la croissance",
      strength: 6,
      why_it_works: "Contre-intuitif (pays communiste + économie de marché). Force la ré-évaluation du dogme 'plus d'État = plus de justice'.",
    },
    {
      source: "La Suisse — 34% dépenses/PIB, meilleurs services publics",
      used_for: "Prouver que la qualité vient de la gestion, pas du volume",
      strength: 8,
      why_it_works: "Comparaison directe : même niveau de développement, moins de dépenses, meilleurs résultats. L'inefficience française devient auto-évidente.",
    },
    {
      source: "Ferdinand de Lesseps (Canal de Suez)",
      used_for: "Rappeler qu'un grand projet français réussi est une question de vision, pas de recettes",
      strength: 5,
      why_it_works: "Fierté historique. Suez fut construit sans taxe patrimoniale — par obligation, souscription, ingénierie. La grandeur ne vient pas de la ponction.",
    },
    {
      source: "L'or de Sarkozy vendu au plus bas",
      used_for: "Illustrer la mauvaise gestion structurelle avant de parler de nouvelles recettes",
      strength: 8,
      why_it_works: "Fait vérifiable, chiffre choc (589 tonnes), timing catastrophique. Symbole du 'l'argent public brûle' — impossible à minimiser.",
    },
  ],

  // ============================================================
  // 11. FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "Recadrage 'Comment taxer intelligemment' (règle d'or)",
      when_to_use: "Dès qu'un débat s'ouvre sur 'pour ou contre taxer les riches'",
      steps: [
        "Refuser le cadrage binaire proposé",
        "Poser la question opérationnelle : 'quelle taxe rapporte réellement sans faire fuir ?'",
        "Introduire les 4 alternatives (Tobin, TVA luxe, flat tax capital, plus-values latentes)",
        "Retourner sur la dépense : 'et comment dépenser mieux ?'",
        "Refuser de conclure sans avoir traité les deux moitiés",
      ],
      warning: "Ne jamais accepter le 'oui/non' — c'est là que la démagogie l'emporte. Toujours ouvrir sur la technique.",
    },
    {
      name: "Test Musk vs Soros (parabole de l'hypocrisie)",
      when_to_use: "Quand l'adversaire invoque la 'justice fiscale' comme argument moral",
      steps: [
        "Poser : qui est le contribuable maximum de l'histoire US ? (Réponse : Musk, 11 Md$ en 2021)",
        "Poser : qui finance les think tanks pro-Zucman ? (Réponse : Soros, fondations offshore)",
        "Demander : lequel des deux propose la taxe ?",
        "Ne pas conclure — laisser l'auditoire faire la jonction",
        "Refuser l'objection 'ad hominem' : c'est un test de sincérité, pas d'invalidation",
      ],
      warning: "Puissant mais à manier avec précaution — peut être perçu comme conspirationniste si mal calibré.",
    },
    {
      name: "Cascade des chiffres Rouge",
      when_to_use: "Face à un auditoire de gauche qui parle de 'manque de recettes'",
      steps: [
        "Ouvrir sur 57% du PIB de dépenses publiques",
        "Comparer avec URSS 80s (50%) et Suisse (34%)",
        "Accumuler les gaspillages : Écotax, Autolib, Sarkozy or, dette Hidalgo",
        "Demander : 'Où est le manque de recettes ?'",
        "Basculer sur les alternatives (Mode Orange/Jaune)",
      ],
      warning: "Peut être perçu comme brutal — dépendant du public. Bascule immédiatement en Mode Jaune pour ne pas paraître purement destructif.",
    },
    {
      name: "Séquence 'gestion d'abord, ressource ensuite'",
      when_to_use: "Face à la demande morale 'il faut financer les services publics'",
      steps: [
        "Concéder que les services publics sont un enjeu légitime",
        "Documenter : rapport Cour des comptes 2024, 30 Md€ d'inefficience annuelle",
        "Poser : 'Avant d'ajouter, ne devrait-on pas récupérer ces 30 Md€ ?'",
        "Demander : 'À quel moment on rend des comptes sur la gestion ?'",
        "Proposer : audit indépendant + loi Buffett + puis discussion des recettes additionnelles",
      ],
      warning: "Ne pas paraître opposé à tout financement — c'est une séquence, pas un refus.",
    },
    {
      name: "Analogie du jardinier (Mode Vert)",
      when_to_use: "Face à un auditoire qui a besoin d'être convaincu par la vision, pas par les chiffres",
      steps: [
        "Poser l'image : un jardinier qui veut plus de fruits",
        "Deux options : couper les branches hautes / améliorer la terre",
        "Assigner : taxe Zucman = couper, taxe Tobin = nourrir",
        "Élargir : un écosystème bien nourri produit plus qu'un arbre élagué",
        "Conclure : 'La grandeur d'un pays ne se mesure pas à ce qu'il prend, mais à ce qu'il bâtit'",
      ],
      warning: "Éviter avec un public technique — l'analogie risque de paraître simpliste. Réserver au grand public / auditoire émotionnel.",
    },
  ],

  // ============================================================
  // 12. DRILLS
  // ============================================================
  drills: [
    {
      name: "Le calcul du 40% (2 minutes chrono)",
      duration: "7 jours",
      instructions: [
        "Répéter matin et soir : '2% de patrimoine, sur 5% de rendement, égale 40% du revenu brut'",
        "Ajouter : 'Cumulé avec IR et prélèvements sociaux, on dépasse 100% du revenu'",
        "Tester en conversation avec 3 personnes différentes cette semaine",
        "Noter les réactions : concession, silence, contestation",
        "Ajuster le débit selon le public",
      ],
      difficulty: 2,
    },
    {
      name: "Le pitch alternative en 30 secondes",
      duration: "10 jours",
      instructions: [
        "Rédiger un pitch : 4 phrases, 30 secondes",
        "Phrase 1 : 'La taxe Zucman a un vrai problème (buy-borrow-die)'",
        "Phrase 2 : 'Mais elle échoue partout où on l'essaie (ISF)'",
        "Phrase 3 : 'Les alternatives existent : Tobin 0.01%, TVA luxe, plus-values latentes'",
        "Phrase 4 : 'Et on doit d'abord discuter du 57% du PIB'",
        "Enregistrer et écouter — objectif : 30 secondes exactes",
      ],
      difficulty: 3,
    },
    {
      name: "Le tour de table socratique (Mode Bleu)",
      duration: "5 conversations",
      instructions: [
        "Choisir 5 amis de sensibilités politiques différentes",
        "Poser en début de conversation : 'Est-ce que tu es pour la taxe Zucman ?'",
        "Ne pas argumenter — poser 3 questions socratiques enchaînées",
        "Q1 : 'Si on prend 2% sur un rendement de 5%, ça fait combien du revenu ?'",
        "Q2 : 'Sais-tu combien collecte l'ISF partout où on l'a essayé ?'",
        "Q3 : 'Avant de taxer plus, ne devrait-on pas demander des comptes ?'",
        "Noter à quel moment chacun tique — c'est ton entrée principale",
      ],
      difficulty: 4,
    },
    {
      name: "L'entraînement mémoire des chiffres clés",
      duration: "14 jours",
      instructions: [
        "Liste : 57%, 3300 Md€, 40% (revenu réel), 0.5% (ISF collecte), 11 Md$ (Musk), 589 tonnes (or Sarkozy), 20 Md€ (Tobin potentiel), 1 Md€ (Écotax), 7 Md€ (dette Paris)",
        "Réciter 3 fois par jour matin midi soir",
        "Test hebdomadaire : donner la statistique en réponse à une question ouverte",
        "Après 14 jours : incorporer chaque chiffre spontanément dans une conversation",
      ],
      difficulty: 2,
    },
    {
      name: "Le débat contradictoire (rôle-play)",
      duration: "3 sessions × 45 min",
      instructions: [
        "Session 1 : jouer le partisan Zucman contre un ami. Défendre au maximum. But : identifier tes points faibles",
        "Session 2 : inverser les rôles — tu défends la position anti-Zucman. But : appliquer les 5 modes rhétoriques",
        "Session 3 : débat libre avec les deux positions au choix. But : basculer entre modes selon les besoins",
        "Après chaque session : noter la meilleure et la pire mécanique déployée",
      ],
      difficulty: 5,
    },
  ],

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    debates: [
      "science-abondance",
      "rhetorique-verites-difficiles",
      "masculinite-feminisme",
    ],
    videos: [
      "LFJAHZlizAg", // Never tired when winning — cadre de la performance vs. le confort
      "P4rkjwaa6so", // Cross-lien Tate — critique du victimhood
      "KPbnzSGlAP4",
    ],
  },
};

// Register into global registry
if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["taxe-zucman"] = CONTENT_DEBATES_taxe_zucman;
