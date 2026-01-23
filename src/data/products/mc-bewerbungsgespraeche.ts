import { ContentBlock } from '@/types/content';
import { ProductData } from '@/types/product';

export const Bewerbungsgespraeche: ProductData = {
  id: '12',
  slug: 'bewerbungsgespraeche',
  name: 'Bewerbungsgespraeche',
  subtitle:
    'Das Bewerbungsgespräch ist ein entscheidender Schritt im Recruitingprozess. Oft bestehen Unsicherheiten im Umgang mit Bewerber:innen mit Behinderungen.',
  'trainer-module': true,

  // hero – description now uses a ContentBlock array
  hero: {
    title: 'Bewerbungsgespräche',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content:
          'Das Bewerbungsgespräch ist ein entscheidender Schritt im Recruitingprozess. Oft bestehen Unsicherheiten im Umgang mit Bewerber:innen mit Behinderungen. In praxisnahen Bewerbungssimulationen mit Menschen mit unterschiedlichen Behinderungen werden typische Situationen erlebbar. So lassen sich Barrieren abbauen und mehr Sicherheit im Auswahlprozess gewinnen – eine Grundlage für faire und erfolgreiche Personalgewinnung.',
      } as ContentBlock,
    ],
    image: '/inklusive_Bewerbungsgespraeche.png',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '3 x 1,5 Std.', label: 'INHALT' },
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
            'Der Workshop umfasst drei Sessions à 1,5 Stunden und wird durch ein Vorbereitungsgespräch ergänzt, in dem individuelle Schwerpunkte und Fragestellungen definiert werden. Jede Session wird von erfahrenen Coaches begleitet. Die Bewerbungssimulationen erfolgen mit Menschen mit unterschiedlichen Behinderungen, die direktes Feedback geben und ihre Praxiserfahrungen teilen.',
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
            'Vermittelt wird praxisnah, wie Bewerbungsgespräche souverän und sicher geführt werden können. Realistische Gesprächssituationen, konkrete Handlungstipps und der Austausch mit Bewerber:innen mit Behinderungen fördern ein tieferes Verständnis für mögliche Barrieren und deren erfolgreiche Überwindung.',
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
            'Nach Abschluss der beiden Sessions verfügen Sie über das Wissen und die Erfahrung, um: Bewerbungsgespräche mit Menschen mit Behinderungen professionell und inklusiv zu gestalten, eigene Unsicherheiten im Recruitingprozess abzubauen, mehr Sicherheit im Umgang mit vielfältigen Bewerber:innen zu gewinnen.',
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
        { type: 'bullet-point', id: 'card1-3', text: 'Führungskräfte' },
        { type: 'bullet-point', id: 'card1-4', text: 'Inklusionsbeauftragte/Schwerbehindertenvertretung' },
      ],
      color: 'primary',
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen: über inklusive Bewerbungsgespräche' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Bewerbungssimulationen mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: Bisherige Bewerbungspraxis reflektieren und neue Erfahrungen sammeln' },
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
        { type: 'bullet-point', id: 'card3-2', text: 'Drei Sessions mit fachlichem und erfahrungsbezogenem Input durch Coach und Mentor:in' },
        { type: 'bullet-point', id: 'card3-3', text: 'Reflexion über die aktuelle Situation in eurem Unternehmen für Menschen mit Behinderung' },
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
            'Die Masterclass eignet sich besonders Pecruiting, Personalentwicklung, Führungskräfte, Inklusionsbeauftragte/Schwerbehindertenvertretung. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.',
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
