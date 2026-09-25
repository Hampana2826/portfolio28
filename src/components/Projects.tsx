import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Play,
  Sparkles,
  Layers,
  Activity,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import ProjectInterpreterModal from './ProjectInterpreterModal';
import ProjectMarketHubModal from './ProjectMarketHubModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<string | null>(null);

  const selectedProject = PROJECTS_DATA.find((p) => p.id === activeModalProject);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2">
            03. Engineering Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real-world software systems demonstrating full-stack engineering, machine learning integration, and database architecture. Click "Live Interactive Demo" on any project to test real application functionality.
          </p>
        </div>

        {/* Projects Showcase List */}
        <div className="space-y-16">
          {PROJECTS_DATA.map((project: Project, index: number) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl border border-slate-800/90 overflow-hidden shadow-2xl hover:border-slate-700/80 transition-all duration-300 group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Media / Preview Column */}
                  <div
                    className={`lg:col-span-6 relative ${
                      isReversed ? 'lg:col-start-7' : ''
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video shadow-xl group-hover:shadow-cyan-500/10 transition-shadow">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                      {/* Interactive Demo Overlay Pill */}
                      <button
                        onClick={() => setActiveModalProject(project.id)}
                        className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Launch Live Simulator</span>
                      </button>
                    </div>

                    {/* Metrics bar below media */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 mt-3 pt-2 text-center text-xs font-mono">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800"
                          >
                            <div className="text-[10px] text-slate-400">{m.label}</div>
                            <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Narrative & Details Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isReversed ? 'lg:col-start-1' : ''
                    }`}
                  >
                    {/* Unboxed category indicator */}
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <span>Project {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      <span className="text-slate-600">·</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm font-medium text-slate-300">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300/90 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Bullet Features */}
                    <div className="space-y-2 pt-1">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveModalProject(project.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Interactive Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Project Modals */}
      {selectedProject && selectedProject.id === 'interpreter' && (
        <ProjectInterpreterModal
          project={selectedProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      {selectedProject && selectedProject.id === 'markethub' && (
        <ProjectMarketHubModal
          project={selectedProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
