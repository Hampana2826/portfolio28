import { useState, useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    // Fire celebratory confetti on download/print
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });
    window.print();
  };

  const copyPlainTextResume = () => {
    const text = `HAMPANA NV
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
Location: ${PERSONAL_INFO.location}

OBJECTIVE
B.E. Computer Science and Engineering graduate with strong programming, web development, and analytical skills. Passionate about building practical software solutions using Python, Flask, SQL, and web technologies while continuously improving technical and problem-solving abilities.

SKILLS
- Programming: Python
- Web Development: HTML, CSS, JavaScript, Flask
- Database: SQL, MySQL, SQLAlchemy
- Tools: Git, GitHub, VS Code, Postman
- Soft Skills: Problem Solving, Critical Thinking, Teamwork, Communication

EDUCATION
2021–2026: B.E. Computer Science and Engineering (CGPA: 8.5)
Mysuru Royal Institute of Technology, Mandya (VTU, Karnataka)

2019–2021: Pre-University – SDM PU College, Ujire (72%)

2018–2019: High School – Jnanodaya English Medium School (85.12%)

INTERNSHIP
Full stack web Development – Thought Process LLP (90-Day Internship)
- Completed structured 90-day internship focused on Python, OOP, and software practices.
- Developed web applications using HTML, CSS, JavaScript, Flask, and SQL.
- Implemented CRUD operations, REST APIs, user authentication, sessions, and RBAC.
- Worked on MarketHub e-commerce application (catalog, cart, orders, admin dashboard).

PROJECTS
1. Real-Time Interpreter for Disabilities (Deaf and Hard of Hearing)
- Machine learning & computer vision system translating sign language gestures into text/speech.
- Tech Stack: Python, OpenCV, MediaPipe, TensorFlow, CNN/LSTM, TTS

2. MarketHub – E-Commerce Web Application
- Full-stack e-commerce application with customer storefront and admin management.
- Tech Stack: Python, Flask, HTML, CSS, JavaScript, SQLAlchemy, MySQL

CERTIFICATIONS
- Python Programming Certification
- Full Stack Web Development Certification

POSITIONS OF RESPONSIBILITY
- IEEE Member
- NSS Coordinator – Mysuru Royal Institute of Technology

HOBBIES AND INTERESTS
Dancing, Traveling, Listening to Music`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Controls Header (Hidden in print) */}
        <div className="no-print p-4 sm:p-5 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              Resume – Hampana NV
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              B.E. Computer Science · Associate Software Developer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 text-white font-semibold text-xs shadow-md shadow-cyan-500/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={copyPlainTextResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 print:bg-white text-slate-200 print:text-slate-900 font-sans leading-relaxed selection:bg-cyan-500/20">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header Lockup */}
            <div className="border-b border-slate-800 print:border-slate-300 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900 tracking-tight font-display uppercase">
                    Hampana NV
                  </h1>
                  <p className="text-sm font-semibold text-cyan-400 print:text-cyan-700 mt-0.5">
                    Associate Software Developer
                  </p>
                  <p className="text-xs text-slate-400 print:text-slate-600 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-slate-600" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-300 print:text-slate-700 space-y-1 sm:text-right">
                  <div>
                    <span className="text-slate-500 print:text-slate-500">Phone: </span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-400 print:text-slate-900">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 print:text-slate-500">Email: </span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 print:text-slate-900 underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 print:text-slate-500">LinkedIn: </span>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 print:text-slate-900 underline">
                      linkedin.com/in/{PERSONAL_INFO.linkedinUser}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 print:text-slate-500">GitHub: </span>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 print:text-slate-900 underline">
                      github.com/{PERSONAL_INFO.githubUser}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-2">
                Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
                B.E. Computer Science and Engineering graduate with strong programming, web development, and analytical skills. Passionate about building practical software solutions using Python, Flask, SQL, and web technologies while continuously improving technical and problem-solving abilities.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-2">
                Technical Skills
              </h2>
              <div className="text-xs sm:text-sm text-slate-300 print:text-slate-700 space-y-1">
                <div><strong className="text-white print:text-slate-900">Programming:</strong> Python, OOP Concepts</div>
                <div><strong className="text-white print:text-slate-900">Web Development:</strong> HTML5, CSS3, JavaScript, Flask, REST APIs</div>
                <div><strong className="text-white print:text-slate-900">Database:</strong> SQL, MySQL, SQLAlchemy ORM</div>
                <div><strong className="text-white print:text-slate-900">Tools:</strong> Git, GitHub, VS Code, Postman</div>
                <div><strong className="text-white print:text-slate-900">Soft Skills:</strong> Problem Solving, Critical Thinking, Teamwork, Communication</div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-2">
                Education
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <strong className="text-white print:text-slate-900">B.E. – Computer Science and Engineering</strong>
                    <div className="text-slate-400 print:text-slate-600">Mysuru Royal Institute of Technology, Mandya</div>
                    <div className="text-[11px] text-slate-500 print:text-slate-500">Visvesvaraya Technological University, Karnataka</div>
                  </div>
                  <div className="sm:text-right font-mono mt-1 sm:mt-0">
                    <div className="font-bold text-cyan-300 print:text-slate-900">CGPA: 8.5</div>
                    <div className="text-slate-500 text-[11px]">2021 – 2026</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between border-t border-slate-900 print:border-slate-200 pt-2">
                  <div>
                    <strong className="text-white print:text-slate-900">Pre-University (PCMB)</strong>
                    <div className="text-slate-400 print:text-slate-600">SDM PU College, Ujire</div>
                  </div>
                  <div className="sm:text-right font-mono mt-1 sm:mt-0">
                    <div className="font-bold text-cyan-300 print:text-slate-900">72%</div>
                    <div className="text-slate-500 text-[11px]">2019 – 2021</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between border-t border-slate-900 print:border-slate-200 pt-2">
                  <div>
                    <strong className="text-white print:text-slate-900">High School (SSLC)</strong>
                    <div className="text-slate-400 print:text-slate-600">Jnanodaya English Medium School</div>
                  </div>
                  <div className="sm:text-right font-mono mt-1 sm:mt-0">
                    <div className="font-bold text-cyan-300 print:text-slate-900">85.12%</div>
                    <div className="text-slate-500 text-[11px]">2018 – 2019</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-2">
                Internship Experience
              </h2>
              <div className="text-xs sm:text-sm space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:justify-between font-semibold">
                  <span className="text-white print:text-slate-900">Full Stack Web Development – Thought Process LLP</span>
                  <span className="text-cyan-300 print:text-slate-700 font-mono text-xs">90-Day Internship</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-700 space-y-1 text-xs">
                  <li>Completed a structured 90-day internship focused on Python programming, Object-Oriented Programming, and software development practices.</li>
                  <li>Developed web applications using HTML, CSS, JavaScript, Flask, and SQL with a focus on backend development and database integration.</li>
                  <li>Implemented CRUD operations, REST APIs, user authentication, sessions, and role-based access control (RBAC).</li>
                  <li>Worked on <strong>MarketHub</strong>, an e-commerce web application with product management, customer management, cart, order placement, and order tracking functionality.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-2">
                Projects
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="font-semibold text-white print:text-slate-900">
                    Real-Time Interpreter for Disabilities (Deaf and Hard of Hearing)
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed mt-0.5">
                    Developed a real-time system to translate sign language gestures into text and speech using machine learning and computer vision techniques. Designed to bridge accessibility communication gaps with 21-point landmark recognition.
                  </p>
                  <div className="text-[11px] font-mono text-cyan-300 print:text-cyan-800 mt-1">
                    Tech Stack: Python, OpenCV, MediaPipe, TensorFlow, CNN/LSTM, Speech Recognition, TTS
                  </div>
                </div>

                <div className="border-t border-slate-900 print:border-slate-200 pt-2">
                  <div className="font-semibold text-white print:text-slate-900">
                    MarketHub – E-Commerce Web Application
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed mt-0.5">
                    Developed a full-stack e-commerce web application with separate admin and customer functionalities. Implemented product cataloging, category management, persistent cart, order placement, and live status tracking.
                  </p>
                  <div className="text-[11px] font-mono text-cyan-300 print:text-cyan-800 mt-1">
                    Tech Stack: Python, Flask, HTML, CSS, JavaScript, SQLAlchemy, MySQL
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800 print:border-slate-300">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-1.5">
                  Certifications
                </h2>
                <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-0.5">
                  <li>Python Programming</li>
                  <li>Full Stack Web Development</li>
                  <li>90-Day AI Readiness & Web Engineering</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-cyan-800 font-mono mb-1.5">
                  Positions of Responsibility
                </h2>
                <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-0.5">
                  <li>IEEE Member</li>
                  <li>NSS Coordinator – Mysuru Royal Institute of Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="no-print p-4 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Hampana NV · Ready for immediate placement</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
