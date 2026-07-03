/* =========================================================
   Apprentissage — Dan Koe (HUMAN 3.0 + 1-Day Fix) +
   Andrew Tate (patterns rhétoriques + drills de réécriture)
   ========================================================= */

// ---- Dan Koe : Fix Your Life In 1 Day ----------------------

const dankoe1DayProtocol = {
    intro: {
        thesis: "Tu n'es pas là où tu veux être parce que tu n'es pas la personne qui y serait. Les résolutions changent les actions ; le vrai changement change l'identité d'abord, et le comportement suit.",
        sevenIdeas: [
            { num: "I", titre: "Tu n'es pas là où tu veux car tu n'es pas la personne qui le serait", noyau: "Pour atteindre un résultat, tu dois adopter le style de vie qui le produit AVANT de l'atteindre. Sinon tu reviens en arrière." },
            { num: "II", titre: "Tu n'es pas là où tu veux car tu ne le veux pas vraiment", noyau: "Tout comportement est téléologique. Tes vrais buts sont souvent inconscients : sécurité, prévisibilité, protection contre le jugement." },
            { num: "III", titre: "Tu n'es pas là où tu veux car tu as peur d'y être", noyau: "Ton identité te protège comme un système immunitaire. Changer = mort symbolique du toi actuel." },
            { num: "IV", titre: "La vie que tu veux est à un niveau spécifique de l'esprit", noyau: "9 stades du moi (impulsif → unitif). La plupart oscillent entre 4 et 8. Le mouvement entre eux suit un pattern." },
            { num: "V", titre: "L'intelligence = obtenir ce que tu veux de la vie", noyau: "Formule : agency × opportunity × intelligence. Intelligence = cybernétique : agir → sentir → comparer → réajuster." },
            { num: "VI", titre: "Comment se lancer dans une vie nouvelle en 1 jour", noyau: "Protocole : Anti-Vision → Vision MVP → Interruptions d'autopilotage → Synthèse du soir." },
            { num: "VII", titre: "Transforme ta vie en jeu vidéo", noyau: "6 composants : Anti-vision (enjeu) · Vision (victoire) · Objectif 1 an (mission) · Projet 1 mois (boss fight) · Leviers quotidiens (quêtes) · Contraintes (règles)." }
        ]
    },
    matin: {
        titre: "Partie 1 — Matin · Excavation psychologique (15-30 min)",
        sousSections: [
            {
                titre: "A · Conscience de la douleur actuelle",
                questions: [
                    "Quelle est l'insatisfaction sourde et persistante que j'ai appris à tolérer ?",
                    "De quoi je me plains de manière répétée sans jamais vraiment changer ? (3 plaintes les plus fréquentes de l'année)",
                    "Pour chaque plainte : quelqu'un qui observerait mon comportement (pas mes mots) conclurait que je veux quoi ?",
                    "Quelle vérité sur ma vie actuelle serait insupportable à avouer à quelqu'un que je respecte profondément ?"
                ]
            },
            {
                titre: "B · Anti-Vision (la vie que je refuse)",
                questions: [
                    "Si rien ne change dans les 5 prochaines années : décris un mardi moyen. Où je me réveille ? Que ressent mon corps ? Première pensée ? Qui m'entoure ? Que fais-je entre 9h et 18h ? Comment je me sens à 22h ?",
                    "Idem à 10 ans. Qu'ai-je manqué ? Quelles opportunités fermées ? Qui a abandonné sur moi ? Que dit-on de moi quand je ne suis pas dans la pièce ?",
                    "Fin de ma vie : j'ai vécu la version safe, je n'ai jamais brisé le pattern. Quel a été le prix ? Que ne me suis-je jamais autorisé à sentir, tenter, devenir ?",
                    "Qui dans mon entourage vit déjà ce futur que je viens de décrire ? Que ressens-je en pensant devenir lui ?",
                    "Quelle identité devrais-je abandonner pour vraiment changer ? (« Je suis le type de personne qui... »). Que coûterait-il socialement de ne plus l'être ?",
                    "Quelle est la raison la plus embarrassante pour laquelle je n'ai pas changé ? Celle qui me fait sonner faible, lâche, paresseux plutôt que raisonnable.",
                    "Si mon comportement actuel est une forme d'auto-protection : qu'est-ce que je protège exactement ? Et que me coûte cette protection ?"
                ]
            },
            {
                titre: "C · Vision MVP (la vie que je vise)",
                questions: [
                    "Oublie le réalisme. Si je claquais des doigts et vivais une vie différente dans 3 ans — pas ce qui est réaliste, ce que je VEUX vraiment — un mardi moyen ressemble à quoi ?",
                    "Que devrais-je croire de moi pour que cette vie semble naturelle plutôt que forcée ? Écris : « Je suis le type de personne qui... »",
                    "Quelle est UNE chose que je ferais cette semaine si j'étais déjà cette personne ?"
                ]
            }
        ]
    },
    journee: {
        titre: "Partie 2 — Journée · Interrompre l'autopilotage",
        intro: "Programme des rappels téléphone aléatoires sur ta journée. Inclure la question dans la notif pour relancer la contemplation.",
        rappels: [
            { heure: "11h00", question: "Qu'est-ce que j'évite en faisant ce que je fais en ce moment ?" },
            { heure: "13h30", question: "Si quelqu'un filmait mes 2 dernières heures, qu'en conclurait-il sur ce que je veux de ma vie ?" },
            { heure: "15h15", question: "Suis-je en train d'avancer vers la vie que je déteste, ou vers celle que je veux ?" },
            { heure: "17h00", question: "Quelle est la chose la plus importante que je fais semblant de ne pas trouver importante ?" },
            { heure: "19h30", question: "Qu'ai-je fait aujourd'hui par protection d'identité plutôt que par désir réel ? (indice : presque tout)" },
            { heure: "21h00", question: "Quand me suis-je senti le plus vivant aujourd'hui ? Le plus mort ?" }
        ],
        bonus: [
            "Qu'est-ce qui changerait si j'arrêtais d'avoir besoin que les gens me voient comme [identité du Q5] ?",
            "Où dans ma vie est-ce que j'échange la vivacité contre la sécurité ?",
            "Quelle est la plus petite version de la personne que je veux devenir, que je pourrais être dès demain ?"
        ]
    },
    soir: {
        titre: "Partie 3 — Soir · Synthèse",
        questions: [
            "Après aujourd'hui, qu'est-ce qui me paraît le plus vrai sur la raison pour laquelle j'étais bloqué ?",
            "Quel est l'ennemi réel ? Nomme-le clairement. Pas les circonstances. Pas les autres. Le pattern interne ou la croyance qui dirige le show.",
            "Écris UNE phrase qui capture ce que je refuse que ma vie devienne. (Anti-vision compressée — elle doit faire ressentir quelque chose.)",
            "Écris UNE phrase qui capture ce vers quoi je construis, en sachant que ça va évoluer. (Vision MVP.)",
            "Lentille 1 an : que devra être vrai dans 1 an pour savoir que j'ai brisé l'ancien pattern ? Une chose concrète.",
            "Lentille 1 mois : que devra être vrai dans 1 mois pour que l'objectif 1 an reste possible ?",
            "Lentille du jour : 2-3 actions à timeblocker demain que la personne que je deviens ferait simplement."
        ]
    },
    gameComponents: [
        { label: "Anti-vision", role: "L'enjeu — ce qui arrive si tu lâches", icone: "X" },
        { label: "Vision", role: "Comment tu gagnes — la vie idéale (qui évolue)", icone: "★" },
        { label: "Objectif 1 an", role: "La mission — ta priorité unique", icone: "1Y" },
        { label: "Projet 1 mois", role: "Le boss fight — comment tu gagnes du XP", icone: "1M" },
        { label: "Leviers quotidiens", role: "Les quêtes — actions à fort impact", icone: "▶" },
        { label: "Contraintes", role: "Les règles — limites qui encouragent la créativité", icone: "≡" }
    ]
};

