'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { motion } from 'framer-motion';

export default function Projects() {
  const t = useT();

  return (
    <motion.section
      id="projects"
      className="snap-start min-h-screen py-16 px-4 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
      <p className="text-neutral-500">{t('projects.soon')}</p>
    </motion.section>
  );
}

