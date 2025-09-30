import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const Vernetzung: ProductData = {
  id: '17',
  slug: 'vernetzung',
  name: 'Vernetzung & Anlaufstellen',
  subtitle: 'Netzwerke sind zentral, um Inklusion im Unternehmen nachhaltig zu verankern.',
  'trainer-module': true,
  hero: {
    title: 'Vernetzung & Anlaufstellen',
    description: 'Netzwerke sind zentral, um Inklusion im Unternehmen nachhaltig zu verankern. Sie ermöglichen Austausch, gegenseitiges Lernen und konkrete Unterstützung – etwa bei Rekrutierung oder Kommunikation. Die Masterclass bietet einen Überblick über relevante Netzwerke und zentrale Anlaufstellen zur Inklusion in der Arbeitswelt. So entsteht ein stabiles Fundament, das Inklusion sichtbar macht und langfristig stärkt.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'FORMAT', label: 'ONLINE' },
      { value: 'INHALT', label: 'Vorbereitungsgespräch, 2 Session à 1,5 Std., Handout' },
      { value: 'PREIS', label: 'Nach Anfrage' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Die Masterclass umfasst zwei Sessions à 1,5 Stunden sowie ein Vorbereitungsgespräch zur Festlegung individueller Schwerpunkte, z. B. in Rekrutierung, Marketing oder Wissenstransfer. Begleitet wird sie von erfahrenen Coaches, ergänzt durch Einblicke von Mentor:innen mit Behinderung in den Umgang mit Netzwerken und deren Potenzial für mehr Inklusion.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Vermittelt werden Wissen über relevante Netzwerke und Anlaufstellen sowie praxisnahe Tipps zur Nutzung dieser Ressourcen für Personalgewinnung, Arbeitgebermarke und Erfahrungsaustausch.',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss stehen fundiertes Wissen und konkrete Handlungsideen bereit, um Netzwerke gezielt in die Unternehmenspraxis zu integrieren und Inklusion nachhaltig zu stärken – mit Mehrwert für Mitarbeitende, Teams und Außenwirkung.'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: Users,
      items: [
        'Recruiting',
        'Personalentwicklung',
        'Marketing',
        'Inklusionsbeauftragte/Schwerbehindertenvertretung',
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: Wrench,
      items: [
        'Fachwissen: Netzwerke und Anlaufstellen in Deutschland',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: Reflexion welche Netzwerke ihr bisher nutzt und welche potentiell sinnvoll für euer Unternehmen sind.',
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
        'Reflexion über die aktuelle Situation',
      ],
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: 'Die Masterclass eignet sich besonders für Recruiting, Personalentwicklung, Marketing und Inklusions-/Behindertenbeauftragt*e. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.'
    },
    {
      question: 'Findet die Masterclass individuell für unser Unternehmen statt? ',
      answer: 'Ja, die Masterclass findet ganz individuell für euer Unternehmen statt. Dadurch ist es möglich direkt auf eure Themen einzugehen und mit euch zusammen Schritte für euer Unternehmen herauszuarbeiten.'
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
