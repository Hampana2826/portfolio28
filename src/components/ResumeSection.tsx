import { FileText, Download, CheckCircle2, ArrowRight, Eye, ShieldCheck, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export default function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
          {/* Subtle decorative grid lines */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-300 mb-6">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Curriculum Vitae</span>
              <span className="text-slate-600">·</span>
              <span>Updated 2026</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
              Looking for a Dedicated{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Associate Developer
              </span>
              ?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Download my complete resume for a detailed breakdown of my Computer Science coursework, 90-day Thought Process LLP full-stack internship, technical proficiencies in Python/Flask/SQL, and university achievements.
            </p>

            {/* Quick summary highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500">Degree</div>
                <div className="font-bold text-white mt-0.5">B.E. CSE</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500">CGPA</div>
                <div className="font-bold text-cyan-300 mt-0.5">8.5 / 10</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500">Focus</div>
                <div className="font-bold text-white mt-0.5">Python & SQL</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500">Location</div>
                <div className="font-bold text-emerald-400 mt-0.5">Bengaluru</div>
              </div>
            </div>

            {/* High-Impact CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download My Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all hover:border-slate-600"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Interactive ATS Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
