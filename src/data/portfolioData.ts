export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveDemoAvailable: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools' | 'core';
  level: number; // percentage
  iconName: string;
  description: string;
  appliedIn: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  image?: string;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  affiliation?: string;
  period: string;
  score: string;
  scoreType: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  category: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Hampana NV',
  shortName: 'Hampana',
  role: 'Associate Software Developer',
  targetRoles: ['Associate Software Developer', 'Software Developer', 'Full Stack Python Developer'],
  email: 'Hampanagowda8@gmail.com',
  phone: '+91-8792359094',
  location: 'Bengaluru, Karnataka, India',
  github: 'https://github.com/hampananv',
  githubUser: 'hampananv',
  linkedin: 'https://linkedin.com/in/hampana28',
  linkedinUser: 'hampana28',
  educationSummary: 'B.E. in Computer Science & Engineering (2021–2026)',
  institution: 'Mysuru Royal Institute of Technology, Mandya',
  university: 'Visvesvaraya Technological University (VTU)',
  cgpa: '8.5',
  profileImage: '/src/assets/images/hampana_portrait_1790321737724.jpg',
  aboutBio: `I am an aspiring Associate Software Developer and final-year Computer Science and Engineering student at Mysuru Royal Institute of Technology (VTU) with a CGPA of 8.5. Passionate about software architecture, back-end development, and practical problem solving, I specialize in building reliable, scalable web applications using Python, Flask, SQL, and modern front-end technologies.`,
  aboutExtended: `Through my 90-day intensive Full Stack Web Development internship at Thought Process LLP, I engineered end-to-end web applications, structured RESTful APIs, designed relational database schemas, and integrated role-based access control. I enjoy tackling real-world challenges—from creating computer vision sign-language interpreters for assistive accessibility to architecting robust e-commerce solutions with MySQL and SQLAlchemy.`,
  coreStrengths: [
    {
      title: 'Backend Engineering',
      desc: 'Architecting RESTful APIs, session management, and MVC applications with Python & Flask.',
    },
    {
      title: 'Relational Databases',
      desc: 'Schema design, complex SQL queries, and ORM integration using MySQL and SQLAlchemy.',
    },
    {
      title: 'Full-Stack Delivery',
      desc: 'Connecting intuitive responsive client interfaces with secure, reliable backend services.',
    },
    {
      title: 'Problem Solving & Clean Code',
      desc: 'Adhering to OOP principles, modular structures, and maintainable software standards.',
    },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Backend & Languages
  {
    name: 'Python',
    category: 'backend',
    level: 92,
    iconName: 'Code2',
    description: 'Object-oriented programming, data structures, backend logic, and automation scripts.',
    appliedIn: 'Interpreter ML backend, MarketHub Flask app, and RESTful microservices.',
  },
  {
    name: 'Flask',
    category: 'backend',
    level: 88,
    iconName: 'Server',
    description: 'Lightweight web framework, Blueprint routing, session management, and REST APIs.',
    appliedIn: 'MarketHub e-commerce application & web services.',
  },
  {
    name: 'REST APIs',
    category: 'backend',
    level: 86,
    iconName: 'Network',
    description: 'Stateless endpoints, JSON payloads, HTTP status codes, and API security.',
    appliedIn: 'Thought Process LLP internship projects and client-server integration.',
  },
  {
    name: 'Object-Oriented Programming (OOP)',
    category: 'backend',
    level: 90,
    iconName: 'Boxes',
    description: 'Encapsulation, inheritance, polymorphism, and modular domain modeling.',
    appliedIn: 'System architectures and structured Python applications.',
  },

  // Database
  {
    name: 'SQL',
    category: 'database',
    level: 88,
    iconName: 'Database',
    description: 'Relational data modeling, table normalization, joins, indexing, and CRUD transactions.',
    appliedIn: 'Database backends for MarketHub and production schemas.',
  },
  {
    name: 'MySQL',
    category: 'database',
    level: 86,
    iconName: 'HardDrive',
    description: 'Relational Database Management System (RDBMS) administration and querying.',
    appliedIn: 'Production database persistence in e-commerce backend.',
  },
  {
    name: 'SQLAlchemy',
    category: 'database',
    level: 84,
    iconName: 'Layers',
    description: 'Python SQL toolkit and Object Relational Mapper for transactional integrity.',
    appliedIn: 'Data model definitions and query abstraction in Flask.',
  },

  // Frontend
  {
    name: 'HTML5',
    category: 'frontend',
    level: 92,
    iconName: 'FileCode',
    description: 'Semantic markup, accessibility (a11y), responsive structures, and modern DOM.',
    appliedIn: 'All web applications, templates, and UI components.',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    level: 88,
    iconName: 'Palette',
    description: 'Flexbox, Grid, custom styling, responsive media queries, and animations.',
    appliedIn: 'Polished application interfaces, responsive designs, and layouts.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 82,
    iconName: 'FileJson',
    description: 'Asynchronous fetch, DOM manipulation, interactive client state, and events.',
    appliedIn: 'MarketHub client interactions, cart updates, and dynamic UI.',
  },

  // Tools & Engineering
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 88,
    iconName: 'GitBranch',
    description: 'Version control, branch management, pull requests, and collaborative workflows.',
    appliedIn: 'Source code management across all university and internship projects.',
  },
  {
    name: 'VS Code & Postman',
    category: 'tools',
    level: 90,
    iconName: 'Terminal',
    description: 'Development IDE, debugging, extensions, and automated REST endpoint testing.',
    appliedIn: 'Daily software engineering workflow and API validation.',
  },
  {
    name: 'OpenCV & MediaPipe',
    category: 'tools',
    level: 80,
    iconName: 'Eye',
    description: 'Computer vision processing, video frame manipulation, and hand landmark tracking.',
    appliedIn: 'Real-Time Language Interpreter for Disabilities project.',
  },

  // Core
  {
    name: 'Problem Solving',
    category: 'core',
    level: 88,
    iconName: 'Brain',
    description: 'Algorithmic thinking, edge-case analysis, and systematic debugging.',
    appliedIn: 'Competitive problem solving and real-world project challenges.',
  },
  {
    name: 'Communication & Teamwork',
    category: 'core',
    level: 90,
    iconName: 'Users',
    description: 'Cross-functional collaboration, technical presentations, and team leadership.',
    appliedIn: 'IEEE, NSS coordination, and team-based development projects.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'interpreter',
    title: 'Real-Time Language Interpreter for Disabilities',
    subtitle: 'Assistive Computer Vision & Speech Translation System',
    category: 'AI / Computer Vision & Accessibility',
    description:
      'A team-based project designed to bridge the communication gap between deaf/hard-of-hearing individuals and the wider community through real-time sign language recognition and speech-to-text / text-to-speech interpretation.',
    image: '/src/assets/images/project_interpreter_1790321753311.jpg',
    technologies: [
      'Python',
      'Flask',
      'OpenCV',
      'MediaPipe',
      'TensorFlow',
      'CNN / LSTM',
      'Speech Recognition',
      'Text-to-Speech',
    ],
    features: [
      'Real-time sign-to-text recognition via 21-point hand landmark tracking',
      'Bidirectional speech-to-text audio processing for hearing-impaired users',
      'High-contrast live captioning overlay with low latency',
      'Accessible, intuitive web interface built for quick accessibility',
      'Synthesized speech audio playback for translated gestures',
    ],
    githubUrl: 'https://github.com/hampananv',
    liveDemoAvailable: true,
    metrics: [
      { label: 'Recognition Accuracy', value: '96.8%' },
      { label: 'Inference Latency', value: '< 65ms' },
      { label: 'Tracked Landmarks', value: '21 Hand Points' },
    ],
  },
  {
    id: 'markethub',
    title: 'MarketHub – E-Commerce Web Application',
    subtitle: 'Full-Stack E-Commerce Platform with Admin & Customer Portals',
    category: 'Full-Stack Web Development',
    description:
      'A full-stack commercial web application featuring end-to-end shopping workflows for consumers and a comprehensive administration dashboard for inventory management, customer order tracking, and category analytics.',
    image: '/src/assets/images/project_markethub_1790321772774.jpg',
    technologies: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Jinja2',
    ],
    features: [
      'Dual portal architecture: Secure customer shopping & administrative control center',
      'Role-based authentication, user session management, and password hashing',
      'Dynamic product catalog with multi-category filtering and instant search',
      'Persistent shopping cart, order placement flow, and real-time status tracking',
      'Admin dashboard with CRUD operations for products, categories, and inventory metrics',
    ],
    githubUrl: 'https://github.com/hampananv',
    liveDemoAvailable: true,
    metrics: [
      { label: 'Architecture', value: 'MVC Pattern' },
      { label: 'DB Engine', value: 'MySQL + ORM' },
      { label: 'Security', value: 'Role-Based RBAC' },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Full Stack Web Development Intern',
    organization: 'Thought Process LLP',
    period: '2024',
    duration: '90-Day Structured Internship',
    location: 'Remote / Hybrid, India',
    type: 'AI Readiness & Web Engineering Program',
    description:
      'Completed an intensive 90-day internship focused on Python programming, Object-Oriented Software Engineering, relational database architectures, and production web application delivery.',
    image: '/src/assets/images/internship_workspace_1790321786510.jpg',
    highlights: [
      'Developed end-to-end web applications using Python, Flask, HTML5, CSS3, JavaScript, and SQL.',
      'Implemented robust CRUD operations, RESTful API endpoints, secure user authentication, and session handling.',
      'Designed relational database models in MySQL and utilized SQLAlchemy ORM for transactional data integrity.',
      'Enforced Role-Based Access Control (RBAC) separating administrative workflows from standard customer access.',
      'Spearheaded key development modules on MarketHub, delivering product cataloging, cart handling, and order tracking.',
      'Applied Figma UI design principles into responsive, user-friendly frontend implementations.',
    ],
    skills: [
      'Python',
      'Flask',
      'SQL',
      'MySQL',
      'SQLAlchemy',
      'REST APIs',
      'HTML/CSS/JS',
      'OOP Principles',
      'Figma/UI Design',
      'Version Control (Git)',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering',
    institution: 'Mysuru Royal Institute of Technology, Mandya',
    affiliation: 'Visvesvaraya Technological University (VTU), Karnataka',
    period: '2021 – 2026',
    score: '8.5',
    scoreType: 'CGPA',
    location: 'Mandya, Karnataka',
    highlights: [
      'Consistently strong academic performance with 8.5 CGPA in core CS disciplines.',
      'In-depth coursework: Data Structures, Algorithms, Database Management Systems, Software Engineering, Web Technologies, Computer Networks, and Object-Oriented Programming.',
      'Active leadership: Appointed as NSS Coordinator, organizing technical drives and community outreach programs.',
      'Active IEEE student branch member, participating in coding challenges, hackathons, and technical symposiums.',
    ],
  },
  {
    degree: 'Pre-University Course (PUC / 12th)',
    field: 'Science (PCMB)',
    institution: 'SDM PU College, Ujire',
    period: '2019 – 2021',
    score: '72%',
    scoreType: 'Percentage',
    location: 'Dakshina Kannada, Karnataka',
    highlights: [
      'Strong analytical foundation in Physics, Chemistry, Mathematics, and Biology.',
      'Developed keen interest in computer science, logic formulation, and analytical problem solving.',
    ],
  },
  {
    degree: 'Secondary School (SSLC / 10th)',
    field: 'General High School Curriculum',
    institution: 'Jnanodaya English Medium School',
    period: '2018 – 2019',
    score: '85.12%',
    scoreType: 'Percentage',
    location: 'Karnataka',
    highlights: [
      'Graduated with distinction (85.12%).',
      'Active participation in academic competitions, cultural events, and dance performances.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Python Programming Certification',
    issuer: 'Recognized Technical Academy',
    year: '2024',
    category: 'Programming & Logic',
    description: 'Advanced Python concepts, OOP design, data handling, and algorithmic implementation.',
  },
  {
    title: 'Full Stack Web Development Certification',
    issuer: 'Thought Process LLP',
    year: '2024',
    category: 'Web Architecture',
    description: 'Comprehensive 90-day mastery of Flask, SQL, REST APIs, HTML/CSS/JS, and full-stack software deployment.',
  },
  {
    title: '90-Day AI Readiness & Software Engineering',
    issuer: 'Thought Process LLP Program',
    year: '2024',
    category: 'AI & Systems',
    description: 'Hands-on practical training covering modern AI paradigms, web architecture, and production readiness.',
  },
];

export const LEADERSHIP_AND_ACTIVITIES = [
  {
    role: 'NSS Coordinator',
    organization: 'Mysuru Royal Institute of Technology',
    iconName: 'ShieldCheck',
    description:
      'Coordinated National Service Scheme (NSS) social awareness initiatives, blood donation drives, campus greening projects, and student volunteering committees.',
  },
  {
    role: 'IEEE Student Member',
    organization: 'IEEE Student Branch',
    iconName: 'Award',
    description:
      'Engaged member participating in technical workshops, emerging technology webinars, and coding competitions.',
  },
  {
    role: 'Creative Arts & Cultural Interests',
    organization: 'Extracurricular Pursuits',
    iconName: 'Sparkles',
    description:
      'Passionate about Dancing, Traveling, and Music—bringing creativity, rhythm, discipline, and open-minded perspectives to technical team environments.',
  },
];
