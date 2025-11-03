import { ContentBlock } from '@/types/content';
import { ProductData } from '@/types/product';

export const Foerdermittel: ProductData = {
  id: '13',
  slug: 'foerdermittel',
  name: 'Foerdermittel',
  subtitle:
    'Die Förderlandschaft für Inklusion in Deutschland ist vielfältig und oft schwer zu überblicken. Dadurch bleiben wertvolle Mittel ungenutzt, die Inklusion im Betrieb entscheidend voranbringen könnten.',
  'trainer-module': true,

  // hero – description now uses a ContentBlock array
  hero: {
    title: 'Fördermittel',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content:
          'Die Masterclass vermittelt einen strukturierten Überblick über zentrale Fördermöglichkeiten, zeigt relevante Optionen auf und gibt praxisnahe Handlungsempfehlungen für die konkrete Nutzung. So können vorhandene Ressourcen gezielt eingesetzt werden, um Inklusion im Unternehmen nachhaltig zu stärken.',
      } as ContentBlock,
    ],
    image: '/Foerdermittel_Inklusion.png',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 x 1,5 Std.', label: 'INHALT' },
      { value: 'Nach Anfrage', label: 'PREIS' },
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
            'Unsere Masterclass besteht aus zwei Sessions à jeweils 1,5 Stunden. Vorab führen wir ein Vorbereitungsgespräch, um die für euch relevanten Förderschwerpunkte zu identifizieren. Jede Session wird fachlich von erfahrenen Coaches begleitet, die durch die komplexe Förderlandschaft führen und praxisnahes Wissen vermitteln.',
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
            'Die Masterclass gibt einen strukturierten Überblick über die wichtigsten Fördermöglichkeiten zur Stärkung von Inklusion im Unternehmen. Durch konkrete Beispiele und Tipps wird der „Förderdschungel" übersichtlich und verständlich.',
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
            'Nach Abschluss der Masterclass liegt Klarheit darüber vor, welche Fördermittel genutzt werden können, um Inklusion im Unternehmen nachhaltig zu fördern. Zudem stehen konkrete Handlungsideen bereit, um vorhandene Ressourcen optimal einzusetzen.',
        } as ContentBlock,
      ],
    },
  ],

  // cards – unchanged
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: 'Users',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'Recruiting' },
        { type: 'bullet-point', id: 'card1-2', text: 'Personalentwicklung' },
        { type: 'bullet-point', id: 'card1-3', text: 'Inklusionsbeauftragte/Schwerbehindertenvertretung' },
      ],
      color: 'primary',
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen: Fördermittel und deren Beantragung' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: Reflexion welche Fördermittel ihr bisher nutzt und welche potentiell sinnvoll für euer Unternehmen ist.' },
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
        { type: 'bullet-point', id: 'card3-3', text: 'Reflexion über die aktuelle Situation' },
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
            'Die Masterclass eignet sich besonders für Recruiting, Personalentwicklung, und Inklusions-/Behindertenbeauftragt*e. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.',
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

  // CTA – unchanged
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description:
      'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen',
  },
};
