import type { Metadata } from 'next';
import Hero from '../components/home/Hero';
import AnimatedSection from '../components/shared/AnimatedSection';
import TechStack from '../components/home/TechStack';
import Projects from '../components/home/Projects';
import Experience from '../components/home/Experience';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

export const metadata: Metadata = {
  title: 'Rui Gonçalves - Software Developer',
  description:
    'Professional portfolio of Rui Gonçalves, a software developer specialized in Java/Quarkus for backend development, while also working with frontend technologies.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <About />
      <AnimatedSection id="projects" className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="mb-8 text-muted-foreground">Check out some of my recent work</p>
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="experience" className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <Experience />
      </AnimatedSection>
      <AnimatedSection id="tech-stack" className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <TechStack />
      </AnimatedSection>
    </main>
  );
}
