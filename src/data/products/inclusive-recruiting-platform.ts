import { ContentBlock } from '@/types/content';
import { ProductData } from '@/types/product';

export const inclusiveRecruitingPlatform: ProductData = {
  id: '2',
  slug: 'inclusive-recruiting-platform',
  name: 'Inclusive Recruiting Platform',
  subtitle: 'Die spezialisierte Job-Plattform für gelebte Inklusion',
  'trainer-module': false,

  // hero – description now uses a ContentBlock array
  hero: {
    title: 'Talente, nicht Barrieren',
    description: [
      {
        id: 'hero-desc-1',
        type: 'text',
        content:
          'Unsere spezialisierte Recruiting-Plattform verbindet Sie mit einem vielfältigen Pool an qualifizierten Fachkräften und stellt sicher, dass Ihr Bewerbungsprozess für alle zugänglich ist.',
      } as ContentBlock,
    ],
    image: '/gruppenbild_handsup1.jpg',
  },

  // features – each description is now a ContentBlock array
  features: [
    {
      title: 'Erreichen Sie einen ungenutzten Talentpool',
      description: [
        {
          id: 'feat-desc-1',
          type: 'text',
          content:
            'Präsentieren Sie Ihre Stellenangebote gezielt einem Netzwerk von Talenten mit Behinderungen, die aktiv nach inklusiven Arbeitgebern suchen. Erweitern Sie Ihre Reichweite und finden Sie hochmotivierte Fachkräfte.',
        } as ContentBlock,
      ],
    },
    {
      title: 'Barrierefreiheit als Standard',
      description: [
        {
          id: 'feat-desc-2',
          type: 'text',
          content:
            'Von der Stellenausschreibung bis zum Bewerbungsabschluss – unsere Plattform ist nach WCAG-Standards konzipiert. Bieten Sie allen Kandidat:innen eine reibungslose und faire Bewerbungserfahrung, ohne technischen Aufwand für Sie.',
        } as ContentBlock,
      ],
      alignment: 'right',
    },
    {
      title: 'Stärken Sie Ihre Arbeitgebermarke',
      description: [
        {
          id: 'feat-desc-3',
          type: 'text',
          content:
            'Zeigen Sie Ihr Engagement für Inklusion und positionieren Sie sich als attraktiver Arbeitgeber. Unsere Plattform hilft Ihnen, Ihre Werte authentisch zu kommunizieren und die richtigen Talente anzuziehen.',
        } as ContentBlock,
      ],
    },
  ],

  // cards
  cards: [
    {
      title: 'Vielfältiger Talentpool',
      description: 'Direkter Zugang',
      icon: 'Users',
      content: [
        { type: 'bullet-point', id: 'card1-1', text: 'Netzwerk qualifizierter Fachkräfte' },
        { type: 'bullet-point', id: 'card1-2', text: 'Kandidat:innen mit diversen Hintergründen' },
        { type: 'bullet-point', id: 'card1-3', text: 'Fokus auf Fähigkeiten und Potenzial' },
        { type: 'bullet-point', id: 'card1-4', text: 'Aktive Suche nach inklusiven Unternehmen' },
      ],
      color: 'primary',
    },
    {
      title: 'Inklusive Tools',
      description: 'Prozesse optimieren',
      icon: 'Wrench',
      content: [
        { type: 'bullet-point', id: 'card2-1', text: 'Barrierefreie Stellenanzeigen-Templates' },
        { type: 'bullet-point', id: 'card2-2', text: 'WCAG-konformer Bewerbungsprozess' },
        { type: 'bullet-point', id: 'card2-3', text: 'Tools zur Reduzierung von Unconscious Bias' },
        { type: 'bullet-point', id: 'card2-4', text: 'Einfaches Management von Kandidat:innen' },
      ],
      color: 'secondary',
    },
    {
      title: 'Compliance & Reporting',
      description: 'Sicherheit & Einblicke',
      icon: 'ShieldCheck',
      content: [
        { type: 'bullet-point', id: 'card3-1', text: 'Unterstützung bei gesetzlichen Anforderungen' },
        { type: 'bullet-point', id: 'card3-2', text: 'Anonymisierte Daten zu Bewerbungen' },
        { type: 'bullet-point', id: 'card3-3', text: 'Einblicke in die Diversität Ihrer Pipeline' },
        { type: 'bullet-point', id: 'card3-4', text: 'DSGVO-konforme Datenverarbeitung' },
      ],
      color: 'accent',
    },
  ],

  // faq – answers are now arrays of ContentBlock objects
  faq: [
    {
      question: 'Ist die Plattform für jede Unternehmensgröße geeignet?',
      answer: [
        {
          id: 'faq-1-block-1',
          type: 'text',
          content:
            'Ja, unsere Plattform ist skalierbar und bietet Lösungen für Start-ups, KMUs und große Konzerne.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Wie stellen Sie die Qualifikation der Kandidat:innen sicher?',
      answer: [
        {
          id: 'faq-2-block-1',
          type: 'text',
          content:
            'Wir arbeiten mit einem Netzwerk von Partnerorganisationen zusammen und bieten den Talenten Ressourcen zur Weiterbildung, um eine hohe Qualität im Talentpool zu gewährleisten.',
        } as ContentBlock,
      ],
    },
    {
      question: 'Lässt sich die Plattform in bestehende HR-Systeme integrieren?',
      answer: [
        {
          id: 'faq-3-block-1',
          type: 'text',
          content:
            'Wir bieten standardisierte Schnittstellen (APIs) zur Anbindung an gängige Bewerbermanagementsysteme. Sprechen Sie uns für eine individuelle Prüfung an.',
        } as ContentBlock,
      ],
    },
  ],

  // CTA
  cta: {
    title: 'BEREIT FÜR INKLUSIVES RECRUITING?',
    description:
      'Fordern Sie eine kostenlose Demo an und entdecken Sie, wie einfach es sein kann, die besten Talente für Ihr Unternehmen zu finden – ohne Barrieren.',
    primaryButton: 'Demo anfragen',
    secondaryButton: 'Alle Produkte',
  },
};
