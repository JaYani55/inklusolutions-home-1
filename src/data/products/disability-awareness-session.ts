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
    title: 'Disability Awareness Session',
    description: 'Ein halbtägiger, interaktiver Sensibilisierungsworkshop in Präsenz, der Mitarbeitende auf Augenhöhe für den Umgang mit Behinderung im Berufsalltag sensibilisiert. Authentische Begegnung mit Expert:innen mit Behinderung.',
    image: '/diverse-professionals.jpg',
    stats: [
      { value: '4 STUNDEN', label: 'INKL. PAUSEN' },
      { value: '15-40', label: 'TEILNEHMENDE' },
      { value: 'INHOUSE', label: '& PRÄSENZ' }
    ]
  },
  features: [
    {
      title: 'Authentische Begegnung auf Augenhöhe',
      description: 'Kein abstrakter Vortrag, sondern gelebte Erfahrung: Die Session schafft einen geschützten Raum für ehrliche Fragen und direkten Dialog mit Expert:innen mit Behinderung. Perspektivwechsel wird erlebbar gemacht durch konkrete Handlungshilfen und nachhaltigen Austausch – ohne Fingerzeig.'
    },
    {
      title: 'Umfassende Sensibilisierung',
      description: 'Von sichtbaren und unsichtbaren Behinderungen über Unconscious Bias bis hin zu Kommunikation und Disclosure: Die Session behandelt alle relevanten Aspekte. Mit dem Filmimpuls "The Interviewer" und anschließender Szenarienarbeit werden realistische Situationen trainiert.',
      reverse: true
    },
    {
      title: 'Nachhaltige Wirkung ohne Umstellungsaufwand',
      description: 'Die Session wirkt durch Haltungsänderung, nicht durch Strukturveränderung. Sie baut Unsicherheiten ab, ermutigt zu Reflexion und macht Menschen mit Behinderung sichtbarer und sicherer – ohne direkte Folgekosten oder Prozessänderungen.'
    }
  ],
  cards: [
    {
      title: 'Format & Ablauf',
      description: 'Workshop-Details',
      icon: 'Clock',
      items: [
        'Begrüßung und Einstieg mit Leitfrage: "Wie willkommen wäre ich – wenn ich eine Behinderung hätte?"',
        'Filmimpuls "The Interviewer" mit anschließender Szenarienarbeit',
        'Kleingruppenübungen und Rollenspiele',
        'Peer-Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion und konkrete Handlungshilfen'
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte & Methoden',
      description: 'Was Sie lernen',
      icon: 'Lightbulb',
      items: [
        'Einführung in sichtbare und unsichtbare Behinderungen',
        'Unconscious Bias und Ableismus verstehen',
        'Kommunikation und Disclosure im Arbeitskontext',
        'Input, Reflexion, Rollenspiel, Kleingruppen, Film, Quiz',
        'Handlungshilfen und Best Practices für den Alltag'
      ],
      color: 'secondary'
    },
    {
      title: 'Zielgruppen & Wirkung',
      description: 'Für wen & warum',
      icon: 'Target',
      items: [
        'Alle Mitarbeitende: 15-40 Teilnehmende pro Session',
        'Abbau von Unsicherheiten im Umgang mit Behinderung',
        'Öffnet für die Arbeit von Inklusions- und Diversity-Verantwortlichen',
        'Menschen mit Behinderung fühlen sich sichtbarer und sicherer',
        'Stärkt das Selbstverständnis als inklusiver Arbeitgeber'
      ],
      color: 'accent'
    }
  ],
  faq: [
    {
      question: 'Ist die Session auch für kleinere Teams geeignet?',
      answer: 'Ja, wir passen Inhalte und Methoden flexibel an die Teamgröße an.'
    },
    {
      question: 'Können mehrere Gruppen gleichzeitig teilnehmen?',
      answer: 'Ja, die Inhalte werden je nach Gruppengröße flexibel gewichtet.'
    },
    {
      question: 'Ist eine hybride Umsetzung möglich?',
      answer: 'Die Session ist primär als Präsenzformat konzipiert, hybride Varianten sind nach Absprache möglich.'
    },
    {
      question: 'Welche Vorbereitungen sind nötig?',
      answer: 'Nur Raum, Technik und Teilnehmende – die inhaltliche Gestaltung übernehmen wir vollständig.'
    },
    {
      question: 'Gibt es Materialien für die Nachbereitung?',
      answer: 'Ja, ergänzende Materialien und Handlungshilfen stehen zur Verfügung.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR AWARENESS IM TEAM?',
    description: 'Buchen Sie jetzt die Disability Awareness Session und schaffen Sie einen geschützten Raum für ehrliche Fragen und nachhaltigen Perspektivwechsel!',
    primaryButton: 'Session buchen',
    // secondaryButton: 'Mehr erfahren'
  }
};
