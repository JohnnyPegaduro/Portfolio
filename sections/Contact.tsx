// sections/Contact.tsx
'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { ArrowUp, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const t = useT();

  return (
    <section
      id="contact"
      className="
        snap-start min-h-screen
        flex flex-col justify-between items-center
        pt-64 pb-16 px-4
      "
    >
      {/* Bloque de contacto */}
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="mb-6">{t('contact.intro')}</p>
        <ul className="space-y-2">
          <li>
            {t('contact.emailLabel')}{' '}
            <a className="underline" href="mailto:matiasdeluca2000@gmail.com">
              matiasdeluca2000@gmail.com
            </a>
          </li>
          <li>
            {t('contact.linkedinLabel')}{' '}
            <a
              className="underline"
              href="https://www.linkedin.com/in/matias-ariel-deluca-113179225"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/matias-ariel-deluca-113179225
            </a>
          </li>
          <li>
            {t('contact.githubLabel')}{' '}
            <a
              className="underline"
              href="https://github.com/JohnnyPegaduro"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/JohnnyPegaduro
            </a>
          </li>
        </ul>
      </div>

      {/* Footer integrado */}
      <div className="container mx-auto max-w-2xl">
        <div
          className="
            flex flex-col md:flex-row 
            items-center justify-center md:justify-between
            border-t border-neutral-300 dark:border-neutral-700 pt-6
          "
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="font-semibold">{t('footer.follow')}</span>
            <a
              href="https://www.linkedin.com/in/matias-ariel-deluca-113179225"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/JohnnyPegaduro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition"
            >
              <Github size={24} />
            </a>
          </div>

          <button
            onClick={() => {
              const hero = document.getElementById('hero');
              if (hero) hero.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center space-x-1 hover:text-primary transition"
          >
            <ArrowUp size={16} />
            <span>{t('footer.backToTop')}</span>
          </button>
        </div>

        <p className="text-center text-sm mt-4">© 2025 Matías Deluca</p>
      </div>
    </section>
  );
}







