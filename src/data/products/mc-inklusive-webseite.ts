import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const InklusiveWebseite: ProductData = {
  id: '14',
  slug: 'inklusive-webseite',
  name: 'Inklusive Webseite ',
  subtitle: 'Der erste Eindruck eines Unternehmens entsteht häufig über den Webauftritt. Neben technischer Barrierefreiheit sind dabei vor allem Benutzerfreundlichkeit und Ansprache entscheidend.',
  'trainer-module': true,
  hero: {
    title: 'Inklusive Webseite',
    description: 'Der erste Eindruck eines Unternehmens entsteht häufig über den Webauftritt. Neben technischer Barrierefreiheit sind dabei vor allem Benutzerfreundlichkeit und Ansprache entscheidend. In den Coachings analysieren Mentor:innen mit Behinderung Unternehmenswebsites mit Fokus auf Usability und Ansprache. Vermittelt werden praxisnahes Feedback sowie konkrete, leicht umsetzbare Lösungsvorschläge. So entsteht ein Auftritt, der barrierearm und zugleich inklusiv wirkt – mit positiver Wirkung für Bewerbende wie auch Kund:innen mit Behinderung.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'FORMAT', label: 'ONLINE' },
      { value: 'INHALT', label: 'Vorbereitungsgespräch, 3 Session à 1,5 Std., Handout' },
      { value: 'PREIS', label: 'Nach Anfrage' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Der Workshop umfasst drei Sessions à 1,5 Stunden sowie ein Vorbereitungsgespräch zur Klärung individueller Schwerpunkte. Begleitet wird er von erfahrenen Coaches, ergänzt durch Perspektiven von Mentor:innen mit Behinderung, die direktes Feedback zu Nutzerfreundlichkeit und Ansprache geben.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Vermittelt wird praxisnah, wie Webauftritte barriereärmer, benutzerfreundlicher und inklusiver gestaltet werden können. Analysiert werden Usability und Sprache, ergänzt durch konkrete Hinweise und leicht umsetzbare Lösungen. Der Austausch mit Menschen mit Behinderung schafft ein tieferes Verständnis für digitale Barrieren und deren Abbau.',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss liegen Wissen und Werkzeuge vor,'
      + 'um die Benutzerfreundlichkeit ihrer Website für Menschen mit Behinderungen deutlich zu verbessern, '
      + 'die Ansprache inklusiver und zielgruppenorientierter zu gestalten, '
      + 'potenziellen Bewerbenden und Kund:innen mit Behinderungen einen positiven ersten Eindruck zu ermöglichen. '
     + 'So wird ihr Webauftritt nicht nur barriereärmer, sondern stärkt auch die Attraktivität als inklusives Unternehmen für Mitarbeitende und Kund:innen gleichermaßen.'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: Users,
      items: [
        'Facility Management',
        'Kommunikation',
        'Baubeauftragte und Beauftragte für Barrierefreiheit',
        'HR-Bereich',
        'Inklusionsbeauftragte/Behindertenbeauftragt*e',
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: Wrench,
      items: [
        'Fachwissen zu den unterschiedlichen Barrieren und wie diese reduziert werden können',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: Reflexion welche Barrieren in eurem Unternehmen bestehen und wie diese reduziert werden können.',
        'Werkzeugkasten: Fachwissen, Erfahrungsaustausch, Handout'
      ],
      color: 'secondary'
    },
    {
      title: 'Ablauf des Workshops',
      description: 'Workshop-Struktur',
      icon: CalendarDays,
      items: [
        'Vorgespräche zur individuellen Gestaltung',
        'Zwei Sessions mit fachlichem und erfahrungsbezogenem Input durch Coach und Mentor:in',
        'Reflexion über die aktuelle Situation in eurem Unternehmen für Mitarbeitende mit Behinderung',
      ],
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: 'Die Masterclass eignet sich besonders für Facility Management, Kommunikation, Baubeauftragte und Beauftragte für Barrierefreiheit, HR-Bereich, Inklusions-/Behindertenbeauftragt*e. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.'
    },
    {
      question: 'Findet die Masterclass individuell für unser Unternehmen statt? ',
      answer: 'Ja, die Masterclasses findet ganz individuell für euer Unternehmen statt. Dadurch ist es möglich direkt auf eure Themen einzugehen und mit euch zusammen Schritte für euer Unternehmen herauszuarbeiten.'
    },
    {
      question: 'Mit welcher Masterclass sollte unser Unternehmen beginnen? ',
      answer: 'Jedes Unternehmen ist einzigartig – ebenso die Bedürfnisse seiner Mitarbeitenden. Deshalb entwickeln wir passgenaue Lösungen statt Standardkonzepte. Ergänzend dazu bieten wir spezielle Diagnoseverfahren an, die eine fundierte Analyse der Ausgangssituation ermöglichen. Genauere Informationen dazu finden Sie unter diesem [Link zu den Diagnoseverfahren]. [Diagnose verfahren „unter diesem Link“]'
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description: 'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen'
  }
};
