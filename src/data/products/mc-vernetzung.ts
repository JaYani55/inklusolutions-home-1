import { ProductData } from '@/types/product';
import { ContentBlock} from '@/types/content';

export const Vernetzung: ProductData = {
  id: '17',
  slug: 'vernetzung',
  name: 'Vernetzung & Anlaufstellen',
  subtitle: 'Netzwerke sind zentral, um Inklusion im Unternehmen nachhaltig zu verankern.',
  'trainer-module': true,
  hero: {
    title: 'Vernetzung & Anlaufstellen',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content: 'Netzwerke sind zentral, um Inklusion im Unternehmen nachhaltig zu verankern. Sie ermöglichen Austausch, gegenseitiges Lernen und konkrete Unterstützung – etwa bei Rekrutierung oder Kommunikation. Die Masterclass bietet einen Überblick über relevante Netzwerke und zentrale Anlaufstellen zur Inklusion in der Arbeitswelt. So entsteht ein stabiles Fundament, das Inklusion sichtbar macht und langfristig stärkt.',
      } as ContentBlock,
    ],
    image: '/team.jpg',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 x 1,5 Std.', label: 'DAUER ' },
      { value: 'Nach Anfrage', label: 'PREIS' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: [
        {
          id: 'feat-1-desc-1',
          type: 'text',
          content: 'Die Masterclass umfasst zwei Sessions à 1,5 Stunden sowie ein Vorbereitungsgespräch zur Festlegung individueller Schwerpunkte, z. B. in Rekrutierung, Marketing oder Wissenstransfer. Begleitet wird sie von erfahrenen Coaches, ergänzt durch Einblicke von Mentor:innen mit Behinderung in den Umgang mit Netzwerken und deren Potenzial für mehr Inklusion.',
        } as ContentBlock,
      ],
    },
    {
      title: 'Ziel & Nutzen',
      description: [
        {
          id: 'feat-2-desc-1',
          type: 'text',
          content: 'Vermittelt werden Wissen über relevante Netzwerke und Anlaufstellen sowie praxisnahe Tipps zur Nutzung dieser Ressourcen für Personalgewinnung, Arbeitgebermarke und Erfahrungsaustausch.',
        } as ContentBlock,
      ],
      alignment: 'right'
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: [
        {
          id: 'feat-3-desc-1',
          type: 'text',
          content: 'Nach Abschluss stehen fundiertes Wissen und konkrete Handlungsideen bereit, um Netzwerke gezielt in die Unternehmenspraxis zu integrieren und Inklusion nachhaltig zu stärken – mit Mehrwert für Mitarbeitende, Teams und Außenwirkung.',
        } as ContentBlock,
      ],
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
  icon: 'Users',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'Recruiting' },
        { type: 'bullet-point', id: 'card1-2', text: 'Personalentwicklung' },
        { type: 'bullet-point', id: 'card1-3', text: 'Marketing' },
        { type: 'bullet-point', id: 'card1-4', text: 'Inklusionsbeauftragte/Schwerbehindertenvertretung' },
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
  icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen: Netzwerke und Anlaufstellen in Deutschland' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: Reflexion welche Netzwerke ihr bisher nutzt und welche potentiell sinnvoll für euer Unternehmen sind.' },
        { type: 'bullet-point', id: 'card2-4', text: 'Werkzeugkasten: Fachwissen, Erfahrungsaustausch, Handout' },
      ],
      color: 'secondary'
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
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: [
        {
          id: 'faq-1-ans-1',
          type: 'text',
          content: 'Die Masterclass eignet sich besonders für Recruiting, Personalentwicklung, Marketing und Inklusions-/Behindertenbeauftragt*e. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Findet die Masterclass individuell für unser Unternehmen statt? ',
      answer: [
        {
          id: 'faq-2-ans-1',
          type: 'text',
          content: 'Ja, die Masterclass findet ganz individuell für euer Unternehmen statt. Dadurch ist es möglich direkt auf eure Themen einzugehen und mit euch zusammen Schritte für euer Unternehmen herauszuarbeiten.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Mit welcher Masterclass sollte unser Unternehmen beginnen? ',
      answer: [
        {
          id: 'faq-3-ans-1',
          type: 'text',
          content: 'Jedes Unternehmen ist einzigartig – ebenso die Bedürfnisse seiner Mitarbeitenden. Deshalb entwickeln wir passgenaue Lösungen statt Standardkonzepte. Ergänzend dazu bieten wir spezielle Diagnoseverfahren an, die eine fundierte Analyse der Ausgangssituation ermöglichen.',
        } as ContentBlock,
      ],
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description: 'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen'
  }
};
