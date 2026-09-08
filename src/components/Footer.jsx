import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-primary">TRP</span>
            <span className="text-slate-900"> Application Builder</span>
          </span>
        </a>
        <p className="text-sm text-slate-500 text-center md:text-left leading-relaxed">
          © {new Date().getFullYear()} Bay Education Partners Pvt Ltd. All rights reserved. TRP Application Builder is a proprietary platform.
        </p>
      </div>
    </footer>
  );
}
