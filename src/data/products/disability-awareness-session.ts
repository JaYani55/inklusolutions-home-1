import { ProductData } from '@/types/product';
// No longer importing icons directly
// import { Clock, Lightbulb, Target } from 'lucide-react';

export const disabilityAwarenessSession: ProductData = {
  id: '3',
  slug: 'disability-awareness-session',
  name: 'Disability Awareness Session',
  subtitle: 'Ein halbtägiger, interaktiver Sensibilisierungsworkshop für den Umgang mit Behinderung im Berufsalltag',
  'trainer-module': true,
  hero: {
    title: 'Disability Awareness Session – Perspektivwechsel, der bewegt.',
    description: 'Ein halbtägiger, praxisnaher Sensibilisierungsworkshop in Präsenz, der Mitarbeitende befähigt, Inklusion im Arbeitsalltag zu verstehen, mitzugestalten und sicherer zu kommunizieren. \n „Stell dir vor, du wärst ein Mensch mit Behinderung in deinem Unternehmen. Würdest du dich willkommen fühlen?“',
    image: '/diverse-professionals.jpg',
    stats: [
      { value: '4 STUNDEN', label: 'INKL. PAUSEN' },
      { value: '15-40', label: 'TEILNEHMENDE' },
      { value: 'INHOUSE', label: '& PRÄSENZ' }
    ]
  },
  features: [
    {
      title: 'Begegnung auf Augenhöhe',
      description: 'Keine trockene Theorie, sondern echte Erfahrungen: In der Session entsteht ein offener Raum für ehrliche Fragen, Austausch und Reflexion. Gemeinsam mit Expert:innen mit Behinderung. So werden neue Perspektiven verständlich und konkrete Tipps direkt anwendbar.'
    },
    {
      title: 'Bewusstsein schaffen',
      description: 'Ob sichtbare oder unsichtbare Behinderungen, unbewusste Vorurteile oder der richtige Umgang im Gespräch alle wichtigen Themen kommen zur Sprache. Ein kurzer Film („The Interviewer“) und kleine Rollenspiele machen Alltagssituationen greifbar und helfen, sicherer im Umgang zu werden.',
      reverse: true
    },
    {
      title: 'Wirkung, die bleibt',
      description: 'Die Session verändert Haltung und Strukturen. Sie baut Unsicherheiten ab, stärkt das Selbstverständnis als inklusiver Arbeitgeber und sorgt dafür, dass Menschen mit Behinderung sichtbarer und selbstverständlicher Teil des Teams werden ohne zusätzlichen Aufwand oder Kosten.'
    }
  ],
  cards: [
    {
      title: 'Format & Ablauf',
      description: 'Workshop-Details',
      icon: 'Clock',
      items: [
        'Kleingruppenübungen & Rollenspiele',
        'Filmimpuls „The Interviewer“ mit Szenarienarbeit',
        'Kleingruppenübungen und Rollenspiele',
        'Peer-Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & konkrete Handlungshilfen'
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte & Methoden',
      description: 'Was Sie lernen',
      icon: 'Lightbulb',
      items: [
        'Einführung in sichtbare & unsichtbare Behinderungen',
        'Unconscious Bias und Ableismus verstehen',
        'Kommunikation & Disclosure im Arbeitskontext',
        'Handlungshilfen & Best Practices für den Alltag',
        'Methodik: Input, Reflexion, Rollenspiel, Film, Quiz, Austausch'
      ],
      color: 'secondary'
    },
    {
      title: 'Zielgruppen & Wirkung',
      description: 'Für wen & warum',
      icon: 'Target',
      items: [
        'Für wen & warum:',
        'DEI-Verantwortliche: Perspektivwechsel für Strategie & Haltung',
        'HR / Fachabteilungen: Sicherer Umgang mit Disclosure, Recruiting & Kommunikation',
        'Führungskräfte: Führungsverantwortung für diverse Teams',
        'Menschen mit Behinderung fühlen sich sichtbarer und sicherer',
        'SBV / Inklusionsbeauftragte: Brückenbauer:innen in der Organisation',
        'Wirkung:',
        'Abbau von Unsicherheiten im Umgang mit Behinderung',
        'Öffnet für die Arbeit von DEI-, SBV- und Inklusionsbeauftragten',
        'Stärkt das Selbstverständnis als inklusiver Arbeitgeber'
      ],
      color: 'accent'
    }
  ],
  faq: [
    {
      question: 'Ist die Session auch für kleinere Teams geeignet?',
      answer: 'Ja, Inhalte und Methoden werden flexibel an Teamgröße und Kontext angepasst.'
    },
    {
      question: 'Können mehrere Zielgruppen gleichzeitig teilnehmen?',
      answer: 'Ja, wir gewichten die Inhalte je nach Zusammensetzung – etwa mit Fokus auf Führung, Kommunikation oder Sensibilisierung.'
    },
    {
      question: 'Ist eine hybride Umsetzung möglich?',
      answer: 'Die Session ist für Präsenz konzipiert, hybride Varianten sind aber nach Absprache umsetzbar.'
    },
    {
      question: 'Welche Vorbereitungen sind nötig?',
      answer: 'Nur Raum, Technik und Teilnehmende – wir übernehmen die komplette inhaltliche Gestaltung.'
    },
    {
      question: 'Wie viel Aufwand entsteht intern?',
      answer: 'Minimal – die Session wirkt über Haltung, nicht über Strukturen. Es sind keine Prozessänderungen nötig.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR AWARENESS IM TEAM?',
    description: 'Buchen Sie jetzt die Disability Awareness Session und schaffen Sie einen geschützten Raum für ehrliche Fragen und nachhaltigen Perspektivwechsel!',
    primaryButton: 'Session buchen',
    // secondaryButton: 'Mehr erfahren'
  }
};
