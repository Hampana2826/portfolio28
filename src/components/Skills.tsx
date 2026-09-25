import { useState } from 'react';
import {
  Code2,
  Server,
  Network,
  Boxes,
  Database,
  HardDrive,
  Layers,
  FileCode,
  Palette,
  FileJson,
  GitBranch,
  Terminal,
  Eye,
  Brain,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

// Map icon string names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Server,
  Network,
  Boxes,
  Database,
  HardDrive,
  Layers,
  FileCode,
  Palette,
  FileJson,
  GitBranch,
  Terminal,
  Eye,
  Brain,
  Users,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'backend', label: 'Backend & Python' },
    { id: 'frontend', label: 'Web Frontend' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'tools', label: 'Tools & Engineering' },
    { id: 'core', label: 'Core Strengths' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            02. Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Core programming languages, web frameworks, database systems, and development tools I employ to construct clean and scalable software solutions.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 max-w-2xl mx-auto mb-12 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div
                key={skill.name}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Name + Percentage */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white font-display group-hover:text-cyan-200 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 capitalize">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-800/90 rounded-full h-1.5 mb-3.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-1.5 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Practical application note */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-tight">
                    <strong className="text-slate-200 font-semibold">Applied:</strong> {skill.appliedIn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Working Methodologies Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Development Practice
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Clean MVC Architecture
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Modular blueprints, decoupled business logic, and standard folder structures.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                API Standard
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                RESTful Conventions
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Predictable endpoints, JSON contracts, and precise HTTP status response codes.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                Data Persistence
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                ACID & Normalization
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Foreign key constraints, relational indexing, and clean transactional rollback.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                Collaboration
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Git Version Control
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Feature branching, descriptive commits, and collaborative code reviews on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
