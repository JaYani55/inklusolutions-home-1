// src/data/mentors/mentors.ts
export interface Mentor {
  id: number;
  name: string;
  image: string;
  quote: string;
  role: string;
  expertise: string[];
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Maria Schmidt',
    image: '/Mentor1.jpg',
    quote: 'Echte Inklusion entsteht durch authentische Begegnungen, nicht durch Theorie.',
    role: 'Peer-Mentorin',
    expertise: ['Sensibilisierung', 'Awarenessbildung', 'Führungskultur']
  },
  {
    id: 2,
    name: 'Thomas Weber',
    image: '/Mentor2.jpg', 
    quote: 'Jeder Mensch hat Potenzial – manchmal braucht es nur den richtigen Rahmen.',
    role: 'Peer-Mentor',
    expertise: ['Personalentwicklung', 'Inklusive Teams', 'Change Management']
  },
  {
    id: 3,
    name: 'Sarah Klein',
    image: '/Mentor3.jpg',
    quote: 'Verständnis wächst durch gemeinsame Erfahrungen, nicht durch Vorurteile.',
    role: 'Peer-Mentorin',
    expertise: ['Kommunikation', 'Konfliktlösung', 'Empowerment']
  },
  {
    id: 4,
    name: 'Alex Müller',
    image: '/placeholder-portrait.jpg',
    quote: 'Mit der richtigen Unterstützung können wir alle Hindernisse überwinden.',
    role: 'Peer-Mentor',
    expertise: ['Accessibility', 'Technologie', 'Innovation']
  },
  {
    id: 5,
    name: 'Lena Schmidt',
    image: '/Mentor1.jpg',
    quote: 'Meine eigenen Erfahrungen mit Barrieren im Arbeitsalltag haben mich gelehrt, wie wichtig Empathie und konkrete Handlungspläne sind.',
    role: 'Peer-Mentorin',
    expertise: ['Barrierefreiheit', 'Arbeitsplatzgestaltung', 'Empathie']
  },
  {
    id: 6,
    name: 'Max Mustermann',
    image: '/Mentor2.jpg',
    quote: 'Inklusion beginnt im Kopf. Ich zeige Ihnen, wie Sie Vorurteile erkennen und eine offene Kultur im Unternehmen etablieren können.',
    role: 'Peer-Mentor',
    expertise: ['Kulturwandel', 'Vorurteilsabbau', 'Organisationsentwicklung']
  }
];
