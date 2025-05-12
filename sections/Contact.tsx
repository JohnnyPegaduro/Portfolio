// sections/Contact.tsx
'use client';
import { useT } from '../app/i18n/TranslationsContext';
import ContactForm from './ContactForm';
import { ArrowUp, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const t = useT();

  return (
    <section
      id="contact"
      className={
        `
        snap-start min-h-screen
        flex flex-col items-center justify-start
        pt-48 pb-8 px-4  /* Ajustado padding-top y padding-bottom */
        space-y-8        /* Reducido espacio entre bloques */
      `}
    >
      {/* Título e intro */}
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="mb-6">{t('contact.intro')}</p>
      </div>

      {/* Formulario */}
      <ContactForm />

      {/* Footer integrado */}
      <div className="container mx-auto max-w-2xl w-full">
        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Redes */}
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

          {/* Back to top */}
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










