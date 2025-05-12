// components/Footer.tsx
'use client';
import { useT } from '../app/i18n/TranslationsContext';
import { ArrowUp, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Redes */}
        <div className="flex items-center space-x-4">
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
          className="flex items-center space-x-1 hover:text-primary transition mt-4 md:mt-0"
        >
          <ArrowUp size={16} />
          <span>{t('footer.backToTop')}</span>
        </button>
      </div>

      <p className="text-center text-sm mt-4">© 2025 Matías Deluca</p>
    </footer>
  );
}
