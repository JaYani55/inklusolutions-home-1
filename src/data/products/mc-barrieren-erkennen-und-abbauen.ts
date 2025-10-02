import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const BarrierenErkennenUndAbbauen: ProductData = {
  id: '10',
  slug: 'barrieren-erkennen-und-abbauen',
  name: 'Barrieren erkennen und abbauen',
  subtitle: 'Die Masterclass zeigt, welche Formen von Barrieren es gibt, wie sie erkennbar werden und mit welchen Maßnahmen sie abgebaut werden können – ein Gewinn für Mitarbeitende mit Behinderung und für die gesamte Belegschaft.',
  'trainer-module': true,
  hero: {
    title: 'Barrieren erkennen und abbauen',
    description: 'Neben physischen gibt es auch soziale, visuelle oder akustische Barrieren, die Mitarbeitenden mit Behinderung im Arbeitsalltag im Weg stehen.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 Session à 1,5 Std., Handout', label: 'INHALT' },
      { value: 'Nach Anfrage', label: 'PREIS' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Unser Workshop besteht aus zwei Sessions à jeweils 1,5 Stunden. Vorab führen wir ein gemeinsames Vorbereitungsgespräch, in dem wir individuelle Schwerpunkte und spezifischen Fragestellungen aufnehmen. Jede Session wird fachlich von einem unserer erfahrenen Coaches begleitet. Ergänzend gibt ein:e Mentor:in mit Behinderung persönliche Einblicke in die eigenen Barrieren im Arbeitsleben und zeigt auf, wie diese erfolgreich überwunden werden können. '
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Der Workshop vermittelt einen praxisnahen Zugang zu den Themen Barrieren und deren Abbau. Vermittelt werden fundiertes Fachwissen, konkrete Beispiele und praxisorientierte Tipps. Durch den Austausch mit Menschen mit Behinderung entsteht ein tieferes Verständnis, das direkt in den Arbeitsalltag einfließen kann. ',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss der beiden Sessions stehen fundiertes Wissen und konkrete Handlungsideen zur Verfügung, um unterschiedliche Arten von Barrieren zu erkennen und zu reduzieren. Davon profitieren sowohl Mitarbeitende mit und ohne Behinderung als auch potenzielle Kundinnen und Kunden. '
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
        'Inklusions-/Behindertenbeauftragt*e'
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
      answer: 'edes Unternehmen ist einzigartig – ebenso die Bedürfnisse seiner Mitarbeitenden. Deshalb entwickeln wir passgenaue Lösungen statt Standardkonzepte. Ergänzend dazu bieten wir spezielle Diagnoseverfahren an, die eine fundierte Analyse der Ausgangssituation ermöglichen.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description: 'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen'
  }
};
