import { ProductData } from '@/types/product';
import { ContentBlock } from '@/types/content';


export const disabilityAwarenessSession: ProductData = {
  id: '3',
  slug: 'disability-awareness-session',
  name: 'Disability Awareness Session',
  subtitle: 'Ein halbtägiger, interaktiver Sensibilisierungsworkshop für den Umgang mit Behinderung im Berufsalltag',
  'trainer-module': true,
  hero: {
    title: 'Disability Awareness Session – Perspektivwechsel, der bewegt.',
    description: [
          { id: 'hero-desc-1', type: 'text', 
            content: 'Ein halbtägiger, praxisnaher Sensibilisierungsworkshop in Präsenz, der Mitarbeitende befähigt, Inklusion im Arbeitsalltag zu verstehen, mitzugestalten und sicherer zu kommunizieren.\n\n**„Stell dir vor, du wärst ein Mensch mit Behinderung in deinem Unternehmen. Würdest du dich willkommen fühlen?"**',
          } as ContentBlock,
        ],
    image: '/gruppenarbeit.png',
    stats: [
      { value: '4 STUNDEN', label: 'INKL. PAUSEN' },
      { value: '15-40', label: 'TEILNEHMENDE' },
      { value: 'INHOUSE', label: '& PRÄSENZ' }
    ]
  },
  features: [
  {
    title: 'Begegnung auf Augenhöhe',
    description: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'feature1-block1',
        type: 'text',
        content: 'Keine trockene Theorie, sondern **echte Erfahrungen**: In der Session entsteht ein offener Raum für ehrliche Fragen, Austausch und Reflexion. Gemeinsam mit Expert:innen mit Behinderung. So werden neue Perspektiven verständlich und konkrete Tipps direkt anwendbar.'
      } as ContentBlock,
    ],
    alignment: 'center'
  },
  {
    title: 'Bewusstsein schaffen',
    description: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'feature2-block1',
        type: 'text',
        content: 'Ob sichtbare oder unsichtbare Behinderungen, unbewusste Vorurteile oder der richtige Umgang im Gespräch alle wichtigen Themen kommen zur Sprache.\n\n*Ein kurzer Film („The Interviewer") und kleine Rollenspiele machen Alltagssituationen greifbar und helfen, sicherer im Umgang zu werden.*'
      } as ContentBlock,
    ],
    alignment: 'right'
  },
  {
    title: 'Wirkung, die bleibt',
    description: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'feature3-block1',
        type: 'text',
        content: 'Die Session verändert Haltung und Strukturen. Sie baut Unsicherheiten ab, stärkt das Selbstverständnis als inklusiver Arbeitgeber und sorgt dafür, dass Menschen mit Behinderung sichtbarer und selbstverständlicher Teil des Teams werden ohne zusätzlichen Aufwand oder Kosten.'
      } as ContentBlock,
    ]
  }
],
  cards: [
    {
      title: 'Format & Ablauf',
      description: 'Workshop-Details',
      icon: 'Clock',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'Kleingruppenübungen & Rollenspiele' },
        { type: 'bullet-point', id: 'card1-2', text: 'Filmimpuls „The Interviewer" mit Szenarienarbeit' },
        { type: 'bullet-point', id: 'card1-3', text: 'Kleingruppenübungen und Rollenspiele' },
        { type: 'bullet-point', id: 'card1-4', text: 'Peer-Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card1-5', text: 'Reflexion & konkrete Handlungshilfen' },
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte & Methoden',
      description: 'Was Sie lernen',
      icon: 'Lightbulb',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Einführung in sichtbare & unsichtbare Behinderungen' },
        { type: 'bullet-point', id: 'card2-2', text: 'Unconscious Bias und Ableismus verstehen' },
        { type: 'bullet-point', id: 'card2-3', text: 'Kommunikation & Disclosure im Arbeitskontext' },
        { type: 'bullet-point', id: 'card2-4', text: 'Handlungshilfen & Best Practices für den Alltag' },
        { type: 'bullet-point', id: 'card2-5', text: 'Methodik: Input, Reflexion, Rollenspiel, Film, Quiz, Austausch' },
      ],
      color: 'secondary'
    },
    {
      title: 'Zielgruppen & Wirkung',
      description: 'Für wen & warum',
      icon: 'Target',
      content: [
        { type: 'text', id: 'card3-header1', content: '**Für wen & warum:**' } as ContentBlock,
        { type: 'bullet-point', id: 'card3-1', text: 'DEI-Verantwortliche: Perspektivwechsel für Strategie & Haltung' },
        { type: 'bullet-point', id: 'card3-2', text: 'HR / Fachabteilungen: Sicherer Umgang mit Disclosure, Recruiting & Kommunikation' },
        { type: 'bullet-point', id: 'card3-3', text: 'Führungskräfte: Führungsverantwortung für diverse Teams' },
        { type: 'bullet-point', id: 'card3-4', text: 'Menschen mit Behinderung fühlen sich sichtbarer und sicherer' },
        { type: 'bullet-point', id: 'card3-5', text: 'SBV / Inklusionsbeauftragte: Brückenbauer:innen in der Organisation' },
        { type: 'text', id: 'card3-header2', content: '**Wirkung:**' } as ContentBlock,
        { type: 'bullet-point', id: 'card3-6', text: 'Abbau von Unsicherheiten im Umgang mit Behinderung' },
        { type: 'bullet-point', id: 'card3-7', text: 'Öffnet für die Arbeit von DEI-, SBV- und Inklusionsbeauftragten' },
        { type: 'bullet-point', id: 'card3-8', text: 'Stärkt das Selbstverständnis als inklusiver Arbeitgeber' },
      ],
      color: 'accent'
    }
  ],

  faq: [
  {
    question: 'Ist die Session auch für kleinere Teams geeignet?',
    answer: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'faq1-block1',
        type: 'text',
        content: 'Ja, Inhalte und Methoden werden flexibel an Teamgröße und Kontext angepasst.'
      } as ContentBlock,
    ]
  },
  {
    question: 'Können mehrere Zielgruppen gleichzeitig teilnehmen?',
    answer: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'faq2-block1',
        type: 'text',
        content: 'Ja, wir gewichten die Inhalte je nach Zusammensetzung – etwa mit Fokus auf Führung, Kommunikation oder Sensibilisierung.'
      } as ContentBlock,
    ]
  },
  {
    question: 'Ist eine hybride Umsetzung möglich?',
    answer: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'faq3-block1',
        type: 'text',
        content: 'Die Session ist für Präsenz konzipiert, hybride Varianten sind aber nach Absprache umsetzbar.'
      } as ContentBlock,
    ]
  },
  {
    question: 'Welche Vorbereitungen sind nötig?',
    answer: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'faq4-block1',
        type: 'text',
        content: 'Nur Raum, Technik und Teilnehmende – wir übernehmen die komplette inhaltliche Gestaltung.'
      } as ContentBlock,
    ]
  },
  {
    question: 'Wie viel Aufwand entsteht intern?',
    answer: [ // Jetzt ein Array von ContentBlöcken
      {
        id: 'faq5-block1',
        type: 'text',
        content: 'Minimal – die Session wirkt über Haltung, nicht über Strukturen. Es sind keine Prozessänderungen nötig.'
      } as ContentBlock,
    ]
  }
],

  cta: {
    title: 'BEREIT FÜR MEHR AWARENESS IM TEAM?',
    description: 'Buchen Sie jetzt die Disability Awareness Session und schaffen Sie einen geschützten Raum für ehrliche Fragen und nachhaltigen Perspektivwechsel!',
    primaryButton: 'Session buchen',
    // secondaryButton: 'Mehr erfahren'
  }
};
