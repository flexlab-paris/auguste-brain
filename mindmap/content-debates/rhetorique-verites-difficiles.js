// /mindmap/content-debates/rhetorique-verites-difficiles.js
// Deep content for debate — "Rhétorique des Vérités Difficiles"
// Source: fiches/rhetorique-verites-difficiles/fiches-rhetorique-verites-difficiles.md

const CONTENT_DEBATES_rhetorique_verites_difficiles = {
  id: "rhetorique-verites-difficiles",
  slug: "rhetorique-verites-difficiles",
  title: "Rhétorique des Vérités Difficiles",
  speaker: "Auguste Pugnet",
  format: "Débat structuré · Fiche rhétorique",
  word_count: 6500,
  language: "fr",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "Avoir raison ne suffit pas. Une vérité juste, mal emballée, n'éclaire pas — elle agresse.",
  thesis: "Les grands rhéteurs (Cicéron, Lincoln, Churchill, MLK) ne diluent jamais la vérité — ils la présentent de façon à ce qu'elle ne soit pas refusée. L'éloquence est la science de l'emballage au service de la vérité. Sept mécaniques (posture, désamorçage, glissement pronominal, métaphores, cautions, rythme, nuance fondamentale) sont transférables et se travaillent.",
  key_takeaways: [
    "Poser une vérité dure en 'il faut' agresse ; la poser en 'ce que j'ai compris' partage — la posture change tout avant même le contenu",
    "Désamorcer explicitement avant d'asséner : 'Je sais que c'est difficile — je te le dis quand même parce que c'est important'",
    "Basculer 'tu' → 'on/nous' pour cesser de pointer du doigt, avec une vulnérabilité sincère : 'moi aussi je tombe dans ce piège'",
    "Métaphore > Instruction : les neurosciences (Lakoff) montrent 2× plus de régions cérébrales activées",
    "Convoquer une figure historique (Mandela, Frankl, Marc Aurèle, Churchill) transforme un avis subjectif en argument universel",
    "Alterner phrases courtes et longues — le rythme est un poids : 'Toujours. Sans exception.' pèse plus que la même vérité noyée",
    "Briser les binaires défaitistes par la distinction : 'Difficile ≠ foutu', 'Seul à cet instant ≠ inaimable', 'Un échec ≠ une identité'",
    "L'éloquence n'est pas un don — c'est une science, et elle se travaille par drills quotidiens",
  ],

  // ============================================================
  // 2. STRUCTURE — 5 MODES RHÉTORIQUES
  // ============================================================
  structure: {
    rouge: {
      mode: "Abrasif · Le Marteau",
      these: "Ceux qui disent des vérités dures sans soin ne servent pas la vérité — ils servent leur ego. Le lâche crie fort pour se convaincre de son courage. Le rhéteur véritable trouve l'angle qui rend la vérité audible.",
      stats: [
        { number: "7 mécaniques", label: "rhétoriques transférables — testées historiquement et neurologiquement" },
        { number: "2×", label: "plus de régions cérébrales activées par la métaphore vs l'énoncé direct (Lakoff)" },
        { number: "0 dilution", label: "requise — les grands rhéteurs n'ont jamais dilué la vérité, ils l'ont emballée" },
        { number: "3/5/25+", label: "règle du métronome — phrases de 3 mots, 5 mots, 25+ mots dans chaque paragraphe" },
        { number: "50 fiches", label: "objectif annuel : 50 métaphores classées + 50 cautions historiques" },
      ],
      cloture: "Balancer une vérité brute est facile — n'importe quel imbécile en est capable. Trouver l'angle qui la rend recevable exige l'intelligence. Choisis : facile et impuissant, ou difficile et efficace.",
    },
    orange: {
      mode: "Combatif · L'Épée",
      these: "L'éloquence n'est pas un vernis — c'est une science neurologique. Chaque technique (métaphore, rythme, désamorçage) active des circuits cérébraux mesurables. Refuser d'apprendre ces techniques n'est pas de la 'sincérité' — c'est de la paresse déguisée en principe.",
      stats: [
        { number: "1971", label: "Métaphores We Live By (Lakoff & Johnson) — la métaphore comme structure cognitive fondamentale" },
        { number: "10 min/jour", label: "coût d'entraînement pour le drill 'traducteur' — reformulation d'impératifs en témoignages" },
        { number: "7 exercices", label: "quotidiens pour maîtriser les 7 mécaniques — ROI mesurable en 30 jours" },
        { number: "1 méta-exercice", label: "hebdomadaire — appliquer les 7 mécaniques à UNE situation réelle difficile" },
        { number: "3 vérités", label: "type binaire défaitiste à briser : 'C'est foutu', 'Personne ne m'aime', 'J'ai tout raté'" },
      ],
      cloture: "L'éloquence n'est pas un don. C'est une science. Ceux qui prétendent 'être eux-mêmes' sans travailler la forme ne sont pas plus sincères — ils sont juste moins efficaces.",
    },
    jaune: {
      mode: "Persuasif · L'Architecte",
      these: "Sept mécaniques rhétoriques structurent la communication des vérités difficiles : posture, désamorçage, glissement pronominal, métaphores, cautions, rythme, nuance fondamentale. Chacune est enseignable, mesurable, et travaillable par un drill spécifique.",
      stats: [
        { number: "Posture", label: "'il faut' → 'ce que j'ai compris' — passage de la prescription au partage" },
        { number: "Désamorçage", label: "2 phrases : reconnaître la difficulté + préciser pourquoi tu le dis quand même" },
        { number: "Glissement", label: "'tu' → 'on/nous' + inclusion d'une vulnérabilité personnelle" },
        { number: "Métaphores", label: "5 par semaine, objectif annuel 50 fiches classées par thème" },
        { number: "Cautions", label: "1 figure historique + 1 anecdote précise + 1 citation vérifiée par semaine" },
      ],
      cloture: "Chaque mécanique est une technique d'apaisement au service d'un même message. Elles se combinent en systèmes. La maîtrise du système transforme le rapport à toute conversation difficile.",
    },
    vert: {
      mode: "Inspirant · Le Phare",
      these: "Les grands rhéteurs de l'histoire — Cicéron, Lincoln, Churchill, MLK — n'ont pas seulement changé le cours des événements. Ils ont montré qu'une vérité peut être à la fois radicale et audible. Chaque phrase mémorable qu'ils ont laissée est une leçon d'ingénierie de l'esprit.",
      stats: [
        { number: "1863", label: "Discours de Gettysburg (Lincoln) — 272 mots, 2 minutes, change une nation" },
        { number: "1940", label: "'We shall fight on the beaches' (Churchill) — 36 mots, sauve un peuple" },
        { number: "1963", label: "'I have a dream' (MLK) — 17 minutes, change une civilisation" },
        { number: "16 ans", label: "Léonard sur La Cène — la patience est un principe rhétorique" },
        { number: "27 ans", label: "Mandela à Robben Island — la vérité difficile portée sans haine" },
      ],
      cloture: "Ce que les grands rhéteurs nous ont laissé, ce n'est pas seulement des phrases — c'est une méthode. La méthode qui rend la vérité recevable même quand elle dérange. La méthode est à ta portée — il ne reste qu'à travailler.",
    },
    bleu: {
      mode: "Socratique · Le Miroir",
      these: "Poser les bonnes questions sur ta propre communication : as-tu déjà réussi à faire entendre une vérité difficile ? Qu'est-ce qui a marché ? Qu'est-ce qui a échoué ? Les grands rhéteurs de tous les temps ont partagé une intuition — que tu peux redécouvrir en toi-même.",
      stats: [
        { number: "1 question", label: "à te poser : la dernière fois que tu as dit une vérité dure, l'autre a-t-il pu l'entendre ?" },
        { number: "Réécouter", label: "tes propres notes vocales : combien de 'tu' ? Combien de 'nous' ?" },
        { number: "3 minutes", label: "à consacrer chaque jour à une distinction fondamentale (drill n°7)" },
        { number: "1 semaine", label: "de journal WhatsApp — combien de fois as-tu prescrit vs partagé ?" },
        { number: "1 méta-exercice", label: "hebdomadaire : quelle mécanique t'a le plus servi ? Laquelle te résiste le plus ?" },
      ],
      cloture: "La rhétorique commence par l'écoute — pas des autres, de soi. Réécoute-toi une semaine. Ce que tu entends te dira ce que tu dois travailler. La vérité difficile la plus utile à dire est peut-être celle que tu te dois à toi-même.",
    },
  },

  // ============================================================
  // 3. ARGUMENT TREE
  // ============================================================
  argument_tree: {
    root: {
      claim: "Communiquer une vérité difficile efficacement est une science apprenable — 7 mécaniques structurent le champ, chacune est enseignable et testable",
      children: [
        {
          claim: "La vérité brute n'est pas plus 'vraie' — elle est moins reçue",
          type: "premise",
          strength: 9,
          evidence: [
            "L'agression ferme les oreilles avant même le contenu",
            "Les grands rhéteurs n'ont jamais dilué — ils ont emballé",
            "Cicéron, Lincoln, Churchill, MLK : trace historique irréfutable",
          ],
        },
        {
          claim: "La posture (prescription vs partage) change la réception avant le contenu",
          type: "premise",
          strength: 9,
          evidence: [
            "'Il faut' active la défense",
            "'Ce que j'ai compris' active la réflexion",
            "Effet documenté en communication non-violente (Marshall Rosenberg)",
          ],
          children: [
            {
              claim: "Le drill du traducteur : 10 phrases 'il faut' → témoignage, 10 min/jour",
              type: "example",
              strength: 8,
            },
          ],
        },
        {
          claim: "Le désamorçage explicite prévient la résistance défensive",
          type: "premise",
          strength: 8,
          evidence: [
            "Formule : 'Je sais que X est difficile / Je te le dis quand même parce que Y'",
            "Modèle documenté en psychothérapie brève (Erickson)",
            "Efficacité vérifiée par test A/B en communication professionnelle",
          ],
        },
        {
          claim: "Le glissement 'tu' → 'on/nous' cesse de pointer et rejoint",
          type: "premise",
          strength: 9,
          evidence: [
            "'Tu' met en face-à-face, 'on' place côte-à-côte",
            "L'inclusion d'une vulnérabilité personnelle scelle la nouvelle position",
            "Technique utilisée par MLK, Mandela, Michelle Obama",
          ],
        },
        {
          claim: "La métaphore active 2× plus de régions cérébrales que l'instruction directe",
          type: "premise",
          strength: 9,
          evidence: [
            "Lakoff & Johnson, Métaphores We Live By (1971)",
            "Études d'imagerie cérébrale confirmant l'activation multi-régionale",
            "Métaphore fait sentir, l'instruction fait savoir",
          ],
        },
        {
          claim: "La caution historique universalise un argument personnel",
          type: "premise",
          strength: 8,
          evidence: [
            "Convoquer Mandela, Frankl, Aurèle transforme 'je pense' en 'l'histoire nous apprend'",
            "L'argument cesse d'être filial, fraternel, personnel — donc rejetable",
            "Techniques présentes dans tous les grands discours",
          ],
        },
        {
          claim: "Le rythme (phrases courtes vs longues) est un poids sémantique",
          type: "premise",
          strength: 8,
          evidence: [
            "Règle du métronome : 3 mots / 5 mots / 25+ mots par paragraphe",
            "Phrases courtes obligent à l'arrêt — poids augmenté",
            "'Toujours. Sans exception.' pèse plus que la même vérité noyée",
          ],
        },
        {
          claim: "La distinction conceptuelle brise les binaires défaitistes",
          type: "premise",
          strength: 9,
          evidence: [
            "'Difficile ≠ foutu', 'Seul à cet instant ≠ inaimable', 'Un échec ≠ une identité'",
            "Structure cognitive de la thérapie cognitive-comportementale (Beck)",
            "Distingue apparence défaitiste et réalité modifiable",
          ],
        },
        {
          claim: "Les 7 mécaniques se combinent en système — le tout > la somme",
          type: "premise",
          strength: 7,
          evidence: [
            "Chaque mécanique renforce les autres",
            "Le méta-exercice hebdomadaire (appliquer les 7 à UNE situation) mesure le progrès combiné",
            "L'éloquence complète = maîtrise combinatoire",
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
      text: "Avoir raison ne suffit pas. Une vérité juste, balancée sans soin, n'éclaire pas — elle agresse.",
      context: "Ouverture de la fiche — le constat de départ",
      tags: ["ouverture", "verite", "agression", "raison"],
      rhetorical_device: "aphorisme d'ouverture / paradoxe",
      power_score: 10,
      highlight_words: ["avoir raison", "agresse"],
    },
    {
      text: "Les grands rhéteurs (Cicéron, Lincoln, Churchill, Martin Luther King) ne diluent jamais la vérité. Ils la présentent de façon à ce qu'elle ne soit pas refusée.",
      context: "Thèse principale — distinction dilution/emballage",
      tags: ["these", "grands-rheteurs", "dilution", "emballage"],
      rhetorical_device: "distinction fondamentale + autorité",
      power_score: 10,
      highlight_words: ["ne diluent jamais", "refusée"],
    },
    {
      text: "L'éloquence, c'est la science de l'emballage au service de la vérité.",
      context: "Définition condensée de l'éloquence",
      tags: ["definition", "eloquence", "emballage", "verite"],
      rhetorical_device: "définition-formule",
      power_score: 10,
      highlight_words: ["science", "emballage"],
    },
    {
      text: "Ce que j'ai compris, c'est que… Ce qui m'a aidé moi, c'est… J'ai remarqué que…",
      context: "Mécanique 1 — conversion prescription en témoignage",
      tags: ["mecanique-1", "temoignage", "prescription"],
      rhetorical_device: "formule-modèle / cadre de reformulation",
      power_score: 8,
      highlight_words: ["j'ai compris", "aidé moi"],
    },
    {
      text: "La leçon devient un cadeau au lieu d'un reproche. L'autre n'a plus à se défendre contre toi — il peut entrer dans la réflexion à côté de toi.",
      context: "Mécanique 1 — effet de la posture partage",
      tags: ["cadeau", "reproche", "reflexion", "cote"],
      rhetorical_device: "opposition / description d'effet",
      power_score: 9,
      highlight_words: ["cadeau", "à côté de toi"],
    },
    {
      text: "Je sais que c'est difficile. Je te dis ça non pas parce que je pense que c'est facile, mais parce que je crois que c'est important.",
      context: "Mécanique 2 — formule type du désamorçage",
      tags: ["desamorcage", "difficulte", "important", "formule"],
      rhetorical_device: "formule type / patron reproductible",
      power_score: 9,
      highlight_words: ["difficile", "important"],
    },
    {
      text: "Le 'tu' met en face à face. Il accuse, même quand on ne le veut pas.",
      context: "Mécanique 3 — diagnostic du 'tu'",
      tags: ["tu", "face-a-face", "accusation", "diagnostic"],
      rhetorical_device: "diagnostic pronominal / observation",
      power_score: 8,
      highlight_words: ["face à face", "accuse"],
    },
    {
      text: "Tu cesses de pointer du doigt et tu rejoins l'autre sur le banc.",
      context: "Mécanique 3 — effet du glissement",
      tags: ["glissement", "banc", "pointer", "rejoindre"],
      rhetorical_device: "métaphore visuelle",
      power_score: 9,
      highlight_words: ["pointer du doigt", "sur le banc"],
    },
    {
      text: "La métaphore active 2× plus de régions cérébrales que l'énoncé direct.",
      context: "Mécanique 4 — donnée neuroscientifique",
      tags: ["metaphore", "neurosciences", "lakoff", "chiffre"],
      rhetorical_device: "donnée neuro / autorité scientifique",
      power_score: 9,
      highlight_words: ["2×", "régions cérébrales"],
    },
    {
      text: "Elle fait sentir au lieu de seulement énoncer.",
      context: "Mécanique 4 — la métaphore",
      tags: ["metaphore", "sentir", "enoncer"],
      rhetorical_device: "opposition sentir/énoncer",
      power_score: 8,
      highlight_words: ["sentir", "énoncer"],
    },
    {
      text: "On ne marche pas en arrière vers son avenir.",
      context: "Mécanique 4 — métaphore exemple pour 'arrête de comparer présent au passé'",
      tags: ["metaphore", "avenir", "passe"],
      rhetorical_device: "métaphore-formule",
      power_score: 10,
      highlight_words: ["en arrière", "avenir"],
    },
    {
      text: "Regarde l'horizon, pas le sillage.",
      context: "Mécanique 4 — métaphore exemple pour 'avance pas à pas'",
      tags: ["metaphore", "horizon", "sillage"],
      rhetorical_device: "métaphore visuelle / marine",
      power_score: 9,
      highlight_words: ["horizon", "sillage"],
    },
    {
      text: "L'argument cesse d'être personnel pour devenir universel. Il ne peut plus être rejeté comme un avis subjectif.",
      context: "Mécanique 5 — effet de la caution historique",
      tags: ["caution", "universel", "subjectif", "rejet"],
      rhetorical_device: "effet documenté / mise à distance",
      power_score: 9,
      highlight_words: ["universel", "rejeté"],
    },
    {
      text: "Mandela, 27 ans à Robben Island. Frankl, les rescapés des camps. Marc Aurèle, Pensées pour moi-même. Churchill, We shall fight on the beaches.",
      context: "Mécanique 5 — bibliothèque des cautions par thème",
      tags: ["caution", "mandela", "frankl", "aurele", "churchill"],
      rhetorical_device: "énumération / bibliothèque de références",
      power_score: 9,
      highlight_words: ["27 ans", "camps", "beaches"],
    },
    {
      text: "Toujours. Sans exception.",
      context: "Mécanique 6 — exemple de phrase courte chirurgicale",
      tags: ["rythme", "court", "exception", "chirurgical"],
      rhetorical_device: "phrase courte / poids par brièveté",
      power_score: 9,
      highlight_words: ["Toujours", "Sans exception"],
    },
    {
      text: "C'est peu, et c'est immense.",
      context: "Mécanique 6 — exemple de phrase courte paradoxale",
      tags: ["rythme", "paradoxe", "peu", "immense"],
      rhetorical_device: "paradoxe condensé / oxymore",
      power_score: 9,
      highlight_words: ["peu", "immense"],
    },
    {
      text: "Une vérité énoncée en trois mots a plus de poids que la même vérité noyée dans une subordonnée.",
      context: "Mécanique 6 — loi du rythme",
      tags: ["rythme", "trois-mots", "poids", "loi"],
      rhetorical_device: "loi opérationnelle / comparaison",
      power_score: 9,
      highlight_words: ["trois mots", "subordonnée"],
    },
    {
      text: "Difficile n'est pas foutu. Seul à cet instant n'est pas inaimable. Un échec n'est pas une identité. Pas encore n'est pas jamais.",
      context: "Mécanique 7 — les distinctions libératrices",
      tags: ["distinction", "binaire", "liberatrice", "identite"],
      rhetorical_device: "cascade de distinctions",
      power_score: 10,
      highlight_words: ["Difficile", "identité", "jamais"],
    },
    {
      text: "X et Y, ce n'est pas la même chose. Et toute la différence est là.",
      context: "Mécanique 7 — formule type de la nuance fondamentale",
      tags: ["distinction", "formule", "difference"],
      rhetorical_device: "formule-modèle de distinction",
      power_score: 9,
      highlight_words: ["même chose", "différence"],
    },
    {
      text: "Valide la souffrance tout en refusant la conclusion défaitiste. C'est l'inverse du déni ET l'inverse du défaitisme.",
      context: "Mécanique 7 — effet double de la nuance",
      tags: ["souffrance", "defaitisme", "deni", "double-refus"],
      rhetorical_device: "double négation constructive",
      power_score: 10,
      highlight_words: ["ni déni", "ni défaitisme"],
    },
    {
      text: "Communiquer une vérité dure avec efficacité, c'est trouver l'angle qui permet à l'autre de la recevoir sans avoir à se défendre.",
      context: "Règle générale — thèse finale",
      tags: ["regle-generale", "angle", "recevoir", "defense"],
      rhetorical_device: "règle-loi / axiome",
      power_score: 10,
      highlight_words: ["angle", "se défendre"],
    },
    {
      text: "Les grands rhéteurs n'ont jamais dilué la vérité. Ils l'ont emballée pour qu'elle ne soit pas refusée.",
      context: "Reprise de la thèse en clôture",
      tags: ["cloture", "dilution", "emballage", "refus"],
      rhetorical_device: "reprise / martelage",
      power_score: 10,
      highlight_words: ["jamais dilué", "emballée"],
    },
    {
      text: "L'éloquence n'est pas un don. C'est une science. Et elle se travaille.",
      context: "Clôture ultime — méta-message",
      tags: ["eloquence", "don", "science", "travail"],
      rhetorical_device: "triade en gradation / conclusion mémorable",
      power_score: 10,
      highlight_words: ["pas un don", "science", "travaille"],
    },
    {
      text: "Ne dis pas 'il faut'. Dis 'j'ai remarqué que'. Ne dis pas 'tu devrais'. Dis 'ce qui m'a aidé moi'.",
      context: "Auguste — martelage pédagogique",
      tags: ["prescription", "temoignage", "pedagogie"],
      rhetorical_device: "cascade impérative renversée",
      power_score: 9,
      highlight_words: ["il faut", "j'ai remarqué"],
    },
    {
      text: "Ta vérité vaut ce qu'elle peut porter dans l'oreille de l'autre. Sinon, tu parles seul.",
      context: "Auguste — aphorisme de synthèse",
      tags: ["aphorisme", "porte", "seul"],
      rhetorical_device: "aphorisme / condition d'existence",
      power_score: 9,
      highlight_words: ["porter", "seul"],
    },
  ],

  // ============================================================
  // 5. ARGUMENTATION KIT
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "Travailler la forme, c'est manipuler — c'est trahir la sincérité.",
        response: "Distinguer manipulation (contre l'intérêt du destinataire) et éloquence (au service de la vérité qu'il a besoin d'entendre). L'infirmière qui annonce un diagnostic sombre en calibrant ses mots ne manipule pas — elle sert. La négligence de la forme est de l'arrogance déguisée, pas de la sincérité.",
        technique: "Distinction éthique / analogie soignante",
        example_response_text: "La manipulation, c'est utiliser la forme contre l'intérêt du destinataire. L'éloquence, c'est utiliser la forme au service de la vérité qu'il a besoin d'entendre. Quand une infirmière annonce un diagnostic difficile en calibrant chaque mot, elle ne manipule pas — elle soigne. Négliger la forme au nom de la 'sincérité' n'est pas plus sincère — c'est plus paresseux.",
      },
      {
        challenge: "'On/nous' est du copinage — parfois il faut dire 'tu' pour responsabiliser.",
        response: "Concéder — il y a des moments où le 'tu' est chirurgical (responsabilisation directe, cadrage d'urgence). Le principe n'est pas 'jamais tu' — c'est 'presque toujours on/nous', avec des 'tu' choisis. La règle est proportionnelle : 90% on/nous pour désarmer, 10% tu pour ancrer.",
        technique: "Concession de la nuance / règle proportionnelle",
        example_response_text: "Absolument — 'tu' a sa place quand il faut ancrer une responsabilité individuelle spécifique. Mais dans 90% des cas où on veut faire entendre une vérité difficile, le 'tu' ferme avant que le message passe. La règle : 'on/nous' par défaut, 'tu' choisi. Comme un scalpel — précis quand il faut, jamais partout.",
      },
      {
        challenge: "Les métaphores sont de la littérature — dans la vraie vie, on doit être direct.",
        response: "Neurosciences (Lakoff, imagerie cérébrale) : la métaphore active 2× plus de régions cérébrales que l'instruction directe. Ce n'est pas de la littérature — c'est du hacking cognitif. Les meilleurs ingénieurs, chirurgiens, généraux utilisent des métaphores parce qu'elles font sentir ce qu'un exposé technique ne fait que dire.",
        technique: "Argument neuroscientifique / exemples de terrains 'directs'",
        example_response_text: "Ce n'est pas de la littérature — c'est du hacking cognitif. Lakoff a montré que la métaphore active 2× plus de régions cérébrales qu'une instruction directe. Un chirurgien qui dit 'la tumeur, c'est un jardin de mauvaises herbes qu'on désherbe' fait mieux comprendre qu'une explication en termes de type histologique. Un général qui dit 'le boulon qui tient toute la machine' est mieux entendu qu'un exposé sur la logistique.",
      },
      {
        challenge: "Le désamorçage, c'est du bavardage qui dilue le message.",
        response: "Deux phrases ne diluent pas — elles préparent. La physique de la communication : sans préparation, le message frappe la défense et rebondit. Avec préparation, il passe et atteint. Le désamorçage est un investissement de 5 secondes pour un rendement de 5 fois plus d'impact.",
        technique: "Analogie physique / calcul de rendement",
        example_response_text: "Deux phrases de désamorçage ne diluent rien — elles préparent la réception. C'est de la physique de communication : sans préparation, le message frappe la défense et rebondit. Avec préparation, il passe. Investissement 5 secondes, rendement × 5 en impact. Un chirurgien qui prépare son geste avant l'incision n'est pas plus lent — il est plus précis.",
      },
      {
        challenge: "Toutes ces techniques rendent le discours artificiel — on perd le naturel.",
        response: "Distinguer le naturel spontané (souvent inefficace) du naturel travaillé (le seul qui existe chez les grands rhéteurs). MLK ne 'trouvait pas naturellement' ses phrases — il les répétait des semaines. Le naturel apparent est le résultat d'un travail invisible. C'est comme le jazz : la spontanéité vient de milliers d'heures de pratique.",
        technique: "Analogie musicale / distinction spontané/travaillé",
        example_response_text: "Le naturel apparent des grands rhéteurs est le résultat d'un travail invisible. MLK ne 'trouvait pas naturellement' l'anaphore 'I have a dream' — il l'avait répétée des semaines. Churchill relisait chaque mot 20 fois. Le vrai naturel n'est pas la spontanéité brute — c'est la spontanéité travaillée. Comme le jazz : les meilleurs improvisent après 10 000 heures. Avant ça, c'est du bruit.",
      },
      {
        challenge: "La caution historique, c'est de la posture — on cache son propre argument derrière Mandela.",
        response: "Point valide et à surveiller. La caution ne remplace pas l'argument — elle le renforce. Si on ne peut pas expliquer sans Mandela pourquoi la vérité qu'on porte tient, on n'a pas d'argument. La caution est un multiplicateur, pas un substitut. Règle : d'abord ton propre raisonnement, puis la caution pour ancrer.",
        technique: "Concession + précision de la règle d'usage",
        example_response_text: "Point valide, c'est un vrai risque. La règle : d'abord ton propre argument, articulé clairement. Ensuite, la caution comme ancrage. Pas 'Mandela dit X donc Y' — mais 'j'ai remarqué X, et Mandela l'a vécu à Robben Island, ce qui suggère que Y'. La caution est un multiplicateur d'impact, pas un substitut d'argument. Si tu ne peux pas défendre sans Mandela, tu n'as pas d'argument.",
      },
      {
        challenge: "Les 7 mécaniques sont trop nombreuses — impossible à combiner en temps réel.",
        response: "Vrai au début, faux après entraînement. Comme conduire une voiture — 5 pédales, 3 leviers, 2 rétroviseurs semble impossible au début, devient inconscient après 6 mois. Les drills quotidiens (10 min) automatisent chaque mécanique. Après 90 jours, la combinaison devient réflexe.",
        technique: "Analogie de l'apprentissage moteur / calendrier",
        example_response_text: "Vrai les 30 premiers jours. Après, les mécaniques s'automatisent. Comme conduire — au début, embrayage + accélérateur + volant + rétros semble impossible. Après 3 mois, c'est inconscient. Les drills (10 min/jour × 7 mécaniques) automatisent une par semaine. Après 90 jours, elles se combinent en réflexe. Ce n'est pas une compétence — c'est une habitude motrice.",
      },
    ],

    how_to_attack: [
      {
        target_claim: "'La sincérité brute est la meilleure communication.'",
        attack: "Contre-empirique : les personnes qui pratiquent la 'sincérité brute' échouent statistiquement à faire passer leurs messages difficiles. Enquêtes de communication organisationnelle : les managers 'directs sans filtre' produisent 3× plus de désengagement des équipes que les managers 'directs mais calibrés'. La brutalité n'est pas de la sincérité — c'est de l'inefficacité.",
        angle: "empirique / management",
      },
      {
        target_claim: "'L'éloquence est réservée à l'élite culturelle.'",
        attack: "Les 7 mécaniques sont enseignables en 10 min/jour sur 90 jours. Aucune ne requiert une culture particulière — chacune s'appuie sur des mécanismes cognitifs universels (pronom, métaphore, rythme). Prétendre le contraire est un alibi.",
        angle: "opérationnel",
      },
      {
        target_claim: "'Les métaphores infantilisent l'auditoire.'",
        attack: "Contre-scientifique : Lakoff, Turner, Steen ont montré que la métaphore est la structure cognitive fondamentale — TOUS les auditoires les traitent, y compris les scientifiques et académiques. Refuser la métaphore prive l'auditeur de 2× l'activation cérébrale.",
        angle: "empirique / neurosciences",
      },
      {
        target_claim: "'Un vrai leader doit assumer la brutalité de la vérité.'",
        attack: "Les vrais leaders (Lincoln, Churchill, De Gaulle, MLK) ont assumé la vérité en la calibrant. Aucune de leurs phrases mémorables n'est brute — toutes sont travaillées. La brutalité est un choix de leaders faibles qui confondent posture et efficacité.",
        angle: "historique / diagnostic",
      },
      {
        target_claim: "'Le rythme est un artifice décoratif.'",
        attack: "Le rythme est cognitif, pas décoratif. Une phrase de 3 mots occupe une unité mémorielle distincte. Une phrase de 25 mots noyée en subordonnées se dissout. La règle du métronome (3/5/25+) est de l'architecture mnémonique — pas de la décoration.",
        angle: "cognitif",
      },
      {
        target_claim: "'La distinction fondamentale est du chipotage sémantique.'",
        attack: "En thérapie cognitive-comportementale (TCC — Beck, méthode validée sur 40+ ans de recherche), la distinction conceptuelle est le levier central du changement de croyance dépressive. 'Difficile ≠ foutu' n'est pas du chipotage — c'est une intervention cognitive documentée.",
        angle: "clinique",
      },
    ],

    how_to_rephrase: [
      {
        original: "Tu es dans le déni, tu dois te réveiller.",
        softer: "Ce que j'ai remarqué, c'est qu'il y a un écart entre ce que tu vis et ce que tu te racontes.",
        harder: "Le déni ne te protège pas — il te retarde. Chaque jour que tu passes à ne pas voir est un jour de plus à réparer.",
        academic: "Il existe une dissonance cognitive entre l'appréciation subjective de la situation et les indicateurs objectifs. Cette dissonance, si elle n'est pas travaillée, prolonge le délai d'ajustement fonctionnel.",
      },
      {
        original: "Arrête de te plaindre, agis.",
        softer: "Ce qui m'a aidé, moi, c'est de convertir chaque plainte en une action concrète dans les 24 heures.",
        harder: "La plainte non-suivie d'action est une addiction. Tu la ressens comme du soulagement — c'est une drogue.",
        academic: "La verbalisation itérative de la plainte sans action correspondante entretient un pattern cognitif dépressogène. La conversion en action concrète dans un délai court (protocole d'activation comportementale) modifie le circuit de récompense.",
      },
      {
        original: "Tu dois pardonner à ton père.",
        softer: "J'ai remarqué que garder la rancune, c'est boire du poison en espérant que l'autre en meure. Pardonner n'est pas oublier — c'est te libérer.",
        harder: "Ta rancune ne blesse pas ton père — elle te tue. Il ne s'en rend même pas compte. Toi si.",
        academic: "Le maintien d'une rancune persistante active chroniquement le système sympathique, produisant des marqueurs inflammatoires documentés (Enright, Fitzgibbons). Le pardon est une intervention thérapeutique validée pour le sujet portant la rancune, indépendamment de la responsabilité de l'autre.",
      },
      {
        original: "C'est foutu, tu ne t'en sortiras jamais.",
        softer: "Difficile n'est pas foutu. Ce que je vois, c'est un moment lourd — pas une identité.",
        harder: "'C'est foutu' est le mensonge le plus efficace jamais inventé. Il te garde couché. Sois debout, même mal.",
        academic: "La formulation 'c'est foutu' est une distorsion cognitive de type sur-généralisation catastrophique (Beck). Elle transforme une situation transitoire difficile en identité inaltérable. La distinction conceptuelle libératrice consiste à re-temporaliser la difficulté.",
      },
      {
        original: "Personne ne t'aime.",
        softer: "Seul à cet instant n'est pas inaimable. La solitude qu'on ressent ne dit rien de qui on est.",
        harder: "Tu confonds 'personne ne m'aime maintenant' et 'je ne suis pas aimable'. Le premier est passager, le second est un mensonge.",
        academic: "L'affirmation 'personne ne m'aime' constitue une extrapolation d'un état émotionnel présent vers une propriété stable de l'identité. Cette extrapolation est cognitivement identifiée comme distorsion, corrigible par distinction temporelle et attributionnelle.",
      },
      {
        original: "L'éloquence n'est pas un don, c'est une science qui se travaille.",
        softer: "L'éloquence s'apprend — comme la conduite, comme un instrument, comme la cuisine. Il n'y a pas de 'don' qu'on n'ait pas.",
        harder: "Ceux qui parlent bien ont travaillé. Ceux qui ne travaillent pas parlent mal. La différence n'est pas le talent — c'est l'entraînement.",
        academic: "La compétence rhétorique est une compétence procédurale relevant du savoir-faire complexe. Sa maîtrise dépend de l'entraînement délibéré (deliberate practice, Ericsson), pas de dispositions innées particulières.",
      },
      {
        original: "Ne dis pas 'il faut', dis 'j'ai compris'.",
        softer: "Ce que j'ai remarqué, c'est que 'il faut' active la défense. 'J'ai compris' active la curiosité. Petite différence, grand effet.",
        harder: "Chaque 'il faut' que tu prononces est un mur. Chaque 'j'ai compris' est une main tendue. Choisis.",
        academic: "La modalité déontique ('il faut', 'tu dois') mobilise chez le destinataire une posture défensive, alors que la modalité épistémique de témoignage ('ce que j'ai compris') active un traitement cognitif ouvert. Cette différence pragmatique est documentée en linguistique appliquée à la communication non-violente.",
      },
    ],

    if_asked: [
      {
        question: "Par où commencer ?",
        best_response: "Par le drill du traducteur (mécanique 1). 10 min/jour pendant 7 jours. Prends 10 phrases de ta semaine (WhatsApp, mails, notes vocales) qui contiennent 'il faut', 'tu dois', 'tu devrais'. Réécris chacune en témoignage : 'Ce que j'ai compris', 'Ce qui m'a aidé moi'. Après 7 jours, tu verras que ta communication change avant même de faire consciemment le glissement.",
        followup_moves: [
          "Sortir un carnet de traduction",
          "Documenter 3 exemples réels",
          "Passer à la mécanique 2 (désamorçage) semaine 2",
        ],
      },
      {
        question: "Combien de temps pour voir les résultats ?",
        best_response: "10 min/jour, 7 jours par mécanique, 7 mécaniques → 49 jours pour couvrir chacune une fois. Le méta-exercice hebdomadaire (application des 7 à une situation réelle) commence dès la semaine 1 et affine sur 90 jours. Résultats mesurables sur ta communication après 30 jours ; automatisation après 90 jours.",
        followup_moves: [
          "Sortir le calendrier des drills",
          "Proposer un journal de suivi",
          "Établir 3 indicateurs de succès",
        ],
      },
      {
        question: "Est-ce que ça marche par écrit et à l'oral pareillement ?",
        best_response: "Oui, mais avec des dosages différents. À l'écrit : le rythme (mécanique 6) et la métaphore (4) portent plus. À l'oral : la posture (1) et le glissement pronominal (3) sont primordiaux — l'auditeur les entend en direct. Le désamorçage (2) est capital dans les deux. La caution (5) fonctionne partout.",
        followup_moves: [
          "Proposer un tableau écrit vs oral",
          "Enregistrer une note vocale test",
          "Comparer une version écrite et une orale du même message",
        ],
      },
      {
        question: "Comment savoir si mon interlocuteur reçoit vraiment le message ou fait semblant ?",
        best_response: "Trois signaux : (1) il reformule spontanément ce que tu as dit avec ses propres mots ; (2) il pose une question ouverte au lieu d'objecter ; (3) le lendemain, il revient sur le sujet sans être relancé. Si aucun des trois n'apparaît, le message n'est pas passé — recommence avec une mécanique différente.",
        followup_moves: [
          "Documenter les 3 signaux",
          "Prendre le prochain cas concret comme test",
          "Ajuster selon la réponse",
        ],
      },
      {
        question: "Peut-on trop désamorçer et perdre l'impact ?",
        best_response: "Oui — la règle est 2 phrases maximum, jamais plus. 'Je sais que X est difficile. Je te le dis quand même parce que Y'. Au-delà, on entre dans le préambule geignard qui affaiblit. La formule est chirurgicale : reconnaître + préciser. Puis frapper.",
        followup_moves: [
          "Compter les phrases de désamorçage dans un discours",
          "Éliminer la 3e si elle existe",
          "Tester version courte vs version longue",
        ],
      },
      {
        question: "Comment trouver la bonne caution historique en temps réel ?",
        best_response: "Par constitution de la bibliothèque — l'exercice 5 : 1 fiche par semaine × 50 semaines = 50 fiches classées par thème (résilience, courage, patience, sacrifice, etc.). Après 6 mois de constitution, tu as accès à 6-10 cautions par thème que tu peux mobiliser en quelques secondes.",
        followup_moves: [
          "Créer un premier thème (résilience) avec 5 fiches",
          "Programmer la constitution progressive",
          "Tester la mobilisation en conversation",
        ],
      },
      {
        question: "N'est-ce pas manipulateur d'apprendre ces techniques ?",
        best_response: "Manipuler = utiliser la forme contre l'intérêt du destinataire. Éloquence = utiliser la forme au service de la vérité qu'il a besoin d'entendre. Un chirurgien qui calibre l'annonce d'un diagnostic ne manipule pas — il sert. La négligence de la forme n'est pas de la sincérité — c'est de l'arrogance déguisée.",
        followup_moves: [
          "Sortir la distinction manipulation/éloquence",
          "Analogie médicale (annonce diagnostic)",
          "Analyser un cas concret",
        ],
      },
      {
        question: "Ces techniques marchent-elles face à quelqu'un de mauvaise foi ?",
        best_response: "Elles marchent moins — mais elles restent le meilleur pari. Face à la mauvaise foi, le désamorçage (2) et le glissement pronominal (3) réduisent la surface d'attaque de l'adversaire. La distinction fondamentale (7) démonte les binaires qu'il essaie d'imposer. La caution (5) fait témoin auprès de l'auditoire tiers. On ne convertit pas la mauvaise foi — on gagne l'audience.",
        followup_moves: [
          "Adapter la cible : l'auditoire, pas l'interlocuteur",
          "Sélectionner les mécaniques utiles à cet objectif",
          "Enregistrer et débriefer",
        ],
      },
    ],
  },

  // ============================================================
  // 6. FALLACIES
  // ============================================================
  fallacies: [
    {
      original_claim: "La sincérité, c'est dire les choses comme elles nous viennent.",
      fallacy_type: "confusion sincérité/spontanéité / non-sequitur",
      why_fallacious: "La spontanéité brute est un état momentané, pas une valeur. Un chirurgien qui opère 'comme ça lui vient' n'est pas plus sincère qu'un chirurgien précis — il est juste plus dangereux. La forme travaillée n'est pas un mensonge sur le fond.",
      steelman: "Le point charitable : chercher la forme parfaite peut effectivement produire un décalage entre ce qu'on ressent et ce qu'on dit. Il y a un risque à l'excès de calibration.",
      nuance: "VRAI : trop calibrer peut assécher l'authenticité. VRAI : la spontanéité a sa place dans l'intime. FAUX : que la spontanéité brute soit toujours plus sincère. FAUX : que travailler la forme trahisse la vérité.",
      counter_argument: "MLK, Lincoln, Churchill ont tous travaillé leurs phrases pendant des semaines. Ils ne sont pas moins sincères pour autant — ils sont plus efficaces. La sincérité travaillée est plus utile que la spontanéité brute.",
      severity: "medium",
    },
    {
      original_claim: "Les métaphores infantilisent l'auditoire.",
      fallacy_type: "affirmation contre-scientifique",
      why_fallacious: "Contredit par 50 ans de linguistique cognitive (Lakoff, Johnson, Turner, Steen). TOUS les auditoires traitent la métaphore comme structure cognitive fondamentale — les scientifiques, philosophes et académiques inclus. Les manuels de physique regorgent de métaphores (le trou noir, le champ, la corde, le miroir).",
      steelman: "Le point charitable : certaines métaphores mal choisies peuvent effectivement paraître condescendantes selon l'auditoire. Le calibrage est un enjeu.",
      nuance: "VRAI : une métaphore inadaptée à l'auditoire peut paraître condescendante. VRAI : chaque public a ses métaphores natives. FAUX : que les métaphores en général infantilisent. FAUX : qu'un discours 'sérieux' doive s'en priver.",
      counter_argument: "Le discours 'I have a dream' est intégralement structuré par des métaphores (dream, mountains, valleys). Il est prononcé à Washington, pas dans une école primaire. Les métaphores n'infantilisent pas — elles engagent.",
      severity: "low",
    },
    {
      original_claim: "L'éloquence est un talent inné qu'on a ou qu'on n'a pas.",
      fallacy_type: "essentialisme du talent / négation de l'apprentissage",
      why_fallacious: "Contredit par la littérature en psychologie de la performance (Ericsson, deliberate practice). Les compétences rhétoriques suivent la même courbe d'apprentissage que le sport, la musique, la programmation. Le 'talent inné' est un mythe conservateur qui décourage la pratique.",
      steelman: "Le point charitable : il existe des différences interindividuelles dans la facilité d'accès à certaines mécaniques (mémoire verbale, sens du rythme). Ces différences sont réelles mais mineures.",
      nuance: "VRAI : différences interindividuelles mineures existent. VRAI : certains progressent plus vite que d'autres. FAUX : que l'éloquence soit innée et fixe. FAUX : que la pratique n'apporte rien.",
      counter_argument: "Ericsson (deliberate practice) : après 10 000 heures d'entraînement délibéré, les différences interindividuelles s'effacent. La rhétorique n'est pas différente du violon ou des échecs — c'est une compétence procédurale entraînable.",
      severity: "medium",
    },
    {
      original_claim: "'Tu' est plus honnête que 'on/nous' — 'on' est du copinage lâche.",
      fallacy_type: "confusion honnêteté/directivité",
      why_fallacious: "'Tu' n'est pas plus 'honnête' — c'est plus directif. L'honnêteté du contenu ne dépend pas du pronom. 'On/nous' peut porter des vérités très dures avec plus d'impact parce que la défense est moins active.",
      steelman: "Le point charitable : le 'on/nous' abusif peut effectivement effacer la responsabilité individuelle. Dans certains contextes (management, justice), le 'tu' est nécessaire pour ancrer.",
      nuance: "VRAI : le 'on/nous' abusif efface la responsabilité. VRAI : le 'tu' a sa place dans certains contextes. FAUX : que le 'tu' soit plus honnête. FAUX : que le 'on/nous' soit lâche par nature.",
      counter_argument: "MLK dit 'we shall overcome' — pas 'you shall overcome'. Le 'we' inclut l'orateur dans la responsabilité et augmente l'engagement. Ce n'est pas du copinage — c'est de l'alignement.",
      severity: "medium",
    },
    {
      original_claim: "Le désamorçage est une perte de temps qui affaiblit le message.",
      fallacy_type: "négation d'un effet documenté",
      why_fallacious: "La physique de la communication : sans préparation, le message frappe la défense et rebondit. Le désamorçage prépare la réception. Investissement de 5 secondes pour un rendement multiplié en impact.",
      steelman: "Le point charitable : un désamorçage trop long dilue effectivement le message. Il y a un risque réel à trop préparer.",
      nuance: "VRAI : le désamorçage excessif dilue. VRAI : la règle des 2 phrases doit être stricte. FAUX : que tout désamorçage soit une perte. FAUX : que le message brut soit plus efficace.",
      counter_argument: "Test A/B en communication professionnelle : messages désamorçés produisent 3× plus d'adhésion que messages bruts. La règle 'reconnaître + préciser + frapper' est un standard documenté.",
      severity: "low",
    },
    {
      original_claim: "La caution historique est un argument d'autorité fallacieux.",
      fallacy_type: "confusion appel à l'autorité / caution charitable",
      why_fallacious: "L'argument d'autorité fallacieux consiste à substituer l'autorité à l'argument ('Mandela le dit, donc c'est vrai'). La caution charitable consiste à renforcer un argument déjà articulé par un exemple historique ('J'ai remarqué X, et Mandela l'a vécu, ce qui renforce l'observation'). Distinction opérationnelle.",
      steelman: "Le point charitable : le risque de glissement vers l'appel à l'autorité est réel. Il faut la vigilance méthodologique.",
      nuance: "VRAI : le glissement vers l'appel à l'autorité est un risque à surveiller. VRAI : la règle 'argument d'abord, caution ensuite' doit être respectée. FAUX : que toute caution soit fallacieuse.",
      counter_argument: "La rhétorique classique distingue depuis Aristote l'ethos (caractère de l'orateur), le logos (argument), et le pathos (émotion). La caution renforce l'ethos — c'est une composante légitime de la persuasion, pas un vice logique.",
      severity: "medium",
    },
    {
      original_claim: "La distinction fondamentale est du chipotage sémantique qui ne change rien.",
      fallacy_type: "négation d'un mécanisme cognitif documenté",
      why_fallacious: "En thérapie cognitive-comportementale (Beck, 40+ ans de recherche), la distinction conceptuelle est le levier central du changement de croyance dépressive. 'Difficile ≠ foutu' est une intervention cognitive documentée, pas du chipotage.",
      steelman: "Le point charitable : certaines distinctions peuvent être trop subtiles pour porter dans certains contextes. Le calibrage est un enjeu.",
      nuance: "VRAI : les distinctions subtiles doivent être calibrées à l'auditoire. FAUX : qu'elles soient toujours du chipotage. FAUX : qu'elles ne changent rien.",
      counter_argument: "Meta-analyses TCC : les interventions basées sur la restructuration cognitive (dont la distinction fondamentale) produisent des effets significatifs sur la dépression légère à modérée, comparables aux ISRS. Ce n'est pas du chipotage — c'est un traitement documenté.",
      severity: "low",
    },
    {
      original_claim: "Ces techniques marchent seulement avec des gens de bonne foi.",
      fallacy_type: "négation de l'effet sur audience tierce",
      why_fallacious: "Les techniques rhétoriques ne visent pas seulement l'interlocuteur direct — elles visent aussi l'audience tierce (auditoire présent, lecteurs, spectateurs). Face à quelqu'un de mauvaise foi, elles gagnent l'audience.",
      steelman: "Le point charitable : face à un interlocuteur de mauvaise foi absolue, l'efficacité de la persuasion directe est faible. Il faut adapter les objectifs.",
      nuance: "VRAI : la mauvaise foi absolue réduit l'efficacité sur l'interlocuteur direct. VRAI : les objectifs doivent s'adapter (audience tierce, futur). FAUX : que les techniques deviennent inutiles.",
      counter_argument: "Cicéron face à Catilina : Catilina ne s'est pas converti. Mais Cicéron a gagné le Sénat. C'est le principe : quand l'interlocuteur est perdu, on parle pour l'audience.",
      severity: "low",
    },
    {
      original_claim: "Le rythme (phrases courtes/longues) est un artifice de style sans fond.",
      fallacy_type: "négation de l'architecture cognitive",
      why_fallacious: "Le rythme est une architecture mnémonique. Une phrase de 3 mots occupe une unité mémorielle distincte. Une phrase noyée en subordonnées se dissout. Le rythme n'est pas de la décoration — c'est de la structure cognitive.",
      steelman: "Le point charitable : un rythme trop artificiel peut effectivement paraître affecté. Le calibrage est un enjeu.",
      nuance: "VRAI : un rythme forcé paraît artificiel. VRAI : le calibrage doit être naturel. FAUX : que le rythme soit sans fond.",
      counter_argument: "Test simple : essayer d'oublier 'Toujours. Sans exception.' vs 'Il faut toujours faire ça, sans jamais faire exception'. La version courte reste — la version longue s'efface. Le rythme EST le contenu.",
      severity: "low",
    },
    {
      original_claim: "L'éloquence est un vernis élitiste qui exclut le peuple.",
      fallacy_type: "essentialisme sociologique inversé",
      why_fallacious: "Les 7 mécaniques sont enseignables en 10 min/jour. Elles ne dépendent d'aucune culture particulière. MLK, Lula, Malcolm X, Michelle Obama sont des exemples de rhéteurs issus de milieux populaires devenus maîtres de la forme.",
      steelman: "Le point charitable : historiquement, l'accès à l'enseignement rhétorique a été inégalitaire. Ce constat est légitime.",
      nuance: "VRAI : l'accès historique à la formation rhétorique a été inégalitaire. VRAI : la démocratisation reste à faire. FAUX : que l'éloquence soit intrinsèquement élitiste. FAUX : que les mécaniques dépendent d'un capital culturel spécifique.",
      counter_argument: "MLK, sud rural pauvre. Malcolm X, prison. Lula, ouvrier métallo. Tous devenus des rhéteurs mondiaux. La démocratisation est possible — il suffit d'ouvrir les manuels.",
      severity: "low",
    },
  ],

  // ============================================================
  // 7. STATS
  // ============================================================
  stats: [
    {
      number: "7",
      label: "mécaniques rhétoriques transférables : posture, désamorçage, glissement pronominal, métaphore, caution, rythme, nuance",
      source: "Fiche synthèse Auguste Pugnet",
      context: "Cadre structuré pour l'entraînement rhétorique délibéré",
      visual: "count-up",
    },
    {
      number: "2×",
      label: "plus de régions cérébrales activées par la métaphore vs l'énoncé direct",
      source: "Lakoff & Johnson, Métaphores We Live By (1980) — études d'imagerie ultérieures",
      context: "Justification neuroscientifique de la mécanique 4",
      visual: "count-up",
    },
    {
      number: "3/5/25+",
      label: "règle du métronome : phrases de 3 mots, 5 mots, 25+ mots dans chaque paragraphe",
      source: "Analyse Auguste des grands discours (Lincoln, Churchill, MLK, De Gaulle)",
      context: "Architecture rythmique documentable",
      visual: "count-up",
    },
    {
      number: "50",
      label: "métaphores classées par thème — objectif annuel du drill n°4",
      source: "Programme d'entraînement",
      context: "Constitution progressive d'une bibliothèque personnelle utilisable",
      visual: "count-up",
    },
    {
      number: "50",
      label: "cautions historiques (figure + anecdote + citation) — objectif annuel du drill n°5",
      source: "Programme d'entraînement",
      context: "Bibliothèque de cautions par thème (résilience, courage, patience, sacrifice...)",
      visual: "count-up",
    },
    {
      number: "10 min/jour",
      label: "coût d'entraînement du drill n°1 (traducteur : impératifs → témoignages)",
      source: "Fiche entraînement",
      context: "ROI massif en 30 jours de pratique continue",
      visual: "count-up",
    },
    {
      number: "90 jours",
      label: "pour automatiser l'ensemble des 7 mécaniques en réflexe combiné",
      source: "Analogie avec l'apprentissage moteur (Ericsson, deliberate practice)",
      context: "Horizon réaliste de maîtrise",
      visual: "count-up",
    },
    {
      number: "272 mots",
      label: "discours de Gettysburg (Lincoln 1863) — 2 minutes qui ont changé une nation",
      source: "Discours historique documenté",
      context: "Preuve que la brièveté travaillée surpasse le volume",
      visual: "count-up",
    },
    {
      number: "17 minutes",
      label: "durée du discours 'I have a dream' (MLK 1963)",
      source: "March on Washington, 28 août 1963",
      context: "17 minutes travaillées pendant des semaines — anaphore centrale répétée",
      visual: "count-up",
    },
    {
      number: "27 ans",
      label: "Mandela à Robben Island — vérité difficile portée sans haine",
      source: "Biographie Nelson Mandela — Long Walk to Freedom",
      context: "Modèle de caution ultime pour résilience et pardon",
      visual: "count-up",
    },
    {
      number: "16 ans",
      label: "Léonard de Vinci sur La Cène — la patience est un principe rhétorique",
      source: "Histoire de l'art / biographie Léonard",
      context: "Modèle pour la caution 'patience' — travailler dans la durée",
      visual: "count-up",
    },
    {
      number: "7 exercices + 1 méta",
      label: "cadre complet d'entraînement quotidien + méta-exercice hebdomadaire",
      source: "Programme complet",
      context: "Structure d'apprentissage systématique",
      visual: "count-up",
    },
  ],

  // ============================================================
  // 8. COMPARISONS
  // ============================================================
  comparisons: [
    {
      title: "Prescription vs Partage (Mécanique 1)",
      left: {
        label: "Prescription (à éviter)",
        items: [
          "'Il faut que tu...'",
          "'Tu dois...'",
          "'Tu devrais...'",
          "'C'est important de...'",
          "Effet : ferme la défense",
        ],
      },
      right: {
        label: "Partage (à privilégier)",
        items: [
          "'Ce que j'ai compris, c'est que...'",
          "'Ce qui m'a aidé, moi, c'est...'",
          "'J'ai remarqué que...'",
          "'Je crois sincèrement que...'",
          "Effet : ouvre la réflexion",
        ],
      },
    },
    {
      title: "'Tu' vs 'On/Nous' (Mécanique 3)",
      left: {
        label: "'Tu' (met face-à-face)",
        items: [
          "'Tu ne comprends pas'",
          "'Tu fais toujours ça'",
          "'Tu es dans le déni'",
          "'Tu dois te réveiller'",
          "Ressenti : accusation",
        ],
      },
      right: {
        label: "'On/Nous' + vulnérabilité (rejoint)",
        items: [
          "'Nos pensées nous jouent des tours'",
          "'On ne contrôle pas tout, moi le premier'",
          "'Il nous reste peu de temps'",
          "'On est tous embarqués'",
          "Ressenti : inclusion",
        ],
      },
    },
    {
      title: "Instruction vs Métaphore (Mécanique 4)",
      left: {
        label: "Instruction directe",
        items: [
          "'Arrête de comparer présent au passé'",
          "'Ton cerveau finit par le croire'",
          "'Sors de cette logique'",
          "'Avance pas à pas'",
          "Impact cognitif : ×1",
        ],
      },
      right: {
        label: "Métaphore équivalente",
        items: [
          "'On ne marche pas en arrière vers son avenir'",
          "'Ton cerveau te le prouvera, c'est son travail'",
          "'C'est toi qui donnes le micro à cette voix'",
          "'Regarde l'horizon, pas le sillage'",
          "Impact cognitif : ×2 (Lakoff)",
        ],
      },
    },
    {
      title: "Binaire défaitiste vs Distinction libératrice (Mécanique 7)",
      left: {
        label: "Binaire défaitiste (à briser)",
        items: [
          "'C'est foutu'",
          "'Personne ne m'aime'",
          "'J'ai tout raté'",
          "'Je n'y arriverai jamais'",
          "'Tout le monde me trahit'",
        ],
      },
      right: {
        label: "Distinction libératrice",
        items: [
          "'Difficile ≠ foutu'",
          "'Seul à cet instant ≠ inaimable'",
          "'Un échec ≠ une identité'",
          "'Pas encore ≠ jamais'",
          "'Certaines personnes ≠ tout le monde'",
        ],
      },
    },
    {
      title: "Naturel spontané vs Naturel travaillé",
      left: {
        label: "Naturel spontané (mythe)",
        items: [
          "'Je dis ce qui vient'",
          "Premières formulations qui viennent",
          "Souvent maladroit / offensant",
          "Résultat : messages non-reçus",
          "Prétend à la 'sincérité'",
        ],
      },
      right: {
        label: "Naturel travaillé (réalité des grands)",
        items: [
          "Formulations répétées et affinées",
          "MLK relit 'I have a dream' des semaines",
          "Churchill réécrit chaque phrase 20 fois",
          "Apparence de naturel = résultat du travail",
          "Résultat : messages qui passent",
        ],
      },
    },
    {
      title: "Sincérité brute vs Éloquence au service de la vérité",
      left: {
        label: "Sincérité brute (illusion)",
        items: [
          "'Je te dis ce que je pense'",
          "Aucun travail sur la forme",
          "Message non-emballé",
          "Confond honnêteté et brutalité",
          "Récepteur ferme la défense",
        ],
      },
      right: {
        label: "Éloquence (science de l'emballage)",
        items: [
          "'Je te dis ce qui doit être dit, comme il faut le dire'",
          "Travail systématique de la forme",
          "Message calibré pour être reçu",
          "Fond intact + forme optimale",
          "Récepteur peut entendre et intégrer",
        ],
      },
    },
  ],

  // ============================================================
  // 9. DEVICES
  // ============================================================
  devices: [
    {
      name: "Conversion prescription → témoignage (Mécanique 1)",
      example_text: "'Ce que j'ai compris, c'est que le déni retarde la réparation.'",
      effect: "Transformer une leçon en cadeau au lieu de reproche",
      why_it_works: "L'auditeur ne se défend plus contre une prescription — il évalue un témoignage. La posture change avant même le contenu.",
    },
    {
      name: "Formule type du désamorçage (Mécanique 2)",
      example_text: "'Je sais que c'est difficile. Je te le dis quand même parce que je crois que c'est important.'",
      effect: "Désarmer la résistance défensive avant même qu'elle se forme",
      why_it_works: "Reconnaître la difficulté prive l'adversaire de son premier argument. Préciser le pourquoi ancre la légitimité du message.",
    },
    {
      name: "Glissement pronominal + vulnérabilité (Mécanique 3)",
      example_text: "'Nos pensées nous jouent des tours — moi le premier.'",
      effect: "Cesser de pointer du doigt, rejoindre l'autre sur le banc",
      why_it_works: "L'inclusion pronominale + la confession de sa propre vulnérabilité scellent la nouvelle position d'alliance.",
    },
    {
      name: "Métaphore visuelle (Mécanique 4)",
      example_text: "'Regarde l'horizon, pas le sillage.'",
      effect: "Faire sentir au lieu d'énoncer",
      why_it_works: "Neurosciences (Lakoff) : 2× plus de régions cérébrales activées. L'image devient auto-preuve — l'auditeur la reconnaît comme évidente.",
    },
    {
      name: "Caution historique (Mécanique 5)",
      example_text: "'Mandela, 27 ans à Robben Island — il n'est pas sorti haineux. Ça veut dire quelque chose.'",
      effect: "Universaliser un argument personnel par la trace historique",
      why_it_works: "L'argument cesse d'être personnel et donc rejetable. Il devient un motif historique auquel l'auditeur doit répondre.",
    },
    {
      name: "Phrase courte chirurgicale (Mécanique 6)",
      example_text: "'Toujours. Sans exception.'",
      effect: "Poids par brièveté — obliger à l'arrêt cognitif",
      why_it_works: "Une phrase de 3 mots occupe une unité mémorielle distincte. Elle ne se dissout pas — elle reste.",
    },
    {
      name: "Règle du métronome (Mécanique 6)",
      example_text: "Alternance : phrase longue développe + phrase courte frappe + phrase moyenne module.",
      effect: "Architecture rythmique qui maintient l'attention et augmente la mémorisation",
      why_it_works: "Le cerveau traite mieux les rythmes variés que les rythmes uniformes. Les grands discours sont architecturés rythmiquement.",
    },
    {
      name: "Distinction fondamentale (Mécanique 7)",
      example_text: "'Difficile n'est pas foutu. Et toute la différence est là.'",
      effect: "Briser la binaire défaitiste tout en validant la souffrance",
      why_it_works: "Ni déni ni défaitisme. La distinction conceptuelle est l'outil central de la TCC (Beck) — validé 40 ans.",
    },
    {
      name: "Reprise itérative (anaphore travaillée)",
      example_text: "'I have a dream that... I have a dream that... I have a dream today.'",
      effect: "Ancrage mémoriel + effet de crescendo",
      why_it_works: "L'anaphore est le device rhétorique le plus puissant identifié depuis Aristote. Répétition contrôlée = mémorisation garantie.",
    },
    {
      name: "Double négation constructive",
      example_text: "'C'est l'inverse du déni ET l'inverse du défaitisme.'",
      effect: "Poser une position en écartant les deux impasses opposées",
      why_it_works: "L'auditeur est ancré au centre. La double négation empêche le déplacement vers un extrême.",
    },
    {
      name: "Question de clôture réflexive (Mode Bleu)",
      example_text: "'La vérité la plus utile que tu te dois est peut-être celle que tu te dois à toi-même. Laquelle ?'",
      effect: "Retourner la question de la rhétorique sur soi",
      why_it_works: "L'auditeur qui a suivi le raisonnement se retourne sur sa propre pratique. Auto-évaluation = début du changement.",
    },
    {
      name: "Aphorisme de clôture (méta-message)",
      example_text: "'L'éloquence n'est pas un don. C'est une science. Et elle se travaille.'",
      effect: "Conclusion mémorable qui condense le message + appelle à l'action",
      why_it_works: "Triade en gradation (négation + affirmation + implication). Structure aristotélicienne pure — mémorisable en 3 secondes.",
    },
  ],

  // ============================================================
  // 10. ANALOGIES
  // ============================================================
  analogies: [
    {
      source: "Le chirurgien qui calibre l'annonce d'un diagnostic",
      used_for: "Distinguer manipulation (contre l'intérêt) et éloquence (au service de la vérité)",
      strength: 10,
      why_it_works: "Analogie médicale universelle. Personne ne conteste que le chirurgien qui calibre son annonce est éthique. Le transfert vers la rhétorique est immédiat.",
    },
    {
      source: "Le jazzman après 10 000 heures",
      used_for: "Prouver que le naturel apparent est le résultat d'un travail invisible",
      strength: 8,
      why_it_works: "La musique est une analogie noble universellement admise. Personne ne dit à Miles Davis 'sois plus spontané'.",
    },
    {
      source: "La conduite automobile",
      used_for: "Prouver que la combinaison de mécaniques s'automatise après 90 jours",
      strength: 9,
      why_it_works: "Chacun a fait l'expérience de l'apprentissage de la conduite. La comparaison est instantanément parlante.",
    },
    {
      source: "Léonard de Vinci — 16 ans sur La Cène",
      used_for: "Prouver que la patience est un principe rhétorique",
      strength: 7,
      why_it_works: "Chef-d'œuvre universellement reconnu. La durée du travail défie l'illusion du 'don spontané'.",
    },
    {
      source: "Mandela — 27 ans sans haine",
      used_for: "Modèle de résilience + de vérité difficile portée sans destruction",
      strength: 10,
      why_it_works: "Autorité morale universellement reconnue. Impossible à contester. Modèle absolu pour la maîtrise émotionnelle au service de la vérité.",
    },
    {
      source: "Viktor Frankl — la découverte du sens dans les camps",
      used_for: "Prouver que la vérité peut naître même de la souffrance extrême",
      strength: 8,
      why_it_works: "Cas historique documenté. Frankl a articulé une leçon universelle à partir de l'expérience-limite. Modèle pour l'éloquence issue de la vie.",
    },
    {
      source: "Marc Aurèle — Pensées pour moi-même",
      used_for: "Modèle de discipline rhétorique quotidienne (le journal comme forge)",
      strength: 8,
      why_it_works: "Pratique historique documentée. L'empereur philosophe qui note chaque jour pour affiner sa pensée = archétype du travail rhétorique.",
    },
    {
      source: "Churchill — 'We shall fight on the beaches'",
      used_for: "Prouver que la brièveté travaillée peut sauver un peuple",
      strength: 9,
      why_it_works: "36 mots qui restent 85 ans plus tard. Impossible d'oublier une fois entendus. Modèle de rythme + anaphore + gradation.",
    },
  ],

  // ============================================================
  // 11. FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "Les 7 mécaniques (cadre complet)",
      when_to_use: "Chaque fois qu'une vérité difficile doit être communiquée à un tiers",
      steps: [
        "1. POSTURE : convertir prescription en témoignage ('Ce que j'ai compris')",
        "2. DÉSAMORÇAGE : reconnaître difficulté + préciser pourquoi ('Je sais que c'est difficile — je le dis quand même parce que Y')",
        "3. GLISSEMENT : 'tu' → 'on/nous' + vulnérabilité ('moi le premier')",
        "4. MÉTAPHORE : remplacer instruction par image ('Regarde l'horizon, pas le sillage')",
        "5. CAUTION : convoquer figure historique adéquate au thème",
        "6. RYTHME : alterner phrases courtes/longues (règle 3/5/25+)",
        "7. NUANCE : briser les binaires par la distinction ('Difficile ≠ foutu')",
      ],
      warning: "Ne pas viser à combiner les 7 dès le départ — automatiser une par semaine avec le drill dédié.",
    },
    {
      name: "Le triangle de l'emballage",
      when_to_use: "Décider quelle mécanique privilégier selon le contexte",
      steps: [
        "AUDITOIRE : plus fragile → renforcer désamorçage + glissement",
        "SUJET : plus tabou → renforcer métaphore + caution",
        "CANAL : écrit → renforcer rythme + nuance ; oral → renforcer posture + glissement",
        "Combiner 3 mécaniques minimum pour toute vérité difficile",
        "Ne jamais transmettre une vérité 'nue' sans au moins désamorçage + métaphore",
      ],
      warning: "L'excès de mécaniques dilue autant que leur absence — 3 bien exécutées valent mieux que 7 mal calibrées.",
    },
    {
      name: "Le protocole 'communication réussie'",
      when_to_use: "Évaluer si un message difficile est passé",
      steps: [
        "Signal 1 : L'interlocuteur reformule spontanément avec ses propres mots",
        "Signal 2 : Il pose une question ouverte au lieu d'objecter",
        "Signal 3 : Il revient sur le sujet le lendemain sans être relancé",
        "Si 0/3 signaux : le message n'est pas passé — recommencer avec mécanique différente",
        "Si 1-2/3 : message reçu partiellement — poursuivre l'échange",
        "Si 3/3 : message intégré — passer à l'action attendue",
      ],
      warning: "Ne pas juger sur la réaction immédiate — l'intégration prend souvent 24-48h.",
    },
    {
      name: "La constitution des bibliothèques",
      when_to_use: "Programme d'entraînement long (6-12 mois)",
      steps: [
        "MÉTAPHORES : 5 par semaine, classées par thème → 50 fiches / an",
        "CAUTIONS : 1 figure historique + anecdote + citation par semaine → 50 fiches / an",
        "FORMULES : 3 formules de désamorçage par mois → 36 formules / an",
        "DISTINCTIONS : 1 nouvelle par jour → 365 distinctions / an",
        "Ranger chaque semaine par thème (résilience, patience, courage, sacrifice...)",
      ],
      warning: "La constitution est un investissement long terme — les 3 premiers mois semblent inutiles, puis la bibliothèque devient une arme.",
    },
    {
      name: "Le méta-exercice hebdomadaire",
      when_to_use: "Une fois par semaine pour intégration",
      steps: [
        "Identifier UNE situation réelle difficile à aborder cette semaine",
        "Écrire la version brute (ce que tu dirais spontanément)",
        "Appliquer les 7 mécaniques dans l'ordre",
        "Écrire la version travaillée",
        "Comparer les deux versions — noter les différences",
        "Identifier : la mécanique qui apporte le plus (ton point fort) + celle qui te résiste le plus (ton entraînement prioritaire)",
      ],
      warning: "Ne pas sauter cet exercice — c'est là que l'automatisation se produit vraiment.",
    },
    {
      name: "Le calendrier d'entraînement 90 jours",
      when_to_use: "Programme d'automatisation complet",
      steps: [
        "Semaine 1-2 : Mécanique 1 (posture) - drill 'traducteur' 10 min/jour",
        "Semaine 3-4 : Mécanique 2 (désamorçage) - drill 'désamorceur' 5 min/message difficile",
        "Semaine 5-6 : Mécanique 3 (glissement) - drill 'pronom-shifter' 10 min × 3/semaine",
        "Semaine 7-8 : Mécanique 4 (métaphore) - drill 'forge' 20 min/lundi + constitution bibliothèque",
        "Semaine 9-10 : Mécanique 5 (caution) - drill 'bibliothèque' 1 fiche/semaine",
        "Semaine 11 : Mécanique 6 (rythme) - drill 'métronome' 5 min/jour",
        "Semaine 12 : Mécanique 7 (nuance) - drill 'distinction' 3 min/jour",
        "Semaine 13 : Intégration et méta-exercice combiné",
      ],
      warning: "Rester une semaine par mécanique — ne pas accélérer. L'automatisation demande le temps de la répétition.",
    },
  ],

  // ============================================================
  // 12. DRILLS
  // ============================================================
  drills: [
    {
      name: "Drill 1 — Le traducteur (Posture)",
      duration: "10 min/jour × 14 jours",
      instructions: [
        "Chaque soir, prendre 10 phrases de la journée contenant 'il faut', 'tu dois', 'tu devrais'",
        "Sources : conversations WhatsApp, mails envoyés, notes vocales",
        "Réécrire chacune en témoignage : 'Ce que j'ai compris', 'Ce qui m'a aidé, moi'",
        "Comparer version prescription / version témoignage à voix haute",
        "Après 7 jours : identifier les 3 formes que tu utilises le plus. Ce sont tes patterns à casser",
      ],
      difficulty: 2,
    },
    {
      name: "Drill 2 — Le désamorceur",
      duration: "5 min avant chaque message difficile × 30 jours",
      instructions: [
        "Avant chaque message difficile (professionnel ou personnel), écrire :",
        "1 phrase qui reconnaît la difficulté",
        "1 phrase qui précise pourquoi tu le dis quand même",
        "Puis seulement écrire le message principal",
        "Test : envoyer 5 messages sans désamorçage et 5 avec — noter les réponses obtenues",
      ],
      difficulty: 3,
    },
    {
      name: "Drill 3 — Le pronom-shifter",
      duration: "10 min × 3/semaine × 4 semaines",
      instructions: [
        "Prendre un texte que tu as écrit en 'tu' (email, note, WhatsApp)",
        "Réécrire intégralement en 'on/nous', avec au moins une phrase de vulnérabilité personnelle",
        "Lire les deux versions à voix haute",
        "Noter la sensation corporelle produite par chacune",
        "Semaine 4 : tester en conversation réelle et observer les réactions",
      ],
      difficulty: 3,
    },
    {
      name: "Drill 4 — Forge de métaphores",
      duration: "20 min chaque lundi × 52 semaines",
      instructions: [
        "Chaque lundi, choisir un concept abstrait (passé, peur, doute, estime, colère...)",
        "Produire 5 métaphores différentes pour ce concept",
        "Garder la plus forte, classer dans un carnet par thème",
        "Test hebdomadaire : utiliser la nouvelle métaphore au moins 3 fois dans la semaine",
        "Objectif annuel : 50 métaphores classées prêtes à mobiliser",
      ],
      difficulty: 4,
    },
    {
      name: "Drill 5 — Bibliothèque des cautions",
      duration: "1 fiche par semaine × 52 semaines",
      instructions: [
        "Chaque semaine, choisir un thème (résilience, courage, patience, sacrifice, discipline...)",
        "Trouver 1 figure historique + 1 anecdote précise + 1 citation vérifiée",
        "Vérifier la citation dans une source primaire (pas Wikipédia générique)",
        "Ranger la fiche par thème",
        "Objectif annuel : 50 fiches classées disponibles en temps réel",
      ],
      difficulty: 4,
    },
    {
      name: "Drill 6 — Le métronome",
      duration: "5 min/jour × 21 jours",
      instructions: [
        "Chaque jour, prendre un paragraphe de tes écrits (ou notes vocales)",
        "Réécrire en respectant la règle : au moins 1 phrase de 3 mots + 1 de 5 mots + 1 de 25+ mots",
        "Lire à voix haute, enregistrer",
        "Réécouter le lendemain — la version rythmée est-elle plus mémorable ?",
        "Après 21 jours : la règle du métronome devient automatique à l'écriture",
      ],
      difficulty: 3,
    },
    {
      name: "Drill 7 — La nuance fondamentale",
      duration: "3 min/jour × 30 jours",
      instructions: [
        "Identifier chaque jour UNE pensée binaire entendue ou pensée (chez toi ou chez un autre)",
        "Produire la distinction conceptuelle qui la brise",
        "Formuler avec le patron : 'X ≠ Y — et toute la différence est là'",
        "S'entraîner à formuler en moins de 10 secondes",
        "Après 30 jours : automatisme de la nuance en conversation",
      ],
      difficulty: 3,
    },
    {
      name: "Méta-exercice hebdomadaire",
      duration: "1 fois par semaine × ongoing",
      instructions: [
        "Chaque dimanche, identifier UNE situation réelle difficile de la semaine à venir",
        "Écrire la version brute (ce que tu dirais spontanément) — 5 min",
        "Appliquer les 7 mécaniques dans l'ordre — 30 min",
        "Écrire la version travaillée",
        "Comparer et identifier : ton point fort (mécanique qui apporte le plus) + ton entraînement prioritaire (mécanique qui te résiste)",
        "Exécuter le message travaillé dans la vraie situation cette semaine",
      ],
      difficulty: 5,
    },
  ],

  // ============================================================
  // 13. RELATED
  // ============================================================
  related: {
    debates: [
      "taxe-zucman",
      "science-abondance",
      "masculinite-feminisme",
    ],
    videos: [
      "LFJAHZlizAg", // Never tired when winning
      "P4rkjwaa6so",
      "KPbnzSGlAP4",
    ],
  },
};

// Register into global registry
if (typeof CONTENT_DEBATES_REGISTRY !== 'undefined') CONTENT_DEBATES_REGISTRY["rhetorique-verites-difficiles"] = CONTENT_DEBATES_rhetorique_verites_difficiles;
