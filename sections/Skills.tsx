'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills: Record<string, { name: string; level: number }[]> = {
  Frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind', level: 80 },
    { name: 'TypeScript', level: 75 }
  ],
  Backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 }
  ],
  'Dev-Tools': [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Jira', level: 65 }
  ]
};

export default function Skills() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="snap-start min-h-screen py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">{t('skills.title')}</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="font-semibold mb-4">{category}</h3>
            <ul className="space-y-4">
              {list.map(({ name, level }) => (
                <li key={name}>
                  <div className="flex justify-between mb-1">
                    <span>{name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${level}%` : 0 }}
                      transition={{ duration: 1.25 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


