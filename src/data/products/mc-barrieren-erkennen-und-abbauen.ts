import { ContentBlock } from '@/types/content';
import { ProductData } from '@/types/product';
// import { Users, Wrench, CalendarDays } from 'lucide-react';

export const BarrierenErkennenUndAbbauen: ProductData = {
  id: '10',
  slug: 'barrieren-erkennen-und-abbauen',
  name: 'Barrieren erkennen und abbauen',
  subtitle:
    'Die Masterclass zeigt, welche Formen von Barrieren es gibt, wie sie erkennbar werden und mit welchen Maßnahmen sie abgebaut werden können – ein Gewinn für Mitarbeitende mit Behinderung und für die gesamte Belegschaft.',
  'trainer-module': true,

  // hero – description now uses a ContentBlock array
  hero: {
    title: 'Barrieren erkennen und abbauen',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content:
          'Neben physischen gibt es auch soziale, visuelle oder akustische Barrieren, die Mitarbeitenden mit Behinderung im Arbeitsalltag im Weg stehen.',
      } as ContentBlock,
    ],
    image: '/Barrieren_erkennen_und_abbauen.png',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 x 1,5 Stunden', label: 'INHALT' },
      { value: 'Auf Anfrage', label: 'PREIS' },
    ],
  },

  // features – each description is now a ContentBlock array
  features: [
    {
      title: 'Format & Rahmen',
      description: [
        {
          id: 'feat-desc-1',
          type: 'text',
          content:
            'Unser Workshop besteht aus zwei Sessions à jeweils 1,5 Stunden. Vorab führen wir ein gemeinsames Vorbereitungsgespräch, in dem wir individuelle Schwerpunkte und spezifischen Fragestellungen aufnehmen. Jede Session wird fachlich von einem unserer erfahrenen Coaches begleitet. Ergänzend gibt ein:e Mentor:in mit Behinderung persönliche Einblicke in die eigenen Barrieren im Arbeitsleben und zeigt auf, wie diese erfolgreich überwunden werden können. ',
        } as ContentBlock,
      ],
    },
    {
      title: 'Ziel & Nutzen',
      description: [
        {
          id: 'feat-desc-2',
          type: 'text',
          content:
            'Der Workshop vermittelt einen praxisnahen Zugang zu den Themen Barrieren und deren Abbau. Vermittelt werden fundiertes Fachwissen, konkrete Beispiele und praxisorientierte Tipps. Durch den Austausch mit Menschen mit Behinderung entsteht ein tieferes Verständnis, das direkt in den Arbeitsalltag einfließen kann. ',
        } as ContentBlock,
      ],
      alignment: 'right',
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: [
        {
          id: 'feat-desc-3',
          type: 'text',
          content:
            'Nach Abschluss der beiden Sessions stehen fundiertes Wissen und konkrete Handlungsideen zur Verfügung, um unterschiedliche Arten von Barrieren zu erkennen und zu reduzieren. Davon profitieren sowohl Mitarbeitende mit und ohne Behinderung als auch potenzielle Kundinnen und Kunden. ',
        } as ContentBlock,
      ],
    },
  ],

  // cards
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: 'Users',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'Facility Management' },
        { type: 'bullet-point', id: 'card1-2', text: 'Kommunikation' },
        { type: 'bullet-point', id: 'card1-3', text: 'Baubeauftragte und Beauftragte für Barrierefreiheit' },
        { type: 'bullet-point', id: 'card1-4', text: 'HR-Bereich' },
        { type: 'bullet-point', id: 'card1-5', text: 'Inklusions-/Behindertenbeauftragt*e' },
      ],
      color: 'primary',
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen zu den unterschiedlichen Barrieren und wie diese reduziert werden können' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: Reflexion welche Barrieren in eurem Unternehmen bestehen und wie diese reduziert werden können.' },
        { type: 'bullet-point', id: 'card2-4', text: 'Werkzeugkasten: Fachwissen, Erfahrungsaustausch, Handout' },
      ],
      color: 'secondary',
    },
    {
      title: 'Ablauf des Workshops',
      description: 'Workshop-Struktur',
      icon: 'CalendarDays',
      content: [
        { type: 'bullet-point', id: 'card3-1', text: 'Vorgespräche zur individuellen Gestaltung' },
        { type: 'bullet-point', id: 'card3-2', text: 'Zwei Sessions mit fachlichem und erfahrungsbezogenem Input durch Coach und Mentor:in' },
        { type: 'bullet-point', id: 'card3-3', text: 'Reflexion über die aktuelle Situation in eurem Unternehmen für Mitarbeitende mit Behinderung' },
      ],
      color: 'primary',
    },
  ],

  // faq – answers now use ContentBlock arrays
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: [
        {
          id: 'faq-1-block-1',
          type: 'text',
          content:
            'Die Masterclass eignet sich besonders für Facility Management, Kommunikation, Baubeauftragte und Beauftragte für Barrierefreiheit, HR-Bereich, Inklusions-/Behindertenbeauftragt*e. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Findet die Masterclass individuell für unser Unternehmen statt? ',
      answer: [
        {
          id: 'faq-2-block-1',
          type: 'text',
          content:
            'Ja, die Masterclasses findet ganz individuell für euer Unternehmen statt. Dadurch ist es möglich direkt auf eure Themen einzugehen und mit euch zusammen Schritte für euer Unternehmen herauszuarbeiten.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Mit welcher Masterclass sollte unser Unternehmen beginnen? ',
      answer: [
        {
          id: 'faq-3-block-1',
          type: 'text',
          content:
            'Jedes Unternehmen ist einzigartig – ebenso die Bedürfnisse seiner Mitarbeitenden. Deshalb entwickeln wir passgenaue Lösungen statt Standardkonzepte. Ergänzend dazu bieten wir spezielle Diagnoseverfahren an, die eine fundierte Analyse der Ausgangssituation ermöglichen.',
        } as ContentBlock,
      ],
    },
  ],

  // CTA
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description:
      'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen',
  },
};
