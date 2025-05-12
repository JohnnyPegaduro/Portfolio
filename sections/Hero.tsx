// sections/Hero.tsx
'use client';
import { useT } from '../app/i18n/TranslationsContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const t = useT();
  const fullText = t('hero.subtitle');
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <motion.section
      id="hero"
      className="snap-start min-h-screen flex items-center bg-transparent px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* TEXTO */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-6">
            {typed}
            <span className="inline-block ml-1 animate-pulse">|</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="inline-block px-6 py-3 font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              {t('hero.cta')}
            </Link>
            <a
              href="/MatiasArielDeluca_CV.pdf"
              download
              className="inline-block px-6 py-3 font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              {t('hero.downloadCV')}
            </a>
          </div>
        </div>
        {/* IMAGEN */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <Image
              src="/profile.jpg"
              alt="Foto de perfil de Matías Deluca"
              width={200}
              height={200}
              className="rounded-full border-4 border-current"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}






