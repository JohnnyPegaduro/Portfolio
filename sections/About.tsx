'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { motion } from 'framer-motion';

export default function About() {
  const t = useT();

  return (
    <motion.section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center py-16 px-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
        <p className="leading-relaxed">{t('about.text')}</p>
      </div>
    </motion.section>
  );
}

