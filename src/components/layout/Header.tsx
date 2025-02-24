'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { scrollToSection } from '@/lib/utils';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-md font-small transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-md font-small transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-md font-small transition-colors hover:text-primary"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-md font-small transition-colors hover:text-primary"
          >
            Tech Stack
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
              className="text-left hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('projects');
                setIsMenuOpen(false);
              }}
              className="text-left hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection('experience');
                setIsMenuOpen(false);
              }}
              className="text-left hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="text-left hover:text-primary"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
