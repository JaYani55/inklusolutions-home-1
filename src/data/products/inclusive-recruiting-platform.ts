import { ProductData } from '@/types/product';

export const inclusiveRecruitingPlatform: ProductData = {
  id: '2',
  slug: 'produkt-inclusive-recruiting-platform',
  name: 'Inclusive Recruiting Platform',
  subtitle: 'Spezialisierte Plattform für barrierefreies Recruiting',
  hero: {
    title: 'Inclusive Recruiting Platform',
    description: 'Eine spezialisierte Plattform für barrierefreies Recruiting. Finden Sie die besten Talente unabhängig von körperlichen Einschränkungen.',
    image: '/placeholder-platform.jpg'
  },
  features: [
    {
      title: 'Barrierefreie Stellenausschreibungen',
      description: 'Erstellen Sie Stellenausschreibungen, die für alle zugänglich sind und diverse Kandidaten ansprechen.',
      image: '/placeholder-platform.jpg'
    },
    {
      title: 'Inklusive Bewerbungsprozesse',
      description: 'Optimierte Bewerbungsprozesse, die Barrieren abbauen und faire Chancen für alle schaffen.',
      image: '/placeholder-platform.jpg',
      reverse: true
    }
  ],
  faq: [
    {
      question: 'Wie funktioniert die Plattform?',
      answer: 'Unsere Plattform bietet speziell entwickelte Tools für inklusives Recruiting. Details folgen in der finalen Produktbeschreibung.'
    }
  ],
  cta: {
    title: 'BEREIT FÜR INKLUSIVES RECRUITING?',
    description: 'Kontaktieren Sie uns für weitere Informationen zur Inclusive Recruiting Platform.',
    primaryButton: 'Mehr erfahren',
    secondaryButton: 'Demo anfragen'
  }
};