// ---- Dan Koe : HUMAN 3.0 -----------------------------------

const human3 = {
    intro: {
        title: "HUMAN 3.0 — devenir multidimensionnellement développé",
        thesis: "Le développement humain n'est pas une progression linéaire dans des domaines isolés. C'est une évolution interconnectée à travers 4 dimensions fondamentales × 3 niveaux de conscience. La plupart des souffrances viennent du développement partiel — excellence dans un domaine pendant que les autres atrophient.",
        bullets: [
            "4 quadrants · Mind · Body · Spirit · Vocation",
            "3 niveaux · 1.0 Conformiste · 2.0 Individualiste · 3.0 Synthétiseur",
            "Phases · X.1 Dissonance · X.2 Incertitude · X.3 Découverte",
            "Channels : périodes d'obsession (1 semaine à plusieurs années) où les limites se dissolvent",
            "Glitches : accélérateurs à haut risque (psychédéliques, IA, pression financière) — utiles SEULEMENT depuis un socle 2.5+"
        ]
    },
    quadrants: {
        mind: {
            label: "MIND",
            sous: "Personnel · Intérieur",
            question: "Comment je donne sens à la réalité ?",
            color: "#4169E1",
            niveaux: {
                "1.0": {
                    archetype: "NPC · Echo · Follower",
                    description: "Pensée en slogans et soundbites, incapable de questionner la sagesse reçue, triggered par les perspectives différentes, mémorisation = compréhension.",
                    falseTransform: "Cite des philosophes, vit inconsciemment. Vocabulaire complexe + pensée binaire."
                },
                "2.0": {
                    archetype: "Player · Skeptic · Analyst",
                    description: "Pensée critique, questionne tout (parfois compulsivement), construit sa propre philosophie, intègre science et raison, métacognition émergente.",
                    falseTransform: "Contrarianisme déguisé en sagesse. Isolement par rejet de toute tradition. Crée un nouveau dogme en rejetant l'ancien."
                },
                "3.0": {
                    archetype: "Creator · Synthesizer · Meta-Mind",
                    description: "Paradoxe comme fondamental, perspective comme outil, crée de nouveaux cadres, intégration de tous les types d'intelligence, maîtrise de la conscience des constructions.",
                    falseTransform: "« Intellectualisme spirituel » — sait tout, n'applique rien. Professeur sans incarnation."
                }
            }
        },
        body: {
            label: "BODY",
            sous: "Personnel · Extérieur",
            question: "Comment j'incarne mon potentiel ?",
            color: "#FF8C00",
            niveaux: {
                "1.0": {
                    archetype: "Couch Potato · Diet Hopper",
                    description: "Manger et bouger inconsciemment, santé = absence de douleur immédiate, suit les modes sans comprendre, déconnexion des signaux du corps.",
                    falseTransform: "Se croit en forme parce que pas malade. Régime d'un mois puis abandon."
                },
                "2.0": {
                    archetype: "Gym Bro · Biohacker · Athlete",
                    description: "Optimisation et tracking, santé comme métrique de performance, protocoles, biohacking, anti-âge comme bataille.",
                    falseTransform: "Selfies parfaits, mobilité fonctionnelle médiocre. Supplements > nutrition de base. Protocoles extrêmes non soutenables."
                },
                "3.0": {
                    archetype: "Integrated Mover · Body Master",
                    description: "Optimisation intuitive, santé = totalité, corps = maître, augmentation avec sagesse, vieillir = raffinement.",
                    falseTransform: "« Embodied mystique » sans hygiène réelle. Confond mouvement libre avec maîtrise."
                }
            }
        },
        spirit: {
            label: "SPIRIT",
            sous: "Collectif · Intérieur",
            question: "Comment je me connecte et crée du sens ?",
            color: "#228B22",
            niveaux: {
                "1.0": {
                    archetype: "True Believer · Fundamentalist · Tribalist",
                    description: "Appartenir = conformité, amour = possession / transaction, Dieu = parent punisseur, sens venant de la validation externe, mort = terreur ultime.",
                    falseTransform: "Codépendance déguisée en amour. Foi aveugle. Hostilité envers les hors-tribu."
                },
                "2.0": {
                    archetype: "Spiritual Shopper · Nihilist · Seeker",
                    description: "Relations = découverte de soi, amour = croissance personnelle, Dieu = choix personnel/rejet, sens = accomplissement, mort = problème à résoudre.",
                    falseTransform: "« Spiritual materialism » : collectionne expériences/profs comme trophées. Toxicité love & light. Bypass du shadow work."
                },
                "3.0": {
                    archetype: "Modern Mystic · Bridge Builder",
                    description: "Relations = pratique, amour = reconnaissance, Dieu = expérience directe, capacité à créer du sens, mort = transformation.",
                    falseTransform: "Faux mystique : revendique des pouvoirs spéciaux, vague quand on demande du concret, dépendance créée chez les autres."
                }
            }
        },
        vocation: {
            label: "VOCATION",
            sous: "Collectif · Extérieur",
            question: "Comment je crée de la valeur et de l'impact ?",
            color: "#DC143C",
            niveaux: {
                "1.0": {
                    archetype: "Clock Puncher · Wage Slave · Cog",
                    description: "Travail = mal nécessaire (stade Job), argent = ressource rare, succès = sécurité, suit des templates de carrière, retraite = seule échappatoire.",
                    falseTransform: "Se plaint mais reste. Confond stabilité et stagnation."
                },
                "2.0": {
                    archetype: "Hustler · Entrepreneur · Grinder",
                    description: "Travail = expression de soi (Carrière), argent = scoreboard, succès = différenciation, crée son propre chemin, indépendance financière comme but.",
                    falseTransform: "Wantrepreneur : cartes de visite, pas de business. Tools sans exécution. Diplômes sans compétence."
                },
                "3.0": {
                    archetype: "Mission-Driven · System Builder · Game Designer",
                    description: "Travail = jeu (Calling réalisé), argent = énergie pour créer, succès = contribution, crée de nouveaux jeux, pensée patrimoniale.",
                    falseTransform: "Faux expert : enseigne sans résultats. Succès sans preuves."
                }
            }
        }
    },
    phases: [
        { code: "X.1", nom: "DISSONANCE", couleur: "#DAA520", description: "Les anciennes manières ne marchent plus. Sentiment de ne pas appartenir au niveau actuel. C'est ici que les Channels peuvent s'ouvrir.", quoiFaire: "Ne pas médicamenter l'inconfort. Journal sur ce qui manque. Remarquer vers quoi je suis tiré. Accepter la confusion comme passage." },
        { code: "X.2", nom: "INCERTITUDE", couleur: "#FF8C00", description: "Identité dissoute, croissance ET vulnérabilité maximales. Il faut entrer dans l'inconnu ou subir plus de douleur.", quoiFaire: "Esprit « je ne sais pas ». Petites expériences, feedback rapide. Stabilité minimale conservée. Trouver des mentors d'incertitude. Faire confiance au process." },
        { code: "X.3", nom: "DÉCOUVERTE", couleur: "#228B22", description: "Nouveaux patterns stabilisés à une complexité supérieure. Nouvelle identité solidifie. Clarté et enjouement pic.", quoiFaire: "Documenter ce qui a marché. Identifier les principes-clés. Construire des pratiques soutenables. Partager. Préparer le prochain cycle." }
    ],
    channels: {
        title: "CHANNELS — accélérateurs naturels",
        intro: "Périodes d'obsession productive (1 semaine à plusieurs années) où les limites normales se dissolvent. Activables surtout en phase X.1.",
        signaux: [
            "Distorsion du temps (heures = minutes)",
            "Focus obsessif sans effort",
            "Pic d'énergie physique",
            "Idées qui arrivent en flot",
            "Besoin de retrait social",
            "Changements de sommeil et d'appétit"
        ],
        triggers: [
            "Crise vitale qui force la croissance",
            "Rencontre d'une personne transformationnelle",
            "Engagement public / accountability",
            "Changement radical d'environnement",
            "Élimination de toutes les distractions",
            "Prendre un projet « impossible »"
        ]
    },
    glitches: {
        title: "GLITCHES — accélérateurs à haut risque",
        intro: "Mécaniques qui peuvent forcer un développement rapide en brisant les contraintes normales de la conscience. Comme exploiter un bug du code de la réalité. Les utiliser sans fondation = stéroïdes sans entraînement.",
        types: [
            { nom: "Psychédéliques", cible: "Spirit (expériences mystiques)" },
            { nom: "PEDs", cible: "Body (performance, mais coût durable)" },
            { nom: "Pression financière", cible: "Vocation (deadline qui force la croissance)" },
            { nom: "Rupture / déménagement / pivot", cible: "Identité (force la mort symbolique)" },
            { nom: "IA — le méta-glitch", cible: "TOUS les quadrants à la fois" }
        ],
        aiWarnings: [
            "Atrophie cognitive : externaliser la pensée",
            "Confusion d'identité : ne plus distinguer soi et IA",
            "Dissociation : vivre dans une réalité IA-médiée",
            "Illusion de capacité : prendre les pouvoirs de l'IA pour les siens",
            "Dépendance : ne plus pouvoir fonctionner sans"
        ],
        regle: "Niveau 1.0 + Glitch = condamnation. Niveau 2.5+ + Glitch = risque calculé. Toujours : préparation extensive, stratégie de sortie, objectif clair."
    },
    archetypes: [
        { nom: "Le Workaholic", patron: "Vocation surdéveloppée", cout: "Santé / vide émotionnel / vide spirituel", chemin: "Déléguer 20% → investir dans Body → découvrir Spirit → intégrer Mind" },
        { nom: "Le Seeker", patron: "Spirit surdéveloppée", cout: "Instabilité financière, théories non ancrées, échec d'implémentation", chemin: "Choisir UNE pratique → 90 jours → ancrer dans Vocation → renforcer Body" },
        { nom: "L'Optimizer", patron: "Mind surdéveloppé", cout: "Pas d'exécution, isolation sociale, négligence physique", chemin: "Expédier un truc imparfait → apprendre du feedback → se connecter → incarner" },
        { nom: "L'Athlete", patron: "Body surdéveloppé", cout: "Atrophie cognitive, suppression émotionnelle, absence de but", chemin: "Entraîner les autres → étudier la méthodologie → explorer le sens → créer de la valeur" },
        { nom: "Le Drifter", patron: "Tout sous-développé", cout: "Pas de momentum, pas d'expertise, pas de stabilité", chemin: "Choisir UN quadrant → 90 jours → fondation → expansion lente" },
        { nom: "Le Specialist", patron: "Un quadrant world-class, les autres infantiles", cout: "Succès fragile, perspective étroite, vulnérabilité en cascade", chemin: "Appliquer la méthode d'excellence au quadrant le plus faible" }
    ],
    metatypes: [
        { nom: "L'Executive", combo: "Mind + Vocation", forces: "Pensée stratégique, building système, création de valeur", carence: "Cécité émotionnelle, négligence physique, absence de sens" },
        { nom: "Le Warrior Monk", combo: "Body + Spirit", forces: "Pratique disciplinée, présence incarnée, service", carence: "Lutte financière, simplicité intellectuelle, naïveté de marché" },
        { nom: "Le Professor", combo: "Mind + Spirit", forces: "Compréhension profonde, sens, sagesse", carence: "Fragilité physique, instabilité financière, échec d'exécution" },
        { nom: "L'Entrepreneur", combo: "Body + Vocation", forces: "Exécution, succès marché, énergie abondante", carence: "Pensée superficielle, pauvreté relationnelle, déficit de sens" },
        { nom: "Le Titan", combo: "Mind + Body + Vocation", forces: "Exécution puissante, domination stratégique, ressources", carence: "Vide spirituel, pauvreté relationnelle" },
        { nom: "Le Sage Operator", combo: "Mind + Spirit + Vocation", forces: "Stratégie sage, travail signifiant, impact systémique", carence: "Fragilité physique, limites d'énergie" },
        { nom: "L'Embodied Mystic", combo: "Body + Spirit + Vocation", forces: "Service ancré, pratique soutenable, énergie", carence: "Limites cognitives, cécité stratégique" },
        { nom: "Le Renaissance Human", combo: "Tous quadrants", forces: "Intégration fluide, équilibre naturel, excellence sans effort", carence: "Peut manquer d'expertise extrême dans un domaine" }
    ]
};

