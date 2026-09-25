import { Award, BookOpen, Code, Compass, Database, Globe, MapPin, UserCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: 'Backend Engineering',
      desc: 'Developing scalable web architectures and RESTful microservices with Python and Flask. Specializing in MVC patterns, Blueprint routing, and role-based session workflows.',
    },
    {
      icon: Database,
      title: 'Relational Database Architecture',
      desc: 'Designing normalized SQL schemas in MySQL with SQLAlchemy ORM abstraction. Skilled in data integrity, indexing, joins, and transactional CRUD logic.',
    },
    {
      icon: Globe,
      title: 'Full-Stack Delivery',
      desc: 'Building responsive, intuitive interfaces with HTML5, CSS3, and modern JavaScript, seamlessly bridging user interactions with reliable backend services.',
    },
    {
      icon: Zap,
      title: 'OOP & Clean Code Discipline',
      desc: 'Committed to clean architecture, modular object-oriented principles, DRY code, and systematic debugging methodologies learned through university and internship work.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A developer-focused overview of my background, technical mindset, and career goals as an aspiring Associate Software Developer.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p className="text-lg text-white font-medium">
              Hello! I am <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.name}</span>, a final-year Computer Science and Engineering student at Mysuru Royal Institute of Technology (affiliated with Visvesvaraya Technological University, VTU) with a consistent <span className="text-cyan-300 font-semibold">8.5 CGPA</span>.
            </p>

            <p>
              My passion lies in backend and full-stack software development. I thrive on translating abstract problems into practical, modular software systems. Whether designing RESTful endpoints in Python/Flask, normalizing database schemas in MySQL, or applying machine learning models for real-time sign language interpretation, I focus on code clarity, maintainability, and end-user value.
            </p>

            <p>
              During my intensive 90-day internship at <strong className="text-slate-100">Thought Process LLP</strong>, I immersed myself in full-stack web engineering, contributing to MarketHub—a comprehensive e-commerce platform—where I implemented user authentication, dynamic cataloging, and administrative inventory controls.
            </p>

            <p>
              As an active <strong className="text-slate-100">IEEE Student Member</strong> and appointed <strong className="text-slate-100">NSS Coordinator</strong> at my institute, I combine technical curiosity with strong organizational and interpersonal skills. I am actively seeking an Associate Software Developer position where I can contribute to production-grade software and grow alongside experienced engineering teams.
            </p>

            {/* Quick Metadata list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Location: Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Degree: B.E. Computer Science</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Academic Record: 8.5 CGPA</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Graduation Year: 2026</span>
              </div>
            </div>
          </div>

          {/* Key Developer Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1 font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
