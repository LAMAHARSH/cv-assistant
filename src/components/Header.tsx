
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Upload Resume', href: '#upload', icon: '📤' },
    { name: 'View Past Scores', href: '#scores', icon: '📊' },
    { name: 'About', href: '#about', icon: 'ℹ️' },
    { name: 'Contact Us', href: '#contact', icon: '✉️' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-primary">
          Resumify
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary relative group transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground/80 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 bg-current transition-all duration-300",
              isMobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-current transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "w-5 opacity-100"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-current transition-all duration-300",
              isMobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-4"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out glass-morphism",
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="inline-block w-6">{item.icon}</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
