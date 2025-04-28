'use client';
import { useT } from '../app/i18n/TranslationsContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useT();

  return (
    <motion.section
      id="hero"
      className="snap-start min-h-screen flex items-center bg-transparent px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      {/* grid 1 columna en mobile, 2 en md+ */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto + CTA */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-6">{t('hero.subtitle')}</p>
        </div>
        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Foto de perfil de Matías Deluca"
            width={200}
            height={200}
            className="rounded-full border-4 border-current"
          />
        </div>
      </div>
    </motion.section>
  );
}