// ---- Andrew Tate : Patterns rhétoriques --------------------

const tatePatterns = {
    intro: {
        title: "Pourquoi Andrew Tate « marche » rhétoriquement (au-delà du fond)",
        these: "Tate ne prouve pas, il décrète. Sa conviction vient de la cadence, pas de l'argument. Les patterns ci-dessous sont des STRUCTURES — tu peux les réutiliser pour porter des contenus que tu valides, sans reprendre l'idéologie. La forme est neutre, le fond est ton choix.",
        sources: [
            { titre: "« The Version Of You That's Waiting »", url: "https://youtu.be/KPbnzSGlAP4", id: "KPbnzSGlAP4" },
            { titre: "« How to Become a High Value Man »", url: "https://youtu.be/h9wod4mPHZw", id: "h9wod4mPHZw" }
        ]
    },
    structures: [
        {
            nom: "L'expérience de pensée du multivers",
            fonction: "Cadre visuel/projectif",
            template: "« Dans [autre dimension / chronologie alternative / version possible], il existe une version de toi qui [vertu absolue]. Ce n'est pas un fantasme. Elle est réelle, simplement non actualisée. Tu ne deviens pas — tu la rejoins. »",
            exemple: "« There's a version of you that never sleeps in, never skips training, never wastes time. In the multiverse, he is a greater person than you can even fathom. »",
            mecanique: "Matérialiser le soi-supérieur comme entité déjà existante = honte tangible + boussole. Plus puissant qu'un « tu devrais ».",
            reutilisation: "Pour visualiser une discipline manquante. Marche aussi pour : la version de toi qui a lu 100 livres, qui n'a jamais menti, qui a tenu sa parole 365 fois."
        },
        {
            nom: "Le diagnostic insultant-protecteur",
            fonction: "Faire passer la responsabilité sans détruire l'estime",
            template: "« Tu n'es pas [défaut grave qui détruirait l'estime]. Tu es [défaut volontaire que tu peux changer]. »",
            exemple: "« You are not stupid, you are not incompetent — you are lazy and arrogant. »",
            mecanique: "Disculper sur les capacités (intelligence, talent) pour mieux accuser sur la volonté. Rend la responsabilité acceptable car réversible.",
            reutilisation: "« Tu n'es pas faible, tu es non-entraîné. » / « Tu n'es pas seul, tu te caches. » / « Tu n'es pas en retard, tu es à côté. »"
        },
        {
            nom: "Anaphore en cascade — éliminer l'échappatoire",
            fonction: "Couper toutes les sorties conditionnelles",
            template: "« Si tu es [contexte A], tu devrais [action]. Si tu es [contexte B], tu devrais [action]. Si tu es [contexte C], tu devrais [action]. »",
            exemple: "« If you're in jail, you should train. If you are free, you should train. If you are tired, you should train. If you are full of energy, you should train. »",
            mecanique: "Chaque conjonction recouvre une excuse possible. À la fin, il ne reste plus aucune sortie. Le « always » devient inéluctable.",
            reutilisation: "« Si t'as 5 min, écris. Si t'en as 5 heures, écris. Si t'es en forme, écris. Si t'es cassé, écris. »"
        },
        {
            nom: "L'analogie pop-culturelle pour vérité dure",
            fonction: "Faire passer une vérité dure via un référent que personne ne discute",
            template: "« [Figure mythique / populaire] est [grande chose] PARCE QUE [événement douloureux]. Sans ça, pas de [grandeur]. »",
            exemple: "« Batman is Batman because they killed his parents. If they did not kill his parents, he would not be Batman. »",
            mecanique: "Convoque une figure que tout le monde a déjà cadrée comme « grande » → transfert du cadre vers ta thèse. Plus efficace qu'une stat.",
            reutilisation: "« Hercule fait 12 travaux parce qu'il a tué ses enfants. Sans la faute, pas d'odyssée. » / « Nelson Mandela existe parce qu'il a fait 27 ans. »"
        },
        {
            nom: "Argument économique appliqué à la morale",
            fonction: "Importer la rareté du marché dans la psychologie",
            template: "« Si tout le monde [faisait X], [X] ne vaudrait plus rien. La difficulté EST ce qui crée la valeur. »",
            exemple: "« If all 100 made it to the end and the gold was divided by 100, it wouldn't be worth anything. The difficulty gives it value. »",
            mecanique: "Court-circuite le « pourquoi est-ce dur ? » en répondant : la dureté n'est pas un défaut, c'est LA fonction. Inversion économique brutale.",
            reutilisation: "« Si tout le monde tenait parole, la parole ne vaudrait rien. La rareté de la tenue donne sa valeur. »"
        },
        {
            nom: "Le paradoxe inversé (stoïco-épicurien)",
            fonction: "Élégance philosophique mémorable",
            template: "« Oublie [but direct] pour devenir [but direct]. Poursuis [but indirect], et tu obtiendras [but direct] en sous-produit. »",
            exemple: "« If you stop caring about being happy, and you start caring about being great, you end up great. And you end up happy. »",
            mecanique: "Active la même structure que tous les grands paradoxes (Marc Aurèle, Lao Tseu) : poursuivre = perdre, lâcher = obtenir.",
            reutilisation: "« Oublie qu'on t'aime, deviens aimable. » / « Oublie d'avoir raison, deviens vrai. »"
        },
        {
            nom: "Tricolon brutal performatif",
            fonction: "Ce qu'on dit devient vrai en le disant",
            template: "« Je suis [trait]. Je suis [trait]. Je suis [trait]. »",
            exemple: "« I am brilliant because I've decided to be brilliant. »",
            mecanique: "La répétition crée la croyance. Le rythme à 3 temps est neurologiquement satisfaisant. Aucune justification = signal de pouvoir.",
            reutilisation: "« Je suis prêt. Je suis présent. Je suis précis. » À utiliser avant entrée en scène / décision lourde."
        },
        {
            nom: "Reductio ad genericum — séparation tranchée",
            fonction: "Memorable parce qu'il polarise",
            template: "« Seuls [groupe disqualifié] [comportement à éviter]. Un vrai [identité visée] ne fait pas ça. »",
            exemple: "« The only people who get to live their lives based on how they feel are women and children. »",
            mecanique: "Établit un cadre d'exclusion : tu es soit dans le groupe noble, soit dans le groupe inférieur. La mémorabilité vient du tranchant.",
            reutilisation: "ATTENTION — pattern à manier avec soin. Forme : « Seuls [ceux qui ne réfléchissent pas] [comportement bas]. Le penseur sérieux ne ___. » À utiliser sur des catégories de comportement, PAS sur des catégories de personnes."
        },
        {
            nom: "Hypothèse contrefactuelle visuelle",
            fonction: "Créer une honte tangible",
            template: "« Si tu avais [fait X] pendant [période], imagine [résultat visualisable]. Tu ne l'as pas fait. C'est ça que tu as choisi. »",
            exemple: "« If you had done those things for the last 2 years… imagine the car you would drive, the life you would have. »",
            mecanique: "Convertit l'inaction passée en image présente du « pas-soi ». Plus dur que la culpabilité : le regret rendu visuel.",
            reutilisation: "« Si tu avais écrit 200 mots par jour depuis 2 ans, tu aurais 4 livres. Tu n'en as pas un. »"
        },
        {
            nom: "Antithèse binaire forcée",
            fonction: "Forcer le choix de camp",
            template: "« [Bien] ou [Mal]. [Bien] ou [Mal]. [Bien] ou [Mal]. »",
            exemple: "« Comfort or greatness. Safety or legacy. Distraction or domination. »",
            mecanique: "Le rythme empêche la nuance. À la fin, le silence demande une réponse : « Lequel ? ». Pas d'option « les deux ».",
            reutilisation: "« Travail ou théorie. Geste ou commentaire. Décision ou hésitation. »"
        },
        {
            nom: "Métaphore alchimique de la douleur",
            fonction: "Reformuler le malheur",
            template: "« [Douleur] n'est pas un obstacle. C'est un INGRÉDIENT. Sans elle, la réaction n'a pas lieu. »",
            exemple: "« Pain is one of the elements in the chemical reaction. »",
            mecanique: "Reframe alchimique : la souffrance change de statut, d'ennemi à matière première. Désamorce le « pourquoi moi ? ».",
            reutilisation: "« La trahison n'est pas une attaque. C'est le réactif sans lequel ta clarté n'aurait jamais cristallisé. »"
        },
        {
            nom: "Auto-responsabilité poussée à l'absurde",
            fonction: "Position extrême qui crée des solutions",
            template: "« [Événement incontrôlable] est ta faute. Tu ne pouvais pas le contrôler ? Tu pouvais [préparation X]. »",
            exemple: "« If it rains outside and you get wet, that is your fault. Could you have brought an umbrella? Yes. »",
            mecanique: "Volontairement faux logiquement, mais utile mentalement : assumer la responsabilité = générer des options. C'est un mental model, pas une vérité.",
            reutilisation: "« Le marché a craché ? Ta faute. Tu pouvais te diversifier. Tu ne pouvais pas prévoir ? Si — c'était dans les pages. »"
        },
        {
            nom: "Ignorer comme acte de pouvoir suprême",
            fonction: "Recadrer la passivité en démonstration de hauteur",
            template: "« Le vrai pouvoir [remarque] peut-être. Mais il ne S'EN SOUCIE PAS. Le geste le plus puissant est d'IGNORER. »",
            exemple: "« Power may notice, but it doesn't care. The most powerful move is ignore. »",
            mecanique: "Inverse la lecture du non-acte : ce n'est plus une faiblesse mais une posture. ATTENTION : ne marche que depuis une position de force réelle.",
            reutilisation: "« Le critique a parlé. Bien. Tu continues. Ne pas répondre = la réponse. »"
        },
        {
            nom: "Mort symbolique de l'ancien soi",
            fonction: "Rite d'initiation transférable",
            template: "« Tu ne peux pas devenir [identité visée] en gardant les habitudes du [identité ancienne]. Tu dois TUER l'ancien d'abord. »",
            exemple: "« You cannot become a high-value man while still entertaining the habits of a low-value one. »",
            mecanique: "Logique d'exclusion mutuelle : pas de coexistence possible entre les deux identités. Force la rupture identitaire (lien avec Dan Koe : identité avant actions).",
            reutilisation: "« Tu ne peux pas devenir orateur en gardant les silences du timide. Tue le timide d'abord. »"
        }
    ],
    procedes: [
        {
            nom: "Anaphore (martèlement)",
            exemple: "« He doesn't wait... He doesn't complain... He doesn't beg... »",
            effet: "Construit un portrait par accumulation. Le lecteur ne discute plus, il enregistre."
        },
        {
            nom: "Asyndète (suppression de conjonctions)",
            exemple: "« No fire, no edge, no direction. »",
            effet: "Accélère, donne le souffle d'un constat sans appel. Pas de virgules-tampons."
        },
        {
            nom: "Apostrophe accusatrice",
            exemple: "« You're sitting there thinking... »",
            effet: "Crée une intimité accusatrice. Le lecteur se sent vu."
        },
        {
            nom: "Argument du miroir",
            exemple: "« One day I walked past a mirror... »",
            effet: "Convertit le récit personnel en moment de bascule transférable au lecteur."
        },
        {
            nom: "Tricolon ascendant",
            exemple: "« He builds, conquers, becomes legendary. »",
            effet: "Clôture mémorable. Le 3e élément doit toujours être plus large que les deux premiers."
        },
        {
            nom: "Métaphore guerrière",
            exemple: "« Sharpened his scars into weapons », « bulletproof », « war »",
            effet: "Recadre l'existence comme champ de bataille. Donne du sens à la friction quotidienne."
        }
    ],
    limites: [
        "Sermon sans données — pure rhétorique d'injonction.",
        "Définitions genrées problématiques (« seules les femmes et enfants vivent selon leurs émotions »).",
        "Survivor bias non thématisé (« je n'ai jamais vu quelqu'un essayer à fond et échouer »).",
        "Auto-responsabilité poussée à l'absurde — utile mentalement, fausse logiquement.",
        "Manichéisme du « haut / bas » : aucune place pour la fatigue légitime, le repos comme stratégie.",
        "Théodicée infalsifiable (« Dieu te prépare ») — peut justifier n'importe quel échec."
    ]
};

