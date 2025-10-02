import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const Bewerbungsgespraeche: ProductData = {
  id: '12',
  slug: 'bewerbungsgespraeche',
  name: 'Bewerbungsgespraeche',
  subtitle: 'Das Bewerbungsgespräch ist ein entscheidender Schritt im Recruitingprozess. Oft bestehen Unsicherheiten im Umgang mit Bewerber:innen mit Behinderungen.',
  'trainer-module': true,
  hero: {
    title: 'Bewerbungsgespräche',
    description: 'Das Bewerbungsgespräch ist ein entscheidender Schritt im Recruitingprozess. Oft bestehen Unsicherheiten im Umgang mit Bewerber:innen mit Behinderungen. In praxisnahen Bewerbungssimulationen mit Menschen mit unterschiedlichen Behinderungen werden typische Situationen erlebbar. So lassen sich Barrieren abbauen und mehr Sicherheit im Auswahlprozess gewinnen – eine Grundlage für faire und erfolgreiche Personalgewinnung.',
    image: '/mentor-mentee.jpg',
    stats: [
      { value: 'ONLINE', label: 'FORMAT' },
      { value: '3 Session à 1,5 Std., Handout', label: 'INHALT' },
      { value: 'Nach Anfrage', label: 'PREIS' }
    ]
  },
  features: [
    {
      title: 'Format & Rahmen',
      description: 'Der Workshop umfasst drei Sessions à 1,5 Stunden und wird durch ein Vorbereitungsgespräch ergänzt, in dem individuelle Schwerpunkte und Fragestellungen definiert werden. Jede Session wird von erfahrenen Coaches begleitet. Die Bewerbungssimulationen erfolgen mit Menschen mit unterschiedlichen Behinderungen, die direktes Feedback geben und ihre Praxiserfahrungen teilen.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Vermittelt wird praxisnah, wie Bewerbungsgespräche souverän und sicher geführt werden können. Realistische Gesprächssituationen, konkrete Handlungstipps und der Austausch mit Bewerber:innen mit Behinderungen fördern ein tieferes Verständnis für mögliche Barrieren und deren erfolgreiche Überwindung.',
      reverse: true
    },
    { /* Listenformat auf Webseite */
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss der beiden Sessions verfügen Sie über das Wissen und die Erfahrung, um: '
    + 'Bewerbungsgespräche mit Menschen mit Behinderungen professionell und inklusiv zu gestalten, '
    + 'eigene Unsicherheiten im Recruitingprozess abzubauen,' 
    + 'mehr Sicherheit im Umgang mit vielfältigen Bewerber:innen zu gewinnen.'
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
        'Fachwissen: über inklusive Bewerbungsgespräche',
        'Begegnung: Bewerbungssimulationen mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: Bisherige Bewerbungspraxis reflektieren und neue Erfahrungen sammeln',
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
        'Drei Sessions mit fachlichem und erfahrungsbezogenem Input durch Coach und Mentor:in',
        'Reflexion über die aktuelle Situation in eurem Unternehmen für Menschen mit Behinderung',
      ],
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: 'Die Masterclass eignet sich besonders Pecruiting, Personalentwicklung, Führungskräfte, Inklusionsbeauftragte/Schwerbehindertenvertretung. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.'
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
