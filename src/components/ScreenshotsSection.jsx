import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screenshotsData = [
  {
    title: 'College List',
    desc: 'AI vs. Counsellor recommendations',
    image: '/tab-screenshot-1.png',
  },
  {
    title: 'Kanban View',
    desc: 'Application task tracking',
    image: '/tab-screenshot-2.png',
  },
  {
    title: 'Repositories',
    desc: 'Organized folder structure',
    image: '/tab-screenshot-3.png',
  },
  {
    title: 'Application List',
    desc: 'College shortlist categorization',
    image: '/tab-screenshot-4.png',
  },
  {
    title: 'College Intelligence',
    desc: 'Deep university data & stats',
    image: '/tab-screenshot-5.png',
  },
];

export function ScreenshotsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="screenshots" className="py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            See TRP Application Builder in Action
          </h2>
          <p className="text-lg text-slate-600">
            A beautifully crafted interface that puts your entire admissions strategy in one place.
          </p>
        </div>

        {/* Tab & Image Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch">
          {/* Tab Selection */}
          <div className="lg:w-1/3 flex flex-col gap-2 justify-center">
            {screenshotsData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-5 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-50 border-primary border shadow-xs'
                      : 'hover:bg-slate-50 border-transparent border'
                  }`}
                >
                  <h3
                    className={`font-bold text-lg mb-1 transition-colors ${
                      isActive ? 'text-primary' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-snug">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Screenshot Display Frame */}
          <div className="lg:w-2/3 bg-slate-100 rounded-2xl p-2 md:p-6 border border-slate-200 flex items-center justify-center min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full rounded-xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white"
              >
                {/* Browser Window Bar */}
                <div className="bg-slate-800 h-9 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400 truncate">
                    tabapp.in — {screenshotsData[activeTab].title}
                  </span>
                </div>

                {/* Screenshot Image */}
                <img
                  src={screenshotsData[activeTab].image}
                  alt={`TRP Application Builder - ${screenshotsData[activeTab].title}`}
                  className="w-full h-auto object-cover max-h-[550px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
