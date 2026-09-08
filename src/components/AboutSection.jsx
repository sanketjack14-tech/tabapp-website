import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Sliders } from 'lucide-react';

export function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Built by Counsellors. Supercharged by Data.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Getting into a top-tier institution isn't just about grades—it's about strategy, organization, and finding the perfect match. TRP Application Builder is our proprietary platform that makes application management effortless. By merging deep overseas education expertise with an advanced AI best-fit algorithm, we provide unparalleled clarity and control over your admissions journey.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">AI Matching</h3>
            <p className="text-slate-600 leading-relaxed">
              Our algorithm balances dream schools, targets, and likely options tailored precisely to your unique profile.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">All Programs</h3>
            <p className="text-slate-600 leading-relaxed">
              Designed specifically to handle the nuances of UG Abroad (UGAP), Postgraduate, MBA, and Boarding School applications.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
              <Sliders className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Effortless Control</h3>
            <p className="text-slate-600 leading-relaxed">
              Track milestones, organize essays, and manage deadlines with intuitive dashboards built for serious students.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
