import type { Config } from 'tailwindcss';

const config: Config = {
  // 🌓 Habilita el modo oscuro por clase en el <html>
  darkMode: 'class',

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#14B8A6',
          light:   '#2DD4BF',
          dark:    '#0F766E'
        },
        secondary: {
          DEFAULT: '#F472B6',
          light:   '#F9A8D4',
          dark:    '#DB2777'
        }
      }
    }
  },
  plugins: []
};

export default config;

