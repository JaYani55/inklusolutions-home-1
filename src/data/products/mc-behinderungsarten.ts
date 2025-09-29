import { ProductData } from '@/types/product';
import { Users, Wrench, CalendarDays } from 'lucide-react';

export const Behinderungsarten: ProductData = {
  id: '8',
  slug: 'behinderungsarten',
  name: 'Behinderungsarten',
  subtitle: 'Behinderungen sind vielfältig und mit unterschiedlichen Bedürfnissen verbunden. Die Masterclass vermittelt fundiertes Wissen zu verschiedenen Behinderungsformen und den jeweiligen Bedarfen. Mentor*innen mit eigener Behinderung geben Einblicke aus erster Hand und zeigen, wie Inklusion gelingen kann. Die Inhalte werden individuell auf jedes Unternehmen zugeschnitten.',
  'trainer-module': true,
  hero: {
    title: 'Behinderungsarten',
    description: 'Behinderungen sind vielfältig und mit unterschiedlichen Bedürfnissen verbunden. Die Masterclass vermittelt fundiertes Wissen zu verschiedenen Behinderungsformen und den jeweiligen Bedarfen. Mentor*innen mit eigener Behinderung geben Einblicke aus erster Hand und zeigen, wie Inklusion gelingen kann. Die Inhalte werden individuell auf jedes Unternehmen zugeschnitten.',
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
      description: 'Unser Workshop besteht aus zwei Sessions à jeweils 1,5 Stunden. Vorab führen wir ein gemeinsames Vorbereitungsgespräch, in dem wir Ihre individuellen Schwerpunkte und spezifischen Fragestellungen aufnehmen. Jede Session wird fachlich von einem unserer erfahrenen Coaches begleitet. Ergänzend gibt ein:e Mentor:in mit Behinderung persönliche Einblicke in die eigenen Bedarfe im Arbeitsleben und zeigt auf, wie diese erfolgreich umgesetzt werden können.'
    },
    {
      title: 'Ziel & Nutzen',
      description: 'Der Workshop bietet Ihnen einen praxisnahen Zugang zu den Themen Behinderung und Inklusion im Arbeitskontext. Sie erhalten fundiertes Fachwissen, konkrete Beispiele aus der Praxis sowie hilfreiche Tipps im Umgang mit unterschiedlichen Bedarfen. Durch den Austausch mit Menschen mit Behinderung entwickeln Sie ein tieferes Verständnis und können dieses Wissen direkt in Ihrem Arbeitsalltag anwenden.',
      reverse: true
    },
    {
      title: 'Ergebnisse & Mehrwert',
      description: 'Nach Abschluss der beiden Sessions verfügen Sie über mehr Sicherheit im Umgang mit den Bedarfen von Menschen mit Behinderung. Sie haben sowohl theoretisches Wissen als auch praxisnahe Handlungsideen gewonnen, die Ihnen helfen, Barrieren abzubauen und inklusivere Strukturen zu gestalten.'
    }
  ],
  cards: [
    {
      title: 'Zielgruppen',
      description: 'Wer profitiert',
      icon: Users,
      items: [
        'Führungskräfte',
        'HR-Verantwortliche',
        'Inklusionsbeauftragte/Schwerbehindertenvertretung',
        'Kommunikationsverantwortlich',
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte / Bausteine',
      description: 'Lerninhalte entdecken',
      icon: Wrench,
      items: [
        'Fachwissen zu den unterschiedlichen Behinderungen und den damit verbundenen Bedarf',
        'Begegnung: Gespräche mit Mentor:innen mit Behinderung',
        'Reflexion & Transfer: Reflexion welche Bedarfe in eurem Unternehmen umgesetzt werden könnten und was gebarucht wird.',
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
        'Reflexion über die aktuelle Situation in eurem Unternehmen für Menschen mit Behinderung',
      ],
      color: 'primary'
    }
  ],
  faq: [
    {
      question: 'Für wen eignet sich die Masterclass? ',
      answer: 'Die Masterclass eignet sich besonders für HR- Verantwortliche, Führungskräfte, Inklusions- und Behindertenbeauftragte, Kommunikations- und Marketingbeauftragte. Da Unternehmensstrukturen unterschiedlich sind, klären wir diese Frage gerne auch in unserem persönlichen Beratungsgespräch.'
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
