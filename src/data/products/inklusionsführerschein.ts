import { ProductData } from '@/types/product';
// Removed direct icon imports to fix type error
// import { Users, Wrench, CalendarDays } from 'lucide-react';

export const inklusionsführerschein: ProductData = {
  id: '1',
  slug: 'inklusionsführerschein',
  name: 'Inklusionsführerschein',
  subtitle: 'Praktisches Wissen und echtes Verständnis für eine inklusive Unternehmenskultur',
  'trainer-module': true,
  hero: {
    title: 'Sei Teil der Veränderung - hol dir den Inklusionsführerschein',
    description: 'Erlebe zwei Tage voller Perspektivwechsel, praxisnaher Impulse und echter Begegnungen - für mehr Sicherheit und Handlungsspielraum im Umgang mit Behinderung im Arbeitsleben.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: '2 TAGE', label: 'INTENSIV-WORKSHOP' },
      { value: '998 €', label: 'PRO PERSON' },
      { value: 'In Präsenz', label: 'FORMAT' }
    ]
  },
  features: [
    {
      title: '',
      description: '"Würdest du deinen Führerschein bei jemandem machen, der nie selbst gefahren ist? Deshalb arbeiten wir mit Mentor:innen, die wissen, wovon sie sprechen." - Nils Dreyer'
    },
    {
      title: 'Crashkurs für wirksame Inklusion',
      description: 'Der Inklusionsführerschein ist dein Start mit Haltung und Handwerkzeug - für alle, die in ihrem Unternehmen beim Thema Inklusion wirklich etwas bewegen wollen. Er verbindet fundiertes Wissen, ehrliche Selbstreflexion und echte Begegnungen mit Expert:innen mit gelebter Behinderung. So bekommst du Sprache, Strategien und Mut statt Unsicherheit - und legst die Basis für wirksames Handeln.',
      reverse: true
    },
    {
      title: 'In 2 Tagen zu sicherem Handeln',
      description: 'Im zweitäigen Präsenz-Workshop durchläufst du kompakt Theorie und Praxis: typische Ängste bennenen, Fallstricke erkennen, Rolle klären. Du trainierst echte Gesprächssituationen, erhältst direktes Feedback von Mentor:innen, arbeitest am eigenen Unternehmenskontext und nimmst einen konkreten Transferauftrag mit. Ergebnis: spürbare Handlungssicherheit, klare nächste Schritte und ein Zertifikat - bereit, Inklusion im Arbeitsalltag...'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: 'Users',
      items: [
        'DEI-Verantwortliche',
        'Schwerbehindertenvertretungen / Inklusionsbeauftragte',
        'HR-Verantwortliche',
        'Führungskräfte mit Verantwortung für Kultur & Personal'
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: 'Wrench',
      items: [
        'Grundlagen: Disability Basics (Begriffe, Haltung), Unconscious Bias, DEI & rechtliche Grundlagen',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Simulationen: Bewerbungsgespräch, Onboarding, Kommunikation',
        'Reflexion & Transfer: Canvas-Arbeit, Handlungsideen, Peer-Feedback',
        'Werkzeugkasten: Argumente, Formulierungen, nächste Schritte'
      ],
      color: 'secondary'
    },
    {
      title: 'Ablauf des Workshops',
      description: 'Workshop-Struktur',
      icon: 'CalendarDays',
      items: [
        'Zwei intensive Tage mit Theorie und Praxis',
        'Thematisierung typischer Ängste und Fallstricke',
        'Training echter Gesprächssituationen',
        'Direktes Feedback von Mentor:innen',
        'Entwicklung individueller Umsetzungsschritte'
      ],
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen ist der Inklusionsführerschein geeignet?',
      answer: 'Der Kurs richtet sich an DEI-Verantwortliche, HR-Teams, Führungskräfte und alle, die Inklusion in ihrem Unternehmen vorantreiben möchten. Vorerfahrung ist nicht erforderlich.'
    },
    {
      question: 'Was ist im Preis von 998 € enthalten?',
      answer: 'Der Preis beinhaltet den 2-tägigen Workshop, alle Materialien, Verpflegung, ein Zertifikat und den Zugang zu unserem Netzwerk von Mentor:innen.'
    },
    {
      question: 'Wie oft findet der Workshop statt?',
      answer: 'Der Inklusionsführerschein wird quartalsweise angeboten. Die genauen Termine finden Sie auf unserer Website oder auf Anfrage.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description: 'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen'
  }
};
