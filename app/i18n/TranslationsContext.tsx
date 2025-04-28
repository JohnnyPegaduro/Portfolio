// app/i18n/TranslationsContext.tsx
'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import esMessages from '../[locale]/messages/es.json';
import enMessages from '../[locale]/messages/en.json';

type Locale = 'es' | 'en';
type Messages = Record<string, string>;

const messagesMap: Record<Locale, Messages> = {
  es: esMessages,
  en: enMessages,
};

const TranslationsContext = createContext<Messages>(messagesMap.es);

interface TranslationsProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function TranslationsProvider({ locale, children }: TranslationsProviderProps) {
  const messages = messagesMap[locale] || messagesMap.es;
  return (
    <TranslationsContext.Provider value={messages}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useT() {
  const messages = useContext(TranslationsContext);
  if (!messages) {
    throw new Error('useT must be used within a <TranslationsProvider>');
  }
  return (key: string) => messages[key] ?? key;
}


