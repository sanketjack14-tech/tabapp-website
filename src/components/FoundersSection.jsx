import React from 'react';

export function FoundersSection() {
  return (
    <section id="founders" className="py-24 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Built from the inside out.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We were founded with a singular mission: to bring world-class overseas education counselling to Indian students. After guiding thousands of applicants to their dream schools, we realized that existing software simply couldn't keep up with the complexity of modern admissions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              So we built TRP Application Builder. It’s not just a software platform—it’s the digitization of deep strategic expertise. Every feature, every data point, and every workflow was designed by counsellors who know exactly what it takes to win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
