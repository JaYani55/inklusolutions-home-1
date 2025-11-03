import { ContentBlock } from '@/types/content';
import { ProductData } from '@/types/product';


export const inklusionsführerschein: ProductData = {
  id: '1',
  slug: 'inklusionsführerschein',
  name: 'Inklusionsführerschein',
  subtitle: 'Praktisches Wissen und echtes Verständnis für eine inklusive Unternehmenskultur',
  'trainer-module': true,

  // hero
  hero: {
    title: 'Sei Teil der Veränderung - hol dir den Inklusionsführerschein',
    description: [
      { id: 'hero-desc-1', type: 'text', 
        content: 'Erlebe zwei Tage voller Perspektivwechsel, praxisnaher Impulse und echter Begegnungen - für mehr Sicherheit und Handlungsspielraum im Umgang mit Behinderung im Arbeitsleben.',
      } as ContentBlock,
    ],
    image: '/Beiersdorf_DAW.jpg',
    stats: [
      { value: '2 TAGE', label: 'INTENSIV-WORKSHOP' },
      { value: '998 €', label: 'PRO PERSON' },
      { value: 'In Präsenz', label: 'FORMAT' }
    ]
  },

  // Features
  features: [
    {
      title: '',
      description: [
        { id: 'feat-desc-1', type:'quote', author:'Nils Dreyer',
          text: 'Würdest du deinen Führerschein bei jemandem machen, der nie selbst gefahren ist? Deshalb arbeiten wir mit Mentor:innen, die wissen, wovon sie sprechen.',
        } as ContentBlock,
      ]
    },
    {
      title: 'Crashkurs für wirksame Inklusion',
      description: [
        { id: 'feat-desc-2', type:'text', 
          content: 'Der Inklusionsführerschein ist dein Start mit Haltung und Handwerkzeug - für alle, die in ihrem Unternehmen beim Thema Inklusion wirklich etwas bewegen wollen. Er verbindet fundiertes Wissen, ehrliche Selbstreflexion und echte Begegnungen mit Expert:innen mit gelebter Behinderung. So bekommst du Sprache, Strategien und Mut statt Unsicherheit - und legst die Basis für wirksames Handeln.',
        } as ContentBlock,
      ],
      alignment: 'right'
    },
    {
      title: 'In 2 Tagen zu sicherem Handeln',
      description: [
        { id: 'feat-desc-3', type:'text', 
          content: 'Im zweitäigen Präsenz-Workshop durchläufst du kompakt Theorie und Praxis: typische Ängste bennenen, Fallstricke erkennen, Rolle klären. Du trainierst echte Gesprächssituationen, erhältst direktes Feedback von Mentor:innen, arbeitest am eigenen Unternehmenskontext und nimmst einen konkreten Transferauftrag mit. Ergebnis: spürbare Handlungssicherheit, klare nächste Schritte und ein Zertifikat - bereit, Inklusion im Arbeitsalltag...',
        } as ContentBlock,
      ],
      alignment: 'right'
    },
  ],

  // Cards
  cards: [
    {
      title: 'Für wen ist der Workshop?',
      description: 'Wer profitiert',
      icon: 'Users',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'DEI-Verantwortliche' },
        { type: 'bullet-point', id: 'card1-2', text: 'Schwerbehindertenvertretungen / Inklusionsbeauftragte' },
        { type: 'bullet-point', id: 'card1-3', text: 'HR-Verantwortliche' },
        { type: 'bullet-point', id: 'card1-4', text: 'Führungskräfte mit Verantwortung für Kultur & Personal' },
        { type: 'bullet-point', id: 'card1-5', text: 'Für alle Change-Maker in Sachen Inklusion' },
      ],
      color: 'primary'
    },
    {
      title: 'Das lernst du',
      description: 'Lerninhalte entdecken',
      icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Grundlagen: Disability Basics (Begriffe, Haltung), Unconscious Bias, Sstemwissen & gesetzliche Grundlagen' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Expert:innen Input zu Themen: Bewerbungsgespräch, Onboarding, Kommunikation' },
        { type: 'bullet-point', id: 'card2-4', text: 'Reflexion & Transfer: Canvas-Arbeit, Handlungsideen, Peer-Feedback' },
        { type: 'bullet-point', id: 'card2-5', text: 'Werkzeugkasten: Argumente, Formulierungen, nächste Schritte' },
      ],
      color: 'secondary'
    },
    {
      title: "So läuft's ab",
      description: 'Workshop-Struktur (2 Tage, Präsenz)',
      icon: 'CalendarDays',
      content: [
        { type: 'bullet-point', id: 'card3-1', text: 'Ankommen, Ziel & Erwartungsklärung' },
        { type: 'bullet-point', id: 'card3-2', text: 'Perspektivwechsel Basics & Sprache' },
        { type: 'bullet-point', id: 'card3-3', text: 'Begegnung mit Mentor:innen (Q&A)' },
        { type: 'bullet-point', id: 'card3-4', text: 'Üben: Gesprächssituationen' },
      ],
      color: 'primary'
    }
  ],

  // FAQ
  faq: [
    {
      question: 'Für wen ist der Inklusionsführerschein geeignet?',
      answer: [
        {
        id: 'faq1-block1',
        type: 'text',
        content: 'Der Kurs richtet sich an DEI-Verantwortliche, HR-Teams, Führungskräfte und alle, die Inklusion in ihrem Unternehmen vorantreiben möchten. Vorerfahrung ist nicht erforderlich.',
        } as ContentBlock
      ]
    },
    {
      question: 'Was ist im Preis von 998 € enthalten?',
      answer: [
        {
        id: 'faq2-block1',
        type: 'text',
        content: 'Der Preis beinhaltet:',
        } as ContentBlock,
        {
        id: 'faq2-block2',
        type: 'list',
        style: 'unordered',
        items: ['den 2-tägigen Workshop', 'alle Materialien', 'Verpflegung', 'ein Zertifikat', 'und den Zugang zu unserem Netzwerk von Mentor:innen.'],
        } as ContentBlock
      ]
    },
    {
      question: 'Wie oft findet der Workshop statt?',
      answer: [
        {
        id: 'faq3-block1',
        type: 'text',
        content: 'Der Inklusionsführerschein wird quartalsweise angeboten. Die genauen Termine finden Sie auf unserer Website oder auf Anfrage.',
        } as ContentBlock
      ]
    },
  
  ],

  // CTA
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description: 'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen'
  }
};
