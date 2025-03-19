
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Zap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Judges', href: '#judges' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group transition-all"
          aria-label="Hackathon.dev"
        >
          <Zap className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
          <span className="text-xl font-semibold tracking-tight">
            hackathon.dev
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
          >
            Register Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 md:hidden transition-transform duration-300 ease-in-out',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors flex items-center gap-1 w-full sm:w-auto text-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
