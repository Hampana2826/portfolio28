import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            05. Academic Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Education Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Rigorous foundations in Computer Science and Engineering, analytical problem solving, and computational principles.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_DATA.map((edu, idx) => {
            const isFeatured = idx === 0; // B.E. Computer Science
            return (
              <div
                key={idx}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                  isFeatured
                    ? 'border-cyan-500/40 bg-slate-900/80 shadow-xl shadow-cyan-500/10'
                    : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isFeatured
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                          {edu.degree}
                        </h3>
                        {isFeatured && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-semibold">
                            Primary Degree
                          </span>
                        )}
                      </div>

                      {edu.field && (
                        <p className="text-xs sm:text-sm font-medium text-cyan-300 mb-1">
                          {edu.field}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-slate-300">
                        {edu.institution}
                        {edu.affiliation && (
                          <span className="text-slate-400"> ({edu.affiliation})</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Score & Period Badge */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                    <div className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                      <div className="text-[10px] text-slate-400 font-mono uppercase">
                        {edu.scoreType}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono tabular-nums">
                        {edu.score}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {edu.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
