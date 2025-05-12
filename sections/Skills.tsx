// sections/Skills.tsx
'use client';
import { useT } from '../app/i18n/TranslationsContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Lista de tecnologías con sus logos en public/logos/
const skills = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'Express.js', logo: '/logos/express.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Jira', logo: '/logos/jira.svg' },
  { name: 'SQL', logo: '/logos/sql.svg' },
  { name: 'Figma', logo: '/logos/figma.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Java', logo: '/logos/java.svg' },
  { name: 'HTML', logo: '/logos/html.svg' },
  { name: 'CSS', logo: '/logos/css.svg' },
  { name: 'Firebase', logo: '/logos/firebase.svg' },
  { name: 'MySQL', logo: '/logos/mysql.svg' },
  { name: 'Sass', logo: '/logos/sass.svg' },
  { name: 'Azure DevOps', logo: '/logos/azure.svg' }
];

// Variants para animación con Framer Motion
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  const t = useT();

  return (
    <section id="skills" className="snap-start min-h-screen pt-32 pb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">{t('skills.title')}</h2>

      {/* Grid responsivo con animación */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center max-w-5xl mx-auto"
      >
        {skills.map(({ name, logo }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <Image
              src={logo}
              alt={name}
              width={64}
              height={64}
              className="hover:scale-110 transition-transform"
            />
            <span className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}