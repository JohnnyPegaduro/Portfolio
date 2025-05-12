// components/Navbar.tsx
'use client';

import React, { ReactNode } from 'react';
import { useT } from '../app/i18n/TranslationsContext';

interface NavbarProps {
  children?: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const t = useT();
  const navItems = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-50/70 dark:bg-neutral-900/70 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Matías Deluca</div>
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                onClick={(e) => handleNavClick(href, e)}
                className="text-neutral-900 dark:text-neutral-100 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          {children}
        </div>
      </nav>
    </header>
  );
}







