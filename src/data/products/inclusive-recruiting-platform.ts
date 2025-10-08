import { ProductData } from '@/types/product';

export const inclusiveRecruitingPlatform: ProductData = {
  id: '2',
  slug: 'inclusive-recruiting-platform', // Modern, clean slug
  name: 'Inclusive Recruiting Platform',
  subtitle: 'Die spezialisierte Job-Plattform für gelebte Inklusion',
  'trainer-module': false, // This is a platform, not a training, so trainer module is off
  hero: {
    title: 'Talente, nicht Barrieren',
    description: 'Unsere spezialisierte Recruiting-Plattform verbindet Sie mit einem vielfältigen Pool an qualifizierten Fachkräften und stellt sicher, dass Ihr Bewerbungsprozess für alle zugänglich ist.',
    image: '/images/products/platform-hero.jpg'
  },
  features: [
    {
      title: 'Erreichen Sie einen ungenutzten Talentpool',
      description: 'Präsentieren Sie Ihre Stellenangebote gezielt einem Netzwerk von Talenten mit Behinderungen, die aktiv nach inklusiven Arbeitgebern suchen. Erweitern Sie Ihre Reichweite und finden Sie hochmotivierte Fachkräfte.'
    },
    {
      title: 'Barrierefreiheit als Standard',
      description: 'Von der Stellenausschreibung bis zum Bewerbungsabschluss – unsere Plattform ist nach WCAG-Standards konzipiert. Bieten Sie allen Kandidat:innen eine reibungslose und faire Bewerbungserfahrung, ohne technischen Aufwand für Sie.',
      reverse: true
    },
    {
      title: 'Stärken Sie Ihre Arbeitgebermarke',
      description: 'Zeigen Sie Ihr Engagement für Inklusion und positionieren Sie sich als attraktiver Arbeitgeber. Unsere Plattform hilft Ihnen, Ihre Werte authentisch zu kommunizieren und die richtigen Talente anzuziehen.'
    }
  ],
  cards: [
    {
      title: 'Vielfältiger Talentpool',
      description: 'Direkter Zugang',
      icon: 'Users', // String identifier for the icon
      items: [
        'Netzwerk qualifizierter Fachkräfte',
        'Kandidat:innen mit diversen Hintergründen',
        'Fokus auf Fähigkeiten und Potenzial',
        'Aktive Suche nach inklusiven Unternehmen'
      ],
      color: 'primary'
    },
    {
      title: 'Inklusive Tools',
      description: 'Prozesse optimieren',
      icon: 'Wrench', // String identifier for the icon
      items: [
        'Barrierefreie Stellenanzeigen-Templates',
        'WCAG-konformer Bewerbungsprozess',
        'Tools zur Reduzierung von Unconscious Bias',
        'Einfaches Management von Kandidat:innen'
      ],
      color: 'secondary'
    },
    {
      title: 'Compliance & Reporting',
      description: 'Sicherheit & Einblicke',
      icon: 'ShieldCheck', // String identifier for the icon
      items: [
        'Unterstützung bei gesetzlichen Anforderungen',
        'Anonymisierte Daten zu Bewerbungen',
        'Einblicke in die Diversität Ihrer Pipeline',
        'DSGVO-konforme Datenverarbeitung'
      ],
      color: 'accent'
    }
  ],
  faq: [
    {
      question: 'Ist die Plattform für jede Unternehmensgröße geeignet?',
      answer: 'Ja, unsere Plattform ist skalierbar und bietet Lösungen für Start-ups, KMUs und große Konzerne.'
    },
    {
      question: 'Wie stellen Sie die Qualifikation der Kandidat:innen sicher?',
      answer: 'Wir arbeiten mit einem Netzwerk von Partnerorganisationen zusammen und bieten den Talenten Ressourcen zur Weiterbildung, um eine hohe Qualität im Talentpool zu gewährleisten.'
    },
    {
      question: 'Lässt sich die Plattform in bestehende HR-Systeme integrieren?',
      answer: 'Wir bieten standardisierte Schnittstellen (APIs) zur Anbindung an gängige Bewerbermanagementsysteme. Sprechen Sie uns für eine individuelle Prüfung an.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR INKLUSIVES RECRUITING?',
    description: 'Fordern Sie eine kostenlose Demo an und entdecken Sie, wie einfach es sein kann, die besten Talente für Ihr Unternehmen zu finden – ohne Barrieren.',
    primaryButton: 'Demo anfragen',
    secondaryButton: 'Alle Produkte'
  }
};
