import { ProductData } from '@/types/product';
import { Target, Video, TrendingUp } from 'lucide-react';

export const vielfaltSichtbarMachen: ProductData = {
  id: '7',
  slug: 'produkt-vielfalt-sichtbar-machen',
  name: 'Vielfalt sichtbar machen',
  subtitle: 'Vielfalt sichtbar machen statt Geld verschenken',
  hero: {
    title: 'Lass uns Reden',
    description: 'In Deutschland werden jedes Jahr Millionen Euro Ausgleichsabgaben gezahlt – weil viele Mitarbeitende ihre Behinderung nicht offenlegen. Wie viele unentdeckte Menschen mit Behinderung gibt es bei euch? Kennt ihr die ganze Vielfalt?',
    image: '/diverse-professionals.jpg'
  },
  features: [
    {
      title: 'Warum wir',
      description: 'Wir erzählen authentische Geschichten, die eure Mitarbeitenden empowern, Berührungsängste abbauen und echte Nähe schaffen. ✔ Authentische Kurzporträts aus dem echten Leben ✔ Mutmacher, die Räume für Offenheit schaffen ✔ Türöffner für Gespräche, die sonst nicht stattfinden',
      image: '/emotional-hero.jpg'
    },
    {
      title: 'Mit starken Geschichten viel bewirken',
      description: 'Inklusion geht auch einfach: Wir bringen die Geschichten, ihr schafft den Wandel – sichtbar und nahbar. Porträts auswählen – inspirierende Videos aus eurer Branche oder passend zu eurer Kultur. Inhalte bereitstellen – Videos & begleitende Materialien für eure interne Kommunikation. Wirkung entfalten – Gespräche, Sichtbarkeit und Vertrauen im Unternehmen schaffen.',
      image: '/film.jpg',
      reverse: true
    },
    {
      title: 'Echte Begegnung, echter Wandel',
      description: 'Wir lassen Inklusion nicht im Video enden – wir holen die Menschen auf die Bühne. Echte Begegnung, echter Wandel.',
      image: '/team-collaboration.jpg'
    }
  ],
  cards: [
    {
      title: 'Porträts auswählen',
      description: 'Einstieg',
      icon: Target,
      image: '/placeholder-portrait.jpg',
      items: [
        'Gemeinsam finden wir die passenden Stimmen und Geschichten',
        'Individuell abgestimmt auf eure Ziele',
        'Inspirierende Videos aus eurer Branche',
        'Passend zu eurer Unternehmenskultur'
      ],
      color: 'primary'
    },
    {
      title: 'Inhalte erhalten & nutzen',
      description: 'Video-Paket',
      icon: Video,
      image: '/placeholder-videos.jpg',
      items: [
        'Video mit eurem Logo & Intro/Outro',
        'Lizenz zur Nutzung auf internen Kanälen (Intranet, Schulungen, interne Events)',
        'Tutorials für einfache Einbindung',
        'Textbausteine & Fachartikel zum Video',
        '1h Kommunikationsberatung für gezielte Platzierung & Anschlussmaßnahmen'
      ],
      color: 'secondary'
    },
    {
      title: 'Wirkung entfalten',
      description: 'Wandel schaffen',
      icon: TrendingUp,
      image: '/team-collaboration.jpg',
      items: [
        'Gespräche initiieren und fördern',
        'Sichtbarkeit von Vielfalt erhöhen',
        'Vertrauen im Unternehmen stärken',
        'Offene Unternehmenskultur entwickeln',
        'Langfristige Verhaltensänderung bewirken'
      ],
      color: 'accent'
    }
  ],
  faq: [
    {
      question: 'Warum ist es wichtig, Geschichten sichtbar zu machen?',
      answer: 'Viele Mitarbeitende verschweigen ihre Behinderung aus Angst vor Nachteilen. Authentische Geschichten schaffen Vertrauen, bauen Hemmungen ab und fördern eine offene Unternehmenskultur.'
    },
    {
      question: 'Was unterscheidet euer Angebot von reinen Videos?',
      answer: 'Wir bringen die Menschen hinter den Geschichten direkt ins Gespräch – durch Live-Sessions, Q&As und sichere Begegnungen. So wird aus Sichtbarkeit echter Wandel.'
    },
    {
      question: 'Wie funktioniert der Ablauf konkret?',
      answer: 'Ihr wählt passende Porträts, wir liefern die Inhalte. Anschließend begleiten wir euch bei der internen Nutzung – von Townhalls bis Intranet – und beraten, wie ihr die Wirkung maximiert.'
    },
    {
      question: 'Welche Materialien bekomme ich?',
      answer: 'Ein komplettes Video-Paket mit Logo/Branding, interner Nutzungslizenz, Tutorials, Textbausteinen und einer Kommunikationsberatung.'
    },
    {
      question: 'Welche Wirkung haben die Inhalte im Unternehmen?',
      answer: 'Sie fördern Identifikation, machen Vielfalt konkret, eröffnen Räume für Gespräche und stärken eine Kultur von Offenheit und Vertrauen.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR ECHTE SICHTBARKEIT?',
    description: 'Lasst uns gemeinsam Vielfalt in eurem Unternehmen sichtbar machen und eine Kultur der Offenheit schaffen!',
    primaryButton: 'Video-Paket anfragen',
    secondaryButton: 'Mehr erfahren'
  }
};
