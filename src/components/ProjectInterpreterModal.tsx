import { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  Mic,
  Camera,
  Activity,
  Layers,
  Sparkles,
  Github,
  Play,
  CheckCircle,
  HelpCircle,
  RefreshCw,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectInterpreterModalProps {
  project: Project;
  onClose: () => void;
}

interface GestureDemo {
  id: string;
  name: string;
  translation: string;
  confidence: number;
  latencyMs: number;
  category: 'daily' | 'courtesy' | 'urgency';
  handPoseDesc: string;
  landmarks: { x: number; y: number }[];
}

const GESTURES: GestureDemo[] = [
  {
    id: 'hello',
    name: 'Open Palm Wave',
    translation: 'Hello! Good day to you.',
    confidence: 98.7,
    latencyMs: 42,
    category: 'daily',
    handPoseDesc: 'Open palm facing outward with rhythmic lateral oscillation.',
    landmarks: [
      { x: 50, y: 85 }, // wrist
      { x: 42, y: 70 }, { x: 38, y: 55 }, { x: 32, y: 45 }, { x: 26, y: 38 }, // thumb
      { x: 44, y: 50 }, { x: 42, y: 35 }, { x: 40, y: 22 }, { x: 39, y: 12 }, // index
      { x: 50, y: 48 }, { x: 50, y: 32 }, { x: 50, y: 18 }, { x: 50, y: 8 },  // middle
      { x: 56, y: 50 }, { x: 58, y: 35 }, { x: 60, y: 22 }, { x: 61, y: 14 }, // ring
      { x: 62, y: 56 }, { x: 66, y: 45 }, { x: 70, y: 35 }, { x: 73, y: 26 }, // pinky
    ],
  },
  {
    id: 'thank_you',
    name: 'Chin-to-Chest Forward Release',
    translation: 'Thank you very much for your assistance.',
    confidence: 97.4,
    latencyMs: 38,
    category: 'courtesy',
    handPoseDesc: 'Flat hand tips touching chin and sweeping outward toward conversant.',
    landmarks: [
      { x: 50, y: 80 },
      { x: 40, y: 72 }, { x: 35, y: 62 }, { x: 30, y: 55 }, { x: 25, y: 50 },
      { x: 46, y: 56 }, { x: 46, y: 42 }, { x: 46, y: 30 }, { x: 46, y: 20 },
      { x: 52, y: 56 }, { x: 52, y: 40 }, { x: 52, y: 28 }, { x: 52, y: 16 },
      { x: 58, y: 58 }, { x: 58, y: 44 }, { x: 58, y: 32 }, { x: 58, y: 22 },
      { x: 64, y: 62 }, { x: 64, y: 50 }, { x: 64, y: 40 }, { x: 64, y: 32 },
    ],
  },
  {
    id: 'help',
    name: 'Thumbs-Up on Flat Palm',
    translation: 'I need help / assistance here.',
    confidence: 99.1,
    latencyMs: 45,
    category: 'urgency',
    handPoseDesc: 'Closed dominant fist with erect thumb resting upon flat supporting palm.',
    landmarks: [
      { x: 50, y: 82 },
      { x: 48, y: 65 }, { x: 48, y: 50 }, { x: 48, y: 35 }, { x: 48, y: 20 },
      { x: 45, y: 68 }, { x: 44, y: 60 }, { x: 44, y: 55 }, { x: 45, y: 52 },
      { x: 50, y: 68 }, { x: 50, y: 60 }, { x: 50, y: 55 }, { x: 50, y: 52 },
      { x: 55, y: 68 }, { x: 55, y: 60 }, { x: 55, y: 55 }, { x: 55, y: 52 },
      { x: 60, y: 70 }, { x: 60, y: 62 }, { x: 60, y: 58 }, { x: 60, y: 55 },
    ],
  },
  {
    id: 'yes',
    name: 'Nodding Fist Sign',
    translation: 'Yes, I understand and agree.',
    confidence: 96.5,
    latencyMs: 36,
    category: 'daily',
    handPoseDesc: 'Closed fist bobbing up and down mimicking a head nod.',
    landmarks: [
      { x: 50, y: 85 },
      { x: 38, y: 75 }, { x: 34, y: 65 }, { x: 32, y: 56 }, { x: 36, y: 50 },
      { x: 43, y: 65 }, { x: 42, y: 55 }, { x: 42, y: 50 }, { x: 43, y: 48 },
      { x: 50, y: 65 }, { x: 50, y: 55 }, { x: 50, y: 49 }, { x: 50, y: 47 },
      { x: 57, y: 66 }, { x: 57, y: 56 }, { x: 57, y: 51 }, { x: 57, y: 49 },
      { x: 63, y: 68 }, { x: 63, y: 59 }, { x: 63, y: 54 }, { x: 63, y: 52 },
    ],
  },
];

export default function ProjectInterpreterModal({ project, onClose }: ProjectInterpreterModalProps) {
  const [selectedGesture, setSelectedGesture] = useState<GestureDemo>(GESTURES[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture'>('demo');
  const [customText, setCustomText] = useState('');
  const [bidirectionalOutput, setBidirectionalOutput] = useState<string | null>(null);

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Voice playback using Web Speech API
  const handleSpeak = (textToSpeak: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSimulateCustomSpeech = () => {
    if (!customText.trim()) return;
    setBidirectionalOutput(`Simulated Speech-to-Sign: Captions synchronized and 21-point gesture frame generated for "${customText}"`);
    handleSpeak(customText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Interactive Computer Vision & Speech Demo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-300 hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 sm:px-6 pt-3 border-b border-slate-800 flex gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('demo')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'demo'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Gesture & Speech Simulator
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            System Pipeline & Architecture
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {activeTab === 'demo' ? (
            <div className="space-y-6">
              {/* Top: Gesture Selector Buttons */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Select a Sign Language Gesture to Translate:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {GESTURES.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        setSelectedGesture(g);
                        setBidirectionalOutput(null);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all text-xs ${
                        selectedGesture.id === g.id
                          ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                          : 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold">{g.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {g.category.toUpperCase()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Demo Grid: Simulated Video Feed + Landmark Detection + Translation Panel */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Simulated Computer Vision Camera Frame */}
                <div className="md:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-4 relative flex flex-col items-center justify-between min-h-[300px] overflow-hidden">
                  {/* Camera Header Status */}
                  <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 mb-2">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>CV Pipeline: ACTIVE</span>
                    </div>
                    <span>30 FPS · 720p</span>
                  </div>

                  {/* 21-Point Hand Landmark SVG Overlay Simulation */}
                  <div className="relative w-56 h-56 flex items-center justify-center my-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Grid background */}
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />

                      {/* Connective skeleton lines */}
                      {selectedGesture.landmarks.map((pt, i) => {
                        if (i === 0) return null;
                        const prev = i === 1 || i === 5 || i === 9 || i === 13 || i === 17 ? selectedGesture.landmarks[0] : selectedGesture.landmarks[i - 1];
                        return (
                          <line
                            key={`line-${i}`}
                            x1={prev.x}
                            y1={prev.y}
                            x2={pt.x}
                            y2={pt.y}
                            stroke="#06b6d4"
                            strokeWidth="1.2"
                            strokeDasharray={i % 2 === 0 ? 'none' : '2,2'}
                          />
                        );
                      })}

                      {/* 21 MediaPipe Keypoints */}
                      {selectedGesture.landmarks.map((pt, i) => (
                        <circle
                          key={`pt-${i}`}
                          cx={pt.x}
                          cy={pt.y}
                          r={i === 0 ? 3.5 : 2}
                          fill={i === 0 ? '#10b981' : i % 4 === 0 ? '#6366f1' : '#38bdf8'}
                          stroke="#0f172a"
                          strokeWidth="0.8"
                        />
                      ))}
                    </svg>

                    <div className="absolute top-1 left-1 text-[10px] font-mono text-cyan-400/80 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/20">
                      MediaPipe 21 Landmarks
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="w-full pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 z-10">
                    <span className="text-cyan-300">Confidence: {selectedGesture.confidence}%</span>
                    <span>Latency: {selectedGesture.latencyMs}ms</span>
                  </div>
                </div>

                {/* Translation & Accessible Speech Output */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-cyan-400 uppercase tracking-wider">Real-Time Translated Speech</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px]">
                        Verified
                      </span>
                    </div>

                    {/* Main translated text */}
                    <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 min-h-[90px] flex items-center">
                      <p className="text-lg sm:text-xl font-bold text-white font-display leading-snug">
                        "{selectedGesture.translation}"
                      </p>
                    </div>

                    <div className="text-xs text-slate-400 leading-relaxed font-sans">
                      <strong className="text-slate-300">Gesture Description:</strong> {selectedGesture.handPoseDesc}
                    </div>

                    {/* Voice Output Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => handleSpeak(selectedGesture.translation)}
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                          isSpeaking
                            ? 'bg-emerald-600 text-white animate-pulse'
                            : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-cyan-500/20'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>{isSpeaking ? 'Playing Voice Synthesizer...' : 'Speak Translation (TTS Audio)'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Bidirectional Mode: Speech to Sign preview */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2 mb-2 font-semibold text-slate-200">
                      <Mic className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Bidirectional Accessibility (Speech-to-Sign / Captions):</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="Type speech words (e.g. 'Can I help you?')..."
                        className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                        onKeyDown={(e) => e.key === 'Enter' && handleSimulateCustomSpeech()}
                      />
                      <button
                        onClick={handleSimulateCustomSpeech}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs border border-slate-700"
                      >
                        Simulate
                      </button>
                    </div>
                    {bidirectionalOutput && (
                      <div className="mt-2 text-[11px] text-cyan-300 font-mono bg-cyan-950/40 p-2 rounded border border-cyan-800/40">
                        {bidirectionalOutput}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Architecture & Pipeline Tab */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 mb-1">01. Frame Ingestion</div>
                  <h4 className="text-sm font-bold text-white mb-2">OpenCV Video Stream</h4>
                  <p className="text-xs text-slate-300">
                    Captures continuous 30fps video stream, resizes frames, normalizes lighting, and isolates hand regions of interest (ROI).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-indigo-400 mb-1">02. Spatial Landmarks</div>
                  <h4 className="text-sm font-bold text-white mb-2">MediaPipe Hand Pose</h4>
                  <p className="text-xs text-slate-300">
                    Extracts 21 3D coordinate keypoints per hand without needing heavy depth sensor cameras. Eliminates background noise.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs font-mono text-emerald-400 mb-1">03. Temporal Model</div>
                  <h4 className="text-sm font-bold text-white mb-2">CNN + LSTM Classifier</h4>
                  <p className="text-xs text-slate-300">
                    Classifies temporal movement vectors over 30-frame sequence windows to discern complex dynamic signs with 96.8% accuracy.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-3">
                <h4 className="text-sm font-bold text-white font-display">
                  Project Impact & Technical Stack
                </h4>
                <p>
                  This system was developed as a team-based engineering initiative to empower deaf and hard-of-hearing individuals with an intuitive, bidirectional communication assistant. By leveraging lightweight edge computer vision algorithms alongside Flask REST web services, the model can run directly in a standard web browser without requiring dedicated GPU workstations.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-cyan-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Hampana NV · Final Year Engineering Capstone
          </span>
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
            >
              Close Simulator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
