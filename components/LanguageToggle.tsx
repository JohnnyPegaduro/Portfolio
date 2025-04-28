// components/LanguageToggle.tsx
'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useT } from '../app/i18n/TranslationsContext';

export default function LanguageToggle() {
  const t = useT();                  // Para mostrar “ES” / “EN” traducido si quieres
  const router = useRouter();
  const pathname = usePathname() || '';

  const [, segment, ...rest] = pathname.split('/');
  const current: 'en' | 'es' = segment === 'en' ? 'en' : 'es';
  const restPath = rest.length ? '/' + rest.join('/') : '';
  const next = current === 'en' ? 'es' : 'en';
  const href = `/${next}${restPath}`;

  const handle = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button
      onClick={handle}
      className="px-3 py-1 rounded-lg border border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-sm"
      aria-label="Toggle language"
    >
      {current === 'en' ? 'ES' : 'EN'}
    </button>
  );
}

