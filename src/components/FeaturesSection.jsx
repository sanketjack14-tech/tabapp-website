import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Kanban,
  FileText,
  FolderTree,
  MessageSquare,
  Users,
  Building2
} from 'lucide-react';

const featuresList = [
  {
    icon: Sparkles,
    title: 'AI Best-Fit Algorithm',
    desc: "TRP's proprietary AI matches schools to your profile, balancing dream schools, targets, and likely options.",
  },
  {
    icon: Kanban,
    title: 'Kanban & Timeline Views',
    desc: 'Track all deadlines, tasks, and milestones in intuitive kanban boards and calendar views.',
  },
  {
    icon: FileText,
    title: 'Application Hub',
    desc: 'Manage essays, LORs, resumes, interviews, and checklists all in one secure place.',
  },
  {
    icon: FolderTree,
    title: 'Comprehensive Repositories',
    desc: 'Organised folders specifically structured for Essay Tasks, LOR Tasks, Interview Tasks, Resume Tasks, and General Tasks.',
  },
  {
    icon: MessageSquare,
    title: 'Counsellor + AI Chat',
    desc: 'Communicate directly with your counsellor and get instant AI-powered guidance within the platform.',
  },
  {
    icon: Users,
    title: 'Collaboration & Transparency',
    desc: 'Real-time visibility for students, counsellors, and parents on every single application step.',
  },
  {
    icon: Building2,
    title: 'College Intelligence',
    desc: 'Deep, constantly updated data on 1,792+ universities—acceptance rates, tuition, rankings, and Common App status.',
  },
];

export function FeaturesSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="features" className="py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Everything You Need to Get In.
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive suite of tools designed to remove anxiety from the application process.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={itemVariants}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
