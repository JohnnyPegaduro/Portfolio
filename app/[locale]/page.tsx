// app/[locale]/page.tsx
'use client';

import Hero from '../../sections/Hero';
import About from '../../sections/About';
import Skills from '../../sections/Skills';
import Experience from '../../sections/Experience';
import Projects from '../../sections/Projects';
import Contact from '../../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
