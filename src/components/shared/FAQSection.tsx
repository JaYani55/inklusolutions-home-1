// app/components/shared/FAQSection.tsx
'use client'; // Notwendig, da Hooks und Framer Motion verwendet

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Wer kann am Inklusionsführerschein teilnehmen?',
    answer: 'Der Workshop richtet sich an DEI-Verantwortliche, Schwerbehindertenvertretungen, Inklusionsbeauftragte, HR-Verantwortliche und Führungskräfte – kurz: an alle, die aktiv an der Gestaltung einer inklusiven Unternehmenskultur mitwirken möchten. Es sind keine Vorkenntnisse notwendig. Wir empfehlen die Teilnahme von mindestens zwei Personen pro Unternehmen, um die Nachhaltigkeit der Umsetzung zu gewährleisten.',
  },
  {
    id: 'faq-2',
    question: 'Was passiert nach dem Workshop?',
    answer: 'Nach dem Workshop erhalten Sie Ihr Zertifikat und den Zugang zu umsetzbaren To-Dos für Ihr Unternehmen. Wir unterstützen Sie dabei, das Gelernte nachhaltig in Ihren Arbeitsalltag zu integrieren. Zusätzlich erhalten Sie Zugang zu unserem Netzwerk von Mentor:innen und ehemaligen Teilnehmer:innen.',
  },
  {
    id: 'faq-3',
    question: 'Gibt es Fördermöglichkeiten für die Teilnahme?',
    answer: 'Je nach Bundesland und individueller Situation können Fördermöglichkeiten bestehen, beispielsweise über Bildungsprämien oder Qualifizierungsoffensiven. Wir empfehlen Ihnen, sich bei den zuständigen Behörden oder Ihrer lokalen IHK/HWK über aktuelle Programme zu informieren. Gerne stellen wir Ihnen alle notwendigen Unterlagen für Anträge bereit.',
  },
  {
    id: 'faq-4',
    question: 'Warum ist die Teilnahme von mindestens zwei Personen pro Unternehmen empfohlen?',
    answer: 'Die Erfahrung zeigt, dass die nachhaltige Umsetzung von Inklusionsmaßnahmen im Unternehmen deutlich effektiver ist, wenn mehrere Personen an einem Strang ziehen. Ein Team kann sich gegenseitig unterstützen, Ideen diskutieren und die Integration der neuen Ansätze in die Unternehmensstrukturen beschleunigen. Es entsteht ein Multiplikatoreffekt.',
  },
  {
    id: 'faq-5',
    question: 'Was passiert an den zwei Workshoptagen?',
    answer: 'Die zwei Tage sind intensiv und interaktiv gestaltet. Sie durchlaufen Module zu Grundlagen des Disability Managements, begegnen Mentor:innen mit Behinderung, simulieren reale Gesprächssituationen und erarbeiten konkrete Handlungsideen. Ziel ist es, Ihnen nicht nur Wissen zu vermitteln, sondern auch Sicherheit und Handlungsspielraum für den Alltag zu geben.',
  },
  {
    id: 'faq-6',
    question: 'Muss ich Vorkenntnisse über Inklusion mitbringen?',
    answer: 'Nein, Vorkenntnisse sind nicht erforderlich. Der Inklusionsführerschein ist so konzipiert, dass er sowohl Einsteigern als auch Personen mit ersten Erfahrungen fundiertes Wissen und praktische Werkzeuge an die Hand gibt. Wir beginnen mit den Grundlagen und führen Sie Schritt für Schritt durch alle wichtigen Themen.',
  },
  {
    id: 'faq-7',
    question: 'Wird das Zertifikat anerkannt?',
    answer: 'Ja, das Zertifikat dokumentiert Ihre Teilnahme an einem qualifizierten Weiterbildungsprogramm im Bereich Inklusion. Es stärkt Ihr Profil und signalisiert Ihr Engagement für eine inklusive Arbeitswelt. Die öffentliche Listung Ihres Unternehmens bei InkluSolutions als „inklusives Unternehmen“ unterstreicht Ihr Engagement zusätzlich.',
  },
];

interface FAQSectionProps {
  theme?: 'warm'; // Jetzt nur noch 'warm' als Option
}

const FAQSection: React.FC<FAQSectionProps> = ({ theme = 'warm' }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  
  // Using theme for potential future styling variations
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const themeClasses = theme === 'warm' ? 'warm-theme' : '';

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Die Theme-Klasse ist jetzt immer 'theme-warm'.
  // Die Tailwind-Klassen nutzen automatisch die --theme- Variablen aus globals.css.
  const containerClasses = `relative z-10 max-w-3xl mx-auto w-full 
                          bg-theme-bg/70 border border-theme-primary/20 backdrop-blur-md 
                          rounded-[2.5rem] shadow-xl p-6 md:p-8`; 

  return (
    <div className={containerClasses}>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border-b border-theme-border/50 last:border-b-0 py-4"
          >
            <button
              className="flex justify-between items-center w-full text-left font-bold text-lg text-theme-text hover:text-theme-primary transition-colors duration-200"
              onClick={() => toggleFAQ(faq.id)}
              aria-expanded={openId === faq.id}
              aria-controls={`faq-answer-${faq.id}`}
            >
              {faq.question}
              <motion.div
                initial={false}
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-6 w-6 text-theme-primary" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  id={`faq-answer-${faq.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-4 overflow-hidden"
                >
                  <p className="text-theme-text/80 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;