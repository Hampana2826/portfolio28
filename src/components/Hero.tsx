import { useState } from 'react';
import {
  FileText,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Terminal,
  Database,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glowing blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-blob-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none animate-blob-alt"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status / Availability kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200 font-medium">Ready for Associate Developer Roles</span>
              <span className="text-slate-500">·</span>
              <span className="text-cyan-400 font-mono">Graduating 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1] font-display">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-cyan-400">.</span>
            </h1>

            <div className="text-xl sm:text-2xl font-semibold text-slate-200 mb-5 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Associate Software Developer</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-cyan-400 font-mono text-base sm:text-lg">Python · Flask · SQL</span>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-sans">
              Passionate software developer focused on building clean, scalable and user-friendly web applications using Python, Flask and modern web technologies. Graduating with an 8.5 CGPA in Computer Science & Engineering from Mysuru Royal Institute of Technology (VTU).
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 mb-8 font-mono">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>B.E. CSE (CGPA: 8.5)</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>90-Day Full-Stack Alum</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social / Direct Contacts with 1-click copy */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-sm hover:scale-105"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-all shadow-sm hover:scale-105"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-cyan-300 transition-all shadow-sm"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copiedItem === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-cyan-300 transition-all shadow-sm"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
                {copiedItem === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 lg:w-88 group">
              {/* Glowing gradient background ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-3.5 shadow-2xl backdrop-blur-xl">
                {/* Profile Portrait */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of image render error
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/85 border border-slate-700/70 backdrop-blur-md flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-white leading-tight">{PERSONAL_INFO.name}</p>
                      <p className="text-[11px] text-cyan-400 font-mono">B.E. CSE · CGPA 8.5</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      VTU Alum
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips around Card */}
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Python & Flask</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <Database className="w-3.5 h-3.5" />
                    <span>SQL / MySQL</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 text-sky-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Web Apps</span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card 1: Experience */}
              <div className="absolute -top-4 -left-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md animate-bounce duration-[4000ms]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Internship</div>
                  <div className="text-xs font-semibold text-white">Thought Process LLP</div>
                </div>
              </div>

              {/* Floating Accent Card 2: Academic */}
              <div className="absolute -bottom-4 -right-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Academics</div>
                  <div className="text-xs font-semibold text-white">8.5 CGPA Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
