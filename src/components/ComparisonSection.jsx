import React from 'react';
import { Check } from 'lucide-react';

const comparisonRows = [
  'AI-powered best-fit school matching',
  'Direct Counsellor integration & visibility',
  'Application-specific Kanban & timeline',
  'Structured Repository management',
  'In-platform Chat with counsellor + AI',
  'Intelligence on 1,792+ global universities',
  'Built specifically for Indian students going abroad',
  'Backed by deep counselling expertise',
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
            Why Choose TRP Application Builder?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Generic tools weren't built for the rigors of competitive international admissions.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xs">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60">
                <th className="py-6 px-6 text-lg font-medium text-slate-300 w-1/2">
                  Feature
                </th>
                <th className="py-6 px-6 text-xl font-extrabold text-primary w-1/4 text-center">
                  TRP Application Builder
                </th>
                <th className="py-6 px-6 text-lg font-medium text-slate-500 w-1/4 text-center">
                  Generic Trackers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {comparisonRows.map((feature, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-800/40 transition-colors"
                >
                  <td className="py-5 px-6 font-medium text-slate-200 text-base">
                    {feature}
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                        <Check className="h-5 w-5 stroke-[2.5]" />
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <div className="text-slate-600 font-bold text-xl">
                      —
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