// ---- Andrew Tate : Drills de réécriture --------------------

const tateDrills = {
    intro: {
        title: "Drills — apprendre à RE-DIRE en gardant la structure, en changeant l'idéologie",
        these: "Tu n'imites pas Tate. Tu reprends les patterns qui te motivent, et tu y mets TES contenus : entraînement, écriture, oratoire, leadership, éthique. Chaque drill = 1 pattern × 3 sujets de ta vie."
    },
    drills: [
        {
            pattern: "Multivers — la version qui n'a jamais lâché",
            tateOriginal: "« In the multiverse, there's a version of you that never sleeps in, never skips training, never wastes time. »",
            tonAReecrire: [
                { sujet: "Éloquence", template: "« Dans le multivers, il existe une version d'Auguste qui a écrit 1 page par jour depuis ses 18 ans. Aujourd'hui il aurait ___. Ce n'est pas un rêve, c'est une variante de moi non actualisée. »" },
                { sujet: "Entraînement", template: "« Dans le multivers, il y a un Auguste qui n'a jamais sauté une séance Z2. Sa VO2max est ___. Il ne s'agit pas de fantasme : c'est un toi non actualisé. »" },
                { sujet: "Leadership", template: "« Dans le multivers, il y a un fondateur qui a tenu sa parole 100% du temps. Son équipe ___. C'est la version de toi qui te regarde. »" }
            ]
        },
        {
            pattern: "Diagnostic insultant-protecteur",
            tateOriginal: "« You are not stupid, you are not incompetent — you are lazy and arrogant. »",
            tonAReecrire: [
                { sujet: "Éloquence", template: "« Tu n'es pas inintéressant, tu n'es pas creux — tu es non-entraîné et impatient. »" },
                { sujet: "Entraînement", template: "« Tu n'es pas faible, tu n'es pas mal câblé — tu es non-polarisé et non-soutenu. »" },
                { sujet: "Relations", template: "« Tu n'es pas froid, tu n'es pas distant — tu es non-disponible et non-attentif. »" }
            ]
        },
        {
            pattern: "Anaphore en cascade — éliminer les excuses",
            tateOriginal: "« If you're in jail, you should train. If you are free, you should train. »",
            tonAReecrire: [
                { sujet: "Écriture quotidienne", template: "« Si t'as l'inspiration : écris. Si t'es vide : écris. Si t'as 5 min : écris. Si t'as 5 heures : écris. Si t'es heureux : écris. Si t'es brisé : écris. »" },
                { sujet: "Présence vocale", template: "« Si t'es écouté : prononce. Si t'es ignoré : prononce. Si la salle est pleine : prononce. Si elle est vide : prononce. »" }
            ]
        },
        {
            pattern: "Argument économique appliqué à la morale",
            tateOriginal: "« If all 100 made it, the gold wouldn't be worth anything. The difficulty gives it value. »",
            tonAReecrire: [
                { sujet: "Tenue de parole", template: "« Si tout le monde tenait parole, la parole ne vaudrait rien. La rareté donne sa valeur à ton ‹ oui ›. »" },
                { sujet: "Discipline", template: "« Si tout le monde s'entraînait tous les jours, l'entraînement ne distinguerait personne. La désertion des autres EST ta richesse. »" }
            ]
        },
        {
            pattern: "Tricolon performatif",
            tateOriginal: "« I am brilliant because I've decided to be brilliant. »",
            tonAReecrire: [
                { sujet: "Avant entrée en scène", template: "« Je suis prêt. Je suis présent. Je suis précis. »" },
                { sujet: "Avant décision lourde", template: "« Je suis lucide. Je suis libre. Je suis lent. »" },
                { sujet: "Avant ascèse", template: "« Je suis là. Je suis dans le réel. Je suis suffisant. »" }
            ]
        },
        {
            pattern: "Mort symbolique de l'ancien soi",
            tateOriginal: "« You cannot become a high-value man while still entertaining the habits of a low-value one. »",
            tonAReecrire: [
                { sujet: "Identité d'orateur", template: "« Tu ne peux pas devenir orateur en gardant les silences du timide. Tue le timide. »" },
                { sujet: "Identité d'athlète polarisé", template: "« Tu ne peux pas devenir endurant en gardant les Z3 du sprinter agité. Tue le sprinter agité. »" },
                { sujet: "Identité de fondateur", template: "« Tu ne peux pas devenir CEO en gardant les habitudes du contributeur individuel. Tue le contributeur. »" }
            ]
        }
    ]
};

