import { ProductData } from '@/types/product';

export const Foerdermittel: ProductData = {
  id: '13',
  slug: 'foerdermittel',
  name: 'Foerdermittel',
  subtitle: 'Die Förderlandschaft für Inklusion in Deutschland ist vielfältig und oft schwer zu überblicken. Dadurch bleiben wertvolle Mittel ungenutzt, die Inklusion im Betrieb entscheidend voranbringen könnten.',
  'trainer-module': true,
  hero: {
    title: 'Fördermittel',
    description: 'Die Masterclass vermittelt einen strukturierten Überblick über zentrale Fördermöglichkeiten, zeigt relevante Optionen auf und gibt praxisnahe Handlungsempfehlungen für die konkrete Nutzung. So können vorhandene Ressourcen gezielt eingesetzt werden, um Inklusion im Unternehmen nachhaltig zu stärken.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '2 Session à 1,5 Std., Handout', label: 'INHALT'},
      { value: 'Nach Anfrage', label: 'PREIS' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Unsere Masterclass besteht aus zwei Sessions à jeweils 1,5 Stunden. Vorab führen wir ein Vorbereitungsgespräch, um die für euch relevanten Förderschwerpunkte zu identifizieren. Jede Session wird fachlich von erfahrenen Coaches begleitet, die durch die komplexe Förderlandschaft führen und praxisnahes Wissen vermitteln.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Die Masterclass gibt einen strukturierten Überblick über die wichtigsten Fördermöglichkeiten zur Stärkung von Inklusion im Unternehmen. Durch konkrete Beispiele und Tipps wird der „Förderdschungel“ übersichtlich und verständlich.',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss der Masterclass liegt Klarheit darüber vor, welche Fördermittel genutzt werden können, um Inklusion im Unternehmen nachhaltig zu fördern. Zudem stehen konkrete Handlungsideen bereit, um vorhandene Ressourcen optimal einzusetzen.'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
  icon: 'Users',
      items: [
        'Recruiting',
        'Personalentwicklung',
        'Inklusionsbeauftragte/Schwerbehindertenvertretung',
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
  icon: 'Wrench',
      items: [
        'Fachwissen: Fördermittel und deren Beantragung',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: Reflexion welche Fördermittel ihr bisher nutzt und welche potentiell sinnvoll für euer Unternehmen ist.',
        'Werkzeugkasten: Fachwissen, Erfahrungsaustausch, Handout'
      ],
      color: 'secondary'
    },
    {
      title: 'Ablauf des Workshops',
      description: 'Workshop-Struktur',
  icon: 'CalendarDays',
      items: [
        'Vorgespräche zur individuellen Gestaltung',
        'Zwei Sessions mit fachlichem und erfahrungsbezogenem Input durch Coach und Mentor:in',
        'Reflexion über die aktuelle Situation',
      ],
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: 'Die Masterclass eignet sich besonders für Recruiting, Personalentwicklung, und Inklusions-/Behindertenbeauftragt*e. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.'
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
