import { ProductData } from '@/types/product';
import { ContentBlock } from '@/types/content';

export const StellenausschreibungJobcarving: ProductData = {
  id: '16',
  slug: 'stellenausschreibung-jobcarving',
  name: 'Inklusive Stellenausschreibung & Jobcarving',
  subtitle: 'Die Ansprache in Stellenausschreibungen ist entscheidend, damit sich potenzielle Mitarbeitende mit Behinderungen angesprochen fühlen.',
  'trainer-module': true,
  hero: {
    title: 'Inklusive Stellenausschreibung & Jobcarving',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content: 'Die Ansprache in Stellenausschreibungen ist entscheidend, damit sich potenzielle Mitarbeitende mit Behinderungen angesprochen fühlen. Wir analysieren ihre Ausschreibungen und geben praxisorientierts Feedback . Mentor:innen mit eigener Behinderung geben Einblicke und zeigen auf, wie inklusive Formulierungen gelingen. Ergänzend wird das Konzept des Jobcarving vorgestellt: Aufgabenprofile werden so gestaltet, dass individuelle Stärken optimal genutzt werden – ein Gewinn für Mitarbeitende mit Behinderungen wie auch für das gesamte Team.',
      } as ContentBlock,
    ],
    image: '/Inklusive_Stellenausschreibung_Jobcarving.png',
    stats: [
      { value: 'FORMAT', label: 'ONLINE', },
      { value: 'DAUER' , label: '4 x 1,5 Stunden'},
      { value: 'PREIS', label: 'Auf Anfrage' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: [
        {
          id: 'feat-1-desc-1',
          type: 'text',
          content:
            'Der Workshop umfasst vier Sessions à 1,5 Stunden sowie ein vorbereitendes Gespräch zur Klärung individueller Schwerpunkte. Begleitet wird er von erfahrenen Coaches; in einer Session geben Mentor:innen mit Behinderung persönliches Feedback zu Stellenausschreibungen.'
        } as ContentBlock,
      ],
    },
    {
      title: 'Ziel & Nutzen',
      description: [
        {
          id: 'feat-2-desc-1',
          type: 'text',
          content:
            'Vermittelt werden Fachwissen, Praxisbeispiele und Tipps zur inklusiven Gestaltung von Stellenausschreibungen sowie zum Einsatz des Jobcarving zur Entwicklung passgenauer Aufgabenprofile. Der Austausch mit Menschen mit Behinderung schafft zusätzliches Verständnis für inklusive Ansprache und flexible Stellenmodelle.'        
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
          content:
            'Nach Abschluss der vier Sessions verfügen Sie über das Wissen und die Werkzeuge, um:',
        } as ContentBlock,
        {
          id: 'feat-3-desc-2',
          type: 'list',
          style: 'unordered',
          items: ['Stellenausschreibungen barrierearm und inklusiv zu formulieren,', 
                  'das Konzept des Jobcarving zu verstehen und im eigenen Unternehmen anzuwenden,',
                  'neue Perspektiven auf die Gewinnung und Bindung von Fachkräften zu gewinnen.'
          ]
        } as ContentBlock,
        {
          id: 'feat-3-desc-3',
          type: 'text',
          content:'Davon profitieren ihre Mitarbeitenden mit und ohne Behinderung – und nicht zuletzt auch potenzielle Bewerber:innen, die sich durch eine passende Ansprache eher für ihr Unternehmen entscheiden.'
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
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
  icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen: Inklusive Stellenausschreibung, Ansprache von potentiellen Mitarbeitenden mit Behinderungen und Praxisbeispiele' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: Zusammen gehen wir eure Stellenausschreibung durch und geben euch wertvolle Tipps' },
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
        { type: 'bullet-point', id: 'card3-3', text: 'Reflexion über die aktuelle Situation in eurem Unternehmen für Mitarbeitende mit Behinderung' },
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
          content: 'Die Masterclass eignet sich besonders für Mitarbeitende des Recuitings und der Personalentwicklung. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Findet die Masterclass individuell für unser Unternehmen statt? ',
      answer: [
        {
          id: 'faq-2-ans-1',
          type: 'text',
          content: 'Ja, die Masterclasses findet ganz individuell für euer Unternehmen statt. Dadurch ist es möglich direkt auf eure Themen einzugehen und mit euch zusammen Schritte für euer Unternehmen herauszuarbeiten.',
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