// ---- Render ----------------------------------------------

let learningInitialized = false;
let activeLearningModule = "dankoe-1day";

function renderLearning() {
    if (!learningInitialized) {
        learningInitialized = true;
        document.querySelectorAll('.learning-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.learning-nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeLearningModule = btn.dataset.module;
                renderLearningModule();
            });
        });
    }
    renderLearningModule();
}

function renderLearningModule() {
    const c = document.getElementById('learning-content');
    if (!c) return;
    c.innerHTML = '';
    switch (activeLearningModule) {
        case 'dankoe-1day':   renderDanKoe1Day(c); break;
        case 'dankoe-human3': renderHuman3(c); break;
        case 'tate-patterns': renderTatePatterns(c); break;
        case 'tate-drills':   renderTateDrills(c); break;
    }
    c.scrollTop = 0;
}

function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
}

// ---- Render : Dan Koe 1-Day --------------------------------

function renderDanKoe1Day(c) {
    const d = dankoe1DayProtocol;

    const header = el('header', 'lrn-header');
    header.appendChild(el('div', 'lrn-eyebrow', 'Dan Koe · future/proof'));
    header.appendChild(el('h2', 'lrn-title', 'Fix Your Life In 1 Day'));
    header.appendChild(el('p', 'lrn-lede', d.intro.thesis));
    c.appendChild(header);

    // 7 ideas
    const ideasSection = el('section', 'lrn-section');
    ideasSection.appendChild(el('h3', 'lrn-h3', '7 idées sous-jacentes'));
    const ideasGrid = el('div', 'lrn-ideas-grid');
    d.intro.sevenIdeas.forEach(i => {
        const card = el('div', 'lrn-idea-card');
        card.appendChild(el('div', 'lrn-idea-num', i.num));
        card.appendChild(el('h4', 'lrn-idea-title', i.titre));
        card.appendChild(el('p', 'lrn-idea-body', i.noyau));
        ideasGrid.appendChild(card);
    });
    ideasSection.appendChild(ideasGrid);
    c.appendChild(ideasSection);

    // Morning
    c.appendChild(renderProtocolPart(d.matin, '#DAA520'));
    // Day
    c.appendChild(renderProtocolPart(d.journee, '#FF8C00'));
    // Evening
    c.appendChild(renderProtocolPart(d.soir, '#228B22'));

    // Game components
    const gameSection = el('section', 'lrn-section');
    gameSection.appendChild(el('h3', 'lrn-h3', 'Transforme ta vie en jeu vidéo · les 6 composants'));
    const gameGrid = el('div', 'lrn-game-grid');
    d.gameComponents.forEach(g => {
        const card = el('div', 'lrn-game-card');
        card.appendChild(el('div', 'lrn-game-icon', g.icone));
        card.appendChild(el('div', 'lrn-game-label', g.label));
        card.appendChild(el('div', 'lrn-game-role', g.role));
        gameGrid.appendChild(card);
    });
    gameSection.appendChild(gameGrid);
    c.appendChild(gameSection);
}

