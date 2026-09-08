import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function ContactSection({ onRequestDemo }) {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 md:p-12 text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Ready to start your journey?
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Request access to TRP Application Builder today. Our team will review your details and get you onboarded.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={onRequestDemo}
              className="w-full sm:w-auto text-base h-14 px-12 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all bg-primary hover:bg-primary/90 text-white"
            >
              Request Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="https://forms.gle/XZrUEF3U73m6cNp37"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base h-14 px-8 font-semibold bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                Google Access Form ↗
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
