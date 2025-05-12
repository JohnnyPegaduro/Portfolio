// sections/ContactForm.tsx
'use client';
import { useState } from 'react';
import { useT } from '../app/i18n/TranslationsContext';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const t = useT();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl mx-auto">
      <div>
        <label className="block mb-1">{t('form.name')}</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded text-black dark:text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block mb-1">{t('form.email')}</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded text-black dark:text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block mb-1">{t('form.message')}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded h-32 resize-none text-black dark:text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
      >
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>

      {status === 'success' && <p className="text-green-600">{t('form.success')}</p>}
      {status === 'error' && <p className="text-red-600">{t('form.error')}: {errorMsg}</p>}
    </form>
  );
}

