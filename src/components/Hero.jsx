import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero({ onRequestDemo }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-[600px] bg-gradient-to-b from-primary/5 via-rose-500/5 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary bg-primary/5 mb-8 shadow-xs"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2.5 animate-pulse" />
            <span>The Standard for Ambitious Applicants</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Find your best-fit school.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">
              Powered by precise AI.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            TRP Application Builder combines a proprietary AI best-fit algorithm with deep counselling expertise. Built exclusively for UG, PG, MBA, and Boarding School aspirants.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
          >
            <Button
              size="lg"
              onClick={onRequestDemo}
              className="w-full sm:w-auto text-base h-14 px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all bg-primary hover:bg-primary/90 text-white"
            >
              Request Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="w-full sm:w-auto text-base h-14 px-8 font-semibold bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4 text-slate-600" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
