// sections/Projects.tsx
'use client';

import { useT } from '../app/i18n/TranslationsContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define tu tipo de proyecto
type Project = {
  key: string;
  image: string;
  repoLink: string;
  demoLink?: string;
};

// Lista de proyectos con claves de traducción para título y descripción
const projects: Project[] = [
  {
    key: 'project1',
    image: '/projects/puragenetica.png',
    repoLink: 'https://github.com/JohnnyPegaduro/Proyecto_Pura_Genetica',
    demoLink: 'https://johnnypegaduro.github.io/Proyecto_Pura_Genetica/'
  }
  // Añade más proyectos aquí con claves únicas
];

export default function Projects() {
  const t = useT();

  return (
    <section id="projects" className="snap-start min-h-screen pt-32 pb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">{t('projects.title')}</h2>

      {/* Carrusel en móvil */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-4">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.key}
              className="snap-start flex-shrink-0 w-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={proj.image}
                  alt={t(`projects.${proj.key}.title`)}
                  width={256}
                  height={144}
                  className="object-cover w-full h-36"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`projects.${proj.key}.title`)}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {t(`projects.${proj.key}.description`)}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={proj.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {t('projects.repo')}
                    </a>
                    {proj.demoLink && (
                      <a
                        href={proj.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {t('projects.demo')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grilla en escritorio */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.key}
            className="flex flex-col bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Image
              src={proj.image}
              alt={t(`projects.${proj.key}.title`)}
              width={384}
              height={216}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`projects.${proj.key}.title`)}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {t(`projects.${proj.key}.description`)}
                </p>
              </div>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={proj.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t('projects.repo')}
                </a>
                {proj.demoLink && (
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {t('projects.demo')}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mensaje si no hay proyectos */}
      {projects.length === 0 && (
        <p className="text-center text-neutral-500 mt-6">
          {t('projects.soon')}
        </p>
      )}
    </section>
  );
}



