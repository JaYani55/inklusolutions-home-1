import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const Onboarding: ProductData = {
  id: '15',
  slug: 'onboarding',
  name: 'Onboarding',
  subtitle: 'Ein erfolgreicher Bewerbungsprozess ist nur der erste Schritt – das Onboarding entscheidet über einen gelingenden Start. Je nach Art der Behinderung sind vor, während und nach dem ersten Arbeitstag unterschiedliche Aspekte zu berücksichtigen.',
  'trainer-module': true,
  hero: {
    title: 'Onboarding',
    description: 'Ein erfolgreicher Bewerbungsprozess ist nur der erste Schritt – das Onboarding entscheidet über einen gelingenden Start. Je nach Art der Behinderung sind vor, während und nach dem ersten Arbeitstag unterschiedliche Aspekte zu berücksichtigen. Die Sessions vermitteln Fachwissen, praxisnahe Tipps und konkrete Handlungsempfehlungen, ergänzt durch die Erfahrungen von Mentor:innen mit Behinderung. So wird gewährleistet, dass neue Mitarbeitende nicht nur barrierefrei starten, sondern sich vom ersten Tag an willkommen und unterstützt fühlen.',
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
      description: 'Der Workshop umfasst zwei Sessions à 1,5 Stunden sowie ein vorbereitendes Gespräch zur Klärung spezifischer Fragestellungen. Begleitet wird er von erfahrenen Coaches; in der zweiten Session ergänzt ein:e Mentor:in mit Behinderung durch Feedback zu Onboarding-Plänen und deren inklusiver Gestaltung.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Vermittelt werden Fachwissen, Praxisbeispiele und konkrete Tipps für ein inklusives Onboarding von Mitarbeitenden mit Behinderung. Der direkte Austausch mit Mentor:innen ermöglicht ein tieferes Verständnis und praxisnahe Handlungsempfehlungen.',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss liegen Wissen und Instrumente vor, um Onboarding barrierefrei und erfolgreich zu gestalten – mit positivem Effekt für neue Mitarbeitende, Teams und Unternehmenskultur.'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: Users,
      items: [
        'Personalbetreuung',
        'Personalentwicklung',
        'Führungskräfte',
        'Inklusionsbeauftragte/Schwerbehindertenvertretung',
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: Wrench,
      items: [
        'Fachwissen: die notwendigen Schritte des Onboardings',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: eures Onboarding-Konzepts',
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
      answer: 'Jedes Unternehmen ist einzigartig – ebenso die Bedürfnisse seiner Mitarbeitenden. Deshalb entwickeln wir passgenaue Lösungen statt Standardkonzepte. Ergänzend dazu bieten wir spezielle Diagnoseverfahren an, die eine fundierte Analyse der Ausgangssituation ermöglichen.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR MEHR INKLUSION IM UNTERNEHMEN?',
    description: 'Melden Sie sich jetzt für den Inklusionsführerschein an und gestalten Sie aktiv eine inklusivere Zukunft für Ihr Unternehmen!',
    primaryButton: 'Kontakt aufnehmen'
  }
};
