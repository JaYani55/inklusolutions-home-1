import { ContentBlock } from '@/types/content';
import { ProductData } from '@/types/product';

export const Behinderungsarten: ProductData = {
  id: '11',
  slug: 'behinderungsarten',
  name: 'Behinderungsarten',
  subtitle:
    'Behinderungen sind vielfältig und mit unterschiedlichen Bedürfnissen verbunden. Die Masterclass vermittelt fundiertes Wissen zu verschiedenen Behinderungsformen und den jeweiligen Bedarfen. Mentor*innen mit eigener Behinderung geben Einblicke aus erster Hand und zeigen, wie Inklusion gelingen kann. Die Inhalte werden individuell auf jedes Unternehmen zugeschnitten.',
  'trainer-module': true,

  // hero – description now uses a ContentBlock array
  hero: {
    title: 'Behinderungsarten',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content:
          'Behinderungen sind vielfältig und mit unterschiedlichen Bedürfnissen verbunden. Die Masterclass vermittelt fundiertes Wissen zu verschiedenen Behinderungsformen und den jeweiligen Bedarfen. Mentor*innen mit eigener Behinderung geben Einblicke aus erster Hand und zeigen, wie Inklusion gelingen kann. Die Inhalte werden individuell auf jedes Unternehmen zugeschnitten.',
      } as ContentBlock,
    ],
    image: '/Behinderungsarten.png',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 x 1,5 Std.', label: 'INHALT' },
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
            'Unser Workshop besteht aus zwei Sessions à jeweils 1,5 Stunden. Vorab führen wir ein gemeinsames Vorbereitungsgespräch, in dem wir Ihre individuellen Schwerpunkte und spezifischen Fragestellungen aufnehmen. Jede Session wird fachlich von einem unserer erfahrenen Coaches begleitet. Ergänzend gibt ein:e Mentor:in mit Behinderung persönliche Einblicke in die eigenen Bedarfe im Arbeitsleben und zeigt auf, wie diese erfolgreich umgesetzt werden können.',
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
            'Der Workshop bietet Ihnen einen praxisnahen Zugang zu den Themen Behinderung und Inklusion im Arbeitskontext. Sie erhalten fundiertes Fachwissen, konkrete Beispiele aus der Praxis sowie hilfreiche Tipps im Umgang mit unterschiedlichen Bedarfen. Durch den Austausch mit Menschen mit Behinderung entwickeln Sie ein tieferes Verständnis und können dieses Wissen direkt in Ihrem Arbeitsalltag anwenden.',
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
            'Nach Abschluss der beiden Sessions verfügen Sie über mehr Sicherheit im Umgang mit den Bedarfen von Menschen mit Behinderung. Sie haben sowohl theoretisches Wissen als auch praxisnahe Handlungsideen gewonnen, die Ihnen helfen, Barrieren abzubauen und inklusivere Strukturen zu gestalten.',
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
        { type: 'bullet-point', id: 'card1-1', text: 'Führungskräfte' },
        { type: 'bullet-point', id: 'card1-2', text: 'HR-Verantwortliche' },
        { type: 'bullet-point', id: 'card1-3', text: 'Inklusionsbeauftragte/Schwerbehindertenvertretung' },
        { type: 'bullet-point', id: 'card1-4', text: 'Kommunikationsverantwortlich' },
      ],
      color: 'primary',
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen zu den unterschiedlichen Behinderungen und den damit verbundenen Bedarf' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: Reflexion welche Bedarfe in eurem Unternehmen umgesetzt werden könnten und was gebarucht wird.' },
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
        { type: 'bullet-point', id: 'card3-3', text: 'Reflexion über die aktuelle Situation in eurem Unternehmen für Menschen mit Behinderung' },
      ],
      color: 'primary',
    },
  ],

  // faq
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: [
        {
          id: 'faq-1-block-1',
          type: 'text',
          content:
            'Die Masterclass eignet sich besonders für HR- Verantwortliche, Führungskräfte, Inklusions- und Behindertenbeauftragte, Kommunikations- und Marketingbeauftragte. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.',
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
