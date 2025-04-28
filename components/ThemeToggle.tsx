// components/ThemeToggle.tsx
'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  // Lazy initializer lee de localStorage o del sistema
  const getTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme);

  // Aplica al <html> y guarda en storage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-xl border border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}




