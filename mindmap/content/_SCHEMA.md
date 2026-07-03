# Content Schema — deep video analysis

Chaque vidéo Andrew Tate est représentée par un objet JS exporté avec la structure suivante. Objectif : contenu riche, actionable, non redondant, permettant de rendre des visualisations (tree map, infographies, kit d'argumentation, fallacies avec nuances).

```javascript
// /mindmap/content/{VIDEO_ID}.js
const CONTENT_{VIDEO_ID} = {
  id: "LFJAHZlizAg",
  slug: "never-tired-when-winning",
  title: "You're Never Tired When You're Winning",
  speaker: "Andrew Tate",
  format: "interview podcast · table ronde",
  word_count: 7150,
  language: "en",

  // ============================================================
  // 1. EXECUTIVE LAYER
  // ============================================================
  hook: "Une phrase percutante qui ouvre l'attention (max 15 mots).",
  thesis: "La thèse centrale en 1-2 phrases.",
  key_takeaways: [
    "Take-home 1 (impératif, concret, transférable)",
    "Take-home 2",
    "Take-home 3",
    // 5 à 8 take-aways
  ],

  // ============================================================
  // 2. CHAPTERS (structure narrative)
  // ============================================================
  chapters: [
    {
      idx: 1,
      title: "Chapitre 1 - titre court",
      summary: "1-2 phrases sur le contenu du chapitre",
      key_quote: "Une quote emblématique de ce chapitre",
      duration_estimate: "0:00-3:15", // approx
    },
    // 5 à 12 chapitres
  ],

  // ============================================================
  // 3. ARGUMENT TREE (map visualization)
  // ============================================================
  argument_tree: {
    root: {
      claim: "La thèse principale",
      children: [
        {
          claim: "Sub-argument 1",
          type: "premise",  // premise | evidence | analogy | example
          strength: 8, // 1-10 subjectif
          evidence: ["Fact ou observation"],
          children: [
            { claim: "sub-sub", type: "example", strength: 7 }
          ]
        }
      ]
    }
  },

  // ============================================================
  // 4. QUOTES (rich, tagged, sortable)
  // ============================================================
  quotes: [
    {
      text: "The exact quote",
      context: "Prononced when explaining X",
      tags: ["motivation", "reframe", "stoicisme"],
      rhetorical_device: "aphorisme d'ouverture",
      power_score: 9, // 1-10
      chapter_idx: 1,
      highlight_words: ["never tired", "winning"] // pour surligner dans le rendu
    },
    // 20 à 40 quotes
  ],

  // ============================================================
  // 5. ARGUMENTATION KIT (comment redire, défendre, attaquer)
  // ============================================================
  argumentation_kit: {
    how_to_defend: [
      {
        challenge: "Si quelqu'un dit : 'Mais la dépression est une vraie maladie'",
        response: "Comment répondre en gardant la thèse",
        technique: "Reframe : distinguer feeling depressed vs having depression",
        example_response_text: "La vraie response mot pour mot"
      }
    ],
    how_to_attack: [
      {
        target_claim: "Le point faible de la thèse originale",
        attack: "Comment démonter proprement",
        angle: "Empirique | logique | éthique"
      }
    ],
    how_to_rephrase: [
      {
        original: "Version originale hard/vulgaire",
        softer: "Version pour dîner avec les beaux-parents",
        harder: "Version pour combat de rue",
        academic: "Version pour un essai philosophique"
      }
    ],
    if_asked: [
      {
        question: "Est-ce que la dépression est réelle ?",
        best_response: "Response calibrée, 30-60 mots",
        followup_moves: ["Move 1", "Move 2"]
      }
    ]
  },

  // ============================================================
  // 6. FALLACIES & NUANCES (critical thinking layer)
  // ============================================================
  fallacies: [
    {
      original_claim: "Tate's exact claim",
      fallacy_type: "survivor bias | straw man | false dichotomy | ad hominem | slippery slope | appeal to nature | anecdotal evidence | ...",
      why_fallacious: "Explanation de pourquoi c'est douteux",
      steelman: "La version la plus forte du point (charitable read)",
      nuance: "Ce qui est vrai + ce qui est faux",
      counter_argument: "Argument précis à utiliser contre",
      severity: "high | medium | low" // gravité du saut logique
    },
    // 5 à 15 fallacies
  ],

  // ============================================================
  // 7. STATS & INFOGRAPHICS
  // ============================================================
  stats: [
    {
      number: "75%",
      label: "des suicides sont masculins",
      source: "OMS 2024",
      context: "Utilisé pour appuyer l'argument sur la crise masculine",
      visual: "bar" // bar | percent | count-up | comparison
    }
  ],

  comparisons: [
    {
      title: "Boys vs Men",
      left: { label: "Boys", items: ["Look for motivation", "Look for permission", "Need external validation"] },
      right: { label: "Men", items: ["Build discipline", "Take control", "Move in silence"] }
    }
  ],

  // ============================================================
  // 8. RHETORICAL DEVICES USED
  // ============================================================
  devices: [
    {
      name: "Anaphore",
      example_text: "Get up. Go for a run. Lift more weights. Make more money.",
      effect: "Crée l'effet de saturation d'action",
      why_it_works: "Chaque impératif est court-portée, l'addition semble faisable"
    }
    // 5 à 12 devices
  ],

  // ============================================================
  // 9. ANALOGIES & EXAMPLES
  // ============================================================
  analogies: [
    {
      source: "Batman",
      used_for: "Justifier que la douleur est un ingrédient nécessaire",
      strength: 9,
      why_it_works: "Utilise un héros populaire — court-circuite la contestation abstraite"
    }
  ],

  // ============================================================
  // 10. OPERATIONAL FRAMEWORKS
  // ============================================================
  frameworks: [
    {
      name: "La cure par saturation (Outrun it)",
      when_to_use: "Quand tu es dans un état dépressif fonctionnel",
      steps: [
        "1 activité physique quotidienne exigeante",
        "1 revenu additionnel actif",
        "3-4 relations sociales stratégiques",
        "1 projet secondaire avec deadline"
      ],
      warning: "Ne remplace pas un vrai traitement clinique."
    }
  ],

  // ============================================================
  // 11. DRILLS (exercises)
  // ============================================================
  drills: [
    {
      name: "So? pendant 7 jours",
      duration: "7 jours",
      instructions: [
        "À chaque plainte interne, répondre 'So?' mentalement",
        "Exécuter l'action prévue quand même",
        "Noter les cas où ça a marché vs pas"
      ],
      difficulty: 2 // 1-5
    }
  ],

  // ============================================================
  // 12. RELATED CONTENT
  // ============================================================
  related: {
    videos: ["P4rkjwaa6so", "KPbnzSGlAP4"], // ids
    debates: ["masculinite-feminisme"] // debate ids
  }
};

// Register into global registry
if (typeof CONTENT_REGISTRY !== 'undefined') CONTENT_REGISTRY["LFJAHZlizAg"] = CONTENT_{VIDEO_ID};
```

## Quality bar

- **Fidélité** — chaque quote doit être vérifiable dans le transcript.
- **Structure** — les tableaux ne doivent PAS être vides. Si l'agent n'a rien à mettre pour une section, laisser un array vide `[]` explicite avec commentaire `// n/a`.
- **Densité** — pas de padding. Chaque item apporte une info nouvelle.
- **Actionabilité** — les frameworks et drills doivent être exécutables tel quel.
- **Nuance** — les fallacies doivent inclure un steelman (charitable read) avant la critique.
- **Cross-linking** — remplir `related.videos` et `related.debates` avec des IDs valides.

## Format de sortie

- Un fichier par vidéo : `/mindmap/content/{VIDEO_ID}.js`
- Global scope registration à la fin (voir template)
- Pas de dépendances (pas de `require`, pas de `import`)
- JS valide ES2020
- Encodage UTF-8, français pour les analyses, anglais pour les quotes originales

## Volumes attendus

Par vidéo :
- ~20-40 quotes
- ~5-12 chapters
- ~5-15 fallacies (avec nuance + steelman)
- ~3-8 frameworks
- ~3-6 drills
- ~5-10 rhetorical devices
- ~4-10 stats/comparisons
