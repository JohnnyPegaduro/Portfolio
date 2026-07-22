'use client';

import { useT } from '../app/i18n/TranslationsContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

type Project = {
  key: string;
  image?: string;
  repoLink: string;
  demoLink?: string;
  technologies: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    key: 'aroma',
    image: '/projects/aroma-cafe.png',
    repoLink: 'https://github.com/JohnnyPegaduro/Aroma-Cafe',
    demoLink: 'https://johnnypegaduro.github.io/Aroma-Cafe/',
    technologies: ['JavaScript', 'Fetch API', 'LocalStorage', 'Bootstrap'],
    featured: true
  },
  {
    key: 'puragenetica',
    image: '/projects/puragenetica.png',
    repoLink: 'https://github.com/JohnnyPegaduro/Proyecto_Pura_Genetica',
    demoLink: 'https://johnnypegaduro.github.io/Proyecto_Pura_Genetica/',
    technologies: ['HTML5', 'SCSS', 'Bootstrap 4', 'JavaScript']
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useT();

  return (
    <motion.article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-xl dark:bg-neutral-800 ${
        project.featured
          ? 'border-primary/60'
          : 'border-neutral-200 dark:border-neutral-700'
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={project.image}
            alt={t(`projects.${project.key}.imageAlt`)}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {project.featured && (
          <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark dark:text-primary-light">
            {t('projects.featured')}
          </span>
        )}
        <h3 className="text-xl font-bold">{t(`projects.${project.key}.title`)}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {t(`projects.${project.key}.description`)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t('projects.technologies')}>
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-700">
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary-dark hover:text-primary dark:text-primary-light">
            <Github size={18} aria-hidden="true" />
            {t('projects.repo')}
          </a>
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary-dark hover:text-primary dark:text-primary-light">
              {t('projects.demo')}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const t = useT();

  return (
    <section id="projects" className="snap-start min-h-screen px-4 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{t('projects.intro')}</p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.key} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
