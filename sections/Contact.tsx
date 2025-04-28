'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useT();

  return (
    <motion.section
      id="contact"
      className="snap-start min-h-screen py-16 px-4 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
      <p className="mb-6">{t('contact.intro')}</p>
      <ul className="space-y-1 text-center">
        <li>
          {t('contact.emailLabel')}{' '}
          <a className="underline" href="mailto:matiasdeluca2000@gmail.com">
            matiasdeluca2000@gmail.com
          </a>
        </li>
        <li>
          {t('contact.linkedinLabel')}{' '}
          <a className="underline" href="https://www.linkedin.com/in/matias-ariel-deluca-113179225" target="_blank">
            linkedin.com/in/matias-ariel-deluca-113179225
          </a>
        </li>
        <li>
          {t('contact.githubLabel')}{' '}
          <a className="underline" href="https://github.com/JohnnyPegaduro" target="_blank">
            github.com/JohnnyPegaduro
          </a>
        </li>
      </ul>
    </motion.section>
  );
}


