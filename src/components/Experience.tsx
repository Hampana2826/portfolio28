import { useState } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Building,
  Terminal,
  Database,
  Code,
  Layers,
  Sparkles,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const exp = EXPERIENCE_DATA[0];

  const phases = [
    {
      title: 'Phase 1: Python Mastery & OOP Architecture',
      duration: 'Days 1 – 30',
      icon: Terminal,
      focus: 'Object-Oriented Programming & Algorithmic Logic',
      details:
        'Intensive hands-on training in Python data structures, class hierarchies, inheritance, error handling, and clean code conventions for backend architecture.',
    },
    {
      title: 'Phase 2: Flask Web Engineering & REST APIs',
      duration: 'Days 31 – 60',
      icon: Code,
      focus: 'Backend Services, Blueprints & HTTP Contracts',
      details:
        'Architected MVC web applications using Flask. Designed RESTful endpoints, implemented session handling, authentication cookies, and request validation.',
    },
    {
      title: 'Phase 3: Relational Databases & MarketHub Delivery',
      duration: 'Days 61 – 90',
      icon: Database,
      focus: 'MySQL, SQLAlchemy ORM & Production Implementation',
      details:
        'Engineered database schemas with MySQL, mapped ORM models via SQLAlchemy, enforced Role-Based Access Control, and deployed the complete MarketHub e-commerce application.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            04. Professional Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Internship Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured 90-day intensive industry program centered around full-stack software development, Python web architectures, and production-grade engineering practices.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="glass-panel rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Organization & Role Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {exp.organization}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">{exp.type}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Role:</span>
                  <span className="font-semibold text-white">{exp.role}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-cyan-300">{exp.duration}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Format:</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Developer Workspace Snapshot */}
              {exp.image && (
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-video shadow-md">
                  <img
                    src={exp.image}
                    alt="Thought Process LLP Engineering Environment"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3 text-[11px] font-mono text-slate-300">
                    Full-Stack Python & Flask Architecture
                  </div>
                </div>
              )}
            </div>

            {/* Right: Key Deliverables & Outcomes */}
            <div className="lg:col-span-7 space-y-5">
              <h4 className="text-lg font-bold text-white font-display">
                Key Responsibilities & Deliverables
              </h4>

              <div className="space-y-3">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Mastered */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Technologies Mastered:
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 3-Phase Milestone Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-base font-bold text-white font-display">
              90-Day Progression Roadmap
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Click each milestone to inspect structured learning milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isSelected = activePhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400/80 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-bold text-white mb-1 font-display">
                    {phase.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    {phase.details}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
