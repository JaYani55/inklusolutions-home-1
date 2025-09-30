import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const StellenausschreibungJobcarving: ProductData = {
  id: '16',
  slug: 'stellenausschreibung-jobcarving',
  name: 'Inklusive Stellenausschreibung & Jobcarving',
  subtitle: 'Die Ansprache in Stellenausschreibungen ist entscheidend, damit sich potenzielle Mitarbeitende mit Behinderungen angesprochen fühlen.',
  'trainer-module': true,
  hero: {
    title: 'Inklusive Stellenausschreibung & Jobcarving',
    description: 'Die Ansprache in Stellenausschreibungen ist entscheidend, damit sich potenzielle Mitarbeitende mit Behinderungen angesprochen fühlen. Wir analysieren ihre Ausschreibungen und geben praxisorientierts Feedback . Mentor:innen mit eigener Behinderung geben Einblicke und zeigen auf, wie inklusive Formulierungen gelingen. Ergänzend wird das Konzept des Jobcarving vorgestellt: Aufgabenprofile werden so gestaltet, dass individuelle Stärken optimal genutzt werden – ein Gewinn für Mitarbeitende mit Behinderungen wie auch für das gesamte Team.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'FORMAT', label: 'ONLINE' },
      { value: 'INHALT', label: 'Vorbereitungsgespräch, 4 Session à 1,5 Std., Handout' },
      { value: 'PREIS', label: 'Nach Anfrage' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Der Workshop umfasst vier Sessions à 1,5 Stunden sowie ein vorbereitendes Gespräch zur Klärung individueller Schwerpunkte. Begleitet wird er von erfahrenen Coaches; in einer Session geben Mentor:innen mit Behinderung persönliches Feedback zu Stellenausschreibungen.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Vermittelt werden Fachwissen, Praxisbeispiele und Tipps zur inklusiven Gestaltung von Stellenausschreibungen sowie zum Einsatz des Jobcarving zur Entwicklung passgenauer Aufgabenprofile. Der Austausch mit Menschen mit Behinderung schafft zusätzliches Verständnis für inklusive Ansprache und flexible Stellenmodelle.',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss der vier Sessions verfügen Sie über das Wissen und die Werkzeuge, um: '
        + 'Stellenausschreibungen barrierearm und inklusiv zu formulieren, '
        + 'das Konzept des Jobcarving zu verstehen und im eigenen Unternehmen anzuwenden,'
        + 'neue Perspektiven auf die Gewinnung und Bindung von Fachkräften zu gewinnen.'
      + 'Davon profitieren ihre Mitarbeitenden mit und ohne Behinderung – und nicht zuletzt auch potenzielle Bewerber:innen, die sich durch eine passende Ansprache eher für ihr Unternehmen entscheiden.'
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
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: Wrench,
      items: [
        'Fachwissen: Inklusive Stellenausschreibung, Ansprache von potentiellen Mitarbeitenden mit Behinderungen und Praxisbeispiele',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: Zusammen gehen wir eure Stellenausschreibung durch und geben euch wertvolle Tipps',
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
      answer: 'Die Masterclass eignet sich besonders für Mitarbeitende des Recuitings und der Personalentwicklung. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.'
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