function renderProtocolPart(part, color) {
    const sec = el('section', 'lrn-section');
    const heading = el('h3', 'lrn-h3', part.titre);
    heading.style.borderLeftColor = color;
    heading.classList.add('lrn-h3-bordered');
    sec.appendChild(heading);

    if (part.intro) sec.appendChild(el('p', 'lrn-section-intro', part.intro));

    if (part.sousSections) {
        part.sousSections.forEach(ss => {
            sec.appendChild(el('h4', 'lrn-h4', ss.titre));
            const list = el('ol', 'lrn-question-list');
            ss.questions.forEach(q => {
                const li = el('li', 'lrn-question');
                li.textContent = q;
                list.appendChild(li);
            });
            sec.appendChild(list);
        });
    }

    if (part.rappels) {
        const tbl = el('div', 'lrn-timeline');
        part.rappels.forEach(r => {
            const row = el('div', 'lrn-timeline-row');
            row.appendChild(el('div', 'lrn-timeline-time', r.heure));
            row.appendChild(el('div', 'lrn-timeline-q', r.question));
            tbl.appendChild(row);
        });
        sec.appendChild(tbl);
        if (part.bonus) {
            sec.appendChild(el('h4', 'lrn-h4', 'Bonus — pendant les marches/trajets'));
            const list = el('ul', 'lrn-question-list');
            part.bonus.forEach(b => {
                const li = el('li', 'lrn-question');
                li.textContent = b;
                list.appendChild(li);
            });
            sec.appendChild(list);
        }
    }

    if (part.questions) {
        const list = el('ol', 'lrn-question-list');
        part.questions.forEach(q => {
            const li = el('li', 'lrn-question');
            li.textContent = q;
            list.appendChild(li);
        });
        sec.appendChild(list);
    }

    return sec;
}

