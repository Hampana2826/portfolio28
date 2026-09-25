import {
  Award,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Heart,
  Music,
  Plane,
  Compass,
} from 'lucide-react';
import {
  CERTIFICATIONS_DATA,
  LEADERSHIP_AND_ACTIVITIES,
} from '../data/portfolioData';

export default function Certifications() {
  const hobbies = [
    { name: 'Classical & Contemporary Dancing', icon: Sparkles, desc: 'Fosters discipline, creative expression, and rhythmic focus.' },
    { name: 'Exploring & Traveling', icon: Plane, desc: 'Broadens perspectives and cultural understanding across regions.' },
    { name: 'Music & Audio Appreciation', icon: Music, desc: 'Energizes problem-solving focus during long coding sessions.' },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            06. Credentials & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Certifications & Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Professional recognitions, extracurricular responsibilities, and creative pursuits that shape a well-rounded developer mindset.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-white font-display mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Technical Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="text-cyan-400">{cert.category}</span>
                    <span>{cert.year}</span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display group-hover:text-cyan-200 transition-colors mb-1.5">
                    {cert.title}
                  </h4>

                  <div className="text-xs text-indigo-300 font-medium mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility & Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Positions of Responsibility */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>Positions of Responsibility</span>
            </h3>

            <div className="space-y-4">
              {LEADERSHIP_AND_ACTIVITIES.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-5 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-display">
                      {item.role}
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono mb-1.5">
                      {item.organization}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Creative Pursuits */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-400" />
              <span>Hobbies & Personal Interests</span>
            </h3>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-4">
              {hobbies.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-800/60 last:border-0 last:pb-0">
                    <div className="h-8 w-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-white">
                        {h.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
