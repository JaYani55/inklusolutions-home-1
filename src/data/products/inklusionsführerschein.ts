import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const inklusionsführerschein: ProductData = {
  id: '1',
  slug: 'inklusionsführerschein',
  name: 'Inklusionsführerschein',
  subtitle: 'Praktisches Wissen und echtes Verständnis für eine inklusive Unternehmenskultur',
  hero: {
    title: 'Der Inklusionsführerschein',
    description: 'Praktisches Wissen und echtes Verständnis für eine inklusive Unternehmenskultur. Entwickle einen konkreten Umsetzungsplan für dein Unternehmen.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: '2 TAGE', label: 'INTENSIV-WORKSHOP' },
      { value: '998 €', label: 'PRO PERSON' },
      { value: 'HANDLUNGSPLAN', label: 'FÜR IHR UNTERNEHMEN' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Unser Inklusionsführerschein ist ein 2-tägiger Präsenz-Workshop, der quartalsweise stattfindet und auf maximal 25 Teilnehmende begrenzt ist. Der Preis von 998 € pro Person beinhaltet alle Materialien und ein Zertifikat. Wir empfehlen mindestens zwei Personen pro Unternehmen, um eine nachhaltige Umsetzung zu gewährleisten.',
      image: '/workshop-setting.jpg'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Dieser Kurs ist Ihr idealer Einstieg in die praktische Inklusionsarbeit im Unternehmen. Wir verbinden fundiertes Wissen, gezielte Selbstreflexion, intensiven Austausch mit Expert:innen aus eigener Erfahrung und praktische Übungen. Das Ergebnis sind konkrete Handlungsideen, persönliche Sicherheit im Umgang mit Behinderung und ein strategisches Verständnis von DEI-Prozessen.',
      image: '/team-collaboration.jpg',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss des Inklusionsführerscheins verfügen Sie über mehr Sicherheit in der Kommunikation, fundiertes Wissen über Barrieren und deren Lösungsansätze sowie ein strategisches Verständnis für umfassende DEI-Prozesse. Sie erhalten ein Zertifikat und Ihr Unternehmen wird bei InkluSolutions öffentlich als "inklusives Unternehmen" gelistet.',
      image: '/certificate-award.jpg'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: Users,
      image: '/diverse-professionals.jpg',
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
      icon: Wrench,
      image: '/tools-and-materials.jpg',
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
      icon: CalendarDays,
      image: '/calendar-planning.jpg',
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
    primaryButton: 'Jetzt Platz sichern',
    secondaryButton: 'Noch Fragen?'
  }
};