// ---- Render : HUMAN 3.0 ------------------------------------

function renderHuman3(c) {
    const h = human3;

    const header = el('header', 'lrn-header');
    header.appendChild(el('div', 'lrn-eyebrow', 'Dan Koe · future/proof'));
    header.appendChild(el('h2', 'lrn-title', h.intro.title));
    header.appendChild(el('p', 'lrn-lede', h.intro.thesis));
    const ul = el('ul', 'lrn-bullets');
    h.intro.bullets.forEach(b => {
        const li = el('li', null, b);
        ul.appendChild(li);
    });
    header.appendChild(ul);
    c.appendChild(header);

    // Quadrants
    const qSection = el('section', 'lrn-section');
    qSection.appendChild(el('h3', 'lrn-h3', '4 Quadrants × 3 Niveaux'));
    const qGrid = el('div', 'lrn-quadrants-grid');
    Object.values(h.quadrants).forEach(q => {
        const card = el('div', 'lrn-quadrant');
        card.style.borderTopColor = q.color;
        card.appendChild(el('div', 'lrn-q-label', q.label));
        card.appendChild(el('div', 'lrn-q-sous', q.sous));
        card.appendChild(el('div', 'lrn-q-question', '« ' + q.question + ' »'));
        ['1.0', '2.0', '3.0'].forEach(lvl => {
            const n = q.niveaux[lvl];
            const lvlBlock = el('div', 'lrn-q-level');
            lvlBlock.appendChild(el('div', 'lrn-q-lvl-label', 'Niveau ' + lvl));
            lvlBlock.appendChild(el('div', 'lrn-q-archetype', n.archetype));
            lvlBlock.appendChild(el('div', 'lrn-q-desc', n.description));
            const ft = el('div', 'lrn-q-false');
            ft.innerHTML = '<span class="lrn-q-false-tag">⚠ Faux soi</span> ' + n.falseTransform;
            lvlBlock.appendChild(ft);
            card.appendChild(lvlBlock);
        });
        qGrid.appendChild(card);
    });
    qSection.appendChild(qGrid);
    c.appendChild(qSection);

    // Phases
    const pSection = el('section', 'lrn-section');
    pSection.appendChild(el('h3', 'lrn-h3', 'Les 3 phases dans chaque niveau'));
    const pGrid = el('div', 'lrn-phases-grid');
    h.phases.forEach(p => {
        const card = el('div', 'lrn-phase');
        card.style.borderLeftColor = p.couleur;
        card.appendChild(el('div', 'lrn-phase-code', p.code + ' · ' + p.nom));
        card.appendChild(el('p', 'lrn-phase-desc', p.description));
        const todo = el('div', 'lrn-phase-todo');
        todo.innerHTML = '<strong>Quoi faire :</strong> ' + p.quoiFaire;
        card.appendChild(todo);
        pGrid.appendChild(card);
    });
    pSection.appendChild(pGrid);
    c.appendChild(pSection);

    // Channels & Glitches
    const accSection = el('section', 'lrn-section');
    accSection.appendChild(el('h3', 'lrn-h3', 'Accélérateurs'));
    const accGrid = el('div', 'lrn-acc-grid');

    const chCard = el('div', 'lrn-acc-card lrn-acc-channels');
    chCard.appendChild(el('h4', 'lrn-acc-title', h.channels.title));
    chCard.appendChild(el('p', 'lrn-acc-intro', h.channels.intro));
    chCard.appendChild(el('div', 'lrn-acc-subtitle', 'Signaux d\'entrée'));
    const sigList = el('ul', 'lrn-acc-list');
    h.channels.signaux.forEach(s => { const li = el('li', null, s); sigList.appendChild(li); });
    chCard.appendChild(sigList);
    chCard.appendChild(el('div', 'lrn-acc-subtitle', 'Triggers'));
    const trList = el('ul', 'lrn-acc-list');
    h.channels.triggers.forEach(t => { const li = el('li', null, t); trList.appendChild(li); });
    chCard.appendChild(trList);
    accGrid.appendChild(chCard);

    const glCard = el('div', 'lrn-acc-card lrn-acc-glitches');
    glCard.appendChild(el('h4', 'lrn-acc-title', h.glitches.title));
    glCard.appendChild(el('p', 'lrn-acc-intro', h.glitches.intro));
    const gTypes = el('ul', 'lrn-acc-list');
    h.glitches.types.forEach(t => {
        const li = el('li', null, '<strong>' + t.nom + '</strong> — ' + t.cible);
        gTypes.appendChild(li);
    });
    glCard.appendChild(gTypes);
    glCard.appendChild(el('div', 'lrn-acc-subtitle', 'Risques spécifiques IA'));
    const aiList = el('ul', 'lrn-acc-list');
    h.glitches.aiWarnings.forEach(w => { const li = el('li', null, w); aiList.appendChild(li); });
    glCard.appendChild(aiList);
    const regle = el('div', 'lrn-acc-rule');
    regle.innerHTML = '<strong>Règle d\'or :</strong> ' + h.glitches.regle;
    glCard.appendChild(regle);
    accGrid.appendChild(glCard);

    accSection.appendChild(accGrid);
    c.appendChild(accSection);

    // Archetypes
    const aSection = el('section', 'lrn-section');
    aSection.appendChild(el('h3', 'lrn-h3', 'Archétypes de style de vie'));
    const aGrid = el('div', 'lrn-archetypes-grid');
    h.archetypes.forEach(a => {
        const card = el('div', 'lrn-archetype');
        card.appendChild(el('div', 'lrn-arch-name', a.nom));
        card.appendChild(el('div', 'lrn-arch-pattern', a.patron));
        const cout = el('div', 'lrn-arch-row');
        cout.innerHTML = '<span class="lrn-arch-tag">Coût</span> ' + a.cout;
        card.appendChild(cout);
        const path = el('div', 'lrn-arch-row');
        path.innerHTML = '<span class="lrn-arch-tag">Chemin</span> ' + a.chemin;
        card.appendChild(path);
        aGrid.appendChild(card);
    });
    aSection.appendChild(aGrid);
    c.appendChild(aSection);

    // Metatypes
    const mSection = el('section', 'lrn-section');
    mSection.appendChild(el('h3', 'lrn-h3', 'Metatypes (combinaisons de quadrants)'));
    const mGrid = el('div', 'lrn-metatypes-grid');
    h.metatypes.forEach(m => {
        const card = el('div', 'lrn-metatype');
        card.appendChild(el('div', 'lrn-meta-name', m.nom));
        card.appendChild(el('div', 'lrn-meta-combo', m.combo));
        const f = el('div', 'lrn-meta-row');
        f.innerHTML = '<span class="lrn-meta-tag lrn-meta-tag-up">Forces</span> ' + m.forces;
        card.appendChild(f);
        const c2 = el('div', 'lrn-meta-row');
        c2.innerHTML = '<span class="lrn-meta-tag lrn-meta-tag-down">Carences</span> ' + m.carence;
        card.appendChild(c2);
        mGrid.appendChild(card);
    });
    mSection.appendChild(mGrid);
    c.appendChild(mSection);
}

