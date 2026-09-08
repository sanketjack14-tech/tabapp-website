import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar({ onRequestDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="text-primary transition-colors group-hover:text-rose-700">TRP</span>
            <span className="text-slate-900"> Application Builder</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('screenshots')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Screenshots
          </button>
          <button
            onClick={() => scrollTo('founders')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Founders
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={onRequestDemo}
            className="bg-primary text-white hover:bg-primary/90 font-semibold px-6 shadow-sm"
          >
            Request Access
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            onClick={onRequestDemo}
            size="sm"
            className="bg-primary text-white text-xs font-semibold px-3 py-1.5"
          >
            Request Access
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-base font-medium text-slate-700 hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="block w-full text-left py-2 text-base font-medium text-slate-700 hover:text-primary"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('screenshots')}
            className="block w-full text-left py-2 text-base font-medium text-slate-700 hover:text-primary"
          >
            Screenshots
          </button>
          <button
            onClick={() => scrollTo('founders')}
            className="block w-full text-left py-2 text-base font-medium text-slate-700 hover:text-primary"
          >
            Founders
          </button>
        </div>
      )}
    </header>
  );
}
