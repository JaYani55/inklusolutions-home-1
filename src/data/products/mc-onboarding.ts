import { ProductData } from '@/types/product';
import { ContentBlock } from '@/types/content';

export const Onboarding: ProductData = {
  id: '15',
  slug: 'onboarding',
  name: 'Onboarding',
  subtitle:
    'Ein erfolgreicher Bewerbungsprozess ist nur der erste Schritt – das Onboarding entscheidet über einen gelingenden Start. Je nach Art der Behinderung sind vor, während und nach dem ersten Arbeitstag unterschiedliche Aspekte zu berücksichtigen.',
  'trainer-module': true,
  hero: {
    title: 'Onboarding',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content:
          'Ein erfolgreicher Bewerbungsprozess ist nur der erste Schritt – das Onboarding entscheidet über einen gelingenden Start. Je nach Art der Behinderung sind vor, während und nach dem ersten Arbeitstag unterschiedliche Aspekte zu berücksichtigen. Die Sessions vermitteln Fachwissen, praxisnahe Tipps und konkrete Handlungsempfehlungen, ergänzt durch die Erfahrungen von Mentor:innen mit Behinderung. So wird gewährleistet, dass neue Mitarbeitende nicht nur barrierefrei starten, sondern sich vom ersten Tag an willkommen und unterstützt fühlen.',
      } as ContentBlock,
    ],
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 Session à 1,5 Std., Handout', label: 'INHALT' },
      { value: 'Nach Anfrage', label: 'PREIS' },
    ],
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: [
        {
          id: 'feat-1-desc-1',
          type: 'text',
          content:
            'Der Workshop umfasst zwei Sessions à 1,5 Stunden sowie ein vorbereitendes Gespräch zur Klärung spezifischer Fragestellungen. Begleitet wird er von erfahrenen Coaches; in der zweiten Session ergänzt ein:e Mentor:in mit Behinderung durch Feedback zu Onboarding-Plänen und deren inklusiver Gestaltung.',
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
            'Vermittelt werden Fachwissen, Praxisbeispiele und konkrete Tipps für ein inklusives Onboarding von Mitarbeitenden mit Behinderung. Der direkte Austausch mit Mentor:innen ermöglicht ein tieferes Verständnis und praxisnahe Handlungsempfehlungen.',
        } as ContentBlock,
      ],
      alignment: 'right',
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: [
        {
          id: 'feat-3-desc-1',
          type: 'text',
          content:
            'Nach Abschluss liegen Wissen und Instrumente vor, um Onboarding barrierefrei und erfolgreich zu gestalten – mit positivem Effekt für neue Mitarbeitende, Teams und Unternehmenskultur.',
        } as ContentBlock,
      ],
    },
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: 'Users',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'Personalbetreuung' },
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
        { type: 'bullet-point', id: 'card2-1', text: 'Fachwissen: die notwendigen Schritte des Onboardings' },
        { type: 'bullet-point', id: 'card2-2', text: 'Begegnung: Gespräche mit Mentor:innen mit Behinderung' },
        { type: 'bullet-point', id: 'card2-3', text: 'Reflexion & Transfer: eures Onboarding-Konzepts' },
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
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: [
        {
          id: 'faq-1-ans-1',
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
          id: 'faq-2-ans-1',
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
          id: 'faq-3-ans-1',
          type: 'text',
          content:
            'Jedes Unternehmen ist einzigartig – ebenso die Bedürfnisse seiner Mitarbeitenden. Deshalb entwickeln wir passgenaue Lösungen statt Standardkonzepte. Ergänzend dazu bieten wir spezielle Diagnoseverfahren an, die eine fundierte Analyse der Ausgangssituation ermöglichen.',
        } as ContentBlock,
      ],
    },
  ],
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description:
      'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen',
  },
};