// ---- Render : Tate Patterns --------------------------------

function renderTatePatterns(c) {
    const t = tatePatterns;

    const header = el('header', 'lrn-header');
    header.appendChild(el('div', 'lrn-eyebrow', 'Andrew Tate · Étude rhétorique'));
    header.appendChild(el('h2', 'lrn-title', t.intro.title));
    header.appendChild(el('p', 'lrn-lede', t.intro.these));
    const sources = el('div', 'lrn-sources');
    t.intro.sources.forEach(s => {
        const a = document.createElement('a');
        a.className = 'lrn-source-link';
        a.href = s.url;
        a.target = '_blank';
        a.textContent = '▸ ' + s.titre;
        sources.appendChild(a);
    });
    header.appendChild(sources);
    c.appendChild(header);

    // Patterns
    const pSection = el('section', 'lrn-section');
    pSection.appendChild(el('h3', 'lrn-h3', '14 structures réutilisables'));
    pSection.appendChild(el('p', 'lrn-section-intro', "Chaque pattern = nom · fonction · template · exemple Tate · mécanique · comment le réutiliser."));
    const pList = el('div', 'lrn-pattern-list');
    t.structures.forEach((s, idx) => {
        const card = el('div', 'lrn-pattern');
        const head = el('div', 'lrn-pattern-head');
        head.appendChild(el('span', 'lrn-pattern-num', String(idx + 1).padStart(2, '0')));
        const t2 = el('div', 'lrn-pattern-titles');
        t2.appendChild(el('div', 'lrn-pattern-name', s.nom));
        t2.appendChild(el('div', 'lrn-pattern-fonction', s.fonction));
        head.appendChild(t2);
        card.appendChild(head);

        const tpl = el('div', 'lrn-pattern-block lrn-pattern-template');
        tpl.innerHTML = '<span class="lrn-pattern-tag">Template</span><div>' + s.template + '</div>';
        card.appendChild(tpl);

        const ex = el('div', 'lrn-pattern-block lrn-pattern-example');
        ex.innerHTML = '<span class="lrn-pattern-tag">Exemple (Tate)</span><div>' + s.exemple + '</div>';
        card.appendChild(ex);

        const mc = el('div', 'lrn-pattern-block');
        mc.innerHTML = '<span class="lrn-pattern-tag">Mécanique</span><div>' + s.mecanique + '</div>';
        card.appendChild(mc);

        const rs = el('div', 'lrn-pattern-block lrn-pattern-reuse');
        rs.innerHTML = '<span class="lrn-pattern-tag">Réutilisation</span><div>' + s.reutilisation + '</div>';
        card.appendChild(rs);

        pList.appendChild(card);
    });
    pSection.appendChild(pList);
    c.appendChild(pSection);

    // Procédés
    const prSection = el('section', 'lrn-section');
    prSection.appendChild(el('h3', 'lrn-h3', 'Procédés stylistiques'));
    const prGrid = el('div', 'lrn-proc-grid');
    t.procedes.forEach(p => {
        const card = el('div', 'lrn-proc');
        card.appendChild(el('div', 'lrn-proc-name', p.nom));
        const ex = el('div', 'lrn-proc-ex');
        ex.innerHTML = '<em>' + p.exemple + '</em>';
        card.appendChild(ex);
        card.appendChild(el('div', 'lrn-proc-effect', p.effet));
        prGrid.appendChild(card);
    });
    prSection.appendChild(prGrid);
    c.appendChild(prSection);

    // Limits
    const lSection = el('section', 'lrn-section lrn-section-warn');
    lSection.appendChild(el('h3', 'lrn-h3', '⚠ Limites & angles critiques (à connaître pour utiliser ces patterns intelligemment)'));
    const lList = el('ul', 'lrn-warn-list');
    t.limites.forEach(li => {
        const item = el('li', null, li);
        lList.appendChild(item);
    });
    lSection.appendChild(lList);
    c.appendChild(lSection);
}

// ---- Render : Tate Drills ----------------------------------

function renderTateDrills(c) {
    const t = tateDrills;

    const header = el('header', 'lrn-header');
    header.appendChild(el('div', 'lrn-eyebrow', 'Drills · Pratique d\'éloquence'));
    header.appendChild(el('h2', 'lrn-title', t.intro.title));
    header.appendChild(el('p', 'lrn-lede', t.intro.these));
    c.appendChild(header);

    t.drills.forEach((drill, idx) => {
        const sec = el('section', 'lrn-drill');
        const head = el('div', 'lrn-drill-head');
        head.appendChild(el('span', 'lrn-drill-num', String(idx + 1).padStart(2, '0')));
        head.appendChild(el('div', 'lrn-drill-title', 'Pattern · ' + drill.pattern));
        sec.appendChild(head);

        const tateOrig = el('div', 'lrn-drill-original');
        tateOrig.innerHTML = '<span class="lrn-drill-tag">Original Tate</span><em>' + drill.tateOriginal + '</em>';
        sec.appendChild(tateOrig);

        const rewrites = el('div', 'lrn-drill-rewrites');
        rewrites.appendChild(el('div', 'lrn-drill-subtitle', 'À toi · transposer sur tes 3 axes'));
        drill.tonAReecrire.forEach(r => {
            const card = el('div', 'lrn-drill-rewrite');
            card.appendChild(el('div', 'lrn-drill-sujet', r.sujet));
            card.appendChild(el('div', 'lrn-drill-template', r.template));
            rewrites.appendChild(card);
        });
        sec.appendChild(rewrites);

        c.appendChild(sec);
    });
}
