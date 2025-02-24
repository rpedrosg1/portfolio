'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Rui Gonçalves</h1>
      <p className="text-xl mb-8 text-muted-foreground">Backend Software Developer</p>
      <div className="flex justify-center space-x-4">
        <Button size="lg" onClick={() => scrollToSection('projects')}>
          View Projects
        </Button>
        <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
          Contact
        </Button>
      </div>
    </motion.section>
  );
}
