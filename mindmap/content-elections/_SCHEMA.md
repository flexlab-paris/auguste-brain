# Schema — Présidentielle 2027, analyse des programmes

Chaque candidat/programme = un fichier JS `/mindmap/content-elections/{id}.js`. Objectif : dashboard d'étude rigoureux — thèses, contre-thèses, propositions avec pros/cons, sophismes, données fausses ou infondées, idées fortes récupérables.

```javascript
const CONTENT_ELECTIONS_{ID} = {   // {ID} = id avec tirets remplacés par underscores
  id: "bardella-rn",
  name: "Jordan Bardella",
  party: "Rassemblement National",
  bloc: "extreme-droite",   // extreme-droite | droite | centre-droit | centre | centre-gauche | gauche | extreme-gauche
  spectrum: 8.5,            // -10 extrême gauche … +10 extrême droite
  status: "probable",       // déclaré | probable | incertain
  status_note: "Contexte : condamnation Le Pen, appel, etc. — daté et sourcé",
  color: "#0f2d5c",         // couleur parti pour visualisations

  // ---- Thèse centrale et contre-thèse ----
  thesis: "La thèse centrale du programme en 2-3 phrases — la vision du monde qui structure tout.",
  counter_thesis: "Le STEELMAN du camp adverse : l'argument le plus fort CONTRE ce programme, formulé honnêtement.",

  program_pillars: ["pilier 1", "pilier 2", "..."],   // 4-6 piliers

  // ---- Propositions détaillées (8-14 par candidat) ----
  proposals: [
    {
      title: "Titre court de la mesure",
      domain: "économie",   // économie | immigration | écologie | institutions | social | sécurité | europe | santé | éducation | international
      detail: "Description précise de la mesure telle que proposée.",
      pros: ["avantage 1", "avantage 2", "..."],       // 2-4, honnêtes même si on est en désaccord
      cons: ["inconvénient 1", "..."],                  // 2-4, honnêtes même si on est d'accord
      plausibility: 4,       // 1-10 : faisabilité réelle (constitution, UE, budget, délais)
      plausibility_note: "Pourquoi ce score : obstacle constitutionnel / droit UE / coût / précédent",
      cost_estimate: "Chiffrage si disponible + source (IFRAP, Institut Montaigne, chiffrage candidat, etc.)"
    }
  ],

  // ---- Raisonnements fallacieux (4-8) ----
  fallacies: [
    {
      claim: "L'affirmation exacte ou paraphrase fidèle",
      fallacy_type: "corrélation/causalité | épouvantail | fausse dichotomie | cherry-picking | pente glissante | appel à la peur | généralisation abusive | ...",
      why_fallacious: "Le mécanisme du sophisme",
      correction: "Ce qu'une analyse rigoureuse dirait",
      severity: "high | medium | low"
    }
  ],

  // ---- Données fausses, exagérées ou infondées (3-6) ----
  data_issues: [
    {
      claim: "Le chiffre ou fait avancé",
      problem: "faux | exagéré | invérifiable | sorti de contexte | obsolète",
      reality: "La donnée réelle avec précision",
      source: "INSEE / Cour des comptes / Eurostat / fact-checkers (AFP Factuel, Les Décodeurs, CheckNews)…"
    }
  ],

  // ---- Arguments problématiques (3-5) ----
  problematic_arguments: [
    {
      argument: "L'argument tel qu'utilisé",
      why_problematic: "En quoi il pose problème (éthique, factuel, logique)",
      what_it_hides: "Ce que l'argument masque ou évite de traiter"
    }
  ],

  // ---- Idées fortes récupérables (2-5) ----
  strong_ideas: [
    {
      idea: "L'idée solide même vue d'un autre bord",
      why_strong: "Pourquoi elle tient la route (données, précédents étrangers)",
      adoptable_by: "Quels autres blocs pourraient la reprendre et comment"
    }
  ],

  electorate: "Sociologie de l'électorat en 2-3 phrases (âge, CSP, géographie).",
  key_quotes: [ { text: "citation exacte", context: "où/quand", source: "média, date" } ],   // 3-6
  sources: ["URLs et références consultées"]
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["bardella-rn"] = CONTENT_ELECTIONS_{ID};
```

## Fichier consolidé — `_consolidated.js`

```javascript
const CONTENT_ELECTIONS_CONSOLIDATED = {
  updated: "2026-07-04",
  best_ideas: [   // 10-15 meilleures idées tous bords confondus
    {
      idea: "Titre de l'idée",
      from: ["candidate-id"],           // qui la porte
      bloc_origin: "gauche",
      why_good: "Pourquoi c'est une bonne idée sur le fond",
      pros: ["..."], cons: ["..."],
      implementation: {
        steps: ["étape 1", "étape 2"],
        cost: "chiffrage",
        timeline: "délai réaliste",
        obstacles: ["obstacle juridique/politique/budgétaire"]
      },
      plausibility: 7
    }
  ],
  cross_analysis: [   // par grand thème (6-9 thèmes)
    {
      theme: "Immigration",
      convergences: "Sur quoi les blocs convergent en réalité",
      divergences: "Le vrai point de clivage",
      fallacy_watch: "Les sophismes récurrents des DEUX camps sur ce thème",
      verdict: "Lecture Auguste : pragmatique, données d'abord"
    }
  ],
  fallacy_patterns: [   // patterns transversaux (5-8)
    { pattern: "Le chiffrage magique", who_uses_it: ["ids"], example: "..." }
  ],
  spectrum_summary: "Lecture d'ensemble du paysage 2027 en 5-8 phrases."
};

if (typeof CONTENT_ELECTIONS_REGISTRY !== 'undefined') CONTENT_ELECTIONS_REGISTRY["_consolidated"] = CONTENT_ELECTIONS_CONSOLIDATED;
```

## Exigences qualité

- **WebSearch obligatoire** : les programmes 2027 évoluent — vérifier l'état ACTUEL (juillet 2026) : candidatures déclarées, condamnations, primaires, ruptures.
- **Honnêteté bidirectionnelle** : les pros d'un programme qu'on n'aime pas doivent être réels ; les cons d'un programme qu'on aime aussi.
- **Chaque data_issue sourcée** avec un fact-checker ou un organisme statistique.
- **Chaque fallacy** : mécanisme précis, pas juste « c'est faux ».
- **Plausibilité** : tenir compte de la Constitution, du droit UE, de l'état budgétaire (déficit ~5-6% PIB, dette >110% PIB), des majorités parlementaires possibles.
- Français uniquement. Dense, zéro remplissage.
