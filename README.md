# Portfolio de Matías Deluca

**Sitio web personal y portafolio de Full Stack Developer**

Este proyecto muestra la experiencia, habilidades y proyectos de Matías Deluca, con las siguientes características:

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS** con modo claro/oscuro (Next Themes)
- **I18n** (Next-Intl): soporte para español e inglés
- **Animaciones** con Framer Motion
- **Formulario de Contacto** que envía emails usando Nodemailer y Zod
- **Secciones scroll-snap**: Hero, About, Skills, Experience, Projects, Contact & Footer

---

## Tabla de Contenidos

- [Demo](#demo)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Variables de Entorno](#variables-de-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Demo

- Local: `npm run dev` → `http://localhost:3000/es` (o `/en`)
- Producción: https://<tu-proyecto>.vercel.app/

---

## Tecnologías

- **Next.js** – Framework React con App Router y optimizaciones.  
- **React** – Biblioteca de componentes.  
- **TypeScript** – Tipado estático seguro.  
- **Tailwind CSS** – Utilidades de estilos rápidos y responsive.  
- **Next Themes** – Cambio de tema claro/oscuro.  
- **Next-Intl** – Internacionalización con rutas `/[locale]`.  
- **Framer Motion** – Animaciones de entrada, hover y scroll.  
- **Nodemailer + Zod** – API route para envío de email validado.  
- **Next/Image** – Optimización y placeholders de imágenes.  

---

## Estructura del Proyecto

```bash
portfolio/
├─ public/                  # Sitio estático, logos, favicon, screenshots
│  ├─ favicon.ico
│  ├─ logos/*.svg
│  └─ projects/*.png
├─ app/                     # Rutas de App Router (i18n en /[locale])
│  ├─ [locale]/
│  │  ├─ layout.tsx         # Layout con Navbar, ThemeToggle, LanguageToggle
│  │  └─ page.tsx           # Importa Hero, About, Skills, Experience, Projects, Contact
│  ├─ api/contact/route.ts  # Endpoint POST /api/contact para enviar emails
│  └─ layout.tsx            # Metadata y provider de traducciones
├─ components/              # Componentes compartidos (Navbar, Footer, Toggles)
├─ sections/                # Secciones de página (Hero, About, Skills, etc.)
├─ next-intl.config.mjs     # Configuración de i18n (locales y default)
├─ next.config.mjs          # Middleware de locale y redirección inicial
├─ tailwind.config.ts       # Configuración de Tailwind
├─ tsconfig.json            # Configuración TypeScript
├─ package.json             # Dependencias y scripts
└─ README.md                # Este archivo
```

---

## Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JohnnyPegaduro/Portfolio
   cd tu-repo
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env.local` en la raíz con tus variables (ver abajo).
4. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```
5. Abre `http://localhost:3000/es` o `/en`.

---

## Variables de Entorno

Renombra tu `.env.example` a `.env.local` y completa los valores:

```
SMTP_HOST=smtp.ejemplo.com
SMTP_PORT=587
SMTP_USER=tu_usuario_smtp
SMTP_PASS=tu_password_smtp
EMAIL_TO=tu_email_de_destino
```

> **Nota:** No subas `.env.local` al repositorio.

---

## Scripts Disponibles

- **`npm run dev`**: inicia Next.js en desarrollo (hot reload)
- **`npm run build`**: genera el build de producción en `.next/`
- **`npm run start`**: sirve el build de producción localmente
- **`npm run lint`**: corre ESLint

---

## Despliegue en Vercel

1. Conecta tu repo a Vercel (GitHub → Import Project).
2. Configura las Environment Variables en el dashboard (Production & Preview).
3. Vercel detecta Next.js y despliega automáticamente.
4. Accede a `https://<proyecto>.vercel.app` o tu dominio personalizado.

---

## Licencia

@ Matias Ariel Deluca 2025

---

## Contacto

**Matías Deluca**  
📧 matiasdeluca2000@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/matiasarieldeluca)  
🔗 [GitHub](https://github.com/JohnnyPegaduro)
