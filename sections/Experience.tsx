// sections/Experience.tsx
'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { motion } from 'framer-motion';

export default function Experience() {
  const t = useT();

  const entries = [
    {
      date: t('experience.period'),
      role: t('experience.role'),
      bullets: [
        t('experience.bullet1'),
        t('experience.bullet2'),
        t('experience.bullet3'),
        t('experience.bullet4'),
        t('experience.bullet5'),
        t('experience.bullet6')
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="snap-start min-h-screen pt-32 pb-16 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        {t('experience.title')}
      </h2>

      <p className="text-center whitespace-pre-line max-w-2xl mx-auto mb-12">
        {t('experience.description')}
      </p>

      <ul className="relative border-l-2 border-primary max-w-xl mx-auto space-y-12">
        {entries.map(({ date, role, bullets }) => (
          <motion.li
            key={date}
            className="pl-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="absolute left-[-9px] top-1 w-4 h-4 bg-primary rounded-full"></span>
            <h3 className="text-xl font-semibold mb-2">
              {role} <span className="text-neutral-500">{date}</span>
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}


